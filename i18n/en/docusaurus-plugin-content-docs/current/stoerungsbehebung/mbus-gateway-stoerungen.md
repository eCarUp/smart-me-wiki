---
title: 'M-Bus gateway failures'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'This page covers the most common errors relating to the M-Bus Gateway'
sidebar_label: 'M-Bus gateway failures'
---
This page covers the most common errors relating to the M-Bus Gateway

## Gateway does not find all meters

Many M-Bus meters draw their power from the gateway. Our gateway supports 50 standard loads. 

- Start another 1-2 search runs. The meter may not always respond on the first search run.

- Check that the total of the loads does not exceed 50.

- Cables that are too long or too thin lead to losses on the lines.

- Not every M-Bus meter is compatible with our gateway. You can find the list of compatible meters on the [M-Bus Gateway product page](/produkte/m-bus-gateway)


## Gateway finds more meters than were installed (during commissioning)

Reason: numbering of combination meters

The M-Bus Gateway only detects one meter at a time based on the secondary address, which is usually also listed in the acceptance report.

The combination meters are then displayed separately on the portal. For this application, smart-me uses its own numbering logic.

All meters not relevant for billing can be [deactivated](/konfiguration/inbetriebnahme/zaehler-loeschen) to save licence costs. Deleting them does not help, as the meter keeps reappearing.

If a meter contains more than 1 meter, they are numbered as follows:

- Main meter = secondary address from the list of the M-Bus Gateway (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first digit is removed (e.g. 7) and a number is incremented at the end (e.g. 14401451,14401452).

- Submeters = these contain the last four digits of the main meter (e.g. 0145) and a four-digit sequential number at the end (e.g. 01450001)

![M-Bus gateway failures – Figure 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![M-Bus gateway failures – Figure 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Gateway finds more meters than were installed (during operation)

An unstable connection can lead to incorrect transmission of the serial number. 

- -   Solution 1: These meters can be deactivated, which prevents them from consuming a licence.

    - Solution 2: Prevent the detection of new devices


How to prevent the detection of new devices

- Select the M-Bus Gateway.


- Select the M-Bus Gateway gear icon (top right). Note: Do not select the upper gear icon, which is used to configure the meters, but the lower one.

- Edit (Bearbeiten)

- Tick "Don't allow to add additional meters".

- Save (Speichern)


What does this option do?

- Activating the option "Don't allow to add additional meters" prevents devices that do not yet exist in the cloud from being saved. 


What should be considered?

- If new devices are added, this option must be deactivated again before the search.


When is this option recommended?

- If M-Bus devices that do not exist at all keep appearing in the portal.

- For preventive reasons :-)


In which cases can this happen?

- In the event of errors in data transmission. This happens more often if the M-Bus cable is too long and the quality of data transmission drops as a result, or if the cable is poorly shielded or exposed to external interference.


Technical explanation

- The standardised M-Bus protocol has only 1 byte for the checksum. The checksum is intended to detect certain errors in data transmission. Unfortunately, 1 byte is not much and can repeatedly cause a faulty data packet to be considered correct and valid. In some installations where M-Bus Gateways are used, this repeatedly leads to corrupt packets being classified as correct and valid, which are then detected and added as a new M-Bus device in our cloud. The account then drops from Professional to Basic, as licence coverage is no longer ensured.


![M-Bus gateway failures – Figure 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## M-Bus meter is offline

- Meters fail irregularly, and it is not always the same meters.

    - The meters need about 10 seconds to respond. If the readout interval is set too short, they have no opportunity to do so. 

        - Solution: The readout interval can be increased on the M-Bus Gateway. 10 seconds per device is recommended.




- Meters always lose the connection at the same time of day (hour and minute). 

    - In this case, the meters may be battery-powered and, to preserve the battery, only allow a certain number of readouts per day. 

        - Solution: Here, the readout interval can be increased to 6 or 12 hours.




- Meters fail irregularly, and it is mostly the same meters.

    - External interference on the lines, especially with longer lines, can lead to faulty transmissions.

        - Solution: Keep the meter wiring short.


## Meter values do not match the physical meter

- Check the meter configuration.

- Check the wiring between the meter and the gateway.

- Not every M-Bus meter is compatible with our gateway. You can find the list of compatible meters on the [M-Bus Gateway product page](/produkte/m-bus-gateway)


## Replacing the M-Bus Gateway

- Install the new M-Bus Gateway and connect the wiring to the new gateway.

- Commission the M-Bus.

- Set the readout interval on the portal.

- Search for devices.

- Check whether all M-Bus meters have delivered current values.


Note: Nothing needs to be changed for the existing M-Bus meters in the smart-me configuration or in Billing.
