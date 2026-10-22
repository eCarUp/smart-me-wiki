---
title: 'Tenant Electricity Standard'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-standard'
description: 'Folder structure for German tenant electricity when all consumers participate in the tenant electricity scheme (standard metering concept).'
sidebar_label: 'Tenant Electricity Standard'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### All consumers participate in tenant electricity

This structure applies to the [standard metering concept](/planung/standard-messkonzept): only parties participating in tenant electricity are connected behind the building connection. If even one party does not participate, use [Tenant electricity with non-participants](/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer) instead.


![smart-me Billing for German tenant electricity – Figure 1](/img/konfiguration-billing-mieterstrom/01.png)



## Folder structure

A two-level structure is mandatory — billing is set up at the top level and requires one folder per invoice recipient below it.

- 1 folder for the property (e.g. Hauptstrasse 7 Mieterstrom)

    - 1 subfolder per billing unit, i.e. per apartment or invoice recipient

    - 1 subfolder "General" for the stairwell, outdoor lighting and similar outgoing circuits

    - 1 subfolder "Technical meters" for everything that will later only be distributed proportionally

Naming of the billing units:

- One building: apartment designation (e.g. APT 1.1, APT 1.2, APT 2.1)

- Several buildings: building designation and apartment designation (e.g. Hauptstrasse 7 APT 1.1)

## Assigning the meters

Assign the meters to the nodes using drag and drop.

**Assign directly to the billing unit** — if the invoice recipient pays for the entire consumption of this meter.

**To the "Technical meters" node** — if a meter supplies several billing units and is later distributed by percentage. Examples: common area meter, heat pump for several apartments.

### Production and balance

For the standard metering concept, two roles are added that do not exist in this form in the Swiss structure:

- **Balance meter** — the building connection meter. It is referenced in the tariff configuration.

- **Production meter** — all meters of the solar system and, if present, the battery.

Neither is assigned to an apartment; both remain at property level. 

### Charging stations

Do not assign charging stations directly to an apartment; instead, create a separate billing unit for them. This allows tenant changes to be handled without restructuring.

Charging stations from other manufacturers are not managed directly in smart-me. Create a node for the e-mobility outgoing circuit and assign the outgoing circuit meter to it — this way you at least get the total consumption.

### Finally, create the alarms for a connection failure

This lets you notice early when a meter fails and keeps the gap in the metering data small.
