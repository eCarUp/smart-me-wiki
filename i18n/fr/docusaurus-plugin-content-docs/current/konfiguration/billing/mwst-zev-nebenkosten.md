---
title: 'TVA RCP / charges accessoires'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'Dans cette section, nous examinons la question de la TVA dans le RCP.'
sidebar_label: 'TVA RCP / charges accessoires'
---
Dans cette section, nous examinons la question de la TVA dans le RCP (regroupement dans le cadre de la consommation propre). Déterminer si et comment la TVA doit être indiquée et également reversée à l'État est une décision relativement complexe. 

Dans cette section, nous souhaitons retracer les questions initiales et les décisions qui en découlent.

## Comment fonctionne la TVA ?

La taxe sur la valeur ajoutée est avant tout un impôt sur le chiffre d'affaires. 

Une entreprise assujettie à la TVA doit prélever un impôt sur son chiffre d'affaires (vente de produits et de prestations de services), l'encaisser, puis le reverser à l'État.

Les entreprises assujetties à la TVA ont toutefois en même temps le droit de déduire l'impôt préalable sur les prestations achetées.

L'objectif est que la TVA sur un produit ne soit imposée qu'une seule fois au total, en fonction de sa valeur pour le consommateur final.

![TVA RCP / charges accessoires – Figure 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01_FR.png)

Détails de l'exemple

Si une entreprise A commande 100 kWh d'énergie pour 100 CHF nets auprès de son fournisseur, elle reçoit du fournisseur d'énergie assujetti à la TVA une facture de 108.10 CHF pour les 100 kWh d'énergie (100 CHF nets) + la TVA (8.1%, 8.10 CHF).

L'entreprise A paie 108.10 CHF, le fournisseur d'énergie reverse les 8.10 CHF à l'État et conserve 100 CHF pour ses prestations.

Si l'entreprise A revendait ensuite cette énergie à un consommateur (ici sans bénéfice, pour une meilleure compréhension), elle proposerait à son tour au consommateur les 100 kWh d'énergie au prix de 100 CHF et prélèverait elle-même la TVA, puisque l'entreprise A est elle-même assujettie à la TVA. 

La facture adressée au consommateur se présente donc comme suit :

100 kWh d'énergie (100 CHF nets) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

Le consommateur paie les 108.10 CHF à l'entreprise A.

L'entreprise A reçoit 100 CHF pour l'énergie et reverse la TVA de 8.10 CHF à l'État.

Voici maintenant le point important :
Sur les montants de TVA à reverser, l'entreprise A peut faire valoir la déduction de l'impôt préalable avant de s'acquitter de sa dette.

Au titre de la déduction de l'impôt préalable, l'entreprise A peut déduire 8.10 CHF (payés auparavant au fournisseur d'énergie dans la facture d'énergie).
Comme aucune majoration n'a été appliquée au prix de l'énergie (pas de bénéfice), la dette issue des ventes correspond à 8.10 CHF - la déduction de l'impôt préalable = 0 CHF
L'entreprise A n'a donc rien à payer en sus ; pour l'entreprise A, 100 CHF ont été dépensés et 100 CHF encaissés.

L'État dispose des 8.10 CHF pour l'énergie sur son compte depuis le début, et le consommateur, qui dans ce cas n'est pas lui-même assujetti à la TVA et ne peut donc pas la déduire, ne peut pas récupérer les 8.10 CHF. Ainsi, seul le consommateur final paie la TVA sur le produit ou la prestation de services.

Tous les intermédiaires peuvent récupérer la TVA.

## Quand est-on assujetti à la TVA et pour quoi ? (état 01.2026)

Dans un RCP (regroupement dans le cadre de la consommation propre) / RCP virtuel (vRCP), on vend principalement un type de produit et une prestation de services.
Dans ce cas, le produit est l'énergie électrique et la prestation de services est le décompte de cette énergie.

Mais de plus en plus souvent, la chaleur / l'eau et les charges accessoires sont également facturées en même temps que le RCP.
Il en résulte différentes constellations supplémentaires qui doivent être examinées sous l'angle de la TVA.

Pour chaque énergie, il faut décider individuellement si elle est soumise ou non à la TVA.

### Le RCP est-il assujetti à la TVA pour l'énergie électrique et les prestations de services ?

![TVA RCP / charges accessoires – Figure 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02_FR.png)

L'assujettissement à la TVA peut en principe résulter des conditions suivantes :

1.  Chiffre d'affaires issu des ventes d'énergie et de prestations de services du RCP > 100'000 CHF / an --> assujettissement automatique

2.  Par un assujettissement volontaire du RCP à la TVA (option du RCP)


Dans les deux cas, cela doit être annoncé à l'administration fiscale et un numéro de TVA doit être obtenu pour le RCP.

Si l'un des deux cas s'applique, voici ce qui se passe pour le RCP :

Le RCP est assujetti à la TVA :

1.  Le RCP prélève la TVA sur toutes les ventes d'électricité (énergie du réseau, électricité solaire et électricité de batterie) et l'indique sur les factures.

2.  Le RCP a droit à la déduction de l'impôt préalable sur les achats et les prestations de services liés à l'énergie électrique.

3.  Le RCP doit s'acquitter de la TVA envers l'État après déduction de l'impôt préalable


Le RCP n'est pas assujetti à la TVA :

1.  Les prix de l'énergie sont facturés à des prix bruts, sans information sur la TVA

2.  Les prestations de services et les frais accessoires liés à l'énergie sont facturés à des prix bruts, sans information sur la TVA


### Existe-t-il un assujettissement à la TVA pour la chaleur / l'eau et les charges accessoires ?

On ne peut répondre à cette question qu'en fonction du mode de vente de ces énergies, de la relation et du mandat en rapport avec l'immeuble, ainsi que des questions de chiffre d'affaires et d'option.

Cas 1 (détails ci-dessous) : les énergies sont-elles produites dans l'immeuble ou achetées par le bailleur, puis réparties ?
\--> chauffage central, chauffage à distance et répartition aux habitants via les charges accessoires

Cas 2 (détails ci-dessous) : les énergies sont-elles produites et livrées directement par le RCP au locataire ?
\--> situation de fournisseur d'énergie, p. ex. chauffage à distance ?

Au vu de ces deux exemples, il apparaît clairement que les relations et les rapports sont différents et peuvent donc aboutir à des résultats différents.

Cas 1 :

![TVA RCP / charges accessoires – Figure 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03_FR.png)

Détails :

Les énergies sont produites dans l'immeuble par une pompe à chaleur avec accumulateur d'eau chaude, puis réparties dans les immeubles.
ou
Le cas de la PPE, qui achète de l'énergie puis la répartit.

Comme les énergies ont été produites dans l'immeuble par des installations appartenant au propriétaire de l'immeuble, la question se pose de savoir si le propriétaire de l'immeuble est assujetti à la TVA. (énergies et charges accessoires)

Le RCP ou le prestataire de décompte décompte ces énergies en tant que prestation de services envers le propriétaire de l'immeuble, dans le cadre d'un mandat. Le RCP ou le prestataire de décompte doit prélever la TVA sur la prestation de décompte elle-même, s'il est assujetti à la TVA, mais pas sur les énergies et charges accessoires à répartir.

Le propriétaire de l'immeuble peut en principe être lui-même assujetti à la TVA pour les mêmes raisons :

1.  Chiffre d'affaires issu de prestations imposables > 100'000 CHF / an --> assujettissement automatique
    Les prestations imposables sont p. ex. la location d'appartements de vacances ou de places de stationnement sans lien avec la location de logements.
    Les prestations de services fournies par soi-même sont également des prestations imposables.
    Les loyers de logements normaux ne sont en eux-mêmes pas des prestations imposables.

2.  Par un assujettissement volontaire de l'immeuble à la TVA (option)


L'option la plus fréquente est l'assujettissement volontaire. Un assujettissement en raison du chiffre d'affaires est plutôt rare, car la location de surfaces purement résidentielles n'est pas une prestation imposable.

Option (option partielle) pour un immeuble

La décision d'opter pour l'imposition d'un immeuble appartient au propriétaire de l'immeuble. Cela peut être un choix judicieux pour la location de surfaces commerciales, car les entreprises peuvent alors déduire la TVA au titre de l'impôt préalable.

Si la décision d'opter est prise, l'ensemble de l'immeuble appartenant au même bailleur est soumis à l'option et volontairement assujetti à la TVA.

Il est important de le comprendre, car toutes les parties de l'immeuble appartenant à ce bailleur sont alors soumises à la TVA. La loi prévoit une exception pour les surfaces purement résidentielles, qui ne peuvent pas faire l'objet d'une option.

Exemple :

Si le bâtiment de 4 unités (2x surface commerciale, 2x surface résidentielle) appartient entièrement au propriétaire A et que celui-ci opte, il opte en quelque sorte partiellement pour toutes les parties de l'immeuble qui ne sont pas des surfaces purement résidentielles.

1.  Surface commerciale 1 --> optée

2.  Surface commerciale 2 --> optée

3.  Surface résidentielle 1 --> non optée, car les surfaces résidentielles sont exclues de la TVA

4.  Surface résidentielle 2 --> non optée, car les surfaces résidentielles sont exclues de la TVA


Pour toutes les unités optées, il faut désormais :

- Indiquer les montants facturés pour la chaleur / l'eau nets, TVA comprise.
    Il est important de noter ici que la TVA s'aligne sur le taux de TVA des loyers pour toutes les composantes.
    Même les dépenses à taux réduit (2.6% pour l'eau froide) doivent ensuite être imposées au taux normal de 8.1%.

- Indiquer les montants facturés pour les charges accessoires nets, TVA comprise.

- Indiquer le loyer net, TVA comprise ! (Avec l'option de l'immeuble, le loyer est lui aussi soumis à la TVA)


Pour toutes les unités non optées (surfaces résidentielles) :

- Montants facturés pour la chaleur / l'eau à des prix bruts, sans indication de la TVA.

- Montants facturés pour les charges accessoires à des prix bruts, sans indication de la TVA.


Outre l'assujettissement, le propriétaire de l'immeuble a désormais aussi droit à la déduction de l'impôt préalable pour toutes les prestations qui concernent les parties optées de l'immeuble, mais pas pour celles qui ne sont pas optées.

Si le RCP ou le prestataire de décompte intervient dans le cadre d'un mandat en tant que prestataire de services pour la chaleur / l'eau et les charges accessoires, il est important de noter ce qui suit :

- La facture adressée au locataire doit indiquer clairement qu'elle a été établie au nom du bailleur.
    Si cela n'est pas clairement exprimé, l'expéditeur de la facture est considéré comme l'émetteur de la facture. Comme les factures de loyer et de charges accessoires ne proviendraient alors pas du même émetteur, le droit à l'exonération de la TVA pour la chaleur / l'eau et les charges accessoires s'éteint, car celles-ci ne sont plus considérées comme faisant partie du loyer !

    Un texte d'information : Facturation et envoi au nom de votre bailleur XXXXXXXXXX
    Si le bailleur est assujetti, avec indication du numéro de TVA du bailleur.


Cas 2 :

![TVA RCP / charges accessoires – Figure 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04_FR.png)

## Informations complémentaires et lois

[Principes de la taxe sur la valeur ajoutée - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Projet de pratique concernant la TVA dans le RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
