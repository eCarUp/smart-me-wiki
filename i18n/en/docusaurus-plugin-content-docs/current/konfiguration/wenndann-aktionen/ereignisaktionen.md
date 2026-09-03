---
title: 'Event-related Actions'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'Automatic controls can be created for each device in the smart-me platform.'
sidebar_label: 'Event-related Actions'
---
Automatic controls can be created for each device in the smart-me platform. There are two ways of defining such actions. Either event-related actions or [if / then actions](/konfiguration/wenndann-aktionen) are created. This article explains event-related actions.

## Event actions, only for single phase meter, and 3-phase meter Telstar

Event actions are saved on the device itself, therefore they also work without an internet connection, e.g. when the WLAN router is switched off. For this, however, actions must be defined that do not require an internet connection. Of course, sending an e-mail does not work without the internet. Up to 16 event actions can be created, edited and saved per device. 

### Possible triggers:

- Temperature higher / lower than xx (only with [plug](/produkte/plug))

- Power greater / less than xx

- Button pressed (only with [plug](/produkte/plug))

- Time

- Current lower / higher (on one phase) (only with the [3-phase meter Telstar](/))

- Digital input (On / Off) (only with the [3-phase meter Telstar](/))


### Possible actions:

- Send email

- Switch power on / off  (only with the [3-phase meter Telstar](/))

- Toggle power on / off (is no longer supported)

- Switch power on / off on other device (is no longer supported)

- Toggle power on / off on other device (is no longer supported)


## Create event-related action

Event actions can be created in the app or in the web portal.

### App

1.  Log into your smart-me user account

2.  Choose a plug or a counter

3.  Now click on the gear in the upper right corner

4.  Click on "Event Actions" - "Add Event Action"


### Website

1.  Log in to the weblogin

2.  Click the counter you want

3.  Right click on "Edit"

4.  Click Add Event Action

5.  Define event action


### Event actions can now be defined (up to 16). Three settings must be made for this:

- Event -> As soon as this occurs, the action is triggered

- Action -> Defines what should be done when the event occurs

- Name -> The name of the event action


## Events

The event defined here triggers an action. The following events are available:

### Temperature smaller / greater than

Example: Event -> If temperature is less than 5 degrees, switch on plug.

Remarks:

- The action (in this example "Switch on power") is only carried out if the corresponding event has occurred, i.e. a temperature change from greater than 5 degrees to less than 5 degrees.

- If the power is manually switched off again, it remains switched off until the event occurs again.

- With varying temperatures, it would be possible for this condition to occur several times in a row. This can lead to undesirable effects, which is why a so-called hysteresis is used. This simply means that the threshold value (5 degrees in this example) increases by 3 degrees the second time it is activated.


### Power smaller / greater than

Example: Event -> If power is less than 10 watts, switch off plug

Remarks:

- The action (in this example "Switch off power") is only carried out if the corresponding event has occurred, i.e. a power change from greater than 10 watts to less than 10 watts.

- If the power is switched on again manually, it remains switched on until the event occurs again.

- With varying powers, it would be possible for this condition to occur several times in a row. This can lead to undesirable effects, which is why a so-called hysteresis is used. This means that the threshold value (10 watts in this example) increases by 3 watts with the second activation.


### Button pressed (plug only)

Example: Event -> When the button is pressed, the plug switches from on to off or from off to on

### Time

A time can be defined from when the action is to be carried out. If certain days of the week are to be excluded from this rule, they must be marked (red).

Example: Event -> The power is always switched off at 9 a.m., but not on weekends.

Remarks:

- The action (in this example "Switch off power") is only carried out if the corresponding event has occurred, i.e. a change of time from 08:59 to 09:00.

- If the power is switched on again manually, it remains switched on until the event occurs again.


## Actions

There are various actions to choose from. These can of course be combined with any of the events mentioned.

### Switch on power / Switch off power

The smart-me device switches itself on or off. 

Example: The power is always switched off at 9 a.m., but not at the weekend.

### Alarm e-mail

The smart-me device can inform you by e-mail as soon as the event has occurred. This only works if the smart-me device has an internet connection.

Example: As soon as the power consumed is less than 10 watts, an e-mail is sent.

### Switch on power on other unit / Switch off power on other unit

The smart-me device can not only switch itself on or off, but it can also control other smart-me devices (only works if both smart-me devices have a WLAN/Internet connection). Also note that only the plug and the 32A meter can switch).

Example: The Plug in the living room measures the temperature, as soon as it falls below 5 degrees, the Plug 2 switches on the heating in the cellar.

### Switch power (on/off) on other unit

The smart-me device can not only switch itself on or off, but it can also control other smart-me devices (only works if both smart-me devices have a WLAN/Internet connection). Also note that only the plug and the 32A meter can switch).

Example: With the Plug next to the front door (or with its button), the floor lamp in the living room (which is plugged into Plug 2) can be switched on and off.
