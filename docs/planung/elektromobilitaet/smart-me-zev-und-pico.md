---
title: 'smart-me ZEV und Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'E-Mobilität in der smart-me ZEV mit der Pico Ladestationshardware'
sidebar_label: 'smart-me ZEV und Pico'
---
## E-Mobilität in der smart-me ZEV mit der Pico Ladestationshardware

### Prinzipschema einer Überbauung im Zusammenschluss zum Eigenverbrauch

![smart-me ZEV und Pico – Abbildung 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Beschreibung der Lastmanagementlösung im Messkonzept eines ZEV

Das Lastmanagement der Pico Ladestation basiert auf der smart-me Zählerhardware. Diese Hardware kann direkt als Referenzpunkte verwendet werden.

Ist bereits eine Fremdzählerinstallation vorhanden kann das Lastmanagement für Picos auch über eine Drittanbietersoftware gelöst werden, anstelle des smart-me Multi-Level-Lastmanagements.
Weitere Informationen dazu findest du hier unter "erweiterte Informationen".

Vorteile des smart-me Lastmanagements:

- Keine zusätzliche Messhardware nötig

- Gleicher Hersteller der Messhardware und Ladestation: Top Kompatibilität und Zuverlässigkeit

- Mehrstufiges dynamisch gesteuertes Lastenmanagement: Minimale Leistungsverluste und hohe Verfügbarkeit

- Zentral gesteuerter Lastabwurf der gesamten Anlage

- Areal- oder Hausoptimierte Solaroptimierungsfunktion

- Ladegruppenpriorisierungen und passive Lastspitzenminimierung


Funktional benötigte Hardwarepunkte für das gesamtheitliche Lastmanagement im ZEV mit smart-me Hardware (Rote Pfeile):

- 2x Haus Zähler ([Telstar 80A](/produkte/telstar) oder [Telstar CT](/produkte/Telstar-CT))
    \- Solaroptimierungspunkt und nötig zur Kapazitätsverteilung innerhalb des Areales.

- Optional aber im ZEV empfohlen 2x E-Mobility Zähler ([Telstar 80A](/produkte/telstar) oder [Telstar CT](/produkte/Telstar-CT))
    \- Referenz wenn mehrere Ladegruppen an einem Abgang angeschlossen sind und sich die Kapazität teilen.
    \- Abrechnungsmessung für Verluste und Standbyenergie
    \- Andere Verbraucher welche nicht Pico Ladestationen sind können zusätzlich berücksichtigt werden. z.B. Garagenbeleuchtung, Steckdosen, usw.

- Optional aber im ZEV ausdrücklich empfohlen 1x Arealzähler ([Telstar 80A](/produkte/telstar) oder [Telstar CT](/produkte/Telstar-CT))
    \- Wenn im ZEV bereits vorhanden, kann dieser Punkt berücksichtigt werden. Fehlt der Arealzähler, kann dieser virtuell abgebildet werden.


### Erweiterte Informationen zum Lastmanagement der Pico Ladestation

[Funktionsbeschreibung des Pico Lastmanagements](/produkte/pico-ladestation/pico-lastmanagement)

[Kompatible Drittanbieter Lastmanagement Software](/drittsysteme)

[Pico allgemeine Installationsplanung Abgänge und Absicherungen.](/produkte/pico-ladestation/installationsplanung)

### Abrechnung der E-Mobilität im ZEV

Die Abrechnung kann auf verschiedene Arten erfolgen mit ihren spezifischen Vor- und Nachteilen:

- Abrechnung im Einheits- oder Mehrtarifsystem im ZEV mit [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/) separiert oder zusammen mit dem Wohnungsverbrauch.

- Abrechnung im Einheitstarifsystem mittels Post-Payment Methode und dem [eCarUp Backend](https://web.ecarup.com/referenzen/).

- Abrechnung im Einheitstarif mittels hoch automatisierter Kreditkartenabrechnung mittels [eCarUp Backend](https://web.ecarup.com/referenzen/).
