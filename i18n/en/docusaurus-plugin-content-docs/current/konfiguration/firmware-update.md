---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'Performing a firmware update'
sidebar_label: 'Firmware Update'
---
<Menueweg>System → Firmware update</Menueweg>

## Performing a firmware update

smart-me products receive improvements and new functions throughout their product life cycle.
Users can install these updates themselves.

ⓘ Note: Install a firmware update mainly if you have noticed a fault or want to use a new function that the previous firmware did not support. Products whose functions change quickly, such as the Pico charging station, should be updated regularly.


## Procedure

### 1\. Select the device to update:

"Update" or "Update Communication"

- Update: firmware of the device

- Update Communication: update of the communication module


Note:
To run several updates in parallel, right-click on each link and open it in a new tab.

![Firmware Update – Figure 2](/img/konfiguration-firmware-update/02.png)

### 2\. Select "Update firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Time until the update starts: 

- For Telstar (CT) and Pico, it can take up to 5 minutes.

- For the M-Bus Gateway, it depends on the upload interval.

</div>
<div className="col col--7 text--center">

![Firmware Update – Figure 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Wait until the update is complete and confirm with "OK"

<div className="row">
<div className="col col--4">

ⓘ Note: Once the update has started (> 1%), you can close the browser.

Time until the update is complete: 

- For Telstar (CT), about 5 minutes.

- For Pico, it can take up to one day. See below for how to speed up the firmware update.

- For the M-Bus Gateway, it depends on the upload interval.

</div>
<div className="col col--8 text--center">

![Firmware Update – Figure 4](/img/konfiguration-firmware-update/04.png)

![Firmware Update – Figure 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Speeding up the firmware update

The update usually continues even if nobody is monitoring it and no browser is open.

If you actively monitor the update, you can speed it up as follows:

- Open the meter or the Pico in a second browser tab.

- Select the normal view.

- Leave the tab open and active in the browser. The meter or the Pico then communicates with the smart-me Cloud more often, so it can exchange more data packets and finish the update sooner.

- You can check the voltage to see whether communication is active. The voltage always fluctuates slightly, so you can easily tell whether the device is now sending data every 1-2 seconds.


![Firmware Update – Figure 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
