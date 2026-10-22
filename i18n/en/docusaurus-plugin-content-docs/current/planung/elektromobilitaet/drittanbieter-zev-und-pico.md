---
title: 'Third-Party ZEV and Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'E-mobility with the smart-me Pico charging station without smart-me ZEV'
sidebar_label: 'Third-Party ZEV and Pico'
---
## E-Mobility with the smart-me Pico Charging Station without smart-me ZEV

### Schematic Diagram of a Development without smart-me ZEV

![Third-party ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description of the Load Management Solution in the Metering Concept without ZEV or with a Third-Party ZEV

The load management of the Pico charging station is based on smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation is already in place, load management for Picos can also be handled by third-party software instead of smart-me multilevel load management.
You can find more information on this below under "extended information".

Advantages of smart-me load management:

- Same manufacturer for metering hardware and charging station: excellent compatibility and reliability

- Multi-stage, dynamically controlled load management: minimal power losses and high availability

- Centrally controlled load shedding for the entire installation

- Solar optimization function optimized for the site or for each building

- Charging group prioritization and passive peak load minimization


Hardware points functionally required for comprehensive load management with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Solar optimization point, required for distributing capacity within the site.

- Optional: 2x e-mobility meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Reference when several charging groups are connected to one outgoing feeder and share its capacity.
    \- Billing measurement for losses and standby energy
    \- Other loads that are not Pico charging stations can also be taken into account, e.g. garage lighting

- Optional, if all buildings are metered: 1x site meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- This point can be formed virtually from the two building meters. The prerequisite is that 100% of the loads on the site are measured by the building meters.


### Extended Information on Pico Charging Station Load Management

[Functional description of smart-me Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

### Billing of E-Mobility without ZEV

Billing can be done in several ways, each with its specific advantages and disadvantages:

- Billing with a single-tariff or multi-tariff system within the ZEV (association for own consumption) using [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Billing with a single-tariff system using the post-payment method and the [eCarUp Backend](https://web.ecarup.com/referenzen/).

- Billing with a single tariff using highly automated credit card billing and the [eCarUp Backend](https://web.ecarup.com/referenzen/).
