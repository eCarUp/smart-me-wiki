---
title: 'Firmware Release Notes'
slug: '/news/firmware-release-notes'
description: 'EM-406: Improve uart and watchdog'
sidebar_label: 'Firmware Release Notes'
---
## Firmware Release Notes

### Pico

Pico v 0.0.55-r55

Date: 01.05.2026

Bugs

- EM-406: Improve uart and watchdog

- Quick Fix WiFi AP mode


Pico v 0.0.54-r54
Date: 13.04.2026

Bugs:

- Multiple improvements have been made to ensure better WLAN, mesh, and mobile connectivity.


Pico v 0.0.53\-r53
Date: 12.03.2026

Feature

- Show "waiting for current" screen when the loadmanagement can not assign current to a station

- Show Warning on Screen and cloud when CP is 0V

- Show Error on screen when the Meter-SOM communication has failed

- Change default min. current to 8A and disable car id per default

- EM-348: RFID Card Installation Process Implementation

- EM-319: Don't show the heat warning on the display. Only show it on the cloud

- 1 Phase Charging


Bugs:

- EM-380: pico mesh nodes not joining the lm group

- EM-396: Wrong Loadmanagement offline behavior

- EM-379: Current balance not working on a group with single phase station

- Meter-SOM SPI communication error (Should fix Meter-SOM communication after reboot)

- Fix Bug in DNS resolution (WiFi)

- Fix PLC (car id) waiting time

- Fix charging statemachine timing

- Set current to 0A before doing an unlock cable or reboot

- Wait until the wifi Module is up and running before doing something (e.g. turn on the relais). This should avoid problems during the ESP32 Update.

- Access Point Mode (installation) sometimes does not start

- Reboot the wifi module after 5min of controller inactivity

- Fix 1-byte UDP packet truncation in mesh-forwarded parallel Arm updates

- Validate if required firmware files exist at startup

- firmware update improvements

- EM-368: Lexus stops charging after 30min

- EM-367: Activate with RFID - Car goes into error state first

- EM-366: Station stops charging when the wifi module restart due offline timeout

- Fix integer overflow panic in display\_module.rs time calculation

- EM-362: Unable to connect to Installation AP

- WiFi: decoupling Timer execution context


Pico v 0.0.47\-r47 und 0.0.46\-r46
Date: 01.12.2025

- Option to switch between 1-3 phases via Modbus or API. (MLM is not yet supported)

- internal improvements


Pico v 0.0.37\-r37 und 0.0.36-r36
Date: 14.08.2025

Bug fixes

Pico v 0.0.34-r34
Date: 16.01.2025

Bug fixes

- EM-336: Fix WLAN Installation Problem


Version 0.0.33-r33
Date: 06.01.2025

Features

- EM-281: Loadmanagement: Free the reserved current (6A) for paused stations

- EM-172: Loadmanagement: The current when to change from 3-phase to 1-phase charging is now adjustable in the cloud

- EM-172: Loadmanagement: Max. current (per station) for 1-phase charging

- EM-329: Loadmangement: Increase from 1-phase to 3-phase charging is now possible. The setting to enable / disable it is in the cloud

- Installation: WLAN in installation mode has now a Password ("smart-me"), for Picos >= 7005567 and (7003152 - 7005229)


Bugs

- Mobile connection stability increased


Version 0.0.30\-r30
Date: 03.10.2024

- EM-320 Fix possible loss of charging transactions in communication (mostly mobile)


Version 0.0.29-r29
Date: 1.7.2024

Features

- EM-245: Load management: Reset from 1-phase to 3-phase, even if cars in the group are being charged.


Bugs

- EM-311: Adjust Temperature Limits

- EM-307: Improved offline behavior


Version 0.0.28-r28
Date: 15.04.2024

Features:

- New Authorize Images Flow and Animation (RFID, CardId) (EM-264)

- PLC Timeout removed (changed from 25s to 3s)


Bugs

- Improve Offline detection

- WiFi improvements


Version 0.0.25-r25
Date: 10.01.2024

Features:

- SIM7070 Support


Bugs

- Improved Mobile Connection

- Show "Failed" Screen when Authorize with RFID card was not successful

- Loadmanagement: Calculated current unbalance index returning wrong value

- Loadmanagement: Load manager doesn't increase station current for specific condition


Technical:

- upgrade aes soft algorithm


Version 0.0.23-r23
Date: 07.12.2023

Features:

- Dynamic Current on Lost connection for Loadmanagement Group


Bugs

- EVSE Tool fixes (try to restart it after a crash)


Version 0.0.22-r22
Date: 04.09.2023

Bugs

- Fix problem with locker with very cold temperatures (below -20 degree C)


Version 0.0.21-r21
Date: 27.08.2023

Features

- Stop charging when disable calibration mode (for transaction validation in production)

- Increase routing lookup table for wifi module (support upto 200 stations per loadmanagement group instead of 20)


Version 0.0.20-r20
Date: 03.07.2023

-  Show date/time (start time of the charging and the duration) in the charging screen

-  Show the current used and allowed in the power screen

-  Do RCD Test every 24h in State A

-  Use lower baudrate if WiFi Update fails


Version 0.0.19-r19
Date: 08.05.2023

-  Fix Bug in Charging Statemachine (Wait in State B1 until we have a PWM before switch on the relais)


Version 0.0.18-r18
Date: 03.04.2023

-  Buffer images (reduce reads from flash)

-  RSSI (signal quality) for wifi and mobile support

-  Flush to disk (flash) after writing the settings file or the images / firmware updates


Version 0.0.17-r17
Date: 17.02.2023

- Timing changes to power start up after car is ready
    (enhanced car type support)

- Internal optimizations


Version 0.0.16-r16
Date: 16.12.2022

- Internal optimizations


Version 0.0.15-r15
Date: 12.12.2022

- Enhance Pico load shedding for single stations

- Internal optimizations


Version 0.0.14-r14
Date: 06.12.2022

- Show energy consumption at the end of charging


Version 0.0.13-r13
Date: 09.11.2022

- Internal optimizations


Version 0.0.12-r12
Date: 06.12.2022

- Internal optimizations


Version 0.0.11-r11
Date: 11.10.2022

- Warnings and errors enhancement on cloud

- Bugfix: Loadmanagement dynamic current


Version 0.0.10-r10
Date: 23.09.2022

- Bugfix: CarID detection


### Telstar 80A / Telstar CT

Version 9 (V18 and V19)

Date: 19.09.2023 (beta test ran until 08.2024)

Bug fixes:

 - Fix Modbus TCP (only 255 connections problem)  

Version 8 (V16 and V17)

Date: 12.04.2023

Bug fixes:

 - Fix stop "start wifi" after disconnection from AP in special cases

Version 7 (V14 and V15)

Date: 16.01.2023

Bug fixes:

 - Modbus TCP Timeout (idle clients will be disconnected after 5min)

 - Modbus TCP limit max number of clients to 4

 - Disable mesh connect when Modbus TCP is enabled

 - Connect to mesh network when connection to normal wifi AP fails for 16 times

Technical:

 - Internal Updates for ESP

Version 6 (V12 and V13)

Date: 19.02.2022

Bug fixes:

 - Modbus TCP heap overflow (on start modbus)

 - Deadlock in DNS resolution with wifi without internet connection

Version 5 (V10 and V11)

Date: 21.02.2022

Bug fixes:

 - Power Event action was factor 10 wrong

Version 4 (V8 and V9)

Date: 11.02.2021

Bug fixes:

 - Fix Modbus TCP Bug

smart-me si riserva il diritto di implementare funzionalità e correzioni di bug non comunicate, in particolare se si tratta di questioni interne.
