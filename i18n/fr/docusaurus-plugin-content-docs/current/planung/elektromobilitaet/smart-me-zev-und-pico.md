---
title: 'smart-me RCP et Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'Électromobilité dans le RCP smart-me avec le matériel de borne de recharge Pico'
sidebar_label: 'smart-me RCP et Pico'
---
## Électromobilité dans le RCP smart-me avec le matériel de borne de recharge Pico

### Schéma de principe d'un ensemble immobilier en regroupement dans le cadre de la consommation propre (RCP)

![smart-me RCP et Pico – Illustration 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Description de la solution de gestion de la charge dans le schéma de mesure d'un RCP

La gestion de la charge de la borne de recharge Pico repose sur le matériel de comptage smart-me. Ce matériel peut être utilisé directement comme points de référence.

Si une installation de compteurs d'un autre fabricant est déjà en place, la gestion de la charge des Pico peut également être assurée par un logiciel tiers, à la place de la gestion de la charge multiniveau smart-me.
Vous trouverez plus d'informations à ce sujet ci-dessous, sous « Informations complémentaires ».

Avantages de la gestion de la charge smart-me :

- Aucun matériel de mesure supplémentaire nécessaire

- Même fabricant pour le matériel de mesure et la borne de recharge : compatibilité et fiabilité optimales

- Gestion de la charge dynamique à plusieurs niveaux : pertes de puissance minimales et haute disponibilité

- Délestage centralisé de l'ensemble de l'installation

- Fonction d'optimisation solaire à l'échelle du site ou du bâtiment

- Priorisation des groupes de recharge et réduction passive des pics de charge


Points matériels fonctionnellement nécessaires pour une gestion de la charge globale dans le RCP avec du matériel smart-me (flèches rouges) :

- 2x compteur de bâtiment ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Point d'optimisation solaire et nécessaire à la répartition de la capacité au sein du site.

- Optionnel, mais recommandé dans le RCP : 2x compteur E-Mobility ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Référence lorsque plusieurs groupes de recharge sont raccordés à un même départ et se partagent la capacité.
    \- Mesure de décompte pour les pertes et l'énergie en veille
    \- D'autres consommateurs qui ne sont pas des bornes de recharge Pico peuvent également être pris en compte, p. ex. éclairage du garage, prises, etc.

- Optionnel, mais expressément recommandé dans le RCP : 1x compteur de site ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- S'il existe déjà dans le RCP, ce point peut être pris en compte. En l'absence de compteur de site, celui-ci peut être représenté de manière virtuelle.


### Informations complémentaires sur la gestion de la charge de la borne de recharge Pico

[Description fonctionnelle de la gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Logiciels tiers de gestion de la charge compatibles](/drittsysteme)

[Planification générale de l'installation Pico : départs et protections.](/produkte/pico-ladestation/installationsplanung)

### Décompte de l'électromobilité dans le RCP

Le décompte peut être effectué de différentes manières, chacune avec ses avantages et inconvénients spécifiques :

- Décompte en tarif unique ou multiple dans le RCP avec [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), séparément ou avec la consommation des logements.

- Décompte en tarif unique selon la méthode du post-paiement avec le [backend eCarUp](https://web.ecarup.com/referenzen/).

- Décompte en tarif unique par facturation hautement automatisée par carte de crédit via le [backend eCarUp](https://web.ecarup.com/referenzen/).
