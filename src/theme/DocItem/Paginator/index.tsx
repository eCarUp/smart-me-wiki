/**
 * Ersetzt „Zurück / Weiter" am Seitenfuss.
 *
 * Docusaurus erzeugt diese beiden Schaltflächen aus der Reihenfolge der
 * Navigation. Das ergibt nur Sinn, wenn die Seiten eine Lesereihenfolge haben
 * — ein Wiki hat keine. „Weiter" führte deshalb regelmässig auf eine Seite,
 * die mit der gerade gelesenen nichts zu tun hat.
 *
 * Statt dessen erscheint hier der Wegweiser aus der Schrittkette. Die Kette
 * steht im Frontmatter der deutschen Seiten und wird beim Bauen eingesammelt;
 * siehe `plugins/schrittkette/` und `src/components/NaechsterSchritt/`.
 *
 * Gefiltert wird nach Land: Eine Seite darf mehrere Folgeseiten angeben, von
 * denen je nach Länderwahl nur eine passt. Nach der Inbetriebnahme folgt in
 * der Schweiz die ZEV-Ordnerstruktur, in Deutschland die für Mieterstrom —
 * dieselbe Seite, zwei Wege. Wer kein Land gewählt hat, sieht beide.
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import NaechsterSchritt from '@site/src/components/NaechsterSchritt';
import {sichtbar, useLand} from '@site/src/laender';
import type {Schrittkette} from '@site/plugins/schrittkette';

export default function PaginatorWrapper(): React.ReactNode {
  const {metadata} = useDoc();
  const kette = usePluginData('smart-me-schrittkette') as Schrittkette | undefined;
  // Beim ersten Zeichnen ist das Land noch unbekannt (`null`) und damit alles
  // sichtbar — serverseitig und im Browser dasselbe Ergebnis, kein Flackern.
  const land = useLand();

  if (!kette) return null;

  const passt = (kennung: string): boolean =>
    sichtbar(kette.laender[kennung], land);

  const kennung = metadata.id;
  const vorherige = kette.vorherige[kennung];

  return (
    <NaechsterSchritt
      naechste={(kette.naechste[kennung] ?? []).filter(passt)}
      optionale={(kette.optionale[kennung] ?? []).filter(passt)}
      vorherige={vorherige && passt(vorherige) ? vorherige : undefined}
    />
  );
}
