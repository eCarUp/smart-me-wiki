---
title: 'Meter Transactions'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Beta: Meter transactions are time-limited and digitally signed drawings of measured values, which can be billed for themselves.'
sidebar_label: 'Meter Transactions'
---
Beta: Meter transactions are time-limited and digitally signed drawings of measured values, which can be billed for themselves. An ideal use case is charging processes for e-mobility.

You can find more information on [Public Key Signature](/informationssicherheit/public-key-signature). 

## E-charging station application

The smart-me meter (version 2) is installed in the charging station. The digital output of the meter is connected directly to the charge controller and can thus start and stop the charge. The display of the meter and the calibration mark can be seen on the front of the charging station.

### Charging procedure

![Meter Transactions – figure 1](/img/_en/information-security-meter-transactions/01.jpg)

1\. The charging process is started (e.g. via an app). The "Start Transaction" command is sent to the meter. It starts a new transaction and activates the charging station. The display changes from the rolling display of the meter readings to the display of the transaction. The consumption of the transaction starts at 0 kWh and counts up according to the consumption. 

![Meter Transactions – figure 2](/img/_en/information-security-meter-transactions/02.jpg)

2\. The user can see the current charging power and the energy already drawn on the display.

![Meter Transactions – figure 3](/img/_en/information-security-meter-transactions/03.jpg)

3\. The charging process is ended (e.g. via the app). The meter is sent the command "End Transaction". It ends the transaction, signs it and sends the transaction data and the digital signature to the cloud. The user is shown on the display for 5min that the charging process has been completed.

### Checking the charging process afterwards

The customer can check the amount of energy charged at any time after the charging process. To do this, he enters the corresponding transaction in the app or on the web and checks it with the public key of the meter. The public keys of all smart-me meters are publicly available in the smart-me cloud (or via API).

The transaction data can be verified online with the signature and the public key.

![Meter Transactions – figure 4](/img/_en/information-security-meter-transactions/04.jpg)

## Validate Pico meter data with transparency software



With the help of transparency software, you have the possibility to verify digital signatures. 

Depending on the technical design, a charging station creates digitally signed measured values in connection with a charging process that you carry out at this charging station. These digital signatures allow you to check the measured values with a time delay, so that you can ensure that no one has manipulated the values during the transmission up to your invoice.



The use of the transparency software is free of charge for consumers, mobility providers and charging station operators. 



Download transparency software: [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 



### Validate meter readings

The signed meter readings can be retrieved in the smart-me Cloud as follows:

1\. log in at [www.smart-me.com](http://www.smart-me.com)  

2\. Select the desired meter or charging station. 

3\. click on the arrow in the top right menu and select "Signed meter readings



The signatures (OCMF format) are displayed under "Meter data".



The OCMF message can be validated with the transparency software:

Meter reading 1: Active energy purchase (1-b:1.8.0)

Meter reading 2: Active energy supply (1-b:1.8.0)





### Validate transactions

The signed transactions can be retrieved in the smart-me Cloud as follows:

5\. Log in at [www.smart-me.com](http://www.smart-me.com)

6\. Select the desired meter or charging station

7\. Click on the arrow in the top right menu and select "Signed transactions "

8\. The signatures (OCMF format) are displayed under "Meter data":



The OCMF message can be validated with the transparency software.




![Meter Transactions – figure 5](/img/_en/information-security-meter-transactions/05.png)

![Meter Transactions – figure 6](/img/_en/information-security-meter-transactions/06.png)

![Meter Transactions – figure 7](/img/_en/information-security-meter-transactions/07.png)

### Activate MID Mode (show relevant data)

If the user wants to trigger the display of the relevant data (counter readings, versions, checksums) he has 2 possibilities:

- Start or restart the station

- Via the brightness sensor


Display relevant data via brightness sensor

Using a torch or lamp, the user can flash the following code:

Dark - Light - Dark - Light - Dark

Each state must last between 1 and 5 seconds.
