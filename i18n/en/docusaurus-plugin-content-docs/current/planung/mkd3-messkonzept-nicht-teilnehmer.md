---
title: 'MKD3 metering concept (partial participation)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
---
![MKD3 metering concept (with non-participants) – figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffing of the MKD3 metering concept with non-participants

The metering concept is tariffed exclusively via the production and the consumers participating in the tenant electricity scheme.
The building connection meter should be included as a cross-check and not deliberately left out.


## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The quantity of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in quantity does not match the value recorded by the balance meter.

With MKD3, the remuneration for non-participants is calculated once per billing period.

Reason for the deviation

The calculation and allocation in smart-me computes the consumption and usage of the participants in 15-minute intervals. This clearly identifies who draws electricity from which source, when and how much.

Example:

If, at a point in time X, 100 kWh of solar power is produced within 15 minutes and the tenant electricity members together consume 0 kWh while the non-participants consume 100 kWh, then no solar power is consumed by the tenant electricity members at that point in time.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption and 100 kWh surplus.
The physical balance meter, on the other hand, measures 0 kWh consumption and 0 kWh surplus, because the non-participants consumed the entire production directly.

The energy supplier's compensation calculation follows this rule:

Tenant electricity balance import compensated = balance meter import value - import consumption of the non-participants
\--> If the import becomes &lt; 0 as a result of the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption of non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation is not carried out every 15 minutes but once per period, this results in different values for the validation!

### Validation

If the energy supplier compensates in 15-minute intervals:

If the energy supplier carries out this compensation on a 15-minute basis, the result of the smart-me virtual balancing is the same as the energy supplier's balancing.

Validation

- Total grid electricity value invoiced = sum of the grid electricity value sold in the tenant electricity scheme

- Sum of solar power sold internally = production - feed-in quantity (energy supplier's invoice)




If the energy supplier compensates once per period:

If the energy supplier carries out the compensation once, e.g. per month, larger discrepancies arise between the energy supplier's values and the energy quantities we sell. The validation then takes some getting used to.

Reason:

If the compensation is carried out once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer, and how this changed the virtual balance.

In parallel, the system correctly calculates for the tenant electricity participants the value effectively drawn from each source, based on the timely use and availability of the production. (It takes into account whether electricity from the current production was actually taken by tenant electricity participants or whether grid electricity was in fact drawn to cover demand.)

Since two worlds collide here (in terms of timing), the result is never the same, which would allow a simple reconciliation.

Conclusion

If the compensation takes place once per month, the entire consumption of the non-participants is remunerated as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier necessarily overcompensates.)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants total consumption = 100 kWh

Tenant electricity participants total consumption = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption invoiced by the energy supplier = balance import 100 kWh - non-participants total consumption 100 kWh = consumption 0kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity scheme, even though the tenant electricity participants would definitely show grid electricity consumption over the month (e.g. electricity consumption at night).

In this case, the grid electricity is therefore always overcompensated.
The balance export, on the other hand, is not adjusted correctly and is consequently always too low.

Instead of the feed-in remuneration for this quantity, we receive the grid electricity tariff as a discount.

Validation

- The grid consumption invoiced by the energy supplier is always lower than the grid electricity quantity we invoice. (Additional revenue)

- The energy supplier's feed-in quantity corresponds to the export value of the physical balance meter and is lower than the quantity calculated by the virtual balance. (Loss due to non-remuneration)

- The quantity of remunerated feed-in and the quantity documented by the energy supplier for the tenant electricity surcharge corresponds to the total production quantity.


\--> The overcompensation is profitable for the tenant electricity operator in every case.
