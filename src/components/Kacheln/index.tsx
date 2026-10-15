/**
 * Kacheln für Partner, Lieferanten und Dienstleister.
 *
 * Im alten Wiki standen solche Einträge — Logo, Adresse, Telefon, Mail — zu
 * dritt oder viert nebeneinander. Bei der Migration ist daraus eine einzige
 * lange Spalte geworden: 18 Dienstleister, jeder sieben Zeilen hoch, macht
 * eine Seite, durch die man minutenlang scrollt, ohne etwas zu finden.
 *
 * `<Kacheln>` stellt sie wieder nebeneinander und bricht auf schmalen Fenstern
 * von selbst um. Wie viele in eine Reihe passen, entscheidet die Breite des
 * Fensters, nicht eine feste Zahl — sonst stünden auf dem Telefon vier
 * briefmarkengrosse Kästchen.
 *
 *     <Kacheln>
 *       <Kachel bild="/img/drittsysteme-nebenkosten/07.png" titel="Blockstrom AG">
 *
 *     Morillonstrasse 77, CH-3007 Bern
 *
 *     [info@blockstrom.com](mailto:info@blockstrom.com)
 *
 *       </Kachel>
 *     </Kacheln>
 *
 * Zwischen Markdown und den Klammern gehören Leerzeilen, sonst behandelt MDX
 * den Inhalt als reinen Text und die Links bleiben Text.
 */
import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type KachelnProps = {
  /**
   * Mindestbreite einer Kachel. Daraus ergibt sich, wie viele nebeneinander
   * passen: bei `14rem` sind es in der Textspalte vier, bei `20rem` drei.
   */
  min?: string;
  children: React.ReactNode;
};

export function Kacheln({min = '14rem', children}: KachelnProps): React.ReactElement {
  return (
    <div
      className={styles.raster}
      style={{gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`}}>
      {children}
    </div>
  );
}

type KachelProps = {
  /** Pfad zum Logo, z.B. `/img/drittsysteme-nebenkosten/07.png`. */
  bild?: string;
  /** Name des Partners. Steht fett über dem Text. */
  titel?: string;
  /** Ziel, auf das die ganze Kachel verweist. */
  href?: string;
  children?: React.ReactNode;
};

export function Kachel({bild, titel, href, children}: KachelProps): React.ReactElement {
  // In Markdown löst Docusaurus `/img/…` selbst gegen den baseUrl auf, in JSX
  // nicht. Ohne das hier zeigte jedes Logo auf /img/… statt auf
  // /smart-me-wiki/img/… – lokal unauffällig, in der Veröffentlichung tot.
  const bildUrl = useBaseUrl(bild ?? '');

  const inhalt = (
    <>
      {bild && (
        <div className={styles.logo}>
          {/* Logos sind unterschiedlich breit und hoch; `contain` lässt sie
              unverzerrt in einem gleich hohen Feld stehen, damit die Kacheln
              eine gemeinsame Oberkante behalten. */}
          <img src={bildUrl} alt={titel ? `Logo ${titel}` : ''} loading="lazy" />
        </div>
      )}
      <div className={styles.inhalt}>
        {titel && <strong className={styles.titel}>{titel}</strong>}
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a className={clsx(styles.kachel, styles.verlinkt)} href={href}>
        {inhalt}
      </a>
    );
  }
  return <div className={styles.kachel}>{inhalt}</div>;
}

export default Kacheln;
