---
title: 'Pico EV Charger'
slug: '/produkte/pico-ladestation-exa'
description: 'RDC-DD 6mA according to IEC 62955 (Fault DC detection device)'
sidebar_label: 'Pico EV Charger'
---
RDC-DD 6mA according to IEC 62955 (Fault DC detection device)

Pico is the Swiss high-tech charging station. It connects directly to the cloud via Wi-Fi or mobile communications. The integrated smart meter exports high-precision measurement data that is signed during transactions and can be validated at any time free of charge. The station can be integrated into a backend (eCarUp), energy management systems and other third-party systems. Furthermore, Pico can be used for both static and dynamic load management (including phase balancing).

This article covers the fists version of our EV Charger Pico (Article number 202170exA). Find the information on the current Pico EV Charger generation here: [Pico EV Charger.](/produkte/pico-ladestation)

![Pico EV Charger – figure 1](/img/_en/products-pico-ev-charger-exa/01.png)

[Pico configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessories](/produkte/pico-ladestation/pico-zubehör)

## Functions

- -   -   Integrated load management and load balancing with phase compensation

        - Easy installation (small and light), suitable for ribbon cable

        -  Identification via RFID, app, CarID and ready for ISO 15118 (Powerline)

        - Encrypted real-time data connection to the smart-me and eCarUp Cloud 

        - Easy installation with the free smart-me app.

        - Interfaces to third party systems via API, CSV, MSCONS, IS-E and more.


## Pico Commissioning



Before you can use your Pico EV charger, you need to connect it to your Wi-Fi network.

1.  1.  1.  Connect your smartphone or tablet to the Wi-Fi.

        2.  Download and install the free smart-me app.

        3.  Start the app and create a free account.

        4.  Click on "Add device" (+) and follow the instructions.
            1\. Select WLAN (2.4Ghz or Mobile)
            2\. Enter password (WLAN)
            3\. Hold the supplied RFID card against the reader for 10 seconds
            4\. Connect mobile phone to the local WLAN of the Pico (networks: smartme\_serial number) and hold.
            5\. Return to the app
            6\. Enter the display name of the Pico and complete the installation.


## Configuration

The configuration is covered in detail here: [Pico configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Technical data

Maximum charging power 22 kW at 32A three-phase, 7.36 kW at 32A single-phase

Identification Automatic recognition and identification of the car, RFID / NFC reader (JEWEL, MIFARE, FELICA, ISO14443, NFC\_DEP, ISO14443\_B, ISO15693)

Smart Meter Integrated electricity meter incl. security processor

Phase balancing Automatic phase balancing

Load management Automatic load management via several stations

Communication WiFi (2.4 GHz) and mobile radio (LTE) incl. SIM and data traffic for 10 years from [1nce](https://1nce.com/en/coverage/), [Modbus TCP](/schnittstellen/modbus-tcp).

Cloud connection Connection to smart-me and eCarUp Cloud

Safety Integrated Article number 202170exA: RDC-DD 6mA according to IEC 62955 (Fault DC detection device)

Temperature range -30°C to 50°C

Mains voltages 3x230/400VAC or 1x 230VAC (+/-10%)

Charging socket IEC 62196-2 type 2 

Protection class IP55 (indoor and outdoor)

Impact resistance class IK10

Flammability rating UL94

Load shedding 2 potential-free inputs (4 states), min. 12V AC/DC, max. 48 VDC / 230 VAC

S0 output S0 interface (1000 imp/kwh) for calibration

Power connection top, bottom, rear

Installation type Busbar, ribbon cable, star-shaped

Dimensions H:300 mm W:220 mm D:112 mm

Weight 3.8 kg

Cable cross-section min. 2.5 mm2, max. 10 mm2

Cable diameter 10-20 mm

Server location Switzerland 

## Pico Connectors and Dimensions

![Pico EV Charger – figure 2](/img/_en/products-pico-ev-charger-exa/02.jpg)

### Wiring diagram

L1: Phase 1

L2: Phase 2

L3: Phase 3

N: Neutral conductor / Neutral conductor

PE: Protective earth

The protective earth conductor should be attached to the upper connection screw so that the stand is earthed directly together with the station.

The product can only be operated in 3-phase star connection or 1-phase!



### Cable routing

The cables can be fed in and out of Pico at 5 points. 

Two at the top, two at the bottom and one through the back plate.

When mounting through the back plate, a hole with a diameter of 25-26mm must be drilled.

Details on mounting the stand can be found in the installation instructions in the downloads.

### Load shedding (external inputs)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Video src="" title="Video" />

Pico Lastabwurf

Load shedding can also be implemented using only one available signal. 

For the configuration from no charge to maximum charge power, the signal is wired to IN1 and IN2 as well as COM.

For the configuration from 6A minimum power to maximum charging power, the signal must only be wired to IN2 as well as COM.

Attention:
The load shedding can either be wired to all Picos or minimally to one from each load group.
This function also works in case of no internet connection.

Alternatively, the load shedding can also be done via the IF/THEN actions and Pico control.

![Pico EV Charger – figure 3](/img/_en/products-pico-ev-charger-exa/03.png)

### Dimensions

![Pico EV Charger – figure 4](/img/_en/products-pico-ev-charger-exa/04.png)

## Shipping Information



212070 smart-me PICO charging station incl. mounting plate

Customs tariff number: 85044055

Weight with packaging: 4.6 kg

Size of packaging: 400x300x200mm

Packages per Euro pallet: 72 pieces



212070/1 smart-me PICO charging station without mounting plate

Customs tariff number: 85044055

Weight with packaging: 3.3 kg

Size of packaging: 400x300x200mm

Packages per Euro pallet: 72 pieces

## Accessories

[Accessories](/produkte/pico-ladestation/pico-zubehör)

## Safety instructions

The safety instructions must be observed under all circumstances:

Installation, maintenance, repair, commissioning:

- Read the entire manual carefully before installing and operating the product.

- Danger to life due to high electrical voltage. Never make any changes to components, software or connecting cables without being de-energised. Therefore, remove the appropriate fuses and store them in such a way that other persons cannot reinsert them unnoticed.

- The product may only be installed, repaired or maintained by an authorised electrician. All applicable local, regional and national regulations for electrical installations must be observed. 

- Installation must not be carried out near flammable, explosive media, flooded areas (underground car park) or areas where there is a risk of flowing water. 

- The product must be installed in a permanent location. The connections on the pico and back plate are designed for a limited number of mating cycles. 

- The product must be installed on a wall or structure with sufficient load-bearing capacity. 

- The terminals in the backplate are live when the circuit is closed and must never be brought into direct contact or into contact with anything other than the Pico electronics.

- Depending on the type of installation, approvals may be required before installation, e.g. if the house connection is increased. 

- The charging station must be registered with the grid operator. 




Intended use:

- This product is intended exclusively for charging electrically powered vehicles which are equipped with non-gassing batteries. The product may only be used with a charging cable according to IEC 62196. Uses other than those specified here are not permitted.

- The unit is intended for indoor and outdoor use.


Operation:

- Never use or touch the product if it is damaged or not working properly. In the event of an emergency (smoke, fire, sparks or other malfunction), switch off the product immediately using the RCD switch and contact customer support. 

- Do not extinguish the product with water or clean it with running water.

- Do not immerse the product in water or other liquids. 

- This product is not intended for use by persons with reduced physical, mental or sensory capabilities (including children) or persons who do not understand the product. 

- Ensure that children do not play with the product.

- Never touch the contacts of the type 2 charging socket and do not insert any foreign objects into the product. 

- Never use the charging cable if it is damaged or if the connectors are wet or dirty. 

- Do not use extension cables or unauthorised adapters in combination with the product. 

- Never kink the charging cable, drive over it or expose it to high heat. 

- Only pull the charging cable out of the charging cradle by the plug. 

- Do not place the charging cable in the path of other road users and always position it so that there is no risk of tripping. 

- Protect the charging cable from the effects of the weather such as direct sunlight, wind, rain, humidity and moisture and never connect it with wet or damp hands. 

- Do not use the product near strong electromagnetic fields or in the direct vicinity of radio telephones.


## Downloads

Data Sheet

[Englisch](https://docs.google.com/presentation/d/1GUdCrSlVUCWPzOxq2jCkzX2zmPm2k0qoOBliHyQPr2Q/export/pdf)

Technical Documents

[Pico Quick Starter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf)

[Installation and Assembly Instruction (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installation and Assembly Instruction (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Drilling Jig](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[EU Declaration of Conformity (non-MID)](https://drive.google.com/file/d/1Jx0MrqCpLrfEZa3ts7U19iJQQLQpyRww/view?usp=drive_link)

[Wiring Diagram ZIP Files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
