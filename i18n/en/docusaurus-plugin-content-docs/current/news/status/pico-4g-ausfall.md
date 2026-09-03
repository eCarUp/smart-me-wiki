---
title: 'Communication outage Pico via 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Status update 16.01.2026 14h45'
sidebar_label: 'Communication outage Pico via 4G'
---
## Status update 16.01.2026 14h45

Unfortunately, we have to inform you that some charging stations are still affected by the 1nce SIM outage (card provider).

Since resolution of the fault by the external provider is not realistic, we have acted proactively in order to provide you with a reliable solution.

There is a small possibility that the charging station will be back online overnight, that is from 17.01.2025 6h00. How high the probability of this is remains unclear and is rated as small according to current knowledge.

## Solution to the problem

When it is to be applied

If the station is currently still offline and is not connected to a temporary Wi-Fi network.

Solution 1: Bring the station online via Wi-Fi or hotspot using the Installer App and then carry out a firmware update.

Solution 2: Bring the station online via Wi-Fi or hotspot without the Installer App and then carry out a firmware update. (Not possible with certain smartphone models)

Solution 3: You send the Pico charging station to smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. We carry out a firmware update and send the Pico back. Please add RMA-Pico-4G to the address so the problem can be resolved more quickly. With this approach the configuration data is not lost. If you send us a pico, please send the tracking number from the post office to [support@smart-me.com](mailto:support@smart-me.com).

Solution 4: You fill in an RMA and we will send an equivalent Pico in advance. In the form, use the error description "Pico Offline 4G". [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformulare). With this approach the new Pico has to be configured again.



### Description of solution 1: Bring the station online via Wi-Fi or hotspot using the Installer App and then carry out a firmware update.

General conditions

- We recommend having these steps carried out by a smart-me partner.

- A temporary Wi-Fi network must be created on site. (e.g. Wi-Fi, LTE router or smartphone hotspot).

- A smartphone is required for the installation. If a hotspot for the installation is created with the smartphone, two smartphones are required.

- The account access data must be known, since the device must be connected to the existing smart-me account.

- The installation must be carried out with the smart-me Installer App. [Installer App instructions](/konfiguration/installer-app-anleitung)  

- An RFID card must be available in order to activate installation mode.

- It must be possible to disconnect the charging station from power. Either via the fuses or by briefly unscrewing it.


Procedure

Connect the Pico to a temporary Wi-Fi network.

- Provide a temporary Wi-Fi network. The temporary Wi-Fi network must not contain characters such as ä, ö, ü and $. Characters such as a to z and A to Z, 0 to 9, -, \_ or a space are permitted without further ado. 

    - Permitted characters: The SSID supports only ASCII characters, excluding the $ character.  [Link to Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) 

    - Info on the IOS hotspot: With IOS the hotspot is created with the name of the smartphone. If the name of the smartphone is changed, the name of the hotspot changes as well.

- So that an installation can be carried out, the charging station must be disconnected from power. The connection to the temporary Wi-Fi network must then take place within 15 minutes, otherwise installation mode is no longer active. 

- If the station remains black for at least 5 minutes after being disconnected from power, or gets stuck on HI, an RMA must be filled in. See solution 4.

- Important for the next step: The installation must take place in the account in which the Pico is currently offline.

- Carry out the installation with the smart-me Installer App. [Installer App instructions](/konfiguration/installer-app-anleitung).

    - If in step 5 the SSID does not appear but instead e.g. &lt;&lt;unknown>>, location must be activated and the app must be able to access it.

    - If in step 6 the app does not react correctly, the camera must be explicitly activated in the permissions in the settings.

    - If the app has been newly installed, it may not work the first time; in that case please close the app and open it again.

- After the installation the station should be online again.


Carry out the update of the Pico. 

- Log in to the smart-me platform with a browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Open the link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Search for the station and carry out the "update communication". Once the latest version is installed, it reads 0.0.36 or 0.0.37

- Leave the window open in order to follow the progress. 

- Wait until it is finished; this can take up to 30 minutes.

- Once the installations on the picos are finished, the temporary Wi-Fi network can be switched off and the charging stations reconnect to 4G within 5 minutes


Procedure with several stations at the same location

- Restriction with a smartphone hotspot: Most smartphones support only 5 devices that can connect to the smartphone at the same time. An installation with a smartphone hotspot is therefore only possible with max. 5 devices at the same time.

- It is then best to first connect all stations to the temporary Wi-Fi network


- As a second step it is then best, for the update of the Pico, to open the link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) several times in order to carry out the updates at the same time.


### Description of solution 2: Bring the station online via Wi-Fi or hotspot without the Installer App and then carry out a firmware update.

For whom solution 2 is better than solution 1.

- Depending on the circumstances, it is somewhat faster for technically well-versed people.

- If you are unsure, please use solution 1.


General conditions

- We recommend having these steps carried out by a smart-me partner.

- A temporary Wi-Fi network must be created on site. (e.g. Wi-Fi, LTE router or smartphone hotspot).

- A smartphone is required for the installation. If a hotspot for the installation is created with the smartphone, two smartphones are required.

- The account access data must be known.

- An RFID card must be available in order to activate installation mode.

- It must be possible to disconnect the charging station from power. Either via the fuses or by briefly unscrewing it.


Procedure

Write the Wi-Fi connection to the Pico.

- Provide a temporary Wi-Fi network. (Can also be provided only at the last step before the update if only one smartphone is available) The temporary Wi-Fi network must not contain characters such as ä, ö, ü and $. Characters such as a to z and A to Z, 0 to 9, -, \_ or a space are permitted without further ado. 

    - Permitted characters: The SSID supports only ASCII characters, excluding the $ character.  Link to Wikipedia 

    - Info on the IOS hotspot: With IOS the hotspot is created with the name of the smartphone. If the name of the smartphone is changed, the name of the hotspot changes as well.

- So that an installation can be carried out, the charging station must be disconnected from power. The connection to the temporary Wi-Fi network must then take place within 15 minutes, otherwise installation mode is no longer active. 

- If the station remains black for at least 5 minutes after being disconnected from power, or gets stuck on HI, an RMA must be filled in. See solution 4.

- Hold up the RFID card so that installation mode starts.

- Connect to the Wi-Fi network of the Pico, e.g. smart-me\_7002222

- Wait 30 seconds and check whether a pop-up appears on the smartphone that has to be confirmed in order to keep the connection, even though this connection has no internet connection.

- Go to 192.198.1.1 with the browser.

    - With certain smartphones, 4G has to be switched off for this step.

- Enter the SSID and password

- Select Add Profile

- Select Reboot

- After configuration the station should come back online.


Carry out the update of the Pico. 

- Log in to the smart-me platform with a browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Open the link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Search for the station and carry out the "update communication". Once the latest version is installed, it reads 0.0.36 or 0.0.37

- Leave the window open in order to follow the progress. 

- Wait until it is finished; this can take up to 30 minutes.

- Once the installations on the picos are finished, the temporary Wi-Fi network can be switched off and the charging stations reconnect to 4G within 5 minutes


Procedure with several stations at the same location

- Restriction with a smartphone hotspot: Most smartphones support only 5 devices that can connect to the smartphone at the same time. An installation with a smartphone hotspot is therefore only possible with max. 5 devices at the same time.

- It is then best to first connect all stations to the temporary Wi-Fi network


- As a second step it is then best, for the update of the Pico, to open the link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) several times in order to carry out the updates at the same time.
