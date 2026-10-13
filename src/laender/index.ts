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

export type Land = {schluessel: string; name: string};

/** Reihenfolge wie im Menü. */
export const LAENDER: readonly Land[] = [
  {schluessel: 'ch', name: 'Schweiz'},
  {schluessel: 'de', name: 'Deutschland'},
];

/** Name des Suchparameters in der Adresse: `?land=de`. */
export const PARAMETER = 'land';

const SPEICHER = 'smartme-wiki-land';
/** Eigenes Ereignis, damit Menü und Navigation gemeinsam umschalten. */
const WECHSEL = 'smartme-wiki-landwechsel';

const gueltig = (wert: string | null): string | null =>
  wert && LAENDER.some((l) => l.schluessel === wert) ? wert : null;

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

/** Das aktuell gewählte Land, oder `null` für „alle". */
export function useLand(): string | null {
  // Beim ersten Zeichnen bewusst `null` – serverseitig gibt es weder Adresse
  // noch Speicher. Würde hier schon gefiltert, passte das erzeugte HTML nicht
  // zu dem, was React im Browser erwartet.
  const [land, setLand] = useState<string | null>(null);

  useEffect(() => {
    const lesen = () => {
      const ausDerAdresse = ausAdresse();
      // Ein Land aus der Adresse wird übernommen, damit es beim Weiterklicken
      // erhalten bleibt – dort steht der Parameter ja nicht mehr.
      if (ausDerAdresse) merken(ausDerAdresse);
      setLand(ausDerAdresse ?? ausSpeicher());
    };
    lesen();
    window.addEventListener(WECHSEL, lesen);
    return () => window.removeEventListener(WECHSEL, lesen);
  }, []);

  return land;
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
  return laender.includes(land);
}
