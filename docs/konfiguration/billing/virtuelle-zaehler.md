---
title: 'Virtuelle Zähler'
slug: '/konfiguration/billing/virtuelle-zaehler'
description: 'Mit virtuellen Zählern können mathematische Operationen über mehrere physische Zähler gemacht werden.'
sidebar_label: 'Virtuelle Zähler'
---
Mit virtuellen Zählern können mathematische Operationen über mehrere physische Zähler gemacht werden. Meistens wird dies im Zusammenhang mit dem smart-me Billing verwendet.

## Voraussetzung

Du benötigst für die realen Zähler, aus welchen du den virtuellen Zähler erstellst, wie auch für den virtuellen Zähler Professional Lizenzen.

## Verwendungszweck

Virtuelle Zähler werden im [Billing](/konfiguration/billing) verwendet um den Solartarif zu verrechnen.

- Die Summe aller Verbraucher wird hiermit berechnet (Gesamtverbrauch im Solartarif).

- Die Summe aller Solaranlagen kann gebildet werden, sofern diese in einer Liegenschaft separat gemessen werden.


Visualisierungen

- Wenn in einer Liegenschaft der Bilanzzähler nicht eingebaut wurde, kann es für einzelne [Visualisierungen](/konfiguration/visualisierung) nötig sein, den Gesamtverbrauch zu berechnen.

- Wenn in einer Liegenschaft separat gemessene Solaranlagen vorliegen und eine Visualisierung mit Solar gewünscht wird.


### Einschränkung

Virtuelle Zähler können im Billing nicht einer Abrechnungseinheit zugewiesen werden.

- Virtuelle Zähler können zwar für die virtuellen Tarifstrukturen im Billing verwendet werden, es ist jedoch nicht erlaubt, mit virtuell berechneten Zählern abzurechnen. Aus diesem Grund wird im Billing die Wahl eines virtuellen Zählers nicht angeboten.


## Virtuellen Zähler erstellen

Um einen virtuellen Zähler zu erstellen, gehe wie folgt vor:

- Logge dich auf der smart-me [Webseite](https://web.smart-me.com/login/) ein.

- Klicke auf Konfiguration

- Wähle Virtuelle Zähler aus

- Klicke auf Hinzufügen

- Gebe einen Namen für den virtuellen Zähler ein.

- Mit einem Klick im Formel-Textfeld werden alle verfügbaren Zähler angezeigt.

- Anschliessend muss ein Operator eingefügt werden und mit Enter bestätigt werden (z. B. "+")

- Alle gewünschten Zähler hinzufügen und mit einem entsprechenden Operator ergänzen.


Hinweis: Wenn der virtuelle Zähler als Gesamtverbrauchszähler für das Billing erstellt wird, empfehlen wir den Namen Gesamtverbrauch zu vergeben.

![Virtuelle Zähler – Abbildung 1](/img/konfiguration-billing-virtuelle-zaehler/01.png)

### Unterstützte Operatoren

- () Klammern

- + Plus

- − Minus

- \* Multiplikation

- / Division

- abs() Absolutwert


## Gesamtverbrauchszähler für den Solartarif und Batterietarif erstellen

Die Funktion Summiere alle Stromzähler ist hilfreich, wenn eine Umgebung mit vielen Zählern vorliegt. Damit kann die Summe aller Zähler gebildet werden.

- Gebe einen Namen für den virtuellen Zähler ein.

- Bei Formel rechts den Pfeil nach unten wählen.

- Summieren alle Stromzähler wählen.

- Wenn Zähler (z. B. Solar oder Bilanz) nicht benötigt werden, müssen diese entfernt werden. Die Zähler und die dazugehörigen "+" müssen entfernt werden.


![Virtuelle Zähler – Abbildung 2](/img/konfiguration-billing-virtuelle-zaehler/02.png)

### Die korrekten Zähler dem virtuellen Gesamtverbrauch hinzufügen

- Es muss darauf geachtet werden, das die Summe der Zähler genau 100% der bezogenen Leistungen abdeckt.

- Bei Geräten in Serie sind nur die Geräte relevant die näher zur Unterverteilung bzw. dem Hausanschluss liegen. (Beispiel E-Mobilität)
    Es ist darauf zu achten, dass wenn der Abgang referenziert wird, die dahinter befindlichen Ladestationen aus der Summe entfernt werden.


![Virtuelle Zähler – Abbildung 3](/img/konfiguration-billing-virtuelle-zaehler/03.png)
