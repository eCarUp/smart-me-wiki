---
title: 'smart-me System and Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'E-mobility in the smart-me ZEV (association for own consumption) with the Pico charging station hardware'
sidebar_label: 'smart-me System and Pico'
---
E-mobility in the smart-me ZEV (association for own consumption) / tenant electricity with the Pico charging station hardware

### Schematic diagram of a housing development in a ZEV / tenant electricity setup

<div className="bild--voll">

![smart-me ZEV and Pico – Figure 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01_EN.png)

</div>

### Description of the load management solution in the metering concept of a ZEV / tenant electricity property

The load management of the Pico charging station is based on the smart-me meter hardware. This hardware can be used directly as reference points.

If a third-party meter installation is already in place, load management for Picos can also be handled by third-party software instead of the smart-me multilevel load management.
You can find more information on this below under "Extended information".

Advantages of smart-me load management:

- No additional metering hardware required

- Same manufacturer for the metering hardware and the charging station: top compatibility and reliability

- Multi-stage, dynamically controlled load management: minimal power losses and high availability

- Centrally controlled load shedding for the entire installation

- Solar optimization function optimized for the site or the building

- Charging group prioritization and passive peak load reduction


Hardware points functionally required for comprehensive load management in a ZEV / tenant electricity setup with smart-me hardware (red arrows):

- 2x building meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Solar optimization point, required for distributing capacity within the site.

- Optional but recommended: 2x e-mobility meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- Reference when several charging groups are connected to one outgoing circuit and share its capacity.
    \- Billing measurement for losses and standby energy
    \- Other consumers that are not Pico charging stations can also be taken into account, e.g. garage lighting, sockets, etc.

- Optional but strongly recommended: 1x site meter ([Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct))
    \- If one already exists in the ZEV, this point can be taken into account. If there is no site meter, it can be mapped virtually.


### Extended information on the load management of the Pico charging station

[Functional description of Pico load management](/produkte/pico-ladestation/pico-lastmanagement)

[Compatible third-party load management software](/drittsysteme)

[Pico general installation planning: outgoing circuits and fuses.](/produkte/pico-ladestation/installationsplanung)

### Billing of e-mobility in the ZEV (association for own consumption) / tenant electricity

Billing can be done in various ways, each with its specific advantages and disadvantages:

- Billing with a single-tariff or multi-tariff system in the ZEV with [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), either separately or together with the apartment consumption.

- Billing with a single-tariff system using the post-payment method and the [eCarUp backend](https://web.ecarup.com/referenzen/).

- Billing with a single tariff using highly automated credit card billing via the [eCarUp backend](https://web.ecarup.com/referenzen/).
