/**
 * Erzeugt migration-report.md aus den Ergebnissen von convert.ts (Deutsch) und
 * importEnglish.ts (Englisch, falls vorhanden).
 *
 *   npx tsx scripts/migration/report.ts
 */
import {readFile, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {pathToFileURL} from 'node:url';

const DE_RESULT = '.migration-cache/de-result.json';
const EN_RESULT = '.migration-cache/en-result.json';

type DeResult = {
  pages: {path: string; title: string; file: string; id: string}[];
  warnings: Record<string, string[]>;
  englishUrls: Record<string, string>;
  imageCount: number;
  videoCount: number;
  missingImages: number;
  altPlaceholders: number;
  deadSourcePages: Record<string, string>;
};

type EnResult = {
  /** DE-Pfad -> EN-Quell-URL, erfolgreich übernommen */
  imported: {dePath: string; enPath: string; file: string}[];
  /** EN-Seiten ohne deutsches Gegenstück */
  orphanEnglish: string[];
  /** DE-Seiten ohne englische Fassung */
  missingEnglish: string[];
  failures: Record<string, string>;
  structural: {dePath: string; enPath: string}[];
  conflicts: {dePath: string; fromDe: string; fromEn: string}[];
};

function section(title: string, body: string): string {
  return `## ${title}\n\n${body.trim()}\n\n`;
}

function table(headers: string[], rows: string[][]): string {
  if (rows.length === 0) return '_Keine Einträge._';
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((r) => `| ${r.join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

export async function buildReport(): Promise<string> {
  const de: DeResult = JSON.parse(await readFile(DE_RESULT, 'utf8'));
  const en: EnResult | null = existsSync(EN_RESULT)
    ? JSON.parse(await readFile(EN_RESULT, 'utf8'))
    : null;

  const warnEntries = Object.entries(de.warnings);
  const byKind = (pattern: RegExp) =>
    warnEntries.flatMap(([path, list]) =>
      list.filter((w) => pattern.test(w)).map((w) => [path, w] as const),
    );

  const multiH1 = byKind(/H1-Überschriften gefunden/);
  const noH1 = byKind(/Keine H1 gefunden/);
  const noDescription = byKind(/Keine Beschreibung ableitbar/);
  const badLinks = byKind(/zeigt auf keine/);
  const badImages = byKind(/konnte nicht geladen werden/);

  let md = '';
  md += `# Migrationsbericht\n\n`;
  md += `Migration des smart-me Support-Wikis von Google Sites nach Docusaurus.\n`;
  md += `Erzeugt von \`scripts/migration/\` – erneut erzeugbar mit\n`;
  md += `\`npx tsx scripts/migration/crawl.ts\`, \`convert.ts\` und \`report.ts\`.\n\n`;
  md += `Quelle Deutsch (Master): <https://dok.smart-me.com/>\n`;
  md += `Quelle Englisch: <https://doc.smart-me.com/>\n\n`;

  // --- Statistik ----------------------------------------------------------
  const stats: string[][] = [
    ['Migrierte Seiten (Deutsch)', String(de.pages.length)],
    ['Heruntergeladene Bilder', String(de.imageCount)],
    ['Eingebettete Videos', String(de.videoCount)],
    ['Nicht ladbare Bilder', String(de.missingImages)],
    ['Bilder mit Alt-Text-Platzhalter', String(de.altPlaceholders)],
    ['Seiten mit Hinweisen', String(warnEntries.length)],
  ];
  if (en) {
    stats.push(
      ['Übernommene englische Seiten', String(en.imported.length)],
      ['Deutsche Seiten ohne EN-Fassung', String(en.missingEnglish.length)],
      ['Englische Seiten ohne DE-Pendant', String(en.orphanEnglish.length)],
    );
  }
  md += section('Statistik', table(['Kennzahl', 'Wert'], stats));

  // --- Seitenliste --------------------------------------------------------
  md += section(
    'Migrierte Seiten',
    `${de.pages.length} Seiten. Die alten Pfade wurden 1:1 als Slug übernommen –\n` +
      `bestehende Links auf \`dok.smart-me.com/<pfad>\` funktionieren nach dem\n` +
      `Umzug der Domain unverändert. Einzige Ausnahme: \`/home\` liegt neu auf \`/\`.\n\n` +
      table(
        ['Quell-URL', 'Neuer Pfad', 'Datei'],
        de.pages.map((p) => [
          `https://dok.smart-me.com${p.path}`,
          p.path === '/home' ? '/' : p.path,
          `\`${p.file}\``,
        ]),
      ),
  );

  // --- Manuell prüfen -----------------------------------------------------
  let manual = '';

  manual += `### Alt-Texte für Bilder\n\n`;
  manual += `Google Sites hat zu **keinem** der ${de.imageCount} Bilder einen Alt-Text\n`;
  manual += `gespeichert. Statt Beschreibungen zu erfinden, tragen alle Bilder einen\n`;
  manual += `sachlichen Platzhalter der Form \`<Seitentitel> – Abbildung <n>\`.\n`;
  manual += `Für Barrierefreiheit und AI-Nutzung sollten sie nach und nach durch echte\n`;
  manual += `Beschreibungen ersetzt werden.\n\n`;

  if (Object.keys(de.deadSourcePages).length > 0) {
    manual += `### Tote Links im Original\n\n`;
    manual += `Diese Seiten sind auf der alten Site verlinkt, aber nicht abrufbar. Sie\n`;
    manual += `wurden **nicht** migriert; die Links zeigen weiterhin auf die alte Domain.\n\n`;
    manual += `${table(
      ['Verlinkter Pfad', 'Fehler'],
      Object.entries(de.deadSourcePages).map(([p, e]) => [`\`${p}\``, e]),
    )}\n\n`;
  }

  if (badLinks.length > 0) {
    manual += `### Interne Links ohne Ziel\n\n`;
    manual += `${table(
      ['Seite', 'Hinweis'],
      badLinks.map(([p, w]) => [`\`${p}\``, w]),
    )}\n\n`;
  }

  if (badImages.length > 0) {
    manual += `### Bilder ohne Download\n\n`;
    manual += `${table(
      ['Seite', 'Hinweis'],
      badImages.map(([p, w]) => [`\`${p}\``, w]),
    )}\n\n`;
  }

  if (multiH1.length > 0) {
    manual += `### Mehrere H1 pro Seite\n\n`;
    manual += `Google Sites erlaubt mehrere H1 auf einer Seite. Übernommen wurde: die\n`;
    manual += `erste H1 ist der Seitentitel, alle weiteren wurden zu H2 herabgestuft.\n`;
    manual += `Bei diesen Seiten lohnt ein Blick, ob die Gliederung so gemeint ist.\n\n`;
    manual += `${table(
      ['Seite', 'Anzahl H1'],
      multiH1.map(([p, w]) => [`\`${p}\``, (w.match(/^(\d+)/)?.[1] ?? '?')]),
    )}\n\n`;
  }

  if (noH1.length > 0) {
    manual += `### Seiten ohne H1\n\n`;
    manual += `Der Titel stammt hier aus der alten Navigation bzw. dem \`<title>\`-Tag.\n\n`;
    manual += `${table(['Seite'], noH1.map(([p]) => [`\`${p}\``]))}\n\n`;
  }

  if (noDescription.length > 0) {
    manual += `### Seiten ohne \`description\`\n\n`;
    manual += `Diese Seiten haben zu wenig Fliesstext, um daraus einen Beschreibungssatz\n`;
    manual += `abzuleiten (meist reine Einbettungen oder Verweisseiten).\n\n`;
    manual += `${table(['Seite'], noDescription.map(([p]) => [`\`${p}\``]))}\n\n`;
  }

  if (en) {
    if (en.conflicts.length > 0) {
      manual += `### Widersprüchliche Sprachumschalter im Original\n\n`;
      manual += `Auf diesen Seiten zeigt der \`English\`-Knopf auf eine andere Seite,\n`;
      manual += `als die englische Fassung zurückverweist – auf der alten Site ist also\n`;
      manual += `mindestens einer der beiden Verweise falsch gesetzt. Übernommen wurde\n`;
      manual += `jeweils das Paar, das **beide** Seiten bestätigen.\n\n`;
      manual += `${table(
        ['Deutsche Seite', 'laut DE-Seite', 'laut EN-Seite'],
        en.conflicts.map((c) => [`\`${c.dePath}\``, `\`${c.fromDe}\``, `\`${c.fromEn}\``]),
      )}\n\n`;
    }

    if (en.structural.length > 0) {
      manual += `### Strukturell zugeordnete Sprachpaare\n\n`;
      manual += `Hier fehlt auf beiden alten Seiten der Sprachumschalter. Die Zuordnung\n`;
      manual += `entstand über den übersetzten Verzeichnispfad bei identischem letztem\n`;
      manual += `Pfadsegment. Ein kurzer Blick zur Bestätigung schadet nicht.\n\n`;
      manual += `${table(
        ['Deutsche Seite', 'Englische Seite'],
        en.structural.map((s) => [`\`${s.dePath}\``, `\`${s.enPath}\``]),
      )}\n\n`;
    }

    if (en.missingEnglish.length > 0) {
      manual += `### Deutsche Seiten ohne englische Fassung\n\n`;
      manual += `Diese Seiten füllt die Übersetzungs-Pipeline (Phase 4).\n\n`;
      manual += `${table(['Seite'], en.missingEnglish.map((p) => [`\`${p}\``]))}\n\n`;
    }
    if (en.orphanEnglish.length > 0) {
      manual += `### Englische Seiten ohne deutsches Pendant\n\n`;
      manual += `Inhalte, die es nur auf Englisch gibt. Sie wurden **nicht** übernommen,\n`;
      manual += `weil Deutsch die Master-Sprache ist – wer sie behalten will, muss zuerst\n`;
      manual += `eine deutsche Seite unter \`docs/\` anlegen.\n\n`;
      manual += `${table(['EN-Pfad'], en.orphanEnglish.map((p) => [`\`${p}\``]))}\n\n`;
    }
    if (Object.keys(en.failures).length > 0) {
      manual += `### Nicht abrufbare englische Seiten\n\n`;
      manual += `${table(
        ['Pfad', 'Fehler'],
        Object.entries(en.failures).map(([p, e]) => [`\`${p}\``, e]),
      )}\n\n`;
    }
  }

  md += section('Manuell prüfen', manual);

  // --- Entscheidungen -----------------------------------------------------
  md += section(
    'Bewusste Entscheidungen bei der Konvertierung',
    [
      '- **Google-Sites-Rahmenwerk entfernt**: Navigation, Kopf- und Fusszeile,',
      '  Suchleiste, der seiteninterne Inhaltsverzeichnis-Block sowie der',
      '  `English`-Sprachumschalter. Letzteren ersetzt das Locale-Dropdown.',
      '- **"Zurück zu …"-Schaltflächen entfernt**: reine Navigationshilfen, die',
      '  Docusaurus über Sidebar und Breadcrumbs abbildet. Alle übrigen',
      '  Schaltflächen wurden zu normalen Links.',
      '- **Überschriften normalisiert**: eine H1 pro Seite (der Titel steht im',
      '  Frontmatter und wird von Docusaurus gerendert), weitere H1 wurden zu H2.',
      '- **Code-Blöcke**: Google Sites kennt kein `<pre>`; Code steht dort als Folge',
      '  von Absätzen in `Source Code Pro`. Solche Läufe wurden zu Fenced Code',
      '  Blocks zusammengefasst. Eine Sprache wurde bewusst **nicht** geraten.',
      '- **Videos**: YouTube-`iframe`s wurden zur `<Video>`-Komponente',
      '  (`src/components/Video`), die das Seitenverhältnis hält und',
      '  `youtube-nocookie.com` verwendet.',
      '- **Bilder**: liegen unter `static/img/<seiten-slug>/` und werden über',
      '  `/img/…` referenziert. Die Original-URLs von Google sind kurzlebig',
      '  signiert und wären nach wenigen Minuten tot.',
      '- **Links**: Google-Redirects (`google.com/url?q=…`) wurden aufgelöst,',
      '  interne Links auf die neuen Pfade umgeschrieben, Sprungmarken (`#h.…`)',
      '  auf die von Docusaurus erzeugten Anker – auch über Seitengrenzen hinweg.',
      '- **Tabellen**: im Quell-Wiki gibt es keine einzige HTML-Tabelle, es war',
      '  also nichts zu konvertieren.',
      '- **Sidebar**: Reihenfolge und Beschriftungen stammen aus der Navigation der',
      '  alten Site. Seiten, die dort nicht verlinkt sind, stehen am Ende ihrer',
      '  Gruppe. Die Gruppen `Konfiguration`, `Stoerungsbehebung`, `Schnittstellen`,',
      '  `Nutzeranleitungen`, `Informationssicherheit` und `News` hatten auf Google',
      '  Sites keine eigene Seite (HTTP 404) – sie sind reine Kategorien.',
    ].join('\n'),
  );

  return md.trimEnd() + '\n';
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const md = await buildReport();
    await writeFile('migration-report.md', md, 'utf8');
    console.log(`migration-report.md geschrieben (${md.split('\n').length} Zeilen).`);
  })();
}
