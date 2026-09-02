---
title: 'Messkonzept Produzenten hinter Häuser'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Wir erläutern hier, welche Massnahmen getroffen werden müssen, um das Messkonzept für mehrere Produzenten hinter verschiedenen Häusern abzubilden.'
sidebar_label: 'Messkonzept Produzenten hinter Häuser'
---
Wir erläutern hier, welche Massnahmen getroffen werden müssen, um das Messkonzept für mehrere Produzenten hinter verschiedenen Häusern abzubilden.

### Voraussetzung

Du brauchst ein smart-me Professional Abo

## Wichtige Hinweise

smart-me empfiehlt dieses Messkonzept aus den folgenden Gründen nicht:

- Es gibt derzeit keine vollautomatische Lösung im smart-me System, um dieses Messkonzept abzubilden.

    - Hinweis: Drittsysteme von smart-me, wie z.B. [egonline](/drittsysteme/egonline), bieten Lösungen an, die mit smart-me-Zählern kompatibel sind. Bitte informiere dich direkt bei den entsprechenden Anbietern.

- Es ist mit einem manuellen Aufwand von ca. 30 Minuten pro Abrechnungseinheit und Abrechnungsperiode zu rechnen.

- Aufgrund der Komplexität der Anlage kann dies zu vielen Rückfragen führen. smart-me behält sich das Recht vor, für Supportanfragen den Aufwand in Rechnung zu stellen.

- Die Ermittlung der Anzahl kWh, die im ZEV gegenseitig verkauft werden, erfolgt gemittelt über die Abrechnungsperiode anhand des Überschusses der einzelnen Parteien. Dasselbe gilt für die Rückübertragung an den Energieversorger.

- Der Eigenverbrauch jedes Hauses, das auch über eine Photovoltaikanlage verfügt, kann nicht ermittelt werden.

- Die von smart-me zur Verfügung gestellten Grafiken sind mit diesem Messkonzept nicht kompatibel.


smart-me behält sich das Recht vor, weitere Einschränkungen aufzulisten. Derzeit sind nur wenige Gebäude mit diesem Messkonzept ausgestattet. Aus diesem Grund konzentriert sich smart-me nicht auf die Entwicklung dieser Objekte. Es ist möglich, dass sie in Zukunft einfacher werden, aber wir legen bei den Entwicklung keinen Schwerpunkt auf dieses Messkonzept.

## Messkonzept

Bilanz, Häuser und, falls vorhanden, Allgemein werden gemessen.

Die Messung von PV ist optional und bietet keinen Vorteil für die Abrechnung.

![Messkonzept Produzenten hinter Häuser – Abbildung 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Messkonzept Produzenten hinter Häuser – Abbildung 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Konfiguration

Die unteren Angaben setzten voraus, dass die Konfiguration für ein smart-me [Billing](/konfiguration/billing) mit dem Standard Messkonzept bekannt sind.

Virtuelle Zähler

Summe von allen Zählern welche Abrechnungsrelevant sind.

Name: Gesamtverbrauch + Produktion



![Messkonzept Produzenten hinter Häuser – Abbildung 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Virtuelle Tarife

[Billing](/konfiguration/billing)\-Konfiguration gemäss Standard Messkonzept 

Abweichung beim virtuellen Tarif:

- Tarif Typ: Batterie Tarif

- Solar oder Batterie Zähler: Gesamtverbrauch + Produktion

- Gesamtverbrauch: Gesamtverbrauch + Produktion

- Bilanzzähler: Hauptzähler


![Messkonzept Produzenten hinter Häuser – Abbildung 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Abrechnung

Die unteren Angaben setzten voraus, dass die Abrechnung für ein smart-me [Billing](/konfiguration/billing) mit dem Standard Messkonzept bekannt sind.

Excel ausfüllen

- [Messkonzept Produzenten hinter Häuser](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 


Zweck vom Excel

- Ermittelt welchen Betrag pro Partei gutgeschrieben werden kann.


Benötigte Informationen

- Abrechnung vom lokalen Energieversorger

- Report-Werte aus dem smart-me

- PDF Rechnungen (Billing) aus dem smart-me.


Berechnungslogik

- Überschuss pro Haus wird ermittelt (Zelle B35 bis B43)

- Anteil an PV Strom pro Haus wird ermittelt (Zelle C35 bis C43)

- Verteilung proportional gemäss Überschuss, gemittelt auf die ganze Abrechnungsperiode


![Messkonzept Produzenten hinter Häuser – Abbildung 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Sonstiges Position ergänzen

Werte gemäss Excel-Gutschrift können pro Abrechnungseinheit als minus Betrag eingefügt werden.

![Messkonzept Produzenten hinter Häuser – Abbildung 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Rechnung erneut erzeugen

Im smart-me Billing

![Messkonzept Produzenten hinter Häuser – Abbildung 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
