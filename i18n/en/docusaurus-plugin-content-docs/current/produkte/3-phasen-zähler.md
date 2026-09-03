---
title: '3-Phase Meter'
slug: '/produkte/3-phasen-zähler'
description: 'The smart-me 3-Phase Meter is a powerful and precise energy meter with an integrated WiFi interface.'
sidebar_label: '3-Phase Meter'
---
The smart-me 3-Phase Meter is a powerful and precise energy meter with an integrated WiFi interface. No additional hardware is required for integration into the smart-me Cloud. It uses the existing WiFi network and can be controlled and evaluated from anywhere via the internet. With a Professional subscription, the meter values can also be queried via the Modbus TCP interface. On the 5(32)A version, each phase can be switched individually.

This 3-Phase Meter is no longer available. You can find the new generation of our 3-Phase Meter here: [3-Phase Meter Telstar](/produkte/telstar)

![3-Phase Meter – figure 1](/img/produkte-3-phasen-zaehler/01.png)

## Variants

- Direct connection 5(80)A

- Direct connection 5(32)A, switchable


## Functions

- 3-phase energy meter with MID 2014/32/EU certification

- Direct measurement up to 80 A (not switchable), direct measurement up to 32 A (switchable)

- Real-time measured values with the highest accuracy, class B

- Additional contact outputs for controlling external devices

- The 3-phase meter also works as a gateway to the cloud for (almost) all IP-capable smart energy devices

- Easy installation with the free smart-me App for Android and iOS

- Encrypted WiFi connection directly to the smart-me Cloud. The smart-me Cloud offers comprehensive energy management: visualizations, control (if/then actions), automatic billing (smart-me Billing) and interfaces to third-party systems (Auto Export, API)


## Installation

Before you can use your smart-me device, you have to connect it to your WiFi network and the internet.

1.  Connect your smartphone or tablet to the WiFi network.

2.  Download and install the smart-me App from the Play Store or iOS Store.

3.  Start the app and create an account or log in with the corresponding account.

4.  Click on “Add device” („Gerät hinzufügen“) (+) and follow the instructions.


## Technical data

Operating voltage 3 x 230 VAC

Reference current 5 (80) A / 5 (32) A

Own consumption &lt; 0.8 W per phase

Storage temperature -40°C to 85°C

Temperature range -25°C to 70°C

Humidity annual average 75%, short-term 95%, non-condensing

Accuracy class B

Meter type bidirectional meter (consumption and feed-in)

Measured values 

- -   Active energy (kWh)

    - Active power (kW)

    - Current (A)

    - Voltage (V)

    - Power factor (cosphi)

    - Status of inputs and outputs 

    - Additionally with a Professional subscription: reactive energy (kvarh), reactive power (kvarh)


Tariffs 2 (virtual tariffs can be created on the cloud side)

Interfaces 

- -   WiFi

    - S0 / potential-free contact outputs

    - Tariff input (24 - 48VDC  /  24 - 230 VAC)

    - SG Ready

    - with a Professional subscription: Modbus TCP


Pulse outputs / digital outputs S0, S1 Opto Power MOSFET, 5 - 48VDC  / 5 - 230 VAC , max. 550mW

WiFi standard 802.11 b/g/n

WiFi security standard WEP, WPA, WPA2 (personal)

S0 pulse rate 10’000 or 1’000 pulses per kWh

Data storage 2 months

Product certification CE, MID 2014/32/EU

Environmental classes: mechanical M1, electromagnetic E2

Protection class IP20 (terminals), IP51 (front)

Dimensions 5 modules, 90 x 90 mm

Mounting DIN rail

## Configuring inputs and outputs

The smart-me Meter has two outputs and one input, which can be used as pulse inputs and outputs or as a switchable potential-free contact. You can find details on this [here](/schnittstellen/ein_und_ausgaenge). 

## Display

The meter has a rolling display. The items described below are shown one after the other. After the last item, it starts again at item 1:

1.  Phase sequence (if faulty, see below)

2.  Meter reading (OBIS code followed by the meter reading)


1-8-1: Active energy tariff 1 import (consumption)
1-8-2: Active energy tariff 2 import (consumption)
2-8-1: Active energy tariff 1 export (feed-in)
2-8-2: Active energy tariff 2 export (feed-in)

3.  Software version

4.  CRC value


### Phase sequence

PhL 1 -> only phase L1 was connected (PhL2 for L2 and so on)
PhL 12 -> only phases L1 and L2 were connected (PhL13 for L1 and L3 and so on)
PhL 123 -> an incorrect phase sequence was detected

## Dimensions and connections

### Dimensions \[mm\]

![3-Phase Meter – figure 2](/img/produkte-3-phasen-zaehler/02.png)

Note: .DXF and .DWG data can be found in the ZIP archive in the downloads.

### Connection diagram

E1: tariff input (digital input)

0V: tariff 1

\>24V: tariff 2

T1: button for the installation

T2: special functions

Short: pressing T2 briefly switches the green LED lamp on / off. When it is activated, it shows the connection status:

Green, steady: connected to the smart-me Cloud 

Green, flashing: no connection

Long: pressing T2 for a long time activates the display of the reactive energy meter reading (if available). The items reactive energy meter reading T1 and reactive energy meter reading T2 are added to the display sequence. The value shown flashes and can therefore be distinguished from the active energy.

NOTE: This setting only changes the display on the meter, not in the smart-me Cloud (app and website). If the reactive energy is to be shown in the cloud, this has to be done in the general settings. (When T2 is pressed, the red LED starts to light up; T2 has to be held down until the red LED goes out)

S0\_0: S0 pulse output (optionally potential-free contact / note Pmax = 550mW continuous)

S0\_1: S0 pulse output (optionally potential-free contact / note Pmax = 550mW continuous)

![3-Phase Meter – figure 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Measured values (OBIS codes)

The following measured values are recorded by the meter and can be retrieved in the cloud and via the API

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Open Spreadsheet, measured values (incl. OBIS codes) 3-Phase Meter V1 in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI/htmlembed" aspect="2.882" title="Spreadsheet, measured values (incl. OBIS codes) 3-Phase Meter V1" />

Measured values (incl. OBIS codes) 3-Phase Meter V1

## Downloads and declaration of conformity

Data sheet

[English](https://drive.google.com/file/d/1U5DGW_fda6IvaIzHPyjkVkT5Sd2hHyL8/view?usp=sharing)

[French](https://drive.google.com/file/d/1FdrW3HQAq-INjThhj1IbRuXhpq4dUSWP/view?usp=sharing)

[Italian](https://drive.google.com/file/d/1ip42f1sf4NrRq9CmYWQoKp1x9uB1ALEt/view?usp=sharing)

Quick Starter Guide

Technical documents

[CE declaration of conformity](https://drive.google.com/file/d/1MBTTapoTlcpUFbXpglgAq2wpE4yfs_MO/view?usp=sharing)

[Connection diagram](https://drive.google.com/file/d/12wyjFnyECXzPXvnYKV_VhfHKuZwAhjdn/view?usp=sharing)

## FAQ

### At what interval do the meters send data?

- Every 15 minutes, i.e. at xx:00:00 xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, an individual configuration can be made:

    - With Basic or Limited licenses: max. 1x per minute.

    - With Pro licensing: max. 1x per second
