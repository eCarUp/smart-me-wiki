---
title: '3-Phase Meter Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'The smart-me Telstar CT is an MID-certified energy meter with integrated WiFi interface for the transmission of real-time data and with connection for external converters.'
sidebar_label: '3-Phase Meter Telstar CT'
---
The smart-me Telstar CT is an MID-certified energy meter with integrated WiFi interface for the transmission of real-time data and with connection for external converters. The meter synchronises the measured values automatically and encrypted in the smart-me cloud. The smart-me portal can be used to further process the data. Alternatively, they can be exported and processed in third-party systems via our open interface. The meter has two digital outputs for controlling devices with a dry contact.

![3-Phase Meter Telstar CT – figure 1](/img/_en/products-telstar-ct/01.png)

[CT's and Accessories](/drittprodukte/Stromwandler)

## Functions

- [Commissioning](/konfiguration/inbetriebnahme) with the free smart-me app.

- Inputs for [external current transformers](/) from 0.01 to 6A output

- Create bills with the [smart-me billing tool.](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](https://doc.smart-me.com/configuration/visualisations)

- [Dry contact outputs](/schnittstellen/ein_und_ausgaenge) for control of external devices, one of them with 8A relay

- Floating contact input for tariff signal or [digital input](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me cloud


## Technical Data

<Video src="" title="Custom embed" />

## Technical requirements for the current transformers

A wide variety of current transformers can be used with the Telstar CT. The basic requirements are as follows:

- Current transformer ratio: 1: 1 to 20,000: 1 to 5: 5 to 20,000: 5
    The secondary number may be an integer number between 1 and 5
    The primary number may be an integer number between 1 and 20'000

- Output current: 1A to 5A

- Output power: at least 1VA or higher 

- Type: open or closed

- Accuracy class: 1 or better\*


\* For billing purposes, calibrated converters are required that must meet at least class 0.5 or better. This is achieved almost exclusively with closed type current transformers.

Suggestionsfor transformers and accessories can be found on the page: [Current transformers and accessories](/drittprodukte/Stromwandler)

## Display

Value / Symbol Description

1.8.1 OBIS code for the displayed meter reading

T1 Active tariff (tariff 1 or tariff 2)

Arrow Direction of flow (right-hand reference / left-hand delivery)

Signal (Bars) WiFi Signal strength

0000053.2 Meter reading

5520W Current measured power with unit

kWh Unit of the displayed meter reading

![3-Phase Meter Telstar CT – figure 2](/img/_en/products-telstar-ct/02.png)

The meter has a rolling display. The items described below are displayed in sequence. fter the last point, the first point is displayed again.

Meter reading (OBIS code followed by meter reading)

1.8.1 (A+) Active energy import tariff 1
1.8.2 (A+) Active energy import tariff 2
2.8.1 (A+) Active energy delivery tariff 1
2.8.2 (A+) Active energy delivery tariff 2
1.8.0:5A (A +) active energy total import 5A basis
2.8.0:5A (A-) active energy total delivery 5A basis
5.8.0 (Q1) Total inductive reactive energy consumption
6.8.0 (Q2) Total capacitive reactive energy consumption
7.8.0 (Q3) Total inductive reactive energy delivery
8.8.0 (Q4) Total capacitive reactive energy delivery

Converter factor (OBIS code followed by information)

0.4.2 Converter factor (including S0 pulses / kWh)

Firmware (OBIS code followed by information)

C.1.6 Ch: 2218 Firmware checksum
0.2.0 V 1.1 Firmware version

Error display (OBIS code followed by error messages)

C.60.9 Fraud Flag (possible attempted fraud detected)
PhL: 1 only phase L1 connected
PhL: 2 only phase L2 connected
PhL: 3 only phase L3 connected
PhL: 23 Phase L1 not connected
PhL: 13 Phase L2 not connected
PhL: 12 Phase L3 not connected
Correct phase sequence: Numbers light up statically
Incorrect phase sequence: Numbers flash

## Measurements and Wiring

\*.DXF and \*.DWG files of the meter, can be found in the ZIP archive under downloads

### Dimensions \[mm\]

![3-Phase Meter Telstar CT – figure 3](/img/_en/products-telstar-ct/03.png)

![3-Phase Meter Telstar CT – figure 4](/img/_en/products-telstar-ct/04.png)

### Wiring diagram

![3-Phase Meter Telstar CT – figure 5](/img/_en/products-telstar-ct/05.jpg)

\*Stromwalder = Current Transducers

## Setting the transformer ratio on the Telstar CT

1.  Click on the cogwheel symbol at the top right (Settings) 

2.  Edit 

3.  General settings 

4.  Enter transformer ratio 

5.  The transformer ratio can be locked. This serves as protection against unwanted changes by unauthorized persons. To unlock the transformer ratio, the unit must be installed again with the smart-me app. When reinstalling, deleting is unnecessary.


Note: Entering the transformer ratio does not change the historically stored data. For this reason, this step must be taken immediately after commissioning.

![3-Phase Meter Telstar CT – figure 6](/img/_en/products-telstar-ct/06.jpg)

## Key functions

T1 button for installation

When T1 button is pressed for 10 seconds, it creates a local WiFi for installation

T1 + T2 Restart

Press T1 and T2 buttons simultaneously for 10 seconds to force a reboot.

T2 special functions

In short: If T2 is pressed for >2s, the green LED lamp switches (from on to off or from off to on). If this is activated, it shows the connection status

Glowing green: connected to smart-me cloud

Flashing green: connection is currently established, at the moment no connection

Long: If T2 is pressed> 8s, the display of the power is switched between active and reactive power. In addition, the calibration pulse LED alternates between active energy and reactive energy.

Very long: If T2 is pressed> 14s, the S0-0 pulse output is switched between active power and reactive power.

Note: This setting only changes the display, not in the smart-me cloud (app and website). If the reactive energy is to be displayed in the cloud, this must be done in the general settings.

![3-Phase Meter Telstar CT – figure 7](/img/_en/products-telstar-ct/07.png)

## LED

Green LED - status of the connection

- Shows the status of the connection to the smart-me Cloud. a) Flashing = connection error b) Always on = connection OK


![3-Phase Meter Telstar CT – figure 8](/img/_en/products-telstar-ct/08.png)

Red LED - Pulse LED

- Displays the active or reactive power currently being drawn in 1000 pulses/kWh or 1000 impulses/kVArh. Whether active or reactive power is displayed can be set using the T2 button.

- For example: An LED marked “1000 pulses/kWh” flashes 1000 times when 1 kilowatt hour (kWh) of energy has been drawn or supplied. If the 1000 pulses were counted within 1 hour, a constant 1 kW of power was measured.


![3-Phase Meter Telstar CT – figure 9](/img/_en/products-telstar-ct/09.png)

## Configuring inputs and outputs

The smart-me meter has two outputs and one input, which can be used as pulse inputs and outputs or as a switchable potential-free contact. Details can be found [here](/schnittstellen/ein_und_ausgaenge). 

## Configuring inputs and outputs

The Telstar CT has two digital outputs and one digital input, which can be used as pulse inputs and outputs or as a switchable dry contact. Details can be found on the [Inputs and Outputs](/schnittstellen/ein_und_ausgaenge) wiki page. 

The Telstar CT has a relay at one digital output, which can switch up to 8A.

## Mesh-Technologie

In the event of very weak or no WiFi reception, the Telstar 80A automatically connects to another neighboring meter within range via the mesh function. This meter then takes over communication with the smart-me cloud. The mesh technology ensures that the meters have a higher availability to the smart-me Cloud. It is not possible to deactivate the mesh function on the meters. Specific restrictions apply when [Modbus TCP](/schnittstellen/modbus-tcp) is enabled.

## Current Transducers and Accessories

Suggestionsfor transformers and accessories can be found on the page: [Current transformers and accessories](/drittprodukte/Stromwandler)

## Shipping information

Item number: 212062
Article name: 3-Phasen Energiezähler Telstar CT MID Wifi
Customs tariff number: 9028.3019
Weight with packaging: 315g

## Downloads and certificate of conformity

[English Data Sheet](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[German Data Sheet](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Declaration of Conformity](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Wiring Diagram ZIP Files](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (\*.DXF and \*.DWG files of the meter, can be found in the ZIP archive)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)
