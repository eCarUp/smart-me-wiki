---
title: 'Tenant Electricity Metering Concept'
slug: '/planung/standard-messkonzept'
description: 'Tariffing of the tenant electricity metering concept'
sidebar_label: 'Tenant Electricity Metering Concept'
symbol: 'gebaeude'
---
## Tenant electricity

A tenant electricity model can consist of a single building or of several buildings sharing the same connection point to the grid operator.

Within the tenant electricity model, the tenant electricity operator is responsible for the billing and tariffing of grid electricity and locally produced electricity.

To carry out this billing, the necessary infrastructure and a consistent metering concept are required.

**Basics:**

- Private metering

- Private billing

- Grid operator meter at the feed-in point, invoiced by the grid operator

<div className="bild--voll">

![Tenant electricity metering concept – Figure 1](/img/planung-standard-messkonzept/01.png)

</div>

## General metering concept

### Metering points requiring a license:

- Every metering point that has to be recorded [requires a license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) [requires a license](/planung/cloud-lizenzen).

### Electricity

- All billing units to be invoiced must be measured with a metering point (apartments, heat pumps, common area circuits). Hardware options for measuring electrical energy: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- The measurement at the building connection provides the correct balance total for accurate tariffing. Building connection measurements are the most important metering points for the dynamic control of consumers within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, the tariffing can be calculated using the balance / building connection meter and the production, or alternatively using the production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production units are measured (batteries / PV), they must be summed virtually (+1 virtual sum meter)

<div className="bild--voll">

![Tenant electricity metering concept – Figure 2](/img/planung-standard-messkonzept/02.png)

</div>

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation in tenant electricity models. With [eCarUp](https://www.ecarup.com), however, other compatible hardware approaches are also available.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com) or tariffed directly via the apartment billing with [smart-me Billing](/konfiguration/billing).

- The control of the Pico charging stations and the protection of the infrastructure are handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is handled directly via the [hardware](/produkte/pico-ladestation) or via the [multilevel load management](/konfiguration/multilevel-lastmanagement).

## Tariffing and design of the tenant electricity metering concept

The metering concept is tariffed using the balance meter and production, or alternatively using consumption / PV or battery with reference to the balance meter.

The metering concept is complete as soon as 100% of all consumers and production units are measured. The balance meter at the building connection serves as a correction and as a reference.

### Validation and billing by the energy supplier

The totals of the grid electricity sold correspond approximately to the amount of electricity invoiced by the energy supplier.

The amount of electricity fed back in the export register of the balance meter corresponds approximately to the amount in the energy supplier's feed-in remuneration.

## Examples of tenant electricity

### Tenant electricity in a single building

- Here, the building connection is relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems, and for accurate tariffing.

- The common area and heat pump (heating) meters are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties on a percentage basis or passed on as a whole to a property manager.

<div className="bild--voll">

![Tenant electricity metering concept – Figure 3](/img/planung-standard-messkonzept/03.png)

</div>

### Tenant electricity across several buildings

- The balance meter is decisive for perfect tariffing accuracy.

- Here, the building connections are relevant for the dynamic control of the building infrastructure such as heat pumps, charging stations and solar systems.

- The common area and heat pump (heating) meters are measured separately. This ensures that the energy costs can be shown individually. The energy costs can either be distributed among the parties on a percentage basis or passed on as a whole to a property manager.

<div className="bild--voll">

![Tenant electricity metering concept – Figure 4](/img/planung-standard-messkonzept/04.png)

</div>

### Example diagram

<div className="bild--voll">

![Tenant electricity metering concept – Figure 5](/img/planung-standard-messkonzept/05.png)

</div>
