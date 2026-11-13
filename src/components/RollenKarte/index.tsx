/**
 * Die Rollenwahl auf den beiden Einstiegsseiten.
 *
 * Der Schalter oben rechts fällt niemandem auf, der ihn nicht sucht. Deshalb
 * steht die Wahl hier noch einmal, dort wo der Weg durchs Wiki beginnt:
 * hinter der Einleitung und vor „Hilfe und Kontakt" — einmal gewählt, wird
 * die Navigation kürzer, und man findet schneller.
 *
 * Anders als die Länderwahl auf der Startseite ist das **keine Frage, die
 * beantwortet werden muss**: Ohne Wahl gilt der Installateur, und der sieht
 * alles.
 *
 * Sie erscheint immer, auch nach getroffener Wahl — dann ist diese
 * hervorgehoben, und die Einstiegsseite ist zugleich der Ort, an dem man sie
 * wieder ändert.
 *
 * Im Markdown steht `<Rollenwahl />` (siehe `src/theme/MDXComponents.tsx`),
 * weil die Stelle mitten im Text liegt; die vier Namen und der Erklärtext
 * kommen aus `code.json` und stehen damit in allen vier Sprachen.
 */
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {ROLLEN, VORGABE, rollenName, useRolleStatus, waehleRolle} from '@site/src/rollen';
import styles from './styles.module.css';

export default function RollenKarte(): React.ReactElement {
  const {rolle, geladen} = useRolleStatus();

  return (
    <section className={styles.karte}>
      <h2 className={styles.titel}>
        <Translate id="rollenkarte.titel">Navigation auf deine Rolle eingrenzen</Translate>
      </h2>
      <p className={styles.erklaerung}>
        <Translate id="rollenkarte.erklaerung">
          Wähle deine Rolle, dann führt die Navigation links nur noch, was du
          für deine Arbeit brauchst — das spart Suchen. Fehlt dir etwas, nimm
          die nächsthöhere Rolle; der Installateur sieht alles. Ändern kannst
          du es jederzeit oben rechts.
        </Translate>
      </p>
      <div className={styles.knoepfe}>
        {ROLLEN.map((r) => (
          <button
            key={r.schluessel}
            type="button"
            className={clsx(
              styles.knopf,
              // Erst nach dem Blick in den Speicher hervorheben, sonst
              // unterscheidet sich das erzeugte HTML von dem, was React im
              // Browser erwartet. Ohne Wahl gilt der Installateur.
              geladen &&
                (rolle === r.schluessel || (rolle === null && r.schluessel === VORGABE)) &&
                styles.gewaehlt,
            )}
            onClick={() => waehleRolle(r.schluessel)}>
            {rollenName(r.schluessel)}
          </button>
        ))}
      </div>
    </section>
  );
}
