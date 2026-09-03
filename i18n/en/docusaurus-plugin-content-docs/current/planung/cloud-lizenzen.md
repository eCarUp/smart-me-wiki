---
title: 'Cloud License'
slug: '/planung/cloud-lizenzen'
description: 'Note that the Professional status of the account is only achieved if each measuring point has an equivalent licence.'
sidebar_label: 'Cloud License'
---
Note that the Professional status of the account is only achieved if each measuring point has an equivalent licence.

## Basic

Standard for API, OCPP and M-Bus meters

[M-Bus Gateway](/produkte/m-bus-gateway)

\---

Reports: manual CSV export

1 measurement value per 15 minutes (API)

API: private use and control only\*\*

## Limited

Standard for

[Single Phase Meter](/produkte/1-phasen-zaehler)

[3-Phase Meter Telstar](/produkte/telstar) 

[3-Phase Meter Telstar CT](/produkte/Telstar-CT) 

[Kamstrup Module (discontinued)](/produkte/kamstrup-modul)

[Pico EV Charging Station](/produkte/pico-ladestation)

\---

[If/then actions](/konfiguration/wenndann-aktionen)

Reports

Load profile

Advanced folders and meter administration

[Public Links](/)

1 measurement value per minute (API)

API: private use and control only\*\*

## Professional\*

Available for all measuring points in the smart-me cloud

\---

[Billing tool](/konfiguration/billing)

[Virtual Meters](/konfiguration/billing/virtuelle-zaehler) 

[Auto Export](/schnittstellen/auto-export) 

[Creating Users](/konfiguration/benutzerkonfiguration) 

[Pico dynamic load management](/konfiguration/inbetriebnahme/pico-konfiguration) 

oAuth

[If/then actions](/konfiguration/wenndann-aktionen)

Reports

Load profile

Advanced folders and meter administration

[Public Links](/)

[Modbus TCP](/schnittstellen/modbus-tcp) 

1 measurement value per second (API)

API: for private and commercial use

Dynamic load management

[System Health](https://doc.smart-me.com/troubleshooting/system-health)

\*The respective account status is only achieved if each metering point in the account has the same licence level.

\*\* Commercial use of the API always requires the Professional subscription level

Professional = All meters in the account have a Professional licence.

The meter with the lowest status in the account determines the overall account status. Mixed accounts are impossible and remain in Basic or Limited status if the number of licences is insufficient.

## Calculate the needed amount of professional licenses

That your account state reaches the professional state you need an equal license for each installed counter.

It is impossible to have licensed counters and unlicensed counter within the same account.

Rule of thumb for ZEV and vZEV with uniform solar and/or battery tariff:

Association of self-consumption with 1x photovoltaic system: Number of meters = number of licenses
Association of self-consumption with >1x photovoltaic system (visualizations): Number of meter + 1 (virtual)




Rule of thumb for ZEV systems with different Solar- and Battery tariffs:

Association of self-consumption with 1x photovoltaic system: Number of meter + 1 (virtual)

Association of self-consumption with >1x photovoltaic system: Number of meter + 2 (virtual)

### Example electrical energy with smart-me energy counters (1x photvoltaic)

3x Telstar 80A
2x Telstar CT
1x virtual counter (summ of loads)

Professional licenses All-Energy: 6 pcs

### Example electrical energy with smart-me energy counters and heat / water with installed M-Bus gateway (1x photvoltaic)

3x Telstar 80A
2x Telstar CT
1x virtual counter (summ of loads)

Professional licenses All-Energy: 6 pcs

1x M-Bus gateway with connected heat / water counters

3x heat
3x cold
3x hot water
3x cold water

Professional licenses for heat/water/gas: 12 pcs

Total Professional licenses: 17 pcs

Hint: the smart-me M-Bus gateway itself does not need a license.

## Licence fulfilment

The installation described above with mixed energy types can now be licenced in two ways..

### Monthly subscriptioon

The installation requires 18 Professional licences.

These can be purchased for a monthly fee and cover all energy types at all times.

- 18x Monthly Professional Licence All energy types


The monthly subscription is subject to inflation and deflation effects.

### Multi-year licence model

The installation requires 18 Professional licences in total.

- 6x Professional licence all energy types, 10 years (electricity + virtual meters)

- 12x professional licence heat / water / gas, 10 years


The multi-year licences are cheaper on average and are not subject to inflation or deflation effects during the period of use.

## Are you a customer with need of "Professional" account state?

With the pictures below you can easily find out if you are a professional user or not. 

### System-Billing

In the billing part it decides mainly if you wish automatic data transport or which tariff system you prefer.

![Cloud License – figure 1](/img/_en/planning-cloud-licence/01.png)

### System-Control

![Cloud License – figure 2](/img/_en/planning-cloud-licence/02.png)
