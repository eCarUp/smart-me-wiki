---
title: 'Standard Metering Concept'
slug: '/planung/standard-messkonzept'
description: 'Tariff setup for the standard metering concept'
sidebar_label: 'Standard Metering Concept'
---
![Standard metering concept – Figure 1](/img/planung-standard-messkonzept/01.png)

## Tariff setup for the standard metering concept

The tariffs for the metering concept are set up using the balance meter and production, or alternatively using consumption / PV or battery with a reference to the balance meter.

### Tariff setup with solar tariff incl. vZEV

The balance meter is referenced for the tariff calculation.

When you use the solar tariff incl. vZEV (Solartarif inkl. vZEV), no additional licences for virtual meters are required.

Balance meter

The building connection meter is referenced as the balance meter (Bilanzzähler).

![Standard metering concept – Figure 2](/img/planung-standard-messkonzept/02.png)

Production meter

All production meters and battery meters are entered as production (Produktion).

![Standard metering concept – Figure 3](/img/planung-standard-messkonzept/03.png)

### Tariff setup using the solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation. It is only checked later for verification.

When you use the solar tariff (consumption / PV) (Solartarif Verbrauch / PV), additional licences for virtual meters are required.

At a minimum, total consumption is required. It is created as a virtual meter made up of all participating outgoing circuits of the tenant electricity.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + Common areas + Parking space 1 + Parking space 2 + Heat pump

Under production (Produktion), add the solar system meter, or the battery meter for the battery tariff.

Under total consumption (Gesamtverbrauch), enter the virtually created total consumption.

The balance meter is deliberately referenced here to increase accuracy!

![Standard metering concept – Figure 4](/img/planung-standard-messkonzept/04.png)

### Validation and billing by the energy supplier

The totals of the grid electricity sold roughly match the amount of electricity billed by the energy supplier.

The amount of feed-in electricity in the export register of the balance meter roughly matches the amount in the energy supplier's feed-in remuneration.
