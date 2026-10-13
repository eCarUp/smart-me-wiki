---
title: 'Virtual ZEV (vZEV)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction to the vZEV webinar'
sidebar_label: 'Virtual ZEV (vZEV)'
---
<Video src="cTF9C7b3QwU" title="YouTube video, webinar recording «Implementing a virtual ZEV (vZEV) with smart-me»" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction to the vZEV webinar

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Metering infrastructure usable for a vZEV

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Self-consumption models

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) smart-me vZEV

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Live demo

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

## The virtual association for own consumption - vZEV

A vZEV is an association for own consumption that includes the grid. With a conventional ZEV, all buildings must share one and the same grid connection. With a vZEV, by contrast, several grid connections on one and the same low-voltage transformer (&lt; 1kV) can be combined.

Besides this basic requirement, further points must be clarified to determine whether a vZEV is possible in the neighbourhood and with whom.

These include:

- the actual grid topology

- connection types (sleeve networks or distribution cabinets)

### Step 1: Initial vZEV assessment

This initial assessment of these topics is requested directly from the distribution system operator (DSO).

Afterwards it is clear whether a vZEV is possible and, if so, with which participants.

The DSO must provide this information, with a positive or negative response and the reasons for it, within 14 days at the latest.

### Step 2: Determine the participants and apply for the vZEV

In a second step, you need to find out who is interested. Notify the potential participants that they can take part in the vZEV.
Both this information and the positive responses should be recorded in writing, with signatures confirming participation.
These will be needed later for the data transfer authorization and as attachments to contracts and other documents.

At this point, an official vZEV registration listing all interested parties must be submitted to the DSO. Within 3 months, further points concerning the vZEV are checked and completed.

- The production capacity must be at least 10% of the consumption capacity.

- Are all participants behind the same connection point at the low-voltage level?

- Are smart meters already installed at all locations? (If not, they must be retrofitted.)

- Is additional hardware available for reading the metering points locally, and/or is there an application for SDTA transmission via Swisseldex?

Once all of the points above are met and around 3 months have passed, the vZEV can start operating.

![Virtual ZEV (vZEV) – Figure 1](/img/planung-virtuelle-zev-vzev/01.png)

## Existing model landscape

ZEV: association for own consumption 

- Private metering

- Private billing

- DSO meter at the feed-in point, invoiced by the DSO

DSO model:

- Metering by the DSO

- Billing and tariffing by the DSO

- Balancing on consumption and solar production meters

Standard consumers:

- Electricity consumers supplied by the DSO, as a house or flat in a single-family or multi-family house

![Virtual ZEV (vZEV) – Figure 2](/img/planung-virtuelle-zev-vzev/02.png)

## vZEV models

### Single-building vZEV (virtually balanced ZEV)

One building shares a common building connection.

Switching from the DSO model to a vZEV is easy.

In principle, the previous DSO model is simply managed and billed privately as a vZEV. This makes it independent of the DSO's services.

![Virtual ZEV (vZEV) – Figure 3](/img/planung-virtuelle-zev-vzev/03.png)

### Multi-building vZEV (extended vZEV)

Several ZEVs or buildings with their own grid connection share the same low-voltage connection (&lt;1kV)

They may now use the connecting lines between the buildings to transfer solar power.

This means the energy produced in the buildings on the left is also made available to the multi-family houses on the right.

It is not made available to the single-family house, however, because it is outside the approved topology of a vZEV.

The topology requirements for eligible participation in the vZEV are defined in more detail below.

![Virtual ZEV (vZEV) – Figure 4](/img/planung-virtuelle-zev-vzev/04.png)

### Grid topologies for setting up an extended vZEV

Same busbar or distribution box at the low-voltage level (&lt; 1kV)

All buildings are connected to the same distribution box or the same busbar at low-voltage grid level NE7.

![Virtual ZEV (vZEV) – Figure 5](/img/planung-virtuelle-zev-vzev/05.png)

Same busbar on the low-voltage side of the grid transformer (&lt;1kV)

All buildings are connected to the same transformer and to the same busbar at the low-voltage level.

![Virtual ZEV (vZEV) – Figure 6](/img/planung-virtuelle-zev-vzev/06.png)

Sleeve networks
An extended vZEV across several buildings is only possible if the buildings share the same sleeve
(very rarely the case)

However, a single-building vZEV can always be set up.

![Virtual ZEV (vZEV) – Figure 7](/img/planung-virtuelle-zev-vzev/07.png)

## Possible members of a vZEV and the metering technology required

In a vZEV, different infrastructures from the grid operator and from the private sector can come together. Metering for the various buildings can be provided in different ways and is combined into a uniform tariff model in the vZEV.

- Former practice model (DSO)

- ZEV with private metering (balancing meter from the DSO)

- Single-family houses with solar production

- Individual flats and houses without solar production, with private metering or DSO metering.

![Virtual ZEV (vZEV) – Figure 8](/img/planung-virtuelle-zev-vzev/08.png)

## Meter infrastructure for the smart-me vZEV tariff model

Tariffing in a vZEV is based on equal rights for all participants. All participants have the same entitlement to the solar power currently being produced.

To tariff the various models together successfully, selected meter units are required so that they can be stored as references in our tariff.

The figure below shows all relevant metering points required for correct balancing and tariffing for each infrastructure.

![Virtual ZEV (vZEV) – Figure 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-practice model (privatized ex-DSO model converted to a vZEV)

This model has no metering point acting as a balancing meter, neither from the energy supplier nor a private one. This ZEV is therefore balanced virtually.
This requires metering of all producers and all consumers. The model works as a single building and also as part of an extended vZEV.

### Private ZEV (with balancing meter)

This model has at least one metering point of the energy supplier at the main ZEV connection point. The data from this metering point can be imported into smart-me either via private sub-metering or via the energy supplier's data hub.

Private sub-metering enables efficient real-time control of the ZEV, which is only possible to a limited extent with the energy supplier's meter.

[More about the metering concept of private ZEVs](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### House with solar production (single-family house)

This model has at least one metering point of the energy supplier at the main connection point, and in some cases also a production meter.
A terraced house can be tariffed without a solar production meter. Ideally, however, the terraced house's solar production is also metered, either by the DSO or privately.
This data can be collected by metering with a smart-me Telstar as private metering, or as a data hub import via Swisseldex.

### House or flat without solar production (single-family house)

This model has at least one metering point of the energy supplier at the building connection. The data of these consumers can be collected as a data hub import via Swisseldex.

A multi-family house without a solar system but with private metering follows the metering infrastructure of a ZEV without production.

[Details on configuring vZEV tariffs](/konfiguration/billing/stromtarife-definieren)

## Plan your project now with our configurator

Based on your input, the project configurator creates the bill of materials covering all smart-me products, the number of metering points and a visual diagram for checking.

Ideal for planners and electrical professionals.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Metering data import for energy supplier metering points

The metering data of the relevant metering points can be imported via the Swisseldex data hub.
smart-me is listed with Swisseldex as a recipient of this data 

On request and after approval, the energy suppliers send the data via Swisseldex to the smart-me import data hub. The data can then be managed, visualized and billed in the respective smart-me account.

Characteristics of the energy suppliers' data:

- EBIX, SDAT data format

- 15-minute resolution

- Provided approx. every 24h, unverified

- Provided approx. every 30 days, verified

You can find detailed instructions for the data import here: [Details on the Swisseldex import](/schnittstellen/swisseldex-sdat-import)

![Virtual ZEV (vZEV) – Figure 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

<details id="kann-ein-vzev-in-einem-muffennetz-entstehen">
<summary>Can a vZEV be set up in a sleeve network?</summary>

Yes, it is possible, but the requirements for it are only very rarely met.

For a vZEV to be set up in a sleeve network, all buildings must share exactly the same sleeve. Otherwise the public grid between one sleeve and the next is included, which no longer complies with the vZEV regulations.

</details>

<details id="kann-ein-gebäude-ohne-solaranlage-einem-vzev-beitreten-und-die-vnb-zähler-durch-privatzähler-ersetzen">
<summary>Can a building without a solar system join a vZEV and replace the DSO meters with private meters?</summary>

Yes, for the in-house production and consumption metering.
Within the established vZEV, the vZEV operator is solely responsible for metering and billing. This also means that the vZEV operator can use the metering equipment of their choice for the entire vZEV.

However, the distribution system operator naturally also needs its own metering points for counter-metering and balancing the vZEV. It must set these accordingly.

If a multi-family house without a solar system wants to join the vZEV, a private meter can be installed for each billing unit. The distribution system operator must then set a metering point at the building connection accordingly.

</details>

<details id="ist-eine-verschachtelung-von-mehreren-zev-in-einer-vzev-möglich">
<summary>Is it possible to nest several ZEVs within one vZEV?</summary>

Yes and no.

It is possible to form a vZEV from two existing ZEVs on the same transformer connection.
However, it is not possible for the two ZEVs to continue to exist individually in legal terms.
Legally, these two ZEVs become a single (v)ZEV.

The two ZEVs are therefore legally dissolved and replaced by one (v)ZEV.

</details>

<details id="kann-die-interne-tarifierung-und-der-strompreis-des-zev-oder-vzevs-frei-gewählt-werden">
<summary>Can the internal tariffing and the electricity price of the ZEV or vZEV be chosen freely?</summary>

Yes and no.

The rules are exactly the same as for a ZEV.

The tariff structure within a ZEV or a vZEV may be set independently under private law and may differ from the distribution system operator's offering.
However, the legal principles of the ZEV regarding pricing continue to apply.

Example:
If grid electricity is charged as a single tariff with a power tariff, the ZEV or vZEV may also decide to offer only a single tariff or a dual tariff.
However, regardless of the tariffing chosen, it must be ensured that no more money is collected than the grid electricity actually cost.

Internal solar power must also follow the rules and, depending on the rule applied, may not cost more than 80% to max. 100% of the equivalent grid electricity.

</details>
