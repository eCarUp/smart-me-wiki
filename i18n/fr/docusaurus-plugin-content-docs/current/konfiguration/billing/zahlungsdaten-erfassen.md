---
title: 'Saisir les données de paiement (QR)'
slug: '/konfiguration/billing/zahlungsdaten-erfassen'
description: 'Saisir l''IBAN et les coordonnées bancaires pour la facture QR : structure de l''adresse de facturation, communication au bénéficiaire et limites concernant les numéros de référence.'
sidebar_label: 'Données de paiement (QR)'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---

<Menueweg>Facturation → Immeubles & tarifs</Menueweg>

<div className="row">
<div className="col col--7">

Dans smart-me Billing, la facture QR peut être activée en option.

Une fois les coordonnées bancaires enregistrées, une facture QR pour le paiement est jointe pour chaque unité de décompte (locataire).

smart-me reconnaît automatiquement les expéditeurs correctement saisis si l'adresse de facturation est enregistrée sur 3 lignes dans Billing. Si une entreprise ou une formule d'adresse est indiquée, elle doit être ajoutée avant le nom.

p. ex.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Si aucune adresse correcte n'est reconnue, le champ Expéditeur (Zahlbar durch) reste vide sur la facture QR.

smart-me ne prend pas en charge les numéros de référence. Pour pouvoir les utiliser, il faut un [système tiers](/drittsysteme) qui les prend également en charge (p. ex.[Bexio](/drittsysteme/bexio)).

Afin d'identifier la facture sans référence, une information supplémentaire (Mitteilung an den Begünstigten) est ajoutée sur la facture QR. Elle se compose comme suit : nom de l'unité de décompte (nom du dossier).

La présentation est optimisée pour l'envoi par e-mail. Si les factures sont imprimées, nous recommandons de désactiver la facture QR et de la commander auprès de la banque.

</div>
<div className="col col--5 bild--mitte">

![Billing : décompte de l'énergie – figure 7](/img/konfiguration-billing/07.jpg)

![Billing : décompte de l'énergie – figure 8](/img/konfiguration-billing/08.png)

</div>
</div>
