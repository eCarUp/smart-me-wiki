---
title: 'Measurement concept producers behind houses'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'We explain here what measures need to be taken to map the measurement concept for several producers behind different houses.'
sidebar_label: 'Measurement concept producers behind houses'
---
We explain here what measures need to be taken to map the measurement concept for several producers behind different houses.



### Requirements

You need a smart-me Professional subscription 

## Important remarks

smart-me does not recommend this measurement concept for the following reasons:

- There is currently no fully automated solution in the smart-me system to map this measurement concept.

    - Note: Third-party systems from smart-me, such as [egonline](/drittsysteme/egonline), offer solutions that are compatible with smart-me meters. Please contact the relevant providers directly for more information.

- A manual effort of approx. 30 minutes per billing unit and billing period is to be expected.

- Due to the complexity of the system, this can lead to many queries. smart-me reserves the right to charge for support requests.

- The number of kWh sold within the ZEV is averaged over the billing period based on the surplus of the individual parties. The same applies to the retransfer to the electricity company.

- The self-consumption of each house that has its own photovoltaic system cannot be determined.

- The graphics provided by smart-me are not compatible with this measurement concept.


smart-me reserves the right to list further restrictions. Only a few buildings are currently equipped with this measurement concept. For this reason, smart-me is not focusing on the development of these installations. It is possible that they will become easier in the future, but we are not focusing on this measurement concept in the development.

## Measurement concept

Balance, houses and, if available, general are measured.

The measurement of PV is optional and offers no advantage for billing.

![Measurement concept producers behind houses – figure 1](/img/_en/planning-measurement-concept-producers-behind-houses/01.png)

![Measurement concept producers behind houses – figure 2](/img/_en/planning-measurement-concept-producers-behind-houses/02.png)

## Configuration

The information below requires that the configuration for smart-me [Billing](/konfiguration/billing) with the standard measurement concept is known.

Virtual meters

The total of all meters that are billing relevant.

Name: Total consumption + production



![Measurement concept producers behind houses – figure 3](/img/_en/planning-measurement-concept-producers-behind-houses/03.png)

Virtual tariffs

[Billing](/konfiguration/billing) configuration according to standard measurement concept 

Deviation in the virtual tariff:

- Tariff type: Battery tariff

- Solar or battery meter: Total consumption + production

- Total consumption: Total consumption + production

- Balance meter: Main meter


![Measurement concept producers behind houses – figure 4](/img/_en/planning-measurement-concept-producers-behind-houses/04.png)

## Billing

The information below assumes that the invoicing for smart-me [Billing](/konfiguration/billing) with the standard measurement concept is familiar.

Fill out Excel

- [Measurement concept producers behind houses](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 


Purpose of Excel

- Determines the amount that can be credited per party.


Required information

- Billing from the local energy supplier

- Report values from smart-me

- PDF invoices (billing) from smart-me.


Calculation logic

- Surplus per house is determined (cell B35 to B43)

- Proportion of PV electricity per house is determined (cell C35 to C43)

- Proportional distribution according to surplus, averaged over the entire billing period


![Measurement concept producers behind houses – figure 5](/img/_en/planning-measurement-concept-producers-behind-houses/05.png)

Complete other position

Values according to the Excel credit note can be inserted as a minus amount for each billing unit.

![Measurement concept producers behind houses – figure 6](/img/_en/planning-measurement-concept-producers-behind-houses/06.png)

Generate invoice again

In smart-me Billing

![Measurement concept producers behind houses – figure 7](/img/_en/planning-measurement-concept-producers-behind-houses/07.png)
