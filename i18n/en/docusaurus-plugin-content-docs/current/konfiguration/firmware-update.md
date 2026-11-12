---
title: 'Firmware update'
slug: '/konfiguration/firmware-update'
description: 'Performing a firmware update'
sidebar_label: 'Firmware update'
---
<Menueweg>System → Firmware update</Menueweg>

## Performing a firmware update

smart-me products receive improvements and new features throughout their product life cycle.
Users can install these updates themselves.

ⓘ Note: Install a firmware update mainly when you have noticed faulty behaviour or want to use a new feature that the previous firmware did not support. Update products whose features change quickly, such as the Pico charging station, regularly.

Open the following website through the portal or with this link:
[Firmware update website](https://webforms.smart-me.com/Connect/DeviceOverview.aspx) 

## Procedure

### 1\. Select the device to update:

"Update" or "Update Communication"

- Update: firmware of the device

- Update Communication: update of the communication module


Note:
To run several updates at the same time, right-click each link and open it in a new tab.

![Firmware update – Figure 2](/img/konfiguration-firmware-update/02.png)

### 2\. Select "Update firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Time until the update starts: 

- Telstar (CT) and Pico: up to 5 minutes.

- M-Bus gateway: depends on the upload interval.

</div>
<div className="col col--7 bild--mitte">

![Firmware update – Figure 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Wait for the update to finish, then confirm with "OK"

<div className="row">
<div className="col col--4">

ⓘ Note: Once the update has started (> 1%), you can close the browser.

Time until the update finishes: 

- Telstar (CT): about 5 minutes.

- Pico: up to one day. See below for how to speed up the firmware update.

- M-Bus gateway: depends on the upload interval.

</div>
<div className="col col--8 bild--mitte">

![Firmware update – Figure 4](/img/konfiguration-firmware-update/04.png)

![Firmware update – Figure 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Speeding up the firmware update

The update usually continues even if nobody is watching it and no browser is open.

If you watch the update, you can speed it up like this:

- Open the meter or the Pico in a second browser tab.

- Select the normal view.

- Leave the tab open and active. The meter or the Pico then communicates with the smart-me Cloud more often, so it can exchange more data packets and finish the update sooner.

- You can see whether communication is active by watching the voltage. The voltage always fluctuates slightly, so you can easily tell whether the device is now sending data every 1-2 seconds.


![Firmware update – Figure 6](/img/konfiguration-firmware-update/06.png)

## Firmware release notes

[Firmware release notes](/news/firmware-release-notes)
