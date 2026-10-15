---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'With Modbus TCP, the measured values of a device can be queried directly via the network connection.'
sidebar_label: 'Modbus TCP'
---
With Modbus TCP, the measured values of a device can be queried directly via the network connection. There is no need for a detour via the cloud.

### Requirements

A smart-me Professional subscription is required to activate Modbus TCP

## Supported devices

The following smart-me devices support Modbus TCP

- [smart-me 3-Phase Meter Telstar](/produkte/telstar)

- [3-Phase Meter Telstar CT](/produkte/Telstar-CT)

- [Pico charging station](/produkte/pico-ladestation)


## Limitations

It is not possible to assign a fixed IP address. If this is required, the setting must be made on the router. smart-me does not know the MAC address of the individual devices. It can be determined using the instructions below.

Queries should not be made more often than every 2 seconds. Increasing the query frequency can lead to unanswered queries in certain constellations. The device cannot be damaged by a query interval of &lt; 2 seconds.

## Activating Modbus TCP

<div className="row">
<div className="col col--6">

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the gear icon at the top right.

4.  Under advanced settings (Erweiterte Einstellungen), activate Modbus TCP

5.  Save (Speichern)

</div>
<div className="col col--6 text--center">

![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

</div>
</div>

## Specifics of Pico and Modbus TCP

Modbus TCP can be used with the Pico if:

1.  The Pico is not in a load management group

2.  The Pico is in a load management group and is the master (determined automatically)


Modbus TCP is deactivated for all slaves in a load management group, as they do not have their own IP address.
We recommend using Modbus TCP only for controlling individual devices without MESH.
If the Picos in a load management group are to be read out or controlled, we recommend the [Rest API](/schnittstellen/api). 

## Finding the address of the device

The Modbus register of a smart-me device can be read via DNS or IP address. 

- DNS can be activated in the portal.

- The IP address is assigned by the local DHCP server. The IP address can be determined using the following instructions.


### Activating DNS

<div className="row">
<div className="col col--4">

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the gear icon at the top right.

4.  Under advanced settings (Erweiterte Einstellungen), activate DNS.

5.  In most cases, the internal IP (Interne IP) is required. See below for details.

6.  Save (Speichern)

7.  The DNS name is displayed in the text below "Activate DNS" (DNS aktivieren).

</div>
<div className="col col--8 text--center">

![Modbus TCP – Figure 2](/img/schnittstellen-modbus-tcp/02.png)

</div>
</div>

Either a public IP address or the internal IP address of the device can be selected as the IP address:

Internal IP (Interne IP)

This is the local IP address of the smart-me device. It can be used if you are on the same network.

Public IP (Öffentliche IP)

The public IP address is used. This is usually the IP address of your router.

Background information

The dns-me service makes it possible to connect directly to a smart-me device without knowing its IP address. If the DNS address is activated for a smart-me device, its local or public IP address is automatically assigned to a DNS name (e.g. smart-me\_123456.dns-me.com).

smart-me uses the dns-me.com service for this.

### Determining the IP address with the DNS name

Once DNS has been activated, the DNS name shown in the advanced settings under DNS activation can be used for a ping.

e.g. ping smart-me\_6301587.dns-me.com

In response, you receive the ping results, including the IP address of the device.

![Modbus TCP – Figure 3](/img/schnittstellen-modbus-tcp/03.png)

### Determining the IP address directly on the router

smart-me does not know the MAC address of the individual devices. Determining the IP address without first activating the DNS service is therefore more complicated. One option is to query all IP addresses with Modbus TCP and check which serial numbers are returned in response.

## Data transmission

Modbus TCP protocol
TCP Port: 502

Functions
The smart-me meter supports the following Modbus functions:

- Read Holding Register (Code 03)


Register addressing
For historical reasons, the address in Modbus is 1 lower than the internal register address. The start address must therefore be "register address - 1"

### Modbus example

Example with: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Register addresses for smart-me meters and modules

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" height="720px" title="Spreadsheet, Register Addressing" />

Register Addressing

## Register addresses for Pico charging stations

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" height="720px" title="Spreadsheet, Pico-Modbus TCP" />

Pico-Modbus TCP

## Controlling Pico load management with Modbus TCP

A Pico charging station can be controlled via Modbus TCP and the charging current can be specified.

### For firmware versions &lt; 0.0.53:

The charging current can be specified once via register 0x206E as the charging current in mA for all three phases simultaneously.

Addressing a single station in a charging group (individual control):

- -   Only charges from the minimum setting of the device, e.g. 6000 mA.
        The device tries to use the available current as fully as possible.
        In this case, the device will charge 3-phase with 3x6A
        Single-phase charging cannot be specified explicitly. A single-phase vehicle is charged in 3-phase mode.


Addressing a station group with several stations:

- Only the master device of the Pico group has an addressable IP address.

- Only charges from the minimum setting of the device, e.g. 6000 mA.
    With a group setting of 12000 mA
    With three active charging sessions: results in one single-phase charging session each with 12 A on L1, L2 and L3
    With two active charging sessions: results in two 3-phase charging sessions with 6A
    With one active charging session: results in one 3-phase charging session with 12 A


### From firmware version 0.0.53:

The charging current can be:

- Specified for all three phases together via register 0x206E in mA (all the same value)

- Specified together but individually per phase in mA or A (up to 499A, above that mA is assumed) via register 0x2071 

- Specified individually one after the other per phase in mA or A (up to 499A, above that mA is assumed) via registers 0x2071, 0x 2073, 0x2075


General information on the function:

- Switching between single-phase and 3-phase should be limited on the controller side to  1x every 10 minutes.

- It is possible to switch to a predefined phase L1, L2, L3 by specifying the current availability. (The largest is used)

- It is possible to switch between phases L1, L2, L3 during single-phase charging. (Change of the largest current)


Important note on external control:

There is no limit on switching between individual phases; make sure to limit this through the control algorithm.
The same applies to switching from single-phase to 3-phase charging and vice versa.
Intensive use of relay contacts can lead to premature failure of the relay switches. It is recommended not to switch between individual phases if the additional power is not proportionate. Changeable weather, other large consumers and other reasons can lead to unintended switching. Ideally, a phase assignment should not change if the surplus is only missing briefly.
smart-me accepts no responsibility whatsoever for premature relay failure when using third-party controllers.

Addressing a single station in a charging group (individual control):

- -   Only charges from the minimum setting of the device, e.g. 6000,6000,8000 mA.
        All three currents can have different values. The device tries to use the available current as fully as possible.
        In this case, the device will charge 3-phase with 3x6A)

    - 0,8000,0 mA results in single-phase charging with 8 A on L2

    - 0, 8000 mA, 10000 mA results in single-phase charging with 10 A on L3


Addressing a station group with several stations:

- Only the master device of the Pico group has an addressable IP address.

- Only charges from the minimum setting of the device, e.g. 6000,6000,8000 mA.
    All three currents can have a different value.
    The group tries to use the available current as well as possible.

    With one active charging session: one device will charge 3-phase with 3x6A.
    With two active charging sessions: one device charges with 8A on phase L3 and the second with 6A on L2 or L1

- 0, 8000 mA, 10000 mA and two active units: results in one single-phase charging session with 10 A on L3 and another with 8 A on L2 

- 0,16000,10000 mA and three active units: results in one single-phase charging session with 10 A on L3 and two single-phase charging sessions with 8 A each on L2

- 20000,20000,20000 mA and three active units: results in three 3-phase charging sessions, each between 6 and 7 A.
