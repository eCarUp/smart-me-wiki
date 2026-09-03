---
title: 'Firmware Release Notes'
slug: '/news/firmware-release-notes'
description: 'EM-406: Improve uart and watchdog'
sidebar_label: 'Firmware Release Notes'
---
## Firmware Release Notes

### Pico

Pico v 0.0.55-r55

Date : 01.05.2026

Bugs

- EM-406: Improve uart and watchdog

- Quick Fix WiFi AP mode


Pico v 0.0.54-r54
Date : 13.04.2026

Bugs :

- De nombreuses améliorations ont été apportées afin d'assurer une meilleure connectivité WLAN, mesh et mobile.


Pico v 0.0.53\-r53
Date : 12.03.2026

Feature

- Affichage de l'écran « en attente de courant » lorsque la gestion de la charge ne peut attribuer aucun courant à une station

- Affichage d'un avertissement à l'écran et dans le cloud lorsque le CP est à 0 V

- Affichage d'une erreur à l'écran lorsque la communication Meter-SOM a échoué

- Passage du courant minimal par défaut à 8 A et désactivation par défaut de l'identification du véhicule (car id)

- EM-348: RFID Card Installation Process Implementation

- EM-319: Ne plus afficher l'avertissement de température à l'écran. Il n'apparaît plus que dans le cloud

- Recharge monophasée


Bugs :

- EM-380: les nœuds mesh du Pico ne rejoignent pas le groupe de gestion de la charge

- EM-396: comportement hors ligne incorrect de la gestion de la charge

- EM-379: l'équilibrage du courant ne fonctionne pas dans un groupe comportant une station monophasée

- Erreur de communication SPI Meter-SOM (devrait corriger la communication Meter-SOM après un redémarrage)

- Correction d'un bug dans la résolution DNS (WiFi)

- Correction du temps d'attente du PLC (car id)

- Correction du minutage de la machine d'état de recharge

- Réglage du courant à 0 A avant le déverrouillage du câble ou un redémarrage

- Attendre que le module WiFi soit opérationnel avant d'effectuer une action (par exemple activer le relais). Cela devrait éviter les problèmes pendant la mise à jour de l'ESP32.

- Le mode point d'accès (installation) ne démarre parfois pas

- Redémarrage du module WiFi après 5 min d'inactivité du contrôleur

- Correction de la troncature des paquets UDP de 1 octet lors des mises à jour Arm parallèles transmises via le mesh

- Vérification au démarrage de l'existence des fichiers firmware requis

- Améliorations de la mise à jour du firmware

- EM-368: la Lexus arrête la recharge après 30 min

- EM-367: activation par RFID – le véhicule passe d'abord en état d'erreur

- EM-366: la station arrête la recharge lorsque le module WiFi redémarre en raison d'un dépassement du délai hors ligne

- Correction d'un dépassement d'entier (integer overflow panic) dans le calcul du temps de display\_module.rs

- EM-362: impossible de se connecter au point d'accès d'installation

- WiFi: découplage du contexte d'exécution des timers


Pico v 0.0.47\-r47 et 0.0.46\-r46
Date : 01.12.2025

- Possibilité de basculer entre 1 et 3 phases via Modbus ou l'API. (le MLM n'est pas encore pris en charge)

- Améliorations internes


Pico v 0.0.37\-r37 et 0.0.36-r36
Date : 14.08.2025

Corrections de bugs

Pico v 0.0.34-r34
Date : 16.01.2025

Corrections de bugs

- EM-336: Fix WLAN Installation Problem


Version 0.0.33-r33
Date : 06.01.2025

Features

- EM-281: gestion de la charge : libération du courant réservé (6 A) pour les stations en pause

- EM-172: gestion de la charge : le courant à partir duquel la recharge passe de trois phases à une phase est désormais réglable dans le cloud

- EM-172: gestion de la charge : courant max. (par station) pour la recharge monophasée

- EM-329: gestion de la charge : le passage de la recharge monophasée à la recharge triphasée est désormais possible. Le réglage pour l'activer ou la désactiver se trouve dans le cloud

- Installation : le WLAN en mode installation dispose maintenant d'un mot de passe (« smart-me »), pour les Pico >= 7005567 et (7003152 - 7005229)


Bugs

- Stabilité de la connexion mobile améliorée


Version 0.0.30\-r30
Date : 03.10.2024

- EM-320 correction d'une perte possible de sessions de recharge lors de la communication (principalement mobile)


Version 0.0.29-r29
Date : 1.7.2024

Features

- EM-245: gestion de la charge : retour d'une phase à trois phases, même si des véhicules du groupe sont en cours de recharge.


Bugs

- EM-311: Adjust Temperature Limits

- EM-307: Improved offline behavior


Version 0.0.28-r28
Date : 15.04.2024

Features :

- Nouveau déroulement et nouvelle animation des images d'autorisation (RFID, CardId) (EM-264)

- Suppression du timeout PLC (passé de 25 s à 3 s)


Bugs

- Amélioration de la détection hors ligne

- Améliorations WiFi


Version 0.0.25-r25
Date : 10.01.2024

Features :

- Prise en charge du SIM7070


Bugs

- Connexion mobile améliorée

- Affichage de l'écran « Failed » lorsque l'autorisation par carte RFID n'a pas abouti

- Gestion de la charge : l'indice de déséquilibre de courant calculé renvoyait une valeur erronée

- Gestion de la charge : le gestionnaire de charge n'augmente pas le courant de la station dans certaines conditions


Technical :

- upgrade aes soft algorithm


Version 0.0.23-r23
Date : 07.12.2023

Features :

- Courant dynamique en cas de perte de connexion pour un groupe de gestion de la charge


Bugs

- Corrections de l'outil EVSE (tentative de redémarrage après un plantage)


Version 0.0.22-r22
Date : 04.09.2023

Bugs

- Correction du problème de verrouillage par très basses températures (en dessous de -20 degrés C)


Version 0.0.21-r21
Date : 27.08.2023

Features

- Arrêt de la recharge lors de la désactivation du mode calibration (pour la validation des transactions en production)

- Agrandissement de la table de routage du module WiFi (prise en charge de 200 stations par groupe de gestion de la charge au lieu de 20)


Version 0.0.20-r20
Date : 03.07.2023

-  Affichage de la date et de l'heure (heure de début de la recharge et durée) sur l'écran de recharge

-  Affichage du courant utilisé et du courant autorisé sur l'écran de puissance

-  Test RCD toutes les 24 h en état A

-  Utilisation d'un débit plus faible si la mise à jour WiFi échoue


Version 0.0.19-r19
Date : 08.05.2023

-  Correction d'un bug dans la machine d'état de recharge (attente en état B1 jusqu'à réception d'un PWM avant l'activation du relais)


Version 0.0.18-r18
Date : 03.04.2023

-  Mise en mémoire tampon des images (réduction des lectures depuis la flash)

-  Prise en charge du RSSI (qualité du signal) pour le WiFi et le mobile

-  Écriture sur le disque (flash) après l'enregistrement du fichier de réglages ou des images / mises à jour du firmware


Version 0.0.17-r17
Date : 17.02.2023

- Modification du minutage du démarrage de la puissance lorsque le véhicule est prêt
    (prise en charge étendue des types de véhicules)

- Optimisations internes


Version 0.0.16-r16
Date : 16.12.2022

- Optimisations internes


Version 0.0.15-r15
Date : 12.12.2022

- Amélioration du délestage du Pico pour les stations individuelles

- Optimisations internes


Version 0.0.14-r14
Date : 06.12.2022

- Affichage de la consommation d'énergie à la fin de la recharge


Version 0.0.13-r13
Date : 09.11.2022

- Optimisations internes


Version 0.0.12-r12
Date : 06.12.2022

- Optimisations internes


Version 0.0.11-r11
Date : 11.10.2022

- Amélioration des avertissements et des erreurs dans le cloud

- Bugfix : courant dynamique de la gestion de la charge


Version 0.0.10-r10
Date : 23.09.2022

- Bugfix : détection du CarID


### Telstar 80A / Telstar CT

Version 9 (V18 et V19)

Date : 19.09.2023 (test bêta jusqu'en 08.2024)

Corrections de bugs :

 - Correction de Modbus TCP (problème de la limite à 255 connexions)  

Version 8 (V16 et V17)

Date : 12.04.2023

Corrections de bugs :

 - Correction de l'arrêt de « start wifi » après une déconnexion du point d'accès dans certains cas particuliers

Version 7 (V14 et V15)

Date : 16.01.2023

Corrections de bugs :

 - Timeout Modbus TCP (les clients inactifs sont déconnectés après 5 min)

 - Modbus TCP : limitation du nombre maximal de clients à 4

 - Désactivation de la connexion mesh lorsque Modbus TCP est activé

 - Connexion au réseau mesh lorsque la connexion au point d'accès WiFi normal échoue 16 fois

Technical :

 - Mises à jour internes pour l'ESP

Version 6 (V12 et V13)

Date : 19.02.2022

Corrections de bugs :

 - Débordement de tas (heap overflow) Modbus TCP (au démarrage de Modbus)

 - Blocage (deadlock) dans la résolution DNS avec un WiFi sans connexion Internet

Version 5 (V10 et V11)

Date : 21.02.2022

Corrections de bugs :

 - L'action Power Event était erronée d'un facteur 10

Version 4 (V8 et V9)

Date : 11.02.2021

Corrections de bugs :

 - Correction d'un bug Modbus TCP

smart-me se réserve le droit d'implémenter des fonctionnalités et des corrections de bugs non communiquées, en particulier lorsqu'il s'agit d'affaires internes.
