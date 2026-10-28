---
title: 'Importation vRCP-Swisseldex (SDAT)'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'Vous avez besoin d''un abonnement smart-me Professional par point de mesure pour utiliser l''importation.'
sidebar_label: 'Importation vRCP-Swisseldex (SDAT)'
---
<Menueweg>Interfaces → Importation Swisseldex</Menueweg>

### Prérequis

Vous avez besoin d'un abonnement smart-me Professional par point de mesure pour utiliser l'importation. 

## Exportation des données par le fournisseur d'énergie

Le fournisseur d'énergie envoie les données au serveur swisseldex ; elles peuvent ensuite être traitées par smart-me.

Informations générales sur le destinataire smart-me sur le serveur swisseldex.

- Adresse e-mail de contact : [support@smart-me.com](mailto:support@smart-me.com)

- Numéro de téléphone de contact : +41 41 511 09 70

- Langue : allemand

- Rôle : Fournisseur

    - Nom : ST\_SMART\_ME

    - EIC : 12X-00000020BN-B

    - Suffit pour l'envoi des données si le partenaire Datahub enregistré qui nous envoie les données dispose d'une licence.

- Rôle : Consommateur final 

    - Nom : CO\_SMART\_ME

    - EIC : 12X-00000020BN-B

    - Est nécessaire pour l'envoi des données si le partenaire Datahub enregistré qui nous envoie les données ne dispose pas de licence. Le partenaire de marché enregistré ayant le rôle de gestionnaire de réseau de distribution (GRD) doit remplir une fiche de circulation correspondante de swissldex : [Laufblatt\_Kommunikationspartner kopie von smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb) 

- Si un format de données peut être choisi, il faut choisir Ebix. Actuellement, smart-me prend uniquement en charge le format Ebix pour l'importation


## Configurer l'importation dans le compte cible

1.  La demande et l'autorisation des points de mesure concernés doivent être faites auprès du fournisseur d'énergie. Ceux-ci sont ensuite mis à la disposition de smart-me AG sur Swisseldex.
    Le point de mesure est transmis par le fournisseur d'énergie avec son identifiant unique de point de mesure. L'identifiant se compose du code CH et d'un numéro à 33 chiffres.

    Exemple : CH637482974368378932BKL7389576492

2.  Connectez-vous à votre compte vRCP ou RCP sur [www.smart-me.com](http://www.smart-me.com).

3.  Accédez à la zone d'importation de votre compte vRCP ou RCP via [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

4.  Acceptez les autorisations d'accès

5.  Naviguez vers la zone Points de mesure (Messpunkte)

6.  Ajoutez tous les numéros CH qui vous ont été communiqués en tant que points de mesure.

7.  Dès que les données des points de mesure ont été importées pour la première fois, les points de mesure sont visibles dans la [configuration des compteurs](/konfiguration/ordnerkonfiguration) afin de pouvoir les ajouter à la structure.


![Importation vRCP-Swisseldex (SDAT) – Illustration 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![Importation vRCP-Swisseldex (SDAT) – Illustration 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## Fonctionnement du traitement et du remplacement des données

### Téléversement des données et calcul des tarifs

Les données importées via Swisseldex sont automatiquement importées dans smart-me, dès qu'elles sont disponibles, vers le numéro de point de mesure (compteur) correspondant.

Le calcul des tarifs virtuels s'effectue automatiquement et en continu dès que les données de tous les points de mesure pertinents pour la tarification du RCP ou du vRCP sont disponibles.

### Remplacement des valeurs

Pour remplacer des données erronées, il suffit de téléverser à nouveau le fichier d'importation via Swisseldex. Les données sont automatiquement importées et écrasées du côté de smart-me.

Après un tel remplacement de valeurs, il est nécessaire de recalculer les tarifs virtuels à partir de la date de remplacement.
