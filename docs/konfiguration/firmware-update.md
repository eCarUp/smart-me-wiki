---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'Firmware Update durchführen'
sidebar_label: 'Firmware Update'
---
<Menueweg>System → Firmware Update</Menueweg>

## Firmware Update durchführen

Die smart-me Produkte erfahren durch ihren Produktlebenszyklus immer wieder Verbesserungen und Funktionserweiterungen.
Diese Optimierungen können selbstständig durch den Nutzer ausgeführt werden.

ⓘ Hinweis: Firmware Updates sind vor allem dann anzuwenden, wenn du ein fehlerhaftes Verhalten festgestellt hast oder eine neue Funktion verwenden möchtest, welche die vorherige Firmware noch nicht unterstützte. Produkte mit sich schnell entwickelnden Funktionen wie z.B. die Pico Ladestation, sollten regelmässig Updates erfahren.


## Vorgehensweise

### 1\. Wähle das Gerät zum Updaten aus:

"Update" oder "Update Communication"

- Update: Firmware des Gerätes

- Update Communication: Update des Kommunikationsmoduls


Hinweis:
Um mehrere Updates parallel durchzuführen, kannst du mehrere Links, mittels Rechtsklick auf den Link, in einem neuen Tab öffnen.

![Firmware Update – Abbildung 2](/img/konfiguration-firmware-update/02.png)

### 2\. Wähle "Firmware aktualisieren"

<div className="row">
<div className="col col--5">

Dauer bis zum Start: 

- Bei Telstar (CT) und Pico kann es bis zu 5 Minuten dauern.

- Bei M-Bus Gateway hängt es vom Upload-Intervall ab.

</div>
<div className="col col--7 bild--mitte">

![Firmware Update – Abbildung 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Warte, bis die Aktualisierung abgeschlossen ist und mit "OK" bestätigen

<div className="row">
<div className="col col--4">

ⓘ Hinweis: Wenn die Aktualisierung begonnen hat (> 1%), muss der Browser nicht geöffnet bleiben.

Dauer bis zum Abschluss der Aktualisierung: 

- Bei Telstar (CT) ca. 5 Minuten.

- Für Pico kann es bis zu einem Tag dauern. Siehe unten, für die Beschleunigung des Firmware-Updates.

- Für M-Bus Gateway hängt es vom Upload-Intervall ab.

</div>
<div className="col col--8 bild--mitte">

![Firmware Update – Abbildung 4](/img/konfiguration-firmware-update/04.png)

![Firmware Update – Abbildung 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Firmware Update beschleunigen

In der Regel wird die Aktualisierung auch ohne aktive Überwachung oder einen geöffneten Browser fortgesetzt.

Wenn die Aktualisierung aktiv überwacht wird, kann sie wie folgt beschleunigt werden:

- Wähle den Zähler oder die Pico in einem zweiten Tab im Browser aus.

- Wähle die normale Ansicht.

- Lasse das Tab im Browser geöffnet und aktiv. Dies hat zur Folge, dass der Zähler oder die Pico häufiger mit der smart-me Cloud kommuniziert und somit mehr Datenpakete ausgetauscht werden können, um die Aktualisierung schneller abzuschliessen.

- Ob die Kommunikation aktiv ist, lässt sich an der Spannung feststellen. Da diese immer leicht schwankt, ist es leicht zu beobachten, ob das Gerät nun alle 1-2 Sekunden Daten sendet.


![Firmware Update – Abbildung 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
