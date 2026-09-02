/**
 * Lädt ein Google-Sites-Wiki vollständig herunter.
 *
 * Wichtig: Google Sites liefert Bilder über kurzlebig signierte URLs
 * (lh3.googleusercontent.com/sitesv/...). Diese sind schon wenige Minuten nach
 * dem Abruf der HTML-Seite ungültig. Die Bilder werden deshalb unmittelbar
 * nach jeder Seite heruntergeladen und im Manifest festgehalten – Seite und
 * Bilder stammen so immer aus demselben Snapshot.
 *
 *   npx tsx scripts/migration/crawl.ts https://dok.smart-me.com /home
 *   npx tsx scripts/migration/crawl.ts https://doc.smart-me.com /home --no-images
 */
import {mkdir, writeFile, readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {pathToFileURL} from 'node:url';
import * as cheerio from 'cheerio';
import {contentImageUrls, unwrapGoogleRedirect} from './googleSites';

export const CACHE_ROOT = '.migration-cache';
const PAGE_DELAY_MS = 200;
const IMAGE_CONCURRENCY = 6;

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export type ImageRecord = {
  /** Position unter allen <section img> der Seite – dient als stabiler Schlüssel. */
  index: number;
  originalUrl: string;
  /** Pfad relativ zum Repo-Root, z.B. static/img/produkte-nimbus/03.png */
  file: string | null;
  error?: string;
};

export type PageRecord = {
  path: string;
  images: ImageRecord[];
};

export type Manifest = {
  origin: string;
  crawledAt: string;
  pages: Record<string, PageRecord>;
  failures: Record<string, string>;
};

export function cachePath(host: string, pathname: string): string {
  const clean = pathname.replace(/^\/+|\/+$/g, '') || '_root';
  return join(CACHE_ROOT, host, `${clean}.html`);
}

/** Wiki-Pfad -> Ordnername unter static/img, z.B. /produkte/nimbus -> produkte-nimbus */
export function imageDirSlug(pathname: string): string {
  return (
    pathname
      .replace(/^\/+|\/+$/g, '')
      .toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/[^a-z0-9/_-]+/g, '-')
      .replace(/\//g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'home'
  );
}

function extensionFor(contentType: string | null, url: string): string {
  const byType: Record<string, string> = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
    'image/avif': 'avif',
  };
  const type = (contentType ?? '').split(';')[0].trim().toLowerCase();
  if (byType[type]) return byType[type];
  const m = url.match(/\.(png|jpe?g|gif|webp|svg|avif)(?:[?#]|$)/i);
  return m ? m[1].toLowerCase().replace('jpeg', 'jpg') : 'png';
}

/** Lädt die Bilder einer Seite und legt sie unter static/img/<slug>/ ab. */
async function downloadImages(
  pathname: string,
  urls: string[],
  imagesRoot: string,
): Promise<ImageRecord[]> {
  const dirSlug = imageDirSlug(pathname);
  const dir = join(imagesRoot, dirSlug);
  const records: ImageRecord[] = urls.map((originalUrl, index) => ({
    index,
    originalUrl,
    file: null,
  }));
  if (urls.length === 0) return records;
  await mkdir(dir, {recursive: true});

  // Gleiche URL mehrfach auf einer Seite nur einmal laden.
  const byUrl = new Map<string, ImageRecord[]>();
  for (const rec of records) {
    if (!byUrl.has(rec.originalUrl)) byUrl.set(rec.originalUrl, []);
    byUrl.get(rec.originalUrl)!.push(rec);
  }

  const unique = [...byUrl.entries()];
  let cursor = 0;
  const worker = async () => {
    while (cursor < unique.length) {
      const slot = cursor++;
      const [url, recs] = unique[slot];
      const num = String(recs[0].index + 1).padStart(2, '0');
      try {
        const res = await fetch(url, {headers: {'User-Agent': UA, Referer: 'https://dok.smart-me.com/'}});
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        const ext = extensionFor(res.headers.get('content-type'), url);
        const file = join(dir, `${num}.${ext}`).replace(/\\/g, '/');
        await writeFile(file, buf);
        for (const rec of recs) rec.file = file;
      } catch (err) {
        for (const rec of recs) rec.error = String(err);
      }
    }
  };
  await Promise.all(Array.from({length: Math.min(IMAGE_CONCURRENCY, unique.length)}, worker));
  return records;
}

export async function crawl(
  origin: string,
  seeds: string[],
  opts: {withImages: boolean; imagesRoot: string},
): Promise<Manifest> {
  const host = new URL(origin).host;
  const queue = [...seeds];
  const seen = new Set<string>(seeds);
  const manifest: Manifest = {
    origin,
    crawledAt: new Date().toISOString(),
    pages: {},
    failures: {},
  };

  while (queue.length > 0) {
    const pathname = queue.shift()!;
    const file = cachePath(host, pathname);
    let html: string;

    try {
      const res = await fetch(origin + pathname, {redirect: 'follow', headers: {'User-Agent': UA}});
      if (!res.ok) {
        manifest.failures[pathname] = `HTTP ${res.status}`;
        console.warn(`  ! ${pathname} -> HTTP ${res.status}`);
        await sleep(PAGE_DELAY_MS);
        continue;
      }
      html = await res.text();
      await mkdir(dirname(file), {recursive: true});
      await writeFile(file, html, 'utf8');
    } catch (err) {
      manifest.failures[pathname] = String(err);
      console.warn(`  ! ${pathname} -> ${err}`);
      await sleep(PAGE_DELAY_MS);
      continue;
    }

    const $ = cheerio.load(html);

    // Bilder sofort laden, solange die signierten URLs noch gültig sind.
    const urls = contentImageUrls($);
    const images = opts.withImages
      ? await downloadImages(pathname, urls, opts.imagesRoot)
      : urls.map((originalUrl, index) => ({index, originalUrl, file: null}));
    manifest.pages[pathname] = {path: pathname, images};

    const failed = images.filter((i) => i.error).length;
    console.log(
      `  + ${pathname} (${Math.round(html.length / 1024)} kB, ${images.length} Bilder` +
        `${failed ? `, ${failed} FEHLGESCHLAGEN` : ''})`,
    );

    // Interne Links einsammeln. Google Sites rendert die komplette Navigation in
    // jede Seite, daher findet ein BFS ab /home praktisch alles.
    $('a[href]').each((_, el) => {
      // Interne Ziele stehen teils relativ, teils absolut und teils in einen
      // Google-Sites-Redirect verpackt – alle drei Formen auf einen Pfad bringen.
      const href = unwrapGoogleRedirect($(el).attr('href')!);
      let pathname: string;
      if (href.startsWith('/') && !href.startsWith('//')) {
        pathname = href;
      } else {
        try {
          const url = new URL(href, origin);
          if (url.host !== host) return;
          pathname = url.pathname + url.hash;
        } catch {
          return;
        }
      }
      const next = decodeURI(pathname.split('#')[0].split('?')[0]).replace(/\/+$/, '');
      if (!next) return;
      if (/\.(pdf|zip|png|jpe?g|svg|gif|xlsx?|docx?|csv)$/i.test(next)) return;
      if (next.startsWith('/_') || next.startsWith('/system/')) return;
      if (seen.has(next)) return;
      seen.add(next);
      queue.push(next);
    });

    await sleep(PAGE_DELAY_MS);
  }

  const manifestFile = join(CACHE_ROOT, `${host}.manifest.json`);
  await writeFile(manifestFile, JSON.stringify(manifest, null, 2), 'utf8');
  return manifest;
}

export async function loadManifest(host: string): Promise<Manifest> {
  const file = join(CACHE_ROOT, `${host}.manifest.json`);
  if (!existsSync(file)) throw new Error(`Manifest fehlt: ${file} – zuerst crawl.ts ausführen.`);
  return JSON.parse(await readFile(file, 'utf8')) as Manifest;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void (async () => {
    const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
    const flags = new Set(process.argv.slice(2).filter((a) => a.startsWith('--')));
    const origin = args[0] ?? 'https://dok.smart-me.com';
    const seeds = args.slice(1);
    const manifest = await crawl(origin, seeds.length ? seeds : ['/home'], {
      withImages: !flags.has('--no-images'),
      imagesRoot: 'static/img',
    });
    const pageCount = Object.keys(manifest.pages).length;
    const imgCount = Object.values(manifest.pages).reduce((n, p) => n + p.images.length, 0);
    const imgFailed = Object.values(manifest.pages).reduce(
      (n, p) => n + p.images.filter((i) => i.error).length,
      0,
    );
    console.log(
      `\nFertig: ${pageCount} Seiten, ${imgCount} Bilder ` +
        `(${imgFailed} fehlgeschlagen), ${Object.keys(manifest.failures).length} Seitenfehler.`,
    );
    for (const [p, e] of Object.entries(manifest.failures)) console.log(`  FEHLER ${p}: ${e}`);
  })();
}
