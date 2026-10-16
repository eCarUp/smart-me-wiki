/**
 * Die Länderwahl auf der Startseite.
 *
 * Die Startseite stellt nur noch eine Frage: für welches Land? Jede Antwort
 * führt auf die Einstiegsseite dieses Landes und merkt die Wahl gleich für
 * die Navigation. Deshalb steht die Wahl hier gross und ist das Erste, was
 * man sieht — anders als früher, wo sie eine beiläufige Karte über dem Text
 * war.
 *
 * Sie erscheint **immer**, auch wenn schon gewählt wurde: Auf einer Seite,
 * die aus nichts anderem besteht, wäre ein Verschwinden eine leere Seite.
 * Die bereits getroffene Wahl ist stattdessen hervorgehoben.
 *
 * Eingehängt wird sie in `src/theme/DocItem/Content/`, nicht im Markdown der
 * Startseite. So steht sie in allen vier Sprachfassungen, ohne dass jemand
 * sie viermal pflegen müsste.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {LAENDER, landName, useLandStatus, waehleLand} from '@site/src/laender';
import styles from './styles.module.css';

export default function LandKarte(): React.ReactElement {
  const {land, geladen} = useLandStatus();

  return (
    <section className={styles.wahl}>
      <h1 className={styles.titel}>
        <Translate id="landkarte.titel">Für welches Land suchst du Antworten?</Translate>
      </h1>
      <p className={styles.erklaerung}>
        <Translate id="landkarte.erklaerung">
          Abrechnung und Messkonzepte unterscheiden sich je nach Land. Deine
          Wahl führt dich auf die passende Einstiegsseite und zeigt in der
          Navigation nur noch, was dort gilt — ändern kannst du das jederzeit
          oben rechts.
        </Translate>
      </p>
      <div className={styles.knoepfe}>
        {LAENDER.map((l) => (
          <Link
            key={l.schluessel}
            to={l.start}
            className={clsx(
              styles.knopf,
              // Erst nach dem Blick in den Speicher hervorheben, sonst
              // unterscheidet sich das erzeugte HTML von dem, was React im
              // Browser erwartet.
              geladen && land === l.schluessel && styles.gewaehlt,
            )}
            onClick={() => waehleLand(l.schluessel)}>
            {landName(l.schluessel)}
          </Link>
        ))}
      </div>
    </section>
  );
}
