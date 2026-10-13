---
title: 'Differences between smart-me Billing and the energy supplier'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'This section describes a uniform method for checking whether there is a difference between the invoice from the energy supplier and smart-me Billing.'
sidebar_label: 'Differences with the utility'
---
This section describes a uniform method for checking whether there is a difference between the invoice from the energy supplier and smart-me Billing. 

## Method

There are two approaches to tracking down the error. Depending on the situation, one or the other approach is easier.

- smart-me Billing is checked again. A configuration error can lead to incorrect values in smart-me Billing.

- The Excel spreadsheet is filled in. The Excel file can be downloaded here: [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Requirements

1.  The ZEV (association for own consumption) has a smart-me meter at the house connection (HAK)

2.  An invoice from the utility for consumption and feed-in remuneration (feed-in) is available for a complete billing period.


## Procedure for filling in the Excel file

1.  The list is filled in from top to bottom.

2.  The fields to be filled in manually are marked in blue.

3.  The green rows must then be checked.


The Excel file contains various checkpoints.
The error must always be looked for at the first checkpoint that is not met. The checkpoints build on each other accordingly.

Each checkpoint serves a specific purpose:

- Difference balance consumption: This determines whether the smart-me balance meter is within the measurement tolerance of 1% compared to the utility for consumption.

- Difference balance feed-in remuneration: This determines whether the smart-me balance meter is within the measurement tolerance of 1% compared to the utility for feed-in remuneration (feed-in).

- Balance vs. sub-consumers: This checks whether the sub-meters and the smart-me balance meter are within the measurement tolerance of 1%. The standby consumption of the PV system and of all smart-me devices is taken into account.

- Meter reading vs. virtual meters: This checks whether every kilowatt hour that was measured is also billed in smart-me Billing.

- Grid consumption utility vs. smart-me Billing: This checks whether the peak, off-peak and solar tariffs in smart-me Billing match the invoice from the utility.

- Self-consumption vs. smart-me Billing: This checks whether every kilowatt hour of self-consumed PV electricity is also billed.


## Disclaimer

- The Excel file is a guided template for checking differences. smart-me accepts no definitive liability for the content of the Excel file.

- The Excel file is still in beta; it was created in late summer 2023.

- The Excel file currently cannot check all cases and may still contain minor errors. These are corrected on an ongoing basis.


## Analysis by smart-me

If a problem is found in the billing and you would like us to analyze it, we need the following information:

- Login details for the account

- Invoices from the utility for consumption

- Feed-in remuneration from the utility


Note: We only analyze installations that comply with our metering concept. This includes that every production and every consumer, including the balance meter, is measured.
