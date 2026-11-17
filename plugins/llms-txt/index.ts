/**
 * Erzeugt `llms.txt` und `llms-full.txt` für AI-Werkzeuge.
 *
 * - `llms.txt` ist ein Inhaltsverzeichnis nach dem Vorschlag von llmstxt.org:
 *   nach Bereichen gruppierte Links mit je einem Satz Beschreibung.
 * - `llms-full.txt` enthält den vollständigen Text aller Seiten am Stück, damit
 *   ein Modell das Wiki in einem Zug lesen kann.
 *
 * Beide Dateien entstehen pro Sprache im jeweiligen Build-Ordner, also unter
 * `/llms.txt`, `/en/llms.txt`, `/fr/llms.txt` und `/it/llms.txt`. Gelesen wird
 * dafür der Markdown-Quelltext der jeweiligen Sprache – für Deutsch `docs/`,
 * sonst der zugehörige `i18n/<locale>`-Ordner.
 */
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join, posix, sep} from 'node:path';
import type {LoadContext, Plugin} from '@docusaurus/types';
import matter from 'gray-matter';
import {leseLaender} from '../schrittkette';

type Page = {
  /** Pfad der Quelldatei, relativ zum Wurzelordner der Sprache */
  relativePath: string;
  title: string;
  description?: string;
  slug: string;
  body: string;
  /**
   * Für welche Länder die Seite gilt – leer heisst: für alle.
   *
   * Die Kennzeichnung steht in `sidebars.ts` und nicht im Seitentext (siehe
   * `src/laender`), also muss sie hier dazukommen. Sonst wüsste ein Modell,
   * das nur `llms-full.txt` liest, nicht, dass ZEV schweizerisch und
   * Mieterstrom deutsch ist. Gelesen wird sie mit `leseLaender()` aus
   * `plugins/schrittkette` – nur **in** der Navigation lässt sie sich
   * kennzeichnen, eine Seite ausserhalb gilt zwangsläufig überall.
   */
  laender: string[];
};

async function walk(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (full.endsWith('.md') || full.endsWith('.mdx')) out.push(full);
  }
  return out;
}

/** Wurzelordner der Markdown-Quellen einer Sprache. */
export function docsDirFor(siteDir: string, locale: string, defaultLocale: string): string {
  return locale === defaultLocale
    ? join(siteDir, 'docs')
    : join(siteDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
}

/**
 * Oberster Pfadabschnitt als Bereichsname – das entspricht der Gliederung des
 * Wikis. Seiten direkt im Wurzelordner landen unter "Allgemein".
 */
function sectionOf(relativePath: string): string {
  const [first, ...rest] = relativePath.split('/');
  return rest.length === 0 ? 'Allgemein' : first;
}

/** Die Dokument-ID einer Quelldatei: ihr Pfad ohne Endung, wie in `sidebars.ts`. */
function dokumentId(relativePath: string): string {
  return relativePath.replace(/\.mdx?$/, '');
}

/**
 * Ein Baustein ist eine Datei, deren Name oder Ordner mit `_` beginnt
 * (`_neuigkeiten.md`). Docusaurus macht daraus keine eigene Seite – er wird nur
 * per `import` in andere Seiten eingebunden. Als eigener Eintrag in `llms.txt`
 * zeigte er deshalb auf eine Adresse, die es nicht gibt.
 */
export function istBaustein(relativePath: string): boolean {
  return relativePath.split('/').some((teil) => teil.startsWith('_'));
}

/**
 * Setzt eingebundene Bausteine in den Seitentext ein.
 *
 * Im Quelltext steht nur `import Neuigkeiten from './_neuigkeiten.md';` und
 * später `<Neuigkeiten />`. Ein Modell, das `llms-full.txt` liest, sähe davon
 * nur den Platzhalter – also kommt der Text des Bausteins an dessen Stelle, und
 * die `import`-Zeile fällt weg. Unbekannte Importe bleiben stehen.
 */
export function bausteineEinsetzen(
  body: string,
  relativePath: string,
  bausteine: Map<string, string>,
): string {
  const ordner = relativePath.includes('/') ? relativePath.slice(0, relativePath.lastIndexOf('/')) : '';
  let ergebnis = body;
  const importZeile = /^import\s+(\w+)\s+from\s+['"](\.{1,2}\/[^'"]+\.mdx?)['"];?[ \t]*\r?\n?/gm;
  for (const [zeile, name, pfad] of body.matchAll(importZeile)) {
    const ziel = posix.normalize(posix.join(ordner, pfad));
    const text = bausteine.get(ziel);
    if (text === undefined) continue;
    ergebnis = ergebnis
      .replace(zeile, '')
      .replace(new RegExp(`<${name}\\s*/>`, 'g'), () => text);
  }
  return ergebnis.trim();
}

async function collectPages(
  dir: string,
  masterDir: string,
  laender: Record<string, string[]>,
): Promise<Page[]> {
  const files = await walk(dir);
  const quellen: {relativePath: string; parsed: matter.GrayMatterFile<string>}[] = [];
  const bausteine = new Map<string, string>();
  for (const file of files) {
    const relativePath = file.slice(dir.length + 1).split(sep).join('/');
    // Eine Übersetzung ohne deutsche Vorlage baut Docusaurus nicht – die
    // Adresse gibt es also nicht. Das kommt vor, wenn eine Seite unter `docs/`
    // gelöscht wird und ihre Übersetzungen liegen bleiben.
    if (!existsSync(join(masterDir, relativePath))) continue;
    const parsed = matter(await readFile(file, 'utf8'));
    if (istBaustein(relativePath)) bausteine.set(relativePath, parsed.content.trim());
    else quellen.push({relativePath, parsed});
  }

  const pages: Page[] = [];
  for (const {relativePath, parsed} of quellen) {
    const data = parsed.data as {title?: string; description?: string; slug?: string};
    pages.push({
      relativePath,
      title: data.title ?? relativePath,
      description: data.description,
      slug: data.slug ?? `/${relativePath.replace(/(?:\/index)?\.mdx?$/, '')}`,
      body: bausteineEinsetzen(parsed.content.trim(), relativePath, bausteine),
      // Die Übersetzungen liegen unter denselben IDs wie das Deutsche.
      laender: laender[dokumentId(relativePath)] ?? [],
    });
  }
  return pages.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

export function renderIndex(opts: {
  title: string;
  tagline: string;
  baseUrl: string;
  pages: Page[];
}): string {
  const lines = [`# ${opts.title}`, '', `> ${opts.tagline}`, ''];

  const bySection = new Map<string, Page[]>();
  for (const page of opts.pages) {
    const section = sectionOf(page.relativePath);
    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section)!.push(page);
  }

  for (const [section, pages] of [...bySection].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`## ${section}`, '');
    for (const page of pages) {
      const url = `${opts.baseUrl.replace(/\/$/, '')}${page.slug === '/' ? '' : page.slug}`;
      lines.push(`- [${page.title}](${url})${page.description ? `: ${page.description}` : ''}`);
    }
    lines.push('');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

export function renderFull(opts: {
  title: string;
  tagline: string;
  baseUrl: string;
  pages: Page[];
}): string {
  const parts = [`# ${opts.title}`, '', `> ${opts.tagline}`, ''];
  for (const page of opts.pages) {
    const url = `${opts.baseUrl.replace(/\/$/, '')}${page.slug === '/' ? '' : page.slug}`;
    parts.push(
      '---',
      '',
      `# ${page.title}`,
      '',
      `Quelle: ${url}`,
      // Nur wo die Seite wirklich auf Länder eingeschränkt ist. Keine Zeile heisst
      // „gilt überall" – das ist der Normalfall und hält die Datei lesbar.
      ...(page.laender.length > 0 ? [`Länder: ${page.laender.join(', ')}`] : []),
      ...(page.description ? ['', page.description] : []),
      '',
      page.body,
      '',
    );
  }
  return `${parts.join('\n').trimEnd()}\n`;
}

export default function llmsTxtPlugin(context: LoadContext): Plugin<unknown> {
  return {
    name: 'smart-me-llms-txt',

    async postBuild({outDir, siteConfig}) {
      const {currentLocale, defaultLocale} = context.i18n;
      const dir = docsDirFor(context.siteDir, currentLocale, defaultLocale);
      // Die Länderkennzeichnung steht in der Navigation, nicht im Seitentext.
      // Gelesen wird sie mit derselben Funktion wie für die Schrittketten: eine
      // Seite kann in zwei Kategorien stehen („Zähler zuweisen" einmal unter der
      // Schweiz, einmal unter Mieterstrom), und dann gilt sie für beide Länder.
      const masterDir = docsDirFor(context.siteDir, defaultLocale, defaultLocale);
      const pages = await collectPages(dir, masterDir, leseLaender());

      if (pages.length === 0) {
        console.warn(`[llms-txt] Keine Inhalte für "${currentLocale}" – Dateien werden übersprungen.`);
        return;
      }

      // Absolute URLs, damit die Datei auch ausserhalb der Site nutzbar ist.
      // `context.baseUrl` enthält die Sprache bereits (`/en/`) – ein eigenes
      // Präfix verdoppelte sie zu `/en/en/` und jeder Link auf `en`/`fr`/`it` lief ins 404.
      const baseUrl = `${siteConfig.url.replace(/\/$/, '')}${context.baseUrl}`;
      const meta = {
        title: siteConfig.title,
        tagline: siteConfig.tagline ?? '',
        baseUrl,
        pages,
      };

      await writeFile(join(outDir, 'llms.txt'), renderIndex(meta), 'utf8');
      await writeFile(join(outDir, 'llms-full.txt'), renderFull(meta), 'utf8');
      console.log(`[llms-txt] ${pages.length} Seiten für "${currentLocale}" geschrieben.`);
    },
  };
}
