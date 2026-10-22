---
title: 'Examples of boiler control with if/then actions'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Example configurations are described in detail on this page.'
sidebar_label: 'Example boiler control'
---
Example configurations are described in detail on this page.

## Prerequisites

To use if/then actions, you need a smart-me Limited or Professional license.

## Basics

The technical data can be found with the respective [products](/produkte) (e.g. maximum switching capacity).

The configuration of the outputs is described on the [Inputs and Outputs](/schnittstellen/ein-und-ausgaenge) page (e.g. activation of output 1).

The basics are described under [If/Then Actions](/konfiguration/wenndann-aktionen) (e.g. where I can find if/then actions).

Note that [if/then actions](/konfiguration/wenndann-aktionen) only work correctly if the connection to the smart-me Cloud is guaranteed. [Event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)  are more limited, but are stored and executed locally.

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

The smart-me meters are equipped with bistable relays; if switching on is configured, switching off must always be configured as well.

## Introduction

Determine the consumption and plan a reserve for fluctuations in consumption

To configure a good control system, it is important to know the power drawn by the consumers. It is also necessary to provide a reserve for every case. For example, if the attic boiler requires 3 kW, the boiler is switched on when less than -3.5 kW is measured on the balance meter and only switched off again when more than 0 kW is measured. The 0.5 kW difference then serves as a buffer if someone switches on a computer (60 watts), for example, so that in this case there is not immediately too little energy available.

Delayed switching on or off

In addition, a time span must be factored in before switching on or off. For example, the boiler is only switched off when the value of 0 kW is exceeded for longer than 5 minutes. This ensures that a short-term consumer such as an oven or a kettle does not immediately result in the consumer having to be switched off and on all the time. This is all the more important the larger the building is.

Determine how many consumers can be switched on at the same time 

You should always check how the fuses have been dimensioned. This must be taken into account when all consumers are running at the same time, e.g. at night. If the fuse is too small, you must configure the if/then actions so that the consumers are not switched on at the same time.

Determining the switch-on and switch-off times of consumers for gradual switching on

When switching on consumers gradually, e.g. several boilers, you must make sure that the delay between the first and the second consumer is long enough for the first consumer to draw full power. For example, if it only takes 20 seconds for the consumers to draw full power, the consumers can be switched on with a delay of one minute. Provided that enough electricity is available.

If there are fixed switch-on and switch-off times, make sure that they are offset by at least 1 minute. For example, switch on between 5:00 and 8:00 and switch off between 8:01 and 4:59

Switching off consumers

When switching off consumers, e.g. several boilers, it is possible to switch everything off at once. For example, with a delay of 5 minutes (delayed switching off). However, it is also possible to switch off the boilers gradually.

Example of gradual switching off with delay: 

- The first boiler switches off with a delay of 5 minutes, so that, for example, someone can switch on the kettle without this switching off the boiler. 

- The second boiler is switched off after 7 minutes of increased grid consumption (i.e. 5 minutes after the first + 2 minutes waiting time)

- The third boiler is then switched off after 9 minutes of increased grid consumption


Grid-optimized vs. self-consumption-optimized

When configuring the switch-on and switch-off thresholds, you must decide whether the system is grid-optimized, i.e. the consumers switch on and off whenever possible when electricity is drawn from the grid. Or whether the system is to be optimized for self-consumption. This means that as much electricity from the roof as possible should be used.

- Example for a consumer of 2.5 kW with a reserve for consumption fluctuations of 0.5 kW.

    - Grid-optimized: switch boiler on at -3 kW and off at 0 kW. 

    - Self-consumption-optimized: switch boiler on at -1.5 kW and off at +1.5 kW.

    - Half-and-half: switch boiler on at -2.5 kW and off at + 0.5 kW.


When configuring, bear in mind that the variant with optimized self-consumption is more profitable in winter, but in summer in good weather the consumers are switched on very early and are already full in the afternoon when the sun is shining.

We have had good experience when the consumers switch on when they can be supplied 100 % with solar power and the reserve for small fluctuations in the grid share is taken into account. In other words, the "half-and-half" example above.

Booster button

Setting up a booster button for a consumer is possible, but makes the setup more time-consuming and complicated. Also note that only the owner of the smart-me account can activate a booster button. 

For this function, we have to use a digital output that is not physically connected to a consumer. We then use the button only as a state for the if/then actions.

Reheating with peak and off-peak tariff vs. reheating with a single tariff. 

For boilers that are reheated with the if/then actions, the local tariff structure can be taken into account. 

If electricity is cheaper at night, it is common to reheat at night. However, this means that the boiler usually has its maximum temperature at sunrise. 

If a single tariff is applied, it is best to stagger the reheating from 12 noon. This allows the boiler to be optimally charged in the morning in summer and heated up in the afternoon if necessary. In this way, the solar yield for the boiler is better. In the following examples, reheating takes place at night. If this is to take place during the day, simply change the switch-on times in the examples. Make sure that switching off must also be taken into account.

3-stage boiler control

The example below for controlling 3 boilers can also be used for controlling 1 boiler with 3 phases. The configuration is exactly the same.

![Examples of boiler control with if/then actions – Figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image: ZEV with 3 boilers incl. reheating at night (green rectangles)

## Example solar-optimized with reheating with 1 boiler (detailed explanation with images and tabular explanation)

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

Relays are connected to the boiler and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power of boiler EG: 6 kW

![Examples of boiler control with if/then actions – Figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG Ein

This if/then action performs the function:

- to switch on the boiler when the balance meter supplies sufficient electricity for more than one minute.

Or

- It is a specified time and the boiler is heated for three hours in any case.

![Examples of boiler control with if/then actions – Figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: -6000 Watt

- Minimum time: 1 minute


![Examples of boiler control with if/then actions – Figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 22:00

- Weekdays: Select all (Alle wählen)

- To: 01:00

</div>
<div className="col col--7 text--center">

![Examples of boiler control with if/then actions – Figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


![Examples of boiler control with if/then actions – Figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: On (Ein)


![Examples of boiler control with if/then actions – Figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration: Boiler Off tabular view (short)



If/then action: Boiler EG Aus

This if/then action performs the function:

- To switch off the boiler when the balance meter does not supply sufficient electricity for more than three minutes.

- And

- When the boiler is not within the specified time period in which it is reheated for three hours in any case.


The configuration is explained below in the tabular view. It is important to note that it is an AND action, the threshold is now above and no longer below, and the times are the opposite of switching on (reheating), offset by 1 minute.

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 01:01

- Weekdays: Select all (Alle wählen)

- To: 21:59


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


![Examples of boiler control with if/then actions – Figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Example solar-optimized with reheating with 3 boilers (tabular explanation)

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts

Relays are connected to boilers and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time has the greatest advantage in using solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it quicker to see the differences on desktop screens and thus also the underlying logic.

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-6000 Watt

- Minimum time: 1 minute


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 22:00

- Weekdays: Select all (Alle wählen)

- To: 01:00


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter)

- Power: \-3000 Watt

- Minimum time: 2 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 01:00

- Weekdays: Select all (Alle wählen)

- To: 05:00


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-2000 Watt

- Minimum time: 3 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 02:00

- Weekdays: Select all (Alle wählen)

- To: 06:00


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: On (Ein)


### Configuration: Boiler Off tabular view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 01:01

- Weekdays: Select all (Alle wählen)

- To: 21:59


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 05:01

- Weekdays: Select all (Alle wählen)

- To: 00:59


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 06:01

- Weekdays: Select all (Alle wählen)

- To: 01:59


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: Off (Aus)


## Example solar-optimized without reheating with 1 boiler

Same as the "Example solar-optimized without reheating with 3 boilers (tabular explanation)" below. You only need to make the configuration for one boiler.

## Example solar-optimized without reheating with 3 boilers (tabular explanation)

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time has the greatest advantage in using solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it quicker to see the differences on desktop screens and thus also the underlying logic.

![Examples of boiler control with if/then actions – Figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-6000 Watt

- Minimum time: 1 minute


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter)

- Power: \-3000 Watt

- Minimum time: 2 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-2000 Watt

- Minimum time: 3 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: On (Ein)


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – Figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 4 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 5 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 6 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: Off (Aus)


## Example solar-optimized without reheating with 1 boiler and booster / legionella

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

The MOSFET is configured according to the [Inputs and Outputs](/schnittstellen/ein-und-ausgaenge) and is named "Booster und Legionelle".

Time until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler: 7 kW


### Configuration: Legionella On

This only needs to be configured if legionella protection is to be activated, e.g. once a week on Friday from 3:15. A duration is specified here, which is 30 minutes (default), so that we can ensure that the state is set to "On" even if a data packet is lost.

If/then action: Legionelle Ein

If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 03:15

- Weekdays: Select all (Alle wählen)

- To: 03:45


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Output Booster und Legionelle: On (Ein)

- Minimum time: No


![Examples of boiler control with if/then actions – Figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration: Booster and Legionella Off

This corresponds to the time after which the booster (activated manually by the user in the smart-me GUI) or the legionella circuit (configured as above) is to be switched off automatically because the boiler is then warmed up, e.g. 90 minutes. 

If/then action: Booster Legionelle Aus

If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Booster und Legionelle: On (Ein)

- Minimum time: Yes, 90 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Output Booster und Legionelle: Off (Aus)


![Examples of boiler control with if/then actions – Figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration: Boiler On tabular view (short)

Configuration: Boiler On

If/then action: Boiler Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-7000 Watt

- Minimum time: 1 minute


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Booster und Legionelle: On (Ein)

- Minimum time: No


If event (Wenn Ereignis)

- Type: OR link (ODER Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: On (Ein)


![Examples of boiler control with if/then actions – Figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration: Boiler Off tabular view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 1 minute


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Booster und Legionelle: Off (Aus)

- Minimum time: No


If event (Wenn Ereignis)

- Type: AND link (UND Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


![Examples of boiler control with if/then actions – Figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Example solar-optimized with reheating and booster button with 1 boiler

Same as the "Example solar-optimized with reheating and booster button with 3 boilers (tabular explanation)" below. You only need to make the configuration for one boiler.

## Example solar-optimized with reheating and booster button with 3 boilers (tabular explanation)

<div className="row">
<div className="col col--6">

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name "Boiler".

The MOSFET is configured according to the [Inputs and Outputs](/schnittstellen/ein-und-ausgaenge) and is named "Boiler Booster".

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


To ensure that the boilers are not switched on at the same time, we will build in a delay before each boiler is switched on. The boiler with the shortest delay time has the greatest advantage in using solar energy, as it is switched on first. In this example, we will switch on the boiler with the highest consumption first, so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at midday.

### Configuration: Boiler On tabular view (short)

Here we now go into the configuration. A simpler example is explained in detail above.

The tabular presentation makes it quicker to see the differences on desktop screens and thus also the underlying logic.

![Examples of boiler control with if/then actions – Figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-6000 Watt

- Minimum time: 1 minute


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 22:00

- Weekdays: Select all (Alle wählen)

- To: 01:00


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Boiler Booster: On (Ein)

- Minimum time: No


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter)

- Power: \-3000 Watt

- Minimum time: 2 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 01:00

- Weekdays: Select all (Alle wählen)

- To: 05:00


If switching states (Wenn Schaltzustände):

- Meter: DG

- Output Boiler Booster: On (Ein)

- Minimum time: No


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG Ein

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: below (unter) 

- Power: \-2000 Watt

- Minimum time: 3 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 02:00

- Weekdays: Select all (Alle wählen)

- To: 06:00


If switching states (Wenn Schaltzustände):

- Meter: UG

- Output Boiler Booster: On (Ein)

- Minimum time: No


If event (Wenn Ereignis)

- Type: OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – Figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 01:01

- Weekdays: Select all (Alle wählen)

- To: 21:59


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Boiler Booster: Off (Aus)

- Minimum time: No


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 05:01

- Weekdays: Select all (Alle wählen)

- To: 00:59


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Boiler Booster: Off (Aus)

- Minimum time: No


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Aus

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter: Bilanz 

- Threshold: above (über)

- Power: 500 Watt

- Minimum time: 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type: Time span / Every day (Zeitspanne / Jeden Tag)

- From: 06:01

- Weekdays: Select all (Alle wählen)

- To: 01:59


If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Boiler Booster: Off (Aus)

- Minimum time: No


If event (Wenn Ereignis)

- Type: AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: Off (Aus)


### Configuration: Boiler Booster Reset tabular view (short)

This section is optional. If it is not configured, this means that the booster button is never reset and is always valid.

In this example, the "Boiler Booster" button is set back to "off" after 300 minutes, i.e. 5 hours.

![Examples of boiler control with if/then actions – Figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration: Boiler 1 Booster Reset (EG)

If/then action: Boiler EG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter: EG

- Output Boiler Booster: On (Ein)

- Minimum time: 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Booster Reset (DG)

If/then action: Boiler DG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter: DG

- Output Boiler Booster: On (Ein)

- Minimum time: 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Booster Reset (UG)

If/then action: Boiler UG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter: UG

- Output Boiler Booster: On (Ein)

- Minimum time: 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter: UG

- Boiler: Off (Aus)
