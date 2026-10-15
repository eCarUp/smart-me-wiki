---
title: 'Examples of boiler control with if/then actions'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'This page describes example configurations in detail.'
sidebar_label: 'Example boiler control'
---
This page describes example configurations in detail.

## Requirements

To use if/then actions, you need a smart-me Limited or Professional license.

## Basics

You can find the technical data for each device under [Products](/produkte), for example the maximum switching capacity.

The configuration of the outputs is described on the [Input and Output Configuration](/schnittstellen/ein_und_ausgaenge) page, for example how to activate output 1.

The basics are described under [If / Then Actions](/konfiguration/wenndann-aktionen), for example where to find if/then actions.

Note that [if/then actions](/konfiguration/wenndann-aktionen) only work correctly while the connection to the smart-me Cloud is available. [Event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)  have fewer options, but they are stored and executed locally.

When configuring if/then actions, always check whether the unit shown is watts or kilowatts.

smart-me meters use bistable relays. If you configure switching on, you must always configure switching off as well.

## Introduction

Determine the consumption and plan a reserve for fluctuations in consumption

To configure a good control, you need to know how much power the consumers draw. You also need to plan a reserve for every case. For example, if the DG boiler needs 3 kW, the boiler is switched on when the balance meter measures less than -3.5 kW. It is only switched off again when it measures more than 0 kW. The 0.5 kW difference acts as a buffer. If someone switches on a computer (60 watts), for example, there is still enough energy available.

Delayed switching on or off

You also need to add a delay before switching on or off. For example, the boiler is only switched off when the value of 0 kW has been exceeded for more than 5 minutes. This way, a short-term consumer such as an oven or a kettle does not cause the boiler to switch off and on again straight away. This matters more the larger the building is.

Determine how many consumers can be switched on at the same time 

Always check how the fuses are sized. This matters when all consumers run at the same time, for example at night. If the fuse is too small, configure the if/then actions so that the consumers are not switched on at the same time.

Determine the switch-on and switch-off times of consumers for staged switching on

When consumers are switched on in stages, for example several boilers, the delay between the first and the second consumer must be long enough for the first consumer to reach full power. For example, if the consumers take only 20 seconds to reach full power, they can be switched on one minute apart. This assumes that enough electricity is available.

If there are fixed switch-on and switch-off times, they must be offset by at least 1 minute. For example, switch on between 5:00 and 8:00 and switch off between 8:01 and 4:59

Switching off consumers

When switching off consumers, for example several boilers, you can switch everything off at once. For example, with a delay of 5 minutes (delayed switching off). You can also switch off the boilers in stages.

Example of staged switching off with a delay: 

- The first boiler switches off after a delay of 5 minutes. This way, someone can switch on the kettle without the boiler switching off. 

- The second boiler switches off after 7 minutes of increased grid consumption (5 minutes after the first + 2 minutes waiting time)

- The third boiler then switches off after 9 minutes of increased grid consumption


Grid-optimized vs. self-consumption-optimized

When you configure the switch-on and switch-off thresholds, you must decide whether the system is grid-optimized or optimized for self-consumption. Grid-optimized means the consumers switch on and off so that, as far as possible, they switch whenever electricity is drawn from the grid. Optimized for self-consumption means using as much electricity from the roof as possible.

- Example for a 2.5 kW consumer with a reserve of 0.5 kW for fluctuations in consumption.

    - Grid-optimized: switch the boiler on at -3 kW and off at 0 kW. 

    - Self-consumption-optimized: switch the boiler on at -1.5 kW and off at +1.5 kW.

    - Partly-partly: switch the boiler on at -2.5 kW and off at + 0.5 kW.


Note when configuring that the self-consumption-optimized variant is more cost-effective in winter. In summer, however, when the weather is good, the consumers are switched on very early and are already full in the sunny afternoon.

We have had good results when the consumers switch on once they can be supplied 100 % by solar power, with the reserve for small fluctuations in the grid share taken into account. This is the "partly-partly" example above.

Booster button

You can set up a booster button for a consumer, but this makes the setup more complex. Also note that only the owner of the smart-me account can activate a booster button. 

This function needs a digital output that is not physically connected to a consumer. The button is then used only as a state for the if/then actions.

Reheating with peak and off-peak tariffs vs. reheating with a single tariff. 

For boilers that are reheated with if/then actions, you can take the local tariff structure into account. 

If electricity is cheaper at night, boilers are usually reheated at night. As a result, the boiler usually reaches its maximum temperature at sunrise. 

If a single tariff applies, it is best to stagger reheating from 12:00 noon. In summer, this lets the boiler charge well in the morning and heat up in the afternoon if needed. This way, the boiler makes better use of the solar yield. The following examples reheat at night. If you want to reheat during the day, simply change the switch-on times in the examples. Make sure that you also take switching off into account.

3-stage boiler control

The example below for controlling 3 boilers can also be used to control 1 boiler with 3 phases. The configuration is exactly the same.

![Examples of boiler control with if/then actions – Figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image: ZEV with 3 boilers incl. reheating at night (green rectangles)

## Example solar-optimized with reheating, 1 boiler (detailed explanation with images and table view)

When configuring if/then actions, always check whether the unit shown is watts or kilowatts.

The relays are connected to the boilers and have been named "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on by itself when a minimum temperature is reached: No

Power of boiler EG: 6 kW

![Examples of boiler control with if/then actions – Figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

This if/then action does the following:

- It switches the boiler on when the balance meter supplies enough electricity for more than one minute.


Or

- It is a set time, and the boiler is heated for three hours in any case.


![Examples of boiler control with if/then actions – Figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): -6000 Watt

- Minimum time (Mindestzeit): 1 minute


![Examples of boiler control with if/then actions – Figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 22:00

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 01:00

</div>
<div className="col col--7 text--center">

![Examples of boiler control with if/then actions – Figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


![Examples of boiler control with if/then actions – Figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Then switch on / off (Dann Ein / ausschalten)

- Meter (Zähler): EG

- Boiler: On (Ein)


![Examples of boiler control with if/then actions – Figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration: Boiler Off, table view (short)



If/then action: Boiler EG Off

This if/then action does the following:

- It switches the boiler off when the balance meter does not supply enough electricity for more than three minutes.

- And

- When the boiler is outside the set period in which it is reheated for three hours in any case.


The configuration is explained below in the table view. Note that this is an AND action, the threshold is now above instead of below, and the times are the opposite of switching on (reheating), offset by 1 minute.

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 21:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


![Examples of boiler control with if/then actions – Figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Example solar-optimized with reheating, 3 boilers (table view)

When configuring if/then actions, always check whether the unit shown is watts or kilowatts

The relays are connected to the boilers and have been named "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on by itself when a minimum temperature is reached: No

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To make sure that the boilers are not switched on at the same time, we add a delay before each boiler is switched on. The boiler with the shortest delay benefits most from solar energy, because it is switched on first. In this example, we switch on the boiler with the highest consumption first. This way, after a long period of high consumption, for example at midday, it gets the chance to be switched on first.

### Configuration: Boiler On, table view (short)

This section covers the configuration. A simpler example is explained in detail further up.

The table view makes it quicker to spot the differences on desktop screens, and with them the logic behind them.

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

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

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

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

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

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

- Boiler: On (Ein)


### Configuration: Boiler Off, table view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 21:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 05:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 00:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 06:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 01:59


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off (Aus)


## Example solar-optimized without reheating, 1 boiler

Same as the "Example solar-optimized without reheating, 3 boilers (table view)" below. You only need to configure one boiler.

## Example solar-optimized without reheating, 3 boilers (table view)

When configuring if/then actions, always check whether the unit shown is watts or kilowatts.

The relays are connected to the boilers and have been named "Boiler".

Time until full power is drawn: 20 seconds

Boiler switches on by itself when a minimum temperature is reached: Yes

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To make sure that the boilers are not switched on at the same time, we add a delay before each boiler is switched on. The boiler with the shortest delay benefits most from solar energy, because it is switched on first. In this example, we switch on the boiler with the highest consumption first. This way, after a long period of high consumption, for example at midday, it gets the chance to be switched on first.

### Configuration: Boiler On, table view (short)

This section covers the configuration. A simpler example is explained in detail further up.

The table view makes it quicker to spot the differences on desktop screens, and with them the logic behind them.

![Examples of boiler control with if/then actions – Figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-6000 Watt

- Minimum time (Mindestzeit): 1 minute


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter)

- Power (Leistung): \-3000 Watt

- Minimum time (Mindestzeit): 2 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-2000 Watt

- Minimum time (Mindestzeit): 3 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: On (Ein)


### Configuration: Boiler Off, table view (short)

![Examples of boiler control with if/then actions – Figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off (Aus)


## Example solar-optimized without reheating, 1 boiler with booster / legionella

When configuring if/then actions, always check whether the unit shown is watts or kilowatts.

The relays are connected to the boilers and have been named "Boiler".

The MOSFET is configured as described in [Input and Output Configuration](/schnittstellen/ein_und_ausgaenge) and is named "Booster und Legionelle".

Time until full power is drawn: 20 seconds

Boiler switches on by itself when a minimum temperature is reached: Yes

Power: 

- Boiler: 7 kW


### Configuration: Legionella On

You only need to configure this if you want to activate legionella protection, for example once a week on Friday from 3:15. A duration is set here, 30 minutes by default. This makes sure that the state is set to "On" even if a data packet is lost.

If/then action: Legionelle On

If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 03:15

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 03:45


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Output (Ausgang) Booster und Legionelle: On (Ein)

- Minimum time (Mindestzeit): No (Nein)


![Examples of boiler control with if/then actions – Figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration: Booster and Legionella Off

This is the time after which the booster (activated manually by the user in the smart-me GUI) or the legionella switching (configured as above) should switch off automatically, because the boiler has then heated up. For example, 90 minutes. 

If/then action: Booster Legionelle Off

If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Booster und Legionelle: On (Ein)

- Minimum time (Mindestzeit): Yes (Ja), 90 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Output (Ausgang) Booster und Legionelle: Off (Aus)


![Examples of boiler control with if/then actions – Figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration: Boiler On, table view (short)

Configuration: Boiler On

If/then action: Boiler On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-7000 Watt

- Minimum time (Mindestzeit): 1 minute


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Booster und Legionelle: On (Ein)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): OR link (ODER Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: On (Ein)


![Examples of boiler control with if/then actions – Figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration: Boiler Off, table view (short)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 1 minute


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Booster und Legionelle: Off (Aus)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): AND link (UND Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


![Examples of boiler control with if/then actions – Figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Example solar-optimized with reheating and booster button, 1 boiler

Same as the "Example solar-optimized with reheating and booster button, 3 boilers (table view)" below. You only need to configure one boiler.

## Example solar-optimized with reheating and booster button, 3 boilers (table view)

When configuring if/then actions, always check whether the unit shown is watts or kilowatts.

The relays are connected to the boilers and have been named "Boiler".

The MOSFET is configured as described in [Input and Output Configuration](/schnittstellen/ein_und_ausgaenge) and is named "Boiler Booster".

![Examples of boiler control with if/then actions – Figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

Time until full power is drawn: 20 seconds

Boiler switches on by itself when a minimum temperature is reached: Yes

Power: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


To make sure that the boilers are not switched on at the same time, we add a delay before each boiler is switched on. The boiler with the shortest delay benefits most from solar energy, because it is switched on first. In this example, we switch on the boiler with the highest consumption first. This way, after a long period of high consumption, for example at midday, it gets the chance to be switched on first.

### Configuration: Boiler On, table view (short)

This section covers the configuration. A simpler example is explained in detail further up.

The table view makes it quicker to spot the differences on desktop screens, and with them the logic behind them.

![Examples of boiler control with if/then actions – Figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration: Boiler 1 On (EG)

If/then action: Boiler EG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-6000 Watt

- Minimum time (Mindestzeit): 1 minute


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 22:00

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 01:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


Configuration: Boiler 2 On (DG)

If/then action: Boiler DG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter)

- Power (Leistung): \-3000 Watt

- Minimum time (Mindestzeit): 2 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:00

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 05:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): DG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


Configuration: Boiler 3 On (UG)

If/then action: Boiler UG On

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): below (unter) 

- Power (Leistung): \-2000 Watt

- Minimum time (Mindestzeit): 3 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 02:00

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 06:00


If switching states (Wenn Schaltzustände):

- Meter (Zähler): UG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): OR link (Oder Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler Booster: Select nothing (Nichts wählen)

- Boiler: On (Ein)


### Configuration: Boiler Off, table view (short)

![Examples of boiler control with if/then actions – Figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration: Boiler 1 Off (EG)

If/then action: Boiler EG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 4 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 01:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 21:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Boiler Booster: Off (Aus)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


nConfiguration: Boiler 2 Off (DG)

If/then action: Boiler DG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 5 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 05:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 00:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Boiler Booster: Off (Aus)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Off (UG)

If/then action: Boiler UG Off

If measured value greater/less (Wenn Messwert grösser/kleiner):

- Meter (Zähler): Bilanz 

- Threshold (Schwellwert): above (über)

- Power (Leistung): 500 Watt

- Minimum time (Mindestzeit): 6 minutes


If date & time (Wenn Datum & Uhrzeit):

- Type (Typ): Time span / Every day (Zeitspanne / Jeden Tag)

- From (Von): 06:01

- Weekdays (Wochentage): Select all (Alle Wählen)

- To (Bis): 01:59


If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Boiler Booster: Off (Aus)

- Minimum time (Mindestzeit): No (Nein)


If event (Wenn Ereignis)

- Type (Typ): AND link (Und Verknüpfung)


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off (Aus)


### Configuration: Boiler Booster Reset, table view (short)

This section is optional. If you do not configure it, the booster button is never reset and always remains valid.

In this example, the "Boiler Booster" button is set back to "off" after 300 minutes, i.e. 5 hours.

![Examples of boiler control with if/then actions – Figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration: Boiler 1 Booster Reset (EG)

If/then action: Boiler EG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): EG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): EG

- Boiler: Off (Aus)


Configuration: Boiler 2 Booster Reset (DG)

If/then action: Boiler DG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): DG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): DG

- Boiler: Off (Aus)


Configuration: Boiler 3 Booster Reset (UG)

If/then action: Boiler UG Booster Reset

If switching states (Wenn Schaltzustände):

- Meter (Zähler): UG

- Output (Ausgang) Boiler Booster: On (Ein)

- Minimum time (Mindestzeit): 300 minutes


Then switch on / off (Dann ein- / ausschalten)

- Meter (Zähler): UG

- Boiler: Off (Aus)
