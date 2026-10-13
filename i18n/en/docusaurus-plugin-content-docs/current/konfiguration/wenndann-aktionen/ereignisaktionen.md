---
title: 'Event-related Actions'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'Automatic controls can be created for every device in the smart-me platform.'
sidebar_label: 'Event-related Actions'
---
Automatic controls can be created for every device in the smart-me platform. There are two ways to define such actions: you can create either event actions or [if/then actions](/konfiguration/wenndann-aktionen). This article explains event actions.

## Event actions, only for Single Phase Meter and 3-Phase Meter Telstar

Event actions are stored on the  device itself, so they also work without an internet connection, e.g. when the Wi-Fi router is switched off. For this to work, however, the actions you define must not require an internet connection. Sending an email obviously does not work without internet.  Up to 16 event actions can be stored on the devices, and they can be created and edited in the app or in the web portal.

Possible triggers:

- -   Power greater / less than xx

    - Time of day

    - Current less/greater (on one phase) (only with the [3-Phase Meter Telstar](/))

    - Digital input (On/ Off) (only with the [3-Phase Meter Telstar](/))




Possible actions:

- -   [Alarm email](/konfiguration/wenndann-aktionen/alarme)

    - Switch power on/off (only with the [3-Phase Meter Telstar](/))

    - Toggle power on/off (no longer supported)

    - Switch power on/off on another device (no longer supported)

    - Toggle power on/off on another device (no longer supported)


## Creating an event action

Event actions can be created in the app or in the web portal .

### App

- Log in to your smart-me user account

- Select a meter

- Now click on the gear icon at the top right

- Click on "Event actions" (Ereignisaktionen) - "Add event action" (Ereignisaktion hinzufügen)


### Website

- Log in to the [web login](https://web.smart-me.com/login/)

- Click on the desired meter

- Click on the gear icons on the right

- Click on Add event action (Ereignisaktion hinzufügen)


### Defining an event action

Now you can define event actions (up to 16). Three settings are required for this:

- Event -> As soon as this occurs, the action is triggered

- Action -> Defines what should be done when the event occurs

- Name -> The name of the event action


## Events

The event defined here triggers an action. The following events are available:

### Power less / greater than

Example: Event -> If power is less than 10 watts, switch off

Remarks:

- The action (in this example "Switch power off") is only executed when the corresponding event has occurred, i.e. a change in power from greater than 10 watts to less than 10 watts

- If the power is switched back on manually, it stays on until the event occurs again.

- With fluctuating power, this condition could occur several times in succession. This can lead to undesired effects, which is why a so-called hysteresis is used. This means that the threshold (in this example 10 watts) is increased by 3 watts on the second activation.


### Time of day

You can define a point in time from which the action is to be executed. If certain weekdays are to be excluded from this rule, they must be marked (red)

Example: Event -> The power is always switched off at 9 a.m., but not at weekends.

Remarks:

- The action (in this example "Switch power off") is only executed when the corresponding event has occurred, i.e. a change of time from 08:59 to 09:00.

- If the power is switched back on manually, it stays on until the event occurs again.


## Actions

A wide range of actions is available. These can of course be combined with any of the events mentioned.

### Switch power on / Switch power off

The smart-me device switches itself on or off. 

Example: The power is always switched off at 9 a.m., but not at weekends.

### Toggle power (on/off)

The smart-me device can switch itself on or off. Depending on the device's current state, the smart-me device switches from on to off or from off to on. (Applies only to the 32A Meter)

### Alarm email

The smart-me device can notify you by email as soon as the event has occurred. This only works if the smart-me device has an internet connection.

Example: As soon as the consumed power is less than 10 watts, an email is sent.

### Switch power on on another device / Switch power off on another device

The smart-me device can not only switch itself on or off, it can also control other smart-me devices (only works if both smart-me devices have a Wi-Fi/internet connection). Please also note that only the 32A Meter can switch)

### Toggle power (on/off) on another device

The smart-me device can not only switch itself on or off, it can also control other smart-me devices (only works if both smart-me devices have a Wi-Fi/internet connection). Please also note that only the 32A Meter can switch)
