---
title: 'Pico Konfiguration'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'Auf dieser Seite findest du die wichtigsten Konfigurationen im Zusammenhang mit der Pico Hardware.'
sidebar_label: 'Pico Konfiguration'
---
Auf dieser Seite findest du die wichtigsten Konfigurationen im Zusammenhang mit der Pico Hardware. Die Konfiguration der Pico Ladestation erfolgt im ersten Schritt immer über die smart-me Plattform. Nachfolgend kann die Authentifizierungsmethode über ein Backend-System (eCarUp) ermöglicht werden.

![Pico Konfiguration – Abbildung 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Pico Konfiguration – Abbildung 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentifizierung (privat, halb-öffentlich, öffentlich)



Die Pico Ladestation kann wahlweise mit oder ohne Authentifizierunsmethode verwendet werden.



### Konfiguration None:

Keine Authentifizierung zum Laden notwendig. (lädt sobald eingesteckt)



### Konfiguration mit eCarUp Backend:

Um eine Pico öffentlich / halböffentlich zu betreiben oder jegliche Art von Freischaltfunktionen nutzen zu können, muss die Station im Backend Modus mittels eCarUp betrieben werden.

Freischalt Funktionen:

- RFID

- manuelles On / Off über App

- QR-Codes

- CarID (benötigt Aktivierung in den erweiterten Einstellungen im smart-me Portal)




Sobald “eCarUp Backend” ausgewählt ist, wird im gleichnamigen eCarUp-Account die Station automatisch hinzugefügt. (gleicher Username und Passwort wie bei smart-me)

Die Konfiguration von eCarUp tätigst du im Web-Portal von [www.ecarup.com](http://www.ecarup.com).

Füge unter Fahrer einen RFID Karten-Tag hinzu oder lese einen "Karten-Tag" mittels der eCarUp-App für Android und iOS ein.

Details zur Konfiguration von eCarUp und öffentlichen Ladestationen findest du im
eCarUp Wiki: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Konfiguration externes OCPP Backend:

Um die Pico in ein Drittanbieter-Backend einzubinden, musst du lediglich die Backend URL des Drittanbieters auf der jeweiligen Ladestation hinterlegen.

Dies sollte nicht verwendet werden, wenn die Station über eCarUp verbunden ist.

Hinweis:
Die URL beginnt mit ws:// oder wss://

Pico Einstellung im smart-me Portal:

![Pico Konfiguration – Abbildung 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menü eCarUp Portal:

![Pico Konfiguration – Abbildung 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Drittanbieter Backend URL hinterlegen:

![Pico Konfiguration – Abbildung 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Konfiguration für privaten Gebrauch mit RFID Authentifizierung

1.  Navigiere zu Stationen → Verwaltung im eCarUp- Portal

2.  Bearbeiten → Anschluss bearbeiten


![Pico Konfiguration – Abbildung 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Preise = 0 CHF, Zugriff: Privat

![Pico Konfiguration – Abbildung 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Konfiguration für limitierten Gebrauch mit RFID Authentifizierung (Mieter mit Spezialpreisen)

1.  Navigiere zu Stationen → Verwaltung im eCarUp- Portal

2.  Bearbeiten → Anschluss bearbeiten


![Pico Konfiguration – Abbildung 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Preise wählen

![Pico Konfiguration – Abbildung 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Spezial User und deren Preise definieren

Die Fahrer erstellen ihren eigenen Account bei eCarUp und teilen den Accountnamen dem Stationsbesitzer mit.

![Pico Konfiguration – Abbildung 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalisieren der Pico Anzeige

Wir raten davon ab, ein schwarzes Hintergrundbild einzufügen, da es dann unklar ist, ob die Pico läuft oder nicht. Besonders wenn sie offline ist, ist es aus der Ferne schwer zu beurteilen, ob die Station defekt oder nicht verbunden ist. Aus diesem Grund empfehlen wir energiebewussten Menschen, dieses 4-Pixel-Bild hinzuzufügen, damit immer erkannt werden kann, ob die Station lokal noch läuft oder nicht. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Der Name der Station und die Anzeige bei Nichtgebrauch kann frei gewählt  und personalisiert werden.

Neben den bereits zur Verfügung stehenden Emoticons kann man auch eigene GIFs oder Bilder hochgeladen. 

- Unterstützte Formate: JPG, PNG, GIF

- Auflösung: 32x32 Pixel

- Grösse: max. 200 kB

- Hintergrund sollte komplett schwarz (#000000) sein

- Animationen (GIF) haben 10 Bilder/s (100ms pro Bild)


Hinweis: Das beste Bildergebnis erhältst du, wenn du bei der Erstellung und Bearbeitung darauf achtest, dass das Bild mit 32x32 Pixel im GIF Format hochgeladen wird.



\-> Erstelle eigene GIFs mit [piskelapp](/drittsysteme/piskelapp) 

![Pico Konfiguration – Abbildung 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Lastmanagement und Begrenzung

### Stationsleistung begrenzen

Die Pico Ladestation kann man  bei Installation standardisieren.

Diese Einstellung wird vom automatischen Lastmanagement berücksichtigt und niemals überschrieben.

Mit der Einstellung zum Maximalladestrom kann die maximale Leistung der Station fix begrenzt werden. Die Begrenzung erfolgt in 1- Amperestufen.

32A = 22kW maximal Leistung

16A = 11kW maximal Leistung

Mit der Einstellung zum Minimalstrom werden Ladungen verhindert  oder passende Minimalströme zum Ladestart eines Autos gesetzt.

Hinweis:
Es gibt Fahrzeuge, welche mit einem Startstrom von 6A nicht geladen werden können, aufgrund der verbauten Technik im Fahrzeug. In diesem Fall kann der Minimalstrom höher gesetzt werden.

![Pico Konfiguration – Abbildung 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Statisches Lastmanagement (Stationsgruppe)

Das statische Lastmanagement regelt Stationen innerhalb der gleichen Lastmanagementgruppe. Die Funktion verhindert, dass der Maximalstrom auf der Zuleitung z.B. Flachbandkabel nicht überschritten wird und regelt die Verteilung des verfügbaren Stroms auf die Stationen. 

Die Grösse der Ladegruppen ist auf 200 Ladestationen begrenzt.

Funktion im Detail:
Die Ladestationen regeln sich selbst anhand des definierten maximalen Stroms. Die 3-phasige Ladeleistung wird auf alle aktiven Stationen verteilt, bis die minimale eingestellte Leistung 3-phasig nicht mehr allen ladenden Autos zur Verfügung gestellt werden kann. Danach wird die Leistung auf 1-phasig umgestellt. Alle Autos laden 1-phasig mit dem maximal möglichen Strom pro Phase weiter (Phasenumschaltung). Eine weitere Ladung wird erst unmöglich, wenn alle bereits ladenden Autos beim Minimum 1-phasig angelangt sind. Sobald eines der geladenen Fahrzeuge die Station verlässt, wird die reservierte Ladung für ein Weiteres freigegeben.

Konfiguration:

1.  Lastmangement-Gruppe erstellen (Neue Gruppe)

2.  Maximalstrom der Zuleitung definieren (Verfügbarer Strom)

3.  Aktion bei Verbindungsausfall definieren
    (Für Kombination mit Multi-Level Lastmanagement ist nur die Version Max. Strom pro Gruppe verwendbar)

4.  Stationen der entsprechenden Lastmanagement- Gruppe hinzufügen (Editieren)




Mehr Details dazu: [Pico Lastmanagement](/produkte/pico-ladestation/pico-lastmanagement)

![Pico Konfiguration – Abbildung 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Pico Konfiguration – Abbildung 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Dynamisches Lastmanagement und solaroptimiertes Laden mit Multilevel Lastmanagement (MLM)

Das dynamische Lastmanagement ermöglicht die Berücksichtigung eines Referenzpunktes und die Steuerung der maximalen Ströme an diesem Referenzpunkt. In der E-Mobilität wird dafür entweder der Hausanschluss- oder der Verteilerpunkt gewählt.

[Planung Lastmanagement](/planung/elektromobilitaet) 

Als Hardware für die Referenzmessung eignen sich folgende Produkte:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


Die Konfiguration des dynamischen Lastmanagements erfolgt über das Multilevel Lastmanagement von smart-me.

Details und Beispiele findest du hier: [Multilevel Lastmanagement](/konfiguration/multilevel-lastmanagement)

Du kannst entsprechend unter Berücksichtigung des aktuellen Stromes an diesem Referenzpunkt fliessenden Einfluss auf die Stationsgruppen Maximalströme nehmen.

![Pico Konfiguration – Abbildung 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Lastabwurf

Hardware Lastabwurf (externe Eingänge der Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" title="Spreadsheet, Pico Lastabwurf" />

Pico Lastabwurf

Der Lastabwurf kann auch mittels nur einem verfügbaren Signal realisiert werden. 

Für die Konfiguration von keiner Ladung zur maximalen Ladeleistung wird das Signal auf IN1 und IN2  sowie COM verdrahtet. Für die Konfiguration von 6A Minimalleistung auf maximale Ladeleistung muss das Signal nur auf IN2 sowie COM verdrahtet werden.

COM ist der Neutralleiter, IN1 und IN2 müssen beim ON Signal mit einer Spannung versehen sein. IN1 und IN2 erzeugen keine Spannung, diese muss von extern zur Verfügung gestellt werden.

Achtung:
Der Lastabwurf kann entweder auf allen Picos oder minimal auf eine aus jeder statischen Lastgruppe verdrahtet werden.
Diese Funktion ist auch ohne Internet gewährleistet!

Cloud-basierter Lastabwurf via MLM

Der Lastabwurf kann auch über das Multilevel Lastmanagement realisiert werden. Der Vorteil ist, dass kein Signal an die Pico Hardware angeschlossen sein muss, sondern ein Signal an einer beliebigen anderen Hardware (Zähler) angelegt und als Trigger verwendet wird.

Der Nachteil ist jedoch, dass die Funktion nicht ausgeführt wird, wenn keine Internetverbindung besteht.

Mehr Details zur Einrichtung: [Multilevel Lastmanagement](/konfiguration/multilevel-lastmanagement)

![Pico Konfiguration – Abbildung 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Erweiterte Aktionen

Hier kannst du als Stationsbesitzer das Kabel entriegeln, die Station neu starten oder den Zählerstand auf dem Display zur Überprüfung anzeigen.

![Pico Konfiguration – Abbildung 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Erweiterte Einstellungen

Automatische Auto Erkennung:
Damit die CarID Authentifizierung funktioniert, musst du die Kommunikation der Station zum Fahrzeug freigeben.

Modbus TCP:
Aktivieren der Modbus TCP Schnittstelle von Pico

Station löschen:
Löscht die Station und alle Daten auf der Cloud

![Pico Konfiguration – Abbildung 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Kabel immer fest verriegeln

Ladekabel kann man an der Pico Ladestation verriegeln.

Vorgehen:
Kabel einstecken --> Login smart-me Portal --> Pico wählen --> oben rechts Zahnrad wählen --> erweiterte Einstellungen --> Kabel immer fest verriegeln. 

Hinweis: 

- Das Auto darf beim Fixieren des Kabels nicht eingesteckt sein.

- Wenn die Stromversorgung unterbrochen oder die Pico neu gestartet wird, wird das Kabel kurzzeitig entriegelt und beim Aufstarten wieder verriegelt.


Voraussetzung ist: Die Pico muss dafür mindestens die Kommunikationsversion 0.0.7 haben. Picos, die vor dem 31.12.2022 hergestellt wurden, können betroffen sein.

![Kabel immer fest verriegeln](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
