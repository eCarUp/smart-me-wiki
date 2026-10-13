---
title: 'Define electrical tariffs'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'In the video on the right, Guy explains the basics of how electricity prices are generally made up.'
sidebar_label: 'Define electrical tariffs'
---
![Define electrical tariffs – Figure 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Setting the electricity price

In the video on the right, Guy explains the basics of how electricity prices are generally made up. 



You can now also use our online electricity tariff calculator, which helps you out and is based on this explanation.

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="YouTube Video, smart-me Billing - Setting ZEV prices" />

smart-me Billing: setting ZEV prices, explained by Guy.

Note: The video was recorded with an old version of the Excel file. That version still contained an error in the formulas. The Excel file has been corrected.

[Example setting prices in the ZEV.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configuring electricity tariffs

In smart-me Billing, you can work either with the electricity tariffs or with virtual tariffs. The solution with electricity tariffs is only suitable for implementing pure grid electricity systems. In all other cases, the virtual tariffs must be used.

### 1.Get the tariff sheet from your energy supplier

Your energy supplier's tariff sheet is available online on its website months before the start of the new tariff period.

Also find out exactly which tariff you purchase from your energy supplier: 

- Green, blue, grey or other versions

- Single tariff, dual tariff or dynamic.


Reading the tariff sheet:

The relevant information is sometimes somewhat scattered. The tariff sheet itself usually consists of 4 sections:

- Energy prices

- Grid usage prices

- Metering fees

- Public levies


The public levies in particular are not fully listed on the tariff sheet. Municipal levies differ from municipality to municipality and are recorded in a separate tariff sheet. In 99% of cases, the link can be found in the footnote of the tariff sheet.

Obtain this value for your tariff setup via the link printed on the tariff sheet.

It is usually also a value in Rp. / kWh, but may also be given as a % of grid usage (components vary).

![Define electrical tariffs – Figure 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Choose the solar tariff calculation to use for your (v)ZEV

You can choose between two basic approaches:

- Flat-rate method at 80% of the standard grid product
    It is important to note here that the flat-rate method automatically covers all other costs. No costs may be charged for metering, billing and management of the ZEV electricity sales.

    No costs may be charged here for metering the ZEV (association for own consumption), or for the administration and billing of the ZEV.
    The energy supplier's meter fee for the main meter of the ZEV may not be charged separately in addition.

    - -   Variant 1: Grid electricity charged 1:1, solar electricity at 80% of the base costs and 80% of the grid electricity purchase price
            This variant is suitable for optimising profit within the ZEV as long as occupancy of the rental units is high.
            This method is not suitable if there are large industrial consumers in the same building and a multi-tariff system is in place.
            Best solution for multi-tariff systems.

        - Variant 2: Grid electricity 1:1, solar electricity at 80% of the Elcom reference price (use if the energy supplier has dynamic tariffs)
            This variant is suitable for all ZEVs without large industrial consumers and is the easiest to implement.
            Better option with frequent vacancies.
            If this variant is used in connection with industry and a multi-tariff (dual tariff), the industrial consumer may end up paying more via the higher solar tariff than outside the ZEV!

- Actual costs (production cost calculation)
    With this method, costs for metering, billing and management can be charged in addition to the calculated value of the solar electricity. Details can be found in the VEWA manual. 

    - -   This method is suitable if 80% of the grid electricity price would possibly not cover the costs of your solar system. This is very rarely the case.

        - This method must be proven year by year with the calculation and increases the administrative effort.


### 3\. Calculate your tariffs for the tariff period

The easiest way to calculate is to use our tariff calculator. Depending on the method you choose, it tells you which entries you need to make in smart-me.

For a dynamic tariff: choose the 80% Elcom method and look up the H4 tariff of your region and energy supplier in the calculator as a reference.

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configure your tariffs

Now navigate back to the property configuration.

1.  Billing (Rechnungsstellung)

2.  Configuration (Konfiguration)

3.  Property (Liegenschaft)

4.  Virtual tariffs (Virtuelle Tarife)


![Define electrical tariffs – Figure 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Now create the grid tariffs for your tariff period


<div className="row">
<div className="col col--6 text--center">

### Example: single tariff

</div>
<div className="col col--6 text--center">

### Example: dual tariff
Next step: map the timing of the tariff in the if actions

[Define tariff times](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)


</div>
</div>

<div className="row">
<div className="col col--6 text--center">

![Define electrical tariffs – Figure 4](/img/konfiguration-billing-stromtarife-definieren/04.png)
![Define electrical tariffs – Figure 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

Example single tariff with 80% flat-rate method:

Now create a grid tariff with the specified price: 

- Grid tariff 2026: 0.19707 CHF / kWh


</div>
<div className="col col--6 text--center">

![Define electrical tariffs – Figure 6](/img/konfiguration-billing-stromtarife-definieren/06.png)
![Define electrical tariffs – Figure 7](/img/konfiguration-billing-stromtarife-definieren/07.png)
![Define electrical tariffs – Figure 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Example single tariff with 80% flat-rate method:

Now create two grid tariffs with the specified prices:

- Grid tariff HT 2026: 0.22409 CHF / kWh

- Grid tariff NT 2026: 0.17007 CHF / kWh

With dual tariffs, the timing must first be created using [IF/THEN](/konfiguration/wenndann-aktionen) actions. These actions can then be linked via the "Additional condition" ("Zusätzliche Bedingung") to control validity throughout the week.


</div>
</div>


#### Now create the corresponding solar tariff

Note:
There are various solar tariffs and battery tariffs with different capabilities and requirements.

In general, the vZEV solar tariff is the best and most universal choice.

What it cannot do is define different tariffs for battery and solar energy. For that, the alternative tariff must be used.

Details can be found below in the section "All details".

In this example, the vZEV solar tariff is used.

Measurements:

All solar tariffs require relevant metering points, which must be linked.

Simplest option: 

- Field "Solar meter" ("Solarzähler"): Select all generation meters (solar and battery).

- Field "Balance meter" ("Bilanzzähler"): Select the balancing meters (1 building: building connection meter; site: site meter or several building connection meters)


Alternative option: 

- Field "Solar meter" ("Solarzähler"): Select all generation meters (solar and battery).

- Field "Balance meter" ("Bilanzzähler"): Select all consumption meters and production meters.

<div className="row">
<div className="col col--6 text--center">

#### Example: solar single tariff

![Define electrical tariffs – Figure 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6 text--center">

#### Example: solar dual tariff

![Define electrical tariffs – Figure 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Define electrical tariffs – Figure 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Starting the recalculation of the electricity tariffs

If the virtual tariffs are used, you must click Recalculate (Neu berechnen) at the end of the configuration (and after any later configuration changes), ideally from 1.1.2018. This recalculates all previous values.

Before an invoice can be created, you must wait until the last calculated value shows "Today" ("Heute") and no error message appears.

Error messages caused by a configuration problem are usually displayed within one minute. It is therefore worth clicking "Recalculate" ("Neu berechnen") and waiting briefly to see whether an error message appears.

Tip: For changes to prices or tenants (addresses, move-in or move-out date), a recalculation is not required; in all other cases, a recalculation is always required.

![Define electrical tariffs – Figure 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Entering the demand tariff

![Define electrical tariffs – Figure 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Peak demand tariffs can be used to cover extended or new electricity models from energy suppliers. 

On the tariff sheet, it can be recognised by its unit. Usually stated as e.g. 1.50 / kW / month

In our example, we enter the calculated price.

The peak demand costs can be recorded using one of two methods:

- Consumption measurement: automatically via your own balance measurement

- Cost entry: later cost entry per month after receiving the invoice


Validity period:
The validity period of a peak demand tariff is limited to 1 year; it can be created several times for several years.

Peak tariffs are based either on the costs incurred each month (energy supplier's invoice) or depend on the stored tariff and the active measurement of the main metering point.

![Define electrical tariffs – Figure 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Entering the 80% basic fee (if the 80% method with basic fee was chosen)

In this example, we use the 80% method with basic fee. Accordingly, these costs still need to be entered under "Other" ("Sonstiges")

![Define electrical tariffs – Figure 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

The basic fee costs apply to all billing units, so they can be stored globally with the tariffs for the year 2026.

![Define electrical tariffs – Figure 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Next step

## All details on the tariffs and functions

## Virtual tariff configuration (grid, solar, battery tariffs)

Virtual tariffs allow you to define your own dynamic tariff model for charging energy. This can be used, for example, in a ZEV (association for own consumption) or tenant electricity setup to distinguish whether a tenant draws electricity from a solar system or from the grid. 

Please note that all normal electricity tariffs must be deleted.

Under Virtual tariffs (Virtuelle Tarife), you can see all virtual tariffs already entered. Click Add (Hinzufügen) and now enter all virtual tariffs.

Name: The name of the tariff is also displayed to the user (tenant).

Tariff type 

- Solar tariff vZEV (new) (Solartarif vZEV (neu)):
    This can be used to create a global solar tariff in a ZEV or a vZEV.
    The solar energy is distributed evenly to all consumers and is based on the sum of the building balances (ZEV) and the sum of the productions (solar meters and/or battery meters). With this tariff, it is not necessary to measure 100% of the loads if a building connection meter is physically present. Virtual sum meters are not needed with this tariff.

- Solar tariff (legacy) (Solartarif (legacy)):
    This can be used to charge the energy of a solar system within a ZEV.
    It allows ZEVs to be implemented with or without a balance meter (DSO). The tariff requires a virtual sum meter of all relevant loads (100% metering).

- Battery tariff (legacy) (Batterietarif (legacy)):
    This can be used to distribute the energy of an AC-coupled battery within a ZEV. This tariff is only compatible with the solar tariff (legacy). The tariff requires a virtual sum meter of all relevant loads (100% metering).

- Grid tariff (normal tariff or dynamic tariff) (Netztarif):
    This is used to charge grid electricity. If required, it can also be split into peak and off-peak tariff times or dynamically.

- Additional condition (Zusätzliche Bedingung)
    You can use an additional condition to specify when this tariff is valid. This can be a time period (e.g. for peak/off-peak tariff) or any other condition. The condition must first have been defined as an [if/then action](/konfiguration/wenndann-aktionen).


General information on the tariffs

For each tariff, a price / consumption unit and a validity can be stored.

Price / kWh (Preis / kWh): The price for this tariff

Valid from (Gültig von): The date from which this tariff should be valid. See note.

Valid until (Gültig bis): The date until which this tariff should be valid. See note.

Notes: 

- We recommend setting the validity from 1.1.2000 to 31.12.2099. The prerequisite for this approach is that invoices are sent at the same intervals as those of the local energy supplier. In this case, the price can be set before the invoice is created. If only the price is changed in smart-me Billing, it is not necessary to press the "Recalculate" ("neu rechnen") button. For all other adjustments, however, recalculation is necessary.

- Once you have defined all tariffs, you must click "Recalculate" ("Neu berechnen"). This calculates and activates all virtual tariffs. This process can take a few hours.

- If one or more conditions are saved, all tariffs must cover the 24 hours of the day. If a normal tariff without conditions is stored, it automatically captures all energy quantities that cannot be assigned and thus covers the 24 hours. Alternatively, you must ensure that the times of the conditions are configured correctly (see example above).


![Define electrical tariffs – Figure 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="YouTube Video, Virtual tariffs" />

### Grid tariff

The grid tariff can be entered as the following tariffs:

- Single tariff (static or dynamic)

- Dual tariff

- Multi-tariff




Single tariff (static and dynamic)

The single tariff can be created either as static (fixed tariff) or dynamic.

Fixed tariff

The fixed tariff applies the defined price / kWh of grid electricity.



Dynamic tariff

The dynamic tariff, by contrast, uses an external API and queries the available provider for the currently valid price for each hour.

The price is then applied per hour.

Please note that the dynamic prices do not transfer all relevant costs, and additional entries must be made.

- Additional fees such as the municipality's concession fees
    (enter as an additional fixed price)

- Monthly connection fees (Other (Sonstiges) section)


Calculating invoices with a dynamic tariff takes noticeably longer than with the other methods (data transfer and application)



Dual tariff and multi-tariffs

A tariff (grid tariff) is created for each different tariff. These are then linked to a timing using the conditions.

The timing is defined via the [IF/THEN](/konfiguration/wenndann-aktionen) actions.



![Define electrical tariffs – Figure 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configuring the vZEV solar tariff

The vZEV solar tariff enables the implementation of ZEV and vZEV solutions. 

The vZEV solar tariff configuration calculates the actual surplus of a virtual ZEV and the actual grid consumption based on several solar production meters and building connection meters. 

The calculation takes into account the individual surpluses of a building and at the same time the demand of other buildings for this surplus.

If there is demand, the surplus is made available to the neighbouring building. If there is none, the surplus is identified as grid feed-in.



The solution supports the following implementations:

- Implementation of a
    \- ZEV with balance meter and solar (balance + production)
    \- ZEV with balance and total consumption (consumption + balance)
    \- ZEV with solar and total consumption (production + consumption)

- vZEV: Several smart-me ZEVs with building connection meters

- vZEV: Combination of smart-me ZEVs with buildings with consumers only

- vZEV: Combination of smart-me ZEVs with detached houses with solar systems 

- vZEV: Several smart-me ZEVs in combination with former DSO practice models


Note:
The battery cannot be tariffed separately with this tariff system.

![Define electrical tariffs – Figure 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffing a ZEV

- Building connection meter 

- Production measurement (PV + battery)


![Define electrical tariffs – Figure 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tariffing a ZEV without a balance meter

- Production measurement (as production and balance)

- All consumers (100%) 


![Define electrical tariffs – Figure 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Legend 

The coloured dot indicates how the respective meter must be stored in the tariff

![Define electrical tariffs – Figure 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tariffing an extended vZEV with various combinations of metering concepts

![Define electrical tariffs – Figure 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tariffing terraced houses as a vZEV

![Define electrical tariffs – Figure 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configuring the solar and battery tariff

The solar tariffs and battery tariffs of the legacy series enable the implementation of a ZEV with or without a balance meter.

Using this tariff group enables the following:

- ZEV with or without balance meter

- Different tariffs for battery and solar electricity


Prerequisites for use:

- Use of a 100% metering concept; all measured consumers must correspond to 100% of the load.

- Requires a virtual sum meter of all loads.


Solar or battery meter
For the solar and battery tariff, you must specify the meter that measures the battery or the solar system. 

Total consumption
For the solar and battery tariff, you must specify a meter that measures all consumers to which this energy is to be distributed. This is usually a virtual meter that sums all consumers (note: virtual meters then require an additional licence).

Balance meter
For the solar tariff and battery tariff, a balance meter can optionally be specified. If the balance meter is listed, the energy fed into the grid is taken into account when calculating the solar tariff. This means that per 15 minutes, only the solar energy that was actually consumed in the building is distributed (energy available = PV production - grid feed-in).

Caution:
Without a physical balance meter, deviations of 10-15% in the allocation of the tariffs are not unusual.

Virtual sum meters

- The virtual sum meter (total consumption) is required to form the reference for the tariff allocation. It is formed from all load meters and is subject to a charge (1x Professional licence)

    The sum of the meters must be exactly 100% of the load. If you have meters connected in series, only the meter closer to the sub-distribution / building connection is relevant.
    Solar meters, battery meters and building connection meters must be excluded.

- If there are several solar systems in the system that cannot be measured together, a further licence is required for the total production.

    More information: [Virtual Meters](/konfiguration/billing/virtuelle-zaehler)


![Define electrical tariffs – Figure 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffing a ZEV with legacy tariffs (1 building)

![Define electrical tariffs – Figure 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Define electrical tariffs – Figure 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffing a ZEV with legacy tariffs (several buildings )

![Define electrical tariffs – Figure 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Define electrical tariffs – Figure 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Peak demand tariffs

Peak demand tariffs can be used to cover extended or new electricity models from energy suppliers. 

- Dual tariff for base consumption + peak demand
    (virtual tariffs in combination with the peak tariff)

- Single tariff for base consumption + peak demand
    (virtual tariffs in combination with the peak tariff)

- Peak tariff only, without base tariffs


Validity period:
The validity period of a peak demand tariff is limited to 1 year; it can be created several times for several years.

Peak tariffs are based either on the costs incurred each month (energy supplier's invoice) or depend on the stored tariff and the active measurement of the main metering point.

![Define electrical tariffs – Figure 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Example of an entered electricity tariff with cost basis (cost entry)

General operation:

The entered peak tariff costs, or the costs calculated automatically based on the measurement and the stored tariff, are distributed to the consumers in the selected calculation interval when the invoice is created. 

The basis is the respective peak (grid consumption only) caused by each individual consumer in the billing period and the selected calculation interval.

![Define electrical tariffs – Figure 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Peak tariffs without active main measurement (manual cost entry)

Suitable for all systems that do not have a reference measurement. 

![Define electrical tariffs – Figure 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Define electrical tariffs – Figure 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Peak tariffs with active main measurement (automatic cost calculation)

Suitable for all systems that have a direct balance measurement.

![Define electrical tariffs – Figure 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Setup: single tariff without solar

- In this case, we recommend not using virtual tariffs. Electricity tariffs (all) are more efficient in this case. It is possible to switch from electricity tariffs to virtual tariffs at any time.


Logic: The meter readings are queried and used for billing. No calculation is necessary.

Setup: single tariff with solar

- Solar electricity single tariff: define solar tariff without if action

- Grid electricity single tariff: define normal tariff without if action


Logic: First, the available solar electricity is distributed. If too little or none is available, the normal tariff is used.

Setup: peak and off-peak tariff for grid electricity and single tariff for solar electricity

- Solar electricity single tariff: define solar tariff without if action

- Grid electricity peak tariff: define normal tariff with if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Grid electricity off-peak tariff: define normal tariff without if action


Logic: First, the available solar electricity is distributed. If too little or none is available, the normal tariff that meets a condition is used. Finally, the tariff without a condition is used for the remaining electricity.

Setup: peak and off-peak tariff for grid and solar electricity

- Solar electricity peak tariff: define solar tariff with if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Solar electricity off-peak tariff: define solar tariff with if action

    - Example: Mon to Fri 22h00 to 7h00 or Sat 13h00 to 7h00 or Sun 0h00 to 0h00

- Grid electricity peak tariff: define normal tariff with if action

    - Use the same if action as for the solar electricity peak tariff 

- Grid electricity off-peak tariff: define normal tariff with if action

    - Use the same if action as for the solar electricity off-peak tariff 


Logic: First, the available solar electricity with the valid condition is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and single tariff for solar electricity

- Solar electricity peak tariff: define solar tariff without if action

- Grid electricity peak tariff summer: define normal tariff with if action

    - Example: Time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity off-peak tariff summer: define normal tariff with if action

    - Example: Time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity peak tariff winter: define normal tariff with if action

    - Example: Time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.

- Grid electricity off-peak tariff winter: define normal tariff with if action

    - Example: Time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.


Logic: First, the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and single tariff for solar electricity, and off-peak tariff over midday in winter only (e.g. EWS/EBS)

Example

- Grid and solar electricity off-peak tariff winter 

    - Example: Winter NT 22h00 to 07h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 22h00 to 07h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity peak tariff winter 

    - Example: Winter HT 07h00 to 22h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 7h00 to 22h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity off-peak tariff summer

    - Example: Summer NT 00h00 to 06h00 and 12h00 to 15h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 12h00 to 06h00 

        - Time span every day: Mon to Sun 00h00 to 15h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.

- Grid and solar electricity peak tariff summer 

    - Example: Summer HT 06h00 to 12h00 and 15h00 to 00h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 06h00 to 00h00 

        - Time span every day: Mon to Sun 15h00 to 12h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.


Logic: First, the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and solar electricity, off-peak tariff during the day in summer and peak tariff in winter (e.g. Energie Uri from 1.10.2025)

Description: Here you need to work in two steps: once with if/then and once with the times in the virtual tariffs

First, the if actions must be defined.

- Grid and solar electricity summer NT

    - Example: Summer NT Mon to Fri 06h00 to 22h00 Mon to Fri and Sat and Sun always

    - Name: Uri Sommer NT

    - If/then action with OR link

        - Time span Mon to Fri: 6h00 to 22h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity summer HT

    - Example: Summer HT Mon to Fri 22h00 to 06h00

    - Name: Uri Sommer HT

    - If/then action

        - Time span Mon to Fri: 22h00 to 06h00 




- Grid and solar electricity winter NT

    - Example: Winter NT Mon to Fri 22h00 to 06h00 Mon to Fri and Sat and Sun always

    - Name: Uri Winter NT

    - If/then action with OR link

        - Time span Mon to Fri: 22h00 to 06h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity winter HT

    - Example: Winter HT Mon to Fri 06h00 to 22h00

    - Name: Uri Winter HT

    - If/then action with OR link

        - Time span Mon to Fri: 06h00 to 22h00 


Then the prices must be defined per time period.

In this case, the periods or durations must be stored. With this tariff model, a combination of if/then and period is necessary.

- Name: Uri Sommer HT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: Solar tariff incl. vZEV (Solartarif inkl. vZEV) 

- Duration: 1.4.2026 to 30.9.2026

- Additional condition (Zusätzliche Bedingung): Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki tariffs Energie Uri tariffs 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Pure grid tariff systems (external signal solution)

Electricity tariffs (only supported if the VEWA function is not used)

To access the electricity tariff settings, click the property on the left and scroll to the green window Electricity tariffs (Tarife Elektrizität). The two tariffs T1 and T2 are displayed here. Select one of the tariffs and click Edit (Editieren) to make changes to its properties (e.g. name, price etc.)

To be able to work with the electricity tariffs, the tariff signal of the utility must be connected to the tariff input of the corresponding meters.

![Define electrical tariffs – Figure 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
