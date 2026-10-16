/**
 * Der nächste Schritt am Ende einer Anleitung.
 *
 * Docusaurus setzt unter jede Seite von sich aus „Zurück" und „Weiter" — in
 * der Reihenfolge der Navigation. Das Wiki ist aber kein Buch: Nach dem
 * M-Bus Gateway kommt nicht „als Nächstes" der LoRa Gateway, die beiden haben
 * nichts miteinander zu tun. Eine Weiter-Schaltfläche, die irgendwohin führt,
 * ist schlimmer als keine.
 *
 * Deshalb erscheint hier nur etwas, wenn die Seite es ausdrücklich sagt — im
 * Frontmatter, mit den Kennungen der Folgeseiten:
 *
 *     naechste_schritte:
 *       - konfiguration/ordnerkonfiguration/index
 *
 * Mehrere Einträge sind erlaubt und der Normalfall dort, wo sich der Weg
 * gabelt (nur Strom / Strom und eine Heizung / Strom und mehrere Heizungen).
 *
 * Beschriftung und Adresse holt die Komponente von der Zielseite selbst. So
 * steht kein zu übersetzender Text im Frontmatter, und eine umbenannte oder
 * verschobene Seite zieht ihre Verweise automatisch mit.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {useDocById, useLayoutDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

function Schritt({kennung}: {kennung: string}): React.ReactElement | null {
  // Zwei Quellen, weil Docusaurus Titel und Adresse getrennt bereithält:
  // `useDocById` kennt den Titel, `useLayoutDoc` die fertige Adresse samt
  // Sprachpräfix. Beide werfen beim Bauen, wenn die Kennung nicht existiert —
  // ein Tippfehler im Frontmatter fällt damit sofort auf, nicht erst dem Leser.
  const ziel = useDocById(kennung);
  const adresse = useLayoutDoc(kennung);
  if (!adresse) return null;

  return (
    <Link className={styles.schritt} to={adresse.path}>
      <span className={styles.titel}>{ziel.title}</span>
      <span className={styles.pfeil} aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function NaechsterSchritt({
  kennungen,
}: {
  kennungen: string[];
}): React.ReactElement | null {
  if (kennungen.length === 0) return null;

  return (
    <nav
      className={styles.block}
      aria-label={translate({
        id: 'naechsterSchritt.bereich',
        message: 'Nächster Schritt',
      })}
    >
      <strong className={styles.ueberschrift}>
        {kennungen.length === 1 ? (
          <Translate id="naechsterSchritt.einer">Nächster Schritt</Translate>
        ) : (
          <Translate id="naechsterSchritt.mehrere">Wie geht es weiter?</Translate>
        )}
      </strong>
      <div className={styles.liste}>
        {kennungen.map((kennung) => (
          <Schritt key={kennung} kennung={kennung} />
        ))}
      </div>
    </nav>
  );
}
