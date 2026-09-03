---
title: 'MKD3 metering concept (with non-participants)'
slug: '/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
---
![MKD3 metering concept (with non-participants) – Figure 1](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffing of the MKD3 metering concept with non-participants

The metering concept is tariffed exclusively via production and the participants in the tenant electricity scheme

### Tariffing with solar tariff incl. vZEV (virtual ZEV)

The balance meter is ignored for the tariffing calculation; it is only considered later for verification.

When using the solar tariff incl. vZEV, no additional licenses for virtual meters are due.

Balance meter

All participating apartments / parking spaces and production units as balance meters.

![MKD3 metering concept (with non-participants) – Figure 2](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meters

Record all production meters as production


![MKD3 metering concept (with non-participants) – Figure 3](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffing using the solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariffing calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licenses for virtual meters are due.

Total consumption is required at a minimum. It is created as a virtual meter consisting of all participating outgoing feeders of the tenant electricity scheme.

Total consumption = Apartment 1.1 + Apartment 1.2 + Common areas + Parking space 1 + Parking space 2 + Heat pump

Under production, the solar system meter and, for the battery tariff, the battery meter are added respectively.

For total consumption, the virtually created total consumption is entered.

The balance meter is deliberately not referenced so as not to incorrectly correct the virtual balancing!

![MKD3 metering concept (with non-participants) – Figure 4](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Balancing and validation of MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The quantity of grid electricity sold does not correspond to the value on the utility's invoice, and the feed-in quantity does not correspond to the value recorded by the balance meter.

With MKD3, remuneration for non-participants is paid periodically, once per billing period.

Reason for the deviation

The calculation and distribution in smart-me calculates the consumption and use of the participants in 15-minute intervals. This clearly identifies who draws electricity from which source, when, and how much.

Example:

If at a point in time X 100 kWh of solar electricity are produced within 15 minutes and the tenant electricity members together draw 0 kWh, while the non-participants draw 100 kWh, then at that point in time no solar electricity is drawn by the tenant electricity members.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption, 100 kWh surplus.
The physical balance meter, on the other hand, measures 0 kWh consumption, 0 kWh surplus, because the non-participants consumed the entire production directly.

The utilities' compensation calculation follows this rule:

Tenant electricity balance import compensated = balance meter import value - import consumption of the non-participants
\--> If the import becomes &lt; 0 due to the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes it would therefore look like this:
Balance import compensated = balance value 0 kWh - non-participant consumption 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since the compensation, depending on the case, does not happen every 15 minutes but periodically once, this results in different values for the validation!

### Validation

If 15-minute compensation is carried out by the utility:

If this compensation is carried out by the utility on a 15-minute basis, the result of smart-me's virtual balancing is equal to the utility's balancing.

Validation

- Invoiced total grid electricity value = sum of grid electricity value sold in the tenant electricity scheme

- Sum of internally sold solar electricity = production - feed-in quantity (utility invoice)




If the compensation is carried out once per period by the utility:

If the compensation is carried out once by the utility, e.g. per month, larger discrepancies arise between the utility's values and the energy quantities we have sold. The validation now takes a little more getting used to.

Reason:

If the compensation is carried out once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer and how the virtual balance changed as a result.

In parallel, the system correctly calculates for the tenant electricity participants the value actually drawn from the sources, based on the timely use and availability of production. (It takes into account whether electricity from the current production was actually taken by tenant electricity participants or whether grid electricity was in fact drawn to cover demand)

Because two worlds collide here (in terms of timing), the result is never the same, which would allow a simple reconciliation.

Finding

If the compensation takes place once per month, the entire consumption of the non-participants is remunerated as grid electricity.
\--> This is fundamentally beneficial for the tenant electricity provider. (Over-compensation by the utility necessarily occurs)

Example of a 1-month compensation:

Balance import measurement = 100 KWh

Balance export measurement = 50 kWh

Non-participant consumption total = 100 kWh

Tenant electricity participant consumption total = 100 kWh

Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption invoiced by the utility = balance import 100 kWh - non-participant consumption total 100 kWh = consumption 0 kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity scheme, even though the participants in the tenant electricity scheme would definitely show grid electricity consumption over the month (e.g. electricity consumption at night).

Grid electricity is therefore always over-compensated in this case.
The balance export, on the other hand, is not adjusted correctly for this and is consequently always too low.

Instead of a feed-in remuneration for the quantity, we receive the grid electricity tariff as a discount.

Validation

- The utility's invoiced grid consumption is always smaller than the quantity of grid electricity we invoice. (Additional revenue)

- The utility's feed-in quantity corresponds to the quantity of the physical balance meter's export value and is smaller than the calculated quantity of the virtual balance. (Loss due to non-remuneration)

- The quantity of the remunerated feed-in quantity and the quantity documented by the utility for the tenant electricity surcharge corresponds to the total production quantity.


\--> The over-compensation is profitable for the tenant electricity operator in every case.
