---
title: 'Facturer l''énergie (Suisse)'
slug: '/konfiguration/billing'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques.'
sidebar_label: 'Facturation'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing/stromtarife-definieren/index, konfiguration/billing/vewa-abrechnung]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques. 

## Outils

[Calculateur de tarif d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinaire smart-me Billing de A à Z

Notre webinaire explique étape par étape comment établir des décomptes des coûts énergétiques avec l'outil Billing :

<Video src="0AvKOogoW5Q" title="Vidéo YouTube, smart-me Billing pour utilisateurs avancés" />

<Video src="mK1HYLRtBUI" title="Vidéo YouTube, smart-me Billing - tarifs virtuels, puissance de pointe, modifier la location du compteur" />

Contenu de la vidéo

- Configuration des heures pleines et des heures creuses vers un tarif unique

- Adaptation des prix des tarifs virtuels

- Puissance de pointe

- Location du compteur


## Exemples de factures smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Exemple : décompte d'électricité

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Exemple : décompte VEWA

## Configurer le décompte étape par étape

Avec ce guide étape par étape, nous souhaitons vous aider à configurer votre Billing. Veuillez noter qu'il s'agit uniquement d'un exemple dont vous pouvez vous inspirer. Selon la structure de votre immeuble, il y aura des différences par rapport à notre exemple. 

## Paramètres de la facturation

<div className="row">
<div className="col col--7">

Rendez-vous d'abord dans les paramètres de la facturation (Einstellungen der Rechnungsstellung).

Configurez ici la devise et l'application de la TVA.

Paramètres concrets pour la TVA :

- Cas A : vous êtes un RCP (regroupement dans le cadre de la consommation propre), réalisez avec certitude moins de 100'000CHF de chiffre d'affaires avec l'électricité et ne vous êtes pas assujetti volontairement à la TVA :

    \- TVA 0%

    \- Taxe déjà incluse dans les prix (Steuer in Preise bereits inbegriffen) : OUI

- Cas B : vous êtes un RCP et réalisez 100'000 CHF ou plus de chiffre d'affaires avec les ventes d'électricité ou vous êtes assujetti volontairement à la TVA :

    \- TVA 8.1%

    \- Taxe déjà incluse dans les prix (Steuer in Preise bereits inbegriffen) : NON

</div>
<div className="col col--5 text--center">

![Billing : facturer l'énergie – illustration 1](/img/konfiguration-billing/01.png)

![Billing : facturer l'énergie – illustration 2](/img/konfiguration-billing/02.png)

</div>
</div>

Profitez-en pour configurer également votre logo pour la facture.

Complétez l'en-tête avec le contact et l'adresse de l'expéditeur de la facture et adressez quelques mots aimables à vos clients dans le pied de page.

![Billing : facturer l'énergie – illustration 3](/img/konfiguration-billing/03.png)

## Configuration de la facturation

<div className="row">
<div className="col col--5">

Rendez-vous maintenant dans la configuration de la facturation (Rechnungsstellung Konfiguration) pour configurer les décomptes des immeubles.

</div>
<div className="col col--7 text--center">

![Billing : facturer l'énergie – illustration 4](/img/konfiguration-billing/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

1.  ### Créer l'immeuble

Dans la facturation, l'immeuble peut être ajouté (créé). 

Cette opération est effectuée pour tous les nœuds qui contiennent des unités de décompte.

Lors de cette étape, tous les sous-dossiers déjà créés et les compteurs attribués sont automatiquement rattachés. C'est pourquoi nous recommandons de les créer avant de créer l'immeuble dans smart-me Billing.

Les points de mesure qui doivent être répartis et qui se trouvent dans le nœud « Compteur technique » (Technischer Zähler) doivent encore être attribués manuellement.

</div>
<div className="col col--6 text--center">

![Billing : facturer l'énergie – illustration 5](/img/konfiguration-billing/05.png)

</div>
</div>

### 2\. Attribuer manuellement des compteurs à une unité de décompte

<div className="row">
<div className="col col--7">

Lors de la création de l'immeuble, les compteurs sont automatiquement attribués à 100% à l'unité de décompte (dossier).

Si vous souhaitez répartir un compteur (p. ex. parties communes) selon une clé de répartition ou modifier l'attribution ultérieurement, cela doit être fait manuellement.

- Sélectionner l'unité de décompte à gauche (sous-dossier, p. ex. WHG 1)

- Cliquer p. ex. sous Électricité (Elektrizität) sur Ajouter (Hinzufügen) 

- Sélectionnez le compteur souhaité et indiquez à quel pourcentage il doit être facturé.

La procédure décrite fonctionne de la même manière pour les autres types d'énergie (chaleur, froid, etc.)

</div>
<div className="col col--5 text--center">

![Billing : facturer l'énergie – illustration 6](/img/konfiguration-billing/06.png)

</div>
</div>

### 3\. Enregistrer l'IBAN

<div className="row">
<div className="col col--7">

Dans smart-me Billing, la QR-facture peut être activée en option.

Une fois les coordonnées bancaires enregistrées, une QR-facture pour le paiement est jointe pour chaque unité de décompte (locataire).

smart-me reconnaît automatiquement les expéditeurs correctement renseignés si l'adresse de facturation est saisie sur 3 lignes dans le Billing. Si une entreprise ou une formule d'adresse est choisie, celle-ci doit être ajoutée avant le nom.

p. ex.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Si aucune adresse correcte n'est reconnue, le champ Payable par (Zahlbar durch) de la QR-facture reste vide.

smart-me ne prend pas en charge les numéros de référence. Pour pouvoir les utiliser, il faut un [système tiers](/drittsysteme) qui les prend également en charge (p. ex.[Bexio](/drittsysteme/bexio)). 

Pour identifier la facture sans référence, une information supplémentaire (communication au bénéficiaire) est ajoutée sur la QR-facture. Elle se compose comme suit : nom de l'unité de décompte (nom du dossier).

La mise en page est optimisée pour l'envoi par e-mail. Si les factures sont imprimées, nous recommandons de désactiver la QR-facture et de la commander auprès de la banque.

</div>
<div className="col col--5 text--center">

![Billing : facturer l'énergie – illustration 7](/img/konfiguration-billing/07.jpg)

![Billing : facturer l'énergie – illustration 8](/img/konfiguration-billing/08.png)

</div>
</div>

### 4\. Saisir l'état locatif

Pour le décompte selon VEWA, tous les contrats de location et toutes les vacances doivent être indiqués sans lacune chez smart-me.

- Menu Facturation (Rechnungsstellung)

- Configuration (Konfiguration)

- Sélectionner l'unité de décompte à gauche (sous-dossier, p. ex. WHG 1)

- Gérer l'adresse et la validité

- L'e-mail est facultatif et n'est utilisé que pour l'envoi automatique des factures.


Remarque concernant l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser la VEWA mais exporter les données vers un autre système, vous n'avez pas besoin de saisir l'état locatif, celui-ci est créé via le fichier d'import.
Veillez à ce que tous les rapports de location et toutes les vacances soient enregistrés.

![Billing : facturer l'énergie – illustration 9](/img/konfiguration-billing/09.png)

![Billing : facturer l'énergie – illustration 10](/img/konfiguration-billing/10.png)

### 5\. Configurer les tarifs d'électricité

- Menu Facturation (Rechnungsstellung)

- Configuration (Konfiguration)

- Sélectionner l'immeuble à gauche (dossier principal, p. ex. Altgasse 13)

- Ajouter des tarifs d'électricité virtuels (Virtuelle Stromtarife Hinzufügen). (p. ex. heures pleines, heures creuses, tarif solaire)

En détail : [Définir les tarifs d'électricité](/konfiguration/billing/stromtarife-definieren)


### 6\. Configurer la chaleur / l'eau

Pour la tarification et le décompte multi-énergies, il existe en principe deux possibilités de configuration :

Décompte sans la fonction VEWA

- Décompte au moyen d'un tarif énergétique calculé en externe par type d'énergie. Il est saisi avec un prix en CHF/m3 ou CHF/kWh dans l'immeuble, sous les tarifs virtuels.


Décompte avec la fonction VEWA (recommandé)

- Les coûts de chaleur / d'eau accumulés au cours de l'année peuvent être saisis.  Le tarif est ensuite calculé sur la période et réparti entre les unités de décompte à l'aide de clés de répartition. 

En détail : [Configurer le décompte VEWA](/konfiguration/billing/vewa-abrechnung)



### 7\. Configurer d'autres coûts pour l'électricité (si nécessaire)

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Au niveau de l'immeuble :

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Exemple :
80% de la part des coûts de base du fournisseur d'énergie doivent être facturés de manière égale à tous les participants en lien avec le tarif solaire.

- La taxe saisie est ajoutée chaque mois sur toutes les factures

Remarque : les coûts Divers ne sont disponibles qu'avec la facture d'électricité.

Au niveau de l'unité de décompte

Exemple :
Une borne de recharge est louée et doit être facturée mensuellement à l'unité de décompte.

- Les coûts ne sont imputés qu'à cette seule unité de décompte

![Billing : facturer l'énergie – illustration 11](/img/konfiguration-billing/11.png)

### 8\. Établir la facture

Lorsque le cadre bleu des tarifs virtuels se trouve à la date du jour, une facture d'essai peut être établie.

- Menu Facturation (Rechnungsstellung)

- Factures (Rechnungen)

- Saisir la date

- Créer l'aperçu de la facture (Rechnungsvorschau erstellen)


Si l'aperçu vous convient, vous pouvez revenir en arrière et établir les factures définitives.

Sur cette page, vous trouverez une description des messages d'erreur les plus fréquents et des solutions possibles : [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 


## Remarques utiles sur les données tarifaires

### Visualisation

<div className="row">
<div className="col col--7">

Dans la vue standard du dossier de l'unité de décompte (p. ex. un appartement), une nouvelle tuile s'affiche désormais. Elle indique les relevés du compteur pour les tarifs virtuels. Un clic sur cette tuile affiche le profil de charge des tarifs virtuels. 

</div>
<div className="col col--5 text--center">

![Billing : facturer l'énergie – illustration 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Comment l'électricité solaire est-elle répartie

La plateforme smart-me utilise le compteur de production (compteur PV) pour déterminer la quantité d'électricité produite et le compteur virtuel de consommation totale pour déterminer la quantité d'électricité consommée. Une part en pourcentage de l'électricité solaire en est déduite. 

Chaque compteur d'électricité (locataire) a ainsi droit à la même part d'électricité solaire par tranche de 15 minutes, p. ex. 40% de sa consommation en kWh.

Exemple de répartition de l'électricité solaire

- Consommation totale 10kWh

- Électricité solaire 6kWh (60% solaire / 40% réseau)

- Consommation du locataire 1 6kWh (3,6kWh solaire / 2,4kWh réseau)

- Consommation du locataire 2 4kWh (2,4kWh solaire / 1,6 kWh réseau)


La précision peut être améliorée en configurant le compteur de bilan pour le tarif solaire.

![Billing : facturer l'énergie – illustration 13](/img/konfiguration-billing/13.png)
