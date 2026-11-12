/**
 * Länderbezogenes am Inhalt einer Dokumentseite. Zwei Dinge:
 *
 * 1. Auf der Startseite steht die Länderwahl über dem Inhalt. Nur dort: Wer
 *    über einen geteilten Link oder aus der Suche auf einer Unterseite
 *    landet, bekommt sofort seine Antwort und keine Frage.
 *
 * 2. Die beiden Einstiegsseiten `/schweiz` und `/deutschland` setzen die
 *    Länderwahl auf ihr Land. Ohne das zeigte ein von aussen verschickter
 *    Link auf /schweiz jemandem, der zuletzt Deutschland gewählt hat,
 *    weiterhin die deutsche Navigation: Der Inhalt sagt Schweiz, die
 *    Seitenleiste führt „Kontakt Deutschland" und blendet ZEV und VEWA aus.
 *
 *    Zwei Ausnahmen. Ein `?land=` in der Adresse steuert von aussen und
 *    behält Vorrang. Und wer ausdrücklich „Alle Länder" gewählt hat, will
 *    nichts ausgeblendet bekommen — auch nicht auf einer Länderseite.
 *
 *    Gesetzt wird einmal beim Öffnen der Seite, nicht bei jeder Änderung:
 *    Sonst liesse sich oben rechts auf einer Länderseite kein anderes Land
 *    mehr wählen, weil die Seite es sofort zurücksetzte.
 */
import React, {useEffect, useRef} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LandKarte from '@site/src/components/LandKarte';
import {PARAMETER, useLandStatus, waehleLand} from '@site/src/laender';

type Props = WrapperProps<typeof ContentType>;

const ohneSchraegstrich = (pfad: string) => pfad.replace(/\/$/, '');

export default function ContentWrapper(props: Props): React.ReactNode {
  const {pathname} = useLocation();
  // useBaseUrl kennt die Sprache: / bzw. /fr/.
  const start = useBaseUrl('/');
  const schweiz = useBaseUrl('/schweiz');
  const deutschland = useBaseUrl('/deutschland');

  const hier = ohneSchraegstrich(pathname);
  const aufStartseite = hier === ohneSchraegstrich(start);
  const seitenLand =
    hier === ohneSchraegstrich(schweiz)
      ? 'ch'
      : hier === ohneSchraegstrich(deutschland)
        ? 'de'
        : null;

  const {land, geladen} = useLandStatus();
  const gesetztFuer = useRef<string | null>(null);

  useEffect(() => {
    if (!seitenLand || !geladen) return;
    // Nur einmal je geöffneter Seite, siehe oben.
    if (gesetztFuer.current === hier) return;
    gesetztFuer.current = hier;
    if (land === seitenLand || land === 'alle') return;
    if (new URLSearchParams(window.location.search).has(PARAMETER)) return;
    waehleLand(seitenLand);
  }, [seitenLand, geladen, hier, land]);

  return (
    <>
      {aufStartseite && <LandKarte />}
      <Content {...props} />
    </>
  );
}
