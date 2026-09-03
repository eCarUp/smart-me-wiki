/**
 * Biegt Sprungmarken in den Übersetzungen auf die übersetzten Anker um.
 *
 *   npm run translate:anchors
 *
 * Docusaurus bildet den Anker einer Überschrift aus deren Text. Übersetzt man
 * die Überschrift, ändert sich der Anker mit – ein Link wie
 * `[…](/produkte/m-bus-gateway#m-bus-gateway-sirius)` zeigt in der
 * französischen Fassung deshalb ins Leere.
 *
 * Explizite IDs (`## Titel {#feste-id}`) wären die naheliegende Lösung, sind
 * hier aber keine: Docusaurus verarbeitet `.md` als MDX, und dort ist `{…}`
 * ein JavaScript-Ausdruck – der Build bricht ab.
 *
 * Stattdessen wird positionsweise zugeordnet: Die Strukturprüfung
 * (scripts/checkTranslations.ts) garantiert, dass jede Übersetzung dieselbe
 * Überschriftenfolge hat wie ihre deutsche Vorlage. Die n-te Überschrift der
 * deutschen Seite entspricht also der n-ten der übersetzten – und damit lässt
 * sich jeder deutsche Anker auf seinen übersetzten Gegenpart abbilden.
 */
import {readFile, readdir, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join, sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import {DOCS_ROOT, TARGET_LOCALES, docsRootFor, loadState, type Locale} from './translate';

/** Die Anker einer Seite in Dokumentreihenfolge – so wie Docusaurus sie vergibt. */
export function headingSlugs(content: string): string[] {
  const body = matter(content).content;
  const slugger = new GithubSlugger();
  const slugs: string[] = [];
  let inFence = false;

  for (const line of body.split('\n')) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (!heading) continue;
    // Inline-Auszeichnung zählt für den Anker nicht mit.
    const text = heading[1]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .trim();
    slugs.push(slugger.slug(text));
  }
  return slugs;
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

const toPosix = (p: string) => p.split(sep).join('/');

export async function fixAnchors(
  locales: readonly Locale[] = TARGET_LOCALES,
): Promise<{changed: number; unresolved: {file: string; anchor: string}[]}> {
  const sources = (await walk(DOCS_ROOT)).map(toPosix).sort();
  const state = await loadState();

  // slug im Frontmatter -> Pfad relativ zu docs/, damit sich ein Linkziel der
  // Form /produkte/nimbus der zugehörigen Datei zuordnen lässt.
  const pathBySlug = new Map<string, string>();
  const slugsBySource = new Map<string, string[]>();
  for (const source of sources) {
    const content = await readFile(source, 'utf8');
    const slug = (matter(content).data as {slug?: string}).slug;
    const relativePath = source.slice(`${DOCS_ROOT}/`.length);
    if (slug) pathBySlug.set(slug.replace(/\/$/, '') || '/', relativePath);
    slugsBySource.set(relativePath, headingSlugs(content));
  }

  let changed = 0;
  const unresolved: {file: string; anchor: string}[] = [];

  for (const locale of locales) {
    const root = docsRootFor(locale);
    const targets = (await walk(root)).map(toPosix);

    // Anker der übersetzten Seiten, damit Verweise darauf umgebogen werden können.
    const slugsByTarget = new Map<string, string[]>();
    for (const target of targets) {
      slugsByTarget.set(
        target.slice(`${root}/`.length),
        headingSlugs(await readFile(target, 'utf8')),
      );
    }

    for (const target of targets) {
      const self = target.slice(`${root}/`.length);
      if (state.docs[`${DOCS_ROOT}/${self}`]?.[locale]?.origin === 'adopted') continue;
      const original = await readFile(target, 'utf8');

      const updated = original.replace(
        /\]\((\/[^)\s#]*)?#([^)\s]+)\)/g,
        (match, linkPath: string | undefined, anchor: string) => {
          // Ohne Pfad meint der Link eine Stelle auf derselben Seite.
          const relativePath = linkPath
            ? pathBySlug.get(linkPath.replace(/\/$/, '') || '/')
            : self;
          if (!relativePath) return match;

          const deSlugs = slugsBySource.get(relativePath);
          const localeSlugs = slugsByTarget.get(relativePath);
          if (!deSlugs || !localeSlugs) return match;

          // Bereits umgebogen – ein erneuter Lauf lässt die Datei in Ruhe.
          if (localeSlugs.includes(anchor)) return match;

          const index = deSlugs.indexOf(anchor);
          if (index === -1 || index >= localeSlugs.length) {
            // Der Anker gehört zu keiner Überschrift der Zielseite. Das kann an
            // einer alten Sprungmarke aus dem Google-Sites-Wiki liegen – dann
            // ist er schon in der deutschen Fassung tot.
            if (deSlugs.length > 0) unresolved.push({file: target, anchor});
            return match;
          }
          return `](${linkPath ?? ''}#${localeSlugs[index]})`;
        },
      );

      if (updated !== original) {
        await writeFile(target, updated, 'utf8');
        changed += 1;
      }
    }
  }

  return {changed, unresolved};
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const {changed, unresolved} = await fixAnchors();
    for (const item of unresolved) {
      console.log(`  offen: ${item.file} -> #${item.anchor}`);
    }
    console.log(`${changed} Dateien angepasst, ${unresolved.length} Sprungmarken offen.`);
  })();
}
