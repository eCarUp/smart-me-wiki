/**
 * Blendet Navigationseinträge aus, die nicht zur gewählten Sicht gehören.
 *
 * Zwei Filter hintereinander, beide am Eintrag in `sidebars.ts` gekennzeichnet:
 *
 *     {type: 'doc', id: 'konfiguration/billing/vewa-abrechnung',
 *      customProps: {laender: ['ch'], rolle: 'abrechnung'}}
 *
 * **Land ist eine Menge.** Ohne `laender` ist eine Seite überall sichtbar.
 * Dadurch bleiben die gut hundert gemeinsamen Seiten unberührt, und ein neues
 * Land heisst: neue Einträge kennzeichnen, fertig.
 *
 * **Rolle ist eine Schwelle.** `rolle` nennt die niedrigste Rolle, die den
 * Eintrag sehen darf. Ohne Angabe gehört er dem Installateur — der sieht
 * ohnehin alles, und er ist die Voreinstellung. Warum herum das so ist, steht
 * in `src/rollen/index.ts`.
 *
 * Zwei Dinge ersparen dabei die Fleissarbeit in `sidebars.ts`:
 *
 * 1. Die Angabe **vererbt sich nach unten**. Steht sie am Oberpunkt, gilt sie
 *    für alles darin; ein Untereintrag mit eigener Angabe sticht die geerbte.
 *    So steht an „Rechnungsstellung Schweiz" einmal `verwalter`, und nur die
 *    sechs Einrichtungsseiten darin tragen zusätzlich `abrechnung`.
 * 2. Ein Oberpunkt **richtet sich nach seinem offensten Eintrag**. Die
 *    Störungsbehebung ist für den Abrechnungsdienstleister da, sobald eine
 *    Seite darin für ihn gekennzeichnet ist — der Oberpunkt selbst braucht
 *    keine Angabe. Ohne diese Regel wäre jede gekennzeichnete Seite von ihrem
 *    eigenen Oberpunkt verdeckt, und man müsste die Kennzeichnung überall
 *    doppelt pflegen.
 *
 * Gefiltert wird im Browser, nicht beim Bauen. Die ausgeblendeten Seiten
 * stehen also weiterhin im ausgelieferten HTML und sind über die Suche und
 * über direkte Links erreichbar — das ist gewollt, aber es heisst auch: die
 * Filter sind Komfort, kein Zugriffsschutz.
 */
import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type {WrapperProps} from '@docusaurus/types';
import {sichtbar, useLand} from '@site/src/laender';
import {stufeVon, useRolle} from '@site/src/rollen';

type Props = WrapperProps<typeof DocSidebarItemType>;

type Eintrag = {
  items?: Eintrag[];
  customProps?: {laender?: unknown; rolle?: unknown};
};

/**
 * Die Rolle, die der umgebende Oberpunkt verlangt.
 *
 * Docusaurus zeichnet eine Kategorie und ihre Einträge mit demselben Bauteil,
 * also kommt dieser Wrapper für jede Ebene erneut dran. Was die Kategorie
 * verlangt, reicht er hier an alles darunter weiter — sonst müsste in
 * `sidebars.ts` jede der 29 Drittsystem-Seiten einzeln gekennzeichnet werden.
 */
const RollenErbe = React.createContext<string | undefined>(undefined);

const eigeneRolle = (eintrag: Eintrag): string | undefined =>
  typeof eintrag.customProps?.rolle === 'string' ? eintrag.customProps.rolle : undefined;

/**
 * Die niedrigste Rolle, die diesen Eintrag oder irgendetwas darunter sehen
 * darf — als Stufe, weil sich Zahlen vergleichen lassen.
 *
 * Länderfremde Einträge zählen nicht mit: Sonst stünde für jemanden mit
 * gewähltem Deutschland ein Oberpunkt da, dessen einziger Grund eine
 * Schweizer Seite ist, die er gar nicht sieht.
 */
function kleinsteStufe(eintrag: Eintrag, geerbt: string | undefined, land: string | null): number {
  const gilt = eigeneRolle(eintrag) ?? geerbt;
  let kleinste = stufeVon(gilt);
  for (const kind of eintrag.items ?? []) {
    if (kleinste === 1) break;
    if (!sichtbar(kind.customProps?.laender, land)) continue;
    kleinste = Math.min(kleinste, kleinsteStufe(kind, gilt, land));
  }
  return kleinste;
}

export default function DocSidebarItemWrapper(props: Props): React.ReactNode {
  const land = useLand();
  const rolle = useRolle();
  const geerbt = React.useContext(RollenErbe);
  const eintrag = props.item as Eintrag;

  if (!sichtbar(eintrag.customProps?.laender, land)) return null;
  if (stufeVon(rolle) < kleinsteStufe(eintrag, geerbt, land)) return null;

  const eigene = eigeneRolle(eintrag);
  const eintragsBaum = <DocSidebarItem {...props} />;

  // Nur einen neuen Rahmen aufspannen, wenn dieser Eintrag die Vorgabe für
  // seine Unterpunkte tatsächlich ändert.
  return eigene === undefined ? (
    eintragsBaum
  ) : (
    <RollenErbe.Provider value={eigene}>{eintragsBaum}</RollenErbe.Provider>
  );
}
