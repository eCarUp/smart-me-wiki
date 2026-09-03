---
title: '3-Phasenzähler Telstar 80A'
slug: '/produkte/telstar'
description: 'Der smart-me Telstar 80A ist ein MID-zertifizierter Energiezähler mit integrierter WiFi-Schnittstelle zur Übertragung von Echtzeitdaten.'
sidebar_label: '3-Phasen Zähler Telstar 80A'
---
Der smart-me Telstar 80A ist ein MID-zertifizierter Energiezähler mit integrierter WiFi-Schnittstelle zur Übertragung von Echtzeitdaten. Der Zähler synchronisiert die Messwerte automatisiert und verschlüsselt in die smart-me Cloud. Die Daten können im smart-me Portal oder über unsere offene Schnittstelle in Drittsysteme exportiert und weiterverarbeitet werden. Der Zähler verfügt über zwei digitale Ausgänge zur Steuerung von potenzialfreien Geräten.

![3-Phasenzähler Telstar 80A – Abbildung 1](/img/produkte-telstar/01.jpg)

## Funktionen

- [Installation](/konfiguration/inbetriebnahme) mit der kostenlosen smart-me App.

- Rechnungsstellung mit dem [smart-me Billing Tool](/konfiguration/billing)

- Steuerung mit [Wenn/Dann\-Aktionen](/konfiguration/wenndann-aktionen) oder [Ereignis-Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisierungen](/konfiguration/visualisierung)

- [Potentialfreie Kontaktausgänge](/schnittstellen/ein_und_ausgaenge) zur Steuerung von externen Geräten, einer davon mit 8A-Relais

- Potentialfreier Kontakteingang für Tarifsignal oder [digitalen Eingang](/schnittstellen/ein_und_ausgaenge)

- [Schnittstellen](/) via API, CSV, MSCONS und IS-E

- Verschlüsselte Echtzeit-Datenverbindung in die smart-me Cloud 


## Technische Daten

<Video src="" title="Custom embed" />

## Display

Wert / Symbol Beschreibung

1.8.1 OBIS\-Kennzahl für den angezeigten Zählerstand

T1 Aktiver Tarif (Tarif 1 oder Tarif 2)

Pfeil Stromrichtung (rechts Bezug / links Lieferung)

Empfang (Balken) WiFi Signalstärke

0000053.2 Zählerstand

5520W Momentan gemessene Leistung mit Einheit

kWh Einheit des angezeigten Zählerstandes

M Nicht mehr genutzte Funktion (kann ignoriert werden)

![3-Phasenzähler Telstar 80A – Abbildung 2](/img/produkte-telstar/02.png)

Der Zähler hat ein rollendes Display. Die unten beschriebenen Punkte werden nacheinander angezeigt. Nach dem letzten Punkt wird wieder der erste Punkt angezeigt.

Zählerstand (OBIS Code gefolgt von Zählerstand) 

1.8.1 (A+) Wirkenergie Bezug Tarif 1
1.8.2 (A+) Wirkenergie Bezug Tarif 2
2.8.1 (A+) Wirkenergie Lieferung Tarif 1
2.8.2 (A+) Wirkenergie Lieferung Tarif 2
5.8.0 (Q1) Induktive Blindenergie Bezug total
6.8.0 (Q2) Kapazitive Blindenergie Bezug total
7.8.0 (Q3) Induktive Blindenergie Lieferung total
8.8.0 (Q4) Kapazitive Blindenergie Lieferung total

Firmware (OBIS Code gefolgt von Informationen)

C.1.6 Ch: 762A Firmware Checksumme
0.2.0 V 1.1 Firmware Version

Fehleranzeige (OBIS Code gefolgt von Fehlermeldungen)

C.60.9 Fraud Flag (möglicher Betrugsversuch erkannt)
PhL: 1 nur Phase L1 angeschlossen
PhL: 2 nur Phase L2 angeschlossen
PhL: 3 nur Phase L3 angeschlossen
PhL: 23 Phase L1 nicht angeschlossen
PhL: 13 Phase L2 nicht angeschlossen
PhL: 12 Phase L3 nicht angeschlossen
Korrekte Phasenreihenfolge: Zahlen leuchten statisch
Falsche Phasenreihenfolge: Zahlen blinken

## Abmessungen und Anschlüsse

\*.DXF und \*.DWG Daten können im ZIP Archiv in den Downloads gefunden werden.

### Abmessungen \[mm\]

![3-Phasenzähler Telstar 80A – Abbildung 3](/img/produkte-telstar/03.png)

![3-Phasenzähler Telstar 80A – Abbildung 4](/img/produkte-telstar/04.png)

### Anschlussschema

![3-Phasenzähler Telstar 80A – Abbildung 5](/img/produkte-telstar/05.png)

## Tastenfunktionen

![3-Phasenzähler Telstar 80A – Abbildung 6](/img/produkte-telstar/06.png)

T1 Taste für die Installation

Wenn die Taste T1 für 10 Sekunden gedrückt wird, erzeugt dies ein lokales WiFi für die Installation

T1 + T2 Neustart

Tasten T1 und T2 gleichzeitig für 10 Sekunden drücken um einen Neustart zu erzwingen.

T2 Spezialfunktionen

Kurz: Wird T2 >2s gedrückt, schaltet die grüne LED-Lampe um (von aus auf ein oder von an auf aus). Wenn diese aktiviert ist, zeigt diese den Verbindungszustand an 

🟢 Grün leuchtend: verbunden mit smart-me Cloud

❇️ Grün blinkend: Verbindungsaufbau oder keine Verbindung

Lang: Wird T2 >8s gedrückt, wird die Anzeige der Leistung zwischen Wirk- & Blindleistung umgeschaltet. Ausserdem wechselt die Eichimpuls-LED zwischen Wirkenergie und Blindenergie.

Sehr lang: Wird T2 >14s gedrückt, wird der S0-0 Impulsausgang zwischen Wirkleistung und Blindleistung umgeschaltet.

Hinweis: Diese Einstellung ändert nur die Anzeige auf dem Display, nicht in der smart-me Cloud (App und Webseite). Soll die Blindenergie in der Cloud angezeigt werden, muss dies in den allgemeinen Einstellungen gemacht werden. 

## LED

![3-Phasenzähler Telstar 80A – Abbildung 7](/img/produkte-telstar/07.png)

🟢 Grüne LED - Status der Verbindung

- Zeigt den Status der Verbindung zur smart-me Cloud. a) Blinkend = Verbindungsfehler b) Immer On= Verbindung OK


![3-Phasenzähler Telstar 80A – Abbildung 8](/img/produkte-telstar/08.png)

🔴 Rote LED - Impuls LED

- Zeigt die aktuell bezogene Wirk- oder Blindleistung in 1000 Impulsen/kWh resp. 1000 Imulse/kVArh an. Ob Wirk- oder Blindleistung angezeigt wird, kann mit der Taste T2 eingestellt werden.


- Zum Beispiel: Eine LED mit der Kennzeichnung „1000 Impulse/kWh“ blinkt 1000 Mal, wenn 1 Kilowattstunde (kWh) Energie bezogen oder geliefert wurde. Wurden die 1000 Impulse innerhalb von 1 Stunde gezählt, wurde konstant 1 kW Leistung gemessen.


## Ein- und Ausgänge konfigurieren

Der Telstar 80A verfügt über zwei digitale Ausgänge und einen digitalen Eingang, welche als Impuls Ein- und Ausgänge oder als schaltbarer potentialfreier Kontakt genutzt werden können. Details dazu findest du auf der Wiki-Seite [Ein- und Ausgänge](/schnittstellen/ein_und_ausgaenge) 

Der Telstar 80A verfügt an einem digitalen Ausgang über ein Relais, welches bis zu 8A schalten kann.

## Mesh-Technologie

Der Telstar 80A verbindet sich bei sehr schwachem oder fehlendem WiFi Empfang automatisch über die Mesh-Funktion mit einem anderen benachbarten Zähler in Reichweite. Dieser übernimmt dann die Kommunikation mit der smart-me Cloud. Mit der Mesh-Technologie wird sichergestellt, dass die Zähler eine höhere Verfügbarkeit gegenüber der smart-me Cloud aufweisen. Es ist nicht möglich, die Mesh-Funktion auf dem Zähler zu deaktivieren. Bei aktiviertem [Modbus TCP](/schnittstellen/modbus-tcp) gelten spezifische Einschränkungen.

## Versandinformationen

Artikelnummer: 202063
Artikelname: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Zolltarifnummer: 9028.3019

Gewicht mit Verpackung: 415g

## Downloads und Konformitätserklärung

[Datenblatt Deutsch](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Datenblatt English](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[CE-Konformitätserklärung](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Anschlussschema](https://drive.google.com/file/d/1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B/view?usp=sharing)

[Anschlussschema ZIP Files](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (\*.DXF und \*.DWG Daten können im ZIP Archiv gefunden werden)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)

## FAQ

### In welchem Intervall senden die Zähler Daten?

- Alle 15 Minuten, also um xx:00:00 xx:15:00, xx:30:00 und xx:45:00. Hiermit werden die nötigen Daten für den Lastgang gesendet. Diese Daten werden im Fall eines Verbindungsunterbruchs lokal gespeichert und nachgesendet.

- Zudem mindestens aller 330 Sekunden.

- Anschliessend, wenn eines der folgenden Ereignisse eintritt:

    - Zählerstand-Änderung grösser als 100Wh

    - Leistungs-Änderung grösser als 100W

    - Strom-Änderung grösser als 1A

    - Spannungs-Änderung grösser als 1V

    - Jede Sekunde, wenn der Zähler im GUI (smart-me Portal) angewählt ist


### Kann ich den Zählerstand auf Null zurücksetzten?

Nein, da unsere Zähler für Abrechnungen verwendet werden, ist es nicht möglich, diese zurückzusetzen.
