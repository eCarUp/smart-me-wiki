/**
 * Liest die Schrittkette aus dem Frontmatter und stellt sie der Seite bereit.
 *
 * Jede Anleitungsseite sagt im Frontmatter nur, wohin es *weiter* geht:
 *
 *     naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
 *     optionale_schritte: [konfiguration/billing/vewa-abrechnung]
 *
 * Woher man *kam*, ergibt sich daraus von selbst: Wer mich als nächsten
 * Schritt nennt, ist mein Vorgänger. Dieses Plugin dreht die Kette einmal um
 * und legt beides als globale Daten ab. Dadurch gibt es genau eine Stelle, an
 * der die Reihenfolge gepflegt wird — ein Rückwärtsverweis kann gar nicht erst
 * aus dem Tritt geraten.
 *
 * Zwei Fälle braucht die Umkehrung trotzdem von Hand:
 *
 * - Führen mehrere Seiten auf dieselbe Seite (die drei Liegenschaftsvarianten
 *   enden alle bei den Alarmen), ist „zurück" nicht eindeutig. Die Zielseite
 *   setzt dann `vorheriger_schritt` und entscheidet selbst.
 * - Ein Abstecher (Stromtarife, VEWA) führt wieder dorthin zurück, woher er
 *   kam. Vorgänger und Nachfolger sind dieselbe Seite; die Anzeige blendet den
 *   Rückwärtsverweis dann aus, siehe `src/components/NaechsterSchritt/`.
 *
 * Gelesen wird immer der deutsche Master unter `docs/`. Die Kennungen sind in
 * allen Sprachen dieselben, also gilt die Kette auch für en, fr und it — selbst
 * dann, wenn eine Übersetzung noch fehlt.
 */
import {readdir, readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join, relative, sep} from 'node:path';
import type {LoadContext, Plugin} from '@docusaurus/types';
import matter from 'gray-matter';
import sidebars from '../../sidebars';

export type Schrittkette = {
  /** Kennung der Seite → Kennungen der Folgeseiten */
  naechste: Record<string, string[]>;
  /** Kennung der Seite → Kennungen der optionalen Zwischenschritte */
  optionale: Record<string, string[]>;
  /** Kennung der Seite → Kennung der vorhergehenden Seite */
  vorherige: Record<string, string>;
  /**
   * Kennung der Seite → Länder, für die sie gilt.
   *
   * Gelesen aus `sidebars.ts`, nicht aus dem Frontmatter: Dort steht die
   * Länderzuordnung ohnehin schon, und zwei Stellen würden auseinanderlaufen.
   * Seiten ohne Eintrag gelten überall — das ist der Normalfall.
   */
  laender: Record<string, string[]>;
};

/**
 * Sammelt aus der Navigation, welche Seite für welches Land gilt.
 *
 * Ein Eintrag erbt die Kennzeichnung seiner Kategorie: Steht die ganze
 * Rechnungsstellung auf „nur Deutschland", gilt das auch für die Seiten
 * darin, ohne dass jede einzeln markiert werden muss.
 */
export function leseLaender(): Record<string, string[]> {
  const aus: Record<string, string[]> = {};

  const lauf = (eintraege: unknown, geerbt: string[] | undefined): void => {
    if (!Array.isArray(eintraege)) return;
    for (const e of eintraege) {
      if (typeof e === 'string') {
        if (geerbt) aus[e] = geerbt;
        continue;
      }
      if (!e || typeof e !== 'object') continue;
      const eintrag = e as {
        type?: string;
        id?: string;
        link?: {id?: string};
        items?: unknown;
        customProps?: {laender?: unknown};
      };
      const eigene = eintrag.customProps?.laender;
      const laender = Array.isArray(eigene)
        ? eigene.filter((l): l is string => typeof l === 'string')
        : geerbt;

      const kennung = eintrag.id ?? eintrag.link?.id;
      if (kennung && laender) aus[kennung] = laender;
      if (eintrag.items) lauf(eintrag.items, laender);
    }
  };

  for (const liste of Object.values(sidebars)) lauf(liste, undefined);
  return aus;
}

async function alleDateien(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const aus: string[] = [];
  for (const eintrag of await readdir(dir, {withFileTypes: true})) {
    const voll = join(dir, eintrag.name);
    if (eintrag.isDirectory()) aus.push(...(await alleDateien(voll)));
    else if (voll.endsWith('.md') || voll.endsWith('.mdx')) aus.push(voll);
  }
  return aus;
}

/** Dateipfad → Docusaurus-Kennung, also `docs/a/b.md` → `a/b`. */
function kennungVon(docsDir: string, datei: string): string {
  return relative(docsDir, datei)
    .split(sep)
    .join('/')
    .replace(/\.mdx?$/, '');
}

function alsListe(wert: unknown): string[] {
  if (!Array.isArray(wert)) return [];
  return wert.filter((e): e is string => typeof e === 'string' && e.length > 0);
}

export async function leseKette(docsDir: string): Promise<Schrittkette> {
  const naechste: Record<string, string[]> = {};
  const optionale: Record<string, string[]> = {};
  const gesetzt: Record<string, string> = {};
  const hergeleitet: Record<string, string> = {};

  for (const datei of await alleDateien(docsDir)) {
    const {data} = matter(await readFile(datei, 'utf8'));
    const kennung = kennungVon(docsDir, datei);

    const weiter = alsListe(data.naechste_schritte);
    const nebenbei = alsListe(data.optionale_schritte);
    if (weiter.length > 0) naechste[kennung] = weiter;
    if (nebenbei.length > 0) optionale[kennung] = nebenbei;
    if (typeof data.vorheriger_schritt === 'string' && data.vorheriger_schritt) {
      gesetzt[kennung] = data.vorheriger_schritt;
    }

    // Die Umkehrung. Optionale Abstecher zählen mit: Wer von der Abrechnung
    // zu den Stromtarifen abbiegt, kam von der Abrechnung.
    for (const ziel of [...weiter, ...nebenbei]) {
      // Erster Treffer gewinnt; bei mehreren entscheidet ohnehin
      // `vorheriger_schritt` auf der Zielseite.
      hergeleitet[ziel] ??= kennung;
    }
  }

  return {
    naechste,
    optionale,
    vorherige: {...hergeleitet, ...gesetzt},
    laender: leseLaender(),
  };
}

// Rückgabetyp bewusst `Plugin<unknown>`: So erwartet es die Plugin-Liste in
// docusaurus.config.ts, und `loadContent`/`contentLoaded` sind ohnehin nur
// hier im Haus verdrahtet.
export default function schrittkettePlugin(context: LoadContext): Plugin<unknown> {
  return {
    name: 'smart-me-schrittkette',

    async loadContent() {
      return leseKette(join(context.siteDir, 'docs'));
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content as Schrittkette);
    },

    getPathsToWatch() {
      // `sidebars.ts` gehört dazu: Von dort kommt die Länderzuordnung.
      return [
        join(context.siteDir, 'docs', '**', '*.{md,mdx}'),
        join(context.siteDir, 'sidebars.ts'),
      ];
    },
  };
}
