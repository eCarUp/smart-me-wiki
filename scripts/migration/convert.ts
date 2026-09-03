/**
 * Wandelt das gecrawlte Google-Sites-Wiki in Docusaurus-Markdown um.
 *
 *   npx tsx scripts/migration/convert.ts
 *
 * Erwartet einen Crawl-Lauf (siehe crawl.ts) unter .migration-cache/.
 * Schreibt docs/, sidebars.ts, redirects.ts und migration-report.md.
 */
import {mkdir, readFile, writeFile, rm} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {pathToFileURL} from 'node:url';
import * as cheerio from 'cheerio';
import type {CheerioAPI, Cheerio} from 'cheerio';
import type {Element} from 'domhandler';
import GithubSlugger from 'github-slugger';
import TurndownService from 'turndown';
// @ts-expect-error – das GFM-Plugin bringt keine Typen mit.
import {gfm} from 'turndown-plugin-gfm';
import {cachePath, loadManifest, type Manifest} from './crawl';
import {contentSections, stripChrome, unwrapGoogleRedirect} from './googleSites';
import {buildPathMapping, crossSiteMap, DE_HOSTS} from './mapping';

const HOST = 'dok.smart-me.com';
const ORIGIN = `https://${HOST}`;
const DOCS_ROOT = 'docs';

/** Platzhalter, die erst nach dem MDX-Escaping durch echtes JSX ersetzt werden. */
const VIDEO_TOKEN = (id: string, title: string) => `@@VIDEO|${id}|${title}@@`;

export type PageInfo = {
  /** Alter Pfad, z.B. /konfiguration/billing/vewa-abrechnung */
  path: string;
  title: string;
  /** Zieldatei relativ zum Repo-Root */
  file: string;
  /** Docusaurus-Dokument-ID */
  id: string;
  /** Beschriftung aus der alten Navigation, falls vorhanden */
  navLabel?: string;
  navOrder: number;
  hasChildren: boolean;
};

// ---------------------------------------------------------------------------
// Hilfsfunktionen
// ---------------------------------------------------------------------------

/**
 * Erzeugt Anker exakt so wie Docusaurus: derselbe github-slugger, dieselbe
 * Reihenfolge, dieselbe Behandlung doppelter Überschriften. Damit passen die
 * automatisch vergebenen Anker, ohne dass eine Überschrift eine explizite
 * `{#id}` braucht – die verträgt sich mit MDX nämlich nicht.
 */
export function createSlugger(): (text: string) => string {
  const slugger = new GithubSlugger();
  return (text: string) => slugger.slug(text);
}

/**
 * Text einer Überschrift als eine Zeile. Google Sites trennt mehrzeilige
 * Überschriften mit `<br>`; ohne Ersatz durch ein Leerzeichen würden die Teile
 * aneinanderkleben ("AI ConnectorConnecting smart-me …").
 */
export function headingText($: CheerioAPI, el: Element): string {
  const $h = $(el).clone();
  $h.find('br').replaceWith(' ');
  return $h.text().replace(/\s+/g, ' ').trim();
}


/**
 * Escaped Zeichen, an denen sich der MDX-Parser verschlucken würde.
 * Fenced Code Blocks und Inline-Code bleiben unangetastet.
 */
export function escapeForMdx(markdown: string): string {
  const lines = markdown.split('\n');
  let inFence = false;
  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      // Zeile in Inline-Code-Segmente und Text zerlegen.
      return line
        .split(/(`[^`]*`)/g)
        .map((part) =>
          part.startsWith('`')
            ? part
            : part.replace(/</g, '&lt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;'),
        )
        .join('');
    })
    .join('\n');
}

/** YouTube-Video-ID aus einer Embed-, Watch- oder Kurz-URL. */
export function youtubeId(url: string): string | null {
  const m =
    url.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/) ??
    url.match(/youtube\.com\/watch\?(?:.*&)?v=([\w-]{6,})/) ??
    url.match(/youtu\.be\/([\w-]{6,})/);
  return m ? m[1] : null;
}

/** Erste sinnvolle Beschreibung aus dem Fliesstext, auf eine Satzlänge gekürzt. */
export function deriveDescription(markdown: string): string | null {
  for (const raw of markdown.split(/\n\s*\n/)) {
    const line = raw
      .replace(/^[#>\-*\s]+/, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&#123;/g, '{')
      .replace(/&#125;/g, '}')
      .replace(/\s+/g, ' ')
      .trim();
    if (line.length < 25 || /^(@@VIDEO|<Video)/.test(line)) continue;
    // Absätze, die im Original nur aus einem Link bestehen, beschreiben nichts.
    if (/^\[[^\]]*\]\([^)]*\)$/.test(raw.trim())) continue;
    const sentence = line.match(/^.{25,180}?[.!?](?:\s|$)/);
    if (sentence) return sentence[0].trim();
    return line.length > 180 ? `${line.slice(0, 177).trimEnd()}…` : line;
  }
  return null;
}

function frontmatterValue(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

// ---------------------------------------------------------------------------
// Navigation der alten Site
// ---------------------------------------------------------------------------

export type NavEntry = {label: string; href?: string};

/**
 * Liest die Navigationsleiste der alten Site in Dokumentreihenfolge aus.
 * Gruppenüberschriften (z.B. "Konfiguration") sind dort Anker ohne href.
 */
export function readNav($: CheerioAPI): NavEntry[] {
  const nav = $('[role="navigation"]').first();
  const entries: NavEntry[] = [];
  nav.find('a').each((_, el) => {
    const label = $(el).text().replace(/\s+/g, ' ').trim();
    if (!label) return;
    const href = $(el).attr('href');
    if (href && !href.startsWith('/')) return; // externe Links (Login-Portal)
    entries.push({label, href: href ? href.replace(/\/+$/, '') : undefined});
  });
  return entries;
}

// ---------------------------------------------------------------------------
// Seiten-Konvertierung
// ---------------------------------------------------------------------------

export type ConvertedPage = {
  title: string;
  markdown: string;
  description: string | null;
  /** Ziele des Sprachumschalters der Quellseite (Beschriftung -> URL). */
  languageLinks: Record<string, string>;
  /** Anzahl Bilder, die statt eines echten Alt-Textes einen Platzhalter tragen. */
  altPlaceholders: number;
  warnings: string[];
};

type LinkResolver = (oldPath: string) => string | null;

function buildTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
    hr: '---',
  });
  td.use(gfm);

  // Google Sites bettet Videos als iframe ein.
  td.addRule('iframe', {
    filter: 'iframe',
    replacement: (_content, node) => {
      const el = node as unknown as {getAttribute(name: string): string | null};
      const src = el.getAttribute('src') ?? '';
      const title = (el.getAttribute('title') ?? 'Video').replace(/\|/g, '-');
      const id = youtubeId(src);
      return `\n\n${VIDEO_TOKEN(id ?? src, title)}\n\n`;
    },
  });

  // Leere Absätze und Zierelemente erzeugen sonst Leerzeilen-Rauschen.
  td.addRule('dropEmpty', {
    filter: (node) =>
      ['DIV', 'P', 'SPAN'].includes(node.nodeName) &&
      node.textContent?.trim() === '' &&
      !node.querySelector('img, iframe, hr, br'),
    replacement: () => '',
  });

  return td;
}

/** Schriftarten, mit denen Google Sites Code auszeichnet – ein <pre> gibt es dort nicht. */
const MONOSPACE_FONTS = /source code pro|courier|consolas|roboto mono|monospace|menlo|monaco/i;

function isMonospaceParagraph($: CheerioAPI, el: Element): boolean {
  const $p = $(el);
  const text = $p.text().trim();
  if (!text) return false;
  const spans = $p.find('span[style]').toArray().filter((s) => $(s).text().trim());
  if (spans.length === 0) return false;
  return spans.every((s) => MONOSPACE_FONTS.test($(s).attr('style') ?? ''));
}

/**
 * Google Sites zeichnet Code nicht als <pre> aus, sondern als Folge von
 * <p>-Absätzen in einer Monospace-Schrift. Solche Läufe werden hier zu einem
 * echten <pre><code>-Block zusammengefasst, damit daraus ein Fenced Code Block
 * wird statt Fliesstext, den MDX als JSX oder Import misslesen würde.
 */
export function groupCodeBlocks($: CheerioAPI, $sections: Cheerio<Element>): void {
  const paragraphs = $sections.find('p').toArray();
  const isCode = new Map<Element, boolean>();
  for (const p of paragraphs) isCode.set(p, isMonospaceParagraph($, p));

  const handled = new Set<Element>();
  for (const start of paragraphs) {
    if (handled.has(start) || !isCode.get(start)) continue;

    // Nachfolgende Geschwister einsammeln; leere Absätze gelten als Leerzeilen.
    const run: Element[] = [start];
    let node = $(start).next();
    while (node.length) {
      const el = node[0] as Element;
      if (el.tagName !== 'p') break;
      const empty = !$(el).text().trim();
      if (!empty && !isCode.get(el)) break;
      run.push(el);
      node = node.next();
    }
    // Nachgestellte Leerzeilen gehören nicht mehr zum Block.
    while (run.length && !$(run[run.length - 1]).text().trim()) run.pop();
    if (run.length < 2) continue;

    const code = run.map((el) => $(el).text().replace(/ /g, ' ').trimEnd()).join('\n');
    const pre = $('<pre></pre>').append($('<code></code>').text(code));
    $(run[0]).replaceWith(pre);
    for (const el of run.slice(1)) {
      $(el).remove();
      handled.add(el);
    }
    handled.add(start);
  }
}

/**
 * Ordnet die Google-Sites-Überschriften-IDs einer Seite den späteren
 * Docusaurus-Ankern zu. Wird zweimal gebraucht: einmal im Vorlauf über alle
 * Seiten (für Links zwischen Seiten) und einmal beim Konvertieren.
 *
 * Der erste H1 wird zum Seitentitel und bekommt daher keinen Anker – ein Link
 * darauf zeigt auf die Seite selbst und ist mit `null` markiert.
 */
export function collectAnchors(html: string): Map<string, string | null> {
  const $ = cheerio.load(html);
  const $sections = contentSections($);
  stripChrome($, $sections);
  const map = new Map<string, string | null>();
  const headings = $sections.find('h1, h2, h3, h4, h5, h6').toArray();
  const firstH1 = headings.find((el) => el.tagName === 'h1');
  // Der Slugger muss dieselbe Reihenfolge sehen wie Docusaurus später, damit
  // doppelte Überschriften dieselben "-1"-Suffixe erhalten.
  const slugFor = createSlugger();
  for (const el of headings) {
    const text = headingText($, el);
    // Der erste H1 wird zum Seitentitel und taucht im Markdown nicht mehr auf –
    // er bekommt also auch keinen Anker.
    const slug = el === firstH1 ? null : slugFor(text);
    const id = $(el).attr('id');
    if (!id) continue;
    map.set(id, slug);
    // Sprungziele im Text verweisen auf dieselbe ID ohne den Suffix "_l".
    map.set(id.replace(/_l$/, ''), slug);
  }
  return map;
}

/** Wandelt eine einzelne gecrawlte Seite in Markdown um. */
export function convertPage(
  html: string,
  ctx: {
    path: string;
    /** Herkunfts-Site der Seite, z.B. https://dok.smart-me.com */
    origin: string;
    /** Hosts, unter denen dieselbe Site erreichbar ist – Links darauf sind intern. */
    selfHosts: string[];
    /**
     * `<host><pfad>` der jeweils anderen Sprachfassung -> Pfad in dieser Site.
     * Ein Verweis auf die englische Fassung einer Seite wird so zum Verweis auf
     * genau diese Seite; die Sprache wählt der Leser über das Locale-Dropdown.
     */
    crossSite: Map<string, string>;
    /** Wort für den Alt-Text-Platzhalter, z.B. "Abbildung" bzw. "Figure". */
    figureWord: string;
    images: {index: number; file: string | null; error?: string}[];
    resolveLink: LinkResolver;
    /** Überschriften-IDs dieser Seite; null = Seitentitel ohne eigenen Anker. */
    anchors: Map<string, string | null>;
    /** Löst eine Sprungmarke auf einer anderen Seite auf. */
    resolveAnchor: (path: string, id: string) => string | null | undefined;
    fallbackTitle: string;
  },
): ConvertedPage {
  const $ = cheerio.load(html);
  const $sections = contentSections($);
  const {languageLinks} = stripChrome($, $sections);
  const warnings: string[] = [];

  groupCodeBlocks($, $sections);

  // Google Sites packt den Überschriftentext in ein Wrapper-<div> (mitsamt der
  // "Link kopieren"-Schaltfläche). Turndown macht daraus sonst eine leere
  // Überschrift plus losen Absatz – deshalb jede Überschrift auf reinen Text
  // reduzieren.
  $sections.find('h1, h2, h3, h4, h5, h6').each((_, el) => {
    $(el).text(headingText($, el));
  });

  // --- Titel: erste H1, restliche H1 werden zu H2 -------------------------
  const headings = $sections.find('h1').toArray();
  let title = ctx.fallbackTitle;
  if (headings.length > 0) {
    title = headingText($, headings[0]) || ctx.fallbackTitle;
    $(headings[0]).remove();
    for (const extra of headings.slice(1)) {
      const $h = $(extra);
      const replacement = $('<h2></h2>').attr('id', $h.attr('id') ?? null);
      replacement.append($h.contents());
      $h.replaceWith(replacement);
    }
    if (headings.length > 1) {
      warnings.push(
        `${headings.length} H1-Überschriften gefunden – die erste wurde zum Seitentitel, ` +
          `die übrigen zu H2 herabgestuft.`,
      );
    }
  } else {
    warnings.push('Keine H1 gefunden – Titel aus der Navigation bzw. dem <title>-Tag übernommen.');
  }

  // --- Bilder auf die lokalen Kopien umbiegen -----------------------------
  let altPlaceholders = 0;
  const byIndex = new Map(ctx.images.map((i) => [i.index, i]));
  $sections.find('img').each((i, el) => {
    const $img = $(el);
    const record = byIndex.get(i);
    if (!record?.file) {
      warnings.push(`Bild ${i + 1} konnte nicht geladen werden (${record?.error ?? 'kein Eintrag'}).`);
      $img.remove();
      return;
    }
    // static/img/... -> /img/... (Docusaurus löst das gegen die baseUrl auf)
    $img.attr('src', record.file.replace(/^static/, ''));
    const alt = ($img.attr('alt') ?? '').trim();
    if (!alt) {
      // Google Sites hat zu keinem Bild einen Alt-Text gespeichert. Statt eine
      // Beschreibung zu erfinden, wird ein sachlicher Platzhalter gesetzt
      // (Seitentitel + laufende Nummer) – siehe migration-report.md.
      altPlaceholders += 1;
      $img.attr('alt', `${title} – ${ctx.figureWord} ${i + 1}`);
    }
    $img.removeAttr('srcset').removeAttr('width').removeAttr('height').removeAttr('class');
  });

  // --- Anker: Google-Sites-IDs auf lesbare Slugs abbilden -----------------
  const anchorMap = ctx.anchors;

  // --- Links umschreiben --------------------------------------------------
  $sections.find('a[href]').each((_, el) => {
    const $a = $(el);
    let href = unwrapGoogleRedirect($a.attr('href')!);

    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (!anchorMap.has(id)) {
        warnings.push(`Sprungmarke ${href} zeigt auf keine Überschrift dieser Seite.`);
        $a.attr('href', href);
        return;
      }
      // null = die Überschrift ist der Seitentitel und hat keinen eigenen Anker.
      const slug = anchorMap.get(id);
      $a.attr('href', slug ? `#${slug}` : '#');
      return;
    }

    // Absolute Links auf die eigene Site relativ machen – die alten Sites sind
    // teils über mehrere Domains erreichbar (z.B. dok. und wiki.smart-me.com).
    // Verweise auf die andere Sprachfassung werden auf dieselbe Seite in dieser
    // Site umgebogen.
    try {
      const parsed = new URL(href, ctx.origin);
      const key = `${parsed.host}${decodeURI(parsed.pathname).replace(/\/+$/, '')}`;
      const mapped = ctx.crossSite.get(key);
      if (mapped) {
        $a.attr('href', mapped);
        return;
      }
      if (ctx.selfHosts.includes(parsed.host)) {
        href = decodeURI(parsed.pathname).replace(/\/+$/, '') + parsed.hash || '/';
      }
    } catch {
      // Kein auswertbares Ziel – der Link bleibt, wie er ist.
    }

    if (href.startsWith('/')) {
      const [pathPart, hash] = href.split('#');
      const clean = decodeURI(pathPart).replace(/\/+$/, '') || '/';
      const target = ctx.resolveLink(clean);
      if (target) {
        // Sprungmarken auf andere Seiten auf deren neue Anker umschreiben.
        const slug = hash ? ctx.resolveAnchor(clean, hash) : undefined;
        $a.attr('href', slug ? `${target}#${slug}` : target);
        if (hash && slug === undefined) {
          warnings.push(`Sprungmarke #${hash} auf ${clean} zeigt auf keine Überschrift.`);
        }
      } else {
        warnings.push(`Interner Link ${clean} zeigt auf keine migrierte Seite.`);
        $a.attr('href', `${ctx.origin}${pathPart}`);
      }
      return;
    }

    $a.attr('href', href);
  });

  // --- Google-Sites-Schaltflächen ----------------------------------------
  // "Zurück zu ..."-Knöpfe sind reine Navigation – Docusaurus bietet dafür
  // Sidebar und Breadcrumbs. Alle übrigen Knöpfe werden zu normalen Links.
  $sections.find('a.FKF6mc').each((_, el) => {
    const $a = $(el);
    const text = $a.text().replace(/\s+/g, ' ').trim();
    if (/^(zurück|zurueck|back|retour|indietro)\b/i.test(text)) {
      const button = $a.closest('[role="presentation"]');
      (button.length ? button : $a).remove();
      return;
    }
    $a.empty().text(text).removeAttr('class').removeAttr('aria-label');
  });

  // --- Markdown erzeugen --------------------------------------------------
  const bodyHtml = $sections
    .toArray()
    .map((el) => $.html(el))
    .join('\n');
  const td = buildTurndown();
  let markdown = td.turndown(bodyHtml);

  markdown = escapeForMdx(markdown);

  // URL-Vorlagen mit Platzhaltern wie http://klk-fevo-<Serial>/ würden von
  // Markdown automatisch verlinkt – mit einer URL, die kein Parser akzeptiert.
  // Als Inline-Code sind sie sowohl gültig als auch besser lesbar.
  markdown = markdown.replace(/(?<!\]\()\bhttps?:\/\/[^\s)\]]*&lt;[^\s)\]]*/g, (url) =>
    `\`${url.replace(/&lt;/g, '<').replace(/&#123;/g, '{').replace(/&#125;/g, '}')}\``,
  );


  // Videos einsetzen.
  markdown = markdown.replace(/@@VIDEO\|([^|]*)\|([^@]*)@@/g, (_m, id: string, videoTitle: string) => {
    const safeTitle = videoTitle.replace(/"/g, '&quot;').trim() || 'Video';
    return `<Video src="${id}" title="${safeTitle}" />`;
  });

  markdown = markdown
    // Turndown rückt Listen mit drei Leerzeichen ein – auf die übliche Form bringen.
    .replace(/^(\s*)-   /gm, '$1- ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim();

  const description = deriveDescription(markdown);
  if (!description) warnings.push('Keine Beschreibung ableitbar – Frontmatter ohne description.');

  return {title, markdown, description, languageLinks, altPlaceholders, warnings};
}

// ---------------------------------------------------------------------------
// Zielpfade und Sidebar
// ---------------------------------------------------------------------------

/** /home -> docs/index.md, Seiten mit Unterseiten -> <pfad>/index.md */
export function targetFor(path: string, hasChildren: boolean): {file: string; id: string} {
  if (path === '/home') return {file: `${DOCS_ROOT}/index.md`, id: 'index'};
  const clean = path.replace(/^\//, '');
  const id = hasChildren ? `${clean}/index` : clean;
  return {file: `${DOCS_ROOT}/${id}.md`, id};
}

type SidebarNode =
  | string
  | {type: 'category'; label: string; link?: {type: 'doc'; id: string}; items: SidebarNode[]};

/** Baut den Sidebar-Baum aus der Pfadhierarchie in der Reihenfolge der alten Navigation. */
export function buildSidebar(
  pages: PageInfo[],
  groupLabels: Map<string, string>,
): SidebarNode[] {
  type TreeNode = {
    segment: string;
    fullPath: string;
    page?: PageInfo;
    children: Map<string, TreeNode>;
    order: number;
  };
  const root: TreeNode = {segment: '', fullPath: '', children: new Map(), order: -1};

  for (const page of pages) {
    if (page.path === '/home') continue;
    const segments = page.path.replace(/^\//, '').split('/');
    let node = root;
    segments.forEach((segment, i) => {
      const fullPath = `/${segments.slice(0, i + 1).join('/')}`;
      if (!node.children.has(segment)) {
        node.children.set(segment, {
          segment,
          fullPath,
          children: new Map(),
          order: Number.MAX_SAFE_INTEGER,
        });
      }
      node = node.children.get(segment)!;
    });
    node.page = page;
    node.order = page.navOrder;
  }

  // Ordner ohne eigene Seite erben die Position ihres ersten Kindes.
  const settle = (node: TreeNode): number => {
    const childOrders = [...node.children.values()].map(settle);
    if (node.order === Number.MAX_SAFE_INTEGER && childOrders.length) {
      node.order = Math.min(...childOrders);
    }
    return node.order;
  };
  settle(root);

  const toSidebar = (node: TreeNode): SidebarNode => {
    const children = [...node.children.values()].sort((a, b) => a.order - b.order).map(toSidebar);
    if (children.length === 0) return node.page!.id;
    const label =
      node.page?.navLabel ?? node.page?.title ?? groupLabels.get(node.fullPath) ?? node.segment;
    const category: SidebarNode = {
      type: 'category',
      label,
      items: children,
      ...(node.page ? {link: {type: 'doc' as const, id: node.page.id}} : {}),
    };
    return category;
  };

  return [...root.children.values()].sort((a, b) => a.order - b.order).map(toSidebar);
}

function renderSidebar(nodes: SidebarNode[], indent = 4): string {
  const pad = ' '.repeat(indent);
  return nodes
    .map((node) => {
      if (typeof node === 'string') return `${pad}'${node}',`;
      const link = node.link ? `${pad}  link: {type: 'doc', id: '${node.link.id}'},\n` : '';
      return (
        `${pad}{\n` +
        `${pad}  type: 'category',\n` +
        `${pad}  label: '${node.label.replace(/'/g, "\\'")}',\n` +
        link +
        `${pad}  items: [\n` +
        renderSidebar(node.items, indent + 4) +
        `\n${pad}  ],\n` +
        `${pad}},`
      );
    })
    .join('\n');
}

// ---------------------------------------------------------------------------
// Hauptlauf
// ---------------------------------------------------------------------------

export type MigrationResult = {
  pages: PageInfo[];
  warnings: Map<string, string[]>;
  englishUrls: Map<string, string>;
  imageCount: number;
  videoCount: number;
  missingImages: number;
  altPlaceholders: number;
  /** Seiten, die auf der alten Site verlinkt sind, aber nicht erreichbar waren. */
  deadSourcePages: Record<string, string>;
};

export async function run(): Promise<MigrationResult> {
  const manifest: Manifest = await loadManifest(HOST);
  const paths = Object.keys(manifest.pages).sort();

  // Navigation der alten Site: Reihenfolge und Beschriftungen.
  const homeHtml = await readFile(cachePath(HOST, '/home'), 'utf8');
  const nav = readNav(cheerio.load(homeHtml));
  const navOrder = new Map<string, number>();
  const navLabels = new Map<string, string>();
  const groupLabels = new Map<string, string>();
  nav.forEach((entry, i) => {
    if (!entry.href) return;
    if (!navOrder.has(entry.href)) {
      navOrder.set(entry.href, i);
      navLabels.set(entry.href, entry.label);
    }
  });
  // Gruppenüberschriften ohne href (z.B. "Konfiguration") den Pfadsegmenten zuordnen.
  for (const entry of nav) {
    if (entry.href) continue;
    const segment = entry.label
      .toLowerCase()
      .replace(/ö/g, 'oe')
      .replace(/ä/g, 'ae')
      .replace(/ü/g, 'ue')
      .replace(/[^a-z0-9]+/g, '');
    groupLabels.set(`/${segment}`, entry.label);
  }

  const hasChildren = new Set<string>();
  for (const p of paths) {
    for (const other of paths) {
      if (other !== p && other.startsWith(`${p}/`)) hasChildren.add(p);
    }
  }

  const pages: PageInfo[] = paths.map((path) => {
    const {file, id} = targetFor(path, hasChildren.has(path));
    return {
      path,
      title: navLabels.get(path) ?? path,
      file,
      id,
      navLabel: navLabels.get(path),
      navOrder: navOrder.get(path) ?? 10_000 + paths.indexOf(path),
      hasChildren: hasChildren.has(path),
    };
  });

  const byPath = new Map(pages.map((p) => [p.path, p]));
  const resolveLink: LinkResolver = (oldPath) => {
    if (oldPath === '/' || oldPath === '/home') return '/';
    const page = byPath.get(oldPath);
    return page ? page.path : null;
  };

  // Vorlauf: Überschriften-Anker aller Seiten sammeln. Erst damit lassen sich
  // Sprungmarken auflösen, die von einer Seite auf eine andere zeigen.
  const htmlByPath = new Map<string, string>();
  const anchorsByPath = new Map<string, Map<string, string | null>>();
  for (const page of pages) {
    const html = await readFile(cachePath(HOST, page.path), 'utf8');
    htmlByPath.set(page.path, html);
    anchorsByPath.set(page.path, collectAnchors(html));
  }
  const resolveAnchor = (path: string, id: string): string | null | undefined =>
    anchorsByPath.get(path === '/' ? '/home' : path)?.get(id);

  // Verweise auf die englische Fassung einer Seite zeigen künftig auf dieselbe
  // Seite – die Sprache wählt der Leser über das Locale-Dropdown.
  const mapping = await buildPathMapping();
  const crossSite = crossSiteMap(mapping, 'de');

  await rm(DOCS_ROOT, {recursive: true, force: true});

  const warnings = new Map<string, string[]>();
  const englishUrls = new Map<string, string>();
  let imageCount = 0;
  let videoCount = 0;
  let missingImages = 0;
  let altPlaceholders = 0;

  for (const page of pages) {
    const html = htmlByPath.get(page.path)!;
    const fallback =
      page.navLabel ||
      cheerio.load(html)('title').text().replace(/\s+/g, ' ').trim() ||
      page.path;

    const result = convertPage(html, {
      path: page.path,
      origin: ORIGIN,
      selfHosts: DE_HOSTS,
      crossSite,
      figureWord: 'Abbildung',
      images: manifest.pages[page.path].images,
      resolveLink,
      anchors: anchorsByPath.get(page.path)!,
      resolveAnchor,
      fallbackTitle: fallback,
    });

    page.title = result.title;
    const englishUrl = result.languageLinks.english;
    if (englishUrl) englishUrls.set(page.path, englishUrl);
    if (result.warnings.length) warnings.set(page.path, result.warnings);

    imageCount += (result.markdown.match(/!\[[^\]]*\]\(\/img\//g) ?? []).length;
    videoCount += (result.markdown.match(/<Video /g) ?? []).length;
    missingImages += manifest.pages[page.path].images.filter((i) => !i.file).length;
    altPlaceholders += result.altPlaceholders;

    const slug = page.path === '/home' ? '/' : page.path;
    const frontmatter = [
      '---',
      `title: ${frontmatterValue(result.title)}`,
      `slug: ${frontmatterValue(slug)}`,
      ...(result.description ? [`description: ${frontmatterValue(result.description)}`] : []),
      `sidebar_label: ${frontmatterValue(page.navLabel ?? result.title)}`,
      '---',
      '',
    ].join('\n');

    await mkdir(dirname(page.file), {recursive: true});
    await writeFile(page.file, `${frontmatter}${result.markdown}\n`, 'utf8');
  }

  // --- sidebars.ts --------------------------------------------------------
  const tree = buildSidebar(pages, groupLabels);
  const home = pages.find((p) => p.path === '/home');
  const sidebarItems = [...(home ? [home.id] : []), ...tree];
  const sidebarFile =
    `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\n` +
    `/**\n` +
    ` * Bildet die Struktur des bisherigen Google-Sites-Wikis ab.\n` +
    ` * Erzeugt von scripts/migration/convert.ts – Reihenfolge und Beschriftungen\n` +
    ` * stammen aus der Navigation von dok.smart-me.com.\n` +
    ` */\n` +
    `const sidebars: SidebarsConfig = {\n` +
    `  wikiSidebar: [\n` +
    renderSidebar(sidebarItems) +
    `\n  ],\n};\n\nexport default sidebars;\n`;
  await writeFile('sidebars.ts', sidebarFile, 'utf8');

  // --- redirects.ts -------------------------------------------------------
  // Die deutschen Pfade entsprechen 1:1 den neuen Slugs; nur /home wandert auf /.
  // Die englischen Seiten liegen neu unter dem deutschen Slug, brauchen also je
  // einen Redirect. Der Plugin-Lauf ist pro Sprache – im en-Build wird daraus
  // automatisch /en/<alt> -> /en/<neu>.
  const enRedirects = [...mapping.deToEn]
    .filter(([dePath, enPath]) => enPath !== dePath && dePath !== '/home')
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([dePath, enPath]) => `  {from: '${enPath}', to: '${dePath}'},`);

  const redirectFile =
    `/**\n` +
    ` * Weiterleitungen von den alten Google-Sites-URLs.\n` +
    ` * Erzeugt von scripts/migration/convert.ts.\n` +
    ` *\n` +
    ` * Deutsch (dok.smart-me.com): alle Pfade wurden 1:1 als Slug übernommen,\n` +
    ` * nur /home liegt neu auf /.\n` +
    ` *\n` +
    ` * Englisch (doc.smart-me.com): die englischen Seiten liegen neu unter dem\n` +
    ` * deutschen Slug, damit das Locale-Dropdown zwischen den Sprachfassungen\n` +
    ` * derselben Seite wechselt. Die Regeln greifen im en-Build mit dem\n` +
    ` * Sprachpräfix, also /en/<alt> -> /en/<neu>.\n` +
    ` */\n` +
    `export type Redirect = {from: string | string[]; to: string};\n\n` +
    `export const redirects: Redirect[] = [\n` +
    `  {from: '/home', to: '/'},\n` +
    `\n  // Alte englische Pfade\n` +
    `${enRedirects.join('\n')}\n];\n`;
  await writeFile('redirects.ts', redirectFile, 'utf8');

  return {
    pages,
    warnings,
    englishUrls,
    imageCount,
    videoCount,
    missingImages,
    altPlaceholders,
    deadSourcePages: manifest.failures,
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const result = await run();
    await writeFile(
      join('.migration-cache', 'de-result.json'),
      JSON.stringify(
        {
          pages: result.pages,
          warnings: Object.fromEntries(result.warnings),
          englishUrls: Object.fromEntries(result.englishUrls),
          imageCount: result.imageCount,
          videoCount: result.videoCount,
          missingImages: result.missingImages,
          altPlaceholders: result.altPlaceholders,
          deadSourcePages: result.deadSourcePages,
        },
        null,
        2,
      ),
      'utf8',
    );
    console.log(
      `${result.pages.length} Seiten, ${result.imageCount} Bildreferenzen, ` +
        `${result.videoCount} Videos, ${result.warnings.size} Seiten mit Hinweisen.`,
    );
  })();
}
