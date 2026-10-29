---
title: 'TVA RCP / charges accessoires'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'Dans cette section, nous examinons la question de la TVA dans le RCP.'
sidebar_label: 'TVA RCP / charges accessoires'
---
Dans cette section, nous examinons la question de la TVA dans le RCP (regroupement dans le cadre de la consommation propre). Déterminer si et comment la TVA doit être indiquée et reversée à l'État est relativement complexe. 

Dans cette section, nous retraçons les questions initiales et les décisions qui en découlent.

## Comment fonctionne la TVA ?

La taxe sur la valeur ajoutée est avant tout un impôt sur le chiffre d'affaires. 

Une entreprise assujettie à la TVA doit prélever un impôt sur son chiffre d'affaires (vente de produits et de services), l'encaisser, puis le reverser à l'État.

Les entreprises assujetties à la TVA ont toutefois en même temps le droit de déduire l'impôt préalable sur les prestations achetées.

L'objectif est que la TVA sur un produit ne soit prélevée qu'une seule fois, globalement, en fonction de sa valeur auprès du consommateur final.

<div className="bild--voll">

![TVA RCP / charges accessoires – Illustration 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01.png)

</div>

Détails de l'exemple

Si une entreprise A commande auprès de son fournisseur 100 kWh d'énergie pour 100 CHF nets, elle reçoit du fournisseur d'énergie assujetti à la TVA une facture de 108.10 CHF pour les 100 kWh d'énergie (100 CHF nets) + la TVA (8.1%, 8.10 CHF).

L'entreprise A paie 108.10 CHF, le fournisseur d'énergie reverse les 8.10 CHF à l'État et conserve 100 CHF pour ses prestations.

Si l'entreprise A revendait cette énergie à un consommateur (ici sans bénéfice, pour une meilleure compréhension), elle proposerait à son tour au consommateur les 100 kWh d'énergie au prix de 100 CHF et prélèverait elle-même la TVA, puisqu'elle est elle-même assujettie à la TVA. 

La facture au consommateur se présente donc comme suit :

100 kWh d'énergie (100 CHF nets) + la TVA (8.1%, 8.10 CHF), soit 108.10 CHF.

Le consommateur paie les 108.10 CHF à l'entreprise A.

L'entreprise A reçoit 100 CHF pour l'énergie et reverse la TVA de 8.10 CHF à l'État.

Voici maintenant le point important :
Sur les montants de TVA à reverser, l'entreprise A peut faire valoir la déduction de l'impôt préalable avant de s'acquitter de sa dette.

Au titre de la déduction de l'impôt préalable, l'entreprise A peut déduire 8.10 CHF (payés auparavant au fournisseur d'énergie dans la facture d'énergie).
Comme il n'y a pas eu de majoration du prix de l'énergie (pas de bénéfice), la dette résultant des ventes correspond à 8.10 CHF - la déduction de l'impôt préalable = 0 CHF
L'entreprise A n'a donc rien à payer en plus ; pour l'entreprise A, 100 CHF ont été dépensés et 100 CHF encaissés.

L'État dispose depuis le début des 8.10 CHF pour l'énergie, et le consommateur, qui dans ce cas n'est pas lui-même assujetti à la TVA et ne peut donc pas la déduire, ne peut pas récupérer les 8.10 CHF. Ainsi, seul le consommateur final paie la TVA du produit ou du service.

Tous les intermédiaires peuvent chacun récupérer la TVA.

## Quand est-on assujetti à la TVA et pour quoi ? (état 01.2026)

Dans un RCP (regroupement dans le cadre de la consommation propre) / RCP virtuel (vRCP), on vend principalement un type de produit et un service.
Dans ce cas, le produit est l'énergie électrique et le service est le décompte de cette énergie.

De plus en plus souvent, la chaleur / l'eau et les charges accessoires sont toutefois facturées en même temps que le RCP.
Il en résulte différentes constellations supplémentaires qui doivent être examinées du point de vue de la TVA.

Pour chaque énergie, il faut décider individuellement si elle est soumise ou non à la TVA.

### Le RCP est-il assujetti à la TVA pour l'énergie électrique et les services ?

<div className="bild--voll">

![TVA RCP / charges accessoires – Illustration 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02.png)

</div>

Un assujettissement à la TVA peut en principe découler des conditions suivantes :

1.  Chiffre d'affaires provenant des ventes d'énergie et de services du RCP > 100'000 CHF / an --> assujettissement automatique

2.  Assujettissement volontaire du RCP à la TVA (option du RCP)


Dans les deux cas, cela doit être annoncé à l'administration fiscale et un numéro de TVA doit être obtenu pour le RCP.

Si l'un des deux cas s'applique, voici ce qui se passe en ce qui concerne le RCP :

Le RCP est assujetti à la TVA :

1.  Le RCP prélève la TVA sur toutes les ventes d'électricité (énergie du réseau, électricité solaire et électricité de la batterie) et l'indique sur les factures.

2.  Le RCP a droit à la déduction de l'impôt préalable pour les achats et les services en lien avec l'énergie électrique.

3.  Le RCP doit s'acquitter de la TVA envers l'État après déduction de l'impôt préalable


Le RCP n'est pas assujetti à la TVA :

1.  Les prix de l'énergie sont facturés à des prix bruts, sans information sur la TVA

2.  Les services et les charges accessoires liées à l'énergie sont facturés à des prix bruts, sans information sur la TVA


### La chaleur / l'eau et les charges accessoires sont-elles soumises à la TVA ?

Cette question ne peut trouver de réponse qu'en fonction du mode de vente de ces énergies et de la relation et du mandat en lien avec l'immeuble + les questions relatives au chiffre d'affaires et à l'option.

Cas 1 (détails ci-dessous) : les énergies sont-elles produites dans l'immeuble ou achetées par le bailleur, puis réparties ?
\--> Chauffage central, chauffage à distance et répartition entre les occupants par le biais des charges accessoires

Cas 2 (détails ci-dessous) : les énergies sont-elles produites et livrées directement par le RCP au locataire ?
\--> Situation de fournisseur d'énergie, p. ex. chauffage à distance ?

Au vu de ces deux exemples, il apparaît clairement que les relations et les liens sont différents et peuvent donc aboutir à des résultats différents.

Cas 1 :

<div className="bild--voll">

![TVA RCP / charges accessoires – Illustration 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03.png)

</div>


Détails :

Les énergies sont produites dans l'immeuble par une pompe à chaleur avec accumulateur d'eau chaude, puis réparties dans les immeubles.
ou
Le cas de la PPE (propriété par étages), qui achète de l'énergie puis la répartit.

Comme les énergies ont été produites dans l'immeuble par des installations appartenant au propriétaire de l'immeuble, la question se pose de savoir si le propriétaire de l'immeuble est assujetti à la TVA. (énergies et charges accessoires)

Le RCP ou le prestataire de décompte établit le décompte de ces énergies en tant que service rendu au propriétaire de l'immeuble, dans le cadre d'un mandat. Le RCP ou le prestataire de décompte doit prélever la TVA sur la prestation de décompte elle-même, s'il est assujetti à la TVA, mais pas sur les énergies et charges accessoires à répartir.

Le propriétaire de l'immeuble peut en principe être lui-même assujetti à la TVA pour les mêmes raisons :

1.  Chiffre d'affaires provenant de prestations imposables > 100'000 CHF / an --> assujettissement automatique
    Les prestations imposables sont p. ex. la location d'appartements de vacances ou de places de parc sans lien avec la location d'appartements.
    Les services fournis par soi-même sont également des prestations imposables.
    Les loyers d'appartements ordinaires ne sont eux-mêmes pas des prestations imposables.

2.  Assujettissement volontaire de l'immeuble à la TVA (option)


L'option la plus fréquente est l'assujettissement volontaire. Un assujettissement en raison du chiffre d'affaires est plutôt rare, car la location de locaux exclusivement d'habitation n'est pas une prestation imposable.

Option (option partielle) pour un immeuble

La décision d'opter pour l'imposition d'un immeuble appartient au propriétaire de l'immeuble. Cela peut être un choix judicieux pour la location de surfaces commerciales, car les entreprises peuvent alors déduire la TVA au titre de l'impôt préalable.

Si la décision d'opter est prise, l'immeuble entier appartenant au même bailleur est soumis à l'option et volontairement assujetti à la TVA.

Il est important de le comprendre, car cela soumet désormais à la TVA toutes les parties de l'immeuble qui appartiennent à ce bailleur. La loi prévoit une exception pour les locaux exclusivement d'habitation, pour lesquels il n'est pas possible d'opter.

Exemple :

Si le bâtiment de 4 unités (2x surface commerciale, 2x habitation) appartient entièrement au propriétaire A et que celui-ci opte, il a pour ainsi dire opté partiellement pour toutes les parties de l'immeuble qui ne sont pas exclusivement des locaux d'habitation.

1.  Surface commerciale 1 --> optée

2.  Surface commerciale 2 --> optée

3.  Habitation 1 --> non optée, car l'habitation est exclue de la TVA

4.  Habitation 2 --> non optée, car l'habitation est exclue de la TVA


Pour toutes les unités optées, il faut désormais :

- Indiquer les montants facturés pour la chaleur / l'eau nets, TVA comprise.
    Il est important de noter ici que la TVA s'aligne, pour tous les composants, sur le taux de TVA applicable aux loyers.
    Même les charges soumises au taux réduit (2.6% pour l'eau froide) doivent ensuite être imposées au taux normal de 8.1%.

- Indiquer les montants facturés pour les charges accessoires nets, TVA comprise.

- Indiquer le loyer net, TVA comprise ! (Lorsque l'on opte pour l'immeuble, le loyer est lui aussi soumis à la TVA)


Pour toutes les unités non optées (habitations) :

- Montants facturés pour la chaleur / l'eau à des prix bruts, sans indication de la TVA.

- Montants facturés pour les charges accessoires à des prix bruts, sans indication de la TVA.


Outre l'assujettissement, le propriétaire de l'immeuble a désormais aussi droit à la déduction de l'impôt préalable pour toutes les prestations concernant les parties optées de l'immeuble, mais pas pour celles qui ne le sont pas.

Si le RCP ou le prestataire de décompte intervient dans le cadre d'un mandat en tant que prestataire pour la chaleur / l'eau et les charges accessoires, les points suivants sont importants :

- La facture adressée au locataire doit indiquer clairement qu'elle a été établie au nom du bailleur.
    Si cela n'est pas clairement exprimé, l'expéditeur de la facture est considéré comme l'émetteur de la facture. Comme les factures de loyer et de charges accessoires ne proviendraient alors pas du même émetteur, le droit à l'exonération de la TVA pour la chaleur / l'eau et les charges accessoires est perdu, car elles ne sont plus considérées comme faisant partie du loyer !

    Un texte d'information : Facturation et envoi au nom de votre bailleur XXXXXXXXXX
    Si le bailleur est assujetti, avec indication du numéro de TVA du bailleur.


Cas 2 :

<div className="bild--voll">

![TVA RCP / charges accessoires – Illustration 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04.png)

</div>

## Informations complémentaires et lois

[Principes de la taxe sur la valeur ajoutée - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Projet de pratique sur la TVA dans le RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
