---
title: 'Différences entre smart-me Billing et le fournisseur d''énergie'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'Cette section décrit une méthode uniforme pour vérifier s''il existe une différence entre la facture du fournisseur d''énergie et smart-me Billing.'
sidebar_label: 'Différences avec le fournisseur d''électricité'
---
Cette section décrit une méthode uniforme pour vérifier s'il existe une différence entre la facture du fournisseur d'énergie et smart-me Billing. 

## Méthode

Il existe deux approches pour remonter à la source de l'erreur. Selon le cas, l'une ou l'autre est plus simple.

- Vérifiez à nouveau smart-me Billing. Une erreur de configuration peut entraîner des valeurs erronées dans smart-me Billing.

- Remplissez le tableau Excel. Vous pouvez le télécharger ici : [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Conditions préalables

1.  Le RCP (regroupement dans le cadre de la consommation propre) dispose d'un compteur smart-me au raccordement de l'immeuble (HAK)

2.  Vous disposez d'une facture du fournisseur d'électricité pour la consommation (soutirage) et la rétribution (injection) couvrant une période de décompte complète.


## Procédure pour remplir le tableau Excel

1.  Remplissez la liste de haut en bas.

2.  Les champs à remplir manuellement sont marqués en bleu.

3.  Les lignes vertes doivent ensuite être vérifiées.


Le tableau Excel contient différents points de contrôle.
L'erreur doit toujours être recherchée au premier point de contrôle non satisfait. Les points de contrôle s'appuient les uns sur les autres.

Chaque point de contrôle a un objectif précis :

- Différence bilan soutirage (Differenz Bilanz Bezug) : vérifie si le compteur de bilan smart-me se situe, pour la consommation (soutirage), dans la tolérance de mesure de 1% par rapport au fournisseur d'électricité.

- Différence bilan rétribution (Differenz Bilanz Rückvergütung) : vérifie si le compteur de bilan smart-me se situe, pour la rétribution (injection), dans la tolérance de mesure de 1% par rapport au fournisseur d'électricité.

- Bilan vs sous-consommateurs (Bilanz vs. Unterverbraucher) : vérifie si les sous-mesures et le compteur de bilan smart-me se situent dans la tolérance de mesure de 1%. La consommation en veille de l'installation photovoltaïque et de tous les appareils smart-me est prise en compte.

- Relevé du compteur vs compteurs virtuels (Zählerstand vs. virtuelle Zähler) : vérifie si chaque kilowattheure mesuré est bien facturé dans smart-me Billing.

- Soutirage du réseau fournisseur d'électricité vs smart-me Billing (Netzbezug EW vs. smart-me Billing) : vérifie si les tarifs heures pleines, heures creuses et solaires de smart-me Billing correspondent à la facture du fournisseur d'électricité.

- Autoconsommation vs smart-me Billing (Eigenverbrauch vs. smart-me Billing) : vérifie si chaque kilowattheure d'électricité photovoltaïque autoconsommée est bien facturé.


## Réserve

- Le tableau Excel est un modèle guidé pour vérifier les différences. smart-me n'assume aucune responsabilité définitive quant au contenu du tableau Excel.

- Le tableau Excel est toujours en version bêta ; il a été créé à la fin de l'été 2023.

- Le tableau Excel ne peut actuellement pas vérifier tous les cas et peut encore présenter de petites erreurs. Celles-ci sont corrigées en continu.


## Analyse par smart-me

Si vous constatez un problème dans le décompte et souhaitez que nous l'analysions, nous avons besoin des informations suivantes :

- Données d'accès au compte

- Factures de soutirage du fournisseur d'électricité

- Rétribution du fournisseur d'électricité


Remarque : nous analysons uniquement les installations qui respectent notre schéma de mesure. Cela implique que chaque production et chaque consommateur, y compris le compteur de bilan, soient mesurés.
