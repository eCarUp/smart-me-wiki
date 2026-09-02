---
title: 'Strom und mehrere Heizungen'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Konfiguration ohne automatische Stromrechnungsstellung'
sidebar_label: 'Strom und mehrere Heizungen'
---
## Konfiguration ohne automatische Stromrechnungsstellung

Vorteil:

- Keine doppelte erfassung von Mieterkontrakten notwendig


Nachteil:

- Keine automatische Rechnungsstellung für Strom

- Multiple Eintragung der Stromtarife (Pro Liegenschaft)


### Strom mit oder ohne E-Mobilität und Multienergie mit mehreren Gebäuden und indivuduellen Heizungen. (Überbauung)

Relevant für ZEV's mit Stromzähler, Multienergiezähler, mehreren Gebäuden und optional Ladestationen.

Bei Arealen mit mehreren Gebäuden und individuellen Heizsystemen ist pro Heizsystem eine Liegenschaft zu erstellen. Wenn also drei Gebäude unterschiedliche Heizsysteme haben, muss die Konfiguration gemäss 3c ausgeführt werden.

Hinweis:
Wenn nur ein Gebäude eine individuelle Heizung besitzt und die zwei anderen sich eine Zentralheizung teilen, reichen zwei Liegenschaften welche die Bezüger passend zusammenfasst.

Beispiel:
Drei Gebäude mit den Namen Altgasse 13, Altgasse 15+17, Altgasse 19.
Alle besitzen individuell eine Wärmepumpe für Heizung und Warmwasseraufbereitung.

3c. Basisstruktur

![Strom und mehrere Heizungen – Abbildung 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Zuordnung der Zähler

Weise mit Drag und Drop Funktion die relevanten Zähler den Knoten hinzu.

Wichtige Information zur Zuweisung:

Strom / Wärme / Wasser

Weise nur Zählerpunkte direkt den Abrechnungseinheiten zu, wenn der Rechnungsempfänger später 100% des Bezugs bezahlen muss.

Wenn du Zähler nur zu einem Teil einer individuellen Abrechnungseinheit zuordnen willst, schiebe den Zähler in einen Knoten innerhalb des "Technischen Zähler"-Knotens.

Später kann im Billing ein solcher Zähler prozentual verteilt werden.

Beispiele:

- Allgemeinzähler

- Wärmezähler eines Stockwerks, welches 4 Abrechnungseinheiten bedient


Ladestationen mit smart-me Pico / Zaptec / Easee

Weise Ladestationen nicht direkt Wohnungen zu, erstelle lieber eine separate Abrechnungseinheit für die Ladestation. Damit können Mieterwechsel einfacher vollzogen werden.

Ladestationen anderer Hersteller

Ladestationen anderer Hersteller werden im smart-me nicht direkt verwaltet oder Abgerechnet. In diesem Fall erstelle einen Knoten für den E-Mobilitätsabgang und weise den Abgangszähler dem Knoten zu. So erhälst du den Gesamtaufwand für alle Ladestationen.



3c. Detailstruktur mit Zählern

![Strom und mehrere Heizungen – Abbildung 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Erstelle abschliessend die Alarme für einen Verbindungsaufall.

Auf diese Weise merkst du frühzeitig, wenn ein Zähler ausfällt und minimierst die Messdatenlücke, die daraus folgend entsteht. 

### Nächster Schritt

[Weiter zur Erstellung der Alarme](/konfiguration/wenndann-aktionen/alarme)

## Konfiguration mit automatischer Stromrechnungsstellung

Vorteil:

- Automatische Rechnungsstellung für Strom

- Keine Doppelerfassung von Stromtarifen


Nachteil:

- Mehrfacherfassung von Mieterkontrakten


Für diese Konfiguration muss eine zusätzliche Liegenschaft nur für Strom erstellt werden welche alle Wohnungen der drei Gebäude beinhaltet.

Es werden in dieser Liegenschaft nur die Stromzähler zugeordnet.

![Strom und mehrere Heizungen – Abbildung 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Erstelle abschliessend die Alarme für einen Verbindungsaufall.

Auf diese Weise merkst du frühzeitig, wenn ein Zähler ausfällt und minimierst die Messdatenlücke, die daraus folgend entsteht. 

### Nächster Schritt

[Weiter zur Erstellung der Alarme](/konfiguration/wenndann-aktionen/alarme)
