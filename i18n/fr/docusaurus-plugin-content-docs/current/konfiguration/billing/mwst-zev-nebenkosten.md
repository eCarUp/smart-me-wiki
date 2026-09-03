---
title: 'TVA RCP / charges accessoires'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'Dans cette section, nous abordons le thème de la TVA dans le RCP.'
sidebar_label: 'TVA RCP / charges accessoires'
---
Dans cette section, nous abordons le thème de la TVA dans le RCP (regroupement dans le cadre de la consommation propre). La décision de savoir si et comment la TVA doit être indiquée et également versée à l'État est relativement complexe.

Dans cette section, nous souhaitons retracer les questions initiales et les décisions qui en découlent.

## Comment fonctionne la TVA ?

La taxe sur la valeur ajoutée est en premier lieu un impôt sur le chiffre d'affaires.

Une entreprise assujettie à la TVA doit prélever un impôt sur son chiffre d'affaires (vente de produits et de prestations de services), l'encaisser et ensuite le reverser à l'État.

Mais les entreprises assujetties à la TVA ont en même temps droit à la déduction de l'impôt préalable sur les prestations achetées.

L'objectif est d'imposer la TVA sur un produit une seule fois au total, correspondant à sa valeur chez le consommateur final.

![TVA RCP / charges accessoires – illustration 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01.png)

Détails de l'exemple

Si donc une entreprise A commande de l'énergie de 100 kWh pour 100 CHF net auprès du fournisseur, elle reçoit du fournisseur d'électricité assujetti à la TVA une facture pour les 100 kWh d'énergie (100 CHF net) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

L'entreprise A paie 108.10 CHF, le fournisseur d'électricité verse les 8.10 CHF à l'État et conserve 100 CHF pour ses prestations.

Si l'entreprise A revendait maintenant cette énergie à un consommateur (ici sans bénéfice, pour une meilleure compréhension), l'entreprise A propose à nouveau au consommateur les 100 kWh d'énergie au prix de 100 CHF et prélève à nouveau elle-même la TVA, puisque l'entreprise A est elle-même assujettie à la TVA.

La facture au consommateur se présente donc comme suit :

100 kWh d'énergie (100 CHF net) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

Le consommateur paie les 108.10 CHF à l'entreprise A.

L'entreprise A reçoit 100 CHF pour l'énergie et verse la TVA de 8.10 CHF à l'État.

Voici maintenant le point important :
Sur les montants de TVA à reverser, l'entreprise A peut désormais faire valoir la déduction de l'impôt préalable avant de régler ses dettes.

Au titre de la déduction de l'impôt préalable, l'entreprise A peut déduire 8.10 CHF (payés auparavant au fournisseur d'électricité dans la facture d'énergie).
Comme il n'y a eu aucune majoration sur le prix de l'énergie (pas de bénéfice), la dette issue des ventes correspond à 8.10 CHF - la déduction de l'impôt préalable = 0 CHF
L'entreprise A ne doit donc rien payer en plus ; pour l'entreprise A, 100 CHF ont été dépensés et 100 CHF encaissés.

L'État a les 8.10 CHF sur son compte depuis le début pour l'énergie et le consommateur, dans ce cas lui-même non assujetti à la TVA et donc sans droit à déduction, ne peut pas réclamer le remboursement des 8.10 CHF. Ainsi, seul le consommateur final paie la TVA du produit ou de la prestation de services.

Tous les intermédiaires peuvent quant à eux récupérer la TVA.

## Quand est-on assujetti à la TVA et pour quoi ? (état 01.2026)

Dans un RCP / RCP virtuel (vRCP), c'est principalement une sorte de produit et une prestation de services qui sont vendus.
Dans ce cas, le produit est l'énergie électrique et la prestation de services est le décompte de cette énergie.

Mais de plus en plus souvent, la chaleur / l'eau et les charges accessoires sont également facturées conjointement avec le RCP.
Dans ce contexte, il existe différentes constellations supplémentaires qui doivent être examinées sous l'angle de la TVA.

Pour chaque énergie, il faut décider individuellement si un assujettissement à la TVA s'applique ou non.

### Le RCP est-il assujetti à la TVA pour l'énergie électrique et les prestations de services ?

![TVA RCP / charges accessoires – illustration 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02.jpg)

Un assujettissement à la TVA peut en principe résulter des conditions suivantes :

1.  Chiffre d'affaires provenant des ventes d'énergie et de prestations de services du RCP > 100'000 CHF / an --> assujettissement automatique

2.  Par un assujettissement volontaire du RCP à la TVA (option du RCP)


Dans les deux cas, cela doit être annoncé à l'administration fiscale et un numéro de TVA doit être obtenu pour le RCP.

Si l'un des deux cas s'applique, voici ce qui se passera concernant le RCP :

Le RCP est assujetti à la TVA :

1.  Le RCP prélève la TVA sur toutes les ventes d'électricité (énergie du réseau ainsi qu'électricité solaire et de batterie) et l'indique sur les factures.

2.  Le RCP a droit à la déduction de l'impôt préalable pour les achats et les prestations de services en lien avec l'énergie électrique.

3.  Le RCP doit s'acquitter de la TVA auprès de l'État après déduction de l'impôt préalable


Le RCP n'est pas assujetti à la TVA :

1.  Les prix de l'énergie sont facturés à des prix bruts sans information sur la TVA

2.  Les prestations de services et les frais accessoires liés à l'énergie sont facturés à des prix bruts sans information sur la TVA


### Existe-t-il un assujettissement à la TVA sur la chaleur / l'eau et les charges accessoires ?

Cette question ne peut être répondue qu'en fonction du mode de vente de ces énergies et du rapport et du mandat en lien avec l'immeuble + les questions relatives au chiffre d'affaires et à l'option.

Cas 1 (détails voir ci-dessous) : Les énergies sont-elles produites dans l'immeuble ou achetées par le bailleur puis réparties ?
\--> Chauffage central, chauffage à distance et répartition par les charges accessoires aux habitants

Cas 2 (détails voir ci-dessous) : Les énergies sont-elles produites et livrées directement par le RCP au locataire ?
\--> Situation de fournisseur d'énergie, p. ex. chauffage à distance ?

À la lumière de ces deux exemples, il apparaît clairement que les rapports et les références sont différents et peuvent donc aboutir à des résultats différents.

Cas 1 :

![TVA RCP / charges accessoires – illustration 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03.jpg)

Détails :

Les énergies sont produites dans l'immeuble par une pompe à chaleur avec accumulateur d'eau chaude puis réparties dans les immeubles.
ou
Le cas de la PPE qui achète de l'énergie puis la répartit.

Comme les énergies ont été produites dans l'immeuble par des installations appartenant au propriétaire de l'immeuble, la question se pose maintenant de savoir si le propriétaire de l'immeuble est assujetti à la TVA. (énergies et charges accessoires)

Le RCP ou le prestataire de décompte facture ces énergies en tant que prestation de services au propriétaire de l'immeuble dans le cadre du mandat. Le RCP ou le prestataire de décompte doit prélever la TVA pour la prestation de décompte elle-même, dans la mesure où il est assujetti à la TVA, mais pas pour les énergies et les charges accessoires à répartir.

Le propriétaire de l'immeuble peut en principe être lui-même assujetti à la TVA pour les mêmes raisons :

1.  Chiffre d'affaires provenant de prestations imposables > 100'000 CHF / an --> assujettissement automatique
    Les prestations imposables sont p. ex. la location d'appartements de vacances ou de places de parc sans lien avec des locations d'appartements.
    Les prestations de services fournies par soi-même sont également des prestations imposables.
    Les locations d'appartements normales ne sont pas des prestations imposables.

2.  Par un assujettissement volontaire de l'immeuble à la TVA (option)


L'option la plus fréquente est l'assujettissement volontaire. Un assujettissement résultant du chiffre d'affaires survient plutôt rarement, car la location de logements purs n'est pas une prestation imposable.

Opter (opter partiellement) pour un immeuble

L'option pour un immeuble doit être décidée par le propriétaire de l'immeuble. Cela peut être un choix judicieux pour la location de surfaces commerciales, car les entreprises peuvent alors faire valoir la TVA en déduction de l'impôt préalable.

Si la décision d'opter est prise, l'immeuble complet appartenant au même bailleur est soumis à l'option et volontairement assujetti à la TVA.

Il est important de le comprendre, car cela place désormais sous TVA toutes les parties de l'immeuble qui appartiennent à ce bailleur. Fait exception, de par la loi, le logement pur, pour lequel l'option n'est pas possible.

Exemple :

Si le bâtiment comportant 4 unités (2x surface commerciale, 2x logement) appartient entièrement au propriétaire A et que celui-ci opte, il est pour ainsi dire partiellement optant pour toutes les parties de l'immeuble qui ne sont pas du logement pur.

1.  Surface commerciale 1 --> option exercée

2.  Surface commerciale 2 --> option exercée

3.  Logement 1 --> pas d'option, car le logement est exclu de la TVA

4.  Logement 2 --> pas d'option, car le logement est exclu de la TVA


Pour toutes les unités pour lesquelles l'option a été exercée, ce qui suit doit maintenant se produire :

- Indiquer les montants de facture chaleur / eau nets, TVA comprise.
    Il est important de noter ici que la TVA s'aligne sur le taux de TVA des loyers pour tous les composants.
    Les charges avec un taux réduit (2.6% pour l'eau froide) doivent également être imposées ensuite au taux normal de 8.1%.

- Indiquer les montants de facture des charges accessoires nets, TVA comprise.

- Indiquer le loyer net, TVA comprise ! (Avec l'option pour l'immeuble, le loyer est lui aussi soumis à l'obligation de TVA)


Pour toutes les unités sans option (logements) :

- Montants de facture chaleur / eau à des prix bruts sans indication de la TVA.

- Montants de facture des charges accessoires à des prix bruts sans indication de la TVA.


Outre l'assujettissement, le propriétaire de l'immeuble a désormais aussi droit à la déduction de l'impôt préalable pour toutes les prestations concernant les parties de l'immeuble pour lesquelles l'option a été exercée, mais pas pour celles sans option.

Si le RCP ou le prestataire de décompte intervient dans le cadre d'un mandat comme prestataire de services pour la chaleur / l'eau et les charges accessoires, les points suivants sont importants :

- Sur la facture au locataire, il doit apparaître clairement que la facture a été établie en représentation du bailleur.
    Si cela n'est pas exprimé clairement, l'expéditeur de la facture est considéré comme l'émetteur de la facture. Comme les factures de loyer et de charges accessoires ne proviendraient alors pas du même émetteur, le droit à l'exonération de la TVA pour la chaleur / l'eau et les charges accessoires est perdu, car elles ne sont plus considérées comme faisant partie du loyer !

    Un texte indicatif : Facturation et envoi en représentation de votre bailleur XXXXXXXXXX
    Si le bailleur est assujetti, avec indication du numéro de TVA du bailleur.


Cas 2 :

![TVA RCP / charges accessoires – illustration 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04.jpg)

## Informations complémentaires et bases légales

[Principes de la taxe sur la valeur ajoutée - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Projet de pratique relatif à la TVA dans le RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
