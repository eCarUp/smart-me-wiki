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
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {usePluginData} from '@docusaurus/useGlobalData';
import NaechsterSchritt from '@site/src/components/NaechsterSchritt';
import type {Schrittkette} from '@site/plugins/schrittkette';

export default function PaginatorWrapper(): React.ReactNode {
  const {metadata} = useDoc();
  const kette = usePluginData('smart-me-schrittkette') as Schrittkette | undefined;
  if (!kette) return null;

  const kennung = metadata.id;
  return (
    <NaechsterSchritt
      naechste={kette.naechste[kennung] ?? []}
      optionale={kette.optionale[kennung] ?? []}
      vorherige={kette.vorherige[kennung]}
    />
  );
}
