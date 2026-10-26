---
title: 'Prepare Billing'
slug: '/planung/abrechnung-vorbereiten'
description: 'Bill electricity with smart-me energy cost billing'
sidebar_label: 'Prepare Billing'
---

## Billing a ZEV

### Bill electricity with smart-me energy cost billing

This billing type supports a single tariff, dual tariff or multiple tariffs with solar tariffs.

To bill the electricity part of the ZEV (association for own consumption), you need:

- Professional status of the account and smart-me Billing.

- The electricity prices from the utility, including the tariffs.

- Not required: an external tariff signal connected to all meters


### Bill heat and water with the VEWA function (VEWA-compliant)

To generate all energy costs in a VEWA-compliant heating and ancillary costs statement, you need:

- Professional status of the account and [smart-me Billing with VEWA function](/konfiguration/billing/vewa-abrechnung)

- The electricity prices from the utility, including the tariffs

- An overview of the accrued costs for the energies to be billed

- VEWA guidelines

- Optional: Property management software for DTA-VHKA exports

- Optional: An initial energy cost statement from a heating and ancillary costs service provider or the necessary information from your plumbing and heating planner.




## Billing e-mobility in a ZEV

![Prepare Billing – Figure 1](/img/planung-abrechnung-vorbereiten/01.png)

## VEWA and ZEV guidelines

Self-consumption guidelines from EnergieSchweiz (general information, legal forms, costs): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

VEWA model for consumption-based energy and water cost billing: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## How tariffs and remuneration to investors work

### How a tariff is identified and distributed to consumers

The identification of a tariff depends primarily on its assigned measuring devices and an optional time-dependent component (IF/THEN action).

- Grid tariffs apply to residual electricity quantities. This means they always apply to the electricity that could not be assigned to other tariffs by measurements.

- Solar and battery tariffs consider the consumption and feed-in of relevant metering points, such as the PV meter and total consumption or the balance metering, plus an optional time component.


### Determining the share of the electricity mix per 15 minutes

The electricity mix is always determined for 15 minutes and then applied equally to all consumers. 

Example:

- Battery supplies 20 kWh

- Solar system supplies 100 kWh

- The consumption of the entire property is 200 kWh

In this case, the percentage share of each supplier in the total consumption is calculated using the following formula:

% share of the electricity mix = supplier delivery / total consumption of the property

- Battery share = 20 kWh / 200 kWh = 10%

- Solar share = 100 kWh / 200kWh = 50%

- Residual grid electricity = 100% - battery share - solar share = 40%

![Prepare Billing – Figure 2](/img/planung-abrechnung-vorbereiten/02.png)

### Applying the electricity mix to billing units and their consumption

The energy mix above is now applied for the last 15 minutes to each individual billing unit. As a result, everyone has the same entitlement to the energy mix, regardless of how much energy they consume compared to other participants.

- Apartment A total consumption:

    20 kWh (2 kWh from battery, 10kWh from solar, 8 kWh from the grid)

- Apartment B total consumption:

    100 kWh (10 kWh from battery, 50kWh from solar, 40 kWh from the grid)

Note 1: The electricity mix reflects reality and the electricity mix actually prevailing in the ZEV. When electricity is consumed, the consumption corresponds exactly to this mix.
Note 2: This application of the electricity mix gives large consumers a higher availability, in terms of quantity, of low-cost solar and battery electricity.
Note 3: The application of the electricity mix is not intended to handle remuneration to investors or to distribute quotas to consumers. 

![Prepare Billing – Figure 3](/img/planung-abrechnung-vorbereiten/03.png)

### Solar electricity price and remuneration to investors

Best practice for remunerating investors is to give them a share of the profit from the energy generated and thereby compensate them. The prerequisite is that, even if everyone has invested, the solar price is not offered internally at 0 CHF.

If solar and battery electricity have a price, large consumers compensate the other investors for what they owe through this price.

Example with 3 investors and 3 billing units:
The solar price is set at 17 Rp. / kWh.

- Consumer A (200 kWh solar consumption, investment 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consumer B (20 kWh solar consumption, investment 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consumer C ( 50 kWh solar consumption, investment 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


In total, 45.9 CHF has now been generated from the sale of solar electricity.

![Prepare Billing – Figure 4](/img/planung-abrechnung-vorbereiten/04.png)

Since all three have invested equally, at 1/3 each, they are all now entitled to one third of this money generated.

0.33 \* 45.9 CHF = 15.14 CHF remuneration for solar electricity used internally.

- Consumer A (investment 33%):
    34 CHF invoice amount - 15.14 CHF remuneration = 18.86 CHF paid for solar electricity

- Consumer B (investment 33%):
    3.4 CHF invoice amount - 15.14 CHF remuneration = -11.74 CHF profit from solar electricity, i.e. a reduction of their total invoice

- Consumer C ( investment 33%):
    8.5 CHF invoice amount - 15.14 CHF remuneration = -6.64 CHF profit from solar electricity, i.e. a reduction of their total invoice


Note:
The solar tariff should include the production price as well as returns. Example: the 80% rule. The money can then flow into the renewal fund (tax advantages) or be paid back according to the investment costs.
