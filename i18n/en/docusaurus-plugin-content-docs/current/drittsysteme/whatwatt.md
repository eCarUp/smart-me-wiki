---
title: 'whatwatt'
slug: '/drittsysteme/whatwatt'
description: 'The whatwatt module is a small hardware module for reading energy meters used by the energy supplier.'
sidebar_label: 'whatwatt'
---

<div className="row">
<div className="col col--8">

The whatwatt module is a small hardware module for reading energy meters used by the energy supplier.
It transmits the relevant meter readings, load profiles and live power values.

The module transmits its data directly to our cloud via an API interface.



Requirements:
- Hardware module
- "Cloud2Cloud" license per module
- Internal SD card per module

Applications:

- Billing of vZEV
- Measurement source for controlling third-party products via Modbus TCP, MQTT or API
- Compatible with smart-me Nimbus 100A for local readout via Modbus TCP

</div>
<div className="col col--4 text--center">

![whatwatt – Figure 1](/img/drittsysteme-whatwatt/01.png)

</div>
</div>


<Video src="7-VJBJNCnZY" title="YouTube video, webinar recording whatwatt x smart-me" />

## Hardware settings:
<div className="row">
<div className="col col--8">

The transmitted time must be set to NTP time for each module.

1.  Open your whatwatt app
2.  Navigate to the web UI (browser)
3.  Click on Meter
4.  Scroll down to Time Handling
5.  Set Time Handling to "Use Networktime" in Reports

</div>
<div className="col col--4 text--center">

![whatwatt – Figure 2](/img/drittsysteme-whatwatt/02.jpg)

![whatwatt – Figure 3](/img/drittsysteme-whatwatt/03.jpg)

</div>
</div>

## Integration guide:

<Embed src="https://drive.google.com/file/d/1J5iwfbUOJA5ZBVfDcz7xM2ouiSC38hOw/preview" aspect="0.721" title="Drive, whatwatt_Go_smart-me_Integration_v1.0.pdf" />

![whatwatt – Figure 4](/img/drittsysteme-whatwatt/04.png)

![whatwatt – Figure 5](/img/drittsysteme-whatwatt/05.png)

Compatibility with third-party products:

[Check compatibility](https://whatwatt.ch/de/compatibility)

Contact:

[www.whatwatt.ch](http://www.whatwatt.ch)
