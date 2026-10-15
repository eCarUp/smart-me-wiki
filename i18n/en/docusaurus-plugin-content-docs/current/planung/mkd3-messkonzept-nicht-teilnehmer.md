---
title: 'MKD3 metering concept (with non-participants)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffing of the MKD3 metering concept with non-participants

The metering concept is tariffed exclusively via production and the participants in the tenant electricity scheme

### Tariffing with solar tariff incl. vZEV

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are required.

Balance meter (Bilanzzähler)

All participating apartments / parking spaces and productions as balance meters (Bilanzzähler).

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meter (Produktionszähler)

Enter all production meters as production (Produktion)


![MKD3 metering concept (with non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffing using the solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating outgoing circuits of the tenant electricity scheme.

Total consumption = Apartment 1.1 + Apartment 1.2 + General + Parking space 1 + Parking space 2 + Heat pump

In each case, the solar system meter, or the battery meter for the battery tariff, is added under production (Produktion).

The virtually created total consumption is stored under total consumption (Gesamtverbrauch).

The balance meter is deliberately not referenced so as not to incorrectly correct the virtual balancing!

![MKD3 metering concept (with non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The quantity of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in quantity does not match the value recorded by the balance meter.

With MKD3, the remuneration for non-participants is made once per billing period.

Reason for the deviation

The calculation and distribution in smart-me calculates the consumption of the participants in 15-minute intervals. This clearly identifies who draws electricity from which source, when, and how much.

Example:

If, at a point in time X, 100 kWh of solar electricity is produced within 15 minutes and the tenant electricity members together consume 0 kWh while the non-participants consume 100 kWh, no solar electricity is drawn by the tenant electricity members at this point in time.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption, 100 kWh surplus.
The physical balance meter, on the other hand, measures 0 kWh consumption, 0 kWh surplus because the non-participants consumed the entire production directly.

The energy supplier's compensation calculation follows this rule:

Tenant electricity balance import compensated = balance meter import value - import consumption of the non-participants
\--> If the import becomes &lt; 0 due to the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation does not take place every 15 minutes but once per period, this results in different values for the validation!

### Validation

If the energy supplier compensates every 15 minutes:

If the energy supplier carries out this compensation on a 15-minute basis, the result of the virtual balancing by smart-me is equal to the energy supplier's balancing.

Validation

- Total grid electricity value invoiced = sum of the grid electricity value sold in the tenant electricity scheme

- Sum of solar electricity sold internally = production - feed-in quantity (energy supplier's invoice)




If the energy supplier compensates once per period:

If the energy supplier carries out the compensation once, e.g. per month, larger discrepancies arise between the energy supplier's values and the energy quantities we sold. Validation then takes some getting used to.

Reason:

If the compensation is carried out once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer and how this changed the virtual balance.

In parallel, the system correctly calculates for the tenant electricity participants the value effectively drawn from the sources, based on the timely use and availability of the production. (It takes into account whether electricity from the current production was actually consumed by tenant electricity participants or whether grid electricity was in fact drawn to cover the demand)

Since two worlds collide here (in terms of timing), the result is never the same, which would allow a simple reconciliation.

Conclusion

If the compensation takes place once per month, the entire consumption of the non-participants is remunerated as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier inevitably overcompensates)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants consumption total = 100 kWh

Tenant electricity participants consumption total = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption invoiced by the energy supplier = balance import 100 kWh - non-participants consumption total 100 kWh = consumption 0kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity scheme, even though the participants of the tenant electricity scheme would definitely have grid electricity consumption over the month (e.g. electricity consumption at night).

The grid electricity is therefore always overcompensated in this case.
The balance export, on the other hand, is not correctly adjusted for this and is therefore always too low.

Instead of the feed-in remuneration for this quantity, we receive the grid electricity tariff as a discount.

Validation

- The grid consumption invoiced by the energy supplier is always lower than the grid electricity quantity invoiced by us. (Additional revenue)

- The energy supplier's feed-in quantity corresponds to the quantity of the physical balance meter export value and is lower than the calculated quantity of the virtual balance. (Loss due to non-remuneration)

- The remunerated feed-in quantity plus the quantity documented by the energy supplier for the tenant electricity surcharge corresponds to the total production quantity.


\--> The overcompensation is profitable for the tenant electricity operator in any case.
