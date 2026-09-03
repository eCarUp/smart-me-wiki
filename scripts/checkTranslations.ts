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
};

export function shapeOf(content: string): Shape {
  const parsed = matter(content);
  const body = parsed.content;
  const data = parsed.data as {slug?: string};

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

  return {headings, images, links, codeBlocks, videos, slug: data.slug};
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
  if (list(de.images) !== list(other.images)) {
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
    process.exitCode = findings.length > 0 ? 1 : 0;
  })();
}
