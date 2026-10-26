---
title: 'Saisir les données de paiement (QR)'
slug: '/konfiguration/billing/zahlungsdaten-erfassen'
description: 'Saisir l''IBAN et les données du compte pour la QR-facture : structure de l''adresse de facturation, communication au bénéficiaire et limites concernant les numéros de référence.'
sidebar_label: 'Données de paiement (QR)'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---

<Menueweg>Facturation → Immeubles & tarifs</Menueweg>

<div className="row">
<div className="col col--7">

Dans smart-me Billing, la QR-facture peut être activée en option.

Une fois les données du compte enregistrées, une QR-facture destinée au paiement est jointe pour chaque unité de décompte (locataire).

smart-me reconnaît automatiquement les expéditeurs correctement renseignés lorsque l'adresse de facturation est saisie sur 3 lignes dans Billing. Si une entreprise ou une formule d'appel est indiquée, elle doit être ajoutée devant le nom.

p. ex.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Si aucune adresse correcte n'est reconnue, le champ Expéditeur (Payable par) (Absender (Zahlbar durch)) reste vide sur la QR-facture.

smart-me ne prend pas en charge les numéros de référence. Pour pouvoir les utiliser, un [système tiers](/drittsysteme) qui les prend également en charge est nécessaire (p. ex. [Bexio](/drittsysteme/bexio)).

Afin d'identifier la facture sans référence, une information supplémentaire (communication au bénéficiaire) est ajoutée sur la QR-facture. Elle se compose comme suit : nom de l'unité de décompte (nom du dossier).

La présentation est optimisée pour l'envoi par e-mail. Si les factures sont imprimées, nous recommandons de désactiver la QR-facture et de la commander auprès de la banque.

</div>
<div className="col col--5 bild--mitte">

![Billing : décompte de l'énergie – illustration 7](/img/konfiguration-billing/07.jpg)

![Billing : décompte de l'énergie – illustration 8](/img/konfiguration-billing/08.png)

</div>
</div>
