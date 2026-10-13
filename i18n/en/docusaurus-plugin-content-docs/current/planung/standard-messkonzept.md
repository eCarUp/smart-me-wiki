---
title: 'Standard metering concept'
slug: '/planung/standard-messkonzept'
description: 'Tariff configuration for the standard metering concept'
sidebar_label: 'Standard metering concept'
---
![Standard metering concept – Figure 1](/img/planung-standard-messkonzept/01.png)

## Tariff configuration for the standard metering concept

The tariff configuration for the metering concept is based on the balance meter and production, or alternatively on consumption / PV or battery with reference to the balance meter.

### Tariff configuration with solar tariff incl. vZEV

The balance meter is referenced for the tariff calculation.

When using the solar tariff incl. vZEV (Solartarif inkl. vZEV), no additional licences for virtual meters are required.

Balance meter

The house connection meter is referenced as the balance meter (Bilanzzähler).

![Standard metering concept – Figure 2](/img/planung-standard-messkonzept/02.png)

Production meter

All production meters and battery meters are entered as production (Produktion).

![Standard metering concept – Figure 3](/img/planung-standard-messkonzept/03.png)

### Tariff configuration using the solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating outgoing circuits of the tenant electricity.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + General + Parking space 1 + Parking space 2 + Heat pump

In each case, the solar system meter, or the battery meter for the battery tariff, is added under Production (Produktion).

Under Total consumption (Gesamtverbrauch), the virtually created total consumption is stored.

The balance meter is deliberately referenced here to increase accuracy!

![Standard metering concept – Figure 4](/img/planung-standard-messkonzept/04.png)

### Validation and billing by the energy supplier

The totals of the grid electricity sold correspond approximately to the amount of electricity billed by the energy supplier

The amount of electricity fed back in the export register of the balance meter corresponds approximately to the amount in the feed-in remuneration of the energy supplier.
