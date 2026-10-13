/**
 * Blendet Navigationseinträge aus, die nicht zum gewählten Land gehören.
 *
 * Die Kennzeichnung steht in `sidebars.ts` am Eintrag:
 *
 *     {type: 'doc', id: 'konfiguration/billing/vewa-abrechnung',
 *      customProps: {laender: ['ch']}}
 *
 * Alles ohne `laender` ist überall sichtbar. Dadurch bleiben die gut hundert
 * gemeinsamen Seiten unberührt, und ein neues Land heisst: neue Einträge
 * kennzeichnen, fertig.
 *
 * Gefiltert wird im Browser, nicht beim Bauen. Die ausgeblendeten Seiten
 * stehen also weiterhin im ausgelieferten HTML und sind über die Suche und
 * über direkte Links erreichbar — das ist gewollt, aber es heisst auch: der
 * Filter ist Komfort, kein Zugriffsschutz.
 */
import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type {WrapperProps} from '@docusaurus/types';
import {sichtbar, useLand} from '@site/src/laender';

type Props = WrapperProps<typeof DocSidebarItemType>;

export default function DocSidebarItemWrapper(props: Props): React.ReactNode {
  const land = useLand();
  const eintrag = props.item as {customProps?: {laender?: unknown}};

  if (!sichtbar(eintrag.customProps?.laender, land)) return null;

  return <DocSidebarItem {...props} />;
}
