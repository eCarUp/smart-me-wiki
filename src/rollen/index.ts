/**
 * Die Rollenwahl des Besuchers.
 *
 * Das Wiki bedient vier sehr verschiedene Leser. Der Installateur baut die
 * Anlage, der Abrechnungsdienstleister rechnet sie ab, die Verwaltung pflegt
 * Mieter und Tarife, der Mieter liest nur seine App-Anleitung. Wer eine Rolle
 * wählt, bekommt die Navigation auf das eingedampft, was für ihn gilt.
 *
 * **Die vier Rollen sind Stufen, keine Kästchen.** Sie schachteln ineinander:
 * Was der Mieter sieht, sieht die Verwaltung auch; was die Verwaltung sieht,
 * sieht der Abrechnungsdienstleister auch; der Installateur sieht alles.
 * Deshalb trägt eine Seite in `sidebars.ts` genau eine Angabe — die niedrigste
 * Rolle, die sie sehen darf — und nicht eine Liste von Rollen:
 *
 *     {type: 'doc', id: 'konfiguration/benutzerkonfiguration',
 *      customProps: {rolle: 'verwalter'}}
 *
 * Das ist der Unterschied zur Länderwahl nebenan: Ein Land ist eine Menge
 * (`['ch', 'de']`), eine Rolle eine Schwelle.
 *
 * **Ohne Angabe gehört eine Seite dem Installateur.** Das ist hier genau
 * andersherum als bei den Ländern, und zwar mit Absicht: Die grosse Mehrheit
 * der Seiten — Hardware, Planung, Inbetriebnahme, Schnittstellen, Störungen —
 * ist Installationswissen. Müsste man die alle kennzeichnen, wären es über
 * hundert Einträge; so sind es die knapp fünfzig der unteren Stufen. Eine neu
 * angelegte Seite landet damit beim Installateur, bis jemand sie bewusst
 * weiter öffnet.
 *
 * Damit das in grossen Kategorien nicht ausartet, **vererbt sich die Angabe
 * nach unten**: Steht sie am Oberpunkt, gilt sie für alles darin (siehe
 * `src/theme/DocSidebarItem`). Ein Untereintrag mit eigener Angabe sticht die
 * geerbte — so steht an „Rechnungsstellung Schweiz" einmal `verwalter`, und
 * die sechs Einrichtungsseiten darin tragen zusätzlich `abrechnung`.
 *
 * Woher die Wahl kommt, in dieser Reihenfolge:
 *
 * 1. `?rolle=verwalter` in der Adresse. Damit lässt sich von aussen ins Wiki
 *    verweisen und die Sicht gleich mitgeben — etwa aus einer Mail an eine
 *    Verwaltung heraus.
 * 2. Was beim letzten Besuch gewählt wurde (im Browser gespeichert).
 * 3. Nichts — dann gilt der Installateur, und es ist alles sichtbar.
 *
 * Die gespeicherte Wahl ist wie bei den Ländern nur eine Bequemlichkeit: Sie
 * steht nicht in der Adresse und verändert nie den Inhalt, den ein
 * verschickter Link zeigt — wohl aber, was die Navigation daneben auflistet.
 */
import {useEffect, useState} from 'react';
import {translate} from '@docusaurus/Translate';

export type Rolle = {
  schluessel: string;
  /**
   * Je höher die Stufe, desto mehr sieht die Rolle. Eine Seite ist sichtbar,
   * sobald die Stufe des Lesers die der Seite erreicht.
   */
  stufe: number;
};

/**
 * Reihenfolge wie im Menü: vom grössten Umfang zum kleinsten.
 *
 * Der Installateur steht oben, weil er die Voreinstellung ist — wer nichts
 * wählt, soll den Haken bei dem Eintrag finden, den er ohnehin sieht.
 */
export const ROLLEN: readonly Rolle[] = [
  {schluessel: 'installateur', stufe: 4},
  {schluessel: 'abrechnung', stufe: 3},
  {schluessel: 'verwalter', stufe: 2},
  {schluessel: 'mieter', stufe: 1},
];

/** Ohne Wahl und ohne Kennzeichnung gilt diese Rolle. */
export const VORGABE = 'installateur';

const STUFE_VORGABE = 4;

/**
 * Der Name einer Rolle in der Sprache des Besuchers.
 *
 * Bewusst als Fallunterscheidung mit ausgeschriebenen Texten, genau wie
 * `landName()`: Docusaurus liest die Vorgabetexte beim `write-translations`
 * direkt aus dem Quelltext und findet nur, was wörtlich dasteht.
 */
export function rollenName(schluessel: string | null): string {
  switch (schluessel) {
    case 'abrechnung':
      return translate({id: 'rolle.abrechnung', message: 'Abrechnungsdienstleister'});
    case 'verwalter':
      return translate({id: 'rolle.verwalter', message: 'Verwalter'});
    case 'mieter':
      return translate({id: 'rolle.mieter', message: 'Mieter'});
    default:
      return translate({id: 'rolle.installateur', message: 'Installateur'});
  }
}

/** Name des Suchparameters in der Adresse: `?rolle=verwalter`. */
export const PARAMETER = 'rolle';

const SPEICHER = 'smartme-wiki-rolle';
/** Eigenes Ereignis, damit Menü und Navigation gemeinsam umschalten. */
const WECHSEL = 'smartme-wiki-rollenwechsel';

const gueltig = (wert: string | null): string | null =>
  wert && ROLLEN.some((r) => r.schluessel === wert) ? wert : null;

function ausAdresse(): string | null {
  return gueltig(new URLSearchParams(window.location.search).get(PARAMETER));
}

function ausSpeicher(): string | null {
  try {
    return gueltig(window.localStorage.getItem(SPEICHER));
  } catch {
    // Privates Fenster oder gesperrter Speicher: dann eben ohne Gedächtnis.
    return null;
  }
}

function merken(rolle: string | null): void {
  try {
    if (rolle) window.localStorage.setItem(SPEICHER, rolle);
    else window.localStorage.removeItem(SPEICHER);
  } catch {
    /* siehe oben */
  }
}

/** Die Stufe einer Rolle; Unbekanntes und `null` zählen als Installateur. */
export function stufeVon(schluessel: unknown): number {
  const gefunden =
    typeof schluessel === 'string'
      ? ROLLEN.find((r) => r.schluessel === schluessel)
      : undefined;
  return gefunden?.stufe ?? STUFE_VORGABE;
}

/**
 * Die gewählte Rolle und ob überhaupt schon nachgesehen wurde.
 *
 * Wie bei der Länderwahl: Auf dem Server und beim ersten Zeichnen im Browser
 * ist noch nichts bekannt, und `null` heisst dort „Installateur" — also alles
 * sichtbar. So steht im ausgelieferten HTML die vollständige Navigation, und
 * erst im Browser wird eingedampft.
 */
export function useRolleStatus(): {rolle: string | null; geladen: boolean} {
  const [rolle, setRolle] = useState<string | null>(null);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    const lesen = () => {
      const ausDerAdresse = ausAdresse();
      // Eine Rolle aus der Adresse wird übernommen, damit sie beim
      // Weiterklicken erhalten bleibt – dort steht der Parameter ja nicht mehr.
      if (ausDerAdresse) merken(ausDerAdresse);
      setRolle(ausDerAdresse ?? ausSpeicher());
      setGeladen(true);
    };
    lesen();
    window.addEventListener(WECHSEL, lesen);
    return () => window.removeEventListener(WECHSEL, lesen);
  }, []);

  return {rolle, geladen};
}

/** Die gewählte Rolle, oder `null`, solange keine gewählt ist. */
export function useRolle(): string | null {
  return useRolleStatus().rolle;
}

/** Wählt eine Rolle und sagt allen Bescheid. */
export function waehleRolle(rolle: string | null): void {
  merken(rolle);

  // Stünde noch ein `?rolle=…` in der Adresse, gewänne es beim nächsten Lesen
  // gegen die eben getroffene Wahl. Also raus damit – ohne Seitenwechsel.
  const adresse = new URL(window.location.href);
  if (adresse.searchParams.has(PARAMETER)) {
    adresse.searchParams.delete(PARAMETER);
    window.history.replaceState(null, '', adresse.toString());
  }

  window.dispatchEvent(new Event(WECHSEL));
}

/**
 * Soll ein Eintrag bei dieser Rollenwahl sichtbar sein?
 *
 * `noetig` ist die niedrigste Rolle, die den Eintrag sehen darf — entweder
 * seine eigene Angabe oder die vom Oberpunkt geerbte. Ohne beides gilt der
 * Installateur, siehe oben.
 */
export function sichtbar(noetig: unknown, gewaehlt: string | null): boolean {
  return stufeVon(gewaehlt) >= stufeVon(noetig);
}
