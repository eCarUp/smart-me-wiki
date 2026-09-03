---
title: '3-Phase Meter'
slug: '/produkte/3-phasen-zähler'
description: 'The smart-me 3-phase meter is a precise high-performance energy meter with a built-in Wifi interface.'
sidebar_label: '3-Phase Meter'
---
The smart-me 3-phase meter is a precise high-performance energy meter with a built-in Wifi interface. No additional hardware is needed for the integration into the smart-me cloud. The meter uses the existing wireless network and can be easily monitored online. With a professional subscription, the meter values ​​can also be queried via the Modbus TCP interface. Each phase can be individually controlled. This is the easiest option to visualise the usage of energy, to analyse the metered data and to optimise the own consumption in realtime.

This version of the 3-Phase meter is not sold anymore. You'll find the information on the newest 3-Phase meter generation here: [3-Phase meter Telstar](/produkte/telstar)

![3-Phase Meter – figure 1](/img/_en/products-3-phase-meter/01.png)

## Versions

- Direct measurement up to 80 A (not switchable)

- Direct measurement up to 32 A (switchable)


## Functions

- 3-phase energy meter with MID 2014/32/EU certification

- Direct measurement up to 80 A (not switchable), direct measurement up to 32 A (switchable)

- Real-time measurement data with maximum precision, class B

- Additional contact output to control external devices

- The 3-phase meter acts as a gateway to the cloud for (almost) all IP-capable smart-energy devices  like heat pumps, heating systems, battery storages, and many more

- Easy installation using the free smart-me app available for Android and iOS

- Encrypted Wi-Fi connection directly to the smart-me cloud. The smart-me cloud offers a comprehensive energy management system, including visualisations, if/then actions, automated billing, and interfaces to third systems (Auto Export / API)


## Installation

Before you can use your smart-me device, you have to connect it to your Wi-Fi network.

1.  Connect your smartphone or tablet to the WLAN.

2.  Download and install the free smart-me app from the App store on Android or iOS.

3.  Start the app and create a free accoun or login into an existing relevant account.

4.  Click on “Add Device” (+) and follow the instructions.


## Technical Data

Operating Voltage 3 x 230 VAC

Reference Current 5 (80) A / 5 (32) A

Storage Temperature -40 ° C to 85 ° C

Own consumption &lt; 0.8 W per Phase

Temperature range -25°C to +70°C

Humidity annual average 75%, short-term 95%, non-condensing

Accuracy Class Classe B

Type of Energy Meter Bidirectional meter (import and export)

Measurement values 

- -   Active energy (kWh)

    - Active power (kW)

    - Current (A)

    - Voltage (V)

    - Power factor (cos phi)

    - Switch status

    - Additional with Professional Subscription: Reactive energy (kvarh), Reactive power (kvar)


Interfaces

- -   Wifi

    - SO / potential-free contact output

    - tariff input (24- 48VDC / 24-230VAC)

    - SG Ready

    - with Professional Subscription: Modbus TCP


Outputs S0, S1
Opto Power MOSFET, 5-48VDC / 5 - 230 VAC, max. 550mW

WiFi Standard 802.11 b/g/n

Wifi Security Standard WEP, WPA, WPA2 (personal)

S0 Pulse Rate 1 000 or 10 000 impulses per kWh

Data Storage 2 months

Product Certification CE, MID2014/32/EU

Environmental Classes Mechanical M1, Electromagnetic E2

Protection Class IP20, IP51 (Front)

Size 5 modules, 90 x 90 mm

Installation DIN rail

## Configuring inputs and outputs

The smart-me meter has two outputs and one input, which can be used as pulse inputs and outputs or as a switchable potential-free contact.

## Display

1.  Display sequence


The meter has a rolling display. The bullet points summarized below are shown sequentially. After the last value, the sequence starts anew.

1.) Phase order (if incorrect, see below)

2.) Counter reading (Obis code followed by counter reading)

1-8-1: active energy tariff 1

1-8-2: active energy tariff 2

3-8-1: reactive energy tariff 1 (if available)

3-8-2: reactive energy tariff 2 (if available)

3.) Software version

4.) CRC value

### Phase order

PhL 1 -> only phase L1 has been connected (PhL2 for L2 etc.) 

PhL12 -> only phases L1 and L2 have been connected (PHL13 for L1 and L3 etc.) 

PhL123 -> a wrong phase order has been detected.

## Measurements and Wiring

### Dimensions \[mm\]

![3-Phase Meter – figure 2](/img/_en/products-3-phase-meter/02.png)

Note: .DXF and .DWG files of the meter, can be found in the ZIP archive under downloads.

### Wiring diagram

E1: Tariff input (digital input)

0V: Tariff 1

\>24V: Tariff 2

T1: Button for the installation

T2: Special functions

Short: If T2 is pushed shortly, the green LED-light is switched on / off. If the light is activated (if available), it displays the connection state (constantly on: connected with smart-me cloud / flashing: no connection).

Long: If T2 is pushed for a longer time, the value of the reactive energy is activated. The two values of «meter value reactive energy T1» and «meter reading reactive energy T2» are added to the display sequence. The shown value is blinking and can be distinguished from the active energy.

ATTENTION: This setting only changes the notification on the display, not in the smart-me cloud (app and homepage). If you want to show the reactive energy on the cloud (app and homepage), the general settings have to be changed. (T2 starts to shine in a red light if pushed, T2 has to be pushed until the red LED-light turns off again)

S0\_0: S0 Impulse output (optional potential free contact, Attention Pmax = 550mW long-term)

S0\_1: S0 Impulse output (optional potential free contact, Attention Pmax = 550mW long-term)

![3-Phase Meter – figure 3](/img/_en/products-3-phase-meter/03.jpg)

## Downloads and certificate of conformity

Data Sheet

Quick Starter Guide

Technical Documents

[Wiring Diagram](https://drive.google.com/file/d/1UY_5iyaaiK8OXxEDQvDJAdsHqRZ8k3HJ/view?usp=sharing)

[Certificate of Conformity](https://drive.google.com/file/d/1MBTTapoTlcpUFbXpglgAq2wpE4yfs_MO/view?usp=sharing)
