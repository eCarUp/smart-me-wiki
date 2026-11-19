# Das Wiki lokal einrichten

Diese Anleitung bringt das Wiki in etwa zwanzig Minuten auf einen
Windows-Rechner. Programmierkenntnisse brauchst du keine.

Alle Befehle tippst du in die **PowerShell**: Start-Taste drücken,
*PowerShell* eingeben, Enter. Arbeite die sieben Schritte der Reihe nach ab —
jeder endet mit einer Erfolgskontrolle. Klemmt es, steht die Lösung unten
unter [Wenn eine Fehlermeldung kommt](#wenn-eine-fehlermeldung-kommt).

Für eine einzelne Textkorrektur brauchst du das alles nicht: Unten auf jeder
Wiki-Seite steht **„Edit this page"**, und dort änderst du sie direkt im
Browser. Wie das Wiki geschrieben wird, steht in
[CONTRIBUTING.md](CONTRIBUTING.md).

## Schritt 1: Die drei Programme installieren

Du brauchst drei kostenlose Programme:

| Programm | Wofür |
| --- | --- |
| Git | holt das Wiki von GitHub auf deinen Rechner und schickt Änderungen zurück |
| Node.js (LTS) | führt die Wiki-Software aus und bringt `npm` mit |
| Visual Studio Code | der Editor, in dem du schreibst |

Am schnellsten geht die Installation über `winget` in der PowerShell. Gib die
drei Zeilen nacheinander ein, jede mit Enter:

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id Microsoft.VisualStudioCode -e
```

Kennt deine PowerShell `winget` nicht, lädst du die Programme von Hand
herunter: [git-scm.com](https://git-scm.com/download/win),
[nodejs.org](https://nodejs.org) (die **LTS**-Version) und
[code.visualstudio.com](https://code.visualstudio.com). Die
Standardeinstellungen der Installer passen.

*Erfolgskontrolle:* Visual Studio Code lässt sich öffnen.

## Schritt 2: PowerShell neu starten und prüfen

**Schliesse das PowerShell-Fenster und öffne ein neues.** Ein Fenster, das
während der Installation schon offen war, findet die neuen Programme nicht und
meldet sie weiterhin als unbekannt. Das ist mit Abstand der häufigste Grund,
warum es im nächsten Schritt klemmt.

Im neuen Fenster prüfst du alle drei Installationen:

```powershell
git --version
node -v
npm -v
```

*Erfolgskontrolle:* Jeder der drei Befehle gibt eine Versionsnummer aus. Bei
`node -v` muss **v20** oder höher stehen. Ist die Zahl kleiner, installierst
du Node.js noch einmal in der LTS-Version und öffnest wieder ein neues
Fenster.

## Schritt 3: Skripte in PowerShell erlauben

Windows blockiert das Ausführen von Skripten, und `npm` ist eins. Diese Zeile
erlaubt es einmalig für deinen Benutzer — Administratorrechte brauchst du
dafür nicht:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Die Rückfrage bestätigst du mit `J`.

*Erfolgskontrolle:* `npm -v` gibt eine Versionsnummer aus statt einer roten
Fehlermeldung.

Ist diese Einstellung bei dir per Firmenrichtlinie gesperrt, schreibst du ab
hier überall `npm.cmd` statt `npm` — also `npm.cmd install` und
`npm.cmd start`. Das umgeht die Sperre und funktioniert genauso.

## Schritt 4: Das Wiki herunterladen

Es gibt zwei Wikis, jedes in einem eigenen Repository. Nimm das, an dem du
arbeiten willst:

| Wiki | Repository auf GitHub | Ordnername |
| --- | --- | --- |
| eCarUp | [github.com/eCarUp/ecarup-wiki](https://github.com/eCarUp/ecarup-wiki) | `ecarup-wiki` |
| smart-me | [github.com/eCarUp/smart-me-wiki](https://github.com/eCarUp/smart-me-wiki) | `smart-me-wiki` |

Wechsle in den Ordner, in dem das Wiki liegen soll — zum Beispiel deine
Dokumente — und hol es dorthin. Das Beispiel zeigt das eCarUp Wiki; fürs
smart-me Wiki setzt du die andere Adresse und den anderen Ordnernamen ein:

```powershell
cd $HOME\Documents
git clone https://github.com/eCarUp/ecarup-wiki.git
cd ecarup-wiki
code .
```

Fragt Git nach einer Anmeldung, meldest du dich mit deinem GitHub-Konto an.

`code .` öffnet den Ordner gleich in VS Code. Das Terminal bekommst du dort
über **Terminal → Neues Terminal**; es startet bereits im richtigen Ordner,
die nächsten beiden Schritte kannst du also darin eingeben.

**Wo das Wiki danach liegt.** `git clone` legt im Ordner, in dem du gerade
stehst, einen Unterordner mit dem Namen des Repositorys an. Mit dem Beispiel
oben also:

```
C:\Users\<dein Benutzername>\Documents\ecarup-wiki
C:\Users\<dein Benutzername>\Documents\smart-me-wiki
```

Beide Wikis nebeneinander sind kein Problem: Geh fürs zweite mit `cd ..`
wieder eine Ebene höher und klon es von dort. Welcher Ordner gerade offen ist,
zeigt dir `pwd` im Terminal; in VS Code steht der Name oben in der linken
Leiste.

*Erfolgskontrolle:* In der linken Leiste von VS Code stehen die
Projektdateien, darunter `package.json` und der Ordner `docs`.

Ganz ohne Git geht es auch, wenn du nur schauen willst: im Repository oben
rechts auf **Code → Download ZIP**, entpacken und den Ordner in VS Code über
**Datei → Ordner öffnen** öffnen. Änderungen zurückschicken kannst du so
allerdings nicht.

## Schritt 5: Die Pakete installieren

```powershell
npm install
```

Der Befehl lädt die Wiki-Software und alles, was sie braucht, aus dem
Internet. Das dauert ein bis zwei Minuten.

**Überspring diesen Schritt nicht.** Ohne ihn bricht der Start im nächsten
Schritt mit der Meldung ab, der Befehl `docusaurus` sei nicht gefunden worden.

*Erfolgskontrolle:* Im Projekt liegt ein neuer Ordner `node_modules`, und am
Ende bleibt kein rotes `ERR!` stehen.

## Schritt 6: Die Vorschau starten

```powershell
npm start
```

Das Wiki wird gebaut und im Browser geöffnet. Beim ersten Mal dauert das einen
Moment länger.

*Erfolgskontrolle:* Im Terminal steht
`Docusaurus website is running at: http://localhost:3000/`, und der Browser
zeigt das Wiki.

Die Vorschau läuft, solange das Terminal offen bleibt, und aktualisiert sich
bei jeder gespeicherten Änderung von selbst. Beenden mit **Strg + C**. Eine
andere Sprache schaust du dir mit `npm run start -- --locale fr` an.

## Schritt 7: Claude in VS Code einrichten

Claude hilft dir beim Schreiben direkt in VS Code. Die Erweiterung bringt
alles Nötige mit — über die Kommandozeile musst du dafür nichts installieren.

1. In VS Code die Erweiterungen öffnen mit **Strg + Shift + X**.
2. Nach **Claude Code** suchen und beim Eintrag von *Anthropic* auf
   **Install** klicken.
3. Taucht die Erweiterung danach nicht auf, VS Code einmal schliessen und neu
   öffnen.
4. Links in der Leiste erscheint ein neues Funken-Symbol. Ein Klick darauf
   öffnet das Panel, beim ersten Mal mit einer Anmeldeseite.
5. Auf **Sign in** klicken und die Anmeldung im Browser abschliessen. Dein
   Claude-Konto genügt, einen API-Schlüssel brauchst du nicht.

Vorausgesetzt werden VS Code 1.94 oder neuer und ein bezahlter Claude-Zugang
(Pro, Max, Team oder Enterprise).

*Erfolgskontrolle:* Das Panel ist offen und zeigt ein Eingabefeld statt der
Anmeldeseite.

Später öffnest du es über dasselbe Symbol links, über **✻ Claude Code** unten
rechts in der Statusleiste, oder mit **Strg + Shift + P** und dem Stichwort
*Claude Code*. Die Einzelheiten stehen in der
[Dokumentation zur VS-Code-Erweiterung](https://code.claude.com/docs/en/vs-code).

### Die Kommandozeile zusätzlich installieren

Für die Übersetzung des Wikis mit `npm run translate` reicht die Erweiterung
nicht — dafür braucht es Claude als eigenes Programm. Das ist ein getrennter
Schritt, und du brauchst ihn nur, wenn du übersetzen willst:

```powershell
npm install -g @anthropic-ai/claude-code
claude auth login
```

Es öffnet sich ein Browserfenster. Die Anmeldung gilt für deinen Benutzer,
nicht für einen bestimmten Ordner, und ist unabhängig von der Anmeldung in der
Erweiterung.

Bleibt später die Meldung stehen, `claude.exe` sei mit deiner Windows-Version
nicht kompatibel, hat npm die Installation nur halb ausgeführt. Dann hilft:

```powershell
node "$env:APPDATA\npm\node_modules\@anthropic-ai\claude-code\install.cjs"
npm config set ignore-scripts false
```

## Wenn eine Fehlermeldung kommt

| Meldung | Was zu tun ist |
| --- | --- |
| `Die Benennung "git" wurde nicht als Name eines Cmdlet … erkannt` | Das Fenster kennt Git noch nicht. Schliess es und öffne ein neues. Hilft das nicht, siehe den nächsten Abschnitt. |
| `npm : Die Datei …\npm.ps1 kann nicht geladen werden, da die Ausführung von Skripts auf diesem System deaktiviert ist` | Schritt 3 fehlt noch. |
| `Der Befehl "docusaurus" ist entweder falsch geschrieben oder konnte nicht gefunden werden` | Schritt 5 fehlt noch: `npm install` ausführen. |
| `Unsupported engine` oder ein Abbruch beim Bauen | Node.js ist zu alt. Mit `node -v` prüfen, die LTS-Version nachinstallieren, neues Fenster öffnen. |
| `Die Benennung "winget" wurde nicht … erkannt` | Ältere Windows-Version ohne App Installer. Die Programme von Hand installieren, siehe Schritt 1. |
| `Something is already running on port 3000` | Die Vorschau läuft schon in einem anderen Fenster. Dort mit **Strg + C** beenden, oder die angebotene andere Portnummer mit `J` annehmen. |

## Wenn Git weiterhin unbekannt bleibt

Prüf zuerst, ob Git überhaupt installiert ist:

```powershell
Test-Path "C:\Program Files\Git\cmd\git.exe"
```

Kommt `False` zurück, lief die Installation nicht durch. Starte sie noch
einmal und achte auf die Meldung am Ende.

Kommt `True` zurück, ist Git da und nur das laufende Fenster kennt den Pfad
dorthin nicht. Diese Zeile lädt ihn nach, ohne dass du das Fenster schliessen
musst:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

Danach `git --version` noch einmal eingeben.

## Wie es weitergeht

Steht die Vorschau, brauchst du diese Anleitung nicht mehr. Beim nächsten Mal
genügt `npm start` im Projektordner.

Wie das Wiki geschrieben wird — Seiten anlegen, Bilder einbinden, Navigation
pflegen, Übersetzungen — steht in [CONTRIBUTING.md](CONTRIBUTING.md). Du
öffnest die Datei in VS Code mit einem Klick in der linken Leiste.
