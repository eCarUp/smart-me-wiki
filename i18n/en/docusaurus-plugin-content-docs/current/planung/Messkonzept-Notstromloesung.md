---
title: 'Measurement concepts emergency power solutions'
slug: '/planung/Messkonzept-Notstromloesung'
description: 'We explain here which measures must be taken to correctly measure an emergency power solution so that it can be used for billing in smart-me billing.'
sidebar_label: 'Measurement concepts emergency power solutions'
---
We explain here which measures must be taken to correctly measure an emergency power solution so that it can be used for billing in smart-me billing. 



### Requirements

You need a smart-me Professional subscription 

### Requirements

This measurement concept can be used if an emergency power system is used in an object. 

We assume that the emergency power system is a black box and neither PV nor the battery can be measured AC-side in the "emergency power device". 

Note: If the manufacturer allows the installation of devices in the emergency power unit, you can provide a normal measurement concept from smart-me and install the necessary meters directly in the emergency power unit.

### Sketch

HAK, apartment, general and heating are measured, according to general measuring concept (circle with a + in the circle)

Upstream and downstream of the emergency power unit one meter each is installed inverted (circle with a -1). Emergency power excl. solar and Emergency power incl. solar.

Optionally, another PV system can be metered between the two meters "Emergency power excl. solar" and "Emergency power incl. solar".

![Measurement concepts emergency power solutions – figure 1](/img/_en/planning-measurement-concepts-emergency-power-solutions/01.png)

### Measuring concept

In order to measure the emergency power system, it is necessary to install a meter "upside down" before and after the emergency power system. The meter can be connected upside down by exchanging the cable routing between IN and OUT at L1, L2 and L3.

In this case, one meter is connected "upside down" before production and one meter is connected "downside down" after production. (According to the sketch with counter -1)

The two meters production "reversed" usually include only the emergency power system. However, it is possible to insert a PV system between the meters if this is to be billed at the same price in smart-me billing. (Production alternative energy).

In addition, a virtual meter is required, which is composed as follows:

Production (virtual) = "Emergency power incl. solar" minus "Emergency power excl. solar"+ balance meter

![Measurement concepts emergency power solutions – figure 2](/img/_en/planning-measurement-concepts-emergency-power-solutions/02.png)

### Billing

A battery tariff must be defined in billing. The solar meter corresponds to the virtual defined meter "Production".

All other configuration can be entered as usual.

![Measurement concepts emergency power solutions – figure 3](/img/_en/planning-measurement-concepts-emergency-power-solutions/03.png)

### Restrictions

- Installation of two inverted meters

- one additional virtual meter required

- Simple virtual meters (apartment) are not possible.

- Graphic monitoring can have a self-consumption that is below the 0 line.


There are no other known restrictions.

Graphic Monitoring

In the Monitoring graphic, the self-consumption is displayed below the 0 line if:

- The emergency power solution requires standby power

- The emergency power solution requires power (e.g. Heating or calibration charge of the salt battery with mains power because not enough power was produced on the DC side.


![Measurement concepts emergency power solutions – figure 4](/img/_en/planning-measurement-concepts-emergency-power-solutions/04.png)
