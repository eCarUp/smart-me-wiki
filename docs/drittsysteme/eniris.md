---
title: 'Eniris'
slug: '/drittsysteme/eniris'
description: 'Das Energiemanagementsystem SmartgridOne von Eniris liest smart-me Zähler und Ladestationen direkt über Modbus TCP aus.'
sidebar_label: 'Eniris'
---
<div className="row">
<div className="col col--7">

Das Energiemanagementsystem SmartgridOne von Eniris liest smart-me Zähler und Ladestationen direkt über Modbus TCP aus.

Eniris entwickelt seit 2018 Energiemanagementsysteme und hat seinen Hauptsitz in Belgien, mit einer Niederlassung in der Schweiz. SmartgridOne steuert Batterien, Ladestationen, Photovoltaikanlagen, Wärmepumpen sowie ein- und ausschaltbare Lasten aufeinander abgestimmt. In der Schweiz wird SmartgridOne ausschliesslich über Solarmarkt vertrieben; von dort kommt auch die Betreuung.

</div>
<div className="col col--5 bild--mitte">

![Logo von Eniris: ein Blitz in einem roten Kreis neben dem Schriftzug ENIRIS](/img/drittsysteme-eniris/logo.png)

</div>
</div>

**Zielgruppe:**

- ZEV

- Einfamilienhaus

- Mehrfamilienhaus


**Verbindungsart:**

Direktintegration mittels Modbus TCP für lokale Kommunikation.


**Voraussetzung:**

- smart-me Professional Abo. [Mehr erfahren](/planung/cloud-lizenzen)

## Integrierte Geräte

In SmartgridOne stehen diese Geräte unter **Devices** als Standardintegration über Modbus TCP bereit:

- [smart-me 3-Phasen Zähler Telstar](/produkte/telstar-80a)

- [3-Phasen Zähler Telstar CT](/produkte/telstar-ct)

- [Pico Ladestation](/produkte/pico-ladestation) mit Phasenumschaltung

## Schnellanleitung

1.  [Modbus TCP am smart-me Gerät aktivieren](/schnittstellen/modbus-tcp#modbus-tcp-aktivieren).

2.  IP-Adresse oder Hostnamen des Gerätes notieren. Beides steht im Portal unter **Gerät → Konfiguration → Erweiterte Einstellungen**. Wie sich die Adresse sonst ermitteln lässt, steht unter [Adresse des Gerätes herausfinden](/schnittstellen/modbus-tcp#adresse-des-gerätes-herausfinden).

3.  In SmartgridOne unter **Devices** das smart-me Gerät hinzufügen.

4.  IP-Adresse oder Hostnamen eintragen und speichern.

Für die Pico gelten im Lastmanagement Einschränkungen: Nur ein Einzelgerät oder der Master einer Gruppe ist über Modbus TCP erreichbar. Die Einzelheiten stehen unter [Spezifisches zu Pico und Modbus TCP](/schnittstellen/modbus-tcp#spezifisches-zu-pico-und-modbus-tcp).

## Kontakt

<Kacheln min="20rem">

<Kachel titel="Solarmarkt GmbH">

Vertrieb und Betreuung in der Schweiz.

Neumattstrasse 30, CH-5000 Aarau

+41 62 200 62 00 · [info@solarmarkt.ch](mailto:info@solarmarkt.ch) · [www.solarmarkt.ch](https://www.solarmarkt.ch)

</Kachel>

<Kachel titel="Eniris">

Hersteller von SmartgridOne.

[eniris.com](https://eniris.com/de)

</Kachel>

</Kacheln>
