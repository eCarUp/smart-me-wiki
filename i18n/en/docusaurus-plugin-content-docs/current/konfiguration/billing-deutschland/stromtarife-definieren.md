---
title: 'Define electrical tariffs (Germany)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Virtual tariffs for German tenant electricity: solar tariff including vZEV or solar tariff via consumption and PV, with or without battery tariff.'
sidebar_label: 'Define electrical tariffs'
naechste_schritte: [konfiguration/billing-deutschland/index]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
---

With tenant electricity, you must **always work with virtual tariffs**. This is the only way to show, per billing unit, which share of the electricity came from the solar system and which came from the grid — and that is exactly what billing under § 42 EnWG requires.


## Obtain the tariff sheet from your energy supplier


## Entering the grid tariff


## Calculating and entering the solar and battery tariffs

### Configuring electricity tariffs for the standard metering concept

#### Tariffing with solar tariff incl. vZEV

The balance meter is referenced for the tariff calculation.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are required.

Balance meter

The building connection meter is referenced as the balance meter.

![Standard metering concept – Figure 2](/img/planung-standard-messkonzept/02.png)

Production meter

All production meters and battery meters are recorded as production.

![Standard metering concept – Figure 3](/img/planung-standard-messkonzept/03.png)

#### Tariffing using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At minimum, the total consumption is required. It is created as a virtual meter consisting of all participating tenant electricity outgoing circuits.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, add the solar system meter or, for the battery tariff, the battery meter.

Under total consumption, store the virtually created total consumption.

The balance meter is deliberately referenced here to increase accuracy!

![Standard metering concept – Figure 4](/img/planung-standard-messkonzept/04.png)


### Configuring electricity tariffs for MKD3 with non-participants

#### Tariffing with solar tariff incl. vZEV

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff incl. vZEV, no additional licences for virtual meters are required.

Balance meter

All participating apartments / parking spaces and productions as balance meters.

![MKD3 metering concept (with non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Production meter

Record all production meters as production


![MKD3 metering concept (with non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

#### Tariffing using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licences for virtual meters are required.

At minimum, the total consumption is required. It is created as a virtual meter consisting of all participating tenant electricity outgoing circuits.

Total consumption = Apartment 1.1 + Apartment 1.2 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, add the solar system meter or, for the battery tariff, the battery meter.

Under total consumption, store the virtually created total consumption.

The balance meter is deliberately not referenced so as not to incorrectly correct the virtual balancing!

![MKD3 metering concept (with non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)



### Defining the tariff components per electricity type

Further down, under "Other" ("Sonstiges"), you can define the tariff components per electricity type (grid and solar). The purpose is to show the end customer how their electricity price is made up. You must do this for both grid electricity and solar electricity. Together, the components must add up to the price you defined per electricity type (which you set in the [virtual tariffs](/konfiguration/billing)); otherwise, Billing will display an error message.

![smart-me Billing for German Mieterstrom – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or record individual tariff components via "Edit" ("Editieren").

Important: Select the correct type when editing, i.e. specify whether it is a tariff component of the grid electricity (residual electricity) or of the solar electricity.


Important: You can obtain the details of the component breakdown for the grid electricity (residual electricity) from your chosen residual electricity supplier.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A completed configuration can look like this:

![smart-me Billing for German Mieterstrom – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have then made all settings at property level.  Finally, you still need to enter the customer number and the contract and term details in the individual residential units.
