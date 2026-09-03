---
title: 'Property with Electricity and Heat / Water'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configuration without automatic electricity billing'
sidebar_label: 'Property with Electricity and Heat / Water'
---
## Configuration without automatic electricity billing

Advantage:

- No duplicate entry of tenant contracts required


Disadvantage:

- No automatic billing for electricity

- Multiple entry of electricity tariffs (per property)


### 3b. Electricity with or without e-mobility and multi-energy with one building.

Possible differences: For properties with electricity meters only and no multi-energy, the heat pump can be assigned directly to the apartments using a distribution key. With multi-energy, the heat pump is stored as a sub-meter (separate folder) so that a separate bill is created, which then has to be transferred to the VEWA configuration as a cost factor.

3b. Basic structure

![Property with Electricity and Heat / Water – Figure 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Assigning the meters

Use the drag and drop function to assign the relevant meters to the nodes.

Important information on assignment:

Electricity / heat / water

Only assign metering points directly to billing units if the invoice recipient has to pay 100% of the consumption later.

If you only want to assign a meter to part of an individual billing unit, move the meter into a node within the "Technical meters" ("Technischen Zähler") node.

Later, such a meter can be distributed by percentage in Billing.

Examples:

- Common area meter

- Heat meter of a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead, create a separate billing unit for the charging station. This makes tenant changes easier to carry out.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility feeder and assign the feeder meter to the node. This gives you the total expenditure for all charging stations.



3b. Detailed structure with meters

![Property with Electricity and Heat / Water – Figure 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Finally, create the alarms for a connection failure.

This way you notice early on when a meter fails and you minimise the gap in measurement data that results from it. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)

## Configuration with automatic electricity billing

Advantage:

- Automatic billing for electricity

- No duplicate entry of electricity tariffs


Disadvantage:

- Multiple entry of tenant contracts


### Comming soon

Disclaimer:

For this configuration, an additional property for electricity only has to be created, which contains all apartments of the three buildings.

Only the electricity meters are assigned in this property.

### Finally, create the alarms for a connection failure.

This way you notice early on when a meter fails and you minimise the gap in measurement data that results from it. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
