/**
 * Die Länderwahl auf der Startseite.
 *
 * Erscheint nur dort, nur beim ersten Besuch und nur, solange nichts gewählt
 * ist. Sie versperrt den Inhalt nicht: Wer sie übergeht, liest einfach weiter
 * und sieht alles. Das ist Absicht — ein Besucher, der über einen geteilten
 * Link oder aus der Suche kommt, soll nie vor einer Tür stehen.
 *
 * Eingehängt wird sie in `src/theme/DocItem/Content/`, nicht im Markdown der
 * Startseite. So steht sie in allen vier Sprachfassungen, ohne dass jemand
 * sie viermal pflegen müsste.
 */
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {LAENDER, landName, useLandStatus, waehleLand} from '@site/src/laender';
import styles from './styles.module.css';

export default function LandKarte(): React.ReactElement | null {
  const {land, geladen} = useLandStatus();

  // Vor dem ersten Blick in den Speicher nichts zeigen, sonst blitzt die Karte
  // bei jedem auf, der längst gewählt hat.
  if (!geladen || land) return null;

  return (
    <aside className={styles.karte}>
      <div className={styles.text}>
        <strong className={styles.titel}>
          <Translate id="landkarte.titel">Wofür suchst du Antworten?</Translate>
        </strong>
        <p className={styles.erklaerung}>
          <Translate id="landkarte.erklaerung">
            Abrechnung und Messkonzepte unterscheiden sich je nach Land. Mit
            einer Wahl zeigt die Navigation nur, was dort gilt — ändern kannst
            du das jederzeit oben rechts.
          </Translate>
        </p>
      </div>
      <div className={styles.knoepfe}>
        {LAENDER.map((l) => (
          <button
            key={l.schluessel}
            type="button"
            className={clsx('button', l.filtert ? 'button--primary' : 'button--secondary')}
            onClick={() => waehleLand(l.schluessel)}>
            {landName(l.schluessel)}
          </button>
        ))}
      </div>
    </aside>
  );
}
