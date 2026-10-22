---
title: 'Messkonzepte Notstromlösungen'
slug: '/planung/messkonzept-notstromloesung'
description: 'So misst und verrechnest du eine Anlage mit Notstromsystem im smart-me Billing.'
sidebar_label: 'Messkonzept Notstromlösung'
---
So misst und verrechnest du eine Anlage mit Notstromsystem im smart-me Billing. 

### Voraussetzung

Du brauchst ein smart-me Professional Abo 

## Grundprinzip

Der Umschalter des Notstromsystems hat drei Anschlüsse: Grid (Netz, nach dem Bilanzzähler Z1 ), Load (ganzes Haus) und WR (Wechselrichter mit PV und Batterie). Nur auf der Leitung zwischen Umschalter und Wechselrichter fliesst ausschliesslich PV- und Batteriestrom. Ist sie zugänglich, misst dort der Solarzähler Z2 die Produktion direkt. 

## Schritt für Schritt

### 1 - Aufbau abklären und Variante wählen

Kläre mit Datenblatt, Schaltplan oder Hersteller, wo die Umschaltung sitzt: 

- Separater Umschalter (Backup-Box, Backup Controller, EPS-Box): Die Leitung zum Wechselrichter ist zugänglich. → Variante A mit Solarzähler (empfohlen). 

- Integrierter Umschalter (Wechselrichter mit eigenem Grid- und Backup-Port): Die Verbindung liegt im Gerät. → Variante B ohne Solarzähler. Bei Variante A zusätzlich prüfen, ob der Hersteller einen Zähler in der Leitung zum Wechselrichter erlaubt. 


### 2 - Zähler einplanen und installieren

Variante A · separater Umschalter

 Z1 vor dem Grid-Eingang, Z2 zwischen Umschalter und Wechselrichter, jeder Verbraucher mit eigenem Zähler (zusammen Zb ). 

![Messkonzepte Notstromlösungen – Abbildung 1](/img/planung-messkonzept-notstromloesung/01.png)

Variante B · integrierter Umschalter 

Z1 vor dem Grid-Port, jeder Verbraucher lückenlos mit eigenem Zähler. Die Produktion wird aus Gesamtverbrauch Zb und Bilanz Z1 berechnet. 

![Messkonzepte Notstromlösungen – Abbildung 2](/img/planung-messkonzept-notstromloesung/02.png)

### 3 - Tarife erstellen

Alle Zähler in Betrieb nehmen und im Ordner der Liegenschaft ablegen. Dann im Billing einen Solartarif erstellen (Preis, Gültigkeit und Tarifnummer wie gewohnt): 

Variante A · mit Solarzähler 

- Tarif Typ: Solartarif inkl. vZEV 

- Solar oder Batterie Zähler: Z2 

- Bilanzzähler: Z1 (optional, erhöht die Genauigkeit) 


![Messkonzepte Notstromlösungen – Abbildung 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · ohne Solarzähler

- Tarif Typ: Solartarif inkl. vZEV 

- Referenzzähler: Verbrauch + Bilanz Alle 

- Bilanzzähler: Z1 

- Alle Verbrauchszähler: alle Verbraucherzähler Z3…Zn, zusammen Zb 


![Messkonzepte Notstromlösungen – Abbildung 4](/img/planung-messkonzept-notstromloesung/04.png)

<Embed src="/embeds/planung-messkonzept-notstromloesung-01.html" aspect="2.305" title="Messkonzept Notstromlösung" />
