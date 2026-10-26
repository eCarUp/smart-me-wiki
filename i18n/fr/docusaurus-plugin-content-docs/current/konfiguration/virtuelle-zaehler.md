---
title: 'Compteurs virtuels'
slug: '/konfiguration/virtuelle-zaehler'
description: 'Les compteurs virtuels permettent d''effectuer des opérations mathématiques sur plusieurs compteurs physiques.'
sidebar_label: 'Compteurs virtuels'
---
<Menueweg>Compteurs virtuels</Menueweg>

Les compteurs virtuels permettent d'effectuer des opérations mathématiques sur plusieurs compteurs physiques. Ils sont le plus souvent utilisés en lien avec le smart-me Billing.

## Prérequis

Vous avez besoin de licences Professional pour les compteurs réels à partir desquels vous créez le compteur virtuel, ainsi que pour le compteur virtuel lui-même.

## Utilisation

Les compteurs virtuels sont utilisés dans le [Billing](/konfiguration/billing) pour facturer le tarif solaire.

- Ils permettent de calculer la somme de tous les consommateurs (consommation totale au tarif solaire).

- Ils permettent de calculer la somme de toutes les installations solaires, si celles-ci sont mesurées séparément dans un immeuble.


Visualisations

- Si aucun compteur de bilan n'a été installé dans un immeuble, il peut être nécessaire de calculer la consommation totale pour certaines [visualisations](/konfiguration/visualisierung).

- Si un immeuble comporte des installations solaires mesurées séparément et qu'une visualisation avec le solaire est souhaitée.


### Restriction

Dans le Billing, les compteurs virtuels ne peuvent pas être attribués à une unité de décompte.

- Les compteurs virtuels peuvent certes être utilisés pour les structures tarifaires virtuelles du Billing, mais il n'est pas permis d'établir un décompte à partir de compteurs calculés virtuellement. C'est pourquoi le Billing ne propose pas de sélectionner un compteur virtuel.


## Créer un compteur virtuel

Pour créer un compteur virtuel, procédez comme suit :

- Connectez-vous sur le [site web](https://web.smart-me.com/login/) smart-me.

- Cliquez sur Configuration (Konfiguration)

- Sélectionnez Compteurs virtuels (Virtuelle Zähler)

- Cliquez sur Ajouter (Hinzufügen)

- Saisissez un nom pour le compteur virtuel.

- Un clic dans le champ de texte Formule (Formel) affiche tous les compteurs disponibles.

- Insérez ensuite un opérateur et confirmez avec Entrée (p. ex. "+")

- Ajoutez tous les compteurs souhaités et complétez-les avec l'opérateur correspondant.


Remarque : si le compteur virtuel est créé comme compteur de consommation totale pour le Billing, nous recommandons de lui donner le nom Consommation totale (Gesamtverbrauch).

![Compteurs virtuels – Figure 1](/img/konfiguration-virtuelle-zaehler/01.png)

### Opérateurs pris en charge

- () Parenthèses

- + Plus

- − Moins

- \* Multiplication

- / Division

- abs() Valeur absolue


## Créer un compteur de consommation totale pour le tarif solaire et le tarif batterie

La fonction Additionner tous les compteurs d'électricité (Summiere alle Stromzähler) est utile dans un environnement comportant de nombreux compteurs. Elle permet de calculer la somme de tous les compteurs.

- Saisissez un nom pour le compteur virtuel.

- Sous Formule (Formel), sélectionnez la flèche vers le bas à droite.

- Sélectionnez Additionner tous les compteurs d'électricité (Summieren alle Stromzähler).

- Si des compteurs (p. ex. solaire ou bilan) ne sont pas nécessaires, ils doivent être supprimés. Les compteurs ainsi que les "+" correspondants doivent être supprimés.


![Compteurs virtuels – Figure 2](/img/konfiguration-virtuelle-zaehler/02.png)

### Ajouter les bons compteurs à la consommation totale virtuelle

- Veillez à ce que la somme des compteurs couvre exactement 100% des puissances soutirées.

- Pour les appareils montés en série, seuls ceux qui se trouvent le plus près du tableau divisionnaire ou du raccordement de l'immeuble sont pertinents. (Exemple : électromobilité)
    Si le départ est référencé, veillez à retirer de la somme les bornes de recharge situées en aval.


![Compteurs virtuels – Figure 3](/img/konfiguration-virtuelle-zaehler/03.png)
