---
title: 'VEWA - Billing'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction to smart-me from 2min 20sec'
sidebar_label: 'VEWA - Billing'
---
![VEWA - Billing – Figure 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## VEWA webinar

<Video src="nrziX2lLI0s" title="YouTube Video" />

- [Introduction to smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) from 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) from 12min 50sec

- [Live demo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) from 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) from 40min 32sec 


## General information on VEWA

VEWA stands for consumption-based billing of energy and water costs. It provides guidelines for the fair allocation of all types of energy costs and covers:

- Heat

- Cooling

- Domestic hot water

- Cold water 

- Electricity (can also be handled separately)


VEWA is the successor to the well-known VHKA billing scheme and supports additional energy sources and simplified procedures.

VEWA handles the cost allocation for separate or combined heating systems based on meter readings and distributes the costs as fairly as possible.

For heat, cooling and domestic hot water, special procedures are applied to compensate for differences in apartment location, losses in pipes or other differences between consumers.

The following forms of cost allocation are available:

Separate cost centres

- Each type of energy comes from a different source


![VEWA - Billing – Figure 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Combined heat and domestic hot water

- Heating of any kind with a connected hot water tank


![VEWA - Billing – Figure 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Combined heat + cooling and domestic hot water

- Heat pump with free cooling


![VEWA - Billing – Figure 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Range of functions

### Which systems can be billed with smart-me VEWA?

- separate heating and water systems (heat, cooling, domestic hot water, cold water)

- combined heating and hot water systems (heat + domestic hot water, cooling, cold water)

- combined heating, hot water and cooling systems (heat + cooling + domestic hot water, cold water)


A prerequisite for successfully billing a type of energy is that consumption meters for each energy type are present in the units.

Note: 

- Heat cost allocators are not supported

- When billing with total production meters, the costs can be allocated to the residential units on a percentage basis.


![VEWA - Billing – Figure 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Common areas:

It is possible to allocate collections of meters in folders to billing units on a percentage basis at a later point (billing).

This is supported for both of the system variants above.

### How many systems can be configured in one account?

One VEWA system can be billed per property. If there are several heating systems, several properties are created in the same account.

These can then be billed individually with different billing periods.

### General approach when working with smart-me VEWA

- VEWA can be applied to any property. Make sure that all consumption meters of the same heating system are located in the same property.
    If several buildings share the same heating system, the buildings must be merged into one.

- When using VEWA, all rental agreements and also vacancies must be recorded correctly in the tenant schedule. Either in smart-me Billing or in the external property management software when using DTA-VKA files.


## Configuring VEWA

1.  ### Activate VEWA and configure the cost allocations.


Select the heating system:

- Heat, cooling and domestic hot water combined

- Heat, domestic hot water combined

- Separate systems


Whether combined or not depends on the heat generation. If, for example, a heat pump is used for heating, cooling and hot water preparation, combined billing is the obvious choice, since the input variable is the same for all three types of energy, namely electricity.

If, however, heating is provided by an oil heating system while the domestic hot water is heated purely electrically without support from the oil heating system, non-combined billing is the right choice.

Cost allocation

The cost allocation splits the total costs into fixed costs (basic costs) and variable costs (consumption-based costs).

Basic costs

The basic costs take into account any pipe losses, circulation losses, the favourable location of an apartment with more sunshine and so on, and distribute a share of the costs across all tenants and their share of the total floor area of the property.

Variable costs

The variable costs are applied directly to the recorded amounts of energy consumed. They correspond to the individual consumption of each tenant.

Domestic hot water preparation

So that the energy that went into hot water preparation can be estimated from m3 values, the following standard formula is applied:

Hot water energy in kWh =
Total domestic hot water consumption values \[m3\] \* 1.163 \* temperature difference \[K\] \* 1,25

The temperature difference can be selected and refers to the temperature difference between the cold water as it enters the building (usually +10°C) and the point at which it has been heated to the average temperature of the boiler (usually +52°C).

In this example, the difference is therefore: 

Temperature difference = target temperature - inlet temperature = 52°C - 10°C = 42 K

![VEWA - Billing – Figure 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Reference values for configuring basic costs and variable costs:

New buildings (anything from 2018 onwards): 

- Basic costs 30%, variable costs 70%


Renovated older buildings (insulation upgraded to new-build standard):

- Basic costs 40%, variable costs 60%


Non-renovated older buildings (before 2018):

- Basic costs 40%\-50%, variable costs 50-60%

- In addition, a location adjustment must be calculated for each apartment. Either the reading of the apartment meter is reduced or the distribution percentages of the total meter are weighted. 
    (Details in chapter 10 of the VEWA document under further literature)


The apartment meter readings can be adjusted here to make the location adjustment: [Meter/folder configuration](/konfiguration/ordnerkonfiguration)  

- If a meter has to reduce its reading by 20%: 
    The value correction is set from 100% to 80%.


### 2\. Creating a billing period

The costs can be recorded per energy type as full costs.
With combined systems, the individual costs of the individual energy sources are added together.

![VEWA - Billing – Figure 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Create billing periods and define the content of the billing period

1.  Create the billing period

2.  Activate or deactivate content


If electricity and the heating and ancillary costs are billed at different intervals, several periods are recorded.

For example:

- Electricity period Q1 2024 (electricity and other items only)

- Electricity period Q2 2024 (electricity and other items only)

- Electricity period Q3 2024 (electricity and other items only)

- Electricity period Q4 2024 (electricity and other items only)

- Heat and water period 2024 (heat, cooling, domestic hot water and cold water only)


![VEWA - Billing – Figure 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Recording the costs of the billing period

Note on exporting to property management software with DTA-VHKA files:
If you want to use VEWA but export the data to another system as per mille or consumption values, you do not need to record any costs. However, the billing period must be created beforehand.

The costs that may be recorded fall roughly into the following categories:

Energy costs

Costs for the purchased energy source, for example: 

- 1000 litres of oil for 2000 CHF

- 500kWh of electricity for 200 CHF

- 10 m3 of cold water for 50 CHF


Ancillary energy costs

Costs for operation and maintenance

- Costs of the periodic inspection of the heating system

- Costs for the meter reading service (e.g. amortisation of the smart-me licence costs for the devices)

- Administrative work in connection with the heating system

- Chimney sweep costs

- Waste disposal if the heating system generates such costs.


What does not belong to the ancillary energy costs

- Metering infrastructure (this is handled via a rent increase)


Note on the domestic hot water costs:

The costs for domestic hot water only include the costs of heating the hot water. The amount of cold water used for hot water preparation is automatically transferred to the cold water section. 

- If a total cold water meter is allocated to several apartments on a percentage basis, the entire amount of cold water is calculated from this shared meter.

- If cold and hot water meters are located in the apartments and are applied with 100% of the consumption, the total for cold water is the sum of all hot and cold water meters.


These can be entered per energy type and are added up.

![VEWA - Billing – Figure 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Billing meter rentals

Unlike in a ZEV (association for own consumption), VEWA allows the costs for the amortisation of heat and water meters to be charged to consumers.

However, this must be done by increasing the rent, not via the ancillary costs.

The hardware costs and the installation of a meter may be passed on.

An amortisation period of 10 years applies.

The rules for passing on costs are described in Art. 269d CO and Art. 19 and 20 VMWG

Details of the calculation can be found in the official VEWA document under 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Recording a permanently valid tariff for each energy source

- This tariff is entered without a price (0) and with an unlimited validity (2099).

- Every energy source with a valid tariff is shown on the invoice.




![VEWA - Billing – Figure 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Entering the apartment floor areas

The apartment floor areas must be known for the VEWA calculation and the allocation of the basic costs. They can be defined in the respective billing unit. They are then added up to the relevant total floor area.

Note: In order to report the relevant total floor area correctly, all premises must be recorded as billing units, even if they themselves have no meters assigned and are handled externally at a flat rate.
Only whole numbers are possible.



![VEWA - Billing – Figure 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Next step

## Invoice content and breakdown

### Overview

The overview contains all costs at a glance, including any applied taxes and rounding differences.

![VEWA - Billing – Figure 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Heat

The heat section shows the total costs for the heat cost centre and the distribution keys and reference values applied.

- Basic cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in kWh (here 700 kWh)

- Total living space of the property in m2 (here 300 m2)


The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter readings of the apartment.

- Living space of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment (here 500kWh)






![VEWA - Billing – Figure 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Domestic hot water

The domestic hot water section shows the total costs for the hot water cost centre and the distribution keys and reference values applied.

- Basic cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 5 m2)

- Total living space of the property in m2 (here 300 m2) 


These costs consist exclusively of the costs required to produce the hot water, but not the cold water used for it.
More on the costs in the cost centre overview section.

The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter readings of the apartment.

- Living space of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment in m3 (here 3 m3)


![VEWA - Billing – Figure 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Cold water

The cold water section shows the total costs for the cold water cost centre and the distribution keys and reference values applied.

- Basic cost share in % (here 20%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 13 m2)

- Total living space of the property in m2 (here 300 m2) 


The calculated tariffs are then applied to the respective apartment (blue block) based on the measured meter readings of the apartment.

- Living space of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the respective apartment in m3 domestic hot water
    (here 3 m3)

- Meter reading of the respective apartment in m3 cold water
    (here 5 m3)


Note:

Depending on the system, only cold water meters or a mix of cold and hot water meters may appear here; these systems are detected automatically.

- If there is a main meter for cold water and none in the apartments, or only hot water meters in the apartments, only a percentage-based cold water meter would appear here.

- If there are apartment meters for hot and cold water, both meters per apartment always appear here; the sum gives the total water consumption.


![VEWA - Billing – Figure 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Cost centre overview

Separate cost centres

Every invoice includes the cost centre overview. It contains all recorded cost items for the individual cost centres.

- For heat, all costs relating to the heating system are listed.

- For domestic hot water, only the costs relating to the heating of the hot water are listed, but not the amount of cold water used.

- For cold water, all costs relating to cold water and waste water are entered.


Combined cost centres

The cost centre overview can change visually when systems are combined.

A common example is the combination of heat and domestic hot water, since part of the energy for hot water preparation comes from the heating system. (Hot water tank coupled to the heating system)

In this case, the costs are shown combined.

A special feature of this is that the conversion formula used to split the total energy into heating energy and hot water preparation energy is shown.

Cost overview for separate cost centres

![VEWA - Billing – Figure 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Combined cost centre overview heat + domestic hot water
(conversion formula below the cost overview)

![VEWA - Billing – Figure 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Using VEWA with the property management software interface

[Data exchange with VEWA and DTA-VHKA files](/schnittstellen/dta-vhka-files)

## Troubleshooting VEWA and Billing

[Faults in connection with VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Literature and further documents on VEWA (current legal situation)

[VEWA billing model details and guidelines](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continue to the VHKA interface](/schnittstellen/dta-vhka-files)
