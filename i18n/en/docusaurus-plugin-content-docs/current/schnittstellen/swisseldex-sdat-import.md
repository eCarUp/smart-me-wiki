---
title: 'Swisseldex SDAT data import'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'You need a smart-me Professional subscription per meterpoint to use this import functionality.'
sidebar_label: 'Swisseldex SDAT data import'
---
### Requirement

You need a smart-me Professional subscription per meterpoint to use this import functionality.

## Measurement data import for energy suppliers' metering points

The measurement data of the relevant metering points can be imported via the Swisseldex data hub. Smart-me is listed as a recipient of this data at Swisseldex 

The data is sent by the energy suppliers to the smart-me import data hub via Swisseldex following a request and approval. The data can then be managed, visualized and billed in the respective smart-me account.

Properties of the energy supplier data:

- EBIX, SDAT data format

- 15-minute resolution

- Provision approx. every 24 hours unverified

- Provision verified approx. every 30 days


![Swisseldex SDAT data import – figure 1](/img/_en/interfaces-swisseldex-data-import/01.png)

### Set up import into the target account

The request and release of the relevant measuring points must be requested from the energy supplier. These are then made available to smart-me AG on Swisseldex and the measuring point is transmitted by the energy supplier with its unique measuring point ID. The ID consists of a CH code and a 33-digit number. Beispiel: CH637482974368378932BKL7389576492

1.  Log into your vZEV or ZEV account at [www.smart-me.com](http://www.smart-me.com) .

2.  Call up the import area of your vZEV or ZEV account via [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

3.  Accept the access authorizations

4.  Navigate to the measuring points area

5.  Add all CH numbers provided to you as measuring points.

6.  Once the measuring point data has been imported, the measuring points are visible in the [meter configuration](/konfiguration/ordnerkonfiguration) to add them to the structure.


![Swisseldex SDAT data import – figure 2](/img/_en/interfaces-swisseldex-data-import/02.png)

![Swisseldex SDAT data import – figure 3](/img/_en/interfaces-swisseldex-data-import/03.png)

## Functionality of data processing and data replacement

### Data upload and tariff calculation

The data imported via Swisseldex is automatically imported into smart-me at the corresponding metering point number (meter) as soon as it is available.

The virtual tariffs are calculated automatically and continuously as soon as the data is available for all relevant measuring points for tariffing the ZEV or vZEV.

### Value replacement

To replace incorrect data, the import file can simply be uploaded again via Swisseldex. The data is automatically imported and overwritten on the smart-me side.

After such a value replacement, it is necessary to recalculate the virtual tariffs since the replacement date.
