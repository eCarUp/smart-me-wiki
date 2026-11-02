import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLand} from '@site/src/laender';
import styles from './styles.module.css';

type EmbedProps = {
  /** Vollständige URL oder Pfad der einzubettenden Anwendung. */
  src: string;
  /** Beschriftung für Screenreader – Pflicht, der Rahmen ist sonst namenlos. */
  title: string;
  /**
   * Seitenverhältnis als Breite/Höhe, z.B. `"1.706"`. Stammt aus der alten
   * Site, die es als `padding-top` in Prozent hinterlegt hatte, und hat
   * Vorrang vor `height`.
   */
  aspect?: string;
  /**
   * Feste Höhe als CSS-Wert, wenn kein Seitenverhältnis bekannt ist.
   * Eingebettete Anwendungen können ihre Höhe nicht selbst melden.
   *
   * Eine hier angegebene Höhe gilt **genau so** – die Mindesthöhe aus dem
   * Stylesheet wird ausgeschaltet. Das ist für eingebettete Tabellen nötig:
   * eine Tabelle mit sechs Zeilen braucht keine 520 Pixel, und der leere
   * Rest darunter sieht nach einem Fehler aus.
   */
  height?: string;
  /**
   * Gibt die Länderwahl des Besuchers an die Anwendung weiter.
   *
   * Nur für Anwendungen, die etwas damit anfangen – Billy antwortet je nach
   * Land über ZEV und VEWA oder über Mieterstrom. Ohne Wahl wird `null`
   * gesendet, und das heisst dort wie hier: alle Länder.
   */
  mitLand?: boolean;
};

/**
 * Bettet eine externe Anwendung ein – etwa den smart-me Support-KI-Agenten
 * oder einen der Rechner.
 *
 * Für Videos gibt es `<Video>`; das hält ein festes 16:9-Verhältnis, was für
 * eine Anwendung nicht passt.
 */
export default function Embed({
  src,
  title,
  aspect,
  height,
  mitLand,
}: EmbedProps): React.ReactElement {
  const ratio = aspect ? Number(aspect) : NaN;
  const style: React.CSSProperties =
    height !== undefined
      ? {height, minHeight: 0}
      : Number.isFinite(ratio) && ratio > 0
        ? {aspectRatio: String(ratio)}
        : {height: '75vh'};

  // Bei Pfaden im eigenen Projekt fehlt sonst die baseUrl – anders als bei
  // Bildern im Markdown ergänzt Docusaurus sie in JSX-Attributen nicht selbst.
  const url = useBaseUrl(src);

  const rahmen = React.useRef<HTMLIFrameElement>(null);
  const gewaehlt = useLand();

  // Die Länderwahl geht als Nachricht hinüber und nicht als `?land=` in der
  // Adresse: eine veränderte Adresse lädt den Rahmen neu, und ein angefangenes
  // Gespräch wäre weg. Gesendet wird bei jeder Wahl und noch einmal, sobald der
  // Rahmen geladen ist – je nachdem, was zuerst kommt.
  React.useEffect(() => {
    if (!mitLand) return undefined;
    const rahmenEl = rahmen.current;
    if (!rahmenEl) return undefined;

    const senden = () => {
      try {
        rahmenEl.contentWindow?.postMessage(
          {type: 'smartme-wiki:land', land: gewaehlt},
          new URL(url, window.location.href).origin,
        );
      } catch {
        // Andere Herkunft noch nicht geladen o. Ä. – das `load` unten holt es nach.
      }
    };

    senden();
    rahmenEl.addEventListener('load', senden);
    return () => rahmenEl.removeEventListener('load', senden);
  }, [mitLand, gewaehlt, url]);

  return (
    <iframe
      ref={rahmen}
      className={styles.embed}
      style={style}
      src={url}
      title={title}
      loading="lazy"
      allow="clipboard-write; fullscreen"
    />
  );
}
