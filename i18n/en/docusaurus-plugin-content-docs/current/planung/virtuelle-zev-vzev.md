---
title: 'Virtual ZEV (vZEV)'
slug: '/planung/virtuelle-zev-vzev'
description: 'The virtual Assosation for Self Consumption - vZEV'
sidebar_label: 'Virtual ZEV (vZEV)'
---
## The virtual Assosation for Self Consumption - vZEV

A vZEV corresponds to a grid-inclusive connection for self-consumption. In contrast to the conventional ZEV, where all buildings must have one and the same grid connection, with a vZEV it is possible to combine several grid connections on one and the same low-voltage transformer (&lt; 1kV).

In addition to this basic requirement, further points must be clarified as to whether and with whom in the neighborhood a vZEV can be made possible.

These include

- Effective network topology

- Connection types (socket networks or distribution cabinets)


### Step 1: Initial vZEV clarification at DSO

This initial clarification of these topics is requested directly from the distribution grid operator.

It then becomes clear whether a vZEV is possible, and if so, with which participants.

This information must be available from the DSO within 14 days at the latest with a positive or negative response and justification.

### Step 2: Determine participants and apply for vZEV

The second step is to clarify interests. You inform the potential participants about the possibility of participating in vZEV. The information about this, as well as the positive responses, should be recorded in writing with signatures for participation, which will later be required for data transmission approval, as well as an attachment to contracts and other documents.

At this point, an official vZEV application with all interested parties must be submitted to the DSO. Within 3 months, further points regarding the vZEV will be checked and completed.

- Production capacity must be at least 10% of the supply capacity.

- Are all participants behind the same connection point at low-voltage level?

- Are smart meters already installed at all locations or not? (Must then be retrofitted)

- Further hardware available for local reading of the meter points and/or application for SDTA transmission via Swisseldex available?


After all the above points have been fulfilled and around 3 months have passed, the vZEV can start operating.

![Virtual ZEV (vZEV) – figure 1](/img/_en/planning-virtual-zev-vzev/01.png)

## Previous model landscape

ZEV: Assosiation for self-consumption

- Private metering

- Private billing

- DSO meter at the feed-in point with bill from the DSO


DSO model:

- Metering by DSO

- Billing and tariffing by DSO

- Balancing on consumption and solar production meters


Normal consumer:

- Electricity consumer at the DSO as a house or flat in an EFH or MFH


![Virtual ZEV (vZEV) – figure 2](/img/_en/planning-virtual-zev-vzev/02.png)

## vZEV Models

### vZEV individual building (virtually balanced ZEV)

A building shares a common house connection.



It is easy to switch from the DSO model to vZEV. 

This means that the previous DSO model is in principle simply managed and billed privately as vZEV and is therefore detached from the services of the DSO.

![Virtual ZEV (vZEV) – figure 3](/img/_en/planning-virtual-zev-vzev/03.png)

### Multibuilding vZEV (Extended vZEV)

Several ZEVs or buildings with their own grid connection share the same low-voltage connection (&lt;1kV)

These may now use the connecting lines between the buildings to transmit solar power.

This means that the energy produced in the buildings on the left is also made available to the MFH on the right.

But not to the EFH, as this is outside the approved topology of a vZEV.

The requirements in the topology are defined in more detail below.

![Virtual ZEV (vZEV) – figure 4](/img/_en/planning-virtual-zev-vzev/04.png)

### Network topologies for creating an extended vZEV

Same busbar or distribution box at the low-voltage level (&lt; 1kV)

All buildings are routed to the same distribution box or busbar at low-voltage level NE7.

![Virtual ZEV (vZEV) – figure 5](/img/_en/planning-virtual-zev-vzev/05.png)

Same busbar on the low-voltage side on the mains transformer (&lt;1kV)

All buildings are connected to the same transformer and are connected to the same busbar at the low-voltage level.

![Virtual ZEV (vZEV) – figure 6](/img/_en/planning-virtual-zev-vzev/06.png)

Muffle networks

An extended vZEV over several buildings is only possible if buildings share the same muffle (very rarely the case)

However, it is always possible to create a vZEV for a single building on it's single muffle.

![Virtual ZEV (vZEV) – figure 7](/img/_en/planning-virtual-zev-vzev/07.png)

### Possible members of a vZEV

In a vZEV, different infrastructures from the grid operator and from the private sector can come together. The metering of the various buildings can be provided in different ways and combined into a standardized tariff model in the VZEV.

- ZEV as a practical model of the energy supplier (DSO)

- ZEV private metering

- Single-family homes with solar production

- Apartments and houses without solar production


![Virtual ZEV (vZEV) – figure 8](/img/_en/planning-virtual-zev-vzev/08.png)

### Meter infrastructure for vZEV tariffing model from smart-me

The tariffing of a vZEV is based on the equality of the participants. All participants have the same entitlement to the solar power currently produced.

In order for the tariffing of the different models to work together, selected meter units are required in order to link them as a reference in our tariff.

The following image shows all relevant measuring points that are required for correct balancing and tariffing per infrastructure type.

![Virtual ZEV (vZEV) – figure 9](/img/_en/planning-virtual-zev-vzev/09.png)

### DSO-Model or vZEV single building

In this model, there is no metering point as a balance meter, neither from the energy supplier nor privately. Therefore, this ZEV is balanced virtually. This requires the metering of all producers and all consumers.

### Private ZEV (with balance meter)

In this model, there is at least one measuring point of the energy supplier at the main connection point. The data from this measuring point can be imported into smart-me either via a private sub-metering or via the energy supplier's data hub.

Private sub-metering enables efficient real-time control of the ZEV, which is only possible to a limited extent with the energy supplier's meter.

[More about the measuring concept of private ZEVs](https://doc.smart-me.com/planning/zev-single-building)

### House with solar production (EFH)

In this model, there is at least one measuring point of the energy supplier at the main connection point and in some cases also a production measurement. The production measurement must be available for the tariffing of the VZEV. This data can be collected by measurement using a smart-me Telstar as a private measurement or as a data hub import via Swisseldex.

### House or apartment without solar production (EFH)

In this model, there is at least one measuring point of the energy supplier at the house connection. The data from these consumers can be collected as a data hub import via Swisseldex.
In case a multi family house without solar production wants to join the vZEV it can also be measured by private meters for production and conumer units. The DSO must then install a house connection meter to tariff and balance the vZEV themselfs.

The meaurement model for a multi family house without solar but with pricate meters follows the model of the ZEV ignoring the solar production.

[Details on the configuration of vZEV tariffs](/konfiguration/billing/stromtarife-definieren)

## Plan your project now with our configurator

Based on your specifications, the project configurator creates a parts list of all smart-me products, the number of measuring points, and a visual diagram for review.

Ideal for planners and electrical specialists.

[Projektkonfigurator](https://doc.smart-me.com/planning/project-configurator)

### Measurement data import for energy suppliers' metering points

The measurement data of the relevant metering points can be imported via the Swisseldex data hub. Smart-me is listed as a recipient of this data at Swisseldex 

The data is sent by the energy suppliers to the smart-me import data hub via Swisseldex following a request and approval. The data can then be managed, visualized and billed in the respective smart-me account.

Properties of the energy supplier data:

- EBIX, SDAT data format

- 15-minute resolution

- Provision approx. every 24 hours unverified

- Provision verified approx. every 30 days


[Details on the Swisseldex import](/schnittstellen/swisseldex-sdat-import)

![Virtual ZEV (vZEV) – figure 10](/img/_en/planning-virtual-zev-vzev/10.png)

## FAQ

## Can a vZEV occur in a muffle network?

Yes, it is possible, but the conditions for this are very rarely met.

For a vZEV to be created in a muffle network, all buildings must share exactly the same muffle. Otherwise, the public network between the muffleand the muffle is included, which no longer corresponds to the regulation of the vZEV.

## Can a building without a solar installation join a vZEV and replace the VNB meters with private meters?

Yes, for in-house production and consumption measurements.
Within the established vZEV, the vZEV operator is independently responsible for metering and billing. This therefore also implies that the vZEV operator can use the measuring equipment of its choice for the entire vZEV.

However, the distribution system operator naturally also needs metering points for counter-measurement and balancing of the vZEV itself. These must be set accordingly.

If an apartment building without a solar installation wants to join the vZEV, a private meter can be installed for each billing unit. However, the distribution system operator must then set a corresponding measuring point at the house connection.

## Is it possible to nest several ZEVs in one vZEV?

Yes and no.

It is possible to create a vZEV from two existing ZEVs on the same transformer connection.
However, it is not possible for the two ZEVs to remain legally separate.
From a legal point of view, these two ZEVs become a single (v)ZEV.

The two ZEVs are therefore legally dissolved and replaced by one (v)ZEV.

## Can the internal tariff and the electricity price of the ZEV or vZEV be freely selected?

Yes and no.

It is regulated in exactly the same way as for the ZEV.

The tariff structure within a ZEV or a vZEV may be regulated under private law itself and deviate from the offer of the distribution system operator.
However, the legal basic charges of the ZEV must still be applied in terms of pricing.

Example:
If the grid electricity is regulated as a uniform tariff with a power tariff, it may also be decided within the ZEV or vZEV to offer only a uniform tariff or a dual tariff.
However, it must be ensured that, regardless of the selected tariff, no more money is collected than the grid electricity actually cost.

The internal solar power must also follow the rules and may not cost more than 80% to max. 100% of the equivalent grid electricity, depending on the rule applied.
