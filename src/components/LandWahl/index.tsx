/**
 * Der Länderschalter in der Kopfzeile.
 *
 * Eingetragen wird er in `docusaurus.config.ts` als `{type: 'custom-landWahl'}`;
 * die Zuordnung steht in `src/theme/NavbarItem/ComponentTypes.tsx`.
 *
 * „Alle Länder" ist die Voreinstellung und bleibt als Eintrag im Menü, damit
 * eine Wahl auch wieder zurückgenommen werden kann.
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {LAENDER, useLand, waehleLand} from '@site/src/laender';
import styles from './styles.module.css';

const ALLE = 'Alle Länder';

function beschriftung(land: string | null): string {
  return LAENDER.find((l) => l.schluessel === land)?.name ?? ALLE;
}

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

  const eintraege: {schluessel: string | null; name: string}[] = [
    {schluessel: null, name: ALLE},
    ...LAENDER.map((l) => ({schluessel: l.schluessel as string | null, name: l.name})),
  ];

  // Im ausgeklappten Menü auf schmalen Fenstern gibt es kein Dropdown –
  // dort stehen die Länder einfach untereinander.
  if (mobile) {
    return (
      <div className={clsx('menu__list-item', className)}>
        <div className="menu__link menu__link--sublist menu__link--sublist-caret">Land</div>
        <ul className="menu__list">
          {eintraege.map((e) => (
            <li className="menu__list-item" key={e.name}>
              <button
                type="button"
                className={clsx(styles.eintrag, 'menu__link', land === e.schluessel && 'menu__link--active')}
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
        {beschriftung(land)}
      </a>
      <ul className="dropdown__menu">
        {eintraege.map((e) => (
          <li key={e.name}>
            <button
              type="button"
              className={clsx(styles.eintrag, 'dropdown__link', land === e.schluessel && 'dropdown__link--active')}
              onClick={() => waehlen(e.schluessel)}>
              {e.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
