---
title: 'Examples of boiler control with if/then actions'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'This page describes example configurations in detail.'
sidebar_label: 'Boiler control example'
---
<Menueweg>If-Then Actions</Menueweg>

This page describes example configurations in detail.

## Prerequisites

To use if/then actions, you need a smart-me Limited or Professional license.

## Basics

You can find the technical data on the respective [products](/produkte) pages (e.g. maximum switching capacity).

The configuration of the outputs is described on the [Inputs and outputs](/schnittstellen/ein-und-ausgaenge) page (e.g. activating output 1).

The basics are described under [If/then actions](/konfiguration/wenndann-aktionen) (e.g. where to find if/then actions).

Note that [if/then actions](/konfiguration/wenndann-aktionen) only work correctly if the connection to the smart-me Cloud is guaranteed. [Event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)  are more limited, but are stored and executed locally.

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts.

smart-me meters are equipped with bistable relays. If switching on is configured, switching off must always be configured as well.

## Introduction

Determine the consumption and plan a reserve for consumption fluctuations

To configure good control, it is important to know the power drawn by the loads. It is also necessary to plan a reserve for every case. If, for example, the DG boiler requires 3 kW, the boiler is switched on when less than -3.5 kW is measured on the balance meter and only switched off again when more than 0 kW is measured. The 0.5 kW difference then serves as a buffer if someone switches on a computer (60 watts), for example, so that in this case there is not immediately too little energy available.

Delayed switching on or off

In addition, a time span must be factored in before switching on or off. For example, the boiler is only switched off when the value of 0 kW is exceeded for longer than 5 minutes. This ensures that a short-term load such as an oven or a kettle does not immediately cause the load to be switched off and on repeatedly. This is all the more important the larger the building is.

Determine how many loads can be switched on at the same time 

You should always check how the fuses have been dimensioned. This must be taken into account when all loads are running at the same time, e.g. at night. If the fuse is too small, you must configure the if/then actions so that the loads are not switched on at the same time.

Determine the switch-on and switch-off times of loads for staged switching on

When switching on loads in stages, e.g. several boilers, you must make sure that the delay between the first and the second load is long enough for the first load to draw its full power. If, for example, it takes only 20 seconds for the loads to draw full power, the loads can be switched on with a delay of one minute. Provided that enough electricity is available.

If there are fixed switch-on and switch-off times, make sure that they are offset by at least 1 minute. For example, switching on between 5:00 and 8:00 and switching off between 8:01 and 4:59

Switching off loads

When switching off loads, e.g. several boilers, it is possible to switch everything off at once. For example, with a delay of 5 minutes (delayed switching off). However, it is also possible to switch off the boilers in stages.

Example of staged switch-off with delay: 

- The first boiler switches off with a delay of 5 minutes, so that, for example, someone can switch on the kettle without this switching off the boiler. 

- The second boiler is switched off after 7 minutes of increased grid consumption (i.e. 5 minutes after the first + 2 minutes waiting time)

- The third boiler is then switched off after 9 minutes of increased grid consumption


Grid-optimized vs. self-consumption-optimized

When configuring the switch-on and switch-off thresholds, you must decide whether the system is grid-optimized, i.e. the loads switch on and off whenever possible when electricity is drawn from the grid. Or whether the system should be optimized for self-consumption. This means that as much electricity from the roof as possible should be used.

- Example for a 2.5 kW load with a reserve for consumption fluctuations of 0.5 kW.

    - Grid-optimized: switch the boiler on at -3 kW and off at 0 kW. 

    - Self-consumption-optimized: switch the boiler on at -1.5 kW and off at +1.5 kW.

    - Half-and-half: switch the boiler on at -2.5 kW and off at + 0.5 kW.


When configuring, bear in mind that the self-consumption-optimized variant is more profitable in winter, but in summer in good weather the loads are switched on very early and are already full in the afternoon when the sun is shining.

We have had good experience when the loads switch on when they can be supplied 100% with solar power and the reserve for small fluctuations in the grid share is taken into account. In other words, the "half-and-half" example above.

Booster button

Setting up a booster button for a load is possible, but makes the setup more time-consuming and complicated. Also note that only the owner of the smart-me account can activate a booster button. 

For this function, we must use a digital output that is not physically connected to a load. We then use the button only as a state for the if/then actions.

Reheating with peak and off-peak tariff vs. reheating with a single tariff. 

For boilers that are reheated with if/then actions, the local tariff structure can be taken into account. 

If electricity is cheaper at night, it is common to reheat at night. However, this means that the boiler is usually at its maximum temperature at sunrise. 

If a single tariff applies, it is best to stagger reheating from 12 noon. This way, in summer the boiler can be optimally charged in the morning and heated up in the afternoon if necessary. This improves the solar yield for the boiler. In the following examples, reheating takes place at night. If you want it to take place during the day, simply change the switch-on times in the examples. Make sure that switching off must also be taken into account.

3-stage boiler control

The example below for controlling 3 boilers can also be used for controlling 1 boiler with 3 phases. The configuration is exactly the same.

![Examples of boiler control with if/then actions – Figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image: ZEV with 3 boilers incl. reheating at night (green rectangles)

## Example solar-optimized with reheating with 1 boiler (detailed explanation with images and tabular explanation)

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power of boiler EG: 6 kW

![Examples of boiler control with if/then actions – Figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

This if/then action performs the function:

- switching the boiler on when the balance meter supplies sufficient electricity for more than one minute.

Or

- It is a specified time and the boiler is heated for three hours in any case.

![Examples of boiler control with if/then actions – Figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): -6000 Watt

- Minimum time (Mindestzeit): 1 minute


![Examples of boiler control with if/then actions – Figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 22:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 01:00

</div>
<div className="col col--7 text--center">

![Examples of boiler control with if/then actions – Figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


![Examples of boiler control with if/then actions – Figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On


![Examples of boiler control with if/then actions – Figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration: Boiler Off tabular view (short)



If/then action: Boiler EG Off

This if/then action performs the function:

- Switching the boiler off when the balance meter does not supply sufficient electricity for more than three minutes.

- And

- When the boiler is not within the specified period in which it is reheated for three hours in any case.


The configuration is explained below in the tabular view. It is important to note that it is an AND action, the threshold is now above and no longer below, and the times are the opposite of switching on (reheating), offset by 1 minute.

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 21:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


![Examples of boiler control with if/then actions – Figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Example solar-optimized with reheating with 3 boilers (tabular explanation)

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts

Relays are connected to boilers and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time benefits most from the use of solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it easier to spot the differences on desktop screens and thus also the logic behind them.

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-6000 Watt

- Minimum time (Mindestzeit): 1 minute


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 22:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 01:00


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter)

- Power (Leistung): \-3000 Watt

- Minimum time (Mindestzeit): 2 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 05:00


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: On


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-2000 Watt

- Minimum time (Mindestzeit): 3 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 02:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 06:00


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: On


### Configuration: Boiler Off tabular view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 21:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 05:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 00:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 06:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 01:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off


## Example solar-optimized without reheating with 1 boiler

Same as the "Example solar-optimized without reheating with 3 boilers (tabular explanation)" below. You only need to make the configuration for one boiler.

## Example solar-optimized without reheating with 3 boilers (tabular explanation)

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time benefits most from the use of solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it easier to spot the differences on desktop screens and thus also the logic behind them.

![Examples of boiler control with if/then actions – Figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-6000 Watt

- Minimum time (Mindestzeit): 1 minute


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter)

- Power (Leistung): \-3000 Watt

- Minimum time (Mindestzeit): 2 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: On


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-2000 Watt

- Minimum time (Mindestzeit): 3 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: On


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – Figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off


## Example solar-optimized without reheating with 1 boiler and booster / legionella

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

The MOSFET is configured according to [Inputs and outputs](/schnittstellen/ein-und-ausgaenge) and is named "Booster und Legionelle".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler: 7 kW


### Configuration: Legionella On

This only needs to be configured if legionella protection is to be activated, e.g. once a week on Friday from 3:15. A duration of 30 minutes (default) is specified here so that we can ensure that the state is set to "On" even if a data packet is lost.

If/then action: Legionella On

If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 03:15

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 03:45


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Output Booster und Legionelle: On

- Minimum time (Mindestzeit): No


![Examples of boiler control with if/then actions – Figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration: Booster and legionella Off

This corresponds to the time after which the booster (activated manually by the user in the smart-me GUI) or the legionella switching (configured as above) should be switched off automatically because the boiler is then heated up, e.g. 90 minutes. 

If/then action: Booster Legionella Off

If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Booster und Legionelle: On

- Minimum time (Mindestzeit): Yes, 90 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Output Booster und Legionelle: Off


![Examples of boiler control with if/then actions – Figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration: Boiler On tabular view (short)

Configuration: Boiler On

If/then action: Boiler On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-7000 Watt

- Minimum time (Mindestzeit): 1 minute


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Booster und Legionelle: On

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On


![Examples of boiler control with if/then actions – Figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration: Boiler Off tabular view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 1 minute


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Booster und Legionelle: Off

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


![Examples of boiler control with if/then actions – Figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Example solar-optimized with reheating and booster button with 1 boiler

Same as the "Example solar-optimized with reheating and booster button with 3 boilers (tabular explanation)" below. You only need to make the configuration for one boiler.

## Example solar-optimized with reheating and booster button with 3 boilers (tabular explanation)

<div className="row">
<div className="col col--6">

When configuring if/then actions, always check whether the unit displayed is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

The MOSFET is configured according to [Inputs and outputs](/schnittstellen/ein-und-ausgaenge) and is named "Boiler Booster".

</div>
<div className="col col--6 text--center">

![Examples of boiler control with if/then actions – Figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time benefits most from the use of solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it easier to spot the differences on desktop screens and thus also the logic behind them.

![Examples of boiler control with if/then actions – Figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-6000 Watt

- Minimum time (Mindestzeit): 1 minute


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 22:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 01:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter)

- Power (Leistung): \-3000 Watt

- Minimum time (Mindestzeit): 2 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 05:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): DG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-2000 Watt

- Minimum time (Mindestzeit): 3 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 02:00

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 06:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): UG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – Figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 21:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Boiler Booster: Off

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 05:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 00:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Boiler Booster: Off

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Balance 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 06:01

- Weekdays (Wochentage): Select all (Alle wählen)

- To (Bis): 01:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Boiler Booster: Off

- Minimum time (Mindestzeit): No


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off


### Configuration: Boiler Booster Reset tabular view (short)

This section is optional. If it is not configured, the booster button is never reset and always remains valid.

In this example, the "Boiler Booster" button is set back to "off" after 300 minutes, i.e. 5 hours.

![Examples of boiler control with if/then actions – Figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration: Boiler 1 Booster Reset (EG)

If/then action: Boiler EG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off


Configuration: Boiler 2 Booster Reset (DG)

If/then action: Boiler DG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): DG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off


Configuration: Boiler 3 Booster Reset (UG)

If/then action: Boiler UG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): UG

- Output Boiler Booster: On

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off
