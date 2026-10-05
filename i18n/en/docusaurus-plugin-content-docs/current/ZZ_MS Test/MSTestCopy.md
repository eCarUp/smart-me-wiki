---
title: 'MS Test Copy'
slug: '/zz-ms-test/mstestcopy'
description: 'Test copy of the Pico product page for checking the formatting rules.'
sidebar_label: 'MS Test Copy'
---
<div className="row">
<div className="col col--7">

Pico is a MID-certified charging station with an integrated mobile and WiFi interface for transmitting real-time data. The charging station automatically synchronises the measured values to the smart-me Cloud in encrypted form. The station can be integrated into the eCarUp backend and has static and dynamic load management. The data can be exported to and further processed in third-party systems via the smart-me portal or our open interface.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 1](/img/produkte-pico-ladestation/01.png)

</div>
</div>

## Key installation notes at a glance

- Pico has phase switching — please connect all phases according to the labelling (L1 = L1, L2 = L2, L3 = L3).
- Particularly for outdoor applications, follow the [installation and assembly instructions (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) so that you do not forget any sealing elements. IP55 is only achieved with the sealing elements.
- Tighten the sealing elements adequately and check that the seals are seated correctly.

[Installation planning](/produkte/pico-ladestation/installationsplanung)

[Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessories](/produkte/pico-ladestation/pico-zubehör)

[Pico Display](/produkte/pico-ladestation/pico-display)

[Pico Stand](/produkte/pico-ladestation/pico-standfuss)

## Webinars and videos

Webinar recording: release of multilevel load management (50 min)

<Video src="YiiACL00jko" title="Webinar recording: release of multilevel load management" />

What is behind the MID certification (30 min)

<Video src="Bx9QOYZPWEk" title="MID certification Pico – webinar" />

Short video: Pico charging station receives MID certification (2 min)

<Video src="bSEN20E-h18" title="Pico charging station receives MID certification" />

## Feature overview

- Integrated load management and load balancing with phase balancing
- Integrated SIM card with a data volume for 10 years
- [MID certification](/planung/zertifizierungen#certification-for-ev-chargers) and load profile certification of the internal meter hardware thanks to the large display
- Integrated residual current protection devices 30mA AC according to IEC60947-2 and 6mA DC IEC62955
- German [calibration law certification](/planung/zertifizierungen#eichrecht-certification-germany) (Art. no. 242070, 2402070/1)
- Simple installation (small and light), suitable for flat ribbon cable
- Identification via RFID, app, CarID and prepared for ISO 15118 (Plug & Charge)
- Prepared for ISO15118 powerline communication (Plug&Charge, V2H, V2G)
- Encrypted real-time data connection to the smart-me and eCarUp Cloud
- Simple [installation](/konfiguration/inbetriebnahme) with the free smart-me app
- Interfaces to third-party systems via API, CSV, MSCONS, IS-E and more
- Solar-optimised control
- Load shedding according to [Paragraph 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Germany)

## Configuring Pico

You can find information on mounting, MID mode, how to verify charging sessions in accordance with calibration law, status and error messages in the [installation manual (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf).

The installation is covered in detail here: [Commissioning](/konfiguration/inbetriebnahme)

The configuration is covered in detail here: [Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration)

## Technical data

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxJQ_thhwYfeefD_1PLiscIfGqbt-LrSa8pwwFBKwlmze109NOEt8Eyka2lroJoGS_FRiuGgtiAhh/pubhtml?gid=0&range=A1:B26&single=true&widget=false&headers=false&chrome=false" aspect="1.733" title="Technical data of the Pico charging station" />

[Download data sheet (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Feature descriptions

### ISO 15118 communication standard (Plug&Charge, V2H, V2G)

The ISO15118 standard is a communication standard between vehicle and charging station. It describes the physical requirements and protocols as well as the supported functions of this interface.

The functions primarily include:

- Charging authorisation for Plug & Charge
- Charge management for charging and discharging vehicles (unidirectional charging, bidirectional charging for V2H and V2G)

**What is the goal of the standard?**

The goal of this standard is a homogeneous integration of the vehicle and its storage into the public grid or into the home system as a storage unit. In the long term, the vehicle storage should be usable to stabilise the public grid (V2G = Vehicle to Grid) or as a home storage solution (V2H = Vehicle to Home).

**Is this already a reality?**

The use of this standard is still very limited. Various charging hardware and vehicle manufacturers are currently carrying out tests on this topic in order to coordinate and further develop the communication. Plug & Charge solutions are already in operation in some real-world cases, but are not yet particularly widespread.

V2G and V2H applications are already partly supported by DC charging stations today. The offering for V2G and V2H on the part of AC charging stations is currently still very limited or non-existent because the necessary equipment is not available on the vehicle side.

However, the first vehicle manufacturers have already announced vehicles that will have the technical equipment. At present, however, none of these vehicles can be purchased on the market. (As of 16.05.2025)

**What does this mean for your Pico charging station?**

Your Pico charging station is fully prepared for the future. A software update will be sufficient to unlock the functions on your Pico. We are currently working intensively on implementing the functionalities.

### RCD / DC fault detection and load protection

The integrated safety devices check their own functionality fully automatically:

- at least every 24 hours since the last check,
- whenever the device is restarted.

If an error occurs during the self-tests, no current is released and the information is shown on the display. If an error occurs during the charging session, the current is interrupted and the error is shown on the display.

The error can only be reset mechanically by unplugging and replugging the charging cable at the charging station.

## Display

<div className="row">
<div className="col col--7">

The behaviour of the display is described on the [Pico Display](/produkte/pico-ladestation/pico-display) page.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 2](/img/produkte-pico-ladestation/02.png)

</div>
</div>

## Pico connections and dimensions

### Wiring diagram

<div className="row">
<div className="col col--7">

| Terminal | Meaning |
| --- | --- |
| L1 | Phase 1 |
| L2 | Phase 2 |
| L3 | Phase 3 |
| N | Neutral conductor |
| PE | Protective earth |

The protective earth should be attached to the upper connection screw so that the stand is earthed directly together with the station.

**Caution:** The product can only be operated in a 3-phase star connection or single-phase.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 3](/img/produkte-pico-ladestation/03.jpg)

</div>
</div>

**Cable routing**

With Pico, cables can be routed in and out at 5 points: two at the top, two at the bottom and one through the back plate. When mounting through the back plate, a hole with a diameter of 25–26 mm must be drilled.

You can find details on mounting the stand in the assembly instructions in the downloads.

### Load shedding (external inputs)

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Pico load shedding table" />

[Open Pico load shedding table in Google Sheets](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY)

<div className="row">
<div className="col col--7">

Load shedding can also be implemented with only one available signal.

For the configuration from no charging to maximum charging power, the signal is wired to IN1 and IN2 as well as COM. For the configuration from 6 A minimum power to maximum charging power, the signal only needs to be wired to IN2 and COM.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 4](/img/produkte-pico-ladestation/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

COM is the neutral conductor. IN1 and IN2 must be supplied with a voltage for the ON signal; they do not generate any voltage themselves, it must be provided externally.

**Caution:** Load shedding can either be wired to all Picos or, at a minimum, to one from each load group. This function is also guaranteed without an internet connection.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 5](/img/produkte-pico-ladestation/05.png)

</div>
</div>

<div className="row">
<div className="col col--7">

Alternatively, load shedding can also be carried out via [multilevel load management](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuring-load-shedding) using meter input signals.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 6](/img/produkte-pico-ladestation/06.png)

</div>
</div>

### Dimensions

<div className="row">
<div className="col col--7">

\*.DXF and \*.DWG data can be found in the ZIP archive in the downloads.

</div>
<div className="col col--5 text--center">

![Pico EV Charger – Figure 7](/img/produkte-pico-ladestation/07.png)

</div>
</div>

## Shipping information

### 232070 and 242070 smart-me Pico charging station incl. mounting plate

| Item | Value |
| --- | --- |
| Customs tariff number | 85044055 |
| Weight with packaging | 4.6 kg |
| Packaging size | 400 × 300 × 200 mm |
| Packages per Euro pallet | 72 pieces |

### 232070/1 and 242070/1 smart-me Pico charging station without mounting plate

| Item | Value |
| --- | --- |
| Customs tariff number | 85044055 |
| Weight with packaging | 3.3 kg |
| Packaging size | 400 × 300 × 200 mm |
| Packages per Euro pallet | 72 pieces |

## Accessories

[Accessories](/produkte/pico-ladestation/pico-zubehör)

## Safety instructions

The safety instructions must be observed under all circumstances.

**Installation, maintenance, repair, commissioning**

- Read the entire manual carefully before installing and operating the product.
- Danger to life from high electrical voltage. Never make changes to components, software or connection cables without being disconnected from the power supply. The corresponding upstream fuses must therefore be removed and stored in such a way that other persons cannot reinsert them unnoticed.
- The product may only be installed, repaired or maintained by an approved qualified electrician. All applicable local, regional and national regulations for electrical installations must be observed.
- Serial numbers before 7002702 require a series RCD Typ-A to meet national installation standards.
- The installation must not take place near flammable or explosive media, in flood areas (underground car park) or in areas where there is a risk of flowing water.
- The product must be installed at a permanent location. The connections on the Pico and the back plate are designed for a limited number of plug-in cycles.
- The product must be installed on a wall or structure with sufficient load-bearing capacity.
- The connection terminals in the back plate are live when the circuit is closed and must under no circumstances be brought into contact directly or with any objects other than the Pico electronics.
- Depending on the type of installation, permits may be required before installation, e.g. when increasing the building's connection capacity.
- The charging station must be registered with the grid operator.
- The screws of the cable connections should be tightened to a torque of 3 Nm. The maximum diameter of the cable with wire end ferrule is 6.5 mm.
- The product must be operated in combination with a miniature circuit breaker. The short-circuit capacity of the miniature circuit breaker must correspond to the maximum short-circuit capacity of the connection point. For selectivity, one miniature circuit breaker may be sufficient for several charging stations. Observe the country-specific notes in this wiki. The stations can easily handle individual short circuits of up to 3 kA.

**Intended use**

- This product is intended exclusively for charging electrically powered vehicles equipped with non-gassing batteries. The product may only be used with a charging cable according to IEC 62196. Uses other than those specified here are not permitted.
- The device is intended for indoor and outdoor use.

**Operation**

- Never use or touch the product if it is damaged or not working properly. In an emergency (smoke, fire, sparks or other improper functions), switch off the product immediately via the RCD switch and notify customer support.
- Do not extinguish the product with water or clean it with running water.
- Do not immerse the product in water or other liquids.
- This product is not intended for operation by persons with limited physical, mental or sensory abilities (including children) or persons without knowledge of the product.
- Make sure that children do not play with the product.
- Never touch the contacts of the Type 2 charging socket and do not insert any foreign objects into the product.
- Never use the charging cable if it is damaged or the connections are wet or dirty.
- Do not use extension cables or non-approved adapters in combination with the product.
- Never kink the charging cable, drive over it or expose it to high heat.
- Only pull the charging cable out of the charging holder by the plug.
- Do not lay the charging cable in the path of other road users and always position it so that there is no risk of tripping.
- Protect the charging cable from weather influences such as direct sunlight, wind, rain, humidity and wetness, and never connect it with damp or wet hands.
- Do not use the product near strong electromagnetic fields or in the immediate vicinity of mobile phones.

## FAQ

### Why does the Pico always reserve 6A in the load group even though the car is no longer charging?

The IEC 61851 standard stipulates that every car must always have at least 6 A available. The standard provides for this so that an auxiliary heater can be supplied from the grid — or so that the battery is not discharged if someone is away for several weeks.

### Does Pico require a series RCD Typ-A per charging station?

Pico charging stations with serial numbers before 7002701 require a series Typ-A RCD 40A 30mA to meet national standards. The function is present in these devices, but is not compliant.

From serial number 7002702 or BY2024, the Pico no longer requires a series RCD; it is now integrated and compliant with 60947-2.

### Does the Pico charging station support ISO15118 for Plug & Charge and V2G / V2H?

The Pico charging stations have all the technical equipment to support the ISO15118 and ISO15118-20 standards in the long term. Enabling the Pico to support the functions depends exclusively on software and does not require any hardware change or modification.

**Bidirectional charging V2H and V2G with the Pico:** Enabling the Pico charging station for bidirectional charging under ISO15118-20 depends exclusively on the release and availability of the functions and equipment on the part of the vehicle and vehicle manufacturer. The charging hardware of the Pico charging station does not represent a limitation in this respect.

The first vehicles capable of this and actually available for purchase are expected in the coming years. We are continuously working on developing these functions in our Pico charging station so that we are ready for that moment.

### Can I reset the meter reading to zero?

No. Since our meters are used for billing, it is not possible to reset them.

## Installation manual, downloads and declaration of conformity

**Data sheet**

[English](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

**Technical documents**

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf)

[Installation and assembly instructions (English)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installation and assembly instructions (German)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf)

[Drilling template](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Declaration of conformity](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Wiring diagram and circuit diagram ZIP files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
