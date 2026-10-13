---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat is a Swiss company that manufactures heating elements for water heating and energy storage.'
sidebar_label: 'Askoma'
---
Askoheat is a Swiss company that manufactures heating elements for water heating and energy storage.

The heating elements can be controlled intelligently via third-party systems such as smart-me AG, storing surplus solar energy in, for example, domestic hot water.

Supported Askoma products:

- Askoheat+


![Askoma – Figure 1](/img/drittsysteme-askoma/01.png)

![Askoma – Figure 2](/img/drittsysteme-askoma/02.png)

### Requirements

- smart-me meter Telstar 80A or CT

- Professional license to activate the Modbus TCP and DNS services

- Available in the standard software from mid-September 2024.

- On the router side, you must ensure that the IP address of the Telstar does not change.


### Configuring Askoheat+ and smart-me Telstar 80A / CT

Telstar 80A / CT:

- In the settings (Einstellungen) (select the meter, gear icon at the top right)

- Enable Modbus TCP (Modbus TCP aktivieren)

- Enable DNS (DNS aktivieren)

- Select internal IP (Interne IP wählen)

- Save (Speichern)


![Askoma – Figure 3](/img/drittsysteme-askoma/03.png)

- Read out the IP address via CMD using the ping command on the displayed DNS address. You can find the DNS address in the advanced settings (Erweiterte Einstellungen) under "Enable DNS" (DNS aktivieren). e.g. ping smart-me\_6303192.dns-me.com


![Askoma – Figure 4](/img/drittsysteme-askoma/04.png)

Settings on the Askoheat+

These may vary and are not the responsibility of smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- Enter the IP address of the Telstar. 

- Enable TCP master mode

-  Select Smart-Me from the list

- Click Start Connection


![Askoma – Figure 5](/img/drittsysteme-askoma/05.png)

- You can then check whether the measured value updates: on the Setup3 page under STATUS, the watt value should refresh every 1–3 seconds.


![Askoma – Figure 6](/img/drittsysteme-askoma/06.png)

### Contact

ASKOMA AG

Industriestrasse 1

CH-4922 Bützberg

Switzerland

Tel. +41 62 958 70 80

Support +41 62 958 70 99

Fax  +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)
