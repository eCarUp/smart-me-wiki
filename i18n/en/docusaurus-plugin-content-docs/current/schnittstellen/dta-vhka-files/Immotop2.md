---
title: 'Immotop2 VHKA Configuration'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Supported VHKA file formats Immotop2'
sidebar_label: 'Immotop2 VHKA Configuration'
---
## Supported VHKA file formats Immotop2

- XML file format (DTA-VHKA standard)
    Queries per cost centre:
    \- Meter readings in m3 or kWh per usage unit
    \- Per mille values per usage unit
    \- Price per usage unit


## Key notes on billing with Immotop2 and smart-me

- The billing and allocation of costs according to VEWA takes place in the smart.me system.

- Every billing unit in Immotop2 that is to be queried must exist congruently in smart-me

- For the billing to be correct, the tenancies and vacancies must be recorded in all units in Immotop2 for every billing period!

- Immotop2 only supports one billing period per ancillary cost group, so electricity must be billed in the same period as all other ancillary costs.

- The tenant schedule from Immotop2 is automatically synchronised with smart-me.


## Configuration notes on the Immotop2 side

For Immotop2 and smart-me to be able to communicate with each other, the recorded ancillary costs, cost centres and ancillary cost groups must match.

### Creating the required allocation keys in Immotop2

For the cost centres to be transmitted correctly, you must first make sure that the necessary keys are available on the client.

On the "Base data" ("Basisdaten") tab, the corresponding allocation keys can be created under allocation key definitions (Verteilschlüssel-Definitionen).

If the costs are to be managed in the Immotop2 software, the per mille allocation key is a good choice.

For locally produced electricity, the CHF allocation key is primarily suitable. for all cases.

Allocation keys that are generally suitable:

- Cost centre grid electricity: grid electricity by cost in CHF

- Cost centre solar electricity: solar electricity by cost in CHF

- Cost centre heat and domestic hot water combined: heating ratio by consumption in per mille

- Cost centre heat: heating by consumption in per mille

- Cost centre domestic hot water: cost centre domestic hot water by consumption in per mille


![Immotop2 VHKA Configuration – Figure 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Immotop2 VHKA Configuration – Figure 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Create property group ancillary costs

The prerequisite for billing is an existing client with properties already created.

In the "LG-Gruppe-NK" area of each property or property group, a new property group for ancillary costs (LG-Gruppe-NK) can be recorded.
In it, the billing periods of the ancillary costs and the properties to which this group applies are defined. 

- Several properties can share the same LG-Gruppe-NK, but in that case all costs of the properties must also be pooled in one cost account.
    Properties are primarily managed together if they share the heating.


### 2\. Cost groups (cost centres)

The cost groups can be created in the "Cost groups" ("Kostengruppen") area

A cost group corresponds to a grouping of several cost accounts that are to be allocated together using a common allocation key.

Examples of cost groups:

- Cost group grid electricity

- Cost group local electricity

- Cost group heating costs (heat and domestic hot water combined)

- Cost group cold water


![Immotop2 VHKA Configuration – Figure 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Immotop2 VHKA Configuration – Figure 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Example of the cost group for mutually supporting heat and domestic hot water generation

Heat pump with domestic hot water generation and electric heating element (coupled)


Energy used: electrical energy for both
Function: heating water flows through the boiler for heat storage

Cost group to be created:  

Heating and domestic hot water costs
with allocation key heat ratio type 09 by per mille or price




Example of non-supporting heat and domestic hot water generation systems

Oil heating with separate electric hot water boiler


Energy used: electrical energy for the boiler, oil for the heating
Function: no preheating of the domestic hot water by the heating

Cost groups to be created:

Heating costs
with allocation key space heating type 01 by per mille or price

Domestic hot water costs
with allocation key domestic hot water separated type 02 by per mille or price



### 3\. Cost account to cost group assignment

In the "Cost account to cost group assignment" ("Kostenkonten- Kostengruppen-Zuordnung") area, all relevant cost accounts can now be assigned to the cost groups.

For the heating and domestic hot water costs, for example, the following accounts would now be linked to the cost group:

- Heating oil

- Heating operation

- Burner service

- Boiler descaling

- Boiler electricity

- ...


![Immotop2 VHKA Configuration – Figure 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Ancillary costs of the property

On the property, the LG-Gruppe-NK can be added under the "Ancillary costs" ("Nebenkosten") tab.

This is where fixed or variable allocation keys for the billing are defined.

Allocation keys
The available allocation keys depend on the allocation keys activated under Client --> Ancillary costs (Mandant --> Nebenkosten). If the relevant allocation keys are not available, additional allocation keys can be defined under "Base data" ("Basisdaten") --> "Allocation key definitions" ("Verteilschlüsseldefinitionen").

Examples:

Name: Heating ratio by consumption
Unit: per mille
Type: variable
Meter reading company rate:
Total heat (heating and domestic hot water together, 09)



Name: Grid electricity by cost
Unit: CHF
Type: variable
Meter reading company rate:
Electricity (06)



Name: Solar electricity by cost
Unit: CHF
Type: variable
Meter reading company rate:
Electricity (06)





1.  Activate allocation keys on the property


![Immotop2 VHKA Configuration – Figure 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Check activated allocation keys

![Immotop2 VHKA Configuration – Figure 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Assign allocation keys to the cost group

![Immotop2 VHKA Configuration – Figure 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Export DTA-VHKA file from Immotop2

Once the configuration is complete, the exchange file can be created under Processing (Verarbeitung).

In the configuration, you can define exactly which objects in the property are to be queried. 

Normally, all of them can simply be queried.

Important: QP standard format (DTA-VKA) must be activated.

![Immotop2 VHKA Configuration – Figure 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Immotop2 VHKA Configuration – Figure 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Immotop2 VHKA Configuration – Figure 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Making cost centre bookings in Immotop2

If preceding bookings to the cost centres are required in Immotop2, they can be taken from the summary CSV of each invoice created.

This is usually the case for solar electricity, grid electricity and the electricity costs of the heat pump / heating / boiler.

When allocating solar electricity, this will be necessary more often, as the source of this information lies in the smart-me system.

For the other cost centres, there are usually external invoices that can be booked.

1.  Open smart-me Billing via the Billing (Rechnungsstellung) tab

2.  Select the property

3.  Select the billing period and create an invoice

4.  Once the invoice for the matching period has been created, open the Summary CSV (Zusammenfassung CSV)


![Immotop2 VHKA Configuration – Figure 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Immotop2 VHKA Configuration – Figure 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

It contains the kWh and m3 sold and the price per tariff, per billing unit and in total.

With this total value of the respective tariff, a booking can be made in Immotop2 and then allocated accordingly with the DTA-VHKA file using per mille.

## Defining the external keys using the request file

### 1\. Link DTA-VHKA file with external keys

1.  Open the file in an editor

2.  Identify the cost centres
    For each &lt;Costcenter>, an energy tariff must exist in smart-me

    Example:
    Cold water tariff: ID= 20
    Electricity peak tariff: ID = 23
    Electricity off-peak tariff: ID=24
    .
    Tariffs can be combined automatically by entering the same ID for several tariffs.


3.  Connect cost units with billing units
    For each billing unit in smart-me, an ID from the file must be available. &lt;CostUnit>&lt;Id> must now be linked to the apartment via the external keys.

    Example:
    3 1/2 room apartment ground floor right P2 (103-0.2) = ID 90
    3 1/2 room apartment ground floor right P1 = ID 91


![Immotop2 VHKA Configuration – Figure 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Connect cost centre (cost group) with tariffs

For each &lt;Costcenter>, an energy tariff must exist in smart-me

Example:
Cold water tariff: ID= 20
Electricity peak tariff: ID = 23
Electricity off-peak tariff: ID=24



Tariffs can be combined automatically by entering the same ID for several tariffs.

Example cost centre grid tariff combined

- Assign the same ID to the off-peak tariff and the peak tariff, e.g. 23


![Immotop2 VHKA Configuration – Figure 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Immotop2 VHKA Configuration – Figure 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Connect cost units with billing units

For each billing unit in smart-me, an ID from the file must be available. &lt;CostUnit>&lt;Id> must now be linked to the apartment via the external keys.



Found at the very bottom of the configuration page in Billing.

![Immotop2 VHKA Configuration – Figure 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### General requirements for a successful exchange

### Tenant schedule

- Since the tenant schedules are managed by the Immotop2 software, smart-me records the contracts and also vacancies during the import and maps them in the billing addresses.



![Immotop2 VHKA Configuration – Figure 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Living areas

- Since the living areas are currently not transferred automatically from the Immotop2 software, the living area must be maintained and kept up to date on the smart-me side.



![Immotop2 VHKA Configuration – Figure 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Configurations on the smart-me side for price output

- For the price to be calculated, the living area must be specified for each billing unit.

- VEWA must be activated and configured with the allocation keys for basic and variable costs per energy type.

- A billing period must be recorded for each energy type. The costs must be maintained, and valid tariffs must be recorded for electricity.


![Immotop2 VHKA Configuration – Figure 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Upload and export DTA-VHKA file in smart-me

![Immotop2 VHKA Configuration – Figure 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Immotop2 VHKA Configuration – Figure 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  In Billing, navigate to "Invoices" ("Rechnungen") and then to the "Export" ("Exportieren") area


2\. Select the export type and upload the file using "Export" ("Exportieren").

3\. Download the completed file to your computer using "Download" ("Herunterladen").

### 8\. Import DTA-VHKA file into Immotop2

![Immotop2 VHKA Configuration – Figure 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Immotop2 VHKA Configuration – Figure 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
