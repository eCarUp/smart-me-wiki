---
title: 'Differences between smart-me Billing and the energy supplier'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'This section describes a standard method for checking whether there is a difference between the invoice from the energy supplier and smart-me Billing.'
sidebar_label: 'Differences with the utility'
---
This section describes a standard method for checking whether there is a difference between the invoice from the energy supplier and smart-me Billing. 

## Method

There are two approaches to tracking down the error. Depending on the case, one or the other is easier.

- Check smart-me Billing again. A configuration error can lead to incorrect values in smart-me Billing.

- Fill in the Excel spreadsheet. You can download the Excel file here: [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Prerequisites

1.  The ZEV (association for own consumption) has a smart-me meter at the building connection point (HAK).

2.  You have an invoice from the utility for consumption and feed-in remuneration (delivery) covering a complete billing period.


## How to fill in the Excel file

1.  Fill in the list from top to bottom.

2.  The fields you fill in by hand are marked in blue.

3.  Then check each of the green rows.


The Excel file contains several checkpoints.
Always look for the error at the first checkpoint that is not met. The checkpoints build on one another.

Each checkpoint serves a specific purpose:

- Balance difference consumption (Differenz Bilanz Bezug): This determines whether the smart-me balance meter is within the measurement tolerance of 1% compared to the utility for consumption.

- Balance difference feed-in remuneration (Differenz Bilanz Rückvergütung): This determines whether the smart-me balance meter is within the measurement tolerance of 1% compared to the utility for feed-in remuneration (delivery).

- Balance vs. sub-consumers (Bilanz vs. Unterverbraucher): This checks whether the sub-meters and the smart-me balance meter are within the measurement tolerance of 1%. The standby consumption of the PV system and of all smart-me devices is taken into account.

- Meter reading vs. virtual meters (Zählerstand vs. virtuelle Zähler): This checks whether every kilowatt hour measured is also billed in smart-me Billing.

- Grid consumption utility vs. smart-me Billing (Netzbezug EW vs. smart-me Billing): This checks whether the peak, off-peak and solar tariffs in smart-me Billing match the invoice from the utility.

- Self-consumption vs. smart-me Billing (Eigenverbrauch vs. smart-me Billing): This checks whether every kilowatt hour of self-consumed PV electricity is also billed.


## Disclaimer

- The Excel file is a guided template for checking differences. smart-me accepts no definitive liability for the content of the Excel file.

- The Excel file is still a beta version; it was created in late summer 2023.

- The Excel file currently cannot check all cases and may still contain minor errors. These are corrected on an ongoing basis.


## Analysis by smart-me

If a problem with the billing is identified and you would like us to analyse it, we need the following information:

- Login details for the account

- Invoices from the utility for consumption

- Feed-in remuneration from the utility


Note: We only analyse installations that comply with our metering concept. This means that every production unit and every consumer, including the balance meter, must be metered.
