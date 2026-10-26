---
title: 'VEWA - Billing'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction to smart-me from 2min 20sec'
sidebar_label: 'VEWA - Billing'
naechste_schritte: [konfiguration/billing/rechnung-erstellen]
vorheriger_schritt: konfiguration/billing/sonstige-kosten
---

<Menueweg>Billing → Properties & tariffs → VEWA</Menueweg>

## Billing heat and water: two options

You can configure tariffs and billing for multiple energy types in two ways:

**Billing without the VEWA function**

- Billing uses an externally calculated energy tariff for each energy type. You enter it as a price in CHF/m3 or CHF/kWh in the property, under the virtual tariffs.

**Billing with the VEWA function (recommended)**

- You can record the heat and water costs that build up over the year. The tariff is then calculated over the period and distributed to the billing units using allocation keys.

This page describes the recommended option with the VEWA function.

## VEWA webinar

<Video src="nrziX2lLI0s" title="YouTube video" />

- [Introduction to smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) from 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) from 12min 50sec

- [Live demo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) from 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) from 40min 32sec 


## About VEWA

VEWA stands for consumption-based billing of energy and water costs (Verbrauchsabhängige Energie- und Wasserkosten Abrechnung). It is a guideline for distributing all types of energy costs fairly and covers:

- Heating

- Cooling

- Domestic hot water

- Cold water 

- Electricity (can also be handled separately)


VEWA replaces the well-known VHKA billing. It supports more energy sources and simplified procedures.

VEWA distributes costs for separate or combined heating systems based on meter readings, as fairly as possible.

For heating, cooling and domestic hot water, it uses special methods to offset differences in apartment location, pipe losses and other differences between consumers.

Costs can be split in the following ways:

Separate cost centers

- Each type of energy comes from a different source


![VEWA - Billing – Figure 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Combined heating and domestic hot water

- Any type of heating with a connected hot water tank


![VEWA - Billing – Figure 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Combined heating + cooling and domestic hot water

- Heat pump with free cooling


![VEWA - Billing – Figure 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Features

### Which systems can be billed with smart-me VEWA?

- separate heating and water systems (heating, cooling, domestic hot water, cold water)

- combined heating and domestic hot water systems (heating + domestic hot water, cooling, cold water)

- combined heating, domestic hot water and cooling systems (heating + cooling + domestic hot water, cold water)


To bill an energy type, each unit must have consumption meters for that energy type.

Note: 

- Heat cost allocators are not supported

- If you bill with total generation meters, you can distribute the costs to the residential units by percentage.


![VEWA - Billing – Figure 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Common areas:

At a later stage (Billing), you can distribute groups of meters in folders to billing units by percentage.

This is supported for both system variants above.

### How many systems can be configured in one account?

You can bill one VEWA system per property. If there are several heating systems, create several properties in the same account.

You can then bill each of them separately, with different billing periods.

### How smart-me VEWA works in general

- VEWA can be used on any property. Make sure that all consumption meters of the same heating system are in the same property.
    If several buildings share one heating system, combine the buildings into one.

- With VEWA, all rental contracts and vacancies must be entered correctly in the tenant register. Either in smart-me Billing or in the external property management software if you use DTA-VKA files.


## Configuring VEWA

### 1. Activate VEWA and configure the cost allocation.


Select the heating system:

- Heating, cooling and domestic hot water combined

- Heating and domestic hot water combined

- Separate systems


Whether to choose combined or not depends on how the heat is generated. If, for example, a heat pump is used for heating, cooling and domestic hot water, combined billing makes sense, because the input is the same for all three energy types: electricity.

If, however, the heating runs on oil and the domestic hot water is heated purely electrically without support from the oil heating, choose non-combined billing.

Cost allocation

The cost allocation splits the total costs into fixed costs (base costs) and variable costs (consumption-based costs).

Base costs

Base costs account for pipe losses, circulation losses, the advantage of an apartment with more sunshine and so on. They distribute part of the costs to all tenants according to their share of the total floor area of the property.

Variable costs

Variable costs are applied directly to the recorded amounts of energy consumed. They correspond to each tenant's individual consumption.

Domestic hot water heating

To estimate the energy used to heat domestic hot water from m3 values, the following standard formula is applied:

Domestic hot water energy in kWh =
Total consumption domestic hot water \[m3\] \* 1.163 \* temperature difference \[K\] \* 1,25

You can choose the temperature difference. It is the difference between the cold water temperature where it enters the building (usually +10°C) and the average temperature of the boiler after heating (usually +52°C).

In this example, the difference is: 

Temperature difference = target temperature - inlet temperature = 52°C - 10°C = 42 K

![VEWA - Billing – Figure 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Reference values for configuring base costs and variable costs:

New buildings (anything from 2018): 

- Base costs 30%, variable costs 70%


Renovated older buildings (insulation upgraded to new-build standard):

- Base costs 40%, variable costs 60%


Unrenovated older buildings (before 2018):

- Base costs from 40%\-50%, variable costs from 50-60%

- In addition, a location adjustment must be calculated for each apartment. Either the reading of the apartment meter is reduced, or the distribution percentages of the total meter are weighted. 
    (Details in chapter 10 of the VEWA document under further reading)


You can adjust the apartment meter readings here to apply the location adjustment: [Meter/Folder Configuration](/konfiguration/ordnerkonfiguration)  

- If a meter needs to reduce its reading by 20%: 
    Set the value correction from 100% to 80%.


### 2\. Entering a billing period

You can enter the costs per energy type as full costs.
For combined systems, the individual costs of the individual energy sources are added together.

![VEWA - Billing – Figure 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Create billing periods and define the content of the billing period

<div className="row">
<div className="col col--4">

1.  Create the billing period

2.  Activate or deactivate content

If electricity and the heating and ancillary costs are billed at different intervals, create several periods.

For example:

- Electricity period Q1 2024 (electricity and other costs only)

- Electricity period Q2 2024 (electricity and other costs only)

- Electricity period Q3 2024 (electricity and other costs only)

- Electricity period Q4 2024 (electricity and other costs only)

- Heat and water period 2024 (heating, cooling, domestic hot water and cold water only)

</div>
<div className="col col--8 text--center">

![VEWA - Billing – Figure 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Entering the costs of the billing period

Note on exporting to property management software with DTA-VHKA files:
If you want to use VEWA but export the data to another system as per mille or consumption values, you do not need to enter any costs. However, the billing period must be created beforehand.

The costs you may enter fall roughly into the following categories:

Energy costs

Costs for the purchased energy source, for example: 

- 1000 litres of oil for 2000 CHF

- 500kWh of electricity for 200 CHF

- 10 m3 of cold water for 50 CHF


Energy ancillary costs

Costs for operation and maintenance

- Costs of the periodic servicing of the heating system

- Costs for the meter reading service (e.g. amortization of the smart-me license costs for the devices)

- Administrative work related to the heating system

- Chimney sweep costs

- Waste disposal, if the heating system generates such costs.


What does not count as energy ancillary costs

- Metering infrastructure (this is covered by a rent increase)


Note on domestic hot water costs:

The domestic hot water costs only include the costs of heating the water. The amount of cold water used to produce domestic hot water is automatically included in the cold water part. 

- If a total cold water meter is split by percentage across several apartments, the total amount of cold water is calculated from this shared meter.

- If there are cold and domestic hot water meters in the apartments and they are applied at 100% of consumption, the cold water total is the sum of all domestic hot water and cold water meters.


You can enter these per energy type; they are added up.

![VEWA - Billing – Figure 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Charging meter rental

Unlike in a ZEV (association for own consumption), with VEWA you may charge consumers for the amortization of heat meters and water meters.

However, this must be done by increasing the rent, not through the ancillary costs.

You may pass on the hardware costs and the installation of a meter.

An amortization period of 10 years applies.

The rules for passing on costs are set out in Art. 269d CO and Art. 19 and 20 VMWG.

Details on the calculation can be found in the official VEWA document under 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Entering a permanently valid tariff for each energy source

- Enter this tariff without a price (0) and with unlimited validity (2099).

- Every energy source with a valid tariff is shown on the invoice.




![VEWA - Billing – Figure 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Entering apartment floor areas

The apartment floor areas are needed for the VEWA calculation and for allocating the base costs. You can set them in each billing unit. They are then added up to the relevant total floor area.

Note: To report the relevant total floor area correctly, all premises must be entered as billing units, even if they have no meters assigned and are handled externally at a flat rate.
Whole numbers only.

![VEWA - Billing – Figure 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Invoice content and breakdown

### Overview

The overview shows all costs at a glance, including any applied taxes and rounding differences.

![VEWA - Billing – Figure 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Heating

The heating section shows the total costs for the heating cost center and the allocation keys and reference values used.

- Base cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in kWh (here 700 kWh)

- Total living area of the property in m2 (here 300 m2)


The calculated tariffs are then applied to each apartment (blue block) based on the apartment's measured meter values.

- Living area of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the apartment (here 500kWh)






![VEWA - Billing – Figure 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Domestic hot water

The domestic hot water section shows the total costs for the domestic hot water cost center and the allocation keys and reference values used.

- Base cost share in % (here 30%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 5 m2)

- Total living area of the property in m2 (here 300 m2) 


These costs consist only of the costs needed to heat the water, not of the cold water used for it.
More on the costs in the cost center overview section.

The calculated tariffs are then applied to each apartment (blue block) based on the apartment's measured meter values.

- Living area of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the apartment in m3 (here 3 m3)


![VEWA - Billing – Figure 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Cold water

The cold water section shows the total costs for the cold water cost center and the allocation keys and reference values used.

- Base cost share in % (here 20%)

- Consumption cost share in % (here 70%)

- Total consumption of the property in m3 (here 13 m2)

- Total living area of the property in m2 (here 300 m2) 


The calculated tariffs are then applied to each apartment (blue block) based on the apartment's measured meter values.

- Living area of the apartment in m2 (here 100 m2)

- Occupancy days (here 91 of 91, 100% occupancy)

- Meter reading of the apartment in m3 domestic hot water
    (here 3 m3)

- Meter reading of the apartment in m3 cold water
    (here 5 m3)


Note:

Depending on the system, this section shows either cold water meters only or a mix of cold water and domestic hot water meters. The system type is detected automatically.

- If there is a main cold water meter and no meters in the apartments, or only domestic hot water meters in the apartments, this section shows only a percentage-based cold water meter.

- If there are apartment meters for both domestic hot water and cold water, both meters are always shown per apartment; their sum is the total water consumption.


![VEWA - Billing – Figure 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Cost center overview

Separate cost centers

Every invoice includes the cost center overview. It contains all cost items entered for the individual cost centers.

- Heating lists all costs for the heating system.

- Domestic hot water lists only the costs for heating the water, not the amount of cold water used.

- Cold water includes all costs for cold water and wastewater.


Combined cost centers

The cost center overview can look different when systems are combined.

Combining heating and domestic hot water is common, for example, because part of the energy for heating domestic hot water comes from the heating system. (Hot water tank coupled to the heating)

In this case, the costs are shown combined.

What is special here is that the conversion formula used to split the total energy into heating energy and domestic hot water energy is shown.

Separate cost centers cost overview

![VEWA - Billing – Figure 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Combined cost center overview heating + domestic hot water
(conversion formula below the cost overview)

![VEWA - Billing – Figure 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Using VEWA with a property management software interface

[Data exchange with VEWA and DTA-VHKA files](/schnittstellen/dta-vhka-files)

## VEWA and Billing troubleshooting

[Issues related to VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Literature and further documents on VEWA (current legal situation)

[VEWA billing model details and guideline](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continue to the VHKA interface](/schnittstellen/dta-vhka-files)
