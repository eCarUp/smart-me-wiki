---
title: 'M-Bus gateway failures'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'This page deals with the most common errors around the M-Bus gateway'
sidebar_label: 'M-Bus gateway failures'
---
This page deals with the most common errors around the M-Bus gateway

## Gateway does not find all meters

Many M-Bus meters get their power from the gateway. Our gateway supports 50 standard loads. 

- Start another search 1-2 times. It is possible that the meter does not always respond to the first search.

- Check that the sum of the loads does not exceed 50.

- If the lines are too long or the meters are too thin, the lines will become shorted.

- Not every M-Bus meter is compatible with our gateway. The list of compatible meters can be found on the [M-Bus Gateway product page](/produkte/m-bus-gateway).


## Gateway finds more meters than were installed (during commissioning)

Reason: Numbering for combination counter

The M-Bus gateway only recognizes a meter with the secondary address, which is usually also listed on the acceptance report.

The combined meters are then displayed separately on the portal. For this application, smart-me uses its own numbering logic.

All meters that are not relevant for billing can be deactivated to save license costs. Deleting them is not expedient, as the meter will appear again and again.

If a meter contains more than 1 meter, these are numbered as follows:

- Main meter = secondary address of the M-Bus gateway list (e.g. 71440145)

- Additional meters = secondary address of the main meter, the first number is deleted (e.g. 7) and a number is incremented at the end (e.g. 14401451,14401452).

- Sub-counter = These contain the last four digits of the main counter (e.g. 0145) and a four-digit enumeration number at the end (e.g. 01450001)


![M-Bus gateway failures – figure 1](/img/_en/troubleshooting-m-bus-gateway-failures/01.png)

![M-Bus gateway failures – figure 2](/img/_en/troubleshooting-m-bus-gateway-failures/02.png)

## Gateway finds more meters than were installed (during operation)

An unstable connection can lead to incorrect transmission of the serial number. 

- Solution 1: These counters can be deactivated to prevent them from obtaining a license.

- Solution 2: Prevent detection of new devices


How to prevent the detection of new devices

- Select M-Bus Gateway.


- Select the M-Bus Gateway gear wheel (top right). Note: Do not select the upper gear wheel, which is used to configure the meters, but the lower one.

- Edit

- Check the box “Don't allow to add additional meters”.

- Save


What is the effect of this option?

- Activating the “Don't allow to add additional meters” option prevents devices that are not yet available in the cloud from being saved. 


What needs to be considered?

- If new devices are added, this option must be deactivated again before the search.


When is this option recommended?

- If M-Bus devices keep popping up in the portal that do not actually exist.

- For preventive reasons :-)


In which circumstances can this occur?

- In the event of errors in data transmission. This occurs more frequently if the M-Bus cable is excessively long and therefore the quality of the data transmission decreases, or if the cable is poorly shielded or exposed to external interference.


Technical explanation

- The standardized M-Bus protocol has only 1 byte for the checksum. The checksum is intended to detect certain errors in the data transmission. Unfortunately, 1 byte is not much and can always lead to a corrupted data packet being regarded as valid and correct. In some installations where M-Bus Gateways are used, this repeatedly leads to corrupt data packets being classified as valid and correct and these are then recognized and added as a new M-Bus device in our cloud. The account then drops from Professional to Basic, as the license coverage is no longer sufficient.


![M-Bus gateway failures – figure 3](/img/_en/troubleshooting-m-bus-gateway-failures/03.png)

## M-Bus meter is offline

- Meters fail irregularly, they are not always the same meters. 

    - The meters need about 10 seconds to respond. If the readout interval is set too low, they have no possibility to do so. 

        - Solution: The readout interval can be increased on the M-Bus gateway. Recommended is 10 seconds per device.




- Meters always lose the connection at the same time of day (hour and minute).

    - In this case, it may be that meters are battery-supported and only allow a certain number of readouts per day to conserve the battery. 

        - Solution: In this case, the reading interval can be increased to 6 or 12 hours.




- Meters fail irregularly, most of them are the same meters.

    - External disturbances on the lines, especially longer ones, can lead to faulty transmissions.

        - Solution: Keep meter wiring short.


## Meter values do not match physical meter

- Check the meter configuration.

- Check the wiring between the meter and the gateway.

- Not every M-Bus meter is compatible with our gateway. The list of compatible meters can be found on the [M-Bus Gateway product page](/produkte/m-bus-gateway).


## Replace M-Bus gateway

- Install a new M-Bus gateway and place the contract on the new gateway.

- Put the M-Bus into operation.

- Set the readout interval on the portal.

- Search for devices.

- Check whether all M-Bus meters have delivered current values.


Note: Nothing needs to be changed in the smart-me configuration or in billing for the existing M-Bus meters.
