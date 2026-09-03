---
title: 'Firmware Update'
slug: '/konfiguration/firmware-update'
description: 'The smart-me products undergo constant improvements and functional enhancements throughout their product life cycle.'
sidebar_label: 'Firmware Update'
---
## Perform firmware update

The smart-me products undergo constant improvements and functional enhancements throughout their product life cycle. These optimizations can be carried out independently by the user.

Note: Firmware updates are particularly useful if you have detected a faulty behavior or want to use a new function that the previous firmware did not yet support. Products with rapidly developing functions, such as the Pico charging station, should be updated regularly.

### Open firmware update website

With smart-me hardware, a firmware upgrade can be carried out at any time, provided internet access is guaranteed.

1.  Log in to your browser via [https://web.smart-me.com/login/](https://web.smart-me.com/login/) with your login data.

2.  In the menu go to system / Firmware Update


![Firmware Update – figure 1](/img/_en/configuration-firmware-update/01.png)

### Perform firmware update

1\. Select the device for updating: “Update” or “Update Communication”

- Update: Firmware of the device

- Update Communication: Update the communication module


Note: To perform several updates in parallel, you can open several links in a new tab by right-clicking on the link.



![Firmware Update – figure 2](/img/_en/configuration-firmware-update/02.png)

2\. Select “Update firmware”

Duration until start: 

- With Telstar (CT) and Pico, it can take up to 5 minutes.

- For M-Bus Gateway it depends on the upload interval.


![Firmware Update – figure 3](/img/_en/configuration-firmware-update/03.png)

3\. Wait until the update is complete and confirm with “OK”

Note: If the update has started (> 1%), the browser does not need to remain open.

Duration until the update is complete: 

- For Telstar (CT) approx. 5 minutes.

- For Pico it can take up to a day. See below for how to speed up the firmware update.

- For M-Bus Gateway it depends on the upload interval.


![Firmware Update – figure 4](/img/_en/configuration-firmware-update/04.png)

![Firmware Update – figure 5](/img/_en/configuration-firmware-update/05.png)

### Speed up firmware update

As a general rule, the update continues even without active monitoring or an open browser.

If the update is actively monitored, it can be speeded up as follows:

- Select the meter or pico in a second tab in the browser.

- Select the normal view.

- Leave the tab open and active in the browser. As a result, the meter or Pico communicates more frequently with the smart-me Cloud and more data packages can be exchanged to complete the update more quickly.

- Whether communication is active can be determined by the voltage. As this always fluctuates slightly, it is easy to see whether the device is now sending data every 1-2 seconds.


![Firmware Update – figure 6](/img/_en/configuration-firmware-update/06.png)

### Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
