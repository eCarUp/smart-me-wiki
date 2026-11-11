---
title: 'Tenant Electricity Metering Concept'
slug: '/planung/standard-messkonzept'
description: 'Tariffing of the tenant electricity metering concept'
sidebar_label: 'Tenant Electricity Metering Concept'
symbol: 'gebaeude'
---
## Tenant electricity

A tenant electricity model can consist of a single building or of several buildings that share the same connection point with the grid operator.

Under tenant electricity, the tenant electricity operator handles the billing and tariffing of grid electricity and locally produced electricity.

To carry out this billing, the necessary infrastructure and a complete metering concept are required.

**Basics:**

- Private metering

- Private billing

- DSO meter at the feed-in point, invoiced by the DSO

<div className="bild--voll">

![Tenant electricity metering concept – Figure 1](/img/planung-standard-messkonzept/01_EN.png)

</div>

## General metering concept

### Metering points requiring a license:

- Every metering point that has to be recorded [requires a license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) [requires a license](/planung/cloud-lizenzen).

### Electricity

- All billing units that are to be invoiced must be measured with a metering point (apartments, heat pumps, common area circuits). Hardware options for measuring electrical energy: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- Metering at the building connection provides the correct balance total for accurate tariffing. Building connection measurements are the most important metering points for dynamic control of consumers within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, tariffing can be calculated using the balance / building connection meter and production, or alternatively using production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be summed virtually (+1 virtual summation meter)

<div className="bild--voll">

![Tenant electricity metering concept – Figure 2](/img/planung-standard-messkonzept/02_EN.png)

</div>

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation within tenant electricity. With [eCarUp](https://www.ecarup.com), however, other compatible hardware approaches are also available.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com), or tariffed directly via the apartment billing with [smart-me Billing](/konfiguration/billing).

- Control of the Pico charging stations and protection of the infrastructure are handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is handled directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).

## Tariffing and design of the tenant electricity metering concept

The metering concept is tariffed via the balance meter and production, or alternatively via consumption / PV or battery with reference to the balance meter.

The metering concept is complete as soon as 100% of all consumers and production sources are measured. The balance meter at the building connection serves as a correction and as a reference.

### Validation and billing by the energy supplier

The totals of grid electricity sold roughly correspond to the amount of electricity invoiced by the energy supplier.

The amount of electricity fed back in the export register of the balance meter roughly corresponds to the amount in the energy supplier's feed-in remuneration.

## Examples of tenant electricity

### Tenant electricity in a single building

- Here, the building connection is relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems, and for accurate tariffing.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property management company.

<div className="bild--voll">

![Tenant electricity metering concept – Figure 3](/img/planung-standard-messkonzept/03_EN.png)

</div>

### Tenant electricity across several buildings

- The balance meter is decisive for perfect tariffing accuracy.

- Here, the building connections are relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems.

- The common area meter and the heat pump (heating) meter are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties as a percentage or passed on as a whole to a property management company.

<div className="bild--voll">

![Tenant electricity metering concept – Figure 4](/img/planung-standard-messkonzept/04_EN.png)

</div>

### Schematic example

<div className="bild--voll">

![Tenant electricity metering concept – Figure 5](/img/planung-standard-messkonzept/05_EN.png)

</div>
