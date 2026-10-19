---
title: 'Energy Billing'
slug: '/konfiguration/billing'
description: 'You need a smart-me Professional subscription to create energy cost bills.'
sidebar_label: 'Billing'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing/stromtarife-definieren/index, konfiguration/billing/vewa-abrechnung]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Prerequisite

You need a smart-me Professional subscription to create energy cost bills.

## Tools

[smart-me electricity tariff calculator](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing from A to Z

Our webinar explains step by step how to create energy cost bills with the billing tool:

<Video src="0AvKOogoW5Q" title="YouTube video, smart-me Billing for advanced users" />

<Video src="mK1HYLRtBUI" title="YouTube video, smart-me Billing - virtual tariffs, peak power, changing meter rental" />

Video content

- Configuring peak tariff and off-peak tariff as a single tariff

- Adjusting the prices of the virtual tariffs

- Peak power

- Meter rental


## smart-me Billing invoice examples

Beispiel Energiekostenabrechnung.pdf

Example: electricity billing

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Example: VEWA billing

## Configuring billing step by step

This step-by-step guide is intended to help you configure your billing. Please note that this is only an example for orientation. Depending on the structure of your property, there will be differences from our example.

## Billing settings

<div className="row">
<div className="col col--7">

First, navigate to the billing settings (Einstellungen der Rechnungsstellung).

Configure the currency and the application of VAT here.

Specific VAT settings:

- Case A: You are a ZEV (association for own consumption), your electricity turnover is definitely less than 100'000CHF and you have not voluntarily registered for VAT:

    \- VAT 0%

    \- Tax already included in prices (Steuer in Preise bereits inbegriffen): YES

- Case B: You are a ZEV, your turnover from electricity sales is 100'000 CHF or more, or you have voluntarily registered for VAT:

    \- VAT 8.1%

    \- Tax already included in prices (Steuer in Preise bereits inbegriffen): NO

</div>
<div className="col col--5 text--center">

![Energy Billing – Figure 1](/img/konfiguration-billing/01.png)

![Energy Billing – Figure 2](/img/konfiguration-billing/02.png)

</div>
</div>

While you are at it, also configure your logo for the invoice.

Fill in the header with the contact details and address of the invoice sender, and add a few friendly words to your customers in the footer.

![Energy Billing – Figure 3](/img/konfiguration-billing/03.png)

## Billing configuration

<div className="row">
<div className="col col--5">

Now navigate to the billing configuration (Rechnungsstellung Konfiguration) to configure the billing for the properties.

</div>
<div className="col col--7 text--center">

![Energy Billing – Figure 4](/img/konfiguration-billing/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

1.  ### Create property

In billing, the property can be added (created).

This is now done for all nodes that contain billing units.

In this step, all subfolders already created and all assigned meters are allocated automatically. For this reason, we recommend doing this before creating the property in smart-me Billing.

The metering points that are to be distributed and are located in the "Technical meter" (Technischer Zähler) node must now be assigned manually.

</div>
<div className="col col--6 text--center">

![Energy Billing – Figure 5](/img/konfiguration-billing/05.png)

</div>
</div>

### 2\. Manually assign meters to a billing unit

<div className="row">
<div className="col col--7">

When the property is created, the meters are automatically assigned 100% to the billing unit (folder).

If you want to split a meter (e.g. common areas) according to an allocation key or change it later, this has to be done manually.

- On the left, select the billing unit (subfolder, e.g. WHG 1)

- Click Add (Hinzufügen), e.g. for Electricity (Elektrizität)

- Select the desired meter and enter the percentage to be billed.

The procedure described works the same way for the other energy types (heat, cooling, etc.)

</div>
<div className="col col--5 text--center">

![Energy Billing – Figure 6](/img/konfiguration-billing/06.png)

</div>
</div>

### 3\. Enter IBAN

<div className="row">
<div className="col col--7">

In smart-me Billing, the QR bill can optionally be activated.

Once the account details have been entered, a QR bill for payment is attached for each billing unit (tenant).

smart-me automatically recognizes correctly filled-in payers if the billing address in Billing is entered on 3 lines. If a company or a form of address is used, it must be added before the name.

e.g.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

If no correct address is recognized, the payer field (Zahlbar durch) in the QR bill remains empty.

smart-me does not support reference numbers. To use them, you need a [third-party system](/drittsysteme) that supports them (e.g.[Bexio](/drittsysteme/bexio)).

To identify the invoice without a reference, additional information (message to the beneficiary) is added to the QR bill, composed as follows: name of the billing unit (folder name).

The layout is optimized for sending by e-mail. If the invoices are printed, we recommend deactivating the QR bill and ordering it from the bank.

</div>
<div className="col col--5 text--center">

![Energy Billing – Figure 7](/img/konfiguration-billing/07.jpg)

![Energy Billing – Figure 8](/img/konfiguration-billing/08.png)

</div>
</div>

### 4\. Enter tenant list

For billing according to VEWA, all tenancy agreements and vacancies must be provided to smart-me without gaps.

- Billing (Rechnungsstellung) menu

- Configuration (Konfiguration)

- On the left, select the billing unit (subfolder, e.g. WHG 1)

- Maintain address and validity

- E-mail is optional and is only used for sending invoices automatically.


Note for export to real estate software with DTA-VHKA files:
If you want to use VEWA but export the data to another system, you do not need to enter a tenant list; it is created via the import file.
Make sure that all tenancies and vacancies are recorded.

![Energy Billing – Figure 9](/img/konfiguration-billing/09.png)

![Energy Billing – Figure 10](/img/konfiguration-billing/10.png)

### 5\. Configure electricity tariffs

- Billing (Rechnungsstellung) menu

- Configuration (Konfiguration)

- On the left, select the property (main folder, e.g. Altgasse 13)

- Add virtual electricity tariffs (Virtuelle Stromtarife Hinzufügen). (e.g. peak tariff, off-peak tariff, solar tariff)

In detail: [Define electrical tariffs](/konfiguration/billing/stromtarife-definieren)


### 6\. Configure heat / water

For the tariffing and billing of multi-energy, there are basically two configuration options:

Billing without the VEWA function

- Billing using an externally calculated energy tariff per energy type. It is entered with a price per CHF/m3 or CHF/kWh in the property below the virtual tariffs.


Billing with the VEWA function (recommended)

- Costs for heat / water accumulated over the year can be recorded. The tariff is then calculated over the period and distributed to the billing units using allocation keys.

In detail: [Configure VEWA - Billing](/konfiguration/billing/vewa-abrechnung)



### 7\. Configure other costs for electricity (if required)

Further cost items can be added in the Other (Sonstiges) field. This can be done individually for each billing unit (billing unit) or globally for all billing units (property).

At property level:

Further cost items can be added in the Other (Sonstiges) field. This can be done individually for each billing unit (billing unit) or globally for all billing units (property).

Example:
80% of the energy supplier's basic cost share is to be charged equally to all participants in connection with the solar tariff.

- The entered fee is added to all invoices per month

Note: Other (Sonstiges) costs are only available with the electricity invoice.

At billing unit level

Example:
A charging station is rented out and is to be invoiced monthly to the billing unit.

- The costs are charged to that one billing unit only

![Energy Billing – Figure 11](/img/konfiguration-billing/11.png)

### 8\. Create invoice

When the blue box for the virtual tariffs is on today's date, a test invoice can be created.

- Billing (Rechnungsstellung) menu

- Invoices (Rechnungen)

- Enter date

- Create invoice preview (Rechnungsvorschau erstellen)


If you are satisfied with the preview, you can go back and create the real invoices.

On this page you will find a description of the most common error messages and possible solutions: [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen)


## Useful notes on the tariff data

### Visualization

<div className="row">
<div className="col col--7">

A new tile is now displayed in the default view of the billing unit's folder (e.g. an apartment). It shows the meter readings for the virtual tariffs. Clicking this tile displays the load profile for the virtual tariffs.

</div>
<div className="col col--5 text--center">

![Energy Billing – Figure 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### How the solar power is allocated

The smart-me platform uses the production meter (PV meter) to determine the amount of electricity generated and the virtual total consumption meter to determine the amount of electricity consumed. From this, a percentage share of solar power is calculated.

Each electricity meter (tenant) is therefore entitled to the same share of solar power per 15 minutes, e.g. 40% of its consumption in kWh.

Example of solar power allocation

- Total consumption 10kWh

- Solar power 6kWh (60% solar / 40% grid)

- Tenant 1 consumption 6kWh (3,6kWh solar / 2,4kWh grid)

- Tenant 2 consumption 4kWh (2,4kWh solar / 1,6 kWh grid)


Accuracy can be improved by configuring the balance meter for the solar tariff.

![Energy Billing – Figure 13](/img/konfiguration-billing/13.png)
