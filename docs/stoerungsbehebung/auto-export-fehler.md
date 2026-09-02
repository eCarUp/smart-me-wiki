---
title: 'Auto Export Fehler'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'In diesem Abschnitt werden bekannte Fehlermeldungen im Zusammenhang mit dem Auto-Export und mögliche Lösungsansätze beschrieben.'
sidebar_label: 'Auto Export Fehler'
---
In diesem Abschnitt werden bekannte Fehlermeldungen im Zusammenhang mit dem Auto-Export und mögliche Lösungsansätze beschrieben.

## Allgemein

Hier wird die Konfiguration des Auto-Exports beschrieben: [Auto Export](/schnittstellen/auto-export) 

Wenn der Auto-Export erfolgreich war, kann unter Konfiguration --> Auto-Export --> Zuordnung für jede Messstelle der Status überprüft werden (auf der rechten Seite).

Um die Anzeige des Exportstatus zu aktualisieren, muss auf der linken Seite auf das Menü Auto Export geklickt werden.

Unser System prüft alle 10 Minuten, ob ein Job im Rückstand ist.

![Auto Export Fehler – Abbildung 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Status

Der Status gibt jeweils Auskunft über den Status des Exports

- OK: Letzter Export erfolgreich


![Auto Export Fehler – Abbildung 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problem 1: Datum liegt in der Zukunft

- Das Datum liegt in der Zukunft


Lösung:

- Warten, bis das eingestellte Datum vollständig abgelaufen ist.


Problem 2: Warten

- Das System hat seit der Erstellung / letzten Änderung der Zuordnung noch keinen erfolgreichen Export durchgeführt.


Lösung:

- 15 Minuten warten. Danach wird entweder OK oder eine Fehlermeldung angezeigt.


### Meter 'xxx' is missing data

Problem:

- Von diesem Tag gibt es keine Daten.


Lösung:

- Im Menu Schnittstellen / Automatische Export

- Sich das Datum vom Letzten Export merken.

- Im Menu Dashboard

- Station wählen

- Report

- Datum von auf "Letzen Export" aus dem AutoExport setzen

- Datum bis auf "Letzen Export" aus dem AutoExport setzen

- Sich das ältestes Datum bei Elektrizität Zeitspanne merken.

- Im Menu Schnittstellen / Automatische Export

- Station wählen 

- Editieren

- Letzer Export auf "ältestes Datum bei Elektrizität Zeitspanne" +1 setzten. 

- Es ist wichtig das Datum + 1 zu setzten, da wir nur ganze Tage exportieren können.

- Bis zu 45 Minuten warten, bis der Export den Status aktualisiert.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problem 1: Zähler offline

- Messpunkt ist offline und liefert keine Daten mehr. 


Lösung

- Der Messpunkt muss wieder online gebracht werden.

- Danach wird der Auto-Export wieder automatisch gestartet.


Problem 2: Daten eines ganzen Tages fehlen

- Der Messpunkt hat nicht alle Daten für den Zeitraum zwischen letztem Export und nächstem Export. z.B. weil der Messpunkt am 2.3.2024 um 12h37 installiert wurde, kann kein Export für den 2.3.2024 durchgeführt werden, da dieser unvollständig ist.


Lösung

- (optional) Manuelle Ablesung im nachgelagerten System, z.B. EDM, damit der Tag vollständig erfasst wird. (Die Ablesung kann z.B. mit einem Report in der Hauptübersicht von smart-me gemacht werden).

- Messpunkt bearbeiten und Letzter Export auf das nächste Datum setzen.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problem:

- Messpunkt ID hat links ein oder mehrere Leerzeichen


Lösung:

- Leerzeichen löschen und speichern.


![Auto Export Fehler – Abbildung 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problem 1: Key File ist nicht erfasst.

- Key File ist nicht korrekt


Lösung 1

- Sicherstellen, dass das Key File Gemäss [Auto Export](/schnittstellen/auto-export) --> Upload Art korrekt konfiguriert ist.

- Prüfen ob das erzeugte Key File wie folgt beginnt:


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Auto Export Fehler – Abbildung 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problem: Smart-me hat keine Berechtigung in den agegebenen Path zu schreiben.

Lösung: Berechtigungen erteilen.

Problem 2: Speziallfall beim Einsatz von MOVEit (Stand 8.7.2024: #32171)

- Verwenden Sie die "key file", die mit den beiden openssl-Befehlen erstellt wurde. [Auto Export](/schnittstellen/auto-export) -->  Upload Art

- Eine erste Verbindung herstellen, die fehlschlägt (Rückgabe eines ungültigen Zertifikatsfehlers).

- In meiner Software "MOVEit" erhalte ich eine Meldung (grün im Bild). Ich muss dann den Benutzer erneut aktivieren (in blau) und das Zertifikat akzeptieren (in rot).

- Entferne das "/" aus dem Pfad, damit die Dateien im Ordner "Export" abgelegen werden können. (Falsch: "/Export", Richtig: "Export)


![Auto Export Fehler – Abbildung 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Bild aus MOVEit

![Auto Export Fehler – Abbildung 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Bild von der Auto-Export Zuordnung
