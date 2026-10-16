/**
 * Zeigt einen Abschnitt nur bei passender Länderwahl.
 *
 * Gedacht für die Neuigkeiten: Die Liste ist eine einzige, chronologisch
 * sortierte Datei. Würde man sie in eine schweizerische und eine deutsche
 * aufteilen, müsste jede Portal-Neuigkeit zweimal gepflegt werden und die
 * Reihenfolge liefe auseinander. Stattdessen trägt nur das Besondere eine
 * Kennzeichnung:
 *
 *     <NurFuer land="ch">
 *
 *     ## NEU: ZEV mit Notstromsystemen
 *
 *     …
 *
 *     </NurFuer>
 *
 * Es gilt dieselbe Regel wie in der Navigation: **Ohne Länderwahl ist alles
 * sichtbar.** Wer über einen geteilten Link oder aus der Suche kommt, soll
 * nichts verpassen, nur weil er die Frage auf der Startseite nie gesehen hat.
 */
import React from 'react';
import {sichtbar, useLand} from '@site/src/laender';

type Props = {
  /** Ein Länderkürzel (`ch`) oder mehrere, mit Komma: `ch,de`. */
  land: string;
  children: React.ReactNode;
};

export default function NurFuer({land, children}: Props): React.ReactElement | null {
  const gewaehlt = useLand();
  const laender = land.split(',').map((l) => l.trim()).filter(Boolean);
  return sichtbar(laender, gewaehlt) ? <>{children}</> : null;
}
