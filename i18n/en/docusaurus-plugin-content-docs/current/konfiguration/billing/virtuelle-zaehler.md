---
title: 'Virtual Meters'
slug: '/konfiguration/billing/virtuelle-zaehler'
description: 'Virtual meters allow mathematical operations to be performed across several physical meters.'
sidebar_label: 'Virtual Meters'
---
Virtual meters allow mathematical operations to be performed across several physical meters. This is mostly used in connection with smart-me Billing.

## Prerequisite

You need Professional licences for the real meters from which you create the virtual meter, as well as for the virtual meter itself.

## Purpose

Virtual meters are used in [Billing](/konfiguration/billing) to bill the solar tariff.

- They are used to calculate the sum of all consumers (total consumption in the solar tariff).

- The sum of all solar systems can be calculated, provided these are metered separately in a property.


Visualizations

- If no balancing meter has been installed in a property, it may be necessary to calculate the total consumption for individual [visualizations](/konfiguration/visualisierung).

- If a property has separately metered solar systems and a visualization with solar is required.


### Restriction

In Billing, virtual meters cannot be assigned to a billing unit.

- Virtual meters can be used for the virtual tariff structures in Billing, but billing with virtually calculated meters is not permitted. For this reason, Billing does not offer a virtual meter as a selection option.


## Creating a virtual meter

To create a virtual meter, proceed as follows:

- Log in to the smart-me [website](https://web.smart-me.com/login/).

- Click on Configuration (Konfiguration)

- Select Virtual Meters (Virtuelle Zähler)

- Click on Add (Hinzufügen)

- Enter a name for the virtual meter.

- Clicking in the Formula (Formel) text field displays all available meters.

- Then an operator must be inserted and confirmed with Enter (e.g. "+")

- Add all desired meters and complete them with an appropriate operator.


Note: If the virtual meter is created as a total consumption meter for Billing, we recommend naming it Total consumption (Gesamtverbrauch).

![Virtual meters – Figure 1](/img/konfiguration-billing-virtuelle-zaehler/01.png)

### Supported operators

- () Brackets

- + Plus

- − Minus

- \* Multiplication

- / Division

- abs() Absolute value


## Creating a total consumption meter for the solar tariff and battery tariff

The Sum all electricity meters (Summiere alle Stromzähler) function is helpful in an environment with many meters. It lets you calculate the sum of all meters.

- Enter a name for the virtual meter.

- Next to Formula (Formel), select the down arrow on the right.

- Select Sum all electricity meters (Summieren alle Stromzähler).

- If meters (e.g. solar or balancing) are not needed, they must be removed. The meters and the associated "+" must be removed.


![Virtual meters – Figure 2](/img/konfiguration-billing-virtuelle-zaehler/02.png)

### Adding the correct meters to the virtual total consumption

- Make sure that the sum of the meters covers exactly 100% of the power consumed.

- For devices connected in series, only the devices closer to the sub-distribution board or the building connection are relevant. (Example: e-mobility)
    Make sure that when the outgoing feeder is referenced, the charging stations behind it are removed from the sum.


![Virtual meters – Figure 3](/img/konfiguration-billing-virtuelle-zaehler/03.png)
