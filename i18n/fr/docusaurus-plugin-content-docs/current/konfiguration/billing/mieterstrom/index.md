---
title: 'smart-me Billing pour l''électricité pour les locataires en Allemagne (Mieterstrom)'
slug: '/konfiguration/billing/mieterstrom'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des factures d''électricité conformes à la loi allemande sur l''industrie de l''énergie (EnWG).'
sidebar_label: 'Mieterstrom'
---
### Condition préalable

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des factures d'électricité conformes à la loi allemande sur l'industrie de l'énergie (EnWG).   

## Tutoriel vidéo

Notre tutoriel vidéo vous explique pas à pas les réglages supplémentaires nécessaires.

<Video src="KSCBESne84M" title="Video" />

Présentation du Mieterstrom

<Video src="wXGSibdoBR8" title="Video" />

Objet de référence

<Video src="rsI2zut_HKM" title="Video" />

Configuration des compteurs pour le Mieterstrom

## Introduction

Dans smart-me Billing, quelques réglages supplémentaires permettent d'établir des factures d'électricité conformes aux prescriptions du paragraphe § 42 de la loi allemande sur l'industrie de l'énergie (EnWG). 

IMPORTANT :  Pour pouvoir effectuer avec succès les réglages supplémentaires pour le Mieterstrom, vous devez au préalable avoir configuré les [tarifs virtuels](/konfiguration/billing) pour votre bien immobilier et effectué les réglages normaux du [smart-me Billing](/konfiguration/billing).

IMPORTANT :  Pour le Mieterstrom, il faut toujours travailler avec les [tarifs virtuels](/konfiguration/billing).

## Exemple de décompte Mieterstrom

Un décompte Mieterstrom entièrement configuré peut se présenter ainsi : 

<Video src="" title="Video" />

Facture type Mieterstrom.pdf

## Configurer et comparer les schémas de mesure

### Schéma de mesure standard (tous les consommateurs sont participants au Mieterstrom)

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 1](/img/konfiguration-billing-mieterstrom/01.png)

[Détails du schéma standard : tarification et comparaison](/konfiguration/billing/mieterstrom/standard-messkonzept)

### Schéma de mesure MKD3 (Mieterstrom avec des non-participants)

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 2](/img/konfiguration-billing-mieterstrom/02.png)

[Détails du schéma de mesure MKD3 : tarification et comparaison](/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer)

## Réglages généraux

- Connectez-vous au compte smart-me souhaité 

- Cliquez en haut à droite sur « Configuration » (Konfiguration), puis sur « Créer une facture » (Rechnung erstellen)

- Sélectionnez d'abord le bouton « Réglages » (Einstellungen)


C'est ici que vous effectuez les réglages généraux relatifs à la présentation du document de facturation. Vous y effectuez également les réglages déjà décrits dans l'[article Billing](/konfiguration/billing) normal :


- Monnaie (pour le Mieterstrom, toujours EUR)

- Taxe 

- Logo de votre entreprise (pour l'affichage dans  le document de facturation)

- En-tête / expéditeur

- Pied de page


![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 3](/img/konfiguration-billing-mieterstrom/03.png)

De plus, vous pouvez maintenant activer le bouton en bas dans la section « Mieterstrom Allemagne » (Mieterstrom Deutschland).  Cela débloque les réglages supplémentaires pour les extensions Mieterstrom.

Directement ici, vous pouvez effectuer les extensions suivantes :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 4](/img/konfiguration-billing-mieterstrom/04.png)

### Gestionnaire de réseau de distribution (GRD)

Vous définissez ici qui est votre gestionnaire de réseau de distribution (GRD). Vous devriez obtenir cette information auprès de votre électricien / installateur de l'installation PV ou sur Internet.

### Service clientèle / organe de conciliation

Proposition de titre :

Ce qui nous motive ? Votre satisfaction

Proposition de texte libre (pour toute l'Allemagne / sans garantie de sécurité juridique) :

« Le service clientèle est notre priorité. Vous pouvez nous joindre au numéro 01234 / 87589.

Si toutefois des réclamations devaient survenir et que vous n'avez – contre toute attente – reçu aucune réponse ni solution de notre part après quatre semaines, vous pouvez demander une conciliation :



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Téléphone : +49 (0) 30 / 27 57 240 – 0

Fax : +49 (0) 30 / 27 57 240 – 69

E-mail : [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ATTENTION : L'organe de conciliation mentionné n'est cité qu'à titre d'exemple. Il existe en Allemagne un grand nombre d'organes de conciliation et vous avez le libre choix. Contactez suffisamment tôt l'organe de conciliation souhaité.

Ces informations figurent tout en bas de votre document de facturation.

## Configuration du bien immobilier

Passez en haut dans l'onglet au point de menu « Configuration » (Konfiguration) ; vous pouvez maintenant y effectuer les extensions débloquées pour le bien immobilier et dans les différentes unités d'habitation. Cliquez d'abord sur le dossier du bien immobilier souhaité.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 5](/img/konfiguration-billing-mieterstrom/05.png)

### Composition de l'électricité résiduelle

Tout en haut, vous pouvez définir la composition de l'électricité résiduelle. L'électricité résiduelle est la quantité d'électricité qui n'est pas produite directement par votre installation Mieterstrom, mais qui doit être fournie en complément par le réseau. Les indications sur la composition de l'électricité résiduelle vous sont fournies par le fournisseur d'électricité résiduelle que vous avez choisi.

Un exemple peut se présenter ainsi :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consommation par rapport à la période précédente et à d'autres

Juste en dessous, vous pouvez définir des valeurs de comparaison pour l'électricité.

Le document de facturation indiquera aux destinataires de l'électricité ces valeurs de référence ainsi que leur propre consommation durant la période précédente.

ATTENTION : Pensez à saisir les valeurs correctes  pour la période de décompte que vous avez choisie.  Si vous établissez donc des factures mensuelles, choisissez les valeurs de référence sur une base mensuelle, etc.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % Stromverbrauch Deutschland in new window")

<Video src="" title="Video" />

% de consommation d'électricité en Allemagne

Indications du tableau sans garantie.

Conseil pratique :  Directement sous le champ de saisie pour la consommation de la période précédente et d'autres, vous trouverez les [tarifs virtuels](/konfiguration/billing) que vous avez déjà configurés. Si vous souhaitez facturer un tarif unique (l'électricité du réseau et l'électricité solaire coûtent le même prix), vous devez malgré tout définir deux tarifs (au même prix) dans un modèle Mieterstrom. Cela garantit que les taxes relatives aux différentes composantes de l'électricité peuvent être déterminées correctement par notre outil Billing.

### Définition des composantes tarifaires par type d'électricité

Plus bas, sous « Divers » (Sonstiges), vous pouvez définir les composantes tarifaires par type d'électricité (réseau et solaire). L'objectif est de montrer au client final comment son prix de l'électricité se compose. Vous devez le faire aussi bien pour l'électricité du réseau que pour l'électricité solaire. Les composantes doivent, additionnées, correspondre au prix par type d'électricité que vous avez défini (vous l'avez fixé dans les [tarifs virtuels](/konfiguration/billing)), faute de quoi le Billing affiche un message d'erreur.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 8](/img/konfiguration-billing-mieterstrom/08.png)

Vous pouvez soit insérer directement les composantes tarifaires Mieterstrom standard, soit saisir des composantes tarifaires individuelles via « Éditer » (Editieren).

Important : Choisissez le type correct lors de l'édition, c'est-à-dire précisez s'il s'agit d'une composante tarifaire de l'électricité du réseau (électricité résiduelle) ou de l'électricité solaire.


Important : Les indications sur la composition des composantes pour l'électricité du réseau (électricité résiduelle) vous sont fournies par le fournisseur d'électricité résiduelle que vous avez choisi.

L'électricité solaire se compose habituellement uniquement de la contribution EEG et du prix de production.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 9](/img/konfiguration-billing-mieterstrom/09.png)

Une configuration terminée peut se présenter ainsi :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 10](/img/konfiguration-billing-mieterstrom/10.png)

Vous avez ensuite effectué tous les réglages au niveau du bien immobilier.  Pour terminer, vous devez encore saisir dans chaque unité d'habitation le numéro de client ainsi que les indications sur le contrat et la durée.

## Configuration des unités d'habitation

Cliquez maintenant successivement sur les différentes unités d'habitation de votre bien immobilier et précisez-les.

### Numéro de client

Vous définissez ici le numéro de client pour ce locataire.

Remarque :

Le numéro de client est également repris automatiquement comme nom dans le document PDF, afin de faciliter l'identification externe.

### Contrat et durée

Vous pouvez insérer ici des dispositions contractuelles. Un exemple (sans garantie de sécurité juridique) serait :

Votre contrat a une durée jusqu'au DD.MM.YYYY et se prolonge d'une année conformément à la réglementation du chiffre X de votre contrat de fourniture d'électricité, si aucune résiliation n'intervient dans les délais. La résiliation du contrat de fourniture d'électricité vous est possible moyennant un préavis de trois mois pour le DD.MM.YYYY conformément au chiffre X du contrat de fourniture d'électricité. Un droit de résiliation extraordinaire demeure réservé

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Illustration 11](/img/konfiguration-billing-mieterstrom/11.png)

Félicitations, vous y êtes arrivé ! Lorsque vous générerez désormais des factures dans l'outil smart-me Billing, un document de facturation vous sera fourni avec toutes les indications nécessaires ainsi que les représentations visuelles.
