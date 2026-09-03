import React from 'react';
import styles from './styles.module.css';

type EmbedProps = {
  /** Vollständige URL der einzubettenden Anwendung. */
  src: string;
  /** Beschriftung für Screenreader – Pflicht, der Rahmen ist sonst namenlos. */
  title: string;
  /**
   * Höhe des Rahmens als CSS-Wert. Standard ist ein grosser Teil des
   * Sichtfensters, weil eingebettete Anwendungen ihre Höhe nicht selbst melden
   * können. Für kompaktere Einbettungen z.B. `height="480px"` setzen.
   */
  height?: string;
};

/**
 * Bettet eine externe Anwendung ein – etwa den smart-me Support-KI-Agenten.
 *
 * Für Videos gibt es `<Video>`; das hält ein festes 16:9-Verhältnis, was für
 * eine Anwendung nicht passt.
 */
export default function Embed({src, title, height = '75vh'}: EmbedProps): React.ReactElement {
  return (
    <iframe
      className={styles.embed}
      style={{height}}
      src={src}
      title={title}
      loading="lazy"
      allow="clipboard-write"
    />
  );
}
