---
title: 'Examples of boiler control with if/then actions'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Example configurations are described in detail on this page.'
sidebar_label: 'Examples of boiler control with if/then actions'
---
Example configurations are described in detail on this page.

## Requirements

To be able to use if/then actions, you must have a smart-me Limited or Professional license.

## Basics

The technical data can be found with the respective [products](/produkte). (e.g. maximum switching capacity).

The configuration of the outputs is described on the [inputs and outputs](/schnittstellen/ein_und_ausgaenge) page (e.g. activation of output 1).

The basics are described under [if/then actions](/konfiguration/wenndann-aktionen) (e.g. where to find if/then actions).

Note that [if/then actions](/konfiguration/wenndann-aktionen) only work correctly if the connection to the smart-me cloud is established. [Event-related actions](/konfiguration/wenndann-aktionen/ereignisaktionen) are more limited, but are saved and executed locally.

When configuring the if/then actions, always check whether the displayed unit is watts or kilowatts.

The smart-me meters are equipped with bistable relays; if switching on is configured, switching off must always be configured as well.

## Introduction

Determine consumption and plan a reserve for fluctuations in consumption

To configure a good control system, it is important to know the power consumed by the loads. It is also necessary to provide a buffer in case of need. For example, if the attic boiler requires 3 kW, the boiler is switched on when less than -3.5 kW is measured on the balance meter and only switched off again when more than 0 kW is measured. The 0.5 kW difference then serves as a buffer if someone switches on a computer (60 watts), for example, so that there is insufficient energy available in this case.

Time-delayed switching on or off

In addition, a time period must be taken into account before switching on or off. For example, the boiler is only switched off if the value of 0 kW is exceeded for more than 5 minutes. This ensures that a short-term consumer such as an oven or kettle does not immediately result in constant switching off and on. The larger the building, the more important this is.

Determine how many loads can be switched on at the same time

You should always check how the fuses are dimensioned. This must be taken into account if all loads are running at the same time, e.g. at night. If the fuse is too small, you must configure the if/then actions so that the loads are not switched on at the same time.

Determining the switch-on and switch-off times of loads for gradual switching on

When switching on loads gradually, e.g. several boilers, it must be ensured that the delay between the first and second load is long enough for the first load to draw full power. If, for example, it only takes 20 seconds for the consumer to draw full power, the consumers can be switched on with a delay of one minute. As long as sufficient power is available.

If there are fixed switch-on and switch-off times in place, make sure that these are delayed by at least 1 minute. For example, switching on between 5:00 and 8:00 and switching off between 8:01 and 4:59

Switching off consumers

When switching off consumers, e.g. several boilers, it is possible to switch everything off at once. For example, with a delay of 5 minutes (delayed switch-off). However, it is also possible to switch off the boilers in stages.

Example of a stepwise switch-off with a delay: 

- The first boiler switches off with a delay of 5 minutes so that, for example, someone can switch on the kettle without this resulting in the boiler switching off. 

- The second boiler is switched off after 7 minutes of increased grid consumption (i.e. 5 minutes after the first boiler + 2 minutes waiting time)

- The third boiler is then switched off after 9 minutes of increased grid consumption


Grid-optimized vs. self-consumption-optimized

When configuring the switch-on and switch-off thresholds, a decision must be made as to whether the system is to be grid-optimized, i.e. the loads switch on and off whenever possible when electricity is drawn from the grid. Or whether the system should be optimized for self-consumption. This means that as much electricity as possible should be used from the photovoltaic system.

Example for a consumer of 2.5 kW with a reserve for consumption fluctuations of 0.5 kW.

- Grid-optimized: Switch on boiler at -3 kW and switch off at 0 kW. 

- Self-consumption optimized: Switch on boiler at -1.5 kW and switch off at +1.5 kW.

- Part-part: Switch on boiler at -2.5 kW and switch off at + 0.5 kW.


When configuring the system, it is important to ensure that the variant with optimized self-consumption is more profitable in winter, but that the consumers are switched on very early in summer when the weather is fine and are already full in the afternoon when the sun is shining.

We have had good experiences when the loads are switched on when they can be powered 100% by solar energy and the reserve for small fluctuations in the grid share is taken into account. In other words, the “part-part” example above.

Booster button

Although it is possible to set up a booster button for a consumer, this makes the setup more complex and complicated. It should also be noted that only the owner of the smart-me account has the option of activating a booster button. 

For this function, the digital output must not be physically connected to a consumer. The button is then only used as a state for the if/then actions.

Reheating with high and low tariff vs. reheating with single tariff. 

For boilers that are reheated with the if/then actions, the local tariff structure can be taken into account. 

If electricity is cheaper at night, it is common to reheat during the night. However, this means that the boiler is usually at maximum temperature at sunrise. 

If a standard tariff is used, it is best to stagger the reheating from noon. This allows the boiler to be optimally charged in the morning during the summer and heated up in the afternoon if necessary. This way, the amount of solar energy available for the boiler is optimized. In the following examples, the boiler is reheated at night. If this is to take place during the day, simply change the switch-on times in the examples. Please note that switching off must also be taken into account.

3-stage boiler control

The example below for the control of 3 boilers can also be used for the control of 1 boiler with 3 phases. The configuration is exactly the same.

![Examples of boiler control with if/then actions – figure 1](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/01.png)

Figure: ZEV with 3 boilers incl. reheating at night (green rectangles)

## Example with 1 boiler solar-optimized with reheating (detailed explanation with pictures and tabular explanation)

When configuring the if/then actions, always pay attention to whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name “Boiler”.

Duration until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power boiler 1st floor: 6 kW

![Examples of boiler control with if/then actions – figure 2](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/02.png)

Configuration: Boiler 1 On (1st floor)

If/then action: Boiler 1st floor On

This if/then action fulfills the function of:

- Switching on the boiler if the balance meter supplies sufficient power for more than one minute.


Or

- A specific time is defined and the boiler is heated for three hours in any case.


![Examples of boiler control with if/then actions – figure 3](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/03.png)

If measured value greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -6000 watts

- Minimum time: 1 minute


![Examples of boiler control with if/then actions – figure 4](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/04.png)

If date & time:

- Type: Time range / Every day

- From: 22:00

- Weekdays: Select all

- Until: 01:00


![Examples of boiler control with if/then actions – figure 5](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/05.png)

If event

- Type: Or operation


![Examples of boiler control with if/then actions – figure 6](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/06.png)

Then switch on / off

- Counter: 1st floor

- Boiler: On


![Examples of boiler control with if/then actions – figure 7](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/07.png)

### Configuration: Boiler Off tabular view (short)



If/then action: Boiler 1st floor Off

This if/then action fulfills the function:

- To switch off the boiler if the balance meter does not supply sufficient power for more than three minutes.


And

- If the boiler is not within the defined period of time in which it is reheated for three hours in any case.


The configuration is explained below in the tabular view. It is important to note that it is an AND action, the threshold value is now above and no longer below and the times are the opposite of switching on (reheating) with a time delay of 1 minute.

Configuration: Boiler 1 Off (1st floor)

If/then action: Boiler 1st floor Off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 4 minutes


If date & time:

- Type: Time period / Every day

- From: 01:01

- Weekdays: Select all

- Until: 21:59


If event

- Type: And operation


Then switch on / off

- Meter: 1st floor

- Boiler: Off


![Examples of boiler control with if/then actions – figure 8](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/08.png)

## Example with 3 boilers solar-optimized with reheating (tabular explanation)

When configuring the if/then actions, always pay attention to whether the displayed unit is watts or kilowatts

Relays are connected to boilers and have been given the name “Boiler”.

Duration until full power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: No

Power: 

- Boiler 1st floor: 6 kW

- Boiler attic: 3 kW

- Boiler basement: 2 kW


To ensure that the boilers are not switched on at the same time, a delay will be added before each boiler is switched on. The boiler with the shortest delay time will have the greatest advantage when using solar energy as it will be switched on first. In this example, we will switch on the boiler with the highest consumption first so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at noon.

### Configuration: Boiler On tabular view (short)

We will now go into the configuration. A simpler example is explained in detail above.

The differences can be recognized more quickly on desktop screens by displaying them in tabular form and thus also the logic behind them.

Configuration: Boiler 1 On (1st floor)

If/then action: Boiler 1st floor On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -6000 watts

- Minimum time: 1 minute


If date & time:

- Type: Time period / Every day

- From: 22:00

- Weekdays: Select all

- To: 01:00


If Event

- Type: Or operation


Then switch on / off

- Meter: 1st floor

- Boiler: On


Configuration: Boiler 2 On (attic)

If/then action: Boiler attic On

If measured value greater/smaller:

- Meter: Balance 

- Threshold value: below

- Power: -3000 watts

- Minimum time: 2 minutes


If date & time:

- Type: Time period / Every day

- From: 01:00

- Weekdays: Select all

- To: 05:00


If Event

- Type: Or operation


Then switch on / off

- Meter: attic

- Boiler: On


Configuration: Boiler 3 On (basement)

If/then action: Boiler basement On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -2000 watts

- Minimum time: 3 minutes


If date & time:

- Type: Time period / Every day

- From: 02:00

- Weekdays: Select all

- To: 06:00


If Event

- Type: Or operation


Then switch on / off

- Meter: basement

- Boiler: On


### Configuration: Boiler Off tabular view (short)

Configuration: Boiler 1 Off (1st floor)

If/then action: Boiler 1st floor Off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 4 minutes


If date & time:

- Type: Time period / Every day

- From: 01:01

- Weekdays: Select all

- Until: 21:59


If Event

- Type: And operation


Then switch on / off

- Meter: 1st floor

- Boiler: Off


Configuration: Boiler 2 Off (attic)

If/then action: Boiler attic Off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 5 minutes


If date & time:

- Type: Time period / Every day

- From: 05:01

- Weekdays: Select all

- To: 00:59


If Event

- Type: And operation


Then switch on / off

- Meter: attic

- Boiler: Off


Configuration: Boiler 3 Off (basement)

If/then action: Boiler basement off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 6 minutes


If date & time:

- Type: Time period / Every day

- From: 06:01

- Weekdays: Select all

- To: 01:59


If Event

- Type: And operation


Then switch on / off

- Meter: Basement

- Boiler: Off


## Example with 3 boilers solar-optimized without reheating (tabular explanation)

When configuring the if/then actions, always note whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name “Boiler”.

Duration until full Power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler 1st floor: 6 kW

- Boiler attic: 3 kW

- Boiler basement: 2 kW


To ensure that the boilers are not switched on at the same time, a delay will be added before each boiler is switched on. The boiler with the shortest delay time will have the greatest advantage when using solar energy as it will be switched on first. In this example, we will switch on the boiler with the highest consumption first so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at noon.

### Configuration: Boiler On tabular view (short)

We will now go into the configuration. A simpler example is explained in detail above.

The differences can be recognized more quickly on desktop screens by displaying them in table form and thus also the logic behind them.

![Examples of boiler control with if/then actions – figure 9](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/09.png)

Configuration: Boiler 1 On (1st floor)

If/then action: Boiler 1st floor On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -6000 watts

- Minimum time: 1 minute


Then switch on / off

- Meter: 1st floor

- Boiler: On


Configuration: Boiler 2 On (attic)

If/then action: Boiler attic On

If measured value greater/smaller:

- Meter: Balance 

- Threshold value: below

- Power: -3000 watts

- Minimum time: 2 minutes


Then switch on / off

- Meter: Attic

- Boiler: On


Configuration: Boiler 3 On (basement)

If/then action: Boiler basement On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -2000 watts

- Minimum time: 3 minutes


Then switch on / off

- Meter: Basement

- Boiler: On


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – figure 10](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/10.png)

Configuration: Boiler 1 Off (1st floor)

If/then action: Boiler 1st floor Off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 4 minutes


Then switch on / off

- Meter: 1st floor

- Boiler: Off


Configuration: Boiler 2 Off (attic)

If/then action: Boiler attic off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 5 minutes


Then switch on / off

- Meter: Attic

- Boiler: Off


Configuration: Boiler 3 Off (basement)

If/then action: Boiler basement off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 6 minutes


Then switch on / off

- Meter: Basement

- Boiler: Off


## Example with 3 boilers solar-optimized with reheating and booster button (tabular explanation)

When configuring the if/then actions, always note whether the displayed unit is watts or kilowatts.

Relays are connected to boilers and have been given the name “Boiler”.

The Mosfet is configured according to the [inputs and outputs](/schnittstellen/ein_und_ausgaenge) and is named “Boiler Booster”.

![Examples of boiler control with if/then actions – figure 11](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/11.png)

Duration until full Power is drawn: 20 seconds

Boiler switches on automatically when a minimum temperature is reached: Yes

Power: 

- Boiler 1st floor: 6 kW

- Boiler attic: 3 kW

- Boiler basement: 2 kW


To ensure that the boilers are not switched on at the same time, a delay will be added before each boiler is switched on. The boiler with the shortest delay time will have the greatest advantage when using solar energy as it will be switched on first. In this example, we will switch on the boiler with the highest consumption first so that it has the opportunity to be switched on first after a long period of high consumption, e.g. at noon.

### Configuration: Boiler On tabular view (short)

We will now go into the configuration. A simpler example is explained in detail above.

The differences can be recognized more quickly on desktop screens by displaying them in table form and thus also the logic behind them.

![Examples of boiler control with if/then actions – figure 12](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/12.png)

Configuration: Boiler 1 On (1st floor)

If/then action: Boiler 1st floor On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -6000 watts

- Minimum time: 1 minute


If date & time:

- Type: Time period / Every day

- From: 22:00

- Weekdays: Select all

- To: 01:00


If switching states:

- Meter: 1st floor

- Boiler booster output: On

- Minimum time: No


If event

- Type: Or operation


Then switch on / off

- Meter: 1st floor

- Boiler Booster: Select nothing

- Boiler: On


Configuration: Boiler 2 On (attic)

If/then action: Boiler attic On

If measured value greater/smaller:

- Meter: Balance 

- Threshold value: below

- Power: -3000 watts

- Minimum time: 2 minutes


If date & time:

- Type: Time period / Every day

- From: 01:00

- Weekdays: Select all

- To: 05:00


If Switching states:

- Meter: Attic

- Boiler booster output: On

- Minimum time: No


If event

- Type: Or operation


Then switch on / off

- Meter: Attic

- Boiler Booster: Select nothing

- Boiler: On


Configuration: Boiler 3 On (basement)

If/then action: Boiler basement On

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: below 

- Power: -2000 watts

- Minimum time: 3 minutes


If date & time:

- Type: Time period / Every day

- From: 02:00

- Weekdays: Select all

- To: 06:00


If Switching states:

- Meter: Basement

- Boiler booster output: On

- Minimum time: No


If event

- Type: Or operation


Then switch on / off

- Meter: Basement

- Boiler Booster: Select nothing

- Boiler: On


### Configuration: Boiler Off tabular view (short)

![Examples of boiler control with if/then actions – figure 13](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/13.png)

Configuration: Boiler 1 Off (1st floor)

If/then action: Boiler 1st floor Off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 4 minutes


If date & time:

- Type: Time period / Every day

- From: 01:01

- Weekdays: Select all

- Until: 21:59


If switching states:

- Meter: 1st floor

- Boiler booster output: Off

- Minimum time: No


If event

- Type: And operation


Then switch on / off

- Meter: 1st floor

- Boiler: Off


Configuration: Boiler 2 Off (attic)

If/then action: Boiler attic off

If measured value greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 5 minutes


If date & time:

- Type: Time period / Every day

- From: 05:01

- Weekdays: Select all

- To: 00:59


If switching states:

- Meter: 1st floor

- Boiler booster output: Off

- Minimum time: No


If event

- Type: And operation


Then switch on / off

- Meter: Attic

- Boiler: Off


Configuration: Boiler 3 Off (basement)

If/then action: Boiler basement off

If measured value is greater/smaller:

- Meter: Balance 

- Threshold value: over

- Power: 500 watts

- Minimum time: 6 minutes


If date & time:

- Type: Time period / Every day

- From: 06:01

- Weekdays: Select all

- To: 01:59


If switching states:

- Meter: 1st floor

- Boiler booster output: Off

- Minimum time: No


If event

- Type: And operation


Then switch on / off

- Meter: Basement

- Boiler: Off


### Configuration: Boiler Booster Reset tabular view (short)

This section is optional. If it is not configured, this means that the booster button is never reset and is always active.

In this example, the "Boiler Booster" button is reset to "off" after 300 minutes, in other words after 5 hours.

![Examples of boiler control with if/then actions – figure 14](/img/_en/configuration-if-then-action-examples-of-boiler-control-with-ifthen-actions/14.png)

Configuration: Boiler 1 Booster Reset (1st floor)

If/then action: Boiler 1st floor booster reset

If switching states:

- Meter: 1st floor

- Boiler booster output: On

- Minimum time: 300 minutes


Then switch on / off

- Meter: 1st floor

- Boiler: Off


Configuration: Boiler 2 Booster Reset (attic)

If Then/Action: Boiler attic booster reset

If switching states:

- Meter: Attic

- Boiler booster output: On

- Minimum time: 300 minutes


Then switch on / off

- Meter: Attic

- Boiler: Off


Configuration: Boiler 3 Booster Reset (basement)

If/then action: Boiler basement booster reset

If switching states:

- Meter: Basement

- Boiler booster output: On

- Minimum time: 300 minutes


Then switch on / off

- Meter: Basement

- Boiler: Off
