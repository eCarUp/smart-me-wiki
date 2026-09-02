---
title: 'ZEV Zusammenschluss zum Eigenverbrauch'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Zusammenschluss zum Eigenverbrauch (ZEV)'
sidebar_label: 'ZEV Zusammenschluss zum Eigenverbrauch'
---
## Zusammenschluss zum Eigenverbrauch (ZEV)

Ein Zusammenschluss zum Eigenverbrauch kann aus einem einzelnen Gebäude wie auch aus mehreren Gebäuden mit dem selben Anschlusspunkt gegenüber dem Energieversorger bestehen.

Innerhalb des ZEV liegt die Abrechnung und Tarifierung des Netzstromes und des lokal produzierten Stromes in der Hand der ZEV-Betreiber.

Damit diese Abrechnung durchgeführt werden kann, bedarf es der nötigen Infrastruktur und eines durchgängigen Messkonzeptes für die jeweiligen Energien.



Grundlagen

- Private Messung

- Private Abrechnung

- VNB-Zähler am Einspeisepunkt mit Rechnung des VNB


![ZEV Zusammenschluss zum Eigenverbrauch – Abbildung 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

## Generelles Messkonzept

### Lizenzflichtige Messpunkte:

- Jeder Messpunkt welcher erfasst werden muss ist [lizenzpflichtig](/planung/cloud-lizenzen).

- Jeder virtuelle Zähler (Summenproduktionen, Gesamtverbrauch) sind [lizenzpflichtig](/planung/cloud-lizenzen).

- Jeder M-Bus oder LoRa-Zähler\-Register welches abgerechnet werden will gilt als Messpunkt (Kombizähler Wärme / Kälte = 2 Lizenzen) und ist somit [lizenzpflichtig](/planung/cloud-lizenzen), nicht aber das M-Bus Gateway selbst. Nicht verwendete können inaktiv gesetzt werden.


### Strom

- Alle in Rechnung zu stellenden Abrechnungseinheiten müssen mit einem Zählerpunkt gemessen werden. (Wohnungen, Wärmepumpen, Allgemeinabgänge)
    Hardwareoptionen für die Messung elektrischer Energie
    \- [Telstar 80A
    ](/produkte/telstar)\- [Telstar CT
    ](/produkte/Telstar-CT)\- [Nimbus 100A (Zählerplatte)](/produkte/nimbus)

- Alle Produktionen und Speichersysteme müssen gemessen werden, entweder zusammen oder separiert.

- Die Messung am Hausanschluss / Areal bildet die korrekte Bilanzsumme zur akkuraten Tarifierung. Hausanschlussmessungen sind die wichtigsten Messpunkte für dynamische Steuerungen von Verbrauchern innerhalb von Gebäuden.

- Tarifieren und Abrechnen über [smart-me Billing](/konfiguration/billing)

- Die Tarifierung kann je nach Modell mittels Areal / Hausanschlusszähler und Produktionen oder alternativ mittels Produktionen und virtuellem Gesamtverbrauch errechnet werden. (+1 virtueller Gesamtverbrauchszähler)

- Sind mehrere Produktionen gemessen (Batterien / PV) so sind diese virtuell zu Summieren (+1 virtueller Summenzähler)


![ZEV Zusammenschluss zum Eigenverbrauch – Abbildung 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### E-Mobilität mit smart-me und eCarUp

- Die E-Mobilität wird durch private, halbprivate oder öffentliche Ladepunkte realisiert.

- Die [smart-me Pico 22kW](/produkte/pico-ladestation) Hardware bietet den optimalen Mix aus Hardware für öffentlichen Betrieb und privaten Betrieb im ZEV. Es gibt aber mit [eCarUp](https://www.ecarup.com) auch weitere kompatible Hardwareansätze.

- Die Abrechnung erfolgt z.B. per Kreditkarte im Einheitstarif mit [eCarUp](https://www.ecarup.com) oder tarifiert über die Wohnungsabrechnung direkt mit [smart-me Billing](/konfiguration/billing).

- Die Steuerung der Pico Ladestationen und der Schutz der Infrastruktur übernimmt das fortschrittliche [Multilevel-Lastmanagement](/konfiguration/multilevel-lastmanagement).

- Der Lastabwurf wird über die [Hardware](/produkte/pico-ladestation) direkt oder über das [Multilevel-Lastmanagement](/konfiguration/multilevel-lastmanagement) gelöst.


### Wärme und Wasser

- Messung von Dritthardware über [LoRa](/produkte/lora-gateway-software) oder [M-Bus](/produkte/m-bus-gateway) oder [API](/schnittstellen/api)

- Unterstützt die bereits verbaute sowie neue Hardware von den üblichen Lieferanten Neovac, Techem, GWF, ISTA oder Brunata und mehr.

- Gemessen werden entweder Totalzähler der Erzeugung oder Verbrauchszähler in den Abrechnungseinheiten oder beides bei z.B. Minergie.

- Abrechnung mittels der smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung) Integration.




## Plane jetzt dein Projekt mit unserem Konfigurator

Der Projekt Konfigurator erstellt dir auf Basis deiner Angaben die Stückliste aus allen smart-me Produkten, die Anzahl Messstellen und ein visuelles Schema zur Prüfung.

Ideal für Planer, Elektrofachleute.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Beispiel von ZEV's

### ZEV als Einzelgebäude

- Der Hausanschluss ist hier relevant für die dynamische Steuerung der Hausinfrastruktur wie Wärmepumpen, Ladestationen und Solaranlagen und eine akkurate Tarifierung.

- Der Allgemein - und Wärmepumpe (Heizung) Zähler wird separat gemessen. Damit wird sichergestellt, dass die Energiekosten einzeln ausgewiesen werden können. Die Energiekosten können entweder prozentual auf die Parteien verteilt werden oder sie können als Ganzes z.H. einer Liegenschaftsverwaltung abgegeben werden.


![ZEV Zusammenschluss zum Eigenverbrauch – Abbildung 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### ZEV als Areallösung

- Der Arealmesspunkt ist Massgebend für die perfekte Tarifierungsgenauigkeit

- Die Hausanschlüsse sind hier relevant für die dynamische Steuerung der Hausinfrastruktur wie Wärmepumpen, Ladestationen und Solaranlagen.

- Der Allgemein - und Wärmepumpe (Heizung) Zähler wird separat gemessen. Damit wird sichergestellt, dass die Energiekosten einzeln ausgewiesen werden können. Die Energiekosten können entweder prozentual auf die Parteien verteilt werden oder sie können als Ganzes z.H. einer Liegenschaftsverwaltung abgegeben werden.


![ZEV Zusammenschluss zum Eigenverbrauch – Abbildung 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Schema Beispiel

![ZEV Zusammenschluss zum Eigenverbrauch – Abbildung 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
