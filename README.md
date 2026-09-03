# smart-me Support-Wiki

Das Support-Wiki der smart-me AG als [Docusaurus](https://docusaurus.io/)-Site.
Es löst das bisherige Google-Sites-Wiki (`dok.smart-me.com`) ab und dient
zugleich als Datenquelle für AI-Tools (Markdown im Repo + `llms.txt`).

## Sprachen

Deutsch ist die **Master-Sprache**. Alle Inhalte werden ausschliesslich unter
`docs/` auf Deutsch gepflegt. Englisch, Französisch und Italienisch entstehen
automatisch über die Übersetzungs-Pipeline.

> Die Ordner unter `i18n/` werden **nie von Hand bearbeitet** – siehe
> [CONTRIBUTING.md](./CONTRIBUTING.md).

## Voraussetzungen

- Node.js **>= 20** (getestet mit 22)
- npm 10+

## Lokal starten

```bash
npm install
npm start
```

Die Site läuft danach auf <http://localhost:3000>. `npm start` zeigt nur die
deutsche Fassung. Eine andere Sprache prüfst du mit:

```bash
npm run start -- --locale fr
```

## Build

```bash
npm run build
```

Der Build bricht bei defekten internen Links ab (`onBrokenLinks: 'throw'`).

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `docs/` | Alle Inhalte auf Deutsch (Master) |
| `i18n/<locale>/` | Generierte Übersetzungen – nicht von Hand pflegen |
| `static/img/<seiten-slug>/` | Bilder, nach Seite gruppiert |
| `src/components/` | Eigene MDX-Komponenten (z.B. `<Video>`) |
| `src/css/custom.css` | Branding und Farben |
| `sidebars.ts` | Navigationsstruktur |
| `redirects.ts` | Weiterleitungen von den alten Google-Sites-URLs |
| `scripts/` | Migrations- und Übersetzungsskripte |
| `glossary.md` | Begriffe für die Übersetzung (fixe Übersetzungen, Produktnamen) |
| `plugins/llms-txt/` | Erzeugt `llms.txt` und `llms-full.txt` je Sprache |
| `migration-report.md` | Protokoll der Migration inkl. offener Punkte |

## Für AI-Werkzeuge

Der Build legt pro Sprache zwei Dateien nach dem Vorschlag von
[llmstxt.org](https://llmstxt.org/) ab:

| Datei | Inhalt |
| --- | --- |
| `/llms.txt` | Inhaltsverzeichnis mit einer Beschreibung je Seite |
| `/llms-full.txt` | Volltext aller Seiten am Stück |

Für die anderen Sprachen unter `/en/llms.txt`, `/fr/llms.txt`, `/it/llms.txt`.
Dazu kommt die übliche `/sitemap.xml`. Der Markdown-Quelltext im Repository ist
ebenfalls direkt verwendbar.

## Veröffentlichung

Jeder Push auf `main` baut die Site und veröffentlicht sie über
`.github/workflows/deploy.yml` auf GitHub Pages. Einmalig muss unter
*Settings → Pages* die Quelle auf **GitHub Actions** gestellt werden.

## Custom Domain

Die Site wird auf GitHub Pages veröffentlicht. Für den Wechsel auf
`dok.smart-me.com` genügen zwei Anpassungen: `static/CNAME` anlegen und in
`docusaurus.config.ts` `url`/`baseUrl` setzen (bzw. die Umgebungsvariablen
`SITE_URL` und `BASE_URL`).
