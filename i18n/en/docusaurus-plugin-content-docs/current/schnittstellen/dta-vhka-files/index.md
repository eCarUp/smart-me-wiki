---
title: 'DTA-VHKA Files Import / Export (Beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'General description of the interface'
sidebar_label: 'DTA-VHKA Files'
---
<Menueweg>Billing → Create invoice → Export</Menueweg>

## General description of the interface

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung – data carrier exchange for consumption-based heating and domestic hot water cost billing) is the name of the interface for the electronic exchange of consumption-based data between billing companies and property managers.

A uniform Switzerland-wide interface for importing consumption data into property management software ensures efficiency and flexibility.
This allows property management companies to work with all meter reading companies, regardless of the software they use.

## Working notes for VHKA files

- The tenant list is maintained in the property management software. In the smart-me portal, the contracts and vacancies are automatically imported under "Invoice recipients" (Rechnungsempfänger).

- The tenant list in the property management software must be complete; vacancies must always be transferred.


## DTA-VHKA import and export process description

1.  Export the VHKA request file for the property from the property management software.
    The file is created based on a billing period (start date, end date) of a property.
    This file then contains a query for each tenant of the property within this period for each existing billing unit for:


- The consumption of the meter unit in kWh or m3

- The per mille value of the sum of the distributed costs
    (VEWA must be configured in smart-me)

- The per mille value for basic costs and variable costs
    (VEWA must be configured in smart-me)

- The price in a currency of the accrued costs as a sum or split into basic costs and variable costs.
    (VEWA must be configured in smart-me)


2.  The billing units and corresponding cost centres must be matchable in both software systems. This is done using the external keys in smart-me.

3.  The exported VHKA request file can then be uploaded to smart-me Billing.

4.  smart-me Billing calculates the consumption of the individual billing units per energy type and fills the uploaded file with the data.

5.  The file, supplemented with the data, is exported again.

6.  The supplemented VHKA file can now be uploaded back into the property management software.


![DTA-VHKA Files Import / Export (Beta) – Figure 1](/img/schnittstellen-dta-vhka-files/01.png)

## Currently supported formats

- XML (DTA-VHKA standard)


### Uploading and downloading the file

![DTA-VHKA Files Import / Export (Beta) – Figure 2](/img/schnittstellen-dta-vhka-files/02.png)

![DTA-VHKA Files Import / Export (Beta) – Figure 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  In Billing, navigate to "Invoices" (Rechnungen) and then to the "Export" (Exportieren) section


2\. Select the export type and upload the file using "Export" (Exportieren).

3\. Download the supplemented file to your computer using "Download" (Herunterladen).

## Linking cost centres with smart-me energy tariffs and residential units

For the connection between the property management software and the smart-me property to work, matching cost centres and residential units must be created in both systems.

These are in turn linked once with the tariffs and residential units in smart-me via ID numbers from the order file.

The overview below applies in principle to all property management systems.

### Cost centres and tariff links when one cost centre = one tariff system

Cost centres for heating, cooling, domestic hot water and cold water

![DTA-VHKA Files Import / Export (Beta) – Figure 4](/img/schnittstellen-dta-vhka-files/04.png)

Cost centres for electricity

![DTA-VHKA Files Import / Export (Beta) – Figure 5](/img/schnittstellen-dta-vhka-files/05.png)

### Cost centres and tariff links when one cost centre = several combined tariffs

Cost centres for heating, cooling, domestic hot water and cold water when combined

Combinations:

- Heating and domestic hot water

- Heating + domestic hot water + cooling


![DTA-VHKA Files Import / Export (Beta) – Figure 6](/img/schnittstellen-dta-vhka-files/06.png)

Cost centres for combined electricity

Most common combinations:

- Grid electricity cost centre: tariffs HT and NT + peak electricity

- Local electricity cost centre: tariffs solar electricity HT + solar electricity NT 


![DTA-VHKA Files Import / Export (Beta) – Figure 7](/img/schnittstellen-dta-vhka-files/07.png)

### Linking cost centres with energy tariffs (defining VKA keys)

External keys are required to match the billing units and cost centres in the request file with the tariffs and billing units of the smart-me platform. 

Note:
As long as there are no changes on the property management software side (additional rooms or cost centres), the external keys are static and do not need to be renewed each time.

![DTA-VHKA Files Import / Export (Beta) – Figure 8](/img/schnittstellen-dta-vhka-files/08.png)

So that the cost centres in the VHKA order file can be assigned unambiguously, a matching tariff must be defined and linked in the smart-me portal for each queried energy source.

The link is made via the respective external key of the created tariff.

If several tariffs are linked to the same cost centre, several tariffs simply receive the same cost centre ID.

Single:
Grid electricity cost centre (ID= 6) --> Uniform grid tariff ( External key = 6)

Combined:
Grid electricity cost centre (ID= 6) \-->  Peak tariff ( External key = 6) and off-peak tariff (External key = 6)

Note: 

- If electricity tariffs are transmitted in combination, the prices for the electrical tariffs must be stored in smart-me!

- For combined heating and water tariffs, the costs are not required in smart-me.


![DTA-VHKA Files Import / Export (Beta) – Figure 9](/img/schnittstellen-dta-vhka-files/09.png)

## Compatible software and specific configuration notes

Property management software that supports the DTA-VHKA standard.
List according to Qualipool: [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/immotop2)

- Rimo R5 (Immotop2 guide )

- [Garaio REM](/schnittstellen/dta-vhka-files/garaio-rem)

- [Abaimmo](/schnittstellen/dta-vhka-files/abaimmo)


## Handling error messages
