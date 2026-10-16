---
title: 'Gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinaire gestion de la charge multiniveau (50 min)'
sidebar_label: 'Gestion de la charge multiniveau'
---
<Video src="YiiACL00jko" title="Vidéo YouTube, enregistrement du webinaire de lancement de la gestion de la charge multiniveau" />

Webinaire gestion de la charge multiniveau (50 min)

### Conditions techniques pour utiliser la gestion de la charge multiniveau

- Firmware Pico version 0.0.25 ou supérieure --> [Effectuer la mise à jour du firmware](/konfiguration/firmware-update)

- Toutes les règles si/alors concernant des Pico ont été supprimées, afin qu'aucune commande contraire ne soit envoyée au MLM.

- État : 12.03.2024
    Aucune prise en charge du délestage via les contacts d'entrée du Telstar --> La solution sera publiée ultérieurement dans le MLM.

- La gestion de la charge fonctionne uniquement avec Telstar CT / Telstar 80A ou Nimbus


## Gestion de la charge multiniveau dynamique

La gestion de la charge multiniveau dynamique coordonne les capacités de limitation et les capacités dynamiques des différents groupes de charge au niveau du raccordement d'immeuble et du site.

Sa tâche consiste à mettre à la disposition des groupes de charge subordonnés les capacités de courant encore disponibles à chaque point de référence, et à protéger ainsi les points de dérivation contre la surcharge.

Exemples de points de dérivation importants :

- Raccordement du site

- Raccordement d'immeuble

- Ligne d'alimentation du sous-tableau de distribution

- Départ du garage

Dans le même temps, la gestion de la charge multiniveau permet l'optimisation solaire et offre des fonctions d'écrêtement des pointes de charge.

Limites de la gestion de la charge multiniveau dynamique :

- Max. 1000 appareils (bornes de recharge + compteurs de référence)

- Max. 50 dérivations de branches (points de référence)

![Gestion de la charge multiniveau – Figure 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Protection contre la surcharge des points de dérivation (raccordement du site, sous-tableaux de distribution, raccordement d'immeuble)

Pour toutes les branches créées dans la gestion de la charge multiniveau, des valeurs de courant maximales peuvent être définies. Elles agissent comme limite supérieure absolue du soutirage de courant et correspondent à la valeur de protection des lignes d'alimentation.

Une branche ne peut exister que selon le schéma suivant :

- Branche avec "charges non mesurées" :
    Derrière cette branche se trouvent d'autres consommateurs ou producteurs qui ne sont pas exclusivement des groupes Pico. Un compteur de référence est nécessaire pour la mesure.

- Branche sans "charges non mesurées", virtuelle :
    Les consommateurs en aval se composent exclusivement de groupes de charge Pico ou de "branches avec charges non mesurées" et du compteur de référence correspondant.
    Le courant total peut donc être calculé à partir de la somme de ces mesures disponibles et correspond à 100% du courant à contrôler.

    Domaines d'application :
    \- Limitation du courant total du site au moyen de sous-tableaux de distribution mesurés (économie d'un compteur de site)
    \- Protection de plusieurs câbles plats dérivés d'un même départ protégé


![Gestion de la charge multiniveau – Figure 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Gestion de la charge multiniveau – Figure 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Branche virtuelle (violet) limitée sur la base de la branche avec charges non mesurées et des groupes Pico.

### Exemple de configuration d'un lotissement avec MLM

![Gestion de la charge multiniveau – Figure 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Optimisation solaire

L'optimisation solaire permet une répartition efficace du courant excédentaire entre les groupes de recharge Pico subordonnés. La condition préalable est au moins une "branche avec charges non mesurées" et le compteur de référence correspondant.

L'optimisation peut être effectuée une seule fois en série (de haut en bas de l'arborescence) ou plusieurs fois dans des ramifications parallèles.

Une optimisation solaire peut ainsi être mise en œuvre pour l'ensemble du site ou seulement pour un bâtiment spécifique.

Exemple :

- Optimisation du site : optimisation solaire active sur la branche, référence sur le compteur du site ou branche créée virtuellement sur la base des sous-branches mesurées.

- Optimisation par bâtiment : optimisation solaire active sur plusieurs branches avec référence sur les compteurs respectifs des immeubles.


Lors de l'optimisation solaire sur le raccordement du site, l'excédent produit dans l'immeuble B est également à la disposition de l'infrastructure de recharge de l'immeuble A.

![Gestion de la charge multiniveau – Figure 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Courant de charge minimal : priorisation indirecte et écrêtement des pointes de charge

<div className="row">
<div className="col col--6">

Chaque groupe de charge Pico peut être doté d'un courant de charge minimal dépendant de l'heure.

Le réglage s'effectue de manière flexible pour chaque heure de la journée.

Cette fonction permet de mettre à disposition un courant de charge minimal, indépendamment d'autres optimisations parallèles.

Seul un dépassement de la limitation de courant d'une branche pourrait avoir une influence contraire.

Si le courant de charge minimal peut être garanti, celui-ci limite le soutirage direct depuis le réseau à la valeur réglée. 

En présence d'une optimisation solaire, le courant de charge disponible peut toutefois dépasser le minimum réglé et est augmenté en conséquence.

Exemple d'utilisation :

Réduire le courant de charge pendant les heures de production afin de réduire les pointes de charge.

Réduire le courant de charge à midi afin de réduire les pointes de charge.

Réduire le courant de charge pendant la journée afin d'obtenir une priorisation plus élevée du courant solaire.

Privilégier les groupes de places de stationnement extérieures par rapport aux places du parking souterrain (priorisation des groupes)

Priorisation

Le réglage du courant minimal disponible d'un groupe implique une certaine priorité par rapport aux autres groupes de bornes de recharge. Le groupe de bornes de recharge disposant du courant minimal le plus élevé à un moment donné est toujours traité en priorité par l'algorithme.

Exemple :

26 A par phase sont actuellement disponibles pour la répartition dans le MLM :
Groupe de recharge A : courant minimal = 10A
Groupe de recharge B : courant minimal = 20A

Le groupe de recharge B est d'abord alimenté avec 20A et le groupe de recharge A reçoit le reste.

</div>
<div className="col col--6 text--center">

![Gestion de la charge multiniveau – Figure 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Gestion de la charge multiniveau – Figure 7](/img/konfiguration-multilevel-lastmanagement/07.png)

</div>
</div>

### Comportement de la gestion de la charge multiniveau en cas de panne d'Internet

Toutes les bornes de recharge Pico doivent être réglées avec le paramètre de perte de connexion « Courant max. (par groupe) » (Max. Strom (pro Gruppe)). Les deux autres modes ne sont autorisés que pour le fonctionnement individuel.

Fonctionnement :
Les groupes de recharge concernés par une perte de connexion Internet sont ramenés à la valeur définie pour le groupe. La répartition du courant est effectuée automatiquement par le gestionnaire de recharge, en tenant compte des sessions de recharge actives.
La gestion de la charge multiniveau part alors du principe que les branches perdues soutirent le courant de groupe défini et le déduit du courant résiduel disponible.

La partie fonctionnelle de l'installation disposant d'une connexion Internet active continue de fonctionner en mode normal avec cette restriction définie.

![Gestion de la charge multiniveau – Figure 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Délestage avec MLM

Le délestage peut être réalisé selon différentes variantes à l'aide du
signal RSE du fournisseur d'électricité.

- Entrées matérielles à l'arrière du Pico pour la transmission à un groupe Pico.

- Signal sur les entrées du compteur et transmission via le MLM à tous les groupes de charge.


Plus d'informations sous 

[Configuration du délestage avec MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-du-délestage)

[Configuration du délestage au moyen d'entrées externes](/produkte/pico-ladestation#délestage-entrées-externes)

![Gestion de la charge multiniveau – Figure 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Entrées matérielles Pico

![Gestion de la charge multiniveau – Figure 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Délestage basé sur le cloud (MLM)

### Valeurs limites de la gestion de la charge multiniveau

Nombre maximal de Pico et de points de compteurs de référence : 1000 unités

Nombre maximal de points de référence virtuels et matériels : 50 unités, 6 unités en série

Taille maximale d'un groupe de bornes de recharge : 200 bornes de recharge

Nombre minimal de Pico par groupe de bornes de recharge : 1 unité

Nombre minimal de points de référence dans le MLM : 1 unité (matériel ou virtuel)

Nombre maximal de groupes de recharge : 60 groupes


Exemples de configurations minimales :

- 1 départ avec 1-200 bornes de recharge, y compris 1 point de référence


Exemples d'une configuration maximale typique :

- 60 départs de 16 bornes de recharge chacun, y compris 8 points de référence. (Grands lotissements avec RCP (regroupement dans le cadre de la consommation propre))


- 6 départs de 150 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)

- 4 départs de 200 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)


## Configurer le MLM

[En savoir plus](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
