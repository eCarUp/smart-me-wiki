---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel ist es möglich, Daten aus unserer Cloud direkt einzulesen.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel ist es möglich, Daten aus unserer Cloud direkt einzulesen. Dies eröffnet zum Beispiel die Möglichkeit, Daten aus verschiedenen Accounts in einer Datenbank zusammenzuführen, auszulesen und zu verarbeiten.
In Excel wird dafür der Power Query-Editor verwendet. Mit diesem können HTTP-Abfragen mittels unserer API gemacht werden. Die  möglichen API-Befehle und Testumgebung findest du [hier](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Download Beispieldatei

Die Datei  auf der rechten Seite enthält eine variable Abfrage von Zählerständen eines Meters. Diese Datei kann mit weiteren Zählern ergänzt werden.

Alle nötigen Funktionen stehen bei Excel 0365 oder ab Excel 2016 zur Verfügung.

Um die Beispiel-Datei nutzen zu können, lade sie runter und .. 

1.  Herunterladen der Datei

2.  Aktualisieren der Abfrage Login Daten gemäss Informationen in der Tabelle "Dashboard".


<Video src="" title="Video" />

API\_Test\_ValuesInPast\_Example.xlsx

## Die Verbindung erstellen

### Datenabfrage aus dem Web erstellen

Starte Excel und klicke unter dem Reiter Daten auf Daten abrufen, Aus anderen Quellen, Aus dem Web. 

![Microsoft Excel – Abbildung 1](/img/drittsysteme-microsoft-excel/01.png)

### API-Befehl eintragen

Füge den Befehlslink der API, den du abfragen möchtest, ein.  Im Beispiel ist es der Befehl https://www.smart-me.com/api/Devices/&#123;id&#125; . Wir möchten also alle aktuellen Daten des Gerätes mit der jeweiligen ID auslesen.

Mehr Informationen zum Befehl selbst findest du im Testtool unter obenstehendem [Link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). Dort kannst du auch die ID des von dir gewünschten Gerätes in Erfahrung bringen.

![Microsoft Excel – Abbildung 2](/img/drittsysteme-microsoft-excel/02.png)

### Authentifizierung zum Link (Passwort und Benutzername)

Nun wirst du aufgefordert, die Authentifizierung des jeweiligen Links anzugeben. Es werden der Benutzername und das Passwort des entsprechenden Accounts benötigt.

1.  Wähle den entsprechenden Link

2.  Klicke auf Berechtigungen bearbeiten

3.  Klicke unter Anmeldeinformationen auf Bearbeiten

4.  Gib den Benutzername und das Passwort des Accounts im Tab "Standard" ein


![Microsoft Excel – Abbildung 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Abbildung 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Abbildung 5](/img/drittsysteme-microsoft-excel/05.png)

### Die Daten im Power Query Editor in eine Tabelle konvertieren

Im Anschluss an den Import entsteht im Power Query Editor eine Liste der importierten Daten. Diese Daten müssen nun in eine Tabelle konvertiert werden.



![Microsoft Excel – Abbildung 6](/img/drittsysteme-microsoft-excel/06.png)

### Schliessen und Laden

Nach dem Schliessen und Laden entsteht ein neues Tabellenblatt mit den Informationen der Datenquelle.

![Microsoft Excel – Abbildung 7](/img/drittsysteme-microsoft-excel/07.png)

### Verbindungsabfrage Einstellungen (Intervall und Aktualisierung)

Auf der rechten Seite öffnet sich ein Fenster, das mittels Rechtsklick auf die vorhandene Verbindung weitere Einstellungen zulässt. Hier können vor allem Aktualisierungsintervalle der jeweiligen Verbindung festgelegt werden.
Im Tab Daten können auch Aktualisierungen auf Benutzerbefehl geschehen.

![Microsoft Excel – Abbildung 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Abbildung 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Abbildung 10](/img/drittsysteme-microsoft-excel/10.png)

## Datenabfrage mit Variablen (Zählerstände abfragen mit variablem Datum)

Die Datenabfrage von Vergangenheitsdaten folgt dem gleichen Prinzip wie der Linkaufbau von den aktuellen Daten. Der Hauptunterschied dabei ist, dass Daten mit einer veränderbaren Information (Variable) abgefragt werden müssen.
Damit dies möglich wird, müssen zwei Abfragen gemacht werden:

1.  Abfrage innerhalb der Exceltabelle auf die Variable "Datum".

2.  Abfrage vom Web mit einem passenden API Befehl. Hier passend ist der Befehl [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (Tages-Zählerdaten aus der Vergangenheit)


### Erstellen der Datum-Variable

Wähle im Excel einen Platz aus, wo die Eingabe für das Datum erfolgen soll.  Erstelle dazu eine Tabelle unter Einfügen \--> Tabelle. (Wichtig)

![Microsoft Excel – Abbildung 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Abbildung 12](/img/drittsysteme-microsoft-excel/12.png)

Wähle einen Bereich von 4 Feldern aus, damit jeweils ein Spaltenname und der Text inkl. dem Wert platz finden.

![Microsoft Excel – Abbildung 13](/img/drittsysteme-microsoft-excel/13.png)

### Tabellenname für spätere Programmierung definieren

Damit Power Query später weiss, in welcher Tabelle die Variable zu finden ist, wird dieser mit dem Namen aufgerufen. Damit dies eindeutig ist, vergeben wir einen fixen Namen (hier Datumsauswahl).

![Microsoft Excel – Abbildung 14](/img/drittsysteme-microsoft-excel/14.png)

### Variabelnfeld formatieren (Textfeld)

Damit das Datum später auch verwendet werden kann, muss der Inhalt als Text formatiert werden. Dazu markierst du die Tabelle und wählst oben das Format Text aus.

![Microsoft Excel – Abbildung 15](/img/drittsysteme-microsoft-excel/15.png)

### Die Variable in Power Query abfragen

Nun können wir die Abfrage in Power Query für unsere Variable hinzufügen:

1.  Öffnen Sie Power Query


![Microsoft Excel – Abbildung 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Erstelle eine neue Abfrage in Power Query (Rechtsklick unter Abfragen)
3\. Erstelle eine Leere Abfrage mit dem Namen "Datumsauswahl"



![Microsoft Excel – Abbildung 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Kopiere folgenden Text in den Funktionsblock der Abfrage: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" ist hier der Name der Tabelle, in welcher der Wert der Variable gefunden werden kann.

![Microsoft Excel – Abbildung 18](/img/drittsysteme-microsoft-excel/18.png)

### Variable und Excelwert verlinken

Führe einen Drilldown durch, um das Feld auszuwählen, in dem der veränderbare Parameter steckt:
Feld mit dem Datumswert auswählen --> Rechtsklick --> Drilldown.

Danach steht der Inhalt der Zelle alleine da und hört von nun an auf den Namen "Datumsauswahl".

![Microsoft Excel – Abbildung 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Abbildung 20](/img/drittsysteme-microsoft-excel/20.png)

### Abfrage für die Vergangenheitsdaten erstellen

Erstelle eine neue Abfrage mit Rechtsklick auf den Abfragen-Bereich links. Wähle danach eine Abfrage aus dem Web.

![Microsoft Excel – Abbildung 21](/img/drittsysteme-microsoft-excel/21.png)

Die neue Abfrage enthält nun den Befehl für vergangene Daten und sieht wie folgt aus:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Sie beinhaltet den Pfad der HTTP-Abfrage und am Ende ein Zieldatum. Dieses Zieldatum werden wir später variabel mitgeben. 

Zur Erstellung kann ein fix kodiertes Element mitgegeben werden. Achte darauf, dass zu diesem Datum bereits Daten auf der Cloud existieren.

Das Datum hat folgendes Format: Monat.Tag.Jahr bzw. mm.dd.yyyy

![Microsoft Excel – Abbildung 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Abbildung 23](/img/drittsysteme-microsoft-excel/23.png)

### Die Variable in die Abfrage einbetten

Damit nun das fixe Datum durch unsere Variable ersetzt wird, muss der Funktionsbefehl etwas angepasst werden.

Es ändert sich von

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

zu

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Abbildung 24](/img/drittsysteme-microsoft-excel/24.png)

### Tabelleninhalt an Bedürfnisse anpassen

Nun kann innerhalb des Datensatzes der angezeigte Inhalt umstrukturiert und an das jeweilige Bedürfnis angepasst werden.

In unserem Beispiel möchten wir gern alle Daten mit DeviceId, Datum, Obis-Code und Wert versehen haben.



1.  Den Inhalt in eine Tabelle konvertieren


![Microsoft Excel – Abbildung 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Zeilen und Spalten vertauschen

![Microsoft Excel – Abbildung 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Abbildung 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Erste Zeile als Überschriften verwenden

![Microsoft Excel – Abbildung 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Values -Spalte bearbeiten und Auf neue Zeilen ausweiten

![Microsoft Excel – Abbildung 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Abbildung 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Zusätzliche Zeileninhalte auswählen --> OK.

![Microsoft Excel – Abbildung 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Abbildung 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Schliessen und Laden drücken

![Microsoft Excel – Abbildung 33](/img/drittsysteme-microsoft-excel/33.png)

### Obis Codes interpretieren und zuordnen

Die Obis-Codes sind standardisiert. Um diese zuordnen zu können kann die Excelliste mit den Obis-Codes mit SVERWEIS abgeglichen werden.
Du erhältst so den Namen des Obis Codes und die Einheit der Werte.

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
