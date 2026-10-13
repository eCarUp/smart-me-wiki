---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'Perform a firmware update'
sidebar_label: 'Firmware Update'
---
## Performing a firmware update

smart-me products receive improvements and new features throughout their product life cycle.
Users can apply these updates themselves.

ⓘ Note: Apply firmware updates mainly if you have noticed faulty behaviour or want to use a new feature that the previous firmware did not support. Products with fast-evolving features, such as the Pico charging station, should be updated regularly.

### Opening the firmware update website

You can update the firmware of smart-me hardware at any time, as long as it has internet access.

Via this link

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Or via the smart-me menu

1.  In your browser, log in at [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) with your login credentials.

2.  In the menu, select System / Firmware Update


![Firmware Update – Figure 1](/img/konfiguration-firmware-update/01.png)

## Procedure

1.  ### Select the device to update: "Update" or "Update Communication"


- Update: firmware of the device

- Update Communication: update of the communication module


Note:
To run several updates in parallel, right-click the links and open each one in a new tab.

![Firmware Update – Figure 2](/img/konfiguration-firmware-update/02.png)

### 2\. Select "Update firmware" ("Firmware aktualisieren")

Time until the update starts: 

- For Telstar (CT) and Pico, it can take up to 5 minutes.

- For the M-Bus Gateway, it depends on the upload interval.


![Firmware Update – Figure 3](/img/konfiguration-firmware-update/03.png)

### 3\. Wait until the update is complete and confirm with "OK"

ⓘ Note: Once the update has started (> 1%), the browser does not need to stay open.

Time until the update is complete: 

- For Telstar (CT), approx. 5 minutes.

- For Pico, it can take up to one day. See below to speed up the firmware update.

- For the M-Bus Gateway, it depends on the upload interval.


![Firmware Update – Figure 4](/img/konfiguration-firmware-update/04.png)

![Firmware Update – Figure 5](/img/konfiguration-firmware-update/05.png)

### Speeding up the firmware update

The update usually continues even if no one is monitoring it and the browser is closed.

If you monitor the update, you can speed it up as follows:

- Select the meter or the Pico in a second browser tab.

- Select the normal view.

- Keep this browser tab open and active. The meter or the Pico then communicates with the smart-me Cloud more often, so more data packets can be exchanged and the update finishes sooner.

- You can tell whether communication is active by watching the voltage. Because the voltage always fluctuates slightly, you can easily see whether the device is now sending data every 1-2 seconds.


![Firmware Update – Figure 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
