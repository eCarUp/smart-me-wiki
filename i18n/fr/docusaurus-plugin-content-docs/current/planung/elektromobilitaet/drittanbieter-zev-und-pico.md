---
title: 'RCP de fournisseurs tiers et Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Électromobilité avec la borne de recharge smart-me Pico sans RCP smart-me'
sidebar_label: 'RCP de fournisseurs tiers et Pico'
---
## Électromobilité avec la borne de recharge smart-me Pico sans RCP smart-me

### Schéma de principe d'un complexe immobilier sans RCP smart-me

![RCP de fournisseurs tiers et Pico – illustration 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Description de la solution de gestion de la charge dans un schéma de mesure sans RCP ou avec un RCP de fournisseur tiers

La gestion de la charge de la borne de recharge Pico repose sur le matériel de comptage smart-me. Ce matériel peut être utilisé directement comme point de référence.

Si une installation de compteurs d'une autre marque est déjà en place, la gestion de la charge des Pico peut également être assurée par un logiciel tiers, à la place de la gestion de la charge multiniveau de smart-me.
Tu trouveras de plus amples informations à ce sujet ci-dessous, sous « informations complémentaires ».

Avantages de la gestion de la charge smart-me :

- Même fabricant pour le matériel de mesure et la borne de recharge : compatibilité et fiabilité optimales

- Gestion de la charge multiniveau à commande dynamique : pertes de puissance minimales et disponibilité élevée

- Délestage centralisé de l'ensemble de l'installation

- Fonction d'optimisation solaire à l'échelle du site ou du bâtiment

- Priorisation des groupes de recharge et réduction passive des pointes de charge


Points matériels nécessaires au fonctionnement d'une gestion de la charge globale avec du matériel smart-me (flèches rouges) :

- 2x compteur de bâtiment ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Point d'optimisation solaire et nécessaire à la répartition de la capacité au sein du site.

- En option 2x compteur d'électromobilité ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Référence lorsque plusieurs groupes de recharge sont raccordés à un même départ et se partagent la capacité.
    \- Mesure de décompte pour les pertes et l'énergie en veille
    \- D'autres consommateurs qui ne sont pas des bornes de recharge Pico peuvent également être pris en compte, p. ex. l'éclairage du garage

- En option, si tous les bâtiments sont mesurés, 1x compteur de site ([Telstar 80A](/produkte/telstar) ou [Telstar CT](/produkte/Telstar-CT))
    \- Ce point peut être constitué virtuellement à partir des deux compteurs de bâtiment. La condition est que 100% des charges du site soient mesurées par les compteurs de bâtiment.


### Informations complémentaires sur la gestion de la charge de la borne de recharge Pico

[Description du fonctionnement de la gestion de la charge smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Logiciels tiers de gestion de la charge compatibles](/drittsysteme)

### Décompte de l'électromobilité sans RCP

Le décompte peut être établi de différentes manières, chacune avec ses avantages et ses inconvénients spécifiques :

- Décompte selon un système à tarif unique ou à tarifs multiples dans le RCP avec [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Décompte selon un système à tarif unique au moyen de la méthode post-payment et du [backend eCarUp](https://web.ecarup.com/referenzen/).

- Décompte à tarif unique au moyen d'une facturation par carte de crédit hautement automatisée et du [backend eCarUp](https://web.ecarup.com/referenzen/).
