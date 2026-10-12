/**
 * Setzt in den Übersetzungen sprachspezifische Bilder ein.
 *
 *   npm run translate:images -- --dry-run   # nur anzeigen
 *   npm run translate:images                # anwenden
 *
 * Die Übersetzungs-Pipeline lässt Bildpfade bewusst unangetastet – eine
 * übersetzte Seite zeigt deshalb dieselbe Abbildung wie die deutsche. Bei einem
 * Screenshot mit deutscher Oberfläche oder einer beschrifteten Schemazeichnung
 * ist das unbefriedigend.
 *
 * Konvention: Neben das deutsche Bild wird eine Datei mit Sprachsuffix gelegt.
 *
 *   static/img/konfiguration-ordnerkonfiguration/03.png       deutsch
 *   static/img/konfiguration-ordnerkonfiguration/03_EN.png    englisch
 *   static/img/konfiguration-ordnerkonfiguration/03_FR.png    französisch
 *
 * Die Seite unter `docs/` verweist unverändert auf `03.png`. Dieser Schritt
 * läuft nach dem Übersetzen über die erzeugten Dateien unter `i18n/` und biegt
 * den Pfad um – aber nur dort, wo die Variante wirklich existiert. Fehlt sie,
 * bleibt das deutsche Bild stehen. Es muss also niemand irgendwo eintragen,
 * dass es eine Übersetzung gibt; die Datei im Ordner genügt.
 *
 * Bewusste Festlegungen:
 *
 * - Die Datei **ohne** Suffix ist die deutsche. Ein `_DE` gibt es nicht, sonst
 *   müssten 1688 Dateien umbenannt und 1010 Verweise nachgezogen werden.
 * - Die Variante braucht **dieselbe Dateiendung** wie das Original. Sonst wäre
 *   unklar, was gilt, wenn jemand `03_EN.png` und `03_EN.jpg` ablegt.
 * - Gesucht wird **ohne Rücksicht auf Gross-/Kleinschreibung**, eingesetzt wird
 *   der tatsächliche Dateiname. Unter Windows ist `03_En.png` dasselbe wie
 *   `03_EN.png`, auf dem Linux-Server, der die Seite baut, nicht – ohne diese
 *   Nachsicht funktionierte eine Variante lokal und fehlte in der
 *   Veröffentlichung.
 * - `docs/` wird nie angefasst, ausschliesslich `i18n/`.
 */
import {readFile, readdir, writeFile} from 'node:fs/promises';
import {existsSync, readdirSync, statSync} from 'node:fs';
import {join, sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {TARGET_LOCALES, docsRootFor, type Locale} from './translate';

/** Wurzel der ausgelieferten Dateien: `/img/…` liegt unter `static/img/…`. */
export const STATIC_ROOT = 'static';

/** Markdown-Bild: `![Alt](/img/ordner/03.png)`. Nur `/img/…` ist gemeint. */
const IMAGE_PATTERN = /!\[([^\]]*)\]\((\/img\/[^)\s]+)\)/g;

type Replacement = {file: string; from: string; to: string};
type Stale = {variant: string; original: string; originalNewer: boolean};

const toPosix = (p: string) => p.split(sep).join('/');

async function walk(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

/**
 * Verzeichnisinhalte, einmal gelesen und klein geschrieben als Schlüssel.
 * Bei gut tausend Bildverweisen pro Lauf lohnt sich das: Statt für jeden
 * Verweis im Dateisystem nachzusehen, wird jeder Bildordner einmal gelistet.
 */
class DirectoryIndex {
  private cache = new Map<string, Map<string, string>>();

  /** Tatsächlicher Dateiname zu einem Namen beliebiger Schreibweise, oder undefined. */
  resolve(dir: string, name: string): string | undefined {
    let entries = this.cache.get(dir);
    if (!entries) {
      entries = new Map();
      if (existsSync(dir)) {
        for (const entry of readdirSync(dir)) {
          entries.set(entry.toLowerCase(), entry);
        }
      }
      this.cache.set(dir, entries);
    }
    return entries.get(name.toLowerCase());
  }
}

/**
 * Entfernt ein Sprachsuffix aus einem Bildpfad: `03_EN.png` wird zu `03.png`.
 *
 * Die Strukturprüfung vergleicht die Bildpfade einer Übersetzung mit denen der
 * deutschen Vorlage. Eine eingesetzte Sprachvariante ist gewollt und darf dort
 * nicht als Abweichung erscheinen – verglichen wird deshalb der Pfad ohne
 * Suffix.
 */
export function withoutLocaleSuffix(imagePath: string): string {
  return imagePath.replace(
    new RegExp(`_(${TARGET_LOCALES.join('|')})(\\.[^./]+)$`, 'i'),
    '$2',
  );
}

/** Aus `/img/ordner/03.png` und `en` wird `/img/ordner/03_EN.png` – wenn es die Datei gibt. */
export function variantFor(
  imagePath: string,
  locale: Locale,
  index: DirectoryIndex,
): string | undefined {
  const match = imagePath.match(/^(\/img\/.*\/)([^/]+)\.([^./]+)$/);
  if (!match) return undefined;
  const [, directory, base, extension] = match;

  // Trägt der Pfad schon ein Sprachsuffix, ist nichts zu tun. Damit ist der
  // Lauf mehrfach ausführbar, ohne `03_EN_EN.png` zu erzeugen.
  if (new RegExp(`_(${TARGET_LOCALES.join('|')})$`, 'i').test(base)) return undefined;

  const wanted = `${base}_${locale.toUpperCase()}.${extension}`;
  const onDisk = index.resolve(join(STATIC_ROOT, directory.slice(1)), wanted);
  return onDisk ? `${directory}${onDisk}` : undefined;
}

/**
 * Meldet Sprachvarianten, deren deutsches Original neuer ist.
 *
 * Wird ein Screenshot ersetzt, bleibt die Variante stumm auf dem alten Stand –
 * sichtbar wird das sonst erst, wenn sich jemand beschwert.
 */
export async function staleVariants(): Promise<Stale[]> {
  const out: Stale[] = [];
  const root = join(STATIC_ROOT, 'img');
  if (!existsSync(root)) return out;

  const suffix = new RegExp(`^(.*)_(${TARGET_LOCALES.join('|')})(\\.[^.]+)$`, 'i');
  const stack = [root];
  while (stack.length > 0) {
    const dir = stack.pop() as string;
    for (const entry of await readdir(dir, {withFileTypes: true})) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      const parts = entry.name.match(suffix);
      if (!parts) continue;
      const original = join(dir, `${parts[1]}${parts[3]}`);
      if (!existsSync(original)) continue;
      out.push({
        variant: toPosix(full),
        original: toPosix(original),
        originalNewer: statSync(original).mtimeMs > statSync(full).mtimeMs,
      });
    }
  }
  return out.filter((item) => item.originalNewer);
}

export async function localizeImages(
  locales: readonly Locale[] = TARGET_LOCALES,
  options: {dryRun?: boolean} = {},
): Promise<{changed: number; replacements: Replacement[]}> {
  const index = new DirectoryIndex();
  const replacements: Replacement[] = [];
  let changed = 0;

  for (const locale of locales) {
    for (const target of (await walk(docsRootFor(locale))).map(toPosix)) {
      const original = await readFile(target, 'utf8');

      const updated = original.replace(
        IMAGE_PATTERN,
        (match, alt: string, imagePath: string) => {
          const variant = variantFor(imagePath, locale, index);
          if (!variant) return match;
          replacements.push({file: target, from: imagePath, to: variant});
          return `![${alt}](${variant})`;
        },
      );

      if (updated !== original) {
        if (!options.dryRun) await writeFile(target, updated, 'utf8');
        changed += 1;
      }
    }
  }

  return {changed, replacements};
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const dryRun = process.argv.includes('--dry-run');
    const {changed, replacements} = await localizeImages(TARGET_LOCALES, {dryRun});

    for (const item of replacements) {
      console.log(`  ${item.file}\n      ${item.from}  ->  ${item.to}`);
    }
    console.log(
      `${replacements.length} Bilder in ${changed} Dateien ${dryRun ? 'wären ersetzt worden' : 'ersetzt'}.`,
    );

    const stale = await staleVariants();
    for (const item of stale) {
      console.log(`  veraltet: ${item.variant} (Original ${item.original} ist neuer)`);
    }
    if (stale.length > 0) {
      console.log(`${stale.length} Sprachvarianten sind älter als ihr deutsches Original.`);
    }
  })();
}
