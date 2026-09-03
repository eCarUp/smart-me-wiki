---
title: 'smart-me Billing for German Mieterstrom'
slug: '/konfiguration/billing/mieterstrom'
description: 'You need a smart-me Professional subscription to be able to create electricity bills in accordance with the German Energiewirtschaftsgesetz (EnWG).'
sidebar_label: 'smart-me Billing for German Mieterstrom'
---
### Requirement

You need a smart-me Professional subscription to be able to create electricity bills in accordance with the German Energiewirtschaftsgesetz (EnWG).

## Video tutorial

Our video tutorial explains step by step the additional settings required.

<Video src="5x63wT0jHM8" title="Video" />

## Introduction

In smart-me Billing, electricity bills can be created in accordance with the provisions of Section 42 of the German Energiewirtschaftsgesetzes (EnWG) using some additional settings. 

IMPORTANT: In order to successfully make the additional settings for Mieterstrom, you will first need to set up the [virtual tariffs](/konfiguration/billing) for your property and make the regular [smart-me Billing](/konfiguration/billing) settings. 

IMPORTANT: For Mieterstrom, you must always work with the [virtual tariffs](/konfiguration/billing).

## Example of Mieterstrom billing

A fully configured Mieterstrom bill can look like this: 

<Video src="" title="Video" />

Musterrechnung Mieterstrom.pdf

## General settings

- Log in to the desired smart-me account 

- Click on "Configuration" at the top right and then on "Create invoice"

- Now select the "Settings" to start with.


Here you make the general settings for the presentation of the invoice document. Here you also make the settings, which have already been described in the regular [billing article](/konfiguration/billing):

- Currency (always EUR for Mieterstrom)

- Tax 

- Logo of your company (for inclusion on the invoice document)

- Header / Sender

- Footer


![smart-me Billing for German Mieterstrom – figure 1](/img/_en/configuration-billing-mieterstrom/01.png)

You can now also activate the button at the bottom of the "Mieterstrom Germany" section.  This activates the additional settings for the Mieterstrom extensions.

You can configure the following extensions directly here:

![smart-me Billing for German Mieterstrom – figure 2](/img/_en/configuration-billing-mieterstrom/02.png)

### Grid operator

This is where you determine who your electricity grid operator is. You should get this information from your electrician/PV system installer or on the Internet.

### Customer service / Mediation office

Title proposal:

What drives us? Your satisfaction

Free text suggestion (for the whole of Germany / no guarantee of legal certainty):

"Customer service is our top priority. You can reach us on 01234 / 87589.

If you still have a complaint and - contrary to all expectations - have not received a response or remedy from us after four weeks, you can apply for mediation:



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Telefon: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

E-Mail: [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ATTENTION: The mediation office listed is only an example. There are a large number of mediation offices in Germany and you are free to choose. Contact the mediation office of your choice in advance.

This information will be included at the bottom of your invoice document.

## Property configuration

Switch to the "Configuration" menu item at the top of the tab, here you can now activate the extensions for the property and in the individual residential units. First click on the folder of the desired property.

![smart-me Billing for German Mieterstrom – figure 3](/img/_en/configuration-billing-mieterstrom/03.png)

### Residual electricity composition

At the top, you can define the residual electricity composition. The residual electricity is the amount of electricity that is not produced directly by your Mieterstrom system itself, but must be supplied by the grid. You can obtain the information on the composition of the residual electricity from your selected residual electricity provider.

An example could look like this:

![smart-me Billing for German Mieterstrom – figure 4](/img/_en/configuration-billing-mieterstrom/04.png)

### Consumption compared to the previous and other periods

Directly below you can define the electricity values of reference values for comparison.

The invoice document will inform the electricity consumer of these reference values and their own consumption in the previous period.

ATTENTION: Remember to use the correct values for the billing period you have selected.  So if you create monthly invoices, select the reference values on a monthly basis, etc.

![smart-me Billing for German Mieterstrom – figure 5](/img/_en/configuration-billing-mieterstrom/05.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % Stromverbrauch Deutschland in new window")

<Video src="" title="Video" />

% Stromverbrauch Deutschland

Information in the table without guarantee.

In practice: You will find the [virtual tariffs](/konfiguration/billing) you have already configured directly below the input field for consumption for the previous and other periods. If you want to charge a uniform tariff (grid and solar power are equally expensive), you still need to define two tariffs (with the same price) in a Mieterstrom model. This ensures that the charges for the various electricity components can be correctly determined by our billing tool.

### Definition of tariff components per type of electricity

Further down under "Other" you can define the tariff components per type of electricity (grid and solar). The purpose of this is to show the consumer how their electricity price is calculated. You must do this for both grid and solar electricity. The components must add up to the price you have defined per type of electricity (you have defined this in the [virtual tariffs](/konfiguration/billing)), otherwise billing will give you an error message.

![smart-me Billing for German Mieterstrom – figure 6](/img/_en/configuration-billing-mieterstrom/06.png)

You can either insert the standard Mieterstrom tariff components directly or enter individual tariff components via "Edit".

Important: Select the correct type when editing or specify whether it is a tariff component of grid (residual electricity) or solar electricity.


Important: You can obtain information on the composition of the components for grid electricity (residual electricity) from your chosen residual electricity provider.

Solar electricity usually only consists of the EEG surcharge and the generation price.

![smart-me Billing for German Mieterstrom – figure 7](/img/_en/configuration-billing-mieterstrom/07.png)

A complete configuration can look like this:

![smart-me Billing for German Mieterstrom – figure 8](/img/_en/configuration-billing-mieterstrom/08.png)

You have now made all the settings required for the property level.  Finally, you must enter the client number, the contract details and the duration for each residential unit.

## Configuration of the residential units

Click on the various residential units in your property one after the other and specify them.

### Client number

Here you specify the client number for this apartment/unit.

### Contract and duration

You can enter contractual provisions here. An example (without guarantee of legal certainty) would be:

Your contract has a duration until DD.MM.YYYY and will be extended by one year in accordance with the provision in Section X of your electricity supply contract if it is not terminated on time. You may terminate the electricity supply contract by giving three months' notice to DD.MM.YYYY in accordance with Section X of the electricity supply contract. A special right of termination remains unaffected.

Congratulations, you've done it! If you now generate invoices in the smart-me Billing tool, you will receive an invoice document with all the necessary information and visual illustrations.
