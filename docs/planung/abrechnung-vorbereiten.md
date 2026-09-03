---
title: 'Abrechnung / Vergütung vorbereiten'
slug: '/planung/abrechnung-vorbereiten'
description: 'Elektro mit smart-me Energiekostenabrechnung abrechnen'
sidebar_label: 'Abrechnung / Vergütung vorbereiten'
---
[Englisch](/planung/abrechnung-vorbereiten)

## ZEV Abrechnen

### Elektro mit smart-me Energiekostenabrechnung abrechnen

Diese Abrechnungsart unterstützt Einheitstarif, Doppeltarif oder Mehrfachtarife mit Solartarifen.

Für die Abrechnung des ZEVs für den Elektroteil benötigst du:

- Professional-Status des Accounts und das smart-me Billing.

- Die Strompreise vom Elektrounternehmen mit den Tarifen.

- nicht notwendig: externes Tarifsignal verbunden mit allen Zählern


### Wärme und Wasser mit VEWA-Funktion abrechnen (VEWA-Konform)

Damit alle Energiekosten in einer VEWA-Konformen Heiz-Nebenkostenabrechnung generiert werden können, benötigst du:

- Professional-Status des Accounts und das [smart-me Billing mit VEWA Funktion](/konfiguration/billing/vewa-abrechnung)

- Die Strompreise vom Elektrounternehmen mit den Tarifen

- Aufgelaufene Kostenübersicht zu den abzurechnenden Energien

- VEWA Leitfaden

- Optional: Immobiliensoftware für DTA-VHKA Exporte

- Optional: Eine Erstenergiekostenabrechnung eines Heiz-Nebenkosten-Dienstleisters oder die nötigen Informationen Ihres Sanitär- und Heizplaners.




## E-Mobilität im ZEV abrechnen

![Abrechnung / Vergütung vorbereiten – Abbildung 1](/img/planung-abrechnung-vorbereiten/01.png)

## VEWA und ZEV Leitfaden

Leitfaden Eigenverbrauch von Energie Schweiz (Allgemeines, Rechtsformen, Kosten): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

VEWA Model für Verbrauchsabhängige Energie- und Wasserkostenabrechnung: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Funktionsweise von Tarifen und Rückvergütung an Investoren

### Funktionsweise der Identifikation des Tarifs und der Verteilung auf Verbraucher

Die Identifikation eines Tarifs ist primär Abhängig von seinen hinterlegten Messmitteln und einer optionalen zeitabhängigen Komponente (WENN/DANN Aktion).

- Netztarife gelten als Reststrommengen, dies bedeutet das diese immer zur Anwendung kommen für den Strom welcher nicht durch Messungen anderen Tarifen zugeordnet werden konnten.

- Solar- und Batterietarife betrachten die Bezüge und die Lieferungen von relevanten Messpunkten wie z.B. PV-Zähler und Gesamtverbrauch oder der Bilanzmessung + einer optionalen zeitlichen Komponente.


### Anteilbestimmung des Strommix pro 15-Minuten

Der Strommix wird immer für 15-Minuten bestimmt und dann auf alle Bezüger gleichermassen angewendet. 

Beispiel:

- Batterie liefert 20 kWh

- Solaranlage liefert 100 kWh

- Der Verbrauch in der gesamten Liegenschaft entspricht 200 kWh


In diesem Fall berechnet sich der prozentuale Anteil am Gesamtverbrauch der einzelnen Lieferanten nach folgender Formel:

% Anteil am Strommix = Lieferantlieferung / Gesamtverbrauch der Liegenschaft


- Batterieanteil = 20 kWh / 200 kWh = 10%

- Solaranteil = 100 kWh / 200kWh = 50%

- Reststrom Netz = 100% - Batterieanteil - Solaranteil = 40%


![Abrechnung / Vergütung vorbereiten – Abbildung 2](/img/planung-abrechnung-vorbereiten/02.png)

### Anwendung des Strommix auf Abrechnungseinheiten und deren Verbrauch

Der obige Energiemix wird nun für die letzten 15 Minuten angewendet für jede individuelle Abrechnungseinheit. Dies führt dazu, dass jeder den gleichen Anspruch bezüglich des Energiemix besitzt, unabhängig davon, wie viel Energie er im Vergleich zu anderen Teilnehmern verbraucht.

- Wohnung A Verbrauch Total:
    20 kWh (2 kWh aus Batterie, 10kWh aus Solar, 8 kWh vom Netz)

- Wohnung B Verbrauch Total:
    100 kWh (10 kWh aus Batterie, 50kWh aus Solar, 40 kWh vom Netz)


Hinweis 1: Der Strommix bildet die Realität und den effektiv vorherrschenden Strommix im ZEV ab. Wenn Strom bezogen wird, entspricht der Verbrauch exakt diesem Mix.
Hinweis 2: Diese Anwendung des Stromix ermöglicht Grossverbrauchern mengenmässig einen höhere Verfügbarkeit von günstigem Solar und Batteriestrom.
Hinweis 3: Die Anwendung des Stromixes hat nicht die Aufgabe sich um Vergütungen an Investoren zu kümmern oder Kontingente an Verbraucher zu verteilen. 

![Abrechnung / Vergütung vorbereiten – Abbildung 3](/img/planung-abrechnung-vorbereiten/03.png)

### Solarstrompreis und Vergütung an Investoren

Best Practice, um Investoren zu vergüten, ist, sie am Gewinn aus der erwirtschafteten Leistung zu beteiligen und damit zu entschädigen. Voraussetzung dafür ist, dass auch wenn alle Investierten, der Solarpreis nicht zu 0 CHF intern angeboten wird.

Besitzt der Solarstrom und der Batteriestrom einen Preis, so entschädigen Grossbezüger die anderen Investoren über diesen zu entrichtenden Preis ihre Schuld.

Beispiel mit 3 Investoren und 3 Abrechnungseinheiten:
Der Solarpreis wird zu 17 Rp. / kWh festgelegt.

- Bezüger A (200 kWh Solarbezug, Investition 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Bezüger B (20 kWh Solarbezug, Investition 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Bezüger C ( 50 kWh Solarbezug, Investition 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


Insgesamt wurden nun aus dem Solarstromverkauf insgesamt 45.9 CHF erwirtschaftet.

![Abrechnung / Vergütung vorbereiten – Abbildung 4](/img/planung-abrechnung-vorbereiten/04.png)

Da alle Drei gleichermassen investiert sind, zu 1/3, haben nun alle Anrecht auf einen Drittel dieses erwirtschafteten Geldes.

0.33 \* 45.9 CHF = 15.14 CHF Rückvergütung für intern Genutzten Solarstrom.

- Bezüger A (Investition 33%):
    34 CHF Rechnungsbetrag - 15.14 CHF Rückvergütung = 18.86 CHF für Solarstrom bezahlt

- Bezüger B (Investition 33%):
    3.4 CHF Rechnungsbetrag - 15.14 CHF Rückvergütung = -11.74 CHF Gewinn aus Solarstrom, bzw. Reduktion auf seine Gesamtrechnung

- Bezüger C ( Investition 33%):
    8.5 CHF Rechnungsbetrag - 15.14 CHF Rückvergütung = -6.64 CHF Gewinn aus Solarstrom, bzw. Reduktion auf seine Gesamtrechnung


Hinweis:
Der Solartarif soll den Produktionspreis sowie auch Renditen inkludieren. Beispiel 80%-Regel. Das Geld kann entsprechend in den Erneuerungsfonds fliessen (Steuervorteile) oder gemäss Investitionskosten rückvergütet werden.
