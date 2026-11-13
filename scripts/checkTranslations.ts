/**
 * Prüft die Übersetzungen gegen ihre deutschen Masterseiten.
 *
 *   npm run translate:check
 *
 * Eine Übersetzung darf den Text ändern, nicht aber die Struktur. Verglichen
 * werden deshalb Dinge, die in jeder Sprache gleich bleiben müssen:
 * Überschriftenebenen, Bilder samt Pfad, Linkziele, Code-Blöcke, Video-
 * Einbettungen und der `slug` im Frontmatter.
 *
 * Dazu kommt der umgekehrte Fall: ein **stehengebliebener deutscher Titel**.
 * Seiten ohne Fliesstext – eine Seite, die nur einen Rechner einbettet –
 * kommen aus dem Übersetzungslauf manchmal unverändert zurück, und dann steht
 * in der französischen Navigation „Projektkonfigurator". Siehe `kopfProbleme`.
 *
 * Der Build fängt kaputtes Markdown ohnehin ab. Dieser Test findet die
 * stilleren Fehler: eine abgeschnittene Seite, ein übersetzter Bildpfad, ein
 * verlorener Abschnitt.
 *
 * Übersprungen werden Sprachfassungen, die in .translation-state.json als
 * `adopted` verbucht sind. Das sind die aus dem alten englischen Wiki
 * übernommenen Bestandsinhalte – eigenständig geschriebene Texte, deren
 * Struktur legitim von der deutschen Seite abweicht.
 */
import {readFile, readdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join, sep} from 'node:path';
import {staleVariants, withoutLocaleSuffix} from './localizeImages';
import {pathToFileURL} from 'node:url';
import matter from 'gray-matter';
import {DOCS_ROOT, TARGET_LOCALES, docsRootFor, loadState, type Locale} from './translate';

type Shape = {
  /** Überschriftenebenen in Dokumentreihenfolge, z.B. [2,3,3,2] */
  headings: number[];
  /** Bildpfade in Dokumentreihenfolge */
  images: string[];
  /**
   * Linkziele in Dokumentreihenfolge, jeweils ohne Sprungmarke. Die Anker
   * ändern sich beim Übersetzen zwangsläufig mit dem Überschriftentext –
   * dafür ist scripts/fixAnchors.ts zuständig, nicht diese Prüfung.
   */
  links: string[];
  /** Inhalt der Code-Blöcke */
  codeBlocks: string[];
  /** src-Werte der <Video>-Einbettungen */
  videos: string[];
  slug: string | undefined;
  /** Seitentitel und Beschriftung in der Navigation, für `kopfProbleme`. */
  title: string | undefined;
  sidebarLabel: string | undefined;
};

export function shapeOf(content: string): Shape {
  const parsed = matter(content);
  const body = parsed.content;
  const data = parsed.data as {slug?: string; title?: string; sidebar_label?: string};

  const headings: number[] = [];
  const codeBlocks: string[] = [];
  let fence: string[] | null = null;

  for (const line of body.split('\n')) {
    if (/^\s*```/.test(line)) {
      if (fence) {
        codeBlocks.push(fence.join('\n'));
        fence = null;
      } else {
        fence = [];
      }
      continue;
    }
    if (fence) {
      fence.push(line);
      continue;
    }
    const heading = line.match(/^(#{1,6})\s/);
    if (heading) headings.push(heading[1].length);
  }

  // Bilder vor Links auswerten, sonst zählt ![](…) doppelt.
  const images = [...body.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map((m) => m[1]);
  const links = [...body.matchAll(/(?<!!)\[[^\]]*\]\(([^)\s]+)/g)]
    .map((m) => m[1].split('#')[0])
    .filter(Boolean);
  const videos = [...body.matchAll(/<Video\s[^>]*src="([^"]*)"/g)].map((m) => m[1]);

  return {
    headings,
    images,
    links,
    codeBlocks,
    videos,
    slug: data.slug,
    title: data.title,
    sidebarLabel: data.sidebar_label,
  };
}

/**
 * Wortstämme, an denen ein deutsch gebliebener Titel zu erkennen ist.
 *
 * Ein Titel, der in zwei Sprachen gleich lautet, ist meistens völlig richtig:
 * Askoma, Loxone, Modbus TCP, My Dashboards, Minergie — Eigennamen übersetzt
 * man nicht. Gemeldet wird deshalb nur, was auch **deutsch aussieht**: ein
 * Umlaut oder ein Stamm aus dieser Liste. Das ist bewusst eine Stichprobe und
 * keine Sprachbestimmung — sie kostet nichts und fängt die Fälle, die in
 * diesem Wiki vorkommen (zusammengesetzte Hauptwörter und Tätigkeiten).
 *
 * Trägt ein neuer Eigenname einen dieser Stämme, gehört er in `EIGENNAMEN`.
 */
const DEUTSCHE_STAEMME = [
  'rechner', 'konfigurator', 'anleitung', 'übersicht', 'einstellung', 'abrechnung',
  'messkonzept', 'schritt', 'erstellen', 'definieren', 'zuweisen', 'erfassen',
  'hinterlegen', 'vorbereiten', 'verbindung', 'störung', 'nutzer', 'benutzer',
  'lizenz', 'vertrag', 'wärme', 'wasser', 'strom', 'tarif', 'rechnung', 'ordner',
  'inbetriebnahme', 'planung', 'sicherheit', 'antrag', 'formular', 'kosten',
  'fehler', 'aktion', 'visualisierung', 'hinweis', 'kontakt', 'zähler', 'gerät',
  'löschen', 'ladestation', 'rückgabe', 'frage',
];

/**
 * Titel, die in jeder Sprache gleich lauten, obwohl sie deutsch aussehen.
 * Kleingeschrieben eintragen; verglichen wird der ganze Titel.
 */
const EIGENNAMEN = new Set<string>([
  'zählerfreunde',
]);

const deutschGeblieben = (text: string): boolean => {
  const klein = text.toLowerCase();
  if (EIGENNAMEN.has(klein)) return false;
  if (/[äöüß]/.test(klein)) return true;
  return DEUTSCHE_STAEMME.some((stamm) => klein.includes(stamm));
};

/**
 * Meldet Titel und Navigationsbeschriftung, die wortgleich deutsch geblieben
 * sind. Die Seite sieht dann übersetzt aus, heisst in der Navigation aber
 * weiterhin deutsch — der Fehler, der am längsten unbemerkt bleibt, weil ihn
 * nur sieht, wer die Seitenleiste in der anderen Sprache liest.
 */
function kopfProbleme(de: Shape, other: Shape): string[] {
  const probleme: string[] = [];
  const felder: [string, string | undefined, string | undefined][] = [
    ['title', de.title, other.title],
    ['sidebar_label', de.sidebarLabel, other.sidebarLabel],
  ];
  for (const [name, deutsch, uebersetzt] of felder) {
    if (!deutsch || !uebersetzt) continue;
    if (deutsch !== uebersetzt) continue;
    if (!deutschGeblieben(deutsch)) continue;
    probleme.push(`${name} ist deutsch geblieben: '${deutsch}'`);
  }
  return probleme;
}

export type Finding = {file: string; locale: Locale; problem: string};

function compare(de: Shape, other: Shape): string[] {
  const problems: string[] = [];
  const list = (a: unknown[]) => JSON.stringify(a);

  if (de.slug !== other.slug) {
    problems.push(`slug weicht ab: '${other.slug}' statt '${de.slug}'`);
  }
  if (list(de.headings) !== list(other.headings)) {
    problems.push(
      `Überschriften-Gliederung weicht ab: ${list(other.headings)} statt ${list(de.headings)}`,
    );
  }
  // Sprachvarianten eines Bildes (03.png -> 03_EN.png) sind gewollt und
  // werden von scripts/localizeImages.ts eingesetzt. Fuer den Vergleich zaehlt
  // deshalb das Bild ohne Suffix.
  const bare = (paths: string[]) => list(paths.map(withoutLocaleSuffix));
  if (bare(de.images) !== bare(other.images)) {
    problems.push(`Bildpfade weichen ab: ${list(other.images)} statt ${list(de.images)}`);
  }
  if (list(de.links) !== list(other.links)) {
    const missing = de.links.filter((l) => !other.links.includes(l));
    const added = other.links.filter((l) => !de.links.includes(l));
    problems.push(
      `Linkziele weichen ab` +
        (missing.length ? `, fehlen: ${list(missing)}` : '') +
        (added.length ? `, neu: ${list(added)}` : ''),
    );
  }
  if (list(de.videos) !== list(other.videos)) {
    problems.push(`Video-Einbettungen weichen ab: ${list(other.videos)} statt ${list(de.videos)}`);
  }
  problems.push(...kopfProbleme(de, other));
  if (de.codeBlocks.length !== other.codeBlocks.length) {
    problems.push(
      `${other.codeBlocks.length} Code-Blöcke statt ${de.codeBlocks.length}`,
    );
  } else {
    de.codeBlocks.forEach((block, i) => {
      if (block !== other.codeBlocks[i]) problems.push(`Code-Block ${i + 1} wurde verändert`);
    });
  }
  return problems;
}

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

export async function checkAll(): Promise<{
  findings: Finding[];
  checked: number;
  skipped: number;
}> {
  const sources = (await walk(DOCS_ROOT)).map((p) => p.split(sep).join('/'));
  const state = await loadState();
  const findings: Finding[] = [];
  let checked = 0;
  let skipped = 0;

  for (const source of sources) {
    const de = shapeOf(await readFile(source, 'utf8'));
    const relativePath = source.slice(`${DOCS_ROOT}/`.length);

    for (const locale of TARGET_LOCALES) {
      const target = `${docsRootFor(locale)}/${relativePath}`;
      if (!existsSync(target)) continue;
      if (state.docs[source]?.[locale]?.origin === 'adopted') {
        skipped += 1;
        continue;
      }
      checked += 1;
      let other: Shape;
      try {
        other = shapeOf(await readFile(target, 'utf8'));
      } catch (err) {
        findings.push({file: target, locale, problem: `unlesbar: ${(err as Error).message}`});
        continue;
      }
      for (const problem of compare(de, other)) findings.push({file: target, locale, problem});
    }
  }
  return {findings, checked, skipped};
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const {findings, checked, skipped} = await checkAll();
    const files = new Set(findings.map((f) => f.file));
    for (const finding of findings) {
      console.log(`  [${finding.locale}] ${finding.file}\n      ${finding.problem}`);
    }
    console.log(
      `\n${checked} Übersetzungen geprüft, ` +
        `${files.size} mit Abweichungen (${findings.length} Befunde). ` +
        `${skipped} Bestandsinhalte übersprungen.`,
    );

    // Hinweis, kein Befund: Eine veraltete Bildvariante macht die Seite nicht
    // kaputt, sie zeigt nur einen alten Stand. Der Prüflauf schlägt deshalb
    // nicht fehl, meldet es aber.
    const stale = await staleVariants();
    for (const item of stale) {
      console.log(`  veraltete Bildvariante: ${item.variant} (Original ${item.original} ist neuer)`);
    }
    if (stale.length > 0) {
      console.log(`${stale.length} Sprachvarianten sind älter als ihr deutsches Original.`);
    }
    process.exitCode = findings.length > 0 ? 1 : 0;
  })();
}
