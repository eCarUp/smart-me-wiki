/**
 * Neuimport des deutschen Wikis von dok.smart-me.com – grüne Wiese.
 *
 *   npm run migrate:neu
 *
 * Erzeugt `docs/`, `static/img/`, `static/embeds/`, `sidebars.ts` und
 * `redirects.ts` vollständig neu und leert die Übersetzungen. Danach steht im
 * Repo genau das, was heute auf der deutschen Seite steht – nichts von Hand
 * Nachgetragenes bleibt übrig.
 *
 * Erhalten bleiben trotzdem:
 *
 * - alle Sprachvarianten `*_EN.*`, `*_FR.*`, `*_IT.*` unter `static/img/`.
 *   Sie stammen nicht aus dem Crawl und liessen sich daraus auch nicht wieder
 *   herstellen. Sie werden vor dem Leeren beiseitegelegt und danach
 *   zurückgelegt – aber nur dort, wo es das deutsche Bild noch gibt. Eine
 *   Variante ohne Original wäre eine Leiche, sie wird gemeldet.
 * - `static/img/smartme-logo.png`, das Logo aus der Docusaurus-Konfiguration.
 * - die Höhenangaben der eingebetteten Tabellen (siehe TABELLENHOEHEN unten).
 *
 * Der englische Crawl ist kein Inhaltsimport: `convert.ts` braucht die
 * englische Seitenliste, um die alten englischen Adressen auf die neuen
 * deutschen Slugs weiterzuleiten und Querverweise aufzulösen. Es wird kein
 * Text und kein Bild von dort übernommen.
 */
import {execFileSync} from 'node:child_process';
import {
  cpSync, existsSync, mkdirSync, readdirSync, readFileSync,
  renameSync, rmSync, writeFileSync,
} from 'node:fs';
import {dirname, join, relative, sep} from 'node:path';

type Locale = 'en' | 'fr' | 'it';
const LOCALES: readonly Locale[] = ['en', 'fr', 'it'];
const IMG = join('static', 'img');
const BEISEITE = '.neuimport-varianten';

/**
 * Gemessene Inhaltshöhe der eingebetteten Tabellen in Pixeln.
 *
 * Der Konverter übernimmt aus Google Sites ein Seitenverhältnis. Für eine
 * Tabelle passt das nicht: ihre Zeilen sind immer gleich hoch, egal wie breit
 * das Fenster ist. Die Werte hier stammen aus dem Browser – Tabelle geladen,
 * Höhe des gerenderten Gitters gemessen, Titelleiste und Blattregister dazu,
 * plus 16 Pixel für den waagrechten Rollbalken bei Tabellen, die breiter sind
 * als die Textspalte. Mehr als 720 px bekommt keine: eine längere Tabelle
 * rollt in ihrem Rahmen, statt die Seite zur Wand zu machen.
 *
 * Ändert sich eine Tabelle, muss ihr Wert neu gemessen werden – siehe
 * CONTRIBUTING.md, Abschnitt „Den Rahmen auf die Tabelle einstellen".
 */
const TABELLENHOEHEN: Record<string, number> = {
  '1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI': 655,
  '10sNiDg0g8cwomZ-aEWn7gpCKbZLiay4X1O_fOJmM-QY': 216,
  '12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w': 720,
  '1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY': 245,
  '1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM': 252,
  '1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ': 720,
  '1WURxhIS6zPpfSeOv-tfZqnRQKIBkGNP9x4_n1r5iVds': 493,
  '1b2bYdjBi4iCf7fUxpEPO9e8DNuhtEvA4_wIDKAJsiq0': 720,
  '1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I': 314,
  '1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU': 720,
  '2PACX-1vQwIoMZViXao8dxkIFICgLCZSRrq0y5xWTFc2KwSY-seab4j4GP6asN_YRqtjIKoKanrFOG7bLHoVZi': 636,
  '2PACX-1vR4UWY0pXsfUBgArWNNkGZGvIscStumVrGrU7_h2DGk1YNe_XYOxPLnZoJlARRCO86Fz-aOo0cb0pGh': 719,
  '2PACX-1vSQ2T_oNXpPR0sUnjcsWY-ymK0lgmZxopMCiyV0gQq9rV7fH5oJEYEVx0a4AUHNfunOHC5igswOLVyi': 689,
  '2PACX-1vTJmdsIN6iLOfY_AML4DXbCamh1SwcZohszYBjYiVtusFdlA1zrAnZZu4ZFDsQP5pfZxvfloSHGBjkf': 680,
  '2PACX-1vTS_V0Z-_eYRhsXEj3_EJEfKJUK_UP_ZtCxld8cwubPmkDx3eOCcscx_DfAkDd1ngnfvuES569q42lz': 575,
  '2PACX-1vTmayprR4Vh48nmvnu_ZbxO2BDz8btgHbcJ9pR_-cv_irut8RWRsdGGeIUEGcU8p8qNdzdAKR6xG2kh': 697,
  '2PACX-1vTmxJQ_thhwYfeefD_1PLiscIfGqbt-LrSa8pwwFBKwlmze109NOEt8Eyka2lroJoGS_FRiuGgtiAhh': 631,
};

/** Eingebettete Excel-Dateien aus Drive, ebenfalls gemessen. */
const DRIVE_HOEHEN: Record<string, number> = {
  '1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib': 520,
  '1PVhN_1lLolihf6eNQ_1x7UxZK8cjE_hq': 700,
};

/** Beschriftung der neuen LEG-Kategorie in der Navigation. */
const LEG_LABEL = 'LEG - Lokale Elektrizitätsgemeinschaft';
const LEG_UEBERSETZUNG: Record<Locale, string> = {
  en: 'LEC - Local Electricity Community',
  fr: 'CEL - Communauté électrique locale',
  it: 'CEL - Comunità elettrica locale',
};

const schritt = (text: string) => console.log(`\n=== ${text}`);
const lauf = (...args: string[]) =>
  execFileSync('npx', args, {stdio: 'inherit', shell: process.platform === 'win32'});

function dateien(wurzel: string): string[] {
  if (!existsSync(wurzel)) return [];
  const out: string[] = [];
  for (const e of readdirSync(wurzel, {withFileTypes: true})) {
    const voll = join(wurzel, e.name);
    if (e.isDirectory()) out.push(...dateien(voll));
    else out.push(voll);
  }
  return out;
}

// --- 1. Bewahren, was nicht aus dem Crawl stammt -----------------------------
schritt('Sprachvarianten und Logo beiseitelegen');
rmSync(BEISEITE, {recursive: true, force: true});
const bewahren = dateien(IMG).filter(
  (f) => /_(EN|FR|IT)\.[^.]+$/i.test(f) || f.endsWith(`${sep}smartme-logo.png`) ||
         f.endsWith('/smartme-logo.png'),
);
for (const f of bewahren) {
  const ziel = join(BEISEITE, relative(IMG, f));
  mkdirSync(dirname(ziel), {recursive: true});
  cpSync(f, ziel);
}
console.log(`${bewahren.length} Dateien gesichert.`);

// --- 2. Leeren --------------------------------------------------------------
schritt('Alten Stand entfernen');
for (const p of ['docs', IMG, join('static', 'embeds')]) {
  rmSync(p, {recursive: true, force: true});
  console.log(`  ${p}`);
}
for (const l of LOCALES) {
  const p = join('i18n', l, 'docusaurus-plugin-content-docs', 'current');
  rmSync(p, {recursive: true, force: true});
  mkdirSync(p, {recursive: true});
  console.log(`  ${p}`);
}

// --- 3. Neu einlesen --------------------------------------------------------
schritt('Deutsche Seite einlesen (mit Bildern)');
lauf('tsx', 'scripts/migration/crawl.ts', 'https://dok.smart-me.com', '/home');

schritt('Englische Seitenliste einlesen (nur für die Weiterleitungen, ohne Bilder)');
lauf('tsx', 'scripts/migration/crawl.ts', 'https://doc.smart-me.com', '/home', '--no-images');

schritt('Nach Markdown wandeln');
lauf('tsx', 'scripts/migration/convert.ts');

// --- 4. Bewahrtes zurücklegen ----------------------------------------------
schritt('Sprachvarianten und Logo zurücklegen');
let zurueck = 0;
const verwaist: string[] = [];
for (const f of dateien(BEISEITE)) {
  const rel = relative(BEISEITE, f);
  const ziel = join(IMG, rel);
  const original = ziel.replace(/_(EN|FR|IT)(\.[^.]+)$/i, '$2');
  if (ziel !== original && !existsSync(original)) {
    verwaist.push(rel.split(sep).join('/'));
    continue;
  }
  mkdirSync(dirname(ziel), {recursive: true});
  cpSync(f, ziel);
  zurueck += 1;
}
rmSync(BEISEITE, {recursive: true, force: true});
console.log(`${zurueck} Dateien zurückgelegt.`);
for (const v of verwaist) {
  console.log(`  OHNE ORIGINAL, nicht zurückgelegt: ${v}`);
}

// --- 5. Tabellenhöhen setzen ------------------------------------------------
schritt('Höhe der eingebetteten Tabellen setzen');
const EMBED = /<Embed\s+src="(https:\/\/(?:docs|drive)\.google\.com\/[^"]+)"([^>]*?)\/>/g;
let gesetzt = 0;
const unbekannt = new Set<string>();
for (const datei of dateien('docs').filter((f) => f.endsWith('.md'))) {
  const text = readFileSync(datei, 'utf8');
  const neu = text.replace(EMBED, (treffer: string, url: string, rest: string) => {
    const tabelle = url.match(/\/spreadsheets\/d\/(?:e\/)?([^/]+)\//);
    const drive = url.match(/drive\.google\.com\/file\/d\/([^/]+)\//);
    let hoehe: number | undefined;
    if (tabelle) hoehe = TABELLENHOEHEN[tabelle[1]];
    else if (drive) hoehe = DRIVE_HOEHEN[drive[1]];
    else return treffer; // Videos, PDFs, Rechner: Seitenverhältnis bleibt
    if (hoehe === undefined) {
      if (tabelle) unbekannt.add(`${tabelle[1]}  (${datei})`);
      return treffer;
    }
    const titel = rest.match(/title="([^"]*)"/)?.[1] ?? 'Tabelle';
    gesetzt += 1;
    return `<Embed src="${url}" height="${hoehe}px" title="${titel}" />`;
  });
  if (neu !== text) writeFileSync(datei, neu, 'utf8');
}
console.log(`${gesetzt} Einbettungen auf eine gemessene Höhe gesetzt.`);
for (const u of unbekannt) {
  console.log(`  NEUE TABELLE, Höhe noch ungemessen: ${u}`);
}

// --- 6. Weiterleitungen nachtragen ------------------------------------------
// convert.ts erzeugt redirects.ts neu und kennt dabei nur die alten
// Google-Sites-Adressen. Seiten, die *innerhalb* des Wikis umbenannt wurden,
// muss es nicht wissen – ihre Weiterleitung gehört hierher, sonst ist sie nach
// jedem Neuimport wieder weg.
const NACHTRAEGE: ReadonlyArray<readonly [string, string]> = [
  ['/planung/leg-lokale-energie-gemeinschaft', '/planung/leg-lokale-elektrizitätsgemeinschaft'],
];
schritt('Weiterleitungen umbenannter Seiten nachtragen');
let rd = readFileSync('redirects.ts', 'utf8');
for (const [von, nach] of NACHTRAEGE) {
  if (rd.includes(`'${von}'`)) continue;
  rd = rd.replace(
    "  {from: '/home', to: '/'},\n",
    `  {from: '/home', to: '/'},\n\n  // Innerhalb des Wikis umbenannt\n  {from: '${von}', to: '${nach}'},\n`,
  );
  console.log(`  ${von} -> ${nach}`);
}
writeFileSync('redirects.ts', rd, 'utf8');

// --- 7. Übersetzungen zurücksetzen -----------------------------------------
schritt('Übersetzungsstand zurücksetzen');
writeFileSync('.translation-state.json', '{\n  "docs": {}\n}\n', 'utf8');
for (const l of LOCALES) {
  const p = join('i18n', l, 'docusaurus-plugin-content-docs', 'current.json');
  const d = JSON.parse(readFileSync(p, 'utf8')) as Record<string, unknown>;
  d[`sidebar.wikiSidebar.category.${LEG_LABEL}`] = {
    message: LEG_UEBERSETZUNG[l],
    description: `The label for category '${LEG_LABEL}' in sidebar 'wikiSidebar'`,
  };
  writeFileSync(p, `${JSON.stringify(d, null, 2)}\n`, 'utf8');
}
console.log('.translation-state.json geleert, LEG-Kategorie beschriftet.');

console.log(`
Fertig. Als Nächstes:

  npm run build          prüft alle vier Sprachen
  git add -A && git status
  npm run translate      erzeugt EN/FR/IT neu (151 Seiten x 3, dauert)
`);
