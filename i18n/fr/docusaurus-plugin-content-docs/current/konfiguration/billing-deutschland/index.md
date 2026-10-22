---
title: 'Décompte de l''énergie (Allemagne)'
slug: '/konfiguration/billing-deutschland'
description: 'Décompte d''électricité selon le § 42 de la loi allemande sur l''économie énergétique (EnWG) : unités de décompte, tarifs virtuels, schéma de mesure et établissement des factures pour l''électricité pour les locataires en Allemagne.'
sidebar_label: 'Facturation Allemagne'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing-deutschland/stromtarife-definieren]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes d'électricité selon la loi allemande sur l'économie énergétique (EnWG).

Cette page vous guide à travers le décompte pour l'**électricité pour les locataires en Allemagne**. Vous trouverez la variante suisse avec RCP et VEWA sous [Facturation Suisse](/konfiguration/billing).

## Tutoriel vidéo

Notre tutoriel vidéo vous explique étape par étape les réglages supplémentaires nécessaires.

<div className="row">
<div className="col col--4">

<Video src="KSCBESne84M" title="Vidéo YouTube, webinaire smartRED : l'électricité pour les locataires – mise en œuvre simple et fonctions expliquées" />

Présentation de l'électricité pour les locataires

</div>
<div className="col col--4">

<Video src="wXGSibdoBR8" title="Vidéo YouTube, première installation d'électricité pour les locataires à Ismaning de Körmer GmbH – électricité pour les locataires avec smartRED" />

Objet de référence

</div>
<div className="col col--4">

<Video src="rsI2zut_HKM" title="Vidéo YouTube, tutoriel : configuration des compteurs smartRED dans le smart-me Cloud" />

Configuration des compteurs pour l'électricité pour les locataires

</div>
</div>

<div className="row">
<div className="col col--8">

## Exemple de décompte d'électricité pour les locataires

Un décompte d'électricité pour les locataires entièrement configuré peut se présenter ainsi :

</div>
<div className="col col--4 bild--mitte">

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, facture type électricité pour les locataires (Musterrechnung Mieterstrom.pdf)" />

Musterrechnung Mieterstrom.pdf

</div>
</div>

# Étape par étape

## Réglages généraux

<div className="row">
<div className="col col--7">

- Connectez-vous au compte smart-me souhaité

- Cliquez en haut à droite sur « Configuration » (« Konfiguration »), puis sur « Établir une facture » (« Rechnung erstellen »)

- Sélectionnez d'abord le bouton « Réglages » (« Einstellungen »)

Vous effectuez ici les réglages généraux pour la présentation du document de facture.
- Devise (toujours EUR pour l'électricité pour les locataires)
- Taxe
- Logo de votre entreprise (pour la présentation dans le document de facture)
- En-tête / expéditeur
- Pied de page

</div>
<div className="col col--5 bild--mitte">

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 3](/img/konfiguration-billing-mieterstrom/03.png)

</div>
</div>

### Activer l'électricité pour les locataires

Vous pouvez en outre activer le bouton en bas dans la zone « Électricité pour les locataires Allemagne » (« Mieterstrom Deutschland »). Les réglages supplémentaires pour les extensions d'électricité pour les locataires sont ainsi déverrouillés.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 4](/img/konfiguration-billing-mieterstrom/04.png)

#### Gestionnaire de réseau de distribution (GRD)

Vous définissez ici qui est votre gestionnaire de réseau de distribution (GRD). Vous pouvez obtenir cette information auprès de votre électricien/installateur photovoltaïque ou sur Internet.

#### Service clientèle / organe de conciliation

**Proposition de titre :** Ce qui nous motive ? Votre satisfaction

**Proposition de texte libre (pour toute l'Allemagne / sans garantie de sécurité juridique) :**

« Le service clientèle est notre priorité absolue. Vous pouvez nous joindre au numéro 01234 / 87589.

Si vous deviez néanmoins avoir une réclamation et que – contre toute attente – vous n'avez reçu de notre part ni réponse ni solution après quatre semaines, vous pouvez demander une conciliation :

Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Téléphone : +49 (0) 30 / 27 57 240 – 0

Fax : +49 (0) 30 / 27 57 240 – 69

E-mail : [info@schlichtungsstelle-energie.de
](mailto:info@schlichtungsstelle-energie.de)

ATTENTION : l'organe de conciliation mentionné n'est cité qu'à titre d'exemple. Il existe en Allemagne de nombreux organes de conciliation et vous êtes libre de choisir. Contactez suffisamment tôt l'organe de conciliation souhaité.

Ces informations apparaissent tout en bas de votre document de facture.

## Configuration de l'immeuble

<div className="row">
<div className="col col--6">

Passez dans l'onglet du haut au point de menu « Configuration » (« Konfiguration »). Vous pouvez y configurer les extensions déverrouillées pour l'immeuble et pour les différentes unités d'habitation. Cliquez d'abord sur le dossier de l'immeuble souhaité.

</div>
<div className="col col--6 text--center">

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 5](/img/konfiguration-billing-mieterstrom/05.png)

</div>
</div>

### Composition de l'électricité résiduelle

Tout en haut, vous pouvez définir la composition de l'électricité résiduelle. L'électricité résiduelle est la quantité d'électricité qui n'est pas produite directement par votre installation d'électricité pour les locataires, mais qui doit être fournie en complément par le réseau. Vous obtenez les indications sur la composition de l'électricité résiduelle auprès du fournisseur d'électricité résiduelle que vous avez choisi.

Un exemple peut se présenter ainsi :

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 6](/img/konfiguration-billing-mieterstrom/06.png)

### Consommation par rapport à la période précédente et à d'autres

<div className="row">
<div className="col col--4">

Juste en dessous, vous pouvez définir des valeurs de comparaison pour les données de consommation d'électricité.

Le document de facture indiquera aux destinataires de l'électricité ces valeurs de référence ainsi que leur propre consommation de la période précédente.

ATTENTION : pensez à saisir les valeurs correctes pour la période de décompte que vous avez choisie. Si vous établissez des factures mensuelles, choisissez donc des valeurs de référence sur une base mensuelle, etc.

</div>
<div className="col col--8 text--center">

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 7](/img/konfiguration-billing-mieterstrom/07.png)

</div>
</div>

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Ouvrir la feuille de calcul, % consommation d'électricité Allemagne dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Feuille de calcul, % consommation d'électricité Allemagne" />

% consommation d'électricité Allemagne

Indications du tableau sans garantie.

## Configurer les tarifs

- Menu Facturation (Rechnungsstellung)
- Configuration (Konfiguration)
- À gauche, sélectionner l'immeuble (dossier principal, p. ex. Altgasse 13)
- Ajouter des tarifs d'électricité virtuels (p. ex. heures pleines, heures creuses, tarif solaire)

En détail : [Définir les tarifs d'électricité](/konfiguration/billing-deutschland/stromtarife-definieren)

## Configuration des unités d'habitation

Cliquez maintenant l'une après l'autre sur les différentes unités d'habitation de votre immeuble et spécifiez-les.

### Numéro de client

Vous définissez ici le numéro de client de ce locataire.

Remarque :

Le numéro de client est automatiquement utilisé aussi comme nom du document PDF, afin de faciliter l'identification externe.

### Contrat et durée

Vous pouvez insérer ici des dispositions contractuelles. Un exemple (sans garantie de sécurité juridique) serait :

Votre contrat a une durée jusqu'au DD.MM.YYYY et se prolonge d'un an conformément à la disposition du chiffre X de votre contrat de fourniture d'électricité si aucune résiliation n'intervient dans les délais. Vous pouvez résilier le contrat de fourniture d'électricité moyennant un préavis de trois mois pour le DD.MM.YYYY conformément au chiffre X du contrat de fourniture d'électricité. Un droit de résiliation extraordinaire demeure réservé

![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 11](/img/konfiguration-billing-mieterstrom/11.png)

Félicitations, vous avez réussi ! Lorsque vous générez maintenant des factures dans l'outil smart-me Billing, vous obtenez un document de facture contenant toutes les indications nécessaires ainsi que les représentations visuelles.
