/**
 * Der Länderschalter in der Kopfzeile.
 *
 * Eingetragen wird er in `docusaurus.config.ts` als `{type: 'custom-landWahl'}`;
 * die Zuordnung steht in `src/theme/NavbarItem/ComponentTypes.tsx`.
 *
 * Drei Einträge, mehr nicht: Schweiz, Deutschland, Alle Länder. „Alle Länder"
 * ist zugleich die Voreinstellung und der Weg zurück, wenn jemand die
 * Einschränkung wieder loswerden will.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {LAENDER, landName, useLand, waehleLand} from '@site/src/laender';
import styles from './styles.module.css';

type Props = {mobile?: boolean; className?: string};

export default function LandWahl({mobile, className}: Props): React.ReactElement {
  const land = useLand();
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

  const waehlen = useCallback((schluessel: string | null) => {
    waehleLand(schluessel);
    setOffen(false);
  }, []);

  const eintraege = LAENDER.map((l) => ({
    schluessel: l.schluessel,
    name: landName(l.schluessel),
    // Wer noch nie gewählt hat, sieht ohnehin alles – dann ist „Alle Länder"
    // der zutreffende Eintrag, auch wenn im Speicher noch nichts steht.
    aktiv: land === l.schluessel || (land === null && l.schluessel === 'alle'),
  }));

  // Im ausgeklappten Menü auf schmalen Fenstern gibt es kein Dropdown –
  // dort stehen die Länder einfach untereinander.
  if (mobile) {
    return (
      <div className={clsx('menu__list-item', className)}>
        <div className="menu__link menu__link--sublist menu__link--sublist-caret">
          {translate({id: 'landwahl.ueberschrift', message: 'Land'})}
        </div>
        <ul className="menu__list">
          {eintraege.map((e) => (
            <li className="menu__list-item" key={e.name}>
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
        // `dropdown--hoverable` versteckt das Menü, solange niemand darauf
        // zeigt. Ohne diese Klasse liegt es dauerhaft über dem Knopf und
        // fängt dessen Klicks ab — genau diese Mischung benutzt auch die
        // Sprachauswahl von Docusaurus.
        'dropdown--hoverable',
        'dropdown--right',
        offen && 'dropdown--show',
        className,
      )}>
      {/*
        Bewusst ein <a> mit href und role="button", nicht ein <button>:
        Docusaurus setzt `pointer-events: none` auf jeden Auslöser eines
        Aufklappmenüs, der kein href hat — ein Knopf wäre dort schlicht nicht
        anklickbar. Die Sprachauswahl daneben ist aus demselben Grund ein Link.
      */}
      <a
        href="#"
        role="button"
        className="navbar__link"
        aria-expanded={offen}
        aria-haspopup="true"
        onClick={(e) => {
          e.preventDefault();
          setOffen((z) => !z);
        }}>
        {landName(land)}
      </a>
      <ul className="dropdown__menu">
        {eintraege.map((e) => (
          <li key={e.name}>
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
