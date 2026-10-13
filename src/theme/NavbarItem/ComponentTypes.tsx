/**
 * Macht den Länderschalter als Navigationseintrag verfügbar.
 *
 * In `docusaurus.config.ts` steht dann nur noch `{type: 'custom-landWahl'}` —
 * Schlüssel mit dem Präfix `custom-` sind für eigene Einträge vorgesehen.
 */
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import LandWahl from '@site/src/components/LandWahl';

export default {
  ...ComponentTypes,
  'custom-landWahl': LandWahl,
};
