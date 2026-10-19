/**
 * Die Länderwahl des Besuchers.
 *
 * Manche Inhalte gelten nur für ein Land — ZEV und VEWA für die Schweiz,
 * Mieterstrom für Deutschland. Wer ein Land wählt, bekommt die Navigation auf
 * die passenden Seiten eingedampft. **Ohne Wahl ist alles sichtbar**: Ein
 * geteilter Link soll auch bei jemandem funktionieren, der noch nie hier war.
 *
 * Woher die Wahl kommt, in dieser Reihenfolge:
 *
 * 1. `?land=de` in der Adresse. Damit lässt sich von aussen auf das Wiki
 *    verweisen und die Navierung gleich mitgeben — etwa aus einem deutschen
 *    Angebot heraus auf die Startseite.
 * 2. Was beim letzten Besuch gewählt wurde (im Browser gespeichert).
 * 3. Nichts — alles sichtbar.
 *
 * Die gespeicherte Wahl ist bewusst nur eine Bequemlichkeit. Sie steht nicht
 * in der Adresse und verändert deshalb nie, was ein verschickter Link zeigt.
 */
import {useEffect, useState} from 'react';
import {translate} from '@docusaurus/Translate';

export type Land = {
  schluessel: string;
  /**
   * Schränkt die Wahl die Navigation ein?
   *
   * „Alle Länder" ist eine getroffene Wahl, die nichts ausblendet. Der
   * Unterschied zu „noch nicht gewählt" ist wichtig: Wer sich einmal
   * entschieden hat, soll auf der Startseite nicht wieder gefragt werden.
   */
  filtert: boolean;
  /**
   * Die Einstiegsseite dieses Landes.
   *
   * Die Startseite ist nur noch die Frage nach dem Land; beantwortet wird sie
   * mit einem Sprung hierhin. „Alle Länder" landet bewusst auf der Schweizer
   * Seite — smart-me ist ein Schweizer Unternehmen, und die Wahl blendet
   * nichts aus, es geht also nichts verloren.
   */
  start: string;
};

/**
 * Reihenfolge wie im Menü und auf der Startseite.
 *
 * Es gibt genau drei Zustände. „Alle Länder" ist der dritte — auf der
 * Startseite heisst derselbe Zustand „Anderes Land", weil dort die Frage
 * lautet, wo man sitzt, und nicht, was angezeigt werden soll. Siehe
 * `landNameWahl()`.
 */
export const LAENDER: readonly Land[] = [
  {schluessel: 'ch', filtert: true, start: '/schweiz'},
  {schluessel: 'de', filtert: true, start: '/deutschland'},
  {schluessel: 'alle', filtert: false, start: '/schweiz'},
];

/**
 * Der Name eines Landes in der Sprache des Besuchers.
 *
 * Bewusst als Fallunterscheidung mit ausgeschriebenen Texten: Docusaurus
 * liest die Vorgabetexte beim `write-translations` direkt aus dem Quelltext
 * und findet nur, was wörtlich dasteht. Eine Schleife über `LAENDER` wäre
 * kürzer, bliebe aber unübersetzt.
 */
export function landName(schluessel: string | null): string {
  switch (schluessel) {
    case 'ch':
      return translate({id: 'land.ch', message: 'Schweiz'});
    case 'de':
      return translate({id: 'land.de', message: 'Deutschland'});
    default:
      return translate({id: 'land.alle', message: 'Alle Länder'});
  }
}

/**
 * Derselbe Zustand, aber so benannt, wie die Startseite fragt.
 *
 * Oben rechts steht „Alle Länder" — dort geht es darum, was angezeigt wird.
 * Auf der Startseite steht „Anderes Land" — dort geht es darum, wo man sitzt.
 * Dahinter steckt beide Male derselbe Schlüssel `alle`.
 */
export function landNameWahl(schluessel: string | null): string {
  if (schluessel === 'alle') {
    return translate({id: 'land.andere', message: 'Anderes Land'});
  }
  return landName(schluessel);
}

/** Name des Suchparameters in der Adresse: `?land=de`. */
export const PARAMETER = 'land';

const SPEICHER = 'smartme-wiki-land';
/** Eigenes Ereignis, damit Menü und Navigation gemeinsam umschalten. */
const WECHSEL = 'smartme-wiki-landwechsel';

const gueltig = (wert: string | null): string | null => {
  // Bis Oktober 2026 hiess „Alle Länder" im Speicher `andere`. Wer damals
  // gewählt hat, behält seine Wahl, statt wieder gefragt zu werden.
  const wert2 = wert === 'andere' ? 'alle' : wert;
  return wert2 && LAENDER.some((l) => l.schluessel === wert2) ? wert2 : null;
};

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

function merken(land: string | null): void {
  try {
    if (land) window.localStorage.setItem(SPEICHER, land);
    else window.localStorage.removeItem(SPEICHER);
  } catch {
    /* siehe oben */
  }
}

/**
 * Das aktuell gewählte Land und ob überhaupt schon nachgesehen wurde.
 *
 * Die Unterscheidung braucht die Startseiten-Karte: Auf dem Server und beim
 * ersten Zeichnen im Browser ist noch nichts bekannt. Würde sie in diesem
 * Moment erscheinen, blitzte sie bei jedem auf, der längst gewählt hat.
 */
export function useLandStatus(): {land: string | null; geladen: boolean} {
  // Beim ersten Zeichnen bewusst `null` – serverseitig gibt es weder Adresse
  // noch Speicher. Würde hier schon gefiltert, passte das erzeugte HTML nicht
  // zu dem, was React im Browser erwartet.
  const [land, setLand] = useState<string | null>(null);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    const lesen = () => {
      const ausDerAdresse = ausAdresse();
      // Ein Land aus der Adresse wird übernommen, damit es beim Weiterklicken
      // erhalten bleibt – dort steht der Parameter ja nicht mehr.
      if (ausDerAdresse) merken(ausDerAdresse);
      setLand(ausDerAdresse ?? ausSpeicher());
      setGeladen(true);
    };
    lesen();
    window.addEventListener(WECHSEL, lesen);
    return () => window.removeEventListener(WECHSEL, lesen);
  }, []);

  return {land, geladen};
}

/** Das aktuell gewählte Land, oder `null`, solange keines gewählt ist. */
export function useLand(): string | null {
  return useLandStatus().land;
}

/** Wählt ein Land (oder `null` für „alle") und sagt allen Bescheid. */
export function waehleLand(land: string | null): void {
  merken(land);

  // Stünde noch ein `?land=…` in der Adresse, gewänne es beim nächsten Lesen
  // gegen die eben getroffene Wahl. Also raus damit – ohne Seitenwechsel.
  const adresse = new URL(window.location.href);
  if (adresse.searchParams.has(PARAMETER)) {
    adresse.searchParams.delete(PARAMETER);
    window.history.replaceState(null, '', adresse.toString());
  }

  window.dispatchEvent(new Event(WECHSEL));
}

/**
 * Soll ein Eintrag bei dieser Länderwahl sichtbar sein?
 *
 * Ohne Kennzeichnung gilt ein Eintrag überall — das ist der Normalfall und der
 * Grund, warum die gemeinsamen Seiten nie angefasst werden müssen.
 */
export function sichtbar(laender: unknown, land: string | null): boolean {
  if (!land || !Array.isArray(laender) || laender.length === 0) return true;
  // „Alle Länder" blendet nichts aus – wer weder in der Schweiz noch in
  // Deutschland sitzt, soll beide Modellwelten sehen können.
  if (!LAENDER.find((l) => l.schluessel === land)?.filtert) return true;
  return laender.includes(land);
}
