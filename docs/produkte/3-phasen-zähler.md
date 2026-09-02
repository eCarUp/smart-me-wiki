---
title: '3-Phasen Zähler'
slug: '/produkte/3-phasen-zähler'
description: 'Der smart-me 3-Phasen Meter ist ein leistungsstarker und präziser Energiezähler mit integrierter WiFi Schnittstelle.'
sidebar_label: '3-Phasen Zähler'
---
Der smart-me 3-Phasen Meter ist ein leistungsstarker und präziser Energiezähler mit integrierter WiFi Schnittstelle. Für die Integration in die smart-me Cloud wird keine zusätzliche Hardware benötigt. Er nutzt das bestehende WiFi Netzwerk und lässt sich von überall via Internet steuern und auswerten. Mit einem Professional Abo können die Zählerwerte auch über die Modbus TCP Schnittstelle abgefragt werden. Bei der 5(32)A Version kann jede Phase einzeln geschalten werden.

Dieser 3-Phasen Zähler ist nicht mehr verfügbar. Die neue Generation unseres 3-Phasen Zählers finden Sie hier: [3-Phasen Zähler Telstar](/produkte/telstar)

![3-Phasen Zähler – Abbildung 1](/img/produkte-3-phasen-zaehler/01.png)

## Varianten

- Direktanschluss 5(80)A

- Direktanschluss 5(32)A, schaltbar


## Funktionen

- 3-Phasen Energiezähler mit MID 2014/32/EU Zertifizierung

- Direktmessung bis 80 A (nicht schaltbar), Direktmessung bis 32 A (schaltbar)

- Echtzeit Messwerte mit höchster Genauigkeit, Klasse B

- Zusätzliche Kontaktausgänge zum Steuern von externen Geräten

- Der 3-Phasenzähler funktioniert auch als Gateway zur Cloud für (fast) alle IP-fähigen Smart-Energie Geräte

- Einfache Installation mit der kostenlosen smart-me App für Android und iOS

- Verschlüsselte WiFi Verbindung direkt zur smart-me Cloud. Die smart-me Cloud bietet ein umfangreiches Energiemanagement: Visualisierungen, Steuerung (Wenn/Dann Aktionen), automatische Rechnungsstellung (smart-me Billing) und Schnittstellen zu Drittsystemen (Auto Export, API)


## Installation

Bevor du dein smart-me Gerät verwenden kannst, musst du es mit deinem WiFi Netzwerk und Internet verbinden.

1.  Verbinde dein Smartphone oder Tablet mit dem WLAN.

2.  Downloade und installiere die smart-me App aus dem Playstore oder iOS Store.

3.  Starte die App und erstelle einen Account oder loge dich mit dem entsprechenden Account ein.

4.  Klicke auf „Gerät hinzufügen“ (+) und folge den Anweisungen.


## Technische Daten

Betriebsspannung 3 x 230 VAC

Referenzstrom 5 (80) A / 5 (32) A

Eigenverbrauch &lt; 0.8 W pro Phase

Lagertemperatur -40°C bis 85°C

Temperaturbereich -25°C bis 70°C

Luftfeuchtigkeit Jahresmittel 75%, kurzzeitig 95%, nicht kondensierend

Genauigkeit Klasse B

Zählerart Zweirichtungszähler (Bezug und Lieferung)

Messwerte 

- -   Wirkenergie (kWh)

    - Wirkleistung (kW)

    - Strom (A)

    - Spannung (V)

    - Leistungsfaktor (cosphi)

    - Status Ein- und Ausgänge 

    - Zusätzlich mit Professional Abo: Blindenergie (kvarh), Blindleistung (kvarh)


Tarife 2 (Virtuelle Tarife cloudseitig erstellbar)

Schnittstellen 

- -   WiFi

    - S0 / potentialfreie Kontaktausgänge

    - Tarifeingang (24 - 48VDC  /  24 - 230 VAC)

    - SG Ready

    - mit Professional Abo: Modbus TCP


Impulsausgänge / Digitale Ausgange S0, S1 Opto Power MOSFET, 5 - 48VDC  / 5 - 230 VAC , max. 550mW

WiFi Standard 802.11 b/g/n

WiFi Sicherheitsstandard WEP, WPA, WPA2 (personal)

S0 Impulswertigkeit 10’000 oder 1’000 Impulse pro kWh

Datenspeicher 2 Monate

Produkt Zertifizierung CE, MID 2014/32/EU

Umweltklassen: Mechanisch M1, Elektromagnetisch E2

Schutzklasse IP20 (Klemmen), IP51 (Front)

Abmessungen 5 Module, 90 x 90 mm

Montage DIN-Schiene

## Ein und Ausgänge konfigurieren

Der smart-me Meter verfügt über zwei Ausgänge und einen Eingang, welche als Impuls Ein- und Ausgänge oder als schaltbarer potentialfreier Kontakt genutzt werden können. Details dazu findest du [hier](/schnittstellen/ein_und_ausgaenge). 

## Display

Der Zähler hat ein rollendes Display. Die unten beschriebenen Punkte werden nacheinander angezeigt. Nach dem letzten Punkt wird wieder bei Punkt 1 begonnen:

1.  Phasenreihenfolge (falls fehlerhaft, siehe unten)

2.  Zählerstand (Obis Code gefolgt von Zählerstand)


1-8-1: Wirkenergie Tarif 1 Import (Bezug)
1-8-2: Wirkenergie Tarif 2 Import (Bezug)
2-8-1: Wirkenergie Tarif 1 Export (Lieferung)
2-8-2: Wirkenergie Tarif 2 Export (Lieferung)

3.  Software Version

4.  CRC Wert


### Phasenreihenfolge

PhL 1 -> nur die Phase L1 wurde angeschlossen (PhL2 für L2 usw.)
PhL 12 -> nur die Phasen L1 und L2 wurden angeschlossen (PhL13 für L1 und L3 usw.)
PhL 123 -> eine falsche Phasenreihenfolge wurde festgestellt

## Abmessungen und Anschlüsse

### Abmessungen \[mm\]

![3-Phasen Zähler – Abbildung 2](/img/produkte-3-phasen-zaehler/02.png)

Achtung: .DXF und .DWG Daten können im ZIP Archiv in den Downloads gefunden werden.

### Anschlussschema

E1: Tarifeingang (Digitaler Eingang)

0V: Tarif 1

\>24V: Tarif 2

T1: Taste für die Installation

T2: Spezialfunktionen

Kurz: Wird T2 kurz gedrückt, schaltet die grüne LED-Lampe ein / aus. Wenn diese aktiviert ist, zeigt diese den Verbindungszustand an:

Grün leuchtend: verbunden mit smart-me Cloud 

Grün blinkend: keine Verbindung

Lang: Wird T2 lang gedrückt, wird die Anzeige vom Zählerstand Blindenergie aktiviert (falls vorhanden). Beim Anzeigeablauf werden die Punkte Zählerstand Blindenergie T1 und Zählerstand Blindenergie T2 hinzugefügt. Der angezeigte Wert blinkt und kann somit von der Wirkenergie unterschieden werden.

ACHTUNG: Diese Einstellung ändert nur die Anzeige auf dem Display, nicht in der smart-me Cloud (App und Webseite). Soll die Blindenergie in der Cloud angezeigt werden, muss dies in den allgemeinen Einstellungen gemacht werden. (Beim Drücken von T2 beginnt die rote LED zu leuchten, T2 muss solange gedrückt werden, bis die rote LED erlischt)

S0\_0: S0 Impulsausgang (optional potentialfreier Kontakt / Achtung Pmax = 550mW dauerhaft)

S0\_1: S0 Impulsausgang (optional potentialfreier Kontakt / Achtung Pmax = 550mW dauerhaft)

![3-Phasen Zähler – Abbildung 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Messwerte (Obis Codes)

Folgende Messwerte werden vom Zähler erfasst sind in der Cloud und über die API abrufbar

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Open Spreadsheet, Messwerte (inkl. Obiscodes) 3-Phasen Zähler V1 in new window")

<Video src="" title="Video" />

Messwerte (inkl. Obiscodes) 3-Phasen Zähler V1

## Downloads und Konformitätserklärung

Datenblatt

[Englisch](https://drive.google.com/file/d/1U5DGW_fda6IvaIzHPyjkVkT5Sd2hHyL8/view?usp=sharing)

[Französisch](https://drive.google.com/file/d/1FdrW3HQAq-INjThhj1IbRuXhpq4dUSWP/view?usp=sharing)

[Italienisch](https://drive.google.com/file/d/1ip42f1sf4NrRq9CmYWQoKp1x9uB1ALEt/view?usp=sharing)

Quick Starter Guide

Technische Dokumente

[CE-Konformitätserklärung](https://drive.google.com/file/d/1MBTTapoTlcpUFbXpglgAq2wpE4yfs_MO/view?usp=sharing)

[Anschlussschema](https://drive.google.com/file/d/12wyjFnyECXzPXvnYKV_VhfHKuZwAhjdn/view?usp=sharing)

## FAQ

### In welchem Intervall senden die Zähler Daten?

- Alle 15 Minuten, also um xx:00:00 xx:15:00, xx:30:00 und xx:45:00. Hiermit werden die nötigen Daten für den Lastgang gesendet. Diese Daten werden im Fall eines Verbindungsunterbruchs lokal gespeichert und nachgesendet.

- Zusätzlich dazu kann eine individuelle Konfiguration vorgenommen werden:

    - Mit Basic oder Limited Lizenzen: Max. 1x pro Minute.

    - Mit Pro-Lizenzierung: Max. 1x pro Sekunde
