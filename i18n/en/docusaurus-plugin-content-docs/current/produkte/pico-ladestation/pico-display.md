---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'This page describes the behaviour of the Pico screen.'
sidebar_label: 'Pico Display'
---
This page describes the behaviour of the Pico screen.

![Pico Display – Figure 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Pico EV Charger](/produkte/pico-ladestation)

[Pico Accessories](/produkte/pico-ladestation/pico-zubehör)

## Display

The description of the display applies to all [firmware versions](/konfiguration/firmware-update) from 0.0.28 onwards.

### Sequence: no active charging

![Pico Display – Figure 2](/img/produkte-pico-ladestation-pico-display/01.png)

Displayed when no vehicle is connected and no charging is taking place. This image can be personalised. 

### Sequence: plugged-in car waiting for authorisation

![Pico Display – Figure 3](/img/produkte-pico-ladestation-pico-display/03.png)

Displayed repeatedly when the car is plugged in but the station has not yet been authorised in the backend.

![Pico Display – Figure 4](/img/produkte-pico-ladestation-pico-display/04.png)

Displayed repeatedly when the car is plugged in but the station has not yet been authorised in the backend.



### Sequence: authentication with CarID (Pico Online)

![Pico Display – Figure 5](/img/produkte-pico-ladestation-pico-display/05.png)

Displayed when the car is plugged in and the Car-ID is being checked.

![Pico Display – Figure 6](/img/produkte-pico-ladestation-pico-display/06.png)

Displayed when the vehicle is not authorised or the Car-ID is not stored in the eCarUp driver account. The Pico then switches to the "Sequence: plugged-in car waiting for authorisation".

![Pico Display – Figure 7](/img/produkte-pico-ladestation-pico-display/07.png)

Displayed when the vehicle is authorised. The Pico then switches to the "Sequence: active charging".

### Sequence: authentication with RFID (Pico Online)

![Pico Display – Figure 8](/img/produkte-pico-ladestation-pico-display/08.png)

The RFID card is being checked. With a very good connection, the text may not be displayed at all.

![Pico Display – Figure 9](/img/produkte-pico-ladestation-pico-display/09.png)

Displayed when the RFID is authorised.

![Pico Display – Figure 10](/img/produkte-pico-ladestation-pico-display/10.png)

Displayed when the RFID authorisation was successful and no car is plugged in. If a car is plugged in, this display is skipped and the Pico switches to the "Sequence: active charging".

![Pico Display – Figure 11](/img/produkte-pico-ladestation-pico-display/11.png)

Displayed when the RFID is not authorised. The Pico then switches to the "Sequence: plugged-in car waiting for authorisation" or the "Sequence: no active charging".



### Sequence: authentication with QR code (Pico Online)

![Pico Display – Figure 12](/img/produkte-pico-ladestation-pico-display/12.png)

Charging was successfully authorised with the QR code.

![Pico Display – Figure 13](/img/produkte-pico-ladestation-pico-display/10.png)

Displayed when the authorisation was successful and no car is plugged in. If a car is plugged in, this display is skipped and the Pico switches to the "Sequence: active charging".

### Sequence: charging start

![Pico Display – Figure 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Value / Symbol Description

6A Minimum charging current



![Pico Display – Figure 15](/img/produkte-pico-ladestation-pico-display/15.png)

Value / Symbol Description

32A Max. permitted charging current 



When the station increases the maximum charging current, this image is shown briefly with the new max. charging current.

### Sequence: active charging

![Pico Display – Figure 16](/img/produkte-pico-ladestation-pico-display/16.png)

Value / Symbol Description

0.59 Consumption since the start of charging

kWh Unit of the displayed consumption

Battery No meaning

![Pico Display – Figure 17](/img/produkte-pico-ladestation-pico-display/17.png)

Value / Symbol Description

22.09.23 Date

15:18:43 Start of charging

00:05:13 Duration of active charging

![Pico Display – Figure 18](/img/produkte-pico-ladestation-pico-display/18.png)

Value / Symbol Description

1.81 Power 

kW Unit of the displayed power

….. blue = max. power released by the station (1 pixel = 1A) 

 green = current consumption of the car per phase (1 pixel = 1A)

### Sequence: end of charging

![Pico Display – Figure 19](/img/produkte-pico-ladestation-pico-display/19.png)

Value / Symbol Description

32A Max. permitted current 

When the station reduces the maximum charging current, this image is shown briefly with the new max. charging current

![Pico Display – Figure 20](/img/produkte-pico-ladestation-pico-display/20.png)

Value / Symbol Description

6A Minimum charging current



![Pico Display – Figure 21](/img/produkte-pico-ladestation-pico-display/21.png)

Value / Symbol Description

BYE Successfully logged off

![Pico Display – Figure 22](/img/produkte-pico-ladestation-pico-display/22.png)

Value / Symbol Description

0.59 Total consumption of the last charging session

 kWh Unit of the displayed consumption

After logging off, the total consumption of the last charging session is displayed for approx. 14 sec. 

### Sequence: restarting the station

This sequence describes restarting a station via the portal

![Pico Display – Figure 23](/img/produkte-pico-ladestation-pico-display/21.png)

Value / Symbol Description

BYE Signal for the restart

![Pico Display – Figure 24](/img/produkte-pico-ladestation-pico-display/22.png)

Value / Symbol Description

0.59 Total consumption of the last charging session

kWh Unit of the displayed consumption

![Pico Display – Figure 25](/img/produkte-pico-ladestation-pico-display/25.png)

The screen remains black for approx. 20 sec.

![Pico Display – Figure 26](/img/produkte-pico-ladestation-pico-display/26.png)

This is the first sign that the Pico is starting up.

After the sequence "restarting the station", the Pico switches to the MID mode sequence



### Error messages and warnings

![Pico Display – Figure 27](/img/produkte-pico-ladestation-pico-display/27.png)

Fatal error

- Error 1: Problem with the Wi-Fi module

- Error 2: No M4 communication

- Error 3: An error with the meter SOM

- Error 4: Problem with the RDC sensor


![Pico Display – Figure 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problem with the SIM


![Pico Display – Figure 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- The diode in the car is not correct. Check the charging cable and the plug connection to the car 


![Pico Display – Figure 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- The charging cable reports an error. Check that it is plugged in correctly. 


![Pico Display – Figure 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Load shedding is active. The charging power has been reduced. 




![Pico Display – Figure 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- The RDC-DD 6mA according to IEC 62955 (residual direct current detecting device) has tripped. Charging was stopped for safety reasons. 


![Pico Display – Figure 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- The charging station has no connection to the smart-me Cloud. 





![Pico Display – Figure 34](/img/produkte-pico-ladestation-pico-display/34.png)

LED lights up orange/red in the upper right corner of the display

- Indicates an error message. After 30 seconds at the latest, the error image (e.g. Cable Error) is shown on the screen.




### MID Mode

To enter MID mode, you can click "Show meter reading on display" (Zählerstand auf Display anzeigen) in the extended actions in the smart-me portal, start or restart the station, or use the brightness sensor.

Using a torch on the brightness sensor, the user can flash the following code: dark - light - dark - light - dark (each state must last between 1 and 5 seconds)

![Pico Display – Figure 35](/img/produkte-pico-ladestation-pico-display/35.png)

Value / Symbol Description

Dot Light sensor

![Pico Display – Figure 36](/img/produkte-pico-ladestation-pico-display/36.png)

Value / Symbol Description
M MID mode active

0.2.1 Version and checksum according to OBIS code

v 2.2 Firmware version number

CRC 4F55 Firmware checksum

![Pico Display – Figure 37](/img/produkte-pico-ladestation-pico-display/37.png)

Value / Symbol Description
M   MID mode active

F.F.0   OBIS code

03   Error code

Only displayed if there is an error message. 

Error code Description

x1-x3: Charging station is not calibrated
x4: Display process error (checksum)

1x: Error in the meter SOM (hardware)

2x-3x: Meter SOM error (checksum)

4x: Meter SOM error (flash) Other: General meter SOM error 

![Pico Display – Figure 38](/img/produkte-pico-ladestation-pico-display/38.png)

Value / Symbol Description
M MID mode active

1.8.0 OBIS code

00013.04 kWh The meter reading in kWh with 2 decimal places.
