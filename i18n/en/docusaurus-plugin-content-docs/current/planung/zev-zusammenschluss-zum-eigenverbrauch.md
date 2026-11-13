---
title: 'ZEV association for own consumption'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Association for own consumption (ZEV)'
sidebar_label: 'ZEV association for own consumption'
symbol: 'gebaeude'
---
## ZEV (association for own consumption)

An association for own consumption can consist of a single building or of several buildings sharing the same connection point to the energy supplier.

Within the ZEV, the billing and tariffing of grid electricity and locally produced electricity are in the hands of the ZEV operators.

To carry out this billing, the necessary infrastructure and a consistent metering concept for the respective energies are required.

**Basics:**

- Private metering

- Private billing

- Grid operator meter at the feed-in point with an invoice from the grid operator

<div className="bild--voll">

![ZEV association for own consumption – Figure 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01_EN.png)

</div>

## General metering concept

### Metering points requiring a license:

- Every metering point that has to be recorded [requires a license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) [requires a license](/planung/cloud-lizenzen).

- Every M-Bus or LoRa meter\-register that is to be billed counts as a metering point (combined heating / cooling meter = 2 licenses) and therefore [requires a license](/planung/cloud-lizenzen), but the M-Bus Gateway itself does not. Unused ones can be set to inactive.


### Electricity

- All billing units to be invoiced must be measured with a metering point. (Apartments, heat pumps, common area circuits)
    Hardware options for measuring electrical energy
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- The measurement at the building connection / site forms the correct balance total for accurate tariffing. Building connection measurements are the most important metering points for the dynamic control of consumers within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, tariffing can be calculated using the site / building connection meter and production, or alternatively using production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be summed virtually (+1 virtual summation meter)


<div className="bild--voll">

![ZEV association for own consumption – Figure 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02_EN.png)

</div>

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation in a ZEV. With [eCarUp](https://www.ecarup.com), however, other compatible hardware approaches are also available.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com) or tariffed via the apartment billing directly with [smart-me Billing](/konfiguration/billing).

- The control of the Pico charging stations and the protection of the infrastructure are handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is handled directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).


### Heat and water

- Metering of third-party hardware via [LoRa](/produkte/lora-gateway-software) or [M-Bus](/produkte/m-bus-gateway) or [API](/schnittstellen/api)

- Supports already installed as well as new hardware from the usual suppliers Neovac, Techem, GWF, ISTA or Brunata and more.

- Either total meters of the generation or consumption meters in the billing units are measured, or both, e.g. for Minergie.

- Billing via the smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung) integration.




## Plan your project now with our configurator

Based on your input, the Projektkonfigurator creates a bill of materials of all smart-me products, the number of metering points and a visual diagram for review.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/projektkonfigurator)

## Examples of ZEVs

### ZEV as a single building

- Here, the building connection is relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems, and for accurate tariffing.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property management company.


<div className="bild--voll">

![ZEV association for own consumption – Figure 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03_EN.png)

</div>

### ZEV as a site solution

- The site metering point is decisive for perfect tariffing accuracy

- Here, the building connections are relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property management company.


<div className="bild--voll">

![ZEV association for own consumption – Figure 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04_EN.png)

</div>

### Diagram example

<div className="bild--voll">

![ZEV association for own consumption – Figure 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05_EN.png)

</div>
