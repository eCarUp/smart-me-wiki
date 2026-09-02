---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'Der Minergie Daten Exporter ermöglicht die direkte Übertragung von Messpunktdaten in die Minergie Datenbank.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

Der Minergie Daten Exporter ermöglicht die direkte Übertragung von Messpunktdaten in die Minergie Datenbank.



Mit den Daten in der Minergie Datenbank, können seitens Minergie kostenpflichtige Plandaten und Ist-Datenvergleiche durchgeführt werden.

Das genannte Produkt nennt sich Minergie Monitroing+ und ermöglicht einfach und schnell Verbesserungspotentiale zu erkennen, sowie Fehlkonfigurationen aufzudecken.



![Minergie Exporter – Abbildung 1](/img/schnittstellen-minergie-exporter/01.png)

## Login Minergie Datenexporter

Der Link zum Exporter erhält jeder smart-me Partner mit dem Vertragszusatz Minergie Systemintegrator.

Bist du noch Minergie Systemintegrator geworden, werde einer und informiere dich hier: [Minergie Partner werden](/planung/minergie) 



1.  Loge dich dafür mit den Logindaten des jeweiligen smart-me Objektes auf [smart-me.com](http://smart-me.com)  ein und erstelle den API Key.

2.  Loge dich danach beim Minergie Exporter (Dir zur Verfügung gestellte Webadresse) mit dem gleichen Account Daten ein und erstelle die Konfiguration.



## Den Export pro Objekt aufsetzen

1.  Drücke auf das "+" um eine neue Exportaufgabe zu erfassen.


![Minergie Exporter – Abbildung 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Lege einen API Key im smart-me Objekt an.

Erstelle einen neuen Schlüssel mit einem von dir gewählten Namen. Wähle die Rechte mindestens mit Leserechten aus.


![Minergie Exporter – Abbildung 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Abbildung 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Abbildung 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Hinterlege den Schlüssel im Auftrag des Minergie-Exporters unter API-Key

4\. Trage unter "Minergie target" die Objekt-ID ein, welche du von Minergie und Ihrer Datenbank über die Label-Platform erhalten hast.

5\. Verbinde die relevanten Messpuntke aus dem MinergieObjekt mit einem Messpunkt im smart-me Account. Summenzähler können direkt im Minergie Exporter gebildet werden.

6\. Starte die Übertragung.

![Minergie Exporter – Abbildung 6](/img/schnittstellen-minergie-exporter/06.png)

## Datenexport Funktion und Häufigkeit

Der Daten Exporter überträgt die Daten einmal Pro Tag im 15- Minutenintervall.

Die Daten aus der Vergangenheit können jederzeit neu geladen und in der Minergie Datenbank überschrieben werden.

Werden Vergangenheitsdaten geladen, werden die Daten verteilt mit den regulären Übertragungen Stück für Stück mit übertragen. Dies kann einige Tage dauern, bis alle Daten aus der Vergangenheit übertragen sind.
