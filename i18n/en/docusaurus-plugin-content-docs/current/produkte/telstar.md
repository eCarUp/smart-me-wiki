---
title: '3-Phase Meter Telstar 80A'
slug: '/produkte/telstar'
description: 'The smart-me Telstar 80A is an MID-certified energy meter with integrated WiFi interface for the transmission of real-time data.'
sidebar_label: '3-Phase Meter Telstar 80A'
---
The smart-me Telstar 80A is an MID-certified energy meter with integrated WiFi interface for the transmission of real-time data. The meter synchronises the measured values automatically and encrypted in the smart-me cloud. The smart-me portal can be used to further process the data. Alternatively, they can be exported and processed in third-party systems via our open interface. The meter has two digital outputs for controlling devices with a dry contact.

![3-Phase Meter Telstar 80A – figure 1](/img/_en/products-3-phase-meter-telstar/01.jpg)

## Functions

- [Commissioning](/konfiguration/inbetriebnahme) with the free smart-me app.

- Create bills with the [smart-me billing tool.](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](https://doc.smart-me.com/configuration/visualisations)

- [Dry contact outputs](/schnittstellen/ein_und_ausgaenge) for control of external devices, one of them with 8A relay

- Floating contact input for tariff signal or [digital input](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me cloud


## Technical Data

<Video src="" title="Custom embed" />

## Display

Value / Symbol Description

1.8.1 OBIS code for the displayed meter reading

T1 Active tariff (tariff 1 or tariff 2)

Arrow Direction of flow (right-hand reference / left-hand delivery)

Signal (Bars) WiFi Signal strength

0000053.2 Meter reading

5520W Current measured power with unit

kWh Unit of the displayed meter reading

![3-Phase Meter Telstar 80A – figure 2](/img/_en/products-3-phase-meter-telstar/02.png)

The meter has a rolling display. The items described below are displayed in sequence. fter the last point, the first point is displayed again.

Meter reading (OBIS code followed by meter reading)

1.8.1 (A+) Active energy import tariff 1
1.8.2 (A+) Active energy import tariff 2
2.8.1 (A+) Active energy delivery tariff 1
2.8.2 (A+) Active energy delivery tariff 2
5.8.0 (Q1) Total inductive reactive energy consumption
6.8.0 (Q2) Total capacitive reactive energy consumption
7.8.0 (Q3) Total inductive reactive energy delivery
8.8.0 (Q4) Total capacitive reactive energy delivery

Firmware (OBIS code followed by information)

C.1.6 Ch: 762A Firmware checksum
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

## Measurements & Wiring

\*.DXF and \*.DWG files of the meter, can be found in the ZIP archive under downloads

### Dimensions \[mm\]

![3-Phase Meter Telstar 80A – figure 3](/img/_en/products-3-phase-meter-telstar/03.png)

![3-Phase Meter Telstar 80A – figure 4](/img/_en/products-3-phase-meter-telstar/04.png)

### Wiring diagram

![3-Phase Meter Telstar 80A – figure 5](/img/_en/products-3-phase-meter-telstar/05.png)

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

![3-Phase Meter Telstar 80A – figure 6](/img/_en/products-3-phase-meter-telstar/06.png)

## LED

Green LED - status of the connection

- Shows the status of the connection to the smart-me Cloud. a) Flashing = connection error b) Always on = connection OK


![3-Phase Meter Telstar 80A – figure 7](/img/_en/products-3-phase-meter-telstar/07.png)

Red LED - Pulse LED

- Displays the active or reactive power currently being drawn in 1000 pulses/kWh or 1000 impulses/kVArh. Whether active or reactive power is displayed can be set using the T2 button.

- For example: An LED marked “1000 pulses/kWh” flashes 1000 times when 1 kilowatt hour (kWh) of energy has been drawn or supplied. If the 1000 pulses were counted within 1 hour, a constant 1 kW of power was measured.


![3-Phase Meter Telstar 80A – figure 8](/img/_en/products-3-phase-meter-telstar/08.png)

## Configuring inputs and outputs

The Telstar 80A has two digital outputs and one digital input, which can be used as pulse inputs and outputs or as a switchable dry contact. Details can be found on the [Inputs and Outputs](/schnittstellen/ein_und_ausgaenge) wiki page. 

The Telstar 80A has a relay at one digital output, which can switch up to 8A.

## Mesh-Technologie

In the event of very weak or no WiFi reception, the Telstar 80A automatically connects to another neighboring meter within range via the mesh function. This meter then takes over communication with the smart-me cloud. The mesh technology ensures that the meters have a higher availability to the smart-me Cloud. It is not possible to deactivate the mesh function on the meters. Specific restrictions apply when [Modbus TCP](/schnittstellen/modbus-tcp) is enabled.

## Shipping information

Item number: 202063
Article name: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi
Customs tariff number: 9028.3019
Weight with packaging: 415g

## Downloads and certificate of conformity

Data Sheet

[German Data Sheet](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf) 

[Declaration of Conformity](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Wiring Diagram ZIP Files](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (\*.DXF and \*.DWG files of the meter, can be found in the ZIP archive)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)
