---
title: 'Pico Configuration'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'On this page you will find the most important configurations related to the Pico hardware.'
sidebar_label: 'Pico Configuration'
---
On this page you will find the most important configurations related to the Pico hardware. The Pico charging station is always configured via the smart-me platform first. After that, the authentication method can be enabled via a backend system (eCarUp).

![Pico Configuration – Figure 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Pico Configuration – Figure 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentication (private, semi-public, public)



The Pico charging station can be used either with or without an authentication method.



### Configuration None:

No authentication required for charging. (charges as soon as it is plugged in)



### Configuration with eCarUp backend:

To operate a Pico publicly / semi-publicly or to use any kind of unlock functions, the station must be operated in backend mode via eCarUp.

Unlock functions:

- RFID

- manual On / Off via app

- QR codes

- CarID (requires activation in the advanced settings (erweiterte Einstellungen) in the smart-me portal)




As soon as "eCarUp Backend" is selected, the station is automatically added to the eCarUp account of the same name. (same username and password as for smart-me)

You configure eCarUp in the web portal at [www.ecarup.com](http://www.ecarup.com).

Add an RFID card tag under Drivers (Fahrer) or read in a "card tag" using the eCarUp app for Android and iOS.

Details on configuring eCarUp and public charging stations can be found in the
eCarUp Wiki: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration external OCPP backend:

To integrate the Pico into a third-party backend, you only need to enter the third-party provider's backend URL on the respective charging station.

This should not be used if the station is connected via eCarUp.

Note:
The URL starts with ws:// or wss://

Pico setting in the smart-me portal:

![Pico Configuration – Figure 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

eCarUp portal menu:

![Pico Configuration – Figure 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Enter third-party backend URL:

![Pico Configuration – Figure 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration for private use with RFID authentication

1.  Navigate to Stations → Management (Stationen → Verwaltung) in the eCarUp portal

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prices (Preise) = 0 CHF, Access: Private (Zugriff: Privat)

![Pico Configuration – Figure 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration for limited use with RFID authentication (tenants with special prices)

1.  Navigate to Stations → Management (Stationen → Verwaltung) in the eCarUp portal

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Select prices (Preise)

![Pico Configuration – Figure 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Define special users and their prices

The drivers create their own account at eCarUp and give the account name to the station owner.

![Pico Configuration – Figure 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizing the Pico display

We advise against inserting a black background image, as it is then unclear whether the Pico is running or not. Especially when it is offline, it is difficult to judge remotely whether the station is defective or not connected. For this reason, we recommend that energy-conscious people add this 4-pixel image so that it can always be seen whether the station is still running locally or not. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

The name of the station and the display when not in use can be freely chosen and personalized.

In addition to the emoticons already available, you can also upload your own GIFs or images. 

- Supported formats: JPG, PNG, GIF

- Resolution: 32x32 pixels

- Size: max. 200 kB

- Background should be completely black (#000000)

- Animations (GIF) have 10 frames/s (100ms per frame)


Note: You get the best image result if, when creating and editing, you make sure that the image is uploaded at 32x32 pixels in GIF format.



\-> Create your own GIFs with [piskelapp](/drittsysteme/piskelapp) 

![Pico Configuration – Figure 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Load management and limitation

### Limiting station power

The Pico charging station can be standardized during installation.

This setting is taken into account by the automatic load management and is never overwritten.

With the maximum charging current setting, the maximum power of the station can be permanently limited. The limitation is made in 1-ampere steps.

32A = 22kW maximum power

16A = 11kW maximum power

With the minimum current setting, charging sessions are prevented or suitable minimum currents are set for a car to start charging.

Note:
There are vehicles that cannot be charged with a starting current of 6A due to the technology installed in the vehicle. In this case, the minimum current can be set higher.

![Pico Configuration – Figure 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Static load management (station group)

Static load management controls stations within the same load management group. The function ensures that the maximum current on the supply line, e.g. flat ribbon cable, is not exceeded and controls the distribution of the available current to the stations. 

The size of the charging groups is limited to 200 charging stations.

Function in detail:
The charging stations regulate themselves based on the defined maximum current. The 3-phase charging power is distributed to all active stations until the minimum set power can no longer be provided 3-phase to all charging cars. After that, the power is switched to 1-phase. All cars continue charging 1-phase with the maximum possible current per phase (phase switching). A further charging session only becomes impossible when all cars already charging have reached the 1-phase minimum. As soon as one of the charged vehicles leaves the station, the reserved charge is released for another one.

Configuration:

1.  Create load management group (New group (Neue Gruppe))

2.  Define maximum current of the supply line (Available current (Verfügbarer Strom))

3.  Define action in case of connection failure
    (For combination with multilevel load management, only the version Max. current per group (Max. Strom pro Gruppe) can be used)

4.  Add stations to the corresponding load management group (Edit (Editieren))




More details: [Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

![Pico Configuration – Figure 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Pico Configuration – Figure 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Dynamic load management and solar-optimized charging with multilevel load management (MLM)

Dynamic load management makes it possible to take a reference point into account and to control the maximum currents at this reference point. In e-mobility, either the building connection point or the distribution point is chosen for this.

[Planning load management](/planung/elektromobilitaet) 

The following products are suitable as hardware for the reference measurement:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


Dynamic load management is configured via smart-me multilevel load management.

Details and examples can be found here: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

Accordingly, taking into account the current flowing at this reference point, you can influence the maximum currents of the station groups.

![Pico Configuration – Figure 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Load shedding

Hardware load shedding (external inputs of the Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico load shedding in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Spreadsheet, Pico load shedding" />

Pico load shedding

Load shedding can also be implemented with only one available signal. 

For the configuration from no charging to maximum charging power, the signal is wired to IN1 and IN2 as well as COM. For the configuration from 6A minimum power to maximum charging power, the signal only needs to be wired to IN2 and COM.

COM is the neutral conductor; IN1 and IN2 must be supplied with a voltage for the ON signal. IN1 and IN2 do not generate any voltage; it must be provided externally.

Attention:
Load shedding can be wired either to all Picos or at least to one from each static load group.
This function is also guaranteed without internet!

Cloud-based load shedding via MLM

Load shedding can also be implemented via multilevel load management. The advantage is that no signal needs to be connected to the Pico hardware; instead, a signal is applied to any other hardware (meter) and used as a trigger.

The disadvantage, however, is that the function is not executed if there is no internet connection.

More details on the setup: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

![Pico Configuration – Figure 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Advanced actions

Here, as the station owner, you can unlock the cable, restart the station or show the meter reading on the display for verification.

![Pico Configuration – Figure 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Advanced settings

Automatic car detection (Automatische Auto Erkennung):
For CarID authentication to work, you must enable the communication between the station and the vehicle.

Modbus TCP:
Activates the Modbus TCP interface of the Pico

Delete station (Station löschen):
Deletes the station and all data in the cloud

![Pico Configuration – Figure 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Always lock cable (Kabel immer fest verriegeln)

Charging cables can be locked on the Pico charging station.

Procedure:
Plug in cable --> Log in to smart-me portal --> Select Pico --> Select gear icon at top right --> Advanced settings (erweiterte Einstellungen) --> Always lock cable (Kabel immer fest verriegeln). 

Note: 

- The car must not be plugged in when the cable is being locked.

- If the power supply is interrupted or the Pico is restarted, the cable is briefly unlocked and locked again on startup.


Prerequisite: The Pico must have at least communication version 0.0.7. Picos manufactured before 31.12.2022 may be affected.

![Always lock cable](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
