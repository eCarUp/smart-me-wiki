---
title: 'Virtual ZEV (vZEV)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction to the vZEV webinar'
sidebar_label: 'Virtual ZEV (vZEV)'
---
<Video src="cTF9C7b3QwU" title="YouTube video, webinar recording «Implementing a virtual ZEV (vZEV) with smart-me»" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction to the vZEV webinar

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Usable metering infrastructure for a vZEV

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Self-consumption models

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) smart-me vZEV

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Live demo

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

## The virtual association for own consumption – vZEV

A vZEV corresponds to a grid-inclusive association for own consumption. Unlike the conventional ZEV (association for own consumption), where all buildings must have one and the same grid connection, a vZEV (virtual ZEV) makes it possible to combine several grid connections on one and the same low-voltage transformer (&lt; 1kV).

Besides this basic requirement, further points have to be clarified as to whether and with whom in the neighbourhood a vZEV can be set up.

These include:

- the effective grid topology

- connection types (joint networks or distribution cabinets)


### Step 1: Initial vZEV clarification

This initial clarification of these topics is requested directly from the distribution grid operator.

It then becomes clear whether a vZEV is possible and, if so, with which participants.

This information must be available from the grid operator within 14 days at the latest, as a positive or negative reply with reasons.

### Step 2: Determine participants and apply for the vZEV

In a second step, interest has to be assessed. You notify the possible participants of the option of participating in the vZEV.
Both this information and the positive replies should be recorded in writing with signatures confirming participation.
These will later be needed for the data transmission authorization, as well as an annex to contracts and other documents.

At this point, an official vZEV registration listing all interested parties must be submitted to the grid operator. Within 3 months, further points concerning the vZEV are examined and settled.

- The production capacity must amount to at least 10% of the consumption capacity.

- Are all participants located behind the same connection point at the low-voltage level?

- Are smart meters already installed at all locations or not? (They then have to be retrofitted)

- Is further hardware available for reading the metering points locally, and/or is an application for SDTA transmission via Swisseldex in place?


Once all of the above points are fulfilled and after around 3 months, the vZEV can start operation.

![Virtual ZEV (vZEV) – Figure 1](/img/planung-virtuelle-zev-vzev/01.png)

## The model landscape to date

ZEV: association for own consumption 

- Private metering

- Private billing

- Grid operator meter at the feed-in point with a bill from the grid operator


Grid operator model:

- Metering by the grid operator

- Billing and tariffing by the grid operator

- Balancing on consumption and solar production meters


Standard consumer:

- Electricity consumer with the grid operator, as a house or apartment in a single-family or multi-family building


![Virtual ZEV (vZEV) – Figure 2](/img/planung-virtuelle-zev-vzev/02.png)

## vZEV models

### vZEV single building (virtually balanced ZEV)

One building shares a common house connection.



Switching from the grid operator model to a vZEV is easily possible.

In principle, the previous grid operator model is thus simply managed and billed privately as a vZEV and is therefore detached from the grid operator's services.

![Virtual ZEV (vZEV) – Figure 3](/img/planung-virtuelle-zev-vzev/03.png)

### Multi-building vZEV (extended vZEV)

Several ZEVs or buildings with their own grid connection share the same low-voltage connection (&lt;1kV)

They are now allowed to use the connecting lines between the buildings to transmit solar power.

This makes the energy produced in the buildings on the left available to the multi-family buildings on the right as well.

But not to the single-family house, since it lies outside the approved topology of a vZEV.


The topology requirements for eligible participation in a vZEV are defined in more detail below.

![Virtual ZEV (vZEV) – Figure 4](/img/planung-virtuelle-zev-vzev/04.png)

### Grid topologies for creating an extended vZEV

Same busbar or distribution cabinet at the low-voltage level (&lt; 1kV)

All buildings are routed to the same distribution cabinet or the same busbar at grid level NE7.

![Virtual ZEV (vZEV) – Figure 5](/img/planung-virtuelle-zev-vzev/05.png)

Same busbar on the low-voltage side at the grid transformer (&lt;1kV)

All buildings are connected to the same transformer and are connected to the same busbar at the low-voltage level.

![Virtual ZEV (vZEV) – Figure 6](/img/planung-virtuelle-zev-vzev/06.png)

Joint networks
An extended vZEV across several buildings is only possible if the buildings share the same joint
(very rarely the case)

Forming a vZEV for a single building, however, is always possible.

![Virtual ZEV (vZEV) – Figure 7](/img/planung-virtuelle-zev-vzev/07.png)

## Possible members of a vZEV and the metering technology required

In a vZEV, various infrastructures from the grid operator and from private settings can come together. The metering of the various buildings can be provided in different ways and comes together within the vZEV to form a uniform tariff model.

- Former practice model (grid operator)

- ZEV with private metering (balancing meter from the grid operator)

- Single-family houses with solar production

- Individual apartments and houses without solar production, with private metering or grid operator metering.



![Virtual ZEV (vZEV) – Figure 8](/img/planung-virtuelle-zev-vzev/08.png)

## Meter infrastructure for the smart-me vZEV tariffing model

The tariffing of a vZEV is based on equal treatment of the participants. All participants have an equal claim to the solar power currently being produced.

For the tariffing of the various models to work together, selected metering units are required so that they can be stored as a reference in our tariff.

The following image shows all relevant metering points needed for correct balancing and tariffing per infrastructure.

![Virtual ZEV (vZEV) – Figure 9](/img/planung-virtuelle-zev-vzev/09.png)

### Former practice model (privatized ex-grid-operator model turned vZEV)

In this model there is no metering point serving as a balancing meter, neither from the utility nor privately. This ZEV is therefore balanced virtually.
This requires the metering of all producers and all consumers. The model works for a single building, but also as part of an extended vZEV.

### Private ZEV (with balancing meter)

In this model there is at least one metering point of the utility at the ZEV main connection point. The data of this metering point can be imported into smart-me either via a private sub-meter or via the utility's data hub.

Private sub-metering enables efficient real-time control of the ZEV, which is only possible to a limited extent with the utility's meter.

[More on the metering concept of private ZEVs](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### House with solar production (single-family house)

In this model there is at least one metering point of the utility at the main connection point and, in some cases, also production metering.
Tariffing a terraced house is possible without a solar production meter. Ideally, however, the terraced house's solar production is also metered, either by the grid operator or privately.
This data can be collected by metering with a smart-me Telstar as private metering, or as a data hub import via Swisseldex.

### House or apartment without solar production (single-family house)

In this model there is at least one metering point of the utility at the house connection. The data of these consumers can be collected as a data hub import via Swisseldex.

A multi-family building without a solar installation but with private metering follows the metering infrastructure of a ZEV without production.

[Details on configuring vZEV tariffs](/konfiguration/billing/stromtarife-definieren)

## Plan your project now with our configurator

Based on your details, the Projektkonfigurator creates the parts list of all smart-me products, the number of metering points and a visual diagram for checking.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Metering data import for utility metering points

The metering data of the relevant metering points can be imported via the Swisseldex data hub.
smart-me is listed with Swisseldex as a recipient of this data 

After a request and approval, the data is sent by the utilities via Swisseldex to the smart-me import data hub. The data can then be managed, visualized and billed in the respective smart-me account.


Properties of the utilities' data:

- EBIX, SDAT data format

- 15-minute resolution

- Provision approximately every 24h, unverified

- Provision approximately every 30 days, verified


Here you will find detailed instructions for the data import: [Details on the Swisseldex import](/schnittstellen/swisseldex-sdat-import)

![Virtual ZEV (vZEV) – Figure 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

## Can a vZEV be created in a joint network?

Yes, it is possible, but the requirements for it are only very rarely met.

For a vZEV to be created in a joint network, all buildings must share exactly the same joint. Otherwise the public grid between one joint and the next is included, which no longer corresponds to the regulation of the vZEV.

## Can a building without a solar installation join a vZEV and replace the grid operator meters with private meters?

Yes, for the in-house production and consumption metering.
Within the established vZEV, the vZEV operator is independently responsible for metering and billing. This therefore also implies that the vZEV operator can use the metering equipment of their choice for the entire vZEV.

Of course, the distribution grid operator also needs metering points of its own for counter-metering and balancing the vZEV. It must install these accordingly.

If a multi-family building without a solar installation now wants to join the vZEV, a private meter can be installed for each billing unit. The distribution grid operator must then install a metering point at the house connection accordingly.

## Is it possible to nest several ZEVs within a vZEV?

Yes and no.

It is possible to establish a vZEV from two existing ZEVs on the same transformer connection.
However, it is not possible for the two ZEVs to continue to exist individually in legal terms.
In legal terms, these two ZEVs become a single (v)ZEV.

The two ZEVs are therefore legally dissolved and replaced by one (v)ZEV.

## Can the internal tariffing and the electricity price of the ZEV or vZEV be chosen freely?

Yes and no.

It is regulated exactly the same as for the ZEV.

The tariff structure within a ZEV or a vZEV may be regulated under private law independently and differently from the distribution grid operator's offering.
However, the legal principles of the ZEV regarding pricing continue to apply.

Example:
If grid electricity is regulated as a single tariff with a capacity tariff, it may also be decided within the ZEV or vZEV to offer only a single tariff or a dual tariff.
It must be ensured, however, that regardless of the tariffing chosen, no more money is collected than the grid electricity actually cost.

The internal solar power also has to follow the rules and, depending on the rule applied, may not cost more than 80% to a maximum of 100% of the equivalent grid electricity.
