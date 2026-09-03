---
title: 'Visualisation et Public Links'
slug: '/konfiguration/visualisierung'
description: 'Tu as besoin d''un abonnement smart-me Limited ou Professional pour utiliser cette fonction.'
sidebar_label: 'Visualisation et Public Links'
---
### Condition préalable

Tu as besoin d'un abonnement smart-me Limited ou Professional pour utiliser cette fonction.

## Navigation dans le dashboard en tant que locataire

Tu trouves ici un guide d'utilisation de ton dashboard en tant que locataire. Découvre où tu peux obtenir quelles informations sur ta consommation et comprends ce qui t'est affiché.

[Guide d'utilisation pour les locataires](/nutzeranleitungen/mieter)

## Configurer les visualisations

Une visualisation est créée sur un dossier. Lorsque tu cliques sur le dossier dans l'app ou sur le web, la visualisation correspondante s'affiche. 

![Visualisation et Public Links – Illustration 1](/img/konfiguration-visualisierung/01.png)

### Créer des visualisations

Procède comme suit pour créer une visualisation :

1.  Connecte-toi sur le [site web smart-me](https://web.smart-me.com/).

2.  Clique en haut à droite sur Configuration (Konfiguration).

3.  Clique sur Configuration des compteurs / dossiers (Zähler / Ordner Konfiguration).

4.  Sélectionne le dossier sur lequel la visualisation doit être créée.

5.  Clique à côté de Visualisation (Visualisierung) sur éditer (editieren). 

6.  Sélectionne la visualisation souhaitée et ajoute les compteurs correspondants. 


![Visualisation et Public Links – Illustration 2](/img/konfiguration-visualisierung/02.png)

![Visualisation et Public Links – Illustration 3](/img/konfiguration-visualisierung/03.png)

### Vue pour les locataires

Pour les tarifs virtuels, une vue spéciale est disponible pour les locataires. Elle affiche la consommation d'énergie actuelle (électricité) et son origine (solaire ou réseau). De plus, la barre indique la source de soutirage d'électricité actuelle dans le passé.

Celle-ci doit être configurée en plus pour chaque nœud d'appartement.

La visualisation s'appelle : « Tarifs virtuels simples appartement » (Einfache virtuelle Tarife Wohnung)

Attention : il faut ici sélectionner le dossier pertinent de l'appartement, et non les compteurs qui s'y trouvent !

![Visualisation et Public Links – Illustration 4](/img/konfiguration-visualisierung/04.png)

### Différentes visualisations pour l'ensemble du bien immobilier

Voici un extrait des différentes visualisations possibles. La liste n'est pas exhaustive.

Des nœuds vides peuvent être créés afin de créer autant de visualisations que souhaité.

![Visualisation et Public Links – Illustration 5](/img/konfiguration-visualisierung/05.png)

![Visualisation et Public Links – Illustration 6](/img/konfiguration-visualisierung/06.png)

![Visualisation et Public Links – Illustration 7](/img/konfiguration-visualisierung/07.png)

![Visualisation et Public Links – Illustration 8](/img/konfiguration-visualisierung/08.png)

### Aperçu de la performance du RCP

En un coup d'œil, toutes les données pertinentes sur ton RCP :

- Aperçu de la production et du rendement

- Puissances de pointe

- Batterie

- Graphiques des flux d'énergie

- Solar Heat-Map


![Visualisation et Public Links – Illustration 9](/img/konfiguration-visualisierung/09.png)

### Monitoring des groupes Pico

En un coup d'œil, toutes les données pertinentes sur tes bornes de recharge :

- Occupé / En charge / Libre

- Gestion de la charge et courants autorisés

- Statut en ligne

- Activité de délestage


![Visualisation et Public Links – Illustration 10](/img/konfiguration-visualisierung/10.png)

### Flux d'énergie simple

Affiche le flux d'énergie pour une installation solaire, le soutirage du réseau et la consommation de la maison.

Deux de ces trois compteurs doivent être indiqués, le troisième est calculé automatiquement. Si les trois compteurs sont indiqués, des affichages erronés peuvent apparaître. Nous recommandons toujours, si possible, d'indiquer des mesures directes et non des compteurs virtuels.

![Visualisation et Public Links – Illustration 11](/img/konfiguration-visualisierung/11.png)

### Maison avec plusieurs consommateurs et producteurs

Jusqu'à dix consommateurs ou producteurs peuvent être visualisés pour une maison.

Il est possible d'afficher au choix les puissances (maintenant) ou les valeurs de consommation des 30, respectivement 365 derniers jours.

![Visualisation et Public Links – Illustration 12](/img/konfiguration-visualisierung/12.png)

### Monitoring de la consommation et de la production

Montre où l'énergie produite est consommée (dans la maison ou injectée dans le réseau) ainsi que d'où l'énergie consommée a été soutirée (solaire ou réseau). 

Attention : le compteur principal ne doit pas être un compteur virtuel ! 

![Visualisation et Public Links – Illustration 13](/img/konfiguration-visualisierung/13.jpg)

### Consommation d'un appartement avec comparaison à un appartement de référence

Les puissances actuelles d'un appartement (électricité, chaleur et eau) sont affichées.

Pour les valeurs de consommation historiques, une comparaison avec un appartement de référence est en outre affichée (p. ex. « 10 % d'électricité consommée en moins que la moyenne »).

![Visualisation et Public Links – Illustration 14](/img/konfiguration-visualisierung/14.jpg)

### Taux d'autoconsommation et taux d'autarcie

Le taux d'autoconsommation et le taux d'autarcie d'un bâtiment sont représentés. Les valeurs se calculent à partir du compteur PV et du compteur de bilan.

Taux d'autoconsommation : quelle part de l'énergie solaire est consommée directement dans la maison.

Taux d'autarcie : quelle part de la consommation totale est produite par l'installation solaire.

Attention : le compteur principal ne doit pas être un compteur virtuel !

### Étape suivante (facultative)

Pour terminer, tu peux encore activer des interfaces ou mettre en œuvre des commandes.

Navigue pour cela dans le menu principal du wiki (en haut) sous :

Configuration ou Interfaces.

## Public Links

Avec l'abonnement Limited ou Professional de smart-me, tu peux, au moyen d'un Public Link, afficher en temps réel la puissance et/ou le relevé du compteur d'un point de mesure ou d'un dossier quelconque de ton infrastructure de mesure smart-me sur une page d'accueil de ton choix.

Pour cela, clique en haut à droite dans le portail smart-me sur Configuration (Konfiguration) et sélectionne ensuite la tuile Public Links.

Sur l'interface qui apparaît maintenant, tu peux déterminer le nom de ton Public Link via le bouton Ajouter (Hinzufügen), ainsi que sélectionner le point de mesure souhaité et la forme de représentation. Le code HTML pour l'intégration sur la page d'accueil de ton choix est ensuite créé. Insère-le au moyen d'un copier-coller.

![Visualisation et Public Links – Illustration 15](/img/konfiguration-visualisierung/15.png)
