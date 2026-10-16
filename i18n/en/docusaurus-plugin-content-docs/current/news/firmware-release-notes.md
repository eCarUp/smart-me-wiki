---
title: 'Firmware Release Notes'
slug: '/news/firmware-release-notes'
description: 'Pico v0.0.57-r57 Date: 11.9.2026'
sidebar_label: 'Firmware Release Notes'
---
## Firmware Release Notes

### Pico

<details id="pico-v0-0-57-r57" open>
<summary>Pico v0.0.57-r57 · 11.9.2026</summary>

Bugs:

- Fix pico station idle after pause transaction stays open

- Fix false overload trip of the 130% overcurrent protection

</details>

<details id="pico-v0-0-55-r55">
<summary>Pico v0.0.55-r55 · 01.05.2026</summary>

Bugs

- EM-406: Improve uart and watchdog

- Quick Fix WiFi AP mode

</details>

<details id="pico-v0-0-54-r54">
<summary>Pico v0.0.54-r54 · 13.04.2026</summary>

Bugs:

- Multiple improvements have been made to ensure better WLAN, mesh, and mobile connectivity.

</details>

<details id="pico-v0-0-53-r53">
<summary>Pico v0.0.53-r53 · 12.03.2026</summary>

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

</details>

<details id="pico-v0-0-47-r47-und-0-0-46-r46">
<summary>Pico v0.0.47-r47 and 0.0.46-r46 · 01.12.2025</summary>

- Option to switch between 1-3 phases via Modbus or API. (MLM is not yet supported)

- internal improvements

</details>

<details id="pico-v-0-0-37-r37-und-0-0-36-r36">
<summary>Pico v 0.0.37-r37 and 0.0.36-r36 · 14.08.2025</summary>

Bug fixes

</details>

<details id="pico-v0-0-34-r34">
<summary>Pico v0.0.34-r34 · 16.01.2025</summary>

Bug fixes

- EM-336: Fix WLAN Installation Problem

</details>

<details id="pico-v0-0-33-r33">
<summary>Pico v0.0.33-r33 · 06.01.2025</summary>

Features

- EM-281: Loadmanagement: Free the reserved current (6A) for paused stations

- EM-172: Loadmanagement: The current when to change from 3-phase to 1-phase charging is now adjustable in the cloud

- EM-172: Loadmanagement: Max. current (per station) for 1-phase charging

- EM-329: Loadmangement: Increase from 1-phase to 3-phase charging is now possible. The setting to enable / disable it is in the cloud

- Installation: WLAN in installation mode has now a Password ("smart-me"), for Picos >= 7005567 and (7003152 - 7005229)

Bugs

- Mobile connection stability increased

</details>

<details id="pico-v0-0-30-r30">
<summary>Pico v0.0.30-r30 · 03.10.2024</summary>

- EM-320 Fix possible loss of charging transactions in communication (mostly mobile)

</details>

<details id="pico-v0-0-29-r29">
<summary>Pico v0.0.29-r29 · 1.7.2024</summary>

Features

- EM-245: Load management: Reset from 1-phase to 3-phase, even if cars in the group are being charged.

Bugs

- EM-311: Adjust Temperature Limits

- EM-307: Improved offline behavior

</details>

<details id="pico-v0-0-28-r28">
<summary>Pico v0.0.28-r28 · 15.04.2024</summary>

Features:

- New Authorize Images Flow and Animation (RFID, CardId) (EM-264)

- PLC Timeout removed (changed from 25s to 3s)

Bugs

- Improve Offline detection

- WiFi improvements

</details>

<details id="pico-version-0-0-25-r25">
<summary>Version 0.0.25-r25 · 10.01.2024</summary>

Features:

- SIM7070 Support

Bugs

- Improved Mobile Connection

- Show "Failed" Screen when Authorize with RFID card was not successful

- Loadmanagement: Calculated current unbalance index returning wrong value

- Loadmanagement: Load manager doesn't increase station current for specific condition

Technical:

- upgrade aes soft algorithm

</details>

<details id="pico-v0-0-23-r23">
<summary>Pico v0.0.23-r23 · 07.12.2023</summary>

Features:

- Dynamic Current on Lost connection for Loadmanagement Group

Bugs

- EVSE Tool fixes (try to restart it after a crash)

</details>

<details id="pico-v0-0-22-r22">
<summary>Pico v0.0.22-r22 · 04.09.2023</summary>

Bugs

- Fix problem with locker with very cold temperatures (below -20 degree C)

</details>

<details id="pico-v0-0-21-r21">
<summary>Pico v0.0.21-r21 · 27.08.2023</summary>

Features

- Stop charging when disable calibration mode (for transaction validation in production)

- Increase routing lookup table for wifi module (support upto 200 stations per loadmanagement group instead of 20)

</details>

<details id="pico-v0-0-20-r20">
<summary>Pico v0.0.20-r20 · 03.07.2023</summary>

-  Show date/time (start time of the charging and the duration) in the charging screen

-  Show the current used and allowed in the power screen

-  Do RCD Test every 24h in State A

-  Use lower baudrate if WiFi Update fails

</details>

<details id="pico-v0-0-19-r19">
<summary>Pico v0.0.19-r19 · 08.05.2023</summary>

-  Fix Bug in Charging Statemachine (Wait in State B1 until we have a PWM before switch on the relais)

</details>

<details id="pico-v0-0-18-r18">
<summary>Pico v0.0.18-r18 · 03.04.2023</summary>

-  Buffer images (reduce reads from flash)

-  RSSI (signal quality) for wifi and mobile support

-  Flush to disk (flash) after writing the settings file or the images / firmware updates

</details>

<details id="pico-v0-0-17-r17">
<summary>Pico v0.0.17-r17 · 17.02.2023</summary>

- Timing changes to power start up after car is ready
    (enhanced car type support)

- Internal optimizations

</details>

<details id="pico-version-0-0-16-r16">
<summary>Version 0.0.16-r16 · 16.12.2022</summary>

- Internal optimizations

</details>

<details id="pico-version-0-0-15-r15">
<summary>Version 0.0.15-r15 · 12.12.2022</summary>

- Enhance Pico load shedding for single stations

- Internal optimizations

</details>

<details id="pico-version-0-0-14-r14">
<summary>Version 0.0.14-r14 · 06.12.2022</summary>

- Show energy consumption at the end of charging

</details>

<details id="pico-version-0-0-13-r13">
<summary>Version 0.0.13-r13 · 09.11.2022</summary>

- Internal optimizations

</details>

<details id="pico-version-0-0-12-r12">
<summary>Version 0.0.12-r12 · 06.12.2022</summary>

- Internal optimizations

</details>

<details id="pico-version-0-0-11-r11">
<summary>Version 0.0.11-r11 · 11.10.2022</summary>

- Warnings and errors enhancement on cloud

- Bugfix: Loadmanagement dynamic current

</details>

<details id="pico-version-0-0-10-r10">
<summary>Version 0.0.10-r10 · 23.09.2022</summary>

- Bugfix: CarID detection

</details>
### Telstar 80A / Telstar CT

<details id="telstar-version-9-v18-and-v19" open>
<summary>Version 9 (V18 and V19) · 19.09.2023 (beta test ran until 08.2024)</summary>

Bug fixes:

 - Fix Modbus TCP (only 255 connections problem)

</details>

<details id="telstar-version-8-v16-and-v17">
<summary>Version 8 (V16 and V17) · 12.04.2023</summary>

Bug fixes:

 - Fix stop "start wifi" after disconnection from AP in special cases

</details>

<details id="telstar-version-7-v14-and-v15">
<summary>Version 7 (V14 and V15) · 16.01.2023</summary>

Bug fixes:

 - Modbus TCP Timeout (idle clients will be disconnected after 5min)

 - Modbus TCP limit max number of clients to 4

 - Disable mesh connect when Modbus TCP is enabled

 - Connect to mesh network when connection to normal wifi AP fails for 16 times

Technical:

 - Internal Updates for ESP

</details>

<details id="telstar-version-6-v12-and-v13">
<summary>Version 6 (V12 and V13) · 19.02.2022</summary>

Bug fixes:

 - Modbus TCP heap overflow (on start modbus)

 - Deadlock in DNS resolution with wifi without internet connection

</details>

<details id="telstar-version-5-v10-and-v11">
<summary>Version 5 (V10 and V11) · 21.02.2022</summary>

Bug fixes:

 - Power Event action was factor 10 wrong

</details>

<details id="telstar-version-4-v8-and-v9">
<summary>Version 4 (V8 and V9) · 11.02.2021</summary>

Bug fixes:

 - Fix Modbus TCP Bug

</details>

smart-me reserves the right to implement features and bug fixes that are not communicated, particularly where internal matters are concerned.
