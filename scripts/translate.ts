/**
 * Übersetzt die deutschen Masterinhalte nach en/fr/it.
 *
 *   npm run translate              # nur geänderte/fehlende Seiten
 *   npm run translate -- --all     # alles neu übersetzen
 *   npm run translate -- --locale fr --limit 5
 *   npm run translate -- --list    # nur anzeigen, was zu tun wäre
 *   npm run translate -- --adopt   # vorhandene Dateien als aktuell verbuchen
 *   npm run translate -- --ui      # nur Navigation/Kategorien/Fusszeile
 *   npm run translate -- --concurrency 6
 *
 * Übersetzt wird **nicht** über einen API-Key, sondern über die Claude-Code-CLI
 * im Headless-Modus (`claude -p`). Lokal genügt damit die normale Anmeldung:
 *
 *   npm install -g @anthropic-ai/claude-code
 *   claude   # einmalig anmelden
 *
 * Welche Seiten zu tun sind, entscheidet ein Hash-Manifest
 * (.translation-state.json): Für jede deutsche Datei wird festgehalten, aus
 * welchem Quellstand die jeweilige Sprachfassung entstanden ist. Weicht der
 * heutige Hash ab, wird neu übersetzt.
 */
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import {mkdir, readFile, readdir, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {dirname, join, sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {fixAnchors} from './fixAnchors';

export const DOCS_ROOT = 'docs';
export const STATE_FILE = '.translation-state.json';
export const GLOSSARY_FILE = 'glossary.md';
export const TARGET_LOCALES = ['en', 'fr', 'it'] as const;

export type Locale = (typeof TARGET_LOCALES)[number];

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'Englisch',
  fr: 'Französisch (Schweiz)',
  it: 'Italienisch (Schweiz)',
};

/** Ordner, in dem Docusaurus die übersetzten Dokumente einer Sprache erwartet. */
export function docsRootFor(locale: Locale): string {
  return `i18n/${locale}/docusaurus-plugin-content-docs/current`;
}

/** Ordner mit den übersetzbaren JSON-Dateien (Navigation, Kategorien, UI). */
export function jsonRootFor(locale: Locale): string {
  return `i18n/${locale}`;
}

/** Woher eine Sprachfassung stammt. */
export type Origin =
  /** Von dieser Pipeline aus der deutschen Seite erzeugt. */
  | 'translated'
  /**
   * Eigenständig geschriebener Bestandsinhalt, hier übernommen aus dem alten
   * englischen Wiki. Solche Seiten dürfen strukturell von der deutschen Seite
   * abweichen und werden von der Strukturprüfung ausgenommen.
   */
  | 'adopted';

export type LocaleState = {
  /** Hash der deutschen Datei, als diese Sprachfassung entstand. */
  hash: string;
  origin: Origin;
};

export type TranslationState = {
  /** Pfad der deutschen Datei (POSIX) -> Stand je Sprache. */
  docs: Record<string, Partial<Record<Locale, LocaleState>>>;
};

export function hashOf(content: string): string {
  return createHash('sha256').update(content, 'utf8').digest('hex').slice(0, 16);
}

async function walk(dir: string, suffix: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, suffix)));
    else if (full.endsWith(suffix)) out.push(full);
  }
  return out;
}

const toPosix = (p: string) => p.split(sep).join('/');

export async function loadState(): Promise<TranslationState> {
  if (!existsSync(STATE_FILE)) return {docs: {}};
  try {
    const parsed = JSON.parse(await readFile(STATE_FILE, 'utf8')) as {
      docs?: Record<string, Partial<Record<Locale, string | LocaleState>>>;
    };
    const docs: TranslationState['docs'] = {};
    for (const [file, locales] of Object.entries(parsed.docs ?? {})) {
      docs[file] = {};
      for (const [locale, value] of Object.entries(locales)) {
        // Ältere Stände hielten nur den Hash fest.
        docs[file][locale as Locale] =
          typeof value === 'string' ? {hash: value, origin: 'translated'} : value;
      }
    }
    return {docs};
  } catch {
    console.warn(`${STATE_FILE} ist unlesbar – es wird alles neu übersetzt.`);
    return {docs: {}};
  }
}

export async function saveState(state: TranslationState): Promise<void> {
  const sorted: TranslationState = {docs: {}};
  for (const key of Object.keys(state.docs).sort()) sorted.docs[key] = state.docs[key];
  await writeFile(STATE_FILE, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
}

export type Job = {
  /** docs/... (POSIX) */
  source: string;
  locale: Locale;
  target: string;
  sourceHash: string;
  reason: 'neu' | 'geändert' | 'erzwungen';
};

/** Ermittelt, welche Seiten in welcher Sprache zu übersetzen sind. */
export async function planJobs(opts: {
  locales: readonly Locale[];
  all: boolean;
  state: TranslationState;
}): Promise<Job[]> {
  const sources = (await walk(DOCS_ROOT, '.md')).map(toPosix).sort();
  const jobs: Job[] = [];

  for (const source of sources) {
    const content = await readFile(source, 'utf8');
    const sourceHash = hashOf(content);
    const relativePath = source.slice(`${DOCS_ROOT}/`.length);

    for (const locale of opts.locales) {
      const target = `${docsRootFor(locale)}/${relativePath}`;
      const known = opts.state.docs[source]?.[locale]?.hash;

      if (opts.all) {
        jobs.push({source, locale, target, sourceHash, reason: 'erzwungen'});
      } else if (!existsSync(target)) {
        jobs.push({source, locale, target, sourceHash, reason: 'neu'});
      } else if (known !== sourceHash) {
        jobs.push({source, locale, target, sourceHash, reason: known ? 'geändert' : 'neu'});
      }
    }
  }
  return jobs;
}

// ---------------------------------------------------------------------------
// Claude-Code-CLI
// ---------------------------------------------------------------------------

/**
 * Wie die CLI aufgerufen wird – unter Windows braucht npm-Bins die Shell.
 *
 * Der Prompt enthält alles, was zum Übersetzen nötig ist; Werkzeuge sind
 * deshalb ausdrücklich gesperrt. Sonst versucht das Modell bei einer Seite
 * ohne Fliesstext, im Dateisystem nachzusehen, und verbraucht damit seinen
 * einzigen Zug. Zwei Züge lassen einen solchen Fehlgriff verkraften.
 */
function claudeCommand(): {command: string; args: string[]; shell: boolean} {
  const command = process.env.CLAUDE_BIN ?? 'claude';
  const args = [
    '-p',
    '--output-format',
    'text',
    '--max-turns',
    '2',
    '--disallowed-tools',
    'Bash,Read,Write,Edit,Glob,Grep,WebFetch,WebSearch,Task,TodoWrite,NotebookEdit',
  ];
  if (process.env.CLAUDE_MODEL) args.push('--model', process.env.CLAUDE_MODEL);
  return {command, args, shell: process.platform === 'win32'};
}

export class ClaudeUnavailableError extends Error {}

/** Schickt einen Prompt an die Claude-Code-CLI und gibt die Antwort zurück. */
export function runClaude(prompt: string, timeoutMs = 300_000): Promise<string> {
  const {command, args, shell} = claudeCommand();
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {shell, stdio: ['pipe', 'pipe', 'pipe']});
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error(`Zeitüberschreitung nach ${Math.round(timeoutMs / 1000)}s`));
    }, timeoutMs);

    child.on('error', (err: NodeJS.ErrnoException) => {
      clearTimeout(timer);
      reject(
        err.code === 'ENOENT'
          ? new ClaudeUnavailableError(
              'Die Claude-Code-CLI wurde nicht gefunden. Installation:\n' +
                '  npm install -g @anthropic-ai/claude-code\n' +
                '  claude   # einmalig anmelden\n' +
                'Alternativ den Pfad über die Umgebungsvariable CLAUDE_BIN setzen.',
            )
          : err,
      );
    });
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      clearTimeout(timer);
      if (code === 0) resolve(stdout);
      else reject(new Error(`claude endete mit Code ${code}: ${stderr.trim() || stdout.trim()}`));
    });

    child.stdin.write(prompt);
    child.stdin.end();
  });
}

/**
 * Entfernt einen Code-Zaun, in den das Modell die ganze Datei gepackt hat.
 * Ein Zaun *innerhalb* des Dokuments bleibt selbstverständlich erhalten.
 */
export function unwrapFence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^```[a-zA-Z]*\n([\s\S]*)\n```$/);
  if (!match) return trimmed;
  // Nur auspacken, wenn der Zaun tatsächlich das gesamte Dokument umschliesst.
  return match[1].includes('\n```') && !match[1].trimEnd().endsWith('```')
    ? trimmed
    : match[1];
}

/** Zerlegt eine Markdown-Datei in Frontmatter-Zeilen und Rumpf. */
function splitFrontmatter(content: string): {lines: string[]; body: string} | null {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  const block = content.slice(content.indexOf('\n') + 1, end);
  const body = content.slice(content.indexOf('\n', end + 1) + 1);
  return {lines: block.split('\n'), body};
}

/** Liest einen YAML-Skalar, egal ob einfach, doppelt oder gar nicht gequotet. */
function parseScalar(raw: string): string {
  const value = raw.trim();
  if (value.length >= 2 && value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/\\"/g, '"');
  }
  return value;
}

function quoteScalar(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

/**
 * Setzt das Frontmatter der Übersetzung neu zusammen.
 *
 * Nötig, weil Französisch und Italienisch voller Apostrophe stecken: schreibt
 * das Modell `description: 'Aucun de ces produits n'est …'`, ist das kein
 * gültiges YAML mehr. Statt darauf zu vertrauen, dass die Anweisung befolgt
 * wird, werden die Werte hier ausgelesen und korrekt neu gequotet.
 *
 * Der `slug` stammt immer aus der deutschen Quelle – er ist die URL und in
 * allen Sprachen dieselbe.
 */
export function normalizeFrontmatter(translated: string, source: string): string {
  const t = splitFrontmatter(translated);
  const s = splitFrontmatter(source);
  if (!t) throw new Error('Die Übersetzung hat kein Frontmatter.');

  const sourceSlug = s?.lines
    .map((l) => l.match(/^slug:\s*(.*)$/))
    .find((m): m is RegExpMatchArray => Boolean(m))?.[1];

  const rebuilt: string[] = [];
  let sawTitle = false;
  let sawSlug = false;

  for (const line of t.lines) {
    const match = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!match) continue; // Kommentare und Leerzeilen fallen weg.
    const [, key, raw] = match;
    if (key === 'title') sawTitle = true;
    if (key === 'slug') {
      sawSlug = true;
      rebuilt.push(`slug: ${sourceSlug ?? quoteScalar(parseScalar(raw))}`);
      continue;
    }
    rebuilt.push(`${key}: ${quoteScalar(parseScalar(raw))}`);
  }

  if (!sawTitle) throw new Error('Im Frontmatter der Übersetzung fehlt der Titel.');
  if (!sawSlug && sourceSlug) rebuilt.splice(1, 0, `slug: ${sourceSlug}`);

  return `---\n${rebuilt.join('\n')}\n---\n${t.body}`;
}

export function buildPrompt(opts: {
  locale: Locale;
  glossary: string;
  sourcePath: string;
  content: string;
}): string {
  return [
    `Du übersetzt eine Seite des smart-me Support-Wikis aus dem Deutschen ins ${LANGUAGE_NAMES[opts.locale]}.`,
    '',
    'smart-me ist ein Schweizer Anbieter von Energiezählern, Abrechnungssoftware',
    'und Ladeinfrastruktur. Zielgruppe sind Elektroinstallateure, Liegenschafts-',
    'verwaltungen und technisch versierte Endkunden.',
    '',
    '## Regeln',
    '',
    '1. Gib **ausschliesslich** die übersetzte Datei aus. Keine Einleitung, keine',
    '   Erklärung, keine Rückfragen, kein umschliessender Code-Block.',
    '2. Die Markdown-Struktur bleibt exakt erhalten: gleiche Überschriftenebenen in',
    '   gleicher Reihenfolge, gleiche Listen, gleiche Absatzaufteilung, gleiche',
    '   Betonungen, gleiche Reihenfolge der Bilder.',
    '3. Das Frontmatter zwischen den `---`-Zeilen bleibt strukturell unverändert.',
    '   Die Werte stehen in einfachen Anführungszeichen; ein Apostroph im Text',
    "   wird darin verdoppelt: `description: 'Aucun produit n''est vendu.'`.",
    '   Übersetzt werden nur die Werte von `title`, `description` und',
    '   `sidebar_label`. Der Wert von `slug` bleibt **unverändert** – auch wenn er',
    '   deutsche Wörter enthält. Er ist die URL und in allen Sprachen dieselbe.',
    '4. Unverändert bleiben ausserdem: URLs und Linkziele, Bildpfade, Dateinamen,',
    '   Inhalte von Code-Blöcken und Inline-Code, HTML- und JSX-Elemente samt ihrer',
    '   Attribute (z.B. `<Video src="..." title="..." />`), Zahlen, Einheiten,',
    '   Artikelnummern und Produktbezeichnungen.',
    '   Der sichtbare Text von Links wird dagegen übersetzt – aus',
    '   `[3-Phasen Zähler Telstar CT](/produkte/Telstar-CT)` wird also',
    '   `[Compteur triphasé Telstar CT](/produkte/Telstar-CT)`.',
    '5. Die Alt-Texte von Bildern werden übersetzt.',
    '6. HTML-Entities wie `&lt;`, `&#123;` und `&#125;` bleiben genau so stehen.',
    '   Sie schützen Zeichen, an denen sich der Seitengenerator sonst verschluckt.',
    '7. Bildschirmtexte der smart-me Software werden übersetzt, aber unmittelbar',
    '   danach steht der deutsche Originaltext in Klammern, damit Lesende die',
    '   Schaltfläche in der Oberfläche wiederfinden.',
    '8. Keine Inhalte hinzufügen, weglassen, kürzen oder „verbessern“.',
    '9. Ton: sachlich, direkt, in der Anredeform der Zielsprache, die eine',
    '   Support-Dokumentation üblicherweise verwendet.',
    '',
    '## Glossar (verbindlich)',
    '',
    opts.glossary,
    '',
    `## Zu übersetzende Datei: ${opts.sourcePath}`,
    '',
    opts.content,
  ].join('\n');
}

export async function translateFile(job: Job, glossary: string): Promise<void> {
  const content = await readFile(job.source, 'utf8');
  const prompt = buildPrompt({
    locale: job.locale,
    glossary,
    sourcePath: job.source,
    content,
  });
  const answer = await runClaude(prompt);
  const translated = unwrapFence(answer);

  if (!translated.startsWith('---')) {
    throw new Error(
      `Die Antwort beginnt nicht mit dem Frontmatter – Übersetzung verworfen.\n` +
        `Anfang der Antwort: ${translated.slice(0, 200)}`,
    );
  }

  const normalized = normalizeFrontmatter(translated, content);

  await mkdir(dirname(job.target), {recursive: true});
  await writeFile(job.target, `${normalized.trimEnd()}\n`, 'utf8');
}

// ---------------------------------------------------------------------------
// Oberflächentexte (Sidebar-Kategorien, Navigation, Fusszeile)
// ---------------------------------------------------------------------------

/**
 * Übersetzt die JSON-Dateien, die Docusaurus für Navigation, Fusszeile und die
 * Kategorien der Sidebar erzeugt.
 *
 * Diese Texte stammen nicht aus `docs/`, sondern aus `sidebars.ts` und
 * `docusaurus.config.ts`. Nach einer neuen Kategorie also erst
 * `npm run write-translations` laufen lassen (das ergänzt die neuen Schlüssel
 * auf Deutsch) und danach `npm run translate -- --ui`.
 *
 * `code.json` bleibt bewusst aussen vor: das sind die eingebauten Texte des
 * Docusaurus-Themes, die für en/fr/it bereits mitgeliefert werden.
 */
export async function translateUi(locales: readonly Locale[], glossary: string): Promise<number> {
  let count = 0;
  for (const locale of locales) {
    const files = (await walk(jsonRootFor(locale), '.json'))
      .map(toPosix)
      .filter((f) => !f.endsWith('/code.json'));

    for (const file of files) {
      const content = await readFile(file, 'utf8');
      process.stdout.write(`  [${locale}] ${file} … `);
      const prompt = [
        `Übersetze die Werte der Felder "message" in dieser Docusaurus-Datei aus`,
        `dem Deutschen ins ${LANGUAGE_NAMES[locale]}.`,
        '',
        'Regeln:',
        '- Gib ausschliesslich das vollständige JSON aus, ohne umschliessenden Code-Block.',
        '- Schlüssel, Reihenfolge und die Felder "description" bleiben unverändert.',
        '- Nur "message" wird übersetzt. Produktnamen bleiben stehen.',
        '- Es sind Beschriftungen in einer Navigation: kurz halten, keine ganzen Sätze.',
        '',
        '## Glossar (verbindlich)',
        '',
        glossary,
        '',
        '## Datei',
        '',
        content,
      ].join('\n');

      try {
        const answer = unwrapFence(await runClaude(prompt));
        JSON.parse(answer); // Kaputtes JSON würde den Build lahmlegen.
        await writeFile(file, `${answer.trimEnd()}\n`, 'utf8');
        count += 1;
        console.log('ok');
      } catch (err) {
        if (err instanceof ClaudeUnavailableError) throw err;
        console.log(`FEHLER: ${(err as Error).message.split('\n')[0]}`);
      }
    }
  }
  return count;
}

/**
 * Verbucht bereits vorhandene Sprachdateien als aktuell, ohne sie zu übersetzen.
 *
 * Gebraucht wird das nach der Migration: die englischen Seiten stammen aus dem
 * alten Wiki und sollen nicht überschrieben werden, solange sich die deutsche
 * Masterseite nicht ändert.
 */
export async function adoptExisting(
  locales: readonly Locale[],
  state: TranslationState,
): Promise<number> {
  const sources = (await walk(DOCS_ROOT, '.md')).map(toPosix).sort();
  let count = 0;
  for (const source of sources) {
    const sourceHash = hashOf(await readFile(source, 'utf8'));
    const relativePath = source.slice(`${DOCS_ROOT}/`.length);
    for (const locale of locales) {
      if (!existsSync(`${docsRootFor(locale)}/${relativePath}`)) continue;
      // Bereits verbuchte Sprachfassungen nicht umdeuten – sonst würde eine
      // erzeugte Übersetzung faelschlich als Bestandsinhalt gelten.
      if (state.docs[source]?.[locale]) continue;
      state.docs[source] ??= {};
      state.docs[source][locale] = {hash: sourceHash, origin: 'adopted'};
      count += 1;
    }
  }
  return count;
}

// ---------------------------------------------------------------------------
// Kommandozeile
// ---------------------------------------------------------------------------

type Options = {
  locales: Locale[];
  all: boolean;
  list: boolean;
  adopt: boolean;
  ui: boolean;
  limit: number;
  concurrency: number;
};

export function parseArgs(argv: string[]): Options {
  const options: Options = {
    locales: [...TARGET_LOCALES],
    all: false,
    list: false,
    adopt: false,
    ui: false,
    limit: Number.POSITIVE_INFINITY,
    concurrency: 4,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--all') options.all = true;
    else if (arg === '--list') options.list = true;
    else if (arg === '--adopt') options.adopt = true;
    else if (arg === '--ui') options.ui = true;
    else if (arg === '--locale') {
      const value = argv[++i];
      const locales = value
        .split(',')
        .map((l) => l.trim())
        .filter((l): l is Locale => (TARGET_LOCALES as readonly string[]).includes(l));
      if (locales.length === 0) throw new Error(`Unbekannte Sprache: ${value}`);
      options.locales = locales;
    } else if (arg === '--limit') options.limit = Number(argv[++i]);
    else if (arg === '--concurrency') {
      const value = Number(argv[++i]);
      if (!Number.isInteger(value) || value < 1 || value > 12) {
        throw new Error(`--concurrency erwartet eine Zahl von 1 bis 12, nicht "${argv[i]}".`);
      }
      options.concurrency = value;
    } else throw new Error(`Unbekannte Option: ${arg}`);
  }
  return options;
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  const state = await loadState();

  if (options.adopt) {
    const adopted = await adoptExisting(options.locales, state);
    await saveState(state);
    console.log(`${adopted} vorhandene Übersetzungen als aktuell verbucht.`);
    return 0;
  }

  if (options.ui) {
    const glossary = await readFile(GLOSSARY_FILE, 'utf8');
    try {
      const count = await translateUi(options.locales, glossary);
      console.log(`${count} Oberflächendateien übersetzt.`);
      return 0;
    } catch (err) {
      console.error(`
${(err as Error).message}`);
      return 2;
    }
  }

  const jobs = (await planJobs({locales: options.locales, all: options.all, state})).slice(
    0,
    options.limit,
  );

  if (jobs.length === 0) {
    console.log('Alle Übersetzungen sind aktuell.');
    return 0;
  }

  const byLocale = options.locales
    .map((l) => `${l}: ${jobs.filter((j) => j.locale === l).length}`)
    .join(', ');
  console.log(`${jobs.length} Seiten zu übersetzen (${byLocale}).`);

  if (options.list) {
    for (const job of jobs) console.log(`  [${job.locale}] ${job.source} (${job.reason})`);
    return 0;
  }

  const glossary = await readFile(GLOSSARY_FILE, 'utf8');
  let done = 0;
  let failed = 0;
  let aborted = false;
  let cursor = 0;

  // Ein Aufruf dauert rund eine Minute. Mehrere Seiten parallel zu übersetzen
  // verkürzt einen vollständigen Lauf von Stunden auf eine überschaubare Zeit.
  // Der Zustand wird nach jeder fertigen Seite gespeichert, ein Abbruch kostet
  // also höchstens die gerade laufenden Seiten.
  const worker = async () => {
    while (cursor < jobs.length && !aborted) {
      const job = jobs[cursor++];
      const position = `${cursor}/${jobs.length}`;
      try {
        await translateFile(job, glossary);
        state.docs[job.source] ??= {};
        state.docs[job.source][job.locale] = {hash: job.sourceHash, origin: 'translated'};
        await saveState(state);
        done += 1;
        console.log(`  ${position} [${job.locale}] ${job.source} … ok`);
      } catch (err) {
        if (err instanceof ClaudeUnavailableError) {
          aborted = true;
          console.error(`\n${err.message}`);
          return;
        }
        failed += 1;
        console.log(
          `  ${position} [${job.locale}] ${job.source} … FEHLER: ` +
            `${(err as Error).message.split('\n')[0]}`,
        );
      }
    }
  };

  await Promise.all(
    Array.from({length: Math.min(options.concurrency, jobs.length)}, worker),
  );

  if (aborted) return 2;

  // Anker entstehen aus dem Überschriftentext und ändern sich damit beim
  // Übersetzen. Sprungmarken zwischen Seiten müssen deshalb nachgezogen werden.
  const {changed, unresolved} = await fixAnchors(options.locales);
  if (changed > 0) console.log(`${changed} Dateien mit angepassten Sprungmarken.`);
  for (const item of unresolved) {
    console.log(`  Sprungmarke ohne Ziel: ${item.file} -> #${item.anchor}`);
  }

  console.log(`\n${done} übersetzt, ${failed} fehlgeschlagen.`);
  return failed > 0 ? 1 : 0;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main().then((code) => {
    process.exitCode = code;
  });
}
