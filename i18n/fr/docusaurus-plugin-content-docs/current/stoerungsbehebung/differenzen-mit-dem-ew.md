---
title: 'Différences entre smart-me Billing et le fournisseur d''énergie'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'Cette section décrit une méthode uniforme permettant de vérifier s''il existe une différence entre la facture du fournisseur d''énergie et smart-me Billing.'
sidebar_label: 'Différences avec le fournisseur d''électricité'
---
Cette section décrit une méthode uniforme permettant de vérifier s'il existe une différence entre la facture du fournisseur d'énergie et smart-me Billing. 

## Méthode

Il existe deux approches pour identifier l'origine de l'erreur. Selon le cas, l'une ou l'autre procédure est plus simple.

- smart-me Billing est vérifié une nouvelle fois. Une éventuelle erreur de configuration peut entraîner des valeurs erronées dans smart-me Billing.

- Le tableau Excel est rempli. Le fichier Excel peut être téléchargé ici : [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Conditions préalables

1.  Le RCP (regroupement dans le cadre de la consommation propre) dispose d'un compteur smart-me au raccordement de l'immeuble (HAK)

2.  Une facture du fournisseur d'électricité pour la consommation (soutirage) et la rétribution (injection) est disponible pour une période de décompte complète.


## Procédure pour remplir le fichier Excel

1.  La liste est remplie de haut en bas.

2.  Les champs à remplir manuellement sont marqués en bleu.

3.  Les lignes vertes doivent ensuite être vérifiées.


Le fichier Excel contient différents points de contrôle.
L'erreur doit toujours être recherchée au premier point de contrôle non satisfait. Les points de contrôle s'appuient en effet les uns sur les autres.

Chaque point de contrôle remplit un objectif précis :

- Différence bilan soutirage : on détermine ici si le compteur de bilan smart-me se situe, pour la consommation (soutirage), dans la tolérance de mesure de 1% par rapport au fournisseur d'électricité.

- Différence bilan rétribution : on détermine ici si le compteur de bilan smart-me se situe, pour la rétribution (injection), dans la tolérance de mesure de 1% par rapport au fournisseur d'électricité.

- Bilan vs. sous-consommateurs : on vérifie ici si les sous-comptages et le compteur de bilan smart-me se situent dans la tolérance de mesure de 1%. La consommation en veille de l'installation PV et de tous les appareils smart-me est prise en compte.

- Relevé du compteur vs. compteurs virtuels : on vérifie ici si chaque kilowattheure mesuré est également facturé dans smart-me Billing.

- Soutirage réseau fournisseur d'électricité vs. smart-me Billing : on vérifie ici si les tarifs heures pleines, heures creuses et solaire dans smart-me Billing correspondent à la facture du fournisseur d'électricité.

- Autoconsommation vs. smart-me Billing : on vérifie ici si chaque kilowattheure d'électricité PV autoconsommée est également facturé.


## Réserve

- Le fichier Excel est un modèle guidé pour la vérification des différences. smart-me n'assume aucune responsabilité définitive quant au contenu du fichier Excel.

- Le fichier Excel est toujours en version bêta ; il a été créé à la fin de l'été 2023.

- Le fichier Excel ne peut actuellement pas vérifier tous les cas et peut, le cas échéant, encore présenter de petites erreurs. Celles-ci sont corrigées en continu.


## Analyse smart-me

Si un problème est constaté dans le décompte et que vous souhaitez que nous l'analysions, nous avons besoin des informations suivantes :

- Données d'accès au compte

- Factures de soutirage du fournisseur d'électricité

- Rétribution du fournisseur d'électricité


Remarque : nous analysons uniquement les installations qui respectent notre schéma de mesure. Cela implique que chaque production et chaque consommateur, y compris le compteur de bilan, soient mesurés.
