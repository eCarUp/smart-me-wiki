---
title: 'TVA RCP / charges accessoires'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'Dans cette section, nous abordons la question de la TVA dans le RCP.'
sidebar_label: 'TVA RCP / charges accessoires'
---
Dans cette section, nous abordons la question de la TVA dans le RCP (regroupement dans le cadre de la consommation propre). Décider si et comment la TVA doit être indiquée et également versée à l'État est relativement complexe. 

Dans cette section, nous souhaitons retracer les questions initiales et les décisions qui en découlent.

## Comment fonctionne la TVA ?

La taxe sur la valeur ajoutée est avant tout un impôt sur le chiffre d'affaires. 

Une entreprise assujettie à la TVA doit prélever un impôt sur son chiffre d'affaires (vente de produits et de prestations de services), l'encaisser, puis le reverser à l'État.

Les entreprises assujetties à la TVA ont toutefois en même temps droit à la déduction de l'impôt préalable sur les prestations achetées.

L'objectif est que la TVA sur un produit ne soit imposée qu'une seule fois au total, en fonction de sa valeur chez le consommateur final.

![TVA RCP / charges accessoires – figure 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01.png)

Détails de l'exemple

Si une entreprise A commande 100 kWh d'énergie pour 100 CHF nets auprès de son fournisseur, elle reçoit du fournisseur d'énergie assujetti à la TVA une facture pour les 100 kWh d'énergie (100CHF nets) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

L'entreprise A paie 108.10 CHF, le fournisseur d'énergie reverse les 8.10 CHF à l'État et conserve 100 CHF pour ses prestations.

Si l'entreprise A revendait maintenant cette énergie à un consommateur (ici sans bénéfice, pour une meilleure compréhension), l'entreprise A propose à son tour les 100kWh d'énergie au consommateur au prix de 100 CHF et prélève elle-même la TVA, puisque l'entreprise A est elle-même assujettie à la TVA. 

La facture au consommateur se présente donc comme suit :

100 kWh d'énergie (100CHF nets) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

Le consommateur paie les 108.10 CHF à l'entreprise A.

L'entreprise A reçoit 100 CHF pour l'énergie et reverse la TVA de 8.10 CHF à l'État.

Voici maintenant le point important :
Sur les montants de TVA à reverser, l'entreprise A peut maintenant faire valoir la déduction de l'impôt préalable avant de s'acquitter de sa dette.

Au titre de la déduction de l'impôt préalable, l'entreprise A peut déduire 8.10 CHF (payés auparavant au fournisseur d'énergie dans la facture d'énergie).
Comme aucune majoration n'a été appliquée au prix de l'énergie (pas de bénéfice), la dette issue des ventes correspond à 8.10 CHF - la déduction de l'impôt préalable = 0 CHF
L'entreprise A n'a donc rien à payer en plus ; pour l'entreprise A, 100 CHF ont été dépensés et 100 CHF encaissés.

L'État dispose depuis le début des 8.10 CHF pour l'énergie sur son compte, et le consommateur, qui dans ce cas n'est lui-même pas assujetti à la TVA et ne peut donc pas la déduire, ne peut pas récupérer les 8.10 CHF. Ainsi, seul le consommateur final paie la TVA du produit ou de la prestation de services.

Tous les intermédiaires peuvent chacun récupérer la TVA.

## Quand est-on assujetti à la TVA et pour quoi ? (état 01.2026)

Dans un RCP (regroupement dans le cadre de la consommation propre) / RCP virtuel (vRCP), on vend principalement un type de produit et une prestation de services.
Dans ce cas, le produit est l'énergie électrique et la prestation de services est le décompte de cette énergie.

Mais de plus en plus souvent, la chaleur / l'eau et les charges accessoires sont également facturées avec le RCP.
Il en résulte différentes configurations supplémentaires qui doivent être examinées du point de vue de la TVA.

Pour chaque énergie, il faut décider individuellement si elle est soumise à la TVA ou non.

### Le RCP est-il assujetti à la TVA pour l'énergie électrique et les prestations de services ?

![TVA RCP / charges accessoires – figure 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02.jpg)

Un assujettissement à la TVA peut en principe résulter des conditions suivantes :

1.  Chiffre d'affaires issu des ventes d'énergie et de prestations de services du RCP > 100'000 CHF / an --> assujettissement automatique

2.  Par un assujettissement volontaire du RCP à la TVA (option du RCP)


Dans les deux cas, cela doit être annoncé à l'administration fiscale et un numéro de TVA doit être obtenu pour le RCP.

Si l'un des deux cas s'applique, voici ce qui se passe pour le RCP :

Le RCP est assujetti à la TVA :

1.  Le RCP prélève la TVA sur toutes les ventes d'électricité (énergie du réseau, électricité solaire et électricité de batterie) et l'indique sur les factures.

2.  Le RCP a droit à la déduction de l'impôt préalable pour les achats et les prestations de services en lien avec l'énergie électrique.

3.  Le RCP doit verser la TVA à l'État après déduction de l'impôt préalable


Le RCP n'est pas assujetti à la TVA :

1.  Les prix de l'énergie sont facturés à des prix bruts, sans indication de TVA

2.  Les prestations de services et les frais accessoires liés à l'énergie sont facturés à des prix bruts, sans indication de TVA


### Existe-t-il un assujettissement à la TVA pour la chaleur / l'eau et les charges accessoires ?

Cette question ne peut être tranchée qu'en fonction du mode de vente de ces énergies et de la relation et du mandat en lien avec l'immeuble + des questions de chiffre d'affaires et d'option.

Cas 1 (détails ci-dessous) : les énergies sont-elles produites dans l'immeuble ou achetées par le bailleur, puis réparties ?
\--> chauffage central, chauffage à distance et répartition entre les habitants via les charges accessoires

Cas 2 (détails ci-dessous) : les énergies sont-elles produites et livrées directement par le RCP au locataire ?
\--> situation de fournisseur d'énergie, p. ex. chauffage à distance ?

Au vu de ces deux exemples, il est clair que les relations et les rapports sont différents et peuvent donc aboutir à des résultats différents.

Cas 1 :

![TVA RCP / charges accessoires – figure 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03.jpg)

Détails :

Les énergies sont produites dans l'immeuble par une pompe à chaleur avec accumulateur d'eau chaude, puis réparties dans les immeubles.
ou
Le cas de la PPE (propriété par étages), qui achète de l'énergie puis la répartit.

Comme les énergies ont été produites dans l'immeuble par des équipements appartenant au propriétaire de l'immeuble, la question se pose de savoir si le propriétaire de l'immeuble est assujetti à la TVA. (énergies et charges accessoires)

Le RCP (regroupement dans le cadre de la consommation propre) ou le prestataire de décompte facture ces énergies en tant que prestation de services au propriétaire de l'immeuble, sur mandat. Le RCP ou le prestataire de décompte doit prélever la TVA pour la prestation de décompte elle-même, s'il est assujetti à la TVA, mais pas pour les énergies et charges accessoires à répartir.

Le propriétaire de l'immeuble peut en principe être lui-même assujetti à la TVA pour les mêmes raisons :

1.  Chiffre d'affaires issu de prestations imposables  > 100'000 CHF / an --> assujettissement automatique
    Les prestations imposables sont p. ex. la location d'appartements de vacances ou de places de stationnement sans lien avec la location de logements.
    Les prestations de services fournies par soi-même sont également des prestations imposables.
    Les loyers normaux de logements ne sont pas eux-mêmes des prestations imposables.

2.  Par un assujettissement volontaire de l'immeuble à la TVA (option)


L'option la plus fréquente est l'assujettissement volontaire. Un assujettissement en raison du chiffre d'affaires est plutôt rare, car la location de surfaces purement résidentielles n'est pas une prestation imposable.

Option (option partielle) pour un immeuble

La décision d'opter pour l'imposition d'un immeuble appartient au propriétaire de l'immeuble. Cela peut être un choix judicieux pour la location de surfaces commerciales, car les entreprises peuvent alors déduire la TVA au titre de l'impôt préalable.

Si la décision d'opter est prise, l'ensemble de l'immeuble appartenant au même bailleur fait l'objet de l'option et est volontairement soumis à la TVA.

Il est important de le comprendre, car toutes les parties de l'immeuble appartenant à ce bailleur sont alors soumises à la TVA. La loi prévoit une exception pour les surfaces purement résidentielles, pour lesquelles il n'est pas possible d'opter.

Exemple :

Si le bâtiment de 4 unités (2x surface commerciale, 2x logement) appartient entièrement au propriétaire A et que celui-ci opte, il est pour ainsi dire en option partielle pour toutes les parties de l'immeuble qui ne sont pas des surfaces purement résidentielles.

1.  Surface commerciale 1 --> option

2.  Surface commerciale 2 --> option

3.  Logement 1 --> pas d'option, car les logements sont exclus de la TVA

4.  Logement 2 --> pas d'option, car les logements sont exclus de la TVA


Pour toutes les unités ayant fait l'objet de l'option, il faut désormais :

- Indiquer les montants facturés pour la chaleur / l'eau nets, TVA comprise.
    Il est important de noter ici que la TVA s'aligne sur le taux de TVA des loyers pour toutes les composantes.
    Même les charges soumises à un taux réduit (2.6% pour l'eau froide) doivent ensuite être imposées au taux normal de 8.1%.

- Indiquer les montants facturés pour les charges accessoires nets, TVA comprise.

- Indiquer le loyer net, TVA comprise ! (En cas d'option pour l'immeuble, le loyer est lui aussi soumis à la TVA)


Pour toutes les unités n'ayant pas fait l'objet de l'option (logements) :

- Montants facturés pour la chaleur / l'eau à des prix bruts, sans indication de TVA.

- Montants facturés pour les charges accessoires à des prix bruts, sans indication de TVA.


Outre l'assujettissement, le propriétaire de l'immeuble a désormais aussi droit à la déduction de l'impôt préalable pour toutes les prestations concernant les parties de l'immeuble ayant fait l'objet de l'option, mais pas pour celles qui n'en ont pas fait l'objet.

Si le RCP ou le prestataire de décompte intervient sur mandat en tant que prestataire pour la chaleur / l'eau et les charges accessoires, les points suivants sont importants :

- La facture au locataire doit indiquer clairement qu'elle a été établie au nom du bailleur.
    Si cela n'est pas clairement exprimé, l'expéditeur de la facture est considéré comme l'émetteur de la facture. Comme les factures de loyer et de charges accessoires ne proviendraient alors pas du même émetteur, le droit à l'exonération de la TVA pour la chaleur / l'eau et les charges accessoires est perdu, car elles ne sont plus considérées comme faisant partie du loyer !

    Un texte d'information : Facturation et envoi au nom de votre bailleur XXXXXXXXXX
    Si le bailleur est assujetti, avec indication du numéro de TVA du bailleur.


Cas 2 :

![TVA RCP / charges accessoires – figure 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04.jpg)

## Informations complémentaires et lois

[Principes de la taxe sur la valeur ajoutée - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Projet de pratique concernant la TVA dans le RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
