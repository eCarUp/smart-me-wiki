---
title: 'Enter payment details (QR)'
slug: '/konfiguration/billing/zahlungsdaten-erfassen'
description: 'Enter the IBAN and account details for the QR-bill: structure of the billing address, message to the beneficiary and limitations regarding reference numbers.'
sidebar_label: 'Payment details (QR)'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---
<div className="row">
<div className="col col--7">

The QR-bill can optionally be activated in smart-me Billing.

Once the account details have been entered, a QR-bill for payment is attached for each billing unit (tenant).

smart-me automatically recognizes correctly filled-in senders if the billing address in Billing is entered on 3 lines. If a company or a form of address is used, it must be added before the name.

e.g.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

If no valid address is recognized, the sender field "Payable by" (Zahlbar durch) on the QR-bill remains empty.

smart-me does not support reference numbers. To use them, you need a [third-party system](/drittsysteme) that also supports them (e.g.[Bexio](/drittsysteme/bexio)).

To identify the bill without a reference, additional information (message to the beneficiary (Mitteilung an den Begünstigten)) is added to the QR-bill. It is made up as follows: name of the billing unit (folder name).

The layout is optimized for sending by email. If the bills are printed, we recommend deactivating the QR-bill and ordering it from your bank.

</div>
<div className="col col--5 bild--mitte">

![Energy Billing – Figure 7](/img/konfiguration-billing/07.jpg)

![Energy Billing – Figure 8](/img/konfiguration-billing/08.png)

</div>
</div>
