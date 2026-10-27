/**
 * Die Unterseiten einer Übersichtsseite als Kacheln — passend zum Land.
 *
 *     <Unterseiten />
 *
 * Mehr braucht es nicht: Welche Seiten unter dieser stehen, weiss die
 * Navigation (`sidebars.ts`), und dort steht auch, für welches Land eine Seite
 * gilt. Beides liest das Plugin `smart-me-schrittkette` beim Bauen ein.
 *
 * Damit entfällt die doppelte Pflege. Eine von Hand geschriebene Kachelliste
 * wäre nach dem zweiten Umbau falsch: Eine neue Seite käme links dazu, auf der
 * Einstiegsseite fehlte sie — und niemandem fiele es auf, weil die Seite ja
 * erreichbar ist.
 *
 * Gefiltert wird wie überall: Wer die Schweiz eingestellt hat, sieht die
 * Schweizer Seiten; wer nichts eingestellt hat, sieht alle. Eine
 * Unterkategorie erscheint als eine Kachel, die auf ihre Einstiegsseite führt.
 *
 * Die Beschriftung kommt von der Zielseite selbst — auch das nichts, was hier
 * gepflegt werden muss. Mit `mitText` erscheint zusätzlich die `description`
 * aus deren Frontmatter. Das lohnt sich nur, wo diese Sätze fürs Kurzlesen
 * geschrieben sind; sonst stehen in den Kacheln drei Zeilen Kleingedrucktes,
 * die niemand liest.
 *
 * Für eine Einstiegsseite mit Abschnitten lässt sich die Auswahl eingrenzen:
 *
 *     ## Konzepte
 *
 *     <Unterseiten nur="planung/zev-zusammenschluss-zum-eigenverbrauch, planung/virtuelle-zev-vzev" />
 *
 *     ## Weiteres
 *
 *     <Unterseiten ohne="planung/zev-zusammenschluss-zum-eigenverbrauch, planung/virtuelle-zev-vzev" />
 *
 * `nur` bestimmt Auswahl **und** Reihenfolge, `ohne` nimmt einzelne heraus.
 * Der letzte Abschnitt einer Seite sollte `ohne` verwenden und dort alles
 * aufzählen, was oben schon steht: Dann landet eine Seite, die später in die
 * Navigation kommt, von selbst dort, statt unbemerkt zu fehlen.
 *
 * Genau dieser Abschnitt kann aber leer ausfallen — je nach Land bleibt
 * nichts übrig. Deshalb gibt es `titel`: Die Überschrift gehört dann zur
 * Komponente und erscheint nur, wenn auch Kacheln da sind.
 *
 *     <Unterseiten titel="Weiteres" ohne="…" />
 *
 * Für die benannten Abschnitte ist eine gewöhnliche Markdown-Überschrift
 * besser — sie steht im Inhaltsverzeichnis rechts.
 *
 * Trägt eine Zielseite im Frontmatter ein `symbol`, steht dieses Zeichen über
 * ihrem Titel in der Kachel — welche es gibt, steht in
 * `src/components/Seitensymbol/`. Ohne Angabe bleibt die Kachel schlicht, auch
 * gemischt: Eine Reihe aus Kacheln mit und ohne Symbol sieht allerdings unruhig
 * aus, deshalb lohnt es sich, einen Abschnitt ganz oder gar nicht zu
 * bebildern.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {
  useDoc,
  useDocById,
  useLayoutDoc,
} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import {sichtbar, useLand} from '@site/src/laender';
import type {Schrittkette} from '@site/plugins/schrittkette';
import Seitensymbol from '@site/src/components/Seitensymbol';
import styles from './styles.module.css';

type Props = {
  /** Übersichtsseite, deren Unterseiten gezeigt werden. Ohne Angabe: diese. */
  von?: string;
  /** Nur diese Kennungen, in dieser Reihenfolge. Mit Komma getrennt. */
  nur?: string;
  /** Alle ausser diesen Kennungen. Mit Komma getrennt. */
  ohne?: string;
  /**
   * Überschrift über den Kacheln, die nur erscheint, wenn es welche gibt.
   * Für den Sammelabschnitt am Seitenende gedacht; sonst schreibt man die
   * Überschrift als Markdown über die Zeile.
   */
  titel?: string;
  /** Zusätzlich die Beschreibung der Zielseite zeigen. */
  mitText?: boolean;
  /**
   * Mindestbreite einer Kachel. Daraus ergibt sich, wie viele nebeneinander
   * passen: bei `16rem` sind es in der Textspalte zwei bis drei.
   */
  min?: string;
};

function Kachel({
  kennung,
  symbol,
  mitText,
}: {
  kennung: string;
  symbol?: string;
  mitText?: boolean;
}): React.ReactElement | null {
  // Wie beim Wegweiser: Titel und Adresse hält Docusaurus getrennt bereit.
  // Beide werfen beim Bauen, wenn die Kennung nicht existiert.
  const ziel = useDocById(kennung);
  const adresse = useLayoutDoc(kennung);
  if (!adresse) return null;

  return (
    <Link className={styles.kachel} to={adresse.path}>
      {/* Das Symbol steht im Frontmatter der Zielseite. Hat sie keines,
          zeichnet `Seitensymbol` nichts und die Kachel sieht aus wie zuvor. */}
      <Seitensymbol name={symbol} className={styles.symbol} groesse={56} />
      <strong className={styles.titel}>{ziel.title}</strong>
      {mitText && ziel.description && (
        <span className={styles.text}>{ziel.description}</span>
      )}
    </Link>
  );
}

/** `"a, b , c"` → `['a', 'b', 'c']` */
function alsListe(wert: string | undefined): string[] {
  return (wert ?? '')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
}

export default function Unterseiten({
  von,
  nur,
  ohne,
  titel,
  mitText,
  min = '16rem',
}: Props): React.ReactElement | null {
  const {metadata} = useDoc();
  const kette = usePluginData('smart-me-schrittkette') as Schrittkette | undefined;
  // Beim ersten Zeichnen ist das Land noch unbekannt (`null`) und damit alles
  // sichtbar — serverseitig und im Browser dasselbe Ergebnis, kein Flackern.
  const land = useLand();

  if (!kette) return null;

  const eltern = von ?? metadata.id;
  const ausgenommen = new Set(alsListe(ohne));
  const gewaehlt = nur
    ? alsListe(nur)
    : (kette.kinder[eltern] ?? []).filter((kennung) => !ausgenommen.has(kennung));
  const kinder = gewaehlt.filter((kennung) =>
    sichtbar(kette.laender[kennung], land),
  );

  if (kinder.length === 0) return null;

  return (
    <>
      {titel && <h3>{titel}</h3>}
      <div
        className={styles.raster}
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
        }}>
        {kinder.map((kennung) => (
          <Kachel
            key={kennung}
            kennung={kennung}
            symbol={kette.symbole[kennung]}
            mitText={mitText}
          />
        ))}
      </div>
    </>
  );
}
