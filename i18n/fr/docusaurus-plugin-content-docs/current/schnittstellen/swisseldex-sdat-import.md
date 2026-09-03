---
title: 'Import VRCP-Swisseldex (SDAT)'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'Il te faut un abonnement smart-me Professional par point de mesure pour utiliser l''import.'
sidebar_label: 'Import VRCP-Swisseldex (SDAT)'
---
### Condition

Il te faut un abonnement smart-me Professional par point de mesure pour utiliser l'import.

## Export des données par le fournisseur d'électricité

Le fournisseur d'électricité envoie les données au serveur swisseldex, elles peuvent ensuite être traitées par smart-me.

Indications générales sur le destinataire smart-me sur le serveur swisseldex.

- Adresse e-mail de contact : [support@smart-me.com](mailto:support@smart-me.com)

- Numéro de téléphone de contact : +41 41 511 09 70

- Langue : allemand

- Rôle : fournisseur

    - Nom : ST\_SMART\_ME

    - EIC : 12X-00000020BN-B

    - Suffisant pour l'envoi des données si le partenaire Datahub enregistré qui nous envoie les données possède une licence.

- Rôle : consommateur final

    - Nom : CO\_SMART\_ME

    - EIC : 12X-00000020BN-B

    - Nécessaire pour l'envoi des données si le partenaire Datahub enregistré qui nous envoie les données ne possède pas de licence. Le partenaire de marché enregistré ayant le rôle de gestionnaire de réseau de distribution doit remplir la fiche de circulation correspondante de swissldex : [Laufblatt\_Kommunikationspartner kopie von smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb)

- Si un format de données peut être choisi, il faut choisir Ebix. Smart-me ne prend actuellement en charge que le format Ebix pour l'import


## Mettre en place l'import dans le compte cible

1.  La demande et la validation des points de mesure concernés doivent être demandées auprès du fournisseur d'électricité. Ceux-ci sont ensuite mis à disposition de smart-me AG sur Swisseldex.
    Le point de mesure est transmis par le fournisseur d'électricité avec son ID de point de mesure univoque. L'ID est composé du code CH et d'un numéro à 33 caractères.

    Exemple : CH637482974368378932BKL7389576492

2.  Connecte-toi sur [www.smart-me.com](http://www.smart-me.com) à ton compte RCP virtuel (vRCP) ou RCP.

3.  Ouvre la zone d'import de ton compte vRCP ou RCP via [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

4.  Accepte les autorisations d'accès

5.  Navigue vers la zone Points de mesure (Messpunkte)

6.  Ajoute comme points de mesure tous les numéros CH qui t'ont été communiqués.

7.  Dès que des données des points de mesure ont été importées pour la première fois, les points de mesure sont visibles dans la [configuration des compteurs](/konfiguration/ordnerkonfiguration) afin de les ajouter à la structure.


![Import VRCP-Swisseldex (SDAT) – illustration 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![Import VRCP-Swisseldex (SDAT) – illustration 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## Fonctionnement du traitement et du remplacement des données

### Téléchargement des données et calcul des tarifs

Les données importées via Swisseldex sont automatiquement importées dans smart-me, dès qu'elles sont disponibles, sous le numéro de point de mesure correspondant (compteur).

Le calcul des tarifs virtuels s'effectue automatiquement et en continu dès que les données de tous les points de mesure pertinents pour la tarification du RCP ou du vRCP sont disponibles.

### Remplacement de valeurs

Pour remplacer des données erronées, il suffit de télécharger à nouveau le fichier d'import via Swisseldex. Les données sont importées et écrasées automatiquement du côté de smart-me.

Après un tel remplacement de valeurs, il est nécessaire de recalculer les tarifs virtuels depuis la date du remplacement.
