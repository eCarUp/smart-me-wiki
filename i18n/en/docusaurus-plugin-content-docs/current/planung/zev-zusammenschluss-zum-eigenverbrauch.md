---
title: 'ZEV association for own consumption'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'ZEV (association for own consumption)'
sidebar_label: 'ZEV association for own consumption'
---
## ZEV (association for own consumption)

<div className="row">
<div className="col col--7">

An association for own consumption can consist of a single building or of several buildings sharing the same connection point to the energy supplier.

Within the ZEV, the billing and tariffing of grid electricity and locally produced electricity is in the hands of the ZEV operator.

To carry out this billing, the necessary infrastructure and a consistent metering concept for the respective energy types are required.

Basics

- Private metering

- Private billing

- Grid operator meter at the feed-in point, invoiced by the grid operator

</div>
<div className="col col--5 text--center">

![ZEV association for own consumption – Figure 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>
</div>

## General metering concept

### Metering points subject to a license:

- Every metering point that has to be recorded is [subject to a license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) is [subject to a license](/planung/cloud-lizenzen).

- Every M-Bus or LoRa meter\-register that is to be billed counts as a metering point (combined heat / cooling meter = 2 licenses) and is therefore [subject to a license](/planung/cloud-lizenzen), but the M-Bus Gateway itself is not. Unused registers can be set to inactive.


### Electricity

- All billing units to be invoiced must be measured with a metering point. (Apartments, heat pumps, common area circuits)
    Hardware options for measuring electrical energy
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- The measurement at the building connection / site provides the correct balance total for accurate tariffing. Building connection measurements are the most important metering points for the dynamic control of consumers within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, tariffing can be calculated using the site / building connection meter and the production, or alternatively using the production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be summed virtually (+1 virtual summation meter)


![ZEV association for own consumption – Figure 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation in a ZEV. With [eCarUp](https://www.ecarup.com), however, other compatible hardware approaches are also available.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com) or tariffed directly via the apartment billing with [smart-me Billing](/konfiguration/billing).

- The control of the Pico charging stations and the protection of the infrastructure are handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is handled directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).


### Heat and water

- Metering of third-party hardware via [LoRa](/produkte/lora-gateway-software) or [M-Bus](/produkte/m-bus-gateway) or [API](/schnittstellen/api)

- Supports both already installed and new hardware from the usual suppliers Neovac, Techem, GWF, ISTA or Brunata and more.

- Either the total meters of the generation or the consumption meters in the billing units are measured, or both, e.g. for Minergie.

- Billing via the smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung) integration.




## Plan your project now with our configurator

Based on your input, the project configurator creates the bill of materials from all smart-me products, the number of metering points and a visual schematic for review.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/projektkonfigurator)

## Examples of ZEVs

### ZEV as a single building

- Here, the building connection is relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems, and for accurate tariffing.

- The common area and heat pump (heating) meters are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties by percentage or passed on as a whole to a property management company.


![ZEV association for own consumption – Figure 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### ZEV as a site solution

- The site metering point is decisive for perfect tariffing accuracy.

- Here, the building connections are relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems.

- The common area and heat pump (heating) meters are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties by percentage or passed on as a whole to a property management company.


![ZEV association for own consumption – Figure 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Schematic example

![ZEV association for own consumption – Figure 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
