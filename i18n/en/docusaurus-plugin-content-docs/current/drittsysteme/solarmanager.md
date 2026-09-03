---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'smart-me devices can be integrated into Solar Manager directly via the cloud.'
sidebar_label: 'Solar Manager'
---
smart-me devices can be integrated into Solar Manager directly via the cloud. [Virtual meters](/konfiguration/billing/virtuelle-zaehler) can be transferred as well. 

In Solar Manager there are several options for using the smart-me meter and Pico charging stations:

- As a smart meter or balancing meter directly after the utility meter

- As consumption metering for devices such as charging stations, heat pumps, etc.

- As production metering for PV generation

- As a switch, in order to use the relay contact on the meter.

- As a data source for e-mobility load management




Target group: single-family and multi-family homes

<Video src="D3Mh-cAyHvw" title="YouTube video, demo of the Solar Manager integration of smart-me meters" />

## General integration

The cloud credentials (user name and password) as well as the serial number of the meter are required for integration. The serial number can be seen directly in the smart-me portal and on the devices themselves. For the serial number, use only the digits before the hyphen!

![Solar Manager – figure 1](/img/drittsysteme-solarmanager/01.png)

### Example:

Serial number web portal: 07907952

Serial number meter: 07907952-123 (omit -123)

## smart-me meter as a smart meter

A smart meter can be added in Solar Manager; it can be installed in two ways:

- Directly after the utility meter (balancing meter), where production (-) and consumption (+) are measured directly 

- Pure consumption metering, with production recorded separately


To set it up, add a smart meter and select smart-me Cloud there. The smart meter is connected using the credentials and the 8-digit serial number. 

- Installation location:  As described above

- Invert measurement: If the meter were installed inverted, you could change the sign here. 


![Solar Manager – figure 2](/img/drittsysteme-solarmanager/02.png)

## Using the smart-me relay

The [3-phase meter Telstar](/produkte/telstar) has two potential-free contact outputs for controlling external devices, one of them with an integrated 8A relay. It can be switched in Solar Manager. One «switch» is created and parameterised per relay. The switches must first be defined as digital outputs in the smart-me portal (see [Inputs & outputs](/)) 

To set it up, add a new «switch» under Devices and select «Relay on the smart-me 3-phase meter» there. The meter is connected using the credentials and the 8-digit serial number. 

### Parameters

Switch-on power (W):

How much power must be available as surplus for switching to occur.

Switch-on delay (min):

How long the defined power must be present before switching occurs.

Switch-off delay (min):

How long to wait after the power falls below the threshold before switching off (e.g. to bridge a passing cloud)

Minimum runtime (min): 

How long the device must run at minimum. Practical for heat pumps with compressors, etc.

![Solar Manager – figure 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – figure 4](/img/drittsysteme-solarmanager/04.png)

## Contact:

Solar Manager AG

Schlyffistäg 36

CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) 

[info@solarmanager.ch](mailto:info@solarmanager.ch) 

+41 56 512 92 08

## FAQ

## Current release for the Pico charging station does not work from 4200W

The Pico charging station is delivered with a minimum current of 8A by default, in order to directly support all possible vehicle types after installation.

When used together with Solar Manager, however, Solar Manager assumes a minimum current of 6A by default in order to control the Pico.

Select the case that applies to your vehicle in order to support your desired configuration without errors:

Case A: You have a vehicle that can handle a 6A starting current

- Set the minimum current on the Pico hardware to 6A.



![Solar Manager – figure 5](/img/drittsysteme-solarmanager/05.png)

Case B: You have a vehicle that is known not to cope with a 6A starting current (e.g. Renault Zoe)

- In Solar Manager, set the "Renault Zoe 9A" setting in the vehicle selection
