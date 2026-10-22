---
title: 'Energy Billing (Germany)'
slug: '/konfiguration/billing-deutschland'
description: 'Electricity billing in accordance with § 42 of the German Energy Industry Act (EnWG): billing units, virtual tariffs, metering concept and invoice creation for German tenant electricity.'
sidebar_label: 'Billing Germany'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing-deutschland/stromtarife-definieren]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Prerequisite

You need a smart-me Professional subscription to create electricity bills in accordance with the German Energy Industry Act (EnWG).

This page guides you through billing for **German tenant electricity**. The Swiss variant with ZEV and VEWA can be found under [Billing Switzerland](/konfiguration/billing).

## Video Tutorial

Our video tutorial explains the additional settings required, step by step.

<div className="row">
<div className="col col--4">

<Video src="KSCBESne84M" title="YouTube video, smartRED webinar: How tenant electricity works – simple implementation and functions explained" />

Introduction to tenant electricity

</div>
<div className="col col--4">

<Video src="wXGSibdoBR8" title="YouTube video, Ismaning's first tenant electricity system by Körmer GmbH - tenant electricity with smartRED" />

Reference project

</div>
<div className="col col--4">

<Video src="rsI2zut_HKM" title="YouTube video, Tutorial: smartRED meter configuration in the smart-me Cloud" />

Tenant electricity meter configuration

</div>
</div>

<div className="row">
<div className="col col--8">

## Example of a tenant electricity bill

A fully configured tenant electricity bill can look like this: 

</div>
<div className="col col--4 bild--mitte">

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, sample invoice tenant electricity (Musterrechnung Mieterstrom.pdf)" />

Musterrechnung Mieterstrom.pdf

</div>
</div>

# Step by step

## General settings

<div className="row">
<div className="col col--7">

- Log in to the desired smart-me account 

- Click "Configuration" ("Konfiguration") at the top right and then "Create invoice" ("Rechnung erstellen")

- First select the "Settings" ("Einstellungen") button

Here you make the general settings for the layout of the invoice document.
- Currency (always EUR for tenant electricity)
- Tax 
- Your company logo (for display in the invoice document)
- Header / sender
- Footer

</div> 
<div className="col col--5 bild--mitte">

![smart-me Billing for German Mieterstrom – Figure 3](/img/konfiguration-billing-mieterstrom/03.png)

</div>
</div>

### Activating tenant electricity

In addition, you can now activate the switch at the bottom in the "Tenant Electricity Germany" ("Mieterstrom Deutschland") section.  This unlocks the additional settings for the tenant electricity extensions.

![smart-me Billing for German Mieterstrom – Figure 4](/img/konfiguration-billing-mieterstrom/04.png)

#### Grid operator

Here you specify who your grid operator is. You can get this information from your electrician/PV system installer or on the internet.

#### Customer service / arbitration board

**Suggested title:** What drives us? Your satisfaction

**Suggested free text (for all of Germany / no guarantee of legal certainty):**

"Customer service is our top priority. You can reach us at 01234 / 87589.

Should you nevertheless have a complaint and – contrary to expectations – not have received a response or remedy from us after four weeks, you can request arbitration:

Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Phone: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

Email: [info@schlichtungsstelle-energie.de
](mailto:info@schlichtungsstelle-energie.de)

ATTENTION: The arbitration board listed is given only as an example. There are many arbitration boards in Germany and you are free to choose. Contact the arbitration board of your choice early on.

This information is listed at the very bottom of your invoice document.

## Configuring the property

<div className="row">
<div className="col col--6">

Switch to the "Configuration" ("Konfiguration") menu item in the tab at the top. Here you can now configure the unlocked extensions for the property and for the individual residential units. First click on the folder of the desired property.

</div>
<div className="col col--6 text--center">

![smart-me Billing for German Mieterstrom – Figure 5](/img/konfiguration-billing-mieterstrom/05.png)

</div>
</div>

### Residual electricity mix

At the very top you can define the residual electricity mix. Residual electricity is the amount of electricity that is not produced directly by your tenant electricity system itself but has to be supplied additionally from the grid. You will receive the information on the composition of the residual electricity from your chosen residual electricity supplier.

An example might look like this:

![smart-me Billing for German Mieterstrom – Figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consumption compared to the previous period and others

<div className="row">
<div className="col col--4">

Directly below, you can define electricity reference values for comparison.

The invoice document will show the electricity recipients these reference values as well as their own consumption in the previous period.

ATTENTION: Remember to enter the correct values  for the billing period you have chosen.  So if you create monthly invoices, choose reference values on a monthly basis, and so on.

</div>
<div className="col col--8 text--center">

![smart-me Billing for German Mieterstrom – Figure 7](/img/konfiguration-billing-mieterstrom/07.png)

</div>
</div>

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open spreadsheet, % electricity consumption Germany in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Spreadsheet, % electricity consumption Germany" />

% electricity consumption Germany

Figures in the table without guarantee.

## Configuring tariffs

- Menu Billing (Rechnungsstellung)
- Configuration (Konfiguration)
- Select the property on the left (main folder, e.g. Altgasse 13)
- Add virtual electricity tariffs (e.g. peak tariff, off-peak tariff, solar tariff)

In detail: [Define electrical tariffs](/konfiguration/billing-deutschland/stromtarife-definieren)

## Configuring the residential units

Now click on the various residential units of your property one after the other and specify them.

### Customer number

Here you define the customer number for this tenant.

Note:

The customer number is also automatically used as the name of the PDF document for easier external identification.

### Contract and term

Here you can add contractual provisions. An example (no guarantee of legal certainty) would be:

Your contract runs until DD.MM.YYYY and, in accordance with the provision in section X of your electricity supply contract, is extended by one year if it is not terminated in good time. You may terminate the electricity supply contract with three months' notice effective DD.MM.YYYY in accordance with section X of the electricity supply contract. Any special right of termination remains unaffected

![smart-me Billing for German Mieterstrom – Figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Congratulations, you've done it! When you now generate invoices in the smart-me Billing tool, you will receive an invoice document with all the necessary information as well as the visual representations.
