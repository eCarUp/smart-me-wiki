/**
 * Legt eine neue Wiki-Seite aus der Vorlage an.
 *
 *     npm run neue-seite -- konfiguration/neue-seite "Titel der Seite"
 *
 * Daraus wird `docs/konfiguration/neue-seite.md`, mit ausgefülltem Titel,
 * passendem `slug` und `sidebar_label`. Den Rest — Navigation, Bildordner,
 * Schrittkette — macht die Vorlage selbst zum Thema; das Skript sagt am Ende,
 * was noch zu tun ist.
 *
 * Warum überhaupt ein Skript: Docusaurus kennt keine Vorlagen. Eine neue Datei
 * ist eine leere Datei, und was im Frontmatter stehen muss, weiss man erst,
 * wenn man es einmal falsch gemacht hat. Wer auf GitHub arbeitet und das
 * Skript nicht laufen lassen kann, kopiert `vorlagen/seite.md` von Hand —
 * dasselbe Ergebnis, zwei Handgriffe mehr.
 */
import {existsSync} from 'node:fs';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';

const VORLAGE = join('vorlagen', 'seite.md');

async function main(): Promise<void> {
  const [rohPfad, titel] = process.argv.slice(2);

  if (!rohPfad) {
    console.error(`
Aufruf:  npm run neue-seite -- <pfad-unter-docs> ["Titel der Seite"]

Beispiele:
  npm run neue-seite -- konfiguration/neue-seite "Neue Funktion einrichten"
  npm run neue-seite -- produkte/telstar-200a
`.trim());
    process.exitCode = 1;
    return;
  }

  // `docs/` und `.md` darf man mitschreiben oder weglassen.
  const pfad = rohPfad.replace(/^docs\//, '').replace(/\.mdx?$/, '');
  const datei = join('docs', `${pfad}.md`);

  if (existsSync(datei)) {
    console.error(`Es gibt ${datei} schon. Nichts geändert.`);
    process.exitCode = 1;
    return;
  }

  const name = pfad.split('/').pop()!;
  const endgueltigerTitel = titel ?? name.replace(/-/g, ' ');
  // Ein `index` wird in der Adresse weggelassen: docs/a/index.md → /a
  const slug = '/' + (name === 'index' ? dirname(pfad) : pfad);
  // Der Bildordner heisst wie der Pfad, mit Bindestrichen statt Schrägstrichen.
  const bildordner = slug.slice(1).replace(/\//g, '-');

  const vorlage = await readFile(VORLAGE, 'utf8');
  const inhalt = vorlage
    .replace("title: 'Titel der Seite'", `title: '${endgueltigerTitel.replace(/'/g, "''")}'`)
    .replace("slug: '/bereich/neue-seite'", `slug: '${slug}'`)
    // Der Eintrag links ist erst einmal der Titel; kürzen muss ihn, wer die
    // Seite schreibt — das Skript weiss nicht, welches Wort entbehrlich ist.
    .replace("sidebar_label: 'Kurzer Name'", `sidebar_label: '${endgueltigerTitel.replace(/'/g, "''")}'`)
    .replace(/\/img\/bereich-neue-seite\//g, `/img/${bildordner}/`);

  await mkdir(dirname(datei), {recursive: true});
  await writeFile(datei, inhalt, 'utf8');

  console.log(`
Angelegt: ${datei}
Adresse:  ${slug}

Noch zu tun:

1. Titel, Beschreibung und sidebar_label im Frontmatter prüfen.
2. Die Seite in sidebars.ts eintragen, sonst erscheint sie nicht links.
   Kennung: ${pfad}
3. Bilder nach static/img/${bildordner}/ legen.
4. Alles aus der Vorlage löschen, was du nicht brauchst.
`.trimStart());
}

main().catch((fehler) => {
  console.error(fehler);
  process.exitCode = 1;
});
