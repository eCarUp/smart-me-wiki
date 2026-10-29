---
title: 'Système smart-me et Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'Électromobilité dans le RCP smart-me avec le matériel de borne de recharge Pico'
sidebar_label: 'Système smart-me et Pico'
---
Électromobilité dans le RCP (regroupement dans le cadre de la consommation propre) smart-me / l'électricité pour les locataires avec le matériel de borne de recharge Pico

### Schéma de principe d'un lotissement en RCP / électricité pour les locataires

<div className="bild--voll">

![RCP smart-me et Pico – Illustration 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01_FR.png)

</div>

### Description de la solution de gestion de la charge dans le schéma de mesure d'un objet en RCP / électricité pour les locataires

La gestion de la charge de la borne de recharge Pico repose sur le matériel de comptage smart-me. Ce matériel peut être utilisé directement comme points de référence.

Si une installation de compteurs d'un autre fabricant existe déjà, la gestion de la charge des Pico peut également être réalisée au moyen d'un logiciel tiers, à la place de la gestion de la charge multiniveau smart-me.
Vous trouverez de plus amples informations à ce sujet ci-dessous, sous « informations complémentaires ».

Avantages de la gestion de la charge smart-me :

- Aucun matériel de mesure supplémentaire n'est nécessaire

- Même fabricant pour le matériel de mesure et la borne de recharge : compatibilité et fiabilité optimales

- Gestion de la charge dynamique à plusieurs niveaux : pertes de puissance minimales et haute disponibilité

- Délestage centralisé de l'ensemble de l'installation

- Fonction d'optimisation solaire à l'échelle du site ou du bâtiment

- Priorisation des groupes de recharge et réduction passive des pics de charge


Points matériels fonctionnellement nécessaires pour une gestion de la charge globale en RCP / électricité pour les locataires avec du matériel smart-me (flèches rouges) :

- 2x compteurs de bâtiment ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- Point d'optimisation solaire, nécessaire à la répartition de la capacité au sein du site.

- En option mais recommandé : 2x compteurs E-Mobility ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- Référence lorsque plusieurs groupes de recharge sont raccordés à un même départ et se partagent la capacité.
    \- Mesure pour le décompte des pertes et de l'énergie en veille
    \- D'autres consommateurs que les bornes de recharge Pico peuvent également être pris en compte, p. ex. l'éclairage du garage, les prises, etc.

- En option mais vivement recommandé : 1x compteur de site ([Telstar 80A](/produkte/telstar-80a) ou [Telstar CT](/produkte/telstar-ct))
    \- S'il existe déjà dans le RCP, ce point peut être pris en compte. En l'absence de compteur de site, celui-ci peut être représenté virtuellement.


### Informations complémentaires sur la gestion de la charge de la borne de recharge Pico

[Description fonctionnelle de la gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Logiciels tiers de gestion de la charge compatibles](/drittsysteme)

[Planification générale de l'installation Pico : départs et protections.](/produkte/pico-ladestation/installationsplanung)

### Décompte de l'électromobilité en RCP / électricité pour les locataires

Le décompte peut être effectué de différentes manières, chacune avec ses avantages et inconvénients spécifiques :

- Décompte en tarif unique ou multitarif dans le RCP avec [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), séparément ou avec la consommation des logements.

- Décompte en tarif unique selon la méthode du post-paiement avec le [backend eCarUp](https://web.ecarup.com/referenzen/).

- Décompte en tarif unique par un paiement par carte de crédit hautement automatisé via le [backend eCarUp](https://web.ecarup.com/referenzen/).
