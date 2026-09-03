---
title: 'If / Then Actions'
slug: '/konfiguration/wenndann-aktionen'
description: 'If/then Actions are available for users with a Professional or Limited Subscription.'
sidebar_label: 'If / Then Actions'
---
## Requirement

If/then Actions are available for users with a Professional or Limited Subscription. 

If/then Actions Pico control is available for users with a Professional Subscription. 

## What IF/THEN Actions can be used for

- Tariff time basis for dual and multi-tariffs in billing


- Controls using meter inputs and outputs


- Alarms such as connection interruptions and meter outages




[Tariff timings](https://doc.smart-me.com/configuration/if-then-action/define-tariff-timing)

[IF/THEN Boiler control](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Define alarms](/konfiguration/wenndann-aktionen/alarme)

Automatic controls can be created for any device in the smart-me platform. There are two ways to define such actions. Either [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen) or if/then actions are created.  This article explains if/then actions.  Compared to event actions, more complex triggers and actions can be defined:

- several triggers (AND as well as OR links) are possible

- several actions are possible

- a group of meters can be monitored / switched

- Connection monitoring

- Meter standstill


## If/Then Actions

The If/Then Actions are stored in the cloud and therefore only work if the device in question has a WLAN connection. You can create an unlimited number of if/then actions for all smart-me devices. If/Then actions can only be created and changed in the web portal. 

### Procedure

1.  Log in to our [website](https://web.smart-me.com/login/) with your user name and password

2.  Click on Configuration

3.  Click on the If /Then Actions tile.

4.  Click on the \+ symbol to create a new action or click on an existing one to edit it.


## Requirements for functioning if/then actions:

1.  At least one if-event must be defined, because this triggers the action. If several if-events have been defined, they can be linked with AND and OR commands.

2.  At least one then-action must be defined (except for condition for tariffs). If several then-actions have been defined, they will all be executed simultaneously as soon as the if-condition(s) have been fulfilled.

3.  A name for this action


## If-events

The following if-events (triggers) are available:

![Value above / below threshold](/img/_en/configuration-if-then-action/01.png)

Measured value greater/smaller

- Define which energy meter is to be monitored.

    You can also select entire folders, in which case the average value of all meters in this folder is monitored. You can use all energy meters that are connected to the cloud. This means not only electricity meters but also gas, heat or water meters (gateway). 


The test value always refers to the main attribute. 

- For electricity meters, the 3-phase power in W or kW.

- For heat or cooling meters, W or kW.

- For water and gas meters, the m3/h.


In addition, define how long the measured value must be undercut or exceeded in order to trigger the then action.

![If / Then Actions – figure 2](/img/_en/configuration-if-then-action/02.png)

![Date & Time](/img/_en/configuration-if-then-action/03.png)

Date and time

You can define individual events or time periods as if-events. 

A distinction is made between the following variants:

- Individual events

- Time span events


Individual events:

The individual events are always executed at a specific time. If, however, it was not possible at the time for technical reasons (e.g. no Internet), the command is not repeated until the next time the condition occurs. This variant is suitable if other sources are to change the influenced switching state in the meantime.

Time span events:

The time span events are checked and repeated every 5 minutes within the defined time span. The switching state would be changed as soon as the technical problems were eliminated, but prevents external intervention on the controlled switching states.

![If / Then Actions – figure 4](/img/_en/configuration-if-then-action/04.png)

![No connection](/img/_en/configuration-if-then-action/05.png)

No connection

An if event can be set for meters disconnected from the cloud. The following settings must be made:

- Which meter or Folder is to be monitored

- How long the connection must be interrupted in minutes


Tip: When a folder is selected, all counters hereatic below it will be monitored.

Notice: 

This if action is only executed once. This command is only executed a second time after all counters (folders) affected by this alarm have been online again. (therefore, in the event of an alarm, briefly check all meters for your current connection).

![counter standstill](/img/_en/configuration-if-then-action/06.png)

Counter standstill

An if event can be set for a counter standstill. The following settings must be made:

- Which meter is to be monitored

- How long the meter standstill must be present until the condition is fulfilled.


Notice:

Take more than one day (1440 minutes) or at least twice the longest meter readout interval as the time unit here.

![switch states](/img/_en/configuration-if-then-action/07.png)

Switching states

Instead of monitoring the power of a meter, the switching status can also be monitored. The following settings must be made:

- Which meter is to be monitored

- Where exactly should the switching status be monitored (output or input)?

    - -   Phases

        - [Potential-free output](/schnittstellen/ein_und_ausgaenge)

        - [Digital input](/schnittstellen/ein_und_ausgaenge)


- At which state should the then action be triggered. "On", "Off" or when a state changes.


Minimum time: How long the counter must be in this state until the condition for the then action is fulfilled.

![current above / below threshold](/img/_en/configuration-if-then-action/08.png)

The function current above / below threshold enables control of loads to avoid overload situations at reference points. 

Specifically, it can serve as a trigger for pico control.

The function automatically tracks the strongest positive current of the measurement unit. 

Example 3-phase counter:

Phase 1: -5A
Phase 2: 3A
Phase 3: 7A

Resulting test current for the assessment: 7A

Then the test threshold is defined (threshold) and whether it is triggered when exceeded or fallen below.

A minimum time can also be specified.

![If / Then Actions – figure 9](/img/_en/configuration-if-then-action/09.png)

## Then-Actions

As soon as the if-events occur, the then-actions are triggered.

The following then-actions are available:

- Alarm

- Switch on/off

- Pico control


![Alarm](/img/_en/configuration-if-then-action/10.png)

Alarm

If the if-events have occurred, an e-mail is sent. The following settings must be made:

- Name of the alarm

- Subject: Subject of alarm e-mail

- Message: Text which is contained in the alarm e-mail.


Placeholders can be defined for the subject and in the message. AlarmnName and EventActionName will then be replaced by the entered "Alarm Name" and the "If-Then Event Name" respectively in the sent e-mail.

![turn on / off](/img/_en/configuration-if-then-action/11.png)

Switch on / switch off

If the if-events occur, the selected unit switches. Folders can also be selected, in which case all switchable units in this folder are switched accordingly.

Note:
Counters only have switching states if they have also been switched on in the hardware.

The following settings must be made:

- Which meter or folder should be switched?

- How should it be switched?

    - -   On

        - Off

        - Toggle


![If / Then Actions – figure 12](/img/_en/configuration-if-then-action/12.png)

## ZEV Examples

### ZEV heat pump with SG-ready control dependend on balance meter measurement

The configuration discusses the structural design of a heat pump control depending on the balance measurement with SG-Ready function.

Objective: The heat pump should be controllable in four performance levels via two electrical contacts (Telstar meters S0\_0 and S1 outputs).

SG-Ready or Smartgrid-Ready is a control logic which maps 4 states with two signals according to the following scheme:

Operating state 1: S0\_0 OFF and S1 OFF --> Heat pump OFF (0W)
Operating state 2: S0\_0 OFF and S1 ON --> Heat pump output level 1 (800W)
Operating state 3: S0\_0 ON and S1 OFF --> Heat pump output level 2 (2800W)
Operating state 4: S0\_0 ON and S1 ON --> Heat pump output level 3 (5800W)

In order to carry out such a configuration successfully, we need a so-called state machine, i.e. we must have an action for each of the 4 power levels in order to switch from one level to the next and back again.

Switching is done in the power levels:

Stage 0--> 1: Excess of >800W
Stage 1--> 2: Excess of >2000W
Stage 2--> 3: Excess of >3000W.

Stage 3 -->2: Draw >500W
Stage 2 -->1: Draw >500W
Stage 1-->0: Draw >200W

For each stage, the If statement checks which stage we are in and then checks the balance value at the same time. In the Then action, we then specify which stage to switch to if the If actions all apply.

Important: The changeover must not take place immediately and should be set to approx. 5 minutes for each stage by means of the minimum measured value time.

![If / Then Actions – figure 13](/img/_en/configuration-if-then-action/13.png)

![If / Then Actions – figure 14](/img/_en/configuration-if-then-action/14.png)

![If / Then Actions – figure 15](/img/_en/configuration-if-then-action/15.png)

1\_State 0-->1 ON

![If / Then Actions – figure 16](/img/_en/configuration-if-then-action/16.png)

1\_State 1-->2 ON

![If / Then Actions – figure 17](/img/_en/configuration-if-then-action/17.png)

1\_State 2 --> 3 ON

![If / Then Actions – figure 18](/img/_en/configuration-if-then-action/18.png)

2\_State 3 --> 2 OFF

![If / Then Actions – figure 19](/img/_en/configuration-if-then-action/19.png)

2\_State 2--> 1 OFF

![If / Then Actions – figure 20](/img/_en/configuration-if-then-action/20.png)

2\_State 1 --> 0 OFF

![If / Then Actions – figure 21](/img/_en/configuration-if-then-action/21.png)
