---
title: 'Tenant electricity with non-participants'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer'
description: 'Folder structure for German tenant electricity according to metering concept MKD3, when individual parties continue to buy their electricity from the energy supplier.'
sidebar_label: 'Tenant electricity with non-participants'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Individual parties do not participate

This structure applies to [metering concept MKD3](/planung/mkd3-messkonzept-nicht-teilnehmer): behind the building connection there are both tenant electricity participants and parties that continue to buy their electricity directly from the energy supplier.

The difference from the standard structure is not the shape of the folder tree but **who is billed in it and which meters make up the balance**. Participation is not a property of the meter but of the contract. The structure must be able to reflect this, even if a party switches during the year.

![smart-me Billing for German tenant electricity – Figure 2](/img/konfiguration-billing-mieterstrom/02.png)


## Folder structure

- 1 folder for the property (e.g. Hauptstrasse 7 Mieterstrom)

    - 1 subfolder per **participating** billing unit

    - 1 subfolder "General" for the stairwell, outdoor lighting and similar outgoing circuits

    - 1 subfolder "Non-participants" for the parties outside the tenant electricity scheme

    - 1 subfolder "Technical meters" for everything that is distributed proportionally

The "Non-participants" node is not billed. It exists so that the meters of these parties remain visible and can be moved without rebuilding the structure when a contract changes.

## Assigning the meters

As with the standard: assign a meter directly to the billing unit if the invoice recipient bears the entire consumption; otherwise place it in the "Technical meters" node.

### Production and balance: this is where the difference lies

With MKD3, the building connection meter is **not** referenced as the balance meter. It also measures the consumption of the non-participants and would distort the balancing.

Instead:

- **Balance** (Bilanz): all participating apartments, parking spaces and the production

- **Production** (Produktion): all production meters of the solar system

- **Building connection meter** (Hausanschlusszähler): only for later verification, not used in the tariff calculation


### What this means for billing

With MKD3, the total grid electricity sold does **not** match the energy supplier's invoice, and the feed-in quantity does not match the value of the building connection meter. This is expected: the remuneration for non-participants is made once per billing period.

So do not expect the figures to match down to the kilowatt hour. The check works differently than with the standard metering concept.

### Charging stations

Create a separate billing unit for each charging station; do not assign it to the apartment. If a non-participant has their own charging station, it belongs under the "Non-participants" node.

### Finally, create the alarms for a connection failure

This way you notice early when a meter fails, and you keep the gap in the metering data small.
