---
title: 'smart-me RCP et Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'La mobilité électrique dans le RCP smart-me avec le matériel de borne de recharge Pico'
sidebar_label: 'smart-me RCP et Pico'
---
## La mobilité électrique dans le RCP smart-me avec le matériel de borne de recharge Pico

### Schéma de principe d'un complexe immobilier en regroupement dans le cadre de la consommation propre

![smart-me RCP et Pico – illustration 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Description de la solution de gestion de la charge dans le schéma de mesure d'un RCP

La gestion de la charge de la borne de recharge Pico repose sur le matériel de comptage smart-me. Ce matériel peut être utilisé directement comme point de référence.

Si une installation de compteurs tiers est déjà en place, la gestion de la charge des Pico peut également être assurée par un logiciel tiers, à la place de la gestion de la charge multiniveau smart-me.
Tu trouveras de plus amples informations à ce sujet ci-dessous sous « informations complémentaires ».

Avantages de la gestion de la charge smart-me :

- Aucun matériel de mesure supplémentaire nécessaire

- Même fabricant pour le matériel de mesure et la borne de recharge : compatibilité et fiabilité optimales

- Gestion de la charge multiniveau à commande dynamique : pertes de puissance minimales et disponibilité élevée

- Délestage centralisé de l'ensemble de l'installation

- Fonction d'optimisation solaire optimisée pour le site ou le bâtiment

- Priorisation des groupes de recharge et réduction passive des pointes de charge


Points matériels fonctionnellement nécessaires pour une gestion de la charge globale dans le RCP avec du matériel smart-me (flèches rouges) :

- 2x compteur de bâtiment ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Point d'optimisation solaire et nécessaire à la répartition de la capacité au sein du site.

- Facultatif, mais recommandé dans un RCP : 2x compteur E-Mobility ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Référence lorsque plusieurs groupes de recharge sont raccordés à un même départ et se partagent la capacité.
    \- Mesure de conteggio pour les pertes et l'énergie en veille
    \- D'autres consommateurs qui ne sont pas des bornes de recharge Pico peuvent en outre être pris en compte, p. ex. l'éclairage du garage, les prises, etc.

- Facultatif, mais expressément recommandé dans un RCP : 1x compteur de site ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- S'il existe déjà dans le RCP, ce point peut être pris en compte. Si le compteur de site est absent, il peut être représenté virtuellement.


### Informations complémentaires sur la gestion de la charge de la borne de recharge Pico

[Description du fonctionnement de la gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Logiciels tiers de gestion de la charge compatibles](/drittsysteme)

[Pico – planification générale de l'installation : départs et protections.](/produkte/pico-ladestation/installationsplanung)

### Décompte de la mobilité électrique dans le RCP

Le décompte peut être établi de différentes manières, chacune avec ses avantages et inconvénients spécifiques :

- Décompte dans un système à tarif unique ou à tarifs multiples dans le RCP avec [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), séparément ou conjointement avec la consommation des appartements.

- Décompte dans un système à tarif unique selon la méthode post-paiement et avec le [backend eCarUp](https://web.ecarup.com/referenzen/).

- Décompte à tarif unique au moyen d'une facturation par carte de crédit hautement automatisée via le [backend eCarUp](https://web.ecarup.com/referenzen/).
