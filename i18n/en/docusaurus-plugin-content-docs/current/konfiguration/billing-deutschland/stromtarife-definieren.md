---
title: 'Define electrical tariffs (Germany)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Virtual tariffs for German tenant electricity: solar tariff including vZEV or solar tariff via consumption and PV, with or without battery tariff.'
sidebar_label: 'Define electrical tariffs'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---
<Menueweg>Billing → Properties & tariffs</Menueweg>

With tenant electricity, you must **always work with virtual tariffs**. This is the only way to show, for each billing unit, which share of the electricity came from the solar system and which came from the grid — and that is exactly what billing under § 42 EnWG requires.

## Where to find the tariffs

<Menueweg>Billing → Properties & tariffs</Menueweg>

- Select the property on the left (main folder, e.g. Altgasse 13)
- Add virtual electricity tariffs (Virtuelle Stromtarife Hinzufügen). (e.g. peak tariff, off-peak tariff, solar tariff)


## Obtain the tariff sheet from your energy supplier


## Entering the grid tariff


## Calculating and entering the solar and battery tariffs

### Configuring electricity tariffs for the standard metering concept

#### Tariffing with solar tariff incl. vZEV

The balance meter is referenced for the tariff calculation.

When using the solar tariff incl. vZEV, no additional licenses for virtual meters are charged.

**Balance meter**

The building connection meter is referenced as the balance meter.

![Define electrical tariffs (Germany) – Figure 1](/img/konfiguration-billing-deutschland-stromtarife-definieren/01.png)

**Production meter**

All production meters and battery meters are recorded as production.

![Define electrical tariffs (Germany) – Figure 2](/img/konfiguration-billing-deutschland-stromtarife-definieren/02.png)

#### Tariffing using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

- The balance meter is ignored for the tariff calculation; it is only considered later for verification.

- When using the solar tariff (consumption / PV), additional licenses for virtual meters are charged.

- At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating tenant electricity outgoing circuits.

Total consumption = Apartment 1.1 + Apartment 1.2 + Apartment 2.1 + General + Parking space 1 + Parking space 2 + Heat pump

- Under production, the solar system meter is added, or the battery meter in the case of the battery tariff.

- Under total consumption, the virtually created total consumption is stored.

- The balance meter is deliberately referenced here to increase accuracy!

![Define electrical tariffs (Germany) – Figure 3](/img/konfiguration-billing-deutschland-stromtarife-definieren/03.png)


### Configuring electricity tariffs for MKD3 with non-participants

#### Tariffing with solar tariff incl. vZEV

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff incl. vZEV, no additional licenses for virtual meters are charged.

Balance meter

All participating apartments / parking spaces and productions as balance meters.

![Define electrical tariffs (Germany) – Figure 4](/img/konfiguration-billing-deutschland-stromtarife-definieren/04.png)

Production meter

Record all production meters as production


![Define electrical tariffs (Germany) – Figure 5](/img/konfiguration-billing-deutschland-stromtarife-definieren/05.png)

#### Tariffing using solar tariff (consumption / PV) with or without battery tariff (consumption / battery)

The balance meter is ignored for the tariff calculation; it is only considered later for verification.

When using the solar tariff (consumption / PV), additional licenses for virtual meters are charged.

At a minimum, the total consumption is required. It is created as a virtual meter consisting of all participating tenant electricity outgoing circuits.

Total consumption = Apartment 1.1 + Apartment 1.2 + General + Parking space 1 + Parking space 2 + Heat pump

Under production, the solar system meter is added, or the battery meter in the case of the battery tariff.

Under total consumption, the virtually created total consumption is stored.

The balance meter is deliberately not referenced so that the virtual balancing is not incorrectly corrected!

![Define electrical tariffs (Germany) – Figure 6](/img/konfiguration-billing-deutschland-stromtarife-definieren/06.png)



### Defining the tariff components per type of electricity

Further down, under "Other" ("Sonstiges"), you can define the tariff components per type of electricity (grid and solar). The purpose of this is to show the end customer how their electricity price is made up. You must do this for both the grid electricity and the solar electricity. Together, the components must add up to the price you defined per type of electricity (which you set under [virtual tariffs](/konfiguration/billing)); otherwise, Billing displays an error message.

![smart-me Billing for German Mieterstrom – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or enter individual tariff components via "Edit" ("Editieren").

Important: Select the correct type when editing, or specify whether it is a tariff component of the grid electricity (residual electricity) or of the solar electricity.


Important: You can obtain the details of the composition of the components for the grid electricity (residual electricity) from your chosen residual electricity supplier.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A completed configuration can look like this:

![smart-me Billing for German Mieterstrom – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have now made all the settings at property level.
