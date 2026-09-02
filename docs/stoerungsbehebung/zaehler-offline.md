---
title: 'Zähler offline'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Auf dieser Seite werden die bekannten Schritte erläutert, um einen offline befindlichen smart-me Stromzähler wieder online zu bringen.'
sidebar_label: 'Zähler offline'
---
Auf dieser Seite werden die bekannten Schritte erläutert, um einen offline befindlichen smart-me Stromzähler wieder online zu bringen. 

## Gut zu wissen

### Wie erkenne ich ob ein Zähler offline ist?

Ein smart-me Zähler ist offline, wenn sich dieser seit mehr als 15 Minuten nicht mehr in der Cloud gemeldet hat. Dies kann ermittelt werden indem auf dem Zähler die letzte Verbindung verifiziert wird.

![Letzte Verbindung](/img/stoerungsbehebung-zaehler-offline/01.png)

![Zähler offline – Abbildung 2](/img/stoerungsbehebung-zaehler-offline/02.png)

Zusätzlich bietet die Systemgesundheit eine Übersicht aller Geräte

### Firmware Version (Telstar 80A und Telstar CT)

Bis und mit FW-Version 1.16 and 1.17 wurden auf dem Telstar CT und Telstar 80A diverse Anpassungen gemacht, um die Stabilität der WiFi Verbindung zu verbessern. Aus diesem Grund empfehlen wir immer kurz zu prüfen, ob die aktuellste Version auf dem Zähler ist und diese gegebenenfalls zu aktualisieren. [Firmware Update](/konfiguration/firmware-update) 

Sollte ein Zähler mit der neusten Firmware Version offline sein, obwohl Nachbarzähler online sind, bitten wir dich uns diese zu melden.

### Wie speichere ich ein neues Netzwerk auf dem smart-me Gerät?

Siehe unten Zähler neu installieren

### Zähler neu installieren

Mit einer Neuinstallation kann auf dem Zähler ein neues WiFi gespeichert werden. Die Installation muss vom Konto erfolgen bei dem der Zähler offline ist. Die smart-me Cloud erkennt bekannte Geräte und fügt neue Daten hinzu ohne die bestehenden Daten zu verändern.

Die Neuinstallation erfolgt mit derselben Prozedur wie in der [Inbetriebnahme](/konfiguration/inbetriebnahme) beschrieben. In der App oben rechts das + wählen und das Gerät neu installieren. Dabei wird automatisch die neue SSID und Passwort auf dem Gerät gespeichert. Es ist wichtig darauf zu achten, dass du mit dem korrekten Konto eingeloggt bist.

### Eingrenzung des Problems

Es ist wichtig, zunächst grob herauszufinden, woran das Problem mit der Verbindung liegt. Wenn mehrere Zähler fast zur gleichen Zeit die Verbindung verlieren (offline sind), deutet dies wahrscheinlich auf Probleme mit dem Access-Point, dem Router oder der Internetverbindung hin.

Mögliche Probleme könnten sein:

- Der Access-Point oder Router hat ein Problem. In solchen Fällen kann es hilfreich sein, den Router oder den Access-Point neu zu starten. Nach dem Neustart sollten unsere Geräte normalerweise innerhalb weniger Minuten wieder eine Verbindung zur smart-me Cloud herstellen.

- Es wurde ein neuer Internetanbieter aktiviert oder eine neue SSID (Name des WLAN-Netzwerks) wurde definiert. In diesem Fall musst du das neue Netzwerk auf jedem smart-me Gerät speichern, damit sie sich wieder verbinden können.

- Bei mobilen Internetverbindungen kann es sein, dass das Abonnement nicht bezahlt wurde. Stelle sicher, dass die Zahlungen für das mobile Internet in Ordnung ist.


Wenn nur ein einzelner Zähler oder eine kleine Gruppe von Zählern die Verbindung verloren hat, liegt das Problem in der Regel eher beim betroffenen smart-me Zähler.

## Zähler wieder online bringen

Die folgende Anleitung schlägt einen einheitlichen Ablauf vor, um einen Zähler wieder online zu bringen. 

Bitte beachte die folgenden Voraussetzungen:

- Dieser Ablauf setzt voraus, dass das Internet korrekt konfiguriert ist und alle erforderlichen Voraussetzungen erfüllt.

- Stelle sicher, dass ein anderer Zähler im selben Konto, der gemäss der Planung mit demselben Router oder Access-Point verbunden sein sollte, online ist. Dadurch wird sichergestellt, dass weder die Internet-Hardware noch deren Voraussetzungen das Problem verursachen.


### Telstar 80A und Telstar CT

- Seriennummer startet mit 63\*: Telstar 80A

- Seriennummer startet mit 62\*: Telstar CT


1.  ### Zähler neu starten


Dies ist nur zur Info wie es gemacht wird, es kann weiter unten verlangt werden den Zähler neu zu starten, um ihn wieder online zu bringen. 

Neustart erzwingen: 

- T1 und T2 10 Sekunden drücken. Display leuchtet beim Neustart kurz nicht mehr.


Wie erkenne ich den Neustart:

- Zähler wird kurz dunkel und am Display wird nichts mehr angezeigt.


Verhalten wenn der Zähler wieder online kommt:

- Oben Rechts am Bildschirm wechselt das Empfangssignal direkt nach dem Neustart zwischen X und Empfang. 

- Der Zähler ist online, wenn nach ca. 1 Minute das Empfangssignal oben rechts auf dem Display dauerhaft Ein und schwarz ist.

- Kurz prüfen ob der Zähler in der Cloud online ist.

- Prüfen ob ein [Firmware Update](/konfiguration/firmware-update) verfügbar ist. Wenn ja, alle Zähler updaten.


Verhalten wenn der Zähler nicht online kommt:

- Oben rechts am Bildschirm wechselt das Empfangssignal nach dem Neustart zwischen X und Empfang für mehr als 2 Minuten ohne online zu kommen.

- Wenn dies nicht hilft, den Support anrufen.


![Zähler offline – Abbildung 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Prüfung bei der Ankunft

Folgende Punkte können bei der Ankunft überprüft werden. Wenn bereits etwas am Zähler geändert wurde, ist es wichtig, dass am Zähler für mindestens 5 Minuten keine weiteren Änderungen vorgenommen werden. Es ist auch möglich, vom Kunden vor Ort ein 30-Sekunden-Video des Zählers zu verlangen, um die Situation besser beurteilen zu können. 

![Zähler offline – Abbildung 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

### Zähler wechselt zwischen X und Empfangssymbol:

- Prüfen, ob durch 10 Sekunden langes Drücken der Taste T1 das Empfangssymbol auf dem Display zwischen hell und dunkel wechselt. Ist dies nicht der Fall, ruf bitte den Support an.

- Lösung 1: Drücke T1 und T2 gleichzeitig: Der Zähler sollte kurz dunkel werden. Warte 1 Minute und prüfe, ob der Zähler wieder online ist.

- Lösung 2: Installiere den Zähler neu. Bitte wählen das Zielkonto aus und lösch auf keinen Fall den Zähler im Konto.

- Lösung 3: Support anrufen 


### Anzeige ist dunkel:

- Lösung 1: Prüfen, dass mindesten Phase 1 angeschlossen ist

- Lösung 2: Prüfen, dass der Neutralleiter korrekt angeschlossen ist. 

- Lösung 3: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 4: Wenn nach Lösung 1 und 2 das Display immer noch dauerhaft schwarz ist, ist der Zähler defekt. In diesem Fall kann ein [RMA-Antragsformular](/rma-antragsformulare) ausgefüllt werden (Fehlerbeschreibung: Display Dunkel Code:dd).


Anzeige immer wieder dunkel wird:

- Beschreibung des Problem: Der Zähler zeigt etwas an. Nach einem Moment zeigt es für einige Sekunden nichts mehr an. Dann kommt er wieder, etc...

- Lösung 1: Prüfen, ob der Neutralleiter korrekt angeschlossen und verdrahtet ist. 

- Lösung 2: Support anrufen 


Zähler erzeugt ein lokales WLAN für mehr als 5 Minuten:

- Wie erkenne ich diesen Zustand: Empfangssignal oben Rechts auf dem Display wechselt zwischen Empfang hell und dunkel ab.

- In diesem Fall deutet dies auf eine verklemmte Taste T1 hin.

- Lösung 1: Versuchen die Taste T1 zu lösen. 

- Lösung 2: ein [RMA-Antragsformular](/rma-antragsformulare) ausfüllen (Fehlerbeschreibung: Taste T1 klemmt Code:tk).


Zähler zeigt oben rechts dauerhaft ein X an:

- Lösung 1: Prüfen ob die Anzeige immer wieder dunkel wird. Wenn dies der Fall ist, bitte im oberen Abschnitt "Anzeige immer wieder dunkel" die Lösung nachlesen.

- Lösung 2: Zähler neu starten (siehe Beschreibung oben)

- Lösung 3: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 4: Wenn nach Lösung 1 und 2 immer noch dauerhaft ein X anzeigt wird, ist der Zähler defekt. In diesem Fall kann ein [RMA-Antragsformular](/rma-antragsformulare) ausgefüllt werden (Fehlerbeschreibung: X wird immer angezeigt Code:xx).


Zähler kann sich nicht mit dem WLAN verbinden:

- Empfangssignal oben Rechts auf dem Display wechselt zwischen Empfang und X ab.


- Lösung 1: Zähler neu starten (siehe Beschreibung oben)

- Lösung 2: Diese muss nur angewendet werden, wenn in der Nähe kein anderer Zähler online ist. Mit dem Smartphone einen Hotspot mit der gleichen SSID und Passwort, wie das bestehende WiFi, erstellen. Dann nochmals den Zähler neu starten und prüfen, ob er sich dann über den Hotspot vom Smartphone verbindet. Wenn der Zähler sich über den Hotspot verbindet, deutet dies auf ein Problem mit dem WLAN-Router oder Accesspoint hin. Es ist darauf zu achten, dass die meisten Smartphones maximal fünf Geräten erlaubt eine Verbindung über den Hotspot zu erstellen.

- Lösung 3: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 4: Support anrufen 


## 3 Phasen 80A (alte Version)

- Seriennummer startet mit 60\*: 3 Phasen 80A


1.  ### Zähler neu starten


Dies ist nur zur Info, wie es gemacht wird. Weiter unten kann verlangt werden den Zähler neu zu starten, um ihn wieder online zu bringen. 

Neustart erzwingen: 

- T1 und T2 10 Sekunden drücken. Display zeigt für 1-2 Sekunden 888888 an.


Wie erkenne ich den Neustart?

- Zähler\-Display zeigt für 1-2 Sekunden 888888 an.


Verhalten wenn der Zähler wieder online kommt:

- Oben links am Bildschirm wechselt das WiFi Signal direkt nach dem Neustart zwischen WiFi mit und ohne Ausrufezeichen.

- Der Zähler ist online, wenn nach ca. 1 Minute das WiFi Signal oben links auf dem Display dauerhaft ohne Ausrufezeichen angezeigt wird.

- Kurz prüfen ob der Zähler in der Cloud online ist.

- Prüfen ob ein [Firmware Update](/konfiguration/firmware-update) verfügbar ist. Wenn ja, alle Zähler updaten.


Verhalten wenn der Zähler nicht online kommt:

- Oben links am Bildschirm wechselt das WiFi Signal nach dem Neustart zwischen WiFi mit und ohne Ausrufezeichen für mehr als 2 Minuten, ohne online zu kommen.

- Wenn dies nicht hilft, den Support anrufen.


### Prüfung bei der Ankunft

Folgende Punkte können bei der Ankunft überprüft werden. Wenn bereits etwas am Zähler geändert wurde, ist es wichtig, dass am Zähler für mindestens 5 Minuten keine weiteren Änderungen vorgenommen werden. Es ist auch möglich, vom Kunden vor Ort ein 30-Sekunden-Video des Zählers zu verlangen, um die Situation besser beurteilen zu können. 

![Zähler offline – Abbildung 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

Zähler ist dunkel:

- Lösung 1: Prüfen, dass mindesten Phase 1 und Neutralleiter korrekt angeschlossen sind. 

- Lösung 2: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 3: Wenn nach Lösung 1 und 2 das Display immer noch dauerhaft schwarz ist, ist der Zähler defekt.


888888 wird auf dem Display angezeigt:

- Lösung 1: Zähler neu starten

- Lösung 2: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 3: Wenn nach Lösung 1 und 2 immer noch 888888 anzeigt wird, ist der Zähler defekt.


Zähler erzeugt ein lokales WLAN für mehr als 5 Minuten:

- Wie erkenne ich diesen Zustand: WiFi Signal oben links auf dem Display wird mit und ohne Ausrufezeichen abwechselnd angezeigt.

- In diesem Fall deutet dies auf eine Verklemmt Taste T1.

- Lösung 1: Versuchen die Taste T1 zu lösen

- Lösung 2: Wenn nach Lösung 1 immer noch ein lokales WLAN erzeugt wird, ist der Zähler defekt.


Zähler kann sich  nicht mit dem WLAN verbinden:

- Wie erkenne ich diesen Zustand: WiFi Signal oben links auf dem Display wird mit Ausrufezeichen angezeigt.


- Lösung 1: Zähler neu starten (siehe Beschreibung oben)

- Lösung 2: Mit dem Smartphone ein Hotspot mit der gleichen SSID und Passwort wie das bestehende WiFi erstellen. Dann nochmals den Zähler neu starten und prüfen ob er sich dann über den Hotspot vom Smartphone verbindet. Wenn der Zähler sich über den Hotspot verbindet, deutet dies auf ein Problem mit dem WLAN-Router oder Accesspoint hin. Es ist darauf zu achten, dass die meisten Smartphones maximal fünf Geräten erlaubt eine Verbindung über den Hotspot zu erstellen.

- Lösung 3: Wenn es ohne grossen Aufwand möglich ist, Sicherung entfernen und wieder einfügen. 

- Lösung 4: Support anrufen


## Bauer Station

- Das Symbol im smart-me Portal ist ein Tankstellensymbol und kein Blitz

- Seriennummer startet mit 60\*: 3 Phasen Zähler 80A (alt)

- Seriennummer startet mit 62\*: Telstar 80A (neu)


### Prüfung bei der Ankunft

- -   Support anrufen. Anleitung in Arbeit.


## Verbindungsqualität

### Pico WLAN Empfangsqualität

Ab FW-Version 0.0.18 wird die WLAN Empfangsqualität im smart-me Portal angezeigt. [Firmware Update](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Diese Information kann von allen Accounts über die [API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) mit dem Befehl "GET /api/AdditionalDeviceInformation/&#123;id&#125;" abgerufen werden.

- -   Pico: WiFi (0 = unknown, -1 bis -49 = excellent,  -50 bis  -59 = very good,  -60 bis -69 = good, -70 bis -99= low) (-99 Schlecht, -1 Gut)

    - Pico: Mobile (0 = unknown, 1 bis -74 = excellent, -75 bis -84 = good,  -85 bis -94 = low) (-99 Schlecht, -1 Gut)




![Zähler offline – Abbildung 6](/img/stoerungsbehebung-zaehler-offline/06.png)

### Goldpartner können die Verbindungsart und Qualität von Telstar und Pico online prüfen.

- Einloggen im Goldpartner Account

- Konfiguration

- Partner

- Geräteverwaltung (Kann bei vielen Geräte etwas dauern)

- Eine neue Spalte mit der Verbindungsart wird angezeigt

- Die Qualität wird in Klammern angezeigt.

    - Telstar: WiFi &lt;= 40 kann zu unstabilen Verbindungen führen (0 Schlecht / 100 Gut)

    - Pico: WiFi (0 = unknown, -1 bis -49 = excellent,  -50 bis  -59 = very good,  -60 bis -69 = good, -70 bis -99= low) (-99 Schlecht, -1 Gut)

    - Pico: Mobile (0 = unknown, 1 bis -74 = excellent, -75 bis -84 = good,  -85 bis -94 = low) (-99 Schlecht, -1 Gut)


Diese Information kann von allen Accounts über die [API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) mit dem Befehl "GET /api/AdditionalDeviceInformation/&#123;id&#125;" abgerufen werden.



![Zähler offline – Abbildung 7](/img/stoerungsbehebung-zaehler-offline/07.png)
