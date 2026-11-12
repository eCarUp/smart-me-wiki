/**
 * Ein Knopf, der auf eine andere Seite führt.
 *
 *     <Knopf href="/konfiguration/billing-deutschland">Zur Abrechnung für Deutschland</Knopf>
 *
 * Gedacht für den einen Weg, den jemand auf einer Seite eher sucht als alles
 * andere — etwa der Wechsel auf die Länderfassung einer Anleitung, wenn der
 * Link aus der Software immer auf dieselbe Seite zeigt. Für mehrere
 * gleichrangige Ziele sind `<Kacheln>` die bessere Wahl.
 *
 * Die Beschriftung steht auf derselben Zeile wie das Element; eine Leerzeile
 * davor würde MDX einen Absatz daraus machen und der Knopf bekäme eine
 * zweite Zeile.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type KnopfProps = {
  /** Ziel, z.B. `/konfiguration/billing`. Externe Adressen sind erlaubt. */
  href: string;
  /** Ohne Füllung, nur mit Rand – für den zweitwichtigsten Weg einer Seite. */
  rand?: boolean;
  children: React.ReactNode;
};

export default function Knopf({href, rand, children}: KnopfProps): React.ReactElement {
  return (
    // `Link` statt `<a>`: es setzt den baseUrl davor und wechselt die Seite
    // ohne Neuladen. Externe Adressen (https://…) erkennt es selbst.
    <Link
      className={clsx(
        'button',
        'button--primary',
        rand && 'button--outline',
        styles.knopf,
      )}
      to={href}>
      {children}
    </Link>
  );
}
