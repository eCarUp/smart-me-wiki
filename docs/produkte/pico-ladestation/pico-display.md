---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Auf dieser Seite wird das Verhalten des Picos Bildschirms beschrieben.'
sidebar_label: 'Pico Display'
---
Auf dieser Seite wird das Verhalten des Picos Bildschirms beschrieben.

![Pico Display – Abbildung 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Pico Ladestation](/produkte/pico-ladestation)

[Pico Zubehör](/produkte/pico-ladestation/pico-zubehör)

## Display

Die Beschreibung der Anzeige ist für alle [Firmware Versionen](/konfiguration/firmware-update) ab 0.0.28 gültig.

### Ablauf keine aktive Ladung

![Pico Display – Abbildung 2](/img/produkte-pico-ladestation-pico-display/01.png)

Wird angezeigt wenn kein Fahrzeug verbunden ist und keine Ladung stattfindet. Dieses Bild kann selbst personalisiert werden 

### Ablauf Eingestecktes Auto wartet auf Freigabe

![Pico Display – Abbildung 3](/img/produkte-pico-ladestation-pico-display/03.png)

Wird immer wieder angezeigt, wenn das Auto eingesteckt wird, aber die Station im Backend noch nicht freigegeben ist.

![Pico Display – Abbildung 4](/img/produkte-pico-ladestation-pico-display/04.png)

Wird immer wieder angezeigt, wenn das Auto eingesteckt wird, aber die Station im Backend noch nicht freigegeben ist.



### Ablauf Authentifizierung mit CarID (Pico Online)

![Pico Display – Abbildung 5](/img/produkte-pico-ladestation-pico-display/05.png)

Wird angezeigt, wenn das Auto eingesteckt wird und die Car-ID geprüft wird.

![Pico Display – Abbildung 6](/img/produkte-pico-ladestation-pico-display/06.png)

Wird angezeigt, wenn das Fahrzeug nicht autorisiert ist oder die die Car-ID im eCarUp Fahrer account nicht hinterlegt ist. Anschliessend wechselt die Pico in den "Ablauf Eingestecktes Auto warten auf Freigabe"

![Pico Display – Abbildung 7](/img/produkte-pico-ladestation-pico-display/07.png)

Wird angezeigt, wenn das Fahrzeug autorisiert ist. Anschliessend wechselt die Pico in den "Ablauf aktive Ladung".

### Ablauf Authentifizierung mit RFID (Pico Online)

![Pico Display – Abbildung 8](/img/produkte-pico-ladestation-pico-display/08.png)

RFID Karte wird kontrolliert. Bei einer sehr guten Verbindung, kann es sein, dass der Text gar nicht angezeigt wird.

![Pico Display – Abbildung 9](/img/produkte-pico-ladestation-pico-display/09.png)

Wird angezeigt, wenn die RFID autorisiert ist.

![Pico Display – Abbildung 10](/img/produkte-pico-ladestation-pico-display/10.png)

Wird angezeigt, wenn die RFID-Autorisierung erfolgreich war und kein Auto eingesteckt ist. Wenn ein Auto eingesteckt ist, wird diese Anzeige ignoriert und die Pico welchselt in den "Ablauf aktive Ladung".

![Pico Display – Abbildung 11](/img/produkte-pico-ladestation-pico-display/11.png)

Wird angezeigt, wenn die RFID nicht autorisiert ist. Anschliessend wechselt die Pico in den "Ablauf Eingestecktes Auto wartet auf Freigabe" oder "Ablauf keine aktive Ladung".



### Ablauf Authentifizierung mit QR-Code (Pico Online)

![Pico Display – Abbildung 12](/img/produkte-pico-ladestation-pico-display/12.png)

Ladung wurde mit QR-Code erfolgreich freigegeben.

![Pico Display – Abbildung 13](/img/produkte-pico-ladestation-pico-display/10.png)

Wird angezeigt, wenn die Autorisierung erfolgreich war und kein Auto eingesteckt ist. Wenn ein Auto eingesteckt ist, wird diese Anzeige ignoriert und die Pico wechselt in den "Ablauf aktive Ladung".

### Ablauf Ladungstart

![Pico Display – Abbildung 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Wert / Symbol Beschreibung

6A Minimum Ladestrom



![Pico Display – Abbildung 15](/img/produkte-pico-ladestation-pico-display/15.png)

Wert / Symbol Beschreibung

32A Max. zugelassener Ladestrom 



Wenn der maximale Ladestrom von der Station erhöht wird, zeigt es kurz dieses Bild mit dem neuen max. Ladestrom an.

### Ablauf aktive Ladung

![Pico Display – Abbildung 16](/img/produkte-pico-ladestation-pico-display/16.png)

Wert / Symbol Beschreibung

0.59 Verbrauch seit Ladebeginn

kWh Einheit des angezeigten Verbrauchs

Batterie Keine Bedeutung

![Pico Display – Abbildung 17](/img/produkte-pico-ladestation-pico-display/17.png)

Wert / Symbol Beschreibung

22.09.23 Datum

15:18:43 Start der Ladung

00:05:13 Dauer der aktiven Ladung

![Pico Display – Abbildung 18](/img/produkte-pico-ladestation-pico-display/18.png)

Wert / Symbol Beschreibung

1.81 Leistung 

kW Einheit der angezeigten Leistung

….. blau = max. Leistung die von der Station freigegeben ist (1 Pixel = 1A) 

 grün = Bezug Strom vom Auto pro Phase. (1 Pixel = 1A)

### Ablauf Beendung der Ladung

![Pico Display – Abbildung 19](/img/produkte-pico-ladestation-pico-display/19.png)

Wert / Symbol Beschreibung

32A Max. zugelassener Strom 

Wenn der Maximale Ladestrom von der Station verringert wird, zeigt es kurz dieses Bild mit dem neuen max. Ladestrom an

![Pico Display – Abbildung 20](/img/produkte-pico-ladestation-pico-display/20.png)

Wert / Symbol Beschreibung

6A Minimum Ladestrom



![Pico Display – Abbildung 21](/img/produkte-pico-ladestation-pico-display/21.png)

Wert / Symbol Beschreibung

BYE Erfolgreich abgemeldet

![Pico Display – Abbildung 22](/img/produkte-pico-ladestation-pico-display/22.png)

Wert / Symbol Beschreibung

0.59 Gesamtverbrauch von der letzten Ladung

 kWh Einheit des angezeigten Verbrauchs

Nach der Abmeldung wird der Gesamtverbrauch der letzten Ladung ca. 14 Sek. angezeigt. 

### Ablauf Station neustarten

Dieser Ablauf beschreibt das neustarten einer Station über das Portal

![Pico Display – Abbildung 23](/img/produkte-pico-ladestation-pico-display/21.png)

Wert / Symbol Beschreibung

BYE Signal für den Neustart

![Pico Display – Abbildung 24](/img/produkte-pico-ladestation-pico-display/22.png)

Wert / Symbol Beschreibung

0.59 Gesamtverbrauch von der letzten Ladung

kWh Einheit des angezeigten Verbrauchs

![Pico Display – Abbildung 25](/img/produkte-pico-ladestation-pico-display/25.png)

Der Bildschirm bleibt Schwarz für ca. 20 Sek.

![Pico Display – Abbildung 26](/img/produkte-pico-ladestation-pico-display/26.png)

Ist das erste Anzeichen, dass die Pico aufstartet.

Nach dem Ablauf Station neustarten wechselt die Pico in den Ablauf MID Mode



### Störungsmeldungen und Warnungen

![Pico Display – Abbildung 27](/img/produkte-pico-ladestation-pico-display/27.png)

Fatale Störung

- Fehler 1: Problem mit dem Wlan-Modul

- Fehler 2: Wir haben keine M4-Kommunikation

- Fehler 3: Ein Fehler mit dem Meter SOM

- Fehler 4: Problem mit dem RDC sensor


![Pico Display – Abbildung 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problem bei der SIM


![Pico Display – Abbildung 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- Die Diode im Auto ist nicht korrekt. Prüfe das Ladekabel, sowie die Steckverbindung zum Auto 


![Pico Display – Abbildung 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- Das Ladekabel meldet einen Fehler. Prüfe ob es korrekt eingesteckt ist. 


![Pico Display – Abbildung 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Der Lastabwurf ist aktiv. Die Ladeleistung wurde reduziert. 




![Pico Display – Abbildung 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- Der RDC-DD 6mA nach IEC 62955 (Fehlergleichstrom- Nachweiseinrichtung) hat ausgelöst. Die Ladung wurde aus Sicherheitsgründen beendet. 


![Pico Display – Abbildung 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- Die Ladestation hat keine Verbindung zur smart-me Cloud. 





![Pico Display – Abbildung 34](/img/produkte-pico-ladestation-pico-display/34.png)

LED leuchtet Orange/ Rot in der rechten oberen Ecke des Displays

- Hinweis auf eine Fehlermeldung. Nach spätesten 30 Sekunden wird das Fehlerbild (z.B. Cable Error) auf dem Bildschirm angezeigt.




### MID Mode

Um in den MID Modus zukommen,  kann man über die erweitere  Aktion im smart-me Portal auf "Zählerstand auf Display anzeigen" klicken, Start, bzw. Neustart der Station oder über den Helligkeitssensor.

Mit einer Taschenlampe am Helligkeitssensor kann der Benutzer folgenden Code ein blinken: Dunkel - Hell - Dunkel - Hell - Dunkel (Jeder Zustand muss zwischen 1 und 5 Sekunden dauern)

![Pico Display – Abbildung 35](/img/produkte-pico-ladestation-pico-display/35.png)

Wert / Symbol Beschreibung

Punkt Lichtsensor

![Pico Display – Abbildung 36](/img/produkte-pico-ladestation-pico-display/36.png)

Wert / Symbol Beschreibung
M MID-Mode aktiv

0.2.1 Version und Prüfsumme gemäss Obis-Code

v 2.2 Version Nummer der Firmware

CRC 4F55 Prüfsumme der Firmware

![Pico Display – Abbildung 37](/img/produkte-pico-ladestation-pico-display/37.png)

Wert / Symbol Beschreibung
M   MID-Mode aktiv

F.F.0   Obis - Code

03   Fehlercode

Wird nur angezeigt, wenn eine Fehlermeldung vorliegt. 

Fehlercode Beschreibung

x1-x3: Ladestation ist nicht geeicht
x4: Fehler Display Prozess (Prüfsumme)

1x: Fehler im Meter-SOM (Hardware)

2x-3x: Fehler Meter-SOM (Prüfsumme)

4x: Fehler Meter-SOM (Flash) Sonstige: Genereller Fehler Meter-SOM 

![Pico Display – Abbildung 38](/img/produkte-pico-ladestation-pico-display/38.png)

Wert / Symbol Beschreibung
M MID-Mode aktiv

1.8.0 Obis- Code

00013.04 kWh Der Zählerstand in kWh mit 2 Nachkommastellen.
