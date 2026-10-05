# Am Wiki mitarbeiten

Diese Anleitung richtet sich an **alle bei smart-me** — Programmierkenntnisse
sind nicht nötig. Alles läuft im Browser auf GitHub. Wer lieber lokal in einem
Editor arbeitet, findet den Weg dazu weiter unten unter
[Lokal mit VS Code arbeiten](#lokal-mit-vs-code-arbeiten).

## Das Wichtigste in drei Sätzen

1. Geschrieben wird **nur auf Deutsch**, im Ordner `docs`.
2. Englisch, Französisch und Italienisch werden **automatisch übersetzt** —
   darum musst du dich nicht kümmern.
3. Änderungen sind nach wenigen Minuten online.

---

## Eine Seite korrigieren

### 1. Die Seite im Wiki öffnen

Ganz unten auf jeder Seite steht **„Edit this page"**. Ein Klick darauf öffnet
genau die richtige Datei auf GitHub. Das ist der bequemste Weg — du musst nichts
suchen.

Alternativ: [Repository öffnen](https://github.com/ecarup/smart-me-wiki) und im
Ordner `docs` zur gewünschten Datei navigieren. Die Ordnerstruktur entspricht
der Navigation im Wiki.

### 2. In den Bearbeitungsmodus wechseln

Oben rechts über dem Text ist ein **Stift-Symbol** (✏️). Klick darauf. Falls du
noch nicht angemeldet bist, fragt GitHub jetzt nach deinem Login.

### 3. Text ändern

Du siehst den Text mit ein paar Sonderzeichen drumherum. Das ist Markdown:

| Was du schreibst | Was rauskommt |
| --- | --- |
| `## Überschrift` | eine Überschrift |
| `### Kleinere Überschrift` | eine Unterüberschrift |
| `**fett**` | **fett** |
| `*kursiv*` | *kursiv* |
| `- Punkt` | ein Aufzählungspunkt |
| `1. Punkt` | ein nummerierter Punkt |
| `[Text](https://beispiel.ch)` | ein Link |

Ganz oben zwischen den beiden `---`-Zeilen steht der sogenannte Kopfbereich:

```
---
title: 'VEWA - Abrechnung'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Kurzbeschreibung in einem Satz.'
sidebar_label: 'VEWA - Abrechnung'
---
```

- `title` — die Überschrift der Seite. Darfst du ändern.
- `description` — ein Satz für Suchmaschinen und die Suche. Darfst du ändern.
- `sidebar_label` — der Eintrag in der Navigation links. Darfst du ändern.
- `slug` — **nicht ändern.** Das ist die Adresse der Seite. Änderst du sie,
  laufen alle bestehenden Links ins Leere.

Über dem Textfeld kannst du auf **„Preview"** klicken und sehen, wie es aussehen
wird.

### 4. Änderung speichern

Oben rechts auf den grünen Knopf **„Commit changes…"**. Es öffnet sich ein
kleines Fenster:

- Ins erste Feld schreibst du kurz, was du geändert hast — zum Beispiel
  *„Telefonnummer im Support korrigiert"*.
- Darunter wählst du **„Create a new branch for this commit and start a pull
  request"**. Das ist der sichere Weg: deine Änderung wird erst geprüft.
- Dann auf **„Propose changes"** und auf der nächsten Seite auf
  **„Create pull request"**.

Fertig. Jemand aus dem Team schaut drüber und klickt auf „Merge". Danach ist die
Änderung online und wird automatisch übersetzt.

> Wenn du dir sicher bist und Schreibrechte hast, kannst du auch
> **„Commit directly to the main branch"** wählen. Dann ist es sofort online.

---

## Ein Bild hinzufügen

Bilder liegen unter `static/img/<seiten-slug>/`. Der Ordnername entspricht dem
Pfad der Seite mit Bindestrichen statt Schrägstrichen — die Seite
`/konfiguration/billing/vewa-abrechnung` hat also den Bildordner
`static/img/konfiguration-billing-vewa-abrechnung/`.

1. Öffne im Repository den passenden Ordner unter `static/img/`.
2. Oben rechts **„Add file" → „Upload files"**, Bild hineinziehen.
3. Unten wie gewohnt „Commit changes".
4. Öffne dann die Seite unter `docs/` und füge an der richtigen Stelle ein:

   ```
   ![Was auf dem Bild zu sehen ist](/img/konfiguration-billing-vewa-abrechnung/12.png)
   ```

Der Text in den eckigen Klammern ist der **Alt-Text**. Er wird vorgelesen, wenn
jemand die Seite mit einem Screenreader liest, und hilft der Suche. Beschreibe
kurz, was zu sehen ist — nicht „Screenshot", sondern zum Beispiel
*„Dialog zum Anlegen einer Abrechnungsperiode"*.

**Bitte vor dem Hochladen verkleinern.** Screenshots brauchen selten mehr als
1600 Pixel Breite. Grosse Bilder machen die Seite langsam.

---

## Bild neben Text stellen

Standardmässig steht ein Bild über oder unter dem Text, über die volle Breite.
Soll der Text links und das Bild rechts daneben stehen, setzt du beides in ein
zweispaltiges Raster. Dafür brauchst du nichts zu installieren — das Raster ist
in Docusaurus eingebaut.

Das folgende Beispiel funktioniert so, wie es dasteht: der Text nimmt vier
Spalten ein, das Bild acht, und das Bild sitzt mittig in seinem Rahmen.

```jsx
<div className="row">
<div className="col col--4">

Einen Zähler deaktivierst du direkt in der Ordnerkonfiguration. Er bleibt
erhalten und lässt sich jederzeit wieder aktivieren — seine Messwerte gehen
nicht verloren.

</div>
<div className="col col--8 text--center">

![Schalter zum Deaktivieren eines Zählers](/img/konfiguration-ordnerkonfiguration/03.jpg)

</div>
</div>
```

### Wie du es anpasst

Die Zahl hinter `col--` ist die Breite in Spalten. Es gibt zwölf davon, und die
beiden Werte müssen zusammen zwölf ergeben:

| Aufteilung | Schreibweise |
| --- | --- |
| schmaler Text, grosses Bild | `col--4` und `col--8` |
| je zur Hälfte | `col--6` und `col--6` |
| breiter Text, kleines Bild | `col--8` und `col--4` |

Die Reihenfolge im Text bestimmt links und rechts — was zuerst steht, steht
links. Willst du das Bild links und den Text rechts, drehst du die beiden
`<div>`-Blöcke um.

`text--center` zentriert das Bild in seiner Spalte. Lässt du es weg, sitzt das
Bild am linken Rand der Spalte.

### Worauf du achten musst

1. **`className`, nicht `class`.** Die Seiten werden als MDX verarbeitet, und
   dort heisst das Attribut so. Schreib es ab wie im Beispiel.
2. **Jedes `<div>` wieder schliessen.** Im Beispiel sind es drei öffnende und
   drei schliessende. Fehlt ein `</div>`, bricht der Build mit einer
   Fehlermeldung ab — die Seite geht also nicht kaputt online, du siehst beim
   Pull Request ein rotes ✗.
3. **Leerzeilen um den Inhalt** sind nicht zwingend, machen den Quelltext aber
   deutlich lesbarer. Halt dich ans Beispiel, dann passt es.

### Wann sich das lohnt

Die Textspalte ist insgesamt rund 800 Pixel breit. Bei `col--8` bleiben dem
Bild also etwa 520 Pixel, bei `col--4` noch 260.

Für ein Produktfoto, ein Hochformat oder den Ausschnitt eines Dialogs ist das
genau richtig. Für den Screenshot einer ganzen Oberfläche nicht: auf 260 Pixel
heruntergerechnet liest niemand mehr eine Beschriftung, und Anklicken zum
Vergrössern gibt es im Wiki nicht. Solche Screenshots bleiben besser über die
volle Breite, mit dem Text darüber.

Auf schmalen Fenstern rutschen die beiden Spalten automatisch untereinander —
zuerst der Text, dann das Bild. Zieh das Browserfenster einmal schmal, dann
siehst du es.

---

## Tabellen

Eine Tabelle besteht aus drei Teilen: der Kopfzeile, einer **Trennzeile aus
Bindestrichen** und den Datenzeilen. Die Spalten trennst du mit einem
senkrechten Strich `|`.

```markdown
| Wert / Symbol | Beschreibung |
| --- | --- |
| 6A | Minimum Ladestrom |
| 32A | Max. zugelassener Ladestrom |
```

Daraus wird:

| Wert / Symbol | Beschreibung |
| --- | --- |
| 6A | Minimum Ladestrom |
| 32A | Max. zugelassener Ladestrom |

**Die Trennzeile ist Pflicht.** Lässt du sie weg, erscheinen deine Zeilen als
Fliesstext mit Strichen dazwischen — das ist der mit Abstand häufigste Fehler.
Pro Spalte brauchst du mindestens drei Bindestriche.

Die Striche müssen im Quelltext **nicht** untereinander stehen. Ob du sauber
ausrichtest oder nicht, ändert am Ergebnis nichts — mach es so, wie es sich für
dich besser liest.

### Spalten ausrichten

Mit Doppelpunkten in der Trennzeile bestimmst du die Ausrichtung. Für Zahlen
ist rechtsbündig meist besser lesbar:

```markdown
| Artikel | Anzahl | Preis |
| :--- | :---: | ---: |
| Pico | 2 | 1'250.00 |
| Telstar | 12 | 540.00 |
```

| Schreibweise in der Trennzeile | Wirkung |
| --- | --- |
| `---` | Standard, linksbündig |
| `:---` | linksbündig |
| `:---:` | zentriert |
| `---:` | rechtsbündig |

### Sonderfälle

- **Senkrechter Strich im Text:** schreib `\|`, sonst zerlegt er dir die Zelle.
- **Zeilenumbruch in einer Zelle:** `<br />` an der Stelle einfügen. Eine
  Leerzeile geht nicht, die würde die Tabelle beenden.
- **Leere Zelle:** einfach nichts dazwischen schreiben, `|  |` genügt.

### Wie breit darf sie sein?

Breite Tabellen werden im Wiki nicht gequetscht, sondern lassen sich seitlich
scrollen. Trotzdem: ab etwa sechs Spalten liest sie niemand mehr gern, und auf
dem Handy schon gar nicht. Steht die Tabelle in einer schmalen Spalte neben
einem Bild, bleib bei zwei bis drei Spalten.

Wird es mehr, ist meist eine Aufzählung die bessere Form — oder die Zahlen
gehören in eine verlinkte Tabelle statt ins Wiki.

---

## Eine neue Seite anlegen

1. Im Repository in den passenden Ordner unter `docs/` wechseln.
2. **„Add file" → „Create new file"**.
3. Als Dateiname etwas Kurzes ohne Umlaute und ohne Leerzeichen, endend auf
   `.md` — zum Beispiel `neue-funktion.md`.
4. Als Erstes den Kopfbereich einfügen:

   ```
   ---
   title: 'Titel der Seite'
   slug: '/bereich/neue-funktion'
   description: 'Worum es auf dieser Seite geht, in einem Satz.'
   ---

   Hier beginnt der Text.
   ```

   Der `slug` ist die spätere Adresse. Er sollte zum Ordner passen.
5. Speichern wie oben beschrieben.

---

## Eine neue Seite in die Navigation eintragen

Eine neue Seite ist nach dem Speichern sofort unter ihrer Adresse erreichbar —
sie erscheint aber **nicht** automatisch in der Navigation links. Die
Navigation steht vollständig von Hand in der Datei `sidebars.ts` im obersten
Ordner des Repositorys. Nichts daran wird erzeugt.

Dort trägst du die **Doc-ID** deiner Seite ein. Das ist der Dateipfad
unterhalb von `docs/`, ohne die Endung:

| Datei | Doc-ID |
| --- | --- |
| `docs/kontakt.md` | `kontakt` |
| `docs/stoerungsbehebung/pico-fehler.md` | `stoerungsbehebung/pico-fehler` |
| `docs/produkte/pico-ladestation/index.md` | `produkte/pico-ladestation/index` |

Such in `sidebars.ts` die passende Gruppe und setz die ID als neue Zeile in
deren `items`-Liste:

```ts
{
  type: 'category',
  label: 'Stoerungsbehebung',
  link: {type: 'doc', id: 'stoerungsbehebung/index'},
  items: [
    'stoerungsbehebung/zaehler-offline',
    'stoerungsbehebung/neue-seite',          // <-- neu eingefügt
    'stoerungsbehebung/pico-fehler',
    'stoerungsbehebung/billing-fehlermeldungen',
  ],
},
```

Die Reihenfolge in der Liste ist die Reihenfolge in der Navigation. Sortiert
wird nach Nutzungsreihenfolge — was am häufigsten gebraucht wird, steht oben,
nicht das alphabetisch Erste.

Soll deine Seite eine eigene Gruppe mit Unterseiten werden, legst du einen
Ordner mit einer `index.md` darin an und schreibst statt der einzelnen Zeile
einen `category`-Block nach dem Muster oben.

Arbeitest du über GitHub im Browser und traust dir das nicht zu: schreib
einfach in die Beschreibung deines Pull Requests, wo die Seite hingehört.
Jemand aus dem Entwicklungsteam trägt sie ein.

---

## Videos einbinden

Einen YouTube-Player bindest du mit der Komponente `<Video>` ein. Schreib die
Zeile an die Stelle, an der das Video stehen soll:

```markdown
<Video src="1K1MCABTy8M" title="Webinar Loxone Schweiz" />
```

In `src` gehört **nur die Video-ID**, nicht die ganze Adresse. Die ID ist der
Teil hinter `v=` beziehungsweise nach `youtu.be/`:

| Adresse im Browser | ID |
| --- | --- |
| `https://www.youtube.com/watch?v=1K1MCABTy8M` | `1K1MCABTy8M` |
| `https://youtu.be/1K1MCABTy8M?si=T3VwzDvN-XjnJKJF` | `1K1MCABTy8M` |

Das `?si=…` am Ende einer geteilten Adresse ist eine Empfehlungs-Markierung von
YouTube und gehört nicht ins Wiki. Alles ab dem Fragezeichen fällt weg.

> **Nicht die volle Adresse einsetzen.** `<Video src="https://youtu.be/…" />`
> baut zwar die Seite, zeigt aber kein Video: eine Teilen-Adresse lässt sich
> nicht einbetten. Mit der blossen ID erzeugt die Komponente die richtige
> Einbettungsadresse selbst — und zwar die cookiefreie Variante.

`title` ist der Name des Videos. Er wird Screenreadern vorgelesen; nimm den
echten Titel vom YouTube-Kanal und nicht „Video".

---

## Google Tabellen einbetten

Einen Ausschnitt einer Google Tabelle bindest du mit `<Embed>` ein. So sieht es
auf der Pico-Seite aus — gezeigt wird dort nur der Bereich `A1:B26`:

```jsx
<Embed
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxJQ…hh/pubhtml?gid=0&range=A1:B26&single=true&widget=false&headers=false&chrome=false"
  aspect="1.733"
  title="Technische Daten der Pico Ladestation" />
```

### Die Adresse zusammensetzen

1. In der Tabelle **Datei → Freigeben → Im Web veröffentlichen**.
2. Das gewünschte Tabellenblatt wählen, als Format **Webseite**, dann
   **Veröffentlichen**.
3. Du bekommst eine Adresse, die auf `/pubhtml` endet. An diese hängst du die
   Parameter an — der erste mit `?`, alle weiteren mit `&`.

| Parameter | Wirkung |
| --- | --- |
| `gid=0` | welches Tabellenblatt. Die Nummer steht in der normalen Adresse der Tabelle hinter `gid=` |
| `range=A1:B26` | welcher Zellbereich gezeigt wird |
| `single=true` | nur dieses eine Blatt statt aller |
| `widget=false` | blendet die Blattregister am unteren Rand aus |
| `headers=false` | blendet Spaltenbuchstaben und Zeilennummern aus |
| `chrome=false` | blendet den Titel der Tabelle oben aus |

Für eine Tabelle, die **nicht** im Web veröffentlicht ist, lautet der Teil vor
dem Fragezeichen `/htmlembed` statt `/pubhtml`. Dann sieht die Einbettung aber
nur, wer ohnehin Zugriff auf die Tabelle hat — für alle anderen bleibt der
Rahmen leer. Im Wiki ist das fast nie gewollt.

`aspect` ist das Seitenverhältnis Breite durch Höhe. Pass es so an, dass der
Bereich ohne Scrollbalken hineinpasst: bei 26 Zeilen in zwei Spalten etwa
`1.7`, bei einer langen schmalen Liste entsprechend kleiner. `title` ist
Pflicht — ohne ihn ist der Rahmen für Screenreader namenlos.

> **Vor dem Veröffentlichen prüfen, was in der Tabelle steht.** „Im Web
> veröffentlichen" macht das gewählte Blatt für jeden mit der Adresse lesbar,
> unabhängig von den Freigaben des Dokuments. Keine Kundendaten, Preise oder
> internen Notizen auf einem veröffentlichten Blatt stehen lassen — lieber die
> benötigten Zellen in ein eigenes Blatt kopieren und nur dieses veröffentlichen.

Ändern sich die Zahlen selten, ist eine normale Markdown-Tabelle im Wiki die
bessere Wahl: sie lädt schneller, lässt sich durchsuchen und funktioniert auch
dann noch, wenn jemand die Freigabe der Tabelle zurückzieht.

---

## PDF verlinken

Ein PDF wird **verlinkt, nicht eingebettet** — es gibt im Wiki keinen
PDF-Betrachter. Schreib in den Linktext, worum es geht und dass es ein PDF ist:

```markdown
[Download Datenblatt (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc…ks/export/pdf)
```

Liegt das Dokument in Google Drive, hängst du den passenden Export-Teil an die
Adresse, dann lädt der Klick direkt das PDF statt zuerst Google zu öffnen:

| Quelle | Endung der Adresse |
| --- | --- |
| Google Präsentation | `/export/pdf` |
| Google Dokument | `/export?format=pdf` |
| PDF-Datei in Drive | `/view?usp=sharing` — ein echter Export-Link existiert hier nicht |

Die Dokument-ID ist der lange Abschnitt zwischen `/d/` und dem nächsten
Schrägstrich. Ein Beispiel aus dem Wiki:

```markdown
[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg…Lk/export?format=pdf)

[Installations- und Montageanleitung (Deutsch)](https://docs.google.com/presentation/d/1d_ejgHn…aw/export/pdf)

[Konformitätserklärung](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)
```

Zwei Dinge dazu:

- **Freigabe klären.** Ein Link, der nur intern funktioniert, führt für Partner
  und Installateure auf eine Anmeldeseite. Steht das Dokument absichtlich nur
  intern zur Verfügung, schreib es in den Linktext: *„(nur intern)"*.
- **Keine leeren Linktexte.** `[](https://…)` erzeugt einen unsichtbaren Link.
  Jeder Link braucht einen Text, der sagt, wohin er führt.

---

## Lokal mit VS Code arbeiten

Wer mehrere Seiten am Stück bearbeitet oder das Ergebnis vorher sehen will,
arbeitet besser lokal als im Browser. Nötig ist das nicht — für einzelne
Korrekturen reicht der Weg über GitHub oben völlig.

### Einmalig einrichten

Vorausgesetzt werden [Node.js](https://nodejs.org) ab Version 20 und
[Git](https://git-scm.com).

```bash
git clone https://github.com/eCarUp/smart-me-wiki.git
cd smart-me-wiki
npm install
```

### Vorschau starten

```bash
npm start
```

Die Site läuft danach auf `http://localhost:3000` und aktualisiert sich bei
jeder Speicherung von selbst. Eine andere Sprache prüfst du mit
`npm run start -- --locale fr`.

Die eingebaute Markdown-Vorschau von VS Code taugt für dieses Wiki **nicht**:
sie findet die Bilder nicht, zeigt keine Videos und kennt die Navigation nicht.
Nimm VS Code zum Schreiben und den Browser daneben zum Schauen.

### Wo gespeichert wird

| Was | Wohin |
| --- | --- |
| Seitentext | `docs/<bereich>/<dateiname>.md` |
| Bilder | `static/img/<seiten-slug-mit-bindestrichen>/` |
| Navigation | `sidebars.ts` im obersten Ordner |

Der Ordner `docs/` bildet die Bereiche des Wikis ab: eine Seite zur
Störungsbehebung gehört nach `docs/stoerungsbehebung/`, eine zu den Produkten
nach `docs/produkte/`. Der Dateiname ist kleingeschrieben, ohne Leerzeichen
und ohne Umlaute — `neue-funktion.md`, nicht `Neue Funktion.md`.

Der Bildordner heisst wie der `slug` der Seite, mit Bindestrichen statt
Schrägstrichen: die Seite `/konfiguration/billing/vewa-abrechnung` hat den
Ordner `static/img/konfiguration-billing-vewa-abrechnung/`. Im Text wird das
Bild dann als `/img/…` eingebunden, **ohne** das führende `static`.

Im Ordner `i18n/` wird nichts gespeichert und nichts geändert — siehe unten.

### Neue Seite lokal anlegen

1. In VS Code im Explorer den passenden Ordner unter `docs/` aufklappen.
2. Rechtsklick → **New File**, Dateiname auf `.md` enden lassen.
3. Den Kopfbereich einfügen (siehe oben), darunter den Text schreiben.
4. Speichern. Die Seite ist sofort unter ihrem `slug` erreichbar, zum Beispiel
   `http://localhost:3000/stoerungsbehebung/neue-seite`.
5. Die Seite in `sidebars.ts` eintragen, damit sie in der Navigation auftaucht.
6. Den Dev-Server **neu starten** — Änderungen an `sidebars.ts` übernimmt die
   laufende Vorschau nicht zuverlässig. Hilft das nicht: `npm run clear`, dann
   wieder `npm start`.

Siehst du die neue Seite nicht in der Navigation, fehlt fast immer Schritt 5.

### Vor dem Commit

```bash
npm run build
```

Der Build baut alle vier Sprachen und bricht bei einem einzigen defekten
internen Link ab. Läuft er lokal durch, läuft er auch auf GitHub durch.

---

## Was du **nicht** tun sollst

### Niemals im Ordner `i18n/` etwas ändern

Dort liegen die englischen, französischen und italienischen Fassungen. Die
werden **automatisch erzeugt** und bei der nächsten Übersetzung überschrieben —
deine Änderung wäre weg.

Ist eine Übersetzung falsch, gibt es zwei richtige Wege:

- **Der Fehler steht schon im Deutschen:** korrigiere die deutsche Seite unter
  `docs/`. Die Übersetzung zieht automatisch nach.
- **Ein Fachbegriff ist falsch übersetzt:** trag ihn in `glossary.md` ein. Dort
  stehen Begriffe, die nie übersetzt werden (Produktnamen wie *Pico* oder
  *Nimbus*) und solche mit einer festen Übersetzung (*ZEV* heisst auf
  Französisch immer *RCP*). Das Glossar gilt ab dann für alle Seiten.

### Den `slug` nicht ändern

Das ist die Adresse der Seite. Bestehende Links — in E-Mails, in Angeboten, in
Google — würden ins Leere laufen.

### Sonderzeichen im Fliesstext

Die Zeichen `<` und `{` haben in unserem System eine besondere Bedeutung. Wenn
du sie als Text brauchst, schreib stattdessen `&lt;` und `&#123;`. Sonst lässt
sich die Seite nicht mehr bauen.

---

## Und die Übersetzungen?

Sobald deine Änderung auf `main` liegt, läuft automatisch die Übersetzung. Sie
erzeugt einen eigenen Pull Request mit dem Titel **„Übersetzungen
aktualisieren"**. Wer die Sprache spricht, kann kurz drüberschauen und ihn dann
zusammenführen.

Übersetzt werden nur Seiten, die sich seit der letzten Übersetzung geändert
haben — es entsteht also kein unnötiger Aufwand.

---

## Wenn etwas schiefgeht

Nach jeder Änderung läuft automatisch eine Prüfung. Siehst du beim Pull Request
ein **rotes ✗** statt eines grünen Hakens, hat der Build ein Problem gefunden —
meistens ein Link, der ins Leere zeigt, oder eines der Sonderzeichen von oben.

Das ist nicht schlimm und geht nicht online. Klick auf **„Details"**, um zu
sehen, was fehlt, oder frag im Entwicklungsteam nach.

Und falls doch einmal etwas kaputtgeht: In GitHub ist jede Änderung
nachvollziehbar und lässt sich mit einem Klick rückgängig machen. Du kannst
nichts unwiederbringlich zerstören.
