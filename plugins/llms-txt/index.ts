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

async function collectPages(dir: string): Promise<Page[]> {
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
      const pages = await collectPages(dir);

      if (pages.length === 0) {
        console.warn(`[llms-txt] Keine Inhalte für "${currentLocale}" – Dateien werden übersprungen.`);
        return;
      }

      // Absolute URLs, damit die Datei auch ausserhalb der Site nutzbar ist.
      const localePrefix = currentLocale === defaultLocale ? '' : `${currentLocale}/`;
      const baseUrl = `${siteConfig.url.replace(/\/$/, '')}${siteConfig.baseUrl}${localePrefix}`;
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
