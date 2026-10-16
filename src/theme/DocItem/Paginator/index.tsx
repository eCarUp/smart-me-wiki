/**
 * Ersetzt „Zurück / Weiter" am Seitenfuss.
 *
 * Docusaurus erzeugt diese beiden Schaltflächen aus der Reihenfolge der
 * Navigation. Das ergibt nur Sinn, wenn die Seiten eine Lesereihenfolge haben
 * — ein Wiki hat keine. „Weiter" führte deshalb regelmässig auf eine Seite,
 * die mit der gerade gelesenen nichts zu tun hat.
 *
 * Statt dessen erscheint hier nur, was eine Seite ausdrücklich als Folge
 * angibt. Siehe `src/components/NaechsterSchritt/`.
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import NaechsterSchritt from '@site/src/components/NaechsterSchritt';

export default function PaginatorWrapper(): React.ReactNode {
  const {frontMatter} = useDoc();
  const roh = (frontMatter as {naechste_schritte?: unknown}).naechste_schritte;

  if (!Array.isArray(roh)) return null;
  const kennungen = roh.filter((k): k is string => typeof k === 'string' && k.length > 0);

  return <NaechsterSchritt kennungen={kennungen} />;
}
