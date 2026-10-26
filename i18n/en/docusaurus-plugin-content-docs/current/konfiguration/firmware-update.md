---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'Performing a firmware update'
sidebar_label: 'Firmware Update'
---
<Menueweg>System → Firmware update</Menueweg>

## Performing a firmware update

smart-me products receive improvements and new features throughout their product lifecycle.
Users can install these updates themselves.

ⓘ Note: Install a firmware update mainly if you have noticed faulty behavior or if you want to use a new feature that the previous firmware did not support. Products with fast-evolving features, such as the Pico charging station, should be updated regularly.

### Opening the firmware update website

You can update the firmware on smart-me hardware at any time, as long as the device has internet access.

Via this link

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Or via the smart-me menu

1.  Log in in your browser at [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) with your login details.

2.  In the menu, select System / Firmware update (System / Firmware Update)


![Firmware update – Figure 1](/img/konfiguration-firmware-update/01.png)

## Procedure

1.  ### Select the device to update: "Update" or "Update Communication"


- Update: firmware of the device

- Update Communication: update of the communication module


Note:
To run several updates in parallel, right-click several links and open each one in a new tab.

![Firmware update – Figure 2](/img/konfiguration-firmware-update/02.png)

### 2\. Select "Update firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Time until the update starts: 

- For Telstar (CT) and Pico, it can take up to 5 minutes.

- For the M-Bus gateway, it depends on the upload interval.

</div>
<div className="col col--7 text--center">

![Firmware update – Figure 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Wait until the update is complete and confirm with "OK"

<div className="row">
<div className="col col--4">

ⓘ Note: Once the update has started (> 1%), you can close the browser.

Time until the update is complete: 

- For Telstar (CT), about 5 minutes.

- For Pico, it can take up to one day. See below for how to speed up the firmware update.

- For the M-Bus gateway, it depends on the upload interval.

</div>
<div className="col col--8 text--center">

![Firmware update – Figure 4](/img/konfiguration-firmware-update/04.png)

![Firmware update – Figure 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Speeding up the firmware update

The update normally continues even if no one is watching it and no browser is open.

If you are actively watching the update, you can speed it up as follows:

- Open the meter or the Pico in a second browser tab.

- Select the normal view.

- Keep the browser tab open and active. The meter or the Pico then communicates with the smart-me Cloud more often, so more data packets can be exchanged and the update finishes sooner.

- You can tell from the voltage whether communication is active. The voltage always fluctuates slightly, so it is easy to see whether the device is now sending data every 1-2 seconds.


![Firmware update – Figure 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
