---
title: 'Drittanbieter System und Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'E-Mobilität mit der smart-me Pico Ladestation ohne smart-me ZEV'
sidebar_label: 'Drittanbieter System und Pico'
---
## E-Mobilität mit der smart-me Pico Ladestation ohne smart-me ZEV / Mieterstrom

### Prinzipschema einer Überbauung ohne smart-me ZEV / Mieterstrom

![Drittanbieter ZEV und Pico – Abbildung 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Beschreibung der Lastmanagementlösung im Messkonzept ohne ZEV / Mieterstrom oder mit Drittanbieter

Das Lastmanagement der Pico Ladestation basiert auf der smart-me Zählerhardware. Diese Hardware kann direkt als Referenzpunkte verwendet werden.

Ist bereits eine Fremdzählerinstallation vorhanden, kann das Lastmanagement für Picos auch über eine Drittanbietersoftware gelöst werden, anstelle des smart-me Multi-Level-Lastmanagements.
Weitere Informationen dazu findest du hier unter "erweiterte Informationen".

Vorteile des smart-me Lastmanagements:

- Gleicher Hersteller der Messhardware und Ladestation: Top Kompatibilität und Zuverlässigkeit

- Mehrstufiges dynamisch gesteuertes Lastenmanagement: Minimale Leistungsverluste und hohe Verfügbarkeit

- Zentral gesteuerter Lastabwurf der gesamten Anlage

- Areal- oder hausoptimierte Solaroptimierungsfunktion

- Ladegruppenpriorisierungen und passive Lastspitzenminimierung


Funktional benötigte Hardwarepunkte für das gesamtheitliche Lastmanagement mit smart-me Hardware (rote Pfeile):

- 2x Haus Zähler ([Telstar 80A](/produkte/telstar-80a) oder [Telstar CT](/produkte/telstar-ct))
    \- Solaroptimierungspunkt und nötig zur Kapazitätsverteilung innerhalb des Areales.

- Optional 2x E-Mobility Zähler ([Telstar 80A](/produkte/telstar-80a) oder [Telstar CT](/produkte/telstar-ct))
    \- Referenz, wenn mehrere Ladegruppen an einem Abgang angeschlossen sind und sich die Kapazität teilen.
    \- Abrechnungsmessung für Verluste und Standbyenergie
    \- Andere Verbraucher, welche nicht Pico Ladestationen sind, können zusätzlich berücksichtigt werden. z.B. Garagenbeleuchtung

- Optional wenn alle Häuser gemessen sind 1x Arealzähler ([Telstar 80A](/produkte/telstar-80a) oder [Telstar CT](/produkte/telstar-ct))
    \- Dieser Punkt kann virtuell aus den beiden Hauszählern gebildet werden. Voraussetzung ist, dass 100% der Lasten im Areal durch die Hauszähler gemessen werden.


### Erweiterte Informationen zum Lastmanagement der Pico Ladestation

[Funktionsbeschreibung des smart-me Pico Lastmanagements](/produkte/pico-ladestation/pico-lastmanagement)

[Kompatible Drittanbieter Lastmanagement Software](/drittsysteme)

### Abrechnung der E-Mobilität ohne ZEV / Mieterstrom

Die Abrechnung kann auf verschiedene Arten erfolgen mit ihren spezifischen Vor- und Nachteilen:

- Abrechnung im Einheits- oder Mehrtarifsystem im ZEV mit [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Abrechnung im Einheitstarifsystem mittels Post-Payment Methode und dem [eCarUp Backend](https://web.ecarup.com/referenzen/).

- Abrechnung im Einheitstarif mittels hoch automatisierter Kreditkartenabrechnung und dem [eCarUp Backend](https://web.ecarup.com/referenzen/).
