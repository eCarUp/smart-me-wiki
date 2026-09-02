---
title: 'Differenzen zwischen smart-me Billing und dem Energieversorger'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'In diesem Abschnitt wird eine einheitliche Methodik beschrieben, um zu prüfen ob, zwischen der Rechnung vom Energieversorgen und dem smart-me Billing eine Differenz vorliegt.'
sidebar_label: 'Differenzen mit dem EW'
---
In diesem Abschnitt wird eine einheitliche Methodik beschrieben, um zu prüfen ob, zwischen der Rechnung vom Energieversorgen und dem smart-me Billing eine Differenz vorliegt. 

## Methodik

Es gibt zwei Ansätze dem Fehler auf die Spur zu kommen. Je nachdem ist das eine oder andere Vorgehen einfacher.

- Das smart-me Billing wird nochmals geprüft. Sollte ein Konfigurationsfehler vorliegen, kann dieser zu falschen Werten im smart-me Billing führen.

- Die Excel Tabelle wird ausgefüllt. Das Excel kann hier heruntergeladen werden: [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Voraussetzungen

1.  Die ZEV verfügt über einen smart-me Zähler am Hausanschluss (HAK)

2.  Es liegt eine Rechnung vom Verbrauch (Bezug) und Rückvergütung (Lieferung) vom EW für eine vollständige Abrechnungsperiode vor.


## Vorgehen zum Ausfüllen vom Excel

1.  Die Liste wird von oben nach unten befüllt.

2.  Die von Hand auszufüllenden Felder sind jeweils blau markiert.

3.  Die grünen Zeilen sind dann jeweils zu prüfen.


Im Excel sind unterschiedliche Kontrollpunkte vorhanden.
Der Fehler muss jeweils beim ersten nicht erfüllten Kontrollpunkt gesucht werden. Die Kontrollpunkte bauen entsprechend aufeinander auf.

Die Kontrollpunkte erfüllen jeweils einen bestimmten Zweck:

- Differenz Bilanz Bezug: Hier wird ermittelt, ob der smart-me Bilanzzähler beim Verbrauch (Bezug) im Vergleich zum EW innerhalb der Messtoleranz von 1% liegt.

- Differenz Bilanz Rückvergütung: Hier wird ermittelt, ob der smart-me Bilanzzähler bei der Rückvergütung (Lieferung) im Vergleich zum EW in der Messtoleranz von 1% liegt.

- Bilanz vs. Unterverbraucher: Hier wird geprüft, ob die Untermessungen und der smart-me Bilanzzähler innerhalb der Messtoleranz von 1% liegen. Dabei wird der Standbyverbrauch der PV-Anlage und aller smart-me Geräte berücksichtigt.

- Zählerstand vs. virtuelle Zähler: Hier wird geprüft, ob im smart-me Billing jede Kilowattstunde, die gemessen wurde, auch verrechnet wird.

- Netzbezug EW vs. smart-me Billing: Hier wird geprüft, ob im smart-me Billing Hoch-, Nieder- und Solartarife mit der Rechnung vom EW übereinstimmen.

- Eigenverbrauch vs. smart-me Billing: Hier wird geprüft, ob jede Kilowattstunde des selbst verbrauchten PV-Stroms, auch verrechnet wird.


## Vorbehalt

- Das Excel ist eine geführte Vorlage zur Prüfung von Differenzen. smart-me haftet nicht abschliessend für den Inhalt des Excels.

- Das Excel ist immer noch in Beta Version, es wurde im Spätsommer 2023 erstellt.

- Das Excel kann aktuell nicht alle Fälle prüfen und kann unter Umständen noch kleinere Fehler aufweisen. Diese werden laufend korrigiert.


## Analyse smart-me

Sollte ein Problem in der Abrechnung festgestellt werden und es gewünscht ist, dass wir dieses analysieren, benötigen wir folgende Angaben:

- Zugangsdaten zum Konto

- Rechnungen vom EW Bezug

- Rückvergütung vom EW

- Ausgefüllte Excel-Tabelle
