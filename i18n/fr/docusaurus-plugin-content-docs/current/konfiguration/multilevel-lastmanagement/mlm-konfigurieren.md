---
title: 'Configuration de la gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configurer une gestion de la charge multiniveau (MLM) dynamique'
sidebar_label: 'Configuration de la gestion de la charge multiniveau'
---
## Configurer une gestion de la charge multiniveau (MLM) dynamique

La gestion de la charge multiniveau se configure dans la section « Gestion de la charge multiniveau » (Multilevel Lastmanagement) de la navigation principale

Cette fonction permet :

- La commande dynamique de plusieurs groupes de recharge Pico statiques

- La limitation des puissances de recharge à des points de référence au sein de l'installation ou du site

- Les optimisations solaires

- Les réductions des pointes de charge

- Les priorisations des groupes de recharge

![Configuration de la gestion de la charge multiniveau – figure 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Définition des termes

La gestion de la charge multiniveau peut être vue comme un arbre, avec les termes et usages suivants :

- Tronc (point de raccordement principal de l'installation)

- Branches (points limitants tels que dérivations, raccordements d'immeuble, tableaux divisionnaires, départs collectifs)

- Feuilles (groupes de recharge Pico statiques)




Le tronc et les branches peuvent assumer plusieurs fonctions :

- Limitation du courant (protection maximale)

- Optimisation solaire ACTIVÉE ou DÉSACTIVÉE

- Présence de charges non mesurées (active ou inactive)




Charges non mesurées :

Une charge non mesurée correspond à un producteur ou à un consommateur qui ne fait pas partie d'un groupe de bornes de recharge Pico. Pour pouvoir prendre en compte dynamiquement cette production ou cette charge, un compteur matériel doit être mis à disposition comme référence. (Branche mesurée)

La branche peut aussi être limitée de manière statique sans compteur de référence, mais elle doit alors être limitée à un maximum fonctionnel de la protection, en tenant compte de la charge de base.

Branches typiques avec des charges non mesurées : 

- Raccordements d'immeuble (appartements, installations solaires, stockage par batterie, éclairage extérieur)

- Tableaux divisionnaires (interconnexion de plusieurs complexes de bâtiments, UV Ost, UV West,...)

- Départs e-mobilité (consommation en veille des Pico et éclairage du garage)


![Configuration de la gestion de la charge multiniveau – figure 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configuration de la gestion de la charge multiniveau – figure 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Ajouter ou supprimer une branche

Ajouter :

Sélectionnez le tronc ou une branche et créez une branche ou une dérivation supplémentaire avec « Ajouter une branche » (Ast hinzufügen).

Supprimer :

En sélectionnant la branche concernée et la fonction « Supprimer » (Löschen), la branche choisie ainsi que toutes les branches qui en dépendent sont supprimées.

Pour conserver les éléments en aval, les branches et les groupes peuvent être rattachés au préalable à une autre branche ou au tronc par glisser-déposer.





![Configuration de la gestion de la charge multiniveau – figure 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Ajouter des groupes de bornes de recharge à l'arbre

<div className="row">
<div className="col col--7">

Les groupes de bornes de recharge correctement configurés pour le MLM et pas encore attribués se trouvent sur le côté droit.

Ils peuvent être rattachés aux branches par glisser-déposer et également déplacés par glisser-déposer au sein de la configuration.

Remarque :
Pour être utilisé dans le MLM, le paramètre de perte de connexion doit être configuré sur « Courant max. (par groupe) » (Max. Strom (pro Gruppe)).

Ce paramètre peut être modifié sur une borne de recharge Pico sous « Configuration » (Konfiguration).

</div>
<div className="col col--5 text--center">

![Configuration de la gestion de la charge multiniveau – figure 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configuration de la gestion de la charge multiniveau – figure 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

</div>
</div>

### Optimisation solaire et courant minimal par groupe de recharge

<div className="row">
<div className="col col--6">

Configuration des branches :

L'optimisation solaire est possible une fois sur le tronc (optimisation à l'échelle du site) ou plusieurs fois en parallèle sur des branches avec des charges non mesurées actives, p. ex. des raccordements d'immeuble.

Selon le choix effectué, l'excédent solaire est optimisé sur tous les groupes de bornes de recharge ou seulement sur une partie d'entre eux.

Configuration des groupes :

Pour que l'optimisation solaire produise l'effet voulu, un courant de recharge minimal réduit doit être attribué temporairement aux groupes de bornes à optimiser.
Ce courant de recharge minimal est défini sur le groupe de recharge concerné (configuration des groupes) et correspond au soutirage maximal possible du réseau pour le groupe de recharge durant les heures définies.

Le réglage du courant de recharge minimal permet en même temps d'écrêter les pointes de charge.

Chaque groupe peut être configuré différemment.

Les groupes ayant un courant de recharge minimal plus élevé sont traités en priorité lors de la répartition du courant réseau disponible.

</div>
<div className="col col--6 text--center">

![Configuration de la gestion de la charge multiniveau – figure 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configuration de la gestion de la charge multiniveau – figure 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

</div>
</div>

### Enregistrer et activer la configuration

Les modifications de la configuration ne sont enregistrées que si la configuration est également activée.

Si l'activation ne peut pas être effectuée en raison d'erreurs de configuration, cela peut être dû aux points suivants :

- Le groupe de recharge n'est pas correctement configuré pour le MLM (le paramètre de panne Internet n'est pas réglé sur Courant max. par groupe)

- Certains appareils pertinents pour le MLM ne sont pas en ligne au moment de l'enregistrement. (les mettre en ligne)

![Configuration de la gestion de la charge multiniveau – figure 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Supprimer la configuration du MLM

La configuration d'un MLLM peut être entièrement supprimée d'une simple pression sur un bouton afin de saisir une nouvelle configuration.

![Configuration de la gestion de la charge multiniveau – figure 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuration du délestage

<div className="row">
<div className="col col--7">

Le MLM dispose d'une commande de délestage intégrée.

Cette commande peut être utilisée à la place des entrées matérielles situées à l'arrière des bornes de recharge Pico. 

Remarques : 

- Les signaux raccordés directement au matériel Pico ne peuvent pas être outrepassés par cette fonction. 

- La fonction nécessite une connexion Internet active pour fonctionner. En cas de perte d'Internet, la valeur de panne Internet réglée pour les groupes Pico est utilisée.

La fonction permet d'interpréter un ou plusieurs signaux numériques des fournisseurs d'énergie et d'attribuer une puissance de recharge réduite à tous les groupes de bornes de recharge du MLM.

Les signaux de commande sont câblés sur une ou deux entrées de compteur (E1) situées à proximité.

Les matériels compatibles sont smart-me Telstar CT et Telstar 80A.

Remarque :
Pour pouvoir utiliser les entrées, celles-ci doivent être configurées côté matériel sur « Entrée numérique » (Digitaler Eingang). (Paramètres du compteur (Zählereinstellungen), E1 --> Entrée numérique (Digitaler Eingang))

Configurations de commande :

Avec un seul signal :

- 1 niveau : 0 % de réduction, réduction variable (10-100%)

Avec deux signaux :

- 4 niveaux : 0 % de réduction, réduction variable, réduction variable, 100 % de réduction

- 3 niveaux : 0 % de réduction, réduction variable (même niveau pour les deux), 100 % de réduction

Application des pourcentages selon l'EnWG14a en Allemagne :

- Pour les installations de 22kW, une réduction de 82% correspond à la garantie d'une puissance minimale de 4200W par appareil de l'installation.

- Pour les installations de 11kW, une réduction de 73% correspond à la garantie d'une puissance minimale de 4200W par appareil de l'installation.

Interprétation du signal :

Le signal peut être interprété de différentes manières.

Si le fournisseur d'énergie retire le signal en cas de délestage (230V --> 0V), la configuration correcte est « Actif bas » (Low-Aktiv).

Pas de signal (0) = 1 = l'énergie disponible est réduite

Si le fournisseur d'énergie applique le signal en cas de délestage (0V --> 230V), il faut choisir « Actif haut » (High-Aktiv).

Signal (1) = 1 = l'énergie disponible est réduite.

[Câblage et configuration des entrées de compteur](/schnittstellen/ein-und-ausgaenge)

</div>
<div className="col col--5 text--center">

![Configuration de la gestion de la charge multiniveau – figure 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configuration de la gestion de la charge multiniveau – figure 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configuration de la gestion de la charge multiniveau – figure 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

</div>
</div>

### Activer et désactiver le processeur MLM

La configuration MLM peut être désactivée et réactivée à tout moment.

- Arrête le processus de calcul et l'attribution active des valeurs issues des points de référence.

- Met la valeur de panne Internet définie à la libre disposition de tous les groupes de charge subordonnés.


Réglez la valeur sur actif ou inactif, puis enregistrez la configuration pour la transmettre au processeur.

![Configuration de la gestion de la charge multiniveau – figure 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Exemple de configuration : maison avec départ e-mobilité + éclairage du garage, installation solaire et lissage des pointes de charge à midi

- Le tronc correspond ici au raccordement de l'immeuble

- La protection du raccordement est de 100A par phase.

- L'optimisation solaire se situe ici sur le raccordement de l'immeuble.

- La production de l'installation solaire ainsi que la consommation propre de la maison sont mesurées et prises en compte au moyen du compteur « Hausanschluss Telstar 80A ».


![Configuration de la gestion de la charge multiniveau – figure 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configuration de la gestion de la charge multiniveau – figure 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

Le départ e-mobilité subordonné est ici mesuré activement afin de tenir compte de l'éclairage du garage. Les groupes de recharge doivent ainsi réagir dynamiquement à l'éclairage du garage.

- L'éclairage du garage est pris en compte avec le compteur de référence « E-Mobilitätsabgang 63A Telstar 80A ».

- La protection du départ est de 63A par phase.


![Configuration de la gestion de la charge multiniveau – figure 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configuration de la gestion de la charge multiniveau – figure 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

Pour que l'optimisation solaire produise son effet, le courant de recharge minimal est réduit pendant la journée.

- Le courant minimal correspond au soutirage maximal possible du réseau à l'heure définie.

- Dès que le courant minimal est couvert à 100 % par l'installation solaire, les bornes reçoivent en plus l'excédent supplémentaire de l'installation solaire.

- Optimisation solaire pour toute la semaine de 6:00 à 17:00 heures avec un courant de recharge minimal de 15A par phase

- Lissage des pointes à midi : les recharges de 12:00 à 13:00 heures ne sont possibles qu'en cas d'excédent solaire, le soutirage du réseau reste à 0A

- La recharge nocturne de 18:00 à 22:00 heures est possible à 50 % de la capacité.

- La recharge nocturne de 22:00 à 7:00 heures du matin est possible à 100 % de la capacité.
    (p. ex. pour profiter des heures creuses)


![Configuration de la gestion de la charge multiniveau – figure 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configuration de la gestion de la charge multiniveau – figure 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Exemple de configuration : site avec plusieurs maisons, installations solaires et départs e-mobilité

- Site RCP (regroupement dans le cadre de la consommation propre) avec 3 maisons

- Chaque maison dispose d'un garage souterrain

- Plusieurs groupes de recharge dans les garages souterrains

- TG1 dispose de places de stationnement extérieures pour les visiteurs ainsi que de places pour les locataires

- Les maisons TG1 et TG2 disposent d'installations solaires

- Optimisation solaire sur le site, afin que TG3 puisse aussi profiter de l'énergie solaire.

- Protection du site 300A par phase

- Protections des maisons 180A par phase

- Départs e-mobilité 63 A ou 32A par phase


![Configuration de la gestion de la charge multiniveau – figure 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- La valeur en ampères correspond à la protection de la ligne d'alimentation

- Le point de mesure est protégé, mais n'est lui-même pas mesuré.
    Comme les branches en aval comportent toutes des mesures et que celles-ci correspondent à 100 % de la consommation du site, le tronc peut être limité virtuellement.

- Optimisation du courant solaire sur le tronc (site) active. (Disponibilité du courant solaire pour les trois maisons)


![Configuration de la gestion de la charge multiniveau – figure 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configuration de la gestion de la charge multiniveau – figure 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1 : raccordement d'immeuble du bâtiment 1 du site

- Protection 180A par phase

- Charges non mesurées actives : appartements, chauffage, éclairage, services généraux, solaire

- Prise en compte dynamique des appartements et des pompes à chaleur


![Configuration de la gestion de la charge multiniveau – figure 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configuration de la gestion de la charge multiniveau – figure 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 départ e-mobilité

- Protection 63A par phase

- Charges non mesurées actives : éclairage du garage et ventilation en plus
    des bornes de recharge

- Prise en compte dynamique de l'éclairage du garage et de la ventilation


![Configuration de la gestion de la charge multiniveau – figure 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configuration de la gestion de la charge multiniveau – figure 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Places visiteurs du site (bornes de recharge publiques)

- Disponibilité énergétique et priorisation élevées, pour un prix de vente plus élevé.
    Publiées via le backend eCarUp. (Authentification par le backend)

- En permanence 100 % de la capacité possible du réseau + couverture solaire.

- Écrêtage des pointes de charge à midi de 12:00 à 13:00 : seulement 23A par phase du réseau + excédent solaire.

- Protection du câble 63A par phase


![Configuration de la gestion de la charge multiniveau – figure 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configuration de la gestion de la charge multiniveau – figure 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Places locataires du site

- Disponibilité énergétique et priorisation moyennes, accent mis sur l'énergie solaire pendant la journée.

- En permanence 50 % de la capacité possible du réseau.

- Protection du câble 32A par phase.

- Écrêtage des pointes de charge à midi : 0A de 12:00 à 13:00.
    Recharge solaire uniquement possible si la production n'est pas utilisée ailleurs par le site.


![Configuration de la gestion de la charge multiniveau – figure 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configuration de la gestion de la charge multiniveau – figure 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

<div className="row">
<div className="col col--4">

Parties de l'installation non traitées :

- Les raccordements d'immeuble et les départs e-mobilité des maisons 2 et 3 sont configurés de manière identique.

- Les 4 groupes de recharge du garage souterrain 3 (TG3) sont configurés de manière similaire aux places locataires du garage souterrain 1 (TG1)

- Chaque groupe de recharge peut avoir son propre comportement et recevoir des courants d'alimentation de secours différents en cas de panne Internet.

</div>
<div className="col col--8 text--center">

![Configuration de la gestion de la charge multiniveau – figure 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)

</div>
</div>
