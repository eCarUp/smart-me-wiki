---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa steht für Long Range und umfasst eine Funktechnologie mit hoher Reichweite und niedrigem Datendurchsatz.'
sidebar_label: 'LoRa Gateway Software'
---
## Vorwort

LoRa steht für Long Range und umfasst eine Funktechnologie mit hoher Reichweite und niedrigem Datendurchsatz. Dieses Kommunikationsmedium eignet sich besonders zur kabellosen Übertragung von Zählermesswerten in den Bereichen Sanitär- und Heizungstechnik.

Gegenüber Wireless M-Bus, welches prinzipiell für die Zählerdatenübertragung entwickelt wurde, besticht LoRa mit seiner deutlich höheren Reichweite.

Es benötigt weniger Gateways pro Gebäude um an alle Zählerwerte der einzelnen Wohnungen zu gelangen.

## Aufbau

![LoRa Gateway Software – Abbildung 1](/img/produkte-lora-gateway-software/01.png)

## Allgemeines zur Kompatibilität der Energiezähler und Sensoren

Bei der smart-me LoRa Gateway Lösung ist es wichtig, dass die Sensoren und Energiezähler in der Kompatibilitätsliste enthalten sind. Sind diese nicht aufgeführt so besteht aktuell keine Kompatibilität. 

Melde dich bei uns, eine Integration deines Zählers oder Sensors ist zeitnah möglich. Schreibe eine E-Mail an [support@smart-me.com](mailto:support@smart-me.com) mit der Bezeichnung "Neues LoRa Gerät"

Generell unterstützt die smart-me Gateway Lösung folgende Energiezähler- und Sensorentypen:

Energiezähler:

- Wärmezähler

- Kältezähler

- Wärme-/Kältezähler

- Warmwasser- und Kaltwasserzähler

- Gaszähler


Sensoren:

- Temperatur (Anzeige, vorübergehend nicht gespeichert)


### Limitationen der Kompatibilität

Es werden aus technischen Gründen keine Stromzähler mit LoRa unterstützt. Die Übertragungsrate und die Datenausfallsicherheit für Lastprofilabrechnungen gemäss smart-me Billing ist aufgrund der Funktionsweise von LoRa nicht ausreichend hoch. 

Daher werden via LoRa ausschliesslich Zählerdaten erfasst mit welcher ausreichende Sicherheit und Funktionalität gewährleistet werden kann.

## Geprüfte LoRaWAN Gateways

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Hinweis: Ungetestete Geräte lassen sich selbstständig einbinden. Die kompatiblen Geräte benötigen lediglich "Semtech" und "Data Packet Forwarder" optionen.

## Inbetriebnahme durchführen

[Inbetriebnahme der LoRaWAN Gateways](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Kompatibilitätsliste Zähler und Sensoren

Ist dein Zähler oder Sensor nicht dabei?

Melde dich bei uns, eine Integration deines Zählers oder Sensors ist zeitnah möglich. Schreibe eine E-Mail an [support@smart-me.com](mailto:support@smart-me.com) mit der Bezeichnung "Neues LoRa Gerät".

Voraussetzung für eine Integration:

- Geräte EUI

- Applikationsschlüssel für das Gerät
    (Schlüssel hat 32 Stellen. Der Schlüssel liegt dem Produkt bei und falls nicht kann dieser beim aktuellen / vorherigen Verrechnungsanbieter eingeholt werden.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Open Spreadsheet, LoRa Gateway Kompatibilitätsliste in new window")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" title="Spreadsheet, LoRa Gateway Kompatibilitätsliste" />

LoRa Gateway Kompatibilitätsliste

## Arbeiten mit LoRa-Feldtestern

Feldtester können mittels EUID und dessen APP-Key als beliebigen Gerätetyp in betreib genommen werden.

Feldtester können beispielsweise als Hersteller "GWF" und Typ "All" verbunden werden. Dies ermöglicht dem Tester die Kommunikation mit dem Gateway. Das Gateway erzeugt für den Tester smart-me Portalseitig keinen Messpunkt.

Getestet mit:
\- Adeunis ARF8123AA 868 MHz

## Vertriebspartner

### GWF AG

Obergrundstrasse 119
CH-6005 Luzern
+41 41 319 50 50
[www.gwf.ch](http://www.gwf.ch)


Mauro Nuozzi

Back office manager

+41 41 319 52 47

mauro.nuozzi@gwf.ch

### Brunata AG

Althardstrasse 10
CH-8105 Regensdorf
[contact@brunata.ch

](mailto:contact@brunata.ch)

Alex Nanzer, Geschäftsführung
+41 41 669 10 10
[alex.nanzer@brunata.ch](mailto:alex.nanzer@brunata.ch) 

### Elsys.se

[www.elsys.se](http://www.elsys.se) 

## Datenqualität und Ausfallabdeckung

Die LoRa Technologie basiert auf dem Erfassen und Versenden der Daten. Die LoRaWAN Gateways besitzen keinen Datenspeicher und können deswegen unvollständige Datensätze nicht rekonstruieren wie dies bei den smart-me Produkten sonst der Fall ist.

Aus diesem Grund eignet sich LoRa nicht für alle Energien gleichermassen. 

Für Wärme / Wasser und Gas ist in der Regel ein kurzzeitiger Ausfall oder ein Datenloch keine grossartige Hürde und kann bei mittelfristiger Behebung reibungslos abgerechnet werden.
Bei Strom und dessen Tarifierung im 15-Minutenintervall ist eine mittelfristige Behebung nicht problemlos lösbar, daher eignet sich LoRa aus unserer Sicht nicht für die Übertragung von Stromdaten und dessen Abrechnung.

Daher hat smart-me selber Hardware entwickelt um für Strom die notwendige Datensicherheit und Lückenlosigkeit passend zu gewährleisten. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
