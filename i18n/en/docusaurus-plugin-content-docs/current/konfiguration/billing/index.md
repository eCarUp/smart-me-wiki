---
title: 'Energy Billing'
slug: '/konfiguration/billing'
description: 'You need a smart-me Professional subscription to be able to create energy bills.'
sidebar_label: 'Energy Billing'
---
### Requirement

You need a smart-me Professional subscription to be able to create energy bills. 

## Tools

[smart-me tariff caluclator](https://doc.smart-me.com/configuration/billing/define-electrical-tariffs/smart-me-tariff-calculator)

## Video smart-me billing A-Z

This video explains step by step how to configure a property in the Billing Tool.

<Video src="" title="Video" />

## smart-me billing bill examples

Example energy bill.pdf

Example Bill Electric Energy

Example\_Bill\_VEWA\_Heat\_charge\_settlement.pdf

Example heat cost settlement with VEWA

## Configure billing step by step

With this step-by-step guide we would like to support you in configuring your billing. Please note that this is only an example to guide you. Depending on the structure of your property, there will be differences to our example. 

## Settings of the Billing

First, navigate to the Billing Settings.

Configure the currency and the application of value-added tax (VAT) here.

Specific VAT Settings:

Case A: You are a ZEV making under CHF 100,000 in revenue from electricity and have not voluntarily submitted to VAT liability:

- VAT: 0%

- Tax already included in prices: YES


Case B: You are a ZEV making CHF 100,000 or more in revenue from electricity sales or have voluntarily submitted to VAT liability:

- VAT: 8.1%

- Tax already included in prices: NO


![Energy Billing – figure 1](/img/_en/configuration-billing/01.png)

![Energy Billing – figure 2](/img/_en/configuration-billing/02.png)

While you're at it, configure your logo for the invoice.

Fill the header with the contact details and address of the invoice sender, and add a few friendly words for your customers in the footer.

![Energy Billing – figure 3](/img/_en/configuration-billing/03.png)

## Configuration of the billing

Now navigate to Billing Configuration to set up the billing for the properties.

![Energy Billing – figure 4](/img/_en/configuration-billing/04.png)

1.  ### Create billing property


The property can be added (created) under Billing.

This process is now carried out for all nodes that contain billing units.

During this step, all previously created subfolders and assigned meters are automatically mapped. For this reason, we recommend doing this prior to creating the property in smart-me Billing.

The metering points that are meant to be distributed and are located in the "Technical Meter" node must now be assigned manually.

![Energy Billing – figure 5](/img/_en/configuration-billing/05.png)

### 2\. Manually comission a meter to a billing unit

When creating the property, the meters are automatically assigned 100% to the billing unit (folder).

If you would like to split a meter (e.g., general/common area) according to an allocation key or change it retroactively, this must be done manually.

- Select the billing unit on the left (subfolder, e.g., WHG 1)

- Click Add under Electricity (or the respective category)

- Select the desired meter and specify the percentage to be billed.


The described procedure works similarly for the other energy types (heating, cooling, etc.).

![Energy Billing – figure 6](/img/_en/configuration-billing/06.png)

### 3\. Set IBAN for QR code

In smart-me Billing, the QR invoice can optionally be activated.

After depositing the account details, a QR invoice for payment is attached for each billing unit (tenant).

smart-me automatically recognizes correctly filled sender information if the billing address in Billing is entered across 3 lines. If a company name or address prefix is chosen, it must be added before the name.

e.g.

Firma AG, Peter Lustig

Löwenzahnstrasse 42

6666 Risch

If no valid address is recognized, the sender field ("Payable by") on the QR invoice will remain blank.

smart-me does not support reference numbers. To use reference numbers, [a third-party system](/drittsysteme) that supports them is required (e.g., [Bexio](/drittsysteme/bexio)).

To identify the invoice without a reference number, additional information ("Message to the beneficiary") is added to the QR invoice, which is structured as follows: Name of the billing unit (folder name).

The layout is optimized for sending via email. If the invoices are printed, we recommend disabling the QR invoice function and ordering pre-printed QR payment slips directly from your bank.

![Energy Billing – figure 7](/img/_en/configuration-billing/07.jpg)

![Energy Billing – figure 8](/img/_en/configuration-billing/08.png)

### 4\. Record tenant list

For billing according to VEWA, all tenant contracts and vacancies must be documented completely and seamlessly in smart-me.

Menu Billing

- Configuration

- Select billing unit on the left (subfolder, e.g., WHG 1)

- Maintain address and validity period

- Email is optional and is only used for automated invoice sending.


Note for export to real estate software with DTA-VHKA files:

If you want to use VEWA but export the data to another system, you do not need to enter a tenant list—this will be created via the import file.

Make sure that all tenancy relationships and vacancies are recorded.

![Energy Billing – figure 9](/img/_en/configuration-billing/09.png)

![Energy Billing – figure 10](/img/_en/configuration-billing/10.png)

### 5\. Configure electricity tariffs

- Menu Billing

- Configuration

- Select the property on the left (main folder, e.g., Altgasse 13)

- Add virtual electricity tariffs. (e.g., High tariff, Low tariff, Solar tariff)


### 6\. Configure heat and water systems

When setting up tariffs and billing for multi-energy, there are fundamentally two configuration options:

Billing Without VEWA Functionality

- Billing using an externally calculated energy tariff per energy type. This is managed within the property under virtual tariffs with a price per CHF/m³ or CHF/kWh.


Billing With VEWA Functionality (Recommended)

- Accruing costs for heat and water throughout the year can be recorded. The tariff is then calculated over the period and distributed to the billing units using allocation keys.


### Next sub steps

[Configure electricity tariff](/konfiguration/billing/stromtarife-definieren)

[Configure VEWA](/konfiguration/billing/vewa-abrechnung)

### 7\. Others cost for electricity billing (if needed)

In the "Other" field, additional cost items can be added. This can be done individually for each billing unit or globally for all billing units (property level).

At the Property Level:

In the "Other" field, additional cost items can be added. This can be done individually for each billing unit or globally for all billing units (property level).

- Example: 80% of the energy provider's basic cost component should be billed equally to all participants in connection with the solar tariff.

- The entered fee will be added to all invoices per month.




Note: The "Other" costs are only available with the electricity invoice.



At the Billing Unit Level:

- Example: A charging station is rented out and should be billed monthly to a specific billing unit.

- The cost will only be charged to that single billing unit.




![Energy Billing – figure 11](/img/_en/configuration-billing/11.png)

### 8\. Create a bill

If the blue box for virtual tariffs is on today's date, a sample invoice can be created.

1.  Menu Billing:Navigate to Billing in the menu.

2.  Invoices:Select Invoices.

3.  Enter date:Enter the date.

4.  Create invoice:Click Create Invoice.


On this page, you will find a description of the most common error messages and possible solutions: Billing Error Messages

### Next step

[Go to User creation](/konfiguration/benutzerkonfiguration)

### Visualisation

A new tile is now displayed in the default view of the residence folder. It specifies the meter readings for the virtual tariffs. Clicking on this tile will display the load profile for the virtual tariffs.

![Energy Billing – figure 12](/img/_en/configuration-billing/12.jpg)

### Tenant view

A special view for tenants is available for the virtual tariffs. This shows the current energy consumption (electricity) and the origin (solar or grid). In addition, the percentage origin of the energy is displayed in a bar.

![Energy Billing – figure 13](/img/_en/configuration-billing/13.jpg)

### Example of solar power sharing

Example

A house consists of two flats and a solar installation. The following tariffs are defined:

- Solar power: 0.16 CHF / kWh

- Mains power: 0.25 CHF / kWh


Tenant A is not often at home during the day and mainly uses grid electricity (in the evening):

- Daily consumption: 6 kWh

- Solarstrom: 10%

- Mains power: 90%


Tenant B tries to consume solar power as much as possible (consumers mainly run when the sun is shining):

- Daily consumption: 6 kWh

- Solar power: 70%

- Mains power: 30%


Tenant A and tenant B have the same energy consumption. However, since tenant B uses more solar electricity, he benefits from the cheaper solar electricity tariff.

- Costs Tenant A:

    - Solar power: 0.6 \* 0.16 CHF = 0.096 CHF

    - Mains power: 5.4 \* 0.25 CHF = 1.35 CHF

    - Total: 1.45 CHF

- Costs Tenant B:

    - Solar power: 4.2 \* 0.16 CHF = 0.672 CHF

    - Mains power: 1.8 \* 0.25 CHF = 0.45 CHF

    - Total: 1.12 CHF


## Error messages and warnings

On this page you will find a description of the most common error messages and possible solutions: [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen) 

[Go to create users](/konfiguration/benutzerkonfiguration)
