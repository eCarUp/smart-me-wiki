# Hinweise für Claude Code

Dieses Repository ist das Support-Wiki der smart-me AG (Docusaurus, viersprachig).

## Die wichtigste Regel

**Deutsch ist die Master-Sprache. Inhalte werden ausschliesslich unter `docs/`
gepflegt.**

Die Ordner unter `i18n/` sind generiert. Sie werden **nie** von Hand bearbeitet —
weder von Menschen noch von dir. Jede manuelle Änderung dort geht beim nächsten
Übersetzungslauf verloren.

Wenn du an einer Seite etwas änderst:

1. Ändere nur die deutsche Datei unter `docs/`.
2. Übersetze anschliessend nach: `npm run translate`
3. Prüfe mit `npm run build`, dass alle vier Sprachen bauen.

Wirst du gebeten, einen Text in einer anderen Sprache zu korrigieren, dann ist
fast immer der deutsche Master gemeint oder das Glossar. Frage im Zweifel nach,
statt in `i18n/` zu schreiben.

## Übersetzung

`scripts/translate.ts` übersetzt von Deutsch nach `en`, `fr` und `it`. Es nutzt
**keinen API-Key**, sondern ruft die Claude-Code-CLI im Headless-Modus auf
(`claude -p`). Lokal reicht damit die normale Anmeldung:

```bash
npm install -g @anthropic-ai/claude-code
claude   # einmalig anmelden
```

| Befehl | Wirkung |
| --- | --- |
| `npm run translate` | nur geänderte und fehlende Seiten |
| `npm run translate -- --all` | alles neu übersetzen (nach Glossar-Änderungen) |
| `npm run translate -- --locale fr --limit 5` | gezielt einzelne Seiten |
| `npm run translate -- --list` | nur anzeigen, was zu tun wäre |
| `npm run translate -- --adopt` | vorhandene Dateien als aktuell verbuchen |

Welche Seite fällig ist, entscheidet `.translation-state.json`: dort steht je
Sprache der Hash der deutschen Datei, aus der die Fassung entstanden ist. Die
Datei gehört ins Repository und wird vom Script gepflegt — nicht von Hand ändern.

### Was beim Übersetzen unverändert bleibt

- `slug` im Frontmatter — das ist die URL und in allen Sprachen dieselbe
- URLs, Linkziele, Bildpfade, Dateinamen
- Code-Blöcke und Inline-Code
- HTML- und JSX-Elemente samt Attributen, insbesondere `<Video src="…" />`
- HTML-Entities wie `&lt;`, `&#123;`, `&#125;` — sie schützen Zeichen, an denen
  sich MDX sonst verschluckt
- Zahlen, Einheiten, Artikelnummern, Produktnamen

Übersetzt werden dagegen `title`, `description`, `sidebar_label`, der Fliesstext,
die sichtbaren Linktexte und die Alt-Texte der Bilder.

### Glossar

`glossary.md` steuert die Terminologie und ist verbindlich: Abschnitt 1 listet
Begriffe, die nie übersetzt werden (Produktnamen, Protokolle), Abschnitt 2 die
festen Fachbegriffs-Übersetzungen (ZEV → RCP und so weiter). Ändert sich das
Glossar, müssen die betroffenen Seiten mit `--all` neu übersetzt werden.

## Design

Die Gestaltung folgt den smart-me Design Guidelines: Primärfarbe ist
smart-me Blau `#28599A` (nicht Grün – Grün ist die unterstützende Farbe),
Schrift ist Noto Sans, Überschriften stehen in Blau, Links im Fliesstext sind
unterstrichen.

`src/css/tokens.css` ist eine **unveränderte Kopie** aus den Guidelines. Farben
dort nicht anpassen – wird ein Wert gebraucht, der fehlt, gehört er zuerst in
die Guidelines. Die Abbildung auf die Docusaurus-Variablen steht in
`src/css/custom.css`.

## Schreibweise

Schweizer Rechtschreibung: **ss statt ß**. Das gilt für Inhalte, Kommentare und
Commit-Nachrichten.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `docs/` | Alle Inhalte auf Deutsch (Master) |
| `i18n/<locale>/` | Generierte Übersetzungen — nicht von Hand pflegen |
| `static/img/<seiten-slug>/` | Bilder, nach Seite gruppiert |
| `static/img/_en/` | Bilder aus dem alten englischen Wiki |
| `src/components/Video/` | Video-Einbettung, global in MDX verfügbar |
| `src/css/tokens.css` | Design Tokens, unveränderte Kopie aus den Guidelines |
| `src/css/custom.css` | Zuordnung der Tokens auf Docusaurus |
| `sidebars.ts` | Navigationsstruktur (generiert, siehe unten) |
| `redirects.ts` | Weiterleitungen von den alten Google-Sites-URLs |
| `scripts/translate.ts` | Übersetzungs-Pipeline |
| `scripts/migration/` | Einmalige Migration von Google Sites |
| `glossary.md` | Terminologie für die Übersetzung |
| `migration-report.md` | Protokoll der Migration inkl. offener Punkte |

`sidebars.ts` und `redirects.ts` stammen aus der Migration
(`scripts/migration/convert.ts`). Für neue Seiten werden sie ab jetzt von Hand
gepflegt — ein erneuter Migrationslauf würde manuelle Änderungen überschreiben.

## Markdown-Konventionen

- Docusaurus verarbeitet `.md` als MDX. `<` und `{` im Fliesstext müssen als
  `&lt;` bzw. `&#123;` geschrieben werden, sonst bricht der Build.
- Überschriften brauchen keine expliziten `{#id}` — die Anker entstehen
  automatisch aus dem Text. Explizite IDs vertragen sich hier nicht mit MDX.
- Bilder liegen unter `static/img/…` und werden als `/img/…` referenziert.
- Videos über `<Video src="<YouTube-ID>" title="…" />`, nicht als roher iframe.

## Build

`npm run build` baut alle vier Sprachen und bricht bei defekten internen Links
ab (`onBrokenLinks: 'throw'`). Vor jedem Commit einmal durchlaufen lassen.
