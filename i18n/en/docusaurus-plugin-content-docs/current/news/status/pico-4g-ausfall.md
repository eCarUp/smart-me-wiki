---
title: 'Pico communication outage via 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Status update 16.01.2026 14h45'
sidebar_label: 'Pico communication outage via 4G'
---
## Status update 16.01.2026 14h45

Unfortunately, we have to inform you that some charging stations are still affected by the 1nce SIM outage (card provider). 

As it is not realistic for the external provider to resolve the fault, we have taken proactive action to provide you with a reliable solution.

There is a slight possibility that the charging station will be back online overnight, i.e. from 17.01.2025 6h00. How likely this is remains unclear and, based on current knowledge, is considered low.

## Solving the problem

When to apply it

If the station is currently still offline and is not connected to a temporary Wi-Fi network.

Solution 1: Bring the station online via Wi-Fi or hotspot with the Installer App and then carry out a firmware update. 

Solution 2: Bring the station online via Wi-Fi or hotspot without the Installer App and then carry out a firmware update. (Not possible with some smartphone models)

Solution 3: Send the Pico charging station to smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. We will carry out a firmware update and send the Pico back to you. Please add RMA-Pico-4G to the address so that the problem can be resolved more quickly. With this procedure, the configuration data is not lost. If you send us a Pico, please send the Swiss Post tracking number to [support@smart-me.com](mailto:support@smart-me.com).

Solution 4: Fill out an RMA and we will send you an equivalent Pico in advance. Use the fault description "Pico Offline 4G" in the form. [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformular-schweiz). With this procedure, the new Pico has to be configured again.



### Description of solution 1: Bring the station online via Wi-Fi or hotspot with the Installer App and then carry out a firmware update.

Requirements

- We recommend having these steps carried out by a smart-me partner.

- A temporary Wi-Fi network must be set up on site (e.g. Wi-Fi, LTE router or smartphone hotspot).

- A smartphone is required for the installation. If a hotspot is created with the smartphone for the installation, two smartphones are required.

- The login details for the account must be known, as the device must be connected to the existing smart-me account.

- The installation must be carried out with the smart-me Installer App. [Installer App instructions](/konfiguration/inbetriebnahme/smart-me-geraete)  

- An RFID card must be available to activate the installation mode.

- It must be possible to disconnect the charging station from the power supply, either via the fuses or by briefly unscrewing it.


Procedure

Connect the Pico to the temporary Wi-Fi network.

- Provide a temporary Wi-Fi network. The temporary Wi-Fi network must not contain characters such as ä, ö, ü and $. Characters such as a to z and A to Z, 0 to 9, -, \_ or a space are allowed without restriction. 

    - Allowed characters: The SSID only supports ASCII characters, excluding the $ character.  [Link to Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) 

    - Note on iOS hotspots: On iOS, the hotspot is created with the name of the smartphone. If the name of the smartphone is changed, the name of the hotspot changes as well.

- To carry out an installation, the charging station must be disconnected from the power supply. The connection to the temporary Wi-Fi network must then be established within 15 minutes, otherwise the installation mode is no longer active. 

- If, after being disconnected from the power supply, the station remains black for at least 5 minutes or gets stuck on HI, an RMA must be filled out. See solution 4.

- Important for the next step: The installation must be carried out in the account in which the Pico is currently offline.

- Carry out the installation with the smart-me Installer App. [Installer App instructions](/konfiguration/inbetriebnahme/smart-me-geraete).

    - If in step 5 the SSID does not appear but instead e.g. &lt;&lt;unknown>>, location must be enabled and the app must be allowed to access it.

    - If in step 6 the app does not respond correctly, the camera must be explicitly enabled in the permissions in the settings.

    - If the app has just been reinstalled, it may sometimes not work the first time; in that case, please close the app and open it again.

- After the installation, the station should be back online.


Update the Pico. 

- Log in to the smart-me platform with a browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Open the link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Search for the station and run "update communication". Once the latest version is installed, it is 0.0.36 or 0.0.37

- Leave the window open to follow the progress. 

- Wait until it is complete; this can take up to 30 minutes.

- Once the installations on the Picos are complete, the temporary Wi-Fi network can be switched off and the charging stations will reconnect to 4G within 5 minutes


Procedure for several stations at the same location

- Limitation with smartphone hotspots: Most smartphones only support 5 devices connecting to the smartphone at the same time. An installation with a smartphone hotspot is therefore only possible for a maximum of 5 devices at the same time.

- It is then best to first connect all stations to the temporary Wi-Fi network


- It is then best, as a second step, to open the link for the Pico update ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) several times in order to carry out the updates simultaneously.


### Description of solution 2: Bring the station online via Wi-Fi or hotspot without the Installer App and then carry out a firmware update.

For whom solution 2 is better than solution 1.

- Depending on the situation, it is somewhat faster for technically experienced people.

- If you are unsure, please use solution 1.


Requirements

- We recommend having these steps carried out by a smart-me partner.

- A temporary Wi-Fi network must be set up on site (e.g. Wi-Fi, LTE router or smartphone hotspot).

- A smartphone is required for the installation. If a hotspot is created with the smartphone for the installation, two smartphones are required.

- The login details for the account must be known.

- An RFID card must be available to activate the installation mode.

- It must be possible to disconnect the charging station from the power supply, either via the fuses or by briefly unscrewing it.


Procedure

Write the Wi-Fi connection to the Pico.

- Provide a temporary Wi-Fi network. (If only one smartphone is available, it can also be provided only at the last step before the update) The temporary Wi-Fi network must not contain characters such as ä, ö, ü and $. Characters such as a to z and A to Z, 0 to 9, -, \_ or a space are allowed without restriction. 

    - Allowed characters: The SSID only supports ASCII characters, excluding the $ character.  Link to Wikipedia 

    - Note on iOS hotspots: On iOS, the hotspot is created with the name of the smartphone. If the name of the smartphone is changed, the name of the hotspot changes as well.

- To carry out an installation, the charging station must be disconnected from the power supply. The connection to the temporary Wi-Fi network must then be established within 15 minutes, otherwise the installation mode is no longer active. 

- If, after being disconnected from the power supply, the station remains black for at least 5 minutes or gets stuck on HI, an RMA must be filled out. See solution 4.

- Hold the RFID card to the station so that the installation mode starts.

- Connect to the Wi-Fi network of the Pico, e.g. smart-me\_7002222

- Wait 30 seconds and check whether a pop-up appears on the smartphone asking you to confirm that the connection should be kept even though it has no internet connection.

- In the browser, go to 192.198.1.1.

    - On some smartphones, 4G must be switched off for this step.

- Enter the SSID and password

- Select Add Profile

- Select Reboot

- After the configuration, the station should come back online.


Update the Pico. 

- Log in to the smart-me platform with a browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Open the link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Search for the station and run "update communication". Once the latest version is installed, it is 0.0.36 or 0.0.37

- Leave the window open to follow the progress. 

- Wait until it is complete; this can take up to 30 minutes.

- Once the installations on the Picos are complete, the temporary Wi-Fi network can be switched off and the charging stations will reconnect to 4G within 5 minutes


Procedure for several stations at the same location

- Limitation with smartphone hotspots: Most smartphones only support 5 devices connecting to the smartphone at the same time. An installation with a smartphone hotspot is therefore only possible for a maximum of 5 devices at the same time.

- It is then best to first connect all stations to the temporary Wi-Fi network


- It is then best, as a second step, to open the link for the Pico update ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) several times in order to carry out the updates simultaneously.
