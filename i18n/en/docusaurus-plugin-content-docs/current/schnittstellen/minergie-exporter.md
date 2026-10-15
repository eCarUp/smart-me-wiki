---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'The Minergie data exporter transfers metering point data directly to the Minergie database.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

The Minergie data exporter transfers metering point data directly to the Minergie database.



With the data in the Minergie database, Minergie can carry out paid comparisons of planned and actual data.

This product is called Minergie Monitoring+ and makes it quick and easy to identify potential for improvement and to uncover misconfigurations.



![Minergie Exporter – Figure 1](/img/schnittstellen-minergie-exporter/01.png)

## Minergie data exporter login

Every smart-me partner with the Minergie system integrator contract addendum receives the link to the exporter.

If you are not yet a Minergie system integrator, become one and find out more here: [Become a Minergie partner](/planung/minergie) 



1.  To do this, log in on [smart-me.com](http://smart-me.com) with the login details of the relevant smart-me property and create the API key.

2.  Then log in to the Minergie Exporter (at the web address provided to you) with the same account details and create the configuration.



## Setting up the export for each property

1.  Click "+" to create a new export task.


![Minergie Exporter – Figure 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Create an API key in the smart-me property.

Create a new key with a name of your choice. Assign at least read permissions.


![Minergie Exporter – Figure 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figure 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figure 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Enter the key in the Minergie Exporter task under API key (API-Key)

4\. Under "Minergie target", enter the property ID that you received from Minergie and its database via the label platform.

5\. Link the relevant metering points of the Minergie property to a metering point in the smart-me account. Totalizing meters can be created directly in the Minergie Exporter.

6\. Start the transfer.

![Minergie Exporter – Figure 6](/img/schnittstellen-minergie-exporter/06.png)

## Data export function and frequency

The data exporter transfers the data once per day in 15-minute intervals.

Historical data can be reloaded at any time and overwritten in the Minergie database.

When historical data is loaded, it is transferred bit by bit alongside the regular transfers. It may take a few days until all historical data has been transferred.
