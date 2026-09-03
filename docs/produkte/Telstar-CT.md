---
title: '3-Phasen Energiezähler Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'Der smart-me Telstar CT ist ein MID-zertifizierter Energiezähler mit integrierter WiFi-Schnittstelle zur Übertragung von Echtzeitdaten und mit Anschluss für externe Wandler.'
sidebar_label: '3-Phasen Zähler Telstar CT'
---
Der smart-me Telstar CT ist ein MID-zertifizierter Energiezähler mit integrierter WiFi-Schnittstelle zur Übertragung von Echtzeitdaten und mit Anschluss für externe Wandler. Der Zähler synchronisiert die Messwerte automatisiert und verschlüsselt in die smart-me Cloud. Die Daten können im smart-me Portal oder über unsere offene Schnittstelle in Drittsysteme exportiert und weiterverarbeitet werden. Der Zähler verfügt über zwei digitale Ausgänge zur Steuerung von potenzialfreien Geräten.

![3-Phasen Energiezähler Telstar CT – Abbildung 1](/img/produkte-telstar-ct/01.png)

[Wandler und Zubehör](/drittprodukte/Stromwandler)

## Funktionen

- [Installation](/konfiguration/inbetriebnahme) mit der kostenlosen smart-me App.

- Wandleranschluss für [externe Wandler](/) mit Ausgangsströmen von 0.01A bis 6A

- Rechnungsstellung mit dem [smart-me Billing Tool](/konfiguration/billing)

- Steuerung mit [Wenn/Dann\-Aktionen](/konfiguration/wenndann-aktionen) oder [Ereignis Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisierungen](/konfiguration/visualisierung)

- [Potentialfreie Kontaktausgänge](/schnittstellen/ein_und_ausgaenge) zur Steuerung von externen Geräten, einer davon mit 8A-Relais

- Potentialfreier Kontakteingang für Tarifsignal oder [digitalen Eingang](/schnittstellen/ein_und_ausgaenge)

- [Schnittstellen](/) via API, CSV, MSCONS und IS-E

- Verschlüsselte Echtzeit-Datenverbindung in die smart-me Cloud


## Technische Daten

<Video src="" title="Custom embed" />

## Technische Anforderungen an die Wandler

Beim Telstar CT können verschiedenste Stromwandler zum Einsatz kommen. Die Grundanforderungen sind folgende:

- Stromwandlerverhältnis: 1:1 bis 20'000:1 bis 5:5 bis 20'000:5
    Die sekundäre Zahl kann eine beliebige Ganzzahl zwischen 1 und 5 sein.
    Die primäre Zahl eine beliebige Ganzzahl zwischen 1 und 20'000.

- Ausgangsstrom: 1A bis 5A

- Ausgangsleistung: mind. 1VA oder höher (Empfehlung 5VA)

- Typ: offen oder geschlossen

- Genauigkeitsklasse: 1 oder besser\*


\*Falls die Zähler für Verrechnungen verwendet werden sollen, werden geeichte Wandler benötigt, die mindestens die Klasse 0.5 oder kleiner erfüllen.

Empfehlungen für Wandler und Zubehör findest du auf der Seite: [Stromwandler und Zubehör](/drittprodukte/Stromwandler) 

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

![3-Phasen Energiezähler Telstar CT – Abbildung 2](/img/produkte-telstar-ct/02.png)

Der Zähler hat ein rollendes Display. Die unten beschriebenen Punkte werden nacheinander angezeigt. Nach dem letzten Punkt wird wieder der erste Punkt angezeigt.

Zählerstand (OBIS Code gefolgt von Zählerstand) 

1.8.1 (A+) Wirkenergie Bezug Tarif 1
1.8.2 (A+) Wirkenergie Bezug Tarif 2
2.8.1 (A+) Wirkenergie Lieferung Tarif 1
2.8.2 (A+) Wirkenergie Lieferung Tarif 2
1.8.0:5A (A+) Wirkenergie Total Bezug 5A Basis
2.8.0:5A (A-) Wirkenergie Total Lieferung 5A Basis
5.8.0 (Q1) Induktive Blindenergie Bezug total
6.8.0 (Q2) Kapazitive Blindenergie Bezug total
7.8.0 (Q3) Induktive Blindenergie Lieferung total
8.8.0 (Q4) Kapazitive Blindenergie Lieferung total

Wandlerfaktor (OBIS Code gefolgt von Informationen)

0.4.2       Wandlerfaktor (inkl. S0 Impulse / kWh)

Firmware (OBIS Code gefolgt von Informationen)

C.1.6 Ch: 2218 Firmware Checksumme
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

![3-Phasen Energiezähler Telstar CT – Abbildung 3](/img/produkte-telstar-ct/03.png)

![3-Phasen Energiezähler Telstar CT – Abbildung 4](/img/produkte-telstar-ct/04.png)

### Anschlussschema

![3-Phasen Energiezähler Telstar CT – Abbildung 5](/img/produkte-telstar-ct/05.jpg)

## Wandlerverhältnis beim Telstar CT setzen

1.  Oben rechts auf das Zahnradsymbol (Einstellungen) 

2.  Editieren 

3.  Allgemeine Einstellungen 

4.  Wandlerverhältnis eingeben 

5.  Das Wandlerverhältnis kann gesperrt werden. Dies dient als Schutz vor ungewollten Änderungen von unbefugten Personen. Um das Wandlerverhältnis zu entsperren muss das Gerät nochmals mit der smart-me App installiert werden. Bei der Wiederinstallation ist das Löschen unnötig.


Hinweis: Mit der Eingabe des Wandlerverhältnis werden die historisch gespeicherten Daten nicht geändert. Aus diesem Grund ist dieser Schritt unmittelbar nach der Inbetriebnahme zu machen.

![3-Phasen Energiezähler Telstar CT – Abbildung 6](/img/produkte-telstar-ct/06.png)

## Tastenfunktionen

![3-Phasen Energiezähler Telstar CT – Abbildung 7](/img/produkte-telstar-ct/07.png)

T1 Taste für die Installation

Wenn die Taste T1 für 10 Sekunden gedrückt wird, erzeugt dies ein lokales WiFi für die Installation

T1 + T2 Neustart

Tasten T1 und T2 gleichzeitig für 10 Sekunden drücken um einen Neustart zu erzwingen.

T2 Spezialfunktionen

Kurz: Wird T2 >2s gedrückt, schaltet die grüne LED-Lampe um (von ein auf aus oder von aus nach ein). Wenn diese aktiviert ist, zeigt diese den Verbindungszustand an 

🟢 Grün leuchtend: verbunden mit smart-me Cloud

 ☀︎ Grün blinkend: Verbindungsaufbau oder keine Verbindung

Lang: Wird T2 >8s gedrückt, wird die Anzeige der Leistung zwischen Wirk- & Blindleistung umgeschaltet. Ausserdem wechselt die Eichimpuls-LED zwischen Wirkenergie und Blindenergie.

Sehr lang: Wird T2 >14s gedrückt, wird der S0-0 Impulsausgang zwischen Wirkleistung und Blindleistung umgeschaltet.

Hinweis: Diese Einstellung ändert nur die Anzeige auf dem Display, nicht in der smart-me Cloud (App und Webseite). Soll die Blindenergie in der Cloud angezeigt werden, muss dies in den allgemeinen Einstellungen gemacht werden. 

## LED

![3-Phasen Energiezähler Telstar CT – Abbildung 8](/img/produkte-telstar-ct/08.png)

🟢 Grüne LED - Status der Verbindung

- Zeigt den Status der Verbindung zur smart-me Cloud. a) Blinkend = Verbindungsfehler b) Immer On= Verbindung OK


![3-Phasen Energiezähler Telstar CT – Abbildung 9](/img/produkte-telstar-ct/09.png)

🔴 Rote LED - Impuls LED

- Zeigt die aktuell bezogene Wirk- oder Blindleistung in 1000 Impulsen/kWh resp. 1000 Imulse/kVArh an. Ob Wirk- oder Blindleistung angezeigt wird, kann mit der Taste T2 eingestellt werden.


- Zum Beispiel: Eine LED mit der Kennzeichnung „1000 Impulse/kWh“ blinkt 1000 Mal, wenn 1 Kilowattstunde (kWh) Energie bezogen oder geliefert wurde. Wurden die 1000 Impulse innerhalb von 1 Stunde gezählt, wurde konstant 1 kW Leistung gemessen.


## Ein und Ausgänge konfigurieren

Der Telstar CT verfügt über zwei digitale Ausgänge und einen digitalen Eingang, welche als Impuls Ein- und Ausgänge oder als schaltbarer potentialfreier Kontakt genutzt werden können. Details dazu findest du auf der Wiki-Seite [Ein- und Ausgänge](/schnittstellen/ein_und_ausgaenge) 

Der Telstar CT verfügt bei einem digitalen Ausgang ein Relais, welches bis zu 8A schalten kann.

## Mesh-Technologie

Der Telstar CT verbindet sich bei sehr schwachem oder fehlendem WiFi Empfang automatisch über die Mesh-Funktion mit einem anderen benachbarten Zähler in Reichweite. Dieser übernimmt dann die Kommunikation mit der smart-me Cloud. Mit der Mesh-Technologie wird sichergestellt, dass die Zähler eine höhere Verfügbarkeit gegenüber der smart-me Cloud aufweisen. Es ist nicht möglich, die Mesh-Funktion auf dem Zähler zu deaktivieren. Bei aktiviertem [Modbus TCP](/schnittstellen/modbus-tcp) gelten spezifische Einschränkungen.

## Wandler und Zubehör

Empfehlungen für Wandler und Zubehör findest du auf der Seite: [Stromwandler und Zubehör](/drittprodukte/Stromwandler) 

Keines dieser Produkte wird durch die smart-me AG vertrieben oder als Zubehör beim Kauf angeboten. Bitte kaufe diese Produkte direkt beim Hersteller. 

### Versandinformationen

Artikelnummer: 212062 

Artikelname: 3-Phasen Energiezähler Telstar CT MID Wifi

Zolltarifnummer: 9028.3019

Gewicht mit Verpackung: 315g

## Downloads und Konformitätserklärung

[Datenblatt Deutsch](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Datenblatt English](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[CE-Konformitätserklärung](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Anschlussschema ZIP Files](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (\*.DXF und \*.DWG Daten können im ZIP Archiv gefunden werden)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

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


### Kann ich den Zählerstand auf Null zurücksetzen?

Nein, da unsere Zähler für Abrechnungen verwendet werden, ist es nicht möglich, diese zurückzusetzen.
