---
title: 'Gestion de la charge Pico'
slug: '/produkte/pico-ladestation/pico-lastmanagement'
description: 'Le système de gestion de la charge Pico'
sidebar_label: 'Gestion de la charge Pico'
---
## Le système de gestion de la charge Pico

Le système de gestion de la charge de Pico repose sur deux fonctionnalités fondamentales :

- Groupes de charge de la gestion de la charge Pico

- Fonctionnalité de gestion de la charge multiniveau


## Gestion de la charge Pico (groupes de charge)

Le groupe de charge Pico définit un regroupement de matériel Pico qui partage un même câble d'alimentation ou une même distribution électrique.
Ces réglages sont enregistrés et mémorisés sur le matériel Pico.

- Valeur de courant maximale pour l'alimentation (valeur de protection par phase)


Les informations relatives aux valeurs limites, aux recharges actives et au courant distribué sont communiquées via un système MESH local (2.4 GHz) au sein du groupe de charge Pico.

La fonctionnalité de groupe de charge remplit les tâches suivantes :

### Communication MESH

Le matériel Pico dispose d'une fonctionnalité MESH. Celle-ci permet une communication locale entre les Picos, même lorsque le Wifi ou la connexion mobile à Internet n'est pas assurée. Le MESH peut également relier au cloud, via des Picos voisins, des bornes de recharge sans accès direct à un point d'accès. Cela suppose toutefois qu'elles se trouvent ensemble dans un même groupe de recharge et qu'un Wifi soit disponible.

Le réseau MESH peut prendre en charge au maximum 200 bornes de recharge dans un groupe de charge.

Le MESH transmet dans tous les cas les valeurs et les décisions de gestion de la charge relatives au groupe, du maître vers les autres membres du groupe.

Les membres du réseau MESH n'ont pas besoin d'un contact direct avec le Pico maître : ils peuvent aussi établir la connexion au maître MESH (A) en passant par jusqu'à 5 bornes de recharge voisines.

Chaque Pico peut être simultanément un point de distribution pour un maximum de 6 appareils.

Le Pico maître est choisi de manière appropriée par le groupe lui-même et s'optimise en permanence.

La portée maximale d'une liaison entre les différents Picos est de 30 mètres sans obstacle et d'environ 10 m avec obstacles.

Remarque :
Il convient de veiller à ce que tous les Picos puissent se trouver sur un seul et même départ d'électromobilité, dans le même groupe de recharge. (Mesure constructive)

Si cela n'est pas possible en raison de l'emplacement de tous les Picos, plusieurs groupes de recharge peuvent également être gérés sur un même câble à l'aide de la gestion de la charge multiniveau.

Dans ce cas, il est recommandé de former par exemple des groupes de 3, 6 ou 9 afin de pouvoir exploiter la commutation monophasée aussi efficacement que possible.

La fonction de groupe de charge n'exige pas un hotspot de même nom ni des données d'accès identiques pour la connexion à Internet. Le MESH est un système autonome et repose uniquement sur le fait que les appareils du groupe de charge peuvent se joindre entre eux.

![Gestion de la charge Pico – illustration 1](/img/produkte-pico-ladestation-pico-lastmanagement/01.png)

![Gestion de la charge Pico – illustration 2](/img/produkte-pico-ladestation-pico-lastmanagement/02.png)

### Comportement en cas de coupure de la connexion

Les groupes de recharge Pico statiques peuvent continuer d'assurer la fonction de recharge en cas de coupure de la connexion Internet.

Trois valeurs peuvent être choisies à cet effet :

- Aucune action
    (Aucune régulation, les véhicules en cours de recharge continuent de se recharger avec le courant précédemment libéré, mais il n'est pas possible de démarrer de nouvelles recharges)

- Courant minimal :
    Ce Pico redescend à sa puissance minimale réglée (individuelle).

- Courant max. (par groupe)
    (Seul réglage compatible avec la gestion de la charge multiniveau)
    Le Pico individuel reçoit une fraction de la puissance de recharge définie pour le groupe de recharge.
    La puissance individuelle est automatiquement répartie par le gestionnaire de recharge sur les recharges actives.


![Gestion de la charge Pico – illustration 3](/img/produkte-pico-ladestation-pico-lastmanagement/03.png)

### Protection contre la surcharge du départ ou de l'alimentation

Les groupes de charge reçoivent au maximum le « courant protégé » à libre disposition et répartition sur les recharges actives. Cela garantit que le groupe de charge Pico ne soutire jamais plus de courant que ce qui est autorisé.

### Répartition du courant de recharge sur les recharges actives

Le courant de recharge disponible est automatiquement réparti sur les recharges actives. Les courants disponibles sont répartis de la manière la plus équitable possible.

Dans cet exemple, 63 A sont répartis sur quatre bornes de recharge actives.
63 A / 4 recharges actives = 15.75 A par borne.

Les courants de recharge sont attribués aux recharges actives en nombres entiers.

![Gestion de la charge Pico – illustration 4](/img/produkte-pico-ladestation-pico-lastmanagement/04.png)

### Commutation de phases et équilibrage des phases

Pico dispose d'une commutation de phases active qui remplit deux fonctions :

- Équilibrage des phases pour la symétrie de charge entre les recharges actives

- Répartition de l'énergie en cas de sous-alimentation


Symétrie de charge :

Le Pico identifie les véhicules monophasés et les bascule en conséquence sur une phase pour la recharge. Si d'autres véhicules monophasés s'ajoutent au cours de la recharge, le groupe Pico sélectionne automatiquement une phase encore non chargée pour ce véhicule.

La symétrie obéit à plusieurs règles qui peuvent aussi contraindre des véhicules triphasés à passer en mode monophasé si l'asymétrie devient trop importante.

Sous-alimentation :

Le Pico utilise le courant disponible en triphasé aussi longtemps que le minimum triphasé réglé peut être maintenu, par exemple 6 A en triphasé.
(Le seuil peut être influencé via le courant minimal de chaque Pico.)

Si un véhicule supplémentaire s'ajoute et que la recharge triphasée au courant minimal réglé ne peut plus être fournie à tous les véhicules, des bornes de recharge passent progressivement en mode de recharge monophasé afin de garantir la plus haute efficacité possible.

Il est donc possible que, dans un groupe de recharge, des recharges triphasées et des recharges monophasées se déroulent en parallèle.

Les recharges actives sont réparties uniformément sur les trois phases et le courant disponible est mis à disposition de manière partagée.

L'algorithme tient également compte, en conséquence, des recharges en pause ou terminées.

Les recharges en pause réservent le courant minimal nécessaire pour assurer par exemple les fonctions de chauffage d'appoint du véhicule.

Remarque :
La disponibilité d'un minimum de 6 A est une exigence du véhicule et doit être assurée en tout temps du côté de la borne de recharge. Et ce, indépendamment du fait que la borne soit en fonctionnement triphasé ou monophasé. Si la valeur descend en dessous, le véhicule interrompt la recharge de lui-même ou ne commence même pas à se recharger.

Certains véhicules plus anciens renoncent même au démarrage de la recharge lorsque moins de 8 A sont disponibles.

Conseil : configurer les bornes publiques destinées aux visiteurs ou les stations de recharge avec un minimum de 8 A.



![Gestion de la charge Pico – illustration 5](/img/produkte-pico-ladestation-pico-lastmanagement/05.png)

Situation : le courant disponible ne suffit pas à alimenter tous les véhicules en triphasé avec le minimum.
\--> Toutes les bornes de recharge sont commutées en recharge monophasée.

![Gestion de la charge Pico – illustration 6](/img/produkte-pico-ladestation-pico-lastmanagement/06.png)

Situation : le courant disponible suffirait pour tous les appareils simultanément, mais une recharge en pause immobiliserait trop d'énergie. La borne de recharge dont le véhicule est entièrement rechargé est mise en monophasé afin de céder des capacités aux autres recharges triphasées.

## Gestion de la charge multiniveau (MLM)

La gestion de la charge multiniveau permet le pilotage dynamique de groupes de recharge Pico à travers les raccordements de site, la distribution, les raccordements d'immeuble et les distributions secondaires.

Elle permet en outre la priorisation de groupes de recharge ainsi que des fonctions d'optimisation solaire.

[En savoir plus](/konfiguration/multilevel-lastmanagement)
