---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa stands for Long Range and is a radio technology with a long range and low data throughput.'
sidebar_label: 'LoRa Gateway Software'
---
## Preface

LoRa stands for Long Range and is a radio technology with a long range and low data throughput. This communication medium is particularly suitable for the wireless transmission of meter readings in plumbing and heating technology.

Compared with Wireless M-Bus, which was developed specifically for transmitting meter data, LoRa stands out with its significantly longer range.

Fewer gateways are needed per building to collect all meter readings from the individual apartments.

## Setup

![LoRa Gateway Software – Figure 1](/img/produkte-lora-gateway-software/01.png)

## General information on the compatibility of energy meters and sensors

With the smart-me LoRa Gateway solution, it is important that the sensors and energy meters are included in the compatibility list. If they are not listed, they are currently not compatible. 

Get in touch with us: your meter or sensor can be integrated promptly. Send an email to [support@smart-me.com](mailto:support@smart-me.com) with the subject "New LoRa device"

In general, the smart-me Gateway solution supports the following types of energy meters and sensors:

Energy meters:

- Heat meters

- Cooling meters

- Heat/cooling meters

- Domestic hot water and cold water meters

- Gas meters


Sensors:

- Temperature (display only, temporarily not stored)


### Compatibility limitations

For technical reasons, electricity meters are not supported with LoRa. Due to the way LoRa works, the transmission rate and the data reliability are not high enough for load profile billing with smart-me Billing. 

Therefore, LoRa is used exclusively to record meter data for which sufficient reliability and functionality can be guaranteed.

## Tested LoRaWAN gateways

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Note: Untested devices can be integrated on your own. Compatible devices only need the "Semtech" and "Data Packet Forwarder" options.

## Performing commissioning

[Commissioning the LoRaWAN gateways](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Compatibility list for meters and sensors

Is your meter or sensor not listed?

Get in touch with us: your meter or sensor can be integrated promptly. Send an email to [support@smart-me.com](mailto:support@smart-me.com) with the subject "New LoRa device".

Requirements for an integration:

- Device EUI

- Application key for the device
    (The key has 32 characters. It is supplied with the product; if not, it can be obtained from the current / previous billing provider.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Open Spreadsheet, LoRa Gateway compatibility list in new window")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" height="720px" title="Spreadsheet, LoRa Gateway compatibility list" />

LoRa Gateway compatibility list

## Working with LoRa field testers

Field testers can be commissioned as any device type using their EUID and APP key.

For example, field testers can be connected with manufacturer "GWF" and type "All". This allows the tester to communicate with the gateway. The gateway does not create a metering point for the tester in the smart-me portal.

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

LoRa technology is based on recording and sending data. LoRaWAN gateways have no data storage and therefore cannot reconstruct incomplete data sets, as is otherwise the case with smart-me products.

For this reason, LoRa is not equally suitable for all types of energy. 

For heat / water and gas, a brief outage or a data gap is generally not a major obstacle and can be billed smoothly if resolved in the medium term.
For electricity and its tariffing in 15-minute intervals, a medium-term resolution is not easily possible. In our view, LoRa is therefore not suitable for transmitting electricity data and billing it.

This is why smart-me has developed its own hardware to ensure the necessary data reliability and completeness for electricity. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
