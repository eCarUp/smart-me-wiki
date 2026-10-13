---
title: 'smart-me Billing for German Mieterstrom'
slug: '/konfiguration/billing/mieterstrom'
description: 'You need a smart-me Professional subscription to create electricity bills in accordance with the German Energy Industry Act (EnWG).'
sidebar_label: 'Tenant electricity'
---
### Prerequisite

You need a smart-me Professional subscription to create electricity bills in accordance with the German Energy Industry Act (EnWG).   

## Video Tutorial

Our video tutorial explains the additional settings required, step by step.

<Video src="KSCBESne84M" title="YouTube video, smartRED webinar: How tenant electricity works – simple implementation and functions explained" />

Introduction to tenant electricity

<Video src="wXGSibdoBR8" title="YouTube video, Ismaning's first tenant electricity installation by Körmer GmbH – tenant electricity with smartRED" />

Reference project

<Video src="rsI2zut_HKM" title="YouTube video, Tutorial: smartRED meter configuration in the smart-me Cloud" />

Meter configuration for tenant electricity

## Introduction

With a few additional settings, smart-me Billing can create electricity bills in accordance with the requirements of Section § 42 of the German Energy Industry Act (EnWG). 

IMPORTANT:  To configure the additional settings for tenant electricity successfully, you must first have set up the [virtual tariffs](/konfiguration/billing) for your property and completed the standard settings of [smart-me Billing](/konfiguration/billing).

IMPORTANT:  Tenant electricity always requires the use of [virtual tariffs](/konfiguration/billing).

## Example of a tenant electricity bill

A fully configured tenant electricity bill can look like this: 

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, Musterrechnung Mieterstrom.pdf (sample tenant electricity invoice)" />

Musterrechnung Mieterstrom.pdf

## Configuring and reconciling metering concepts

### Standard metering concept (all consumers participate in tenant electricity)

![smart-me Billing for German Mieterstrom – Figure 1](/img/konfiguration-billing-mieterstrom/01.png)

[Details of the standard concept: tariffs and reconciliation](/konfiguration/billing/mieterstrom/standard-messkonzept)

### Metering concept MKD3 (tenant electricity with non-participants)

![smart-me Billing for German Mieterstrom – Figure 2](/img/konfiguration-billing-mieterstrom/02.png)

[Details of metering concept MKD3: tariffs and reconciliation](/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer)

## General settings

- Log in to the desired smart-me account 

- Click "Configuration" ("Konfiguration") at the top right and then "Create invoice" ("Rechnung erstellen")

- First select the "Settings" ("Einstellungen") button


Here you make the general settings for the layout of the invoice document. This is also where you make the settings already described in the standard [Billing article](/konfiguration/billing):


- Currency (always EUR for tenant electricity)

- Tax 

- Your company logo (for display in the invoice document)

- Header / sender

- Footer


![smart-me Billing for German Mieterstrom – Figure 3](/img/konfiguration-billing-mieterstrom/03.png)

In addition, you can now activate the switch in the "Tenant electricity Germany" ("Mieterstrom Deutschland") section at the bottom.  This unlocks the additional settings for the tenant electricity extensions.

You can make the following extensions directly here:

![smart-me Billing for German Mieterstrom – Figure 4](/img/konfiguration-billing-mieterstrom/04.png)

### Grid operator

Here you specify your supply grid operator. You can obtain this information from your electrical installer/PV system installer or on the internet.

### Customer service / arbitration board

Suggested title:

What drives us? Your satisfaction

Suggested free text (for all of Germany / no guarantee of legal validity):

"Customer service is our top priority. You can reach us at 01234 / 87589.

If you nevertheless have a complaint and – contrary to expectations – have not received a response or remedy from us after four weeks, you can request arbitration:



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Phone: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

Email: [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)CAUTION: The arbitration board listed is given only as an example. There are many arbitration boards in Germany and you are free to choose. Contact the arbitration board of your choice in good time.

This information is shown at the very bottom of your invoice document.

## Configuring the property

Switch to the "Configuration" ("Konfiguration") menu item in the tab at the top. Here you can now configure the unlocked extensions for the property and for the individual residential units. First click the folder of the desired property.

![smart-me Billing for German Mieterstrom – Figure 5](/img/konfiguration-billing-mieterstrom/05.png)

### Residual electricity mix

At the very top you can define the residual electricity mix. Residual electricity is the amount of electricity that is not produced directly by your tenant electricity installation but has to be supplied from the grid. You can obtain the details of the residual electricity mix from your chosen residual electricity supplier.

An example can look like this:

![smart-me Billing for German Mieterstrom – Figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consumption compared with the previous period and others

Directly below, you can define reference values for comparison.

The invoice document shows the electricity recipients these reference values as well as their own consumption in the previous period.

CAUTION: Remember to enter the correct values  for the billing period you have chosen.  So if you create monthly invoices, choose reference values on a monthly basis, and so on.

![smart-me Billing for German Mieterstrom – Figure 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % electricity consumption Germany in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Spreadsheet, % electricity consumption Germany" />

% electricity consumption Germany

Figures in the table without guarantee.

Practical tip:  Directly below the input field for consumption compared with the previous period and others, you will find the [virtual tariffs](/konfiguration/billing) you have already configured. If you want to charge a single tariff (grid and solar electricity cost the same), you still have to define two tariffs (with the same price) in a tenant electricity model. This ensures that our billing tool can correctly determine the levies for the different electricity components.

### Defining the tariff components per electricity type

Further down, under "Other" ("Sonstiges"), you can define the tariff components per electricity type (grid and solar). The purpose is to show the end customer how their electricity price is made up. You must do this for both grid electricity and solar electricity. Together, the components must add up to the price you defined per electricity type (which you set in the [virtual tariffs](/konfiguration/billing)); otherwise Billing displays an error message.

![smart-me Billing for German Mieterstrom – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or enter individual tariff components via "Edit" ("Editieren").

Important: Select the correct type when editing, i.e. specify whether it is a tariff component of grid electricity (residual electricity) or of solar electricity.


Important: You can obtain the details of the component breakdown for grid electricity (residual electricity) from your chosen residual electricity supplier.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A completed configuration can look like this:

![smart-me Billing for German Mieterstrom – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have now made all the settings at property level.  Finally, you still need to enter the customer number and the contract and term details in the individual residential units.

## Configuring the residential units

Now click on each of the residential units of your property in turn and specify them.

### Customer number

Here you set the customer number for this tenant.

Note:

The customer number is also automatically used as the name of the PDF document for easier external identification.

### Contract and term

Here you can insert contractual provisions. An example (no guarantee of legal validity) would be:

Your contract runs until DD.MM.YYYY and, in accordance with the provision in clause X of your electricity supply contract, is extended by one year if not terminated in good time. You may terminate the electricity supply contract with three months' notice to DD.MM.YYYY in accordance with clause X of the electricity supply contract. Any special right of termination remains unaffected

![smart-me Billing for German Mieterstrom – Figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Congratulations, you've done it! When you now generate invoices in the smart-me Billing tool, you will receive an invoice document with all the required information and visual representations.
