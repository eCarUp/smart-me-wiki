/**
 * Klappt eine zusammengeklappte FAQ-Antwort auf, wenn die Adresse direkt auf
 * sie zeigt.
 *
 * Die Fragen im FAQ sind `<details id="…">`. Docusaurus meldet diese IDs als
 * gültige Sprungziele, springt beim Aufruf auch dorthin – lässt den Block aber
 * geschlossen. Wer einen Link zu einer bestimmten Antwort bekommt, landet dann
 * vor einer zugeklappten Zeile und muss noch einmal klicken.
 *
 * Geöffnet wird über einen Klick auf die Zusammenfassung, nicht über
 * `details.open`: Der Inhalt steckt in Docusaurus' Collapsible, dessen Höhe
 * React verwaltet. Ein von Hand gesetztes `open` zeigt den Rahmen, aber nicht
 * den Text.
 */
const ABSTAND_OBEN = 80; // Platz für die angeheftete Kopfzeile

/**
 * Beim Aufruf über einen Link ist die Seite zwar schon gezeichnet, React hat
 * den Klick-Handler der Zusammenfassung aber noch nicht angehängt – ein Klick
 * verpufft dann wirkungslos. Statt eine feste Wartezeit zu raten, wird es
 * mehrmals versucht, bis der Block wirklich offen ist.
 */
const VERSUCHE_NACH_MS = [0, 100, 250, 500, 900, 1500, 2500];

function oeffneZiel(): void {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if (!id) return;

  let geklickt = false;
  let gescrollt = false;

  const versuch = () => {
    if (gescrollt) return;
    const ziel = document.getElementById(id);
    if (!ziel) return;

    const details =
      ziel instanceof HTMLDetailsElement ? ziel : ziel.closest('details');
    if (!details) {
      gescrollt = true; // normaler Anker, darum kümmert sich Docusaurus
      return;
    }

    // `data-collapsed` setzt React erst beim nächsten Rendern. Direkt nach dem
    // Klick steht dort noch der alte Wert – deshalb wird nicht auf das
    // Ergebnis gewartet, sondern beim nächsten Versuch nachgesehen.
    if (details.dataset.collapsed === 'true') {
      if (!geklickt) {
        details.querySelector('summary')?.click();
        geklickt = true;
      }
      return;
    }

    gescrollt = true;
    // Erst nach der Aufklappbewegung scrollen, sonst zielt der Sprung auf die
    // Höhe von vorher.
    window.setTimeout(() => {
      const y = details.getBoundingClientRect().top + window.scrollY - ABSTAND_OBEN;
      window.scrollTo({top: y, behavior: 'smooth'});
    }, 300);
  };

  for (const ms of VERSUCHE_NACH_MS) window.setTimeout(versuch, ms);
}

if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', oeffneZiel);
}

export function onRouteDidUpdate(): void {
  oeffneZiel();
}
