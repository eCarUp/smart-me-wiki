---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'With Modbus TCP, a device''s measured values can be read directly over the network connection.'
sidebar_label: 'Modbus TCP'
---
With Modbus TCP, a device's measured values can be read directly over the network connection. No detour via the cloud is necessary.

### Requirements

A smart-me Professional subscription is required to activate Modbus TCP

## Supported devices

The following smart-me devices support Modbus TCP

- [smart-me 3-Phase Meter Telstar](/produkte/telstar)

- [3-Phase Meter Telstar CT](/produkte/Telstar-CT)

- [Pico charging station](/produkte/pico-ladestation)


## Limitations

It is not possible to assign a fixed IP address. If this is desired, the setting must be made on the router. smart-me does not know the MAC address of the individual devices. It can be determined using the instructions below.

Queries should not be made more often than every 2 seconds. Increasing the query frequency can lead to unanswered queries in certain constellations. The device cannot be damaged by a query interval of &lt; 2 seconds.

## Activating Modbus TCP

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the gear icon at the top right.

4.  Activate Modbus TCP (Modus-TCP) under the advanced settings

5.  Save


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Specifics for Pico and Modbus TCP

Modbus TCP can be used with the Pico if:

1.  The Pico is not in a load management group

2.  The Pico is in a load management group and is the master (determined automatically)


Modbus TCP is deactivated for all slaves in a load management group, as they do not have their own IP address.
We recommend using Modbus TCP only for controlling individual devices without MESH.
If the Picos in a load management group are to be read out or controlled, we recommend the [Rest API](/schnittstellen/api).

## Finding out the address of the device

The Modbus register of a smart-me device can be read out via DNS or IP address.

- DNS can be activated in the portal.

- The IP address is assigned by the local DHCP server. The IP address can be determined using the following instructions.


### Activating DNS

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the gear icon at the top right.

4.  Activate DNS (DNS aktivieren) under the advanced settings.

5.  In most cases the internal IP is required. See details below.

6.  Save

7.  The DNS name is shown in the text below Activate DNS (DNS aktivieren).


![Modbus TCP – Figure 2](/img/schnittstellen-modbus-tcp/02.png)

Either a public IP address or the device's internal IP address can be selected as the IP address:

Internal IP

This is the local IP address of the smart-me device. It can be used if you are on the same network.

Public IP

The public IP address is used. This is normally the IP address of your router.

Background information

With the dns-me service it is possible to connect directly to a smart-me device without knowing its IP address. If the DNS address is activated for a smart-me device, its local or public IP address is automatically assigned to a DNS name (e.g. smart-me\_123456.dns-me.com).

smart-me uses the dns-me.com service for this.

### Determining the IP address with the DNS name

After DNS has been activated, the DNS name shown in the advanced settings under DNS activation can be used for a ping.

e.g. ping smart-me\_6301587.dns-me.com

The response you receive is the evaluation of the ping including the device's IP address.

![Modbus TCP – Figure 3](/img/schnittstellen-modbus-tcp/03.png)

### Determining the IP address directly on the router

smart-me does not know the MAC address of the individual devices. Determining the IP address without first activating the DNS service is therefore more complicated. One option is to query all IP addresses with Modbus TCP and check which serial numbers are returned in response.

## Data transmission

Modbus TCP protocol
TCP port: 502

Functions
The smart-me meter supports the following Modbus functions:

- Read Holding Register (Code 03)


Register addressing
For historical reasons, the address in Modbus is 1 lower than the internal register address. The start address must therefore be "register address - 1"

### Modbus example

Example using: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Register addresses for smart-me meters and modules

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" title="Spreadsheet, Register Addressing" />

Register Addressing

## Register addresses for Pico charging stations

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" aspect="2.353" title="Spreadsheet, Pico-Modbus TCP" />

Pico-Modbus TCP

## Controlling Pico load management with Modbus TCP

A Pico charging station can be controlled via Modbus TCP and the charging current can be specified.

### With firmware version &lt; 0.0.53:

The charging current can be specified once via register 0x206E as a charging current in mA for all three phases simultaneously.

Addressing an individual station in a charging group (individual control):

- -   Only charges from the device's minimum setting, e.g. 6000 mA.
        The device tries to use the available current as much as possible.
        In this case the device will charge at 3x6A on three phases
        Single-phase charging cannot be specified dedicatedly. A single-phase vehicle is charged in three-phase mode.


Addressing a station group with several stations:

- Only the master device of the Pico group has an addressable IP address.

- Only charges from the device's minimum setting, e.g. 6000 mA.
    With a group setting of 12000 mA
    With three active charging sessions: results in one single-phase charging session at 12 A each on L1, L2 and L3
    With two active charging sessions: results in two three-phase charging sessions at 6A
    With one active charging session: results in one three-phase charging session at 12 A


### From firmware version 0.0.53:

The charging current can be:

- Specified for all three phases together via register 0x206E in mA (all the same value)

- Specified together but individually per phase in mA or A (up to 499A, above that mA is assumed) via register 0x2071

- Specified individually one after another per phase in mA or A (up to 499A, above that mA is assumed) via registers 0x2071, 0x 2073, 0x2075


General information on the function:

- Switching between single-phase and three-phase should be limited on the control side to once every 10 minutes.

- It is possible to switch to a predefined phase L1, L2, L3 by specifying the current availability. (The largest is taken)

- It is possible to switch between phases L1, L2, L3 during a single-phase charging session. (Switching of the largest current)


Important note on external control:

There is no limit for switching between individual phases, so make sure to limit this through the control algorithm.
The same also applies to switching from single-phase to three-phase charging and vice versa.
Intensive use of relay contacts can lead to premature failure of the relay switches. It is recommended not to switch between individual phases if the additional power is not proportionate. Unsettled weather, other large consumers and other reasons can lead to unintended switching. It is best if an assignment to a phase does not change when the surplus is only briefly missing.
smart-me accepts no responsibility whatsoever for the premature failure of relays when using third-party controls.

Addressing an individual station in a charging group (individual control):

- -   Only charges from the device's minimum setting, e.g. 6000,6000,8000 mA.
        All three currents can have different values. The device tries to use the available current as much as possible.
        In this case the device will charge at 3x6A on three phases)

    - 0,8000,0 mA results in a single-phase charging session at 8 A on L2

    - 0, 8000 mA, 10000 mA results in a single-phase charging session at 10 A on L3


Addressing a station group with several stations:

- Only the master device of the Pico group has an addressable IP address.

- Only charges from the device's minimum setting, e.g. 6000,6000,8000 mA.
    All three currents can have a different value.
    The group tries to use the available current as well as possible.

    If one active charging session: one device will charge at 3x6A on three phases.
    If two active charging sessions: one device charges at 8A on phase L3 and the second at 6A on L2 or L1

- 0, 8000 mA, 10000 mA and two active units: results in one single-phase charging session at 10 A on L3 and a further one at 8 A on L2

- 0,16000,10000 mA and three active units: results in one single-phase charging session at 10 A on L3 and two single-phase charging sessions at 8 A each on L2

- 20000,20000,20000 mA and three active units: results in three charging sessions, each three-phase at between 6 and 7 A.
