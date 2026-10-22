---
title: 'Immotop2 VHKA Configuration'
slug: '/schnittstellen/dta-vhka-files/immotop2'
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

- The billing and the allocation of costs according to VEWA take place in the smart-me system.

- Every billing unit in Immotop2 that is to be queried must exist with matching data in smart-me.

- For the billing to be correct, the tenancies and vacancies must be recorded in all units in Immotop2 for every billing period!

- Immotop2 supports only one billing period per ancillary costs group, so electricity must be billed in the same period as all other ancillary costs.

- The tenant list from Immotop2 is automatically synchronised with smart-me.


## Configuration notes on the Immotop2 side

For Immotop2 and smart-me to communicate with each other, the recorded ancillary costs, cost centres and ancillary costs groups must match.

### Creating the required distribution keys in Immotop2

For the cost centres to be transmitted correctly, you must first make sure that the required keys are available on the client.

In the "Base data" ("Basisdaten") tab, the corresponding distribution keys can be created under distribution key definitions (Verteilschlüssel-Definitionen).

If the costs are to be managed in the Immotop2 software, the per mille distribution key is a suitable choice.

For locally produced electricity, the CHF distribution key is primarily suitable for all cases.

Distribution keys that are generally suitable:

- Cost centre grid electricity: grid electricity by costs in CHF

- Cost centre solar electricity: solar electricity by costs in CHF

- Cost centre heat and domestic hot water combined: heating share by consumption in per mille

- Cost centre heat: heating by consumption in per mille

- Cost centre domestic hot water: cost centre domestic hot water by consumption in per mille

![Immotop2 VHKA configuration – Figure 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Immotop2 VHKA configuration – Figure 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Create a property group for ancillary costs

The prerequisite for billing is an existing client with created properties.

In the "Property group AC" ("LG-Gruppe-NK") area of each property or property group, a new property group AC (LG-Gruppe-NK) can be recorded.
It defines the billing periods of the ancillary costs and the properties to which this group applies. 

- Several properties can share the same property group AC, but then all costs of these properties must also be consolidated in one cost account.
    Properties are primarily managed together if they share the heating system.


### 2\. Cost groups (cost centres)

<div className="row">
<div className="col col--5">

The cost groups can be created in the "Cost groups" ("Kostengruppen") area.

A cost group corresponds to a grouping of several cost accounts that are to be split together using a common distribution key.

Examples of cost groups:

- Cost group grid electricity

- Cost group local electricity

- Cost group heating costs (heat and domestic hot water combined)

- Cost group cold water

</div>
<div className="col col--7 text--center">

![Immotop2 VHKA configuration – Figure 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Immotop2 VHKA configuration – Figure 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

</div>
</div>

Example of the cost group for mutually supporting heat and domestic hot water generation

Heat pump with domestic hot water generation and electric heating element (coupled)


Energy used: electrical energy for both
Function: heating water flows through the boiler for heat storage

Cost group to be created:  

Heating and domestic hot water costs
with distribution key heat share type 09 by per mille or price




Example of non-supporting systems for heat and domestic hot water generation

Oil heating with separate electric hot water boiler


Energy used: electrical energy for the boiler, oil for the heating
Function: no preheating of the domestic hot water by the heating

Cost groups to be created:

Heating costs
with distribution key space heating type 01 by per mille or price

Domestic hot water costs
with distribution key domestic hot water separate type 02 by per mille or price



### 3\. Cost account to cost group assignment

In the "Cost account to cost group assignment" ("Kostenkonten- Kostengruppen-Zuordnung") area, all relevant cost accounts can now be assigned to the cost groups.

For the heating and domestic hot water costs, for example, the following accounts would now be linked to the cost group:

- Heating oil

- Heating operation

- Burner service

- Boiler descaling

- Boiler electricity

- ...


![Immotop2 VHKA configuration – Figure 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Ancillary costs of the property

On the property, the property group AC (LG-Gruppe-NK) can be added under the "Ancillary costs" ("Nebenkosten") tab.

This is where fixed or variable distribution keys for the billing are defined.

Distribution keys
The available distribution keys depend on the distribution keys activated under Client (Mandant) --> Ancillary costs (Nebenkosten). If the relevant distribution keys are not available, additional distribution keys can be defined under "Base data" ("Basisdaten") --> "Distribution key definitions" ("Verteilschlüsseldefinitionen").

Examples:

Name: Heating share by consumption
Unit: per mille
Type: variable
Reading company record:
Total heat (heating and domestic hot water together, 09)



Name: Grid electricity by costs
Unit: CHF
Type: variable
Reading company record:
Electricity (06)



Name: Solar electricity by costs
Unit: CHF
Type: variable
Reading company record:
Electricity (06)





1.  Activate distribution keys on the property


![Immotop2 VHKA configuration – Figure 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Check activated distribution keys

![Immotop2 VHKA configuration – Figure 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Assign distribution keys to the cost group

![Immotop2 VHKA configuration – Figure 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Export DTA-VHKA file from Immotop2

Once the configuration is complete, the exchange file can be created under Processing (Verarbeitung).

In the configuration, you can define exactly which objects in the property are to be queried. 

Normally, you can simply query all of them.

Important: QP standard format (DTA-VKA) must be activated.

![Immotop2 VHKA configuration – Figure 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Immotop2 VHKA configuration – Figure 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Immotop2 VHKA configuration – Figure 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Making cost centre postings in Immotop2

If prior postings to the cost centres are required in Immotop2, they can be taken from the summary CSV of each created invoice.

This is usually the case for solar electricity, grid electricity and the electricity costs of the heat pump / heating / boiler.

When allocating solar electricity, this will often be necessary, as this information originates in the smart-me system.

For the other cost centres, there are usually external invoices that can be posted.

1.  Open smart-me Billing via the Billing (Rechnungsstellung) tab

2.  Select the property

3.  Select the invoice period and create an invoice

4.  Once the invoice for the appropriate period has been created, open the summary CSV (Zusammenfassung CSV)


![Immotop2 VHKA configuration – Figure 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Immotop2 VHKA configuration – Figure 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

It contains the kWh and m3 sold and the price per tariff, per billing unit and in total.

With this total value of the respective tariff, a posting can be made in Immotop2 and then distributed accordingly by per mille with the DTA-VHKA file.

## Defining the external keys using the request file

### 1\. Link DTA-VHKA file with external keys

1.  Open the file in an editor

2.  Identify the cost centres
    For each &lt;Costcenter>, an energy tariff must exist in smart-me

    E.g.:
    Cold water tariff: ID= 20
    Electricity peak tariff: ID = 23
    Electricity off-peak tariff: ID=24
    .
    Tariffs can be combined automatically by entering the same ID for several tariffs.


3.  Link cost units with billing units
    For each billing unit in smart-me, an ID from the file must be available. &lt;CostUnit>&lt;Id> must now be linked to the apartment via the external keys.

    E.g.:
    3.5-room apartment ground floor right P2 (103-0.2) = ID 90
    3.5-room apartment ground floor right P1 = ID 91


![Immotop2 VHKA configuration – Figure 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Link cost centre (cost group) with tariffs

For each &lt;Costcenter>, an energy tariff must exist in smart-me

E.g.:
Cold water tariff: ID= 20
Electricity peak tariff: ID = 23
Electricity off-peak tariff: ID=24



Tariffs can be combined automatically by entering the same ID for several tariffs.

Example of a combined grid tariff cost centre

- Assign the same ID to the off-peak tariff and the peak tariff, e.g. 23


![Immotop2 VHKA configuration – Figure 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Immotop2 VHKA configuration – Figure 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Link cost units with billing units

For each billing unit in smart-me, an ID from the file must be available. &lt;CostUnit>&lt;Id> must now be linked to the apartment via the external keys.



This can be found at the very bottom of the configuration page in Billing.

![Immotop2 VHKA configuration – Figure 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### General requirements for a successful exchange

### Tenant list

- Since the tenant lists are managed by the Immotop2 software, smart-me records the contract as well as vacancies during the import and reflects them in the invoice addresses.



![Immotop2 VHKA configuration – Figure 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Living space

<div className="row">
<div className="col col--6">

- Since the living space is currently not automatically taken over from the Immotop2 software, the living space must be maintained and kept up to date in smart-me.

</div>
<div className="col col--6 text--center">

![Immotop2 VHKA configuration – Figure 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

</div>
</div>

### Configurations in smart-me for price output

- For the price to be calculated, the living space must be specified for each billing unit.

- VEWA must be activated and configured with the distribution keys for basic and variable costs per energy type.

- A billing period must be recorded for each energy type. The costs must be managed, and valid tariffs must be recorded for electricity.


![Immotop2 VHKA configuration – Figure 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Upload and export DTA-VHKA file in smart-me

![Immotop2 VHKA configuration – Figure 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Immotop2 VHKA configuration – Figure 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  In Billing, navigate to "Invoices" ("Rechnungen") and then to the "Export" ("Exportieren") area


2\. Select the export type and upload the file using "Export" ("Exportieren").

3\. Download the completed file to your computer using "Download" ("Herunterladen").

### 8\. Import DTA-VHKA file into Immotop2

![Immotop2 VHKA configuration – Figure 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Immotop2 VHKA configuration – Figure 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
