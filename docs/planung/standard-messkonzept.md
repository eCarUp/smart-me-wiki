---
title: 'Mieterstrom Messkonzept'
slug: '/planung/standard-messkonzept'
description: 'Tarifierung des Mieterstrom Messkonzepts'
sidebar_label: 'Mieterstrom Messkonzept'
symbol: 'gebaeude'
---
## Mieterstrom

Ein Mieterstrommodell kann aus einem einzelnen Gebäude wie auch aus mehreren Gebäuden mit demselben Anschlusspunkt gegenüber dem Netzbetreiber bestehen.

Innerhalb des Mieterstroms liegt die Abrechnung und Tarifierung des Netzstromes und des lokal produzierten Stromes in der Hand des Mieterstrombetreibers.

Damit diese Abrechnung durchgeführt werden kann, bedarf es der nötigen Infrastruktur und eines durchgängigen Messkonzeptes.

**Grundlagen:**

- Private Messung

- Private Abrechnung

- VNB-Zähler am Einspeisepunkt mit Rechnung des VNB

<div className="bild--voll">

![Mieterstrom Messkonzept – Abbildung 1](/img/planung-standard-messkonzept/01.png)

</div>

## Generelles Messkonzept

### Lizenzpflichtige Messpunkte:

- Jeder Messpunkt, welcher erfasst werden muss, ist [lizenzpflichtig](/planung/cloud-lizenzen).

- Jeder virtuelle Zähler (Summenproduktionen, Gesamtverbrauch) ist [lizenzpflichtig](/planung/cloud-lizenzen).

### Strom

- Alle in Rechnung zu stellenden Abrechnungseinheiten müssen mit einem Zählerpunkt gemessen werden (Wohnungen, Wärmepumpen, Allgemeinabgänge). Hardwareoptionen für die Messung elektrischer Energie: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (Zählerplatte)](/produkte/nimbus-100a)

- Alle Produktionen und Speichersysteme müssen gemessen werden, entweder zusammen oder separiert.

- Die Messung am Hausanschluss bildet die korrekte Bilanzsumme zur akkuraten Tarifierung. Hausanschlussmessungen sind die wichtigsten Messpunkte für dynamische Steuerungen von Verbrauchern innerhalb von Gebäuden.

- Tarifieren und Abrechnen über [smart-me Billing](/konfiguration/billing)

- Die Tarifierung kann je nach Modell mittels Bilanz- / Hausanschlusszähler und Produktionen oder alternativ mittels Produktionen und virtuellem Gesamtverbrauch errechnet werden. (+1 virtueller Gesamtverbrauchszähler)

- Sind mehrere Produktionen gemessen (Batterien / PV) so sind diese virtuell zu summieren (+1 virtueller Summenzähler)

<div className="bild--voll">

![Mieterstrom Messkonzept – Abbildung 2](/img/planung-standard-messkonzept/02.png)

</div>

### E-Mobilität mit smart-me und eCarUp

- Die E-Mobilität wird durch private, halbprivate oder öffentliche Ladepunkte realisiert.

- Die [smart-me Pico 22kW](/produkte/pico-ladestation) Hardware bietet den optimalen Mix aus Hardware für öffentlichen Betrieb und privaten Betrieb im Mieterstrom. Es gibt aber mit [eCarUp](https://www.ecarup.com) auch weitere kompatible Hardwareansätze.

- Die Abrechnung erfolgt z.B. per Kreditkarte im Einheitstarif mit [eCarUp](https://www.ecarup.com) oder tarifiert über die Wohnungsabrechnung direkt mit [smart-me Billing](/konfiguration/billing).

- Die Steuerung der Pico Ladestationen und der Schutz der Infrastruktur übernimmt das fortschrittliche [Multilevel-Lastmanagement](/konfiguration/multilevel-lastmanagement).

- Der Lastabwurf wird über die [Hardware](/produkte/pico-ladestation) direkt oder über das [Multilevel-Lastmanagement](/konfiguration/multilevel-lastmanagement) gelöst.

## Tarifierung und Ausgestaltung des Mieterstrom Messkonzepts

Die Tarifierung des Messkonzepts erfolgt über Bilanzzähler und Produktion oder alternativ über Verbrauch / PV oder Batterie mit Referenzierung des Bilanzzählers.

Das Messkonzept ist vollständig, sobald 100% aller Verbraucher und Produktionen gemessen werden. Der Bilanzzähler am Hausanschluss fungiert als Korrektur und als Referenz.

### Validierung und Abrechnung des Energieversorgers

Die Summen des verkauften Netzstromes entsprechen ungefähr der Menge der verrechneten Strommenge des Energieversorgers.

Die Menge an Rückspeise Strom im Exportregister des Bilanzzählers entspricht ungefähr dem Wert der Menge in der Einspeisevergütung des Energieversorgers.

## Beispiele für Mieterstrom

### Mieterstrom im Einzelgebäude

- Der Hausanschluss ist hier relevant für die dynamische Steuerung der Hausinfrastruktur wie Wärmepumpen, Ladestationen und Solaranlagen und eine akkurate Tarifierung.

- Der Allgemein - und Wärmepumpe (Heizung) Zähler wird separat gemessen. Damit wird sichergestellt, dass die Energiekosten einzeln ausgewiesen werden können. Die Energiekosten können entweder prozentual auf die Parteien verteilt werden oder sie können als Ganzes z.H. einer Liegenschaftsverwaltung abgegeben werden.

<div className="bild--voll">

![Mieterstrom Messkonzept – Abbildung 3](/img/planung-standard-messkonzept/03.png)

</div>

### Mieterstrom über mehrere Gebäude

- Der Bilanzzähler ist massgebend für die perfekte Tarifierungsgenauigkeit.

- Die Hausanschlüsse sind hier relevant für die dynamische Steuerung der Hausinfrastruktur wie Wärmepumpen, Ladestationen und Solaranlagen.

- Der Allgemein - und Wärmepumpe (Heizung) Zähler wird separat gemessen. Damit wird sichergestellt, dass die Energiekosten einzeln ausgewiesen werden können. Die Energiekosten können entweder prozentual auf die Parteien verteilt werden oder sie können als Ganzes z.H. einer Liegenschaftsverwaltung abgegeben werden.

<div className="bild--voll">

![Mieterstrom Messkonzept – Abbildung 4](/img/planung-standard-messkonzept/04.png)

</div>

### Schema Beispiel

<div className="bild--voll">

![Mieterstrom Messkonzept – Abbildung 5](/img/planung-standard-messkonzept/05.png)

</div>
