---
title: 'Installation planning'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico can be installed in various ways.'
sidebar_label: 'Installation planning'
---
Pico can be installed in various ways. Here you will find the most common variants described along with their specific requirements.

![Installation planning – Figure 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## General installation notes

- Every Pico has DC fault detection according to IEC62955. 

- Pico charging stations manufactured in 2024 or later, or from serial number 7002702, have an integrated compliant RCD Typ-A according to IEC60947\-2.
    \- from 2024 or serial number 7002702 onwards, a series RCD Typ-A is no longer required
    \- before 2024 or serial number 7002702, a series RCD Typ-A is required upstream of each charging station for NIN compliance.

- Pico charging stations can handle short-circuit currents of 3kA on their own without any problem.
    If several charging stations are connected to one feeder, a circuit breaker must be used at the feeder.
    The circuit breaker must be rated for the short-circuit capacity of the feeder.
    Variants with at least 6kA are recommended in every case.

- The internal circuit breaker of the Pico charging station meets the requirements of IEC 61851-1.

- Suitable for:
    Flat ribbon cable installations
    Busbar installations
    Looped-through installations
    Stand installations

- Feeders up to max. 80A can be connected directly without further measures.


## Pico charging station from year of manufacture 2024 and serial number 7002702

All Pico charging stations from serial number 7002702 have an internal RCD Typ-A according to IEC 60947\-2 in combination with DC fault protection detection according to IEC62955.

### Pico installation on flat ribbon cable or with busbar systems

![Installation planning – Figure 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Note: 

The short-circuit current only needs to be checked at the Pico base plate, not at the output / Type 2 of the Pico device.

### Pico internally looped-through installation or with Pico stand Basic (212070-PL)

![Installation planning – Figure 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Pico installation with Pico stand with service cover (232070-PL)

![Installation planning – Figure 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Lightning protection for outdoor installations of charging infrastructure

- For stand installations, be sure to also observe the NIN and local regulations regarding lightning protection devices for outdoor installations of charging infrastructure.
    Swiss NIN chapter: 5.3.4
    Germany standard: VDE 0100-534 

- The Pico has overvoltage category 3 (4kV)

- For installations requiring an SPD Type 2 lightning protection device, stands with service flaps must be provided. The lightning protection device can be installed directly inside them.

- The effective range of an SPD Type-2 is a radius of approx. 10m.


General lightning protection rules as of 04.2025 

For buildings without external lightning protection: (e.g. an air-termination system on the roof)

For devices of overvoltage category III, protection by an SPD Type 2 is required so that the impulse withstand voltage of the devices is not exceeded.

For buildings with external lightning protection: (e.g. an air-termination system on the roof)
The installation here requires SPD Type-1 lightning protection and Type-2 lightning protection; otherwise there is a risk that the SPD Type-2 will be destroyed if lightning strikes the air-termination system.

## Downloads

[Connection diagram and circuit diagram ZIP files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

## Pico charging station before year of manufacture 2024 and serial number 7002702

- Pico charging stations manufactured before 2024 or before serial number 7002702 have integrated DC fault detection according to IEC62955.

- Pico charging stations manufactured before 2024 or before serial number 7002702 have functional but not 100% compliant residual current detection for AC currents Type-A (30mA)


### Flat ribbon cable installation

- RCD Typ-A 40A without circuit breaker in series with each Pico charging station

- A circuit breaker at the e-mobility feeder with short-circuit-proof installation method (blue box) is sufficient for selectivity. (Extended documentation)


![Installation planning – Figure 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

## Circuit breaker for charging station group protection and supply line up to 80A per phase

The circuit breaker at the feeder for the entire charging group should have characteristic C.
The usual circuit breakers with characteristic B are not suitable for charging station installations and tend to trip too early.

For a 63A e-mobility feeder, for example, a 63A circuit breaker, type C with 6kA or 10kA short-circuit capacity would be recommended.

## Circuit breaker for Pico charging stations with supply line of more than 80A per phase

When installing a Pico charging station on a high-energy busbar system or with conductor cross-sections >35mm2 and phase currents > 80A, a circuit breaker per charging station is recommended on the installation side.
The internal circuit breaker of the individual Pico is limited to 3kA. With high-energy supply lines, this capacity may be insufficient.
Alternatively, the short-circuit capacity of the connection can of course be checked by measurement; if it is below 3kA, an additional circuit breaker is not necessary.

However, if an additional circuit breaker is required, a circuit breaker model with 40A tripping current, tripping characteristic C and a short-circuit capacity of 6kA or 10kA is recommended.

## Extended documentation and country-specific notes

[Switzerland: Statement by Electrosuisse - Installation of charging stations for EVs, several charging stations on a common supply line](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
