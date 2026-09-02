/**
 * Gemeinsame Kenntnis über den Aufbau der alten Google-Sites-Seiten.
 *
 * Eine Google-Sites-Seite besteht aus einer Reihe von <section>-Elementen.
 * Alles ausserhalb davon (Navigation, Kopfzeile, Suche) ist Rahmenwerk. Innerhalb
 * der Sections steckt zusätzlich noch etwas Oberfläche, die hier zentral entfernt
 * wird, damit Crawler und Konverter exakt dieselbe Sicht auf den Inhalt haben.
 */
import type {CheerioAPI, Cheerio} from 'cheerio';
import type {Element} from 'domhandler';

/** Bild-Hosts, die nur Google-Sites-Icons ausliefern. */
const ICON_HOSTS = new Set(['www.gstatic.com', 'www.google.com', 'ssl.gstatic.com']);

/** Erkennt die site-weite Fusszeile in allen vier Sprachen. */
const FOOTER_PATTERN =
  /Alle Rechte vorbehalten|All rights reserved|Tous droits réservés|Tutti i diritti riservati/i;

/** Beschriftungen des Sprachumschalters, der pro Seite eingebaut ist. */
const LANGUAGE_LABELS = new Set([
  'english',
  'deutsch',
  'german',
  'français',
  'francais',
  'french',
  'italiano',
  'italian',
]);

/** Die Inhalts-Sections einer Seite – ohne die site-weite Fusszeile. */
export function contentSections($: CheerioAPI): Cheerio<Element> {
  const sections = $('section');
  return sections.filter((_, el) => !FOOTER_PATTERN.test($(el).text()));
}

/**
 * Entfernt Google-Sites-Oberfläche aus den übergebenen Sections:
 * das seiteninterne Inhaltsverzeichnis, den Sprachumschalter, Icon-Grafiken
 * und dekorative SVGs.
 *
 * Gibt die URL der englischen Schwesterseite zurück, falls ein Sprachumschalter
 * gefunden wurde – daraus entsteht später die DE/EN-Zuordnung.
 */
export function stripChrome($: CheerioAPI, $sections: Cheerio<Element>): {englishUrl?: string} {
  let englishUrl: string | undefined;

  // Seiteninternes Inhaltsverzeichnis – Docusaurus erzeugt das selbst.
  $sections.find('.SV3pxb').remove();

  // Sprachumschalter ("English"-Knopf oben rechts).
  $sections.find('a[href]').each((_, el) => {
    const $a = $(el);
    const label = $a.text().replace(/\s+/g, ' ').trim().toLowerCase();
    if (!LANGUAGE_LABELS.has(label)) return;
    const target = unwrapGoogleRedirect($a.attr('href')!);
    if (label === 'english' && /doc\.smart-me\.com/.test(target)) englishUrl = target;
    // Der Knopf steckt in mehreren Wrapper-Divs; der äusserste mit role=presentation
    // ist die eigentliche Schaltfläche.
    const button = $a.closest('[role="presentation"]');
    (button.length ? button : $a).remove();
  });

  // Icon-Grafiken (Drive-, Sheets-Symbole) und dekorative SVGs.
  $sections.find('img').each((_, el) => {
    const src = $(el).attr('src');
    if (src && isIconUrl(src)) $(el).remove();
  });
  $sections.find('svg').remove();

  return {englishUrl};
}

export function isIconUrl(src: string): boolean {
  try {
    return ICON_HOSTS.has(new URL(src, 'https://dok.smart-me.com').host);
  } catch {
    return false;
  }
}

/**
 * Google Sites verpackt externe Links in einen Redirect:
 * https://www.google.com/url?q=<ziel>&sa=D&sntz=1&usg=...
 */
export function unwrapGoogleRedirect(href: string): string {
  if (!href.includes('google.com/url')) return href;
  try {
    const q = new URL(href).searchParams.get('q');
    return q ?? href;
  } catch {
    return href;
  }
}

/**
 * Bild-URLs einer Seite in Dokumentreihenfolge. Muss vom Crawler und vom
 * Konverter identisch aufgerufen werden, damit die Indizes zusammenpassen.
 */
export function contentImageUrls($: CheerioAPI): string[] {
  const $sections = contentSections($);
  stripChrome($, $sections);
  const urls: string[] = [];
  $sections.find('img').each((_, el) => {
    const src = $(el).attr('src');
    if (src) urls.push(src);
  });
  return urls;
}
