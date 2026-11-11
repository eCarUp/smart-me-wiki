---
title: 'SolarManager'
slug: '/drittsysteme/solarmanager'
description: 'smart-me Geräte können im SolarManager direkt über die Cloud eingebunden werden.'
sidebar_label: 'SolarManager'
---
smart-me Geräte können im SolarManager direkt über die Cloud eingebunden werden. Auch [virtuelle Zähler](/konfiguration/virtuelle-zaehler) können übernommen werden. 

## Kleines Update zum SolarManager ab August 2026

Mit dem neuen Update vom SolarManager werden Picos nicht mehr über die Seriennummer gesteuert, sondern über die ID der Lastmanagement Level 1 Gruppe.

In dem kurzen Video zeige ich dir Schritt für Schritt, wie das funktioniert, damit du die Einstellungen auf der smart-me Seite korrekt vornehmen kannst.

Das ist super zu wissen: mit dem Update ist somit das einphasige Laden mit 6 A (ca. 1,4 kW) möglich, was ideal für geringere PV-Überschüsse ist. Wie dies konfiguriert werden kann, findest du in der Dokumentation vom SolarManager.

<Embed src="https://drive.google.com/file/d/1Oc3uuTCMusCJMHL7hjlJzFbkoFONHpm4/preview" aspect="1.350" title="Drive, solarmanager_update_2026.mp4" />

solarmanager\_update\_2026.mp4

Im SolarManager gibt es mehrere Optionen den smart-me Zähler und Pico Ladestationen zu verwenden:

- Als Smart Meter bzw. Bilanzzähler direkt nach dem EW-Zähler

- Als Verbrauchsmessung von Geräten wie Ladestationen, Wärmepumpen etc.

- Als Produktionsmessung von PV-Erzeugung

- Als Schalter, um den Relais Kontakt am Zähler zu nutzen.

- Als Datenlieferant für das E-Mobilitäts Lastmanagement

Zielgruppe: Einfamilien- und Mehrfamilienhäuser

<Video src="D3Mh-cAyHvw" title="YouTube Video, Demo SolarManager Integration von smart-me Zählern" />

## Einbindung Allgemein

Zur Einbindung werden die Cloud-Zugangsdaten (Benutzernamen und Passwort)  sowie die Seriennummer des Zählers benötigt. Die Seriennummer ist direkt im smart-me Portal und auf den Geräten selbst ersichtlich. Bei der Seriennummer nur die Ziffern vor dem Bindestrich verwenden!

![SolarManager – Abbildung 1](/img/drittsysteme-solarmanager/01.png)

### Beispiel:

Seriennummer Web-Portal: 07907952

Seriennummer Zähler: 07907952-123 (-123 weglassen)

## smart-me Zähler als Smart Meter

Im SolarManager kann ein Smart Meter hinzugefügt werden, dieses kann auf zwei Arten montiert werden:

- Direkt nach dem EVU-Zähler (Bilanzzähler), wobei Produktion (-) und Verbrauch (+) direkt gemessen werden 

- Reine Verbrauchsmessung, die Produktion wird separat erfasst

Zur Einrichtung fügt man ein Smart Meter hinzu und wählt dort smart-me Cloud. Mit Zugangsdaten und der 8-stelligen Seriennummer wird das Smart Meter verbunden. 

- Installationsort:  Gemäss Beschreibung oben

- Messung invertieren: Falls der Zähler invertiert montiert wäre, könnte man hier das Vorzeichen ändern. 

![SolarManager – Abbildung 2](/img/drittsysteme-solarmanager/02.png)

## smart-me Relais nutzen

Der [3-Phasenzähler Telstar](/produkte/telstar-80a) hat zwei potentialfreie Kontaktausgänge zur Steuerung von externen Geräten, einer davon mit integriertem 8A-Relais. Im SolarManager kann dieser geschalten werden. Pro Relais wird ein «Schalter» erfasst und parametrisiert. Die Schalter müssen vorgängig im smart-me Portal als digitale Ausgänge definiert werden (siehe [Ein- & Ausgänge](/)) 

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

![SolarManager – Abbildung 3](/img/drittsysteme-solarmanager/03.png)

![SolarManager – Abbildung 4](/img/drittsysteme-solarmanager/04.png)

## Kontakt:

<Kacheln min="20rem">
<Kachel titel="SolarManager AG">

Schlyffistäg 36, CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) · [info@solarmanager.ch](mailto:info@solarmanager.ch) · +41 56 512 92 08

</Kachel>
</Kacheln>

## FAQ

<details id="stromfreigabe-pico-ladestation-funktioniert-nicht-ab-4200w">
<summary>Stromfreigabe Pico Ladestation funktioniert nicht ab 4200W</summary>

Die Pico Ladestation wird standardmässig mit dem Minimalstrom 8A ausgeliefert um alle möglichen Fahrzeugtypen nach der Installation direkt zu supporten.

Im Zusammenspiel mit SolarManager geht dieser standardmässig aber von einem Minimalstrom von 6A aus um die Pico anzusteuern.

Wählen Sie den jeweiligen Fall, der auf Ihr Fahrzeug zutrifft um die von Ihnen gewünschte Konfiguration fehlerfrei zu unterstützen:

Fall A: Du hast ein Fahrzeug, das mit 6A Startstrom umgehen kann

- Setze den Minimalstrom auf der Pico Hardware auf 6A.

![SolarManager – Abbildung 5](/img/drittsysteme-solarmanager/05.png)

Fall B: Du hast ein Fahrzeug, das wissentlich nicht mit 6A  Startstrom klarkommt (z.B Renault Zoe)

- Setze im SolarManager in der Fahrzeugauswahl das Setting "Renault Zoe 9A"

</details>
