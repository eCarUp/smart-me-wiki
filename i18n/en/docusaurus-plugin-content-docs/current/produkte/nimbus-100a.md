---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus-100a'
description: 'Mounting on a meter mounting plate according to DIN43857-1'
sidebar_label: '3-Phase Meter Nimbus 100A'
---
![smart-me Nimbus 100A – Figure 1](/img/produkte-nimbus-100a/01.png)

## Required accessories

[Meter plug-in terminals for Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100a)

## Functions

- Mounting on a meter mounting plate according to DIN43857-1

- Communication to the smart-me Cloud: Wi-Fi 2.4 GHz

- Compatible with meter plug-in terminals (e.g. Hager and Seidl)

- Customer interface DSMR P1 V5.0.2

- [Installation](/konfiguration/inbetriebnahme) with the free smart-me app.

- Billing with the [smart-me Billing Tool](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](/konfiguration/visualisierung)

- [Interfaces](/) from the system via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me Cloud 

- Signed load profile of meter readings (15min values) according to OCMF

### A secure anchor for your blockchain solution

The Nimbus meter was designed as a trustworthy "hardware oracle" to solve the critical oracle problem when connecting IoT devices to decentralized systems.

The ECDSA signature process:

1.  Hardware key: A private key is generated on a crypto coprocessor and never leaves it at any time.

2.  Signature on the edge: Every 15 minutes, the meter readings (OCMF format) are signed with the private key using ECDSA over a SHA-256 hash function.

3.  Verifiable origin: The result is a data packet with a digital signature. Using the meter's public key, any application can verify beyond doubt that the data is authentic and unaltered.

The Nimbus thus offers a hardware-based security guarantee that is superior to pure software solutions and provides the perfect foundation for robust P2P trading platforms, local electricity communities (LEC) and other decentralized energy services.

## Technical data

| Feature | Value |
| --- | --- |
| Product certification | CE, MID 2014/32/EU, CH load profile / reactive energy, RED 2014/53/EU |
| Accuracy class for active energy/reactive energy | B (MID) / 2 (IEC) |
| Applied standards | EN50470-1:2006, EN 50470-3:2006 |
| Direction | +A (consumption), -A (delivery), +R, -R |
| Quadrants | Q1, Q2, Q3, Q4 |
| Mains voltage | 3x230/400VAC 50Hz |
| Current measuring range Imin-Iref(Imax) | 0.25-5(100)A |
| Terminal cable cross-sections | 2.5-35 mm2 |
| Measuring category | CAT III |
| Customer interface | DSMR P1 V5.0.2 , RJ12 socket |
| Temperature range (operation, storage and transport) | -25°C to +70°C |
| Rel. humidity | Annual average 75%, non-condensing<br />short-term 95%, non-condensing |
| Altitude | up to 2000m |
| Measured values | Active energy (kWh), active power (kW)<br />Reactive energy (kvarh), reactive power (kvar)<br />Current (A), voltage (V), power factor (cosφ) |
| Self-consumption per phase | < 0.8W |
| Tariffs | unlimited virtual tariffs in the smart-me Cloud |
| Optical test output | 10'000 Imp/kWh |
| Communication | Wi-Fi IEEE 802.11 b/g/n (2.4 GHz)<br />LTE CAT-M1 (plug-in module, optional) |
| Wi-Fi security standard | WEP, WPA-PSK/WPA2-PSK |
| Data storage (logbook & load profile of meter readings) | 9 months |
| Data security | AES-128 CBC, signed 15min load profile of meter readings, format OCMF |
| Housing | Degree of protection: IP51 (installed on mounting plate)<br />Housing material: glass-fibre-reinforced polycarbonate<br />Dimensions: W:171mm H:236mm D:59mm |
| Ambient conditions | M1, E2, indoor |
| Mounting | Meter plate according to DIN 43857-1 |
| Server location | Switzerland |
| Protection class | II |
| Rated impulse voltage (Uimp, Safety) | 6 kV |
| Utilization category | UC 2 |
| Last modified | 24.09.2025 |

## Display

<div className="row">
<div className="col col--6 text--center">

![smart-me Nimbus 100A – Figure 2](/img/produkte-nimbus-100a/02.jpg)

</div>
<div className="col col--6">

Value / symbol Description

1.8.0 OBIS code for the displayed meter reading

Q1 Current quadrant (Q1-Q4)

Arrow Energy direction (right consumption / left delivery)

Reception (bars) Wi-Fi signal quality

0000053.2 Meter reading

5520W Currently measured power with unit (w or var)

kWh Unit of the displayed meter reading (kWh or varh)

</div>
</div>

### Rolling display

<div className="row">
<div className="col col--6 text--center">

![smart-me Nimbus 100A – Figure 3](/img/produkte-nimbus-100a/03.jpg)

</div>
<div className="col col--6">

Meter reading (OBIS code followed by meter reading) 

1.8.0 (A+) Active energy consumption total
2.8.0 (A+) Active energy delivery total
5.8.0 (Q1) Inductive reactive energy consumption total
6.8.0 (Q2) Capacitive reactive energy consumption total
7.8.0 (Q3) Inductive reactive energy delivery total
8.8.0 (Q4) Capacitive reactive energy delivery total

</div>
</div>

![smart-me Nimbus 100A – Figure 4](/img/produkte-nimbus-100a/04.jpg)

Error display (OBIS code followed by error messages)

C.60.9 Error messages (page is only displayed if errors are present)

- PhL Wiring error (incorrect phase sequence or unwired phases)

    123: Incorrect phase sequence. 1, 2 and 3 flash.

    1 : Only phase L1 connected. 2 and 3 flash.

    2 : Only phase L2 connected. 1 and 3 flash.

    3 : Only phase L3 connected. 1 and 2 flash.

    12 : Only phases L1 and L2 connected. 3 flashes.

    1  3 : Only phases L1 and L3 connected. 2 flashes.

    23 : Only phases L2 and L3 connected. 1 flashes.

- F:F:0 ( Only displayed if one of the errors below is present)

    0x00: No error

    0xX2: Nimbus meter is not calibrated

    0xX4: Microprocessor error, meter must be replaced

    0xX8: Software error, meter must be replaced

    0xX6 Not calibrated and microprocessor error, meter must be replaced

    0xXA: Not calibrated and software error, meter must be replaced

    0xXC: Microprocessor and software error, meter must be replaced

    0xXE: Not calibrated, microprocessor error and software error, meter must be replaced

    0x1X: Logbook full

- Symbol meter manipulation (magnet):  OBIS code C.51.6  Meter was negatively influenced.

- Symbol terminal cover opened ( "G"):  OBIS code C.51.2  Terminal cover is open.

Firmware (OBIS code followed by information)

C.1.6 762A MID firmware part checksum
0.2.1 V 1.1 Firmware version MID part.

### Special display functions

![smart-me Nimbus 100A – Figure 5](/img/produkte-nimbus-100a/05.jpg)

Load profile of meter readings (15min values)

Opening and exiting the memory:

- To enter the memory, press display button T1 for 3-4 seconds.

- To exit the memory, press display button T1 again for 3-4 seconds or wait 60 seconds.

- To move from one value to the next, briefly press the display button each time.

Load profile of meter readings:

- 1.8.0 and 2.8.0: OBIS codes represented in the memory

- 0001: Entry number in the memory 

- First line: 1.8.0 Active positive energy (consumption) 

- Second line: 2.8.0 Active negative energy (delivery)

- Date and time of the entry

![smart-me Nimbus 100A – Figure 6](/img/produkte-nimbus-100a/06.jpg)

![smart-me Nimbus 100A – Figure 7](/img/produkte-nimbus-100a/07.jpg)

Logbook 

Opening the logbook:

- Press the display button in normal mode for 7-8 seconds.

Entering the password to display the logbook:

The user of the NIMBUS meter receives the password from the provider.

- Briefly pressing the button increases the first digit by 1.

    If the digit is at 9, it changes back to 0 with the next press of the button.

- If the button is not pressed for 2 - 3 seconds, the display automatically switches to the next digit. This digit flashes and any number can be set again.

- Once the 4th digit has been set, password entry ends after 2 - 3 seconds and the password is checked.

- If the password is correct, the screen SMART-ME LOGBOOK is displayed.

- If the password is incorrect, the password “FALSE” is displayed for a few seconds and the display switches back to normal mode on 

- If there is no message in the logbook yet (Total : NO ENTRY), the display switches back to normal mode on display screen 2 or 3.

Exiting the logbook display:

- To exit the logbook, the display button must be held down continuously for approx. 3 - 4 seconds. 

- If the display button is not pressed within 60 seconds, the display also switches back to normal mode on display screen 2 or 3.

C.60.9 :  OBIS code of the currently displayed message 

- 0001  :  Number of the stored message; 0001 is the most recent message.

- 8192  :  Maximum possible messages in the logbook.

    When the maximum possible number of messages is stored in the logbook, no further messages are stored ⇨ LOGBOOK FULL.

    When LOGBOOK FULL, further changes to the metrologically relevant parameters are no longer possible without breaking the metrological seal.

- Second and third line:

    Identifier and type of the displayed message.

- Fourth line: Date and time of the message

Log information:

- Firmware upgrade (New Firmware)

- Terminal cover opened or closed (Open, close terminal cover)

- Manipulation detected and cleared (Start, End Meter Manipulation)

- Wiring error detected (Set, End Connection)

- New MID firmware version (New MID part)

- Time reset (Time: OLD --> NEW)

- Meter restart (Meter OFF--> ON)

- Meter has received a new calibration (New Meter Calibartion)

- Event logbook full (Last Stored Data, Logbook full)

## Dimensions and connections

![smart-me Nimbus 100A – Figure 8](/img/produkte-nimbus-100a/08.png)

## Connection diagram

Wiring

Stranded cables, solid conductors and flexible wires between 4-35 mm2 are permitted as supply lines. Flexible wires may only be installed with suitable ferrules. Further information on the connection cables can be found in the Quickstarter Guide.

Screw drive: Torx 25

Before installation, the supply lines must be de-energized and secured against manipulation.

Connection with looped-through neutral conductor

![smart-me Nimbus 100A – Figure 9](/img/produkte-nimbus-100a/09.png)

Connection diagram with excitation neutral conductor
(neutral conductor may be significantly smaller than L1, L2 or L3)

![smart-me Nimbus 100A – Figure 10](/img/produkte-nimbus-100a/10.png)

## Button functions

Button 1 (T1)

To connect the meter to a smart-me account, button 1 is pressed for 10 seconds during commissioning with the smart-me app. A device-specific Wi-Fi is then created, to which the mobile phone can connect in order to store the Wi-Fi credentials on the meter.

Button 2 (T2)

Button 2 can be used to open the logbook and the load profile of meter readings. To display the load profile of meter readings, button 2 must be pressed for 4 seconds. The password can then be entered. The currently selected digit is indicated by flashing. To change this digit, briefly press button 2. After 10 seconds, the display moves one position further.

Access passwords have 4 numeric digits.

If the password is correct, the last entry of the load profile of meter readings is displayed. To display the next entry, briefly press button 2. If button 2 is not pressed for 60 seconds, the display returns to showing the meter reading.

P1 Interface

RJ-12 socket for P1 modules

EX1

Interface for external contactor control (not yet supported)

EX2

Slot for alternative communication modules
(not yet supported)

L1

Status LED - lights up steadily when connected to the smart-me Cloud

L2

Pulse LED - shows currently measured power at 10'000 Imp / kWh

The pulse LED can display active and reactive energy. To switch from active to reactive power or vice versa, button T2 must be pressed 10 times at intervals of 1 sec. Whether active or reactive power is currently shown on the LED can be seen on the bottom line of the display.

![smart-me Nimbus 100A – Figure 11](/img/produkte-nimbus-100a/11.png)

## P1 Interface (customer interface)

The P1 interface of the Nimbus allows third-party providers or end customers to reuse the measured data in their own control or analysis systems.

This requires a P1 interface reading module with an RJ-12 plug.
It must support the “P1 Companion Standard” of Netbeheer Nederland, version 5.0.2 (26 February 2016).

Voltage:  5V DC, maximum load:  100mA DC, reinforced insulation against mains

[Learn more](/schnittstellen/p1-schnittstelle)

## Accessories

- [Meter plug-in terminals](/drittprodukte/zaehlersteckklemmen-nimbus-100a) - for easy replacement of meters without power interruption

## Cleaning

Clean the housing of the device with a dry cloth. Do not use chemical cleaning agents! 

## Maintenance and warranty information

The device is maintenance-free. In the event of damage (e.g. due to transport, storage), you must not carry out any repairs yourself. Opening the device voids the warranty claim. The same applies if a defect is attributable to external influences (e.g. lightning, water, fire, extreme temperatures and weather conditions) as well as improper or negligent use or handling. The seals may only be broken by authorized persons! 

## Shipping information

Article number: 242065

Article name: smart-me 3-Phasen Zähler Nimbus 100A

Customs tariff number: 9028.3019

Dimensions and weight without shipping packaging: 25.5x18x7 \[cm\] / 1.1kg

Manufacturer: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Commissioning

[Learn more](/konfiguration/inbetriebnahme)

## Downloads and declaration of conformity

[Datasheet German](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Datasheet English](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Declaration of conformity](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Connection diagram and circuit diagram \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No, since our meters are used for billing, it is not possible to reset them.

</details>
