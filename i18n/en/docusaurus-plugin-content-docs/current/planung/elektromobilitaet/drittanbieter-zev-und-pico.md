---
title: 'Third-party system and Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'E-mobility with the smart-me Pico charging station without smart-me ZEV (association for own consumption)'
sidebar_label: 'Third-party system and Pico'
---
E-mobility with the smart-me Pico charging station without smart-me ZEV (association for own consumption) / tenant electricity

### Schematic diagram of a development without smart-me ZEV / tenant electricity

![Third-party ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01_EN.png)

### Description of the load management solution in the metering concept without ZEV / tenant electricity or with a third-party provider

The load management of the Pico charging station is based on the smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation already exists, load management for Picos can also be handled by third-party software instead of the smart-me multilevel load management.
You can find more information on this below under "Extended information".

Advantages of smart-me load management:

- Same manufacturer for metering hardware and charging station: top compatibility and reliability

- Multi-stage, dynamically controlled load management: minimal power losses and high availability

- Centrally controlled load shedding for the entire installation

- Solar optimization function optimized for the site or for each building

- Charging group prioritization and passive peak load minimization


Hardware points functionally required for comprehensive load management with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Solar optimization point, required to distribute capacity within the site.

- Optional 2x e-mobility meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Reference if several charging groups are connected to one outgoing circuit and share its capacity.
    \- Billing measurement for losses and standby energy
    \- Other consumers that are not Pico charging stations can also be taken into account, e.g. garage lighting

- Optional if all buildings are metered: 1x site meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- This point can be formed virtually from the two building meters. The prerequisite is that 100% of the loads on the site are measured by the building meters.


### Extended information on load management of the Pico charging station

[Functional description of smart-me Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

### Billing of e-mobility without ZEV (association for own consumption) / tenant electricity

Billing can be done in several ways, each with its specific advantages and disadvantages:

- Billing with a single-tariff or multi-tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Billing with a single-tariff system using the post-payment method and the [eCarUp Backend](https://web.ecarup.com/referenzen/).

- Billing with a single tariff using highly automated credit card billing and the [eCarUp Backend](https://web.ecarup.com/referenzen/).
