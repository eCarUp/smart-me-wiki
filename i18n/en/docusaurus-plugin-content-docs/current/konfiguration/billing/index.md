---
title: 'Energy Billing (Switzerland)'
slug: '/konfiguration/billing'
description: 'You need a smart-me Professional subscription to create energy cost billings.'
sidebar_label: 'Billing'
naechste_schritte: [konfiguration/billing/einstellungen]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
<Menueweg>Billing</Menueweg>

### Prerequisite

You need a smart-me Professional subscription to create energy cost billings. 

## Configuring billing step by step

This step-by-step guide is intended to help you configure your billing. Please note that this is only an example for orientation. Depending on the setup of your property, there will be differences from our example. 

Each step has its own page. You can work through them in order — the bottom of each page tells you what comes next — or jump directly from here to where you currently are.

<Ablauf land="ch" bis="konfiguration/billing/rechnung-erstellen" />

## Tools

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing from A to Z

Our webinar explains step by step how to create energy cost billings with the Billing tool:

<div className="row">
<div className="col col--6">

<Video src="0AvKOogoW5Q" title="YouTube video, smart-me Billing for advanced users" />

</div>
<div className="col col--6">

<Video src="mK1HYLRtBUI" title="YouTube video, smart-me Billing - virtual tariffs, peak power, changing meter rental" />

Video content

- Configuring peak and off-peak tariff to a single tariff

- Price adjustment of the virtual tariffs

- Peak power

- Meter rental

</div>
</div>

## smart-me Billing invoice examples

- [Example: electricity billing (.pdf)](https://drive.google.com/file/d/1vVJ5y0_sV8l2NgH8Pf-gJCn36MmDXWfe/view?usp=sharing)

- [Example: VEWA billing (.pdf)](https://drive.google.com/file/d/1-YR543M1bawFrKgrj-MsQR5Es_wKFzRu/view?usp=sharing)

## Helpful notes on the tariff data

### Visualization

<div className="row">
<div className="col col--7">

A new tile is now displayed in the default view of the billing unit's folder (e.g. an apartment). It shows the meter readings for the virtual tariffs. Clicking this tile displays the load profile for the virtual tariffs. 

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
