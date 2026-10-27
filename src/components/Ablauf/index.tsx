/**
 * Der Ablauf einer Anleitung als Bild — zum Anspringen.
 *
 * Die Rechnungsstellung ist keine Seite mehr, sondern ein Dutzend: Jeder
 * Schritt steht für sich, und am Fuss jeder Seite weist `NaechsterSchritt` den
 * Weg zur nächsten. Wer den Ablauf aber zum zweiten Mal durchgeht, will nicht
 * durchblättern, sondern dorthin springen, wo er stehengeblieben ist. Genau
 * dafür steht diese Übersicht auf der Einstiegsseite.
 *
 *     <Ablauf bis="konfiguration/billing/rechnung-erstellen" />
 *
 * Gepflegt wird dabei nichts: Die Reihenfolge ist dieselbe Schrittkette, die
 * auch der Wegweiser am Seitenfuss benutzt (siehe `plugins/schrittkette/`).
 * Wird eine Seite dazwischengeschoben oder umbenannt, steht sie hier beim
 * nächsten Bauen von selbst an der richtigen Stelle — eine Liste, die man von
 * Hand nachzieht, wäre nach dem zweiten Umbau falsch.
 *
 * Gelaufen wird die Kette vorwärts, solange sie eindeutig ist: Gabelt sie sich
 * (zwei Folgeseiten für dasselbe Land), endet die Darstellung dort. Das ist
 * Absicht — ein Ablauf mit Verzweigung ist kein Ablauf mehr, sondern eine
 * Landkarte, und dafür gibt es die Navigation.
 *
 * Für eine Übersicht eine Ebene darüber lassen sich die Schritte auch von Hand
 * setzen. Dann zählt nicht die Schrittkette, sondern diese Liste:
 *
 *     <Ablauf>
 *
 *     <Schritt seite="konfiguration/inbetriebnahme/index">Hardware in Betrieb nehmen</Schritt>
 *
 *     <Schritt seite="konfiguration/ordnerkonfiguration/index">Struktur des Projektes anlegen</Schritt>
 *
 *     <Schritt seite="konfiguration/multilevel-lastmanagement/index" optional>Wenn E-Mobilität dazugehört</Schritt>
 *
 *     </Ablauf>
 *
 * Gefiltert wird auch hier nach Land: Ein Schritt, der für das eingestellte
 * Land nicht gilt, fällt heraus und die Nummerierung rückt nach. So stehen
 * beide Rechnungsstellungen nebeneinander in der Liste, und jeder sieht seine.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {
  useDoc,
  useDocById,
  useLayoutDoc,
} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import {sichtbar, useLand} from '@site/src/laender';
import type {Schrittkette} from '@site/plugins/schrittkette';
import styles from './styles.module.css';

type AblaufProps = {
  /** Seite, bei der der Ablauf beginnt. Ohne Angabe: die aktuelle Seite. */
  von?: string;
  /**
   * Land, dessen Weg gezeigt wird — `ch` oder `de`.
   *
   * Nötig auf den beiden Einstiegsseiten der Rechnungsstellung: Ihr Ablauf
   * gehört zu einem Land, gleichgültig was der Leser oben eingestellt hat.
   * Ohne die Angabe bliebe die Übersicht für „Alle Länder" bei der ersten
   * Gabelung stehen — beim Zuweisen der Zähler, wo sich Schweiz und
   * Deutschland trennen.
   */
  land?: string;
  /**
   * Letzte Seite, die noch dargestellt wird. Ohne Angabe läuft die Kette bis
   * zur ersten Gabelung. Nötig ist die Angabe dort, wo der Ablauf in den
   * nächsten übergeht: Nach der Rechnungsstellung kommt die
   * Benutzerkonfiguration, die zum Billing nichts mehr beiträgt.
   */
  bis?: string;
  /** Von Hand gesetzte Schritte (`<Schritt>`) statt der Schrittkette. */
  children?: React.ReactNode;
};

type SchrittProps = {
  /** Kennung der Zielseite, z.B. `konfiguration/ordnerkonfiguration/index`. */
  seite: string;
  /** Abseits des Hauptwegs — erscheint unter der Liste statt nummeriert. */
  optional?: boolean;
  /** Ein kurzer Satz, was in diesem Schritt geschieht. */
  children?: React.ReactNode;
};

/**
 * Ein von Hand gesetzter Schritt. Steht nur innerhalb von `<Ablauf>`; allein
 * zeigt er nichts — `<Ablauf>` liest seine Angaben und baut daraus die Liste.
 */
export function Schritt(_props: SchrittProps): null {
  return null;
}

/** Beschriftung des Bereichs für Vorleseprogramme. */
const BEREICH = (): string =>
  translate({
    id: 'ablauf.bereich',
    message: 'Ablauf',
    description: 'Beschriftung der Ablaufübersicht auf einer Einstiegsseite',
  });

type Station = {kennung: string; optionale: string[]};

/** Ein Schritt des Hauptwegs: Nummer, Titel, dahinter seine Abstecher. */
function Halt({
  nummer,
  kennung,
  optionale,
  text,
}: Station & {nummer: number; text?: React.ReactNode}): React.ReactElement | null {
  // Wie beim Wegweiser: `useDocById` kennt den Titel, `useLayoutDoc` die
  // fertige Adresse samt Sprachpräfix. Eine Kennung, die es nicht gibt, lässt
  // schon das Bauen scheitern — nicht erst den Leser ins Leere laufen.
  const ziel = useDocById(kennung);
  const adresse = useLayoutDoc(kennung);
  if (!adresse) return null;

  return (
    <li className={styles.station}>
      <Link className={styles.feld} to={adresse.path}>
        <span className={styles.nummer} aria-hidden="true">
          {nummer}
        </span>
        <span className={styles.inhalt}>
          <span className={styles.titel}>{ziel.title}</span>
          {text && <span className={styles.text}>{text}</span>}
        </span>
        <span className={styles.pfeil} aria-hidden="true">
          →
        </span>
      </Link>
      {optionale.length > 0 && (
        <ul className={styles.abstecher}>
          {optionale.map((k) => (
            <Abstecher key={k} kennung={k} />
          ))}
        </ul>
      )}
    </li>
  );
}

/** Ein optionaler Zwischenschritt, eingerückt und zurückgenommen. */
function Abstecher({
  kennung,
  text,
}: {
  kennung: string;
  text?: React.ReactNode;
}): React.ReactElement | null {
  const ziel = useDocById(kennung);
  const adresse = useLayoutDoc(kennung);
  if (!adresse) return null;

  return (
    <li>
      <Link className={styles.abstecherZiel} to={adresse.path}>
        <span className={styles.haken} aria-hidden="true">
          ↳
        </span>
        <span>
          {ziel.title}
          {text && <span className={styles.abstecherText}> — {text}</span>}
        </span>
      </Link>
    </li>
  );
}

export default function Ablauf({
  von,
  bis,
  land,
  children,
}: AblaufProps): React.ReactElement | null {
  const {metadata} = useDoc();
  const kette = usePluginData('smart-me-schrittkette') as Schrittkette | undefined;
  // Beim ersten Zeichnen ist das gewählte Land noch unbekannt (`null`) und
  // damit alles sichtbar — serverseitig und im Browser dasselbe Ergebnis,
  // kein Flackern. Steht `land` fest, spielt die Wahl ohnehin keine Rolle.
  const gewaehlt = useLand();
  const gilt = land ?? gewaehlt;

  if (!kette) return null;

  const passt = (kennung: string): boolean =>
    sichtbar(kette.laender[kennung], gilt);

  // Von Hand gesetzte Schritte haben Vorrang vor der Kette.
  const eigene = React.Children.toArray(children).filter(
    (kind): kind is React.ReactElement<SchrittProps> =>
      React.isValidElement(kind) && typeof (kind.props as SchrittProps).seite === 'string',
  );

  if (eigene.length > 0) {
    const sichtbare = eigene.filter((kind) => passt(kind.props.seite));
    const haupt = sichtbare.filter((kind) => !kind.props.optional);
    const neben = sichtbare.filter((kind) => kind.props.optional);
    if (haupt.length === 0 && neben.length === 0) return null;

    return (
      <nav aria-label={BEREICH()}>
        {haupt.length > 0 && (
          <ol className={styles.ablauf}>
            {haupt.map((kind, i) => (
              <Halt
                key={kind.props.seite}
                nummer={i + 1}
                kennung={kind.props.seite}
                optionale={[]}
                text={kind.props.children}
              />
            ))}
          </ol>
        )}
        {neben.length > 0 && (
          <ul className={styles.abstecher}>
            {neben.map((kind) => (
              <Abstecher
                key={kind.props.seite}
                kennung={kind.props.seite}
                text={kind.props.children}
              />
            ))}
          </ul>
        )}
      </nav>
    );
  }

  const stationen: Station[] = [];
  const gesehen = new Set<string>([von ?? metadata.id]);
  let aktuell = von ?? metadata.id;

  while (true) {
    const weiter = (kette.naechste[aktuell] ?? []).filter(passt);
    // Kein Weg mehr oder eine Gabelung: hier endet die Darstellung.
    if (weiter.length !== 1) break;
    const naechste = weiter[0];
    // Ein Abstecher, der zurückführt, dreht sich sonst im Kreis.
    if (gesehen.has(naechste)) break;
    gesehen.add(naechste);
    stationen.push({
      kennung: naechste,
      optionale: (kette.optionale[naechste] ?? []).filter(passt),
    });
    if (naechste === bis) break;
    aktuell = naechste;
  }

  if (stationen.length === 0) return null;

  return (
    <nav aria-label={BEREICH()}>
      <ol className={styles.ablauf}>
        {stationen.map((station, i) => (
          <Halt
            key={station.kennung}
            nummer={i + 1}
            kennung={station.kennung}
            optionale={station.optionale}
          />
        ))}
      </ol>
    </nav>
  );
}
