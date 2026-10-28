---
title: 'MKD3 metering concept (partial participation)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
symbol: 'ausserhalb'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffing of the MKD3 metering concept with non-participants

The metering concept is tariffed exclusively via production and the consumers participating in tenant electricity.
The building connection meter should be included as a cross-check and should not be deliberately left out.


## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The quantity of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in quantity does not match the value recorded by the balancing meter.

With MKD3, the remuneration for non-participants is settled once per billing period.

**Reason for the deviation**

The calculation and allocation in smart-me computes the consumption and usage of the participants in 15-minute intervals. This clearly identifies who draws electricity from which source, when, and how much.

**Example:**

If, at a point in time X, 100 kWh of solar power is produced within 15 minutes and the tenant electricity members together consume 0 kWh while the non-participants consume 100 kWh, no solar power is drawn by tenant electricity members at that point in time.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption, 100 kWh surplus.
The physical balancing meter, on the other hand, measures 0 kWh consumption, 0 kWh surplus, because the non-participants consumed the entire production directly.

**The energy supplier's compensation calculation follows this rule:**

Tenant electricity balance import compensated = balancing meter import value - consumption import of non-participants
\--> If the import becomes &lt; 0 through the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption of non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation does not take place every 15 minutes but once per period, this results in different values for the validation!

### Validation

**If the energy supplier compensates on a 15-minute basis:**

If the energy supplier performs this compensation on a 15-minute basis, the result of smart-me's virtual balancing is the same as the energy supplier's balancing.

**Validation**

- Total grid electricity value billed = sum of grid electricity value sold within the tenant electricity scheme

- Sum of solar power sold internally = production - feed-in quantity (energy supplier invoice)




**If the energy supplier compensates once per period:**

If the energy supplier performs the compensation once, e.g. per month, larger discrepancies arise between the energy supplier's values and the energy quantities we sold. Validation then takes some getting used to.

**Reason:**

If the compensation is performed once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer and how this changed the virtual balance.

In parallel, the system calculates for the tenant electricity participants the value actually drawn from each source, consistent with the timely use and availability of the production. (It takes into account whether electricity from the current production was actually taken by tenant electricity participants or whether grid electricity was in fact drawn to cover demand.)

Since two worlds collide here (in terms of timing), the result is never the same, which would allow a simple reconciliation.

**Conclusion:**

If the compensation takes place once per month, the entire consumption of the non-participants is credited as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier necessarily overcompensates.)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participants consumption total = 100 kWh

Tenant electricity participants consumption total = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption billed by the energy supplier = balance import 100 kWh - non-participants consumption total 100 kWh = consumption 0kWh

In this case, we are not billed for any grid electricity for the tenant electricity scheme, even though the tenant electricity participants would definitely show grid consumption over the month (e.g. electricity consumption at night).

In this case, the grid electricity is therefore always overcompensated.
The balance export, on the other hand, is not adjusted correctly and is consequently always too low.

Instead of feed-in remuneration for this quantity, we receive the grid electricity tariff as a discount.

**Validation**

- The grid consumption billed by the energy supplier is always lower than the grid electricity quantity we billed. (Additional revenue)

- The energy supplier's feed-in quantity matches the export value of the physical balancing meter and is lower than the quantity calculated by the virtual balance. (Loss due to non-remuneration)

- The remunerated feed-in quantity plus the quantity documented by the energy supplier for the tenant electricity premium equals the total production quantity.


\--> In any case, the overcompensation is profitable for the tenant electricity operator.
