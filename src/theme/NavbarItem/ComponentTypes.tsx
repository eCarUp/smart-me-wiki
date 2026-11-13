/**
 * Macht Rollen- und Länderschalter als Navigationseinträge verfügbar.
 *
 * In `docusaurus.config.ts` stehen dann nur noch `{type: 'custom-rollenWahl'}`
 * und `{type: 'custom-landWahl'}` — Schlüssel mit dem Präfix `custom-` sind
 * für eigene Einträge vorgesehen.
 */
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import LandWahl from '@site/src/components/LandWahl';
import RollenWahl from '@site/src/components/RollenWahl';

export default {
  ...ComponentTypes,
  'custom-landWahl': LandWahl,
  'custom-rollenWahl': RollenWahl,
};
