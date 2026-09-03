---
title: 'Configuration de la gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configuration d''une gestion de la charge multiniveau (MLM) dynamique'
sidebar_label: 'Configuration de la gestion de la charge multiniveau'
---
## Configuration d'une gestion de la charge multiniveau (MLM) dynamique

La configuration d'une gestion de la charge multiniveau se fait dans la section « Gestion de la charge multiniveau » (Multilevel Lastmanagement) de la navigation principale

La fonction permet :

- la commande dynamique de plusieurs groupes de recharge Pico statiques

- la limitation des puissances de recharge sur des points de référence à l'intérieur de l'installation ou du site

- des optimisations solaires

- la réduction des pointes de charge

- la priorisation des groupes de recharge


![Configuration de la gestion de la charge multiniveau – illustration 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Définition des termes

La gestion de la charge multiniveau peut être considérée comme un arbre, avec les termes et utilisations suivants :

- le tronc (point de raccordement principal de l'installation)

- les branches (endroits limitants tels que dérivations, raccordements d'immeuble, sous-distributions, départs de sommation)

- les feuilles (groupes de recharge Pico statiques)




Le tronc ainsi que les branches peuvent assumer plusieurs fonctions :

- limitation de courant (protection maximale)

- optimisation solaire ACTIVÉE ou DÉSACTIVÉE

- charges non mesurées présentes (actives ou inactives)




Charges non mesurées :

Une charge non mesurée correspond à un producteur ou un consommateur qui ne correspond pas à un groupe de bornes de recharge Pico. Pour pouvoir tenir compte dynamiquement de cette production ou de cette charge, un matériel de comptage doit être mis à disposition comme référence. (Branche mesurée)

La branche peut aussi être limitée de manière statique sans compteur de référence, mais elle doit alors être limitée à un maximum fonctionnel au niveau de la protection, en tenant compte de la charge de base.

Branches typiques avec des charges non mesurées :

- raccordements d'immeuble (appartements, installations solaires, batteries de stockage, éclairage extérieur)

- sous-distributions (mise en réseau de plusieurs complexes de bâtiments, SD est, SD ouest, ...)

- départs de mobilité électrique (consommation en veille des Pico et éclairage du garage)


![Configuration de la gestion de la charge multiniveau – illustration 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configuration de la gestion de la charge multiniveau – illustration 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Ajouter ou supprimer une branche

Ajouter :

Sélectionne le tronc ou la branche et crée une branche ou dérivation supplémentaire à l'aide de « Ajouter une branche » (Ast hinzufügen).

Supprimer :

En sélectionnant la branche correspondante et en utilisant la fonction « Supprimer » (Löschen), la branche choisie ainsi que toutes les branches qui y sont rattachées sont supprimées.

Pour conserver les éléments en aval, les branches et les groupes peuvent être rattachés au préalable à une autre branche ou au tronc par glisser-déposer.





![Configuration de la gestion de la charge multiniveau – illustration 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Ajouter des groupes de bornes de recharge à l'arbre

Les groupes de bornes de recharge encore non attribués et correctement configurés pour le MLM se trouvent sur le côté droit.

Ils peuvent être rattachés aux branches par glisser-déposer et être également déplacés par glisser-déposer à l'intérieur de la configuration.



Remarque :
La condition pour l'utilisation dans le MLM est que le réglage en cas de perte de connexion soit configuré sur « Courant max. (par groupe) » (Max. Strom (pro Gruppe)).

Celui-ci peut être adapté sur une borne de recharge Pico dans la « Configuration » (Konfiguration).



![Configuration de la gestion de la charge multiniveau – illustration 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configuration de la gestion de la charge multiniveau – illustration 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Optimisation solaire et courant minimal par groupe de recharge

Configuration de la branche :

L'optimisation solaire est possible 1x sur le tronc (optimisée sur le site) ou plusieurs fois en parallèle sur des branches avec des charges non mesurées actives, p. ex. des raccordements d'immeuble.

Selon le choix, l'excédent solaire est optimisé sur tous les groupes de bornes de recharge ou seulement sur une partie de ceux-ci.





Configuration du groupe :

Pour que l'optimisation solaire produise également l'effet correspondant, un courant de recharge minimal réduit doit être attribué temporairement aux groupes de bornes à optimiser.
Ce courant de recharge minimal est défini sur le groupe de recharge correspondant (configuration du groupe) et correspond au soutirage réseau maximal possible pour le groupe de recharge pendant les heures définies.

En même temps, le réglage du courant de recharge minimal permet aussi de pratiquer l'écrêtage des pointes de charge.

Chaque groupe peut être configuré de manière différente.

Les groupes avec un courant de recharge minimal plus élevé sont traités en priorité lors de la répartition du courant réseau disponible.

![Configuration de la gestion de la charge multiniveau – illustration 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configuration de la gestion de la charge multiniveau – illustration 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Enregistrer et activer la configuration

Les modifications de la configuration ne sont enregistrées que si la configuration est également activée.

Si l'activation ne peut pas être effectuée en raison d'erreurs de configuration, cela peut avoir les causes suivantes :

- Le groupe de recharge n'est pas correctement configuré pour le MLM (le réglage en cas de panne d'Internet n'est pas défini sur Courant max. par groupe)

- Certains appareils pertinents pour le MLM ne sont pas en ligne au moment de l'enregistrement. (les mettre en ligne)


![Configuration de la gestion de la charge multiniveau – illustration 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Supprimer la configuration du MLM

La configuration d'un MLLM peut être supprimée entièrement en appuyant sur un bouton afin de saisir une nouvelle configuration.

![Configuration de la gestion de la charge multiniveau – illustration 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuration du délestage

Le MLM dispose d'une commande de délestage intégrée.

Cette commande peut être utilisée à la place des entrées matérielles à l'arrière des bornes de recharge Pico.

Remarques :

- Les signaux raccordés directement au matériel Pico ne peuvent pas être surchargés par cette fonction.

- La fonction nécessite une connexion Internet active pour fonctionner. En cas de perte d'Internet, la valeur de panne d'Internet réglée des groupes Pico est utilisée.


La fonction permet d'interpréter un ou plusieurs signaux numériques des fournisseurs d'électricité et d'attribuer une puissance de recharge réduite à tous les groupes de bornes de recharge du MLM.

Les signaux de commande sont câblés sur une ou deux entrées de compteur (E1) situées à proximité.

Les matériels smart-me Telstar CT et Telstar 80A sont compatibles à cet effet.

Remarque :
Pour que les entrées puissent être utilisées, elles doivent être configurées côté matériel sur « Entrée numérique » (Digitaler Eingang). (Réglages du compteur, E1 --> Entrée numérique)

Configurations de la commande :

Avec un seul signal :

- 1 niveau : 0 % de réduction, réduction variable (10-100 %)


Avec deux signaux :

- 4 niveaux : 0 % de réduction, réduction variable, réduction variable, 100 % de réduction

- 3 niveaux : 0 % de réduction, réduction variable (les deux au même niveau), 100 % de réduction


Application des pourcentages à l'EnWG14a en Allemagne :

- Pour les installations de 22 kW, une réduction de 82 % correspond à la promesse de 4200 W de puissance minimale par appareil dans l'installation.

- Pour les installations de 11 kW, une réduction de 73 % correspond à la promesse de 4200 W de puissance minimale par appareil dans l'installation.


Interprétation du signal :

Le signal peut être interprété de différentes manières.

Si le signal du fournisseur d'électricité est retiré en cas de délestage (230 V --> 0 V), alors « Actif à l'état bas » (Low-Aktiv) est la configuration correcte.

Aucun signal (0) = 1 = l'énergie disponible est réduite

Si le signal du fournisseur d'électricité est appliqué en cas de délestage (0 V --> 230 V), il faut choisir « Actif à l'état haut » (High-Aktiv).

Signal (1) = 1 = l'énergie disponible est réduite.

[Câblage et configuration des entrées de compteur](https://sites.google.com/smart-me.com/wiki/schnittstellen/ein_und_ausgaenge)

![Configuration de la gestion de la charge multiniveau – illustration 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configuration de la gestion de la charge multiniveau – illustration 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configuration de la gestion de la charge multiniveau – illustration 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Activer et désactiver le processeur MLM

La configuration MLM peut être désactivée et réactivée à tout moment.

- Arrête le processus de calcul et l'attribution active de valeurs issues des points de référence.

- Met la valeur de panne d'Internet définie à la libre disposition de tous les groupes de charge subordonnés.


Définis la valeur sur actif ou inactif, puis enregistre la configuration afin de la communiquer au processeur.

![Configuration de la gestion de la charge multiniveau – illustration 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Exemple de configuration : maison avec départ de mobilité électrique + éclairage du garage, installation solaire et écrêtage des pointes de charge à midi

- Le tronc correspond ici au raccordement d'immeuble

- La protection du raccordement correspond à 100 A par phase.

- L'optimisation solaire se situe ici sur le raccordement d'immeuble.

- La production de l'installation solaire ainsi que la consommation propre de la maison sont mesurées et prises en compte au moyen du compteur « Hausanschluss Telstar 80A ».


![Configuration de la gestion de la charge multiniveau – illustration 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configuration de la gestion de la charge multiniveau – illustration 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

Le départ de mobilité électrique subordonné est ici mesuré activement afin de tenir compte de l'éclairage du garage. Les groupes de recharge doivent ainsi réagir dynamiquement à l'éclairage du garage.

- L'éclairage du garage est pris en compte avec le compteur de référence « E-Mobilitätsabgang 63A Telstar 80A ».

- La protection du départ correspond à 63 A par phase.


![Configuration de la gestion de la charge multiniveau – illustration 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configuration de la gestion de la charge multiniveau – illustration 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

Pour que l'optimisation solaire produise son effet, la quantité de courant minimale du courant de recharge est réduite au cours de la journée.

- La quantité de courant minimale correspond au soutirage réseau maximal possible à l'heure définie.

- Dès que la quantité de courant minimale est couverte à 100 % par l'installation solaire, les bornes reçoivent en plus l'excédent supplémentaire de l'installation solaire.

- Optimisation solaire pour toute la semaine de 6:00 à 17:00, courant de recharge minimal de 15 A par phase

- Écrêtage des pointes à midi : les recharges de 12:00 à 13:00 ne sont possibles qu'en cas d'excédent solaire, le soutirage réseau reste à 0 A

- La recharge nocturne de 18:00 à 22:00 est possible avec 50 % de la capacité.

- La recharge nocturne de 22:00 jusqu'à 7:00 du matin est possible avec 100 % de la capacité.
    (p. ex. exploitation des heures creuses)


![Configuration de la gestion de la charge multiniveau – illustration 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configuration de la gestion de la charge multiniveau – illustration 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Exemple de configuration : site avec plusieurs maisons, installations solaires et départs de mobilité électrique

- Site RCP (regroupement dans le cadre de la consommation propre) avec 3 maisons

- Chaque maison possède un garage souterrain

- Plusieurs groupes de recharge dans les garages souterrains

- TG1 possède des places de parc extérieures pour les visiteurs ainsi que des places de parc pour les locataires

- Les maisons TG1 et TG2 possèdent des installations solaires

- Optimisation solaire sur le site, afin que TG3 puisse également profiter de l'énergie solaire.

- Protection du site 300 A par phase

- Protections des maisons 180 A par phase

- Départs de mobilité électrique 63 A ou 32 A par phase


![Configuration de la gestion de la charge multiniveau – illustration 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- La valeur en ampères correspond à la protection de la ligne d'alimentation

- Le point de mesure est protégé mais lui-même non mesuré.
    Comme les branches en aval comportent toutes des mesures et que celles-ci correspondent à 100 % de la consommation du site, le tronc peut être limité virtuellement.

- Optimisation du courant solaire sur le tronc (site) active. (disponibilité du courant solaire pour les trois maisons)


![Configuration de la gestion de la charge multiniveau – illustration 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configuration de la gestion de la charge multiniveau – illustration 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1 : raccordement d'immeuble du bâtiment 1 sur le site

- Protection 180 A par phase

- Charges non mesurées actives : appartements, chauffage, éclairage, parties communes, solaire

- Prise en compte dynamique des appartements et des pompes à chaleur


![Configuration de la gestion de la charge multiniveau – illustration 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configuration de la gestion de la charge multiniveau – illustration 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 départ de mobilité électrique

- Protection 63 A par phase

- Charges non mesurées actives : éclairage du garage et ventilation en plus
    des bornes de recharge électriques

- Prise en compte dynamique de l'éclairage du garage et de la ventilation


![Configuration de la gestion de la charge multiniveau – illustration 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configuration de la gestion de la charge multiniveau – illustration 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Places de parc pour visiteurs du site (bornes de recharge publiques)

- Disponibilité énergétique élevée et priorisation à un prix de vente plus élevé.
    Publié via le backend eCarUp. (authentification par le backend)

- En permanence 100 % de la capacité possible depuis le réseau + couverture solaire.

- Écrêtage des pointes de charge à midi de 12:00 à 13:00 seulement 23 A par phase depuis le réseau + excédent solaire.

- Protection du câble 63 A par phase


![Configuration de la gestion de la charge multiniveau – illustration 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configuration de la gestion de la charge multiniveau – illustration 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Places de parc pour locataires du site

- Disponibilité énergétique et priorisation moyennes, accent sur l'énergie solaire pendant la journée.

- En permanence 50 % de la capacité possible depuis le réseau.

- Protection du câble 32 A par phase.

- Écrêtage des pointes de charge à midi 0 A de 12:00 à 13:00.
    Recharge solaire uniquement possible si la production n'est pas utilisée par le site à d'autres fins.


![Configuration de la gestion de la charge multiniveau – illustration 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configuration de la gestion de la charge multiniveau – illustration 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Parties de l'installation non traitées :

- Les raccordements d'immeuble et les départs de mobilité électrique des maisons 2 et 3 sont identiques dans leur type de configuration.

- Les 4 groupes de recharge du garage souterrain 3 (TG3) sont configurés de manière similaire aux places de parc pour locataires du garage souterrain 1 (TG1)

- Chaque groupe de recharge peut développer des comportements distincts et recevoir également des courants d'alimentation de secours différents en cas de panne d'Internet.




![Configuration de la gestion de la charge multiniveau – illustration 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
