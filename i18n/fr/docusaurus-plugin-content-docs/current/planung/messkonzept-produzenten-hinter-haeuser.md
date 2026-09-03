---
title: 'Schéma de mesure producteurs derrière les maisons'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Nous expliquons ici quelles mesures doivent être prises pour représenter le schéma de mesure de plusieurs producteurs situés derrière différentes maisons.'
sidebar_label: 'Schéma de mesure producteurs derrière les maisons'
---
Nous expliquons ici quelles mesures doivent être prises pour représenter le schéma de mesure de plusieurs producteurs situés derrière différentes maisons.

### Condition préalable

Tu as besoin d'un abonnement smart-me Professional

## Remarques importantes

smart-me ne recommande pas ce schéma de mesure pour les raisons suivantes :

- Il n'existe actuellement aucune solution entièrement automatique dans le système smart-me pour représenter ce schéma de mesure.

    - Remarque : les systèmes tiers de smart-me, comme par exemple [egonline](/drittsysteme/egonline), proposent des solutions compatibles avec les compteurs smart-me. Renseigne-toi directement auprès des fournisseurs concernés.

- Il faut compter un travail manuel d'environ 30 minutes par unité de décompte et par période de décompte.

- En raison de la complexité de l'installation, cela peut entraîner de nombreuses questions. smart-me se réserve le droit de facturer le travail lié aux demandes de support.

- La détermination du nombre de kWh vendus mutuellement au sein du RCP (regroupement dans le cadre de la consommation propre) s'effectue en moyenne sur la période de décompte, sur la base de l'excédent des différentes parties. Il en va de même pour la rétrocession au fournisseur d'électricité.

- L'autoconsommation de chaque maison disposant également d'une installation photovoltaïque ne peut pas être déterminée.

- Les graphiques mis à disposition par smart-me ne sont pas compatibles avec ce schéma de mesure.


smart-me se réserve le droit de lister d'autres restrictions. Actuellement, seuls quelques bâtiments sont équipés de ce schéma de mesure. C'est la raison pour laquelle smart-me ne concentre pas ses efforts sur le développement de ces objets. Il est possible qu'ils deviennent plus simples à l'avenir, mais nous ne mettons pas l'accent sur ce schéma de mesure lors du développement.

## Schéma de mesure

Le bilan, les maisons et, s'ils existent, les services généraux sont mesurés.

La mesure du PV est facultative et n'offre aucun avantage pour le décompte.

![Schéma de mesure producteurs derrière les maisons – Illustration 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Schéma de mesure producteurs derrière les maisons – Illustration 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Configuration

Les indications ci-dessous supposent que la configuration pour un [Billing](/konfiguration/billing) smart-me avec le schéma de mesure standard est connue.

Compteurs virtuels

Somme de tous les compteurs pertinents pour le décompte.

Nom : Consommation totale + production (Gesamtverbrauch + Produktion)



![Schéma de mesure producteurs derrière les maisons – Illustration 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Tarifs virtuels

Configuration [Billing](/konfiguration/billing) selon le schéma de mesure standard

Écart au niveau du tarif virtuel :

- Type de tarif (Tarif Typ) : tarif de batterie (Batterie Tarif)

- Compteur solaire ou de batterie (Solar oder Batterie Zähler) : consommation totale + production (Gesamtverbrauch + Produktion)

- Consommation totale (Gesamtverbrauch) : consommation totale + production (Gesamtverbrauch + Produktion)

- Compteur de bilan (Bilanzzähler) : compteur principal (Hauptzähler)


![Schéma de mesure producteurs derrière les maisons – Illustration 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Décompte

Les indications ci-dessous supposent que le décompte pour un [Billing](/konfiguration/billing) smart-me avec le schéma de mesure standard est connu.

Remplir le fichier Excel

- [Schéma de mesure producteurs derrière les maisons](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 


But du fichier Excel

- Détermine le montant pouvant être crédité par partie.


Informations nécessaires

- Décompte du fournisseur d'électricité local

- Valeurs du rapport issues de smart-me

- Factures PDF (Billing) issues de smart-me.


Logique de calcul

- L'excédent par maison est déterminé (cellules B35 à B43)

- La part d'électricité PV par maison est déterminée (cellules C35 à C43)

- Répartition proportionnelle selon l'excédent, moyennée sur toute la période de décompte


![Schéma de mesure producteurs derrière les maisons – Illustration 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Compléter la position Divers (Sonstiges)

Les valeurs correspondant au crédit calculé dans le fichier Excel peuvent être insérées comme montant négatif par unité de décompte.

![Schéma de mesure producteurs derrière les maisons – Illustration 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Générer à nouveau la facture

Dans smart-me Billing

![Schéma de mesure producteurs derrière les maisons – Illustration 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
