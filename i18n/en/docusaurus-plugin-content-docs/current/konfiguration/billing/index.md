---
title: 'Energy Billing (Switzerland)'
slug: '/konfiguration/billing'
description: 'You need a smart-me Professional subscription to create energy cost bills.'
sidebar_label: 'Billing'
naechste_schritte: [konfiguration/billing/einstellungen]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Prerequisite

You need a smart-me Professional subscription to create energy cost bills. 

## Configuring billing step by step

This step-by-step guide is intended to support you in configuring your billing. Please note that this is only an example for you to follow. Depending on the layout of your property, there will be differences from our example. 

Each step has its own page. You can go through them in order — the bottom of each page tells you how to continue — or jump straight to where you are right now from here.

<Ablauf land="ch" bis="konfiguration/billing/rechnung-erstellen" />

## Tools

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing from A to Z

Our webinar explains step by step how to create energy cost bills with the Billing tool:

<div className="row">
<div className="col col--6">

<Video src="0AvKOogoW5Q" title="YouTube video, smart-me Billing for advanced users" />

</div>
<div className="col col--6">

<Video src="mK1HYLRtBUI" title="YouTube video, smart-me Billing - virtual tariffs, peak power, changing meter rental" />

Video content

- Configuring peak and off-peak tariff to a single tariff

- Adjusting the prices of the virtual tariffs

- Peak power

- Meter rental

</div>
</div>

## smart-me Billing invoice examples

Beispiel Energiekostenabrechnung.pdf

Example: electricity billing

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Example: VEWA billing

## Helpful notes on the tariff data

### Visualization

<div className="row">
<div className="col col--7">

A new tile is now displayed in the default view of the folder of the billing unit (e.g. an apartment). It shows the meter readings for the virtual tariffs. Clicking on this tile displays the load profile for the virtual tariffs. 

</div>
<div className="col col--5 bild--mitte">

![Energy Billing – Figure 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### How is the solar power allocated

<div className="row">
<div className="col col--7">

The smart-me platform uses the production meter (PV meter) to determine the amount of electricity generated and the virtual total consumption meter to determine the amount of electricity consumed. From this, a percentage share of solar power is calculated. 

Each electricity meter (tenant) is therefore entitled to the same share of solar power per 15 minutes, e.g. 40% of its consumption in kWh.

Example of solar power allocation

- Total consumption 10kWh

- Solar power 6kWh (60% solar / 40% grid)

- Tenant 1 consumption 6kWh (3.6kWh solar / 2.4kWh grid)

- Tenant 2 consumption 4kWh (2.4kWh solar / 1.6 kWh grid)

Accuracy can be improved by configuring the balance meter for the solar tariff.

</div>
<div className="col col--5 bild--mitte">

![Energy Billing – Figure 13](/img/konfiguration-billing/13.png)

</div>
</div>
