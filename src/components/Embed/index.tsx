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
  height = '75vh',
}: EmbedProps): React.ReactElement {
  const ratio = aspect ? Number(aspect) : NaN;
  const style = Number.isFinite(ratio) && ratio > 0 ? {aspectRatio: String(ratio)} : {height};

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
