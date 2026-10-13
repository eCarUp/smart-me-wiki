---
title: 'Notes de version du firmware'
slug: '/news/firmware-release-notes'
description: 'Pico v0.0.57-r57 Date : 11.9.2026'
sidebar_label: 'Notes de version du firmware'
---
## Notes de version du firmware

### Pico

Pico v0.0.57-r57
Date : 11.9.2026

Corrections de bugs :

- Correction : la station Pico reste inactive après une pause, la transaction reste ouverte

- Correction d'un faux déclenchement pour surcharge de la protection contre les surintensités à 130 %


Pico v0.0.55-r55
Date : 01.05.2026

Corrections de bugs

- EM-406 : amélioration de l'UART et du watchdog

- Correction rapide du mode point d'accès WiFi


Pico v0.0.54-r54
Date : 13.04.2026

Corrections de bugs :

- Plusieurs améliorations ont été apportées pour une meilleure connectivité WLAN, mesh et mobile.


Pico v0.0.53\-r53
Date : 12.03.2026

Fonctionnalités

- Affichage de l'écran « en attente de courant » lorsque la gestion de la charge ne peut pas attribuer de courant à une station

- Affichage d'un avertissement à l'écran et dans le cloud lorsque le CP est à 0V

- Affichage d'une erreur à l'écran lorsque la communication Meter-SOM a échoué

- Courant minimal par défaut modifié à 8A et car ID désactivé par défaut

- EM-348 : mise en œuvre du processus d'installation des cartes RFID

- EM-319 : l'avertissement de chaleur n'est plus affiché à l'écran, mais uniquement dans le cloud

- Recharge monophasée


Corrections de bugs :

- EM-380 : les nœuds mesh Pico ne rejoignent pas le groupe de gestion de la charge

- EM-396 : comportement hors ligne incorrect de la gestion de la charge

- EM-379 : l'équilibrage du courant ne fonctionne pas dans un groupe comprenant une station monophasée

- Erreur de communication SPI Meter-SOM (devrait corriger la communication Meter-SOM après un redémarrage)

- Correction d'un bug dans la résolution DNS (WiFi)

- Correction du temps d'attente PLC (car ID)

- Correction de la temporisation de la machine d'état de recharge

- Réglage du courant à 0A avant un déverrouillage du câble ou un redémarrage

- Attente que le module WiFi soit opérationnel avant toute action (p. ex. enclencher le relais). Cela devrait éviter des problèmes pendant la mise à jour de l'ESP32.

- Le mode point d'accès (installation) ne démarre parfois pas

- Redémarrage du module WiFi après 5min d'inactivité du contrôleur

- Correction de la troncature de paquets UDP de 1 octet lors des mises à jour Arm parallèles transmises via le mesh

- Vérification au démarrage de la présence des fichiers de firmware requis

- Améliorations de la mise à jour du firmware

- EM-368 : la Lexus arrête la recharge après 30min

- EM-367 : activation par RFID – le véhicule passe d'abord en état d'erreur

- EM-366 : la station arrête la recharge lorsque le module WiFi redémarre en raison d'un délai d'expiration hors ligne

- Correction d'un panic dû à un dépassement d'entier dans le calcul du temps de display\_module.rs

- EM-362 : impossible de se connecter au point d'accès d'installation

- WiFi : découplage du contexte d'exécution des timers


Pico v0.0.47\-r47 et 0.0.46\-r46
Date : 01.12.2025

- Option permettant de basculer entre 1 et 3 phases via Modbus ou API. (MLM n'est pas encore pris en charge)

- Améliorations internes


Pico v 0.0.37\-r37 et 0.0.36-r36
Date : 14.08.2025

Corrections de bugs

Pico v0.0.34-r34
Date : 16.01.2025

Corrections de bugs

- EM-336 : correction d'un problème d'installation WLAN


Pico v0.0.33-r33
Date : 06.01.2025

Fonctionnalités

- EM-281 : gestion de la charge : libération du courant réservé (6A) pour les stations en pause

- EM-172 : gestion de la charge : le courant à partir duquel la recharge passe de triphasée à monophasée est désormais réglable dans le cloud

- EM-172 : gestion de la charge : courant max. (par station) pour la recharge monophasée

- EM-329 : gestion de la charge : le passage de la recharge monophasée à triphasée est désormais possible. Le paramètre permettant de l'activer / le désactiver se trouve dans le cloud

- Installation : le WLAN en mode installation dispose désormais d'un mot de passe (« smart-me ») pour les Pico >= 7005567 et (7003152 - 7005229)


Corrections de bugs

- Stabilité de la connexion mobile améliorée


Pico v0.0.30\-r30
Date : 03.10.2024

- EM-320 Correction d'une possible perte de transactions de recharge lors de la communication (surtout mobile)


Pico v0.0.29-r29
Date : 1.7.2024

Fonctionnalités

- EM-245 : gestion de la charge : retour de la recharge monophasée à triphasée, même si des véhicules du groupe sont en cours de recharge.


Corrections de bugs

- EM-311 : ajustement des limites de température

- EM-307 : comportement hors ligne amélioré


Pico v0.0.28-r28
Date : 15.04.2024

Fonctionnalités :

- Nouveau déroulement et nouvelle animation des images d'autorisation (RFID, CardId) (EM-264)

- Délai d'expiration PLC supprimé (passé de 25s à 3s)


Corrections de bugs

- Détection hors ligne améliorée

- Améliorations WiFi


Version 0.0.25-r25
Date : 10.01.2024

Fonctionnalités :

- Prise en charge du SIM7070


Corrections de bugs

- Connexion mobile améliorée

- Affichage de l'écran « Échec » lorsque l'autorisation par carte RFID n'a pas abouti

- Gestion de la charge : l'indice de déséquilibre de courant calculé renvoyait une valeur erronée

- Gestion de la charge : le gestionnaire de charge n'augmente pas le courant de la station dans une condition spécifique


Technique :

- Mise à niveau de l'algorithme AES logiciel


Pico v0.0.23-r23
Date : 07.12.2023

Fonctionnalités :

- Courant dynamique en cas de perte de connexion pour le groupe de gestion de la charge


Corrections de bugs

- Corrections de l'outil EVSE (tentative de redémarrage après un plantage)


Pico v0.0.22-r22
Date : 04.09.2023

Corrections de bugs

- Correction d'un problème de verrouillage par très basses températures (en dessous de -20 degrés C)


Pico v0.0.21-r21
Date : 27.08.2023

Fonctionnalités

- Arrêt de la recharge lors de la désactivation du mode de calibrage (pour la validation des transactions en production)

- Agrandissement de la table de routage du module WiFi (prise en charge de jusqu'à 200 stations par groupe de gestion de la charge au lieu de 20)


Pico v0.0.20-r20
Date : 03.07.2023

-  Affichage de la date/l'heure (heure de début de la recharge et durée) sur l'écran de recharge

-  Affichage du courant utilisé et autorisé sur l'écran de puissance

-  Test RCD toutes les 24h à l'état A

-  Utilisation d'un débit en bauds plus faible si la mise à jour WiFi échoue


Pico v0.0.19-r19
Date : 08.05.2023

-  Correction d'un bug dans la machine d'état de recharge (attente à l'état B1 jusqu'à la présence d'un signal PWM avant d'enclencher le relais)


Pico v0.0.18-r18
Date : 03.04.2023

-  Mise en mémoire tampon des images (moins de lectures dans la mémoire flash)

-  RSSI (qualité du signal) pour le WiFi et le mobile

-  Écriture sur le disque (flash) après l'écriture du fichier de paramètres ou des images / mises à jour du firmware


Pico v0.0.17-r17
Date : 17.02.2023

- Modification de la temporisation de la mise sous tension une fois le véhicule prêt
    (meilleure prise en charge des types de véhicules)

- Optimisations internes


Version 0.0.16-r16
Date : 16.12.2022

- Optimisations internes


Version 0.0.15-r15
Date : 12.12.2022

- Amélioration du délestage Pico pour les stations individuelles

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

- Correction de bug : courant dynamique de la gestion de la charge


Version 0.0.10-r10
Date : 23.09.2022

- Correction de bug : détection du CarID


### Telstar 80A / Telstar CT

Version 9 (V18 et V19)

Date : 19.09.2023 (le test bêta a duré jusqu'en 08.2024)

Corrections de bugs :

 - Correction Modbus TCP (problème de 255 connexions seulement)  

Version 8 (V16 et V17)

Date : 12.04.2023

Corrections de bugs :

 - Correction : arrêt du « démarrage WiFi » après une déconnexion du point d'accès dans certains cas particuliers

Version 7 (V14 et V15)

Date : 16.01.2023

Corrections de bugs :

 - Délai d'expiration Modbus TCP (les clients inactifs sont déconnectés après 5min)

 - Modbus TCP : nombre maximal de clients limité à 4

 - Désactivation de la connexion mesh lorsque Modbus TCP est activé

 - Connexion au réseau mesh lorsque la connexion au point d'accès WiFi normal échoue 16 fois

Technique :

 - Mises à jour internes pour l'ESP

Version 6 (V12 et V13)

Date : 19.02.2022

Corrections de bugs :

 - Dépassement de tas Modbus TCP (au démarrage de Modbus)

 - Interblocage dans la résolution DNS avec un WiFi sans connexion Internet

Version 5 (V10 et V11)

Date : 21.02.2022

Corrections de bugs :

 - L'action déclenchée par un événement liée à la puissance était erronée d'un facteur 10

Version 4 (V8 et V9)

Date : 11.02.2021

Corrections de bugs :

 - Correction d'un bug Modbus TCP

smart-me se réserve le droit d'implémenter des fonctionnalités et des corrections de bugs non communiquées, en particulier lorsqu'il s'agit de questions internes.
