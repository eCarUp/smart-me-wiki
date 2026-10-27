---
title: 'ZEV association for own consumption'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Association for own consumption (ZEV)'
sidebar_label: 'ZEV association for own consumption'
symbol: 'gebaeude'
---
## Association for own consumption (ZEV)

<div className="row">
<div className="col col--7">

A ZEV (association for own consumption) can consist of a single building or of several buildings that share the same connection point to the energy supplier.

Within the ZEV, the ZEV operators are responsible for billing and setting tariffs for grid electricity and locally produced electricity.

To carry out this billing, the necessary infrastructure and a consistent metering concept for each type of energy are required.

Basics

- Private metering

- Private billing

- DSO meter at the feed-in point, with the DSO's invoice

</div>
<div className="col col--5 text--center">

![ZEV association for own consumption – Figure 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>
</div>

## General metering concept

### Metering points requiring a license:

- Every metering point that has to be recorded [requires a license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) [requires a license](/planung/cloud-lizenzen).

- Every M-Bus or LoRa meter\-register that is to be billed counts as a metering point (combined heat / cooling meter = 2 licenses) and therefore [requires a license](/planung/cloud-lizenzen); the M-Bus Gateway itself does not. Unused registers can be set to inactive.


### Electricity

- All billing units to be invoiced must be measured with a metering point. (Apartments, heat pumps, common area circuits)
    Hardware options for measuring electrical energy
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- The measurement at the building connection / site forms the correct balance total for accurate tariff calculation. Building connection measurements are the most important metering points for the dynamic control of consumers within buildings.

- Tariff calculation and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, the tariff calculation can be based on the site / building connection meter and the production, or alternatively on the production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be summed virtually (+1 virtual sum meter)


![ZEV association for own consumption – Figure 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the ideal mix of hardware for public operation and private operation within the ZEV. With [eCarUp](https://www.ecarup.com), however, other compatible hardware approaches are also available.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com), or tariffed directly through the apartment billing with [smart-me Billing](/konfiguration/billing).

- The advanced [multilevel load management](/konfiguration/multilevel-lastmanagement) controls the Pico charging stations and protects the infrastructure.

- Load shedding is handled directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).


### Heat and water

- Metering of third-party hardware via [LoRa](/produkte/lora-gateway-software) or [M-Bus](/produkte/m-bus-gateway) or [API](/schnittstellen/api)

- Supports both already installed and new hardware from the usual suppliers Neovac, Techem, GWF, ISTA or Brunata and more.

- Either the total meters of the generation, the consumption meters in the billing units, or both (e.g. for Minergie) are measured.

- Billing via the smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung) integration.




## Plan your project now with our configurator

Based on your input, the Projektkonfigurator creates the bill of materials from all smart-me products, the number of metering points and a visual diagram for review.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/projektkonfigurator)

## Examples of ZEVs

### ZEV as a single building

- Here, the building connection is relevant for the dynamic control of the building infrastructure, such as heat pumps, charging stations and solar systems, and for accurate tariff calculation.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property manager.


![ZEV association for own consumption – Figure 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### ZEV as a site solution

- The site metering point is decisive for perfect tariff accuracy

- Here, the building connections are relevant for the dynamic control of the building infrastructure, such as heat pumps, charging stations and solar systems.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property manager.


![ZEV association for own consumption – Figure 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Example diagram

![ZEV association for own consumption – Figure 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
