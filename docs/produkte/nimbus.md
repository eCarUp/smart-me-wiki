---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Montage auf Zählermontageplatte nach DIN43857-1'
sidebar_label: '3-Phasen Zähler Nimbus 100A'
---
![smart-me Nimbus 100A – Abbildung 1](/img/produkte-nimbus/01.png)

[Zählersteckklemmen für Nimbus 100A](https://sites.google.com/smart-me.com/wiki/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Funktionen

- Montage auf Zählermontageplatte nach DIN43857-1

- Kommunikation zur smart-me Cloud: WLAN 2.4 GHz

- Kompatibel mit Zählersteckklemmen (z.B. Hager und Seidl)

- Kundenschnittstelle DSMR P1 V5.0.2

- [Installation](/konfiguration/inbetriebnahme) mit der kostenlosen smart-me App.

- Rechnungsstellung mit dem [smart-me Billing Tool](/konfiguration/billing)

- Steuerung mit [Wenn/Dann\-Aktionen](/konfiguration/wenndann-aktionen) oder [Ereignis Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisierungen](/konfiguration/visualisierung)

- Schnittstellen aus dem System via API, CSV, MSCONS und IS-E

- Verschlüsselte Echtzeit-Datenverbindung in die smart-me Cloud 

- Signierter Zählerstandsgang (15min Werte) nach OCMF


### Ein sicherer Anker für deine Blockchain-Lösung

Der Nimbus Zähler wurde als vertrauenswürdiges "Hardware-Orakel" konzipiert, um das kritische Orakel-Problem bei der Anbindung von IoT-Geräten an dezentrale Systeme zu lösen.

Der ECDSA-Signaturprozess:

1.  Hardware-Schlüssel: Ein privater Schlüssel wird auf einem Krypto-Coprozessor generiert und verlässt diesen zu keinem Zeitpunkt.

2.  Signatur on the Edge: Alle 15 Minuten werden die Zählerstände (OCMF-Format) mit dem privaten Schlüssel per ECDSA über einer SHA-256 Hash-Funktion signiert.

3.  Verifizierbare Herkunft: Das Ergebnis ist ein Datenpaket mit einer digitalen Signatur. Mithilfe des öffentlichen Schlüssels des Zählers kann jede Anwendung zweifelsfrei verifizieren, dass die Daten authentisch und unverändert sind.


Damit bietet der Nimbus eine hardwarebasierte Sicherheitsgarantie, die reinen Software-Lösungen überlegen ist und die perfekte Grundlage für robuste P2P-Handelsplattformen, lokale Elektrizitätsgemeinschaften (LEG) und andere dezentrale Energiedienstleistungen darstellt.

## Technische Daten

<Video src="" title="Custom embed" />

## Display

![smart-me Nimbus 100A – Abbildung 2](/img/produkte-nimbus/02.jpg)

Wert / Symbol Beschreibung

1.8.0 OBIS\-Kennzahl für den angezeigten Zählerstand

Q1 Aktueller Quadrant (Q1-Q4)

Pfeil Energierichtung (rechts Bezug / links Lieferung)

Empfang (Balken) WLAN Signalqualität

0000053.2 Zählerstand

5520W Momentan gemessene Leistung mit Einheit (w oder var)

kWh Einheit des angezeigten Zählerstandes (kWh oder varh)

### Rollendes Display

![smart-me Nimbus 100A – Abbildung 3](/img/produkte-nimbus/03.jpg)

Zählerstand (OBIS Code gefolgt von Zählerstand) 

1.8.0 (A+) Wirkenergie Bezug Total
2.8.0 (A+) Wirkenergie Lieferung Total
5.8.0 (Q1) Induktive Blindenergie Bezug total
6.8.0 (Q2) Kapazitive Blindenergie Bezug total
7.8.0 (Q3) Induktive Blindenergie Lieferung total
8.8.0 (Q4) Kapazitive Blindenergie Lieferung total

![smart-me Nimbus 100A – Abbildung 4](/img/produkte-nimbus/04.jpg)

Fehleranzeige (OBIS Code gefolgt von Fehlermeldungen)

C.60.9 Fehlermeldungen (Seite wird nur angezeigt wenn Fehler vorliegen)

- PhL Verdrahtungsfehler (Flasche Phasenreihenfolge oder nicht verdrahtete Phasen)
    123: Falsche Phasenreihenfolge. 1, 2 und 3 blinken.
    1 : Nur Phase L1 angeschlossen. 2 und 3 blinken.
    2 : Nur Phase L2 angeschlossen. 1 und 3 blinken.
    3 : Nur Phase L3 angeschlossen. 1 und 2 blinken.
    12 : Nur Phase L1 und L2 angeschlossen. 3 blinkt.
    1  3 : Nur Phase L1 und L3 angeschlossen. 2 blinkt.
    23 : Nur Phase L2 und L3 angeschlossen. 1 blinkt.

- F:F:0 ( Wird nur angezeigt, wenn einer der unteren Fehler vorliegt)
    0x00: Kein Fehler
    0xX2: Nimbus Zähler ist nicht kalibriert
    0xX4: Fehler mit Mikroprozessor, Zähler muss ausgetauscht werden
    0xX8: Softwarefehler, Zähler muss ausgetauscht werden
    0xX6 Nicht Kalibriert und Mikroprozessorfehler, Zähler muss ausgetauscht werden
    0xXA: Nicht kalibriert und Softwarefehler, Zähler muss ausgetauscht werden
    0xXC: Mikroprozessor und Softwarefehler, Zähler muss ausgetauscht werden
    0xXE: Nicht kalibriert, Mikroprozessorfehler und Softwarefehler, Zähler muss ausgetauscht werden
    0x1X: Logbuch voll

- Symbol Meter Manipulation (Magnet):  OBIS Code C.51.6  Zähler wurde negativ beeinflusst.

- Symbol Terminalabdeckung geöffnet ( "G"):  OBIS Code C.51.2  Klemmendeckel ist offen.





Firmware (OBIS Code gefolgt von Informationen)

C.1.6 762A MID Firmware part Checksumme
0.2.1 V 1.1 Firmware Version MID part.

### Spezialfunktionen Display

![smart-me Nimbus 100A – Abbildung 5](/img/produkte-nimbus/05.jpg)

Zählerstandsgang (15min Werte)

Öfnnen und verlassen des Speichers:

- Um in den Speicher zu gelangen, drücke die Anzeigetaste T1 3-4 Sekunden lang.

- Um den Speicher zu verlassen, drücke wiederum die Anzeigetaste T1 3-4 Sekunden lang oder warte 60 Sekunden lang.

- Um von einem Wert zum nächsten zu gelangen drücke die Anzeigetaste jeweils kurz.


Zählerstandsgang:

- 1.8.0 und 2.8.0: Abgebildete OBIS Codes im Speicher

- 0001: Eintragsnummer im Speicher 

- Erste Zeile: 1.8.0 Aktive positive Energie (Bezug) 

- Zweite Zeile: 2.8.0 Aktive negative Energie (Lieferung)

- Datum und Uhrzeit des Eintrags


![smart-me Nimbus 100A – Abbildung 6](/img/produkte-nimbus/06.jpg)

![smart-me Nimbus 100A – Abbildung 7](/img/produkte-nimbus/07.jpg)

Logbuch 

Öffnen des Logbuches:

- Anzeigetaste im Normalmodus 7-8 Sekunden drücken.


Eingabe des Passwortes für Anzeige des Logbuches:

Das Passwort erhält der Benutzer des NIMBUS Meters vom Provider.

- Durch kurzes Drücken der Taste erhöht sich das erste Digit um 1.
    Ist das Digit auf 9, so wechselt es beim nächsten Tastendruck wieder auf 0.

- Wird 2 - 3 Sekunden die Taste nicht gedrückt, so wird automatisch auf das nächste Digit geschaltet. Dieses Digit blinkt und es kann wieder eine beliebige Zahl gesetzt werden.

- Wurde das 4. Digit gesetzt, so wird die Passworteingabe nach 2 - 3 Sekunden beendet und das Passwort wird geprüft.

- Ist das Passwort richtig, wird das Bild SMART-ME LOGBOOK angezeigt.

- Ist das Passwort nicht richtig, wird für einige Sekunden das Passwort “FALSE” angezeigt und die Anzeige schaltet zurück in den Normal - Mode auf 

- Ist noch keine Meldung im Logbuch (Total : NO ENTRY), schaltet die Anzeige zurück in den Normal - Mode auf Anzeigebild 2 oder 3.


Beenden der Anzeige des Logbuches:

- Zum Verlassen des Logbuches muss die Anzeigetaste ca. 3 - 4 Sekunden dauernd gedrückt werden. 

- Wird die Anzeigetaste nicht innerhalb von 60 Sekunden gedrückt, schaltet die Anzeige ebenfalls wieder zurück in den Normal - Mode auf Anzeigebild 2 oder 3.


C.60.9 :  OBIS Code der momentan angezeigten Meldung 

- 0001  :  Nummer der gespeicherten Meldung 0001 ist die neueste Meldung.

- 8192  :  Maximal mögliche Meldungen im Logbuch.
    Wenn die maximal möglichen Meldungen im Logbuch gespeichert sind, werden keine weiteren Meldungen mehr gespeichert ⇨ LOGBOOK FULL.
    Wenn LOGBOOK FULL sind weitere Änderungen der eichtechnisch relevanten Parameter nicht mehr ohne Verletzung der eichtechnischen Sicherung möglich.


- Zweite und dritte Zeile:
    Kennung und Typ der angezeigten Meldung.

- Vierte Zeile: Datum und Uhrzeit der Meldung


Loginformationen:

- Firmware Upgrade (New Firmware)

- Terminalabdeckung geöffnet oder geschlossen (Open, close terminal cover)

- Manipulation entdeckt und aufgehoben (Start, End Meter Manipulation)

- Verdrahtungsfehler entdeckt (Set, End Connection)

- Neuer MID Firmware Version (New MID part)

- Zeit neu gesetzt (Time: OLD --> NEW)

- Zähler Neustart (Meter OFF--> ON)

- Zähler hat neue Kalibration erhalten (New Meter Calibartion)

- Event Logbuch voll (Last Stored Data, Logbook full)


## Abmessungen und Anschlüsse

![smart-me Nimbus 100A – Abbildung 8](/img/produkte-nimbus/08.png)

## Anschlussschema

Verdrahtung

Es sind Seile, feste Leiter und Litzen zwischen 4-35 mm2 als Zuleitungen zugelassen. Litzen dürfen nur mit passenden Ferrulen montiert werden. Weitere Informationen zu den Anschlussleitungen finden Sie im Quickstarter-Guide.



Schraubenantrieb: Torx 25



Vor der Installation sind die Zuleitungen spannungsfrei zu setzen und vor Manipulation zu sichern.






Anschluss mit durchgeschlauftem Neutralleiter

![smart-me Nimbus 100A – Abbildung 9](/img/produkte-nimbus/09.png)

Anschlussschema mit Erregerneutralleiter
(Neutralleiter darf deutlich kleiner sein als L1, L2 oder L3)

![smart-me Nimbus 100A – Abbildung 10](/img/produkte-nimbus/10.png)

## Tastenfunktionen

Taste 1 (T1)

Um den Zähler mit einem smart-me Account zu verbinden, wird während der Inbetriebnahme mit der smart-me App die Taste 1 für 10 Sekunden gedrückt. Danach wird ein gerätespezifisches Wifi erstellt mit welchem sich das Mobiltelefon verbinden kann, um die Wifi-Zugangsdaten darauf zu hinterlegen.

Taste 2 (T2)

Mit Taste 2 können Logbuch und Zählerstandsgang geöffnet werden. Um den Zählerstandsgang anzuzeigen muss die Taste 2 für 4 Sekunden gedrückt werden. Danach kann das Passwort eingegeben werden. Die aktuell angewählte wird durch blinken angezeigt. Um diese Ziffer zu ändern kann die Taste 2 kurz gedrückt werden. Nach 10 Sekunden wechselt die Anzeige um eine Stelle nach hinten.

Zugangs-Passwörter haben 4 numerische Stellen.

Ist das Passwort korrekt, wird der letzte Eintrag des Zählerstandsgang angezeigt. Um den nächste Eintrag anzuzeigen muss die Taste 2 kurz gedrückt werden. Wird die Taste 2 für 60 Sekunden nicht gedrückt, wechselt die Anzeige zurück in zur Anzeige des Zählerstandes.

P1 Interface

RJ-12 Steckdose für P1-Module

EX1

Schnittstelle für externe Schützensteuerung (noch nicht Unterstützt)

EX2

Steckplatz für alternative Kommunikationsmodule
(noch nicht Unterstützt)

L1

Status LED - leuchtet statisch wenn Verbindung zur smart-me Cloud

L2

Impuls LED - zeigt aktuell gemessene Leistung in 10'000 Imp / kWh

Die Impuls-LED kann Wirk- und Blindenergie anzeigen. Für die Umschaltung von Wirk- auf Blindleistung oder umgekehrt muss die Taste T2 10 mal mit einem Abstand von 1 Sek gedrückt werden. Ob aktuell die Wirk- oder Blindleistung auf der LED angezeigt wird, ist auf dem Display auf der untersten Zeile erkennbar.

![smart-me Nimbus 100A – Abbildung 11](/img/produkte-nimbus/11.png)

## P1 Interface (Kundenschnittstelle)

Das P1 Interface des Nimbus ermöglicht es Drittanbietern oder Endkunden die gemessenen Daten in eigenen Steuer- oder Analysessystemen weiterzuverwenden.

Dafür wird ein P1-Schnittstellenauslesemodul mit RJ-12 Stecker benötigt.
Dieses muss den “P1 Companion Standard” von Netbeheer Nederland. Version 5.0.2 (26.Februar.2016) unterstützen.

Spannung:  5V DC, Höchstlast:  100mA DC, Verstärkte Isolierung gegen Netz

[Mehr erfahren](/schnittstellen/p1-schnittstelle)

## Zubehör

- [Zählersteckklemmen](https://sites.google.com/smart-me.com/wiki/drittprodukte/zaehlersteckklemmen-nimbus-100A) - zum einfachen Wechsel von Zählern ohne Stromunterbrechung


## Reinigung

Reinigen Sie das Gehäuse des Gerätes mit einem trockenen Tuch. Verwenden Sie keine chemischen Reinigungsmittel! 

## Wartungs- und Gewährleistungshinweise

Das Gerät ist wartungsfrei. Bei Schäden (z. B. durch Transport, Lagerung) dürfen selbst keine Reparaturen vorgenommen werden. Beim Öffnen des Gerätes erlischt der Gewährleistungsanspruch. Gleiches gilt, falls ein Mangel auf äussere Einflüsse zurückzuführen ist (z. B. Blitz, Wasser, Brand, extreme Temperaturen und Witterungsbedingungen) sowie bei unsachgemässer oder nachlässiger Verwendung bzw. Behandlung. Die Plomben dürfen nur durch autorisierte Personen gebrochen werden! 

## Versandinformationen

Artikelnummer: 242065

Artikelname: smart-me 3-Phasen Zähler Nimbus 100A

Zolltarifnummer: 9028.3019

Dimension und Gewicht ohne Lieferverpackung: 25.5x18x7 \[cm\] / 1.1kg

Hersteller: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Inbetriebnahme

[Mehr erfahren](/konfiguration/inbetriebnahme)

## Downloads und Konformitätserklärung

[Datenblatt Deutsch](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Datenblatt English](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Konformitätserklärung](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Anschlussschema und Stromlaufschema \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

### Kann ich den Zählerstand auf Null zurücksetzten?

Nein, da unsere Zähler für Abrechnungen verwendet werden, ist es nicht möglich, diese zurückzusetzen.
