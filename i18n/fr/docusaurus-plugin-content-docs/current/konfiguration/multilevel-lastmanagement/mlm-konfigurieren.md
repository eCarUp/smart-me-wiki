---
title: 'Configuration de la gestion de la charge multiniveau'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configuration d''une gestion de la charge multiniveau dynamique (MLM)'
sidebar_label: 'Configuration de la gestion de la charge multiniveau'
---
<Menueweg>Gestion de charge à plusieurs niveaux</Menueweg>

## Configuration d'une gestion de la charge multiniveau dynamique (MLM)

La configuration d'une gestion de la charge multiniveau s'effectue dans la section « Gestion de charge à plusieurs niveaux » (Multilevel Lastmanagement) de la navigation principale

Cette fonction permet :

- La commande dynamique de plusieurs groupes de recharge Pico statiques

- La limitation des puissances de recharge à des points de référence au sein de l'installation ou du site

- Les optimisations solaires

- Les réductions des pics de charge

- Les priorisations des groupes de recharge

![Configuration de la gestion de la charge multiniveau – Figure 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Définition des termes

La gestion de la charge multiniveau peut être considérée comme un arbre, avec les termes et usages suivants :

- Tronc (point de raccordement principal de l'installation)

- Branches (points limitants tels que dérivations, raccordements d'immeubles, tableaux divisionnaires, départs groupés)

- Feuilles (groupes de recharge Pico statiques)


Le tronc ainsi que les branches peuvent assumer plusieurs fonctions :

- Limitation du courant (protection maximale)

- Optimisation solaire ACTIVÉE ou DÉSACTIVÉE

- Présence de charges non mesurées (active ou inactive)


Charges non mesurées :

Une charge non mesurée correspond à un producteur ou à un consommateur qui ne correspond pas à un groupe de bornes de recharge Pico. Pour pouvoir tenir compte dynamiquement de cette production ou de cette charge, un compteur doit être mis à disposition comme référence. (Branche mesurée)

La branche peut aussi être limitée de manière statique sans compteur de référence, mais elle doit alors être limitée à un maximum fonctionnel au niveau de la protection, en tenant compte de la charge de base.

Branches typiques avec charges non mesurées : 

- Raccordements d'immeubles (logements, installations solaires, stockage par batterie, éclairage extérieur)

- Tableaux divisionnaires (mise en réseau de plusieurs complexes de bâtiments, TD Est, TD Ouest,...)

- Départs e-mobilité (consommation en veille des Pico et éclairage du garage)


<div className="row">
<div className="col col--6 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

</div>
<div className="col col--6 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

</div>
</div>

### Ajouter ou supprimer une branche

Ajouter :

Sélectionnez le tronc ou une branche et créez une branche ou une dérivation supplémentaire avec « Ajouter une branche » (Ast hinzufügen).

Supprimer :

En sélectionnant la branche concernée et en utilisant la fonction « Supprimer » (Löschen), la branche choisie ainsi que toutes les branches qui en dépendent sont supprimées.

Pour conserver les éléments qui en dépendent, vous pouvez auparavant rattacher les branches et les groupes à une autre branche ou au tronc par glisser-déposer.


![Configuration de la gestion de la charge multiniveau – Figure 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Ajouter des groupes de bornes de recharge à l'arbre

<div className="row">
<div className="col col--7">

Les groupes de bornes de recharge pas encore attribués et correctement configurés pour le MLM se trouvent sur le côté droit.

Ils peuvent être rattachés aux branches par glisser-déposer et également déplacés par glisser-déposer au sein de la configuration.

Remarque :
La condition préalable à l'utilisation dans le MLM est que le paramètre en cas de perte de connexion soit configuré sur « Courant max. (par groupe) » (Max. Strom (pro Gruppe)).

Ce paramètre peut être modifié sur une borne de recharge Pico dans la « Configuration » (Konfiguration).

</div>
<div className="col col--5 text--center">

![Configuration de la gestion de la charge multiniveau – Figure 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configuration de la gestion de la charge multiniveau – Figure 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

</div>
</div>

### Optimisation solaire et courant minimal par groupe de recharge

<div className="row">
<div className="col col--6">

Configuration des branches :

L'optimisation solaire est possible 1x sur le tronc (optimisée pour le site) ou plusieurs fois en parallèle sur des branches avec des charges non mesurées actives, p. ex. des raccordements d'immeubles.

Selon le choix, l'excédent solaire est optimisé sur tous les groupes de bornes de recharge ou seulement sur une partie d'entre eux.

Configuration des groupes :

Pour que l'optimisation solaire produise l'effet souhaité, un courant de recharge minimal réduit doit être attribué temporairement aux groupes de bornes à optimiser.
Ce courant de recharge minimal est défini sur le groupe de recharge concerné (configuration du groupe) et correspond au soutirage maximal possible du réseau pour le groupe de recharge pendant les heures définies.

Le réglage du courant de recharge minimal permet en même temps d'écrêter les pics de charge.

Chaque groupe peut être configuré de manière différente.

Les groupes ayant un courant de recharge minimal plus élevé sont traités en priorité lors de la répartition du courant réseau disponible.

</div>
<div className="col col--6 text--center">

![Configuration de la gestion de la charge multiniveau – Figure 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configuration de la gestion de la charge multiniveau – Figure 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

</div>
</div>

### Enregistrer et activer la configuration

Les modifications de la configuration ne sont enregistrées que si la configuration est également activée.

Si l'activation ne peut pas être effectuée en raison d'erreurs de configuration, cela peut être dû aux points suivants :

- Le groupe de recharge n'est pas correctement configuré pour le MLM (le paramètre en cas de panne Internet n'est pas réglé sur Courant max. par groupe)

- Certains appareils pertinents pour le MLM ne sont pas en ligne au moment de l'enregistrement. (les mettre en ligne)

![Configuration de la gestion de la charge multiniveau – Figure 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Supprimer la configuration du MLM

La configuration d'un MLLM peut être entièrement supprimée d'un simple clic afin de saisir une nouvelle configuration.

![Configuration de la gestion de la charge multiniveau – Figure 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuration du délestage

<div className="row">
<div className="col col--7">

Le MLM dispose d'une commande de délestage intégrée.

Cette commande peut être utilisée à la place des entrées matérielles situées à l'arrière des bornes de recharge Pico. 

Remarques : 

- Les signaux raccordés directement au matériel Pico ne peuvent pas être outrepassés par cette fonction. 

- La fonction nécessite une connexion Internet active pour fonctionner. En cas de perte d'Internet, la valeur en cas de panne Internet configurée pour les groupes Pico est utilisée.

La fonction permet d'interpréter un ou plusieurs signaux numériques des fournisseurs d'énergie et d'attribuer une puissance de recharge réduite à tous les groupes de bornes de recharge du MLM.

Les signaux de commande sont câblés sur une ou deux entrées de compteur (E1) situées à proximité.

Le matériel smart-me Telstar CT et Telstar 80A est compatible à cet effet.

Remarque :
Pour que les entrées puissent être utilisées, elles doivent être configurées côté matériel sur « Entrée numérique » (Digitaler Eingang). (Paramètres du compteur (Zählereinstellungen), E1 --> Entrée numérique (Digitaler Eingang))

Configurations de commande :

Avec un seul signal :

- 1 niveau : 0% de réduction, réduction variable (10-100%)

Avec deux signaux :

- 4 niveaux : 0% de réduction, réduction variable, réduction variable, 100% de réduction

- 3 niveaux : 0% de réduction, réduction variable (les deux au même niveau), 100% de réduction

Application des pourcentages selon l'EnWG14a en Allemagne :

- Pour les installations de 22kW, une réduction de 82% correspond à la garantie de 4200W de puissance minimale par appareil dans l'installation.

- Pour les installations de 11kW, une réduction de 73% correspond à la garantie de 4200W de puissance minimale par appareil dans l'installation.

Interprétation du signal :

Le signal peut être interprété de différentes manières.

Si le signal du fournisseur d'énergie est retiré en cas de délestage (230V --> 0V), « Actif bas » (Low-Aktiv) est la configuration correcte.

Pas de signal (0) = 1 = l'énergie disponible est réduite

Si le signal du fournisseur d'énergie est appliqué en cas de délestage (0V --> 230V), il faut choisir « Actif haut » (High-Aktiv).

Signal (1) = 1 = l'énergie disponible est réduite.

[Câblage et configuration des entrées de compteur](/schnittstellen/ein-und-ausgaenge)

</div>
<div className="col col--5 text--center">

![Configuration de la gestion de la charge multiniveau – Figure 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configuration de la gestion de la charge multiniveau – Figure 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configuration de la gestion de la charge multiniveau – Figure 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

</div>
</div>

### Activer et désactiver le processeur MLM

La configuration MLM peut être désactivée et réactivée à tout moment.

- Arrête le processus de calcul et l'attribution active des valeurs issues des points de référence.

- Met la valeur en cas de panne Internet définie à la libre disposition de tous les groupes de charge subordonnés.


Réglez la valeur sur actif ou inactif, puis enregistrez la configuration pour la transmettre au processeur.

![Configuration de la gestion de la charge multiniveau – Figure 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Exemple de configuration : immeuble avec départ e-mobilité + éclairage du garage, installation solaire et lissage des pics de charge à midi

- Le tronc correspond ici au raccordement de l'immeuble

- La protection du raccordement correspond à 100A par phase.

- L'optimisation solaire se situe ici sur le raccordement de l'immeuble.

- La production de l'installation solaire ainsi que la consommation propre de l'immeuble sont mesurées et prises en compte au moyen du compteur « Hausanschluss Telstar 80A ».


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

</div>
</div>

Le départ e-mobilité subordonné est ici mesuré activement afin de tenir compte de l'éclairage du garage. Les groupes de recharge doivent ainsi réagir dynamiquement à l'éclairage du garage.

- L'éclairage du garage est pris en compte avec le compteur de référence « E-Mobilitätsabgang 63A Telstar 80A ».

- La protection du départ correspond à 63A par phase.


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

</div>
</div>

Pour que l'optimisation solaire soit efficace, le courant de recharge minimal est réduit pendant la journée.

- Le courant minimal correspond au soutirage maximal possible du réseau à l'heure définie.

- Dès que le courant minimal est couvert à 100% par l'installation solaire, les bornes reçoivent en plus l'excédent supplémentaire de l'installation solaire.

- Optimisation solaire pour toute la semaine de 6:00 à 17:00 heures, courant de recharge minimal de 15A par phase

- Lissage des pics à midi : les recharges de 12:00 à 13:00 heures ne sont possibles qu'en cas d'excédent solaire, le soutirage du réseau reste à 0A

- La recharge nocturne de 18:00 à 22:00 heures est possible avec 50% de la capacité.

- La recharge nocturne de 22:00 à 7:00 heures du matin est possible avec 100% de la capacité.
    (p. ex. exploitation des heures creuses)


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

</div>
</div>

## Exemple de configuration : site avec plusieurs immeubles, installations solaires et départs e-mobilité

- Site RCP (regroupement dans le cadre de la consommation propre) avec 3 immeubles

- Chaque immeuble dispose d'un parking souterrain

- Plusieurs groupes de recharge dans les parkings souterrains

- TG1 dispose de places de stationnement extérieures pour les visiteurs ainsi que de places pour les locataires

- Les immeubles TG1 et TG2 disposent d'installations solaires

- Optimisation solaire sur le site, afin que TG3 puisse aussi profiter de l'énergie solaire.

- Protection du site 300A par phase

- Protections des immeubles 180A par phase

- Départs e-mobilité 63 A ou 32A par phase


![Configuration de la gestion de la charge multiniveau – Figure 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- La valeur en ampères correspond à la protection de la ligne d'alimentation

- Le point de mesure est protégé mais lui-même non mesuré.
    Comme les branches suivantes comportent toutes des mesures et que celles-ci correspondent à 100% de la consommation du site, le tronc peut être limité virtuellement.

- Optimisation du courant solaire sur le tronc (site) active. (Disponibilité du courant solaire pour les trois immeubles)


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

</div>
</div>

HAK TG1 : raccordement de l'immeuble 1 du site

- Protection 180A par phase

- Charges non mesurées actives : logements, chauffage, éclairage, parties communes, solaire

- Prise en compte dynamique des logements et des pompes à chaleur


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

</div>
</div>

TG1 départ e-mobilité

- Protection 63A par phase

- Charges non mesurées actives : éclairage du garage et ventilation en plus
    des bornes de recharge

- Prise en compte dynamique de l'éclairage du garage et de la ventilation


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

</div>
</div>

Places visiteurs du site (bornes de recharge publiques)

- Disponibilité énergétique et priorisation élevées pour un prix de vente plus élevé.
    Publié via le backend eCarUp. (Authentification backend)

- En permanence 100% de la capacité possible du réseau + couverture solaire.

- Écrêtage des pics de charge à midi de 12:00 à 13:00, seulement 23A par phase réseau + excédent solaire.

- Protection du câble 63A par phase


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

</div>
</div>

Places des locataires du site

- Disponibilité énergétique et priorisation moyennes, accent sur l'énergie solaire pendant la journée.

- En permanence 50% de la capacité possible du réseau.

- Protection du câble 32A par phase.

- Écrêtage des pics de charge à midi 0A de 12:00 à 13:00.
    Recharge solaire uniquement possible si la production n'est pas utilisée par le site à d'autres fins.


<div className="row">
<div className="col col--4 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

</div>
<div className="col col--8 bild--mitte">

![Configuration de la gestion de la charge multiniveau – Figure 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

</div>
</div>

<div className="row">
<div className="col col--4">

Parties de l'installation non traitées :

- Les raccordements et les départs e-mobilité des immeubles 2 et 3 sont configurés de manière identique.

- Les 4 groupes de recharge du parking souterrain 3 (TG3) sont configurés de manière similaire aux places des locataires du parking souterrain 1 (TG1)

- Chaque groupe de recharge peut adopter un comportement distinct et recevoir également des courants d'alimentation de secours différents en cas de panne Internet.

</div>
<div className="col col--8 text--center">

![Configuration de la gestion de la charge multiniveau – Figure 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)

</div>
</div>
