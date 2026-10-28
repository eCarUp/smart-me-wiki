---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'You need a smart-me Professional subscription to create energy cost invoices.'
sidebar_label: 'Bexio'
---
### Prerequisite

You need a smart-me Professional subscription to create energy cost invoices. 

smart-me Billing can import invoices into Bexio automatically. Bexio is business software. More information: [https://www.bexio.com/](https://www.bexio.com/)

Features

- Customer management in Bexio: smart-me Billing takes over the customer master data from Bexio
- Invoice export: The energy cost invoices can be created, sent and managed in Bexio. 
- Automatic payment reconciliation / automatic dunning


![Bexio – Figure 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Activate Bexio

1.  Open smart-me Billing
2.  Select "Configuration" ("Konfiguration") and the property
3.  Under "Export to third-party provider" ("Export zu Drittanbieter"), select Bexio
4.  Click Login and log in to Bexio
5.  Click Save ("speichern")
6.  Wait until Login ok (green) appears (this can take 1-2 minutes)

- Invoice title (Rechnungstitel): The title of the invoice in Bexio
- Invoice language (Sprache der Rechnung): The language Bexio should use for the invoice.
- Account for Bexio postings (Konto für Bexio-Buchungen): The Bexio account to which the line items should be assigned.


![Bexio – Figure 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Assign tenants

<div className="row">
<div className="col col--4">

1.  Select "Configuration" ("Konfiguration") and an apartment
2.  Under billing address (Rechnungsadresse), click "Add" ("Hinzufügen")
3.  Select the contact from Bexio

</div>
<div className="col col--8 bild--mitte">

![Bexio – Figure 3](/img/drittsysteme-bexio/03.jpg)

</div>
</div>

### 3\. Export invoices to Bexio

<div className="row">
<div className="col col--4">

Create the invoices for a property

\-> The invoices are automatically exported to Bexio.

smart-me Billing takes over the invoice number from Bexio (example: RE-1570 is the invoice with number 1570 in smart-me)

</div>
<div className="col col--8 bild--mitte">

![Bexio – Figure 4](/img/drittsysteme-bexio/04.jpg)

</div>
</div>

### 4\. Invoices in Bexio

The invoices have now been created in Bexio and can be processed further.

1.  Log in to Bexio
2.  Open the invoices

![Bexio – Figure 5](/img/drittsysteme-bexio/05.jpg)

Example of an exported electricity invoice

![Bexio – Figure 6](/img/drittsysteme-bexio/06.jpg)

Example of an exported VEWA invoice

![Bexio – Figure 7](/img/drittsysteme-bexio/07.png)

### 5\. Config

<div className="row">
<div className="col col--5">

Under Settings >> All settings >> Accounting (Einstellungen >> Alle Einstellungen >> Buchhaltung)

Check whether the Tax rates (Steuersätze) tile is visible.

</div>
<div className="col col--7 bild--mitte">

![Bexio – Figure 8](/img/drittsysteme-bexio/08.png)

</div>
</div>

<div className="row">
<div className="col col--5">

smart-me settings

Tax rates 0%

Included.

</div>
<div className="col col--7 bild--mitte">

![Bexio – Figure 9](/img/drittsysteme-bexio/09.png)

</div>
</div>

### 5\. Troubleshooting

account\_id \[Diese Eingabe ist nicht korrekt.\]
The account for Bexio postings is invalid. You must use a Bexio account to which invoices can also be posted. 

tax\_id \[Diese Eingabe ist nicht korrekt.\]
No valid tax rate was found for an invoice line item.
\- Check whether all tax rates used (0%, 8.1%, 2.6%,...) exist in Bexio and are valid
\- Make sure that all relevant VAT rates are assigned to Form 303.
If not, create additional ones for each tax.
\--> Settings overview --> Accounting --> Tax rates --> Edit VAT (Übersicht Einstellungen --> Buchhaltung --> Steuersätze --> Mehrwertsteuer bearbeiten)

No Bexio address found for user (Keine Bexio adresse für Benutzer gefunden)
No Bexio user, or an invalid one, has been assigned to the tenant. Please assign a user to the tenant (see above: 2. Assign tenants)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



**Solution 1:**

In smart-me, a tax is already included in the settings, e.g. 8.1%. 

In Bexio, nothing is set up under Settings (top right) / All settings / Accounting / VAT basic settings (Einstellungen / Alle Einstellungen / Buchhaltung / Grundeinstellung MWST).

Option: enter 0% in smart-me.

**Solution 2:**

In smart-me, select 3400 for the export (account for Bexio posting).

Private individuals can create an account 3680 Other revenue (Sonstige Erlöse)

![Bexio – Figure 10](/img/drittsysteme-bexio/10.png)

No tax in bexio found for 0%

Add VAT.



## Contact

<Kacheln min="20rem">
<Kachel bild="/img/drittsysteme-bexio/11.png" titel="Bexio AG">

Alte Jonastrasse 24, CH-8640 Rapperswil

+41 71 552 00 60 · [support@bexio.com](mailto:support@bexio.com) · [www.bexio.com](https://www.bexio.com)

</Kachel>
</Kacheln>
