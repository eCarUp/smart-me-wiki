---
title: 'Virtual Meters'
slug: '/konfiguration/billing/virtuelle-zaehler'
description: 'With virtual meters, mathematical operations can be made over multiple physical meters.'
sidebar_label: 'Virtual Meters'
---
With virtual meters, mathematical operations can be made over multiple physical meters. Mostly this is used in connection with smart-me billing.

## Requirement

You will need a professional license for the real meters from which you calculate the virtual meter and for the virtual meter.

A virtual meter is based on a mathematical formula including the data of one or more physical meters. 

Example: Meter A - (Meter B\*2) = Virtual Meter C

The following operations can be used to define a virtual meter:

() Parenthesis

+ Plus

− Minus

\* Multiplication

/ Division

abs() absolute value

To create a virtual meter follow these steps:

1.  Log in to your [smart-me](https://web.smart-me.com/login/) account

2.  Click on the top right on "Configuration"

3.  Click on "Virtual meters"

4.  Click on "Add"

5.  Enter the name and the defining formula for your meter


### Create total consumption meters for the solar tariff and battery tariff

The Sum all electricity meters function is helpful if you have an environment with many meters. It can be used to calculate the total of all meters.

- Enter a name for the virtual meter.

- Select the down arrow for the formula on the right.

- Select Sum all electricity meters.

- If meters (e.g. solar or balance) are not required, they must be removed. The meters and the associated “+” must be removed.


![Virtual Meters – figure 1](/img/_en/configuration-billing-virtual-meters/01.png)

### Add the correct meters to the virtual total consumption

- Care must be taken to ensure that the sum of the meters covers exactly 100% of the power consumed.

- For devices in series, only the devices that are closer to the sub-distribution board or the house connection are relevant. (Example e-mobility)
    It must be ensured that if the outgoing circuit is referenced, the charging stations behind it are removed from the total.


![Virtual Meters – figure 2](/img/_en/configuration-billing-virtual-meters/02.png)
