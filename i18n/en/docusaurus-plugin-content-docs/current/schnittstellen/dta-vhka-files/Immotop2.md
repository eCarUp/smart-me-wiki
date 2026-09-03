---
title: 'Immotop2 VHKA Configuration'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Supported VHKA file formats Immotop2'
sidebar_label: 'Immotop2 VHKA Configuration'
---
## Supported VHKA file formats Immotop2

- XML file format (DTA-VHKA standard)
    Queries per cost center:
    \- Meter readings in m3 or kWh per usage unit
    \- Per mille values per usage unit
    \- Price per usage unit


## Key notes on billing with Immotop2 and smart-me

- Billing and the allocation of costs according to VEWA takes place in the smart.me system.

- Every billing unit in Immotop2 that is to be queried must exist congruently in Smart-me

- For the billing to be correct, the tenancies and vacancies must be recorded in all units in Immotop2 for every billing period!

- Immotop2 only supports one billing period per ancillary cost group, which means electricity must be billed in the same period as all other ancillary costs.

- The tenant list from Immotop2 is synchronized automatically with smart-me.

## Configuration notes on the Immotop2 side

For Immotop2 and smart-me to communicate with each other, the recorded ancillary costs, cost centers and ancillary cost groups must match.

### Creating the required distribution keys in Immotop2

So that the cost centers can be transmitted correctly, the first step is to make sure that the required keys are available on the client.

Under the "Basisdaten" (Basisdaten) tab, the corresponding distribution keys can be created under Verteilschlüssel-Definitionen (distribution key definitions).

If the costs are to be managed in the Immotop2 software, the Promille (per mille) distribution key is a good choice.

For locally produced electricity, the CHF distribution key is primarily suitable for all cases.

Distribution keys that are generally suitable:

- Cost center grid electricity: grid electricity by costs in CHF

- Cost center solar electricity: solar electricity by costs in CHF

- Cost center heat and domestic hot water combined: heating quota by consumption in per mille

- Cost center heat: heating by consumption in per mille

- Cost center domestic hot water: cost center domestic hot water by consumption in per mille


![Immotop2 VHKA Configuration – Figure 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Immotop2 VHKA Configuration – Figure 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Create LG group ancillary costs

The prerequisite for billing is an existing client with created properties.

Under the "LG-Gruppe-NK" section of each property or property group, a new LG-Gruppe-NK can be recorded.
In it, the billing periods of the ancillary costs and the properties to which this group applies are defined.

- There can be several properties that share the same LG-Gruppe-NK, but for this all costs of the properties must also converge in one cost account.
    Properties are primarily managed together when they share the heating system.


### 2\. Cost groups (cost centers)

In the "Kostengruppen" (cost groups) section, the cost groups can be created

The cost group corresponds to a grouping of several cost accounts that are to be allocated together via a common distribution key.

Examples of cost groups:

- Cost group grid electricity

- Cost group local electricity

- Cost group heating costs (heat and domestic hot water combined)

- Cost group cold water


![Immotop2 VHKA Configuration – Figure 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Immotop2 VHKA Configuration – Figure 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Example of the cost group for mutually supporting heat and domestic hot water preparation

Heat pump with domestic hot water preparation and electric heating element (coupled)


Energy used: electrical energy for both
Function: heating water flows through the boiler for heat storage

Cost group that is created:

Heating and domestic hot water costs
with distribution key heating quota type 09 by per mille or price




Example of non-mutually supporting heat and domestic hot water preparation systems

Oil heating with a separate electric hot water boiler


Energy used: electrical energy for the boiler, oil for the heating
Function: no preheating of the domestic hot water by the heating system

Cost groups that are created:

Heating costs
with distribution key space heating type 01 by per mille or price

Domestic hot water costs
with distribution key domestic hot water separated type 02 by per mille or price



### 3\. Cost account to cost group assignment

In the "Kostenkonten- Kostengruppen-Zuordnung" (cost account to cost group assignment) section, all relevant cost accounts can now be assigned to the cost groups.

For the heating and domestic hot water costs, for example, the following accounts would now be linked to the cost group:

- Heating oil

- Heating system operation

- Burner service

- Boiler descaling

- Electricity boiler

- ...


![Immotop2 VHKA Configuration – Figure 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Ancillary costs of the property

On the property, the LG-Gruppe-NK can be added under the "Nebenkosten" (ancillary costs) tab.

At this point, fixed or variable distribution keys are defined for the billing.

Distribution keys
The available distribution keys depend on the distribution keys activated under Mandant --> Nebenkosten (client --> ancillary costs). If the relevant distribution keys are not available, additional distribution keys can be defined under "Basisdaten" --> "Verteilschlüsseldefinitionen" (base data --> distribution key definitions).

Examples:

Name: heating quota by consumption
Unit: per mille
Type: variable
Meter reading company rate:
Total heat (heating and domestic hot water together, 09)



Name: grid electricity by costs
Unit: CHF
Type: variable
Meter reading company rate:
Electricity (06)



Name: solar electricity by costs
Unit: CHF
Type: variable
Meter reading company rate:
Electricity (06)





1.  Activate distribution key on property


![Immotop2 VHKA Configuration – Figure 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Check activated distribution keys

![Immotop2 VHKA Configuration – Figure 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Assign the distribution key to the cost group

![Immotop2 VHKA Configuration – Figure 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Export the DTA-VHKA file from Immotop2

The exchange file can be created after the configuration has been completed under processing.

In the configuration you can define exactly which objects in the property are to be queried.

Normally, all of them can simply be queried.

Important: QP-Standardformat (DTA-VKA) must be activated.

![Immotop2 VHKA Configuration – Figure 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Immotop2 VHKA Configuration – Figure 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Immotop2 VHKA Configuration – Figure 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Post to cost centers in Immotop2

If preceding postings to the cost centers are required in Immotop2, these can be taken from the summary CSV of every invoice created.

This is usually the case for solar electricity, grid electricity and the electricity costs of the heat pump / heating system / boiler.

For the allocation of solar electricity this will be necessary more often, since the origin of this information lies in the smart-me system.

For the other cost centers, external invoices are usually available that can be posted.

1.  Enter smart-me Billing via the Rechnungsstellung (billing) tab

2.  Select the property

3.  Select the invoicing period and create an invoice

4.  Once the invoice for the appropriate period has been created, open the summary CSV


![Immotop2 VHKA Configuration – Figure 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Immotop2 VHKA Configuration – Figure 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

It contains the kWh and m3 sold in each case and the price per tariff, billing unit and in total.

With this total value of the respective tariff, a posting can be made in Immotop2 and then distributed accordingly with the DTA-VHKA file using per mille.

## Defining the external keys with the help of the query file

### 1\. Link the DTA-VHKA file with external keys

1.  Open the file in an editor

2.  Identify the cost centers
    An energy tariff must exist in smart-me for every &lt;Costcenter>

    Example:
    Cold water tariff: ID= 20
    Electricity peak tariff: ID = 23
    Electricity off-peak tariff: ID=24
    .
    Tariffs can be combined automatically by entering the same ID for several tariffs.


3.  Connect cost units with billing units
    An ID from the file must be available for every billing unit in smart-me. &lt;CostUnit>&lt;Id> must now be connected with the apartment via the external keys.

    Example:
    3 1/2 room apartment ground floor right P2 (103-0.2) = ID 90
    3 1/2 room apartment ground floor right P1 = ID 91


![Immotop2 VHKA Configuration – Figure 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Connect cost centers (cost group) with tariffs

An energy tariff must exist in smart-me for every &lt;Costcenter>

Example:
Cold water tariff: ID= 20
Electricity peak tariff: ID = 23
Electricity off-peak tariff: ID=24



Tariffs can be combined automatically by entering the same ID for several tariffs.

Example cost center grid tariff combined

- Assign the same ID to the off-peak tariff and the peak tariff, e.g. 23


![Immotop2 VHKA Configuration – Figure 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Immotop2 VHKA Configuration – Figure 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Connect cost units with billing units

An ID from the file must be available for every billing unit in smart-me. &lt;CostUnit>&lt;Id> must now be connected with the apartment via the external keys.



Can be found right at the bottom of the configuration page in Billing.

![Immotop2 VHKA Configuration – Figure 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### General conditions for a successful exchange

### Tenant list

- Since the tenant lists are managed by the Immotop2 software, on the smart-me side the contract and also the vacancies are recorded during the import and shown in the invoice addresses.



![Immotop2 VHKA Configuration – Figure 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Living areas

- Since the living areas are currently not taken over automatically from the Immotop2 software, the living area must be kept up to date on the smart-me side.



![Immotop2 VHKA Configuration – Figure 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Configurations on the smart-me side for price output

- So that the price can be calculated, the living area must be specified for every billing unit.

- VEWA must be activated and configured with the distribution keys for base and variable costs per energy type.

- A billing period must be recorded for every energy type. The costs must be managed and valid tariffs must be recorded for electricity.


![Immotop2 VHKA Configuration – Figure 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Upload and export the DTA-VHKA file in smart-me

![Immotop2 VHKA Configuration – Figure 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Immotop2 VHKA Configuration – Figure 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  In Billing, navigate to "Rechnungen" (invoices) and then to the "Exportieren" (export) section


2\. Select the export type and upload the file using "Exportieren" (export).

3\. Download the supplemented file to your computer using "Herunterladen" (download).

### 8\. Import the DTA-VHKA file into Immotop2

![Immotop2 VHKA Configuration – Figure 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Immotop2 VHKA Configuration – Figure 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
