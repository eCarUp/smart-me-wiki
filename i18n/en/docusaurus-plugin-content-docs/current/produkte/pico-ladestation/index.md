---
title: 'Pico EV Charger'
slug: '/produkte/pico-ladestation'
description: 'Pico is a MID-certified charging station with integrated cellular and WiFi interface for the transmission of real-time data.'
sidebar_label: 'Pico EV Charger'
---
Pico is a MID-certified charging station with integrated cellular and WiFi interface for the transmission of real-time data. The charging station synchronizes the measured values automatically and encrypted into the smart-me cloud. The station can be integrated into the eCarUp backend and has static and dynamic load management. The smart-me portal can be used to further process the data. Alternatively, they can be exported and processed in third-party systems via our open interface. 

![Pico EV Charger – figure 1](/img/_en/products-pico-ev-charger/01.png)

## The most important installation instructions in short

- Pico has phase switching - Please connect all phases according to the printed information on the terminals (L1 = L1, L2 = L2, L3 = L3)

- Observe the installation instructions, especially for outdoor applications, to avoid forgetting any sealants.
    [Installation and Assembly Instruction (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

- Tighten the sealants adequately and check the fit of the rubber seals.


[Installation planning](https://doc.smart-me.com/products/pico-ev-charger/installation-planning)

[Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Accessories](/produkte/pico-ladestation/pico-zubehör)

[Pico configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Pico display](/produkte/pico-ladestation/pico-display)

[Pico Stand](/produkte/pico-ladestation/pico-standfuss)

## Functions Overview

- -   -   Integrated load management and load balancing with phase compensation

        - Integrated SIM card with a data volume of 10 years

        - [MID-certification](/planung/zertifizierungen#certification-for-ev-chargers) and load profile certification of the meter hardware due to large display

        - Integrated fault protection devices 30mA AC according IEC60947-2 and 6mA DC according IEC62955

        - German [Eichrecht certification](/planung/zertifizierungen#eichrecht-certification-germany) (Art.-Nr. 242070, 242070/1)

        - Easy installation (small and light), suitable for ribbon cable

        - Identification via RFID, app, CarID and ready for ISO 15118 (Plug & Charge)

        - Prepared for ISO15118 Powerline Communication (Plug&Charge, V2H, V2G)

        - Encrypted real-time data connection to the smart-me and eCarUp Cloud 

        - Easy [installation](/konfiguration/inbetriebnahme) with the free smart-me app.

        - Interfaces to third party systems via API, CSV, MSCONS, IS-E and more.

        - Solar-optimized control system


## Configure Pico

Info about mounting, MID mode, status and error messages can be found in the [Installation and Assembly Instruction (.pdf)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

The commissioning is covered in detail here: [Commissioning](/konfiguration/inbetriebnahme) 

The configuration is covered in detail here: [Pico configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Technical Data

<Video src="" title="Custom embed" />

[Download Datasheet (.pdf)](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

## Function description

### ISO 15118 communication standard (Plug&Charge, V2H, V2G)

What is this standard?

The ISO15118 standard is a communication standard between vehicle and charging station. It describes the physical requirements and protocols, as well as the supported functions of this interface.

The functions primarily include:

- Charging releases for Plug & Charge

- Charging management for charging and discharging vehicles (unidirectional charging, bidirectional charging for V2H and V2G)


What is the aim of the standard? 

The aim of this standard is a homogeneous implementation of the vehicle and its storage in the public grid or in the home system as a storage unit. in the long term, it should be possible to use the vehicle storage to stabilize the public grid (V2G = Vehicle to Grid) or as a home storage solution (V2H = Vehicle to Home).

Is this already a reality?

The use of this standard is still very limited. Various charging hardware and vehicle manufacturers are currently conducting tests on this topic in order to coordinate and further develop communication. Some plug & charge solutions are already in operation in real life but are not yet very widespread.

V2G and V2H applications are already partially supported by DC charging stations. 

The offer for V2G and V2H on the part of AC charging stations is currently still very limited or non-existent due to the unavailability of the necessary equipment on the part of the vehicles.

However, the first vehicle manufacturers have already announced vehicles that will have the technical equipment.
However, none of these vehicles can currently be purchased on the market. (State on 16.05.2025)

What does this mean for your Pico charging station?

Your Pico charging station is fully prepared for the future. A software update will suffice to activate the functions on your Pico and we are currently working intensively on the implementation of the functionalities.

### RCD / DC fault detection and load protection

The integrated safety devices check their functionality fully automatically. 



- At least every 24 hours since the last test.

- Whenever the device is restarted.




If there is an error during the self-tests, no power is released and the information is shown on the display.

If there is an error during the charging process, the power is interrupted and the error is shown on the display.



The error can only be reset mechanically by disconnecting and reconnecting the charging cable to the charging station.

## Pico Connectors and Dimensions

![Pico EV Charger – figure 2](/img/_en/products-pico-ev-charger/02.jpg)

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

![Pico EV Charger – figure 3](/img/_en/products-pico-ev-charger/03.png)

Load shedding can also be implemented using only one available signal. 

For the configuration from no charge to maximum charge power, the signal is wired to IN1 and IN2 as well as COM.

For the configuration from 6A minimum power to maximum charging power, the signal must only be wired to IN2 as well as COM.

COM is the neutral conductor, IN1 and IN2 must be provided with a voltage at the ON signal. IN1 and IN2 do not generate voltage, this must be provided externally.

Attention:
The load shedding can either be wired to all Picos or minimally to one from each load group.
This function also works in case of no internet connection.

Alternatively, the load shedding can also be done via signal inputs of our counters and the use of the [multilevel load managements](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-of-the-load-shedding).

![Pico EV Charger – figure 4](/img/_en/products-pico-ev-charger/04.png)

![Pico EV Charger – figure 5](/img/_en/products-pico-ev-charger/05.png)

### Dimensions

![Pico EV Charger – figure 6](/img/_en/products-pico-ev-charger/06.png)

\*.DXF and \*.DWG files of the meter, can be found in the ZIP archive under downloads

## Shipping Information



232070 and 242070 smart-me Pico charging station incl. mounting plate

Customs tariff number: 85044055

Weight with packaging: 4.6 kg

Size of packaging: 400x300x200mm

Packages per Euro pallet: 72 pieces



232070/1 and 242070/1 smart-me Pico charging station without mounting plate

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

- Serial numbers before 7002702 require a serial RCD type-A to comply with national installation standards

- Installation must not be carried out near flammable, explosive media, flooded areas (underground car park) or areas where there is a risk of flowing water. 

- The product must be installed in a permanent location. The connections on the pico and back plate are designed for a limited number of mating cycles. 

- The product must be installed on a wall or structure with sufficient load-bearing capacity. 

- The terminals in the backplate are live when the circuit is closed and must never be brought into direct contact or into contact with anything other than the Pico electronics.

- Depending on the type of installation, approvals may be required before installation, e.g. if the house connection is increased. 

- The charging station must be registered with the grid operator. 

- The screws of the cable connections should be tightened with a torque of 3 Nm. The maximum diameter of the cable with ferrule is 6.5mm.

- The product must be operated in combination with a miniature circuit breaker. The short-circuit capability of the miniature circuit breaker must correspond to the maximum short-circuit capability of the connection point. For selectivity, one miniature circuit breaker may be sufficient for several charging stations. Observe the country-specific information on our Wiki. The stations can handle individual short circuits up to 3kA without any problems.


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

- The product must be operated in combination with a circuit breaker. The short-circuit capability of the circuit breaker must correspond to the maximum short-circuit capability of the connection point. For selectivity, one circuit breaker may be sufficient for several charging stations.


## FAQ

### Why does the Pico always reserve 6A in the load group even though the car is no longer charging?

The IEC 61851 standard stipulates that every car must always have at least 6 A available. This is stipulated in the standard so that a parking heater can be supplied via the mains. Or if someone is absent for several weeks, so that the battery is not discharged.

### Does Pico require one type-A serial RCD per charging station?

The Pico charging stations with serial numbers before 7002701 require a serial type A RCD 40A 30mA to comply with national standards. The functionality is given though but not fully compliant to a standard.
From serial number 7002702 or BY2024 the Pico no longer requires a serial RCD, this is now integrated and according to the standard 60947-2.

### Does Pico support ISO15118 for Plug & Charge and V2G?

The Pico charging stations have all the technical equipment to support the ISO15118 and ISO15118-20 standard in the long term and the ability of the Pico to support the functions is exclusively software-dependent and does not require any hardware changes or adaptations.

Bidirectional charging V2H and V2G with the Pico:
The capability of the Pico charging station for bidirectional charging under ISO15118-20 is exclusively dependent on the release and availability of the functions and equipment on the part of the vehicle and vehicle manufacturer. The charging hardware of the Pico charging station does not represent a limitation for this.

The first vehicles capable of this and effectively available for purchase are expected in the coming years.

We are continuously working on the development of these functions in our Pico charging station to be ready for this moment.

## Installation handbook, Downloads and Declaration of Conformity

Data Sheet

Technical Documents

[Pico Quick Starter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf)

[Installation and Assembly Instruction (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installation and Assembly Instruction (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Drilling Jig](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Declaration of Conformity](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Wiring Diagrams and Circuit Diagrams ZIP Files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
