---
title: 'Kamstrup Modul'
slug: '/produkte/kamstrup-modul'
description: 'smart-me Modul für die Kundenschnittstelle des Kamstrup Omnipower Zählers.'
sidebar_label: 'Kamstrup Modul'
---
smart-me Modul für die Kundenschnittstelle des Kamstrup Omnipower Zählers.

Das smart-me Kamstrup Modul bringt Stromzähler in die Cloud. Deine Kunden erhalten genaue Analysen, Visualisierungen und ein präzises Monitoring des eigenen Energieverbrauchs. Es wird keine zusätzliche Hardware benötigt. Das smart-me Kamstrup Modul nutzt das bestehende WiFi Netzwerk und verbindet sich direkt mit der smart-me Cloud.

Abkündigungsinformation in der Schweiz 08.08.2023 versendet (Partnernetzwerk).

Verkauf in der Schweiz wird per 31.12.2023 eingestellt, Support und Cloud-Unterstützung weiter gewährleistet.

Verkauf ausserhalb der Schweiz wurde am 1.1.2023 eingestellt, Support und Cloud-Support sind weiterhin gewährleistet.

![Kamstrup Modul – Abbildung 1](/img/produkte-kamstrup-modul/01.jpg)

## Kamstrup Modul LED Abfolgen mit Fehlerbeschreibung

Die meisten Fehlerquellen bei der Installation von einem Kamstrup Modul können mit der LED-Abfolge eruiert werden:

Kapitel

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LED leuchten nicht

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN wird nicht erstellt

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED schnell blinkend

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED Lauflicht

<Video src="" title="Video" />

## Funktionen

- Verschiedene Diagramme und Auswertungen

- Online Firmware Update

- Integrierter Datenlogger für einen Monat

- Nutzbar als Sensor zur Steuerung von Geräten

- Verschlüsselte WLAN Verbindung direkt zur smart-me Cloud

- Echtzeit Visualisierung der Leistung, des Zählerstandes, der Spannung und des Stroms in der App und im Web. Ohne Pro Lizenz ist das Ausleseintervall auf 60 Sekunden begrenzt.

- Umfassendes Energiemanagement: automatische Rechnungsstellung, Steuerung, Optimierung, und Alarme

- Einfache [Installation](/konfiguration/inbetriebnahme) mit der smart-me App für [Android](https://play.google.com/store/apps/details?id=com.smart_me) und [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP ab Firmware Version 8.0 (Info: Das Modul kann ohne durchgängige Internetverbindung auch keine stabile Modbus-Kommunikation anbieten) 


### Wie kann ich den Korrekturfaktor auf der Cloud einstellen?

Um den Korrekturfaktor eines Moduls oder Zählers einzustellen, gehen Sie bitte folgendermassen vor:

1.  Logge dich im smart-me Portal ein 

2.  Klicke auf konfigurieren

3.  Klicke auf Zähler/Ordner-Konfiguration

4.  Wähle den entsprechenden Zähler aus

5.  Klicke auf Knoten editieren (oben auf grünen Knopf)

6.  Gib den Korrekturwert bei Wert Korrektur ein. (Achtung: nur bei Wert Korrektur, nicht bei Überordner Wert Korrektur)

7.  Drücke auf Speichern.


### Kamstrup Modul Entschlüsselung

[Video Anleitung](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  Oben rechts auf das Zahnradsymbol (Einstellungen) 

2.  Editieren 

3.  Zählerschlüssel eingeben


Achtung: Das Kamstrup Modul braucht den Verschlüsselungspin des Zählers, um die Daten auslesen zu können. Über diesen verfügt ausschliesslich der Energieversorger.

### Wie wird der Korrekturfaktor berechnet?

1.  Achtung: Dieser Text bezieht sich nicht auf das Wandlerverhältnis des Telstar CT, sondern auf den Korrekturfaktor in der Zähler-/Ordnerkonfiguration. Der Korrekturfaktor wird hauptsächlich beim Einsatz von Kamstrup-Zählern in Kombination mit Wandlern benötigt. 

2.  Beispiel mit Wandler 600:5:
    Wird ein Wandler mit einem Verhältnis von 600:5 eingesetzt, muss der Wert um einen Faktor von 600 : 5 = 120 angepasst werden. Der Korrekturfaktor muss in der smart-me Cloud in Prozent angegeben werden. Daraus berechnet sich also ein Korrekturfaktor von 120 \* 100 % = 12'000 %

3.  Beispiel mit Wandler 600:5 und Voreinstellung des Kamstrup-Zählers mit 100:5:
    Kamstrup-Zähler haben teilweise ein voreingestelltes Wandlerverhältnis von 100:5. Wird an diesen Zähler ein Wandler mit einem Verhältnis von 600:5 angeschlossen, lässt sich der Korrekturfaktor folgendermassen berechnen:
    Korrekturfaktor des Kamstrup-Zählers: 100 : 5 = 20
    Korrekturfaktor für den Wandler: 600 : 5 = 120
    Gesamter Korrekturfaktor: 120 / 20 = 6
    Gesamter Korrekturfaktor in Prozent: 6 \* 100 % = 600 %
    In diesem Fall müsste also ein Korrekturfaktor von 600 % im smart-me Portal eingestellt werden. 


### Wie oft werden Daten übermittelt

Dies kann für jedes Gerät manuell eingestellt werden. 

- Das Intervall kann bis zu 1 Sekunden heruntergesetzt werden.


Dies kann wie folgt eingestellt werden

- Anmeldung

- Zähler auswählen

- Zahnrad oben rechts

- Allgemeine Einstellungen

- Upload-Intervall einstellen (&lt;60 Sekunden nur mit smart-me Professional möglich)

- Einstellungen speichern


## Zähler offline

- Seriennummer startet mit 92\*: Kamstrup


Allgemeine Informationen sind unter [Zähler offline](/stoerungsbehebung/zaehler-offline) zu finden.

Zählerspezifische Angaben sind sind hier zu finden

### Zähler neu starten

- Dies ist nur zur Info wie es gemacht wird.

- Ablauf: Modul aus dem Zähler entfernen. Warten bis keine LED mehr leuchtet. Modul wieder im Zähler einschieben.


### Wie erkenne ich den Empfangszustand von einem Zähler

- Verbunden mit dem WLAN: orange LED Links und gründe LED Rechst leuchten dauerhaft.

- Kann sich mit dem WLAN nicht verbinden: to be defined

- Zähler erzeugt ein lokales WLAN: orange LED links leuchten dauerhaft und. Rote LED in der Mitte und grüne LED rechst leuchten abwechseln im 0.5 Sekunden Takt.


### Prüfung bei der Ankunft

Folgend Punkte können bei der Ankunft geprüft werden. Sollte bereits etwas am Zähler gemacht worden sein, ist wichtig, dass am Zähler während mindestens 5 Minuten nichts gemacht wird. Es ist auch möglich, ein Video vom Zähler vom Kunden vor Ort zu verlangen (30 Sekunden) um die Situation besser zu beurteilen.

- Mit dem Video den Zustand prüfen: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) oder [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Kapitel: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LED leuchten nicht

    - Kapitel: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN wird nicht erstellt

    - Kapitel: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED schnell blinkend

    - Kapitel: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED Lauflicht


## Upload Intervall verändern

- im smart-me Portal einloggen

- Zähler wählen

- Oben rechts das Zahnrad wählen

- Allgemeine Einstellungen


![Kamstrup Modul – Abbildung 2](/img/produkte-kamstrup-modul/02.png)

## Nachfolgerprodukt

smart-me bietet kein Nachfolgeprodukt für Kamstrup Zähler an. 

Wenn du einen smart-me ZEV (nur Schweiz) betreibst und eine neue Lösung für deine Messung (z.B. HAK) benötigst, kannst du uns gerne kontaktieren, wir bieten unseren [Projektpartnern](https://web.smart-me.com/projektpartner/) vorteilhafte Konditionen für den Austausch an. (Sonderangebot gültig bis 30.06.2025)

Wenn im privaten Bereich Messungen für Monitoring, Hausautomation usw. durchgeführt werden, kann der [Telstar 80A](/produkte/telstar) oder [Telstar CT](/produkte/Telstar-CT) jederzeit installiert werden. Wenn du eine Lösung mit deinem vorhandenen Kamstrup Zähler suchst, empfehlen wir dir einen Blick auf diese Seite zu werfen. [https://gplug.ch/](https://gplug.ch/) (gPlug Vorbehalt: Beim Kamstrup smart-me Modul ist zu beachten, dass eine undokumentierte Funktion der Kundenschnittstelle (CII) verwendet wird. Im Gegensatz dazu verwendet der gPlugK die öffentlich veröffentlichte CII. Daher kann es vorkommen, dass der gPlugK an einem Omnipower nicht funktioniert, obwohl das smart-me Produkt damit funktioniert. Dieses Problem kann teilweise durch eine Änderung der Fernkonfiguration durch den Verteilnetzbetreiber gelöst werden.

## Ungültiger Zähler Schlüssel (CKW)



Problem

- Kamstrup Modul ist offline mit der Fehlermeldung Ungültiger Zähler Schlüssel


Lösung

Die Ursache des Problems ist seit dem 14.5.2025 13:43 bekannt: Im Zuge einer Systemwartung der CKW wurden aus versehen alle Schlüssel der Kamstrup Zähler erneuert und die vorherigen ungültig.

Als Lösung musst du der CKW ein Mail an [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) senden mit der Zählernummer (Siehe Bild rechts unten). CKW sendet dir dann einen neuen Schlüssel.

![Kamstrup Modul – Abbildung 3](/img/produkte-kamstrup-modul/03.png)

![Kamstrup Modul – Abbildung 4](/img/produkte-kamstrup-modul/04.png)

## Downloads

Datenblatt

[Englisch](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Technische Dokumente

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

### In welchem Intervall senden die Zähler Daten?

- Alle 15 Minuten, also um xx:00:00 xx:15:00, xx:30:00 und xx:45:00. Hiermit werden die nötigen Daten für den Lastgang gesendet. Diese Daten werden im Fall eines Verbindungsunterbruchs lokal gespeichert und nachgesendet.

- Zusätzlich dazu kann eine individuelle Konfiguration vorgenommen werden:

    - Mit Basic oder Limited Lizenzen: Max. 1x pro Minute.

    - Mit Pro-Lizenzierung: Max. 1x pro Sekunde
