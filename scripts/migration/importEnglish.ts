/**
 * Übernimmt die bestehenden englischen Inhalte von doc.smart-me.com nach
 * i18n/en/docusaurus-plugin-content-docs/current/.
 *
 *   npx tsx scripts/migration/importEnglish.ts
 *
 * Die englischen Seiten behalten die **deutschen** Slugs und Dateipfade – nur so
 * führt das Locale-Dropdown von einer Seite zur selben Seite in der anderen
 * Sprache. Die alten englischen URLs werden über redirects.ts abgedeckt.
 *
 * Seiten ohne englische Entsprechung bleiben leer; sie füllt die
 * Übersetzungs-Pipeline (scripts/translate.ts).
 */
import {mkdir, readFile, writeFile, rm} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {pathToFileURL} from 'node:url';
import * as cheerio from 'cheerio';
import {loadManifest, cachePath, type Manifest} from './crawl';
import {collectAnchors, convertPage} from './convert';
import {buildPathMapping, crossSiteMap, EN_HOST, EN_HOSTS} from './mapping';
import {hashOf, loadState, saveState} from '../translate';

const EN_ORIGIN = `https://${EN_HOST}`;
export const EN_DOCS_ROOT = 'i18n/en/docusaurus-plugin-content-docs/current';

type DeResult = {
  pages: {path: string; title: string; file: string; id: string}[];
};

export type EnglishImportResult = {
  imported: {dePath: string; enPath: string; file: string}[];
  orphanEnglish: string[];
  missingEnglish: string[];
  warnings: Record<string, string[]>;
  failures: Record<string, string>;
  /** Paare, die nicht aus dem Sprachumschalter, sondern strukturell entstanden. */
  structural: {dePath: string; enPath: string}[];
  /** Widersprüchliche Sprachumschalter auf der alten Site. */
  conflicts: {dePath: string; fromDe: string; fromEn: string}[];
};

export async function importEnglish(): Promise<EnglishImportResult> {
  const de: DeResult = JSON.parse(await readFile('.migration-cache/de-result.json', 'utf8'));
  const manifest: Manifest = await loadManifest(EN_HOST);
  const mapping = await buildPathMapping();
  const crossSite = crossSiteMap(mapping, 'en');

  const deByPath = new Map(de.pages.map((p) => [p.path, p]));
  const enPaths = Object.keys(manifest.pages);

  // Nur Seiten übernehmen, für die es eine deutsche Masterseite gibt.
  const pairs = enPaths
    .map((enPath) => ({enPath, dePath: mapping.enToDe.get(enPath)}))
    .filter((p): p is {enPath: string; dePath: string} => Boolean(p.dePath && deByPath.has(p.dePath!)));

  // Anker aller englischen Seiten – für Sprungmarken zwischen Seiten.
  const htmlByPath = new Map<string, string>();
  const anchorsByPath = new Map<string, Map<string, string | null>>();
  for (const {enPath} of pairs) {
    const html = await readFile(cachePath(EN_HOST, enPath), 'utf8');
    htmlByPath.set(enPath, html);
    anchorsByPath.set(enPath, collectAnchors(html));
  }

  // Links auf englischen Seiten zeigen auf englische Pfade – auf der neuen Site
  // gilt aber der deutsche Slug.
  const resolveLink = (enPath: string): string | null => {
    if (enPath === '/' || enPath === '/home') return '/';
    const dePath = mapping.enToDe.get(enPath);
    if (!dePath) return null;
    return dePath === '/home' ? '/' : dePath;
  };
  const resolveAnchor = (enPath: string, id: string) =>
    anchorsByPath.get(enPath === '/' ? '/home' : enPath)?.get(id);

  await rm(EN_DOCS_ROOT, {recursive: true, force: true});

  const imported: EnglishImportResult['imported'] = [];
  const warnings: Record<string, string[]> = {};

  for (const {enPath, dePath} of pairs) {
    const html = htmlByPath.get(enPath)!;
    const dePage = deByPath.get(dePath)!;
    const fallback = cheerio.load(html)('title').text().replace(/\s+/g, ' ').trim() || dePage.title;

    const result = convertPage(html, {
      path: enPath,
      origin: EN_ORIGIN,
      selfHosts: EN_HOSTS,
      crossSite,
      figureWord: 'figure',
      images: manifest.pages[enPath].images,
      resolveLink,
      anchors: anchorsByPath.get(enPath)!,
      resolveAnchor,
      fallbackTitle: fallback,
    });

    if (result.warnings.length) warnings[enPath] = result.warnings;

    // Die Zieldatei spiegelt exakt den Pfad der deutschen Masterseite.
    const relative = dePage.file.replace(/^docs\//, '');
    const file = join(EN_DOCS_ROOT, relative).replace(/\\/g, '/');
    const slug = dePath === '/home' ? '/' : dePath;

    const frontmatter = [
      '---',
      `title: '${result.title.replace(/'/g, "''")}'`,
      `slug: '${slug.replace(/'/g, "''")}'`,
      ...(result.description ? [`description: '${result.description.replace(/'/g, "''")}'`] : []),
      `sidebar_label: '${result.title.replace(/'/g, "''")}'`,
      '---',
      '',
    ].join('\n');

    await mkdir(dirname(file), {recursive: true});
    await writeFile(file, `${frontmatter}${result.markdown}\n`, 'utf8');
    imported.push({dePath, enPath, file});
  }

  // Im Uebersetzungs-Zustand als Bestandsinhalt verbuchen: diese Seiten sind
  // eigenstaendig geschriebene Texte, keine Uebersetzungen. Sie werden erst
  // ueberschrieben, wenn sich die deutsche Masterseite aendert, und von der
  // Strukturpruefung ausgenommen.
  const state = await loadState();
  for (const entry of imported) {
    const sourceFile = deByPath.get(entry.dePath)!.file;
    state.docs[sourceFile] ??= {};
    state.docs[sourceFile].en = {
      hash: hashOf(await readFile(sourceFile, 'utf8')),
      origin: 'adopted',
    };
  }
  await saveState(state);

  const importedDePaths = new Set(imported.map((i) => i.dePath));
  return {
    imported,
    orphanEnglish: enPaths.filter((p) => !mapping.enToDe.has(p)).sort(),
    missingEnglish: de.pages.map((p) => p.path).filter((p) => !importedDePaths.has(p)),
    warnings,
    failures: manifest.failures,
    structural: [...mapping.structural].map(([dePath, enPath]) => ({dePath, enPath})),
    conflicts: mapping.conflicts,
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const result = await importEnglish();
    await writeFile(
      '.migration-cache/en-result.json',
      JSON.stringify(result, null, 2),
      'utf8',
    );
    console.log(
      `${result.imported.length} englische Seiten übernommen, ` +
        `${result.missingEnglish.length} deutsche Seiten ohne EN-Fassung, ` +
        `${result.orphanEnglish.length} englische Seiten ohne DE-Pendant.`,
    );
  })();
}
