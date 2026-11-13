/**
 * Der Rollenschalter in der Kopfzeile.
 *
 * Eingetragen wird er in `docusaurus.config.ts` als `{type: 'custom-rollenWahl'}`;
 * die Zuordnung steht in `src/theme/NavbarItem/ComponentTypes.tsx`.
 *
 * Vier Einträge, vom grössten Umfang zum kleinsten. Der Installateur steht
 * oben: Er ist die Voreinstellung und zugleich der Weg zurück, wenn jemand die
 * Einschränkung wieder loswerden will — bei ihm ist nichts ausgeblendet.
 *
 * Aufgebaut wie der Länderschalter daneben, bis aufs Sinnbild: dort eine
 * Weltkugel, hier eine Person.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {ROLLEN, VORGABE, rollenName, useRolle, waehleRolle} from '@site/src/rollen';
import styles from './styles.module.css';

type Props = {mobile?: boolean; className?: string};

/**
 * Die Person vor dem Rollennamen.
 *
 * Kopf und Schultern, sonst nichts: Bei 16 Pixeln bleibt von Werkzeug,
 * Aktenordner oder Schlüsselbund ohnehin nur ein Fleck übrig, und das Sinnbild
 * steht für alle vier Rollen zugleich.
 */
function Person(): React.ReactElement {
  return (
    <svg
      className={styles.person}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" />
    </svg>
  );
}

export default function RollenWahl({mobile, className}: Props): React.ReactElement {
  const rolle = useRolle();
  const [offen, setOffen] = useState(false);
  const rahmen = useRef<HTMLDivElement>(null);

  // Klick daneben schliesst das Menü. Ohne das bliebe es auf Geräten ohne
  // Mauszeiger offen stehen, sobald es einmal angetippt wurde.
  useEffect(() => {
    if (!offen) return undefined;
    const schliessen = (e: MouseEvent) => {
      if (!rahmen.current?.contains(e.target as Node)) setOffen(false);
    };
    document.addEventListener('click', schliessen);
    return () => document.removeEventListener('click', schliessen);
  }, [offen]);

  const waehlen = useCallback((schluessel: string) => {
    waehleRolle(schluessel);
    setOffen(false);
  }, []);

  const eintraege = ROLLEN.map((r) => ({
    schluessel: r.schluessel,
    name: rollenName(r.schluessel),
    // Wer noch nie gewählt hat, sieht ohnehin alles – dann ist der
    // Installateur der zutreffende Eintrag, auch wenn im Speicher nichts steht.
    aktiv: rolle === r.schluessel || (rolle === null && r.schluessel === VORGABE),
  }));

  // Zusammengesetzt statt als eigener Übersetzungstext, wie beim Länderschalter.
  const beschriftung = `${translate({
    id: 'rollenwahl.ueberschrift',
    message: 'Rolle',
  })}: ${rollenName(rolle)}`;

  // Im ausgeklappten Menü auf schmalen Fenstern gibt es kein Dropdown –
  // dort stehen die Rollen einfach untereinander.
  if (mobile) {
    return (
      <div className={clsx('menu__list-item', className)}>
        <div className="menu__link menu__link--sublist menu__link--sublist-caret">
          {translate({id: 'rollenwahl.ueberschrift', message: 'Rolle'})}
        </div>
        <ul className="menu__list">
          {eintraege.map((e) => (
            <li className="menu__list-item" key={e.schluessel}>
              <button
                type="button"
                className={clsx(styles.eintrag, 'menu__link', e.aktiv && 'menu__link--active')}
                onClick={() => waehlen(e.schluessel)}>
                {e.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={rahmen}
      className={clsx(
        'navbar__item',
        'dropdown',
        // Siehe LandWahl: ohne `dropdown--hoverable` liegt das Menü dauerhaft
        // über dem Knopf und fängt dessen Klicks ab.
        'dropdown--hoverable',
        'dropdown--right',
        offen && 'dropdown--show',
        className,
      )}>
      {/* Bewusst ein <a> mit href und role="button" – Begründung in LandWahl. */}
      <a
        href="#"
        role="button"
        className="navbar__link"
        aria-label={beschriftung}
        aria-expanded={offen}
        aria-haspopup="true"
        onClick={(e) => {
          e.preventDefault();
          setOffen((z) => !z);
        }}>
        <Person />
        {rollenName(rolle)}
      </a>
      <ul className="dropdown__menu">
        {eintraege.map((e) => (
          <li key={e.schluessel}>
            <button
              type="button"
              className={clsx(styles.eintrag, 'dropdown__link', e.aktiv && 'dropdown__link--active')}
              onClick={() => waehlen(e.schluessel)}>
              {e.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
