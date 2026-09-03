---
title: 'Pico Configuration'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'On this page you will find the most important configurations relating to the Pico hardware.'
sidebar_label: 'Pico Configuration'
---
On this page you will find the most important configurations relating to the Pico hardware. The configuration of the Pico charging station is always carried out via the smart-me platform in the first step. The authentication method can subsequently be enabled via a backend system (eCarUp).

![Pico Configuration – Figure 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Pico Configuration – Figure 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentication (private, semi-public, public)



The Pico charging station can be used with or without an authentication method.



### None configuration:

No authentication required for charging. (charges as soon as plugged in)



### Configuration with eCarUp backend:

To operate a Pico publicly / semi-publicly or to use any type of activation function, the station must be operated in backend mode using eCarUp.

Activation functions:

- RFID

- manual On / Off via app

- QR codes

- CarID (requires activation in the advanced settings in the smart-me portal)




As soon as "eCarUp Backend" is selected, the station is automatically added to the eCarUp account of the same name. (same username and password as with smart-me)

You carry out the configuration of eCarUp in the web portal at [www.ecarup.com](http://www.ecarup.com).

Under Drivers, add an RFID card tag or read in a "card tag" using the eCarUp app for Android and iOS.

Details on configuring eCarUp and public charging stations can be found in the
eCarUp wiki: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration of an external OCPP backend:

To integrate the Pico into a third-party backend, you only need to enter the third-party backend URL on the respective charging station.

This should not be used if the station is connected via eCarUp.

Note:
The URL begins with ws:// or wss://

Pico setting in the smart-me portal:

![Pico Configuration – Figure 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

eCarUp portal menu:

![Pico Configuration – Figure 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Entering the third-party backend URL:

![Pico Configuration – Figure 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration for private use with RFID authentication

1.  Navigate to Stations → Administration (Stationen → Verwaltung) in the eCarUp portal

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prices = 0 CHF, Access: Private

![Pico Configuration – Figure 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration for limited use with RFID authentication (tenants with special prices)

1.  Navigate to Stations → Administration (Stationen → Verwaltung) in the eCarUp portal

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Select prices

![Pico Configuration – Figure 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Define special users and their prices

The drivers create their own account with eCarUp and share the account name with the station owner.

![Pico Configuration – Figure 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizing the Pico display

We advise against inserting a black background image, as it is then unclear whether the Pico is running or not. Especially when it is offline, it is difficult to judge from a distance whether the station is faulty or not connected. For this reason, we recommend that energy-conscious people add this 4-pixel image so that it is always possible to tell whether the station is still running locally or not. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

The name of the station and the display when not in use can be freely chosen and personalized.

In addition to the emoticons already available, you can also upload your own GIFs or images. 

- Supported formats: JPG, PNG, GIF

- Resolution: 32x32 pixels

- Size: max. 200 kB

- The background should be completely black (#000000)

- Animations (GIF) have 10 frames/s (100ms per frame)


Note: You will get the best image result if, when creating and editing, you make sure that the image is uploaded at 32x32 pixels in GIF format.



\-> Create your own GIFs with [piskelapp](/drittsysteme/piskelapp) 

![Pico Configuration – Figure 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Load management and limiting

### Limiting the station power

The Pico charging station can be standardized during installation.

This setting is taken into account by the automatic load management and is never overwritten.

The maximum power of the station can be permanently limited with the maximum charging current setting. The limitation is carried out in 1 amp steps.

32A = 22kW maximum power

16A = 11kW maximum power

The minimum current setting is used to prevent charging or to set suitable minimum currents for starting to charge a car.

Note:
There are vehicles that cannot be charged with a starting current of 6A due to the technology installed in the vehicle. In this case, the minimum current can be set higher.

![Pico Configuration – Figure 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Static load management (station group)

Static load management controls stations within the same load management group. The function prevents the maximum current on the supply line, e.g. flat ribbon cable, from being exceeded and controls the distribution of the available current among the stations. 

The size of the charging groups is limited to 200 charging stations.

Function in detail:
The charging stations regulate themselves based on the defined maximum current. The 3-phase charging power is distributed among all active stations until the minimum set power can no longer be provided 3-phase to all charging cars. The power is then switched to 1-phase. All cars continue to charge 1-phase with the maximum possible current per phase (phase switching). Further charging only becomes impossible once all cars already charging have reached the 1-phase minimum. As soon as one of the charged vehicles leaves the station, the reserved charge is released for another one.

Configuration:

1.  Create load management group (New group)

2.  Define the maximum current of the supply line (Available current)

3.  Define the action in the event of a connection failure
    (For combination with multilevel load management, only the Max. current per group version can be used)

4.  Add stations to the corresponding load management group (Edit)




More details on this: [Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

![Pico Configuration – Figure 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Pico Configuration – Figure 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Dynamic load management and solar-optimized charging with multilevel load management (MLM)

Dynamic load management makes it possible to take a reference point into account and to control the maximum currents at this reference point. In e-mobility, either the house connection point or the distribution point is chosen for this.

[Planning load management](/planung/elektromobilitaet) 

The following products are suitable as hardware for the reference measurement:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


Dynamic load management is configured via smart-me's multilevel load management.

You will find details and examples here: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

Accordingly, you can continuously influence the maximum currents of the station groups by taking the current flowing at this reference point into account.

![Pico Configuration – Figure 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Load shedding

Hardware load shedding (external inputs of the Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico load shedding in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" title="Spreadsheet, Pico load shedding" />

Pico load shedding

Load shedding can also be implemented using just one available signal. 

For the configuration from no charging to maximum charging power, the signal is wired to IN1 and IN2 as well as COM. For the configuration from 6A minimum power to maximum charging power, the signal only has to be wired to IN2 and COM.

COM is the neutral conductor, IN1 and IN2 must be supplied with a voltage for the ON signal. IN1 and IN2 do not generate any voltage, this must be provided externally.

Caution:
Load shedding can either be wired to all Picos or, at minimum, to one from each static load group.
This function is also guaranteed without internet!

Cloud-based load shedding via MLM

Load shedding can also be implemented via multilevel load management. The advantage is that no signal has to be connected to the Pico hardware; instead, a signal is applied to any other hardware (meter) and used as a trigger.

The disadvantage, however, is that the function is not carried out if there is no internet connection.

More details on the setup: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

![Pico Configuration – Figure 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Advanced actions

Here, as the station owner, you can unlock the cable, restart the station or show the meter reading on the display for checking.

![Pico Configuration – Figure 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Advanced settings

Automatic car detection:
For the CarID authentication to work, you must enable communication between the station and the vehicle.

Modbus TCP:
Activating the Modbus TCP interface of the Pico

Delete station:
Deletes the station and all data in the cloud

![Pico Configuration – Figure 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Always lock the cable permanently

Charging cables can be locked at the Pico charging station.

Procedure:
Plug in cable --> Log in to smart-me portal --> Select Pico --> Select the gear icon at the top right --> Advanced settings --> Always lock the cable permanently (Kabel immer fest verriegeln). 

Note: 

- The car must not be plugged in when fixing the cable.

- If the power supply is interrupted or the Pico is restarted, the cable is briefly unlocked and locked again during start-up.

The prerequisite is: the Pico must have at least communication version 0.0.7 for this. Picos manufactured before 31.12.2022 may be affected.

![Always lock the cable permanently](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
