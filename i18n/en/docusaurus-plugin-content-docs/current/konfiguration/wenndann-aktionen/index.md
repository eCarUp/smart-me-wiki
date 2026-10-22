---
title: 'If / Then Actions'
slug: '/konfiguration/wenndann-aktionen'
description: 'To use if/then actions, you need a smart-me Limited or Professional license.'
sidebar_label: 'If / Then Actions'
---
## Requirements

To use if/then actions, you need a smart-me Limited or Professional license.

To use the if/then action Pico control, you need a smart-me Professional license.

![If/then actions – figure 1](/img/konfiguration-wenndann-aktionen/01.png)

## What IF / THEN actions are used for

- Tariff time basis for dual and multiple tariffs in Billing

- Controls with the meter inputs and outputs 

- Alarms such as connection interruptions and meter standstills


[Define tariff times](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[IF / THEN boiler control](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Define alarms](/konfiguration/wenndann-aktionen/alarme)

Automatic controls can be created for any device on the smart-me platform. There are two ways to define such actions. You either create [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen) or if/then actions. This article explains if/then actions.  Compared to event actions, more complex triggers and actions can be defined:

- -   multiple triggers (AND and OR conditions) are possible

    - multiple actions are possible

    - a group of meters can be monitored / switched

    - connection monitoring

    - meter standstill


## If/then actions

If/then actions are stored in the cloud and therefore only work if the device concerned has a WiFi connection. You can create an unlimited number of if/then actions for all smart-me devices. If/then actions can only be created and edited in the web portal. 

### Procedure

1.  Log in to our [website](https://web.smart-me.com/login/) with your username and password

2.  Click Configuration (Konfiguration)

3.  Click the If/Then Actions (Wenn /Dann-Aktionen) tile

4.  Click the + symbol to create a new action, or click an existing one to edit it.


## Requirements for working if/then actions:

1.  At least one if event must be defined, as this triggers the action. If several if events have been defined, they can be linked with AND and OR commands.

2.  At least one then action must be defined (exception for conditions for tariffs). If several then actions have been defined, they are all executed simultaneously as soon as the if condition(s) have been met.

3.  A name for this action


## If events

The following if events (triggers) are available:

![Measured value greater / less than](/img/konfiguration-wenndann-aktionen/02.png)

Measured value greater/less than

- Define which energy meter is to be monitored.

    Entire folders can also be selected; in that case, the average value of all meters in this folder is monitored. You can use any energy meter that is connected to the cloud. So in addition to electricity meters, also gas, heat or water meters (gateway). 


The test value always refers to the main attribute. 

- For electricity meters, the 3-phase power in W or kW.

- For heat or cooling meters, W or kW.

- For water meters and gas meters, m3/h.


Also specify how long the measured value must be below or above the threshold to trigger the then action.

![If/then actions – figure 3](/img/konfiguration-wenndann-aktionen/03.png)

![Date & time](/img/konfiguration-wenndann-aktionen/04.png)

Date and time

You can define individual events or time spans as an if event. 

A distinction is made between the following variants:

- Individual events

- Time span events


Individual events:

Individual events are always executed at a specific point in time. If this was not possible at that time for technical reasons (e.g. no internet), the command is only repeated the next time the condition occurs. This variant is suitable if other sources are to change the affected switching state in the meantime.

Time span events:

Time span events are checked and repeated every 5 minutes within the defined time span. The switching state would be changed as soon as the technical problems are resolved, but this prevents external intervention in the controlled switching states.

![If/then actions – figure 5](/img/konfiguration-wenndann-aktionen/05.png)

![No connection](/img/konfiguration-wenndann-aktionen/06.png)

No connection

An if event can be defined for meters disconnected from the cloud. The following settings must be made:

- Which meter / folder is to be monitored

- How long the connection must be interrupted, in minutes


Tip: If a folder is selected, all meters hierarchically below it are monitored.

Note: 

This if action is only executed once. This command is only executed again after all meters (folders) affected by this alarm have been back online.
(in the event of an alarm, therefore briefly check all meters for their current connection)

![Meter standstill](/img/konfiguration-wenndann-aktionen/07.png)

Meter standstill

An if event can be defined for a meter standstill. The following settings must be made:

- Which meter is to be monitored

- How long the meter standstill must last until the condition is met.


Note: 

Use more than one day (1440 minutes) as the time unit here, or at least twice the longest meter reading interval.

![Switching states](/img/konfiguration-wenndann-aktionen/08.png)

Switching states

Instead of monitoring the power of a meter, the switching state can also be monitored. The following settings must be made:

- Which meter is to be monitored

- Where exactly the switching state is to be monitored (output or input)

    - Phases (only 3-phase meter 32A and Plug)

    - [Potential-free output](/schnittstellen/ein-und-ausgaenge)

    - [Digital input](/schnittstellen/ein-und-ausgaenge)

- In which state the then action is to be triggered: "On", "Off" or when a state changes.

- Minimum time: How long the meter must be in this state until the condition for the then action is met.


![Current greater / less than](/img/konfiguration-wenndann-aktionen/09.png)

The currents greater / less than function enables loads to be controlled in order to avoid overload situations at reference points. 

Specifically, it can serve as a trigger for a Pico control.

The function automatically tracks the highest positive current of the device. 

Note: This also applies when the threshold "below" is selected.

Example 3-phase meter:

Phase 1: -5A
Phase 2: 3A
Phase 3: 7A

Resulting test current for the evaluation: 7A

Then the test threshold is defined (threshold), as well as whether the trigger occurs when it is exceeded or undershot.

A minimum time can also be specified.

![If/then actions – figure 10](/img/konfiguration-wenndann-aktionen/10.png)

## Then actions

As soon as the if events occur, the then actions are triggered.

The following then actions are available:

- Alarm

- Switch on/off

- Pico control (dynamic load management for the EV charging stations and solar optimization)


![Alarm](/img/konfiguration-wenndann-aktionen/11.png)

[Alarm](/konfiguration/wenndann-aktionen/alarme)

When the if events have occurred, an e-mail is sent. The following settings must be made:

- Name of the alarm

- Subject: subject of the alarm e-mails

- Message: text contained in the alarm e-mail


Placeholders can be defined in the subject and in the message. AlarmnName and EventActionName are then replaced in the sent e-mail by the entered "alarm name" or the "if/then event name" respectively.

![Switch on / off](/img/konfiguration-wenndann-aktionen/12.png)

Switch on/off

When the if events occur, the selected device switches. Folders can also be selected; in that case, all switchable devices in this folder are switched accordingly.

Note: Meters only have switching states if these have also been enabled on the hardware.

The following settings must be made:

- Which meter or folder is to be switched

- How should it be switched?

    - On

    - Off

    - Toggle (smart-me Plug only)


![If/then actions – figure 13](/img/konfiguration-wenndann-aktionen/13.png)

## Examples: boiler control with IF/THEN

[Example boiler control](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Examples: ZEV controls

### ZEV heat pump with SG-Ready control based on the balance measurement value

This configuration discusses the structural setup of a heat pump control depending on the balance measurement with SG-Ready function.

Goal: The heat pump is to be controllable in four power levels via two electrical contacts (meter Telstar S0\_0 and S1).

SG-Ready or Smartgrid-Ready is a control logic that maps 4 states with two signals according to the following scheme:

Operating state 1: S0\_0 OFF and S1 OFF --> heat pump OFF (0W)
Operating state 2: S0\_0 OFF and S1 ON --> heat pump power level 1 (800W)
Operating state 3: S0\_0 ON and S1 OFF --> heat pump power level 2 (2800W)
Operating state 4: S0\_0 ON and S1 ON --> heat pump power level 3 (5800W)

To carry out such a configuration successfully, a so-called state machine is required.
For 4 power levels, we therefore need one action each to switch from one level to the next and back again.

Switching takes place in the following power levels:

Level 0--> 1: surplus of >800W
Level 1--> 2: surplus of >2000W
Level 2--> 3: surplus of >3000W

Level 3 -->2: consumption of >500W
Level 2 -->1: consumption of >500W
Level 1-->0: consumption of >200W

For each level, the if statement checks which level we are in and at the same time also checks the balance value.
In the then action, we specify which level to switch to if all the if actions apply.

Important: Switching must not take place immediately and should be set to approx. 5 minutes for each level using the measured value minimum time.

![If/then actions – figure 14](/img/konfiguration-wenndann-aktionen/14.png)

![If/then actions – figure 15](/img/konfiguration-wenndann-aktionen/15.png)

![If/then actions – figure 16](/img/konfiguration-wenndann-aktionen/16.png)

Action 1: 1\_Stufe 0 --> 1 ON

![If/then actions – figure 17](/img/konfiguration-wenndann-aktionen/17.png)

Action 2: 1\_Stufe 1 --> 2 ON

![If/then actions – figure 18](/img/konfiguration-wenndann-aktionen/18.png)

Action 3: 1\_Stufe 2 --> 3 ON

![If/then actions – figure 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![If/then actions – figure 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![If/then actions – figure 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![If/then actions – figure 22](/img/konfiguration-wenndann-aktionen/22.png)

### ZEV heat pump with SG-Ready control based on the balance measurement value

This configuration discusses the structural setup of a heat pump control depending on the balance measurement with SG-Ready function.

Goal: The heat pump is to be controllable in four power levels via two electrical contacts (meter Telstar S0\_0 and S1).

SG-Ready or Smartgrid-Ready is a control logic that maps 4 states with two signals according to the following scheme:

Operating state 1: S0\_0 OFF and S1 OFF --> heat pump OFF (0W)
Operating state 2: S0\_0 OFF and S1 ON --> heat pump power level 1 (800W)
Operating state 3: S0\_0 ON and S1 OFF --> heat pump power level 2 (2800W)
Operating state 4: S0\_0 ON and S1 ON --> heat pump power level 3 (5800W)

To carry out such a configuration successfully, a so-called state machine is required.
For 4 power levels, we therefore need one action each to switch from one level to the next and back again.

Switching takes place in the following power levels:

Level 0--> 1: surplus of >800W
Level 1--> 2: surplus of >2000W
Level 2--> 3: surplus of >3000W

Level 3 -->2: consumption of >500W
Level 2 -->1: consumption of >500W
Level 1-->0: consumption of >200W

For each level, the if statement checks which level we are in and at the same time also checks the balance value.
In the then action, we then specify which level to switch to if all the if actions apply.

Important: Switching must not take place immediately and should be set to approx. 5 minutes for each level using the measured value minimum time.

![If/then actions – figure 23](/img/konfiguration-wenndann-aktionen/14.png)

![If/then actions – figure 24](/img/konfiguration-wenndann-aktionen/15.png)

![If/then actions – figure 25](/img/konfiguration-wenndann-aktionen/16.png)

Action 1: 1\_Stufe 0 --> 1 ON

![If/then actions – figure 26](/img/konfiguration-wenndann-aktionen/17.png)

Action 2: 1\_Stufe 1 --> 2 ON

![If/then actions – figure 27](/img/konfiguration-wenndann-aktionen/18.png)

Action 3: 1\_Stufe 2 --> 3 ON

![If/then actions – figure 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![If/then actions – figure 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![If/then actions – figure 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![If/then actions – figure 31](/img/konfiguration-wenndann-aktionen/22.png)

[Define tariff times](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[IF / THEN boiler control](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Define alarms](/konfiguration/wenndann-aktionen/alarme)
