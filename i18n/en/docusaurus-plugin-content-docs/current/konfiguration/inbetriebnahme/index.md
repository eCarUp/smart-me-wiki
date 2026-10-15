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

We recommend creating an account in advance and a separate one for each installation. No licences are required for commissioning.

## Installer App

The free Installer App must be installed on your smartphone and the necessary permissions must be granted.

iOS: Location, Local Network, Camera

Android: Location, Camera

## Special tools

- Pico: An RFID card (supplied)

- Telstar 80A, CT and M-Bus Gateway: A small screwdriver to press the T1 button

![Icon of the smart-me Installer App: a pair of crossed tools on a blue background](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/konfiguration/installer-app-anleitung)

## Installation

## Quick guide

1.  Check the WiFi requirements (see above)

2.  Download the free app for [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) or [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Grant the app's permissions

4.  Connect your smartphone or tablet to the WiFi network in which you want to install the smart-me device.

5.  Start the app and log in with the appropriate account, or create an account.

6.  In the menu, use Diagnosis (Diagnose) to check whether the servers are reachable.

7.  Click "Install device" ("Gerät installieren") (+) at the bottom right

8.  For an installation via WiFi, the network can be added at the top.

9.  Click "Add device" ("Gerät hinzufügen") (+) at the bottom right

10.  Scan the QR code

11.  For Pico, select whether you want to use WiFi or Mobile (4G).

12.  Select "Connect to the device's WiFi" ("Verbinde mit WLAN des Gerätes")

13.  Press T1 or hold up the RFID card. Note: The Pico must be installed within 15 minutes of switching on the power.

14.  Select "WLAN quick connect"

15.  Wait until you are prompted to connect to smart-me\_xxxxxx.

16.  Wait until the installation has been completed successfully.

17.  Assign a name.

18.  Device-specific setting

     - Telstar CT: Set the transformer ratio (select CT / edit / enter transformer ratio)

     - M-Bus: The scan must be started via the web portal (gear icon / start scan)

     - Kamstrup:  Meter key (three gear icons / meter key / save)

If the installation fails, please follow the detailed instructions including error descriptions.

## Detailed instructions including error descriptions

<div className="row">
<div className="col col--4">

**1. WIFI connection**

Connect the smartphone to the same 2.4 GHz WiFi network that the devices will later be connected to.

</div>
<div className="col col--4">

**2. Creation / connection**

<div className="text--center">

![Welcome screen of the Installer App with the buttons LOG IN and Register](/img/konfiguration-inbetriebnahme/02.jpg)

</div>

</div>
<div className="col col--4">

**3. Account creation**

<div className="text--center">

![Registration form of the app with email, password and confirmation](/img/konfiguration-inbetriebnahme/04.jpg)

</div>

**Possible problems:** If the email address is already in use, a different one must be used.

</div>
</div>

<div className="row">
<div className="col col--4">

**4. Account login**

<div className="text--center">

![Login form of the app with email and password](/img/konfiguration-inbetriebnahme/05.jpg)

</div>

**Possible problems:** If you cannot log in, check whether the WiFi network has an internet connection and whether the username and password are correct.

</div>
<div className="col col--4">

**5. Diagnosis**

<div className="text--center">

![WiFi check with signal strength, WiFi frequency and server reachability](/img/konfiguration-inbetriebnahme/06.png)

</div>

This step is optional. It is important that "Server reachable" ("Server erreichbar") is set to *Yes*.

If the warning about the 5 GHz network appears, a 2.4 GHz network must also be available. The smartphone cannot be forced to use it — which is why this is only a warning.

</div>
<div className="col col--4">

**6. Click "Add device" ("Gerät hinzufügen") (+)**

<div className="text--center">

![Empty device list of the app with the plus button at the bottom right](/img/konfiguration-inbetriebnahme/07.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**7. Click "Edit" ("Editieren")**

<div className="text--center">

![Device list with Edit highlighted in green next to the installation WiFi](/img/konfiguration-inbetriebnahme/08.jpg)

</div>

**Note:** This step is not required if Picos are commissioned via 4G.

</div>
<div className="col col--4">

**8. Enter the WiFi password**

<div className="text--center">

![Input field for the password of the installation WiFi](/img/konfiguration-inbetriebnahme/09.jpg)

</div>

**Possible problems:** If the SSID shows `<<unknown>>`, location must be enabled and the smartphone must be connected to a WiFi network.

</div>
<div className="col col--4">

**9. Click "Add device" ("Gerät hinzufügen") (+)**

<div className="text--center">

![Device list with the installation WiFi set and the plus button at the bottom right](/img/konfiguration-inbetriebnahme/10.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**10. Scan the QR code**

<div className="text--center">

![QR code scanner of the app above the type plate of a meter](/img/konfiguration-inbetriebnahme/11.jpg)

</div>

**Possible problems:** If the QR code is not recognised, the serial number can also be entered manually.

</div>
<div className="col col--4">

**11. Connect to the meter's WiFi**

<div className="text--center">

![Device list with the prompt to connect to the device's WiFi](/img/konfiguration-inbetriebnahme/12.jpg)

</div>

</div>
<div className="col col--4">

**12. Pico only: "Select connection type" ("Verbindungsart auswählen")**

<div className="text--center">

![Connection type dialog with the buttons WLAN and MOBILE](/img/konfiguration-inbetriebnahme/13.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**13. Press the T1 button or scan RFID**

<div className="text--center">

![Instructions with a drawing showing to press and hold the T1 button on the device](/img/konfiguration-inbetriebnahme/14.jpg)

</div>

**Note for Pico:** You have 15 minutes per Pico to complete the installation. After that, the Pico must be restarted and the process started again from the beginning.

</div>
<div className="col col--4">

**14. Wait until the connection is established**

<div className="text--center">

![Device list with the green message Successful](/img/konfiguration-inbetriebnahme/15.jpg)

</div>

</div>
</div>

## Device-specific setting

## Telstar CT

### Set the transformer ratio

<div className="row">
<div className="col col--8">

- Select and edit the CT meter 

- Enter the transformer ratio 

- The transformer ratio can be locked. This protects against unwanted changes by unauthorised persons. To unlock the transformer ratio,  the device must be installed again with the smart-me app.

</div>
<div className="col col--4 text--center">

![Device details in the app with the transformer factor 200:5 and the switch "Lock transformer factor" ("Wandlerfaktor sperren")](/img/konfiguration-inbetriebnahme/16.jpg)

</div>
</div>

### Note:

The transformer ratio does not change any historical data. This step should therefore be carried out immediately after commissioning.

## M-Bus Gateway / Sirius

### Instructions for both M-Bus Gateways

Hardware installation steps:

1.  Install the device (wire the M-Bus, apply voltage)

2.  Complete the installation with the app as described in the instructions.
    (Link the hardware with the WiFi and the target account. WiFi 2.4GHz)

3.  Under Configuration in the app or on the desktop, start the  "automatic scan" ("automatischer Suchlauf") to find the devices.

The commissioning of the heat and water meters, on the other hand, is still carried out by the supplier (e.g. Neovac, Ista, GWF, Techem etc.). In most cases, these companies connect their own M-Bus master in the technical room so that they can check whether the meters actually arrive on the M-Bus.

A commissioning report is then created, and only after that is our M-Bus Gateway reconnected.

Using the corresponding documents, the individual meters can then be assigned to the correct apartments in the smart-me Cloud and the configuration can be completed.

The required information

- List of all installed meters

- M-Bus address (we only need the secondary address, the primary address is not relevant for us)

- Assignment to the apartment (apartment designation)

- Type of meter (heat, domestic hot water or cold water etc.)

Important: The secondary address must be unique per smart-me account; in addition, for combined heat/cooling meters, the combination of the last 4 digits must be unique in the account. The easiest way is to use the device serial number.

Result of the automatic scan

![Result of the scan in the portal: status, last connection and a list of 19 meters found with their secondary address](/img/konfiguration-inbetriebnahme/17.png)

Automatic meter creation after the scan
(takes a few minutes)

![Meter tree of an apartment with the entries cooling, electricity, heat and domestic hot water](/img/konfiguration-inbetriebnahme/18.png)

### Numbering for combined meters

The M-Bus Gateway only recognises one meter at a time based on the secondary address, which is usually also listed on the acceptance report.

The combined meters are then displayed separately in the portal. For this application, smart-me uses its own numbering logic.

All meters not relevant for billing can be [deactivated](/konfiguration/inbetriebnahme/zaehler-loeschen) to save licence costs. Deleting is not effective, as the meter keeps reappearing.

If a meter contains more than 1 meter, they are numbered as follows:

- Main meter = secondary address from the list of the M-Bus Gateway (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first 1 or 2 digits are removed (e.g. 7) and a number is counted up at the end (e.g. 14401451,14401452).

- Sub-meters = these contain the last four digits of the main meter (e.g. 0145) and a four-digit sequential number at the end (e.g. 01450001)

Note on leading zeros: If a meter has, for example, the number 1000017, the leading zeros are not taken into account after truncation, e.g. 000017, and are appended at the end, e.g. 1700001

![Single meter found "Heat 71440145" with its addressing](/img/konfiguration-inbetriebnahme/19.png)

![Four meters of a combined meter: two Cold, one Heat and one Water](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway: search for devices

Further configurations must be made in the web portal

Edit

- Change the interval. The M-Bus requires 10 seconds per device for readout.

Start a device scan on the M-Bus Gateway

1.  At the top right, click the gear icon (Settings) 

2.  Search devices (Geräte suchen)

3.  Confirm the search with "Yes" ("Ja")

Note: The search can take several minutes.

Gateway does not find all meters

- Run the scan  again (1-2x). The meter may not always be found during the first scan.

- You can find further causes on the page [M-Bus gateway failures](/stoerungsbehebung/mbus-gateway-stoerungen) 

Gateway finds more meters than were installed

- Mostly during commissioning: Depending on the M-Bus meter, it may create several sub-meters. These can be recognised by the serial number being shifted one digit to the left, followed by an ascending number, starting with 1. Example: main meter 00200001, sub-meter 02000011

- You can find further causes on the page [M-Bus gateway failures](/stoerungsbehebung/mbus-gateway-stoerungen) 

![Menu of the M-Bus Gateway in the portal with the button "Search devices" ("Geräte suchen") highlighted in green](/img/konfiguration-inbetriebnahme/21.png)

### M-Bus Gateway: prevent detection of new devices

How is the option enabled?

- Select the M-Bus Gateway.

- Select the M-Bus Gateway gear icon (top right). Note: Do not select the upper gear icon, which is used for configuring the meters, but the lower one.

- Edit (Bearbeiten)

- Tick "Don't allow to add additional meters".

- Save (Speichern)

What does this option do?

- Enabling the option "Don't allow to add additional meters" prevents devices that do not yet exist in the cloud from being saved. 

What needs to be considered?

- If new devices are added, this option must be disabled again before the search.

When is this option recommended?

- If M-Bus devices that do not exist keep appearing in the portal.

- As a preventive measure :-)

In which cases can this happen?

- In the event of errors in data transmission. This occurs more often if the M-Bus cable is too long and the quality of data transmission decreases as a result, or if the cable is poorly shielded or exposed to external interference.

Technical explanation

- The standardised M-Bus protocol has only 1 byte for the checksum. The checksum is intended to detect certain errors in data transmission. Unfortunately, 1 byte is not much and can repeatedly lead to a faulty data packet being regarded as correct and valid. In some installations where M-Bus Gateways are used, this repeatedly leads to corrupt packets being classified as correct and valid, which are then detected and added as a new M-Bus device in our cloud. The account then drops from Professional to Basic, as licence coverage is no longer guaranteed.

![Settings of the M-Bus Gateway with the tick "Don't allow to add additional meters" highlighted and the Save button](/img/konfiguration-inbetriebnahme/22.png)

## Pico EV Charger

### Check the WiFi connection

After installing the Pico, an icon appears in the top right corner that indicates the connection type.

If the Pico is to be connected via WiFi, it is advisable to briefly check whether the icon corresponds to a WiFi symbol and not 4G. 

If 4G appears even though the Pico is supposed to be connected via WiFi, the Pico must be reinstalled. This can happen if a step was not carried out correctly during installation, e.g. the WiFi password.

![Status display of a Pico charging station in the portal with the WiFi symbol highlighted in red](/img/konfiguration-inbetriebnahme/23.png)

### Pico Configuration & load management

[Pico Configuration](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Multilevel load management](/konfiguration/multilevel-lastmanagement) 

![Status display of a Pico charging station in the portal with the WiFi symbol highlighted in red](/img/konfiguration-inbetriebnahme/23.png)

## Tips and tricks

### Commissioning multiple devices

<div className="row">
<div className="col col--8">

In this step, you have the option of commissioning several meters at the same time to speed up commissioning when there are many meters.

</div>
<div className="col col--4 text--center">

![Device list with the installation WiFi set and the plus button at the bottom right](/img/konfiguration-inbetriebnahme/10.jpg)

</div>
</div>

### Logging out

<div className="row">
<div className="col col--4">

1.  At the top left, tap the three lines and select Profile (Profil)

2.  At the bottom, select Log out (Ausloggen)

3.  Logged out

</div>
<div className="col col--4 text--center">

![Side menu of the app with the entry User Profile (Benutzer Profil) highlighted](/img/konfiguration-inbetriebnahme/26.jpg)

</div>
<div className="col col--4 text--center">

![Profile page of the app with the Log out (Abmelden) button at the bottom](/img/konfiguration-inbetriebnahme/27.jpg)

</div>
</div>

### Installation failed

If the installation fails and you want to try again, please close the app completely and then reopen it. This ensures that no cached information is used.

## Next step

[Continue to Folder and Meter Configuration](/konfiguration/ordnerkonfiguration)

## FAQ

<details id="der-internetanbieter-wird-gewechselt-was-muss-ich-machen">
<summary>The internet provider is being changed, what do I need to do?</summary>

If the meters are connected to a technical WiFi network and/or a dedicated access point, the SSID and password usually do not change. In that case, changing the internet provider is usually not a problem.

If the SSID and password of a private WiFi network are used, there are two options:

- Solution 1: Set up a guest WiFi network on the new router with the same SSID and password as the old one. The meters will then automatically connect to this WiFi network, which is identical to the old one.

- Solution 2: Re-register each meter individually so that the new data is stored locally on each meter. The installation is carried out exactly like a new installation. Under no circumstances may the  meter be deleted, as otherwise all historical data will be lost . During a reinstallation, our cloud environment recognises that the serial number already exists in the account and simply adds the new values.

</details>

<details id="wie-kann-ich-ein-gerät-neu-starten-reboot">
<summary>How can I restart (reboot) a device?</summary>

All devices can be restarted by interrupting the power supply.

3-phase meter: Press T1 and T2 simultaneously for 10 seconds.

Pico: In the portal, select the gear icon at the top right, advanced actions, restart. Only works if the Pico is online.

Kamstrup module: Remove the module from the meter, wait 10 seconds and plug it back in.

M-Bus Gateway and single-phase meter: These devices can only be restarted by interrupting the power supply.

</details>

<details id="kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen">
<summary>Can I use my device with multiple WiFi networks?</summary>

Yes, the smart-me device (except the [Pico charging station](/produkte/pico-ladestation)) stores up to 3 different WiFi networks. You only need to install it once on each network, after which the device automatically selects the network with the best wireless connection.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No, as our meters are used for billing, it is not possible to reset them.

</details>

<details id="wo-wird-das-wifi-passwort-gespeichert">
<summary>Where is the WiFi password stored?</summary>

The WiFi password is stored exclusively on the smart-me device and is never transmitted to a server 

</details>

<details id="werden-die-einstellungen-und-zählerstände-gespeichert-falls-der-strom-ausfällt">
<summary>Are the settings and meter readings saved if there is a power failure?</summary>

Yes, the device saves all settings and values in the event of a power failure. As soon as the power supply is restored, the device automatically connects to the WiFi network and returns to its state before the failure. 

</details>

<details id="wie-kann-ich-eine-neues-wifi-hinterlegen-ohne-die-bestehenden-daten-zu-verlieren">
<summary>How can I add a new WiFi network without losing the existing data?</summary>

To add another network, the device must be properly installed with the smart-me app. If it is not deleted from the cloud beforehand, energy data and configuration settings are retained.

</details>

<details id="können-die-gespeicherten-wifi-informationen-gelöscht-werden">
<summary>Can the stored WiFi information be deleted?</summary>

The WiFi information is only stored on the device. The data can be deleted as follows:

- Press the button on the smart-me device for 10 s. For Pico, the RFID card must be held up no later than 15 minutes after the restart (power off).

- Use a smartphone to connect to the smart-me WiFi network (the name of the WiFi network is smart-me\_XXXXXX, where the X stands for the serial number of the smart-me device)

- Use a browser to connect to the IP 192.168.1.1.

- Select the unwanted WiFi network, press remove and restart the device.

</details>

<details id="wie-finde-ich-die-mac-adresse-meines-smart-me-geräts-raus">
<summary>How do I find out the MAC address of my smart-me device?</summary>

There is no direct way to find out the MAC\-address. If you have a Professional licence, you can enable DNS in the advanced settings of the smart-me device and select the Internal IP option. The IP can be determined by pinging the DNS name; it can then be compared with the IP / MAC table on the router

</details>

<details id="kann-das-mesh-netzwerk-deaktiviert-werden">
<summary>Can the mesh network be disabled?</summary>

3-phase meters Telstar and Telstar CT create a mesh network. This cannot be disabled.

</details>

<details id="kann-ich-ein-gerät-von-einem-smart-me-konto-zu-einem-anderen-schieben">
<summary>Can I move a device from one smart-me account to another?</summary>

- The historical data cannot be moved. 

- However, the device can be installed in another account by means of a new installation.

</details>

<details id="mit-welchem-zählerstand-wird-ein-smart-me-zähler-ausgeliefert">
<summary>What meter reading does a smart-me meter have on delivery?</summary>

0

</details>

<details id="was-passiert-wenn-ich-ein-zähler-deaktiviere">
<summary>What happens if I deactivate a meter?</summary>

All data already stored in the cloud is retained. After deactivation, no further data is stored. No licence costs are incurred for deactivated meters.

</details>

<details id="kann-auf-den-smart-me-geräten-ein-proxy-konfiguriert-werden">
<summary>Can a proxy be configured on the smart-me devices?</summary>

No

</details>
