---
title: 'Electricity and multiple heating systems'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configuration without automatic electricity billing'
sidebar_label: 'Electricity and multiple heating systems'
---
## Configuration without automatic electricity billing

Advantage:

- No duplicate entry of tenant contracts required


Disadvantage:

- No automatic billing for electricity

- Multiple entry of electricity tariffs (per property)


### Electricity with or without e-mobility and multi-energy with several buildings and individual heating systems. (Development)

Relevant for ZEVs (associations for own consumption) with electricity meters, multi-energy meters, several buildings and optionally charging stations.

For sites with several buildings and individual heating systems, one property must be created per heating system. So if three buildings have different heating systems, the configuration must be carried out according to 3c.

Note:
If only one building has an individual heating system and the other two share a central heating system, two properties are enough to group the consumers appropriately.

Example:
Three buildings with the names Altgasse 13, Altgasse 15+17, Altgasse 19.
Each of them has its own heat pump for heating and domestic hot water.

3c. Basic structure

![Electricity and multiple heating systems – figure 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Assigning the meters

Use drag and drop to assign the relevant meters to the nodes.

Important information on assignment:

Electricity / heat / water

Only assign metering points directly to the billing units if the invoice recipient has to pay 100% of the consumption later on.

If you only want to assign a meter to part of an individual billing unit, move the meter into a node within the "Technical meters" ("Technische Zähler") node.

Such a meter can later be distributed on a percentage basis in Billing.

Examples:

- Common area meter

- Heat meter of a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead create a separate billing unit for the charging station. This makes tenant changes easier to carry out.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility feeder and assign the feeder meter to the node. This gives you the total consumption for all charging stations.



3c. Detailed structure with meters

![Electricity and multiple heating systems – figure 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Finally, create the alarms for a connection failure.

This way you notice early on when a meter fails and minimize the gap in the measurement data that would otherwise result. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)

## Configuration with automatic electricity billing

Advantage:

- Automatic billing for electricity

- No duplicate entry of electricity tariffs


Disadvantage:

- Multiple entry of tenant contracts


For this configuration, an additional property must be created for electricity only, containing all apartments of the three buildings.

Only the electricity meters are assigned in this property.

![Electricity and multiple heating systems – figure 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Finally, create the alarms for a connection failure.

This way you notice early on when a meter fails and minimize the gap in the measurement data that would otherwise result. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
