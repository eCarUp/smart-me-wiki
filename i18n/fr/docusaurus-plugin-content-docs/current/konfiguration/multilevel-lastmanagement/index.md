---
title: 'Gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinaire Gestion de la charge multiniveau (50 min)'
sidebar_label: 'Gestion de la charge multiniveau'
---
<Video src="YiiACL00jko" title="Vidéo YouTube, enregistrement du webinaire de lancement de la gestion de la charge multiniveau" />

Webinaire Gestion de la charge multiniveau (50 min)

### Conditions techniques pour l'utilisation de la gestion de la charge multiniveau

- Version du firmware Pico 0.0.25 ou supérieure --> [Effectuer la mise à jour du firmware](/konfiguration/firmware-update)

- Toutes les règles si/alors avec Pico ont été supprimées afin de ne pas envoyer d'ordres contradictoires au MLM.

- État : 12.03.2024
    Pas de prétention au délestage via les contacts d'entrée Telstar --> la solution suivra dans une prochaine version du MLM.

- La gestion de la charge fonctionne uniquement avec Telstar CT / Telstar 80A ou Nimbus


## Gestion de la charge multiniveau dynamique

La gestion de la charge multiniveau dynamique coordonne les capacités limitantes et dynamiques des différents groupes de charge au niveau du raccordement du bâtiment et du site.

La tâche consiste à mettre les capacités de courant encore disponibles à chaque point de référence à la disposition des groupes de charge subordonnés, et ainsi à protéger les points de ramification contre les surcharges.

Exemples de points de ramification importants :

- Raccordement du site

- Raccordement du bâtiment

- Ligne d'alimentation du sous-tableau

- Départ du garage


Dans le même temps, la gestion de la charge multiniveau permet l'optimisation solaire et offre des fonctions de lissage des pointes de charge.

Limites de la gestion de la charge multiniveau dynamique :

- Max. 1000 appareils (bornes de recharge + compteurs de référence)

- Max. 50 ramifications (points de référence)


![Gestion de la charge multiniveau – illustration 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Protection contre les surcharges des points de ramification (raccordement du site, sous-tableaux, raccordement du bâtiment)

Des valeurs de courant maximales peuvent être définies pour toutes les branches créées dans la gestion de la charge multiniveau. Elles agissent comme limite supérieure absolue du soutirage de courant et correspondent à la valeur de protection des lignes d'alimentation.

Une branche ne peut exister que selon le schéma suivant :

- Branche avec « charges non mesurées » :
    D'autres consommateurs ou producteurs, qui ne sont pas exclusivement des groupes Pico, se trouvent derrière cette branche. Un compteur de référence est nécessaire pour la détermination.

- Branche sans « charges non mesurées », virtuelle :
    Les consommateurs en aval se composent exclusivement de groupes de charge Pico ou de « branches avec charges non mesurées » et du compteur de référence correspondant.
    Le courant total peut donc être formé à partir de la somme de ces mesures disponibles et correspond à 100 % du courant à contrôler.

    Domaines d'application :
    \- Limitation du courant total du site au moyen de sous-tableaux mesurés (économie d'un compteur de site)
    \- Protéger plusieurs câbles plats se ramifiant depuis un départ protégé


![Gestion de la charge multiniveau – illustration 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Gestion de la charge multiniveau – illustration 3](/img/konfiguration-multilevel-lastmanagement/03.png)

La branche virtuelle (violet) limite sur la base d'une branche avec charges non mesurées et de groupes Pico.

### Exemple de configuration d'un complexe immobilier avec MLM

![Gestion de la charge multiniveau – illustration 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Optimisation solaire

L'optimisation solaire permet une répartition efficace du courant excédentaire entre les groupes de recharge Pico subordonnés. Elle nécessite au moins une « branche avec charges non mesurées » et le compteur de référence correspondant.

L'optimisation ne peut se faire qu'une seule fois en série (arborescence du haut vers le bas) ou plusieurs fois dans des ramifications parallèles.

Il est ainsi possible de mettre en œuvre une optimisation solaire sur l'ensemble du site ou uniquement par bâtiment.

Exemple :

- Optimisation du site : optimisation solaire active sur la branche, référence sur le compteur du site ou branche créée virtuellement sur la base des sous-branches mesurées.

- Optimisation du bâtiment : optimisation solaire active sur plusieurs branches avec référence sur les compteurs respectifs des bâtiments.


Avec l'optimisation solaire sur le raccordement du site, l'infrastructure de recharge du bâtiment A dispose également de l'excédent produit par le bâtiment B.

![Gestion de la charge multiniveau – illustration 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Courant de recharge minimal : priorisation indirecte et lissage des pointes de charge

Chaque groupe de charge Pico peut être doté d'un courant de recharge minimal dépendant de l'heure.

Le réglage se fait de manière flexible pour chaque heure de la journée.

Cette fonction permet de mettre à disposition un courant de recharge minimal indépendamment des autres optimisations parallèles.





Seul le dépassement d'une limitation de courant d'une branche aurait une influence contraire.

Pour autant que le courant de recharge minimal puisse être garanti, celui-ci limite le soutirage direct depuis le réseau à la valeur réglée. 

Si une optimisation solaire est présente, le courant de recharge disponible peut toutefois dépasser le minimum réglé et est augmenté en conséquence.

Exemple d'application :

Réduire le courant de recharge pendant les périodes de production afin de réduire les pointes de charge.

Réduire le courant de recharge pendant la pause de midi afin de réduire les pointes de charge.

Réduire le courant de recharge pendant la journée afin d'obtenir une priorisation plus élevée du courant solaire.

Privilégier les groupes de places de stationnement extérieures par rapport aux places du parking souterrain (priorisation des groupes)



Priorisation

Le réglage du courant minimal disponible d'un groupe suppose une certaine priorité par rapport aux autres groupes de bornes de recharge. Le groupe de bornes de recharge disposant du courant minimal disponible le plus élevé à un moment donné est toujours traité en priorité par l'algorithme.

Exemple :

26 A par phase sont actuellement disponibles pour la répartition dans le MLM :
Groupe de recharge A : courant minimal = 10A
Groupe de recharge B : courant minimal = 20A

Le groupe de recharge B est d'abord alimenté avec 20A et le groupe de recharge A reçoit le reste.

![Gestion de la charge multiniveau – illustration 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Gestion de la charge multiniveau – illustration 7](/img/konfiguration-multilevel-lastmanagement/07.png)

### Comportement de la gestion de la charge multiniveau en cas de panne d'Internet

Toutes les bornes de recharge Pico doivent être réglées avec le paramètre de perte de connexion « Courant max. (par groupe) » (Max. Strom (pro Gruppe)). Les deux autres modes ne sont autorisés que pour le fonctionnement individuel.

Fonction :
Les groupes de recharge touchés par la perte d'Internet sont ramenés à la valeur définie par le groupe. La répartition du courant est effectuée automatiquement par le gestionnaire de recharge et tient compte des sessions de recharge actives.
La gestion de la charge multiniveau part alors du principe que les branches perdues soutirent le courant de groupe défini et les déduit du courant résiduel disponible.

La partie fonctionnelle de l'installation disposant d'une connexion Internet active continue de fonctionner en mode normal avec cette restriction définie.

![Gestion de la charge multiniveau – illustration 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Délestage avec le MLM

Le délestage peut être réalisé de différentes manières à l'aide du
signal RSE du fournisseur d'électricité.

- Entrées matérielles Pico à l'arrière pour la transmission à un groupe Pico.

- Signal sur les entrées du compteur et transmission via le MLM à tous les groupes de charge.


Plus d'informations sous 

[Configuration du délestage avec le MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-du-délestage)

[Configuration du délestage au moyen d'entrées externes](/produkte/pico-ladestation#délestage-entrées-externes)

![Gestion de la charge multiniveau – illustration 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Entrées matérielles Pico

![Gestion de la charge multiniveau – illustration 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Délestage basé sur le cloud (MLM)

### Valeurs limites de la gestion de la charge multiniveau

Nombre maximal de Picos et de points de comptage de référence : 1000 unités

Nombre maximal de points de référence virtuels et matériels : 50 unités, 6 unités en série

Taille maximale d'un groupe de bornes de recharge : 200 bornes de recharge

Nombre minimal de Picos par groupe de bornes de recharge : 1 unité

Nombre minimal de points de référence dans le MLM : 1 unité (matériel ou virtuel)

Nombre maximal de groupes de recharge : 60 groupes


Exemples de dimensionnements minimaux :

- 1 départ avec 1 à 200 bornes de recharge, y compris 1 point de référence


Exemples d'un dimensionnement maximal typique :

- 60 départs avec 16 bornes de recharge chacun, y compris 8 points de référence, peuvent être créés. (Grands complexes immobiliers avec RCP)


- 6 départs avec 150 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)

- 4 départs avec 200 bornes chacun, y compris 50 points de référence (complexes de stationnement publics)


## Configurer le MLM

[En savoir plus](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
