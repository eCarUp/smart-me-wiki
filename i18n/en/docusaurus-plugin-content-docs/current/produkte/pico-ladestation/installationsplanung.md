---
title: 'Installation Planning'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico can be installed in various ways.'
sidebar_label: 'Installation Planning'
---
Pico can be installed in various ways. Here you will find the most common variants described together with their specific requirements.

![Installation Planning – Figure 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## General installation notes

- Every Pico features DC fault detection according to IEC62955. 

- Pico charging stations from model year 2024 or from serial number 7002702 have an integrated compliant RCD Typ A according to IEC60947\-2.
    \- from 2024 or serial number 7002702 onwards, no serial RCD Typ A is required any more
    \- before 2024 or serial number 7002702, a serial RCD Typ A is required upstream of every charging station for NIN compliance.

- The Pico charging stations can handle short-circuit currents of 3kA on their own without any problem.
    If several charging stations are connected to one outgoing circuit, a circuit breaker must be used at the outgoing circuit.
    The load protection device must be rated for the short-circuit capability of the outgoing circuit.
    In any case, variants with at least 6kA are recommended.

- The internal load protection device of the Pico charging station meets the requirements of IEC 61851-1.

- Suitable for:
    Flat cable installations
    Busbar installations
    Looped-through installations
    Stand installations

- Outgoing circuits up to max. 80A can be connected directly without further measures.


## Pico charging station from model year 2024 and serial number 7002702

All Pico charging stations from serial number 7002702 have an internal RCD Typ A according to IEC 60947\-2 in combination with DC fault protection detection according to IEC62955.

### Pico installation on flat cable or with busbar systems

![Installation Planning – Figure 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Note: 

The short-circuit current only has to be checked at the Pico base plate, not at the output / Type 2 of the Pico device.

### Pico internally looped-through installation or with Pico stand Basic (212070-PL)

![Installation Planning – Figure 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Pico installation with Pico stand with service cover (232070-PL)

![Installation Planning – Figure 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Lightning protection for outdoor installations of charging infrastructure

- For stand installations, be sure to also observe the NIN and local regulations regarding lightning protection devices for outdoor installations of charging infrastructure.
    Swiss NIN chapter: 5.3.4
    Germany standard: VDE 0100-534 

- The Pico has overvoltage category 3 (4kV)

- For installations requiring a lightning protection device of SPD Type2, stands with service flaps must be provided. The lightning protection device can be installed directly inside them.

- The effective range of an SPD Typ-2 is a radius of approx. 10m.


General lightning protection rules as of 04.2025 

For buildings without external lightning protection: (e.g. an air-termination system on the roof)

For devices of overvoltage category III, protection by an SPD Type 2 is required in order not to exceed the impulse withstand voltage of the devices.

For buildings with external lightning protection: (e.g. an air-termination system on the roof)
Here the installation requires SPD Typ-1 lightning protection and Typ-2 lightning protection, otherwise there is a risk that the SPD Typ-2 will be destroyed if lightning strikes the air-termination system.

## Downloads

[Connection diagram and circuit diagram ZIP files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

## Pico charging station before model year 2024 and serial number 7002702

- Pico charging stations before model year 2024 or serial number 7002702 have integrated DC fault detection according to IEC62955.

- Pico charging stations before model year 2024 or serial number 7002702 have functional but not 100% compliant residual current detection for AC currents Typ A (30mA)


### Flat cable installation

- RCD Typ A 40A without circuit breaker in series with every Pico charging station

- A load protection switch at the e-mobility outgoing circuit with a short-circuit-proof wiring method (blue box) is sufficient for selectivity. (Extended documentation)


![Installation Planning – Figure 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

## Load protection for charging station group fusing and supply line up to 80A per phase

The load protection at the outgoing circuit for the entire charging group should have characteristic C.
The usual load protection devices with characteristic B are not suitable for charging station installations and tend to trip too early.

For a 63A e-mobility outgoing circuit, for example, a 63A load protection device, Type C with 6kA or 10kA short-circuit capability would be recommended.

## Load protection for Pico charging stations with a supply line of more than 80A per phase

When installing a Pico charging station on a high-energy busbar system or with conductor cross-sections >35mm2 and phase currents > 80A, load protection per charging station is recommended on the installation side.
The internal load protection of the individual Pico is limited to 3kA. With high-energy supply lines, this capability may be rated too low.
Alternatively, the short-circuit capability of the connection can of course be checked by measurement; if it turns out to be below 3kA, additional load protection is not necessary.

If, however, additional load protection is required, a load protection model with a 40A tripping current, tripping characteristic C and a short-circuit capability of 6kA or 10kA is recommended.

## Extended documentation and country-specific notes

[Switzerland: Statement by Electrosuisse – Installation of charging stations for EVs, several charging stations on a common supply line](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
