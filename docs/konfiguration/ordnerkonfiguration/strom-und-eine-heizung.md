---
title: 'Liegenschaft mit Strom und Wärme / Wasser'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Konfiguration ohne automatische Stromrechnungsstellung'
sidebar_label: 'Liegenschaft mit Strom und Wärme / Wasser'
---
## Konfiguration ohne automatische Stromrechnungsstellung

Vorteil:

- Keine doppelte erfassung von Mieterkontrakten notwendig


Nachteil:

- Keine automatische Rechnungsstellung für Strom

- Multiple Eintragung der Stromtarife (Pro Liegenschaft)


### 3b. Strom mit oder ohne E-Mobilität und Multienergie mit einem Gebäude.

Mögliche Unterschiede: Bei Liegenschaften mit reinen Stromzählern ohne Multienergie kann die Wärmepumpe mit einem Verteilschlüssel direkt den Wohnungen zugeordnet werden. Bei Multienergie wird die Wärmepumpe als Unterzähler (separater Ordner) hinterlegt, damit eine separate Rechnung erstellt wird, die dann in der VEWA-Konfiguration als Kostenfaktor übertragen werden muss.

3b. Basisstruktur

![Liegenschaft mit Strom und Wärme / Wasser – Abbildung 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

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

Ladestationen anderer Hersteller werden im smart-me nicht direkt verwaltet oder Abgerechnet. In diesem Fall erstelle einen Knoten für den E-Mobilitätsabgang und weise den Abgangszähler dem Knoten zu. So erhälst du den Gesamtaufwand für alle Ladestationen.



3b. Detailstruktur mit Zählern

![Liegenschaft mit Strom und Wärme / Wasser – Abbildung 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

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


### Comming soon

Disclaimer:

Für diese Konfiguration muss eine zusätzliche Liegenschaft nur für Strom erstellt werden, welche alle Wohnungen der Drei Gebäude beinhaltet.

Es werden in dieser Liegenschaft nur die Stromzähler zugeordnet.

### Erstelle abschliessend die Alarme für einen Verbindungsaufall.

Auf diese Weise merkst du frühzeitig, wenn ein Zähler ausfällt und minimierst die Messdatenlücke, die daraus folgend entsteht. 

### Nächster Schritt

[Weiter zur Erstellung der Alarme](/konfiguration/wenndann-aktionen/alarme)
