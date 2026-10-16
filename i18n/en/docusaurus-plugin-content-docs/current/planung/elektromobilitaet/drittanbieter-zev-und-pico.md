---
title: 'Third-party ZEV / tenant electricity and Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'smart-me Pico charging station in a third-party ZEV / tenant electricity setup'
sidebar_label: 'Third-party ZEV / tenant electricity and Pico'
---
## E-mobility with the smart-me Pico charging station without a smart-me ZEV

### Schematic diagram of a housing development without a smart-me ZEV

![Third-party ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description of the load management solution in a metering concept without a ZEV or with a third-party ZEV

The load management of the Pico charging station is based on smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation is already in place, load management for Picos can also be handled by third-party software instead of smart-me multilevel load management.
You can find more information on this below under "further information".

Advantages of smart-me load management:

- Same manufacturer for metering hardware and charging station: top compatibility and reliability
- Multi-stage, dynamically controlled load management: minimal power losses and high availability
- Centrally controlled load shedding for the entire installation
- Site- or building-optimized solar optimization function
- Charging group prioritization and passive peak load minimization

Hardware points functionally required for comprehensive load management with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Solar optimization point and required for capacity distribution within the site.

- Optional 2x e-mobility meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Reference if several charging groups are connected to one outgoing feeder and share the capacity.
    \- Billing measurement for losses and standby energy
    \- Other consumers that are not Pico charging stations can also be taken into account, e.g. garage lighting

- Optional, if all buildings are metered: 1x site meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- This point can be formed virtually from the two building meters. The prerequisite is that 100% of the loads on the site are measured by the building meters.


### Further information on the load management of the Pico charging station

[Functional description of smart-me Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

### Billing for e-mobility without a ZEV

Billing can be done in several ways, each with its specific advantages and disadvantages:
- Billing with a single or multi-tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).
- Billing with a single tariff system using the post-payment method and the [eCarUp Backend](https://web.ecarup.com/referenzen/).
- Billing with a single tariff using highly automated credit card billing and the [eCarUp Backend](https://web.ecarup.com/referenzen/).
