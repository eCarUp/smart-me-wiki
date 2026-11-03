import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLand} from '@site/src/laender';
import styles from './styles.module.css';

type EmbedProps = {
  /** Vollständige URL oder Pfad der einzubettenden Anwendung. */
  src: string;
  /** Beschriftung für Screenreader – Pflicht, der Rahmen ist sonst namenlos. */
  title: string;
  /**
   * Seitenverhältnis als Breite/Höhe, z.B. `"1.706"`. Stammt aus der alten
   * Site, die es als `padding-top` in Prozent hinterlegt hatte, und hat
   * Vorrang vor `height`.
   */
  aspect?: string;
  /**
   * Feste Höhe als CSS-Wert, wenn kein Seitenverhältnis bekannt ist.
   * Eingebettete Anwendungen können ihre Höhe nicht selbst melden.
   *
   * Eine hier angegebene Höhe gilt **genau so** – die Mindesthöhe aus dem
   * Stylesheet wird ausgeschaltet. Das ist für eingebettete Tabellen nötig:
   * eine Tabelle mit sechs Zeilen braucht keine 520 Pixel, und der leere
   * Rest darunter sieht nach einem Fehler aus.
   */
  height?: string;
  /**
   * Gibt weiter, in welcher Umgebung die Anwendung steckt: die Länderwahl des
   * Besuchers und ob diese Seite hell oder dunkel ist.
   *
   * Nur für Anwendungen, die etwas damit anfangen – Billy antwortet je nach
   * Land über ZEV und VEWA oder über Mieterstrom, und er richtet sich nach dem
   * Aussehen dieser Seite statt nach dem Betriebssystem des Besuchers. Ohne
   * Länderwahl wird `null` gesendet, und das heisst dort wie hier: alle Länder.
   *
   * Beides geht als Nachricht und nicht über die Adresse: eine veränderte
   * Adresse lädt den Rahmen neu und wirft weg, was darin schon passiert ist.
   */
  mitKontext?: boolean;
};

/**
 * Bettet eine externe Anwendung ein – etwa den smart-me Support-KI-Agenten
 * oder einen der Rechner.
 *
 * Für Videos gibt es `<Video>`; das hält ein festes 16:9-Verhältnis, was für
 * eine Anwendung nicht passt.
 */
export default function Embed({
  src,
  title,
  aspect,
  height,
  mitKontext,
}: EmbedProps): React.ReactElement {
  const ratio = aspect ? Number(aspect) : NaN;
  const style: React.CSSProperties =
    height !== undefined
      ? {height, minHeight: 0}
      : Number.isFinite(ratio) && ratio > 0
        ? {aspectRatio: String(ratio)}
        : {height: '75vh'};

  // Bei Pfaden im eigenen Projekt fehlt sonst die baseUrl – anders als bei
  // Bildern im Markdown ergänzt Docusaurus sie in JSX-Attributen nicht selbst.
  const url = useBaseUrl(src);

  const rahmen = React.useRef<HTMLIFrameElement>(null);
  const gewaehlt = useLand();

  // Länderwahl und Aussehen gehen als Nachricht hinüber und nicht über die
  // Adresse: ein geänderter `src` lädt den Rahmen neu, und ein angefangenes
  // Gespräch wäre weg. Das Aussehen muss überhaupt mit, weil der Rahmen es
  // nicht sehen kann und sich sonst nach dem Betriebssystem des Besuchers
  // richtet — wer das Wiki hell liest, aber ein dunkles System hat, bekäme
  // einen schwarzen Kasten mitten in eine weisse Seite.
  //
  // **Den richtigen Zeitpunkt sagt die Anwendung selbst.** Ihn zu erraten geht
  // schief: Beim Einhängen ist der Rahmen meist noch `about:blank`, die
  // Nachricht wird verworfen, und ein danach angehängter `load`-Zuhörer feuert
  // nie mehr, wenn der Rahmen schon geladen war. Genau daran lag es, dass der
  // Rahmen anfangs dunkel in einem hellen Wiki stand. Gesendet wird deshalb auf
  // ihre Meldung hin — und zusätzlich bei jeder Änderung hier.
  React.useEffect(() => {
    if (!mitKontext) return undefined;
    const rahmenEl = rahmen.current;
    if (!rahmenEl) return undefined;
    const ziel = new URL(url, window.location.href).origin;

    const senden = () => {
      try {
        rahmenEl.contentWindow?.postMessage({type: 'smartme-wiki:land', land: gewaehlt}, ziel);
        rahmenEl.contentWindow?.postMessage(
          {type: 'smartme-wiki:theme', theme: document.documentElement.dataset.theme ?? 'light'},
          ziel,
        );
      } catch {
        // Rahmen noch nicht so weit – seine Meldung holt es nach.
      }
    };

    const aufMeldung = (e: MessageEvent) => {
      if (
        e.source === rahmenEl.contentWindow &&
        e.origin === ziel &&
        (e.data as {type?: string} | null)?.type === 'smartme-wiki:ready'
      ) {
        senden();
      }
    };

    window.addEventListener('message', aufMeldung);
    senden();
    rahmenEl.addEventListener('load', senden);
    const beobachter = new MutationObserver(senden);
    beobachter.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
    return () => {
      window.removeEventListener('message', aufMeldung);
      rahmenEl.removeEventListener('load', senden);
      beobachter.disconnect();
    };
  }, [mitKontext, gewaehlt, url]);

  return (
    <iframe
      ref={rahmen}
      className={styles.embed}
      style={style}
      src={url}
      title={title}
      loading="lazy"
      allow="clipboard-write; fullscreen"
    />
  );
}
