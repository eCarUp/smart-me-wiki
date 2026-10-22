---
title: 'Cloud License'
slug: '/planung/cloud-lizenzen'
description: 'Please note that the account only reaches Professional status if every metering point has an equivalent license.'
sidebar_label: 'Cloud License'
---
Please note that the account only reaches Professional status if every metering point has an equivalent license.

## The three license levels

<Kacheln min="14rem">

<Kachel titel="Basic">

Standard for API, OCPP and M-Bus meters:

- [M-Bus Gateway](/produkte/m-bus-gateway)

**Scope**

- Reports: manual CSV export
- 1 measured value per 15 minutes (API)
- API: private use and control only \*\*

</Kachel>

<Kachel titel="Limited">

Standard for:

- [Single Phase Meter](/produkte/1-phasen-zaehler-80a)
- [3-Phase Meter Telstar](/produkte/telstar-80a)
- [3-Phase Meter Telstar CT](/produkte/telstar-ct)
- [Kamstrup Module](/produkte/kamstrup-modul) (discontinued)
- [Pico EV Charger](/produkte/pico-ladestation)

**Scope**

- [If / Then Actions](/konfiguration/wenndann-aktionen) (without Pico control)
- Reports
- Load profiles
- Advanced folder and meter management
- [Public Links](/konfiguration/visualisierung)
- 1 measured value per minute (API)
- API: private use and control only \*\*

</Kachel>

<Kachel titel="Professional *">

Upgrade possible for all metering points in the smart-me Cloud.

**Scope: everything in Limited, plus**

- [Billing](/konfiguration/billing)
- [Virtual Meters](/konfiguration/virtuelle-zaehler)
- [Auto Export](/schnittstellen/auto-export)
- [User configuration](/konfiguration/benutzerkonfiguration)
- [Pico dynamic load management](/produkte/pico-ladestation/pico-lastmanagement)
- If/then → Pico control
- oAuth
- [Modbus TCP](/schnittstellen/modbus-tcp)
- [System health](/stoerungsbehebung/systemgesundheit)
- 1 measured value per second (API)
- API: for private **and commercial** use

</Kachel>

</Kacheln>

\*The respective subscription level is only reached if every meter point in the account has the same license level.

\*\* Commercial use of the API always requires the Professional subscription level.

Professional = All meters in the account have a Professional license.

The meter with the lowest subscription level in the account determines the overall subscription level of the account.

Mixed accounts are not possible and remain at Basic or Limited status if the number of licenses is insufficient.

## Calculating the correct number of Professional licenses

For your account to reach Professional status, you need at least one Professional license for every meter (including virtual meters) in the account.

It is not possible to mix licensed meters with unlicensed meters in one account.

Rule of thumb for ZEV (association for own consumption) and vZEV (virtual ZEV) with a uniform solar and / or battery tariff:

ZEV with 1x PV system: number of meters = number of licenses
ZEV with \>1x PV system (visualizations): number of meters + 1 (virtual)

Rule of thumb for ZEV systems with separate solar and battery tariffs (AC-coupled systems only):

ZEV with 1x PV system: number of meters + 1 (virtual)

ZEV with >1x PV system: number of meters + 2 (virtual)

### Example electricity with smart-me meters (1x PV)

3x Telstar 80A
2x Telstar CT

Total Professional all energy types: 5 units

### Example electricity with smart-me meters + heat / water with M-Bus Gateway (1x PV)

3x Telstar 80A
2x Telstar CT

Professional licenses all energy types: 5 units

1x M-Bus Gateway with connected heat / water meters

3x heat
3x cooling
3x domestic hot water meters
3x cold water meters

Professional licenses for heat / water / gas: 12 units

Total Professional licenses: 17 units

Note: The M-Bus Gateway itself does not require a license.

## License fulfillment

The installation described above with different energy sources can now be licensed in two ways.

### Monthly subscription

The installation requires 18 Professional licenses.

These can be purchased for a monthly fee and cover all energy types at all times.

- 18x Monthly Professional license all energy types


The monthly subscription is subject to inflation and deflation effects.

### Multi-year license model

The installation requires a total of 18 Professional licenses.

- 6x Professional license all energy types, 10 years (electricity + virtual meters)

- 12x Professional license heat / water / gas, 10 years


On average, the multi-year licenses are more cost-effective and are not subject to inflation or deflation effects during the period of use.

## Are you a "Professional" customer?

The figures below make it easy to find out whether you need Professional licenses in your account. 

### ZEV billing

For ZEV (association for own consumption) billing, the decisive factors are which tariff system is to be mapped and whether billing is to be automated.

![Cloud License – Figure 1](/img/planung-cloud-lizenzen/01_EN.png)

### ZEV control

![Cloud License – Figure 2](/img/planung-cloud-lizenzen/02_EN.png)
