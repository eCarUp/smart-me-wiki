---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa stands for Long Range and is a wireless technology with a long range and low data throughput.'
sidebar_label: 'LoRa Gateway Software'
---
## Preface

LoRa stands for Long Range and is a wireless technology with a long range and low data throughput. This communication medium is particularly well suited to the wireless transmission of meter readings in plumbing, sanitary and heating systems.

Wireless M-Bus was originally developed for transmitting meter data. Compared to it, LoRa stands out with a much greater range.

A building needs fewer gateways to collect the meter values from all of its apartments.

## Setup

![LoRa Gateway Software – Figure 1](/img/produkte-lora-gateway-software/01.png)

## General information on the compatibility of energy meters and sensors

With the smart-me LoRa gateway solution, the sensors and energy meters must be included in the compatibility list. If a device is not listed, it is currently not compatible. 

Get in touch with us, as your meter or sensor can be integrated at short notice. Send an email to [support@smart-me.com](mailto:support@smart-me.com) with the subject "New LoRa device"

In general, the smart-me gateway solution supports the following types of energy meters and sensors:

Energy meters:

- Heat meters

- Cooling meters

- Heat/cooling meters

- Domestic hot water and cold water meters

- Gas meters


Sensors:

- Temperature (displayed only, temporarily not stored)


### Compatibility limitations

For technical reasons, LoRa does not support electricity meters. Because of how LoRa works, its transmission rate and data reliability are not high enough for load profile billing in smart-me Billing. 

For this reason, LoRa is used only to record meter data for which sufficient reliability and functionality can be guaranteed.

## Tested LoRaWAN gateways

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Note: You can integrate untested devices yourself. Compatible devices only need the "Semtech" and "Data Packet Forwarder" options.

## Carry out commissioning

[Commissioning the LoRaWAN gateways](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Compatibility list of meters and sensors

Is your meter or sensor not listed?

Get in touch with us, as your meter or sensor can be integrated at short notice. Send an email to [support@smart-me.com](mailto:support@smart-me.com) with the subject "New LoRa device".

Requirements for an integration:

- Device EUI

- Application key for the device
    (The key has 32 characters. It is included with the product. If it is missing, you can get it from your current or previous billing provider.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Open Spreadsheet, LoRa Gateway compatibility list in new window")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" height="720px" title="Spreadsheet, LoRa Gateway compatibility list" />

LoRa Gateway compatibility list

## Working with LoRa field testers

You can commission a field tester as any device type by using its EUID and APP key.

For example, you can connect a field tester with the manufacturer "GWF" and the type "All". This allows the tester to communicate with the gateway. The gateway does not create a metering point for the tester in the smart-me portal.

Tested with:
\- Adeunis ARF8123AA 868 MHz

## Sales partners

### GWF AG

Obergrundstrasse 119
CH-6005 Luzern
+41 41 319 50 50
[www.gwf.ch](http://www.gwf.ch)


Mauro Nuozzi

Back office manager

+41 41 319 52 47

mauro.nuozzi@gwf.ch

### Brunata AG

Althardstrasse 10
CH-8105 Regensdorf
[contact@brunata.ch

](mailto:contact@brunata.ch)

Alex Nanzer, Management
+41 41 669 10 10
[alex.nanzer@brunata.ch](mailto:alex.nanzer@brunata.ch) 

### Elsys.se

[www.elsys.se](http://www.elsys.se) 

## Data quality and outage coverage

LoRa technology records data and sends it right away. LoRaWAN gateways have no data storage. Unlike other smart-me products, they therefore cannot reconstruct incomplete data sets.

For this reason, LoRa is not equally suitable for all types of energy. 

For heat, water and gas, a brief outage or a data gap is usually not a major problem. If it is fixed in the medium term, billing can still be done without issues.
Electricity is billed by tariff in 15-minute intervals, so fixing a gap in the medium term is not straightforward. In our view, LoRa is therefore not suitable for transmitting and billing electricity data.

For this reason, smart-me has developed its own hardware to provide the data reliability and completeness that electricity requires. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
