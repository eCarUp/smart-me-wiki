---
title: 'DTA-VHKA Files'
slug: '/schnittstellen/dta-vhka-files'
description: 'General description of the interface'
sidebar_label: 'DTA-VHKA Files'
---
## General description of the interface

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung) is the name of the interface for the electronic data exchange of consumption-based data between billing companies and property managers. A uniform interface throughout Switzerland for importing consumption data into the management software programs ensures efficiency and flexibility. This means that property managers can work with all meter reading companies, regardless of the software they use.

## Working instructions in connection with VHKA files

- The tenant list is maintained in the real estate software. In the smart-me portal, the contracts and vacancies are automatically transferred under “Invoice recipient”.

- The tenant list in the real estate software must be complete; vacancies must be transferred.


## DTA-VHKA Import Export Process description

1.  The file is created based on a billing period (start date, end date) of a property and then contains a query for each tenant of the property within this period for each existing billing unit for:


- The consumption of the meter unit in kWh or m3

- The per mille value of the total distributed costs (VEWA must be configured in smart-me)

- The value per thousand for basic costs and variable costs (VEWA must be configured in smart-me)

- The price in a currency of the accrued costs as a total or divided into basic costs and variable costs (VEWA must be configured in smart-me)


2.  The billing units and corresponding cost centers must be reconcilable in both softwares. This is accomplished with the help of the external keys in smart-me.

3.  The exported VHKA request file can then be uploaded to smart-me Billing.

4.  smart-me Billing calculates the consumption of the individual billing units per energy type and fills the uploaded file with the data.

5.  The file is exported again with the data added.

6.  The completed VHKA file can now be uploaded again in the real estate software.


## Currently supported formats

- XML


### File upload and download menu

![DTA-VHKA Files – figure 1](/img/_en/interfaces-dta-vhka-files/01.png)

1.  Navigate to "Invoices" and then select "Export"


![DTA-VHKA Files – figure 2](/img/_en/interfaces-dta-vhka-files/02.png)

2\. Choose the export type and upload the file via "Export".

3\. After the export has been created, download the final file via "Download" to your computer.

## Define tariffs and external keys

External keys are required to compare the billing units and cost centers in the request file with the tariffs and billing units of the smart-me platform. 

Note: As long as there are no changes on the part of the real estate software (additional rooms or cost centers), the external keys are static and do not need to be renewed each time.

![DTA-VHKA Files – figure 3](/img/_en/interfaces-dta-vhka-files/03.png)

### Cost centers (energy types and tariffs)

To ensure that the cost centers can be clearly assigned in the VHKA order file, a suitable tariff must be defined and linked in the Smart-me portal for each energy source queried.

The link is created via the respective external key in the generated tariff.

Supported cost centers and tariffs:

- Virtual tariffs for electrical energy
    e.g. high tariff, low tariff, solar tariff, battery tariff

- Heat tariff

- Cooling tariff

- Hot water tariff

- Cold water tariff

- Gas tariff


Note: For electric tariffs, it makes sense to export the grid tariffs combined and the local solar and battery tariffs combined into one cost center in the external software.

Thes faciliates the standard configuration in the external system and is easy to adjust in case the local grid tariff changes.

To combine tariffs you can use the same VKA-ID twice.

Examples: 

Combine Grid tariffs into one cost center

Give the low tariff, the high tariff and the peak tariff the same VKA-ID corresponding to the Cost center in the DTA-VKA File.

Combine local energies into one cost center

Use the same cost center ID for solar tariffs , battery tariffs and vZEV tariffs.



![DTA-VHKA Files – figure 4](/img/_en/interfaces-dta-vhka-files/04.png)

### Settlement units (apartments, rooms and parking spaces)

During the first upload, the smart-me billing unit is assigned to the billing unit requested in the file using the external keys. This is done via the ID of the billing unit in the real estate software.

Example:

Name smart-me settlement unit: Apartment ground floor left

Real estate software settlement unit: ID: 92 Apartment 302.0, first floor 3 1/2 rooms

![DTA-VHKA Files – figure 5](/img/_en/interfaces-dta-vhka-files/05.png)

## Compatible software and specific configuration notes

- Immotop2

- Rimo R5

- Garaio REM


## Handling error messages
