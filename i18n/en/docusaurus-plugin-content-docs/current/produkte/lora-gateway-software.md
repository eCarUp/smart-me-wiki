---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa stands for Long Range and refers to a radio technology with long range and low data throughput.'
sidebar_label: 'LoRa Gateway Software'
---
## Foreword

LoRa stands for Long Range and refers to a radio technology with long range and low data throughput. This communication medium is particularly suitable for the wireless transmission of meter readings in the fields of sanitary and heating technology.

Compared with Wireless M-Bus, which was developed specifically for meter data transmission, LoRa stands out with its significantly longer range.

It requires fewer gateways per building to collect all meter readings from the individual apartments.

## Structure

![LoRa Gateway Software – Figure 1](/img/produkte-lora-gateway-software/01.png)

## General information on the compatibility of meters and sensors

With the smart-me LoRa gateway solution, it is important that the sensors and meters are included in the compatibility list. If they are not listed, there is currently no compatibility.

Get in touch with us — integrating your meter or sensor is possible at short notice. Send an e-mail to [support@smart-me.com](mailto:support@smart-me.com) with the subject "Neues LoRa Gerät"

In general, the smart-me gateway solution supports the following meter and sensor types:

Meters:

- Heat meters

- Cooling meters

- Heat/cooling meters

- Domestic hot water and cold water meters

- Gas meters


Sensors:

- Temperature (display only, currently not stored)


### Compatibility limitations

For technical reasons, electricity meters are not supported with LoRa. Due to how LoRa works, the transmission rate and the data reliability for load profile billing in accordance with smart-me Billing are not sufficiently high.

Therefore, only meter data for which sufficient reliability and functionality can be guaranteed is recorded via LoRa.

## Tested LoRaWAN gateways

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Note: Untested devices can be integrated independently. Compatible devices only need the "Semtech" and "Data Packet Forwarder" options.

## Carrying out the commissioning

[Commissioning the LoRaWAN gateways](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Compatibility list of meters and sensors

Is your meter or sensor not included?

Get in touch with us — integrating your meter or sensor is possible at short notice. Send an e-mail to [support@smart-me.com](mailto:support@smart-me.com) with the subject "Neues LoRa Gerät".

Prerequisites for an integration:

- Device EUI

- Application key for the device
    (The key has 32 characters. The key is supplied with the product; if not, it can be obtained from the current / previous billing provider.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Open Spreadsheet, LoRa gateway compatibility list in new window")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" title="Spreadsheet, LoRa gateway compatibility list" />

LoRa gateway compatibility list

## Working with LoRa field testers

Field testers can be commissioned as any device type using the EUID and its APP key.

Field testers can be connected, for example, with manufacturer "GWF" and type "All". This allows the tester to communicate with the gateway. The gateway does not create a measuring point for the tester on the smart-me portal side.

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

## Data quality and failure coverage

LoRa technology is based on recording and sending the data. The LoRaWAN gateways have no data storage and therefore cannot reconstruct incomplete data sets, as is otherwise the case with smart-me products.

For this reason, LoRa is not equally suitable for all forms of energy.

For heat / water and gas, a short-term outage or a data gap is generally not a major hurdle and can be billed smoothly if it is remedied within a reasonable time.
With electricity and its tariffing in 15-minute intervals, remedying the issue within a reasonable time is not straightforward, which is why in our view LoRa is not suitable for the transmission of electricity data and its billing.

For this reason, smart-me has developed its own hardware to ensure the necessary data reliability and completeness for electricity.

- Telstar 80A

- Telstar CT

- Nimbus 100A
