# Am Wiki mitarbeiten

Diese Anleitung richtet sich an **alle bei smart-me** — Programmierkenntnisse
sind nicht nötig. Alles läuft im Browser auf GitHub.

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

Damit die Seite auch in der Navigation links auftaucht, muss sie in
`sidebars.ts` eingetragen werden. Das ist der einzige Schritt, bei dem etwas
Technik im Spiel ist — melde dich dafür bei jemandem aus dem Entwicklungsteam
oder schreibe es einfach in die Beschreibung deines Pull Requests.

---

## Videos einbinden

```
<Video src="nrziX2lLI0s" title="Webinar VEWA" />
```

`src` ist die YouTube-Video-ID. Die findest du in der Adresse des Videos hinter
`v=` beziehungsweise nach `youtu.be/`.

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
