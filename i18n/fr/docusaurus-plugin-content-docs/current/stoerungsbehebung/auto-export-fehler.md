---
title: 'Erreurs Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec l''Auto Export ainsi que les solutions possibles.'
sidebar_label: 'Erreurs Auto Export'
---
Cette section décrit les messages d'erreur connus en lien avec l'Auto-Export ainsi que les solutions possibles.

## Généralités

La configuration de l'Auto-Export est décrite ici : [Auto Export](/schnittstellen/auto-export) 

Si l'Auto-Export a réussi, le statut de chaque point de mesure peut être vérifié sous Configuration (Konfiguration) --> Auto-Export --> Affectation (Zuordnung) (sur le côté droit).

Pour actualiser l'affichage du statut d'exportation, il faut cliquer sur le menu Auto Export sur le côté gauche.

Notre système vérifie toutes les 10 minutes si une tâche est en retard.

![Erreurs Auto Export – Illustration 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Statut

Le statut renseigne à chaque fois sur l'état de l'exportation

- OK : dernière exportation réussie


![Erreurs Auto Export – Illustration 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problème 1 : la date se situe dans le futur

- La date se situe dans le futur


Solution :

- Attendre que la date configurée soit entièrement écoulée.


Problème 2 : attente

- Depuis la création / la dernière modification de l'affectation, le système n'a pas encore effectué d'exportation réussie.


Solution :

- Attendre 15 minutes. Ensuite, soit OK, soit un message d'erreur s'affiche.


### Meter 'xxx' is missing data

Problème :

- Aucune donnée n'est disponible pour ce jour.


Solution :

- Dans le menu Interfaces / Exportation automatique (Schnittstellen / Automatische Export)

- Noter la date de la dernière exportation.

- Dans le menu Dashboard

- Sélectionner la station (Station wählen)

- Rapport (Report)

- Régler la date de début sur « Dernière exportation » (Letzen Export) de l'AutoExport

- Régler la date de fin sur « Dernière exportation » (Letzen Export) de l'AutoExport

- Noter la date la plus ancienne sous Période électricité (Elektrizität Zeitspanne).

- Dans le menu Interfaces / Exportation automatique (Schnittstellen / Automatische Export)

- Sélectionner la station (Station wählen) 

- Modifier (Editieren)

- Régler Dernière exportation (Letzer Export) sur « date la plus ancienne sous Période électricité » +1. 

- Il est important de régler la date + 1, car nous ne pouvons exporter que des jours complets.

- Attendre jusqu'à 45 minutes que l'exportation actualise le statut.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problème 1 : compteur hors ligne

- Le point de mesure est hors ligne et ne fournit plus de données. 


Solution

- Le point de mesure doit être remis en ligne.

- L'Auto-Export redémarre ensuite automatiquement.


Problème 2 : les données d'une journée entière manquent

- Le point de mesure ne dispose pas de toutes les données pour la période entre la dernière et la prochaine exportation. P. ex. si le point de mesure a été installé le 2.3.2024 à 12h37, aucune exportation ne peut être effectuée pour le 2.3.2024, car cette journée est incomplète.


Solution

- (facultatif) Relevé manuel dans le système en aval, p. ex. EDM, afin que la journée soit saisie intégralement. (Le relevé peut p. ex. être effectué avec un rapport dans la vue d'ensemble principale de smart-me).

- Modifier le point de mesure et régler Dernière exportation (Letzter Export) sur la date suivante.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problème :

- L'ID du point de mesure comporte un ou plusieurs espaces à gauche


Solution :

- Supprimer les espaces et enregistrer.


![Erreurs Auto Export – Illustration 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problème 1 : le Key File n'est pas saisi.

- Le Key File n'est pas correct


Solution 1

- S'assurer que le Key File est correctement configuré selon [Auto Export](/schnittstellen/auto-export) --> Type de téléversement (Upload Art).

- Vérifier que le Key File généré commence comme suit :


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Erreurs Auto Export – Illustration 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problème : Smart-me n'a pas l'autorisation d'écrire dans le chemin indiqué.

Solution : accorder les autorisations.

Problème 2 : cas particulier lors de l'utilisation de MOVEit (état au 8.7.2024 : #32171)

- Utilisez le « key file » créé avec les deux commandes openssl. [Auto Export](/schnittstellen/auto-export) -->  Type de téléversement (Upload Art)

- Établir une première connexion, qui échoue (renvoi d'une erreur de certificat non valide).

- Dans mon logiciel « MOVEit », je reçois un message (en vert sur l'image). Je dois ensuite réactiver l'utilisateur (en bleu) et accepter le certificat (en rouge).

- Supprimez le « / » du chemin afin que les fichiers puissent être déposés dans le dossier « Export ». (Faux : "/Export", Correct : "Export)


![Erreurs Auto Export – Illustration 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Image de MOVEit

![Erreurs Auto Export – Illustration 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Image de l'affectation Auto-Export
