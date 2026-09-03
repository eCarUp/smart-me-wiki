---
title: 'Pico EV Charger'
slug: '/produkte/pico-ladestation-exa'
description: 'RDC-DD 6mA according to IEC 62955 (residual direct current detecting device)'
sidebar_label: 'Pico EV Charger'
---
RDC-DD 6mA according to IEC 62955 (residual direct current detecting device)

Pico is the Swiss high-tech charging station. It connects directly to the cloud via Wi-Fi or mobile communications. The integrated smart meter exports high-precision measurement data that is signed during transactions and can be validated at any time free of charge. The station can be integrated into a backend (eCarUp), energy management systems and other third-party systems. Furthermore, Pico can be used for both static and dynamic load management (including phase balancing).

This article covers the first Pico generation (article number 202170exA). All information on the latest Pico version can be found here: [Pico EV Charger](/produkte/pico-ladestation).

![Pico EV Charger – Figure 1](/img/produkte-pico-ladestation-exa/01.jpg)

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessories](/produkte/pico-ladestation/pico-zubehör)

[Material recommendation RCD Type A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a)

## Functions

- Integrated load management and load balancing with phase balancing

- Easy mounting (small and light), suitable for flat ribbon cable

- Identification via RFID, app, CarID and ready for ISO 15118 (Powerline)

- Encrypted real-time data connection to the smart-me and eCarUp cloud 

- Easy installation with the free smart-me app.

- Interfaces to third-party systems via API, CSV, MSCONS, IS-E and others


## Pico commissioning

Before you can use your smart-me device, you have to connect it to your Wi-Fi network.

1.  Connect your smartphone or tablet to the Wi-Fi.

2.  Download and install the free smart-me app.

3.  Start the app and create a free account

4.  Tap "Add device" („Gerät hinzufügen“) (+) and follow the instructions.

    1.  1.  Choose Wi-Fi or LTE (2.4Ghz or Mobile)

        2.  Enter the password (Wi-Fi)

        3.  Hold the supplied RFID card against the reader for 10 seconds

        4.  Connect your mobile phone to Pico's local Wi-Fi (networks: smartme\_serialnumber) and hold.

        5.  Return to the app

        6.  Enter Pico's display name and complete the installation


## Configuring Pico

The configuration is covered in detail here: [Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Technical data

Maximum charging power  22 kW at 32A three-phase, 7.36 kW at 32A single-phase

Identification  Automatic detection and identification of the car, RFID / NFC reader (JEWEL, MIFARE, FELICA, ISO14443, NFC\_DEP, ISO14443\_B, ISO15693)

Smart Meter  Integrated non-MID certified electricity meter incl. security processor

Phase balancing  Automatic phase balancing

Load management  Automatic load management across multiple stations

Communication  WiFi (2.4 GHz) and mobile communications (LTE) incl. SIM and data traffic for 10 years from [1nce](https://1nce.com/de/laenderabdeckung/), [Modbus TCP](/)

Cloud connection  Connection to the smart-me and eCarUp cloud

Safety  Article number 202170exA RDC-DD 6mA according to IEC 62955 (residual direct current detecting device)

Temperature range  \-30°C to 50°C

Mains voltages 3x230/400VAC or 1x 230VAC (+/-10%)

Charging socket  IEC 62196-2 Type 2 

Protection class  IP55 (indoor and outdoor)

Impact resistance rating  IK10

Flammability class  UL94

Load shedding  2 potential-free inputs (4 states),  min. 12V AC/DC, max. 48 VDC / 230 VAC

S0 output  S0 interface (1000 imp/kwh) for calibration

Power connection  top, bottom, rear

Installation type  busbar, flat ribbon cable, star-shaped

Dimensions  H:300 mm W:220 mm D:112 mm

Weight  3.8 kg

Cable cross-section  min. 2.5 mm2, max. 10 mm2

Cable diameter  10-20 mm

Server location Switzerland 

## Pico connections and dimensions

![Pico EV Charger – Figure 2](/img/produkte-pico-ladestation-exa/02.jpg)

### Connection diagram

L1: Phase 1

L2: Phase 2

L3: Phase 3

N: neutral conductor

PE: protective earth conductor



The protective earth conductor should be attached to the upper connection screw so that the stand is earthed directly together with the station.

The product can only be operated in a 3-phase star connection or single-phase!



Cable routing

The cables can be routed in and out of Pico at 5 points. 

Two at the top, two at the bottom and one through the back plate.

For mounting through the back plate, a hole with a diameter of 25-26mm has to be drilled.

Details on mounting the stand can be found in the mounting instructions under Downloads.

### Load shedding (external inputs)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico load shedding in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Spreadsheet, Pico load shedding" />

Pico load shedding

Load shedding can also be implemented using only one available signal. 

For the configuration from no charging to maximum charging power, the signal is wired to IN1 and IN2  as well as COM.

For the configuration from 6A minimum power to maximum charging power, the signal only has to be wired to IN2 as well as COM.



Caution:
Load shedding can either be wired to all Picos or, as a minimum, to one from each load group.
This function is also ensured without an internet connection.

Alternatively, load shedding can also be carried out via the IF/THEN actions and Pico control.

![Pico EV Charger – Figure 3](/img/produkte-pico-ladestation-exa/03.png)

### Dimensions

![Pico EV Charger – Figure 4](/img/produkte-pico-ladestation-exa/04.png)

## Shipping information

### 212070 smart-me PICO charging station incl. mounting plate

Customs tariff number: 85044055

Weight with packaging: 4.6 kg

Packaging size: 400x300x200mm

Packages per Euro pallet: 72 units

### 212070/1 smart-me PICO charging station without mounting plate

Customs tariff number: 85044055

Weight with packaging: 3.3 kg

Packaging size: 400x300x200mm

Packages per Euro pallet: 72 units

## Accessories

[Accessories](/produkte/pico-ladestation/pico-zubehör) 

## Safety instructions

The safety instructions must be observed under all circumstances:

Installation, maintenance, repair, commissioning:

- Read the entire manual carefully before installing and operating the product.

- Danger to life due to high electrical voltage. Never carry out modifications to components, software or connection cables without being de-energized. The corresponding back-up fuses must therefore be removed and stored in such a way that other people cannot reinsert them unnoticed.

- The product may only be installed, repaired or maintained by a certified electrician. All applicable municipal, regional and national regulations for electrical installations must be observed. 

- The installation must not be carried out near flammable or explosive media, in flood areas (underground car park) or in areas where there is a risk of running water. 

- The product must be installed at a final location. The connections on the Pico and the back plate are designed for a limited number of plug-in cycles. 

- The product must be installed on a wall or structure with sufficient load-bearing capacity. 

- The connection terminals in the back plate are live when the circuit is closed and must under no circumstances be brought into contact directly or with objects other than the Pico electronics.

- Depending on the type of installation, permits may be required before installation, e.g. if the house connection power is increased. 

- The charging station must be registered with the grid operator. 


Intended use:

- This product is intended exclusively for charging electrically powered vehicles equipped with non-gassing batteries. The product may only be used with a charging cable according to IEC 62196. Uses other than those specified here are not permitted.

- The device is intended for indoor and outdoor use.


Operation:

- Never use or touch the product if it is damaged or not functioning properly. In an emergency (smoke, fire, sparks or other malfunctions), switch off the product immediately via the residual current circuit breaker and notify customer support. 

- Do not extinguish the product with water or clean it with running water.

- Do not immerse the product in water or other liquids. 

- This product is not intended for operation by persons with limited physical, mental or sensory abilities (including children) or persons without knowledge of the product. 

- Make sure that children do not play with the product.

- Never touch the contacts of the Type 2 charging socket and do not insert any foreign objects into the product. 

- Never use the charging cable if it is damaged or if the connections are wet or dirty. 

- Do not use extension cables or non-approved adapters in combination with the product. 

- Never bend the charging cable, drive over it or expose it to high heat. 

- Only pull the charging cable out of the charging holder by the plug. 

- Do not lay the charging cable in the traffic routes of other road users and always position it so that there is no risk of tripping. 

- Protect the charging cable from weather influences such as direct sunlight, wind, rain, humidity and moisture and never connect it with damp or wet hands. 

- Do not use the product near strong electromagnetic fields or in the immediate vicinity of cordless telephones.


## Downloads

Data sheet

[English](https://docs.google.com/presentation/d/1GUdCrSlVUCWPzOxq2jCkzX2zmPm2k0qoOBliHyQPr2Q/export/pdf)

Technical documents

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Installation and mounting instructions (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installation and mounting instructions  (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Drilling template](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Declaration of conformity (non-MID)](https://drive.google.com/file/d/1Jx0MrqCpLrfEZa3ts7U19iJQQLQpyRww/view?usp=drive_link)

[Connection diagram ZIP files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
