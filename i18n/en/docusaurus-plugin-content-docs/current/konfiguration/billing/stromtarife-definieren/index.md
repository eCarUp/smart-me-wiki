---
title: 'Define electrical tariffs'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'In the video on the right, Guy explains the basics of how electricity prices are generally composed.'
sidebar_label: 'Define electrical tariffs'
---
![Define electrical tariffs – figure 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Setting the electricity price

In the video on the right, Guy explains the basics of how electricity prices are generally composed. 



But you can now also use our online electricity tariff calculator, which lends you a hand and is based on the explanation.

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="YouTube video, smart-me Billing - Setting ZEV prices" />

smart-me Billing setting ZEV prices, explained by Guy.

Attention: the video was recorded with an older version of the Excel file. That version still contains an error in the formulas. The Excel file has been corrected.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configuring electricity tariffs

In smart-me Billing you can work either with the electricity tariffs or with virtual tariffs. The solution with electricity tariffs is suitable exclusively for implementing pure grid electricity systems. In all other cases the virtual tariffs are to be used.

### 1.Obtain the tariff sheet of your energy supplier

The tariff sheet of your energy supplier is available online on their website months before the start of the new tariff period.

Also find out exactly which tariff you are purchasing from the energy supplier: 

- Green, Blue, Grey or other versions

- Single tariff or dual tariff or dynamic.


Reading the tariff sheet:

The relevant information is partly a little scattered. The tariff sheet itself usually consists of 4 sections:

- Energy prices

- Grid usage prices

- Metering charges

- Public levies


The public levies in particular are not fully contained in the tariff sheet. The municipal levies differ per municipality and are set out in a separate tariff sheet. In 99% of cases the link is in the footnote of the tariff sheet.

Obtain this value for your tariff setup via the link printed on the tariff sheet.

It is usually also a Rp. / kWh value, but it can also be given as a % of the grid usage (components vary).

![Define electrical tariffs – figure 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Choose the solar tariff calculation to be used for your (v)ZEV

You can choose between two fundamental approaches:

- Flat-rate method based on 80% of the standard grid product
    What is important here is that the flat-rate method automatically covers all other costs. No costs may be charged for the metering, billing and management of the ZEV electricity sales.

    No costs may be charged here for the metering of the ZEV, the administration and billing of the ZEV.
    The meter fee of the energy supplier for the main meter of the ZEV may not be charged separately in addition here.

    - -   Variant 1: grid electricity billed 1:1, solar electricity 80% of the basic costs and 80% of the grid electricity purchase price
            This variant is suitable for profit optimization within the ZEV, as long as there is high occupancy among the rentals.
            This method is not suitable if industrial large-scale consumers are in the same building and a multi-tariff system exists.
            Best solution for multi-tariff systems.

        - Variant 2: grid electricity 1:1, solar electricity 80% of the Elcom reference price (use with dynamic tariffs from the energy supplier)
            This variant is suitable for all ZEV without industrial large-scale consumers and is the simplest to implement.
            Better option with frequent vacancies.
            If this variant is used in connection with industry and multi-tariff (dual tariff), the industrial consumer may end up paying more via the higher solar tariff than outside the ZEV!

- Effective costs (production cost calculation)
    With this method, costs for metering, billing and management may be charged, in addition to the calculated value of the solar electricity. You will find details on this in the VEWA manual. 

    - -   This method is suitable if 80% of the grid electricity would possibly not cover the costs of your solar installation. This is very rarely the case.

        - This method must be proven year after year with the calculation and increases the administrative effort.


### 3\. Calculate your tariffs for the tariff period

The easiest way to do the calculation is to use our tariff calculator. Depending on the method you choose, it tells you which entries you have to make in smart-me.

With the dynamic tariff: choose the 80% Elcom method and look up the H4 tariff of your region and energy supplier in the calculator as a reference.

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configure your tariffs

Now navigate back to the property configuration.

1.  Billing (Rechnungsstellung)

2.  Configuration (Konfiguration)

3.  Property (Liegenschaft)

4.  Virtual tariffs (Virtuelle Tarife)


![Define electrical tariffs – figure 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Now create the grid tariffs of your tariff period

### Example: single tariff

### Example: dual tariff

Next step: map the timing of the tariff in the if actions

[Define tariff times](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

![Define electrical tariffs – figure 4](/img/konfiguration-billing-stromtarife-definieren/04.png)



Example of a single tariff with the 80% flat-rate method:

Now create a grid tariff with the specified price: 

- Grid tariff 2026 : 0.19707 CHF / kWh


![Define electrical tariffs – figure 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

![Define electrical tariffs – figure 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Example of a single tariff with the 80% flat-rate method:

Now create two grid tariffs with the specified prices:

- Grid tariff peak 2026: 0.22409 CHF / kWh

- Grid tariff off-peak 2026: 0.17007 CHF / kWh


With dual tariffs, the timing must be created first by means of [IF/THEN](/konfiguration/wenndann-aktionen) actions; these actions can then be linked with the "Additional condition" (Zusätzliche Bedingung) in order to control the validity throughout the week.



![Define electrical tariffs – figure 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Define electrical tariffs – figure 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Now create the matching solar tariff

Note:
There are various solar tariffs and battery tariffs with different capabilities and requirements.

In general, the solar tariff vZEV is the best and most universal choice.

What it cannot do is define different tariffs for battery and solar energy. For that, the alternative tariff has to be used.

You will find details below in the section "All details".

In this example the solar tariff vZEV is used.

Measurements:

All solar tariffs require relevant measuring points which have to be linked.

Simplest option: 

- "Solar meter" (Solarzähler) field: select all generation meters (solar and battery).

- "Balance meter" (Bilanzzähler) field: select the balancing meters (1 house: house connection meter, site: site meter or several house connection meters)


Alternative option: 

- "Solar meter" (Solarzähler) field: select all generation meters (solar and battery).

- "Balance meter" (Bilanzzähler) field: select all consumption meters and production meters.


Solar single tariff

![Define electrical tariffs – figure 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

Solar dual tariff

![Define electrical tariffs – figure 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Define electrical tariffs – figure 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

### Starting the recalculation of the electricity tariffs

If the virtual tariffs are used, you have to click on Recalculate (Neu berechnen) at the end of the configuration (as well as with later configuration changes) (ideally from 1.1.2018). This recalculates all previous values.

Before an invoice can be created, you have to wait until the last calculated value is set to "Today" (Heute) and no error message appears.

Error messages that are due to a configuration problem are usually displayed within a minute. So it is worth clicking on "Recalculate" (Neu berechnen) and waiting briefly to see whether an error message appears or not.

Tip: with price or tenant changes (addresses, move-in or move-out date) a recalculation is not required; in all other cases a recalculation is always required.

![Define electrical tariffs – figure 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Entering the demand tariff

![Define electrical tariffs – figure 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

With the peak electricity tariffs, extended or novel electricity models from energy suppliers can be covered. 

On the tariff sheet it can be recognized by its unit. Usually given as e.g. 1.50.- / kW / month

In our example we enter the calculated price.

The peak demand costs can be recorded using one of two methods:

- Consumption measurement: automatically through your own balance measurement

- Cost entry: later cost entry per month after receiving the invoice


Validity period:
The validity period of a peak electricity tariff is limited to 1 year; it can be created several times for several years.

Peak tariffs are based either on the costs incurred monthly (invoice from the energy supplier) or depend on the stored tariff and the active measurement of the main measuring point.

![Define electrical tariffs – figure 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Entering the 80% basic fee (if the 80% method with basic fee was chosen)

In this example we use the 80% method with basic fee. Accordingly, these costs still have to be recorded under "Other" (Sonstiges)

![Define electrical tariffs – figure 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

The costs of the basic fee are incurred on all billing units, therefore it can be stored globally with the tariffs for the year 2026.

![Define electrical tariffs – figure 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Next step

## All details on the tariffs and functions

## Virtual tariff configuration (grid, solar, battery tariffs)

Virtual tariffs allow you to define a dynamic tariff model of your own for billing the energy. This can be used, for example, to distinguish in an association for own consumption (ZEV or tenant electricity) whether a tenant draws electricity from a solar installation or from the grid. 

Please note that all normal tariffs for electricity must be deleted.

Under Virtual tariffs (Virtuelle Tarife) you see all virtual tariffs already recorded. Click on Add (Hinzufügen) and now record all virtual tariffs.

Name: the name of the tariff is also shown to the user (tenant).

Tariff type 

- Solar tariff vZEV (new):
    With this, a global solar tariff can be created in a ZEV or a vZEV.
    The solar energy is distributed evenly among all consumers and is based on the sum of the house balances (ZEV) and the sum of the productions (solar meters and/or battery meters). With this tariff it is not necessary to measure 100% of the loads if a house connection meter is physically present. The need for virtual sum meters is eliminated with this tariff.

- Solar tariff (legacy):
    With this, the energy of a solar installation can be billed within a ZEV.
    With this, ZEV with or without a balance meter (grid operator) can be implemented. The tariff requires a virtual sum meter of all relevant loads (100% measurement).

- Battery tariff (legacy):
    With this, the energy of an AC-coupled battery can be distributed within a ZEV. This tariff is only compatible with the solar tariff (legacy). The tariff requires a virtual sum meter of all relevant loads (100% measurement).

- Grid tariff (normal tariff or dynamic tariff):
    With this, the grid electricity is billed. If required, it can additionally be split into peak and off-peak tariff times or dynamically.

- Additional condition
    You can use an additional condition to define when this tariff is valid. This can be a time period (e.g. for peak/off-peak tariff) or any other condition. The condition must have been defined beforehand as an [if/then action](/konfiguration/wenndann-aktionen).


General information on the tariffs

For every tariff, a price / consumption unit and a validity can be stored.

Price / kWh: the price for this tariff

Valid from: the date from when this tariff should be valid. See note.

Valid until: the date until when this tariff should be valid. See note.

Notes: 

- We recommend setting the validity from 1.1.2000 to 31.12.2099. The condition for this handling is that the invoices are sent with the same periodicity as the local energy supplier. In this case the price can be set before the invoice is created. If only the price is changed in smart-me Billing, it is not necessary to press the "recalculate" (neu rechnen) button. With all other adjustments, however, the recalculation is necessary.

- When you have defined all tariffs, you have to click on "Recalculate" (Neu berechnen). This calculates and activates all virtual tariffs. This process can take several hours.

- If one or more conditions are saved, all tariffs have to cover the 24 hours of the day. If a normal tariff without conditions is stored, it automatically catches all energy quantities that cannot be assigned and thus covers the 24 hours. Alternatively, care must be taken that the times of the conditions are configured correctly (see example above).


![Define electrical tariffs – figure 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="YouTube video, Virtual tariffs" />

### Grid tariff

The grid tariff can be recorded as the following tariffs:

- Single tariff (static or dynamic)

- Dual tariff

- Multi tariff




Single tariff (static and dynamic)

The single tariff can be created either statically (fixed tariff) or dynamically.

Fixed tariff

The fixed tariff applies the defined price / kWh of grid electricity.



Dynamic tariff

The dynamic tariff, on the other hand, uses an external API and queries the available provider for each hour for the currently valid price.

The price is then applied per hour.

Please note that the dynamic prices do not transfer all relevant costs and that additional entries have to be made.

- Additional fees such as concession fees of the municipality
    (enter as an additional fixed price)

- Monthly connection fees (Other section)


The calculation of invoices with a dynamic tariff takes noticeably longer than the other methods (data transfer and application)



Dual tariff and multi tariffs

A tariff (grid tariff) is created for each different tariff. These are then coupled to a timing with the help of the conditions.

The timing is defined via the [IF/THEN](/konfiguration/wenndann-aktionen) actions.



![Define electrical tariffs – figure 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configuring the solar tariff vZEV

The solar tariff vZEV enables the implementation of ZEV and vZEV solutions. 

The vZEV solar tariff configuration calculates the effective surplus of a virtual ZEV and the effective grid consumption based on several solar production meters and house connection meters. 

The calculation takes into account the individual surpluses of a house and at the same time the demand of other houses for this surplus.

If there is a demand, it is made available to the neighbouring house. If there is none, the surplus is identified as grid feed-in.



The solution supports the following implementations:

- Realization of a normal ZEV with or without a balance meter

- vZEV: several smart-me ZEV's with house connection meters

- vZEV: combination of smart-me ZEV's with buildings having only consumers

- vZEV: combination of smart-me ZEV's with single-family houses with solar installations 

- vZEV: several smart-me ZEV's in combination with former grid operator practice models


Note:
The battery cannot be tariffed separately with this tariff system.

![Define electrical tariffs – figure 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffing a ZEV

- House connection meter 

- Production measurement (PV + battery)


![Define electrical tariffs – figure 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tariffing a ZEV without a balance meter

- Production measurement (as production and balance)

- All consumers (100%) 


![Define electrical tariffs – figure 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Legend 

The coloured dot indicates in which way the respective meter has to be stored in the tariff

![Define electrical tariffs – figure 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tariffing an extended vZEV with various combinations of metering concepts

![Define electrical tariffs – figure 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tariffing terraced single-family houses as a vZEV

![Define electrical tariffs – figure 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configuring the solar and battery tariff

The solar tariffs and battery tariffs of the legacy series enable the implementation of a ZEV with or without a balance meter.

Using this tariffing group enables the following:

- ZEV with or without a balance meter

- Different tariffing for battery and solar electricity


Requirement for use:

- Application of a 100% metering concept; all measured consumers must correspond to 100% of the load.

- Requires a virtual sum meter of all loads.


Solar or battery meter
With the solar and battery tariff you have to specify the meter that measures the battery or the solar installation. 

Total consumption
With the solar and battery tariff you have to specify a meter that measures all consumers among which this energy is to be distributed. This is usually a virtual meter that sums up all consumers (attention, virtual meters then require an additional license).

Balance meter
With the solar tariff and battery tariff, a balance meter can optionally be specified. If the balance meter is listed, the energy fed into the grid is taken into account when calculating the solar tariff. This means that per 15 minutes only the solar energy that was actually consumed in the building is distributed (energy available = PV production - grid feed-in).

Attention:
If the physical balance meter is omitted, deviations in the allocation of the tariffs in the range of 10-15% are not unusual.

Virtual sum meters

- The virtual sum meter (total consumption) is necessary to form the reference for the tariff allocation. It is formed from all load meters and is subject to charge (1x Professional license)

    The sum of the meters must be exactly 100% of the load. If you have meters connected in series, only the meter closer to the sub-distribution / house connection is relevant.
    Solar meters, battery meters and house connection meters are to be excluded.

- If there are several solar installations in the system and they cannot be measured together, a further license is necessary for the total production.

    More information: [Virtual meters](/konfiguration/billing/virtuelle-zaehler)


![Define electrical tariffs – figure 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffing a ZEV with legacy tariffs (1 house)

![Define electrical tariffs – figure 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Define electrical tariffs – figure 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffing a ZEV with legacy tariffs (several houses )

![Define electrical tariffs – figure 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Define electrical tariffs – figure 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Peak electricity tariffs

With the peak electricity tariffs, extended or novel electricity models from energy suppliers can be covered. 

- Dual tariff for the base consumption + peak demand
    (virtual tariffs in combination with the peak tariff)

- Single tariff for the base consumption + peak demand
    (virtual tariffs in combination with the peak tariff)

- Only peak tariff without base tariffs


Validity period:
The validity period of a peak electricity tariff is limited to 1 year; it can be created several times for several years.

Peak tariffs are based either on the costs incurred monthly (invoice from the energy supplier) or depend on the stored tariff and the active measurement of the main measuring point.

![Define electrical tariffs – figure 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Example of a recorded electricity tariff on a cost basis (cost entry)

General mode of operation:

The recorded peak tariff costs or the automatically calculated costs based on the measurement and the stored tariff are distributed among the consumers at invoice creation in the selected calculation interval. 

The basis is the respective electricity peak caused (grid consumption only) by each individual consumer in the billing period and the respectively selected calculation interval.

![Define electrical tariffs – figure 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Peak tariffs without active main measurement (manual cost entry)

Suitable for all systems that do not have a reference measurement. 

![Define electrical tariffs – figure 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Define electrical tariffs – figure 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Peak tariffs with active main measurement (automatic cost calculation)

Suitable for all systems that have a direct balance measurement.

![Define electrical tariffs – figure 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Setup: single tariff without solar

- In this case we recommend not using virtual tariffs. Electricity tariffs (all) are more efficient in this case. It is possible at any time to switch from electricity tariffs to virtual tariffs.


Logic: the meter readings are queried and used for the billing. No calculation is necessary.

Setup: single tariff with solar

- Solar electricity single tariff: define a solar tariff without an if action

- Grid electricity single tariff: define a normal tariff without an if action


Logic: first the available solar electricity is distributed. If too little or none is available, the normal tariff is used.

Setup: peak and off-peak tariff for grid electricity and single tariff for solar electricity

- Solar electricity single tariff: define a solar tariff without an if action

- Grid electricity peak tariff: define a normal tariff with an if action

    - Example. Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Grid electricity off-peak tariff: define a normal tariff without an if action


Logic: first the available solar electricity is distributed. If too little or none is available, the normal tariff that fulfils a condition is used. Finally, the tariff without a condition is sent for the remaining electricity.

Setup: peak and off-peak tariff for grid and solar electricity

- Solar electricity peak tariff: define a solar tariff with an if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Solar electricity off-peak tariff: define a solar tariff with an if action

    - Example: Mon to Fri 22h00 to 7h00 or Sat 13h00 to 7h00 or Sun 0h00 to 0h00

- Grid electricity peak tariff: define a normal tariff with an if action

    - Use the same if action as for the solar electricity peak tariff 

- Grid electricity off-peak tariff: define a normal tariff with an if action

    - Use the same if action as for the solar electricity off-peak tariff 


Logic: first the available solar electricity with the valid condition is used. If too little or none is available, the normal tariff with the valid condition is used. It is important that in this use case 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and single tariff for solar electricity

- Solar electricity peak tariff: define a solar tariff without an if action

- Grid electricity peak tariff summer: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity off-peak tariff summer: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity peak tariff winter: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.

- Grid electricity off-peak tariff winter: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.


Logic: first the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. It is important that in this use case 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and single tariff for solar electricity and off-peak tariff over midday only in winter (e.g. EWS/EBS)

Example

- Grid and solar electricity off-peak tariff winter 

    - Example: winter off-peak 22h00 to 07h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 22h00 to 07h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity peak tariff winter 

    - Example: winter peak 07h00 to 22h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 7h00 to 22h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity off-peak tariff summer

    - Example: summer off-peak 00h00 to 06h00 and 12h00 to 15h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 12h00 to 06h00 

        - Time span every day: Mon to Sun 00h00 to 15h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.

- Grid and solar electricity peak tariff summer 

    - Example: summer peak 06h00 to 12h00 and 15h00 to 00h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 06h00 to 00h00 

        - Time span every day: Mon to Sun 15h00 to 12h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.


Logic: first the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. It is important that in this use case 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and solar electricity, off-peak tariff during the day in summer and peak tariff in winter (e.g. Energie Uri from 1.10.2025)

Description: here you have to work in two steps. 1x if/then and 1x with the times in the virtual tariffs

First the if actions have to be defined.

- Grid and solar electricity summer off-peak

    - Example: summer off-peak Mon to Fri 06h00 to 22h00 Mon to Fri and Sat and Sun always

    - Name: Uri Sommer NT

    - If/then action with OR link

        - Time span Mon to Fri: 6h00 to 22h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity summer peak

    - Example: summer peak Mon to Fri 22h00 to 06h00

    - Name: Uri Sommer HT

    - If/then action

        - Time span Mon to Fri: 22h00 to 06h00 




- Grid and solar electricity winter off-peak

    - Example: winter off-peak Mon to Fri 22h00 to 06h00 Mon to Fri and Sat and Sun always

    - Name: Uri Winter NT

    - If/then action with OR link

        - Time span Mon to Fri: 22h00 to 06h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity winter peak

    - Example: winter peak Mon to Fri 06h00 to 22h00

    - Name: Uri Winter HT

    - If/then action with OR link

        - Time span Mon to Fri: 06h00 to 22h00 


Then the prices per time period have to be defined.

The periods or durations have to be stored in this case. With this tariff model a combination of if/then and period is necessary.

- Name: Uri Sommer HT Netz

    - Type: grid tariff

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: solar tariff incl. vZEV 

- Duration: 1.4.2026 to 30.9.2026

- Additional condition: Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: grid tariff

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: solar tariff incl. vZEV (balance/productions)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: grid tariff

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: solar tariff incl. vZEV (balance/productions)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: grid tariff

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: solar tariff incl. vZEV (balance/productions)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Pure grid tariff systems (external signal solution)

Electricity tariffs (only supported if the VEWA function is not used)

To get to the settings of the electricity tariffs, click on the property on the left and scroll to the green window Electricity tariffs (Tarife Elektrizität). Here the two tariffs T1 and T2 are displayed. Select one of the tariffs and click on Edit (Editieren) to make changes to its properties (e.g. name, price etc.)

In order to be able to work with the electricity tariffs, the tariff signal of the utility must be connected to the tariff input of the corresponding meters.

![Define electrical tariffs – figure 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
