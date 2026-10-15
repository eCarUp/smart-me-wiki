---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'The Minergie data exporter transfers measuring point data directly to the Minergie database.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

<div className="row">
<div className="col col--7">

The Minergie data exporter transfers measuring point data directly to the Minergie database.

Once the data is in the Minergie database, Minergie can carry out paid comparisons between planned data and actual data.

This product is called Minergie Monitoring+. It helps you quickly and easily identify potential improvements and detect misconfigurations.

</div>
<div className="col col--5 text--center">

![Minergie Exporter – Figure 1](/img/schnittstellen-minergie-exporter/01.png)

</div>
</div>

## Login Minergie data exporter

Every smart-me partner with the Minergie system integrator contract addendum receives the link to the exporter.

Not a Minergie system integrator yet? Become one and find out more here: [Become a Minergie partner](/planung/minergie) 



1.  To do this, log in on [smart-me.com](http://smart-me.com) with the login details of the relevant smart-me property and create the API key.

2.  Then log in to the Minergie Exporter (the web address provided to you) with the same account details and create the configuration.



## Setting up the export per property

1.  Click "+" to create a new export task.


![Minergie Exporter – Figure 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Create an API key in the smart-me property.

Create a new key with a name of your choice. Grant at least read permissions.


![Minergie Exporter – Figure 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figure 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figure 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Enter the key in the Minergie Exporter task under API key (API-Key)

4\. Under "Minergie target", enter the property ID you received from Minergie and its database via the label platform.

5\. Link the relevant measuring points from the Minergie property to a measuring point in the smart-me account. Totalizing meters can be created directly in the Minergie Exporter.

6\. Start the transfer.

![Minergie Exporter – Figure 6](/img/schnittstellen-minergie-exporter/06.png)

## Data export function and frequency

The data exporter transfers the data once per day in 15-minute intervals.

Historical data can be reloaded at any time and overwritten in the Minergie database.

When historical data is loaded, it is transferred bit by bit alongside the regular transfers. It may take a few days until all historical data has been transferred.
