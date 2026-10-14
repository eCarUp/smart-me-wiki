/**
 * Setzt die Länderwahl über den Inhalt der Startseite.
 *
 * Nur dort: Wer über einen geteilten Link oder aus der Suche auf einer
 * Unterseite landet, bekommt sofort seine Antwort und keine Frage.
 */
import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LandKarte from '@site/src/components/LandKarte';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): React.ReactNode {
  const {pathname} = useLocation();
  // useBaseUrl kennt die Sprache: /smart-me-wiki/ bzw. /smart-me-wiki/fr/.
  const start = useBaseUrl('/');
  const aufStartseite = pathname.replace(/\/$/, '') === start.replace(/\/$/, '');

  return (
    <>
      {aufStartseite && <LandKarte />}
      <Content {...props} />
    </>
  );
}
