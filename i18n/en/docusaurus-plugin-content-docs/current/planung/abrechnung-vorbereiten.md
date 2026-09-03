---
title: 'Prepare Billing'
slug: '/planung/abrechnung-vorbereiten'
description: 'Billing of an association of self-consumption'
sidebar_label: 'Prepare Billing'
---
## Billing of an association of self-consumption

### Electricity billing with smart-me energy cost billing

This billing type supports unit tariff, double tariff or multiple tariffs with solar tariffs.

To bill an association of self-consumption for the part of electric energy you need:

- Professional status of the account and Smart-me Billing.

- Electricity prices from the electric company with tariffs.

- Not necessary: external tariff signal connected to all meters.




### Heat and Water billing with VEWA function (VEWA / DIFEE / CISE-Compliant)

In order to generate all energy costs and a VEWA-compliant heating ancillary costs statement in an association of self-consumption, you need:

- Professional status of the account and [Smart-me Billing with VEWA function.](/konfiguration/billing/vewa-abrechnung)

- Electricity prices from the electric company with tariffs

- Overview of costs related to the energies to be billed

- VEWA / DIFEE / CISE guide

- Optional: Real Estate Software for DTA-VHKA exports

- Optional: An initial energy cost statement from a heating ancillary costs service provider or the necessary information from your plumbing and heating planner.


## Billing for e-mobility in an association of self-consumption

![Prepare Billing – figure 1](/img/_en/planning-prepare-billing/01.png)

## VEWA and ZEV Guides

Guide to self-consumption by Energy Switzerland (general information, legal forms, costs) : German Link [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

VEWA Model for consumption-based energy and water cost billing: German Link [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Value added tax on energy and ancillary costs

General information on value added tax

The letting of properties and their ancillary costs are primarily not subject to VAT under Swiss law and are therefore exempt from VAT.

However, there is the option of opting for a property or individual premises to be voluntarily subject to VAT.

All long-term rentals including the associated car parks are exempt from tax.

However, the letting of individual parking spaces to persons outside the property is again subject to VAT automatically without the need of the opting option.

The same applies to holiday home rentals or hotel accommodation. The rules for entering ancillary costs after opting in apply.

### Non-optioned unit or property (not subject to VAT)

The non-optioned option of letting is standard. In this case, rent and ancillary costs are tax-free.

It is therefore not necessary to show VAT on the invoice for the respective items.

All items are stated exclusively in gross form or are shown with 0% VAT (costs including VAT) and listed on the invoice.

### Opting-in of the unit or property (voluntary submission to VAT)

When opting for VAT, the owner voluntarily subjects the premises or the entire property to VAT and is therefore liable for the expenses and income of this VAT.

This means that the rent as well as the ancillary costs and services in connection with this unit or property are subject to VAT.

The ancillary costs are recognised accordingly as net and are shown and charged with the respective VAT surcharges.

A tenant who is able to deduct VAT in advance can claim the deduction accordingly (business).

However, if the tenant has no or only limited deductibility, the rent is significantly higher than normal and can therefore become unattractive.

This applies in particular to medical practices, private or non-profit organisations.

The decision to opt-in should be made consciously at an early stage and cannot be cancelled at any time.

If you opt-in for this, you can claim input tax deductions for services and materials as input tax deductions as an owner.

### Extended information

[Principles of value added tax - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf)  

## Functionality of tariffs and reimbursement to investors

### Functionality of tariff identification and distribution to consumers

The identification of a tariff is primarily dependent on its stored measurement means and an optional time-dependent component (IF/THEN action).

- Grid tariffs are regarded as residual electricity quantities, which means that they are always applied to the electricity that could not be allocated to other tariffs through measurements.

- Solar and battery tariffs consider the purchases and deliveries from relevant measuring points such as PV meters and total consumption or the balance measurement + an optional time-based component.


### Determining the share of the electricity mix per 15 minutes

The electricity mix is always determined for 15 minutes and then applied equally to all consumers. 

Example:

- Battery supplies 20 kWh

- Solar system supplies 100 kWh

- The consumption in the entire property corresponds to 200 kWh


In this case, the percentage share of the total consumption of the individual suppliers is calculated using the following formula:

% share of the electricity mix = supplier supply / total consumption of the property

- Battery share = 20 kWh / 200 kWh = 10%

- Solar share = 100 kWh / 200kWh = 50%

- Residual electricity grid = 100% - battery share - solar share = 40%


### Applying the energy mix to billing units and their consumption

The above energy mix is now applied for the last 15 minutes for each individual billing unit. This means that everyone has the same entitlement to the energy mix regardless of how much energy they consume compared to other participants.

- Apartment A Total consumption: 20 kWh
    (2 kWh from battery, 10 kWh from solar, 8 kWh from grid)

- Apartment B Total consumption: 100 kWh
    (10 kWh from battery, 50 kWh from solar, 40 kWh from grid)


Note 1: The electricity mix reflects the reality and the actual prevailing electricity mix in the ZEV. If electricity is purchased, the consumption corresponds exactly to this mix.
Note 2: This application of the electricity mix allows large-scale consumers a higher availability of cheap solar and battery electricity in terms of quantity.
Note 3: The application of the electricity mix is not intended to take care of payments to investors or to distribute quotas to consumers. 

### Solar power price and remuneration to investors

Best practice for remunerating investors is to give them a share of the profit from the generated output and thus compensate them. The prerequisite for this is that the solar price is not offered internally at CHF 0, even if all investors have invested.

If the solar power and the battery power have a price, the bulk purchasers compensate the other investors for their debt via this price to be paid.

Example with 3 investors and 3 billing units:
The solar price is set at 17 Rp / kWh.

- Purchaser A (200 kWh solar purchase, investment 33%): 200 kWh \* 0.17 CHF / kWh = 34 CHF

- Purchaser B (20 kWh solar purchase, investment 33%): 20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Purchaser C (50 kWh solar purchase, investment 33%): 50 kWh \* 0.17 CHF / kWh = 8.5 CHF


A total of 45.9 CHF has now been generated from the sale of solar power.

Since all three are equally invested, 1/3, they are now all entitled to a third of this generated money.

0.33 \* 45.9 CHF = 15.14 CHF reimbursement for internally used solar power.

- Recipient A (investment 33%): 34 CHF invoice amount - 15.14 CHF reimbursement = 18.86 CHF paid for solar power

- Recipient B (investment 33%): 3.4 CHF invoice amount - 15.14 CHF reimbursement = -11.74 CHF profit from solar power, or Reduction on his total bill

- Customer C (investment 33%): 8.5 CHF invoice amount - 15.14 CHF reimbursement = -6.64 CHF profit from solar power, or reduction on his total bill


Note: The solar tariff should include the production price as well as returns. Example 80% rule. The money can flow into the renewal fund accordingly (tax benefits) or be reimbursed according to the investment costs.
