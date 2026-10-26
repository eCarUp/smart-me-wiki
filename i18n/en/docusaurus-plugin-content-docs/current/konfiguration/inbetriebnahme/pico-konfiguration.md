---
title: 'Pico Configuration'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'This page covers the most important configuration settings for the Pico hardware.'
sidebar_label: 'Pico Configuration'
displayed_sidebar: wikiSidebar
---
This page covers the most important configuration settings for the Pico hardware. You always start configuring the Pico charging station on the smart-me platform. After that, you can enable authentication through a backend system (eCarUp).

![Pico Configuration – Figure 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Pico Configuration – Figure 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentication (private, semi-public, public)



You can use the Pico charging station with or without authentication.



### Configuration None:

No authentication is needed to charge. (Charging starts as soon as the vehicle is plugged in.)



### Configuration with eCarUp Backend:

To run a Pico as a public or semi-public station, or to use any type of authorization feature, the station must run in backend mode with eCarUp.

Authorization features:

- RFID

- manual On / Off via the app

- QR codes

- CarID (must be activated in the advanced settings (erweiterte Einstellungen) in the smart-me portal)




As soon as "eCarUp Backend" is selected, the station is automatically added to the eCarUp account of the same name. (It uses the same username and password as smart-me.)

You configure eCarUp in the web portal at [www.ecarup.com](http://www.ecarup.com).

Under Drivers (Fahrer), add an RFID card tag or read in a "card tag" with the eCarUp app for Android and iOS.

For details on configuring eCarUp and public charging stations, see the
eCarUp Wiki: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration with an external OCPP backend:

To connect the Pico to a third-party backend, you only need to enter the third-party provider's backend URL on the charging station.

Do not use this option if the station is connected via eCarUp.

Note:
The URL starts with ws:// or wss://

Pico setting in the smart-me portal:

![Pico Configuration – Figure 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

eCarUp portal menu:

![Pico Configuration – Figure 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Enter the third-party backend URL:

![Pico Configuration – Figure 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration for private use with RFID authentication

1.  In the eCarUp portal, go to Stations → Management (Stationen → Verwaltung)

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prices (Preise) = 0 CHF, Access (Zugriff): Private (Privat)

![Pico Configuration – Figure 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration for limited use with RFID authentication (tenants with special prices)

1.  In the eCarUp portal, go to Stations → Management (Stationen → Verwaltung)

2.  Edit → Edit connector (Bearbeiten → Anschluss bearbeiten)


![Pico Configuration – Figure 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Select Prices (Preise)

![Pico Configuration – Figure 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Define special users and their prices

The drivers create their own eCarUp account and give the account name to the station owner.

![Pico Configuration – Figure 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizing the Pico display

We advise against using a black background image, because it makes it unclear whether the Pico is running. When the station is offline, it is especially hard to tell from a distance whether it is defective or just not connected. If you want to save energy, we therefore recommend adding this 4-pixel image, so you can always see whether the station is still running locally. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

You can choose any name for the station and personalize what the display shows when the station is not in use.

In addition to the emoticons already available, you can also upload your own GIFs or images. 

- Supported formats: JPG, PNG, GIF

- Resolution: 32x32 pixels

- Size: max. 200 kB

- The background should be completely black (#000000)

- Animations (GIF) run at 10 frames/s (100ms per frame)

Note: For the best image quality, create and edit the image so that it is uploaded as a 32x32 pixel GIF.

\-> Create your own GIFs with [piskelapp](/drittsysteme/piskelapp) 

![Pico Configuration – Figure 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Load management and limiting

### Limiting station power

You can set a standard power limit for the Pico charging station during installation.

Automatic load management takes this setting into account and never overrides it.

The maximum charging current setting sets a fixed limit on the station's maximum power. You can set the limit in 1-ampere steps.

32A = 22kW maximum power

16A = 11kW maximum power

The minimum current setting prevents charging or sets a suitable minimum current for a car to start charging.

Note:
Some vehicles cannot charge with a starting current of 6A because of the technology built into the vehicle. In this case, you can set a higher minimum current.

![Pico Configuration – Figure 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Static load management (station group)

Static load management controls stations within the same load management group. It makes sure that the maximum current on the supply line (e.g. flat cable) is not exceeded and controls how the available current is distributed across the stations. 

A charging group can contain up to 200 charging stations.

How it works in detail:
The charging stations control themselves based on the defined maximum current. The 3-phase charging power is distributed across all active stations until the set minimum 3-phase power can no longer be provided to every charging car. After that, the power is switched to 1-phase. All cars continue charging on 1 phase with the maximum possible current per phase (phase switching). Another car can only no longer charge once all cars that are already charging have reached the 1-phase minimum. As soon as one of the charging vehicles leaves the station, its reserved charging power is released for another vehicle.

Configuration:

1.  Create a load management group (New group (Neue Gruppe))

2.  Define the maximum current of the supply line (Available current (Verfügbarer Strom))

3.  Define the action to take if the connection is lost

    (For use with multilevel load management, only the Max. current per group (Max. Strom pro Gruppe) option can be used)

4.  Add the stations to the corresponding load management group (Edit (Editieren))

More details: [Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

![Pico Configuration – Figure 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Pico Configuration – Figure 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Dynamic load management and solar-optimized charging with multilevel load management (MLM)

Dynamic load management takes a reference point into account and controls the maximum currents at that point. In e-mobility, either the building connection point or the distribution point is used as the reference point.

[Load management planning](/planung/elektromobilitaet) 

The following products are suitable as hardware for the reference measurement:

- [Telstar 80A](/produkte/telstar-80a)

- [Telstar CT](/produkte/telstar-ct)


You configure dynamic load management with smart-me's Multilevel Load Management (Multilevel Lastmanagement).

For details and examples, see: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

This lets you adjust the maximum currents of the station groups based on the current flowing at this reference point.

![Pico Configuration – Figure 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Load shedding

Hardware load shedding (external inputs on the Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico load shedding in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Spreadsheet, Pico load shedding" />

Pico load shedding

Load shedding also works with only one available signal. 

To switch between no charging and maximum charging power, wire the signal to IN1 and IN2 as well as COM. To switch between the 6A minimum and maximum charging power, you only need to wire the signal to IN2 and COM.

COM is the neutral conductor. IN1 and IN2 must have voltage applied for the ON signal. IN1 and IN2 do not generate any voltage. It must be supplied externally.

Caution:
You can wire load shedding either to all Picos or to at least one Pico in each static load group.
This function also works without an internet connection!

Cloud-based load shedding via MLM

You can also implement load shedding with multilevel load management. The advantage is that no signal needs to be connected to the Pico hardware. Instead, a signal on any other hardware (meter) is used as the trigger.

The disadvantage, however, is that the function does not work without an internet connection.

More details on the setup: [Multilevel load management](/konfiguration/multilevel-lastmanagement)

![Pico Configuration – Figure 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Advanced actions

<div className="row">
<div className="col col--6">

As the station owner, you can unlock the cable here, restart the station or show the meter reading on the display to check it.

</div>
<div className="col col--6 text--center">

![Pico Configuration – Figure 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

</div>
</div>

## Advanced settings

<div className="row">
<div className="col col--6">

Automatic car detection (Automatische Auto Erkennung):
For CarID authentication to work, you must enable communication between the station and the vehicle.

Modbus TCP:
Activates the Pico's Modbus TCP interface

Delete station (Station löschen):
Deletes the station and all of its data in the cloud

</div>
<div className="col col--6 text--center">

![Pico Configuration – Figure 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

</div>
</div>

### Always lock cable

You can lock the charging cable on the Pico charging station.

Procedure:
Plug in the cable --> Log in to the smart-me portal --> Select the Pico --> Select the gear icon at the top right --> Advanced settings (erweiterte Einstellungen) --> Always lock cable (Kabel immer fest verriegeln). 

Note: 

- The car must not be plugged in while you lock the cable.

- If the power supply is interrupted or the Pico restarts, the cable is unlocked briefly and locked again when the station starts up.

Requirement: The Pico must have at least communication version 0.0.7. This can affect Picos manufactured before 31.12.2022.

![Always lock cable](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
