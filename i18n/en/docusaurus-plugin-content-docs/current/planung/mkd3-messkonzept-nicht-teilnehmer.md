---
title: 'MKD3 metering concept (partial participation)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffing of the MKD3 metering concept with non-participants'
sidebar_label: 'MKD3 metering concept (non-participants)'
symbol: 'ausserhalb'
---
<div className="bild--voll">

![MKD3 metering concept (with non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01_EN.png)

</div>

## Tariffing of the MKD3 metering concept with non-participants

The metering concept is tariffed exclusively on the basis of production and the consumers participating in the tenant electricity scheme.
The house connection meter should be included as a cross-check and not deliberately left out.

## General metering concept

### Licensable metering points:

- Every metering point that needs to be recorded requires a [license](/planung/cloud-lizenzen).

- Every virtual meter (total production, total consumption) requires a [license](/planung/cloud-lizenzen).

### Electricity

- All billing units to be invoiced must be measured with a metering point (apartments, heat pumps, common area circuits). Hardware options for measuring electrical energy: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (meter board)](/produkte/nimbus-100a)

- All production and storage systems must be measured, either together or separately.

- The measurement at the house connection provides the correct balance total for accurate tariffing. House connection measurements are the most important metering points for the dynamic control of consumers within buildings.

- Tariffing and billing via [smart-me Billing](/konfiguration/billing)

- Depending on the model, tariffing can be calculated using the balance / house connection meter and production, or alternatively using production and a virtual total consumption. (+1 virtual total consumption meter)

- If several production sources are measured (batteries / PV), they must be summed virtually (+1 virtual summation meter)

<div className="bild--voll">

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02_EN.png)

</div>

In the example, apartment A in house B does not participate in the tenant electricity scheme: its meter remains with the grid operator and is not included in the metering concept.

### E-mobility with smart-me and eCarUp

- E-mobility is implemented through private, semi-private or public charge points.

- The [smart-me Pico 22kW](/produkte/pico-ladestation) hardware offers the optimal mix of hardware for public operation and private operation in a tenant electricity scheme. With [eCarUp](https://www.ecarup.com), however, there are also other compatible hardware options.

- Billing is done, for example, by credit card at a flat rate with [eCarUp](https://www.ecarup.com) or tariffed directly via the apartment billing with [smart-me Billing](/konfiguration/billing).

- The control of the Pico charging stations and the protection of the infrastructure are handled by the advanced [multilevel load management](/konfiguration/multilevel-lastmanagement).

- Load shedding is handled either directly by the [hardware](/produkte/pico-ladestation) or by the [multilevel load management](/konfiguration/multilevel-lastmanagement).

## Balancing and validation of the MKD3

![MKD3 metering concept (with non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Balancing

The quantity of grid electricity sold does not match the value on the energy supplier's invoice, and the feed-in quantity does not match the value recorded by the balance meter.

With MKD3, the remuneration for non-participants is made once per billing period.

**Reason for the deviation**

The calculation and distribution in smart-me calculates the consumption of the participants in 15-minute intervals. This clearly identifies who draws how much electricity from which source and when.

**Example:**

If at a time X, 100 kWh of solar power is produced within 15 minutes and the tenant electricity members together consume 0 kWh while the non-participants consume 100 kWh, then no solar power is consumed by tenant electricity members at that time.

The virtual balance of the tenant electricity scheme therefore correctly calculates 0 kWh consumption, 100 kWh surplus.
The physical balance meter, on the other hand, measures 0 kWh consumption, 0 kWh surplus, because the non-participants consumed the entire production directly.

**The energy suppliers' compensation calculation follows this rule:**

Tenant electricity balance import compensated = balance meter import value - import consumption of the non-participants
\--> If the import becomes &lt; 0 due to the compensation, the remainder of the deduction is added to the export of the balance.

For these 15 minutes, this would look as follows:
Balance import compensated = balance value 0 kWh - consumption of non-participants 100 kWh --> consumption 0 kWh (delta 100 kWh remainder)

Balance export compensated = 0 kWh + 100 kWh = 100 kWh

Since, depending on the case, the compensation does not take place every 15 minutes but once per period, this results in different values for validation!

### Validation

**If the energy supplier compensates on a 15-minute basis:**

If the energy supplier performs this compensation on a 15-minute basis, the result of the smart-me virtual balancing equals the energy supplier's balancing.

**Validation**

- Total grid electricity value invoiced = sum of the grid electricity value sold in the tenant electricity scheme

- Sum of solar power sold internally = production - feed-in quantity (energy supplier invoice)




**If the energy supplier compensates once per period:**

If the energy supplier performs the compensation once, e.g.  per month, larger discrepancies arise between the energy supplier's values and the energy quantities sold by us. Validation then takes some getting used to.

**Reason:**

If the compensation is made once per month using the total consumption of the non-participants, no account is taken of whether and how much the non-participants were actually supplied by the local producer, and how this changed the virtual balance.

In parallel, the system correctly calculates for the tenant electricity participants the value actually drawn from each source, based on the timely use and availability of the production. (It takes into account whether electricity from the current production was actually consumed by tenant electricity participants or whether grid electricity was in fact drawn to cover demand.)

Since two worlds collide here (in terms of timing), the result is never the same, so a simple reconciliation is not possible.

**Conclusion:**

If the compensation takes place once per month, the entire consumption of the non-participants is credited as grid electricity.
\--> This is generally beneficial for the tenant electricity provider. (The energy supplier necessarily overcompensates.)

**Example of a 1-month compensation:**

- Balance import measurement = 100 KWh

- Balance export measurement = 50 kWh

- Non-participant consumption total = 100 kWh

- Tenant electricity participant consumption total = 100 kWh

- Production = 250 kWh

In this example, the total consumption of the non-participants is now deducted from the balance measurement:

Grid consumption invoiced by the energy supplier = balance import 100 kWh - non-participant consumption total 100 kWh = consumption 0kWh

In this case, we are not invoiced for any grid electricity for the tenant electricity scheme, even though the tenant electricity participants would definitely show grid electricity consumption over the month (e.g. electricity consumption at night).

In this case, the grid electricity is therefore always overcompensated.
The balance export, on the other hand, is not correctly adjusted and is consequently always too low.

Instead of the feed-in remuneration for this quantity, we receive the grid electricity tariff as a discount.

**Validation**

- The grid consumption invoiced by the energy supplier is always lower than the grid electricity quantity invoiced by us. (Additional income)

- The energy supplier's feed-in quantity corresponds to the quantity of the physical balance meter export value and is lower than the calculated quantity of the virtual balance. (Loss due to non-remuneration)

- The sum of the remunerated feed-in quantity and the quantity documented by the energy supplier for the tenant electricity surcharge corresponds to the total production quantity.


\--> The overcompensation is profitable for the tenant electricity operator in any case.
