---
title: 'Virtual ZEV (vZEV)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction to the vZEV webinar'
sidebar_label: 'Virtual ZEV (vZEV)'
---
<Video src="cTF9C7b3QwU" title="YouTube video, webinar recording «Implementing a virtual ZEV (vZEV) with smart-me»" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction to the vZEV webinar

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Usable metering infrastructure for vZEV

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Self-consumption models

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) smart-me vZEV

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Live demo

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

## The virtual association for own consumption - vZEV

A vZEV is an association for own consumption that includes the grid. Unlike a conventional ZEV (association for own consumption), where all buildings must share one and the same grid connection, a vZEV makes it possible to combine several grid connections on one and the same low-voltage transformer (&lt; 1kV).

In addition to this basic requirement, further points must be clarified to determine whether and with whom in the neighbourhood a vZEV can be set up.

These include:

- the actual grid topology

- connection types (sleeve networks or distribution cabinets)


### Step 1: Initial vZEV clarification

This initial clarification of these topics is requested directly from the distribution system operator (DSO).

Afterwards it is clear whether a vZEV is possible and, if so, with which participants.

The DSO must provide this information, with a positive or negative response and a justification, within 14 days at the latest.

### Step 2: Determine participants and apply for the vZEV

In a second step, interest must be clarified. You notify the potential participants of the opportunity to participate in the vZEV.
Both the information provided and the positive responses should be recorded in writing, with signatures confirming participation.
These will be needed later for the data transfer authorisation, as well as attachments to contracts and other documents.

At this point, an official vZEV registration listing all interested parties must be submitted to the DSO. Within 3 months, further points regarding the vZEV are checked and completed.

- Production capacity must amount to at least 10% of the consumption capacity.

- Are all participants located behind the same connection point at low-voltage level?

- Are smart meters already installed at all sites or not? (If not, they must be retrofitted)

- Is additional hardware available for reading the metering points locally, and/or is there an application for SDTA transfer via Swisseldex?


Once all of the above points are fulfilled and after around 3 months, the vZEV can start operating.

![Virtual ZEV (vZEV) – Figure 1](/img/planung-virtuelle-zev-vzev/01.png)

## Previous model landscape

ZEV: association for own consumption 

- Private metering

- Private billing

- DSO meter at the feed-in point with invoice from the DSO


DSO model:

- Metering by the DSO

- Billing and tariffing by the DSO

- Balancing on consumption and solar production meters


Regular consumers:

- Electricity consumers supplied by the DSO as a house or apartment in a single-family or multi-family house


![Virtual ZEV (vZEV) – Figure 2](/img/planung-virtuelle-zev-vzev/02.png)

## vZEV models

### Single-building vZEV (virtually balanced ZEV)

A building shares a common house connection.



Switching from the DSO model to a vZEV is easy.

In principle, the previous DSO model is simply managed and billed privately as a vZEV and is thus independent of the DSO's services.

![Virtual ZEV (vZEV) – Figure 3](/img/planung-virtuelle-zev-vzev/03.png)

### Multi-building vZEV (extended vZEV)

Several ZEVs or buildings with their own grid connection share the same low-voltage connection (&lt;1kV)

They may now use the connecting lines between the buildings to transmit solar power.

This means that the energy produced in the buildings on the left is also made available to the multi-family houses on the right.

But not to the single-family house, as it is located outside the approved topology of a vZEV.


The topology requirements for eligible participation in the vZEV are defined in more detail below.

![Virtual ZEV (vZEV) – Figure 4](/img/planung-virtuelle-zev-vzev/04.png)

### Grid topologies for setting up an extended vZEV

Same busbar or distribution box at low-voltage level (&lt; 1kV)

All buildings are connected to the same distribution box or the same busbar at low-voltage level NE7.

![Virtual ZEV (vZEV) – Figure 5](/img/planung-virtuelle-zev-vzev/05.png)

Same busbar on the low-voltage side of the grid transformer (&lt;1kV)

All buildings are connected to the same transformer and to the same busbar at low-voltage level.

![Virtual ZEV (vZEV) – Figure 6](/img/planung-virtuelle-zev-vzev/06.png)

Sleeve networks
An extended vZEV across several buildings is only possible if the buildings share the same sleeve
(very rarely the case)

However, forming a single-building vZEV is always possible.

![Virtual ZEV (vZEV) – Figure 7](/img/planung-virtuelle-zev-vzev/07.png)

## Possible members of a vZEV and the required metering technology

In a vZEV, different infrastructures from the grid operator and from the private sector can come together. Metering for the various buildings can be provided in different ways and is combined into a uniform tariff model within the vZEV.

- Former practice model (DSO)

- ZEV with private metering (balancing meter from the DSO)

- Single-family houses with solar production

- Individual apartments and houses without solar production with private metering or DSO metering.



![Virtual ZEV (vZEV) – Figure 8](/img/planung-virtuelle-zev-vzev/08.png)

## Meter infrastructure for the smart-me vZEV tariff model

The tariffing of a vZEV is based on equal rights for all participants. All participants have an equal claim to the solar power currently being produced.

For the tariffing of the different models to work together, selected meter units are required so that they can be stored as a reference in our tariff.

The figure below shows all relevant metering points required for correct balancing and tariffing per infrastructure.

![Virtual ZEV (vZEV) – Figure 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-practice model (privatised ex-DSO model to vZEV)

In this model, there is no metering point acting as a balancing meter, neither from the energy supplier nor private. This ZEV is therefore balanced virtually.
This requires metering of all producers and all consumers. The model works as a single building, but also as part of an extended vZEV.

### Private ZEV (with balancing meter)

In this model, there is at least one metering point of the energy supplier at the main ZEV connection point. The data from this metering point can be imported into smart-me either via a private sub-metering or via the energy supplier's data hub.

Private sub-metering enables efficient real-time control of the ZEV, which is only possible to a limited extent with the energy supplier's meter.

[More on the metering concept of private ZEVs](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### House with solar production (single-family house)

In this model, there is at least one metering point of the energy supplier at the main connection point and in some cases also a production metering.
Tariffing a terraced house is possible without a solar production meter. Ideally, however, the solar production of the terraced house is also metered, either by the DSO or privately.
This data can be collected by metering with a smart-me Telstar as private metering or as a data hub import via Swisseldex.

### House or apartment without solar production (single-family house)

In this model, there is at least one metering point of the energy supplier at the house connection. The data of these consumers can be collected as a data hub import via Swisseldex.

A multi-family house without a solar installation but with private metering follows the metering infrastructure of the ZEV without production.

[Details on configuring vZEV tariffs](/konfiguration/billing/stromtarife-definieren)

## Plan your project now with our configurator

Based on your input, the Projektkonfigurator creates a bill of materials of all smart-me products, the number of metering points and a visual diagram for review.

Ideal for planners and electricians.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Metering data import for energy supplier metering points

The metering data of the relevant metering points can be imported via the Swisseldex data hub.
smart-me is listed with Swisseldex as a recipient of this data 

Upon request and authorisation, the energy suppliers send the data via Swisseldex to the smart-me import data hub. The data can then be managed, visualized and billed in the respective smart-me account.


Properties of the energy suppliers' data:

- EBIX, SDAT data format

- 15-minute resolution

- Provided approx. every 24h, unverified

- Provided approx. every 30 days, verified


You can find detailed instructions on the data import here: [Details on the Swisseldex import](/schnittstellen/swisseldex-sdat-import)

![Virtual ZEV (vZEV) – Figure 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

## Can a vZEV be set up in a sleeve network?

Yes, it is possible, but the requirements for it are only very rarely met.

For a vZEV to be set up in a sleeve network, all buildings must share exactly the same sleeve. Otherwise, the public grid between one sleeve and the next is included, which no longer complies with the vZEV regulations.

## Can a building without a solar installation join a vZEV and replace the DSO meters with private meters?

Yes, for the in-house production and consumption metering.
Within the established vZEV, the vZEV operator is independently responsible for metering and billing. This also implies that the vZEV operator can use the metering equipment of their choice for the entire vZEV.

Of course, the distribution system operator also needs metering points of its own for counter-metering and balancing of the vZEV. It must set these accordingly.

If a multi-family house without a solar installation wants to join the vZEV, a private meter can be installed for each billing unit. However, the distribution system operator must then set a metering point at the house connection accordingly.

## Is it possible to nest several ZEVs within a vZEV?

Yes and no.

It is possible to form a vZEV from two existing ZEVs on the same transformer connection.
However, it is not possible for the two ZEVs to continue to exist individually in legal terms.
From a legal point of view, these two ZEVs become a single (v)ZEV.

The two ZEVs are therefore legally dissolved and replaced by one (v)ZEV.

## Can the internal tariffing and the electricity price of the ZEV or vZEV be chosen freely?

Yes and no.

It is regulated in exactly the same way as for the ZEV.

The tariff structure within a ZEV or a vZEV may be regulated independently under private law and may differ from the distribution system operator's offering.
However, the legal principles of the ZEV regarding pricing still apply.

Example:
If grid electricity is charged as a single tariff with a demand tariff, it may also be decided within the ZEV or vZEV to offer only a single tariff or a dual tariff.
However, it must be ensured that, regardless of the chosen tariffing, no more money is collected than the grid electricity actually cost.

Internal solar power must also follow the rules and, depending on the rule applied, may not cost more than 80% to a maximum of 100% of the equivalent grid electricity.
