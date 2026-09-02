---
title: 'Liegenschaft nur mit Strom'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Nur Strom mit oder ohne E-Mobilität in Einzelgebäuden oder Überbauungen'
sidebar_label: 'Liegenschaft nur mit Strom'
---
### Nur Strom mit oder ohne E-Mobilität in Einzelgebäuden oder Überbauungen

Relevant für ZEV's mit Stromzähler und optional Ladestationen.

Ordnerstruktur für das smart-me Billing Strom

Ordnerstruktur: Zweistufigkeit ist Pflicht.

An dieser Stelle wird eine Abrechnung eingerichtet und beinhaltet alle Wohnungen, Räume, Parkplätze als untergeordneter Ordner und dessen relevante Stromzähler

- 1 Ordner für die Liegenschaft (z.B. Altgasse ZEV)

    - 1 Unterordner pro Abrechnungseinheit also pro Wohnung, bzw. Rechnungsempfänger. Unser Vorschlag für die Ordnerbezeichnung


Namensgebung von Abrechnungseinheiten (Tipps):

- -   ZEV mit einem Gebäude: Wohnungsbezeichnung (z.B. WHG OG Links, WHG OG, rechts, etc....)

    - ZEV mit mehreren Gebäuden:  Hausbezeichnung Wohnungsbezeichnung (z.B. Altgasse 13 WHG OG Links, Altgasse13 WHG OG, rechts, etc....)


3a. Basisstruktur

![Liegenschaft nur mit Strom – Abbildung 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Zuordnung der Zähler

Weise mit Drag und Drop Funktion die relevanten Zähler den Knoten hinzu.

Wichtige Information zur Zuweisung:

Strom / Wärme / Wasser

Weise nur Zählerpunkte direkt den Abrechnungseinheiten zu, wenn der Rechnungsempfänger später 100% des Bezugs bezahlen muss.

Wenn du Zähler nur zu einem Teil einer individuellen Abrechnungseinheit zuordnen willst, schiebe den Zähler in einen Knoten innerhalb des "Technischen Zähler" Knotens.

Später kann im Billing ein solcher Zähler prozentual verteilt werden.

Beispiele:

- Allgemeinzähler

- Wärmezähler eines Stockwers, welches 4 Abrechnungseinheiten bedient


Ladestationen mit smart-me Pico / Zaptec / Easee

Weise Ladestationen nicht direkt Wohnungen zu, erstelle lieber eine separate Abrechnungseinheit für die Ladestation. Damit können Mieterwechsel einfacher vollzogen werden.

Ladestationen anderer Hersteller

Ladestationen anderer Hersteller werden im smart-me nicht direkt verwaltet oder abgerechnet. In diesem Fall erstelle einen Knoten für den E-Mobilitätsabgang als Abrechnungseinheit und weise den Abgangszähler dem Knoten zu. So erhälst du den Gesamtaufwand für alle Ladestationen.



3a. Detailstruktur mit Zählern

![Liegenschaft nur mit Strom – Abbildung 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Erstelle abschliessend die Alarme für einen Verbindungsaufall.

Auf diese Weise merkst du frühzeitig, wenn ein Zähler ausfällt und minimierst die Messdatenlücke, die daraus folgend entsteht. 

### Nächster Schritt

[Weiter zur Erstellung der Alarme](/konfiguration/wenndann-aktionen/alarme)
