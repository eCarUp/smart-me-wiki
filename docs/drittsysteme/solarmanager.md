---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'smart-me Geräte können im Solar Manager direkt über die Cloud eingebunden werden.'
sidebar_label: 'Solar Manager'
---
smart-me Geräte können im Solar Manager direkt über die Cloud eingebunden werden. Auch [virtuelle Zähler](/konfiguration/billing/virtuelle-zaehler) können übernommen werden. 

Im Solar Manager gibt es mehrere Optionen den smart-me Zähler und Pico Ladestationen zu verwenden:

- Als Smart Meter bzw. Bilanzzähler direkt nach dem EW-Zähler

- Als Verbrauchsmessung von Geräten wie Ladestationen, Wärmepumpen etc.

- Als Produktionsmessung von PV-Erzeugung

- Als Schalter, um den Relais Kontakt am Zähler zu nutzen.

- Als Datenlieferant für das E-Mobilitäts Lastmanagement




Zielgruppe: Einfamilien- und Mehrfamilienhäuser

<Video src="D3Mh-cAyHvw" title="YouTube Video, Demo Solar Manager Integration von smart-me Zählern" />

## Einbindung Allgemein

Zur Einbindung werden die Cloud-Zugangsdaten (Benutzernamen und Passwort)  sowie die Seriennummer des Zählers benötigt. Die Seriennummer ist direkt im smart-me Portal und auf den Geräten selbst ersichtlich. Bei der Seriennummer nur die Ziffern vor dem Bindestrich verwenden!

![Solar Manager – Abbildung 1](/img/drittsysteme-solarmanager/01.png)

### Beispiel:

Seriennummer Web-Portal: 07907952

Seriennummer Zähler: 07907952-123 (-123 weglassen)

## smart-me Zähler als Smart Meter

Im Solar Manager kann ein Smart Meter hinzugefügt werden, dieses kann auf zwei Arten montiert werden:

- Direkt nach dem EVU-Zähler (Bilanzzähler), wobei Produktion (-) und Verbrauch (+) direkt gemessen werden 

- Reine Verbrauchsmessung, die Produktion wird separat erfasst


Zur Einrichtung fügt man ein Smart Meter hinzu und wählt dort smart-me Cloud. Mit Zugangsdaten und der 8-stelligen Seriennummer wird das Smart Meter verbunden. 

- Installationsort:  Gemäss Beschreibung oben

- Messung invertieren: Falls der Zähler invertiert montiert wäre, könnte man hier das Vorzeichen ändern. 


![Solar Manager – Abbildung 2](/img/drittsysteme-solarmanager/02.png)

## smart-me Relais nutzen

Der [3-Phasenzähler Telstar](/produkte/telstar) hat zwei potentialfreie Kontaktausgänge zur Steuerung von externen Geräten, einer davon mit integriertem 8A-Relais. Im Solar Manager kann dieser geschalten werden. Pro Relais wird ein «Schalter» erfasst und parametrisiert. Die Schalter müssen vorgängig im smart-me Portal als digitale Ausgänge definiert werden (siehe [Ein- & Ausgänge](/)) 

Zur Einrichtung fügt man unter Geräte einen neuen «Schalter» hinzu und wählt dort «Relais am smart-me 3-Phasen Zähler». Mit Zugangsdaten und der 8-stelligen Seriennummer wird der Zähler verbunden. 

### Parameter

Einschaltleistung (W):

Welche Leistung muss als Überschuss anliegen damit geschalten wird.

Einschaltverzögerung (min):

Wie lange muss die definierte Leistung anliegen bis geschalten wird.

Abschaltverzögerung (min):

Wie lange soll nach Unterschreiten der Leistung gewartet werden bis abgeschaltet wird (z.B. um eine Wolke zu überbrücken)

Mindestlaufzeit (min): 

Wie lange muss das Gerät mindestens laufen. Praktisch bei Wärmepumpen mit Verdichtern etc.

![Solar Manager – Abbildung 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Abbildung 4](/img/drittsysteme-solarmanager/04.png)

## Kontakt:

Solar Manager AG

Schlyffistäg 36

CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) 

[info@solarmanager.ch](mailto:info@solarmanager.ch) 

+41 56 512 92 08

## FAQ

## Stromfreigabe Pico Ladestation funktioniert nicht ab 4200W

Die Pico Ladestation wird standardmässig mit dem Minimalstrom 8A ausgeliefert um alle möglichen Fahrzuegtypen nach der Installation direkt zu supporten.

Im Zusammenspiel mit Solarmanager geht dieser Standardmässig aber von einem Minimalstrom von 6A aus um die Pico anzusteuern.

Wählen Sie den jeweiligen Fall der auf Ihr Fahrzeug zutrifft um die von Ihnen gewünschte Konfiguration fehlerfrei zu unterstützen:

Fall A: Du hast ein Fahrzeug das mit 6A Startstrom umgehen kann

- Setze den Minimalstrom auf der Pico Hardware auf 6A.



![Solar Manager – Abbildung 5](/img/drittsysteme-solarmanager/05.png)

Fall B: Du hast ein Fahrzueg das wissenlich nicht mit 6A  Startstrom klarkommt (z.B Renault Zoe)

- Setze im Solarmanager in der Fahzreugauswahl das Setting "Renault Zoe 9A"
