---
title: 'smart-me Billing for German Mieterstrom'
slug: '/konfiguration/billing/mieterstrom'
description: 'You need a smart-me Professional subscription to create electricity bills in accordance with the German Energy Industry Act (EnWG).'
sidebar_label: 'Tenant electricity'
---
### Requirement

You need a smart-me Professional subscription to create electricity bills in accordance with the German Energy Industry Act (EnWG).

## Video Tutorial

Our video tutorial explains the additional settings you need, step by step.

<Video src="KSCBESne84M" title="YouTube video, smartRED webinar: How tenant electricity works – simple implementation and functions explained" />

Introduction to tenant electricity

<Video src="wXGSibdoBR8" title="YouTube video, Ismaning's first tenant electricity system by Körmer GmbH - tenant electricity with smartRED" />

Reference property

<Video src="rsI2zut_HKM" title="YouTube video, tutorial: smartRED meter configuration in the smart-me Cloud" />

Meter configuration for tenant electricity

## Introduction

With a few additional settings, smart-me Billing can create electricity bills in accordance with the requirements of Section § 42 of the German Energy Industry Act (EnWG).

IMPORTANT: To configure the additional tenant electricity settings successfully, you must first set up the [virtual tariffs](/konfiguration/billing) for your property and complete the standard settings of [smart-me Billing](/konfiguration/billing).

IMPORTANT: Tenant electricity always requires the use of [virtual tariffs](/konfiguration/billing).

## Example of a tenant electricity bill

A fully configured tenant electricity bill can look like this:

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, sample tenant electricity invoice.pdf" />

Musterrechnung Mieterstrom.pdf

## Configuring and reconciling metering concepts

### Standard metering concept (all consumers participate in tenant electricity)

![smart-me Billing for German Mieterstrom – Figure 1](/img/konfiguration-billing-mieterstrom/01.png)

[Details of the standard concept: tariffs and reconciliation](/planung/standard-messkonzept)

### MKD3 metering concept (tenant electricity with non-participants)

![smart-me Billing for German Mieterstrom – Figure 2](/img/konfiguration-billing-mieterstrom/02.png)

[Details of the MKD3 metering concept: tariffs and reconciliation](/planung/mkd3-messkonzept-nicht-teilnehmer)

## General settings

- Log in to the desired smart-me account

- Click "Configuration" ("Konfiguration") at the top right and then "Create invoice" ("Rechnung erstellen")

- First select the "Settings" ("Einstellungen") button


This is where you make the general settings for the layout of the invoice document. Here you also make the settings already described in the standard [Billing article](/konfiguration/billing):


- Currency (always EUR for tenant electricity)

- Tax

- Your company logo (for display in the invoice document)

- Header / sender

- Footer


![smart-me Billing for German Mieterstrom – Figure 3](/img/konfiguration-billing-mieterstrom/03.png)

In addition, you can now activate the switch at the bottom in the "Tenant electricity Germany" ("Mieterstrom Deutschland") section. This unlocks the additional settings for the tenant electricity extensions.

You can make the following extensions directly here:

![smart-me Billing for German Mieterstrom – Figure 4](/img/konfiguration-billing-mieterstrom/04.png)

### Grid operator

Here you specify who your supply grid operator is. You can get this information from your electrical installer/PV system installer or on the internet.

### Customer service / arbitration board

Suggested title:

What drives us? Your satisfaction

Suggested free text (for all of Germany / no guarantee of legal certainty):

"Customer service is our top priority. You can reach us at 01234 / 87589.

If you nevertheless have a complaint and – contrary to expectations – have not received a response or remedy from us after four weeks, you can request arbitration:



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Phone: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

Email: [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ATTENTION: The arbitration board listed is only an example. There are many arbitration boards in Germany and you are free to choose. Contact the arbitration board of your choice early on.

This information appears at the very bottom of your invoice document.

## Configuring the property

Switch to the "Configuration" ("Konfiguration") menu item in the tab at the top. Here you can now apply the unlocked extensions to the property and to the individual residential units. First click on the folder of the desired property.

![smart-me Billing for German Mieterstrom – Figure 5](/img/konfiguration-billing-mieterstrom/05.png)

### Residual electricity mix

At the very top you can define the residual electricity mix. Residual electricity is the amount of electricity that is not produced directly by your tenant electricity system itself but has to be supplied additionally from the grid. You can get the details on the residual electricity mix from your chosen residual electricity supplier.

An example could look like this:

![smart-me Billing for German Mieterstrom – Figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consumption compared to the previous period and others

Directly below, you can define electricity values as benchmarks for comparison.

The invoice document will show the electricity recipients these reference values as well as their own consumption in the previous period.

ATTENTION: Remember to enter the correct values for the billing period you have selected. So if you create monthly invoices, choose reference values on a monthly basis, and so on.

![smart-me Billing for German Mieterstrom – Figure 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open spreadsheet, % electricity consumption Germany in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Spreadsheet, % electricity consumption Germany" />

% electricity consumption Germany

Figures in the table without guarantee.

Practical tip: Directly below the input field for consumption compared to the previous period and others, you will find the [virtual tariffs](/konfiguration/billing) you have already configured. If you want to charge a uniform tariff (grid and solar electricity cost the same), you still have to define two tariffs (with the same price) in a tenant electricity model. This ensures that our billing tool can correctly determine the levies for the different electricity components.

### Defining the tariff components per electricity type

Further down, under "Miscellaneous" ("Sonstiges"), you can define the tariff components per electricity type (grid and solar). The purpose is to show the end customer how their electricity price is made up. You have to do this for both grid electricity and solar electricity. Together, the components must add up to the price you defined per electricity type (which you set in the [virtual tariffs](/konfiguration/billing)); otherwise billing will display an error message.

![smart-me Billing for German Mieterstrom – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or enter individual tariff components via "Edit" ("Editieren").

Important: Select the correct type when editing, i.e. specify whether it is a tariff component of grid electricity (residual electricity) or of solar electricity.


Important: You can get the details on the composition of the components for grid electricity (residual electricity) from your chosen residual electricity supplier.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A finished configuration can look like this:

![smart-me Billing for German Mieterstrom – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have now made all the settings at property level. Finally, you still need to enter the customer number and the contract and term details in the individual residential units.

## Configuring the residential units

Now click on the various residential units of your property one after the other and specify them.

### Customer number

Here you set the customer number for this tenant.

Note:

The customer number is also automatically used as the name of the PDF document for easier external identification.

### Contract and term

Here you can insert contractual provisions. An example (no guarantee of legal certainty) would be:

Your contract runs until DD.MM.YYYY and, in accordance with the provision in clause X of your electricity supply contract, is extended by one year unless terminated in good time. You may terminate the electricity supply contract with three months' notice effective DD.MM.YYYY in accordance with clause X of the electricity supply contract. Any special right of termination remains unaffected

![smart-me Billing for German Mieterstrom – Figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Congratulations, you've done it! When you now generate invoices in the smart-me Billing tool, you will receive an invoice document with all the required information and visual representations.
