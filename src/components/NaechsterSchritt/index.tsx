/**
 * Der Wegweiser am Ende einer Anleitung.
 *
 * Docusaurus setzt unter jede Seite von sich aus „Zurück" und „Weiter" — in
 * der Reihenfolge der Navigation. Das Wiki ist aber kein Buch: Nach dem
 * M-Bus Gateway kommt nicht „als Nächstes" der LoRa Gateway, die beiden haben
 * nichts miteinander zu tun. Eine Weiter-Schaltfläche, die irgendwohin führt,
 * ist schlimmer als keine.
 *
 * Deshalb erscheint hier nur, was eine Seite ausdrücklich angibt — im
 * Frontmatter, mit den Kennungen der Folgeseiten:
 *
 *     naechste_schritte:  [konfiguration/benutzerkonfiguration]
 *     optionale_schritte: [konfiguration/billing/vewa-abrechnung]
 *
 * `naechste_schritte` ist der Weg, den alle gehen; mehrere Einträge sind der
 * Normalfall dort, wo sich der Weg gabelt. `optionale_schritte` sind
 * Abstecher, die man nur bei Bedarf macht — sie stehen darunter und ruhiger.
 *
 * Der Rückwärtsverweis wird nicht geschrieben, sondern hergeleitet: Wer diese
 * Seite als nächsten Schritt nennt, ist ihr Vorgänger (siehe
 * `plugins/schrittkette/`). Zwei Sonderfälle fallen dabei an:
 *
 * - Ein Abstecher führt dorthin zurück, woher er kam. Vorgänger und Nachfolger
 *   sind dieselbe Seite — dann steht hier nur ein Verweis, und er heisst
 *   „Zurück zum Ablauf" statt „Nächster Schritt".
 * - Führen mehrere Seiten hierher, entscheidet die Seite selbst, mit
 *   `vorheriger_schritt`.
 *
 * Beschriftung und Adresse holt die Komponente von der Zielseite. So steht
 * kein zu übersetzender Text im Frontmatter, und eine umbenannte oder
 * verschobene Seite zieht ihre Verweise automatisch mit.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {useDocById, useLayoutDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export type Wegweiser = {
  naechste: string[];
  optionale: string[];
  vorherige?: string;
};

type Richtung = 'weiter' | 'zurueck';

function Schritt({
  kennung,
  richtung = 'weiter',
  leise = false,
}: {
  kennung: string;
  richtung?: Richtung;
  leise?: boolean;
}): React.ReactElement | null {
  // Zwei Quellen, weil Docusaurus Titel und Adresse getrennt bereithält:
  // `useDocById` kennt den Titel, `useLayoutDoc` die fertige Adresse samt
  // Sprachpräfix. Beide werfen beim Bauen, wenn die Kennung nicht existiert —
  // ein Tippfehler im Frontmatter fällt damit sofort auf, nicht erst dem Leser.
  const ziel = useDocById(kennung);
  const adresse = useLayoutDoc(kennung);
  if (!adresse) return null;

  return (
    <Link
      className={leise ? `${styles.schritt} ${styles.leise}` : styles.schritt}
      to={adresse.path}
    >
      {richtung === 'zurueck' && (
        <span className={styles.pfeilZurueck} aria-hidden="true">
          ←
        </span>
      )}
      <span className={styles.titel}>{ziel.title}</span>
      {richtung === 'weiter' && (
        <span className={styles.pfeil} aria-hidden="true">
          →
        </span>
      )}
    </Link>
  );
}

/** „Nächster Schritt", „Wie geht es weiter?" oder „Zurück zum Ablauf". */
function Ueberschrift({
  anzahl,
  rueckkehr,
}: {
  anzahl: number;
  rueckkehr: boolean;
}): React.ReactElement {
  if (rueckkehr) {
    return (
      <Translate id="naechsterSchritt.rueckkehr">Zurück zum Ablauf</Translate>
    );
  }
  if (anzahl === 1) {
    return <Translate id="naechsterSchritt.einer">Nächster Schritt</Translate>;
  }
  return (
    <Translate id="naechsterSchritt.mehrere">Wie geht es weiter?</Translate>
  );
}

export default function NaechsterSchritt({
  naechste,
  optionale,
  vorherige,
}: Wegweiser): React.ReactElement | null {
  if (naechste.length === 0 && optionale.length === 0 && !vorherige) return null;

  // Ein Abstecher führt dorthin zurück, woher er kam. Derselbe Verweis zweimal
  // — einmal vorwärts, einmal rückwärts — hilft niemandem.
  const rueckkehr = naechste.length === 1 && naechste[0] === vorherige;
  const zurueck = rueckkehr ? undefined : vorherige;

  return (
    <nav
      className={styles.block}
      aria-label={translate({
        id: 'naechsterSchritt.bereich',
        message: 'Nächster Schritt',
      })}
    >
      {naechste.length > 0 && (
        <>
          <strong className={styles.ueberschrift}>
            <Ueberschrift anzahl={naechste.length} rueckkehr={rueckkehr} />
          </strong>
          <div className={styles.liste}>
            {naechste.map((kennung) => (
              <Schritt key={kennung} kennung={kennung} />
            ))}
          </div>
        </>
      )}

      {optionale.length > 0 && (
        <>
          <strong className={`${styles.ueberschrift} ${styles.ueberschriftOptional}`}>
            <Translate id="naechsterSchritt.optional">
              Optionale Zwischenschritte
            </Translate>
          </strong>
          <div className={`${styles.liste} ${styles.listeLeise}`}>
            {optionale.map((kennung) => (
              <Schritt key={kennung} kennung={kennung} leise />
            ))}
          </div>
        </>
      )}

      {zurueck && (
        <div className={styles.zurueckZeile}>
          <Schritt kennung={zurueck} richtung="zurueck" leise />
        </div>
      )}
    </nav>
  );
}
