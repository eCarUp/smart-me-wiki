---
title: 'Property with electricity and heat / water'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configuration without automatic electricity billing'
sidebar_label: 'Property with electricity and heat / water'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
## Configuration without automatic electricity billing

Advantage:

- No duplicate entry of tenant contracts required


Disadvantage:

- No automatic billing for electricity

- Multiple entry of the electricity tariffs (per property)


### 3b. Electricity with or without e-mobility and multi-energy with one building.

Possible differences: For properties with electricity meters only and no multi-energy, the heat pump can be allocated directly to the apartments using a distribution key. With multi-energy, the heat pump is set up as a sub-meter (separate folder) so that a separate invoice is created, which must then be transferred as a cost factor in the VEWA configuration.

3b. Basic structure

![Property with electricity and heat / water – Figure 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Assigning the meters

Use drag and drop to add the relevant meters to the nodes.

Important information on assignment:

Electricity / heat / water

Only assign metering points directly to billing units if the invoice recipient will later have to pay 100% of the consumption.

If you only want to assign a meter to part of an individual billing unit, move the meter into a node within the "Technical meters" ("Technischen Zähler") node.

Later, such a meter can be distributed by percentage in Billing.

Examples:

- General meter

- Heat meter of a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead, create a separate billing unit for the charging station. This makes tenant changes easier to handle.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility outgoing circuit and assign the outgoing circuit meter to the node. This gives you the total consumption of all charging stations.



3b. Detailed structure with meters

![Property with electricity and heat / water – Figure 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Finally, create the alarms for a connection failure.

This way, you notice early on when a meter fails and minimize the resulting gap in the metering data. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)

## Configuration with automatic electricity billing

Advantage:

- Automatic billing for electricity

- No duplicate entry of electricity tariffs


Disadvantage:

- Multiple entry of tenant contracts


### Coming soon

Disclaimer:

For this configuration, an additional property for electricity only must be created, which contains all apartments of the three buildings.

Only the electricity meters are assigned in this property.

### Finally, create the alarms for a connection failure.

This way, you notice early on when a meter fails and minimize the resulting gap in the metering data. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
