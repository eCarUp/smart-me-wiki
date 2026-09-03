---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'Smart-me devices can be integrated in the Solar Manager directly via the cloud.'
sidebar_label: 'Solar Manager'
---
Smart-me devices can be integrated in the Solar Manager directly via the cloud. [Virtual meters](/konfiguration/billing/virtuelle-zaehler) can also be adopted.

There are several options for using the smart-me meter in the Solar Manager:

- As a smart meter, i.e. balance meter directly after the utility meter

- To measure the consumption of devices such as charging stations, heat pumps, etc.

- As a production measurement of PV generation

- As a switch to use the relay contact on the meter


## Integration in general

For the integration, the cloud access data with user name and password are required, as well as the serial number of the meter. This can be seen directly in the smart-me portal as a serial number, and it is also listed on the devices. Only use all digits there before the hyphen.



![Solar Manager – figure 1](/img/_en/third-party-systems-solarmanager/01.png)

### Example:

Web portal serial number: 07907952

Serial number counter: 07907952-123 (omit -123)

## Smart-me meter as smart meter

One smart meter can be added to the Solar Manager at a time; it can be installed in two ways:

- Directly after the house connection box, whereby production (-) and consumption (+) are measured directly

- Pure consumption measurement, production is recorded separately


To set it up, you add a smart meter and select smart-me cloud. The smart meter is connected with the access data and the 8-digit serial number.

- Installation location: As described above

- Invert measurement: If the counter were mounted inverted, the sign could be changed here.


![Solar Manager – figure 2](/img/_en/third-party-systems-solarmanager/02.png)

## Use smart-me relay

The smart-me 3-phase counter has two potential-free contact outputs for controlling external devices, one of them with an integrated 8A relay. This can be switched in the Solar Manager. One “switch” is recorded and parameterized for each relay.

To set it up, add a new “switch” under Devices and select “Relay on the smart-me 3-phase meter”. The meter is connected with the access data and the 8-digit serial number.

### Parameter

Switch-on power (W): What power must be available as a surplus so that it is switched.

Switch-on delay (min): How long must the defined power be present before it is switched.

Switch-off delay (min): How long should you wait after falling below the power level before switching off (e.g. to bridge a cloud)

Minimum duration (min): How long must the device run at least. Practical for heat pumps with compressors etc.

![Solar Manager – figure 3](/img/_en/third-party-systems-solarmanager/03.png)

## Contact:

Solar Manager AG

Schlyffistäg 36

CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) 

[info@solarmanager.ch](mailto:info@solarmanager.ch) 

+41 56 512 92 08




## FAQ

## Power release on the Pico charging station does not work with 4200W

The Pico charging station is supplied as standard with a minimum current of 8A to ensure immediate support for all possible vehicle types following installation.

However, when used in conjunction with SolarManager, the system defaults to a minimum current of 6A to control the Pico.

Select the scenario that applies to your vehicle to ensure your desired configuration is supported correctly:

Case A: You have a vehicle that can handle a 6A starting current

- Set the minimum current on the Pico hardware to 6A.



![Solar Manager – figure 4](/img/_en/third-party-systems-solarmanager/04.png)

Case B: You have a vehicle that is known not to be able to cope with a 6A starting current (e.g. Renault Zoe)

- In the Solar Manager, under vehicle selection, set the option to "Renault Zoe 9A"
