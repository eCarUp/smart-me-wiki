---
title: 'Virtual Meters'
slug: '/konfiguration/virtuelle-zaehler'
description: 'Virtual meters allow you to perform mathematical operations across several physical meters.'
sidebar_label: 'Virtual Meters'
---
<Menueweg>Virtual Meters</Menueweg>

Virtual meters allow you to perform mathematical operations across several physical meters. This is mostly used in connection with smart-me Billing.

## Prerequisite

You need Professional licenses for the real meters from which you create the virtual meter, as well as for the virtual meter itself.

## Purpose

Virtual meters are used in [Billing](/konfiguration/billing) to bill the solar tariff.

- They are used to calculate the sum of all consumers (total consumption in the solar tariff).

- The sum of all solar systems can be calculated, provided they are metered separately in a property.


Visualizations

- If no balance meter has been installed in a property, it may be necessary to calculate the total consumption for individual [visualizations](/konfiguration/visualisierung).

- If a property has separately metered solar systems and a visualization with solar is required.


### Limitation

Virtual meters cannot be assigned to a billing unit in Billing.

- Virtual meters can be used for the virtual tariff structures in Billing, but billing with virtually calculated meters is not permitted. For this reason, Billing does not offer a virtual meter as an option.


## Create a virtual meter

To create a virtual meter, proceed as follows:

- Log in to the smart-me [website](https://web.smart-me.com/login/).

- Click Configuration (Konfiguration)

- Select Virtual Meters (Virtuelle Zähler)

- Click Add (Hinzufügen)

- Enter a name for the virtual meter.

- Clicking in the Formula (Formel) text field displays all available meters.

- Then insert an operator and confirm it with Enter (e.g. "+")

- Add all required meters and complete them with an appropriate operator.


Note: If the virtual meter is created as a total consumption meter for Billing, we recommend naming it Total consumption (Gesamtverbrauch).

![Virtual meters – Figure 1](/img/konfiguration-virtuelle-zaehler/01.png)

### Supported operators

- () Brackets

- + Plus

- − Minus

- \* Multiplication

- / Division

- abs() Absolute value


## Create a total consumption meter for the solar tariff and battery tariff

The Sum all electricity meters (Summiere alle Stromzähler) function is helpful in an environment with many meters. It allows you to calculate the sum of all meters.

- Enter a name for the virtual meter.

- Under Formula (Formel), select the down arrow on the right.

- Select Sum all electricity meters (Summieren alle Stromzähler).

- If meters (e.g. solar or balance) are not required, they must be removed. The meters and the associated "+" must be removed.


![Virtual meters – Figure 2](/img/konfiguration-virtuelle-zaehler/02.png)

### Add the correct meters to the virtual total consumption

- Make sure that the sum of the meters covers exactly 100% of the power consumed.

- For devices in series, only the devices closer to the sub-distribution board or the building connection are relevant. (Example: e-mobility)
    Make sure that if the outgoing feeder is referenced, the charging stations behind it are removed from the sum.


![Virtual meters – Figure 3](/img/konfiguration-virtuelle-zaehler/03.png)
