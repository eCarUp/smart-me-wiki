---
title: 'Standard Messkonzept'
slug: '/konfiguration/billing/mieterstrom/standard-messkonzept'
description: 'Tarifierung des Standard Messkonzepts'
sidebar_label: 'Standard Messkonzept'
---
![Standard Messkonzept – Abbildung 1](/img/konfiguration-billing-mieterstrom-standard-messkonzept/01.png)

## Tarifierung des Standard Messkonzepts

Die Tarifierung des Messkonzepts erfolgt über Bilanzzähler und Produktion oder alternativ über Verbrauch / PV oder Batterie mit Referenzierung des Bilanzzählers.

### Tarifierung mit Solartarif inkl. vZEV

Der Bilanzzähler wird für die Tarifierungsberechnung referenziert.

Bei der Nutzung des Solartarif inkl. vZEV werden keine zusätzlichen Lizenzen für virtuelle Zähler fällig.

Bilanzzähler

Der Hausanschlusszähler wird referenziert als Bilanzzähler.

![Standard Messkonzept – Abbildung 2](/img/konfiguration-billing-mieterstrom-standard-messkonzept/02.png)

Produktionszähler

Alle Produktionszähler und Batteriezähler werden als Produktion erfasst.

![Standard Messkonzept – Abbildung 3](/img/konfiguration-billing-mieterstrom-standard-messkonzept/03.png)

### Tarifierung mittels Solartarif (Verbrauch / PV) mit oder ohne Batterietarif (Verbrauch / Batterie)

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif /verbrauch /PV) werden zusätzliche Lizenzen für virtuellen Zähler fällig.

Der Gesamtvebrauch wird mindestens benötigt. Dieser wird als virtueller Zähler erstellt bestehend aus allen Teilnehmenden Abgängen des Mieterstroms.

Gesamtverbrauch = Wohnung 1.1 + Wohnung 1.2 + Wohnung 2.1 + Allgemein + Parkplatz 1 + Parkplatz 2 + Wärmepumpe

Es wird jeweils unter Produktion der Solaranlagenzähler bzw. Batteriezähler beim Batterietarif hinzugefügt.

Beim Gesamtverbrauch wird der virtuell erstellte Gesamtverbrauch hinterlegt.

Der Bilanzzähler wird hier bewusst referenziert um die Genauigkeit zu erhöhen!

![Standard Messkonzept – Abbildung 4](/img/konfiguration-billing-mieterstrom-standard-messkonzept/04.png)

### Validierung und Abrechnung des Energieversorgers

Die Summen des verkauften Netzstromes entsprechen ungefähr der Menge der verrechneten Strommenge des Energieversorgers

Die Menge an Rückspeise Strom im Exportregister des Bilanzzählers entsprechen ungefähr dem Wert der Menge in der Einspeisevergütung des Energieversorgers.
