---
title: 'Définir les tarifs d''électricité (Allemagne)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Tarifs virtuels pour l''électricité pour les locataires en Allemagne : tarif solaire incluant le RCP virtuel (vRCP) ou tarif solaire basé sur la consommation et la PV, avec ou sans tarif batterie.'
sidebar_label: 'Définir les tarifs d''électricité'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---
<Menueweg>Facturation → Immeubles & tarifs</Menueweg>

Pour l'électricité pour les locataires, il faut **toujours travailler avec des tarifs virtuels**. C'est la seule façon d'indiquer, pour chaque unité de décompte, quelle part de l'électricité provient de l'installation solaire et quelle part provient du réseau — et c'est précisément ce qu'exige le décompte selon le § 42 EnWG.

## Où trouver les tarifs

<Menueweg>Facturation → Immeubles & tarifs</Menueweg>

- À gauche, sélectionnez l'immeuble (dossier principal, p. ex. Altgasse 13)
- Ajoutez des tarifs d'électricité virtuels (Virtuelle Stromtarife Hinzufügen). (p. ex. heures pleines, heures creuses, tarif solaire)


## Procurez-vous la grille tarifaire de votre fournisseur d'énergie


## Saisie du tarif de réseau


## Calcul et saisie des tarifs solaires et batterie

### Configurer les tarifs d'électricité – schéma de mesure standard

#### Tarification avec tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est référencé pour le calcul de la tarification.

En utilisant le tarif solaire incl. vRCP, aucune licence supplémentaire pour compteurs virtuels n'est facturée.

**Compteur de bilan (Bilanzzähler)**

Le compteur du raccordement de l'immeuble est référencé comme compteur de bilan.

![Définir les tarifs d'électricité (Allemagne) – Figure 1](/img/konfiguration-billing-deutschland-stromtarife-definieren/01.png)

**Compteur de production (Produktionszähler)**

Tous les compteurs de production et compteurs de batterie sont saisis comme production.

![Définir les tarifs d'électricité (Allemagne) – Figure 2](/img/konfiguration-billing-deutschland-stromtarife-definieren/02.png)

#### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

- Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est consulté que plus tard, à des fins de vérification.

- En utilisant le tarif solaire (consommation / PV), des licences supplémentaires pour compteurs virtuels sont facturées.

- La consommation totale est requise au minimum. Elle est créée sous forme de compteur virtuel composé de tous les départs participant à l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Appartement 2.1 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

- Sous Production, ajoutez à chaque fois le compteur de l'installation solaire, ou le compteur de batterie pour le tarif batterie.

- Pour la consommation totale, la consommation totale créée virtuellement est enregistrée.

- Le compteur de bilan est ici volontairement référencé afin d'augmenter la précision !

![Définir les tarifs d'électricité (Allemagne) – Figure 3](/img/konfiguration-billing-deutschland-stromtarife-definieren/03.png)


### Configurer les tarifs d'électricité – MKD3 avec non-participants

#### Tarification avec tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est consulté que plus tard, à des fins de vérification.

En utilisant le tarif solaire incl. vRCP, aucune licence supplémentaire pour compteurs virtuels n'est facturée.

Compteur de bilan (Bilanzzähler)

Tous les appartements / places de parc participants et les productions comme compteurs de bilan.

![Définir les tarifs d'électricité (Allemagne) – Figure 4](/img/konfiguration-billing-deutschland-stromtarife-definieren/04.png)

Compteur de production (Produktionszähler)

Saisir tous les compteurs de production comme production


![Définir les tarifs d'électricité (Allemagne) – Figure 5](/img/konfiguration-billing-deutschland-stromtarife-definieren/05.png)

#### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est consulté que plus tard, à des fins de vérification.

En utilisant le tarif solaire (consommation / PV), des licences supplémentaires pour compteurs virtuels sont facturées.

La consommation totale est requise au minimum. Elle est créée sous forme de compteur virtuel composé de tous les départs participant à l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous Production, ajoutez à chaque fois le compteur de l'installation solaire, ou le compteur de batterie pour le tarif batterie.

Pour la consommation totale, la consommation totale créée virtuellement est enregistrée.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Définir les tarifs d'électricité (Allemagne) – Figure 6](/img/konfiguration-billing-deutschland-stromtarife-definieren/06.png)



### Définition des composantes tarifaires par type d'électricité

Plus bas, sous « Divers » (« Sonstiges »), vous pouvez définir les composantes tarifaires par type d'électricité (réseau et solaire). Cela permet de montrer au client final comment se compose son prix de l'électricité. Vous devez le faire aussi bien pour l'électricité du réseau que pour l'électricité solaire. Additionnées, les composantes doivent correspondre au prix que vous avez défini par type d'électricité (que vous avez fixé dans les [tarifs virtuels](/konfiguration/billing)) ; sinon, le Billing affiche un message d'erreur.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 8](/img/konfiguration-billing-mieterstrom/08.png)

Vous pouvez soit insérer directement les composantes tarifaires standard pour l'électricité pour les locataires, soit saisir des composantes tarifaires individuelles via « Modifier » (« Editieren »).

Important : lors de la modification, choisissez le bon type, c'est-à-dire précisez s'il s'agit d'une composante tarifaire de l'électricité du réseau (électricité résiduelle) ou de l'électricité solaire.


Important : vous obtenez les informations sur la composition des composantes de l'électricité du réseau (électricité résiduelle) auprès du fournisseur d'électricité résiduelle que vous avez choisi.

L'électricité solaire se compose généralement uniquement du prélèvement EEG et du prix de production.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 9](/img/konfiguration-billing-mieterstrom/09.png)

Une configuration terminée peut se présenter ainsi :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 10](/img/konfiguration-billing-mieterstrom/10.png)

Vous avez ainsi effectué tous les réglages au niveau de l'immeuble.
