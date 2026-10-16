---
title: 'Notes de version du firmware'
slug: '/news/firmware-release-notes'
description: 'Pico v0.0.57-r57 Date : 11.9.2026'
sidebar_label: 'Notes de version du firmware'
---
## Notes de version du firmware

### Pico

<details id="pico-v0-0-57-r57" open>
<summary>Pico v0.0.57-r57 · 11.9.2026</summary>

Bugs :

- Correction : la transaction reste ouverte lorsque la borne Pico passe au repos après une pause

- Correction d'un faux déclenchement pour surcharge de la protection contre les surintensités à 130 %

</details>

<details id="pico-v0-0-55-r55">
<summary>Pico v0.0.55-r55 · 01.05.2026</summary>

Bugs

- EM-406 : amélioration de l'UART et du watchdog

- Correction rapide du mode point d'accès WiFi

</details>

<details id="pico-v0-0-54-r54">
<summary>Pico v0.0.54-r54 · 13.04.2026</summary>

Bugs :

- Plusieurs améliorations ont été apportées pour une meilleure connectivité WLAN, mesh et mobile.

</details>

<details id="pico-v0-0-53-r53">
<summary>Pico v0.0.53-r53 · 12.03.2026</summary>

Fonctionnalités

- Affichage de l'écran « en attente de courant » lorsque la gestion de la charge ne peut pas attribuer de courant à une borne

- Affichage d'un avertissement à l'écran et dans le cloud lorsque le CP est à 0V

- Affichage d'une erreur à l'écran lorsque la communication Meter-SOM a échoué

- Courant minimal par défaut porté à 8A et identification du véhicule (car id) désactivée par défaut

- EM-348 : mise en œuvre du processus d'installation des cartes RFID

- EM-319 : l'avertissement de surchauffe n'est plus affiché à l'écran, uniquement dans le cloud

- Recharge monophasée

Bugs :

- EM-380 : les nœuds mesh Pico ne rejoignent pas le groupe de gestion de la charge

- EM-396 : comportement hors ligne incorrect de la gestion de la charge

- EM-379 : l'équilibrage du courant ne fonctionne pas dans un groupe comportant une borne monophasée

- Erreur de communication SPI Meter-SOM (devrait corriger la communication Meter-SOM après un redémarrage)

- Correction d'un bug dans la résolution DNS (WiFi)

- Correction du temps d'attente PLC (car id)

- Correction de la temporisation de la machine d'états de recharge

- Courant réglé à 0A avant un déverrouillage du câble ou un redémarrage

- Attente que le module WiFi soit opérationnel avant toute action (p. ex. activation des relais). Cela devrait éviter des problèmes lors de la mise à jour de l'ESP32.

- Le mode point d'accès (installation) ne démarre parfois pas

- Redémarrage du module WiFi après 5min d'inactivité du contrôleur

- Correction de la troncature des paquets UDP à 1 octet lors des mises à jour Arm parallèles relayées par le mesh

- Vérification au démarrage de la présence des fichiers de firmware requis

- Améliorations de la mise à jour du firmware

- EM-368 : une Lexus arrête la recharge après 30min

- EM-367 : activation par RFID – le véhicule passe d'abord en état d'erreur

- EM-366 : la borne arrête la recharge lorsque le module WiFi redémarre suite à un délai d'inactivité hors ligne

- Correction d'un panic dû à un dépassement d'entier dans le calcul du temps de display\_module.rs

- EM-362 : impossible de se connecter au point d'accès d'installation

- WiFi : découplage du contexte d'exécution des timers

</details>

<details id="pico-v0-0-47-r47-und-0-0-46-r46">
<summary>Pico v0.0.47-r47 et 0.0.46-r46 · 01.12.2025</summary>

- Possibilité de basculer entre 1 et 3 phases via Modbus ou API. (MLM n'est pas encore pris en charge)

- Améliorations internes

</details>

<details id="pico-v-0-0-37-r37-und-0-0-36-r36">
<summary>Pico v 0.0.37-r37 et 0.0.36-r36 · 14.08.2025</summary>

Corrections de bugs

</details>

<details id="pico-v0-0-34-r34">
<summary>Pico v0.0.34-r34 · 16.01.2025</summary>

Corrections de bugs

- EM-336 : correction d'un problème d'installation WLAN

</details>

<details id="pico-v0-0-33-r33">
<summary>Pico v0.0.33-r33 · 06.01.2025</summary>

Fonctionnalités

- EM-281 : gestion de la charge : libération du courant réservé (6A) pour les bornes en pause

- EM-172 : gestion de la charge : le courant à partir duquel la recharge passe de triphasée à monophasée est désormais réglable dans le cloud

- EM-172 : gestion de la charge : courant max. (par borne) pour la recharge monophasée

- EM-329 : gestion de la charge : le passage de la recharge monophasée à triphasée est désormais possible. Le paramètre pour l'activer / le désactiver se trouve dans le cloud

- Installation : le WLAN en mode installation dispose désormais d'un mot de passe ("smart-me"), pour les Pico >= 7005567 et (7003152 - 7005229)

Bugs

- Stabilité de la connexion mobile améliorée

</details>

<details id="pico-v0-0-30-r30">
<summary>Pico v0.0.30-r30 · 03.10.2024</summary>

- EM-320 Correction d'une possible perte de transactions de recharge lors de la communication (principalement mobile)

</details>

<details id="pico-v0-0-29-r29">
<summary>Pico v0.0.29-r29 · 1.7.2024</summary>

Fonctionnalités

- EM-245 : gestion de la charge : retour de la recharge monophasée à triphasée, même si des véhicules du groupe sont en cours de recharge.

Bugs

- EM-311 : ajustement des limites de température

- EM-307 : comportement hors ligne amélioré

</details>

<details id="pico-v0-0-28-r28">
<summary>Pico v0.0.28-r28 · 15.04.2024</summary>

Fonctionnalités :

- Nouveau déroulement et nouvelle animation des images d'autorisation (RFID, CardId) (EM-264)

- Délai d'attente PLC supprimé (passé de 25s à 3s)

Bugs

- Détection hors ligne améliorée

- Améliorations WiFi

</details>

<details id="pico-version-0-0-25-r25">
<summary>Version 0.0.25-r25 · 10.01.2024</summary>

Fonctionnalités :

- Prise en charge du SIM7070

Bugs

- Connexion mobile améliorée

- Affichage de l'écran « Échec » lorsque l'autorisation par carte RFID n'a pas abouti

- Gestion de la charge : l'indice de déséquilibre de courant calculé renvoyait une valeur erronée

- Gestion de la charge : dans certaines conditions, le gestionnaire de charge n'augmente pas le courant de la borne

Technique :

- Mise à niveau de l'algorithme logiciel AES

</details>

<details id="pico-v0-0-23-r23">
<summary>Pico v0.0.23-r23 · 07.12.2023</summary>

Fonctionnalités :

- Courant dynamique en cas de perte de connexion pour le groupe de gestion de la charge

Bugs

- Corrections de l'outil EVSE (tentative de redémarrage après un plantage)

</details>

<details id="pico-v0-0-22-r22">
<summary>Pico v0.0.22-r22 · 04.09.2023</summary>

Bugs

- Correction d'un problème de verrouillage par très basses températures (en dessous de -20 degrés C)

</details>

<details id="pico-v0-0-21-r21">
<summary>Pico v0.0.21-r21 · 27.08.2023</summary>

Fonctionnalités

- Arrêt de la recharge lors de la désactivation du mode d'étalonnage (pour la validation des transactions en production)

- Agrandissement de la table de routage du module WiFi (prise en charge de jusqu'à 200 bornes par groupe de gestion de la charge au lieu de 20)

</details>

<details id="pico-v0-0-20-r20">
<summary>Pico v0.0.20-r20 · 03.07.2023</summary>

-  Affichage de la date/l'heure (heure de début de la recharge et durée) sur l'écran de recharge

-  Affichage du courant utilisé et autorisé sur l'écran de puissance

-  Test RCD toutes les 24h à l'état A

-  Utilisation d'un débit en bauds plus faible si la mise à jour WiFi échoue

</details>

<details id="pico-v0-0-19-r19">
<summary>Pico v0.0.19-r19 · 08.05.2023</summary>

-  Correction d'un bug dans la machine d'états de recharge (attente à l'état B1 jusqu'à la présence d'un signal PWM avant d'activer les relais)

</details>

<details id="pico-v0-0-18-r18">
<summary>Pico v0.0.18-r18 · 03.04.2023</summary>

-  Mise en mémoire tampon des images (moins de lectures dans la mémoire flash)

-  RSSI (qualité du signal) pour le WiFi et le mobile

-  Écriture sur le disque (flash) après l'écriture du fichier de paramètres ou des images / mises à jour du firmware

</details>

<details id="pico-v0-0-17-r17">
<summary>Pico v0.0.17-r17 · 17.02.2023</summary>

- Modification de la temporisation de la mise sous tension une fois le véhicule prêt
    (meilleure prise en charge des types de véhicules)

- Optimisations internes

</details>

<details id="pico-version-0-0-16-r16">
<summary>Version 0.0.16-r16 · 16.12.2022</summary>

- Optimisations internes

</details>

<details id="pico-version-0-0-15-r15">
<summary>Version 0.0.15-r15 · 12.12.2022</summary>

- Amélioration du délestage Pico pour les bornes individuelles

- Optimisations internes

</details>

<details id="pico-version-0-0-14-r14">
<summary>Version 0.0.14-r14 · 06.12.2022</summary>

- Affichage de la consommation d'énergie à la fin de la recharge

</details>

<details id="pico-version-0-0-13-r13">
<summary>Version 0.0.13-r13 · 09.11.2022</summary>

- Optimisations internes

</details>

<details id="pico-version-0-0-12-r12">
<summary>Version 0.0.12-r12 · 06.12.2022</summary>

- Optimisations internes

</details>

<details id="pico-version-0-0-11-r11">
<summary>Version 0.0.11-r11 · 11.10.2022</summary>

- Amélioration des avertissements et des erreurs dans le cloud

- Correction de bug : courant dynamique de la gestion de la charge

</details>

<details id="pico-version-0-0-10-r10">
<summary>Version 0.0.10-r10 · 23.09.2022</summary>

- Correction de bug : détection CarID

</details>
### Telstar 80A / Telstar CT

<details id="telstar-version-9-v18-and-v19" open>
<summary>Version 9 (V18 et V19) · 19.09.2023 (test bêta mené jusqu'en 08.2024)</summary>

Corrections de bugs :

 - Correction de Modbus TCP (problème de limite à 255 connexions)

</details>

<details id="telstar-version-8-v16-and-v17">
<summary>Version 8 (V16 et V17) · 12.04.2023</summary>

Corrections de bugs :

 - Correction : arrêt de « start wifi » après une déconnexion du point d'accès dans certains cas particuliers

</details>

<details id="telstar-version-7-v14-and-v15">
<summary>Version 7 (V14 et V15) · 16.01.2023</summary>

Corrections de bugs :

 - Délai d'attente Modbus TCP (les clients inactifs sont déconnectés après 5min)

 - Modbus TCP : nombre maximal de clients limité à 4

 - Désactivation de la connexion mesh lorsque Modbus TCP est activé

 - Connexion au réseau mesh lorsque la connexion au point d'accès WiFi normal échoue 16 fois

Technique :

 - Mises à jour internes pour l'ESP

</details>

<details id="telstar-version-6-v12-and-v13">
<summary>Version 6 (V12 et V13) · 19.02.2022</summary>

Corrections de bugs :

 - Dépassement de tas Modbus TCP (au démarrage de Modbus)

 - Blocage (deadlock) de la résolution DNS avec un WiFi sans connexion Internet

</details>

<details id="telstar-version-5-v10-and-v11">
<summary>Version 5 (V10 et V11) · 21.02.2022</summary>

Corrections de bugs :

 - L'action déclenchée par un événement de puissance était erronée d'un facteur 10

</details>

<details id="telstar-version-4-v8-and-v9">
<summary>Version 4 (V8 et V9) · 11.02.2021</summary>

Corrections de bugs :

 - Correction d'un bug Modbus TCP

</details>

smart-me se réserve le droit d'implémenter des fonctionnalités et des corrections de bugs non communiquées, en particulier lorsqu'il s'agit de questions internes.
