---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat is a Swiss company that manufactures heating elements for water heating and energy storage.'
sidebar_label: 'Askoma'
---
<div className="row">
<div className="col col--8">

Askoheat is a Swiss company that manufactures heating elements for water heating and energy storage.

The heating elements can be controlled intelligently by third-party systems such as smart-me AG. This lets them store surplus solar energy, for example in domestic hot water.

Supported Askoma products:

- Askoheat+

</div>
<div className="col col--4 bild--mitte">

![Askoma – Figure 1](/img/drittsysteme-askoma/01.png)

![Askoma – Figure 2](/img/drittsysteme-askoma/02.png)

</div>
</div>

### Requirements

- smart-me meter Telstar 80A or CT
- Professional license to activate the Modbus TCP and DNS services
- Available in the standard software from mid-September 2024.
- On the router side, make sure that the IP address of the Telstar does not change.


### Configuring Askoheat+ and smart-me Telstar 80A / CT

<div className="row">
<div className="col col--8">

Telstar 80A / CT:
- in the settings (select the meter, gear icon at the top right)
- Activate Modbus TCP (Modbus TCP aktivieren)
- Activate DNS (DNS aktivieren)
- Select Internal IP (Interne IP)
- Save (Speichern)

</div>
<div className="col col--4 bild--mitte">

![Askoma – Figure 3](/img/drittsysteme-askoma/03.png)

</div>
</div>

<div className="row">
<div className="col col--8">

- Read out the IP address using CMD and a ping command to the DNS address shown. You can find the DNS address in the Advanced Settings (Erweiterte Einstellungen) under "Activate DNS" ("DNS aktivieren"). e.g. ping smart-me\_6303192.dns-me.com

</div>
<div className="col col--4 bild--mitte">

![Askoma – Figure 4](/img/drittsysteme-askoma/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Settings on the Askoheat+
These may vary and are not the responsibility of smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3)

- Enter the IP address of the Telstar
- Activate TCP master mode
- Select Smart-Me from the list
- Click Start Connection

- You can then check whether the measured value is updating: on the Setup3 page under STATUS, check that the watt value updates every 1-3 seconds.

</div>
<div className="col col--6 bild--mitte">

![Askoma – Figure 5](/img/drittsysteme-askoma/05.png)

![Askoma – Figure 6](/img/drittsysteme-askoma/06.png)

</div>
</div>


### Contact

<Kacheln min="20rem">
<Kachel titel="ASKOMA AG">

Industriestrasse 1, CH-4922 Bützberg, Switzerland

Tel. +41 62 958 70 80 · Support +41 62 958 70 99 · Fax +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)

</Kachel>
</Kacheln>
