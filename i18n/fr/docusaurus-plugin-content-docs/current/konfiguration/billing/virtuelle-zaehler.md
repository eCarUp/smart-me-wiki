---
title: 'Compteurs virtuels'
slug: '/konfiguration/billing/virtuelle-zaehler'
description: 'Les compteurs virtuels permettent d''effectuer des opérations mathématiques sur plusieurs compteurs physiques.'
sidebar_label: 'Compteurs virtuels'
---
Les compteurs virtuels permettent d'effectuer des opérations mathématiques sur plusieurs compteurs physiques. Cette fonction est le plus souvent utilisée en lien avec smart-me Billing.

## Condition préalable

Des licences Professional sont nécessaires aussi bien pour les compteurs réels à partir desquels tu crées le compteur virtuel que pour le compteur virtuel lui-même.

## Utilisation

Les compteurs virtuels sont utilisés dans le [Billing](/konfiguration/billing) pour facturer le tarif solaire.

- Ils permettent de calculer la somme de tous les consommateurs (consommation totale dans le tarif solaire).

- La somme de toutes les installations solaires peut être formée, pour autant que celles-ci soient mesurées séparément dans un immeuble.


Visualisations

- Si le compteur de bilan n'a pas été installé dans un immeuble, il peut être nécessaire de calculer la consommation totale pour certaines [visualisations](/konfiguration/visualisierung).

- Si un immeuble comporte des installations solaires mesurées séparément et qu'une visualisation avec le solaire est souhaitée.


### Restriction

Dans le Billing, les compteurs virtuels ne peuvent pas être attribués à une unité de décompte.

- Les compteurs virtuels peuvent certes être utilisés pour les structures tarifaires virtuelles dans le Billing, mais il n'est pas autorisé d'établir un décompte avec des compteurs calculés virtuellement. C'est pourquoi le choix d'un compteur virtuel n'est pas proposé dans le Billing.


## Créer un compteur virtuel

Pour créer un compteur virtuel, procède comme suit:

- Connecte-toi sur le [site web](https://web.smart-me.com/login/) de smart-me.

- Clique sur Configuration (Konfiguration)

- Sélectionne Compteurs virtuels (Virtuelle Zähler)

- Clique sur Ajouter (Hinzufügen)

- Saisis un nom pour le compteur virtuel.

- En cliquant dans le champ de texte de la formule, tous les compteurs disponibles s'affichent.

- Il faut ensuite insérer un opérateur et le confirmer avec Enter (p. ex. «+»)

- Ajoute tous les compteurs souhaités et complète-les avec l'opérateur correspondant.


Remarque: si le compteur virtuel est créé comme compteur de consommation totale pour le Billing, nous recommandons de lui attribuer le nom Consommation totale (Gesamtverbrauch).

![Compteurs virtuels – Illustration 1](/img/konfiguration-billing-virtuelle-zaehler/01.png)

### Opérateurs pris en charge

- () Parenthèses

- + Plus

- − Moins

- \* Multiplication

- / Division

- abs() Valeur absolue


## Créer un compteur de consommation totale pour le tarif solaire et le tarif de batterie

La fonction Additionner tous les compteurs d'électricité (Summiere alle Stromzähler) est utile lorsque l'environnement comporte de nombreux compteurs. Elle permet de former la somme de tous les compteurs.

- Saisis un nom pour le compteur virtuel.

- Sous Formule (Formel), sélectionne la flèche vers le bas à droite.

- Sélectionne Additionner tous les compteurs d'électricité (Summieren alle Stromzähler).

- Si des compteurs (p. ex. solaire ou bilan) ne sont pas nécessaires, ils doivent être supprimés. Les compteurs et les «+» correspondants doivent être supprimés.


![Compteurs virtuels – Illustration 2](/img/konfiguration-billing-virtuelle-zaehler/02.png)

### Ajouter les bons compteurs à la consommation totale virtuelle

- Il faut veiller à ce que la somme des compteurs couvre exactement 100% des puissances soutirées.

- Pour les appareils en série, seuls les appareils situés plus près du sous-distributeur ou du raccordement de l'immeuble sont pertinents. (Exemple: électromobilité)
    Il faut veiller à ce que, lorsque le départ est référencé, les bornes de recharge situées en aval soient retirées de la somme.


![Compteurs virtuels – Illustration 3](/img/konfiguration-billing-virtuelle-zaehler/03.png)
