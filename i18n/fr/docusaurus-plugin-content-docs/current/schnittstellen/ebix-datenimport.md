---
title: 'Import de données Ebix'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offre la possibilité d''un import de données automatique au format Ebix'
sidebar_label: 'Import de données Ebix'
---
smart-me offre la possibilité d'un import de données automatique au format Ebix

### Conditions requises

Seuls les partenaires Gold smart-me peuvent utiliser l'import de données automatique. De plus amples informations sur ce modèle de licence peuvent être demandées auprès du service des ventes.

## Ebix (SDAT)

Les fichiers XML (Ebix) destinés à l'échange de données standardisé pour le marché de l'électricité peuvent être importés dans smart-me.

### Schémas pris en charge

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Téléchargement des données

Les fichiers peuvent être chargés sur les serveurs FTP de smart-me par FTP ou par FTPS (TLS) :

Serveur : ftp.smart-me.com

Chemin : /Ebix/

Nom d'utilisateur : « adresse e-mail d'un sous-compte du partenaire »

Mot de passe : « le mot de passe correspondant »

La taille des fichiers pour l'import est limitée à 50 mégaoctets.

### Attribution à un compte utilisateur

Dès que des fichiers Ebix ont été chargés sur les serveurs par un utilisateur du partenaire, l'ID du point de mesure est visible sous « Configuration->Partenaire->Import de données » (Konfiguration->Partner->Daten Import) :

![Import de données Ebix – illustration 1](/img/schnittstellen-ebix-datenimport/01.jpg)

Le point de mesure peut être attribué à un autre utilisateur en cliquant sur éditer (editieren) :

![Import de données Ebix – illustration 2](/img/schnittstellen-ebix-datenimport/02.jpg)
