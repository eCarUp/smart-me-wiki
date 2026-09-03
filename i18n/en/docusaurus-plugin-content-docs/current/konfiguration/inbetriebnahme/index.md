---
title: 'Commissioning'
slug: '/konfiguration/inbetriebnahme'
description: 'Everything about commissioning smart-me devices: What should be considered during commissioning, common sources of errors and specific answers to installation questions.'
sidebar_label: 'Commissioning'
---
Everything about commissioning smart-me devices: What should be considered during commissioning, common sources of errors and specific answers to installation questions.

[Delete meter](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Commissioning LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Preparation

The following points need to be addressed before the commissioning

## WiFi requirements

- WiFi 802.11 b/g/n with 2.4 GHz (No 5GHz or combined network with the same SSID)

- Port 80 UDP and 53 UDP/TCP need to be open for outbound connections.

- The network must be connected to the Internet.

- The SSID must not be hidden. 

- The SSID only supports ASCII symbols excluding $ (Ä, Ö, Ü do not work).

- MAC address filters must be deactivated during installation. (The MAC addresses of the devices can only be read by ARP).

- The network requires a DHCP server.


## smart-me Account

We recommend creating an account in advance and separately for each installation. No licences are required for commissioning.

## Installer App

The free Installer app must be installed on your smartphone and the necessary permissions must be granted.

iOS: Location, Local Network, Camera

Android: Location, Camera

## Special Tools

- Pico: An RFID card (supplied)

- Telstar 80A, CT and M-Bus Gateway: A small screwdriver to press the T1 button


![Commissioning – figure 1](/img/_en/configuration-commissioning/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/)

## Installation

## Connect the device to the cloud

1.  Check WiFi requirements (see above)

2.  Download the free app for [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) or [IOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Grant permissions to the app

4.  Connect your smartphone or tablet to the WiFi network where you want to install the smart-me device.

5.  Start the app, log in with correct acocunt or create an account.

6.  In the menu, use Diagnostics to check whether the servers are accessible.

7.  Click on 'Install device' (+) in the bottom right-hand corner.

8.  For installations with WiFi, this can be added at the top.

9.  Click on 'Add device' (+) in the bottom right-hand corner.

10.  Scan the QR code.

11.  For Pico,  select whether you want to use WiFi or mobile (4G)

12.  Select 'Connect to device WiFi'

13.  Press T1 or hold up the RFID card. Note: The Pico must be installed within 15 minutes of switching on the power.

14.  Select 'WiFi quick-connect'

15.  Wait until you are prompted to connect to smart-me\_xxxxxx.

16.  Wait until the installation is complete.

17.  Assign a name

18.  Device-specific settings

     - Telstar CT: Set the transformer ratio (select CT / Edit / Enter transformer ratio)

     - M-Bus: The search must be started via the web portal (Gear Icon / Start search)

     - Kamstrup: Meter key (Three gear icon / Meter key / Save)


If the installation fails, please follow the detailed instructions, including the error description.

## Detailed instructions incl. error description

![Commissioning – figure 2](/img/_en/configuration-commissioning/02.jpg)

1.  ### Connect your smartphone to the WiFi network from which you want to install the smart-me hardware.


![Commissioning – figure 3](/img/_en/configuration-commissioning/02.jpg)

### 2\. Log in or create a new account

![Commissioning – figure 4](/img/_en/configuration-commissioning/04.jpg)

### 3\. Account creation

Possible problems:

- If the email address is already in use, a different one must be used.


![Commissioning – figure 5](/img/_en/configuration-commissioning/05.jpg)

### 4\. Account login

Possible problems:

- If you are unable to log in, please check whether the WiFi has an internet connection.

- If you are unable to log in, the username or password may be incorrect.


### 5\. Diagnostics

This step is optional

- It is important that the servers are set to Yes.

- If the warning about the 5 GHz network appears, you must ensure that a 2.4 GHz network is also created. It is not possible to force the smartphone to connect to the 2.4 GHz network. For this reason, a warning appears.


![Commissioning – figure 6](/img/_en/configuration-commissioning/06.jpg)

### 6\. Click on ‘Add device’ (+)

![Commissioning – figure 7](/img/_en/configuration-commissioning/07.jpg)

### 7\. Go to ‘Edit’ for the Wi-Fi SSID.

Note

- This step can be ignored if Picos are put into operation via 4G.


![Commissioning – figure 8](/img/_en/configuration-commissioning/08.jpg)

### 8\. Enter the Wi-Fi password

Possible problems:

- If the SSID is displayed as &lt;&lt;unknown>>, location services must be enabled and the smartphone must be connected to a Wi-Fi network.


![Commissioning – figure 9](/img/_en/configuration-commissioning/09.png)

### 9\. Click on ‘Add device’ (+)

![Commissioning – figure 10](/img/_en/configuration-commissioning/10.jpg)

### 10\. Scan the device's QR code.

Possible problems:

- If the QR code is not recognised, the serial number can also be entered manually.


![Commissioning – figure 11](/img/_en/configuration-commissioning/11.jpg)

### 11\. Connect to the meter's Wi-Fi

![Commissioning – figure 12](/img/_en/configuration-commissioning/12.jpg)

### 12\. Only for Pico ‘Select connection type’

![Commissioning – figure 13](/img/_en/configuration-commissioning/13.jpg)

### 13\. Press the T1 button or scan the RFID tag.

Note for Pico: Please note that you have 15 minutes per Pico to complete the installation process. Otherwise, you will need to restart the Pico and begin the process again.



![Commissioning – figure 14](/img/_en/configuration-commissioning/14.jpg)

### 14\. Wait until connection is successful

## Device-specific Settings

## Telstar CT

### Set transformer ratio

- Select and edit CT meter

- Enter transfomer ratio

- The transformer ratio can be locked. This serves as protection against unwanted changes by unauthorised persons. In order to unlock the transformer ratio, the device must be reinstalled using the smart-me app.


### Note:

The conversion ratio does not change historical data. Therefore, this step should be performed immediately after commissioning.

![Commissioning – figure 15](/img/_en/configuration-commissioning/15.jpg)

## M-Bus Gateway / Sirius

### Instructions for both M-Bus gateways

Attention: It is absolutely essential that the devices are online before the tenants move in. This is the only way to evaluate the counter readings over the time axis.

Hardware installation steps:

1.  Install device (wire M-Bus, apply voltage)

2.  Complete the installation according to the instructions using the App. (Link hardware with Wifi and target account. Wifi 2.4GHz)

3.  Start the "automatic search" under configuration in the App or on the desktop to find the devices.


The commissioning of the heat and water meters will be carried out by the supplier (e.g. Neovac, Ista, GWF, Techem etc.). These companies usually have their own M-Bus master connected in the technical room so that they can check whether the meters are arriving on the M-Bus.

Afterwards, a commissioning protocol is created and then our M-Bus gateway is reconnected.

With the documents, the respective meters can then be added to the correct user units on the smart-me cloud and the configuration can be completed.

The following information will be needed:

- List of all installed meters

- M-Bus address (we only need the secondary address, we do not need the primary address)

- Affiliation to apartment (apartment name)

- Type of meter (heat, hot or cold water, etc.)


Important: The secondary address must be unique per smart-me account and the combination of the last 4 numbers must be unique to the account in case of heat/cold-combination counters. The easiest way is to use the device serial number.

Result of the automatic search 

![Commissioning – figure 16](/img/_en/configuration-commissioning/16.png)

Automatic counter creation after search  (takes some minutes)

![Commissioning – figure 17](/img/_en/configuration-commissioning/17.png)

### Numbering for combination counter

The M-Bus gateway only recognizes a meter with the secondary address, which is usually also listed on the acceptance report.

The combined meters are then displayed separately on the portal. For this application, smart-me uses its own numbering logic.

All meters that are not relevant for billing can be deactivated to save license costs. Deleting them is not expedient, as the meter will appear again and again.

If a meter contains more than 1 meter, these are numbered as follows:

- Main meter = secondary address of the M-Bus gateway list (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first number is deleted (e.g. 7) and a number is incremented at the end (e.g. 14401451,14401452).

- Sub-counter = These contain the last four digits of the main counter (e.g. 0145) and a four-digit enumeration number at the end (e.g. 01450001)


![Commissioning – figure 18](/img/_en/configuration-commissioning/18.png)

![Commissioning – figure 19](/img/_en/configuration-commissioning/19.png)

### Search for M-Bus gateway devices.

Further configurations must be made in the web portal.

Edit.

- Change the interval. The M-Bus requires 10 seconds per device for reading.


Start device search on the M-Bus gateway.

1.  Click on the gear icon (settings) in the top right corner. 

2.  Search for devices.

3.  Confirm the search with ‘Yes’.


Note: The search may take several minutes.

Gateway does not find all meters.

3.  -   Restart the search (1-2 times). It is possible that the meter is not always found during the first search.

    - Further causes can be found on the M-Bus gateway malfunctions page. 


Gateway finds more meters than were installed.

3.  -   Mostly during commissioning: Depending on the M-Bus meter, it can create several sub-meters. These can be recognised by the fact that the serial number is shifted one digit to the left, followed by an ascending number. Starting with 1. Example: Main meter 00200001, sub-meter 02000011

    - Further causes can be found on the M-Bus gateway faults page. 


![Commissioning – figure 20](/img/_en/configuration-commissioning/20.png)

### Prevent M-Bus gateway from detecting new devices

How is the option activated?

- Select M-Bus Gateway.

- Select the M-Bus Gateway cogwheel (top right). Note: Do not select the upper cogwheel, which is used for configuring the meters, but the lower one.

- Edit

- Tick the box next to ‘Don't allow to add additional meters’.

- Save


What does this option do?

- Activating the ‘Don't allow to add additional meters’ option prevents devices that are not yet in the cloud from being saved. 


What should be noted?

- When new devices are added, this option must be deactivated again before searching.


When is this option recommended?

- When M-Bus devices that do not exist keep appearing in the portal.

- For preventive reasons :-)


In which cases can this happen?

- In the event of errors in data transmission. This occurs more frequently if the M-Bus cable is too long, reducing the quality of data transmission, or if the cable is poorly shielded or exposed to external interference.


Technical explanation

- The standardised M-Bus protocol only has 1 byte for the checksum. The checksum is intended to detect certain errors in data transmission. Unfortunately, 1 byte is not enough and can repeatedly lead to an incorrect data packet being considered correct and good. In some installations where M-Bus gateways are used, this repeatedly leads to corrupt packets being classified as correct and good, which are then recognised and added to our cloud as new M-Bus devices. The account then drops from Professional to Basic, as licence coverage is no longer guaranteed.


![Commissioning – figure 21](/img/_en/configuration-commissioning/21.png)

## Pico e-charging station

### Check Pico Wi-Fi connection.

After installing the Pico, an icon appears in the upper right corner, which provides information about the connection type.

If the Pico is to be connected to Wi-Fi, it is advisable to quickly check whether the icon corresponds to a Wi-Fi symbol and not 4G. 

If 4G appears even though the Pico should be connected to Wi-Fi, you will need to reinstall the Pico. This can happen if a step during installation was not performed correctly, e.g. Wi-Fi password.

![Commissioning – figure 22](/img/_en/configuration-commissioning/22.png)

### Pico Configuration and Multilevel Load Management

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Multilevel load management](/konfiguration/multilevel-lastmanagement) 

![Commissioning – figure 23](/img/_en/configuration-commissioning/22.png)

## Tips and tricks

### Commissioning multiple devices

In this step, you have the option of commissioning multiple meters simultaneously to speed up the commissioning process for large numbers of meters.

### Log out

1.  Select the three lines and Profile in the top left corner.

2.  Select Log out at the bottom.

3.  Logged out.


![Commissioning – figure 24](/img/_en/configuration-commissioning/24.jpg)

![Commissioning – figure 25](/img/_en/configuration-commissioning/25.jpg)

### Installation failed

If the installation fails and you want to try again, please close the app completely and then reopen it. This will ensure that no cached information is used.

## Next step

[Go to folder and meter configuration](/konfiguration/ordnerkonfiguration)

## FAQ

### How can I restart a device (reboot)?

All devices can be restarted with a power interruption.

3 phase meter: Press T1 and T2 simultaneously for 10 seconds.

Pico: In the portal top right select the cogwheel, advanced actions, restart. Only works if the pico is online.

Kamstrup modules: Remove the module from the meter, wait 10 seconds and plug it back in.

M-Bus gateway and 1 phase meters: These devices can only be restarted with a power interruption.

### Can I use my device with multiple WiFi networks?

Yes, the smart-me device (except the [Pico charging station](/produkte/pico-ladestation)) stores up to 3 different WiFi networks. You only need to install it once on each network and then the device will automatically select the network with the best wireless connection.

### Can I reset the counter reading to zero?

No, as our meters are used for billing purposes, it is not possible to reset them.

### Where is the WiFi password saved?

The WiFi password is only stored on the smart-me device. It is never transmitted to a server.

### Are the settings and meter readings saved in case of power failure?

Yes, the unit saves all settings and values in the event of a power failure. When the power is restored, the unit reconnects to the WiFi and everything is as it was before the failure.

### How can I store a new WiFi without losing the existing data?

To add another network, the unit must be installed normally. If it is not deleted from the cloud beforehand, it will not lose any energy data and configuration settings.

### Can the stored WiFi information be deleted?

The WiFi information is only stored on the unit. Deleting the data can be done as follows:

- Press the button on the smart-me device for 10 seconds. In the case of pico, the RIFD cards must be held down for at least 15 minutes after the restart (power off).

- Connect to the smart-me WiFi with a smartphone (the name of the WiFi network is smart-me\_XXXXXX where the X is the serial number of the smart-me device).

- Connect to the IP 192.168.1.1 with a browser.

- Select the undesired WLAN, press remove and restart the device.


### How do I find out the MAC address of my smart-me device?

There is no direct way to find out the MAC address. If you have a Professional licence, you can activate DNS in the advanced settings of the smart-me device and select the option Internal IP. With a ping on the DNS name, the IP can be determined, which can then be compared with the IP / MAC table on the router.

### Can the mesh network be deactivated?

3-phase meters Telstar and Telstar CT create a mesh network. This cannot be deactivated.

### Can I move a device from one smart-me account to another?

- The historical data cannot be moved. 

- The unit can be installed with a new installation in another account.


### With which meter reading is a smart-me meter delivered?

0

### At what interval do the meters send data?

3-phase meter 80A Telstar, Telstar CT and Pico: 

- Every 15 minutes, i.e. at xx:00:00 xx:15:00, xx:30:00 and xx:45:00. This sends the necessary data for the load profile. This data is stored locally and forwarded in the event of a connection interruption.

- In addition, at least every 330 seconds.

- Then, when one of the following events occurs:

    - Meter reading change greater than 100Wh

    - Power change greater than 100W

    - Current change greater than 1A

    - Voltage change greater than 1V

    - Every second when the counter is selected in the GUI (smart-me portal)


M-Bus Gateway

- According to the set interval, the data is read sequentially on each M-Bus meter. The reading of one meter takes approx. 3 seconds. The meters are read in the order in which they are listed under the M-Bus gateway.


Kamstrup module and 3-phase meter 80A/32A:

- Every 15 minutes, i.e. at xx:00:00 xx:15:00, xx:30:00 and xx:45:00. This sends the necessary data for the load profile. This data is stored locally and forwarded in the event of a connection interruption.

- In addition to this, an individual configuration can be made:

    - With Basic or Limited licences: Max. 1x per minute.

    - With Pro licensing: Max. 1x per second


 1-Phase Meter 80A and 1-Phase Meter 32A

- With Basic or Limited licences: Max. 1x per minute.

- With Pro licensing: Max. 1x per second


### What happens when I deactivate a meter?

All data already stored in the cloud is retained. After deactivation, no further data is stored. No licence costs are incurred for deactivated meters.

### Can a proxy be configured on the smart-me devices?

No
