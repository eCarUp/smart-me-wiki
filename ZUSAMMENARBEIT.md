# Zu mehreren am Wiki arbeiten

Diese Anleitung zeigt, wie mehrere Leute gleichzeitig am selben Repository
arbeiten, ohne sich gegenseitig die Arbeit zu überschreiben: einen Branch
anlegen, darin arbeiten, `main` nachziehen, zusammenführen — und was zu tun
ist, wenn dabei etwas klemmt.

Vorausgesetzt wird ein eingerichteter Rechner. Wie das geht, steht in
[LOKALINSTALLATION.md](LOKALINSTALLATION.md). Wie das Wiki geschrieben wird,
steht in [CONTRIBUTING.md](CONTRIBUTING.md).

## Das Prinzip

- **`main` ist das, was online steht.** Darauf wird nie direkt gearbeitet.
- **Jeder arbeitet in einem eigenen Branch** — einer Abzweigung, in der nur du
  schreibst. Was du dort tust, sieht niemand sonst, bis du es zeigst.
- **Fertig heisst Pull Request.** Auf GitHub schlägst du vor, deinen Branch
  nach `main` zu übernehmen. Jemand schaut drüber und führt ihn zusammen.
- **Danach ist der Branch erledigt** und wird gelöscht. Für die nächste
  Änderung gibt es einen neuen.

Zwei Leute können so gleichzeitig am Wiki arbeiten, ohne sich abzustimmen.
Eng wird es nur dort, wo beide **dieselben Zeilen derselben Datei** ändern —
dafür gibt es den Abschnitt
[Wenn zwei dasselbe geändert haben](#wenn-zwei-dasselbe-geändert-haben).

> Ein Pull Request mit dem Titel **„Übersetzungen aktualisieren"** taucht
> regelmässig von selbst auf. Den erzeugt der Übersetzungs-Workflow, er gehört
> niemandem. Nicht hineinarbeiten — nur zusammenführen, wenn die Sprachen
> stimmen.

## Wo du gerade bist

Zwei Stellen in VS Code, die du ab jetzt ständig brauchst:

- **Unten links in der Statusleiste** steht der Name des Branches, in dem du
  gerade arbeitest. Steht dort `main`, arbeitest du am Live-Stand.
- **Die Quellcodeverwaltung** öffnest du mit **Strg + Shift + G**. Dort stehen
  alle Dateien, die du seit dem letzten Commit geändert hast.

## Schritt 1: Einen Branch anlegen

Leg den Branch immer von einem aktuellen `main` aus an, sonst schleppst du von
Anfang an einen veralteten Stand mit.

1. In der Quellcodeverwaltung auf **…** (*More Actions*) → **Fetch**. Das holt
   den aktuellen Stand von GitHub, ohne etwas zu verändern.
2. **Strg + Shift + P** → `Git: Create Branch From...` → in der Liste
   `origin/main` wählen.
3. Einen Namen eingeben und Enter drücken.

VS Code wechselt sofort in den neuen Branch; unten links siehst du den Namen.

**Zum Namen:** kurz und sprechend, klein geschrieben, mit Bindestrichen statt
Leerzeichen, ohne Umlaute — `eniris-seite`, `kontakt-korrektur`,
`bilder-pico`. Wer den Namen liest, soll wissen, worum es geht.

> Bist du schon auf einem aktuellen `main`, geht es auch schneller: unten links
> auf den Branch-Namen klicken und im Auswahlfeld **Create new branch...**
> wählen.

## Schritt 2: Arbeiten und zwischendurch committen

Ein **Commit** ist ein Zwischenstand mit einer kurzen Beschreibung. Mach lieber
viele kleine als einen grossen am Schluss — jeder Commit ist ein Punkt, auf den
du zurückkannst.

1. **Strg + Shift + G** öffnen. Unter **Changes** stehen deine geänderten
   Dateien.
2. Auf das **+** (*Stage Changes*) neben einer Datei — oder neben **Changes**,
   um alle zu nehmen. Die Dateien wandern nach **Staged Changes**.
3. Oben ins Feld eine Zeile schreiben, was du geändert hast: *„Eniris-Seite
   ergänzt"*, nicht *„Änderungen"*.
4. Auf **Commit**.

Ordner wie `node_modules` und `build` tauchen dabei nie auf — die sind in
`.gitignore` ausgenommen und gehören nicht ins Repository.

## Schritt 3: Den Branch auf GitHub sichern

Solange der Branch nur auf deinem Rechner liegt, sieht ihn niemand, und bei
einem Festplattenschaden ist er weg.

- **Beim ersten Mal:** auf **Publish Branch**. Der Knopf erscheint in der
  Statusleiste, sobald es etwas zu veröffentlichen gibt.
- **Danach:** auf **Sync Changes**. Das holt zuerst neue Commits von GitHub und
  schickt dann deine hoch.

Mach das ruhig mehrmals am Tag. Veröffentlichen heisst nicht, dass etwas online
geht — dein Branch liegt einfach auch auf GitHub.

## Schritt 4: `main` nachziehen, bevor du abschliesst

Das ist der Schritt, auf den es bei der Zusammenarbeit ankommt. Während du
gearbeitet hast, haben andere `main` weiterentwickelt. Hol dir deren Stand in
deinen Branch, **bevor** du den Pull Request öffnest — dann löst du mögliche
Konflikte in Ruhe bei dir, statt dass sie im Pull Request auftauchen.

1. **…** (*More Actions*) → **Fetch**.
2. **Strg + Shift + P** → `Git: Merge...` → `origin/main` wählen.

Läuft das ohne Meldung durch, bist du fertig. Meldet VS Code einen Konflikt,
geh zum Abschnitt [Wenn zwei dasselbe geändert
haben](#wenn-zwei-dasselbe-geändert-haben).

Danach einmal prüfen, dass alles noch baut:

```powershell
npm install
npm run build
```

`npm install` brauchst du nur, wenn sich `package-lock.json` geändert hat —
schaden kann es nie. Danach **Sync Changes**.

## Schritt 5: Den Pull Request öffnen

1. Das Repository auf GitHub öffnen. Oben steht ein gelber Balken mit deinem
   Branch und dem Knopf **Compare & pull request**.
2. Titel und ein, zwei Sätze dazu, was geändert wurde und warum.
3. **Create pull request**.
4. Unten läuft automatisch eine Prüfung. Warte auf den **grünen Haken** — ein
   rotes ✗ heisst, der Build ist gescheitert, meistens an einem Link, der ins
   Leere zeigt. Ein Klick auf **Details** zeigt, woran es liegt. Du korrigierst
   es in deinem Branch, committest und synchronisierst; der Pull Request
   aktualisiert sich von selbst.
5. Jemand aus dem Team schaut drüber und klickt auf **Merge pull request**,
   danach auf **Delete branch**.

Ab da ist die Änderung auf `main`, geht online und wird automatisch übersetzt.

## Schritt 6: Aufräumen

Nach dem Merge bei dir lokal:

1. Unten links auf den Branch-Namen → `main` wählen.
2. **…** (*More Actions*) → **Pull**.
3. **Strg + Shift + P** → `Git: Delete Branch...` → den alten Branch wählen.

Für die nächste Änderung fängst du wieder bei Schritt 1 an.

## Wenn zwei dasselbe geändert haben

Ein **Konflikt** entsteht nur, wenn zwei Leute **dieselben Zeilen derselben
Datei** geändert haben. Verschiedene Dateien, oder verschiedene Stellen
derselben Datei, führt Git selbst zusammen.

Git kann in diesem Fall nicht entscheiden, welche Fassung gilt — das musst du
tun. Kaputt ist dabei nichts: Beide Fassungen sind vollständig vorhanden, und
solange du nichts committest, lässt sich alles rückgängig machen.

**Merken:** Beim Merge aus Schritt 4 heisst

- **Current** = was in **deinem Branch** steht,
- **Incoming** = was von **`main`** kommt.

### So löst du ihn auf

In der Quellcodeverwaltung erscheint ein Abschnitt **Merge Changes** mit den
betroffenen Dateien. Öffne eine davon. Die strittige Stelle ist eingerahmt von
`<<<<<<<`, `=======` und `>>>>>>>`, und direkt darüber stehen vier Knöpfe:

| Knopf | Wirkung |
| --- | --- |
| **Accept Current Change** | deine Fassung behalten |
| **Accept Incoming Change** | die Fassung aus `main` übernehmen |
| **Accept Both Changes** | beide hintereinander behalten |
| **Compare Changes** | die beiden nebeneinander anschauen |

**Accept Both Changes** ergibt nicht automatisch sinnvollen Text — lies danach
nach, ob der Absatz noch stimmt.

Ist die Stelle unübersichtlich, nimm den dreigeteilten Editor: Rechtsklick auf
die Datei unter **Merge Changes** → **Open in Merge Editor**. Links steht
**Incoming**, rechts **Current**, unten das **Result**, an dem du direkt
schreiben kannst. **Complete Merge** übernimmt die Datei.

Wenn alle Dateien bereinigt sind: Commit-Nachricht eingeben, **Commit**. Danach
einmal `npm run build` — ein halb aufgelöster Konflikt baut nicht.

Willst du von vorn anfangen: **Strg + Shift + P** → `Git: Abort Merge`. Dein
Branch ist dann wieder so wie vor Schritt 4.

### Konflikte, die in diesem Wiki typisch sind

| Datei | Warum | Was zu tun ist |
| --- | --- | --- |
| `docs/…/seite.md` | zwei Leute an derselben Seite | Stelle für Stelle entscheiden. Im Zweifel bei der anderen Person nachfragen, statt zu raten. |
| `sidebars.ts` | zwei neue Seiten in derselben Gruppe | Meistens **Accept Both Changes**, danach die Reihenfolge prüfen. |
| `.translation-state.json` | schreibt der Übersetzungslauf | **Accept Incoming Change**, danach `npm run translate` laufen lassen. |
| `i18n/…` | wird erzeugt, nie von Hand gepflegt | **Accept Incoming Change**, danach `npm run translate`. |
| `package-lock.json` | jemand hat ein Paket hinzugefügt | **Accept Incoming Change**, danach `npm install`. |
| `.png`, `.jpg` | Bilder lassen sich nicht zusammenführen | Eine der beiden Fassungen behalten. Werden beide gebraucht, eine umbenennen. |

## Weitere Probleme

| Meldung oder Situation | Was zu tun ist |
| --- | --- |
| `Your local changes ... would be overwritten by merge` | Du hast Änderungen, die noch nicht committet sind. Erst committen (Schritt 2), dann nochmal. |
| `Updates were rejected because the remote contains work that you do not have` | Jemand hat in der Zwischenzeit gepusht. **Sync Changes** holt den Stand zuerst, danach geht der Push durch. |
| Du hast aus Versehen auf `main` gearbeitet, **noch nicht committet** | Einfach jetzt einen Branch anlegen — die Änderungen wandern mit. |
| Du hast aus Versehen auf `main` gearbeitet und **schon committet** | Nicht pushen. Branch anlegen (die Commits sind dann auch dort), dann `main` zurücksetzen lassen — frag dafür im Entwicklungsteam nach. |
| Dein Branch ist völlig verfahren | Nichts geht verloren, was auf GitHub liegt. Im Zweifel: Ordner umbenennen, Repository neu klonen, Branch neu holen. |
| VS Code zeigt Änderungen an Dateien, die du nie angefasst hast | Meist Zeilenenden. `.gitattributes` regelt das; melde es, statt die Dateien mitzucommitten. |

**Niemals `git push --force`.** Damit überschreibst du Arbeit anderer Leute auf
GitHub, und das lässt sich nur mit Mühe zurückholen.

## Was ihr untereinander abmachen solltet

- **Sagt kurz, woran ihr arbeitet.** Eine Zeile im Chat — *„ich bin diese Woche
  an den Drittsysteme-Seiten"* — verhindert mehr Konflikte als jede Technik.
- **Kleine Branches, kurze Laufzeit.** Ein Branch, der zwei Wochen offen ist,
  kollidiert fast sicher. Lieber in zwei Pull Requests aufteilen.
- **Nie direkt auf `main`**, auch wenn es technisch ginge.
- **Pull Requests zügig anschauen.** Ein liegengebliebener Pull Request hält
  die Arbeit von jemand anderem auf.

## Spickzettel

| Was du willst | Wo |
| --- | --- |
| Sehen, in welchem Branch ich bin | unten links in der Statusleiste |
| Branch wechseln | Klick auf den Branch-Namen, oder `Git: Checkout to` |
| Neuen Branch von `main` | `Git: Create Branch From...` → `origin/main` |
| Änderungen sehen | **Strg + Shift + G** |
| Zwischenstand sichern | **+**, Nachricht, **Commit** |
| Auf GitHub bringen | **Publish Branch**, danach **Sync Changes** |
| Neuesten Stand holen, ohne zu ändern | **…** → **Fetch** |
| `main` in meinen Branch holen | **Fetch**, dann `Git: Merge...` → `origin/main` |
| Merge abbrechen | `Git: Abort Merge` |
| Branch löschen | `Git: Delete Branch...` |

Alles mit `Git:` davor tippst du nach **Strg + Shift + P** in die Befehlsliste.
