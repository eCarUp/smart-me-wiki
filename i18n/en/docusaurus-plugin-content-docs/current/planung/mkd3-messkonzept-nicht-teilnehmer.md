---
title: 'MKD3 metering concept (partial participation)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
symbol: 'ausserhalb'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffing of the MKD3 metering concept with non-participants

Only production and the consumers participating in tenant electricity are used to tariff the metering concept.
Include the building connection meter as a cross-check. Do not deliberately leave it out.


## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The amount of grid electricity sold does not match the amount on the energy supplier's invoice. The feed-in amount does not match the value recorded by the balancing meter.

With MKD3, non-participants are compensated once per billing period.

Reason for the deviation

smart-me calculates and allocates the participants' consumption in 15-minute intervals. This identifies exactly who draws electricity, when, from which source and how much.

Example:

At a time X, 100 kWh of solar power is produced within 15 minutes. The tenant electricity members draw a combined 0 kWh, while the non-participants draw 100 kWh. At that time, the tenant electricity members draw no solar power.

The virtual balance of the tenant electricity therefore correctly shows 0 kWh consumption and 100 kWh surplus.
The physical balancing meter, however, measures 0 kWh consumption and 0 kWh surplus, because the non-participants used the entire production directly.

The energy suppliers' compensation calculation follows this rule:

Tenant electricity balance import compensated = balancing meter import value - import consumption of the non-participants
\--> If the compensation makes the import &lt; 0, the rest of the deduction is added to the export of the balance.

For these 15 minutes, this looks like the following:
Balance import compensated = balance value 0 kWh - non-participant consumption 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Depending on the energy supplier, compensation may happen once per period rather than every 15 minutes. This gives different values for the validation!

### Validation

If the energy supplier compensates every 15 minutes:

If the energy supplier calculates this compensation every 15 minutes, smart-me's virtual balancing gives the same result as the energy supplier's balancing.

Validation

- Total grid electricity invoiced = sum of the grid electricity sold within the tenant electricity

- Sum of solar power sold internally = production - feed-in amount (energy supplier's invoice)




If the energy supplier compensates once per period:

If the energy supplier compensates only once, e.g. per month, the energy supplier's values differ considerably from the amounts of energy we sell. The validation then takes some getting used to.

Reason:

If compensation is done once per month using the total consumption of the non-participants, it ignores whether and how much the local producer supplied to the non-participants. It also ignores how this changed the virtual balance.

At the same time, the system calculates the tenant electricity participants' actual consumption from each source, based on when the production was used and available. (It checks whether the tenant electricity participants actually drew electricity from the current production, or whether grid electricity was drawn to cover their needs.)

The two methods work on different time bases. That is why their results never match and a simple comparison is not possible.

Conclusion

If compensation takes place once per month, the entire consumption of the non-participants is credited as grid electricity.
\--> This generally benefits the tenant electricity provider. (The energy supplier always overcompensates.)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants consumption total = 100 kWh

Tenant electricity participants consumption total = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is subtracted from the balance measurement:

Grid consumption invoiced by the energy supplier = balance import 100 kWh - non-participants consumption total 100 kWh = consumption 0kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity. Yet the tenant electricity participants would certainly have drawn grid electricity over the month (e.g. at night).

In this case, grid electricity is therefore always overcompensated.
The balance export, however, is not corrected for this and is therefore always too low.

Instead of feed-in remuneration for this amount, we receive the grid electricity tariff as a discount.

Validation

- The grid consumption invoiced by the energy supplier is always smaller than the amount of grid electricity we invoice. (Additional revenue)

- The energy supplier's feed-in amount matches the export value of the physical balancing meter. It is smaller than the amount calculated by the virtual balance. (Loss due to non-remuneration)

- The remunerated feed-in amount plus the amount the energy supplier documents for the tenant electricity surcharge equals the total production.


\--> The overcompensation always benefits the tenant electricity operator.
