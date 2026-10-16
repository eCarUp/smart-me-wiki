---
title: 'Billing : décompte de l''énergie'
slug: '/konfiguration/billing'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des décomptes de coûts énergétiques.'
sidebar_label: 'Facturation'
naechste_schritte: [konfiguration/benutzerkonfiguration]
---
### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes de coûts énergétiques. 

## Outils

[Calculateur de tarif d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinaire smart-me Billing de A à Z

Notre webinaire explique pas à pas comment établir des décomptes de coûts énergétiques avec l'outil Billing :

<Video src="0AvKOogoW5Q" title="Vidéo YouTube, smart-me Billing pour utilisateurs avancés" />

<Video src="mK1HYLRtBUI" title="Vidéo YouTube, smart-me Billing - tarifs virtuels, puissance de pointe, modifier la location du compteur" />

Contenu de la vidéo

- Configuration des heures pleines et heures creuses en tarif unique

- Adaptation des prix des tarifs virtuels

- Puissance de pointe

- Location du compteur


## Exemples de factures smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Exemple : décompte d'électricité

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Exemple : décompte VEWA

## Configurer le décompte pas à pas

Avec ce guide pas à pas, nous souhaitons vous aider à configurer votre Billing. Veuillez noter qu'il ne s'agit que d'un exemple dont vous pouvez vous inspirer. Selon la structure de votre immeuble, il y aura des différences par rapport à notre exemple. 

## Paramètres de facturation

<div className="row">
<div className="col col--7">

Rendez-vous d'abord dans les paramètres de facturation (Einstellungen der Rechnungsstellung).

Configurez ici la devise et l'application de la taxe sur la valeur ajoutée.

Paramètres concrets pour la TVA :

- Cas A : vous êtes un RCP (regroupement dans le cadre de la consommation propre), réalisez avec certitude un chiffre d'affaires inférieur à 100'000CHF avec l'électricité et ne vous êtes pas assujetti volontairement à la TVA :

    \- TVA 0%

    \- Taxe déjà incluse dans les prix (Steuer in Preise bereits inbegriffen) : OUI

- Cas B : vous êtes un RCP et réalisez un chiffre d'affaires de 100'000 CHF ou plus avec les ventes d'électricité, ou vous êtes assujetti volontairement à la TVA :

    \- TVA 8.1%

    \- Taxe déjà incluse dans les prix (Steuer in Preise bereits inbegriffen) : NON

</div>
<div className="col col--5 text--center">

![Billing : décompte de l'énergie – figure 1](/img/konfiguration-billing/01.png)

![Billing : décompte de l'énergie – figure 2](/img/konfiguration-billing/02.png)

</div>
</div>

Profitez-en pour configurer également votre logo pour la facture.

Complétez l'en-tête avec le contact et l'adresse de l'expéditeur de la facture et adressez quelques mots aimables à vos clients dans le pied de page.

![Billing : décompte de l'énergie – figure 3](/img/konfiguration-billing/03.png)

## Configuration de la facturation

<div className="row">
<div className="col col--5">

Rendez-vous maintenant dans la configuration de la facturation (Rechnungsstellung Konfiguration) pour configurer les décomptes des immeubles.

</div>
<div className="col col--7 text--center">

![Billing : décompte de l'énergie – figure 4](/img/konfiguration-billing/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

1.  ### Créer l'immeuble

Dans la facturation, l'immeuble peut être ajouté (créé). 

Cette opération est effectuée pour tous les nœuds qui contiennent des unités de décompte.

Lors de cette étape, tous les sous-dossiers déjà créés et les compteurs attribués sont automatiquement associés. C'est pourquoi nous recommandons de le faire avant de créer l'immeuble dans smart-me Billing.

Les points de mesure qui doivent être répartis et qui se trouvent dans le nœud « Compteur technique » (« Technischen Zähler ») doivent encore être attribués manuellement.

</div>
<div className="col col--6 text--center">

![Billing : décompte de l'énergie – figure 5](/img/konfiguration-billing/05.png)

</div>
</div>

### 2\. Attribuer manuellement un compteur à une unité de décompte

<div className="row">
<div className="col col--7">

Lors de la création de l'immeuble, les compteurs sont automatiquement attribués à 100% à l'unité de décompte (dossier).

Si vous souhaitez répartir un compteur (p. ex. parties communes) selon une clé de répartition ou modifier l'attribution ultérieurement, cela doit être fait manuellement.

- Sélectionnez à gauche l'unité de décompte (sous-dossier, p. ex. APP 1)

- Cliquez p. ex. pour l'électricité sur Ajouter (Hinzufügen) 

- Sélectionnez le compteur souhaité et indiquez à quel pourcentage il doit être facturé.

La procédure décrite fonctionne de manière analogue pour les autres types d'énergie (chaleur, froid, etc.)

</div>
<div className="col col--5 text--center">

![Billing : décompte de l'énergie – figure 6](/img/konfiguration-billing/06.png)

</div>
</div>

### 3\. Enregistrer l'IBAN

<div className="row">
<div className="col col--7">

Dans smart-me Billing, la QR-facture peut être activée en option.

Après l'enregistrement des coordonnées bancaires, une QR-facture pour le paiement est jointe pour chaque unité de décompte (locataire).

smart-me reconnaît automatiquement les expéditeurs correctement renseignés lorsque l'adresse de facturation dans le Billing est saisie sur 3 lignes. Si une entreprise ou une formule d'appel est choisie, celle-ci doit être ajoutée avant le nom.

p. ex.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Si aucune adresse correcte n'est reconnue, le champ expéditeur (Payable par) reste vide sur la QR-facture.

smart-me ne prend pas en charge les numéros de référence. Pour pouvoir les utiliser, un [système tiers](/drittsysteme) qui les prend également en charge est nécessaire (p. ex.[Bexio](/drittsysteme/bexio)). 

Afin d'identifier la facture sans référence, une information supplémentaire (communication au bénéficiaire) est ajoutée sur la QR-facture ; elle se compose comme suit : nom de l'unité de décompte (nom du dossier).

La présentation est optimisée pour l'envoi par e-mail. Si les factures sont imprimées, nous recommandons de désactiver la QR-facture et de la commander auprès de la banque.

</div>
<div className="col col--5 text--center">

![Billing : décompte de l'énergie – figure 7](/img/konfiguration-billing/07.jpg)

![Billing : décompte de l'énergie – figure 8](/img/konfiguration-billing/08.png)

</div>
</div>

### 4\. Saisir l'état locatif

Pour le décompte selon VEWA, tous les contrats de bail et les logements vacants doivent être indiqués sans lacune chez smart-me.

- Menu Facturation (Rechnungsstellung)

- Configuration (Konfiguration)

- Sélectionner à gauche l'unité de décompte (sous-dossier, p. ex. APP 1)

- Gérer l'adresse et la validité

- L'e-mail est facultatif et n'est utilisé que pour l'envoi automatique des factures.


Remarque pour l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser la VEWA mais exportez les données vers un autre système, vous n'avez pas besoin de saisir l'état locatif ; celui-ci est créé via le fichier d'import.
Veillez à ce que tous les baux et logements vacants soient répertoriés.

![Billing : décompte de l'énergie – figure 9](/img/konfiguration-billing/09.png)

![Billing : décompte de l'énergie – figure 10](/img/konfiguration-billing/10.png)

### 5\. Configurer les tarifs d'électricité

- Menu Facturation (Rechnungsstellung)

- Configuration (Konfiguration)

- Sélectionner à gauche l'immeuble (dossier principal, p. ex. Altgasse 13)

- Ajouter des tarifs d'électricité virtuels (Virtuelle Stromtarife Hinzufügen). (p. ex. heures pleines, heures creuses, tarif solaire)


### 6\. Configurer la chaleur / l'eau

Pour la tarification et le décompte multi-énergies, il existe en principe deux possibilités de configuration :

Décompte sans la fonction VEWA

- Décompte au moyen d'un tarif énergétique calculé en externe par type d'énergie. Il est géré avec un prix en CHF/m3 ou CHF/kWh dans l'immeuble, en dessous des tarifs virtuels.


Décompte avec la fonction VEWA (recommandé)

- Les coûts de chaleur / d'eau encourus au cours de l'année peuvent être saisis.  Le tarif est ensuite calculé sur la période et réparti entre les unités de décompte au moyen de clés de répartition. 


### Étapes intermédiaires suivantes

[Configurer les tarifs d'électricité](/konfiguration/billing/stromtarife-definieren)

[Configurer la VEWA](/konfiguration/billing/vewa-abrechnung)

### 7\. Configurer d'autres coûts pour l'électricité (si nécessaire)

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Au niveau de l'immeuble :

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Exemple :
80% de la part des coûts de base du fournisseur d'électricité doit être facturée de manière égale à tous les participants en lien avec le tarif solaire.

- La taxe saisie est ajoutée chaque mois sur toutes les factures

Remarque : les coûts Divers (Sonstiges) ne sont disponibles qu'avec la facture d'électricité.

Au niveau de l'unité de décompte

Exemple :
Une borne de recharge est louée et doit être facturée mensuellement à l'unité de décompte.

- Les coûts ne sont imputés qu'à cette seule unité de décompte

![Billing : décompte de l'énergie – figure 11](/img/konfiguration-billing/11.png)

### 8\. Créer une facture

Lorsque la case bleue des tarifs virtuels se trouve à la date du jour, une facture d'essai peut être créée.

- Menu Facturation (Rechnungsstellung)

- Factures (Rechnungen)

- Saisir la date

- Créer un aperçu de facture (Rechnungsvorschau erstellen)


Si vous êtes satisfait de l'aperçu, vous pouvez revenir en arrière et créer les vraies factures.

Sur cette page, vous trouverez une description des messages d'erreur les plus fréquents et des solutions possibles : [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 

### Étape suivante

[Continuer vers la création des accès locataires](/konfiguration/benutzerkonfiguration)

## Remarques utiles concernant les données tarifaires

### Visualisation

<div className="row">
<div className="col col--7">

Dans la vue standard du dossier de l'unité de décompte (p. ex. un appartement), une nouvelle tuile s'affiche désormais. Elle indique les relevés du compteur pour les tarifs virtuels. En cliquant sur cette tuile, le profil de charge des tarifs virtuels s'affiche. 

</div>
<div className="col col--5 text--center">

![Billing : décompte de l'énergie – figure 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Comment l'électricité solaire est-elle répartie

La plateforme smart-me utilise le compteur de production (compteur PV) pour déterminer la quantité d'électricité produite et le compteur virtuel de consommation totale pour déterminer la quantité d'électricité consommée. Une part en pourcentage de l'électricité solaire en est déduite. 

Chaque compteur d'électricité (locataire) a ainsi droit à la même part d'électricité solaire par 15 minutes, p. ex. 40% de sa consommation en kWh.

Exemple de répartition de l'électricité solaire

- Consommation totale 10kWh

- Électricité solaire 6kWh (60% solaire / 40% réseau)

- Consommation locataire 1 6kWh (3,6kWh solaire / 2,4kWh réseau)

- Consommation locataire 2 4kWh (2,4kWh solaire / 1,6 kWh réseau)


La précision peut être améliorée en configurant le compteur de bilan pour le tarif solaire.

![Billing : décompte de l'énergie – figure 13](/img/konfiguration-billing/13.png)

[Continuer vers la création des accès locataires](/konfiguration/benutzerkonfiguration)
