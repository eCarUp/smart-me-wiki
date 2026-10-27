/**
 * Die Symbole für die Kacheln auf den Einstiegsseiten.
 *
 * Welches Symbol eine Seite trägt, steht in ihrem eigenen Frontmatter:
 *
 *     symbol: wlan
 *
 * Damit gehört das Symbol zur Seite und nicht zur Einstiegsseite — taucht sie
 * später woanders in Kacheln auf, bringt sie es mit. Eingelesen wird das vom
 * Plugin `smart-me-schrittkette` (siehe `plugins/schrittkette/`), gezeichnet
 * von `<Unterseiten>`.
 *
 * Alle Zeichnungen folgen derselben Bauweise: 24×24, keine Flächen, Striche in
 * `currentColor` mit 1.7 Breite und runden Enden. Dadurch passen sie zusammen,
 * nehmen die Farbe ihrer Umgebung an und funktionieren im Dark Mode ohne
 * Zutun. Ein Name ohne Zeichnung ergibt kein Symbol — die Kachel sieht dann
 * aus wie vorher, statt dass der Bau abbricht.
 *
 * Neues Symbol: hier einen Eintrag ergänzen, in der Zielseite `symbol:`
 * setzen. Mehr ist nicht nötig.
 */
import React from 'react';

/** Die Zeichnungen. Reihenfolge wie auf der Planungsseite. */
const ZEICHNUNGEN: Record<string, React.ReactNode> = {
  /** Zähler: Gehäuse mit Anzeige — für die Messkonzepte. */
  zaehler: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <rect x="6.5" y="8" width="11" height="4.5" rx="0.8" />
      <path d="M7 16h3M13 16h4" />
    </>
  ),

  /** Mehrfamilienhaus mit Sonne: der Zusammenschluss zum Eigenverbrauch. */
  gebaeude: (
    <>
      <rect x="4" y="8" width="11" height="13" rx="1.5" />
      <path d="M7.3 11.8h1.6M11 11.8h1.6M7.3 15.3h1.6M11 15.3h1.6M7.3 18.8h5.3" />
      <circle cx="19" cy="5" r="2.2" />
      <path d="M19 1.3v0.8M19 8.7v-0.8M22.7 5h-0.8M15.3 5h0.8" />
    </>
  ),

  /** Zwei Häuser, gestrichelt verbunden: die virtuelle ZEV. */
  vernetzt: (
    <>
      <path d="M2.5 13.5 6 10.5l3.5 3M3.8 12.4V18.5h4.4v-6.1" />
      <path d="M14.5 13.5 18 10.5l3.5 3M15.8 12.4V18.5h4.4v-6.1" />
      <path d="M8.5 8.5c2.8-3 4.2-3 7 0" strokeDasharray="2 2.2" />
    </>
  ),

  /** Drei Häuser auf einer Linie: die lokale Elektrizitätsgemeinschaft. */
  gemeinschaft: (
    <>
      <path d="M1.5 12.6 4 10.2l2.5 2.4v6h-5z" />
      <path d="M9.5 11 12 8.6l2.5 2.4v8h-5z" />
      <path d="M17.5 12.6 20 10.2l2.5 2.4v6h-5z" />
      <path d="M0.8 21h22.4" />
    </>
  ),

  /** Ladestation mit Blitz und Kabel: die Elektromobilität. */
  ladestation: (
    <>
      <rect x="3.5" y="3" width="11" height="18" rx="2" />
      <path d="m10 7-2.8 4.5h3.6L8 16" />
      <path d="M14.5 9H17a2 2 0 0 1 2 2v5.5a1.6 1.6 0 0 0 3.2 0V10" />
    </>
  ),

  /** Schlüssel: die Cloud-Lizenzen. */
  lizenz: (
    <>
      <circle cx="7.5" cy="12" r="4" />
      <path d="M11.5 12h10M18 12v3.2M21.5 12v2.4" />
    </>
  ),

  /** Taschenrechner: der Investitionsrechner. */
  rechner: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2" />
      <rect x="7.5" y="5.5" width="9" height="3.5" rx="0.7" />
      <path d="M8 12.8h.01M12 12.8h.01M16 12.8h.01M8 17h.01M12 17h.01M16 17h.01" />
    </>
  ),

  /** Schieberegler: der Projektkonfigurator. */
  konfigurator: (
    <>
      <path d="M3 7.5h9M17 7.5h4M3 16.5h4M12 16.5h9" />
      <circle cx="14.5" cy="7.5" r="2.5" />
      <circle cx="9.5" cy="16.5" r="2.5" />
    </>
  ),

  /** Haus ausserhalb der gestrichelten Grenze: der Nicht-Teilnehmer. */
  ausserhalb: (
    <>
      <rect x="2" y="5" width="12" height="14" rx="2" strokeDasharray="3 2.4" />
      <path d="M15 14.5 18 12l3 2.5M16.2 13.6V19h3.6v-5.4" />
    </>
  ),

  /** Batterie mit Blitz: die Notstromlösung. */
  notstrom: (
    <>
      <rect x="2" y="7" width="16.5" height="10" rx="2" />
      <path d="M21 10.5v3" />
      <path d="m12 9.5-2.5 3.2h3L10 16" />
    </>
  ),

  /** Geneigtes Solarfeld: die Produzenten hinter den Häusern. */
  solar: (
    <>
      <path d="M2.5 16.5h19L18.8 7H5.2z" />
      <path d="M7.6 16.5 9.1 7M16.4 16.5 14.9 7M4.3 11.8h15.4" />
      <path d="M2 20.5h20" />
    </>
  ),

  /** Funkwellen: die Internetverbindung. */
  wlan: (
    <>
      <path d="M2.5 9.2a14 14 0 0 1 19 0" />
      <path d="M6 12.8a9 9 0 0 1 12 0" />
      <path d="M9.4 16.3a4.2 4.2 0 0 1 5.2 0" />
      <path d="M12 19.8h.01" />
    </>
  ),

  /** Blatt mit Ast: Minergie. */
  blatt: (
    <>
      <path d="M20.5 3.5c0 9-5.5 13.8-12.2 13.8H5.2C5.2 9.8 10.8 3.5 20.5 3.5Z" />
      <path d="M3.5 20.5c1.6-5 4.6-8.6 9.2-11.2" />
    </>
  ),

  /** Urkunde mit Band: die Zertifizierungen. */
  zertifikat: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.4 13.6 7 21.5l5-2.6 5 2.6-1.4-7.9" />
    </>
  ),

  /** Blatt mit Unterschrift: Vertrag und Rechtliches. */
  vertrag: (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z" />
      <path d="M14 2.5V7.5h5" />
      <path d="M8.3 16.8c1.2-2.2 2.1-2.2 3 0s1.8 1.4 2.4.4" />
    </>
  ),

  /** Blatt mit Zeilen: die Abrechnung. */
  rechnung: (
    <>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z" />
      <path d="M14 2.5V7.5h5" />
      <path d="M8.3 12h7.4M8.3 15.3h7.4M8.3 18.6h4" />
    </>
  ),
};

/** Gibt es zu diesem Namen eine Zeichnung? */
export function kenntSymbol(name: string | undefined): boolean {
  return typeof name === 'string' && name in ZEICHNUNGEN;
}

type Props = {
  /** Name aus dem Frontmatter der Zielseite, etwa `wlan`. */
  name?: string;
  className?: string;
  /** Kantenlänge in Pixeln. */
  groesse?: number;
};

export default function Seitensymbol({
  name,
  className,
  groesse = 28,
}: Props): React.ReactElement | null {
  if (!kenntSymbol(name)) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={groesse}
      height={groesse}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false">
      {ZEICHNUNGEN[name as string]}
    </svg>
  );
}
