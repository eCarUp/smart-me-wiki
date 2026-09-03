---
title: 'Firmware Release Notes'
slug: '/news/firmware-release-notes'
description: 'New Authorize Images Flow and Animation (RFID, CardId) (EM-264)'
sidebar_label: 'Firmware Release Notes'
---
## Firmware Release Notes

### Pico

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

-  Show date/time (start time of the charging and the duration) in the charging screen

-  Show the current used and allowed in the power screen

-  Do RCD Test every 24h in State A

-  Use lower baudrate if WiFi Update fails


Version 0.0.19-r19

Date: 08.05.2023

-  Fix Bug in Charging Statemachine (Wait in State B1 until we have a PWM before switch on the relais)


Version 0.0.18-r18

Date: 03.04.2023

-  Buffer images (reduce reads from flash)

-  RSSI (signal quality) for wifi and mobile support

-  Flush to disk (flash) after writing the settings file or the images / firmware updates


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

smart-me reserves the right to deploy features and bug fixes that have not been communicated, particularly when they pertain to internal matters.
