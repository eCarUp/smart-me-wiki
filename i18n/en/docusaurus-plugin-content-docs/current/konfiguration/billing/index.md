---
title: 'Energy Billing'
slug: '/konfiguration/billing'
description: 'You need a smart-me Professional subscription in order to create energy cost bills.'
sidebar_label: 'Billing'
---
### Prerequisite

You need a smart-me Professional subscription in order to create energy cost bills. 

## Tools

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing from A-Z

Our webinar explains step by step how to create energy cost bills with the Billing tool:

<Video src="0AvKOogoW5Q" title="YouTube video, smart-me Billing for advanced users" />

<Video src="mK1HYLRtBUI" title="YouTube video, smart-me Billing - virtual tariffs, peak power, changing meter rental" />

Video content

- Configuring peak and off-peak tariff to a single tariff

- Adjusting the prices of the virtual tariffs

- Peak power

- Meter rental


## smart-me Billing invoice examples

Beispiel Energiekostenabrechnung.pdf

Example: electricity bill

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Example: VEWA billing

## Configuring the billing step by step

This step-by-step guide is intended to support you in configuring your billing. Please note that this is only an example for you to use as a reference. Depending on how your property is set up, there will be differences from our example. 

## Billing settings

First, navigate to the billing settings (Rechnungsstellung).

Configure the currency and the application of value added tax here.



Specific settings for VAT:

- Case A: You are a ZEV (association for own consumption) and are certain to generate less than CHF 100,000 in revenue from electricity and have not voluntarily registered for VAT:
    \- VAT 0%
    \- Tax already included in prices: YES

- Case B: You are a ZEV and generate CHF 100,000 or more in revenue from electricity sales or have voluntarily registered for VAT:
    \- VAT 8.1%
    \- Tax already included in prices: NO


![Energy Billing – figure 1](/img/konfiguration-billing/01.png)

![Energy Billing – figure 2](/img/konfiguration-billing/02.png)

While you are at it, also configure your logo for the invoice.

Fill the header with the contact details and address of the invoice sender and add a few friendly words for your customers in the footer.

![Energy Billing – figure 3](/img/konfiguration-billing/03.png)

## Billing configuration

Now navigate to the billing configuration (Rechnungsstellung Konfiguration) to configure the bills for the properties.

![Energy Billing – figure 4](/img/konfiguration-billing/04.png)

1.  ### Create property


In billing, the property can be added (created). 

This is now done for all nodes that contain billing units.

In this step, all subfolders already created and meters already assigned are allocated automatically. For this reason we recommend doing this before creating the property in smart-me Billing.

The metering points that are to be distributed and that are located in the "Technical meters" (Technischer Zähler) node still have to be allocated manually.

![Energy Billing – figure 5](/img/konfiguration-billing/05.png)

### 2\. Assigning meters to a billing unit manually

When the property is created, the meters are automatically assigned to the billing unit (folder) at 100%.

If you want to split a meter (e.g. general) according to a distribution key or change it later, this has to be done manually.

- Select the billing unit on the left (subfolder, e.g. APT 1)

- Click on Add (Hinzufügen), for example under Electricity (Elektrizität) 

- Select the desired meter and specify the percentage to be billed.


The procedure described works in the same way for the other energy types (heat, cooling, etc.)

![Energy Billing – figure 6](/img/konfiguration-billing/06.png)

### 3\. Entering the IBAN

In smart-me Billing, the QR invoice can optionally be activated.

Once the account details have been entered, a QR invoice for payment is attached for each billing unit (tenant).

smart-me detects correctly completed senders automatically if the invoice address in Billing is entered on 3 lines. If a company or a c/o address is chosen, it has to be added before the name.

e.g.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

If no correct address is detected, the sender field (Payable by / Zahlbar durch) in the QR invoice remains empty.

smart-me does not support reference numbers. To be able to use them, a [third-party system](/drittsysteme) that also supports this is required (e.g. [Bexio](/drittsysteme/bexio)). 

To identify the invoice without a reference, additional information (message to the beneficiary) is added to the QR invoice, composed as follows: name of the billing unit (folder name).

The layout is optimized for sending by e-mail. If the invoices are printed, we recommend deactivating the QR invoice and ordering it from the bank.

![Energy Billing – figure 7](/img/konfiguration-billing/07.jpg)

![Energy Billing – figure 8](/img/konfiguration-billing/08.png)

### 4\. Recording the tenancy schedule

For billing according to VEWA, all tenancy contracts and vacancies must be entered in smart-me without any gaps.

- Billing menu (Rechnungsstellung)

- Configuration (Konfiguration)

- Select the billing unit on the left (subfolder, e.g. APT 1)

- Maintain the address and validity period

- E-mail is optional and is only used for automatic invoice dispatch.


Note on exporting to property management software with DTA-VHKA files:
If you want to use VEWA but export the data to another system, you do not need to record a tenancy schedule; it is created via the import file.
Make sure that all tenancies and vacancies are recorded.

![Energy Billing – figure 9](/img/konfiguration-billing/09.png)

![Energy Billing – figure 10](/img/konfiguration-billing/10.png)

### 5\. Configuring electricity tariffs

- Billing menu (Rechnungsstellung)

- Configuration (Konfiguration)

- Select the property on the left (main folder, e.g. Altgasse 13)

- Add virtual electricity tariffs. (e.g. peak tariff, off-peak tariff, solar tariff)


### 6\. Configuring heat / water

There are basically two configuration options for the tariffing and billing of multi-energy:

Billing without the VEWA function

- Billing using an externally calculated energy tariff per energy type. Managed with a price per CHF/m3 or CHF/kWh in the property below the virtual tariffs.


Billing with the VEWA function (recommended)

- Costs for heat / water accruing over the year can be recorded.  The tariff is then calculated over the period and distributed to the billing units using distribution keys. 


### Next intermediate steps

[Configure electricity tariffs](/konfiguration/billing/stromtarife-definieren)

[Configure VEWA](/konfiguration/billing/vewa-abrechnung)

### 7\. Configuring other costs for electricity (if necessary)

Additional cost items can be added in the Other (Sonstiges) field. This can be done individually for each billing unit (billing unit) or globally for all billing units (property). 

At property level:

Additional cost items can be added in the Other (Sonstiges) field. This can be done individually for each billing unit (billing unit) or globally for all billing units (property). 

Example:
80% of the utility's basic cost share is to be billed equally to all participants in connection with the solar tariff.

- The fee entered is added to all invoices per month


Note: The other costs are only available with the electricity invoice.



At billing unit level

Example:
A charging station is rented out and is to be billed to the billing unit on a monthly basis.

- The costs are charged to that one billing unit only




![Energy Billing – figure 11](/img/konfiguration-billing/11.png)

### 8\. Creating an invoice

If the blue box on the virtual tariffs is on today's date, a test invoice can be created.

- Billing menu (Rechnungsstellung)

- Invoices (Rechnungen)

- Enter the date

- Create invoice preview


If you are satisfied with the preview, you can go back and create the real invoices.

On this page you will find a description of the most common error messages and possible solutions: [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen) 

### Next step

[Continue to creating tenant accounts](/konfiguration/benutzerkonfiguration)

## Helpful notes on the tariff data

### Visualization

A new tile is now displayed in the standard view of the billing unit's folder (e.g. an apartment). It shows the meter readings for the virtual tariffs. Clicking on this tile displays the load profile for the virtual tariffs. 



![Energy Billing – figure 12](/img/konfiguration-billing/12.jpg)

### How is the solar power distributed

The smart-me platform uses the production meter (PV meter) to determine the amount of electricity generated and the virtual total consumption meter to determine the amount of electricity consumed. From this, a percentage share of the solar power is calculated. 

Each electricity meter (tenant) is thus entitled to the same share of solar power per 15 minutes, e.g. 40% of its consumption in kWh.

Example of solar power allocation

- Total consumption 10kWh

- Solar power 6kWh (60% solar / 40% grid)

- Tenant 1 consumption 6kWh (3.6kWh solar / 2.4kWh grid)

- Tenant 2 consumption 4kWh (2.4kWh solar / 1.6 kWh grid)


The accuracy can be improved by configuring the balance meter for the solar tariff.

![Energy Billing – figure 13](/img/konfiguration-billing/13.png)

[Continue to creating tenant accounts](/konfiguration/benutzerkonfiguration)
