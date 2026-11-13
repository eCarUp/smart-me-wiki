---
title: 'VEWA - Billing'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'smart-me introduction from 2min 20sec'
sidebar_label: 'VEWA - Billing'
naechste_schritte: [konfiguration/billing/rechnung-erstellen]
vorheriger_schritt: konfiguration/billing/sonstige-kosten
---

<Menueweg>Billing → Properties & tariffs → VEWA</Menueweg>

## Billing heat and water — two approaches

There are basically two configuration options for setting tariffs and billing multi-energy systems:

**Billing without the VEWA function**

- Billing uses an externally calculated energy tariff for each energy type. It is entered in the property below the virtual tariffs as a price in CHF/m3 or CHF/kWh.

**Billing with the VEWA function (recommended)**

- Heat and water costs that build up over the year can be recorded. The tariff is then calculated over the period and distributed to the billing units using allocation keys.

This page describes the recommended approach with the VEWA function.

## VEWA webinar

<Video src="nrziX2lLI0s" title="YouTube video" />

- [smart-me introduction](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) from 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) from 12min 50sec

- [Live demo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) from 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) from 40min 32sec 


## About VEWA

VEWA (consumption-based energy and water cost billing) provides a guideline for fair billing of all types of energy costs and covers:

- Heating

- Cooling

- Domestic hot water

- Cold water 

- Electricity (can also be handled separately)


VEWA is the successor to the well-known VHKA billing and supports additional energy sources and simplified procedures.

VEWA handles cost allocation for separate or combined heating systems based on meter readings and distributes the costs as fairly as possible.

For heating, cooling and domestic hot water, special procedures are used to compensate for differences in apartment location, losses in pipes or other differences between consumers.

The following forms of cost allocation are available:

Separate cost centres

- Each energy comes from a different source


<div className="bild--voll">

![VEWA - Billing – Figure 2](/img/konfiguration-billing-vewa-abrechnung/02_EN.png)

</div>

Combined heating and domestic hot water

- Any type of heating with a connected hot water tank


<div className="bild--voll">

![VEWA - Billing – Figure 3](/img/konfiguration-billing-vewa-abrechnung/03_EN.png)

</div>

Combined heating + cooling and domestic hot water

- Heat pump with free cooling


<div className="bild--voll">

![VEWA - Billing – Figure 4](/img/konfiguration-billing-vewa-abrechnung/04_EN.png)

</div>

## Scope of functions

### Which systems can be billed with smart-me VEWA?

- separate heating and water systems (heating, cooling, domestic hot water, cold water)

- combined heating and domestic hot water systems (heating + domestic hot water, cooling, cold water)

- combined heating, domestic hot water and cooling systems (heating + cooling + domestic hot water, cold water)


To bill an energy type successfully, consumption meters must be installed in the units for each energy type.

Note: 

- Heat cost allocators are not supported

- When billing with total generation meters, the costs can be distributed to the residential units by percentage.


<div className="bild--voll">

![VEWA - Billing – Figure 5](/img/konfiguration-billing-vewa-abrechnung/05_EN.png)

</div>

Common areas:

Meter collections in folders can be distributed to billing units by percentage at a later stage (billing).

This is supported for both system variants above.

### How many systems can be configured in one account?

One VEWA system can be billed per property. If there are several heating systems, several properties are created in the same account.

These can then be billed individually with different billing periods.

### General way of working with smart-me VEWA

- VEWA can be applied to any property. Make sure that all consumption meters of the same heating system are in the same property.
    If several buildings share one heating system, the buildings must be merged into one.

- When using VEWA, all tenancy agreements as well as vacancies must be recorded correctly in the tenant list. Either in smart-me Billing or in the external property management software when using DTA-VKA files.


## Configuring VEWA

### 1. Activate VEWA and configure cost allocations.


Select the heating system:

- Heating, cooling and domestic hot water combined

- Heating, domestic hot water combined

- Separate systems


Whether combined or not depends on how the heat is generated. If, for example, a heat pump is used for heating, cooling and domestic hot water preparation, combined billing is the obvious choice, because the input is the same for all three energies, namely electricity.

If, however, heating is provided by an oil heating system while the domestic hot water is prepared purely electrically without support from the oil heating, non-combined billing is the right choice.

Cost allocation

Cost allocation splits the total costs into fixed costs (basic costs) and variable costs (consumption-based costs).

Basic costs

The basic costs take into account any pipe losses, circulation losses, a preferred apartment location with more sunshine, etc., and distribute a share of the costs to all tenants according to their share of the total floor area of the property.

Variable costs

The variable costs are applied directly to the recorded amounts of energy consumed. They correspond to the individual consumption of each tenant.

Domestic hot water preparation

So that the energy used for domestic hot water preparation can be estimated from m3 values, the following standard formula is applied:

Domestic hot water energy in kWh =
Total consumption domestic hot water \[m3\] \* 1.163 \* temperature difference \[K\] \* 1,25

The temperature difference can be selected and refers to the temperature difference between the cold water entering the building (usually +10°C) and the average temperature of the boiler it is heated to (usually +52°C).

In this example, the difference is: 

Temperature difference = target temperature - inlet temperature = 52°C - 10°C = 42 K

![VEWA - Billing – Figure 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Guide values for configuring basic costs and variable costs:

New buildings (anything from 2018): 

- Basic costs 30%, variable costs 70%


Renovated old buildings (insulation upgraded to new-build standard):

- Basic costs 40%, variable costs 60%


Unrenovated old buildings (before 2018):

- Basic costs from 40%\-50%, variable costs from 50-60%

- In addition, a location adjustment must be calculated for each apartment. Either the reading of the apartment meter is reduced or the allocation percentages of the total meter are weighted. 
    (Details in chapter 10 of the VEWA document under further reading)


The apartment meter readings can be adjusted here to apply the location adjustment: [Meter/folder configuration](/konfiguration/ordnerkonfiguration)  

- If a meter has to reduce its reading by 20%: 
    Set Value correction (Wertkorrektur) from 100% to 80%.


### 2\. Recording a billing period

Costs can be recorded as full costs for each energy type.
For combined systems, the individual costs of the individual energy sources are added together.

![VEWA - Billing – Figure 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Create billing periods and define the content of the billing period

<div className="row">
<div className="col col--4">

1.  Create the billing period

2.  Activate or deactivate content

If electricity and the heating and ancillary costs are billed at different intervals, several periods are recorded.

e.g.:

- Electricity period Q1 2024 (electricity and other only)

- Electricity period Q2 2024 (electricity and other only)

- Electricity period Q3 2024 (electricity and other only)

- Electricity period Q4 2024 (electricity and other only)

- Heat water period 2024 (heating, cooling, domestic hot water and cold water only)

</div>
<div className="col col--8 bild--mitte">

![VEWA - Billing – Figure 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Recording the costs of the billing period

Note on exporting to property management software with DTA-VHKA files:
If you want to use VEWA but export the data to another system in per mille or consumption values, you do not need to record any costs. However, the billing period must be created beforehand.

The costs that may be recorded fall roughly into the following categories:

Energy costs

Costs for the purchased energy source, e.g.: 

- 1000 litres of oil for 2000 CHF

- 500kWh of electricity for 200 CHF

- 10 m3 of cold water for 50 CHF


Energy ancillary costs

Costs for operation and maintenance

- Costs of the periodic servicing of the heating system

- Costs for the meter reading service (e.g. amortisation of the smart-me licence costs for the devices)

- Administrative work related to the heating system

- Chimney sweep costs

- Waste disposal, if the heating system incurs such costs.


What is not part of the energy ancillary costs

- Metering infrastructure (this is covered by a rent increase)


Note on domestic hot water costs:

The domestic hot water costs only include the costs for heating the water. The amount of cold water used for domestic hot water preparation is automatically transferred to the cold water part. 

- If a total cold water meter is split among several apartments by percentage, the entire cold water quantity is calculated from this shared meter.

- If cold and hot water meters are installed in the apartments and applied with 100% of consumption, the total for cold water is the sum of all hot and cold water meters.


These can be entered for each energy type and are added up.

![VEWA - Billing – Figure 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Charging meter rental

Unlike in a ZEV, under VEWA the costs for amortising heat meters and water meters may be charged to consumers.

However, this must be done by increasing the rent, not via the ancillary costs.

The hardware costs and the installation of a meter may be passed on.

An amortisation period of 10 years applies.

The rules for passing on costs are described in Art. 269d OR and Art. 19 and 20 VMWG

Details on the calculation can be found in the official VEWA document under 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Recording a permanently valid tariff for each energy source

- This tariff is entered without a price (0) and with unlimited validity (2099).

- Every energy source with a valid tariff is shown on the invoice.




![VEWA - Billing – Figure 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Entering apartment floor areas

The apartment floor areas must be known for the VEWA calculation and the allocation of the basic costs. They can be set in the respective billing unit. They are then added up to form the relevant total floor area.

Note: To report the relevant total floor area correctly, all premises must be recorded as billing units, even if they have no meters assigned to them and are handled externally on a flat-rate basis.
Only whole numbers are possible.

![VEWA - Billing – Figure 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Invoice content and breakdown

### Overview

The overview shows all costs at a glance, including any applied taxes and rounding differences.

![VEWA - Billing – Figure 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Heating

The heating section shows the total costs for the heating cost centre and the applied allocation keys and reference values.

- Basic cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in kWh (here 700 kWh)

- Total floor area of the property in m2 (here 300 m2)


The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter values of the apartment.

- Floor area of the apartment in m2 (here 100 m2)

- Days of occupancy (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment (here 500kWh)






![VEWA - Billing – Figure 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Domestic hot water

The domestic hot water section shows the total costs for the domestic hot water cost centre and the applied allocation keys and reference values.

- Basic cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 5 m2)

- Total floor area of the property in m2 (here 300 m2) 


These costs consist exclusively of the costs required to produce domestic hot water, not the cold water used for it.
More on the costs in the cost centre overview section.

The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter values of the apartment.

- Floor area of the apartment in m2 (here 100 m2)

- Days of occupancy (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment in m3 (here 3 m3)


![VEWA - Billing – Figure 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Cold water

The cold water section shows the total costs for the cold water cost centre and the applied allocation keys and reference values.

- Basic cost share in % (here 20%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 13 m2)

- Total floor area of the property in m2 (here 300 m2) 


The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter values of the apartment.

- Floor area of the apartment in m2 (here 100 m2)

- Days of occupancy (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment in m3 domestic hot water
    (here 3 m3)

- Meter reading of the respective apartment in m3 cold water
    (here 5 m3)


Note:

Depending on the system, this section may list only cold water meters or a mix of cold and hot water meters; these systems are detected automatically.

- If there is a main meter for cold water and none in the apartments, or only hot water meters in the apartments, only a percentage-based cold water meter would be listed here.

- If there are apartment meters for hot and cold water, both meters are always listed here for each apartment; their sum is the total water consumption.


![VEWA - Billing – Figure 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Cost centre overview

Separate cost centres

Every invoice includes the cost centre overview. It contains all entered cost items for the individual cost centres.

- Under heating, all costs relating to the heating system are listed.

- Under domestic hot water, only the costs relating to heating the water are listed, not the quantity of cold water used.

- Under cold water, all costs for cold water and waste water are entered.


Combined cost centres

The cost centre overview may look different when systems are combined.

It is common, for example, to combine heating and domestic hot water, because part of the energy for domestic hot water preparation comes from the heating system. (Hot water tank coupled to the heating)

In this case, the costs are shown combined.

What is special here is that the conversion formula used to split the total energy into heating energy and domestic hot water preparation energy is shown.

Separate cost centres cost overview

![VEWA - Billing – Figure 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Combined cost centre overview heating + domestic hot water
(conversion formula below the cost overview)

![VEWA - Billing – Figure 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Using VEWA with a property management software interface

[Data exchange with VEWA and DTA-VHKA files](/schnittstellen/dta-vhka-files)

## Troubleshooting VEWA and billing

[Issues related to VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Literature and further documents on VEWA (current legal situation)

[VEWA billing model details and guideline](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continue to the VHKA interface](/schnittstellen/dta-vhka-files)
