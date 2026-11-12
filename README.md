# smart-me Support-Wiki

Das Support-Wiki der smart-me AG als [Docusaurus](https://docusaurus.io/)-Site.
Es löst das bisherige Google-Sites-Wiki (`dok.smart-me.com`) ab und dient
zugleich als Datenquelle für AI-Tools (Markdown im Repo + `llms.txt`).

**Veröffentlicht unter <https://wiki.smart-me.com/>**

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
| `src/css/tokens.css` | Design Tokens, unverändert aus den Design Guidelines |
| `src/css/custom.css` | Zuordnung der Tokens auf Docusaurus |
| `sidebars.ts` | Navigationsstruktur |
| `redirects.ts` | Weiterleitungen von den alten Google-Sites-URLs |
| `scripts/` | Migrations- und Übersetzungsskripte |
| `glossary.md` | Begriffe für die Übersetzung (fixe Übersetzungen, Produktnamen) |
| `plugins/llms-txt/` | Erzeugt `llms.txt` und `llms-full.txt` je Sprache |
| `migration-report.md` | Protokoll der Migration inkl. offener Punkte |

## Design

Die Gestaltung folgt den **smart-me Design Guidelines**
(`design-guidelines/smart-me/design.md`, Quelle: internes Design Wiki):

- Primärfarbe smart-me Blau `#28599A`, Grün als unterstützende Farbe
- Weiss als Grundfläche, Blau 5 % (`#F4F6FA`) für ruhige Flächen
- Schrift **Noto Sans** (400/500/700), selbst ausgeliefert über `@fontsource`
- Überschriften in smart-me Blau, Fliesstext `#272727`, linksbündig
- Links im Fliesstext immer unterstrichen
- Semantische Farbquartette für Hinweise, Warnungen und Fehler

`src/css/tokens.css` ist eine unveränderte Kopie der `tokens.css` aus den
Guidelines und sollte nur bei einer Aktualisierung dort angefasst werden. Die
Abbildung auf die Variablen von Docusaurus steht in `src/css/custom.css`.

Offen: Der **Dark Mode** ist in den Guidelines nicht beschrieben – er verwendet
hier hellere Stufen derselben Blau-Rampe. Ebenso ist kein **Favicon** definiert;
aktuell dient die Wortmarke als Platzhalter. Beides gehört vor dem
Produktivgang zu design@smart-me.com.

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

Die veröffentlichte Site liegt unter:

| Sprache | Adresse |
| --- | --- |
| Deutsch | <https://wiki.smart-me.com/> |
| Englisch | <https://wiki.smart-me.com/en/> |
| Französisch | <https://wiki.smart-me.com/fr/> |
| Italienisch | <https://wiki.smart-me.com/it/> |

Die Adresse ergibt sich aus `SITE_URL` und `BASE_URL` in
`.github/workflows/deploy.yml`.

## Custom Domain

GitHub Pages erlaubt pro Repository nur eine Custom Domain. Das ist
`wiki.smart-me.com`; die beiden alten Adressen werden bei Cloudflare
weitergeleitet.

| Domain | Cloudflare-DNS | Wirkung |
| --- | --- | --- |
| `wiki.smart-me.com` | CNAME → `ecarup.github.io`, **DNS only** | GitHub Pages |
| `dok.smart-me.com` | AAAA `100::`, **proxied** | Redirect Rule: 301 auf `https://wiki.smart-me.com/${1}` |
| `doc.smart-me.com` | AAAA `100::`, **proxied** | Redirect Rule: 301 auf `https://wiki.smart-me.com/en/${1}` |

Die alten Google-Sites-Pfade leitet anschliessend `redirects.ts` auf die neuen
Slugs um, für `doc.smart-me.com` innerhalb von `/en/`.

Auf GitHub-Seite:

- Die Domain wird unter *Settings → Pages → Custom domain* eingetragen, danach
  *Enforce HTTPS* aktivieren. Eine Datei `static/CNAME` braucht es nicht — beim
  Veröffentlichen über GitHub Actions ignoriert GitHub sie.
- `smart-me.com` ist in der Organisation eCarUp unter *Settings → Pages* als
  verifizierte Domain hinterlegt (TXT-Record `_github-pages-challenge-ecarup`),
  damit kein anderes Konto die Subdomains übernehmen kann.
- `wiki.smart-me.com` muss bei Cloudflare auf *DNS only* bleiben, sonst kann
  GitHub kein Zertifikat ausstellen.
