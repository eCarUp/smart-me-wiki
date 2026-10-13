---
title: 'Meter Transactions'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Beta: Meter transactions are time-limited, digitally signed consumption records of measured values that can be billed on their own.'
sidebar_label: 'Meter Transactions'
---
Beta: Meter transactions (Zähler Transaktionen) are time-limited, digitally signed consumption records of measured values that can be billed on their own. Charging sessions for e-mobility are an ideal use case.

You can find more information on public key signing [here](/informationssicherheit/public-key-signature). 

## Application for EV charging stations

The smart-me meter (version 2) is installed in the charging station. The meter's digital output is connected directly to the charging controller, which lets it start and stop charging. The meter's display and its calibration mark are visible on the front of the charging station.

### Charging session sequence

![Meter transactions – Figure 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. The charging session is started (e.g. via an app). The command "Start Transaction" is sent to the meter. The meter starts a new transaction and activates the charging station. The display switches from the rolling display of meter readings to the transaction display. The transaction's consumption starts at 0 kWh and counts up as energy is consumed. 

![Meter transactions – Figure 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. The user sees the current charging power and the energy already consumed on the display.

![Meter transactions – Figure 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. The charging session is ended (e.g. via the app). The command "End Transaction" is sent to the meter. The meter ends the transaction, signs it and sends the transaction data and the digital signature to the cloud. The display shows the user for 5min that the charging session has ended.

### Verifying a charging session afterwards

The customer can check the billed amount of energy at any time after the charging session. To do this, they enter the transaction in the app or on the web and verify it with the meter's public key. The public keys of all smart-me meters are publicly available in the smart-me Cloud (or via API).

The transaction data can be verified online using the signature and the public key.

![Meter transactions – Figure 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Validating Pico meter data with transparency software



Transparency software lets you verify digital signatures. 

Depending on its technical design, a charging station creates digitally signed measured values for each charging session you carry out at that charging station. These digital signatures let you check the measured values at a later time, so you can make sure that nobody has tampered with the values on their way to your invoice.



Using the transparency software is free of charge for consumers, mobility service providers and charging station operators. 



Download the transparency software: [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Validating meter readings

You can retrieve the signed meter reading series in the smart-me Cloud as follows:

1\. Log in at [www.smart-me.com](http://www.smart-me.com) 

2\. Select the meter or charging station you want

3\. In the menu at the top right, click the arrow and select “Signed meter readings” (Signierte Zählerstände)

4\. The signatures (OCMF format) are displayed under “Meter data” (Zählerdaten).



The OCMF message can be validated with the transparency software:

- Meter reading 1: active energy consumption (1-b:1.8.0)

- Meter reading 2: active energy delivery (1-b:1.8.0)






### Validating transactions

You can retrieve the signed transactions in the smart-me Cloud as follows:
5\. Log in at [www.smart-me.com
](http://www.smart-me.com)6\. Select the meter or charging station you want
7\. In the menu at the top right, click the arrow and select “Signed transactions” (Signierte Transaktionen)
8\. The signatures (OCMF format) are displayed under “Meter data” (Zählerdaten):



The OCMF message can be validated with the transparency software.



![Meter transactions – Figure 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Meter transactions – Figure 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Meter transactions – Figure 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### Activating the Pico's MID mode (display of relevant data)

If the user wants the MID-relevant data (meter readings, versions, checksums) to be displayed, there are two options:

- Starting or restarting the station 

- Using the brightness sensor


Displaying relevant data using the brightness sensor

The user can "flash in" the following code with a flashlight:

Dark - Light - Dark - Light - Dark

Each state must last between 1 and 5 seconds.
