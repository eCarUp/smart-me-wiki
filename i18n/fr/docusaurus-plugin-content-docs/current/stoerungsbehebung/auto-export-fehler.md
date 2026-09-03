---
title: 'Erreurs Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec l''Auto Export ainsi que les pistes de solution possibles.'
sidebar_label: 'Erreurs Auto Export'
---
Cette section décrit les messages d'erreur connus en lien avec l'Auto Export ainsi que les pistes de solution possibles.

## Généralités

La configuration de l'Auto Export est décrite ici : [Auto Export](/schnittstellen/auto-export) 

Si l'Auto Export a réussi, le statut de chaque point de mesure peut être vérifié sous Configuration (Konfiguration) --> Auto-Export --> Attribution (Zuordnung), sur le côté droit.

Pour actualiser l'affichage du statut d'export, il faut cliquer sur le menu Auto Export (Auto Export) sur le côté gauche.

Notre système vérifie toutes les 10 minutes si une tâche est en retard.

![Erreurs Auto Export – illustration 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Statut

Le statut donne à chaque fois des informations sur l'état de l'export

- OK : dernier export réussi


![Erreurs Auto Export – illustration 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problème 1 : la date se situe dans le futur

- La date se situe dans le futur


Solution :

- Attendre que la date paramétrée soit entièrement écoulée.


Problème 2 : attente

- Depuis la création / la dernière modification de l'attribution, le système n'a encore effectué aucun export réussi.


Solution :

- Attendre 15 minutes. Ensuite, soit OK, soit un message d'erreur s'affiche.


### Meter 'xxx' is missing data

Problème :

- Il n'existe aucune donnée pour ce jour.


Solution :

- Dans le menu Interfaces / Export automatique (Schnittstellen / Automatische Export)

- Noter la date du dernier export.

- Dans le menu Dashboard (Dashboard)

- Choisir la station

- Report (Report)

- Régler la date de début sur « dernier export » (Letzer Export) issu de l'AutoExport.

- Régler la date de fin sur « dernier export » (Letzer Export) issu de l'AutoExport.

- Noter la date la plus ancienne dans la plage de temps Électricité (Elektrizität Zeitspanne).

- Dans le menu Interfaces / Export automatique (Schnittstellen / Automatische Export)

- Choisir la station 

- Éditer (Editieren)

- Régler Dernier export (Letzer Export) sur « date la plus ancienne dans la plage de temps Électricité » +1. 

- Il est important de régler la date + 1, car nous ne pouvons exporter que des jours entiers.

- Attendre jusqu'à 45 minutes, jusqu'à ce que l'export actualise le statut.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problème 1 : compteur hors ligne

- Le point de mesure est hors ligne et ne fournit plus de données. 


Solution

- Le point de mesure doit être remis en ligne.

- Ensuite, l'Auto Export redémarre automatiquement.


Problème 2 : les données d'une journée entière manquent

- Le point de mesure ne dispose pas de toutes les données pour la période entre le dernier export et le prochain export. Par exemple, si le point de mesure a été installé le 2.3.2024 à 12h37, aucun export ne peut être effectué pour le 2.3.2024, car celui-ci est incomplet.


Solution

- (facultatif) Relevé manuel dans le système en aval, p. ex. EDM, afin que la journée soit saisie complètement. (Le relevé peut par exemple être réalisé avec un Report dans la vue principale de smart-me).

- Éditer le point de mesure et régler Dernier export (Letzter Export) sur la date suivante.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problème :

- L'ID du point de mesure comporte un ou plusieurs espaces à gauche


Solution :

- Supprimer les espaces et enregistrer.


![Erreurs Auto Export – illustration 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problème 1 : le key file n'est pas saisi.

- Le key file n'est pas correct


Solution 1

- S'assurer que le key file est configuré correctement selon [Auto Export](/schnittstellen/auto-export) --> Type d'upload (Upload Art).

- Vérifier si le key file généré commence comme suit :


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Erreurs Auto Export – illustration 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problème : Smart-me n'a pas l'autorisation d'écrire dans le path indiqué.

Solution : accorder les autorisations.

Problème 2 : cas particulier lors de l'utilisation de MOVEit (état au 8.7.2024 : #32171)

- Utilisez le « key file » qui a été créé avec les deux commandes openssl. [Auto Export](/schnittstellen/auto-export) -->  Type d'upload (Upload Art)

- Établir une première connexion, qui échoue (retour d'une erreur de certificat non valide).

- Dans mon logiciel « MOVEit », je reçois un message (en vert sur l'image). Je dois alors réactiver l'utilisateur (en bleu) et accepter le certificat (en rouge).

- Retirer le « / » du chemin, afin que les fichiers puissent être déposés dans le dossier « Export ». (Faux : « /Export », correct : « Export)


![Erreurs Auto Export – illustration 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Image provenant de MOVEit

![Erreurs Auto Export – illustration 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Image de l'attribution Auto Export
