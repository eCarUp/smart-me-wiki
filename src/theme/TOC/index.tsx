/**
 * Hält das Inhaltsverzeichnis mit der Länderwahl in Einklang.
 *
 * Das Verzeichnis rechts wird beim Bauen aus allen Überschriften der Seite
 * erzeugt. Die Neuigkeiten auf den Einstiegsseiten werden aber erst im
 * Browser gefiltert (siehe `src/components/NurFuer/`). Ohne diese Ergänzung
 * stünden auf der deutschen Einstiegsseite die vier Schweizer Meldungen im
 * Verzeichnis, und ein Klick darauf führte ins Leere.
 *
 * Deshalb: nach dem Zeichnen nachsehen, welche Überschriften wirklich auf der
 * Seite stehen, und nur die behalten. Beim ersten Zeichnen bleibt das
 * Verzeichnis vollständig — es muss zu dem HTML passen, das der Server
 * geliefert hat, sonst beschwert sich React.
 */
import React, {useEffect, useState} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type {WrapperProps} from '@docusaurus/types';
import {useLand} from '@site/src/laender';

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): React.ReactNode {
  const land = useLand();
  const [vorhanden, setVorhanden] = useState<Set<string> | null>(null);

  useEffect(() => {
    setVorhanden(
      new Set(
        props.toc
          .filter((eintrag) => document.getElementById(eintrag.id))
          .map((eintrag) => eintrag.id),
      ),
    );
    // `land` gehört dazu: Wechselt die Wahl, erscheinen oder verschwinden
    // Überschriften, und das Verzeichnis muss nachziehen.
  }, [props.toc, land]);

  const toc = vorhanden
    ? props.toc.filter((eintrag) => vorhanden.has(eintrag.id))
    : props.toc;

  return <TOC {...props} toc={toc} />;
}
