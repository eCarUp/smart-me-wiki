---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Mounting on a meter mounting plate according to DIN43857-1'
sidebar_label: '3-Phase Meter Nimbus 100A'
---
![smart-me Nimbus 100A – Figure 1](/img/produkte-nimbus/01.png)

[Meter plug-in terminals for Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Functions

- Mounting on a meter mounting plate according to DIN43857-1

- Communication with the smart-me Cloud: WLAN 2.4 GHz

- Compatible with meter plug-in terminals (e.g. Hager and Seidl)

- DSMR P1 V5.0.2 customer interface

- [Installation](/konfiguration/inbetriebnahme) with the free smart-me App.

- Billing with the [smart-me Billing Tool](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](/konfiguration/visualisierung)

- [Interfaces](/) out of the system via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me Cloud 

- Signed meter reading profile (15-min values) according to OCMF


### A secure anchor for your blockchain solution

The Nimbus meter was designed as a trustworthy "hardware oracle" to solve the critical oracle problem when connecting IoT devices to decentralized systems.

The ECDSA signature process:

1.  Hardware key: A private key is generated on a crypto coprocessor and never leaves it at any time.

2.  Signature on the edge: Every 15 minutes, the meter readings (OCMF format) are signed with the private key using ECDSA over a SHA-256 hash function.

3.  Verifiable origin: The result is a data packet with a digital signature. Using the meter's public key, any application can verify beyond doubt that the data is authentic and unaltered.


The Nimbus therefore offers a hardware-based security guarantee that is superior to purely software-based solutions and provides the perfect basis for robust P2P trading platforms, local electricity communities (LEC) and other decentralized energy services.

## Technical data

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4UWY0pXsfUBgArWNNkGZGvIscStumVrGrU7_h2DGk1YNe_XYOxPLnZoJlARRCO86Fz-aOo0cb0pGh/pubhtml?gid=0&range=A1:B30&single=true&widget=false&headers=false&chrome=false" aspect="1.214" title="3-Phase Meter Nimbus 100A" />

## Display

![smart-me Nimbus 100A – Figure 2](/img/produkte-nimbus/02.jpg)

Value / symbol description

1.8.0 OBIS\-code for the displayed meter reading

Q1 Current quadrant (Q1-Q4)

Arrow Energy direction (right consumption / left delivery)

Reception (bars) WLAN signal quality

0000053.2 Meter reading

5520W Currently measured power with unit (w or var)

kWh Unit of the displayed meter reading (kWh or varh)

### Rolling display

![smart-me Nimbus 100A – Figure 3](/img/produkte-nimbus/03.jpg)

Meter reading (OBIS code followed by meter reading) 

1.8.0 (A+) Active energy consumption total
2.8.0 (A+) Active energy delivery total
5.8.0 (Q1) Inductive reactive energy consumption total
6.8.0 (Q2) Capacitive reactive energy consumption total
7.8.0 (Q3) Inductive reactive energy delivery total
8.8.0 (Q4) Capacitive reactive energy delivery total

![smart-me Nimbus 100A – Figure 4](/img/produkte-nimbus/04.jpg)

Error display (OBIS code followed by error messages)

C.60.9 Error messages (page is only displayed if errors are present)

- PhL Wiring error (wrong phase sequence or unwired phases)
    123: Wrong phase sequence. 1, 2 and 3 flash.
    1 : Only phase L1 connected. 2 and 3 flash.
    2 : Only phase L2 connected. 1 and 3 flash.
    3 : Only phase L3 connected. 1 and 2 flash.
    12 : Only phase L1 and L2 connected. 3 flashes.
    1  3 : Only phase L1 and L3 connected. 2 flashes.
    23 : Only phase L2 and L3 connected. 1 flashes.

- F:F:0 ( Only displayed if one of the errors below is present)
    0x00: No error
    0xX2: Nimbus meter is not calibrated
    0xX4: Error with microprocessor, meter must be replaced
    0xX8: Software error, meter must be replaced
    0xX6 Not calibrated and microprocessor error, meter must be replaced
    0xXA: Not calibrated and software error, meter must be replaced
    0xXC: Microprocessor and software error, meter must be replaced
    0xXE: Not calibrated, microprocessor error and software error, meter must be replaced
    0x1X: Logbook full

- Symbol Meter Manipulation (magnet):  OBIS code C.51.6  Meter has been negatively influenced.

- Symbol terminal cover opened ( "G"):  OBIS code C.51.2  Terminal cover is open.





Firmware (OBIS code followed by information)

C.1.6 762A MID firmware part checksum
0.2.1 V 1.1 Firmware version MID part.

### Special display functions

![smart-me Nimbus 100A – Figure 5](/img/produkte-nimbus/05.jpg)

Meter reading profile (15-min values)

Opening and leaving the memory:

- To enter the memory, press the display button T1 for 3-4 seconds.

- To leave the memory, press the display button T1 again for 3-4 seconds or wait 60 seconds.

- To move from one value to the next, briefly press the display button each time.


Meter reading profile:

- 1.8.0 and 2.8.0: OBIS codes shown in the memory

- 0001: Entry number in the memory 

- First line: 1.8.0 Active positive energy (consumption) 

- Second line: 2.8.0 Active negative energy (delivery)

- Date and time of the entry


![smart-me Nimbus 100A – Figure 6](/img/produkte-nimbus/06.jpg)

![smart-me Nimbus 100A – Figure 7](/img/produkte-nimbus/07.jpg)

Logbook 

Opening the logbook:

- Press the display button in normal mode for 7-8 seconds.


Entering the password to display the logbook:

The user of the NIMBUS meter receives the password from the provider.

- Briefly pressing the button increases the first digit by 1.
    If the digit is at 9, it changes back to 0 the next time the button is pressed.

- If the button is not pressed for 2 - 3 seconds, the next digit is selected automatically. This digit flashes and any number can be set again.

- Once the 4th digit has been set, password entry ends after 2 - 3 seconds and the password is checked.

- If the password is correct, the SMART-ME LOGBOOK screen is displayed.

- If the password is not correct, the password “FALSE” is displayed for a few seconds and the display switches back to normal mode to 

- If there is no message in the logbook yet (Total : NO ENTRY), the display switches back to normal mode to display screen 2 or 3.


Ending the logbook display:

- To leave the logbook, the display button must be held down continuously for approx. 3 - 4 seconds. 

- If the display button is not pressed within 60 seconds, the display likewise switches back to normal mode to display screen 2 or 3.


C.60.9 :  OBIS code of the currently displayed message 

- 0001  :  Number of the stored message; 0001 is the newest message.

- 8192  :  Maximum possible messages in the logbook.
    Once the maximum possible number of messages is stored in the logbook, no further messages are stored ⇨ LOGBOOK FULL.
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

- Meter has received new calibration (New Meter Calibartion)

- Event logbook full (Last Stored Data, Logbook full)


## Dimensions and connections

![smart-me Nimbus 100A – Figure 8](/img/produkte-nimbus/08.png)

## Connection diagram

Wiring

Cables, solid conductors and stranded wires between 4-35 mm2 are permitted as supply lines. Stranded wires may only be installed with matching ferrules. Further information on the connecting cables can be found in the Quickstarter Guide.



Screw drive: Torx 25



Before installation, the supply lines must be de-energized and secured against manipulation.






Connection with looped-through neutral conductor

![smart-me Nimbus 100A – Figure 9](/img/produkte-nimbus/09.png)

Connection diagram with excitation neutral conductor
(neutral conductor may be significantly smaller than L1, L2 or L3)

![smart-me Nimbus 100A – Figure 10](/img/produkte-nimbus/10.png)

## Button functions

Button 1 (T1)

To connect the meter to a smart-me account, button 1 is pressed for 10 seconds during commissioning with the smart-me App. A device-specific WiFi is then created, which the mobile phone can connect to in order to store the WiFi access data on it.

Button 2 (T2)

Button 2 can be used to open the logbook and the meter reading profile. To display the meter reading profile, button 2 must be pressed for 4 seconds. The password can then be entered. The currently selected digit is indicated by flashing. To change this digit, button 2 can be pressed briefly. After 10 seconds, the display moves one position further back.

Access passwords have 4 numeric digits.

If the password is correct, the last entry of the meter reading profile is displayed. To display the next entry, button 2 must be pressed briefly. If button 2 is not pressed for 60 seconds, the display switches back to displaying the meter reading.

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

Pulse LED - shows currently measured power at 10'000 imp / kWh

The pulse LED can show active and reactive energy. To switch from active to reactive power or vice versa, button T2 must be pressed 10 times at intervals of 1 second. Whether active or reactive power is currently shown on the LED can be seen on the bottom line of the display.

![smart-me Nimbus 100A – Figure 11](/img/produkte-nimbus/11.png)

## P1 Interface (customer interface)

The Nimbus P1 interface allows third-party providers or end customers to reuse the measured data in their own control or analysis systems.

A P1 interface readout module with an RJ-12 connector is required for this.
It must support the “P1 Companion Standard” from Netbeheer Nederland, version 5.0.2 (26 February 2016).

Voltage:  5V DC, maximum load:  100mA DC, reinforced insulation against the mains

[Learn more](/schnittstellen/p1-schnittstelle)

## Accessories

- [Meter plug-in terminals](/drittprodukte/zaehlersteckklemmen-nimbus-100A) - for easy replacement of meters without interrupting the power supply


## Cleaning

Clean the housing of the device with a dry cloth. Do not use any chemical cleaning agents! 

## Maintenance and warranty information

The device is maintenance-free. In the event of damage (e.g. due to transport or storage), no repairs may be carried out by yourself. Opening the device voids the warranty claim. The same applies if a defect is due to external influences (e.g. lightning, water, fire, extreme temperatures and weather conditions) as well as in the event of improper or negligent use or handling. The seals may only be broken by authorized persons! 

## Shipping information

Article number: 242065

Article name: smart-me 3-Phase Meter Nimbus 100A

Customs tariff number: 9028.3019

Dimension and weight without shipping packaging: 25.5x18x7 \[cm\] / 1.1kg

Manufacturer: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Commissioning

[Learn more](/konfiguration/inbetriebnahme)

## Downloads and declaration of conformity

[Data sheet German](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Data sheet English](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Declaration of conformity](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Connection diagram and circuit diagram \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

### Can I reset the meter reading to zero?

No, since our meters are used for billing, it is not possible to reset them.
