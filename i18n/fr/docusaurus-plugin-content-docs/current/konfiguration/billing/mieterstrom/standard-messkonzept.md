---
title: 'Schéma de mesure standard'
slug: '/konfiguration/billing/mieterstrom/standard-messkonzept'
description: 'Tarification du schéma de mesure standard'
sidebar_label: 'Schéma de mesure standard'
---
![Schéma de mesure standard – illustration 1](/img/konfiguration-billing-mieterstrom-standard-messkonzept/01.png)

## Tarification du schéma de mesure standard

La tarification du schéma de mesure s'effectue via le compteur de bilan et la production ou, à défaut, via consommation / PV ou batterie avec référencement du compteur de bilan.

### Tarification avec tarif solaire y compris RCP virtuel (vRCP)

Le compteur de bilan est référencé pour le calcul de la tarification.

En cas d'utilisation du tarif solaire y compris vRCP, aucune licence supplémentaire n'est due pour les compteurs virtuels.

Compteur de bilan

Le compteur du raccordement de l'immeuble est référencé comme compteur de bilan.

![Schéma de mesure standard – illustration 2](/img/konfiguration-billing-mieterstrom-standard-messkonzept/02.png)

Compteur de production

Tous les compteurs de production et compteurs de batterie sont saisis comme production.

![Schéma de mesure standard – illustration 3](/img/konfiguration-billing-mieterstrom-standard-messkonzept/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif de batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification, il n'est pris en compte que plus tard, pour la vérification.

En cas d'utilisation du tarif solaire (consommation / PV), des licences supplémentaires sont dues pour les compteurs virtuels.

La consommation totale est requise au minimum. Celle-ci est créée en tant que compteur virtuel composé de tous les départs participants de l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Appartement 2.1 + Général + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous production, on ajoute chaque fois le compteur de l'installation solaire, respectivement le compteur de batterie dans le cas du tarif de batterie.

Pour la consommation totale, on renseigne la consommation totale créée virtuellement.

Le compteur de bilan est ici sciemment référencé afin d'augmenter la précision !

![Schéma de mesure standard – illustration 4](/img/konfiguration-billing-mieterstrom-standard-messkonzept/04.png)

### Validation et décompte du fournisseur d'électricité

Les totaux de l'électricité du réseau vendue correspondent approximativement à la quantité d'électricité facturée par le fournisseur d'électricité

La quantité d'électricité réinjectée dans le registre d'exportation du compteur de bilan correspond approximativement à la valeur de la quantité figurant dans la rétribution d'injection du fournisseur d'électricité.
