---
title: 'Importation de données Ebix'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offre la possibilité d''importer automatiquement des données au format Ebix'
sidebar_label: 'Importation de données Ebix'
---
smart-me offre la possibilité d'importer automatiquement des données au format Ebix

### Conditions préalables

Seuls les partenaires Gold smart-me peuvent utiliser l'importation automatique de données. Vous pouvez demander de plus amples informations sur ce modèle de licence auprès du service des ventes.

## Ebix (SDAT)

Les fichiers XML (Ebix) destinés à l'échange de données standardisé sur le marché de l'électricité peuvent être importés dans smart-me.

### Schémas pris en charge

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Téléversement des données

Les fichiers peuvent être téléversés sur les serveurs FTP de smart-me par FTP ou par FTPS (TLS) :

Serveur : ftp.smart-me.com

Chemin : /Ebix/

Nom d'utilisateur : « E-mail d'un sous-compte du partenaire »

Mot de passe : « Le mot de passe correspondant »

La taille des fichiers à importer est limitée à 50 mégaoctets.

### Attribution à un compte utilisateur

Dès qu'un utilisateur du partenaire a téléversé des fichiers Ebix sur les serveurs, l'ID du point de mesure apparaît sous « Configuration->Partenaire->Importation de données » (Konfiguration->Partner->Daten Import) :

![Importation de données Ebix – Illustration 1](/img/schnittstellen-ebix-datenimport/01.jpg)

Le point de mesure peut être attribué à un autre utilisateur en cliquant sur modifier (editieren) :

![Importation de données Ebix – Illustration 2](/img/schnittstellen-ebix-datenimport/02.jpg)
