---
title: 'Commissioning'
slug: '/konfiguration/inbetriebnahme'
description: 'Everything about commissioning smart-me devices: what to consider during commissioning, common sources of error and specific answers to installation questions.'
sidebar_label: 'Commissioning'
---
Everything about commissioning smart-me devices: what to consider during commissioning, common sources of error and specific answers to installation questions.

[Commissioning LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Delete / deactivate meter](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continue to Folder and Meter Configuration](/konfiguration/ordnerkonfiguration)

## Preparation

The following must be in place before commissioning

## WiFi requirements

- WiFi 802.11 b/g/n 2.4GHz (no 5GHz or combined network with the same SSID)

- Port 80 UDP and 53 UDP/TCP must be open to the outside.

- The network requires an internet connection.

- The SSID must not be hidden.

- The SSID only supports ASCII characters, excluding $ (Ä, Ö, Ü do not work)

- MAC address filters must be disabled during installation. (The MAC addresses of the devices can only be read out via ARP)

- The network requires a DHCP server

- SSID max. 28 characters

- Password max. 63 characters

## smart-me account

We recommend creating an account in advance and a separate one for each installation. No licenses are required for commissioning.

## Installer App

The free Installer App must be installed on your smartphone and the necessary permissions must be granted.

IOS: Location, Local Network, Camera

Android: Location, Camera

## Special tools

- Pico: An RFID card (supplied)

- Telstar 80A, CT and M-Bus Gateway: A small screwdriver to press the T1 button

![Commissioning – Figure 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/konfiguration/installer-app-anleitung)

## Installation

## Quick guide

1.  Check the WiFi requirements (see above)

2.  Download the free app for [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) or [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Grant the app permissions

4.  Connect your smartphone or tablet to the WiFi network in which you want to install the smart-me device.

5.  Start the app and log in with the corresponding account or create an account.

6.  In the menu, use Diagnostics (Diagnose) to check whether the servers are reachable.

7.  Click "Install device" („Gerät installieren“) (+) at the bottom right

8.  For an installation via WiFi, the network can be added at the top.

9.  Click "Add device" („Gerät hinzufügen“) (+) at the bottom right

10.  Scan the QR code

11.  For Pico, select whether you want to use WiFi or mobile (4G).

12.  Select "Connect to device WiFi" ("Verbinde mit WLAN des Gerätes")

13.  Press T1 or hold up the RFID card. Note: The Pico must be installed within 15 minutes of switching on the power.

14.  Select "WLAN quick connect"

15.  Wait until you are prompted to connect to smart-me\_xxxxxx.

16.  Wait until the installation has been completed successfully.

17.  Assign a name.

18.  Device-specific settings

     - Telstar CT: Set the transformer ratio (select CT / edit / enter transformer ratio)

     - M-Bus: The search must be started via the web portal (gear icon / Start search (Suchlauf starten))

     - Kamstrup:  Meter key (three gear icons / Meter key (Zählerschlüssel) / Save (speichern))

If the installation fails, please follow the detailed instructions including error descriptions.

## Detailed instructions including error descriptions

![Commissioning – Figure 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. WIFI connection

![Commissioning – Figure 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Creation / connection

![Commissioning – Figure 4](/img/konfiguration-inbetriebnahme/04_EN.jpg)

### 3\. Account creation

Possible problems:

If the email address is already in use, a different one must be used.

![Commissioning – Figure 5](/img/konfiguration-inbetriebnahme/05_EN.jpg)

### 4\. Account login

Possible problems:

- If login is not possible, please check whether the WiFi has an internet connection

- If login is not possible, the username or password may be incorrect.

![Commissioning – Figure 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnostics

This step is optional.

- It is important that the servers reachable are set to Yes.

- If the warning about the 5 GHz network appears, you must make sure that a 2.4 GHz network is also provided. It is not possible to force the smartphone to connect to the 2.4 GHz network. For this reason, it appears as a warning.

![Commissioning – Figure 7](/img/konfiguration-inbetriebnahme/07_EN.jpg)

### 6\. Click "Add device" („Gerät hinzufügen“) (+)

![Commissioning – Figure 8](/img/konfiguration-inbetriebnahme/08_EN.jpg)

### 7\. Click "Edit" ("Editieren")

Note

- This step can be ignored if Picos are commissioned via 4G.

![Commissioning – Figure 9](/img/konfiguration-inbetriebnahme/09_EN.jpg)

### 8\. Enter the WiFi password

Possible problems:

- If the SSID is displayed as &lt;&lt;unknown>>, location must be enabled and the smartphone must be connected to a WiFi network.

![Commissioning – Figure 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Click "Add device" („Gerät hinzufügen“) (+)

![Commissioning – Figure 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scan the QR code

Possible problems:

- If the QR code is not recognized, the serial number can also be entered manually.

![Commissioning – Figure 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connect to the meter's WiFi

![Commissioning – Figure 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Pico only: "Select connection type" ("Verbindungsart auswählen")

![Commissioning – Figure 14](/img/konfiguration-inbetriebnahme/14_EN.jpg)

### 13\. Press the T1 button or scan RFID

Note for Pico: Please note that you have 15 minutes per Pico to complete the installation process. Otherwise, you must restart the Pico and start the process from the beginning.

![Commissioning – Figure 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Wait until the connection is successful

## Device-specific settings

## Telstar CT

### Set the transformer ratio

- Select the CT meter and edit it 

- Enter the transformer ratio 

- The transformer ratio can be locked. This serves as protection against unwanted changes by unauthorized persons. To unlock the transformer ratio,  the device must be installed again with the smart-me app.

### Note:

The transformer ratio does not change any historical data. This step should therefore be carried out immediately after commissioning.

![Commissioning – Figure 16](/img/konfiguration-inbetriebnahme/16_EN.jpg)

## M-Bus Gateway / Sirius

### Instructions for both M-Bus gateways

Hardware installation steps:

1.  Install the device (wire the M-Bus, apply voltage)

2.  Complete the installation with the app according to the instructions.
    (Link the hardware with the WiFi and the target account. WiFi 2.4GHz)

3.  Under configuration in the app or on the desktop, start the  "automatic search" ("automatischen Suchlauf") to find the devices.

The commissioning of the heat meters and water meters, on the other hand, continues to be carried out by the supplier (e.g. Neovac, Ista, GWF, Techem, etc.). In most cases, these companies connect their own M-Bus master in the technical room so that they can check whether the meters are actually reachable on the M-Bus.

A commissioning report is then created, and only after that is our M-Bus Gateway reconnected.

With the corresponding documents, the respective meters can then be assigned to the correct apartments in the smart-me Cloud and the configuration can be completed.

The required information

- List of all installed meters

- M-Bus address (we only need the secondary address, the primary address is not relevant for us)

- Assignment to the apartment (apartment designation)

- Meter type (heat, domestic hot water or cold water, etc.)

Important: The secondary address must be unique per smart-me account; in addition, for combined heat/cooling meters, the combination of the last 4 digits must be unique in the account. The easiest way is to use the device serial number.

Result of the automatic search

![Commissioning – Figure 17](/img/konfiguration-inbetriebnahme/17.png)

Automatic meter creation after the search
(takes a few minutes)

![Commissioning – Figure 18](/img/konfiguration-inbetriebnahme/18.png)

### Numbering for combined meters

The M-Bus Gateway only recognizes one meter at a time based on the secondary address, which is usually also listed in the acceptance report.

The combined meters are then displayed separately on the portal. For this application, smart-me uses its own numbering logic.

All meters not relevant for billing can be [deactivated](/konfiguration/inbetriebnahme/zaehler-loeschen) to save license costs. Deleting is not effective, as the meter will keep reappearing.

If a meter contains more than 1 meter, they are numbered as follows:

- Main meter = secondary address from the list of the M-Bus Gateway (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first 1 or 2 digits are removed (e.g. 7) and a number is counted up at the end (e.g. 14401451,14401452).

- Submeters = these contain the last four digits of the main meter (e.g. 0145) and a four-digit sequential number at the end (e.g. 01450001)

Note on leading zeros: If a meter has, for example, the number 1000017, the leading zeros are not taken into account after truncation, e.g. 000017, and are appended at the end, e.g. 1700001

![Commissioning – Figure 19](/img/konfiguration-inbetriebnahme/19.png)

![Commissioning – Figure 20](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway search devices

Further configurations must be made in the web portal

Edit

- Change the interval. The M-Bus requires 10 seconds per device for reading.

Start a device search on the M-Bus Gateway

1.  At the top right, click the gear icon (Settings (Einstellungen)) 

2.  Search devices (Geräte suchen)

3.  Confirm the search with "Yes" ("Ja")

Note: The search can take several minutes.

Gateway does not find all meters

- Run the search again  (1-2x). The meter may not always be found in the first search run.

- Further causes can be found on the page [M-Bus gateway failures](/stoerungsbehebung/mbus-gateway-stoerungen) 

Gateway finds more meters than were installed

- Mostly during commissioning: Depending on the M-Bus meter, it can create several submeters. These can be recognized by the serial number being shifted one digit to the left, followed by an ascending number, starting with 1. Example: main meter 00200001, submeter 02000011

- Further causes can be found on the page [M-Bus gateway failures](/stoerungsbehebung/mbus-gateway-stoerungen) 

![Commissioning – Figure 21](/img/konfiguration-inbetriebnahme/21.png)

### Prevent the M-Bus Gateway from detecting new devices

How is the option enabled?

- Select the M-Bus Gateway.

- Select the M-Bus Gateway gear icon (top right). Note: Do not select the upper gear icon, which is used for configuring the meters, but the lower one.

- Edit (Bearbeiten)

- Tick "Don't allow to add additional meters".

- Save (Speichern)

What does this option do?

- Enabling the option "Don't allow to add additional meters" prevents devices that do not yet exist in the cloud from being saved. 

What should be considered?

- If new devices are added, this option must be disabled again before the search.

When is this option recommended?

- If M-Bus devices that do not exist keep appearing in the portal.

- For preventive reasons :-)

In which cases can this happen?

- In the case of errors in data transmission. This happens more often if the M-Bus cable is too long and the quality of data transmission decreases as a result, or if the cable is poorly shielded or exposed to external interference.

Technical explanation

- The standardized M-Bus protocol has only 1 byte for the checksum. The checksum is intended to detect certain errors in data transmission. Unfortunately, 1 byte is very little and can repeatedly lead to a faulty data packet being considered correct and good. In some installations using M-Bus gateways, this repeatedly results in corrupt packets being classified as correct and good, which are then detected and added as a new M-Bus device in our cloud. The account then drops from Professional to Basic, as license coverage is no longer guaranteed.

![Commissioning – Figure 22](/img/konfiguration-inbetriebnahme/22.png)

## Pico EV Charger

### Check the WiFi connection

After installing the Pico, an icon appears in the top right corner that indicates the connection type.

If the Pico is to be connected via WiFi, it is advisable to briefly check whether the icon corresponds to a WiFi symbol and not 4G. 

If 4G appears even though the Pico should be connected via WiFi, the Pico must be reinstalled. This can happen if a step was not carried out correctly during installation, e.g. the WiFi password.

![Commissioning – Figure 23](/img/konfiguration-inbetriebnahme/23.png)

### Pico configuration & load management

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Multilevel load management](/konfiguration/multilevel-lastmanagement) 

![Commissioning – Figure 24](/img/konfiguration-inbetriebnahme/23.png)

## Tips and tricks

### Commissioning multiple devices

In this step, you have the option of commissioning several meters at the same time to speed up commissioning when there are many meters.

![Commissioning – Figure 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Logging out

1.  At the top left, tap the three lines and select Profile (Profil)

2.  At the bottom, select Log out (Ausloggen)

3.  Logged out

![Commissioning – Figure 26](/img/konfiguration-inbetriebnahme/26_EN.jpg)

![Commissioning – Figure 27](/img/konfiguration-inbetriebnahme/27_EN.jpg)

### Installation failed

If the installation fails and you want to try again, please close the app completely and then reopen it. This ensures that no cached information is used.

## Next step

[Continue to Folder and Meter Configuration](/konfiguration/ordnerkonfiguration)

## FAQ

<details id="der-internetanbieter-wird-gewechselt-was-muss-ich-machen">
<summary>The internet provider is being changed, what do I need to do?</summary>

If the meters are connected to a technical WiFi network and/or a dedicated access point, the SSID and password usually do not change. In that case, changing the internet provider is usually not a problem.

If the SSID and password of a private WiFi network are used, there are two options:

- Solution 1: Set up a guest WiFi on the new router with the same SSID and password as the old one. The meters will then automatically connect to this WiFi, which is identical to the old one.

- Solution 2: Re-register each meter individually so that the new data is stored locally on each meter. The installation is carried out exactly like a new installation. The  meter must under no circumstances be deleted, as otherwise all historical data will be lost . When reinstalling, our cloud environment recognizes that the serial number already exists in the account and simply adds the new values.

</details>

<details id="wie-kann-ich-ein-gerät-neu-starten-reboot">
<summary>How can I restart (reboot) a device?</summary>

All devices can be restarted by interrupting the power supply.

3-phase meters: Press T1 and T2 simultaneously for 10 seconds.

Pico: In the portal, select the gear icon at the top right, advanced actions (erweiterte Aktionen), restart (Neustart). Only works if the Pico is online.

Kamstrup modules: Remove the module from the meter, wait 10 seconds and plug it back in.

M-Bus Gateway and single-phase meters: These devices can only be restarted by interrupting the power supply.

</details>

<details id="kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen">
<summary>Can I use my device with multiple WiFi networks?</summary>

Yes, the smart-me device (except the [Pico EV Charger](/produkte/pico-ladestation)) stores up to 3 different WiFi networks. You only need to install it once on each network, after which the device automatically selects the network with the best wireless connection.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No, since our meters are used for billing, it is not possible to reset them.

</details>

<details id="wo-wird-das-wifi-passwort-gespeichert">
<summary>Where is the WiFi password stored?</summary>

The WiFi password is stored exclusively on the smart-me device and is never transmitted to a server 

</details>

<details id="werden-die-einstellungen-und-zählerstände-gespeichert-falls-der-strom-ausfällt">
<summary>Are the settings and meter readings saved in the event of a power failure?</summary>

Yes, the device saves all settings and values in the event of a power failure. As soon as the power supply is restored, the device automatically connects to the WiFi and returns to the state it was in before the failure. 

</details>

<details id="wie-kann-ich-eine-neues-wifi-hinterlegen-ohne-die-bestehenden-daten-zu-verlieren">
<summary>How can I add a new WiFi network without losing the existing data?</summary>

To add another network, the device must be properly installed with the smart-me app. If it is not deleted from the cloud beforehand, energy data and configuration settings are retained.

</details>

<details id="können-die-gespeicherten-wifi-informationen-gelöscht-werden">
<summary>Can the stored WiFi information be deleted?</summary>

The WiFi information is only stored on the device. The data can be deleted as follows:

- Press the button on the smart-me device for 10s. For Pico, the RFID card must be held up no later than 15 minutes after the restart (power disconnected).

- Use a smartphone to connect to the smart-me WiFi (the name of the WiFi network is smart-me\_XXXXXX, where X stands for the serial number of the smart-me device)

- Use a browser to connect to the IP 192.168.1.1.

- Select the unwanted WiFi network, press remove and restart the device.

</details>

<details id="wie-finde-ich-die-mac-adresse-meines-smart-me-geräts-raus">
<summary>How do I find out the MAC address of my smart-me device?</summary>

There is no direct way to find out the MAC\-address. If you have a Professional license, you can enable DNS in the advanced settings of the smart-me device and select the option Internal IP (Interne IP). The IP can be determined by pinging the DNS name; it can then be compared with the IP / MAC table on the router

</details>

<details id="kann-das-mesh-netzwerk-deaktiviert-werden">
<summary>Can the mesh network be disabled?</summary>

The 3-phase meters Telstar and Telstar CT create a mesh network. It cannot be disabled.

</details>

<details id="kann-ich-ein-gerät-von-einem-smart-me-konto-zu-einem-anderen-schieben">
<summary>Can I move a device from one smart-me account to another?</summary>

- The historical data cannot be moved. 

- However, the device can be installed in another account by reinstalling it.

</details>

<details id="mit-welchem-zählerstand-wird-ein-smart-me-zähler-ausgeliefert">
<summary>What meter reading does a smart-me meter have on delivery?</summary>

0

</details>

<details id="was-passiert-wenn-ich-ein-zähler-deaktiviere">
<summary>What happens if I deactivate a meter?</summary>

All data already stored in the cloud is retained. After deactivation, no further data is stored. No license costs are incurred for deactivated meters.

</details>

<details id="kann-auf-den-smart-me-geräten-ein-proxy-konfiguriert-werden">
<summary>Can a proxy be configured on the smart-me devices?</summary>

No

</details>
