---
title: 'VEWA - Billing'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'General information about VEWA'
sidebar_label: 'VEWA - Billing'
---
![VEWA - Billing – figure 1](/img/_en/configuration-billing-vewa-billing/01.png)

## General information about VEWA

VEWA stands for consumption-based energy and water cost billing. It provides a guide to fair billing of all types of energy costs and includes

- Heating

- cooling

- hot water

- cold water 

- Electricity (can also be solved separately)


VEWA is the successor to the well-known VHKA billing system and supports extended energy sources and simplified procedures.

VEWA distributes the costs for separate or combined heating systems based on meter readings and distributes the costs as fairly as possible.

To this end, special procedures are used for heating, cooling and hot water in order to compensate for inequalities in the location of the apartments, losses in pipes or other differences between consumers.

The following forms of cost allocation are used:

Sperated cost centers

- Each energy comes from a different source


![VEWA - Billing – figure 2](/img/_en/configuration-billing-vewa-billing/02.png)

Combined heat and warm water

- Any heatsystem with connected hot water reservoir


![VEWA - Billing – figure 3](/img/_en/configuration-billing-vewa-billing/03.png)

Combined heat, cold and warm water cost center

- Heatpump with freecooling and hot water reservoir


![VEWA - Billing – figure 4](/img/_en/configuration-billing-vewa-billing/04.png)

## Functional scope

### Which systems can be billed with smart-me VEWA?

- Separate heating and water systems (heating, cooling, hot water, cold water)

- Combined heating and hot water systems (heat + hot water, cooling, cold water)

- Combined heating, hot water and cooling systems (heating + cooling + hot water, cold water)


The prerequisite for successful billing of an energy type is that consumption meters are available in the units for each energy type.

Please note: 

- Heat cost allocators are not supported


![VEWA - Billing – figure 5](/img/_en/configuration-billing-vewa-billing/05.png)

Common Areas:

It is possible to allocate meter readings collected in folders to billing units on a percentage basis at a later time (Billing).

This is supported for both of the above system variants.

### How many systems can be configured in one account?

One VEWA system can be billed per property. If there are several heating systems, several properties are created in the same account.

These can then be billed individually with different billing periods.

### General mode of operation with smart-me VEWA

- VEWA can be used on any property. Accordingly, make sure that all consumption meters of the same heating system are located in the same property. If a heating system is the same for several buildings, the buildings must be merged into one.

- When using VEWA, all rental agreements and vacancies must be recorded correctly in the tenant register. Either in smart-me Billing or in the external real estate software when using DTA-VKA files.


## Configure VEWA

### 1\. Create properties depending on the structure

For VEWA, a property must be created for each heating system. Examples of the appropriate structure for implementation can be found here: [smart-me Billing](/konfiguration/billing)

A separate property is now created for each property folder with bills, except for the technical meters.

In example 1a. a property is created for electricity and VEWA:

- Altgasse 13 (only one building)


In example 1b. or a superstructure situation, three properties are created for electricity and VEWA:

- Altgasse 13

- Altgasse 15 + 17

- Altgasse 19


The reason for the special treatment is that in this case the buildings do not share a single heating source. If this were the case, everything could be managed in one property.

Note: In example 1b, the electricity tariffs in each property must be configured individually

Billing configuration example 1b:

![VEWA - Billing – figure 6](/img/_en/configuration-billing-vewa-billing/06.png)

Example 1a.

![VEWA - Billing – figure 7](/img/_en/configuration-billing-vewa-billing/07.png)

Example 1b.

![VEWA - Billing – figure 8](/img/_en/configuration-billing-vewa-billing/08.png)

### 2\. Activate VEWA and configure cost allocations.

Select the heating system:

- Combined heating, cooling and hot water

- Heat, hot water combined

- Separate systems


Whether combined or not depends on the heat generation. If, for example, a heat pump is used for heating, cooling and hot water preparation, combined billing is the best option, as the cost factor for all three energies is the same, namely electricity.

However, if the heating is provided by an oil heating system, but the hot water is produced purely electrically without the support of the oil heating system, non-combined billing is the choice.

Cost allocation

Cost allocation divides the total costs into fixed costs (basic costs) and variable costs (consumption-dependent costs).

Basic costs

The basic costs take into account any line losses, circulation losses, preferred location of an apartment with more sunshine, etc. and allocate a share of the costs to all tenants and their share of the total area of the property.

Variable costs

The variable costs are applied directly to the recorded quantities of energy consumed. They correspond to the individual consumption of each tenant.

Hot water preparation

The following standard formula is used to estimate the energy used for hot water preparation on the basis of m3 values:

Hot water energy in kWh = Total hot water consumption \[m3\] \* 1.163 \* Temperature difference \[K\] \* 1.25

The temperature difference can be selected and refers to the temperature difference of the cold water when it enters the building (usually +10°C) until it has been heated to the average temperature of the boiler (usually +52°C).

According to this example, the difference is 

Temperature difference = target average temperature - inlet temperature = 52°C - 10°C = 42 K

![VEWA - Billing – figure 9](/img/_en/configuration-billing-vewa-billing/09.png)

Orientation values for basic costs and variable costs Configuration:

New buildings (all from 2018): 

- Basic costs 30%, variable costs 70%


Renovated old buildings (insulation increased to new-build standard):

- Basic costs 40%, variable costs 60%


Non-renovated old buildings (before 2018):

- From basic costs 40%-50%, variable costs of 50-60%

- In addition, a location adjustment must be calculated for each apartment and either the measured value of the apartment meter must be reduced or the distribution percentages of a total meter must be weighted.
    (Details in chapter 10 VEWA document under extended literature)


Metering values can be influenced here do make the adjustment:
[Meter/Folder Configuration](/konfiguration/ordnerkonfiguration)  

- If a meter must reduce its measurement value by 20%: 
    Measurment correction is set from 100% to 80%


### 3\. Recording a billing period

The costs can be recorded as full costs for each energy type. For combined systems, the individual costs of the individual energy sources are added together.

![VEWA - Billing – figure 10](/img/_en/configuration-billing-vewa-billing/10.png)

### 4\. Creating accounting periods and defining the content of the accounting period

Creating the billing period

1.  Activate or deactivate content

2.  If electricity and the heating and ancillary costs are billed at different intervals, several periods are recorded.


e.g:

- Electricity period Q1 2024 (electricity and others only)

- Electricity period Q2 2024 (electricity and others only)

- Electricity period Q3 2024 (electricity and others only)

- Electricity period Q4 2024 (electricity and others only)

- Heat / Water period 2024 (only heat, cooling, hot and cold water)


![VEWA - Billing – figure 11](/img/_en/configuration-billing-vewa-billing/11.png)

### 5\. Recording the costs of the settlement period

Note for export to real estate software with DTA-VHKA files:
If you want to use VEWA but export the data to another system in per thousand or consumption values, you do not need to enter any costs. The billing period needs to be created beforehand in the smart-me VEWA.

The costs that may be recorded are roughly divided into the following costs:

Energy costs

Costs for the purchased energy source e.g: 

- 1000 liters of oil for 2000 CHF

- 500kWh electricity for 200 CHF

- 10 m3 cold water for 50 CHF


Ancillary energy costs

- Costs for operation and maintenance

- Costs of periodic inspection of the heating system

- Costs for the meter reading service (e.g. amortization of smart-me license costs)

- Administrative work in connection with the heating system

- Chimney sweep costs

- Waste disposal if the heating system incurs such costs.


What are not ancillary energy costs

- Measurement infrastructure (This can be added to the rent costs)


Note for hot water costs:

The cost of hot water only carry costs for heating the hot water. The cold water amount used for hot water preparation is automatically applied in the cold water section. 

- If a total cold water meter is shared among apartments the total cold water is driven by the shared meter.

- If cold water and hoit water meters are located in the appartments and applied with 100% of consumption, the total for coldwater is the sum of all hot and cold water meters.


These can be entered per energy type and are added up.

![VEWA - Billing – figure 12](/img/_en/configuration-billing-vewa-billing/12.png)

### 6\. Meter rental fees

Unlike under the ZEV, the VEWA allows costs associated with the amortization of heat and water meters to be passed on to consumers.

However, this must be done through an increase in rent, not through utility charges.

The hardware costs and the installation of a meter may be passed on.

The amortization period is 10 years.

The pass-through rules are described in Art. 269d of the Swiss Code of Obligations (OR) and Arts. 19 and 20 of the Water and Wastewater Ordinance (VMWG).

Details on the calculation can be found in the official VEWA document under 2.2 FORMAL PASS-THROUGH RULES

### 7\. Enter a tariff that is always valid for each energy source

- This tariff is entered without a price (0) and is valid indefinitely (2099).

- Each energy source with a valid tariff is shown on the bill.




![VEWA - Billing – figure 13](/img/_en/configuration-billing-vewa-billing/13.png)

### 8\. Enter apartment areas

The apartment areas must be known for the VEWA calculation and allocation of the basic costs. These can be defined in the respective settlement unit. They are then added up to the relevant total area.

Note:
In order to report the relevant total area correctly, all premises must be recorded as a billing unit, even if they do not have meters attached and are handled externally on a flat-rate basis.
Only whole numbers are possible.



![VEWA - Billing – figure 14](/img/_en/configuration-billing-vewa-billing/14.png)

### 9\. Record tenant list

For VEWA accounting, all tenant contracts and vacancies must be entered in smart-me without any gaps.

Note for export to real estate software with DTA-VHKA files:
If you want to use the VEWA but export the data to another system, you do not need to enter a tenant list, this is created via the import file. make sure that all tenant relationships and vacancies are recorded.



![VEWA - Billing – figure 15](/img/_en/configuration-billing-vewa-billing/15.png)

### Next Step

## Use VEWA with real estate software interface

[Data exchange VEWA and DTA-VHKA Files](/schnittstellen/dta-vhka-files)

## Error handling VEWA and Billing

[Error messages billing](/stoerungsbehebung/billing-fehlermeldungen)

## Literature and further documents on VEWA (current legal situation)

[VEWA Model Details](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Go to VHKA-File Interface](/schnittstellen/dta-vhka-files)
