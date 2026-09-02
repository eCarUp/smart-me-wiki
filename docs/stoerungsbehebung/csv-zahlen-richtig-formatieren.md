---
title: 'CSV Zahlen richtig Formatieren'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Du öffnest eine CSV-Datei in Excel und die Zahlen...'
sidebar_label: 'CSV Zahlen richtig formatieren'
---
### Allgemein

Du öffnest eine CSV-Datei in Excel und die Zahlen... sehen kaputt aus.

Das Problem ist fast immer das globale Durcheinander bei den Trennzeichen (also der Kampf zwischen 1.000,50, 1,000.50, 1'000.50 und 1000.50). Excel ist da leider etwas stur und erwartet beim Import ein Format, das genau zu deinen regionalen Systemeinstellungen passt.

Da unser smart-me System aktuell noch nicht für jede einzelne Region das perfekte CSV-Format exportieren kann, ist manchmal eine manuelle Anpassung in Excel nötig.

Anbei findest du zwei einfache Lösungen, mit denen du sicherstellst, dass Excel deine Daten korrekt anzeigt.

### CSV mit Suchen/Ersetzten bearbeiten

- Alle Werte welche falsch formatiert sind wählen.

- Ctrl+H drücken


![CSV Zahlen richtig Formatieren – Abbildung 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### CSV mit Suchen/Ersetzten bearbeiten

- Ctrl+H drücken

- Suchen nach "." (Punkt)

- Ersetzen durch "" (nichts)

- Alle erstezen

- Suchen nach "," (Komma)

- Ersetzen durch "." (Punkt)

- Alle erstezen


![CSV Zahlen richtig Formatieren – Abbildung 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Trennzeichen von Zahlen im Excel verändern.

- Datei

- Excel Optionen

- Erweitert

- Trennzeichen vom Betriebssystem übernehmen abwählen

    - Dezimaltrennzeichen ,  (Komma)

    - Tausendertrennezichen .  (Punkt)


![CSV Zahlen richtig Formatieren – Abbildung 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
