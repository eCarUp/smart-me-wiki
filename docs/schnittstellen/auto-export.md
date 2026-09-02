---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'smart-me bietet die Möglichkeit, Messdaten automatisch in ein anderes System zu exportieren.'
sidebar_label: 'Auto Export'
---
smart-me bietet die Möglichkeit, Messdaten automatisch in ein anderes System zu exportieren.

### Voraussetzungen

Um Auto Export nutzen zu können, musst du eine smart-me Professional Lizenz haben.

![Auto Export – Abbildung 1](/img/schnittstellen-auto-export/01.png)

## Funktionen für Goldpartner

Ist ein Konto einem Goldpartnerpartner zugeordnet, wird dem Benutzer zusätzlich zu seinen eigenen "Upload Arten" und "Export Formate" die bereits definierten "Upload Arten" und "Export Formate" des Goldpartnerpartner angezeigt. So müssen z. B. die FTP-Einstellungen nur im Partner Account vorgenommen werden und sind nicht sicht\- und änderbar für den normalen Benutzer. 

Zur besseren Kennzeichnung sind die vererbten Einstellungen blau hinterlegt.

![Auto Export – Abbildung 2](/img/schnittstellen-auto-export/02.jpg)

## Massenmuation (Export nochmals anstossen)

Über eine Massenmutation können fin smart-me für mehrere Geräte gleichzeitig neu angestossen werden.

So funktioniert die Datumseingabe:

Bei der Mutation muss das Datum des letzten erfolgreichen Exports eingetragen werden. Das System berechnet von dort aus automatisch den nächsten Zeitraum.

Beispiel (Täglicher Export):

- Du trägst das Datum 03.02.2026 ein.

- Das System geht davon aus: Der Export am 03.02.2026 war in Ordnung.

- Das System startet nun den Export für den 04.02.2026 (Inhalt: Daten vom 03.02.2026 von 00:00 bis 23:59 Uhr).


Dauer der Verarbeitung beachten: Die Neuerstellung von Exportdateien braucht Zeit. Als Richtwert gelten ca. 45 Minuten pro einzelner Datei.

- Täglicher Export: Ein ganzer Monat (30 Tage = 30 Dateien) dauert etwa 22 Stunden.

- Wöchentlicher Export: Ein ganzer Monat (4 Wochen = 4 Dateien) dauert etwa 3 Stunden.


![Auto Export – Abbildung 3](/img/schnittstellen-auto-export/03.png)

## Massenmuation (Messpunkt ID ersetzten)

Über die Massenmutation können bestehende Messpunkt-IDs schnell und fehlerfrei durch neue ersetzt werden.

Vorgehen:

- Erstelle ein eine einfache CSV-Datei.

- Jede Zeile steht für einen Messpunkt.

- Die Datei muss den alten und den neuen Namen der Messpunkt-ID enthalten, getrennt durch ein Semikolon (;). Beispiel: Alte\_ID\_123;Neue\_ID\_456

- Laden Sie die CSV-Datei hoch. Die IDs werden direkt im System überschrieben.


Hinweis: Wenn ein Messpunkt nicht in der CSV-Datei steht, wird er auch nicht verändert. Dadurch ist es problemlos möglich, nur einen Teilersatz (z. B. nur 5 von 50 Messpunkten in einem Konto) durchzuführen.

![Auto Export – Abbildung 4](/img/schnittstellen-auto-export/04.png)

## Upload Art

Die Upload Art definiert wie die Daten auf das externe System geladen werden sollen. Aktuell sind folgende Arten unterstützt:

FTP: FTP Upload (unverschlüsselt)

FTPs: Verschlüsselter FTP Upload

- Der Port kann explizit mit einem : angegeben werden. z. B. ftp.smart-com:990


sFTP (with username and password): Verschlüsselter FTP Upload.

- Username und Passwort


sFTP (mit Key File): Verschlüsselter FTP Upload. Anstelle eines Passwortes wird eine Schlüsseldatei verwendet.

- Beispiel für die Erstellung eines sFTP Key File mit openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Beispiel: [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)




![Auto Export – Abbildung 5](/img/schnittstellen-auto-export/05.jpg)

## Export Format

Das Export Format definiert das Dateiformat für den Export. Aktuell sind folgende Formate unterstützt:

CSV: Format ist definiert (CSV), jedoch ist der Inhalt nicht genormt.

- Rudimentärer Export in das CSV-Format. Der Export von Meterwerten wird mittels Obis Codes definiert. Details siehe unteren Abschnitt.


IS-E: Export in ein innosolv-Energie-System der Innosolv AG

- Zählerstand

- Virtuelle Zählerstand (Wenn im smart-me berechnet und der Ordner gewählt wird)


IS-E Vorschub / IS-E feed: Export in ein innosolv-Energie-System der Innosolv AG

- Verbrauch

- Virtueller Verbrauch (Wenn im smart-me berechnet und der Ordner gewählt wird)


IS-E peak export

- Weist spitzenleistung aus.

- Hinweis: 1) Bei der Zuordnung Ordner mit virtuellen Tarifen wählen und 2) Bei der Zuordnung Zu exportierenden Messwerten "Virtuelle Tarife (nur IS-E)" wählen 3) Beim Export Format jeweils die Virtuellen Tarifnummern angeben (Export Tariffs (peak)) welche im smart-me Billing vorliegen.


IS-E Zeitreihen / IS-E Load profile: Export in ein innosolv-Energie-System der Innosolv AG System der Innosolv AG

- Zeitreihenmodul (Verbrauch 15 Minuten)

    - Only basic data (1 / 0)

        - 1 nur kWh

        - 0 kWh und kvar

        - leer kWh und kvar


mscons 2.2e: mscons (Metered Services Consumption report message) in der Version 2.2e.

Hinweis: Bitte dieses Format bei encontrol verwenden.

- Verbrauch


mscons 2.4a: mscons (Metered Services Consumption report message) in der Version 2.4a

- Verbrauch


![Auto Export – Abbildung 6](/img/schnittstellen-auto-export/06.jpg)

### Blindenergie mit is-e load profile

"Only basic data" auf 0 setzten um die Blindenergie zu exportieren

![Auto Export – Abbildung 7](/img/schnittstellen-auto-export/07.jpg)

## Zuordnung

Der automatische Export besteht aus verschiedenen Konfigurationen:

Messpunkt ID: Definiert die ID die diesem Messpunkt zugeordnet werden soll. Diese ID wird z. B. im mscons Export Format verwendet.

Zähler oder Ordner: Der Zähler oder Ordner der exportiert werden soll.

Export Format: Definiert das Format das für den Export verwendet werden kann. Das Export Format wird unter dem Menüpunkt "Export Format" definiert.

Upload Art: Gibt an, wie die Daten in das externe System geladen werden sollen. Die Upload Art wird unter dem Menüpunkt "Upload Art" definiert.

Export Intervall: Gibt an, in welchem Intervall die Daten exportiert werden sollen.

Export Auslöser: Definiert den Auslöser des Exports.

- "Wenn alle MESSDATEN vorhanden sind", löst aus sobald alle Daten vorhanden sind. Sind diese nie vollständig (z.B. Da der Startwert vor der Installation war) wird dieser nie auslösen.

-  "12h nach dem Enddatum", löst 12 Stunden später aus, unabhängig ob alle Daten vorhanden sind oder nicht.

- Hinweis: Auto-Export startet zwischen 0:00 bis 1:00 und kann bis zu 3h gehen.


Start Datum nächster Export: Das Startdatum für den nächsten Export der Daten. Liegt das Datum in der Vergangenheit, werden bis zum aktuellen Datum alle Daten exportiert.

Zu exportierende Messwerte : Falls du einen Ordner mit virtuellen Tarifen auswählst, kannst du auswählen, ob du die normalen Messwerte oder die virtuellen Tarife exportieren möchtest.

![Auto Export – Abbildung 8](/img/schnittstellen-auto-export/08.png)

### Virtuelle Tarife exportieren

Falls du virtuelle Tarife im smart-me Billing eingerichtet hast, kannst du diese in das IS-E exportieren. 

Einrichten

1.  Erstelle im smart-me Billing die virtuellen Tarife.  Beachte, dass du die Tarifnummer des virtuellen Tarifs korrekt setzt. Diese wird bei Export als "Tarif" im Obis Code kodiert. Beispiel: Tarifnummer 3 ergibt Obis: (IS-E Zählerstände) 1-5:1.8.3 (1-5:1.8.&lt;Tarifnummer>), (IS-E Vorschub) 1-5:1.9.3 (1-5:1.9.&lt;Tarifnummer>)

2.  Wähle im "Auto Export" unter "Zuordnung" den Ordner mit den Virtuellen Tarifen aus und wähle unter "Zu exportierende Messwerte" "Virtuelle Tarife" aus. 


![Auto Export – Abbildung 9](/img/schnittstellen-auto-export/09.png)

## Test Files

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing): Die CSV Datei kann individuell konfiguriert werden. Das Testfile wurde mit der Konfiguration  «1-0:1.8.0\*255;1-0:1.8.1\*255;1-0:1.8.2\*255;1-0:2.8.0\*255;1-0:2.8.1\*255;1-0:2.8.2\*255;» generiert.

- [IS-E Peak export](https://drive.google.com/file/d/1isUBF_2xUpr6h8AeRtkupJvFkuMMSJM4/view?usp=sharing) 


Obis Codes

OBIS Codes werden verwendet, um einen (Zähler-)Wert zu beschreiben. 

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Tipp zur Entschlüsselung: Auf dieser [Website](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) kannst du die Systematik der Codierung nachlesen. Wenn du dort auf ein Medium klickst, siehst du für was die Ziffern des Codes jeweils stehen. 

![Auto Export – Abbildung 10](/img/schnittstellen-auto-export/10.png)

Das csv Test File wurde mit obiger Konfiguration exportiert.

## Unterstützte Obis Code

OBIS Codes werden verwendet, um einen (Zähler-)Wert zu beschreiben: [Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Tipp zur Entschlüsselung: Auf dieser [Website](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) kannst du die Systematik der Codierung nachlesen. Wenn du dort auf ein Medium klickst, siehst du für was die Ziffern des Codes jeweils stehen. 

### Obis Code IS-E

1-1:1.8.0: Active Energy Total Import

1-1:1.8.1:  Active Energy Tariff 1 Import

1-1:1.8.2:  Active Energy Tariff 2 Import

1-1:2.8.0:  Active Energy Total Export

1-1:2.8.1:  Active Energy Tariff 1 Export

1-1:2.8.2:  Active Energy Tariff 2 Export

1-1:5.8.0:  Reactive Energy Q1

1-1:6.8.0:  Reactive Energy Q2

1-1:7.8.0:  Reactive Energy Q3

1-1:8.8.0:  Reactive Energy Q4

5-1:1.0.0: Cold (Energie)

6-1:1.0.0: Heat (Energie)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)

### Obis Code mscons

1-1:1.29.0\*255: Active Energy Total Import (load profile)

1-1:2.29.0\*255:  Active Energy Total Export (load profile)

1-1:5.29.0\*255:  Reactive Energy Q1 (load profile)

1-1:6.29.0\*255:  Reactive Energy Q2 (load profile)

1-1:7.29.0\*255:  Reactive Energy Q3 (load profile)

1-1:8.29.0\*255:  Reactive Energy Q4 (load profile)

5-1:1.29.0\*255: Cold (load profile)

6-1:1.29.0\*255: Heat (load profile)

8-1:1.29.0\*255: Cold water (load profile)

9-1:1.29.0\*255: Hot water (load profile)

### Obis Code CSV

1-0:1.8.0\*255: Active Energy Total Import

1-0:1.8.1\*255: Active Energy Tariff 1 Import

1-0:1.8.2\*255: Active Energy Tariff 2 Import

1-0:2.8.0\*255: Active Energy Total Export

1-0:2.8.1\*255: Active Energy Tariff 1 Export

1-0:2.8.2\*255: Active Energy Tariff 2 Export

1-1:5.8.0\*255: Reactive Energy Q1

1-1:6.8.0\*255: Reactive Energy Q2

1-1:7.8.0\*255: Reactive Energy Q3

1-1:8.8.0\*255: Reactive Energy Q4

6-0:1.0.0\*255: Heat Energy

5-0:1.0.0\*255: Cold Energy

8-0:1.0.0\*255: Cold Water Volume

9-0:1.0.0\*255: Hot Water Volume
