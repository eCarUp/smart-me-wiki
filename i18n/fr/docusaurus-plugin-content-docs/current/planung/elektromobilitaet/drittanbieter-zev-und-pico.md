---
title: 'Système tiers et Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Électromobilité avec la borne de recharge smart-me Pico sans RCP smart-me'
sidebar_label: 'Système tiers et Pico'
---
## Électromobilité avec la borne de recharge smart-me Pico sans RCP smart-me / électricité pour les locataires

### Schéma de principe d'un lotissement sans RCP smart-me / électricité pour les locataires

![RCP tiers et Pico – Illustration 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description de la solution de gestion de la charge dans le schéma de mesure sans RCP / électricité pour les locataires ou avec un fournisseur tiers

La gestion de la charge de la borne de recharge Pico repose sur le matériel de comptage smart-me. Ce matériel peut être utilisé directement comme points de référence.

Si une installation de compteurs tiers existe déjà, la gestion de la charge des Picos peut aussi être assurée par un logiciel tiers, à la place de la gestion de la charge multiniveau smart-me.
Vous trouverez plus d'informations à ce sujet ici, sous « Informations complémentaires ».

Avantages de la gestion de la charge smart-me :

- Même fabricant pour le matériel de mesure et la borne de recharge : compatibilité et fiabilité optimales

- Gestion de la charge dynamique à plusieurs niveaux : pertes de puissance minimales et haute disponibilité

- Délestage de l'ensemble de l'installation piloté de manière centralisée

- Fonction d'optimisation solaire à l'échelle du site ou du bâtiment

- Priorisation des groupes de recharge et réduction passive des pics de charge


Points matériels fonctionnellement nécessaires pour une gestion de la charge globale avec du matériel smart-me (flèches rouges) :

- 2x compteur de bâtiment ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- Point d'optimisation solaire, nécessaire à la répartition de la capacité au sein du site.

- En option 2x compteur E-Mobility ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- Référence lorsque plusieurs groupes de recharge sont raccordés à un même départ et se partagent la capacité.
    \- Mesure de décompte pour les pertes et l'énergie de veille
    \- D'autres consommateurs qui ne sont pas des bornes de recharge Pico peuvent également être pris en compte, p. ex. l'éclairage du garage

- En option, si tous les bâtiments sont mesurés, 1x compteur de site ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- Ce point peut être formé virtuellement à partir des deux compteurs de bâtiment. Condition : 100% des charges du site doivent être mesurées par les compteurs de bâtiment.


### Informations complémentaires sur la gestion de la charge de la borne de recharge Pico

[Description fonctionnelle de la gestion de la charge smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Logiciels tiers de gestion de la charge compatibles](/drittsysteme)

### Décompte de l'électromobilité sans RCP / électricité pour les locataires

Le décompte peut être effectué de différentes manières, chacune avec ses avantages et ses inconvénients :

- Décompte en tarif unique ou multitarif dans le RCP (regroupement dans le cadre de la consommation propre) avec [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Décompte en tarif unique selon la méthode du post-paiement avec le [backend eCarUp](https://web.ecarup.com/referenzen/).

- Décompte en tarif unique au moyen d'une facturation par carte de crédit hautement automatisée avec le [backend eCarUp](https://web.ecarup.com/referenzen/).
