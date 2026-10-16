---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'smart-me devices can be integrated directly into Solar Manager via the cloud.'
sidebar_label: 'Solar Manager'
---
smart-me devices can be integrated directly into Solar Manager via the cloud. [Virtual meters](/konfiguration/billing/virtuelle-zaehler) can also be imported. 

## Small update to Solar Manager from August 2026

With the new Solar Manager update, Picos are no longer controlled via the serial number, but via the ID of the load management level 1 group.

In this short video, I show you step by step how this works, so that you can make the settings on the smart-me side correctly.

Good to know: with the update, single-phase charging at 6 A (approx. 1.4 kW) is now possible, which is ideal for smaller PV surpluses. You can find out how to configure this in the Solar Manager documentation

<Embed src="https://drive.google.com/file/d/1Oc3uuTCMusCJMHL7hjlJzFbkoFONHpm4/preview" aspect="1.350" title="Drive, solarmanager_update_2026.mp4" />

solarmanager\_update\_2026.mp4

Solar Manager offers several options for using the smart-me meter and Pico charging stations:

- As a smart meter or balancing meter directly after the utility meter

- As a consumption measurement of devices such as charging stations, heat pumps, etc.

- As a production measurement of PV generation

- As a switch, to use the relay contact on the meter.

- As a data source for e-mobility load management

Target group: single-family and multi-family homes

<Video src="D3Mh-cAyHvw" title="YouTube video, demo of the Solar Manager integration of smart-me meters" />

## General integration

For the integration, you need the cloud login credentials (username and password)  as well as the serial number of the meter. The serial number is shown directly in the smart-me portal and on the devices themselves. For the serial number, only use the digits before the hyphen!

![Solar Manager – Figure 1](/img/drittsysteme-solarmanager/01.png)

### Example:

Serial number web portal: 07907952

Serial number meter: 07907952-123 (omit -123)

## smart-me meter as a smart meter

In Solar Manager, you can add a smart meter, which can be installed in two ways:

- Directly after the utility meter (balancing meter), with production (-) and consumption (+) measured directly 

- Pure consumption measurement, with production recorded separately

To set it up, add a smart meter and select smart-me Cloud. The smart meter is connected using the login credentials and the 8-digit serial number. 

- Installation location:  As described above

- Invert measurement: If the meter were installed inverted, you could change the sign here. 

![Solar Manager – Figure 2](/img/drittsysteme-solarmanager/02.png)

## Using the smart-me relay

The [3-Phase Meter Telstar](/produkte/telstar) has two potential-free contact outputs for controlling external devices, one of them with an integrated 8A relay. This can be switched in Solar Manager. One «switch» (Schalter) is created and parameterized per relay. The switches must first be defined as digital outputs in the smart-me portal (see [Inputs & Outputs](/)) 

To set it up, add a new «switch» (Schalter) under devices and select «Relay on the smart-me 3-phase meter» (Relais am smart-me 3-Phasen Zähler). The meter is connected using the login credentials and the 8-digit serial number. 

### Parameters

Switch-on power (W):

How much power must be available as surplus for switching to take place.

Switch-on delay (min):

How long the defined power must be present before switching takes place.

Switch-off delay (min):

How long to wait after the power drops below the threshold before switching off (e.g. to bridge a passing cloud)

Minimum runtime (min): 

The minimum time the device must run. Useful for heat pumps with compressors, etc.

![Solar Manager – Figure 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Figure 4](/img/drittsysteme-solarmanager/04.png)

## Contact:

<Kacheln min="20rem">
<Kachel titel="Solar Manager AG">

Schlyffistäg 36, CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) · [info@solarmanager.ch](mailto:info@solarmanager.ch) · +41 56 512 92 08

</Kachel>
</Kacheln>

## FAQ

<details id="stromfreigabe-pico-ladestation-funktioniert-nicht-ab-4200w">
<summary>Current release for Pico charging station does not work from 4200W</summary>

The Pico charging station is supplied by default with a minimum current of 8A in order to support all possible vehicle types directly after installation.

In combination with Solar Manager, however, the latter assumes a minimum current of 6A by default to control the Pico.

Select the case that applies to your vehicle to support your desired configuration without errors:

Case A: You have a vehicle that can handle a 6A starting current

- Set the minimum current on the Pico hardware to 6A.

![Solar Manager – Figure 5](/img/drittsysteme-solarmanager/05.png)

Case B: You have a vehicle that is known not to cope with a 6A  starting current (e.g. Renault Zoe)

- In Solar Manager, select the setting "Renault Zoe 9A" in the vehicle selection

</details>
