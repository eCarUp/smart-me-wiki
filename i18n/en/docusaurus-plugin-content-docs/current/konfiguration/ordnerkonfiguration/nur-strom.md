---
title: 'Property with electricity only'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Electricity only, with or without e-mobility, in single buildings or developments'
sidebar_label: 'Property with electricity only'
---
### Electricity only, with or without e-mobility, in single buildings or developments

Relevant for ZEVs (associations for own consumption) with an electricity meter and, optionally, charging stations.

Folder structure for smart-me Billing Electricity

Folder structure: two levels are mandatory.

This is where a billing setup is created; it covers all apartments, rooms and parking spaces as subordinate folders along with their relevant electricity meters

- 1 folder for the property (e.g. Altgasse ZEV)

    - 1 subfolder per billing unit, i.e. per apartment or per invoice recipient. Our suggestion for naming the folder


Naming billing units (tips):

- -   ZEV with one building: apartment designation (e.g. APT upper floor left, APT upper floor right, etc....)

    - ZEV with several buildings: building designation apartment designation (e.g. Altgasse 13 APT upper floor left, Altgasse13 APT upper floor right, etc....)


3a. Basic structure

![Property with electricity only – figure 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assigning the meters

Use drag and drop to assign the relevant meters to the nodes.

Important information on assignment:

Electricity / heat / water

Only assign metering points directly to the billing units if the invoice recipient must later pay 100% of the consumption.

If you want to assign a meter to only part of an individual billing unit, move the meter into a node inside the "Technical meters" (Technische Zähler) node.

Later, in Billing, such a meter can be distributed on a percentage basis.

Examples:

- General meter

- Heat meter of a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead, create a separate billing unit for the charging station. This makes tenant changes easier to carry out.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility outgoing feeder as a billing unit and assign the outgoing feeder meter to that node. This gives you the total cost for all charging stations.



3a. Detailed structure with meters

![Property with electricity only – figure 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Finally, create the alarms for a connection failure.

This way you notice early on when a meter fails and minimize the resulting gap in the measurement data. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
