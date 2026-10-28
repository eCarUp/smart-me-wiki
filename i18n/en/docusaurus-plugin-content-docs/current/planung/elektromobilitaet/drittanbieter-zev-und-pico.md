---
title: 'Third-Party System and Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'E-mobility with the smart-me Pico charging station without smart-me ZEV'
sidebar_label: 'Third-Party System and Pico'
---
## E-mobility with the smart-me Pico charging station without smart-me ZEV / tenant electricity

### Schematic diagram of a housing development without smart-me ZEV / tenant electricity

![Third-party ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description of the load management solution in the metering concept without ZEV / tenant electricity or with a third-party provider

The load management of the Pico charging station is based on the smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation is already in place, load management for Picos can also be handled by third-party software instead of the smart-me multilevel load management.
You can find more information on this below under "Extended information".

Advantages of smart-me load management:

- Same manufacturer for the metering hardware and the charging station: excellent compatibility and reliability

- Multi-stage, dynamically controlled load management: minimal power losses and high availability

- Centrally controlled load shedding for the entire installation

- Solar optimization function optimized for the site or for each building

- Charging group prioritization and passive peak load reduction


Functionally required hardware points for comprehensive load management with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Solar optimization point, required for distributing capacity within the site.

- Optional 2x e-mobility meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Reference when several charging groups are connected to one outgoing feeder and share the capacity.
    \- Billing measurement for losses and standby energy
    \- Other consumers that are not Pico charging stations can also be taken into account, e.g. garage lighting

- Optional, if all buildings are metered: 1x site meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- This point can be formed virtually from the two building meters. The prerequisite is that 100% of the loads on the site are measured by the building meters.


### Extended information on the load management of the Pico charging station

[Functional description of smart-me Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

### Billing of e-mobility without ZEV / tenant electricity

Billing can be done in various ways, each with its specific advantages and disadvantages:

- Billing with a single-tariff or multi-tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Billing with a single-tariff system using the post-payment method and the [eCarUp backend](https://web.ecarup.com/referenzen/).

- Billing with a single tariff using highly automated credit card billing and the [eCarUp backend](https://web.ecarup.com/referenzen/).
