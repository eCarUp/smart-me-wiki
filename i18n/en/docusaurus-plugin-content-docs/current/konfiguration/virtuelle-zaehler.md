---
title: 'Virtual Meters'
slug: '/konfiguration/virtuelle-zaehler'
description: 'Virtual meters let you perform mathematical operations across several physical meters.'
sidebar_label: 'Virtual Meters'
---
<Menueweg>Virtual Meters</Menueweg>

Virtual meters let you perform mathematical operations across several physical meters. They are mostly used together with smart-me Billing.

## Requirement

You need Professional licenses for the real meters you create the virtual meter from, and also for the virtual meter itself.

## Purpose

Virtual meters are used in [Billing](/konfiguration/billing) to bill the solar tariff.

- They calculate the sum of all consumers (total consumption in the solar tariff).

- They can add up all solar systems, if these are metered separately in a property.


Visualizations

- If a property has no balance meter installed, some [visualizations](/konfiguration/visualisierung) may need the total consumption to be calculated.

- If a property has separately metered solar systems and you want a visualization that includes solar.


### Restriction

In Billing, virtual meters cannot be assigned to a billing unit.

- You can use virtual meters for the virtual tariff structures in Billing, but billing with virtually calculated meters is not allowed. This is why Billing does not offer virtual meters for selection.


## Creating a virtual meter

To create a virtual meter, proceed as follows:

- Log in to the smart-me [website](https://web.smart-me.com/login/).

- Click Configuration (Konfiguration)

- Select Virtual Meters (Virtuelle Zähler)

- Click Add (Hinzufügen)

- Enter a name for the virtual meter.

- Click in the formula text field to display all available meters.

- Then insert an operator and confirm with Enter (e.g. "+")

- Add all the meters you need and connect them with the appropriate operator.


Note: If you create the virtual meter as a total consumption meter for Billing, we recommend naming it Total consumption (Gesamtverbrauch).

![Virtual meters – figure 1](/img/konfiguration-virtuelle-zaehler/01.png)

### Supported operators

- () Brackets

- + Plus

- − Minus

- \* Multiplication

- / Division

- abs() Absolute value


## Creating a total consumption meter for the solar tariff and battery tariff

The Sum all electricity meters (Summiere alle Stromzähler) function is useful in environments with many meters. It lets you add up all meters.

- Enter a name for the virtual meter.

- Next to Formula (Formel), select the down arrow on the right.

- Select Sum all electricity meters (Summieren alle Stromzähler).

- If meters (e.g. solar or balance meters) are not needed, you must remove them. Remove both the meters and their associated "+".


![Virtual meters – figure 2](/img/konfiguration-virtuelle-zaehler/02.png)

### Adding the correct meters to the virtual total consumption

- Make sure that the sum of the meters covers exactly 100% of the power drawn.

- For devices connected in series, only the devices closer to the sub-distribution board or the building connection are relevant. (Example: e-mobility)
    If you reference the outgoing circuit, make sure to remove the charging stations behind it from the sum.


![Virtual meters – figure 3](/img/konfiguration-virtuelle-zaehler/03.png)
