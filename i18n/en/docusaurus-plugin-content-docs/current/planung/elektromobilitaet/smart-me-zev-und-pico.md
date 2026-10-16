---
title: 'smart-me ZEV and Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'smart-me ZEV with the Pico charging station hardware'
sidebar_label: 'smart-me ZEV / tenant electricity and Pico'
---
## E-mobility in the smart-me ZEV (association for own consumption) / tenant electricity with the Pico charging station hardware

### Schematic diagram of a development in an association for own consumption (ZEV)

![smart-me ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Description of the load management solution in the metering concept of a ZEV (association for own consumption) or tenant electricity property

The load management of the Pico charging station is based on the smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation already exists, load management for Picos can also be handled by third-party software instead of the smart-me multilevel load management.
You can find more information on this below under "Extended information".

Advantages of smart-me load management:
- No additional metering hardware required
- Same manufacturer for metering hardware and charging station: top compatibility and reliability
- Multi-stage, dynamically controlled load management: minimal power losses and high availability
- Centrally controlled load shedding for the entire installation
- Site- or building-optimized solar optimization function
- Charging group prioritization and passive peak load minimization


Functionally required hardware points for comprehensive load management in the ZEV with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Solar optimization point and required for capacity distribution within the site.

- Optional but recommended in the ZEV: 2x e-mobility meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- Reference if several charging groups are connected to one feeder and share its capacity.
    \- Billing measurement for losses and standby energy
    \- Other consumers that are not Pico charging stations can also be taken into account, e.g. garage lighting, sockets, etc.

- Optional but strongly recommended in the ZEV: 1x site meter ([Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT))
    \- If already present in the ZEV, this point can be taken into account. If there is no site meter, it can be mapped virtually.


### Extended information on the load management of the Pico charging station

[Functional description of Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

[Pico general installation planning for feeders and fusing.](/produkte/pico-ladestation/installationsplanung)

### Billing of e-mobility in the ZEV (association for own consumption)

Billing can be carried out in different ways, each with its specific advantages and disadvantages:
- Billing with a single or multiple tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), either separately or together with the apartment consumption.
- Billing with a single tariff system using the post-payment method and the [eCarUp Backend](https://web.ecarup.com/referenzen/).
- Billing with a single tariff using highly automated credit card billing via the [eCarUp Backend](https://web.ecarup.com/referenzen/).
