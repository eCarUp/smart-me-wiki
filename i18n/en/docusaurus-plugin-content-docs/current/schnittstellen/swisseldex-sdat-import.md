---
title: 'Swisseldex SDAT data import'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'You need one smart-me Professional subscription per metering point to use the import.'
sidebar_label: 'Swisseldex SDAT data import'
---
### Prerequisite

You need one smart-me Professional subscription per metering point to use the import. 

## Data export by the energy supplier

The energy supplier sends the data to the swisseldex server, where smart-me can then process it.

General information about smart-me as the recipient on the swisseldex server:

- Contact email address: [support@smart-me.com](mailto:support@smart-me.com)

- Contact phone number: +41 41 511 09 70

- Language: German

- Role: Supplier

    - Name: ST\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - This role is sufficient for the data transfer if the registered Datahub partner sending us the data has a licence.

- Role: End consumer 

    - Name: CO\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - This role is required for the data transfer if the registered Datahub partner sending us the data does not have a licence. The registered market partner with the role of distribution grid operator must fill in the corresponding routing slip from swisseldex: [Laufblatt\_Kommunikationspartner kopie von smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb) 

- If a data format can be selected, Ebix must be chosen. At present, smart-me only supports the Ebix format for the import.


## Set up the import in the target account

1.  You must request access to the relevant metering points from the energy supplier, and the supplier must approve the request. The metering points are then made available to smart-me AG on Swisseldex.
    The energy supplier transmits each metering point with its unique metering point ID. The ID consists of the CH code and a 33-digit number.

    Example: CH637482974368378932BKL7389576492

2.  Log in to your vZEV or ZEV account at [www.smart-me.com](http://www.smart-me.com).

3.  Open the import area of your vZEV or ZEV account at [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

4.  Accept the access permissions.

5.  Go to the Metering points (Messpunkte) section.

6.  Add all CH numbers you have been given as metering points.

7.  Once data has been imported for the metering points for the first time, the metering points appear in the [meter configuration](/konfiguration/ordnerkonfiguration), where you can add them to the structure.


![Swisseldex SDAT data import – Figure 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![Swisseldex SDAT data import – Figure 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## How data processing and data replacement work

### Data upload and tariff calculation

Data imported via Swisseldex is automatically imported into smart-me and assigned to the corresponding metering point number (meter) as soon as it is available.

The virtual tariffs are calculated automatically, and the calculation continues as soon as data is available for all metering points relevant to the tariffs of the ZEV or vZEV.

### Value replacement

To replace incorrect data, simply upload the import file via Swisseldex again. smart-me then imports the data automatically and overwrites the existing values.

After a value replacement like this, you must recalculate the virtual tariffs from the replacement date onwards.
