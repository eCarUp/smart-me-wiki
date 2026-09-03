---
title: 'smart-me Billing for German Mieterstrom'
slug: '/konfiguration/billing/mieterstrom'
description: 'You need a smart-me Professional subscription to be able to create electricity bills in accordance with the German Energy Industry Act (EnWG).'
sidebar_label: 'Tenant electricity'
---
### Requirement

You need a smart-me Professional subscription to be able to create electricity bills in accordance with the German Energy Industry Act (EnWG).   

## Video Tutorial

Our video tutorial explains step by step which additional settings are required.

<Video src="KSCBESne84M" title="YouTube video, smartRED webinar: How tenant electricity works – simple implementation and functions explained" />

Introduction to tenant electricity

<Video src="wXGSibdoBR8" title="YouTube video, Ismaning's first tenant electricity system by Körmer GmbH - tenant electricity with smartRED" />

Reference property

<Video src="rsI2zut_HKM" title="YouTube video, Tutorial: smartRED meter configuration in the smart-me Cloud" />

Meter configuration for tenant electricity

## Introduction

In smart-me Billing, a few additional settings allow you to create electricity bills in accordance with the requirements of section § 42 of the German Energy Industry Act (EnWG). 

IMPORTANT:  Before you can successfully make the additional settings for tenant electricity, you must first have set up the [virtual tariffs](/konfiguration/billing) for your property and made the standard settings for [smart-me Billing](/konfiguration/billing).

IMPORTANT:  With tenant electricity, you must always work with the [virtual tariffs](/konfiguration/billing).

## Example of a tenant electricity bill

A fully configured tenant electricity bill can look like this: 

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, Sample tenant electricity bill.pdf" />

Musterrechnung Mieterstrom.pdf

## Configuring and reconciling metering concepts

### Standard metering concept (all consumers are tenant electricity participants)

![smart-me Billing for German Mieterstrom – figure 1](/img/konfiguration-billing-mieterstrom/01.png)

[Details on the standard concept: tariffing and reconciliation](/konfiguration/billing/mieterstrom/standard-messkonzept)

### MKD3 metering concept (tenant electricity with non-participants)

![smart-me Billing for German Mieterstrom – figure 2](/img/konfiguration-billing-mieterstrom/02.png)

[Details on the MKD3 metering concept: tariffing and reconciliation](/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer)

## General settings

- Log in to the desired smart-me account 

- Click on "Configuration" (Konfiguration) at the top right and then on "Create invoice" (Rechnung erstellen)

- Now first select the "Settings" (Einstellungen) button


Here you make the general settings for how the invoice document is presented. This is also where you make the settings already described in the standard [Billing article](/konfiguration/billing):


- Currency (always EUR for tenant electricity)

- Tax 

- Your company logo (for display in the invoice document)

- Header / sender

- Footer


![smart-me Billing for German Mieterstrom – figure 3](/img/konfiguration-billing-mieterstrom/03.png)

In addition, you can now activate the switch at the bottom in the "Mieterstrom Deutschland" section. This unlocks the additional settings for the tenant electricity extensions.

You can make the following extensions right here:

![smart-me Billing for German Mieterstrom – figure 4](/img/konfiguration-billing-mieterstrom/04.png)

### Grid operator

Here you define who your distribution grid operator is. You should get this information from your electrician/PV system installer or from the internet.

### Customer service / conciliation body

Suggested title:

What drives us? Your satisfaction

Suggested free text (for all of Germany / no guarantee of legal certainty):

"Customer service comes first for us. You can reach us on 01234 / 87589.

If a complaint should nevertheless arise and you have – contrary to expectations – received no answer or remedy from us after four weeks, you can request conciliation:



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Telephone: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

E-mail: [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ATTENTION: The conciliation body listed is given only as an example. There are a large number of conciliation bodies in Germany and you are free to choose. Contact the conciliation body of your choice in good time.

This information is shown at the very bottom of your invoice document.

## Configuring the property

Switch to the "Configuration" (Konfiguration) menu item in the tab at the top; here you can now make the unlocked extensions for the property and in the individual residential units. First click on the folder of the desired property.

![smart-me Billing for German Mieterstrom – figure 5](/img/konfiguration-billing-mieterstrom/05.png)

### Residual electricity mix

At the very top you can define the residual electricity mix. Residual electricity is the amount of electricity that is not produced directly by your tenant electricity system itself but has to be supplied additionally from the grid. You will receive the details of the residual electricity mix from the residual electricity supplier you have chosen.

An example can look like this:

![smart-me Billing for German Mieterstrom – figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consumption compared with the previous period and with others

Directly below, you can define the electricity values of comparison figures.

The invoice document will show the electricity recipients these reference values as well as their own consumption in the previous period.

ATTENTION: Remember to enter the correct values  for the billing period you have chosen.  So if you create monthly invoices, choose the reference values on a monthly basis, and so on.

![smart-me Billing for German Mieterstrom – figure 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % electricity consumption Germany in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" title="Spreadsheet, % electricity consumption Germany" />

% Stromverbrauch Deutschland

The information in the table is provided without guarantee.

Practical tip:  Directly below the input field for consumption in the previous period and by others, you will find the [virtual tariffs](/konfiguration/billing) you have already configured. If you want to bill a single flat tariff (grid and solar electricity cost the same), you must still define two tariffs (with the same price) in a tenant electricity model. This ensures that the levies on the various electricity components can be determined correctly by our Billing tool.

### Defining the tariff components per electricity type

Further down, under "Other" (Sonstiges), you can define the tariff components per electricity type (grid and solar). The purpose of this is to show the end customer how their electricity price is made up. You have to do this for grid electricity as well as for solar electricity. Together, the components must add up to the price per electricity type you have defined (you set this in the [virtual tariffs](/konfiguration/billing)), otherwise Billing will show you an error message.

![smart-me Billing for German Mieterstrom – figure 8](/img/konfiguration-billing-mieterstrom/08.png)

You can either insert the standard tenant electricity tariff components directly or record individual tariff components via "Edit" (Editieren).

Important: Choose the correct type when editing, i.e. specify whether the tariff component belongs to grid electricity (residual electricity) or solar electricity.


Important: You will receive the details of the composition of the components for grid electricity (residual electricity) from the residual electricity supplier you have chosen.

Solar electricity usually consists only of the EEG levy and the generation price.

![smart-me Billing for German Mieterstrom – figure 9](/img/konfiguration-billing-mieterstrom/09.png)

A finished configuration can look like this:

![smart-me Billing for German Mieterstrom – figure 10](/img/konfiguration-billing-mieterstrom/10.png)

You have now made all the settings at property level.  Finally, you still have to enter the customer number and the details of the contract and its term in the individual residential units.

## Configuring the residential units

Now click on the various residential units of your property one after the other and specify them.

### Customer number

Here you define the customer number for this tenant.

Note:

The customer number is also used automatically as the name of the PDF document, for easier external identification.

### Contract and term

Here you can insert contractual provisions. An example (with no guarantee of legal certainty) would be:

Your contract runs until DD.MM.YYYY and will be extended by one year in accordance with the provision in clause X of your electricity supply contract if it is not terminated in good time. You may terminate the electricity supply contract with three months' notice as of DD.MM.YYYY in accordance with clause X of the electricity supply contract. Any right to extraordinary termination remains unaffected

![smart-me Billing for German Mieterstrom – figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Congratulations, you have made it! When you now generate invoices in the smart-me Billing tool, you will be given an invoice document with all the necessary details as well as the visual presentations.
