---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'With Modbus TCP, the measured values of a device can be queried directly via the network connection.'
sidebar_label: 'Modbus TCP'
---
With Modbus TCP, the measured values of a device can be queried directly via the network connection. No detour via the cloud is necessary.

### Requirements

To activate Modbus TCP you need a smart-me Professional subscription

## Supported devices

The following smart-me devices support Modbus TCP:

- [3-phase meter telstar](/)

- [3-Phase Meter Telstar CT](/produkte/Telstar-CT)

- [Pico EV-Charger](/produkte/pico-ladestation)


## Limitations

It is not possible to assign a fixed IP address. If this is desired, this setting must be made on the router. The MAC address of the individual devices is not known to smart-me. This can be determined using the instructions below.

Queries should not be made more frequently than every 2 seconds. Increasing the polling frequency can lead to unanswered polls in certain constellations. The device cannot be damaged if the polling interval is &lt; 2 seconds.

## Activate Modbus TCP

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the cogwheel at the top right.

4.  Activate Modbus TCP under advanced settings

5.  Save


![modbus-tcp](/img/_en/interfaces-modbus-tcp/01.png)

## Specific information about Pico and Modbus TCP

Modbus TCP can be used with the Pico if:

1.  The Pico is not in a load management group.

2.  The Pico is in a load management group and the master (determined automatically).


Modbus TCP is deactivated for all slaves in a load management group, as they also do not have their own IP-address. If the Picos in a load management group want to be read or controlled, we recommend to use the [Rest API](/schnittstellen/api). 

## Find the address of the device

The Modbus register of a smart-me device can be read out via DNS or IP address. 

- DNS can be activated in the portal.

- The IP address is assigned by the local DHCP server. The IP address can be determined using the instructions below.


### Enable DNS

1.  Log in to the smart-me website.

2.  Select the desired device.

3.  Select the cogwheel at the top right.

4.  Enable DNS under advanced settings.

5.  The internal IP is usually required. See below for details.

6.  Save


![Modbus TCP – figure 2](/img/_en/interfaces-modbus-tcp/02.png)

A public IP address or the internal IP address of the device can be selected as the IP address:

Internal IP

This is the local IP address of the smart-me device. This can be used if you are in the same network.

Public IP

The public IP address is used. This is normally the IP address of your router.

Background information

With the dns-me service, it is possible to connect directly to a smart-me device without knowing its IP address. If the DNS address is activated for a smart-me device, its local or public IP address is automatically assigned to a DNS name (e.g. smart-me\_123456.dns-me.com).

smart-me uses the dns-me.com service for this.

### Determine IP address with DNS name

After DNS has been activated, the DNS name, which can be seen in the advanced settings under DNS activation, can be used for a ping.

e.g. ping smart-me\_6301587.dns-me.com

In response, you will receive an evaluation of the ping including the IP address of the device.

![Modbus TCP – figure 3](/img/_en/interfaces-modbus-tcp/03.png)

### Determine IP address directly on the router

smart-me does not know the MAC address of the individual devices. Determining the IP address without first activating the DNS service is therefore more complicated. One option is to query all IP addresses with Modbus TCP to check which serial number is returned in response.

## Data transmission

Modbus TCP Protokoll
TCP Port: 502

Functions
The smart-me Meter supports the following Modbus functions:

- Read Holding Register (Code 03)


Register Addressing

For historical reasons the address in Modbus is 1 lower than the internal register address. So the start address has to be (Registeraddress - 1)

### Example Modbus

Example with: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Register of Meters and Modules

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Video src="" title="Video" />

Register Addressing

## Register of Pico chargers

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Video src="" title="Video" />

Pico-Modbus TCP

## Pico load management control with Modbus TCP

A Pico charging station can be controlled via Modbus TCP and the charging current can be specified.

### For firmware version &lt; 0.0.53:

The charging current can be specified once via register 0x206E as the charging current in mA for all three phases simultaneously.

Addressing a single station in a charging group (individual control):

- Only charges from the minimum setting of the device, e.g., 6000 mA.
    In this case, the device will charge with 3x6A 3-phase.A single-phase charge cannot be specified. A single-phase vehicle is charged in 3-phase mode.


Responding to a station group with multiple stations:

- Only the Master Pico of the group holds an IP address.

- Only charges from the minimum setting of the device, e.g., 6000 mA.
    With a group setting of 12000 mA. With three active charges: This results in one single-phase charge with 12 A on L1, L2, and L3.


### From firmware version >0.0.53:

The charging current can be:

- specified for all three phases simultaneously using register 0x206E in mA or,

- specified individually for each phase in A (until 499A, then mA is assumed) using register 0x2071 (L1, L2, L3)

- specified separately for each phase in A (until 499A, then mA is assumed) using register 0X2071, 0x2073 and 0x2075.


General information about the function:

- Switching between 1-phase and 3-phase is limited to every 10 minutes.

- It is possible to switch to a predefined phase L1, L2, L3 by specifying the current availability.

- It is possible to switch between phases L1, L2, L3 during a single-phase charge.


Important note on external control:

There is no limit to switching between individual phases and between 1-phase and 3-phased charging (be sure to limit this using the control algorithm).
Intensive use of relay contacts can lead to premature failure of the relay switches. It is recommended not to switch between individual phases if the additional power is not proportional. Please do not switch between 3-phase and 1-phase charging more often then once in 10-Minutes.
smart-me accepts no responsibility for the premature failure of relays when using third-party controls.

Addressing a single station in a charging group (individual control):

- Only charges from the minimum setting of the device, e.g., 6000, 6000, 8000 mA. The device attempts to utilize the available current as much as possible.

- In this case, the device will charge with 3x6A 3-phase.

- 0, 8000 mA, 10000 mA results in a 1-phase charge with 10 A on L3


Response of a station group with multiple stations:

- Only the Master Pico of the group holds an IP address.

- Only charges from the minimum setting of the device, e.g., 6000,6000,8000 mA.
    All three currents can have different values. The group tries to use the available current as efficiently as possible.

- 0,0,8000 mA results in a 1-phase charge with 8 A on L3

- 0, 8000 mA, 10000 mA two active units: Results in one 1-phase charge with 10 A on L3 and another with 8 A on L2 

- 0,16000,10000 mA three active units: Results in a single-phase charge with 10 A on L3 and two single-phase charges with 8 A each on L2

- 20000,20000,20000 mA three active units: Results in three charges each with 3-phase 6 to7A
