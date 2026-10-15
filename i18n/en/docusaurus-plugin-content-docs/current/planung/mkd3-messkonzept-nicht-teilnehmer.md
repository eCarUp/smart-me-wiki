---
title: 'MKD3 metering concept (with non-participants)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariff calculation for the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariff calculation for the MKD3 metering concept with non-participants

The tariff calculation for this metering concept is based exclusively on the production and the tenant electricity participants.

### Tariff calculation with solar tariff incl. vZEV

The balancing meter is ignored for the tariff calculation. It is only used later for verification.

Using the solar tariff incl. vZEV (Solartarif inkl. vZEV) does not require any additional licences for virtual meters.

Balancing meter (Bilanzzähler)

Add all participating apartments / parking spaces and production systems as balancing meters.

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meter (Produktionszähler)

Add all production meters as production.


![MKD3 metering concept (with non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariff calculation using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balancing meter is ignored for the tariff calculation. It is only used later for verification.

Using the solar tariff (consumption / PV) requires additional licences for virtual meters.

At a minimum, the total consumption is required. It is created as a virtual meter made up of all participating tenant electricity feeders.

Total consumption = Apartment 1.1 + Apartment 1.2 + Common areas + Parking space 1 + Parking space 2 + Heat pump

Under Production (Produktion), add the solar system meter, or the battery meter for the battery tariff.

Under Total consumption (Gesamtverbrauch), enter the virtually created total consumption.

The balancing meter is deliberately not referenced so that the virtual balancing is not incorrectly corrected!

![MKD3 metering concept (with non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The amount of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in amount does not match the value recorded by the balancing meter.

With MKD3, the remuneration for non-participants is applied once per billing period.

Reason for the discrepancy

The calculation and allocation in smart-me determines the consumption of the participants in 15-minute intervals. This clearly identifies who draws electricity from which source, when, and how much.

Example:

If at a time X, 100 kWh of solar electricity is produced within 15 minutes and the tenant electricity members together consume 0 kWh while the non-participants consume 100 kWh, then no solar electricity is consumed by the tenant electricity members at that time.

The virtual balance of the tenant electricity therefore correctly calculates 0 kWh consumption and 100 kWh surplus.
The physical balancing meter, however, measures 0 kWh consumption and 0 kWh surplus, because the non-participants consumed the entire production directly.

The energy supplier's compensation calculation follows this rule:

Tenant electricity balance import compensated = balancing meter import value - import consumption of the non-participants
\--> If the import becomes &lt; 0 through the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption of non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation is not applied every 15 minutes but once per period, this results in different values for the validation!

### Validation

If the energy supplier applies the compensation every 15 minutes:

If the energy supplier applies this compensation on a 15-minute basis, the result of the smart-me virtual balancing is identical to the energy supplier's balancing.

Validation

- Total grid electricity value billed = sum of grid electricity value sold within the tenant electricity

- Sum of solar electricity sold internally = production - feed-in amount (energy supplier's invoice)




If the energy supplier applies the compensation once per period:

If the energy supplier applies the compensation once, e.g. per month, larger discrepancies arise between the energy supplier's values and the energy quantities sold by us. Validation then takes some getting used to.

Reason:

If the compensation is applied once per month using the total consumption of the non-participants, it does not take into account whether and how much the non-participants were actually supplied by the local producer, and how this changed the virtual balance.

At the same time, the system calculates for the tenant electricity participants the value actually drawn from each source, in line with the timely use and availability of the production. (It takes into account whether electricity from the current production was actually consumed by tenant electricity participants, or whether grid electricity was in fact drawn to cover demand.)

Since two worlds collide here (in terms of timing), the result will never be the same, which would allow a simple reconciliation.

Conclusion

If the compensation takes place once per month, the entire consumption of the non-participants is credited as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier necessarily overcompensates.)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants total consumption = 100 kWh

Tenant electricity participants total consumption = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is deducted from the balance measurement:

Grid consumption billed by the energy supplier = balance import 100 kWh - non-participants total consumption 100 kWh = consumption 0kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity, even though the tenant electricity participants would definitely have had grid electricity consumption over the month (e.g. electricity consumption at night).

In this case, the grid electricity is therefore always overcompensated.
The balance export, on the other hand, is not adjusted correctly and is consequently always too low.

Instead of feed-in remuneration for this amount, we receive the grid electricity tariff as a discount.

Validation

- The grid consumption billed by the energy supplier is always lower than the grid electricity quantity billed by us. (Additional revenue)

- The energy supplier's feed-in amount corresponds to the physical balancing meter's export value and is lower than the amount calculated by the virtual balance. (Loss due to non-remuneration)

- The remunerated feed-in amount plus the amount documented by the energy supplier for the tenant electricity surcharge equals the total production amount.


\--> The overcompensation is profitable for the tenant electricity operator in every case.
