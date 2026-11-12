---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'Performing a firmware update'
sidebar_label: 'Firmware Update'
---
<Menueweg>System → Firmware update</Menueweg>

## Performing a firmware update

smart-me products receive improvements and new features throughout their product life cycle.
Users can install these updates themselves.

ⓘ Note: Install firmware updates mainly when you have noticed faulty behavior or want to use a new feature that the previous firmware did not support. Update products with fast-changing features, such as the Pico charging station, regularly.

Open the following website through the portal or with this link:
[Firmware update website](https://webforms.smart-me.com/Connect/DeviceOverview.aspx) 

## Procedure

### 1\. Select the device to update:

"Update" or "Update Communication"

- Update: updates the device firmware

- Update Communication: updates the communication module


Note:
To run several updates at the same time, right-click each link and open it in a new tab.

![Firmware update – figure 2](/img/konfiguration-firmware-update/02.png)

### 2\. Select "Update firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Time until the update starts: 

- For Telstar (CT) and Pico, it can take up to 5 minutes.

- For the M-Bus Gateway, it depends on the upload interval.

</div>
<div className="col col--7 bild--mitte">

![Firmware update – figure 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Wait until the update is complete and confirm with "OK"

<div className="row">
<div className="col col--4">

ⓘ Note: Once the update has started (> 1%), you can close the browser.

Time until the update is complete: 

- For Telstar (CT), about 5 minutes.

- For Pico, it can take up to one day. To speed up the firmware update, see below.

- For the M-Bus Gateway, it depends on the upload interval.

</div>
<div className="col col--8 bild--mitte">

![Firmware update – figure 4](/img/konfiguration-firmware-update/04.png)

![Firmware update – figure 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Speeding up the firmware update

The update normally continues even if nobody monitors it and no browser is open.

If you actively monitor the update, you can speed it up as follows:

- Select the meter or the Pico in a second browser tab.

- Select the normal view.

- Keep the tab open and active in the browser. The meter or the Pico then communicates with the smart-me Cloud more often. More data packets can be exchanged, so the update finishes sooner.

- You can check whether communication is active by watching the voltage. It always fluctuates slightly, so you can easily see whether the device is now sending data every 1-2 seconds.


![Firmware update – figure 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
