---
title: 'Define electrical tariffs (Germany)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Virtual tariffs for German tenant electricity: solar tariff including vZEV or solar tariff via consumption and PV, with or without battery tariff.'
sidebar_label: 'Define electrical tariffs'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---

For tenant electricity, you must **always work with virtual tariffs**. This is the only way to show, for each billing unit, which share of the electricity came from the solar system and which share came from the grid — and this is exactly what billing under § 42 EnWG requires.

## Where to find the tariffs

- Menu Billing (Rechnungsstellung)
- Configuration (Konfiguration)
- Select the property on the left (main folder, e.g. Altgasse 13)
- Add virtual electricity tariffs (Virtuelle Stromtarife Hinzufügen). (e.g. peak tariff, off-peak tariff, solar tariff)


## Get the tariff sheet from your energy supplier


## Entering the grid tariff


## Calculating and entering the solar and battery tariffs

### Configuring electricity tariffs for the standard metering concept

#### Tariff calculation with solar tariff incl. vZEV

The balancing meter is referenced for the tariff calculation.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are required.

Balancing meter

The building connection meter is referenced as the balancing meter.

![Standard metering concept – Figure 2](/img/planung-standard-messkonzept/02.png)

Production meter

All production meters and battery meters are recorded as production.

![Standard metering concept – Figure 3](/img/planung-standard-messkonzept/03.png)

#### Tariff calculation using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balancing meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating outgoing circuits of the tenant electricity.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, add the solar system meter, or the battery meter for the battery tariff.

For total consumption, the virtually created total consumption is stored.

The balancing meter is deliberately referenced here to increase accuracy!

![Standard metering concept – Figure 4](/img/planung-standard-messkonzept/04.png)


### Configuring electricity tariffs for MKD3 with non-participants

#### Tariff calculation with solar tariff incl. vZEV

The balancing meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are required.

Balancing meter

All participating apartments / parking spaces and productions as balancing meters.

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meter

Record all production meters as production


![MKD3 metering concept (with non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

#### Tariff calculation using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balancing meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating outgoing circuits of the tenant electricity.

Total consumption = Apartment 1.1 + Apartment 1.2 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, add the solar system meter, or the battery meter for the battery tariff.

For total consumption, the virtually created total consumption is stored.

The balancing meter is deliberately not referenced so as not to incorrectly correct the virtual balancing!

![MKD3 metering concept (with non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)



### Defining the tariff components per type of electricity

Further down, under "Other" ("Sonstiges"), you can define the tariff components per type of electricity (grid and solar). The purpose of this is to show the end customer how their electricity price is made up. You must do this for both grid electricity and solar electricity. Together, the components must add up to the price you defined per type of electricity (which you set under [virtual tariffs](/konfiguration/billing)); otherwise, Billing will display an error message.

![smart-me Billing for German Mieterstrom – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or record individual tariff components via "Edit" ("Editieren").

Important: Select the correct type when editing, or specify whether the tariff component belongs to grid electricity (residual electricity) or solar electricity.


Important: You can obtain the details of the composition of the components for grid electricity (residual electricity) from your chosen residual electricity supplier.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A completed configuration may look like this:

![smart-me Billing for German Mieterstrom – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have now made all the settings at property level.
