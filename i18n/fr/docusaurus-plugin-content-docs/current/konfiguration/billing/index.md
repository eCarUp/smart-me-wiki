---
title: 'Décompte de l''énergie (Suisse)'
slug: '/konfiguration/billing'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques.'
sidebar_label: 'Facturation'
naechste_schritte: [konfiguration/billing/einstellungen]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
<Menueweg>Facturation</Menueweg>

### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques. 

## Configurer le décompte étape par étape

Ce guide étape par étape a pour but de vous accompagner dans la configuration de votre Billing. Veuillez noter qu'il ne s'agit que d'un exemple sur lequel vous pouvez vous appuyer. Selon la structure de votre immeuble, il y aura des différences par rapport à notre exemple. 

Chaque étape a sa propre page. Vous pouvez les parcourir dans l'ordre (le bas de chaque page indique la suite) ou passer directement d'ici à l'étape où vous en êtes.

<Ablauf land="ch" bis="konfiguration/billing/rechnung-erstellen" />

## Outils

[Calculateur de tarif d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinaire smart-me Billing de A à Z

Notre webinaire explique étape par étape comment établir des décomptes des coûts énergétiques avec l'outil Billing :

<div className="row">
<div className="col col--6">

<Video src="0AvKOogoW5Q" title="Vidéo YouTube, smart-me Billing pour utilisateurs avancés" />

</div>
<div className="col col--6">

<Video src="mK1HYLRtBUI" title="Vidéo YouTube, smart-me Billing - tarifs virtuels, puissance de pointe, modifier la location du compteur" />

Contenu de la vidéo

- Passage de la configuration heures pleines et heures creuses à un tarif unique

- Adaptation des prix des tarifs virtuels

- Puissance de pointe

- Location du compteur

</div>
</div>

## Exemples de factures smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Exemple : décompte d'électricité

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Exemple : décompte VEWA

## Remarques utiles sur les données tarifaires

### Visualisation

<div className="row">
<div className="col col--7">

Dans la vue standard du dossier de l'unité de décompte (p. ex. un appartement), une nouvelle tuile s'affiche désormais. Elle indique les relevés du compteur pour les tarifs virtuels. Un clic sur cette tuile affiche la courbe de charge des tarifs virtuels. 

</div>
<div className="col col--5 bild--mitte">

![Billing : décompte de l'énergie – Figure 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Comment l'électricité solaire est-elle répartie

<div className="row">
<div className="col col--7">

La plateforme smart-me utilise le compteur de production (compteur PV) pour déterminer la quantité d'électricité produite et le compteur virtuel de consommation totale pour déterminer la quantité d'électricité consommée. Une part en pourcentage d'électricité solaire en est déduite. 

Chaque compteur d'électricité (locataire) a ainsi droit à la même part d'électricité solaire par tranche de 15 minutes, p. ex. 40 % de sa consommation en kWh.

Exemple de répartition de l'électricité solaire

- Consommation totale 10kWh

- Électricité solaire 6kWh (60% solaire / 40% réseau)

- Consommation locataire 1 6kWh (3,6kWh solaire / 2,4kWh réseau)

- Consommation locataire 2 4kWh (2,4kWh solaire / 1,6 kWh réseau)

La précision peut être améliorée en configurant le compteur de bilan pour le tarif solaire.

</div>
<div className="col col--5 bild--mitte">

![Billing : décompte de l'énergie – Figure 13](/img/konfiguration-billing/13.png)

</div>
</div>
