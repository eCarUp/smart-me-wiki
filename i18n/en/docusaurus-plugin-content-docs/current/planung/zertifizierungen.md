---
title: 'Certification'
slug: '/planung/zertifizierungen'
description: 'General product standards and EU regulations'
sidebar_label: 'Certification'
---
[English](/planung/zertifizierungen)

## General product standards and EU regulations

### RED - Radio Equipment Directive and EN 18031

All devices that have interfaces with radio connections and are to be offered in Switzerland or the EU must comply with the Radio Equipment Directive.
Among other things, it covers compliance with signal strengths, emitted interference and interference immunity of Wi-Fi, 4G and Bluetooth modules. It also covers functionality and the security requirements for these modules and products.

The RED (EU) 2022/30 is currently being extended by articles 3.3 d, 3.3 e and 3.3 f. These deal with cybersecurity for the network and protection against data theft / data manipulation and hacking.

Since 01.08.2025, the standard EN 18031-1, -2, -3 can be used to meet these additional RED articles.

smart-me AG develops all its products in accordance with EN 18031.

This includes, for example, the following points: 

- Encrypted, authenticated communication from the device all the way to the cloud. 

- Secured and separated areas of the firmware for measurement, communication and display.

- Immutability of the firmware for the measuring hardware.

- No unnecessary communication channels that are enabled by default.

- Use of advanced cryptographic chipsets for generating and storing cryptographic keys.

- Resilience against external attacks such as DDoS attacks.


### Product standards in general

Product standards generally describe the framework a product must meet with regard to EMC, safety and functionality.
For almost all products there is a defined standard that can be used during development.
However, the standards cannot always be applied precisely to a given product. In some cases, several product standards must be met at the same time.

The product standards applied are listed on the product's certificate of conformity.

## Specific meter certifications

This section summarises the regulations on legal metrology and MID that apply in Switzerland. You can find the ordinance here: [FDJP Ordinance on Measuring Instruments for Electrical Energy and Power (EMmV)](https://www.fedlex.admin.ch/eli/cc/2015/578/de)

### Measuring Instruments Directive (MID) - Certification

In the conformity assessment procedure, a designated body checks whether the measuring instrument or its manufacture meets the legal requirements. The conformity assessment is carried out by the designated body on behalf of the manufacturer of the measuring instrument. The manufacturer then issues the declaration of conformity for the measuring instrument with regard to compliance with a legal standard.

If the measuring instrument is subject to the Measuring Instruments Directive 2004/22/EC (electricity, heat, water, cooling or gas meters), the conformity assessment body must additionally be notified by the EU Commission.

Such measuring instruments can be recognised by the "CE" or "CH" marking in combination with the metrology marking "M".

![Certification – Figure 1](/img/planung-zertifizierungen/01.png)

Example:  CE M 20 (year of calibration) 1259 (calibration body)

### Load profile certification

The CH load profile certification (CH-Lastgang) allows the user to bill based on meter readings taken at intervals of at least 15 minutes. This certification requires additional technical capabilities and covers the signing, data storage and transmission paths (security, encryption) of the data.

[3-Phase Meter Telstar](/produkte/telstar), [3-Phase Meter Telstar CT](/produkte/Telstar-CT) and [Pico EV Charger](/produkte/pico-ladestation) hold both the MID and the CH load profile certification.

## Certifications in a ZEV (association for own consumption)

smart-me technology covers both of the following variants:

### Variant 1: ZEV billing using meter readings and a single or dual tariff (MID required)

A ZEV can be billed using the meter reading at the start and at the end (cut-off dates). For this, the legislator only requires a measuring device with MID certification. Tariff differences with peak tariff and off-peak tariff are only possible with an external signal; otherwise a single tariff can be used.

Advantage:

- The measuring device only needs to be MID certified. ([smart-me 3-Phase Meter Telstar)](/produkte/telstar)

- Simple billing of the meter readings on cut-off dates.

- Simple software solution possible, or even manual billing.


Disadvantage of a single tariff:

- Costs can only be charged according to consumption quantities.

- No cost optimisation possible on the tenant side through careful use of electricity at the right time.

- No targeted use of solar power by the tenants. (Lower efficiency in internal electricity sales)


Disadvantage of a dual tariff with an external tariff signal:

- Costs can only be allocated according to consumption quantities in the HT and NT tariff using an external control signal. (No solar tariff)

- Limited cost optimisation possible on the tenant side through careful use of electricity at the right time.

- No targeted use of solar power by the tenants. (Lower efficiency in internal electricity sales)




### Variant 2: ZEV billing using load profiles and a multi-tariff system (MID and CH load profile certification required)

A ZEV can be billed using load profile data (15-minute intervals). This variant unlocks the full scope of a ZEV with all its benefits for tenants and ZEV owners.

Advantage:

- Enables billing with different tariffs. (NT, HT, solar tariff)

- Allocates the costs incurred to whoever caused them. (Also takes into account the availability of solar power with a special tariff)

- Tenants can optimise their own costs and focus on solar power.

- The self-produced solar power can be sold internally more effectively, improving the ROI.

- Differentiated electricity tariffs make the property more attractive to tenants overall.


Disadvantage:

- Requires MID and load profile certified measuring devices. ([smart-me 3-Phase Meter Telstar)](/produkte/telstar)

- Requires capable software to store, evaluate and process the load profile data.


## Certifications for charging stations

### Regulations for billing charging stations in Switzerland

Charge points in a rental relationship:

For charging station hardware used in a rental relationship, Switzerland generally requires the same as for standard meter hardware:

- MID certification to bill the recorded energy at a single tariff.

- CH load profile certification + MID certification to bill the recorded energy at multiple tariffs (HT, NT, solar tariff).




Charge points in public areas with different users:

- In Germany, the legal situation has been defined and requires Eichrecht compliance. (see Germany).
    In Switzerland, there are currently no legal requirements regarding MID conformity.


Note:
The markings on the right are mandatory symbols that must be visible on the hardware at all times in order to hold MID, load profile or Eichrecht certification.

Mandatory markings on the charging hardware:

MID certification:

![Certification – Figure 2](/img/planung-zertifizierungen/01.png)

![Certification – Figure 3](/img/planung-zertifizierungen/03.png)



CH load profile certification:

![Certification – Figure 4](/img/planung-zertifizierungen/04.png)

![Certification – Figure 5](/img/planung-zertifizierungen/05.png)

### Regulations for billing charging stations in Germany

Charge points in a rental relationship:

For charging station hardware used in a rental relationship, Germany generally requires the same as for standard meter hardware:

- MID certification in order to be allowed to bill the recorded energy.




Charge points in public areas with different users:

- In Germany, Eichrecht compliance is required for public charge points. The basis for Eichrecht is that the meter hardware in the charging station holds MID certification. 


Note:
The markings on the right are mandatory symbols that must be visible on the hardware at all times in order to hold MID, load profile or Eichrecht certification.

Mandatory markings on the charging hardware:

MID certification:

![Certification – Figure 6](/img/planung-zertifizierungen/01.png)

![Certification – Figure 7](/img/planung-zertifizierungen/07.png)

Eichrecht:

![Certification – Figure 8](/img/planung-zertifizierungen/08.png)

![Certification – Figure 9](/img/planung-zertifizierungen/09.png)

### Eichrecht certification (Germany)

Eichrecht is a German law that governs the accuracy and transparency of measurements in Germany. When charging electric vehicles, this regulation ensures that the measurements at the charging stations are accurate and transparent in order to protect consumers. 

Under Eichrecht, EV charging stations must be equipped with an electricity meter that is certified and calibrated (MID).
The electricity meter measures the energy consumed and determines the amount charged to the EV driver. 

The Eichrecht regulations also govern other aspects of billing. Charging stations must display prices clearly and provide customers with a receipt stating the amount of energy consumed, the price charged and other relevant details.

It must be possible to verify the correctness of the charging sessions using [independent transparency software](/informationssicherheit/zählertransaktionen).

The calibration law also governs questions of data security and of energy losses during charging sessions due to cabling or other means.

## Re-calibration of MID meters

All information is subject to change and in accordance with [EMmV 941.251](https://www.fedlex.admin.ch/eli/cc/2015/578/de)  (as of 1 January 2018).

### Meters

Meters must be re-calibrated by the Federal Institute of Metrology (METAS) or by an authorised calibration body according to the procedure set out in Annex 7 Section 1 MessMV, as follows: 

a. Meters with an electronic measuring element: every 10 years ([smart-me 3-Phase Meter Telstar)](/produkte/telstar)

b. Meters with an electromechanical measuring element: every 15 years 

### Transformers (current sensors)

Transformers must be re-calibrated by METAS or by an authorised calibration body according to the procedure set out in Annex 7 Section 1 MessMV, as follows: 

a. inductive transformers with a non-split core: every 60 years

b. transformers other than those under letter a: every 2 years. 



### Extending the validity of an existing calibration

Regardless of the manufacturer, the certification is valid for 10 years. 

Calibration by lot sampling (statistical testing procedure)

SAK and CKW re-calibrate smart-me meters by lot sampling for a fee. If you are interested, please contact the heads of the respective calibration bodies directly. In practice, most meters in a ZEV are not re-calibrated but are depreciated over the years and replaced with new meters at the end of their service life.

Testing by lot sampling requires an initial sample check after 5 years and then periodically every 5 years.

If METAS approves the lot in accordance with letter E section 6, the meters of the approved lot are considered calibrated for a further 5 years, provided they remain subject to the statistical testing procedure. 

### Consequence

If the calibration of the devices expires and a lot sampling procedure is not possible, the meters must be replaced with new devices after 10 years.

## MINERGIE certification with smart-me

MINERGIE certification requires a suitable metering system for the required monitoring. 

smart-me is a certified module according to Minergie and can be used directly to meet the monitoring requirements.

The smart-me system also has the automated interface for transferring data to the Minergie database for the Minergie Monitoring + extension.

[More details for partners](/planung/minergie)

![Certification – Figure 10](/img/planung-zertifizierungen/10.png)
