---
title: 'Certification'
slug: '/planung/zertifizierungen'
description: 'General product standards and EU regulations'
sidebar_label: 'Certification'
---
## General product standards and EU regulations

### RED - Radio Equipment Directive and EN 18031

The Radio Equipment Directive must be complied with by all devices that have interfaces with radio connections and are to be sold in Switzerland or the EU.

The RED (EU) 2022/30 is currently being expanded to include Articles 3.3 d, 3.3 e, and 3.3 f. These deal with the aspect of cybersecurity for the network and protection against data theft/data modification and hacking.

Since August 1, 2025, the EN 18031-1 standard -2, and -3 can be used to fulfill these supplementary RED articles. 

smart-me AG develops all its products in accordance with EN 18031. 

This includes the following points, for example:

- Encrypted, authenticated communication from the device to the cloud. 

- Secure and separate areas of the firmware for measurements, communication, and display.

- Unchangeability of the firmware for the measurement hardware.

- No unnecessary communication channels that are activated by default.

- Use of sophisticated cryptographic chipsets for the generation and storage of cryptographic keys.


### Product standards in general

Product standards generally describe the framework that must be met in terms of EMC, safety, and functionality of a product.
However, the standards are not always precisely applicable to a given product. In some cases, several product standards must be met simultaneously.

## Certification for meters

This section summarizes the regulations applicable in Switzerland on calibration law and MID in associations for self-consumption. The ordinance can be found here:
[Ordinance of the FDJP on measuring equipment for electrical energy and power (EMmV)](https://www.fedlex.admin.ch/eli/cc/2015/578/de)

### Measuring Instruments Directive (MID) - Certification

In the conformity assessment procedure, a designated body checks whether the measuring equipment or the manufacture of the measuring equipment meets the legal requirements. The conformity assessment is carried out by the designated body for the manufacturer of the measuring equipment. The manufacturer then issues the declaration of conformity for the measuring equipment with regard to compliance with a legal standard.

If the measuring equipment is subject to the Measuring Equipment Directive 2004/22 / EC (electrical, heat, water, cold or gas meters), the conformity assessment body must also be named by the EU Commission.

Such measuring equipment can be identified by the “CE” or “CH” in combination with the metrology mark “M”.

![Certification – figure 1](/img/_en/planning-certification-calibration/01.png)

Example: CE M 20 (year of verification) 1259 (verification point)

### Load profile certification

The swiss load profile certification  enables the user to bill on the basis of meter readings with an interval of at least 15 minutes. This certification requires additional technical possibilities and deals with the signing, data storage and the transmission paths (security, encryption) of the data.

[3-phase Telstar energy meters](/produkte/telstar), [3-Phase Meter Telstar CT](/produkte/Telstar-CT) and [Pico EV-Charger](/produkte/pico-ladestation) have both MID and the swiss load profile certification.

## Certifications in the Association for Self-Consumption (ASC)

The smart-me technology covers both of the following variants:

### Variant 1: ASC billing using meter readings and a standard or double tariff (MID required)

An ASC can be billed using the start and end of the meter reading (due dates). All that is required by law is a measuring device with MID certification. Tariff differences are only possible with an external signal with high and low tariffs, otherwise a standard tariff can be used.

Advantage:

- The measuring device only needs to be MID certified. ([smart-me 3-phase energy meter Telstar](/produkte/telstar))

- Simple billing of meter readings on due dates.

- Simple software solution possible or also manually.


Disadvantage of the standard tariff:

- The costs can only be offset according to purchase quantities.

- No cost optimization on the part of the tenant possible through careful use of electricity at the right time.

- No targeted use of solar power by the tenants. (Lower efficiency in internal electricity sales)


Disadvantage of double tariff with external tariff signal:

- The costs can only be allocated according to purchase quantities in the high and low tariff using an external control signal. (No solar tariff)

- Limited cost optimization on the part of the tenant possible through careful use of electricity at the right time.

- No targeted use of solar power by the tenants. (Lower efficiency in internal electricity sales)




### Variant 2: ASC billing using load profile data and multi-tariff system (MID and swiss load profile certification required)

An ASC can be billed using load profile data (15-minute intervals). This variant opens up the full scope of an ASC with all the advantages for tenants and owners.

Advantage:

- Allows billing with different tariffs. (low tariff, high tariff, solar tariff)

- Distributes the costs incurred to the respective causer. (Also takes into account the availability of solar power with a special tariff)

- Tenants can optimize their costs themselves and focus on solar power.

- The self-produced solar power can be sold more effectively internally and thus improve the ROI.

- Differentiated electricity tariffs make the property more attractive for tenants.


Disadvantage:

- Requires MID and load profile certified measuring devices. (smart-me 3-phase energy meter Telstar)

- Requires capable software for saving, evaluating and converting the load profile data.


## Certification for EV-Chargers

### Provisions for billing ev-charging stations in Switzerland

Charging points in a rental relationship:

In principle, Switzerland requires the same from charging station hardware that is used in a rental relationship as for conventional meter hardware:

- MID certification to bill the recorded energy in the standard tariff.

- CH load profile certification + MID certification to bill the recorded energy in the multi-tariff (HT, NT, solar tariff).




Charging points in public areas with different users:

- In Germany, the legal situation has been defined and requires compliance with calibration law. (see Germany). In Switzerland there are currently no legal regulations for MID conformity.


Note:
The labels on the right are mandatory symbols that must be visible on the hardware at all times in order to feature MID, load profile or Eichrecht calibration

Mandatory labels on the charging hardware:

MID-certification:

![Certification – figure 2](/img/_en/planning-certification-calibration/02.png)

![Certification – figure 3](/img/_en/planning-certification-calibration/03.png)



CH load profile certification:

![Certification – figure 4](/img/_en/planning-certification-calibration/04.png)

![Certification – figure 5](/img/_en/planning-certification-calibration/05.png)

### Provisions for billing charging stations in Germany

Charging points in the rental relationship:

Germany basically requires the same from charging station hardware that is used in a rental relationship as for conventional meter hardware:

- MID certification to be able to bill for the recorded energy.




Charging points in public areas with different users:

- In Germany, there is a need for calibration according to "Eichrecht" for public charging points. The basis for the calibration law is that the meter hardware in the charging station carries MID certification.


Note:
The labels on the right are mandatory symbols that must be visible on the hardware at all times in order to feature MID, load profile or Eichrecht calibration

Mandatory labels on the charging hardware:

MID-certification:

![Certification – figure 6](/img/_en/planning-certification-calibration/02.png)

![Certification – figure 7](/img/_en/planning-certification-calibration/07.png)

Eichrecht certification:

![Certification – figure 8](/img/_en/planning-certification-calibration/08.png)

![Certification – figure 9](/img/_en/planning-certification-calibration/09.png)

### Eichrecht Certification (Germany)

Eichrecht is a German law that regulates the accuracy and transparency of measurements in Germany. When charging e-vehicles, this regulation ensures that measurements at charging stations are accurate and transparent to protect consumers. 

According to the calibration law, e-charging stations must be equipped with an electricity meter that is certified and calibrated (MID).
The electricity meter measures the energy consumed and determines the amount charged to the e-driver. 

The calibration regulations also govern other aspects of billing.
Charging stations must clearly display prices and provide customers with a receipt showing the amount of energy consumed, the price charged and other relevant details.

It must be possible to cross-check the correctness of the charging processes using independent [transparency software](/informationssicherheit/zählertransaktionen).


The calibration law also regulates the issues of data security and energylosses in the charging prosses due to cabeling or other means.

## Recalibration of MID meters

All provided information is subject to change and in accordance with [EMmV 941.251](https://www.fedlex.admin.ch/eli/cc/2015/578/de)  (as of January 1st, 2018).

### Meters

Meters must be recalibrated by the Federal Institute for Metrology (METAS) or by an authorized verification body in accordance with the procedure in Annex 7 number 1 MessMV:

a. Meter with electronic measuring mechanism: every 10 years ([smart-me 3-phase energy meter Telstar](/produkte/telstar))

b. Counter with electromechanical measuring mechanism: every 15 years

### Transducers (current sensors)

Transducers must be recalibrated by METAS or an authorized verification body using the procedure in Annex 7 number 1 MessMV:

a. inductive transducers with a closed core: every 60 years

b. transducers other than those (e.g. split core) according to letter a: every 2 years.



### Extension of the validity of an existing calibration

The certification is valid for 10 years, regardless of the manufacturer.

Calibration by lot review (statistical test procedure)

The SAK and the CKW calibrate smart-me meters in the lottery for a fee. If you are interested, please contact the respective head of the calibration center directly. In practice, most of the meters in an ASC are not recalibrated but written off over the years and replaced by new meters at the end of their service life.

Testing by lottery requires a first sample test after 5 years and then periodically every 5 years.

If METAS releases the lot according to letter E number 6, the counters of the released lot are considered to be calibrated for a further 5 years, provided they remain subject to the statistical test procedure.

### Consequence

If the calibration of the devices expires and a lot review procedure is not possible, the meters must be replaced with new devices after 10 years.

## MINERGIE certification with smart-me

MINERGIE certification requires a suitable measuring system for the required monitoring.

smart-me is a certified module according to Minergie and can be used directly to fulfill the monitoring requirements.

The smart-me system also has an automated interface for transferring data to the Minergie database for the Minergie Monitoring + extension.

[More details for Partners](/planung/minergie)



![Certification – figure 10](/img/_en/planning-certification-calibration/10.png)
