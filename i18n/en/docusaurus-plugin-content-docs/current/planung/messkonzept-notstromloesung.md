---
title: 'Measurement concepts emergency power solutions'
slug: '/planung/messkonzept-notstromloesung'
description: 'How to meter and bill a system with an emergency power system in smart-me Billing.'
sidebar_label: 'Metering concept emergency power solution'
symbol: 'notstrom'
---
How to meter and bill a system with an emergency power system in smart-me Billing. 

### Prerequisite

You need a smart-me Professional subscription 

## Basic principle

The transfer switch of the emergency power system has three connections: Grid (after the balancing meter Z1 ), Load (entire house) and INV (inverter with PV and battery). Only the line between the transfer switch and the inverter carries exclusively PV and battery power. If it is accessible, the solar meter Z2 measures the production directly there. 

## Step by step

### 1 - Clarify the setup and choose a variant

Use the data sheet, wiring diagram or the manufacturer to find out where the switchover takes place: 

- Separate transfer switch (backup box, backup controller, EPS box): The line to the inverter is accessible. → Variant A with solar meter (recommended). 

- Integrated transfer switch (inverter with its own grid and backup port): The connection is inside the device. → Variant B without solar meter. For variant A, also check whether the manufacturer permits a meter in the line to the inverter. 


### 2 - Plan and install the meters

Variant A · separate transfer switch

 Z1 before the grid input, Z2 between the transfer switch and the inverter, every consumer with its own meter (together Zb ). 

![Measurement concepts emergency power solutions – Figure 1](/img/planung-messkonzept-notstromloesung/01_EN.png)

Variant B · integrated transfer switch 

Z1 before the grid port, every consumer without exception with its own meter. The production is calculated from the total consumption Zb and the balance Z1. 

![Measurement concepts emergency power solutions – Figure 2](/img/planung-messkonzept-notstromloesung/02_EN.png)

### 3 - Create tariffs

Commission all meters and place them in the folder of the property. Then create a solar tariff in Billing (price, validity and tariff number as usual): 

Variant A · with solar meter 

- Tariff type (Tarif Typ): Solar tariff incl. vZEV (Solartarif inkl. vZEV) 

- Solar or battery meter (Solar oder Batterie Zähler): Z2 

- Balancing meter (Bilanzzähler): Z1 (optional, increases accuracy) 


![Measurement concepts emergency power solutions – Figure 3](/img/planung-messkonzept-notstromloesung/03.png)

Variant B · without solar meter

- Tariff type (Tarif Typ): Solar tariff incl. vZEV (Solartarif inkl. vZEV) 

- Reference meter (Referenzzähler): Consumption + balance all (Verbrauch + Bilanz Alle) 

- Balancing meter (Bilanzzähler): Z1 

- All consumption meters (Alle Verbrauchszähler): all consumer meters Z3…Zn, together Zb 


![Measurement concepts emergency power solutions – Figure 4](/img/planung-messkonzept-notstromloesung/04.png)

## The two variants compared

| Feature | A · separate transfer switch | B · integrated transfer switch |
| --- | --- | --- |
| Balancing meter **Z1** | required | required |
| Solar meter **Z2** | required | not possible |
| Total consumption **Zb** | required | required |
| Consumer meters | required | required, without exception |
| Tariff type (Tarif Typ) | Solar tariff (consumption/PV) (Solartarif (Verbrauch/PV)) | Solar tariff incl. vZEV (Solartarif inkl. vZEV), reference consumption + balance (Verbrauch + Bilanz) |
| Visualization | possible | not possible |
| Analysis of differences to the utility bill | complete | limited only |
| Recommendation | **Standard** | if A is not possible |
