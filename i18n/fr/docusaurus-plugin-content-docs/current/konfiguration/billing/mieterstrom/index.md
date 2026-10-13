---
title: 'smart-me Billing pour l''électricité pour les locataires en Allemagne'
slug: '/konfiguration/billing/mieterstrom'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des factures d''électricité selon la loi allemande sur l''économie énergétique (EnWG).'
sidebar_label: 'Électricité pour les locataires'
---
### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des factures d'électricité selon la loi allemande sur l'économie énergétique (EnWG).   

## Tutoriel vidéo

Notre tutoriel vidéo vous explique pas à pas les réglages supplémentaires nécessaires.

<Video src="KSCBESne84M" title="Vidéo YouTube, webinaire smartRED : l'électricité pour les locataires – mise en œuvre simple et fonctions expliquées" />

Présentation de l'électricité pour les locataires

<Video src="wXGSibdoBR8" title="Vidéo YouTube, première installation d'électricité pour les locataires d'Ismaning de Körmer GmbH – électricité pour les locataires avec smartRED" />

Objet de référence

<Video src="rsI2zut_HKM" title="Vidéo YouTube, tutoriel : configuration des compteurs smartRED dans le smart-me Cloud" />

Configuration des compteurs pour l'électricité pour les locataires

## Introduction

Dans smart-me Billing, quelques réglages supplémentaires permettent d'établir des factures d'électricité conformes aux prescriptions du paragraphe § 42 de la loi allemande sur l'économie énergétique (EnWG). 

IMPORTANT :  Pour pouvoir effectuer correctement les réglages supplémentaires pour l'électricité pour les locataires, vous devez au préalable avoir configuré les [tarifs virtuels](/konfiguration/billing) de votre immeuble et effectué les réglages habituels de [smart-me Billing](/konfiguration/billing).

IMPORTANT :  Pour l'électricité pour les locataires, il faut toujours travailler avec les [tarifs virtuels](/konfiguration/billing).

## Exemple de facture d'électricité pour les locataires

Une facture d'électricité pour les locataires entièrement configurée peut se présenter ainsi : 

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, modèle de facture électricité pour les locataires.pdf" />

Musterrechnung Mieterstrom.pdf

## Configurer et ajuster les schémas de mesure

### Schéma de mesure standard (tous les consommateurs participent à l'électricité pour les locataires)

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 1](/img/konfiguration-billing-mieterstrom/01.png)

[Détails du schéma standard : tarification et ajustement](/planung/standard-messkonzept)

### Schéma de mesure MKD3 (électricité pour les locataires avec des non-participants)

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 2](/img/konfiguration-billing-mieterstrom/02.png)

[Détails du schéma de mesure MKD3 : tarification et ajustement](/planung/mkd3-messkonzept-nicht-teilnehmer)

## Réglages généraux

- Connectez-vous au compte smart-me souhaité 

- Cliquez en haut à droite sur « Configuration » (Konfiguration), puis sur « Créer une facture » (Rechnung erstellen)

- Sélectionnez d'abord le bouton « Paramètres » (Einstellungen)


Vous y effectuez les réglages généraux pour la présentation du document de facture. Vous y effectuez également les réglages déjà décrits dans l'[article Billing](/konfiguration/billing) habituel :


- Devise (toujours EUR pour l'électricité pour les locataires)

- Taxe 

- Logo de votre entreprise (pour la présentation dans le document de facture)

- En-tête / expéditeur

- Pied de page


![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 3](/img/konfiguration-billing-mieterstrom/03.png)

Vous pouvez en outre activer le bouton en bas, dans la zone « Électricité pour les locataires Allemagne » (Mieterstrom Deutschland).  Cela active les réglages supplémentaires pour les extensions d'électricité pour les locataires.

Vous pouvez effectuer directement ici les extensions suivantes :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 4](/img/konfiguration-billing-mieterstrom/04.png)

### Gestionnaire de réseau de distribution (GRD)

Indiquez ici qui est votre gestionnaire de réseau de distribution (GRD). Vous obtenez cette information auprès de votre électricien/installateur photovoltaïque ou sur Internet.

### Service client / organe de conciliation

Proposition de titre :

Ce qui nous motive ? Votre satisfaction

Proposition de texte libre (pour toute l'Allemagne / sans garantie de sécurité juridique) :

« Le service client est notre priorité absolue. Vous pouvez nous joindre au numéro 01234 / 87589.

Si toutefois vous deviez avoir une réclamation et que – contre toute attente – vous n'avez reçu de notre part ni réponse ni solution au bout de quatre semaines, vous pouvez demander une conciliation :



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Téléphone : +49 (0) 30 / 27 57 240 – 0

Fax : +49 (0) 30 / 27 57 240 – 69

E-mail : [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ATTENTION : L'organe de conciliation indiqué n'est cité qu'à titre d'exemple. Il existe en Allemagne de nombreux organes de conciliation et vous avez le libre choix. Contactez suffisamment tôt l'organe de conciliation souhaité.

Ces informations figurent tout en bas de votre document de facture.

## Configuration de l'immeuble

Passez dans l'onglet en haut au point de menu « Configuration » (Konfiguration). Vous pouvez y effectuer les extensions activées pour l'immeuble et pour les différentes unités d'habitation. Cliquez d'abord sur le dossier de l'immeuble souhaité.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 5](/img/konfiguration-billing-mieterstrom/05.png)

### Composition de l'électricité complémentaire

Tout en haut, vous pouvez définir la composition de l'électricité complémentaire. L'électricité complémentaire est la quantité d'électricité qui n'est pas produite directement par votre installation d'électricité pour les locataires, mais qui doit être fournie en complément par le réseau. Vous obtenez les indications sur la composition de l'électricité complémentaire auprès du fournisseur d'électricité complémentaire que vous avez choisi.

Voici un exemple :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consommation par rapport à la période précédente et à d'autres

Juste en dessous, vous pouvez définir des valeurs de comparaison pour la consommation d'électricité.

Le document de facture indique aux destinataires de l'électricité ces valeurs de référence ainsi que leur propre consommation de la période précédente.

ATTENTION : Pensez à saisir les bonnes valeurs  pour la période de décompte que vous avez choisie.  Si vous établissez des factures mensuelles, choisissez donc des valeurs de référence sur une base mensuelle, etc.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % Stromverbrauch Deutschland in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Tableur, % consommation d'électricité Allemagne" />

% consommation d'électricité Allemagne

Données du tableau sans garantie.

Conseil pratique :  Juste sous le champ de saisie de la consommation par rapport à la période précédente et à d'autres, vous trouvez les [tarifs virtuels](/konfiguration/billing) que vous avez déjà configurés. Si vous souhaitez facturer un tarif unique (l'électricité du réseau et l'électricité solaire ont le même prix), vous devez tout de même définir deux tarifs (au même prix) dans un modèle d'électricité pour les locataires. Cela garantit que les taxes relatives aux différentes composantes de l'électricité peuvent être déterminées correctement par notre outil Billing.

### Définition des composantes tarifaires par type d'électricité

Plus bas, sous « Divers » (Sonstiges), vous pouvez définir les composantes tarifaires par type d'électricité (réseau et solaire). Le but est de montrer au client final comment se compose son prix de l'électricité. Vous devez le faire aussi bien pour l'électricité du réseau que pour l'électricité solaire. Additionnées, les composantes doivent correspondre au prix que vous avez défini par type d'électricité (fixé dans les [tarifs virtuels](/konfiguration/billing)), sinon le Billing affiche un message d'erreur.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 8](/img/konfiguration-billing-mieterstrom/08.png)

Vous pouvez soit insérer directement les composantes tarifaires standard pour l'électricité pour les locataires, soit saisir des composantes tarifaires individuelles via « Modifier » (Editieren).

Important : Lors de la modification, choisissez le bon type, c.-à-d. précisez s'il s'agit d'une composante tarifaire de l'électricité du réseau (électricité complémentaire) ou de l'électricité solaire.


Important : Vous obtenez les indications sur la composition des composantes de l'électricité du réseau (électricité complémentaire) auprès du fournisseur d'électricité complémentaire que vous avez choisi.

L'électricité solaire se compose généralement uniquement de la contribution EEG (EEG-Umlage) et du prix de production.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 9](/img/konfiguration-billing-mieterstrom/09.png)

Une configuration terminée peut se présenter ainsi :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 10](/img/konfiguration-billing-mieterstrom/10.png)

Vous avez ainsi effectué tous les réglages au niveau de l'immeuble.  Pour terminer, vous devez encore saisir dans chaque unité d'habitation le numéro de client ainsi que les indications sur le contrat et sa durée.

## Configuration des unités d'habitation

Cliquez maintenant l'une après l'autre sur les différentes unités d'habitation de votre immeuble et spécifiez-les.

### Numéro de client

Définissez ici le numéro de client de ce locataire.

Remarque :

Le numéro de client est automatiquement aussi utilisé comme nom du document PDF, pour faciliter l'identification externe.

### Contrat et durée

Vous pouvez insérer ici des dispositions contractuelles. Un exemple (sans garantie de sécurité juridique) serait :

Votre contrat est valable jusqu'au DD.MM.YYYY et se prolonge d'un an conformément à la règle du chiffre X de votre contrat de fourniture d'électricité, à défaut de résiliation en temps utile. Vous pouvez résilier le contrat de fourniture d'électricité moyennant un préavis de trois mois pour le DD.MM.YYYY, conformément au chiffre X du contrat de fourniture d'électricité. Un droit de résiliation extraordinaire demeure réservé

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Félicitations, vous avez réussi ! Lorsque vous générez maintenant des factures dans l'outil smart-me Billing, vous obtenez un document de facture contenant toutes les indications nécessaires ainsi que les représentations visuelles.
