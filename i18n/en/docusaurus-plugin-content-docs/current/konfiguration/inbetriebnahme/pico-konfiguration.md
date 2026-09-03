---
title: 'Pico Configuration'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'On this page you will find the most important configurations related to the Pico hardware.'
sidebar_label: 'Pico Configuration'
---
On this page you will find the most important configurations related to the Pico hardware. The configuration of the Pico charging station is always done via the smart-me platform in the first step. Subsequently, the authentication method can be enabled via a backend system (eCarUp).

![Pico Configuration – figure 1](/img/_en/configuration-commissioning-pico-configuration/01.png)

![Pico Configuration – figure 2](/img/_en/configuration-commissioning-pico-configuration/02.png)

## Authentication (private, semi-public, public)

The Pico charging station can be used with or without the authentication method.

### Configuration None:

No authentication required for charging. (Charges as soon as plugged in)



### Configuration with eCarUp backend:

To operate a Pico publicly, semi-publicly, or to use any kind of unlocking functions, the station must be operated in backend mode using eCarUp.

Unlocking functions:

- RFID

- manual On / Off via App

- QR codes

- CarID (requires activation in the advanced settings in the smart-me portal)


As soon as "Backend" is selected, the station is automatically added to the eCarUp account of the same name. (same username and password as for smart-me). Details on the configuration of eCarUp and public charging stations can be found in our eCarUp Wiki: https://ecarupwiki.smart-me.com 



### Configuration with third-party backend via OCPP

To integrate the Pico into a third-party backend, you only need to enter the backend URL of the third-party provider on the respective charging station.

This should not be used if the station is connected via eCarUp.

Note: The URL begins with ws:// or wss://

Pico setting in the smart-me portal:

![Pico Configuration – figure 3](/img/_en/configuration-commissioning-pico-configuration/03.png)

eCarUp Portal:

![Pico Configuration – figure 4](/img/_en/configuration-commissioning-pico-configuration/04.png)

3rd-Party Backend Menu:

![Pico Configuration – figure 5](/img/_en/configuration-commissioning-pico-configuration/05.png)

### Configuration for private use with RFID authentication



1.  Navigate to Stations → Administration in the eCarUp Portal

2.  Edit →  Edit connection


![Pico Configuration – figure 6](/img/_en/configuration-commissioning-pico-configuration/06.png)



prices = 0 CHF, Zugriff: Privat

![Pico Configuration – figure 7](/img/_en/configuration-commissioning-pico-configuration/07.png)

![Pico Configuration – figure 8](/img/_en/configuration-commissioning-pico-configuration/08.png)

### Configuration for limited use with RFID authentication (tenants with special rates)

1.  Navigate to Stations → Administration in the eCarUp Portal

2.  Edit →  Edit connection


![Pico Configuration – figure 9](/img/_en/configuration-commissioning-pico-configuration/06.png)

3\. choose prices

![Pico Configuration – figure 10](/img/_en/configuration-commissioning-pico-configuration/07.png)

4\. define special users and their prices

The drivers create their own account at eCarUp and communicate the account name to the station owner for registration in the station.

![Pico Configuration – figure 11](/img/_en/configuration-commissioning-pico-configuration/11.png)

## Personalising the Pico display

The name of the station can be freely chosen and the display can be personalised if not used. In addition to the designs already available, you can also upload your own GIFs or images.

- Supported formats: JPG, PNG, GIF

- Resolution: 32x32 pixels

- Size: max. 200 kB

- Background should be completely black (#000000)

- Animations (GIF) have 10 frames/s (100ms per frame)


Note: You will get the best image result if you make sure that the image is uploaded 32x32 pixels in GIF format during creation and editing.

![Pico Configuration – figure 12](/img/_en/configuration-commissioning-pico-configuration/12.png)

## Load management and current limitation

### Limit station power

The Pico charging station can be limited by default when installed. This setting is taken into account by the automatic load management and is never overwritten.

With the maximum charging current setting, the maximum power of the station can be fixed. The limit can be set in 1 ampere steps.

32A = 22kW maximum power

16A = 11kW maximum power

The minimum current setting can be used to prevent charging or to set suitable minimum currents to start charging a car.

Note: There are vehicles that cannot start charging with a starting current of 6A, this is due to the technology installed in the vehicle. If this is the case, the minimum current can be set higher.

![Pico Configuration – figure 13](/img/_en/configuration-commissioning-pico-configuration/13.png)

### Static load management (station group)

Static load management regulates stations within the same load management group. The function prevents the maximum current on the supply line, e.g. ribbon cable, from being exceeded and regulates the distribution of the available current to the stations. 

The static charging group size is limited to 200 chargers.

Function in detail:
The charging stations regulate themselves on the basis of the defined maximum available current. The 3-phase charging power is distributed to all charging stations until the set minimum charging power in 3-phase can no longer be made available to all charging cars. After that, charging is switched to 1-phase. All cars continue to charge 1-phase with the maximum possible current per phase (phase switching). Further charging only becomes impossible when all cars already charging have reached the set minimum in 1-phase. As soon as one of the charged vehicles leaves the charging station, the reserved charge is released for another one.

Configuration:

1.  Create load management group (New group)

2.  Define the maximum current of the supply line

3.  Define action in the event of connection failure
    (For combination with multi-level load management, only the max. current per group can be used)

4.  Add stations to the corresponding load management group (Edit)


Learn more: [Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

![Pico Configuration – figure 14](/img/_en/configuration-commissioning-pico-configuration/14.png)

![Pico Configuration – figure 15](/img/_en/configuration-commissioning-pico-configuration/15.png)

### Dynamic load management with multilevel load management (MLM)

Dynamic load management enables the consideration of a reference point and the control of the maximum currents at this reference point.In e-mobility, either the house connection point or the distribution point is selected for this purpose.

[Planning load management](/planung/elektromobilitaet) 

The following products are suitable as hardware for reference measurement:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


The configuration of the dynamic load management is done via the multilevel loadmanagement function of smart-me.

Details and examples you can find here:  [Multilevel load management](/konfiguration/multilevel-lastmanagement)

Accordingly, you can have a flowing influence on the station groups maximum currents, taking into account the current at this reference point.

![Pico Configuration – figure 16](/img/_en/configuration-commissioning-pico-configuration/16.png)

### Load shedding

Hardware load shedding (external Pico inputs)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Video src="" title="Video" />

Pico Lastabwurf

Load shedding can also be realised using only one available signal. For the configuration from no charge to maximum charge power, the signal is wired to IN1 and IN2 as well as COM. For the configuration from 6A minimum power to maximum charging power, the signal must only be wired to IN2 as well as COM.

COM is the neutral conductor, IN1 and IN2 must be provided with a voltage at the ON signal. IN1 and IN2 do not generate voltage, this must be provided externally.

Attention:
The load shedding can either be wired to all Picos or minimally to one from each static load group.
This function is also functional if there is no internet connection but Wifi.

Cloud based load shedding

The load shedding can also be realized with the multilevel load management (MLM). The advantage is that no signal has to be connected to the Pico hardware, instead a signal on any other hardware (counter) can be applied and be used as a trigger.

The disadvantage though is that the function can not be executed if there is no internet connection.

More details on setup: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

![Pico Configuration – figure 17](/img/_en/configuration-commissioning-pico-configuration/17.png)

## Commands

Here you can unlock the cable, restart the station or show the counter reading on the display for verification.

![Pico Configuration – figure 18](/img/_en/configuration-commissioning-pico-configuration/18.png)

## Advanced settings

- Auto Car Detection: For CarID authentication to work, you must enable the station's communication to the vehicle.

- Modbus TCP: Enable Pico's Modbus TCP interface.

- Delete station: Deletes the station and all data on the cloud.


![Pico Configuration – figure 19](/img/_en/configuration-commissioning-pico-configuration/19.png)

### Fix cable lock

Charging cables can be permanently locked to the Pico charging station.

Procedure:
Plug in cable --> Login smart-me portal --> Select Pico --> Select top right gear --> Advanced settings --> Fix cable lock

Note: 

- The car must not be plugged in when fixing the cable.

- If the power supply is interrupted or the Pico is restarted, the cable is briefly unlocked and locked again when it is restarted.


Prerequisite: The Pico must have at least communication version 0.0.7 for this. Picos produced before 31.12.2022 may be affected.

![Fix cable lock](/img/_en/configuration-commissioning-pico-configuration/20.png)
