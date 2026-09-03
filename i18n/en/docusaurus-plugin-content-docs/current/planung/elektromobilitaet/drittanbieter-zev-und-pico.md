---
title: 'Third-Party ZEV and Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'E-mobility with the smart-me Pico charging station without smart-me ZEV'
sidebar_label: 'Third-Party ZEV and Pico'
---
## E-mobility with the smart-me Pico charging station without smart-me ZEV

### Schematic diagram of a development without smart-me ZEV

![Third-Party ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description of the load management solution in a metering concept without ZEV or with a third-party ZEV

The load management of the Pico charging station is based on the smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation is already in place, load management for Picos can also be handled by third-party software instead of the smart-me multilevel load management.
You can find more information on this below under "Extended information".

Advantages of smart-me load management:

- Same manufacturer for metering hardware and charging station: excellent compatibility and reliability

- Multilevel, dynamically controlled load management: minimal power losses and high availability

- Centrally controlled load shedding for the entire installation

- Solar optimization function optimized for the site or the building

- Charging group prioritization and passive peak load minimization


Hardware points functionally required for holistic load management with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Solar optimization point and required for distributing capacity within the site.

- Optional 2x e-mobility meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Reference when several charging groups are connected to one outgoing feeder and share the capacity.
    \- Billing measurement for losses and standby energy
    \- Other loads that are not Pico charging stations can additionally be taken into account, e.g. garage lighting

- Optional, if all buildings are metered, 1x site meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- This point can be created virtually from the two building meters. This requires that 100% of the loads on the site are measured by the building meters.


### Extended information on the load management of the Pico charging station

[Functional description of smart-me Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

### Billing of e-mobility without ZEV

Billing can be done in various ways, each with its specific advantages and disadvantages:

- Billing with a single or multiple tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Billing with a single tariff system using the post-payment method and the [eCarUp backend](https://web.ecarup.com/referenzen/).

- Billing with a single tariff using highly automated credit card billing and the [eCarUp backend](https://web.ecarup.com/referenzen/).
