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
 */
import React from 'react';
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
      {/* Das Symbol sagt ohne Worte, worum es geht: eine Stelle im Menü. */}
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
      <span className={styles.stufen}>
        {stufen.map((stufe, i) => (
          <React.Fragment key={`${i}-${stufe}`}>
            {i > 0 && (
              <span className={styles.pfeil} aria-hidden="true">
                ›
              </span>
            )}
            <span className={styles.stufe}>{stufe}</span>
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}
