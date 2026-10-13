---
title: 'Electricity and multiple heating systems'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configuration without automatic electricity billing'
sidebar_label: 'Electricity and multiple heating systems'
---
## Configuration without automatic electricity billing

Advantage:

- No need to enter tenant contracts twice


Disadvantages:

- No automatic billing for electricity

- Electricity tariffs must be entered several times (per property)


### Electricity with or without e-mobility and multi-energy with several buildings and individual heating systems. (Housing development)

Relevant for ZEVs (associations for own consumption) with electricity meters, multi-energy meters, several buildings and optionally charging stations.

For sites with several buildings and individual heating systems, create one property per heating system. So if three buildings have different heating systems, the configuration must be carried out according to 3c.

Note:
If only one building has its own heating system and the other two share a central heating system, two properties are enough, grouping the consumers accordingly.

Example:
Three buildings named Altgasse 13, Altgasse 15+17 and Altgasse 19.
Each has its own heat pump for heating and domestic hot water.

3c. Basic structure

![Electricity and multiple heating systems – Figure 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Assigning the meters

Use drag and drop to add the relevant meters to the nodes.

Important information on the assignment:

Electricity / heat / water

Assign metering points directly to billing units only if the invoice recipient will later pay 100% of the consumption.

If you want to assign a meter only partially to an individual billing unit, move the meter into a node inside the "Technical meters" ("Technische Zähler") node.

Later, in Billing, such a meter can be split by percentage.

Examples:

- Common area meter

- Heat meter for a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments. Instead, create a separate billing unit for the charging station. This makes tenant changes easier to handle.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility outgoing circuit and assign the outgoing circuit meter to that node. This gives you the total consumption of all charging stations.



3c. Detailed structure with meters

![Electricity and multiple heating systems – Figure 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Finally, create the alarms for a connection failure.

This way you notice early when a meter fails and keep the resulting gap in the measurement data as small as possible. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)

## Configuration with automatic electricity billing

Advantages:

- Automatic billing for electricity

- Electricity tariffs only need to be entered once


Disadvantage:

- Tenant contracts must be entered several times


For this configuration, an additional property must be created just for electricity. It contains all apartments of the three buildings.

Only the electricity meters are assigned in this property.

![Electricity and multiple heating systems – Figure 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Finally, create the alarms for a connection failure.

This way you notice early when a meter fails and keep the resulting gap in the measurement data as small as possible. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
