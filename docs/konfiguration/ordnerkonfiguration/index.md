---
title: 'Zähler- und Ordnerkonfiguration'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video Anleitung Ordner erstellen und Zähler zuordnen'
sidebar_label: 'Ordnerkonfiguration'
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Ordnerkonfiguration" />

Video Anleitung Ordner erstellen und Zähler zuordnen

## Schritt für Schritt Anleitung

### Navigation zum Bereich Zähler und Ordnerkonfiguration

1.  Logge dich auf der [smart-me Webseite](https://web.smart-me.com/) ein.

2.  Navigiere links im Menü zu "Zähler- und Ordnerkonfiguration"


![Zähler- und Ordnerkonfiguration – Abbildung 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Funktionsbeschreibung der Aktionen

![Zähler- und Ordnerkonfiguration – Abbildung 2](/img/konfiguration-ordnerkonfiguration/02.png)

Knoten Hinzufügen:

Fügt einen Knoten hinzu mit einem Namen und einem frei Wählbaren Symbol.

Der Name hat Einfluss auf die Reihenfolge in welcher der Knoten im Baum angezeigt wird. 

1.  Ordnung nach Zahlen

2.  Ordnung nach Alphabet


Ordner Knoten Editieren 

Erlaubt Änderungen am Knoten Namen, Symbol und Unterordnung.



Zähler Knoten editieren

Name:  Lege den Namen des Zählers fest.
Beschreibung:
Füge optional eine Beschreibung für den Zähler hinzu.
Wert Korrektur: 
Korrigiert Cloudseitig den Messwert des Zählers. (Lageberechnungen)
Überordner Wert Korrektur:
Definiert Prozentual wie viel vom Messwert im übergeordneten Ordner summiert werden soll.
Zähler aktiv:
Aktiviere oder deaktiviere einen Zähler um Lizenzen zu sparen. Deaktivierte Zähler zeigen keine Daten mehr. Weitere Informationen zu deaktivierten Zählern findest du in unseren FAQ unter [Wie deaktiviere ich meinen Zähler?](/#wie-deaktiviere-ich-meinen-zähler)

Um mehrere Zähler gleichzeitig zu aktivieren oder deaktivieren, kannst du diese in der Zähler- / Ordnerkonfiguration in einen Ordner schieben, diesen rechts-klicken und eine Massenaktion wählen. 

![Zähler deaktvieren](/img/konfiguration-ordnerkonfiguration/03.jpg)

Knoten Löschen

Löscht den ausgewählten Knoten oder Zählerpunkt aus dem Baum. 

Zähler fallen dann zurück auf die Linke Seite als nicht zugeordneter Zähler.

![Zähler- und Ordnerkonfiguration – Abbildung 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Zähler beschriften

- Alle Zähler müssen im entsprechenden Account installiert sein. [Inbetriebnahme](/konfiguration/inbetriebnahme) 

- Alle Zähler müssen beschriftet werden. Unsere Vorschläge für die Zählerbezeichnunge 

    - Nutzeinheit Zählernummer (z.B. WHG 1 6352415)

    - Medium Nutzeinheit Zählernummer (z.B. Wärme WHG 1)


![Zähler- und Ordnerkonfiguration – Abbildung 5](/img/konfiguration-ordnerkonfiguration/05.png)

### Kaltwasserzähler umwandeln zu Warmwasserzählern (falls nötig)

Gewisse M-Bus Zähler Hersteller geben bei der Datenübermittlung an, dass es sich um ein Kaltwasserzähler handelt. Dies, obwohl es ein Warmwasserzähler sein sollte. In diesem Fall muss der Zähler Typ im smart-me übersteuert werden.

- Navigiere zum Dashboard

- Zähler wählen im Menu Dashboard

- Zahnrad oben Rechts wählen

- Erweiterte Einstellungen

- Geräte Type verändern.

- Speichern


Hinweis: Diese Anpassung führt zu einer Unterstützung im smart-me Billing. Der Auto-Export für Energieversorger wird damit nicht verändert.

Hinweis: Diese Manipulation ist mit Wärme- und Kältezähler aus technischen Gründen nicht möglich.

![Zähler- und Ordnerkonfiguration – Abbildung 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Ordnerstrukturen und deren Einfluss auf Folgeprozesse

Das aktuelle System erlaubt eine automatisierte Abrechnungserstellung von Elektrizität. Damit dies gelingt muss Wärme und Wasser vom Strom getrennt bleiben. Trotzdem sind Mischsysteme möglich um Aufwand bei den Mieterspiegeln zu sparen, leider geht damit aber die Automatisierung der Rechnungserstellung verloren.

Bei Systemen mit mehreren Heizungen, ist eine Trennung in mehrere Liegenschaften aber unvermeidlich.

Jede individuelle erstellte Liegenschaft ist grundsätzlich in der Lage 1x Strom und 1x Wärme/Wasser abzubilden.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Ordnerkonfiguration" />

### Grundlagen der Baumstruktur und Knoten erstellen

Um ein Gebäude für die Abrechnung bereitzumachen, müssen die passenden Liegenschaften und Abrechnungseinheiten erstellt werden.

Grundlegende Ordnerstruktur jeder individuellen Liegenschaft

Die grundlegende Struktur für jede Energieform und jedes Gebäude besteht aus zwei grundlegenden Knoten und multiplen Subknoten:

- Liegenschaft (späteres Konfiguration einer Abrechnung)

    - -   Abrechnungseinheit 1 der Liegenschaft (Wohnung oder Räume)

            - -   Wohnungszähler (100% Anteile)

        - Abrechnungseinheit 2 der Liegenschaft (Wohnung oder Räume)

        - ...

- Technische Zähler (Sammlung von nicht direkt abgerechneter Zählerpunkte)
    Hier dürfen beliebig viele Unterordner zur strukturierung entstehen. 

    - -   -   Bilanzzähler

            - Solaranlagenzähler

            - Allgemeinzähler die Prozentual verteilt werden auf Abrechnungseinheiten

            - Wärmezähler die Prozentual verteilt werden auf Abrechnungseinheiten

            - Wasserzähler die Prozentual verteilt werden auf Abrechnungseinheiten


![Zähler- und Ordnerkonfiguration – Abbildung 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Nächster Schritt: Erstelle deine Struktur für dein Projekt

Wähle nun anhand deines Projektes welcher Anleitung du folgen möchtest.

[Nur Strom](/konfiguration/ordnerkonfiguration/nur-strom)

[Strom und eine Heizung](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Strom und mehrere Heizungen](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Zusatz Informationen

### Automatisches Erstellen von Ordnern mit CSV Dateien

smart-me bietet die Möglichkeit, das Erstellen von Ordnern, Zuweisungen und Umbenennen von Zählern mittels einer CSV-Datei zu automatisieren. Für diese Funktion ist ein smart-me Professional Abo notwendig.

CSV-Dateien enthalten tabellarische Daten, die in Textform gespeichert sind. Sie können mit einem Text-Editor (z. B. notepad++) bearbeitet werden.

Achtung: bereits bestehende Ordner werden durch das Verwenden dieser Funktion gelöscht. Das bedeutet, sämtliche Funktionen die mit diesen Ordnern verwendet wurden, funktionieren nicht mehr (z. B. Wenn/Dann-Aktionen, smart-me billing Konfigurationen usw.). 



<Video src="YQVcTxPgdzM" title="YouTube Video, Erstellung von Ordnern mittels csv Datei" />

![Zähler- und Ordnerkonfiguration – Abbildung 8](/img/konfiguration-ordnerkonfiguration/08.png)

Folgende Spalten (Reihenfolge nicht ändern) sind in einer Konfigurations-CSV-Datei enthalten:

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" title="Spreadsheet, wiki 2.0 Tabellen" />

wiki 2.0 Tabellen

Die Trennzeichen ";" und "//" dürfen nicht in Namen eingesetzt werden. Sie sind für das Trennen von Spalten und Ordnern in Pfaden reserviert.

Wenn die 4 Spalten "MeterPointId", "ExportFormat", "UploadType" und "ExportInterval" vorhanden sind, wird der Zähler zusätzlich für den Auto Export registriert.

Eine Beispiel-Konfiguration ohne Auto Export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

Eine Beispiel-Konfiguration mit Auto Export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Bearbeitung von CSV-Dateien in Excel

Excel unterstützt das Bearbeiten von CSV-Dateien ebenfalls. Dabei gibt es zwei Punkte zu beachten:

1.  Es muss verhindert werden, dass Excel die Meter-Seriennummer rundet oder in Exponentialform darstellt (z. B. indem man in Excel Zahlen als Text behandelt.)

2.  Die CSV-Datei muss im UTF-8 Zeichensatz vorliegen. Excel stellt dabei Umlaute nicht richtig dar. In einem Text-Editor (z.B. notepad++) werden diese Zeichen jedoch korrekt dargestellt.


![Zähler- und Ordnerkonfiguration – Abbildung 9](/img/konfiguration-ordnerkonfiguration/09.png)

Der empfohlene Arbeitsablauf sieht dabei wie folgt aus:

1.  Logge dich auf der [smart-me Webseite](https://web.smart-me.com/login/) ein.

2.  Klicke oben rechts auf Konfiguration

3.  Klicke auf Zähler / Ordner Konfiguration

4.  Klicke auf Knoten Konfiguration über CSV

5.  Klicke auf Download Knoten Konfiguration, um die aktuelle Konfiguration als CSV-Datei runterzuladen

6.  Bearbeite die Konfiguration

7.  Überprüfe die Konfiguration in einem Text-Editor mit Unterstützung für den UTF-8 Zeichensatz, ob Meter-Seriennummern und Namen korrekt dargestellt werden

8.  Klicke auf Durchsuchen und wähle die bearbeitete CSV-Datei aus

9.  Klicke auf Upload Knoten Konfiguration um die Konfiguration anzuwenden
    Vorsicht: die resultierenden Änderungen können nicht rückgängig gemacht werden
