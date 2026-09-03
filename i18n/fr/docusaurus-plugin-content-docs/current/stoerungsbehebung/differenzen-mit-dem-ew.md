---
title: 'Différences entre smart-me Billing et le fournisseur d''électricité'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'Cette section décrit une méthodologie uniforme permettant de vérifier s''il existe une différence entre la facture du fournisseur d''électricité et le smart-me Billing.'
sidebar_label: 'Différences avec le fournisseur d''électricité'
---
Cette section décrit une méthodologie uniforme permettant de vérifier s'il existe une différence entre la facture du fournisseur d'électricité et le smart-me Billing.

## Méthodologie

Il existe deux approches pour identifier l'erreur. Selon les cas, l'une ou l'autre est plus simple.

- Le smart-me Billing est vérifié une nouvelle fois. En cas d'erreur de configuration, celle-ci peut conduire à des valeurs erronées dans le smart-me Billing.

- Le tableau Excel est rempli. L'Excel peut être téléchargé ici : [Différence entre le fournisseur d'électricité et smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A)


## Conditions préalables

1.  Le RCP dispose d'un compteur smart-me au raccordement d'immeuble (HAK)

2.  Une facture de la consommation (soutirage) et de la rétribution (injection) du fournisseur d'électricité est disponible pour une période de décompte complète.


## Marche à suivre pour remplir l'Excel

1.  La liste est remplie de haut en bas.

2.  Les champs à remplir à la main sont marqués en bleu.

3.  Les lignes vertes sont ensuite à vérifier.


L'Excel comporte différents points de contrôle.
L'erreur doit être recherchée au premier point de contrôle non satisfait. Les points de contrôle s'appuient en effet les uns sur les autres.

Chaque point de contrôle remplit un objectif précis :

- Différence bilan soutirage : ici, on détermine si le compteur de bilan smart-me se situe, pour la consommation (soutirage), dans la tolérance de mesure de 1 % par rapport au fournisseur d'électricité.

- Différence bilan rétribution : ici, on détermine si le compteur de bilan smart-me se situe, pour la rétribution (injection), dans la tolérance de mesure de 1 % par rapport au fournisseur d'électricité.

- Bilan vs. sous-consommateurs : ici, on vérifie si les sous-comptages et le compteur de bilan smart-me se situent dans la tolérance de mesure de 1 %. La consommation en veille de l'installation PV et de tous les appareils smart-me est prise en compte.

- Relevé du compteur vs. compteurs virtuels : ici, on vérifie si chaque kilowattheure mesuré est également facturé dans le smart-me Billing.

- Soutirage du réseau fournisseur d'électricité vs. smart-me Billing : ici, on vérifie si les tarifs heures pleines, heures creuses et solaire du smart-me Billing correspondent à la facture du fournisseur d'électricité.

- Autoconsommation vs. smart-me Billing : ici, on vérifie si chaque kilowattheure d'électricité PV autoconsommée est également facturé.


## Réserve

- L'Excel est un modèle guidé pour la vérification des différences. smart-me n'assume aucune responsabilité définitive quant au contenu de l'Excel.

- L'Excel est encore en version bêta, il a été créé à la fin de l'été 2023.

- L'Excel ne peut actuellement pas vérifier tous les cas et peut, le cas échéant, présenter encore de petites erreurs. Celles-ci sont corrigées en continu.


## Analyse smart-me

Si un problème est constaté dans le décompte et que vous souhaitez que nous l'analysions, nous avons besoin des indications suivantes :

- Données d'accès au compte

- Factures du soutirage auprès du fournisseur d'électricité

- Rétribution du fournisseur d'électricité

- Tableau Excel rempli
