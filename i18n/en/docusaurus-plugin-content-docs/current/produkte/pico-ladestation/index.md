---
title: 'Pico EV Charger'
slug: '/produkte/pico-ladestation'
description: 'Pico is a MID-certified charging station with an integrated mobile and WiFi interface for transmitting real-time data.'
sidebar_label: 'Pico Charging Station'
---
Pico is a MID-certified charging station with an integrated mobile and WiFi interface for transmitting real-time data. The charging station automatically synchronizes the measured values to the smart-me Cloud in encrypted form. The station can be integrated into the eCarUp backend and features static and dynamic load management. The data can be viewed in the smart-me portal or exported to third-party systems via our open interface for further processing.

![Pico EV Charger – Figure 1](/img/produkte-pico-ladestation/01.png)

## Key installation notes at a glance

- Pico features phase switching - please connect all phases according to the labelling (L1 = L1, L2 = L2, L3 = L3)

- Especially for outdoor use, follow the assembly instructions so that you do not forget any sealing elements. IP55 is only achieved with the sealing elements.
    [Installation and assembly instructions  (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

- Tighten the sealing elements adequately and check that the seals are seated correctly.

[Installation planning](/produkte/pico-ladestation/installationsplanung)

[Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessories](/produkte/pico-ladestation/pico-zubehoer)

[Pico Display](/produkte/pico-ladestation/pico-display)

[Pico Stand](/produkte/pico-ladestation/pico-standfuss)

<Video src="YiiACL00jko" title="YouTube video, webinar recording release multilevel load management" />

Multilevel load management (50 min)

<Video src="Bx9QOYZPWEk" title="YouTube video, MID certification Pico - webinar" />

What is behind the MID certification (30 min)

<Video src="bSEN20E-h18" title="YouTube video, Pico charging station receives MID certification" />

Short video: Pico receives MID (2 min)

## Feature overview

- Integrated load management and load balancing with phase balancing

- Integrated SIM card with data volume for 10 years

- [MID certification](/planung/zertifizierungen-schweiz#certifications-for-charging-stations-in-switzerland) and load profile certification of the internal meter hardware thanks to the large display

- Integrated fault protection devices 30mA AC according to IEC60947-2 and 6mA DC IEC62955

- German [calibration law certification (Eichrecht)](/planung/zertifizierungen-deutschland) (Art. No. 242070, 2402070/1)

- Easy mounting (small and light), suitable for flat ribbon cable

- Identification via RFID, app, CarID and prepared for ISO 15118 (Plug & Charge)

- Prepared for ISO15118 powerline communication (Plug&Charge, V2H, V2G)

- Encrypted real-time data connection to the smart-me and eCarUp Cloud 

- Easy [installation](/konfiguration/inbetriebnahme) with the free smart-me app.

- Interfaces to third-party systems via API, CSV, MSCONS, IS-E and others

- Solar-optimized control

- Load shedding according to [Paragraph 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Germany)

## Configuring Pico

Information on mounting, MID mode, how to verify charging sessions in accordance with calibration law, status and error messages can be found in the [installation manual (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

The installation is covered in detail here: [Commissioning](/konfiguration/inbetriebnahme) 

The configuration is covered in detail here: [Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Technical data

| Feature | Value |
| --- | --- |
| Maximum charging power | 22 kW at 32A three-phase<br />7.36 kW at 32A single-phase |
| Smart Meter | Integrated electricity meter (MID, CH load profile, DE Eichrecht) incl. security processor |
| Phase balancing | Automatic phase balancing |
| Load management | Automatic load management across multiple stations |
| Identification | Automatic detection and identification of the car<br />RFID / NFC reader (JEWEL, MIFARE, FELICA, ISO14443, NFC_DEP, ISO14443_B, ISO15693) |
| Communication | WLAN IEEE 802.11 b/g/n (2.4 GHz) and LTE Cat-M1 incl. SIM and data traffic for 10 years from 1nce, Modbus TCP, OCPP-J 1.6 |
| Cloud connection | Connection to smart-me and eCarUp Cloud |
| Safety | From year of manufacture 2024, SN 7002702: RCD Typ-A (30mA AC) IEC 60947-2 + RDC-DD 6mA DC IEC 62955<br />Before year of manufacture 2024, up to SN 7002701: RDC-DD (30mA AC, 6mA DC) IEC 62955 |
| Temperature range | -25°C to +40°C |
| Mains voltage | 3x230/400V (+/- 10%) 50Hz |
| Charging socket | IEC 62196-2 Type 2 |
| Degree of protection | IP55 (indoor and outdoor) |
| Impact resistance rating | IK10 |
| Environmental conditions | M1, E2 |
| Load shedding | 2 potential-free inputs (4 states):<br />Vlow: ≤ 2V AC/DC<br />Vhigh: ≥ 12V AC/DC<br />Vmax: 48VDC/230VAC |
| S0 output | 10'000 Imp/kWh |
| Power connection | top, bottom, rear |
| Installation type | Busbar, flat ribbon cable, star-shaped |
| Dimensions | L:300 mm W:220 mm H:112 mm |
| Weight incl. mounting plate | 3.8 kg |
| Cable cross-section | min. 2.5 mm², max. 10 mm², or 6.5 mm diameter with wire end ferrule |
| Cable diameter | 10-20 mm |
| Server location | Switzerland |
| Last modified | 03.06.2026 |

[Download data sheet (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Function descriptions

### ISO 15118 communication standard (Plug&Charge, V2H, V2G)

What kind of standard is this?

The ISO15118 standard is a communication standard between vehicle and charging station. It describes the physical requirements and protocols as well as the supported functions of this interface.

The functions primarily include:

- Charging authorization for Plug & Charge

- Charge management for charging and discharging vehicles (unidirectional charging, bidirectional charging for V2H and V2G)

What is the goal of the standard?
The goal of this standard is a homogeneous integration of the vehicle and its storage into the public grid or into the home system as a storage unit.
In the long term, the vehicle storage should be usable to stabilize the public grid (V2G = Vehicle to Grid) or as a home storage solution (V2H = Vehicle to Home).

Is this already a reality?

The use of this standard is still very limited. Various charging hardware and vehicle manufacturers are currently carrying out tests on this topic in order to align and further develop the communication.
Plug & Charge solutions are already partly in operation in real life but are not yet particularly widespread.

V2G and V2H applications are already partly supported today by DC charging stations.
The offering for V2G and V2H on the AC charging station side is currently still very limited or non-existent, as the necessary equipment is not yet available on the vehicle side.

However, the first vehicle manufacturers have already announced vehicles that will have the technical equipment. At present, however, none of these vehicles can be purchased on the market. (As of 16.05.2025)

What does this mean for your Pico charging station?

Your Pico charging station is fully prepared for the future. A software update will be sufficient to unlock the functions on your Pico.
We are currently working intensively on implementing the functionality.

### RCD / DC fault detection and load protection

The integrated safety devices check their own functionality fully automatically. 

- At least every 24 hours since the last check.

- Every time the device is restarted.

If there is a fault during the self-checks, no power will be released and the information is shown on the display.
If there is a fault during a charging session, the power is interrupted and the fault is shown on the display.

The fault can only be reset mechanically by unplugging and replugging the charging cable at the charging station.

## Display

The behaviour of the display is described on the page [Pico Display](/produkte/pico-ladestation/pico-display)

![Pico EV Charger – Figure 2](/img/produkte-pico-ladestation/02.png)

## Pico connections and dimensions

![Pico EV Charger – Figure 3](/img/produkte-pico-ladestation/03_EN.jpg)

### Connection diagram

L1: Phase 1

L2: Phase 2

L3: Phase 3

N: Neutral conductor

PE: Protective earth

The protective earth should be attached to the upper connection screw so that the stand is earthed directly together with the station.

Attention:
The product can only be operated in 3-phase star connection or single-phase!

Cable routing

With Pico, the cables can be routed in and out at 5 points. 

Two at the top, two at the bottom and one through the back plate.

For mounting through the back plate, a hole with a diameter of 25-26mm must be drilled.

Details on mounting the stand can be found in the assembly instructions in the downloads.

### Load shedding (external inputs)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" height="245px" title="Spreadsheet, Pico load shedding" />

Pico load shedding

![Pico EV Charger – Figure 4](/img/produkte-pico-ladestation/04.png)

<div className="row">
<div className="col col--7">

Load shedding can also be implemented with only one available signal. 

For the configuration from no charging to maximum charging power, the signal is wired to IN1 and IN2 as well as COM. For the configuration from 6A minimum power to maximum charging power, the signal only needs to be wired to IN2 and COM.

COM is the neutral conductor; IN1 and IN2 must be supplied with a voltage for the ON signal. IN1 and IN2 do not generate any voltage; it must be provided externally.

Attention:
Load shedding can either be wired to all Picos or at least to one from each load group. This function is also guaranteed without an internet connection.

Alternatively, load shedding can also be carried out via [multilevel load management](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuring-load-shedding) using meter input signals.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 5](/img/produkte-pico-ladestation/05_EN.png)

![Pico EV Charger – Figure 6](/img/produkte-pico-ladestation/06.png)

</div>
</div>

### Dimensions

![Pico EV Charger – Figure 7](/img/produkte-pico-ladestation/07.png)

\*.DXF and \*.DWG data can be found in the ZIP archive in the downloads.

## Shipping information

### 232070 and 242070 smart-me Pico charging station incl. mounting plate

Customs tariff number: 85044055

Weight with packaging: 4.6 kg

Packaging size: 400x300x200mm

Packages per Euro pallet: 72 pieces

### 232070/1 and 242070/1 smart-me Pico charging station without mounting plate

Customs tariff number: 85044055

Weight with packaging: 3.3 kg

Packaging size: 400x300x200mm

Packages per Euro pallet: 72 pieces

## Accessories

[Accessories](/produkte/pico-ladestation/pico-zubehoer) 

## Safety instructions

The safety instructions must be observed under all circumstances:

Installation, maintenance, repair, commissioning:

- Read the entire manual carefully before installing and operating the product.

- Danger to life due to high electrical voltage. Never make changes to components, software or connection cables without first disconnecting the power. To do this, remove the corresponding upstream fuses and store them so that other persons cannot reinsert them unnoticed.

- The product may only be installed, repaired or maintained by a qualified electrician. All applicable local, regional and national regulations for electrical installations must be observed. 

- Serial numbers before 7002702 require a series RCD Typ-A to meet national installation standards. See [Material recommendation RCD Typ-A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a).

- The installation must not take place near flammable or explosive media, in flood-prone areas (underground car park) or in areas where there is a risk of running water. 

- The product must be installed at a permanent location. The connections on the Pico and the back plate are designed for a limited number of plug cycles. 

- The product must be installed on a wall or structure with sufficient load-bearing capacity. 

- The connection terminals in the back plate are live when the circuit is closed and must under no circumstances be brought into contact, directly or with other objects, with anything other than the Pico electronics.

- Depending on the type of installation, permits may be required before installation, e.g. when increasing the building connection capacity. 

- The charging station must be registered with the grid operator. 

- The screws of the cable connections should be tightened with a torque of 3 Nm. The maximum diameter of the cable with wire end ferrule is 6.5mm.

- The product must be operated in combination with a miniature circuit breaker. The short-circuit capacity of the miniature circuit breaker must correspond to the maximum short-circuit capacity of the connection point. For selectivity, one miniature circuit breaker may be sufficient for several charging stations. Observe the country-specific notes on our wiki. The stations can handle individual short circuits up to 3kA without any problems.

Intended use:

- This product is intended exclusively for charging electrically powered vehicles equipped with non-gassing batteries. The product may only be used with a charging cable according to IEC 62196. Uses other than those specified here are not permitted.

- The device is intended for indoor and outdoor use.

Operation:

- Never use or touch the product if it is damaged or not working properly. In an emergency (smoke, fire, sparks or other malfunctions), switch off the product immediately via the residual current circuit breaker and notify customer support. 

- Do not extinguish the product with water or clean it with running water.

- Do not immerse the product in water or other liquids. 

- This product is not intended for operation by persons with limited physical, mental or sensory abilities (including children) or persons without knowledge of the product. 

- Make sure that children do not play with the product.

- Never touch the contacts of the Type 2 charging socket and do not insert any foreign objects into the product. 

- Never use the charging cable if it is damaged or if the connectors are wet or dirty. 

- Do not use extension cables or non-approved adapters in combination with the product. 

- Never kink the charging cable, drive over it or expose it to high heat. 

- Only pull the charging cable out of the charging holder by the plug. 

- Do not lay the charging cable in the path of other road users and always position it so that there is no risk of tripping. 

- Protect the charging cable from weather influences such as direct sunlight, wind, rain, humidity and wetness, and never connect it with damp or wet hands. 

- Do not use the product near strong electromagnetic fields or in the immediate vicinity of mobile phones.

## FAQ

<details id="warum-reserviert-der-pico-immer-6a-in-der-lastgruppe-obwohl-das-auto-nicht-mehr-geladen-wird">
<summary>Why does the Pico always reserve 6A in the load group even though the car is no longer charging?</summary>

The IEC 61851 standard requires that every car must always have at least 6 A available. The standard provides for this so that a parking heater can be supplied from the grid, or so that the battery is not discharged if someone is away for several weeks.

</details>

<details id="benötigt-pico-einen-seriellen-rcd-typ-a-pro-ladestation">
<summary>Does Pico require a series RCD Typ-A per charging station?</summary>

Pico charging stations with serial numbers before 7002701 require a series Type-A RCD 40A 30mA to meet national standards.
The function is present in these devices but is not compliant.
From serial number 7002702 or BY2024, the Pico no longer requires a series RCD; it is now integrated and compliant with 60947-2.

Which material is suitable for this is described under [Material recommendation RCD Typ-A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a).

</details>

<details id="unterstützt-die-pico-ladestation-iso15118-für-plug--charge-und-v2g--v2h">
<summary>Does the Pico charging station support ISO15118 for Plug & Charge and V2G / V2H?</summary>

The Pico charging stations have all the technical equipment to support the ISO15118 and ISO15118-20 standard in the long term.
Enabling the Pico to support these functions depends exclusively on software and requires no hardware change or modification.

Bidirectional charging V2H and V2G with the Pico:
The ability of the Pico charging station to charge bidirectionally under ISO15118-20 depends exclusively on the release and availability of the functions and equipment on the part of the vehicle and the vehicle manufacturer. The charging hardware of the Pico charging station does not represent a limitation for this.

The first capable vehicles that can actually be purchased are expected in the coming years.

We are continuously working on developing these functions in our Pico charging station so that we are ready for that moment.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No, since our meters are used for billing, it is not possible to reset them.

</details>

## Installation manual, downloads and declaration of conformity

Data sheet

[English](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

Technical documents

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Installation and assembly instructions (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installation and assembly instructions  (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Drilling template](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Declaration of conformity](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Connection diagram and circuit diagram ZIP files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
