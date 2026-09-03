---
title: 'Standard Metering Concept'
slug: '/konfiguration/billing/mieterstrom/standard-messkonzept'
description: 'Tariffing of the standard metering concept'
sidebar_label: 'Standard Metering Concept'
---
![Standard metering concept – figure 1](/img/konfiguration-billing-mieterstrom-standard-messkonzept/01.png)

## Tariffing of the standard metering concept

The metering concept is tariffed either via a balance meter and production, or alternatively via consumption / PV or battery with a reference to the balance meter.

### Tariffing with solar tariff incl. vZEV (virtual ZEV)

The balance meter is referenced for the tariff calculation.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are due.

Balance meter

The house connection meter is referenced as the balance meter.

![Standard metering concept – figure 2](/img/konfiguration-billing-mieterstrom-standard-messkonzept/02.png)

Production meters

All production meters and battery meters are recorded as production.

![Standard metering concept – figure 3](/img/konfiguration-billing-mieterstrom-standard-messkonzept/03.png)

### Tariffing by means of solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are due.

The total consumption is required as a minimum. It is created as a virtual meter consisting of all participating outgoing circuits of the tenant electricity.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, the solar system meter or, in the case of the battery tariff, the battery meter is added in each case.

For the total consumption, the virtually created total consumption is entered.

The balance meter is deliberately referenced here in order to increase accuracy!

![Standard metering concept – figure 4](/img/konfiguration-billing-mieterstrom-standard-messkonzept/04.png)

### Validation and billing of the energy supplier

The totals of the grid electricity sold correspond approximately to the amount of electricity billed by the energy supplier

The amount of electricity fed back in the export register of the balance meter corresponds approximately to the value of the amount in the feed-in remuneration of the energy supplier.
