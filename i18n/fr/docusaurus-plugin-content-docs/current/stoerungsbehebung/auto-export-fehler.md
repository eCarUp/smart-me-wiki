---
title: 'Erreurs Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec l''Auto Export ainsi que les solutions possibles.'
sidebar_label: 'Erreurs Auto Export'
---
Cette section décrit les messages d'erreur connus en lien avec l'Auto Export ainsi que les solutions possibles.

## Généralités

La configuration de l'Auto Export est décrite ici : [Auto Export](/schnittstellen/auto-export) 

Si l'Auto Export a réussi, vous pouvez vérifier le statut de chaque point de mesure sous Configuration (Konfiguration) --> Auto Export (Auto-Export) --> Affectation (Zuordnung) (sur le côté droit).

Pour actualiser l'affichage du statut de l'export, cliquez sur le menu Auto Export sur le côté gauche.

Notre système vérifie toutes les 10 minutes si un job est en retard.

![Erreurs Auto Export – Illustration 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Statut

Le statut indique l'état de l'export

- OK : dernier export réussi


![Erreurs Auto Export – Illustration 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problème 1 : la date est dans le futur

- La date est dans le futur


Solution :

- Attendre que la date définie soit entièrement écoulée.


Problème 2 : attente

- Depuis la création ou la dernière modification de l'affectation, le système n'a encore effectué aucun export réussi.


Solution :

- Attendre 15 minutes. Ensuite, OK ou un message d'erreur s'affiche.


### Meter 'xxx' is missing data

Problème :

- Il n'existe aucune donnée pour ce jour.


Solution :

- Dans le menu Interfaces / Export automatique (Schnittstellen / Automatische Export)

- Noter la date du dernier export.

- Dans le menu Tableau de bord (Dashboard)

- Sélectionner la station

- Rapport (Report)

- Régler la date de début (Datum von) sur « Dernier export » (Letzen Export) de l'Auto Export

- Régler la date de fin (Datum bis) sur « Dernier export » (Letzen Export) de l'Auto Export

- Noter la date la plus ancienne sous Période électricité (Elektrizität Zeitspanne).

- Dans le menu Interfaces / Export automatique (Schnittstellen / Automatische Export)

- Sélectionner la station 

- Modifier (Editieren)

- Régler Dernier export (Letzer Export) sur « date la plus ancienne sous Période électricité » +1. 

- Il est important de régler la date + 1, car nous ne pouvons exporter que des journées complètes.

- Attendre jusqu'à 45 minutes que l'export mette à jour le statut.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problème 1 : compteur hors ligne

- Le point de mesure est hors ligne et ne fournit plus de données. 


Solution

- Le point de mesure doit être remis en ligne.

- L'Auto Export redémarre ensuite automatiquement.


Problème 2 : les données d'une journée entière manquent

- Le point de mesure ne dispose pas de toutes les données pour la période entre le dernier export et le prochain export. Par ex. si le point de mesure a été installé le 2.3.2024 à 12h37, aucun export ne peut être effectué pour le 2.3.2024, car cette journée est incomplète.


Solution

- (optionnel) Relevé manuel dans le système en aval, p. ex. EDM, afin que la journée soit saisie intégralement. (Le relevé peut p. ex. être effectué au moyen d'un rapport dans la vue d'ensemble principale de smart-me).

- Modifier le point de mesure et régler Dernier export (Letzter Export) sur la date suivante.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problème :

- L'ID du point de mesure contient un ou plusieurs espaces à gauche


Solution :

- Supprimer les espaces et enregistrer.


![Erreurs Auto Export – Illustration 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problème 1 : le key file n'est pas saisi.

- Le key file n'est pas correct


Solution 1

- S'assurer que le key file est correctement configuré selon [Auto Export](/schnittstellen/auto-export) --> Type de téléversement (Upload Art).

- Vérifier que le key file généré commence comme suit :


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Erreurs Auto Export – Illustration 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problème : smart-me n'a pas l'autorisation d'écrire dans le chemin indiqué.

Solution : accorder les autorisations.

Problème 2 : cas particulier lors de l'utilisation de MOVEit (état au 8.7.2024 : #32171)

- Utilisez le « key file » créé avec les deux commandes openssl. [Auto Export](/schnittstellen/auto-export) -->  Type de téléversement (Upload Art)

- Établir une première connexion, qui échoue (renvoi d'une erreur de certificat non valide).

- Dans mon logiciel « MOVEit », je reçois un message (en vert sur l'image). Je dois alors réactiver l'utilisateur (en bleu) et accepter le certificat (en rouge).

- Supprimez le « / » du chemin afin que les fichiers puissent être déposés dans le dossier « Export ». (Faux : « /Export », correct : « Export »)


![Erreurs Auto Export – Illustration 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Image de MOVEit

![Erreurs Auto Export – Illustration 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Image de l'affectation Auto Export
