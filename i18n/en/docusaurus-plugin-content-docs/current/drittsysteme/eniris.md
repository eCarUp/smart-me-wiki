---
title: 'Eniris'
slug: '/drittsysteme/eniris'
description: 'The SmartgridOne energy management system from Eniris reads smart-me meters and charging stations directly via Modbus TCP.'
sidebar_label: 'Eniris'
---
<div className="row">
<div className="col col--7">

The SmartgridOne energy management system from Eniris reads smart-me meters and charging stations directly via Modbus TCP.

Eniris has been developing energy management systems since 2018 and is headquartered in Belgium, with a branch in Switzerland. SmartgridOne controls batteries, charging stations, photovoltaic systems, heat pumps and switchable loads in a coordinated way. In Switzerland, SmartgridOne is sold exclusively through Solarmarkt, which also provides support.

</div>
<div className="col col--5 bild--mitte">

![Eniris logo: a lightning bolt in a red circle next to the ENIRIS lettering](/img/drittsysteme-eniris/logo.png)

</div>
</div>

**Target group:**

- ZEV

- Single-family home

- Multi-family home


**Connection type:**

Direct integration via Modbus TCP for local communication.


**Requirement:**

- smart-me Professional subscription. [Learn more](/planung/cloud-lizenzen)

## Integrated devices

In SmartgridOne, these devices are available under **Devices** as a standard integration via Modbus TCP:

- [smart-me 3-Phase Meter Telstar](/produkte/telstar-80a)

- [3-Phase Meter Telstar CT](/produkte/telstar-ct)

- [Pico EV Charger](/produkte/pico-ladestation) with phase switching

## Quick guide

1.  [Enable Modbus TCP on the smart-me device](/schnittstellen/modbus-tcp#activating-modbus-tcp).

2.  Note the IP address or host name of the device. Both are shown in the portal under **Device → Configuration → Advanced Settings (Gerät → Konfiguration → Erweiterte Einstellungen)**. Other ways to determine the address are described under [Finding the address of the device](/schnittstellen/modbus-tcp#finding-the-device-address).

3.  In SmartgridOne, add the smart-me device under **Devices**.

4.  Enter the IP address or host name and save.

Restrictions apply to the Pico in load management: only a single device or the master of a group can be reached via Modbus TCP. The details are described under [Pico and Modbus TCP specifics](/schnittstellen/modbus-tcp#pico-specific-notes-on-modbus-tcp).

## Contact

<Kacheln min="20rem">

<Kachel titel="Solarmarkt GmbH">

Sales and support in Switzerland.

Neumattstrasse 30, CH-5000 Aarau

+41 62 200 62 00 · [info@solarmarkt.ch](mailto:info@solarmarkt.ch) · [www.solarmarkt.ch](https://www.solarmarkt.ch)

</Kachel>

<Kachel titel="Eniris">

Manufacturer of SmartgridOne.

[eniris.com](https://eniris.com/de)

</Kachel>

</Kacheln>
