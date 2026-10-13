---
title: 'MKD3 metering concept (with non-participants)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariff calculation for the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariff calculation for the MKD3 metering concept with non-participants

The tariff calculation for this metering concept is based exclusively on the production and the participants in the tenant electricity scheme.

### Tariff calculation with solar tariff incl. vZEV

The balance meter is ignored for the tariff calculation. It is only used later for verification.

When using the solar tariff incl. vZEV (Solartarif inkl. vZEV), no additional licences for virtual meters are required.

Balance meter (Bilanzzähler)

All participating apartments / parking spaces and productions as balance meters.

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meter (Produktionszähler)

Record all production meters as production.


![MKD3 metering concept (with non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariff calculation using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation. It is only used later for verification.

When using the solar tariff (consumption / PV) (Solartarif (Verbrauch / PV)), additional licences for virtual meters are required.

At a minimum, the total consumption is required. It is created as a virtual meter made up of all participating outgoing circuits of the tenant electricity scheme.

Total consumption = Apartment 1.1 + Apartment 1.2 + General + Parking space 1 + Parking space 2 + Heat pump

The solar system meter, or the battery meter for the battery tariff, is added under Production (Produktion) in each case.

Under Total consumption (Gesamtverbrauch), the virtually created total consumption is stored.

The balance meter is deliberately not referenced so that the virtual balancing is not incorrectly adjusted!

![MKD3 metering concept (with non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The amount of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in amount does not match the value recorded by the balance meter.

With MKD3, the remuneration for non-participants is made once per period in the billing period.

Reason for the deviation

The calculation and allocation in smart-me computes the consumption and usage of the participants in 15-minute intervals. This clearly identifies who draws electricity, when, from which source, and how much.

Example:

If at a point in time X, 100 kWh of solar electricity is produced within 15 minutes and the tenant electricity members together draw 0 kWh while the non-participants draw 100 kWh, then no solar electricity is drawn by the tenant electricity members at that point in time.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption, 100 kWh surplus.
The physical balance meter, on the other hand, measures 0 kWh consumption, 0 kWh surplus, because the non-participants consumed the entire production directly.

The energy supplier's compensation calculation follows this rule:

Tenant electricity balance import compensated = balance meter import value - consumption import of non-participants
\--> If  the import becomes &lt; 0 due to the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption of non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation does not take place every 15 minutes but once per period, this results in different values for the validation!

### Validation

If the energy supplier performs 15-minute compensation:

If the energy supplier performs this compensation on a 15-minute basis, the result of the smart-me virtual balancing is the same as the energy supplier's balancing.

Validation

- Billed total grid electricity value = sum of grid electricity value sold in the tenant electricity scheme

- Sum of solar electricity sold internally = production - feed-in amount (energy supplier's invoice)




If the energy supplier performs the compensation once per period:

If the energy supplier performs the compensation once, e.g. per month, larger discrepancies arise between the energy supplier's values and the energy quantities we sell. The validation then takes some getting used to.

Reason:

If the compensation is performed once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer, and thus how the virtual balance changed.

In parallel, the system correctly calculates the value actually drawn from the sources for the tenant electricity participants, based on the timely use and availability of the production. (It takes into account whether electricity from the current production was actually consumed by tenant electricity participants or whether grid electricity was in fact drawn to cover demand.)

Since two worlds collide here (in terms of timing), the result is never the same, which would allow a simple reconciliation.

Conclusion

If the compensation takes place once per month, the entire consumption of the non-participants is remunerated as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier inevitably overcompensates.)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants consumption total = 100 kWh

Tenant electricity participants consumption total = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption billed by the energy supplier = balance import 100 kWh - non-participants consumption total 100 kWh = consumption 0kWh

In this case, we are not billed for any grid electricity for the tenant electricity scheme, even though the tenant electricity participants would definitely have grid electricity consumption over the month (e.g. electricity consumption at night).

In this case, the grid electricity is therefore always overcompensated.
The balance export, on the other hand, is not adjusted correctly and is consequently always too low.

Instead of feed-in remuneration for this amount, we receive the grid electricity tariff as a discount.

Validation

- The grid consumption billed by the energy supplier is always lower than the grid electricity amount billed by us. (Additional revenue)

- The energy supplier's feed-in amount corresponds to the export value of the physical balance meter and is lower than the amount calculated by the virtual balance. (Loss due to non-remuneration)

- The remunerated feed-in amount plus the amount documented by the energy supplier for the tenant electricity surcharge corresponds to the total production amount.


\--> The overcompensation is profitable for the tenant electricity operator in every case.
