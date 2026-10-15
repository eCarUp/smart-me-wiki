---
title: 'Schéma de mesure pour producteurs derrière les maisons'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Nous expliquons ici les mesures à prendre pour représenter le schéma de mesure de plusieurs producteurs situés derrière différentes maisons.'
sidebar_label: 'Schéma de mesure pour producteurs derrière les maisons'
---
Nous expliquons ici les mesures à prendre pour représenter le schéma de mesure de plusieurs producteurs situés derrière différentes maisons.

### Prérequis

Vous avez besoin d'un abonnement smart-me Professional

## Remarques importantes

smart-me déconseille ce schéma de mesure pour les raisons suivantes :

- Il n'existe actuellement aucune solution entièrement automatique dans le système smart-me pour représenter ce schéma de mesure.

    - Remarque : des systèmes tiers de smart-me, comme [egonline](/drittsysteme/egonline), proposent des solutions compatibles avec les compteurs smart-me. Veuillez vous renseigner directement auprès des fournisseurs concernés.

- Il faut compter avec un travail manuel d'environ 30 minutes par unité de décompte et par période de décompte.

- En raison de la complexité de l'installation, cela peut entraîner de nombreuses questions. smart-me se réserve le droit de facturer le temps consacré aux demandes de support.

- La détermination du nombre de kWh vendus mutuellement au sein du RCP (regroupement dans le cadre de la consommation propre) se fait en moyenne sur la période de décompte, sur la base de l'excédent de chaque partie. Il en va de même pour la restitution au fournisseur d'électricité.

- L'autoconsommation de chaque maison disposant également d'une installation photovoltaïque ne peut pas être déterminée.

- Les graphiques mis à disposition par smart-me ne sont pas compatibles avec ce schéma de mesure.


smart-me se réserve le droit d'énumérer d'autres restrictions. Actuellement, seuls quelques bâtiments sont équipés de ce schéma de mesure. C'est pourquoi smart-me ne se concentre pas sur le développement de ces objets. Il est possible qu'ils deviennent plus simples à l'avenir, mais nous ne mettons pas l'accent sur ce schéma de mesure dans nos développements.

## Schéma de mesure

Le bilan, les maisons et, le cas échéant, les parties communes sont mesurés.

La mesure du PV est facultative et n'apporte aucun avantage pour le décompte.

![Schéma de mesure pour producteurs derrière les maisons – Figure 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Schéma de mesure pour producteurs derrière les maisons – Figure 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Configuration

Les indications ci-dessous supposent que la configuration d'un smart-me [Billing](/konfiguration/billing) avec le schéma de mesure standard est connue.

Compteurs virtuels (Virtuelle Zähler)

Somme de tous les compteurs pertinents pour le décompte.

Nom : Consommation totale + production (Gesamtverbrauch + Produktion)



![Schéma de mesure pour producteurs derrière les maisons – Figure 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Tarifs virtuels (Virtuelle Tarife)

Configuration [Billing](/konfiguration/billing)\- selon le schéma de mesure standard 

Différence pour le tarif virtuel :

- Type de tarif (Tarif Typ) : Tarif batterie (Batterie Tarif)

- Compteur solaire ou batterie (Solar oder Batterie Zähler) : Consommation totale + production (Gesamtverbrauch + Produktion)

- Consommation totale (Gesamtverbrauch) : Consommation totale + production (Gesamtverbrauch + Produktion)

- Compteur de bilan (Bilanzzähler) : Compteur principal (Hauptzähler)


![Schéma de mesure pour producteurs derrière les maisons – Figure 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Décompte

Les indications ci-dessous supposent que le décompte d'un smart-me [Billing](/konfiguration/billing) avec le schéma de mesure standard est connu.

Remplir le fichier Excel

- [Schéma de mesure pour producteurs derrière les maisons](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 

Objectif du fichier Excel

- Détermine le montant pouvant être crédité à chaque partie.

Informations nécessaires

- Décompte du fournisseur d'électricité local

- Valeurs de rapport issues de smart-me

- Factures PDF (Billing) issues de smart-me.

Logique de calcul

- L'excédent par maison est déterminé (cellules B35 à B43)

- La part d'électricité PV par maison est déterminée (cellules C35 à C43)

- Répartition proportionnelle selon l'excédent, en moyenne sur toute la période de décompte

![Schéma de mesure pour producteurs derrière les maisons – Figure 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Ajouter une position Divers (Sonstiges)

Les valeurs selon le crédit calculé dans le fichier Excel peuvent être saisies comme montant négatif pour chaque unité de décompte.

![Schéma de mesure pour producteurs derrière les maisons – Figure 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Générer à nouveau la facture (Rechnung erneut erzeugen)

Dans smart-me Billing

![Schéma de mesure pour producteurs derrière les maisons – Figure 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
