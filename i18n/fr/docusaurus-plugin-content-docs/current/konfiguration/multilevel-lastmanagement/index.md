---
title: 'Gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinaire Gestion de la charge multiniveau (50 min)'
sidebar_label: 'Gestion de la charge multiniveau'
---
<Menueweg>Gestion de charge à plusieurs niveaux</Menueweg>

<Video src="YiiACL00jko" title="Vidéo YouTube, enregistrement du webinaire de lancement de la gestion de la charge multiniveau" />

Webinaire Gestion de la charge multiniveau (50 min)

### Prérequis techniques pour utiliser la gestion de la charge multiniveau

- Version du firmware Pico 0.0.25 ou supérieure --> [Effectuer une mise à jour du firmware](/konfiguration/firmware-update)

- Toutes les règles si/alors impliquant des Pico ont été supprimées, afin qu'aucune commande contraire ne soit envoyée au MLM.

- La gestion de la charge du MLM fonctionne uniquement avec Telstar CT / Telstar 80A ; en alternative, les Pico peuvent être câblées directement.


## Gestion de la charge multiniveau dynamique

La gestion de la charge multiniveau dynamique coordonne les capacités de limitation et de régulation dynamique des différents groupes de charge au niveau du raccordement de l'immeuble et du site.

Sa tâche consiste à mettre à disposition des groupes de charge subordonnés les capacités de courant encore disponibles à chaque point de référence, et à protéger ainsi les points de dérivation contre les surcharges.

Exemples de points de dérivation importants :

- Raccordement du site

- Raccordement de l'immeuble

- Ligne d'alimentation de sous-distribution

- Départ vers le garage

Dans le même temps, la gestion de la charge multiniveau permet l'optimisation solaire et offre des fonctions d'écrêtement des pointes de charge.

Limites de la gestion de la charge multiniveau dynamique :

- Max. 1000 appareils (bornes de recharge + compteurs de référence)

- Max. 50 ramifications de branches (points de référence)

![Gestion de la charge multiniveau – Illustration 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Protection contre les surcharges des points de dérivation (raccordement du site, sous-distributions, raccordement de l'immeuble)

Pour toutes les branches créées dans la gestion de la charge multiniveau, des valeurs de courant maximales peuvent être définies. Elles agissent comme limite supérieure absolue du soutirage de courant et correspondent à la valeur de protection des lignes d'alimentation.

Une branche ne peut exister que selon le schéma suivant :

- Branche avec « charges non mesurées » :
    D'autres consommateurs ou producteurs, qui ne sont pas exclusivement des groupes Pico, se trouvent derrière cette branche. Un compteur de référence est nécessaire pour la détermination.

- Branche sans « charges non mesurées », virtuelle :
    Les consommateurs en aval se composent exclusivement de groupes de charge Pico ou de « branches avec charges non mesurées » et du compteur de référence correspondant.
    Le courant total peut donc être obtenu à partir de la somme de ces mesures disponibles et correspond à 100% du courant à contrôler.

    Domaines d'application :
    \- Limitation du courant total du site au moyen de sous-distributions mesurées (économie d'un compteur de site)
    \- Protection de plusieurs câbles plats dérivés à partir d'un départ protégé


![Gestion de la charge multiniveau – Illustration 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Gestion de la charge multiniveau – Illustration 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Branche virtuelle (violette) limitée sur la base d'une branche avec charges non mesurées et de groupes Pico.

### Exemple de configuration d'un lotissement avec MLM

![Gestion de la charge multiniveau – Illustration 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Optimisation solaire

L'optimisation solaire permet une répartition efficace du courant excédentaire vers les groupes de recharge Pico subordonnés. Elle nécessite au moins une « branche avec charges non mesurées » et le compteur de référence correspondant.

L'optimisation ne peut être effectuée qu'une seule fois en série (de haut en bas dans l'arborescence) ou plusieurs fois dans des ramifications parallèles.

Une optimisation solaire peut ainsi être mise en œuvre sur l'ensemble du site ou uniquement par bâtiment.

Exemple :

- Optimisation du site : optimisation solaire active sur la branche, référence sur le compteur du site ou branche créée virtuellement sur la base des sous-branches mesurées.

- Optimisation du bâtiment : optimisation solaire active sur plusieurs branches avec référence sur les compteurs respectifs des immeubles.


Avec l'optimisation solaire sur le raccordement du site, l'excédent produit dans l'immeuble B est également à disposition de l'infrastructure de recharge de l'immeuble A.

![Gestion de la charge multiniveau – Illustration 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Courant de charge minimal : priorisation indirecte et écrêtement des pointes de charge

<div className="row">
<div className="col col--6">

Chaque groupe de charge Pico peut être doté d'un courant de charge minimal dépendant de l'heure.

Le réglage s'effectue de manière flexible pour chaque heure de la journée.

Cette fonction permet de mettre à disposition un courant de charge minimal indépendamment des autres optimisations parallèles.

Seul un dépassement de la limitation de courant d'une branche aurait une influence contraire.

Dans la mesure où le courant de charge minimal peut être garanti, celui-ci limite le soutirage direct depuis le réseau à la valeur réglée. 

Si une optimisation solaire est en place, le courant de charge disponible peut toutefois dépasser le minimum réglé et est augmenté en conséquence.

Exemple d'application :

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
<div className="col col--6 bild--mitte">

![Gestion de la charge multiniveau – Illustration 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Gestion de la charge multiniveau – Illustration 7](/img/konfiguration-multilevel-lastmanagement/07.png)

</div>
</div>

### Comportement de la gestion de la charge multiniveau en cas de panne Internet

Toutes les bornes de recharge Pico doivent être configurées avec le paramètre de perte de connexion « Courant max. (par groupe) » (Max. Strom (pro Gruppe)). Les deux autres modes ne sont admis que pour le fonctionnement individuel.

Fonctionnement :
Les groupes de recharge touchés par la perte d'Internet sont ramenés à la valeur définie pour le groupe. La répartition du courant est effectuée automatiquement par le gestionnaire de recharge, en tenant compte des sessions de recharge actives.
La gestion de la charge multiniveau part alors du principe que les branches perdues soutirent le courant de groupe défini et le déduit du courant résiduel disponible.

La partie fonctionnelle de l'installation disposant d'une connexion Internet active continue de fonctionner en mode normal avec cette restriction définie.

![Gestion de la charge multiniveau – Illustration 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Délestage avec MLM

Le délestage peut être réalisé selon différentes variantes à l'aide du
signal RSE du fournisseur d'électricité.

- Entrées matérielles à l'arrière de la Pico pour la transmission à un groupe Pico.

- Signal sur les entrées du compteur et transmission via le MLM à tous les groupes de charge.


Plus d'informations sous 

[Configuration du délestage avec MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-du-délestage)

[Configuration du délestage au moyen d'entrées externes](/produkte/pico-ladestation#délestage-entrées-externes)

![Gestion de la charge multiniveau – Illustration 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Entrées matérielles Pico

![Gestion de la charge multiniveau – Illustration 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Délestage basé sur le cloud (MLM)

### Valeurs limites de la gestion de la charge multiniveau

Nombre maximal de Pico et de points de compteurs de référence : 1000 unités

Nombre maximal de points de référence virtuels et matériels : 50 unités, 6 unités en série

Taille maximale d'un groupe de bornes de recharge : 200 bornes de recharge

Nombre minimal de Pico par groupe de bornes de recharge : 1 unité

Nombre minimal de points de référence dans le MLM : 1 unité (matériel ou virtuel)

Nombre maximal de groupes de recharge : 60 groupes


Exemples de configurations minimales :

- 1 départ avec 1 à 200 bornes de recharge, y compris 1 point de référence


Exemples d'une configuration maximale typique :

- 60 départs avec 16 bornes de recharge chacun, y compris 8 points de référence. (Grands lotissements avec RCP (regroupement dans le cadre de la consommation propre))


- 6 départs avec 150 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)

- 4 départs avec 200 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)


## Configurer le MLM

[En savoir plus](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
