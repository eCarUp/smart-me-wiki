---
title: 'ZEV Association for Own Consumption'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Association for own consumption (ZEV)'
sidebar_label: 'ZEV Association for Own Consumption'
---
## Association for own consumption (ZEV)

An association for own consumption can consist of a single building as well as several buildings sharing the same connection point towards the energy supplier.

Within the ZEV, the billing and tariffing of grid electricity and locally produced electricity is in the hands of the ZEV operators.

To be able to carry out this billing, the necessary infrastructure and a consistent metering concept for the respective energies are required.



Fundamentals

- Private metering

- Private billing

- Grid operator meter at the feed-in point with an invoice from the grid operator


![ZEV Association for Own Consumption – Figure 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

## General metering concept

### Metering points requiring a license:

- Every metering point that has to be recorded [requires a license](/planung/cloud-lizenzen).

- Every virtual meter (production totals, total consumption) [requires a license](/planung/cloud-lizenzen).

- Every M-Bus or LoRa meter register to be billed counts as a metering point (combined heat / cooling meter = 2 licenses) and therefore [requires a license](/planung/cloud-lizenzen), but not the M-Bus gateway itself. Unused ones can be set to inactive.


### Electricity

- All billing units to be invoiced must be measured with a metering point. (apartments, heat pumps, general supply circuits)
    Hardware options for measuring electrical energy
    \- [Telstar 80A
    ](/produkte/telstar)\- [Telstar CT
    ](/produkte/Telstar-CT)\- [Nimbus 100A (meter panel)](/produkte/nimbus)

- All production and storage systems must be measured, either together or separately.

- Measurement at the house connection / site forms the correct balance total for accurate tariffing. House connection measurements are the most important metering points for dynamic control of loads within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, tariffing can be calculated using the site / house connection meter and production, or alternatively using production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be totalled virtually (+1 virtual summation meter)


![ZEV Association for Own Consumption – Figure 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation within the ZEV. However, with [eCarUp](https://www.ecarup.com) there are also other compatible hardware approaches.

- Billing is done, for example, by credit card at a flat tariff with [eCarUp](https://www.ecarup.com), or tariffed via the apartment billing directly with [smart-me Billing](/konfiguration/billing).

- Control of the Pico charging stations and protection of the infrastructure is handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is solved either directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).


### Heat and water

- Measurement of third-party hardware via [LoRa](/produkte/lora-gateway-software) or [M-Bus](/produkte/m-bus-gateway) or [API](/schnittstellen/api)

- Supports already installed as well as new hardware from the common suppliers Neovac, Techem, GWF, ISTA or Brunata and more.

- Either total meters of the generation or consumption meters in the billing units are measured, or both in the case of Minergie, for example.

- Billing via the smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung) integration.




## Plan your project now with our configurator

Based on your input, the project configurator creates the bill of materials from all smart-me products, the number of metering points and a visual schematic for review.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Examples of ZEVs

### ZEV as a single building

- The house connection is relevant here for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems, and for accurate tariffing.

- The general supply and heat pump (heating) meter is measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed to the parties on a percentage basis, or they can be passed on as a whole to a property management company.


![ZEV Association for Own Consumption – Figure 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### ZEV as a site solution

- The site metering point is decisive for perfect tariffing accuracy

- The house connections are relevant here for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems.

- The general supply and heat pump (heating) meter is measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed to the parties on a percentage basis, or they can be passed on as a whole to a property management company.


![ZEV Association for Own Consumption – Figure 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Schematic example

![ZEV Association for Own Consumption – Figure 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
