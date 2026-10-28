---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'This page describes the behaviour of the Pico screen.'
sidebar_label: 'Pico Display'
---
This page describes the behaviour of the Pico screen.

![Pico Display – Figure 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Pico EV Charger](/produkte/pico-ladestation)

[Pico Accessories](/produkte/pico-ladestation/pico-zubehoer)

## Display

The description of the display applies to all [firmware versions](/konfiguration/firmware-update) from 0.0.28 onwards.

### Sequence: no active charging

<div className="row">
<div className="col col--8">

Displayed when no vehicle is connected and no charging is taking place. You can personalise this image yourself. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Sequence: plugged-in car waiting for approval

<div className="row">
<div className="col col--8">

Displayed repeatedly when the car is plugged in but the station has not yet been approved in the backend.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed repeatedly when the car is plugged in but the station has not yet been approved in the backend.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>



### Sequence: authentication with CarID (Pico Online)

<div className="row">
<div className="col col--8">

Displayed when the car is plugged in and the Car ID is being checked.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the vehicle is not authorised or the Car ID is not stored in the eCarUp driver account. The Pico then switches to the "Sequence: plugged-in car waiting for approval"

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the vehicle is authorised. The Pico then switches to the "Sequence: active charging".

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Sequence: authentication with RFID (Pico Online)

<div className="row">
<div className="col col--8">

The RFID card is being checked. With a very good connection, the text may not be displayed at all.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the RFID is authorised.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the RFID authorisation was successful and no car is plugged in. If a car is plugged in, this display is skipped and the Pico switches to the "Sequence: active charging".

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the RFID is not authorised. The Pico then switches to the "Sequence: plugged-in car waiting for approval" or the "Sequence: no active charging".

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>



### Sequence: authentication with QR code (Pico Online)

<div className="row">
<div className="col col--8">

Charging was successfully approved with the QR code.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Displayed when the authorisation was successful and no car is plugged in. If a car is plugged in, this display is skipped and the Pico switches to the "Sequence: active charging".

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Sequence: start of charging

<div className="row">
<div className="col col--8">

 Value / symbol Description

6A Minimum charging current

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>



<div className="row">
<div className="col col--8">

Value / symbol Description

32A Max. permitted charging current 

When the station increases the maximum charging current, this image is briefly displayed with the new max. charging current.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Sequence: active charging

<div className="row">
<div className="col col--8">

Value / symbol Description

0.59 Consumption since start of charging

kWh Unit of the displayed consumption

Battery No meaning

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description

22.09.23 Date

15:18:43 Start of charging

00:05:13 Duration of active charging

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description

1.81 Power 

kW Unit of the displayed power

….. blue = max. power released by the station (1 pixel = 1A) 

 green = current drawn by the car per phase (1 pixel = 1A)

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Sequence: end of charging

<div className="row">
<div className="col col--8">

Value / symbol Description

32A Max. permitted current 

When the station reduces the maximum charging current, this image is briefly displayed with the new max. charging current

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description

6A Minimum charging current

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>



<div className="row">
<div className="col col--8">

Value / symbol Description

BYE Successfully logged off

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description

0.59 Total consumption of the last charging session

 kWh Unit of the displayed consumption

After logging off, the total consumption of the last charging session is displayed for approx. 14 sec. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Sequence: restarting the station

This sequence describes restarting a station via the portal

<div className="row">
<div className="col col--8">

Value / symbol Description

BYE Signal for the restart

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description

0.59 Total consumption of the last charging session

kWh Unit of the displayed consumption

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--8">

The screen stays black for approx. 20 sec.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--8">

This is the first sign that the Pico is starting up.

After the sequence for restarting the station, the Pico switches to the MID Mode sequence

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>



### Fault messages and warnings

<div className="row">
<div className="col col--8">

Fatal fault

- Error 1: Problem with the Wi-Fi module

- Error 2: We have no M4 communication

- Error 3: An error with the meter SOM

- Error 4: Problem with the RDC sensor

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>


<div className="row">
<div className="col col--8">

SIM Error

- Problem with the SIM

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Diode Error

- The diode in the car is not correct. Check the charging cable and the plug connection to the car 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Cable Error

- The charging cable reports an error. Check that it is plugged in correctly. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>


<div className="row">
<div className="col col--8">

P Limit

- Load shedding is active. The charging power has been reduced. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>




<div className="row">
<div className="col col--8">

Warn RDC

- The RDC-DD 6mA according to IEC 62955 (residual direct current detecting device) has tripped. Charging was stopped for safety reasons. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Offline

- The charging station has no connection to the smart-me Cloud. 

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>





<div className="row">
<div className="col col--8">

LED lights up orange/red in the top right corner of the display

- Indicates an error message. After 30 seconds at the latest, the error image (e.g. Cable Error) is shown on the screen.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>




### MID Mode

To enter MID mode, you can click "Show meter reading on display" ("Zählerstand auf Display anzeigen") via the advanced action in the smart-me portal, start or restart the station, or use the brightness sensor.

Using a torch on the brightness sensor, the user can flash the following code: dark - light - dark - light - dark (each state must last between 1 and 5 seconds)

<div className="row">
<div className="col col--8">

Value / symbol Description

Dot Light sensor

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description
M MID mode active

0.2.1 Version and checksum according to OBIS code

v 2.2 Version number of the firmware

CRC 4F55 Checksum of the firmware

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description
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

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 37](/img/produkte-pico-ladestation-pico-display/37.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Value / symbol Description
M MID mode active

1.8.0 OBIS code

00013.04 kWh The meter reading in kWh with 2 decimal places.

</div>
<div className="col col--4 bild--mitte">

![Pico Display – Figure 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>
