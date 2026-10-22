---
title: 'Définir les tarifs d''électricité (Allemagne)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Tarifs virtuels pour l''électricité pour les locataires en Allemagne : tarif solaire incl. RCP virtuel (vRCP) ou tarif solaire basé sur la consommation et le PV, avec ou sans tarif batterie.'
sidebar_label: 'Définir les tarifs d''électricité'
naechste_schritte: [konfiguration/billing-deutschland/index]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
---

Pour l'électricité pour les locataires, il faut **toujours travailler avec des tarifs virtuels**. C'est la seule façon d'indiquer, pour chaque unité de décompte, quelle part de l'électricité provient de l'installation solaire et quelle part provient du réseau — et c'est précisément ce qu'exige le décompte selon le § 42 EnWG.


## Procurez-vous la grille tarifaire de votre fournisseur d'énergie


## Saisie du tarif réseau


## Calcul et saisie des tarifs solaire et batterie

### Configurer les tarifs d'électricité pour le schéma de mesure standard

#### Tarification avec tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est référencé pour le calcul de la tarification.

Avec le tarif solaire incl. vRCP, aucune licence supplémentaire pour les compteurs virtuels n'est due.

Compteur de bilan

Le compteur de raccordement du bâtiment est référencé comme compteur de bilan.

![Schéma de mesure standard – Figure 2](/img/planung-standard-messkonzept/02.png)

Compteur de production

Tous les compteurs de production et compteurs de batterie sont saisis comme production.

![Schéma de mesure standard – Figure 3](/img/planung-standard-messkonzept/03.png)

#### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire (consommation / PV), des licences supplémentaires pour les compteurs virtuels sont dues.

La consommation totale est requise au minimum. Elle est créée comme compteur virtuel composé de tous les départs participant à l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Appartement 2.1 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous Production, on ajoute à chaque fois le compteur de l'installation solaire ou, pour le tarif batterie, le compteur de batterie.

Pour la consommation totale, on enregistre la consommation totale créée virtuellement.

Le compteur de bilan est ici volontairement référencé afin d'augmenter la précision !

![Schéma de mesure standard – Figure 4](/img/planung-standard-messkonzept/04.png)


### Configurer les tarifs d'électricité pour MKD3 avec non-participants

#### Tarification avec tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire incl. vRCP, aucune licence supplémentaire pour les compteurs virtuels n'est due.

Compteur de bilan

Tous les appartements / places de parc participants et les productions comme compteurs de bilan.

![Schéma de mesure MKD3 (avec non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteur de production

Saisir tous les compteurs de production comme production


![Schéma de mesure MKD3 (avec non-participants) – Figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

#### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire (consommation / PV), des licences supplémentaires pour les compteurs virtuels sont dues.

La consommation totale est requise au minimum. Elle est créée comme compteur virtuel composé de tous les départs participant à l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous Production, on ajoute à chaque fois le compteur de l'installation solaire ou, pour le tarif batterie, le compteur de batterie.

Pour la consommation totale, on enregistre la consommation totale créée virtuellement.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – Figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)



### Définition des composantes tarifaires par type d'électricité

Plus bas, sous « Divers » ("Sonstiges"), vous pouvez définir les composantes tarifaires par type d'électricité (réseau et solaire). L'objectif est de montrer au client final comment son prix de l'électricité est constitué. Vous devez le faire aussi bien pour l'électricité du réseau que pour l'électricité solaire. Ensemble, les composantes doivent correspondre au prix que vous avez défini par type d'électricité (fixé dans les [tarifs virtuels](/konfiguration/billing)) ; sinon, le Billing affiche un message d'erreur.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

Vous pouvez soit insérer directement les composantes tarifaires standard pour l'électricité pour les locataires, soit saisir des composantes tarifaires individuelles via « Modifier » ("Editieren").

Important : choisissez le bon type lors de la modification, c'est-à-dire précisez s'il s'agit d'une composante tarifaire de l'électricité du réseau (électricité résiduelle) ou de l'électricité solaire.


Important : les indications sur la composition des composantes pour l'électricité du réseau (électricité résiduelle) vous sont fournies par le fournisseur d'électricité résiduelle que vous avez choisi.

L'électricité solaire se compose généralement uniquement de la contribution EEG (EEG-Umlage) et du prix de production.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

Une configuration terminée peut ressembler à ceci :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

Vous avez ainsi effectué tous les réglages au niveau de l'immeuble.  Pour terminer, vous devez encore saisir, dans chaque unité d'habitation, le numéro de client ainsi que les indications relatives au contrat et à sa durée.
