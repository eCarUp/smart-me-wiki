---
title: 'Pico display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Procedure no active charge'
sidebar_label: 'Pico display'
---
![Pico display – figure 1](/img/_en/products-pico-ev-charger-pico-display/01.png)

[Pico EV Charger](/produkte/pico-ladestation)

[Pico Accessories](/produkte/pico-ladestation/pico-zubehör)

## Display

### Procedure no active charge

![Pico display – figure 2](/img/_en/products-pico-ev-charger-pico-display/02.png)

Displayed when no vehicle is connected and no charging is taking place. This image can be personalised

![Pico display – figure 3](/img/_en/products-pico-ev-charger-pico-display/03.png)

Displayed when the car is plugged in but the station is not  authorised yet in the backend (eCarUp).



### Procedure Authentication with RFID (Pico Online)

![Pico display – figure 4](/img/_en/products-pico-ev-charger-pico-display/04.png)

RFID card is being checked. If the connection is very good, this text may not be displayed at all.

![Pico display – figure 5](/img/_en/products-pico-ev-charger-pico-display/05.png)

Hi, appears in this event if the station takes longer to create the authentication at the backend. For instance, if the Internet connection is poor.

![Pico display – figure 6](/img/_en/products-pico-ev-charger-pico-display/06.png)

The authentication was successful.

![Pico display – figure 7](/img/_en/products-pico-ev-charger-pico-display/07.png)

When the Car ID is activated in smart-me and the authentication is successful, the countdown starts. After the countdown of 22 seconds, the charging process begins. 

This is for compatibility for Mitioniq 5 cars.

![Pico display – figure 8](/img/_en/products-pico-ev-charger-pico-display/08.png)

This display appears when:

- The RFID is not authorised at this station.

- Or no driver account is assigned to the RFID.


After a faulty authentication, the pico switches to Procedure no active charge.

### Procedure start of charge

![Pico display – figure 9](/img/_en/products-pico-ev-charger-pico-display/09.png)

Value / Symbol Description

6A Minimum charging current



![Pico display – figure 10](/img/_en/products-pico-ev-charger-pico-display/10.png)

Value / Symbol Description

32A Max allowed charging current 

If the maximum charging current of the station is increased , it briefly displays this image with the new max. charging current.

### Procedure active charge

![Pico display – figure 11](/img/_en/products-pico-ev-charger-pico-display/11.png)

Value / Symbol Description

0.59 Consumption since beginning of the charging

kWh Unit of the displayed consumption

Battery No meaning

![Pico display – figure 12](/img/_en/products-pico-ev-charger-pico-display/12.png)

Value / Symbol Description

22.09.23 Date

15:18:43 Start of charging

00:05:13 Duration of active charge

![Pico display – figure 13](/img/_en/products-pico-ev-charger-pico-display/13.png)

Value / Symbol Description

1.81 Power

kW Unit of the displayed power

..... blue = max. power released by the station (1 pixel = 1A) 

green = Car's charging current per phase. (1 pixel = 1A)

### Procedure ending the charge

![Pico display – figure 14](/img/_en/products-pico-ev-charger-pico-display/14.png)

Value / Symbol Description

32A Max allowed charging current 

![Pico display – figure 15](/img/_en/products-pico-ev-charger-pico-display/15.png)

Value / Symbol Description

6A Minimum charging current



![Pico display – figure 16](/img/_en/products-pico-ev-charger-pico-display/16.png)

Value / Symbol Description

BYE Successfully logged off

![Pico display – figure 17](/img/_en/products-pico-ev-charger-pico-display/17.png)

Value / Symbol Description

0.59 Total consumption from last charge

 kWh Unit of the displayed consumption

After logging off, the total consumption of the last charge is displayed for approx. 14 sec.

### Procedure reboot station

This procedure describes the restart a station via the portal

![Pico display – figure 18](/img/_en/products-pico-ev-charger-pico-display/16.png)

Value / Symbol Description

BYE Successfully logged off

![Pico display – figure 19](/img/_en/products-pico-ev-charger-pico-display/17.png)

Value / Symbol Description

0.59 Total consumption from last charge

 kWh Unit of the displayed consumption

![Pico display – figure 20](/img/_en/products-pico-ev-charger-pico-display/20.png)

The screen remains black for approx. 20 sec.

![Pico display – figure 21](/img/_en/products-pico-ev-charger-pico-display/21.png)

This is the first sign that the Pico is starting up.

After rebooting the station, the Pico switches to MID mode.



### Errormessages and Warnings

![Pico display – figure 22](/img/_en/products-pico-ev-charger-pico-display/22.png)

Fatal flaw

- Error 1: Problem with the wifi module

- Error 2: We have no M4 communication

- Error 3: An error with the meter SOM

- Error 4: Problem with the RDC sensor


![Pico display – figure 23](/img/_en/products-pico-ev-charger-pico-display/23.png)

SIM Error

- Problem with the SIM


![Pico display – figure 24](/img/_en/products-pico-ev-charger-pico-display/24.png)

Diode Error

- The diode in the car is not correct. Check the charging cable and the plug connection to the car. 


![Pico display – figure 25](/img/_en/products-pico-ev-charger-pico-display/25.png)

Cable Error

- The charging cable reports an error. Check if the cable is plugged in correctly 


![Pico display – figure 26](/img/_en/products-pico-ev-charger-pico-display/26.png)

P Limit

- Load shedding is active. The load power has been reduced. 




![Pico display – figure 27](/img/_en/products-pico-ev-charger-pico-display/27.png)

Warn RDC

- The RDC-DD 6mA according to IEC 62955 (direct current fault detection device) has tripped. The charge was terminated for safety reasons. 


![Pico display – figure 28](/img/_en/products-pico-ev-charger-pico-display/28.png)

Reception Bar with X

- The charging station has no connection to the smart-me cloud. 





![Pico display – figure 29](/img/_en/products-pico-ev-charger-pico-display/29.png)

LED lights up orange/red in the upper right corner of the display

- Indication of an error message. After 30 seconds at the latest, the error image (e.g. Cable Error) is displayed on the screen.


### MID Mode

Um in den MID Modus zukommen,  kann man über die erweitere  Aktion im smart-me Portal auf "Zählerstand auf Display anzeigen" klicken, Start, bzw. Neustart der Station oder über den Helligkeitssensor.

Using a flashlight, the user can flash the following

code: Dark - Light - Dark - Light - Dark - Light -Dark - Light -Dark Each state must last between 1 and 4 seconds.

![Pico display – figure 30](/img/_en/products-pico-ev-charger-pico-display/30.png)

Value / Symbol Description

Dot Light sensor

![Pico display – figure 31](/img/_en/products-pico-ev-charger-pico-display/31.png)

Value / Symbol Description
M MID mode active

0.2.1 Version and checksum according to Obis code

v 2.2 Version number of firmware

CRC 4F55 Checksum of the firmware

![Pico display – figure 32](/img/_en/products-pico-ev-charger-pico-display/32.png)

Value / Symbol Description

M MID mode active

F.F.0 Obis - Code

03 Error code

Only displayed if there is an error message.. 

Error code Specification

x1-x3: Charging station is not calibrated
x4: Error display process (checksum)
1x: Error in meter SOM (hardware)
2x-3x: Error meter SOM (checksum)
4x: error meter SOM (flash) Other: General error meter SOM 

![Pico display – figure 33](/img/_en/products-pico-ev-charger-pico-display/33.png)

Value / Symbol Description

M MID mode active

1.8.0 Obis- Code

00013.04 kWh The meter reading in kWh with 2 decimal points.
