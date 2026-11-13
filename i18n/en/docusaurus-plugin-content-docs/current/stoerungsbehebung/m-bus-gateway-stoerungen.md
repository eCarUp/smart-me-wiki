---
title: 'M-Bus gateway failures'
slug: '/stoerungsbehebung/m-bus-gateway-stoerungen'
description: 'This page covers the most common errors relating to the M-Bus Gateway'
sidebar_label: 'M-Bus gateway failures'
---
This page covers the most common errors relating to the M-Bus Gateway

<details id="nicht-alle-zaehler-gefunden">
<summary>Gateway does not find all meters</summary>

Many M-Bus meters draw their power from the gateway. Our gateway supports 50 standard loads. 

- Run the search 1-2 more times. A meter may not always respond during the first search.

- Check that the total of the loads does not exceed 50.

- Cables that are too long or meters that are too thin lead to losses on the cables.

- Not every M-Bus meter is compatible with our gateway. You can find the list of compatible meters on the [M-Bus Gateway product page](/produkte/m-bus-gateway)

</details>

<details id="zu-viele-zaehler-inbetriebnahme">
<summary>Gateway finds more meters than were installed (during commissioning)</summary>

Reason: Numbering of combination meters

The M-Bus gateway only detects one meter at a time based on the secondary address, which is usually also listed on the acceptance report.

The combination meters are then displayed separately on the portal. smart-me uses its own numbering logic for this application.

All meters that are not relevant for billing can be [deactivated](/konfiguration/inbetriebnahme/zaehler-loeschen) to save license costs. Deleting them does not help, as the meter keeps reappearing.

If a meter contains more than 1 meter, they are numbered as follows:

- Main meter = secondary address from the list of the M-Bus Gateway (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first digit is removed (e.g. 7) and a number is incremented at the end (e.g. 14401451,14401452).

- Sub-meters = These contain the last four digits of the main meter (e.g. 0145) and a four-digit sequence number at the end (e.g. 01450001)

![M-Bus gateway failures – Figure 1](/img/stoerungsbehebung-m-bus-gateway-stoerungen/01.png)

![M-Bus gateway failures – Figure 2](/img/stoerungsbehebung-m-bus-gateway-stoerungen/02.png)

</details>

<details id="zu-viele-zaehler-betrieb">
<summary>Gateway finds more meters than were installed (during operation)</summary>

An unstable connection can lead to faulty transmission of the serial number. 

- -   Solution 1: These meters can be deactivated, which prevents them from using a license.

    - Solution 2: Prevent the detection of new devices


How to prevent the detection of new devices

- Select the M-Bus Gateway.


- Select the M-Bus Gateway gear icon (top right). Note: Do not select the upper gear icon, which is used to configure the meters, but the lower one.

- Edit (Bearbeiten)

- Tick "Don't allow to add additional meters".

- Save (Speichern)


What does this option do?

- Enabling the option "Don't allow to add additional meters" prevents devices that do not yet exist in the cloud from being saved. 


What should you keep in mind?

- If new devices are added, this option must be disabled again before the search.


When is this option recommended?

- If M-Bus devices that do not actually exist keep appearing in the portal.

- For preventive reasons :-)


In which cases can this happen?

- When errors occur in the data transmission. This happens more often if the M-Bus cable is too long and the quality of the data transmission decreases as a result, or if the cable is poorly shielded or exposed to external interference.


Technical explanation

- The standardized M-Bus protocol has only 1 byte for the checksum. The checksum is intended to detect certain errors in data transmission. Unfortunately, 1 byte is not much and can repeatedly cause a faulty data packet to be considered correct and valid. In some installations where M-Bus Gateways are used, this repeatedly causes corrupt packets to be classified as correct and valid, which are then detected and added as a new M-Bus device in our cloud. The account then drops from Professional to Basic, as license coverage is no longer guaranteed.


![M-Bus gateway failures – Figure 3](/img/stoerungsbehebung-m-bus-gateway-stoerungen/03.png)

</details>

<details id="zaehler-offline">
<summary>M-Bus meter is offline</summary>

- Meters drop out irregularly, and it is not always the same meters.

    - The meters need about 10 seconds to respond. If the read-out interval is set too short, they have no chance to do so. 

        - Solution: The read-out interval can be increased on the M-Bus Gateway. 10 seconds per device is recommended.




- Meters always lose the connection at the same time of day (hour and minute). 

    - In this case, the meters may be battery-powered and only allow a certain number of readings per day to conserve the battery. 

        - Solution: Here the read-out interval can be increased to 6 or 12 hours.




- Meters drop out irregularly, and it is mostly the same meters.

    - External interference on the cables, especially with longer cables, can lead to faulty transmissions.

        - Solution: Keep the meter wiring short.

</details>

<details id="werte-stimmen-nicht">
<summary>Meter values do not match the physical meter</summary>

- Check the meter configuration.

- Check the wiring between the meter and the gateway.

- Not every M-Bus meter is compatible with our gateway. You can find the list of compatible meters on the [M-Bus Gateway product page](/produkte/m-bus-gateway)

</details>

<details id="gateway-austauschen">
<summary>Replacing the M-Bus Gateway</summary>

- Install the new M-Bus Gateway and move the wiring to the new gateway.

- Commission the M-Bus.

- Set the read-out interval on the portal.

- Search for devices.

- Check whether all M-Bus meters have delivered current values.


Note: Nothing needs to be changed for the existing M-Bus meters in the smart-me configuration or in Billing.

</details>
