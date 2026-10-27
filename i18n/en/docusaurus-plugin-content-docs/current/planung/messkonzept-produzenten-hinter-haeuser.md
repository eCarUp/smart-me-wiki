---
title: 'Measurement concept producers behind houses'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Here we explain which measures need to be taken to implement the metering concept for multiple producers behind different houses.'
sidebar_label: 'Measurement concept producers behind houses'
symbol: 'solar'
---
Here we explain which measures need to be taken to implement the metering concept for multiple producers behind different houses.

### Requirement

You need a smart-me Professional subscription

## Important notes

smart-me does not recommend this metering concept for the following reasons:

- There is currently no fully automated solution in the smart-me system to implement this metering concept.

    - Note: smart-me third-party systems, such as [egonline](/drittsysteme/egonline), offer solutions that are compatible with smart-me meters. Please contact the respective providers directly for information.

- You should expect manual work of approx. 30 minutes per billing unit and billing period.

- Due to the complexity of the installation, this can lead to many queries. smart-me reserves the right to charge for the effort involved in support requests.

- The number of kWh sold between parties within the ZEV (association for own consumption) is determined as an average over the billing period based on the surplus of the individual parties. The same applies to the feed-in to the energy supplier.

- The self-consumption of each house that also has a photovoltaic system cannot be determined.

- The charts provided by smart-me are not compatible with this metering concept.


smart-me reserves the right to list further restrictions. Currently, only a few buildings are equipped with this metering concept. For this reason, smart-me is not focusing on the development of these properties. They may become easier in the future, but we are not prioritizing this metering concept in our development.

## Metering concept

The balance, the houses and, if present, the common areas are metered.

Metering the PV is optional and offers no advantage for billing.

![Measurement concept producers behind houses – Figure 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Measurement concept producers behind houses – Figure 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Configuration

The information below assumes that you are familiar with the configuration of a smart-me [Billing](/konfiguration/billing) with the standard metering concept.

Virtual meters

Sum of all meters that are relevant for billing.

Name: Total consumption + production



![Measurement concept producers behind houses – Figure 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Virtual tariffs

[Billing](/konfiguration/billing)\-configuration in accordance with the standard metering concept 

Deviation for the virtual tariff:

- Tariff type (Tarif Typ): Battery tariff (Batterie Tarif)

- Solar or battery meter (Solar oder Batterie Zähler): Total consumption + production

- Total consumption (Gesamtverbrauch): Total consumption + production

- Balance meter (Bilanzzähler): Main meter


![Measurement concept producers behind houses – Figure 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Billing

The information below assumes that you are familiar with billing for a smart-me [Billing](/konfiguration/billing) with the standard metering concept.

Fill in the Excel file

- [Measurement concept producers behind houses](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 

Purpose of the Excel file

- Determines the amount that can be credited to each party.

Required information

- Bill from the local energy supplier

- Report values from smart-me

- PDF invoices (Billing) from smart-me.

Calculation logic

- The surplus per house is determined (cells B35 to B43)

- The share of PV electricity per house is determined (cells C35 to C43)

- Distribution proportional to the surplus, averaged over the entire billing period

![Measurement concept producers behind houses – Figure 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Add an "Other" item (Sonstiges)

Values from the Excel credit can be entered as a negative amount for each billing unit.

![Measurement concept producers behind houses – Figure 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Regenerate the invoice

In smart-me Billing

![Measurement concept producers behind houses – Figure 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
