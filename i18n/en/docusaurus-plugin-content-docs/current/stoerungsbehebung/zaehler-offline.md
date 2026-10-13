---
title: 'Meter offline'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'This page explains the known steps for bringing an offline smart-me electricity meter back online.'
sidebar_label: 'Meter offline'
---
This page explains the known steps for bringing an offline smart-me electricity meter back online. 

## Good to know

### How do I tell whether a meter is offline?

A smart-me meter is offline if it has not reported to the cloud for more than 15 minutes. To check, look at the last connection of the meter.

![Last connection](/img/stoerungsbehebung-zaehler-offline/01.png)

![Meter offline – Figure 2](/img/stoerungsbehebung-zaehler-offline/02.png)

System health (Systemgesundheit) also gives you an overview of all devices

### Firmware version (Telstar 80A and Telstar CT)

Up to and including FW versions 1.16 and 1.17, various changes were made to the Telstar CT and Telstar 80A to make the WiFi connection more stable. For this reason, we recommend that you always check whether the meter is running the latest version and update it if necessary. [Firmware update](/konfiguration/firmware-update) 

If a meter with the latest firmware version is offline while neighbouring meters are online, please report it to us.

### How do I save a new network on the smart-me device?

See "Reinstalling the meter" below

### Reinstalling the meter

Reinstalling the meter lets you save a new WiFi network on it. You must do the installation from the account in which the meter is offline. The smart-me Cloud recognises known devices and adds new data without changing the existing data.

The reinstallation follows the same procedure as described in [Commissioning](/konfiguration/inbetriebnahme). In the app, tap the + at the top right and install the device again. The new SSID and password are then saved on the device automatically. Make sure that you are logged in to the correct account.

### Narrowing down the problem

First, find out roughly where the connection problem lies. If several meters lose their connection (go offline) at about the same time, the problem is probably the access point, the router or the internet connection.

Possible problems:

- The access point or router has a problem. Restarting the router or access point can help in this case. After the restart, our devices should normally reconnect to the smart-me Cloud within a few minutes.

- A new internet provider was activated or a new SSID (name of the WiFi network) was set up. In this case, you must save the new network on every smart-me device so that they can reconnect.

- With mobile internet connections, the subscription may not have been paid. Make sure that the mobile internet payments are up to date.


If only a single meter or a small group of meters has lost the connection, the problem is usually with the affected smart-me meter itself.

## Bringing a meter back online

The following instructions describe a standard procedure for bringing a meter back online. 

Please note the following prerequisites:

- This procedure assumes that the internet connection is configured correctly and meets all requirements.

- Make sure that another meter in the same account is online that, according to the planning, should be connected to the same router or access point. This rules out the internet hardware and its requirements as the cause of the problem.


### Telstar 80A and Telstar CT

- Serial number starts with 63\*: Telstar 80A

- Serial number starts with 62\*: Telstar CT


1.  ### Restarting the meter


This section is only here to show how to do it. Further down, you may be asked to restart the meter to bring it back online. 

Forcing a restart: 

- Press T1 and T2 for 10 seconds. The display briefly goes off during the restart.


How to recognise the restart:

- The meter briefly goes dark and the display shows nothing.


What happens when the meter comes back online:

- Right after the restart, the signal indicator at the top right of the screen switches between X and the signal symbol. 

- The meter is online when, after about 1 minute, the signal indicator at the top right of the display stays on permanently and is black.

- Quickly check whether the meter is online in the cloud.

- Check whether a [firmware update](/konfiguration/firmware-update) is available. If so, update all meters.


What happens when the meter does not come back online:

- After the restart, the signal indicator at the top right of the screen switches between X and the signal symbol for more than 2 minutes without the meter coming online.

- If this does not help, call support.


![Meter offline – Figure 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Checks on arrival

You can check the following points when you arrive on site. If something has already been changed on the meter, do not make any further changes to the meter for at least 5 minutes. You can also ask the customer on site for a 30-second video of the meter so you can better assess the situation. 

![Meter offline – Figure 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

### Meter switches between X and the signal symbol:

- Check whether pressing T1 for 10 seconds makes the signal symbol on the display switch between bright and dark. If it does not, please call support.

- Solution 1: Press T1 and T2 at the same time: the meter should briefly go dark. Wait 1 minute and check whether the meter is back online.

- Solution 2: Reinstall the meter. Select the target account and under no circumstances delete the meter in the account.

- Solution 3: Call support 


### Display is dark:

- Solution 1: Check that at least phase 1 is connected

- Solution 2: Check that the neutral conductor is connected correctly. 

- Solution 3: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 4: If the display is still permanently black after solutions 1 and 2, the meter is defective. In this case, you can fill in an [RMA application form](/rma-antragsformulare) (fault description: Display Dunkel Code:dd).


Display keeps going dark:

- Description of the problem: The meter shows something. After a moment, it shows nothing for a few seconds. Then the display comes back, and so on...

- Solution 1: Check whether the neutral conductor is connected and wired correctly. 

- Solution 2: Call support 


Meter creates a local WiFi network for more than 5 minutes:

- How to recognise this state: The signal indicator at the top right of the display alternates between a bright and a dark signal symbol.

- This indicates that button T1 is stuck.

- Solution 1: Try to free button T1. 

- Solution 2: Fill in an [RMA application form](/rma-antragsformulare) (fault description: Taste T1 klemmt Code:tk).


Meter permanently shows an X at the top right:

- Solution 1: Check whether the display keeps going dark. If it does, see the solution in the section "Display keeps going dark" above.

- Solution 2: Restart the meter (see description above)

- Solution 3: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 4: If an X is still shown permanently after solutions 1 and 2, the meter is defective. In this case, you can fill in an [RMA application form](/rma-antragsformulare) (fault description: X wird immer angezeigt Code:xx).


Meter cannot connect to the WiFi:

- The signal indicator at the top right of the display alternates between the signal symbol and X.


- Solution 1: Restart the meter (see description above)

- Solution 2: Only use this if no other meter nearby is online. Use your smartphone to create a hotspot with the same SSID and password as the existing WiFi. Then restart the meter again and check whether it connects via the smartphone hotspot. If the meter connects via the hotspot, this indicates a problem with the WiFi router or access point. Note that most smartphones allow a maximum of five devices to connect via the hotspot.

- Solution 3: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 4: Call support 


## 3-Phase 80A (old version)

- Serial number starts with 60\*: 3-Phase 80A


1.  ### Restarting the meter


This section is only here to show how to do it. Further down, you may be asked to restart the meter to bring it back online. 

Forcing a restart: 

- Press T1 and T2 for 10 seconds. The display shows 888888 for 1-2 seconds.


How to recognise the restart?

- The meter\-display shows 888888 for 1-2 seconds.


What happens when the meter comes back online:

- Right after the restart, the WiFi signal at the top left of the screen switches between WiFi with and without an exclamation mark.

- The meter is online when, after about 1 minute, the WiFi signal at the top left of the display is shown permanently without an exclamation mark.

- Quickly check whether the meter is online in the cloud.

- Check whether a [firmware update](/konfiguration/firmware-update) is available. If so, update all meters.


What happens when the meter does not come back online:

- After the restart, the WiFi signal at the top left of the screen switches between WiFi with and without an exclamation mark for more than 2 minutes without the meter coming online.

- If this does not help, call support.


### Checks on arrival

You can check the following points when you arrive on site. If something has already been changed on the meter, do not make any further changes to the meter for at least 5 minutes. You can also ask the customer on site for a 30-second video of the meter so you can better assess the situation. 

![Meter offline – Figure 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

Meter is dark:

- Solution 1: Check that at least phase 1 and the neutral conductor are connected correctly. 

- Solution 2: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 3: If the display is still permanently black after solutions 1 and 2, the meter is defective.


888888 is shown on the display:

- Solution 1: Restart the meter

- Solution 2: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 3: If 888888 is still shown after solutions 1 and 2, the meter is defective.


Meter creates a local WiFi network for more than 5 minutes:

- How to recognise this state: The WiFi signal at the top left of the display is shown alternately with and without an exclamation mark.

- This indicates that button T1 is stuck.

- Solution 1: Try to free button T1

- Solution 2: If a local WiFi network is still created after solution 1, the meter is defective.


Meter cannot  connect to the WiFi:

- How to recognise this state: The WiFi signal at the top left of the display is shown with an exclamation mark.


- Solution 1: Restart the meter (see description above)

- Solution 2: Use your smartphone to create a hotspot with the same SSID and password as the existing WiFi. Then restart the meter again and check whether it connects via the smartphone hotspot. If the meter connects via the hotspot, this indicates a problem with the WiFi router or access point. Note that most smartphones allow a maximum of five devices to connect via the hotspot.

- Solution 3: If it can be done without much effort, remove the fuse and reinsert it. 

- Solution 4: Call support


## Bauer station

- The icon in the smart-me portal is a petrol station symbol, not a lightning bolt

- Serial number starts with 60\*: 3-Phase Meter 80A (old)

- Serial number starts with 62\*: Telstar 80A (new)


### Checks on arrival

- -   Call support. Instructions in progress.


## Connection quality

### Pico WiFi signal quality

From FW version 0.0.18, the WiFi signal quality is shown in the smart-me portal. [Firmware update](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Any account can retrieve this information via the [API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) with the command "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico: WiFi (0 = unknown, -1 to -49 = excellent,  -50 to  -59 = very good,  -60 to -69 = good, -70 to -99= low) (-99 poor, -1 good)

    - Pico: Mobile (0 = unknown, 1 to -74 = excellent, -75 to -84 = good,  -85 to -94 = low) (-99 poor, -1 good)




![Meter offline – Figure 6](/img/stoerungsbehebung-zaehler-offline/06.png)

### Gold partners can check the connection type and quality of Telstar and Pico online.

- Log in to the Gold partner account

- Configuration (Konfiguration)

- Partner (Partner)

- Device management (Geräteverwaltung) (may take a while if there are many devices)

- A new column with the connection type is shown

- The quality is shown in brackets.

    - Telstar: WiFi &lt;= 40 can lead to unstable connections (0 poor / 100 good)

    - Pico: WiFi (0 = unknown, -1 to -49 = excellent,  -50 to  -59 = very good,  -60 to -69 = good, -70 to -99= low) (-99 poor, -1 good)

    - Pico: Mobile (0 = unknown, 1 to -74 = excellent, -75 to -84 = good,  -85 to -94 = low) (-99 poor, -1 good)


Any account can retrieve this information via the [API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) with the command "GET /api/AdditionalDeviceInformation/&#123;id&#125;".



![Meter offline – Figure 7](/img/stoerungsbehebung-zaehler-offline/07.png)
