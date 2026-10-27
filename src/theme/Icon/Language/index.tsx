/**
 * Das Symbol der Sprachauswahl in der Kopfzeile.
 *
 * Docusaurus setzt dort das Übersetzen-Zeichen von Material: ein chinesisches
 * Schriftzeichen neben einem „A". Bei 20 Pixeln zerfällt es in ein paar
 * Striche. Hier steht statt dessen die Flagge der gerade gewählten Sprache —
 * daneben schreibt Docusaurus ohnehin ihren Namen („Deutsch", „English", …),
 * die Flagge muss also nichts allein tragen.
 *
 * Diese Datei überschreibt `@theme/Icon/Language` aus dem Docusaurus-Theme.
 *
 * Zwei Dinge dazu:
 *
 * - Flaggen stehen für Länder, nicht für Sprachen. Deutsch wird auch in der
 *   Schweiz und in Österreich gesprochen, Englisch ohnehin überall. Für eine
 *   Auswahl mit vier Sprachen und sichtbaren Namen ist das die übliche und
 *   gut verständliche Abkürzung — nur taugt sie nicht als alleiniges Zeichen.
 * - Bewusst SVG und nicht Emoji (🇩🇪): Windows zeigt Flaggen-Emoji nicht als
 *   Flagge, sondern als die zwei Landesbuchstaben.
 *
 * Der Länderschalter daneben kommt ohne Flaggen aus und trägt eine Weltkugel,
 * damit sich die beiden Schalter nicht gleichen.
 */
import React, {type ComponentProps} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/** Alle Flaggen laufen auf dieselbe Höhe, die Breite ergibt sich aus dem
 *  Seitenverhältnis — wie bei echten Flaggen. */
const HOEHE = 13;

/** Dünner Umriss in der Textfarbe: hält die hellen Streifen (Gold, Weiss)
 *  auch auf weissem Grund zusammen und passt sich dem Dark Mode an. */
function Umriss({w, h}: {w: number; h: number}): React.ReactElement {
  return (
    <rect
      x="0.5"
      y="0.5"
      width={w - 1}
      height={h - 1}
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.25"
    />
  );
}

function Deutschland(props: ComponentProps<'svg'>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 30 18" height={HOEHE} width={(HOEHE * 30) / 18} aria-hidden="true">
      <rect width="30" height="18" fill="#FFCE00" />
      <rect width="30" height="12" fill="#DD0000" />
      <rect width="30" height="6" fill="#000000" />
      <Umriss w={30} h={18} />
    </svg>
  );
}

function Frankreich(props: ComponentProps<'svg'>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 27 18" height={HOEHE} width={(HOEHE * 27) / 18} aria-hidden="true">
      <rect width="27" height="18" fill="#FFFFFF" />
      <rect width="9" height="18" fill="#002395" />
      <rect x="18" width="9" height="18" fill="#ED2939" />
      <Umriss w={27} h={18} />
    </svg>
  );
}

function Italien(props: ComponentProps<'svg'>): React.ReactElement {
  return (
    <svg {...props} viewBox="0 0 27 18" height={HOEHE} width={(HOEHE * 27) / 18} aria-hidden="true">
      <rect width="27" height="18" fill="#F4F5F0" />
      <rect width="9" height="18" fill="#008C45" />
      <rect x="18" width="9" height="18" fill="#CD212A" />
      <Umriss w={27} h={18} />
    </svg>
  );
}

/**
 * Der Union Jack.
 *
 * Die roten Schrägen sind gegenläufig versetzt — das lässt sich nicht als
 * gerade Linie zeichnen. Deshalb werden sie über die vier Dreiecke des
 * `clipPath` beschnitten, das ist die übliche kompakte Konstruktion. Die
 * Kennung dafür muss auf der Seite eindeutig sein, auch wenn die Flagge
 * mehrmals vorkommt; `useId` liefert sie, die Sonderzeichen daraus fallen
 * weg, weil sie in einer `url(#…)` nichts verloren haben.
 */
function Grossbritannien(props: ComponentProps<'svg'>): React.ReactElement {
  const kennung = `flagge-uk-${React.useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg {...props} viewBox="0 0 60 30" height={HOEHE} width={(HOEHE * 60) / 30} aria-hidden="true">
      <clipPath id={kennung}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" fill="none" stroke="#FFFFFF" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        fill="none"
        stroke="#C8102E"
        strokeWidth="4"
        clipPath={`url(#${kennung})`}
      />
      <path d="M30,0 v30 M0,15 h60" fill="none" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" fill="none" stroke="#C8102E" strokeWidth="6" />
      <Umriss w={60} h={30} />
    </svg>
  );
}

const FLAGGEN: Record<string, (props: ComponentProps<'svg'>) => React.ReactElement> = {
  de: Deutschland,
  en: Grossbritannien,
  fr: Frankreich,
  it: Italien,
};

export default function IconLanguage(props: ComponentProps<'svg'>): React.ReactElement | null {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  // Käme einmal eine Sprache dazu, ohne dass hier eine Flagge dafür steht,
  // bliebe der Platz lieber leer als falsch belegt.
  const Flagge = FLAGGEN[currentLocale];
  if (!Flagge) return null;

  return <Flagge {...props} />;
}
