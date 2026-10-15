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
Ces paramètres sont enregistrés et stockés sur le matériel Pico. 

- Valeur de courant maximale pour la ligne d'alimentation (valeur de protection par phase)


Les informations relatives aux valeurs limites, aux recharges actives et au courant distribué sont communiquées via un système MESH local (2.4Ghz) au sein du groupe de charge Pico.

La fonctionnalité de groupe de charge remplit les tâches suivantes :

### Communication MESH

Le matériel Pico dispose d'une fonctionnalité MESH. Celle-ci permet une communication locale entre les Pico, même lorsque la connexion Internet par Wifi ou par réseau mobile n'est pas assurée. Le MESH peut également relier au cloud des bornes de recharge sans accès direct à un point d'accès, par l'intermédiaire de Pico voisines. La condition est toutefois qu'elles se trouvent ensemble dans un même groupe de recharge et qu'un Wifi soit disponible.

Le réseau MESH peut prendre en charge au maximum 200 bornes de recharge dans un groupe de charge.

Dans tous les cas, le MESH transmet les valeurs et les décisions de gestion de la charge concernant le groupe du maître aux autres membres du groupe.

Les membres du réseau MESH n'ont pas besoin d'un contact direct avec la Pico maître ; ils peuvent également établir la connexion avec le maître MESH (A) par l'intermédiaire de jusqu'à 5 bornes de recharge voisines.

Chaque Pico peut servir de point de distribution pour jusqu'à 6 appareils simultanément.

La Pico maître est choisie de manière appropriée par le groupe lui-même et s'optimise en permanence.

La portée maximale d'une connexion entre les différentes Pico est de 30 mètres sans obstacles et d'env. 10m avec obstacles.

Remarque :
Il convient de veiller à ce que toutes les Pico raccordées à un seul et même départ e-mobilité puissent se trouver dans le même groupe de recharge. (Mesure constructive)

Si cela n'est pas possible en raison de l'emplacement de l'ensemble des Pico, plusieurs groupes de recharge peuvent également être gérés sur un même câble à l'aide de la gestion de la charge multiniveau.

Dans ce cas, il est recommandé de former par exemple des groupes de 3, 6 ou 9 afin d'exploiter le plus efficacement possible la commutation monophasée.

La fonction de groupe de charge n'exige ni un hotspot de même nom ni des identifiants identiques pour la connexion à Internet. Le MESH est un système autonome qui repose uniquement sur le fait que les appareils du groupe de charge peuvent se joindre mutuellement.

![Gestion de la charge Pico – Figure 1](/img/produkte-pico-ladestation-pico-lastmanagement/01.png)

![Gestion de la charge Pico – Figure 2](/img/produkte-pico-ladestation-pico-lastmanagement/02.png)

### Comportement en cas de perte de connexion

Les groupes de recharge Pico statiques peuvent continuer à assurer la fonction de recharge en cas de perte de la connexion Internet. 

Pour cela, les trois valeurs suivantes peuvent être choisies :

- Aucune action (Keine Aktion)
    (Aucune régulation, les véhicules en charge continuent à se recharger avec le courant libéré précédemment, mais il n'est pas possible de démarrer de nouvelles recharges)

- Courant minimal (Minimalstrom) :
    Cette Pico revient à sa puissance minimale réglée (individuellement).

- Courant max. (par groupe) (Max. Strom (pro Gruppe))
    (Seul réglage compatible avec la gestion de la charge multiniveau)
    Chaque Pico reçoit une fraction de la puissance de recharge définie pour le groupe de recharge.
    La puissance individuelle est répartie automatiquement par le gestionnaire de recharge entre les recharges actives.


![Gestion de la charge Pico – Figure 3](/img/produkte-pico-ladestation-pico-lastmanagement/03.png)

### Protection contre la surcharge du départ ou de la ligne d'alimentation

Les groupes de charge reçoivent au maximum le « Courant protégé » (Abgesicherten Strom) à libre disposition et pour la répartition entre les recharges actives. Cela garantit que le groupe de charge Pico ne soutire jamais plus de courant que ce qui est autorisé.

### Répartition du courant de recharge entre les recharges actives

Le courant de recharge disponible est réparti automatiquement entre les recharges actives. Les courants disponibles sont répartis de la manière la plus équitable possible.

Dans cet exemple, 63A sont répartis sur quatre bornes de recharge actives.
63 A / 4 recharges actives = 15.75A par borne.

Les courants de recharge sont attribués aux recharges actives en valeurs entières.

![Gestion de la charge Pico – Figure 4](/img/produkte-pico-ladestation-pico-lastmanagement/04.png)

### Commutation de phase et équilibrage des phases

Pico dispose d'une commutation de phase active qui remplit deux fonctions :

- Équilibrage des phases pour la symétrie de charge entre les recharges actives

- Répartition de l'énergie en cas d'alimentation insuffisante


Symétrie de charge :

La Pico identifie les véhicules monophasés et les place en conséquence sur une phase pour la recharge. Si d'autres véhicules monophasés s'ajoutent au cours de la recharge, le groupe Pico sélectionne automatiquement pour ce véhicule une phase encore non chargée.

La symétrie obéit à plusieurs règles qui peuvent également forcer des véhicules triphasés en mode monophasé si l'asymétrie devient trop importante. 

Alimentation insuffisante :

La Pico utilise le courant disponible en triphasé tant que le minimum triphasé réglé peut être maintenu, p. ex. triphasé 6A.
(Le seuil peut être influencé par le courant minimal des différentes Pico.)

Si un véhicule supplémentaire s'ajoute et que la recharge triphasée au courant minimal réglé ne peut plus être fournie à tous les véhicules, les bornes de recharge passent progressivement en mode de recharge monophasé afin de garantir la plus grande efficacité possible.

Il est donc possible que des recharges triphasées et des recharges monophasées aient lieu en parallèle dans un groupe de recharge.

Les recharges actives sont réparties uniformément sur les trois phases et le courant disponible est mis à disposition de manière répartie. 

L'algorithme tient également compte des recharges mises en pause ou terminées.

Les recharges mises en pause réservent le courant minimal nécessaire afin de garantir p. ex. les fonctions de chauffage auxiliaire du véhicule.

Remarque :
La disponibilité d'au minimum 6A est une exigence du véhicule et doit être garantie à tout moment du côté de la borne de recharge. Cela indépendamment du fait que la borne fonctionne en mode triphasé ou monophasé. Si la valeur descend en dessous, le véhicule arrête la recharge de lui-même ou ne commence même pas à se recharger.

Certains véhicules plus anciens ne démarrent même pas la recharge lorsque moins de 8A sont disponibles.

Conseil : configurer les bornes publiques pour les visiteurs ou les stations-service avec un minimum de 8A.



![Gestion de la charge Pico – Figure 5](/img/produkte-pico-ladestation-pico-lastmanagement/05.png)

Situation : le courant disponible ne suffit pas pour alimenter tous les véhicules en triphasé avec le minimum.
\--> Les bornes de recharge sont toutes commutées en recharge monophasée.

![Gestion de la charge Pico – Figure 6](/img/produkte-pico-ladestation-pico-lastmanagement/06.png)

Situation : le courant disponible suffirait pour tous les appareils simultanément, mais une recharge mise en pause immobiliserait trop d'énergie. La borne de recharge avec le véhicule entièrement rechargé est passée en monophasé afin de céder des capacités aux autres recharges triphasées.

## Gestion de la charge multiniveau (MLM)

La gestion de la charge multiniveau permet la commande dynamique des groupes de recharge Pico à travers les raccordements de site, la distribution, les raccordements d'immeuble et les tableaux divisionnaires.

Elle permet en outre de prioriser des groupes de recharge ainsi que d'utiliser des fonctions d'optimisation solaire.

[En savoir plus](/konfiguration/multilevel-lastmanagement)
