/**
 * Ermittelt, welche englische Seite zu welcher deutschen gehört.
 *
 * Beide alten Sites tragen pro Seite eine Schaltfläche zur jeweils anderen
 * Sprachfassung ("English" bzw. "Deutsch"). Diese Verweise sind die
 * verlässlichste Quelle für die Zuordnung – sie werden aus beiden Richtungen
 * gelesen und zusammengeführt.
 */
import {readFile} from 'node:fs/promises';
import * as cheerio from 'cheerio';
import {cachePath, loadManifest} from './crawl';
import {contentSections, stripChrome} from './googleSites';

export const DE_HOST = 'dok.smart-me.com';
export const EN_HOST = 'doc.smart-me.com';
/** Die deutsche Site ist zusätzlich unter wiki.smart-me.com erreichbar. */
export const DE_HOSTS = [DE_HOST, 'wiki.smart-me.com'];
export const EN_HOSTS = [EN_HOST];

export type PathMapping = {
  /** deutscher Pfad -> englischer Pfad */
  deToEn: Map<string, string>;
  /** englischer Pfad -> deutscher Pfad */
  enToDe: Map<string, string>;
  /** Konflikte: eine Seite verweist auf ein anderes Ziel als die Gegenrichtung. */
  conflicts: {dePath: string; fromDe: string; fromEn: string}[];
  /** Paare, die nicht aus dem Sprachumschalter, sondern strukturell entstanden. */
  structural: Map<string, string>;
};

function toPath(url: string, hosts: string[]): string | null {
  try {
    const parsed = new URL(url);
    if (!hosts.includes(parsed.host)) return null;
    return decodeURI(parsed.pathname).replace(/\/+$/, '') || '/home';
  } catch {
    return null;
  }
}

/** Liest den Sprachumschalter einer gecrawlten Seite aus. */
async function languageLinksOf(host: string, path: string): Promise<Record<string, string>> {
  const html = await readFile(cachePath(host, path), 'utf8');
  const $ = cheerio.load(html);
  const $sections = contentSections($);
  return stripChrome($, $sections).languageLinks;
}

export async function buildPathMapping(): Promise<PathMapping> {
  const deManifest = await loadManifest(DE_HOST);
  const enManifest = await loadManifest(EN_HOST);
  const dePaths = Object.keys(deManifest.pages);
  const enPaths = new Set(Object.keys(enManifest.pages));
  const deSet = new Set(dePaths);

  // Beide Richtungen getrennt einlesen. Einzelne Sprachumschalter der alten Site
  // zeigen nachweislich auf die falsche Seite – deshalb wird keiner Richtung
  // blind vertraut.
  const fromDe = new Map<string, string>();
  for (const dePath of dePaths) {
    const links = await languageLinksOf(DE_HOST, dePath);
    const enPath = links.english ? toPath(links.english, EN_HOSTS) : null;
    if (enPath && enPaths.has(enPath)) fromDe.set(dePath, enPath);
  }

  const fromEn = new Map<string, string>();
  for (const enPath of enPaths) {
    const links = await languageLinksOf(EN_HOST, enPath);
    const dePath = links.deutsch ? toPath(links.deutsch, DE_HOSTS) : null;
    if (dePath && deSet.has(dePath)) fromEn.set(enPath, dePath);
  }

  const conflicts: PathMapping['conflicts'] = [];
  for (const [dePath, enPath] of fromDe) {
    const back = fromEn.get(enPath);
    if (back && back !== dePath) {
      conflicts.push({dePath, fromDe: enPath, fromEn: back});
    }
  }

  // Zuweisung in drei Runden, jeweils streng eins-zu-eins. Ein Paar, das beide
  // Seiten bestätigen, hat Vorrang vor einer einseitigen Angabe.
  const deToEn = new Map<string, string>();
  const takenEn = new Set<string>();
  const assign = (dePath: string, enPath: string) => {
    if (deToEn.has(dePath) || takenEn.has(enPath)) return;
    deToEn.set(dePath, enPath);
    takenEn.add(enPath);
  };

  for (const [dePath, enPath] of fromDe) {
    if (fromEn.get(enPath) === dePath) assign(dePath, enPath);
  }
  for (const [dePath, enPath] of fromDe) assign(dePath, enPath);
  for (const [enPath, dePath] of fromEn) assign(dePath, enPath);

  const structural = matchByStructure(dePaths, [...enPaths], deToEn);
  for (const [dePath, enPath] of structural) assign(dePath, enPath);

  const enToDe = new Map<string, string>();
  for (const [de, en] of deToEn) enToDe.set(en, de);

  return {deToEn, enToDe, conflicts, structural};
}

/**
 * Ergänzt Paare, bei denen auf beiden Seiten der Sprachumschalter fehlt.
 *
 * Aus den bereits bestätigten Paaren wird gelernt, wie die Verzeichnisse
 * übersetzt sind (z.B. `/konfiguration` <-> `/configuration`). Ein zusätzliches
 * Paar wird nur angenommen, wenn der Verzeichnispfad so übersetzbar ist **und**
 * das letzte Pfadsegment identisch ist – etwa `/konfiguration/applab` zu
 * `/configuration/applab`. Alles darüber hinaus wäre geraten und bleibt eine
 * dokumentierte Lücke.
 */
export function matchByStructure(
  dePaths: string[],
  enPaths: string[],
  confirmed: Map<string, string>,
): Map<string, string> {
  const dirname = (p: string) => p.slice(0, p.lastIndexOf('/')) || '/';
  const basename = (p: string) => p.slice(p.lastIndexOf('/') + 1);

  // Verzeichnis-Übersetzungen aus den bestätigten Paaren ableiten.
  const dirVotes = new Map<string, Map<string, number>>();
  for (const [dePath, enPath] of confirmed) {
    const deDir = dirname(dePath);
    const enDir = dirname(enPath);
    if (!dirVotes.has(deDir)) dirVotes.set(deDir, new Map());
    const votes = dirVotes.get(deDir)!;
    votes.set(enDir, (votes.get(enDir) ?? 0) + 1);
  }
  const dirMap = new Map<string, string>();
  for (const [deDir, votes] of dirVotes) {
    const [best] = [...votes.entries()].sort((a, b) => b[1] - a[1]);
    dirMap.set(deDir, best[0]);
  }

  const usedEn = new Set(confirmed.values());
  const enByPath = new Set(enPaths);
  const result = new Map<string, string>();

  for (const dePath of dePaths) {
    if (confirmed.has(dePath)) continue;
    const enDir = dirMap.get(dirname(dePath));
    if (enDir === undefined) continue;
    const candidate = `${enDir === '/' ? '' : enDir}/${basename(dePath)}`;
    if (!enByPath.has(candidate) || usedEn.has(candidate)) continue;
    result.set(dePath, candidate);
    usedEn.add(candidate);
  }
  return result;
}

/**
 * Baut die Tabelle, mit der der Konverter Links auf die jeweils andere
 * Sprachfassung umschreibt. Schlüssel ist `<host><pfad>`.
 *
 * Ein deutscher Text, der auf die englische Fassung einer anderen Seite
 * verweist, soll auf der neuen Site auf diese Seite in der *aktuellen* Sprache
 * zeigen – die Sprachwahl übernimmt das Locale-Dropdown.
 */
export function crossSiteMap(
  mapping: PathMapping,
  direction: 'de' | 'en',
): Map<string, string> {
  const map = new Map<string, string>();
  if (direction === 'de') {
    for (const [enPath, dePath] of mapping.enToDe) {
      for (const host of EN_HOSTS) map.set(`${host}${enPath}`, dePath);
    }
  } else {
    // In den englischen Texten stehende Verweise auf die deutsche Fassung
    // zeigen ebenfalls auf die Seite selbst – die Slugs sind die deutschen.
    for (const [dePath] of mapping.deToEn) {
      for (const host of DE_HOSTS) map.set(`${host}${dePath}`, dePath);
    }
  }
  return map;
}
