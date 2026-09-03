---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'The Minergie data exporter enables the direct transfer of measuring point data to the Minergie database.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

The Minergie data exporter enables the direct transfer of measuring point data to the Minergie database.



With the data in the Minergie database, Minergie can carry out chargeable plan data and actual data comparisons.

This product is called Minergie Monitroing+ and makes it possible to quickly and easily identify potential for improvement and detect misconfigurations.



![Minergie Exporter – figure 1](/img/_en/interfaces-minergie-exporter/01.png)

## Login Minergie data exporter

Every smart-me partner with the Minergie System Integrator contract addendum receives the link to the exporter.

If you have yet to become a Minergie system integrator, become one and find out more here: [Start your Minergie-Partnership](/planung/minergie) 



1.  Log in with the login data of the respective smart-me object on [smart-me.com](http://smart-me.com)  and create the API key.

2.  Then log in to the Minergie Exporter (web address provided to you) with the same account data and create the configuration.


## Set up the export per object

1.  Press the "+" to create a new export task.


![Minergie Exporter – figure 2](/img/_en/interfaces-minergie-exporter/02.png)

2\. create an API key in the smart-me object.

Create a new key with a name of your choice. Select the rights with at least read rights.


![Minergie Exporter – figure 3](/img/_en/interfaces-minergie-exporter/03.png)

![Minergie Exporter – figure 4](/img/_en/interfaces-minergie-exporter/04.png)

![Minergie Exporter – figure 5](/img/_en/interfaces-minergie-exporter/05.png)

3\. store the key in the Minergie exporter order under API key

4\. under “Minergie target”, enter the object ID that you received from Minergie and its database via the label platform.

5\. link the relevant measuring points from the Minergie object to a measuring point in the smart-me account. sum counters can be created directl in the minergie exporter.

6\. start the transfer.

![Minergie Exporter – figure 6](/img/_en/interfaces-minergie-exporter/06.png)

## Data export function and frequency

The data exporter transfers the data once a day at 15-minute intervals.

The data from the past can be reloaded at any time and overwritten in the Minergie database.

If past data is loaded, the data is transferred one by one with the regular transfers. This can take a few days until all data from the past has been transferred.
