---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Modbus TCP lets you query a device''s measured values directly over the network connection.'
sidebar_label: 'Modbus TCP'
---
<Menueweg>Dashboard → Device → Settings (gear icon)</Menueweg>

Modbus TCP lets you query a device's measured values directly over the network connection. The data does not need to go through the cloud.

### Requirements

You need a smart-me Professional subscription to activate Modbus TCP.

## Supported devices

The following smart-me devices support Modbus TCP:

- [smart-me 3-Phase Meter Telstar](/produkte/telstar-80a)

- [3-Phase Meter Telstar CT](/produkte/telstar-ct)

- [Pico charging station](/produkte/pico-ladestation)


## Limitations

You cannot assign a fixed IP address on the device. If you need one, set it on the router. smart-me does not know the MAC addresses of individual devices. You can find the MAC address with the instructions below.

Do not send queries more often than every 2 seconds. In some setups, a higher query frequency can cause some queries to go unanswered. A query interval of &lt; 2 seconds cannot damage the device.

## Activating Modbus TCP

<div className="row">
<div className="col col--6">

1.  Log in to the smart-me website.

2.  Select the device.

3.  Click the gear icon at the top right.

4.  Under Advanced Settings (Erweiterte Einstellungen), activate Modbus TCP.

5.  Save (Speichern).

</div>
<div className="col col--6 text--center">

![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

</div>
</div>

## Pico and Modbus TCP

You can use Modbus TCP with the Pico if:

1.  The Pico is not in a load management group, or

2.  The Pico is in a load management group and is the master (determined automatically).


Modbus TCP is deactivated on all slaves in a load management group because they do not have their own IP address.
We recommend using Modbus TCP only to control single devices without MESH.
To read or control Picos in a load management group, we recommend the [REST API](/schnittstellen/api).

## Finding the device address

You can read the Modbus registers of a smart-me device via DNS or via its IP address.

- You can activate DNS in the portal.

- The local DHCP server assigns the IP address. You can find the IP address with the instructions below.


### Activating DNS

<div className="row">
<div className="col col--4">

1.  Log in to the smart-me website.

2.  Select the device.

3.  Click the gear icon at the top right.

4.  Under Advanced Settings (Erweiterte Einstellungen), activate DNS (DNS aktivieren).

5.  In most cases you need the Internal IP (Interne IP). See below for details.

6.  Save (Speichern).

7.  The DNS name appears in the text under Activate DNS (DNS aktivieren).

</div>
<div className="col col--8 text--center">

![Modbus TCP – Figure 2](/img/schnittstellen-modbus-tcp/02.png)

</div>
</div>

You can choose either a public IP address or the device's internal IP address:

Internal IP (Interne IP)

This is the local IP address of the smart-me device. Use it when you are on the same network as the device.

Public IP (Öffentliche IP)

This uses the public IP address, which is usually the IP address of your router.

Background information

The dns-me service lets you connect directly to a smart-me device without knowing its IP address. When DNS is activated for a smart-me device, its local or public IP address is automatically assigned to a DNS name (e.g. smart-me\_123456.dns-me.com).

smart-me uses the dns-me.com service for this.

### Finding the IP address with the DNS name

After you activate DNS, you can ping the DNS name shown in the Advanced Settings (Erweiterte Einstellungen) under Activate DNS (DNS aktivieren).

e.g. ping smart-me\_6301587.dns-me.com

The ping results include the device's IP address.

![Modbus TCP – Figure 3](/img/schnittstellen-modbus-tcp/03.png)

### Finding the IP address on the router

smart-me does not know the MAC addresses of individual devices. This makes finding the IP address harder if DNS is not activated. One option is to query every IP address over Modbus TCP and check which serial numbers come back.

## Data transfer

Modbus TCP protocol
TCP port: 502

Functions
The smart-me meter supports the following Modbus function:

- Read Holding Register (Code 03)


Register addressing
For historical reasons, the Modbus address is 1 lower than the internal register address. The start address must therefore be "register address - 1".

### Modbus example

Example using: https://www.modbusdriver.com/modpoll.html

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

You can control a Pico charging station over Modbus TCP and set its charging current.

### Firmware version &lt; 0.0.53:

You can set the charging current once via register 0x206E, in mA, for all three phases together.

Addressing a single station in a charging group (single control):

- -   Charging only starts at the device's minimum setting, e.g. 6000 mA.
        The device tries to use as much of the available current as possible.
        In this case, the device charges 3-phase at 3x6A.
        You cannot explicitly request single-phase charging. A single-phase vehicle is charged in 3-phase mode.


Addressing a station group with multiple stations:

- Only the master device of the Pico group has an addressable IP address.

- Charging only starts at the device's minimum setting, e.g. 6000 mA.
    With a group setting of 12000 mA:
    With three active charging sessions: one single-phase charging session each at 12 A on L1, L2 and L3
    With two active charging sessions: two 3-phase charging sessions at 6A
    With one active charging session: one 3-phase charging session at 12 A


### Firmware version 0.0.53 and later:

You can set the charging current:

- For all three phases together via register 0x206E, in mA (same value for all phases)

- Together but individually per phase, in mA or A (up to 499A; higher values are read as mA), via register 0x2071

- Individually, one phase after another, in mA or A (up to 499A; higher values are read as mA), via registers 0x2071, 0x 2073, 0x2075


General notes on how it works:

- On the controller side, limit switching between single-phase and 3-phase to once every 10 minutes.

- You can switch to a specific phase L1, L2 or L3 by setting the available current. (The highest value is used.)

- You can switch between phases L1, L2 and L3 during a single-phase charging session. (By changing which phase has the highest current.)


Important note on external control:

There is no limit on switching between individual phases, so make sure your control algorithm limits it.
The same applies to switching from single-phase to 3-phase charging and back.
Heavy use of relay contacts can cause the relay switches to fail early. We recommend not switching between phases unless the extra power is worth it. Changeable weather, other large loads and other factors can cause unintended switching. Ideally, do not change the phase assignment when the surplus drops only briefly.
smart-me accepts no responsibility for early relay failure when third-party controllers are used.

Addressing a single station in a charging group (single control):

- -   Charging only starts at the device's minimum setting, e.g. 6000,6000,8000 mA.
        All three currents can have different values. The device tries to use as much of the available current as possible.
        In this case, the device charges 3-phase at 3x6A.

    - 0,8000,0 mA results in single-phase charging at 8 A on L2

    - 0, 8000 mA, 10000 mA results in single-phase charging at 10 A on L3


Addressing a station group with multiple stations:

- Only the master device of the Pico group has an addressable IP address.

- Charging only starts at the device's minimum setting, e.g. 6000,6000,8000 mA.
    All three currents can have different values.
    The group tries to use the available current as efficiently as possible.

    With one active charging session: one device charges 3-phase at 3x6A.
    With two active charging sessions: one device charges at 8A on phase L3 and the second at 6A on L2 or L1

- 0, 8000 mA, 10000 mA and two active units: one single-phase charging session at 10 A on L3 and another at 8 A on L2

- 0,16000,10000 mA and three active units: one single-phase charging session at 10 A on L3 and two single-phase charging sessions at 8 A each on L2

- 20000,20000,20000 mA and three active units: three 3-phase charging sessions at between 6 and 7 A each.
