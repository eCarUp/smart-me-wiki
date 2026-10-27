/**
 * Der Weg durch das Menü der smart-me Oberfläche.
 *
 * Fast jede Anleitung beginnt mit derselben Frage: Wo im Portal bin ich
 * eigentlich? Bisher stand dafür ein Bildschirmfoto des Menüs auf der Seite —
 * eines je Sprache, vier Dateien, und bei jedem Umbau der Oberfläche von vorn.
 *
 * Hier steht statt dessen der Weg als Text:
 *
 *     <Menueweg>Rechnungserstellung → Einstellungen</Menueweg>
 *
 * Das hat drei Vorteile: Die Beschriftungen gehen durch die Übersetzung und
 * damit durch das Glossar (siehe `glossary.md`, Abschnitt „Beschriftungen in
 * der Oberfläche"), ein Vorleseprogramm liest den Weg vor, und eine geänderte
 * Menüführung ist eine Zeile Arbeit statt vier Bilder.
 *
 * Getrennt wird mit `→`, `›`, `>` oder `|` — was die Schreibende bequemer
 * findet. Fehlt ein Trenner, steht der ganze Text als eine Station da.
 *
 * Über dem Weg steht immer dieselbe Zeile: „Navigation in der Software". Ohne
 * sie bleibt der Kasten mehrdeutig — er könnte ebenso gut ein Hinweis oder ein
 * Zitat sein. Mit ihr ist auf den ersten Blick klar, dass hier ein Weg durch
 * das Portal beschrieben wird und nicht durch dieses Wiki.
 */
import React from 'react';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const TRENNER = /\s*(?:→|›|»|>|\|)\s*/;

/** Holt den reinen Text aus den Kindern — auch wenn MDX sie in <p> verpackt. */
function alsText(kinder: React.ReactNode): string {
  if (kinder === null || kinder === undefined || typeof kinder === 'boolean') {
    return '';
  }
  if (typeof kinder === 'string' || typeof kinder === 'number') {
    return String(kinder);
  }
  if (Array.isArray(kinder)) return kinder.map(alsText).join('');
  if (React.isValidElement(kinder)) {
    const inhalt = (kinder.props as {children?: React.ReactNode}).children;
    return alsText(inhalt);
  }
  return '';
}

/**
 * Der Trenner zwischen zwei Stationen.
 *
 * Statt des einfachen Winkels `›` ein ausgeschriebener Pfeil mit Schaft — das
 * Zeichen „long-right" aus der smart-me Icon-Bibliothek. Ein Winkel liest sich
 * als Gliederung („hier geht es tiefer"), ein Pfeil als Bewegung („dann dort
 * hin"), und genau das ist bei einem Weg durch ein Menü gemeint.
 *
 * Die Masse hängen an der Schriftgrösse (`em`): Wächst der Text, wächst der
 * Pfeil mit. Ausgerichtet wird er nicht über `vertical-align`, sondern vom
 * Flexbox-Container `.stufen` — der stellt ihn ohnehin mittig.
 */
function Pfeil(): React.ReactElement {
  return (
    <svg
      className={styles.pfeil}
      viewBox="0 0 24 24"
      width="1.25em"
      height="1.25em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false">
      <path d="M4 12h15" />
      <path d="M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}

export default function Menueweg({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement | null {
  const stufen = alsText(children)
    .split(TRENNER)
    .map((s) => s.trim())
    .filter(Boolean);

  if (stufen.length === 0) return null;

  return (
    <div className={styles.weg}>
      {/* Das Symbol steht neben der Überschrift, nicht neben dem Weg: zusammen
          sagen die beiden, worum es geht — ein Menü in der Software. */}
      <svg
        className={styles.symbol}
        viewBox="0 0 16 16"
        width="16"
        height="16"
        aria-hidden="true"
        focusable="false">
        <rect x="1" y="2.5" width="14" height="1.6" rx="0.8" fill="currentColor" />
        <rect x="1" y="7.2" width="14" height="1.6" rx="0.8" fill="currentColor" />
        <rect x="1" y="11.9" width="9" height="1.6" rx="0.8" fill="currentColor" />
      </svg>
      <span className={styles.titel}>
        {translate({
          id: 'menueweg.titel',
          message: 'Navigation in der Software',
          description: 'Überschrift über dem Menüweg durch das smart-me Portal',
        })}
      </span>
      <span className={styles.stufen}>
        {stufen.map((stufe, i) => (
          <React.Fragment key={`${i}-${stufe}`}>
            {i > 0 && <Pfeil />}
            <span className={styles.stufe}>{stufe}</span>
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}
