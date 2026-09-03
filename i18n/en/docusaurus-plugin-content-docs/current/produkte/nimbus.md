---
title: '3-Phase Meter Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Mounting on meter mounting plate according to DIN43857-1'
sidebar_label: '3-Phase Meter Nimbus 100A'
---
![3-Phase Meter Nimbus 100A – figure 1](/img/_en/products-3-phase-meter-nimbus-100a/01.png)

[Meter plug-in terminals for Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Functions

- Mounting on meter mounting plate according to DIN43857-1

- Communication to the smart-me cloud: WLAN 2.4 GHz

- Compatible with meter plug-in terminals (e.g. Hager and Seidl)

- Customer interface DSMR P1 V5.0.2

- Installation with the free smart-me app.

- Invoicing with the smart-me billing tool

- Control with if/then actions or event actions

- Visualisations

- Interfaces from the system via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me cloud 

- Signed meter reading (15min values) according to OCMF


### A secure anchor for your blockchain solution

The Nimbus counter was designed as a trusted "hardware oracle" to solve the critical oracle problem when connecting IoT devices to decentralized systems.

The ECDSA signature process:

1.  Hardware key: A private key is generated on a crypto coprocessor and never leaves it.

2.  Signature on the edge: Every 15 minutes, the meter readings (OCMF format) are signed with the private key via ECDSA using a SHA-256 hash function.

3.  Verifiable origin: The result is a data packet with a digital signature. Using the counter's public key, any application can verify beyond doubt that the data is authentic and unchanged.


The Nimbus thus offers a hardware-based security guarantee that is superior to pure software solutions and is the perfect basis for robust P2P trading platforms, local electricity communities (LEG) and other decentralized energy services.

## Technical data

<Video src="" title="Custom embed" />

## Display

![3-Phase Meter Nimbus 100A – figure 2](/img/_en/products-3-phase-meter-nimbus-100a/02.jpg)

Value / Symbol Description

1.8.0 OBIS code for the displayed meter reading

Q1 Current quadrant (Q1-Q4)

Arrow Energy direction (right supply / left delivery)

Reception (bar) WLAN signal quality

0000053.2 Meter reading

5520W Currently measured power with unit (w or var)

kWh Unit of the displayed meter reading (kWh or varh)

### Rolling display

![3-Phase Meter Nimbus 100A – figure 3](/img/_en/products-3-phase-meter-nimbus-100a/03.jpg)

Meter reading (OBIS code followed by meter reading) 

1.8.0 (A+) Active energy consumption total
2.8.0 (A+) Active energy supply total
5.8.0 (Q1) Inductive reactive energy consumption total
6.8.0 (Q2) Capacitive reactive energy consumption total
7.8.0 (Q3) Inductive reactive energy supply total
8.8.0 (Q4) Capacitive reactive energy supply total

![3-Phase Meter Nimbus 100A – figure 4](/img/_en/products-3-phase-meter-nimbus-100a/04.jpg)

Fehleranzeige (OBIS Code gefolgt von Fehlermeldungen)

C.60.9 Error messages (page is only displayed if errors are present)

- PhL Wiring error (bottle phase sequence or phases not wired)
    123: Incorrect phase sequence. 1, 2 and 3 flashing.
    1 : Only phase L1 connected. 2 and 3 flashing.
    2 : Only phase L2 connected. 1 and 3 flashing.
    3 : Only phase L3 connected. 1 and 2 flashing.
    12 : Only phases L1 and L2 connected. 3 flashes.
    1 3 : Only phases L1 and L3 connected. 2 flashes.
    23 : Only phases L2 and L3 connected. 1 flashes.

- F:F:0 ( Only displayed if one of the errors below is present)
    0x00: No error
    0xX2: Nimbus meter is not calibrated
    0xX4: Error with microprocessor, meter must be replaced
    0xX8: Software error, meter must be replaced
    0xX6: Not calibrated and microprocessor error, meter must be replaced
    0xXA: Not calibrated and software error, meter must be replaced
    0xXC: Microprocessor and software error, meter must be replaced
    0xXE: Not calibrated, microprocessor and software error, meter must be replaced
    0x1X: Logbook full

- Meter tampering symbol (magnet): 
    OBIS code C.51.6 Meter has been negatively affected.

- Terminal cover open symbol ("G"): 
    OBIS code C.51.2 Terminal cover is open.





Firmware (OBIS code followed by information)

C.1.6 762A MID Firmware part checksum
0.2.1 V 1.1 Firmware Version MID part.

### Special functions display

![3-Phase Meter Nimbus 100A – figure 5](/img/_en/products-3-phase-meter-nimbus-100a/05.jpg)

Zählerstandsgang (15min Werte)

Opening and exiting the memory:

- To access the memory, press the display button T1 for 3-4 seconds.

- To exit the memory, press the display button T1 again for 3-4 seconds or wait for 60 seconds.

- To move from one value to the next, press the display button briefly each time.


Meter reading cycle:

- 1.8.0 and 2.8.0: Mapped OBIS codes in the memory

- 0001: Entry number in the memory 

- First line: 1.8.0 Active positive energy (supply) 

- Second line: 2.8.0 Active negative energy (delivery)

- Date and time of the entry


![3-Phase Meter Nimbus 100A – figure 6](/img/_en/products-3-phase-meter-nimbus-100a/06.jpg)

![3-Phase Meter Nimbus 100A – figure 7](/img/_en/products-3-phase-meter-nimbus-100a/07.jpg)

Logbook

Open the logbook:

- Press the display button for 7-8 seconds in normal mode.


Enter the password for displaying the logbook:

- The NIMBUS Meter user receives the password from the provider.

- Pressing the button briefly increases the first digit by 1. If the digit is at 9, it changes back to 0 the next time the button is pressed.

- If the button is not pressed for 2 - 3 seconds, the system automatically switches to the next digit. This digit flashes and any number can be set again.

- If the 4th digit is set, the password entry is cancelled after 2 - 3 seconds and the password is checked.

- If the password is correct, the SMART-ME LOGBOOK screen is displayed.

- If the password is not correct, the password "FALSE" is displayed for a few seconds and the display switches back to normal mode. 

- If there is still no message in the logbook (Total : NO ENTRY), the display switches back to normal mode on display screen 2 or 3.


Exiting the logbook display:

- To exit the logbook, press and hold the display button for approx. 3 - 4 seconds. 

- If the display button is not pressed within 60 seconds, the display also switches back to normal mode on display screen 2 or 3.


C.60.9 : OBIS code of the currently displayed message 

- 0001 : Number of the stored message 0001 is the latest message.

- 8192 : Maximum possible messages in the logbook Once the maximum possible messages have been saved in the logbook, no further messages are saved ⇨ LOGBOOK FULL If LOGBOOK FULL, further changes to the calibration-relevant parameters are no longer possible without violating the calibration-related security.

- Second and third line: Identifier and type of message displayed.

- Fourth line: Date and time of the message


Log information:

- Firmware upgrade (New Firmware)

- Terminal cover opened or closed (Open, close terminal cover)

- Manipulation detected and cancelled (Start, End Meter Manipulation)

- Wiring error detected (Set, End Connection)

- New MID firmware version (New MID part)

- Time reset (Time: OLD --> NEW)

- Meter restarted (Meter OFF--> ON)

- Meter has received new calibration (New Meter Calibartion)

- Event logbook full (Last Stored Data, Logbook full)


## Dimensions and connections

![3-Phase Meter Nimbus 100A – figure 8](/img/_en/products-3-phase-meter-nimbus-100a/08.png)

### Wiring diagram

Ropes, solid conductors and stranded wires between 4-35 mm2 are permitted as supply lines. 

Stranded wires may only be fitted with suitable ferrules. Further information on the connection cables can be found in the Quickstarter Guide.



Screw drive: Torx 25



Before installation, the supply cables must be de-energized and secured against tampering.

Wiring with looped through neutral

![3-Phase Meter Nimbus 100A – figure 9](/img/_en/products-3-phase-meter-nimbus-100a/09.png)

Wiring with single ended neutral (diameter of N can be smaller then L1, L2, L3)

![3-Phase Meter Nimbus 100A – figure 10](/img/_en/products-3-phase-meter-nimbus-100a/10.png)

## Key functions

Button 1 (T1)

To connect the meter to a smart-me account, press button 1 for 10 seconds during commissioning with the smart-me app. A device-specific Wifi is then created to which the mobile phone can connect in order to store the Wifi access data.

Button 2 (T2)

Button 2 can be used to open the logbook and the counter reading. To display the counter reading, press button 2 for 4 seconds. The password can then be entered. The currently selected digit is displayed by flashing. To change this digit, press button 2 briefly. After 10 seconds, the display moves back one digit.

Access passwords have 4 numerical digits.

If the password is correct, the last entry of the counter reading is displayed. To display the next entry, button 2 must be pressed briefly. If button 2 is not pressed for 60 seconds, the display switches back to the counter reading display.

P1 interface

RJ-12 socket for 3rd-party P1 modules.

EX1

Interface for external contactor control (not yet supported)

EX2

Slot for additional communication modules (not yet supported)

L1

Status LED - lights up statically when connected to the smart-me Cloud

L2

Pulse LED - shows currently measured power in 10,000 imp / kWh

The Implus LED can display active and reactive energy. To switch from active to reactive power or vice versa, the T2 button must be pressed 10 times with an interval of 1 second. Whether the active or reactive power is currently displayed on the LED can be seen on the bottom line of the display.

![3-Phase Meter Nimbus 100A – figure 11](/img/_en/products-3-phase-meter-nimbus-100a/11.png)

## P1 Interface

The P1 interface of the Nimbus enables third-party providers or end customers to use the measured data in their own control or analysis systems.

This requires a P1 interface readout module with RJ-12 connector.
This must fulfil the "P1 Companion Standard" from Netbeheer Nederland. Version 5.0.2 (26 February 2016).

[Read more](https://dok.smart-me.com/schnittstellen/p1-schnittstelle)

## Accessories

- [Meter plug-in terminals](/drittprodukte/zaehlersteckklemmen-nimbus-100A) \- for easy change of defect or new meters without disconnecting the power.


## Shipping information

Article number: 242065
Article name: smart-me 3-phase counter Nimbus 100A

Customs tariff number: 9028.3019

Weight with packaging: 

## Commissioning

[Learn more](/konfiguration/inbetriebnahme)

## Downloads and certificate of conformity

[Datasheet German](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Datasheet English](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Certificate of Conformity](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Wiring\_Diagramm\_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)
