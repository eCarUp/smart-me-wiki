---
title: 'Property with electricity only'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Electricity only, with or without e-mobility, in single buildings or housing developments'
sidebar_label: 'Property with electricity only'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Meter & Folder Configuration</Menueweg>

### Electricity only, with or without e-mobility, in single buildings or housing developments

Relevant for ZEVs (associations for own consumption) with electricity meters and optional charging stations.

Folder structure for smart-me Billing electricity

Folder structure: a two-level structure is mandatory.

Billing is set up at this level. It includes all apartments, rooms and parking spaces as subfolders, together with their relevant electricity meters.

- 1 folder for the property (e.g. Altgasse ZEV)

    - 1 subfolder per billing unit, i.e. per apartment or invoice recipient. Our suggestion for the folder name


Naming billing units (tips):

- -   ZEV with one building: apartment name (e.g. APT UF Left, APT UF, Right, etc....)

    - ZEV with several buildings:  building name and apartment name (e.g. Altgasse 13 APT UF Left, Altgasse13 APT UF, Right, etc....)


3a. Basic structure

![Property with electricity only – Figure 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assigning the meters

Use drag and drop to add the relevant meters to the nodes.

Important information on assignment:

Electricity / heat / water

Only assign metering points directly to billing units if the invoice recipient will later pay 100% of the consumption.

If you want to assign only part of a meter to an individual billing unit, move the meter into a node within the "Technical Meters" ("Technische Zähler") node.

Later, such a meter can be allocated by percentage in Billing.

Examples:

- General meter

- Heat meter for one floor that serves 4 billing units


Charging stations with smart-me Pico / Zaptec / Easee

Do not assign charging stations directly to apartments; instead, create a separate billing unit for the charging station. This makes tenant changes easier to handle.

Charging stations from other manufacturers

Charging stations from other manufacturers are not managed or billed directly in smart-me. In this case, create a node for the e-mobility outgoing circuit as a billing unit and assign the outgoing circuit meter to that node. This gives you the total consumption of all charging stations.



3a. Detailed structure with meters

![Property with electricity only – Figure 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Finally, create the alarms for a connection failure.

This way, you notice early when a meter fails and minimize the resulting gap in the measurement data.
