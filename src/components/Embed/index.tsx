import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
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

  return (
    <iframe
      className={styles.embed}
      style={style}
      src={url}
      title={title}
      loading="lazy"
      allow="clipboard-write; fullscreen"
    />
  );
}
