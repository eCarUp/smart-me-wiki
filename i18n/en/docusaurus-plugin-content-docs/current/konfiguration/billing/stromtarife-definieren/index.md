---
title: 'Define electrical tariffs'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'The elcetrical tariffs can be caluclated using the tariff datasheets from the electrical suppliers and the use of our tariff calculator tool.'
sidebar_label: 'Define electrical tariffs'
---
![Define electrical tariffs – figure 1](/img/_en/configuration-billing-define-electrical-tariffs/01.png)

## Define the tarrifs

The elcetrical tariffs can be caluclated using the tariff datasheets from the electrical suppliers and the use of our tariff calculator tool.

[smart-me tariff calculator](https://doc.smart-me.com/configuration/billing/define-electrical-tariffs/smart-me-tariff-calculator)

## Configure tariffs

In smart-me Billing, you can work either with electricity tariffs or with virtual tariffs. The solution using electricity tariffs is exclusively suitable for implementing pure grid power systems. In all other cases, virtual tariffs must be used.

### 1.Get the tariff from your energy supplier

Your energy supplier's tariff sheet is available online on their website several months before the start of the new tariff period.

Make sure to inform yourself about the exact tariff you are purchasing from the energy supplier:

- Energy product type: Green, Blue, Grey, or other options

- Tariff structure: Single rate (flat tariff), dual rate (high/low tariff), or dynamic rate


### 2\. Choose the method to calculate your local solar tariff

You can choose between two fundamental approaches:

Flat-rate Method (80% of the standard grid product)

Important:
No fees may be charged here for the measurement of the ZEV, or for the administration and billing of the ZEV. The energy provider’s meter fee for the ZEV’s main meter may not be charged separately in addition to these fees.

- -   -   Option 1: Grid electricity billed 1:1; solar electricity billed at 80% of basic costs and 80% of the grid purchase price


This option is suitable for optimizing profits within the ZEV, as long as there is high occupancy among tenants. This method is not suitable if large industrial consumers are located in the same building and a multi-rate system is in place. Best solution for multi-rate systems.

- -   -   Option 2: Grid electricity 1:1; solar electricity at 80% of the ElCom reference price (Use when the energy supplier offers dynamic tariffs)


This option is suitable for all ZEVs without large industrial consumers and is the easiest to implement. If this option is used in conjunction with industrial customers and a multi-rate (dual-rate) system, the industrial customer may end up paying more due to the higher solar rate than they would outside the ZEV!

Actual Costs (Production Cost Accounting)

With this method, fees for metering, billing, and management can be charged in addition to the calculated value of the solar electricity. Details on this can be found in the VEWA manual.

This method is suitable if 80% of the grid electricity rate would not cover the costs of your solar PV system (which is very rarely the case).

Note: This method must be mathematically proven year after year with precise calculations, significantly increasing your administrative workload.

### 3\. Calculate your tariffs for the tariff period

The easiest way to perform the calculation is by using our tariff calculator. Depending on the selected method, it tells you which entries you need to make in smart-me.

For dynamic tariffs: Select the 80% Elcom method and search the calculator for the H4 tariff of your region and energy supplier to use as a reference.

[smart-me tariff calculator](https://doc.smart-me.com/configuration/billing/define-electrical-tariffs/smart-me-tariff-calculator)

### 4\. Configure your grid tariffs

Now navigate back to the Property Configuration.

1.  Billing

2.  Configuration

3.  Property

4.  Virtual Tariffs


![Define electrical tariffs – figure 2](/img/_en/configuration-billing-define-electrical-tariffs/02.png)

Create now the grid tariff for the time period

### Exampls: Flat-rate (single) tariff

### Example dual tariff

Next step: define the timing of the dual tariff

[Define tariff timings](https://doc.smart-me.com/configuration/if-then-action/define-tariff-timing)

![Define electrical tariffs – figure 3](/img/_en/configuration-billing-define-electrical-tariffs/03.png)



Example: Flat-rate tariff using the 80% fixed-rate method:

Now create a grid tariff with the specified price:

- Grid Tariff 2026: 0.19707 CHF / kWh


![Define electrical tariffs – figure 4](/img/_en/configuration-billing-define-electrical-tariffs/04.png)

![Define electrical tariffs – figure 5](/img/_en/configuration-billing-define-electrical-tariffs/05.png)

Example: Flat-rate tariff using the 80% fixed-rate method:

Now create two grid tariffs with the specified prices:

- Grid Tariff HT 2026: 0.22409 CHF / kWh

- Grid Tariff NT 2026: 0.17007 CHF / kWh


For dual tariffs, the timing must first be created using [IF/THEN](/konfiguration/wenndann-aktionen) actions. These actions can then be linked with the "Additional Condition" to control validity throughout the week.



![Define electrical tariffs – figure 6](/img/_en/configuration-billing-define-electrical-tariffs/06.png)

![Define electrical tariffs – figure 7](/img/_en/configuration-billing-define-electrical-tariffs/07.png)

Now create the solar tariff for this.

Note:

There are various solar tariffs and battery tariffs with different capabilities and prerequisites.

In general, the Solar Tariff vZEV is the best and most universal choice.

What it cannot do, however, is define different tariffs for battery and solar energy. For that purpose, the alternative tariff must be used.

Details can be found below in the "All Details" section.

In this example, the Solar Tariff vZEV is used.

Measurements:

All solar tariffs require relevant metering points that must be linked.

Simplest option: 

- "Solar Meter" field: Select all Production meter/s (solar and battery)

- "Balance Meter" field: Select Balance meter (1 House: house connection meter , Area: site meter or multiple house meters)


Alternative option: 

- "Solar Meter" field: Select all Production meter/s (solar and battery)

- "Balance Meter" field: Select all consumption meters and production meters


solar single tariff

![Define electrical tariffs – figure 8](/img/_en/configuration-billing-define-electrical-tariffs/08.png)

Solar double tariffs HT and NT

![Define electrical tariffs – figure 9](/img/_en/configuration-billing-define-electrical-tariffs/09.png)

![Define electrical tariffs – figure 10](/img/_en/configuration-billing-define-electrical-tariffs/10.png)

### Recalculation of the electricity tariffs

When virtual tariffs are used, you must click Recalculate at the end of the configuration (as well as whenever configuration changes are made later), preferably setting the start date to 01/01/2018. This recalculates all historical values up to the present.

Before an invoice can be created, you must wait until the last calculated value shows "Today" and no error message appears.

Error messages caused by configuration issues are usually displayed within one minute. It is therefore worth clicking "Recalculate" and waiting briefly to see whether an error message appears.

Tip: A recalculation is not required for price or tenant changes (addresses, move-in, or move-out dates). In all other cases, a recalculation is always required.

![Define electrical tariffs – figure 11](/img/_en/configuration-billing-define-electrical-tariffs/11.png)

### Entering a peak load tariff

![Define electrical tariffs – figure 12](/img/_en/configuration-billing-define-electrical-tariffs/12.png)

Peak power tariffs allow you to cover advanced or modern electricity pricing models from energy suppliers.

On the tariff sheet, this type of tariff can be recognized by its unit—typically listed as, for example, 1.50 CHF / kW / month.

In our example, we record the calculated price.

Peak power costs can be recorded using one of two methods:

- Consumption measurement: Automatically via its own balance measurement

- Allocated costs: Manual entry of costs per month after receiving the invoice from the utility provider


Period of Validity:

The validity period of a peak power tariff is limited to one year; however, it can be created multiple times for consecutive years.

Peak tariffs are based either on the monthly incurred costs (invoice from the energy supplier) or depend on the saved tariff rate combined with the active measurement at the main metering point.

![Define electrical tariffs – figure 13](/img/_en/configuration-billing-define-electrical-tariffs/13.png)

### Entering the 80% basic fee (if the 80% method with basic fee was chosen)

In this example, we are using the 80% method with a basic fee. Accordingly, these costs must still be entered under "Other". 

![Define electrical tariffs – figure 14](/img/_en/configuration-billing-define-electrical-tariffs/14.png)

The basic fee applies to all billing units, so it can be stored globally under the tariffs for the year 2026. 

![Define electrical tariffs – figure 15](/img/_en/configuration-billing-define-electrical-tariffs/15.png)

### Next step

## All details about tariffs and configurations

### Virtual tariffs and vZEV tariffs

Virtual tariffs allow you to define your own dynamic tariff model for energy billing. This can be used to distinguish between tenants drawing electricity from a solar installation or from the grid for their own consumption if merging of private energy consumption (tenant electricity) is used. 

Please note that all normal electricity tariffs must be deleted.

You will see all the virtual tariffs that have already been entered under Virtual tariffs. Click on Add.

Name: The name of the tariff is also displayed to the user (tenant)

Tariff type 

- Solar tariff vZEV:
    This allows a global solar tariff to be created in a ZEV or a vZEV. The solar energy is distributed evenly to all consumers and is based on the sum of the house balances (ZEV) and the sum of the productions (solar meter and or battery meters). With this tariff, it is not necessary to measure 100% of the loads if a house connection meter is physically present. The need for virtual summation meters is eliminated with this tariff.

- Solar tariff (legacy):
    This allows the energy from a solar system to be offset within a ZEV. This means that ZEVs can be implemented with or without a balance meter (VNB). The tariff requires a virtual total meter for all relevant loads (100% measurement).

- Battery tariff (legacy):
    This allows the energy of an AC-coupled battery to be distributed within a ZEV. This tariff is only compatible with the solar tariff (legacy). The tariff requires a virtual total meter for all relevant loads (100% measurement). 

- Grid tariff (normal tariff or dynamic):
    This is used to charge for grid electricity. If required, this can also be divided into high and low tariff periods or aply dynamic behaviour.


Generals about tariffs

A price / consumption unit and validity can be stored for each tariff.

Price/kWh: The price for this tariff

Valid from: The start date from which this tariff applies

Valid until: The end date for the validity of this tariff

Additional condition
You can define when this tariff is valid with an additional condition. This can be a time period (e.g. for high/low tariff) or any other condition. The condition must have been defined beforehand as an [If/ Then action](/konfiguration/wenndann-aktionen).

Additional notes:

- When you have defined all tariffs, it is mandatory to click on "Recalculate". This calculates and activates all virtual tariffs. This process can take a few hours.

- If one or more conditions are stored, all tariffs must cover the 24 hours of the day. If a normal tariff without conditions is stored, it automatically catches all energy quantities that cannot be allocated and thus covers the 24 hours. Alternatively, care must be taken that the times of the conditions are configured correctly (see example above).


![Define electrical tariffs – figure 16](/img/_en/configuration-billing-define-electrical-tariffs/16.png)

### Grid Tariffs

The grid rate can be configured as the following rates:

Flat rate (static or dynamic)

- Two-part rate

- Multi-part rate




Flat rate (static and dynamic)

The flat rate can be set up either statically (fixed rate) or dynamically.

Fixed rate

The fixed rate applies the defined price per kWh of grid electricity.



Dynamic rate

The dynamic rate, on the other hand, uses an external API and queries the available provider for the currently valid price for each hour.

The price is then applied on an hourly basis.

Please note that dynamic pricing does not account for all relevant costs, and additional entries must be made.

- Additional fees such as municipal concession fees (enter as an additional fixed rate)

- Monthly Connection Fees (Others)


Calculating invoices with dynamic rates takes noticeably longer than the other methods (data transfer and application).



Dual Rates and Multiple Rates

A rate (network rate) is created for each different rate. These are then linked to a specific time period using conditions.

The timing is defined using [IF/THEN](/konfiguration/wenndann-aktionen) actions.

![Define electrical tariffs – figure 17](/img/_en/configuration-billing-define-electrical-tariffs/17.png)

### Configure solar tarif vZEV

The vZEV solar tariff enables the implementation of ZEV and vZEV solutions. 

The vZEV solar tariff configuration calculates the effective surplus of a virtual ZEV and the effective grid consumption based on several solar production meters and house connection meters. 

The calculation takes into account the individual surpluses of a house and at the same time the demand of other houses for this surplus.

If there is a demand, it is made available to the neighboring house. If there is none, the surplus is identified as grid feed-in.



The solution supports the following implementations:

- Realization of a normal ZEV with or without balance meter

- vZEV: Several smart-me ZEVs with house connection meters

- vZEV: Combination of smart-me ZEVs with buildings with consumers only

- vZEV: Combination of smart-me ZEVs with EFHs with solar systems 

- vZEV: Several smart-me ZEVs in combination with former VNB practice models


Note: The battery cannot be tariffed separately with this tariff system.

![Define electrical tariffs – figure 18](/img/_en/configuration-billing-define-electrical-tariffs/18.png)

Rate a ZEV with physical balance meter

- Pysical balance meter

- Production measurement (PV + Battery)


![Define electrical tariffs – figure 19](/img/_en/configuration-billing-define-electrical-tariffs/19.png)

Rate a ZEV w/o physical balance meter

- Production meter (define as producer and as balance)

- All consumer meters (100%) 


![Define electrical tariffs – figure 20](/img/_en/configuration-billing-define-electrical-tariffs/20.png)

Legend

The colored dot indicates the way in which the respective meter must be stored in the tariff

![Define electrical tariffs – figure 21](/img/_en/configuration-billing-define-electrical-tariffs/21.png)

Tariffing an extended vZEV with different combinations of measurement concepts

![Define electrical tariffs – figure 22](/img/_en/configuration-billing-define-electrical-tariffs/22.png)

Tariffing of terraced single-family houses as vZEV

![Define electrical tariffs – figure 23](/img/_en/configuration-billing-define-electrical-tariffs/23.png)

### Configure solar- and battery tariffs with legacy tariffs

The solar tariffs and battery tariffs of the Legacy series enable the implementation of a ZEV with or without a balance meter.

The use of this tariff group enables the following:

- ZEV with or without a balance meter

- Different tariffs for battery and solar power


Prerequisite for use:

- Application of a 100% metering concept, all metered consumers must correspond to 100% of the load.

- Requires a virtual total meter for all loads.


Solar or battery meter

For the solar and battery tariff, you must specify the meter that measures the battery or the solar system. 

Total consumption

For solar and battery tariffs, you must specify a meter that measures all consumers to which this energy is to be distributed. This is usually a virtual meter that adds up all consumers (note that virtual meters require an additional license).

Balance meter

For solar tariffs and battery tariffs, a balance meter can optionally be specified. If the balance meter is listed, the energy that is fed into the grid is taken into account when calculating the solar tariff. This means that only the solar energy that was actually consumed in the building is distributed per 15 minutes (energy available = PV production - grid feed-in).

Please note: If the physical balance meter is dispensed with, deviations of 10-15% in the allocation of tariffs are not unusual.

Virtual meter

- The virtual meter (total consumption) is required to create the reference for tariff allocation. This is formed from all load meters and is subject to a cost plan
    (1x professional license)

    The summed up meters must be exact 100% of the load. If you have meters in series the meter more near to te house connection is relevant only.
    Solar meters, battery meters and house connection meters are to be excluded.

- If several solar systems are in the system and cannot be measured together, an additional license is required for total production


Learn more: [Virtual meters](/konfiguration/billing/virtuelle-zaehler)

![Define electrical tariffs – figure 24](/img/_en/configuration-billing-define-electrical-tariffs/24.png)

ZEV tarifieren mit legacy Tarifen (1 Haus)

![Define electrical tariffs – figure 25](/img/_en/configuration-billing-define-electrical-tariffs/25.png)

![Define electrical tariffs – figure 26](/img/_en/configuration-billing-define-electrical-tariffs/26.png)

ZEV tarifieren mit legacy Tarifen (mehrere Häuser )

![Define electrical tariffs – figure 27](/img/_en/configuration-billing-define-electrical-tariffs/27.png)

![Define electrical tariffs – figure 28](/img/_en/configuration-billing-define-electrical-tariffs/28.png)

## Peak electricity tariffs

Peak electricity tariffs can be used to cover extended or new types of electricity models from energy suppliers. 

- Dual tariff for basic consumption + peak power tariff
    (virtual tariffs in combination with the peak tariff)

- Single tariff for basic consumption + peak power tariff
    (virtual tariffs in combination with the peak tariff)

- Peak tariff only without basic tariffs


Validity period:
The validity period of a peak tariff is limited to 1 year, it can be created several times for several years.

Peak tariffs are either based on the monthly costs incurred (energy supplier bill) or are dependent on the stored tariff and the active measurement of the main measuring point.

![Define electrical tariffs – figure 29](/img/_en/configuration-billing-define-electrical-tariffs/29.png)

Beispiel eines erfassten Stromtarifes mit Kostenbasis (Kosteneintragung)

General mode of operation:

The allocated peak tariff costs or the automatically calculated costs based on metering and the stored tariff are allocated to the consumers in the selected calculation interval when the invoice is created. 

The basis for this is the respective electricity peak caused by each individual consumer in the billing period and the selected calculation interval.

![Define electrical tariffs – figure 30](/img/_en/configuration-billing-define-electrical-tariffs/30.png)

### Peak tariffs without active main metering (cost entry)

Suitable for all systems that do not have a physical balance measurement at the grid connection. 

![Define electrical tariffs – figure 31](/img/_en/configuration-billing-define-electrical-tariffs/31.png)

![Define electrical tariffs – figure 32](/img/_en/configuration-billing-define-electrical-tariffs/32.png)

### Peak tariffs with active main metering (automatic cost calculation)

Suitable for all systems that do have a physical balancing meter of the grid connection.. 

![Define electrical tariffs – figure 33](/img/_en/configuration-billing-define-electrical-tariffs/33.png)

## Systems with only grid tariffs

### Electricity tariffs (only valid if VEWA function not used)

To access the electricity tariff settings, click on the property on the left and scroll to the green Tariffs Electricity window. Here the two tariffs T1 and T2 are displayed. Select one of the tariffs and click on Edit to make changes to its properties (e.g. name, price, etc.).

In order to be able to work with the electricity tariffs, the tariff signal of the electricity company must be connected to the tariff input of the corresponding meters. 

![Define electrical tariffs – figure 34](/img/_en/configuration-billing-define-electrical-tariffs/34.png)
