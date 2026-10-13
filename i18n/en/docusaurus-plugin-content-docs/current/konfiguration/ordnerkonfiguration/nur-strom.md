---
title: 'Property with electricity only'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Electricity only, with or without e-mobility, in single buildings or housing developments'
sidebar_label: 'Property with electricity only'
---
### Electricity only, with or without e-mobility, in single buildings or housing developments

Relevant for ZEVs (associations for own consumption) with electricity meters and optional charging stations.

Folder structure for smart-me Billing electricity

Folder structure: a two-level structure is mandatory.

This is where a billing is set up. It contains all apartments, rooms and parking spaces as subfolders, together with their relevant electricity meters.

- 1 folder for the property (e.g. Altgasse ZEV)

    - 1 subfolder per billing unit, i.e. per apartment or invoice recipient. Our suggestion for the folder name


Naming billing units (tips):

- -   ZEV with one building: apartment name (e.g. APT UF Left, APT UF, right, etc....)

    - ZEV with several buildings:  building name apartment name (e.g. Altgasse 13 APT UF Left, Altgasse13 APT UF, right, etc....)


3a. Basic structure

![Property with electricity only – Figure 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assigning the meters

Use drag and drop to add the relevant meters to the nodes.

Important information on the assignment:

Electricity / heat / water

Only assign metering points directly to billing units if the invoice recipient will later have to pay 100% of the consumption.

If you only want to assign part of a meter to an individual billing unit, move the meter into a node within the "Technical meters" ("Technische Zähler") node.

A meter of this kind can later be distributed by percentage in Billing.

Examples:

- General meter

- Heat meter of a floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead, create a separate billing unit for the charging station. This makes tenant changes easier to handle.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility feeder as a billing unit and assign the feeder meter to that node. This gives you the total consumption of all charging stations.



3a. Detailed structure with meters

![Property with electricity only – Figure 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Finally, create the alarms for a connection failure.

This way you notice early when a meter fails, and you minimise the resulting gap in the measurement data. 

### Next step

[Continue to creating the alarms](/konfiguration/wenndann-aktionen/alarme)
