---
title: 'Configuration de la gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configurer une gestion de la charge multiniveau (MLM) dynamique'
sidebar_label: 'Configuration de la gestion de la charge multiniveau'
---
<Menueweg>Gestion de charge à plusieurs niveaux</Menueweg>

## Configurer une gestion de la charge multiniveau (MLM) dynamique

La configuration d'une gestion de la charge multiniveau s'effectue dans la rubrique « Gestion de charge à plusieurs niveaux » (« Multilevel Lastmanagement ») de la navigation principale.

La fonction permet :

- Le pilotage dynamique de plusieurs groupes de recharge Pico statiques

- La limitation des puissances de recharge à des points de référence au sein de l'installation ou du site

- Les optimisations solaires

- La réduction des pics de charge

- La priorisation des groupes de recharge

![Configuration de la gestion de la charge multiniveau – figure 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Définition des termes

La gestion de la charge multiniveau peut être représentée comme un arbre, avec les termes et usages suivants :

- Tronc (point de raccordement principal de l'installation)

- Branches (points limitants tels que dérivations, raccordements d'immeuble, tableaux divisionnaires, départs groupés)

- Feuilles (groupes de recharge Pico statiques)


Le tronc et les branches peuvent assumer plusieurs fonctions :

- Limitation du courant (protection maximale)

- Optimisation solaire ACTIVÉE ou DÉSACTIVÉE

- Présence de charges non mesurées (actif ou inactif)


Charges non mesurées :

Une charge non mesurée correspond à un producteur ou un consommateur qui n'est pas un groupe de bornes de recharge Pico. Pour pouvoir prendre en compte dynamiquement cette production ou cette charge, un matériel de mesure doit être mis à disposition comme référence. (Branche mesurée)

La branche peut aussi être limitée de manière statique sans compteur de référence, mais elle doit alors être restreinte à un maximum fonctionnel au niveau de la protection, en tenant compte de la charge de base.

Branches typiques avec des charges non mesurées : 

- Raccordements d'immeuble (logements, installations solaires, batteries de stockage, éclairage extérieur)

- Tableaux divisionnaires (mise en réseau de plusieurs complexes de bâtiments, TD Est, TD Ouest,...)

- Départs e-mobilité (consommation en veille des Pico et éclairage du garage)


<div className="row">
<div className="col col--6 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

</div>
<div className="col col--6 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

</div>
</div>

### Ajouter ou supprimer une branche

Ajouter :

Sélectionnez le tronc ou une branche et créez une branche ou une dérivation supplémentaire au moyen de « Ajouter une branche » (« Ast hinzufügen »).

Supprimer :

En sélectionnant la branche concernée et en utilisant la fonction « Supprimer » (« Löschen »), la branche choisie ainsi que toutes les branches qui en dépendent sont supprimées.

Pour conserver les éléments suivants, les branches et les groupes peuvent être rattachés au préalable à une autre branche ou au tronc par glisser-déposer.


![Configuration de la gestion de la charge multiniveau – figure 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Ajouter des groupes de bornes de recharge à l'arbre

<div className="row">
<div className="col col--7">

Les groupes de bornes de recharge pas encore attribués et correctement configurés pour le MLM se trouvent sur le côté droit.

Ils peuvent être rattachés aux branches par glisser-déposer et également déplacés par glisser-déposer au sein de la configuration.

Remarque :
La condition pour l'utilisation dans le MLM est que le paramètre en cas de perte de connexion soit configuré sur « Courant max. (par groupe) » (« Max. Strom (pro Gruppe) »).

Ce paramètre peut être modifié sur une borne de recharge Pico sous « Configuration » (« Konfiguration »).

</div>
<div className="col col--5 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configuration de la gestion de la charge multiniveau – figure 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

</div>
</div>

### Optimisation solaire et courant minimal par groupe de recharge

<div className="row">
<div className="col col--6">

Configuration des branches :

L'optimisation solaire est possible 1x sur le tronc (optimisée pour le site) ou plusieurs fois en parallèle sur des branches avec des charges non mesurées actives, p. ex. des raccordements d'immeuble.

Selon le choix effectué, l'excédent solaire est optimisé sur tous les groupes de bornes de recharge ou seulement sur une partie d'entre eux.

Configuration des groupes :

Pour que l'optimisation solaire produise l'effet souhaité, un courant de recharge minimal réduit doit être attribué temporairement aux groupes de bornes à optimiser.
Ce courant de recharge minimal est défini sur le groupe de recharge concerné (configuration du groupe) et correspond au soutirage maximal possible du réseau pour le groupe de recharge pendant les heures définies.

Le réglage du courant de recharge minimal permet en même temps d'écrêter les pics de charge.

Chaque groupe peut être configuré de manière différente.

Les groupes ayant un courant de recharge minimal plus élevé sont traités en priorité lors de la répartition du courant réseau disponible.

</div>
<div className="col col--6 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configuration de la gestion de la charge multiniveau – figure 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

</div>
</div>

### Enregistrer et activer la configuration

Les modifications de la configuration ne sont enregistrées que si la configuration est également activée.

Si l'activation ne peut pas être effectuée en raison d'erreurs de configuration, cela peut être dû aux points suivants :

- Le groupe de recharge n'est pas correctement configuré pour le MLM (le paramètre en cas de panne Internet n'est pas réglé sur Courant max. par groupe)

- Certains appareils pertinents pour le MLM ne sont pas en ligne au moment de l'enregistrement. (les mettre en ligne)

![Configuration de la gestion de la charge multiniveau – figure 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Supprimer la configuration du MLM

La configuration d'un MLM peut être entièrement supprimée d'une simple pression sur un bouton afin de saisir une nouvelle configuration.

![Configuration de la gestion de la charge multiniveau – figure 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuration du délestage

<div className="row">
<div className="col col--7">

Le MLM dispose d'une commande de délestage intégrée.

Cette commande peut être utilisée à la place des entrées matérielles situées à l'arrière des bornes de recharge Pico. 

Remarques : 

- Les signaux raccordés directement au matériel Pico ne peuvent pas être outrepassés par cette fonction. 

- La fonction nécessite une connexion Internet active pour fonctionner. En cas de perte d'Internet, la valeur réglée pour la panne Internet des groupes Pico est utilisée.

La fonction permet d'interpréter un ou plusieurs signaux numériques des fournisseurs d'énergie et d'attribuer une puissance de recharge réduite à tous les groupes de bornes de recharge du MLM.

Les signaux de commande sont câblés sur une ou deux entrées de compteur (E1) situées à proximité.

Les matériels smart-me Telstar CT et Telstar 80A sont compatibles à cet effet.

Remarque :
Pour que les entrées puissent être utilisées, elles doivent être configurées côté matériel sur « Entrée numérique » (« Digitaler Eingang »). (Paramètres du compteur, E1 --> Entrée numérique)

Configurations de commande :

Avec un seul signal :

- 1 niveau : réduction de 0 %, réduction variable (10-100%)

Avec deux signaux :

- 4 niveaux : réduction de 0 %, réduction variable, réduction variable, réduction de 100 %

- 3 niveaux : réduction de 0 %, réduction variable (les deux au même niveau), réduction de 100 %

Application des pourcentages à l'EnWG14a en Allemagne :

- Pour les installations de 22kW, une réduction de 82% correspond à la garantie de 4200W de puissance minimale par appareil dans l'installation.

- Pour les installations de 11kW, une réduction de 73% correspond à la garantie de 4200W de puissance minimale par appareil dans l'installation.

Interprétation du signal :

Le signal peut être interprété de différentes manières.

Si le fournisseur d'énergie retire le signal en cas de délestage (230V --> 0V), « Actif bas » (« Low-Aktiv ») est la configuration correcte.

Pas de signal (0) = 1 = l'énergie disponible est réduite

Si le fournisseur d'énergie applique le signal en cas de délestage (0V --> 230V), il faut choisir « Actif haut » (« High-Aktiv »).

Signal (1) = 1 = l'énergie disponible est réduite.

[Câblage et configuration des entrées de compteur](/schnittstellen/ein-und-ausgaenge)

</div>
<div className="col col--5 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configuration de la gestion de la charge multiniveau – figure 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configuration de la gestion de la charge multiniveau – figure 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

</div>
</div>

### Activer et désactiver le processeur MLM

La configuration MLM peut être désactivée et réactivée à tout moment.

- Arrête le processus de calcul et l'attribution active de valeurs issues des points de référence.

- Met à la libre disposition de tous les groupes de charge subordonnés la valeur définie en cas de panne Internet.


Réglez la valeur sur actif ou inactif, puis enregistrez la configuration pour la communiquer au processeur.

![Configuration de la gestion de la charge multiniveau – figure 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Exemple de configuration : maison avec départ e-mobilité + éclairage du garage, installation solaire et lissage des pics de charge à midi

- Le tronc correspond ici au raccordement de l'immeuble

- La protection du raccordement est de 100A par phase.

- L'optimisation solaire se situe ici sur le raccordement de l'immeuble.

- La production de l'installation solaire ainsi que la consommation propre de la maison sont mesurées et prises en compte au moyen du compteur « Raccordement immeuble Telstar 80A » (« Hausanschluss Telstar 80A »).


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

</div>
</div>

Le départ e-mobilité subordonné est ici mesuré activement afin de tenir compte de l'éclairage du garage. Les groupes de recharge doivent ainsi réagir dynamiquement à l'éclairage du garage.

- L'éclairage du garage est pris en compte avec le compteur de référence « Départ e-mobilité 63A Telstar 80A » (« E-Mobilitätsabgang 63A Telstar 80A »).

- La protection du départ est de 63A par phase.


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

</div>
</div>

Pour que l'optimisation solaire soit efficace, le courant de recharge minimal est réduit au cours de la journée.

- Le courant minimal correspond au soutirage maximal possible du réseau à l'heure définie.

- Dès que le courant minimal est couvert à 100 % par l'installation solaire, les bornes reçoivent en plus l'excédent supplémentaire de l'installation solaire.

- Optimisation solaire pour toute la semaine de 6:00 à 17:00 heures, courant de recharge minimal de 15A par phase

- Lissage des pics à midi : les recharges de 12:00 à 13:00 heures ne sont possibles qu'avec un excédent solaire, le soutirage du réseau reste à 0A

- La recharge nocturne de 18:00 à 22:00 heures est possible à 50% de la capacité.

- La recharge nocturne de 22:00 heures jusqu'à 7:00 heures du matin est possible à 100% de la capacité.
    (p. ex. exploitation des heures creuses)


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

</div>
</div>

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

- Le point de mesure est protégé, mais lui-même non mesuré.
    Comme les branches suivantes disposent toutes de mesures et que celles-ci correspondent à 100% de la consommation du site, le tronc peut être limité virtuellement.

- Optimisation du courant solaire sur le tronc (site) active. (Disponibilité du courant solaire pour les trois maisons)


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

</div>
</div>

HAK TG1 : raccordement d'immeuble du bâtiment 1 sur le site

- Protection 180A par phase

- Charges non mesurées actives : logements, chauffage, éclairage, parties communes, solaire

- Prise en compte dynamique des logements et des pompes à chaleur


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

</div>
</div>

TG1 départ e-mobilité

- Protection 63A par phase

- Charges non mesurées actives : éclairage du garage et ventilation en plus
    des bornes de recharge

- Prise en compte dynamique de l'éclairage du garage et de la ventilation


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

</div>
</div>

Places de stationnement visiteurs du site (bornes de recharge publiques)

- Disponibilité énergétique élevée et priorisation pour un prix de vente plus élevé.
    Publié via le backend eCarUp. (Authentification backend)

- En permanence 100% de la capacité possible depuis le réseau + couverture solaire.

- Écrêtage des pics de charge à midi de 12:00 à 13:00 seulement 23A par phase réseau + excédent solaire.

- Protection du câble 63A par phase


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

</div>
</div>

Places de stationnement des locataires du site

- Disponibilité énergétique et priorisation moyennes, accent sur l'énergie solaire pendant la journée.

- En permanence 50% de la capacité possible depuis le réseau.

- Protection du câble 32A par phase.

- Écrêtage des pics de charge à midi 0A de 12:00 à 13:00.
    Recharge solaire uniquement possible si la production n'est pas utilisée ailleurs par le site.


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

</div>
</div>

<div className="row">
<div className="col col--4">

Parties de l'installation non traitées :

- Les raccordements d'immeuble et les départs e-mobilité des maisons 2 et 3 sont configurés de manière identique.

- Les 4 groupes de recharge du garage souterrain 3 (TG3) sont configurés de manière similaire aux places de stationnement des locataires du garage souterrain 1 (TG1)

- Chaque groupe de recharge peut adopter des comportements distincts et recevoir aussi des courants d'alimentation de secours différents en cas de panne Internet.

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – figure 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)

</div>
</div>
