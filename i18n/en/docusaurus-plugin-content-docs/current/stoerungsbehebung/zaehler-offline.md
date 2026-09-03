---
title: 'Meter offline'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'This page explains the known steps to bring a smart-me electricity meter that is offline back online.'
sidebar_label: 'Meter offline'
---
This page explains the known steps to bring a smart-me electricity meter that is offline back online.

## Good to know

### How do I know if a meter is offline?

A smart-me meter is offline if it has not reported to the cloud for more than 15 minutes. This can be determined by verifying the last connection on the meter.

![Meter offline – figure 1](/img/_en/troubleshooting-meter-offline/01.png)

In addition, you can see an overview in the System Health tab.

![Meter offline – figure 2](/img/_en/troubleshooting-meter-offline/02.png)

### Firmware Version (Telstar 80A und Telstar CT)

Up to and including FW version 1.16 and 1.17, various adjustments were made to the Telstar CT and Telstar 80A to improve the stability of the WiFi connection. For this reason, we recommend that you always briefly check whether the latest version is on the meter and update it if necessary. [Firmware update](/) 

If a meter with the latest firmware version is offline, although neighbouring meters are online, please report this to us.

### How do I save a new network on the smart-me device?

See below reinstall meter

### Reinstalling meter

With a new installation, a new WiFi can be saved on the meter. The installation must be done from the account where the meter is offline. The smart-me Cloud recognises known devices and adds new data without changing the existing data.

The new installation is carried out with the same procedure as described in the [commissioning](/konfiguration/inbetriebnahme). In the app, select the + in the top right-hand corner and reinstall the device. The new SSID and password are automatically saved on the device. It is important to make sure that you are logged in with the correct account.

### Narrowing down the problem

It is important to first roughly find out what the problem with the connection is. If several meters lose connection (are offline) almost at the same time, this probably indicates problems with the access point, the router or the internet connection.

Possible problems could be:

- The access point or router has a problem. In such cases, it may be helpful to restart the router or access point. After restarting, our devices should normally reconnect to the smart-me Cloud within a few minutes.

- A new ISP has been activated or a new SSID (name of the WLAN network) has been defined. In this case, you must save the new network on each smart-me device so that they can connect again.

- For mobile internet connections, the subscription may not have been paid. Make sure that the mobile internet payments are in order.


If only a single meter or a small group of meters has lost connection, the problem is usually more likely to be with the smart-me meter concerned.

## Bringing a meter back online

The following instructions suggest a standard procedure to bring a meter back online. 

Please note the following prerequisites:

- This procedure assumes that the internet is configured correctly and all necessary prerequisites are met.

- Make sure that another meter in the same account, which should be connected to the same router or access point according to the planning, is online. This ensures that neither the Internet hardware nor its prerequisites are causing the problem.


## Telstar 80A and Telstar CT

- Serial number starts with 63\*: Telstar 80A

- Serial number starts with 62\*: Telstar CT


### Restart meter

This is just for info on how it is done, it may be required below to restart the meter to bring it back online. 

Force restart: 

- Press T1 and T2 for 10 seconds. The display briefly goes dark during the restart.


How do I recognise the restart?

- The counter goes dark briefly and nothing is shown on the display.


Behaviour when the counter comes back online:

- In the top right-hand corner of the screen, the reception signal changes between X and reception immediately after the restart. 

- The counter is online if the reception signal at the top right of the display is permanently on and black after approx. 1 minute.

- Briefly check whether the counter is online in the Cloud.

- Check whether a [firmware update](/) is available. If so, update all meters.


Behaviour if the meter does not come online:

- At the top right of the screen, the reception signal alternates between X and reception for more than 2 minutes after the restart without coming online.

- If this does not help, call support.


![Meter offline – figure 3](/img/_en/troubleshooting-meter-offline/03.gif)

### Check on arrival

The following points can be checked on arrival. If something has already been changed at the meter, it is important that no further changes are made at the meter for at least 5 minutes. It is also possible to request a 30-second video of the meter from the customer on site to better limit these steps.

![Meter offline – figure 4](/img/_en/troubleshooting-meter-offline/04.gif)

Counter alternates between X and reception symbol:

- Check whether pressing the T1 button for 10 seconds causes the reception symbol on the display to change between light and dark. If this is not the case, please call support.

- Solution 1: Press T1 and T2 simultaneously: The counter should go dark briefly. Wait 1 minute and check whether the meter is online again.

- Solution 2: Install the meter again. Please select the target account and do not delete the counter in the account under any circumstances.

- Solution 3: Call support 


Translated with DeepL.com (free version)Display is dark

- Solution 1: Check that at least phase 1 and neutral are connected correctly. 

- Solution 2: If it is possible without too much effort, remove the fuse and reinsert it. 

- Solution 3: If the display is still permanently black after solutions 1 and 2, the meter is defective. In this case, an [RMA](/) request form can be filled out (error description: display dark code:dd).


Display keeps getting dark

- Description of the problem: The counter displays something. After a moment it does not show anything for a few seconds. Then it comes back, etc...

- Solution 1: Check if the neutral is connected and wired correctly. 

- Solution 2: Call support


Meter generates a local WLAN for more than 5 minutes

- How do I recognise this condition: Reception signal at the top right of the display alternates between reception light and dark.

- In this case, it indicates that the T1 key is jammed.

- Solution 1: Try to unjam the T1 key. 

- Solution 2: Fill out an [RMA](/) request form (error description: key T1 jammed code:tk).


Counter permanently displays an X in the upper right-hand corner

- Solution 1: Check whether the display keeps going dark. If this is the case, please read the solution in the upper section "Display always dark again".

- Solution 2: Restart the counter (see description above).

- Solution 3: If it is possible without too much effort, remove the fuse and insert it again. 

- Solution 4: If the X is still permanently displayed after solutions 1 and 2, the meter is defective. In this case, an [RMA](/) request form can be filled out (error description: X is always displayed Code:xx).


The meter cannot connect to the WLAN

- Reception signal at the top right of the display alternates between reception and X.

- Solution 1: Restart the meter (see description above).

- Solution 2: This must only be used if there is no other meter online in the vicinity. Use your smartphone to create a hotspot with the same SSID and password as the existing WiFi. Then restart the meter again and check whether it then connects via the hotspot from the smartphone. If the meter connects via the hotspot, this indicates a problem with the WLAN router or access point. It should be noted that most smartphones do not allow more than five devices to connect via the hotspot.

- Solution 3: If it is possible without too much effort, remove the backup and reinsert it. 

- Solution 4: Call support


## 3 Phase Meter 80A (old version)

Serial number starts with 60\*

### Restart meter:

This is just for info on how it is done, it may be required below to restart the meter to bring it back online. 

Force restart: 

- Press T1 and T2 for 10 seconds. The display shows 888888 for 1-2 seconds.


How do I recognise the restart?

- The counter display shows 888888 for 1-2 seconds.


Behaviour when the counter comes back online:

- At the top left of the screen, the WiFi signal changes between WiFi with and without an exclamation mark immediately after the restart.

- The counter is online if, after approx. 1 minute, the WiFi signal at the top left of the display is permanently shown without an exclamation mark.

- Briefly check whether the meter is online in the cloud.

- Check whether a [firmware update](/) is available. If so, update all meters.


Behaviour if the meter does not come online:

- At the top left of the screen, the WiFi signal alternates between WiFi with and without an exclamation mark for more than 2 minutes after the restart without coming online.

- If this does not help, call support.


### Check on arrival

The following points can be checked on arrival. If something has already been changed at the meter, it is important that no further changes are made at the meter for at least 5 minutes. It is also possible to request a 30-second video of the meter from the customer on site to better limit these steps.

![Meter offline – figure 5](/img/_en/troubleshooting-meter-offline/05.gif)

Meter is dark

- Solution 1: Check that at least phase 1 and neutral are connected correctly. 

- Solution 2: If it is possible without too much effort, remove the fuse and reinsert it. 

- Solution 3: If the meter is still permanently black after solutions 1 and 2, the meter is defective.


888888 is shown on the display

- Solution 1: Restart the counter.

- Solution 2: If it is possible without too much effort, remove the fuse and insert it again. 

- Solution 3: If 888888 is still displayed after solutions 1 and 2, the counter is defective.


Counter generates a local WLAN for more than 5 minutes

- How do I recognise this condition: WiFi signal at the top left of the display is shown alternately with and without an exclamation mark.

- In this case, this indicates a jammed T1 key.

- Solution 1: Try to unjam the T1 key.

- Solution 2: If a local WLAN is still generated after solution 1, the meter is defective.


The meter cannot connect to the WLAN

- How do I recognise this condition: WiFi signal at the top left of the display is shown with an exclamation mark.

- Solution 1: Restart the meter (see description above).

- Solution 2: Use your smartphone to create a hotspot with the same SSID and password as the existing WiFi. Then restart the meter again and check whether it then connects via the hotspot from the smartphone. If the meter connects via the hotspot, this indicates a problem with the WLAN router or access point. It should be noted that most smartphones do not allow more than five devices to connect via the hotspot.

- Solution 3: If it is possible without too much effort, remove the backup and reinsert it. 

- Solution 4: Call support


## Kamstrup

Serial number starts with 92\*: Kamstrup

### Restart meter

- This is just for info on how to do it, it can be requested below. 

- Procedure: Remove the module from the meter. Wait until no LED is lit. Insert the module back into the meter.


### How do I know the reception status of a meter?

- Connected to the WLAN: Orange left LED and green right LED are lit continuously.

- Cannot connect to WLAN: to be defined

- Meter creates a local WLAN: Orange LED Left are on continuously and. Red LED in the middle and reason LED on the right light up alternately every 0.5 seconds.


### Check on arrival

The following points can be checked on arrival. If something has already been done to the meter, it is important that nothing is done to the meter for at least 5 minutes. It is also possible to request a video of the meter from the customer on site (30 seconds) to narrow down these steps.

Check the status with the video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) or [https://vimeo.com/688374505](https://vimeo.com/688374505)

Chapter: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

Chapter: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN is not created

Chapter: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing fast

Chapter: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light

## Bauer Station

- The symbol in the smart-me portal is a petrol station symbol and not a lightning bolt

- Serial number starts with 60\*: 3 phase meter 80A (old)

- Serial number starts with 62\*: Telstar 80A (new)


### Check on arrival

Call support. Instruction in progress.
