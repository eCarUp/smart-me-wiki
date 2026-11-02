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
import {join, sep} from 'node:path';
import type {LoadContext, Plugin} from '@docusaurus/types';
import matter from 'gray-matter';

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
   * Mieterstrom deutsch ist.
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

/** Ein Eintrag der Navigation, so weit wir ihn hier anfassen. */
type Eintrag =
  | string
  | {
      type?: string;
      id?: string;
      link?: {type?: string; id?: string};
      items?: Eintrag[];
      customProps?: {laender?: unknown};
    };

const alsLaender = (wert: unknown): string[] | null =>
  Array.isArray(wert) && wert.length > 0 ? wert.map(String) : null;

/**
 * Welche Länderkennzeichnung für jede Seite der Navigation gilt, als
 * `Dokument-ID -> Länder`.
 *
 * Gekennzeichnet wird in `sidebars.ts`, und zwar an Seiten **und** an ganzen
 * Kategorien. Eine ausgeblendete Kategorie nimmt ihren Inhalt mit – in der
 * Navigation sieht man einen Eintrag nur, wenn er selbst **und** jeder
 * Elternteil zur Wahl passen. Darum wird hier nach unten durchgereicht und
 * geschnitten; eine Seite kann nie mehr Länder haben als ihre Kategorie.
 *
 * Ohne Kennzeichnung bleibt die Menge leer, und leer heisst „für alle Länder".
 * Das ist der Normalfall: so müssen die gut hundert gemeinsamen Seiten nie
 * angefasst werden.
 */
export function laenderJeSeite(
  eintraege: readonly Eintrag[],
  geerbt: string[] | null = null,
  nach: Map<string, string[]> = new Map(),
): Map<string, string[]> {
  for (const eintrag of eintraege) {
    if (typeof eintrag === 'string') {
      nach.set(eintrag, geerbt ?? []);
      continue;
    }

    const eigene = alsLaender(eintrag.customProps?.laender);
    let gueltig = eigene ?? geerbt;
    if (eigene && geerbt) {
      const beides = eigene.filter((l) => geerbt.includes(l));
      // Widersprechen sich Seite und Kategorie (eine deutsche Seite in einer
      // schweizerischen Kategorie), bliebe nichts übrig – und „nichts" heisst
      // hier „überall". Dann zählt die Angabe an der Seite, die genauere.
      gueltig = beides.length > 0 ? beides : eigene;
    }

    if (eintrag.id) nach.set(eintrag.id, gueltig ?? []);
    // Die Seite hinter einer Kategorie ist selbst ein Dokument und erbt mit.
    if (eintrag.link?.id) nach.set(eintrag.link.id, gueltig ?? []);
    if (eintrag.items) laenderJeSeite(eintrag.items, gueltig, nach);
  }
  return nach;
}

/** Die Dokument-ID einer Quelldatei: ihr Pfad ohne Endung, wie in `sidebars.ts`. */
function dokumentId(relativePath: string): string {
  return relativePath.replace(/\.mdx?$/, '');
}

async function collectPages(dir: string, laender: Map<string, string[]>): Promise<Page[]> {
  const files = await walk(dir);
  const pages: Page[] = [];
  for (const file of files) {
    const parsed = matter(await readFile(file, 'utf8'));
    const data = parsed.data as {title?: string; description?: string; slug?: string};
    const relativePath = file.slice(dir.length + 1).split(sep).join('/');
    pages.push({
      relativePath,
      title: data.title ?? relativePath,
      description: data.description,
      slug: data.slug ?? `/${relativePath.replace(/(?:\/index)?\.mdx?$/, '')}`,
      body: parsed.content.trim(),
      // Die Übersetzungen liegen unter denselben IDs wie das Deutsche.
      laender: laender.get(dokumentId(relativePath)) ?? [],
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
      const {default: sidebars} = await import('../../sidebars');
      const laender = laenderJeSeite(Object.values(sidebars).flat() as Eintrag[]);
      const pages = await collectPages(dir, laender);

      if (pages.length === 0) {
        console.warn(`[llms-txt] Keine Inhalte für "${currentLocale}" – Dateien werden übersprungen.`);
        return;
      }

      // Absolute URLs, damit die Datei auch ausserhalb der Site nutzbar ist.
      // `context.baseUrl` enthält die Sprache bereits (`/smart-me-wiki/en/`) – ein eigenes
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
