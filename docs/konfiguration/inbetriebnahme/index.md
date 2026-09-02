---
title: 'Inbetriebnahme'
slug: '/konfiguration/inbetriebnahme'
description: 'Alles rund um die Inbetriebnahme von smart-me Geräten: Was bei der Inbetriebnahme beachtet werden sollte, häufige Fehlerquellen und spezifische Antworten auf Installationsfragen.'
sidebar_label: 'Inbetriebnahme'
---
Alles rund um die Inbetriebnahme von smart-me Geräten: Was bei der Inbetriebnahme beachtet werden sollte, häufige Fehlerquellen und spezifische Antworten auf Installationsfragen.

[Inbetriebnahme LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Zähler löschen / deaktivieren](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Weiter zur Ordner- und Zählerkonfiguration](/konfiguration/ordnerkonfiguration)

## Vorbereitung

Folgende Punkte müssen vor der Inbetriebnahme vorhanden sein

## WiFi Voraussetzungen

- WiFi 802.11 b/g/n 2.4GHz (Kein 5GHz oder Kombi-Netz mit selber SSID)

- Port 80 UDP und 53 UDP/TCP müssen nach aussen offen sein.

- Das Netzwerk benötigt eine Internetverbindung.

- Die SSID darf nicht versteckt sein.

- Die SSID unterstützt nur ASCII Symbole exklusive $ (Ä,Ö,Ü funktionieren nicht)

- MAC-Adressen-Filter müssen bei der Installation deaktiviert sein. (Die MAC Adressen der Geräte können nur durch ARP ausgelesen werden)

- Das Netzwerk benötigt einen DHCP-Server

- SSID max. 28 Zeichen

- Passwort max. 63 Zeichen


## smart-me Account

Wir empfehlen einen Account im vorraus und für jede Installation seperat zu erstellen. Es werden für die Inbetriebnahme keine Lizenzen benötigt.

## Installer App

Die kostenlose Installer App muss auf ihrem Smartphone installiert werden und die nötigen Berechtigungen erteilt werden.

IOS: Standort, Lokales Netzwerk, Kamera

Android: Standort, Kamera

## Spezielles Werkzeug

- Pico: Eine RFID Karte (mitgeliefert)

- Telstar 80A, CT und M-Bus Gateway: Ein kleiner Schraubenzieher zum drücken der Taste T1


![Inbetriebnahme – Abbildung 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Anleitung](/konfiguration/installer-app-anleitung)

## Installation

## Kurzanleitung

1.  WiFi Voraussetzungen prüfen (siehe oben)

2.  Kostenlose App für [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) oder [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018) herunterladen.

3.  Berechtigungen der App erteilen

4.  Verbinde dein Smartphone oder Tablet mit dem WiFi, in welches du das smart-me Gerät installieren möchtest.

5.  Starte die App logge dich ein mit dem entsprechenden Account ein oder erstelle einen Account.

6.  Im Menu prüfen mit Diagnose ob die Server erreichbar sind.

7.  Klicke unten rechts auf „Gerät installieren“ (+)

8.  Bei einer Installation mit WLAN kann dies oben hinzugefügt werden.

9.  Klicke unten rechts auf „Gerät hinzufügen“ (+)

10.  Scanne den QR-Code

11.  Wähle bei Pico aus, ob du WLAN oder Mobile (4G) verwenden möchtest.

12.  "Verbinde mit WLAN des Gerätes" wählen

13.  T1 drücken oder die RFID-Karte hinhalten. Hinweis: Die Pico muss innerhalb von 15 Minuten nach Einschalten des Stroms installiert werden.

14.  "WLAN quick connect" wählen

15.  Warte, bis die Aufforderung erscheint, dich mit smart-me\_xxxxxx zu verbinden.

16.  Warten, bis die Installation erfolgreich abgeschlossen ist.

17.  Name vergeben.

18.  Gerätespezifische Einstellung

     - Telstar CT: Wandlerverhältnis setzen (CT Wählen / editieren / Wandlerverhältnis eingeben)

     - M-Bus: Der Suchlauf muss übers Webportal gestartet werden (Zahnrad / Suchlauf starten)

     - Kamstrup:  Zählerschlüssel (Drei Zahnräder / Zählerschlüssel / speichern)


Sollte die Installation fehlschlagen, bitte die detaillierte Anleitung inkl. Fehlerbeschreibung befolgen.

## Detailliert Anleitung inkl. Fehlerbeschreibung

![Inbetriebnahme – Abbildung 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. WIFI Verbindung

![Inbetriebnahme – Abbildung 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Erstellung / Verbindung

![Inbetriebnahme – Abbildung 4](/img/konfiguration-inbetriebnahme/04.jpg)

### 3\. Kontoerstellung

Mögliche Probleme:

Wenn die Email bereits verwendet wird, muss eine andere verwendet werden.

![Inbetriebnahme – Abbildung 5](/img/konfiguration-inbetriebnahme/05.jpg)

### 4\. Kontoanmeldung

Mögliche Probleme:

- Wenn das Login nicht möglich ist, prüfe bitte, ob das WiFi eine Internetverbindung hat

- Wenn das Login nicht möglich ist, kann der Username oder das Passwort falsch sein.


![Inbetriebnahme – Abbildung 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnose

Dieser Schritt ist Optional.

- Wichtig ist dass die Server erreichbar auf Yes sind.

- Wenn die Warnung wegen des 5-GHz-Netzwerks erscheint, musst du sicherstellen, dass auch ein 2,4-GHz-Netzwerk erzeugt wird. Es ist nicht möglich, das Smartphone dazu zu zwingen, sich mit dem 2,4-GHz-Netzwerk zu verbinden. Aus diesem Grund erscheint es als Warnung.


![Inbetriebnahme – Abbildung 7](/img/konfiguration-inbetriebnahme/07.jpg)

### 6\. Klicke auf „Gerät hinzufügen“ (+)

![Inbetriebnahme – Abbildung 8](/img/konfiguration-inbetriebnahme/08.jpg)

### 7\. Klicke auf "Editieren"

Hinweis

- Dieser Schritt kann ignoriert werden, wenn Picos über 4G in Betrieb genommen werden.


![Inbetriebnahme – Abbildung 9](/img/konfiguration-inbetriebnahme/09.jpg)

### 8\. Trage das WLAN Passwort ein

Mögliche Probleme:

- Wenn die SSID als &lt;&lt;unknown>> angezeigt wird, muss der Standort aktiviert werden und das Smartphone muss mit einem WLAN verbunden werden sein.


![Inbetriebnahme – Abbildung 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Klicke auf „Gerät hinzufügen“ (+)

![Inbetriebnahme – Abbildung 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scanne den QR Code

Mögliche Probleme:

- Wenn der QR Code nicht erkennt wird, kann die Seriennummer auch manuell eingegeben werden.


![Inbetriebnahme – Abbildung 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Verbinde dich mit dem WLAN des Zählers

![Inbetriebnahme – Abbildung 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Nur bei Pico "Verbindungsart auswählen"

![Inbetriebnahme – Abbildung 14](/img/konfiguration-inbetriebnahme/14.jpg)

### 13\. T1 Taste drücken oder RFID scannen

Hinweis bei Pico: Beachte, dass du pro Pico 15 Minuten Zeit hast, um den Installationsprozess abzuschliessen. Andernfalls musst du die Pico neu starten und den Prozess von vorne beginnen.

![Inbetriebnahme – Abbildung 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Warten bis Verbindung erfolgreich ist

## Gerätespezifische Einstellung

## Telstar CT

### Wandlerverhältnis setzen

- CT Zähler anwählen und editieren 

- Wandlerverhältnis eingeben 

- Das Wandler-Verhältnis kann gesperrt werden. Dies dient als Schutz vor ungewollten Änderungen von unbefugten Personen. Damit das Wandlerverhältnis entsperrt werden kann,  muss das Gerät nochmals mit der smart-me App installiert werden.


### Hinweis:

Das Wandlerverhältnis ändert keine historischen Daten. Daher sollte dieser Schritt sofort nach der Inbetriebnahme erfolgen.

![Inbetriebnahme – Abbildung 16](/img/konfiguration-inbetriebnahme/16.jpg)

## M-Bus Gateway / Sirius

### Anleitung für beide M-Bus Gateways

Hardware Installationsschritte:

1.  Gerät installieren (M-Bus verdrahten, Spannung anlegen)

2.  Mit Hilfe der App die Installation gemäss Anleitung abschliessen.
    (Hardware mit WLAN und Ziel-Account verlinken. WLAN 2.4GHz)

3.  Unter Konfiguration in der App oder am Desktop den  "automatischen Suchlauf" starten um die Geräte zu finden.


Die Inbetriebnahme der Wärme- und Wasserzähler dagegen werden weiterhin durch den Lieferanten (z. B. Neovac, Ista, GWF, Techem usw.) ausgeführt. Meistens wird dazu im Technikraum von diesen Firmen ein eigener M-Bus Master angeschlossen, damit sie überprüfen können, ob die Zähler auch auf dem M-Bus ankommen.

Anschliessend wird ein Inbetriebnahmeprotokoll erstellt und erst danach wird unser M-Bus Gateway wieder angeschlossen.

Mit den dazugehörigen Unterlagen können anschliessend die jeweiligen Zähler in der smart-me Cloud den richtigen Wohnungen zugeordnet und die Konfiguration abgeschlossen werden.

Anbei die notwendigen Informationen

- Auflistung sämtlicher installierter Zähler

- M-Bus-Adresse (wir benötigen nur die Sekundäradresse, die Primäradresse ist nicht relevant für uns)

- Zugehörigkeit zur Wohnung (Wohnungsbezeichnung)

- Typ des Zählers (Wärme, Warm- oder Kaltwasser etc.)


Wichtig: Die Sekundäradresse muss pro smart-me Konto eindeutig sein, zusätzlich muss die Zahlenkombination der letzten 4 Zahlen einzigartig im Account sein für Wärme/Kälte-Kombizähler. Am einfachsten verwendest du die Geräte Seriennummer.

Ergebnis des automatischen Suchlaufs

![Inbetriebnahme – Abbildung 17](/img/konfiguration-inbetriebnahme/17.png)

Automatische Zählererstellung nach Suchlauf
(benötigt ein paar Minuten)

![Inbetriebnahme – Abbildung 18](/img/konfiguration-inbetriebnahme/18.png)

### Nummerierung bei Kombizähler

Das M-Bus-Gateway erkennt jeweils nur einen Zähler anhand der Sekundäradresse, die in der Regel auch auf dem Abnahmeprotokoll aufgeführt ist.

Die Kombizähler werden dann auf dem Portal separat angezeigt. Für diese Anwendung verwendet smart-me eine eigene Nummerierungslogik.

Alle nicht abrechnungsrelevanten Zähler können [deaktiviert](/konfiguration/inbetriebnahme/zaehler-loeschen) werden, um Lizenzkosten zu sparen. Das Löschen ist nicht zielführend, da der Zähler immer wieder erscheint.

Enthält ein Zähler mehr als 1 Zähler, werden diese jeweils wie folgt nummeriert:

- Hauptzähler = Sekundäradresse von der Liste des M-Bus Gateways (z.B. 71440145)

- Weitere Zähler = Nebenadresse des Hauptzählers, die ersten 1 oder 2 Zahl werden gelöscht (z.B. 7) und am Ende wird eine Zahl hochgezählt (z.B. 14401451,14401452).


- Subzähler = Diese enthalten die letzten vier Ziffern des Hauptzählers (z.B. 0145) und eine vierstellige Aufzählungsnummer am Ende (z.B. 01450001)


Hinweis zu führenden 0er: Wenn ein Zähler z.B. die Nummer 1000017 hat, werden nach dem abschneiden die führenden 0er nicht berücksichtigt werden also z.B. 000017 und werden am Schluss angefügt z.B. 1700001

![Inbetriebnahme – Abbildung 19](/img/konfiguration-inbetriebnahme/19.png)

![Inbetriebnahme – Abbildung 20](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway Geräte suchen

Weitere Konfigurationen müssen im Webportal gemacht werden

Editieren

- Intervall verändern. Das M-Bus Benötigt 10 Sekunden pro Gerät zum Auslesen.


Geräte Suchlauf beim M-Bus Gateway starten

1.  Oben rechts auf das Zahnradsymbol (Einstellungen) 

2.  Geräte suchen

3.  Suche mit "Ja" bestätigen


Hinweis: Die Suche kann mehrere Minuten dauern.

Gateway findet nicht alle Zähler

- Starte den Suchdurchlauf  nochmals (1-2x). Es kann sein, dass der Zähler sich nicht immer beim ersten Suchdurchlauf gefunden wird.

- Weitere Ursachen findest du auf der Seite [M-Bus Gateway Störungen](/stoerungsbehebung/mbus-gateway-stoerungen) 


Gateway findet mehr Zähler als verbaut wurden

- Meistens während der Inbetriebnahme: Je nach M-Bus Zähler kann dieser mehrere Subzähler erstellen. Diese erkennt man daran, das die Seriennummer um eine Stelle nach Links verschoben ist, gefolgt von einer steigenden Zahl. Beginnend mit 1. Bsp: Hauptzähler 00200001, Subzähler 02000011

- Weitere Ursachen findest du auf der Seite [M-Bus Gateway Störungen](/stoerungsbehebung/mbus-gateway-stoerungen) 


![Inbetriebnahme – Abbildung 21](/img/konfiguration-inbetriebnahme/21.png)

### M-Bus Gateway erkennung von neuen Geräte unterbinden

Wie wird die Option aktiviert?

- M-Bus Gateway auswählen.


- Wähle das M-Bus Gateway Zahnrad (oben rechts). Hinweis: Wähle nicht das obere Zahnrad, das für die Konfiguration der Zähler verwendet wird, sondern das untere.

- Bearbeiten

- Häkchen bei "Don't allow to add additional meters" setzen.

- Speichern


Was bewirkt diese Option?

- Durch das Aktivieren der Option "Don't allow to add additional meters" wird verhindert, dass Geräte, die noch nicht in der Cloud vorhanden sind, gespeichert werden. 


Was ist zu beachten?

- Wenn neue Geräte hinzugefügt werden, muss diese Option vor der Suche wieder deaktiviert werden.


Wann wird diese Option empfohlen?

- Wenn immer wieder M-Bus Geräte im Portal auftauchen, die gar nicht existieren.

- Aus präventiven Gründen :-)


In welchen Fällen kann das passieren?

- Bei Fehlern in der Datenübertragung. Dies kommt häufiger vor, wenn das M-Bus Kabel zu lang ist und dadurch die Qualität der Datenübertragung sinkt, oder wenn das Kabel zu schlecht abgeschirmt oder externen Störungen ausgesetzt ist.


Technische Erklärung

- Das standardisierte M-Bus Protokoll hat nur 1 byte für die Prüfsumme. Die Prüfsumme ist dazu gedacht, bestimmte Fehler in der Datenübermittlung zu erkennen. Leider ist 1 byte wenig und kann immer wieder dazu führen, dass ein fehlerhaftes Datenpaket als korrekt und gut angesehen wird. Dies führt bei einigen Installationen, bei denen M-Bus Gateways eingesetzt werden, immer wieder dazu, dass korrupte Pakete als korrekt und gut eingestuft werden und diese dann als neues M-Bus Gerät in unserer Cloud erkannt und hinzugefügt werden. Das Konto fällt dann von Professional auf Basic, da die Lizenzabdeckung nicht mehr gewährleistet ist.


![Inbetriebnahme – Abbildung 22](/img/konfiguration-inbetriebnahme/22.png)

## Pico E-Ladestation

### WLAN-Verbindung prüfen

Nach der Installation der Pico erscheint in der rechten oberen Ecke ein Symbol, welches Auskunft über die Verbindungsart gibt.

Wenn die Pico mit WLAN verbunden werden soll, ist es ratsam, kurz zu prüfen, ob das Icon einem WLAN-Symbol entspricht und nicht 4G. 

Erscheint das 4G, obwohl die Pico mit WLAN verbunden sein soll, muss man die Pico neu installieren. Dies kann passieren, wenn ein Schritt bei der Installation nicht korrekt durchgeführt wurde, z.B. WLAN-Passwort.

![Inbetriebnahme – Abbildung 23](/img/konfiguration-inbetriebnahme/23.png)

### Pico Konfiguration & Lastmanagement

[Pico Konfiguration](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Multilevel Lastmanagement](/konfiguration/multilevel-lastmanagement) 

![Inbetriebnahme – Abbildung 24](/img/konfiguration-inbetriebnahme/23.png)

## Tipps und Tricks

### Mehrere Geräte in Betrieb nehmen

In diesem Schritt hast du die Möglichkeit, mehrere Zähler gleichzeitig in Betrieb zu nehmen, um die Inbetriebnahme bei vielen Zählern zu beschleunigen.



![Inbetriebnahme – Abbildung 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Ausloggen

1.  Oben links auf die drei Striche und Profil Wählen

2.  Unten Ausloggen auswählen

3.  Ausgeloggt


![Inbetriebnahme – Abbildung 26](/img/konfiguration-inbetriebnahme/26.jpg)

![Inbetriebnahme – Abbildung 27](/img/konfiguration-inbetriebnahme/27.jpg)

### Installation Fehlgeschlagen

Sollte die Installation fehlschlagen und du es erneut versuchen möchtest, schliesse die App bitte vollständig und öffne sie danach wieder. Dadurch wird sichergestellt, dass keine zwischengespeicherten (Cache) Informationen verwendet werden.

## Nächster Schritt

[Weiter zur Ordner- und Zählerkonfiguration](/konfiguration/ordnerkonfiguration)

## FAQ

### Der Internetanbieter wird gewechselt, was muss ich machen?

Wenn die Zähler mit einem technischen WLAN oder/und einem dedizierten Access-Point verbunden sind, wechselt in der Regel die SSID und das Passwort nicht. Dann ist ein Wechsel der Internetanbieter in der Regel kein Problem.

Wenn die SSID und das Passwort von einem privaten WLAN genützt wird, gibt es zwei Möglichkeiten:

- Lösung 1: Auf dem neuen Router ein Gäste-WLAN machen, welches die gleiche SSID und Passwort wie das Alte hat. Anschliessend verbinden sich automatisch die Zähler mit diesem WLAN, welches gleich ist wie das Alte.

- Lösung 2: Jeden Zähler einzeln wieder einlesen, damit lokal auf jedem Zähler die neuen Daten gespeichert werden. Die Installation erfolgt genau gleich wie eine Neuinstallation. Der  Zähler darf unter keinen Umständen gelöscht werden, da ansonsten alle historischen Daten verloren gehen . Bei einer erneuten Installation merkt unsere Cloud-Umgebung, dass die Seriennummer bereits im Konto vorhanden ist und fügt die neuen Werte einfach hinzu.


### Wie kann ich ein Gerät neu starten (reboot)?

Alle Geräte können mit eine Stromunterbruch neu gestartet werden.

3 Phasen Zähler: T1 und T2 gleichzeitig für 10 Sekunden drücken.

Pico: Im Portal oben rechts das Zahnrad wählen, erweiterte Aktionen, Neustart. Funktioniert nur, wenn die Pico online ist.

Kamstrup Module: Das Modul vom Zähler entfernen, 10 Sekunden warten und wieder einstecken.

M-Bus Gateway und 1 Phasen Zähler: Diese Geräte können nur mit einem Stromunterbruch neu gestartet werden.

### Kann ich mein Gerät mit mehreren WiFi-Netzwerken nutzen?

Ja, das smart-me Gerät (ausser [Pico Ladestation](/produkte/pico-ladestation)) speichert bis zu 3 verschiedene WiFi Netzwerke. Du musst es nur einmal bei jedem Netzwerk installieren und danach wählt das Gerät automatisch immer jenes Netzwerk mit der besten Funkverbindung aus.

### Kann ich den Zählerstand auf Null zurücksetzten?

Nein, da unsere Zähler für Abrechnungen verwendet werden, ist es nicht möglich, diese zurückzusetzen.

### Wo wird das WiFi-Passwort gespeichert?

Das WiFi-Passwort wird ausschliesslich auf dem smart-me Gerät gespeichert und niemals an einen Server übertragen 

### Werden die Einstellungen und Zählerstände gespeichert, falls der Strom ausfällt?

Ja, das Gerät speichert alle Einstellungen und Werte bei einem Stromausfall. Sobald die Stromversorgung wiederhergestellt ist, verbindet sich das Gerät automatisch mit dem WiFi und kehrt in den Zustand vor dem Ausfall zurück. 

### Wie kann ich eine neues WiFi hinterlegen ohne die bestehenden Daten zu verlieren?

Um ein weiteres Netzwerk hinzuzufügen, muss das Gerät ordnungsgemäss mit der smart-me App installiert werden. Wird es zuvor nicht aus der Cloud gelöscht, bleiben Energiedaten und Konfigurationseinstellungen erhalten.



### Können die gespeicherten WiFi-Informationen gelöscht werden?

Die WiFi Informationen werden nur auf dem Gerät gespeichert. Das Löschen der Daten kann wie folgt erfolgen:

- 10s lang den Knopf des smart-me Gerätes drücken. Bei pico muss die RIFD Karten, spätestens 15 Minuten nach dem Neustart (Stromlos) hingehalten werden.

- Mit einem Smartphone eine Verbindung mit dem smart-me WiFi herstellen (der Name des WiFi Netzwerkes lautet smart-me\_XXXXXX wobei das X für die Seriennummer des smart-me Gerätes steht)

- Mit einem Browser eine Verbindung mit der IP 192.168.1.1 herstellen.

- Das unerwünschte WLAN wählen, remove drücken und das Gerät neu starten.


### Wie finde ich die MAC-Adresse meines smart-me Geräts raus?

Es gibt keine direkte Möglichkeit, die MAC\-Adresse herauszufinden. Wenn du über ein Professional Lizenz verfügst, kannst du in den erweiterten Einstellungen vom smart-me Gerät DNS aktivieren und die Option Interne IP wählen. Mit einem Ping auf den DNS Name kann die IP ermittelt werden, diese kann dann auf dem Router mit der IP / MAC Tabelle verglichen werden

### Kann das Mesh-Netzwerk deaktiviert werden?

3-Phasen Zähler Telstar und Telstar CT erzeugen ein Mesh Netzwerk. Dieses kann nicht deaktiviert werden.

### Kann ich ein Gerät von einem smart-me Konto zu einem anderen schieben?

- Die historischen Daten können nicht verschoben werden. 

- Das Gerät kann jedoch mit einer Neuinstallation in einem anderen Konto installiert werden.


### Mit welchem Zählerstand wird ein smart-me Zähler ausgeliefert?

0

### Was passiert wenn ich ein Zähler deaktiviere?

Alle Daten, die bereits in der Cloud gespeichert sind, bleiben erhalten. Nach dem Deaktivieren werden keine weiteren Daten mehr abgespeichert. Für deaktivierte Zähler fallen keine Lizenzkosten an.

### Kann auf den smart-me Geräten ein Proxy konfiguriert werden?

Nein
