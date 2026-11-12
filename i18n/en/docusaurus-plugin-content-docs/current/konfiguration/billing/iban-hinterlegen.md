---
title: 'Add IBAN'
slug: '/konfiguration/billing/iban-hinterlegen'
description: 'Add account details for the QR bill: format of the billing address, message to the beneficiary and limitations regarding reference numbers.'
sidebar_label: 'Add IBAN'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---
<div className="row">
<div className="col col--7">

The QR bill can optionally be activated in smart-me Billing.

Once the account details have been added, a QR bill for payment is attached for each billing unit (tenant).

smart-me automatically recognises correctly completed senders if the billing address in Billing is entered on 3 lines. If a company or a form of address is used, it must be added before the name.

e.g.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

If no valid address is recognised, the sender field "Payable by" (Zahlbar durch) on the QR bill remains empty.

smart-me does not support reference numbers. To use them, you need a [third-party system](/drittsysteme) that also supports them (e.g. [Bexio](/drittsysteme/bexio)).

To identify the invoice without a reference, additional information ("Message to the beneficiary" (Mitteilung an den Begünstigten)) is added to the QR bill, made up as follows: name of the billing unit (folder name).

The layout is optimised for sending by email. If the invoices are printed, we recommend deactivating the QR bill and ordering it from your bank.

</div>
<div className="col col--5 bild--mitte">

![Energy Billing – Figure 7](/img/konfiguration-billing/07.jpg)

![Energy Billing – Figure 8](/img/konfiguration-billing/08.png)

</div>
</div>
