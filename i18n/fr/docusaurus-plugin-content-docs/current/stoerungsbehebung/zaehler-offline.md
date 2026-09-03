---
title: 'Compteur hors ligne'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Cette page décrit les étapes connues pour remettre en ligne un compteur d''électricité smart-me hors ligne.'
sidebar_label: 'Compteur hors ligne'
---
Cette page décrit les étapes connues pour remettre en ligne un compteur d'électricité smart-me hors ligne. 

## Bon à savoir

### Comment reconnaître qu'un compteur est hors ligne?

Un compteur smart-me est hors ligne lorsqu'il ne s'est plus annoncé au cloud depuis plus de 15 minutes. Cela peut être déterminé en vérifiant la dernière connexion sur le compteur.

![Dernière connexion](/img/stoerungsbehebung-zaehler-offline/01.png)

![Compteur hors ligne – illustration 2](/img/stoerungsbehebung-zaehler-offline/02.png)

De plus, la santé du système (Systemgesundheit) offre une vue d'ensemble de tous les appareils

### Version du firmware (Telstar 80A et Telstar CT)

Jusqu'aux versions FW 1.16 et 1.17 incluses, diverses adaptations ont été apportées au Telstar CT et au Telstar 80A afin d'améliorer la stabilité de la connexion WiFi. C'est pourquoi nous recommandons de toujours vérifier brièvement si la version la plus récente est installée sur le compteur et, le cas échéant, de la mettre à jour. [Mise à jour du firmware](/konfiguration/firmware-update) 

Si un compteur équipé de la dernière version du firmware est hors ligne alors que les compteurs voisins sont en ligne, nous te prions de nous le signaler.

### Comment enregistrer un nouveau réseau sur l'appareil smart-me?

Voir ci-dessous Réinstaller le compteur

### Réinstaller le compteur

Une réinstallation permet d'enregistrer un nouveau WiFi sur le compteur. L'installation doit être effectuée depuis le compte sur lequel le compteur est hors ligne. Le cloud smart-me reconnaît les appareils connus et ajoute les nouvelles données sans modifier les données existantes.

La réinstallation s'effectue selon la même procédure que celle décrite dans la [mise en service](/konfiguration/inbetriebnahme). Dans l'application, sélectionne le + en haut à droite et réinstalle l'appareil. Le nouveau SSID et le mot de passe sont alors automatiquement enregistrés sur l'appareil. Il est important de veiller à être connecté avec le bon compte.

### Délimitation du problème

Il est important de déterminer d'abord grossièrement d'où vient le problème de connexion. Si plusieurs compteurs perdent la connexion (sont hors ligne) presque au même moment, cela indique probablement des problèmes avec le point d'accès, le routeur ou la connexion Internet.

Les problèmes possibles pourraient être:

- Le point d'accès ou le routeur a un problème. Dans de tels cas, il peut être utile de redémarrer le routeur ou le point d'accès. Après le redémarrage, nos appareils devraient normalement rétablir une connexion au cloud smart-me en quelques minutes.

- Un nouveau fournisseur d'accès Internet a été activé ou un nouveau SSID (nom du réseau WLAN) a été défini. Dans ce cas, tu dois enregistrer le nouveau réseau sur chaque appareil smart-me afin qu'ils puissent se reconnecter.

- Pour les connexions Internet mobiles, il se peut que l'abonnement n'ait pas été payé. Assure-toi que les paiements pour l'Internet mobile sont en ordre.


Si un seul compteur ou un petit groupe de compteurs a perdu la connexion, le problème se situe en règle générale plutôt au niveau du compteur smart-me concerné.

## Remettre le compteur en ligne

Le guide suivant propose une procédure uniforme pour remettre un compteur en ligne. 

Merci de tenir compte des conditions suivantes:

- Cette procédure suppose que l'Internet est correctement configuré et remplit toutes les conditions requises.

- Assure-toi qu'un autre compteur du même compte, qui selon la planification devrait être connecté au même routeur ou point d'accès, est en ligne. Cela permet de s'assurer que ni le matériel Internet ni ses conditions ne sont à l'origine du problème.


### Telstar 80A et Telstar CT

- Le numéro de série commence par 63\*: Telstar 80A

- Le numéro de série commence par 62\*: Telstar CT


1.  ### Redémarrer le compteur


Ceci est uniquement à titre d'information sur la manière de procéder; il pourra être demandé plus bas de redémarrer le compteur afin de le remettre en ligne. 

Forcer le redémarrage: 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran s'éteint brièvement lors du redémarrage.


Comment reconnaître le redémarrage:

- Le compteur devient brièvement sombre et plus rien ne s'affiche à l'écran.


Comportement lorsque le compteur revient en ligne:

- En haut à droite de l'écran, le signal de réception alterne, directement après le redémarrage, entre X et réception. 

- Le compteur est en ligne lorsque, après environ 1 minute, le signal de réception en haut à droite de l'écran reste allumé en permanence et noir.

- Vérifier brièvement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.


Comportement lorsque le compteur ne revient pas en ligne:

- En haut à droite de l'écran, le signal de réception alterne après le redémarrage entre X et réception pendant plus de 2 minutes sans revenir en ligne.

- Si cela n'aide pas, appeler le support.


![Compteur hors ligne – illustration 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Vérification à l'arrivée

Les points suivants peuvent être vérifiés à l'arrivée. Si quelque chose a déjà été modifié sur le compteur, il est important qu'aucune autre modification ne soit effectuée sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

![Compteur hors ligne – illustration 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

### Le compteur alterne entre X et le symbole de réception:

- Vérifier si, en appuyant 10 secondes sur la touche T1, le symbole de réception à l'écran alterne entre clair et sombre. Si ce n'est pas le cas, appelle le support.

- Solution 1: Appuie simultanément sur T1 et T2: le compteur devrait devenir brièvement sombre. Attends 1 minute et vérifie si le compteur est de nouveau en ligne.

- Solution 2: Réinstalle le compteur. Sélectionne le compte cible et ne supprime en aucun cas le compteur dans le compte.

- Solution 3: Appeler le support 


### L'affichage est sombre:

- Solution 1: Vérifier qu'au moins la phase 1 est raccordée

- Solution 2: Vérifier que le conducteur neutre est correctement raccordé. 

- Solution 3: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4: Si, après les solutions 1 et 2, l'écran reste durablement noir, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformulare) peut être rempli (description de l'erreur: écran sombre code:dd).


L'affichage devient régulièrement sombre:

- Description du problème: Le compteur affiche quelque chose. Après un moment, il n'affiche plus rien pendant quelques secondes. Puis il revient, etc...

- Solution 1: Vérifier si le conducteur neutre est correctement raccordé et câblé. 

- Solution 2: Appeler le support 


Le compteur génère un WLAN local pendant plus de 5 minutes:

- Comment reconnaître cet état: Le signal de réception en haut à droite de l'écran alterne entre réception claire et sombre.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1: Essayer de débloquer la touche T1. 

- Solution 2: Remplir un [formulaire de demande RMA](/rma-antragsformulare) (description de l'erreur: touche T1 coincée code:tk).


Le compteur affiche en permanence un X en haut à droite:

- Solution 1: Vérifier si l'affichage devient régulièrement sombre. Si c'est le cas, consulter la solution dans la section ci-dessus «L'affichage devient régulièrement sombre».

- Solution 2: Redémarrer le compteur (voir description ci-dessus)

- Solution 3: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4: Si, après les solutions 1 et 2, un X est toujours affiché en permanence, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformulare) peut être rempli (description de l'erreur: X toujours affiché code:xx).


Le compteur ne parvient pas à se connecter au WLAN:

- Le signal de réception en haut à droite de l'écran alterne entre réception et X.


- Solution 1: Redémarrer le compteur (voir description ci-dessus)

- Solution 2: Celle-ci ne doit être appliquée que si aucun autre compteur n'est en ligne à proximité. Créer avec le smartphone un hotspot avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite à nouveau le compteur et vérifier s'il se connecte alors via le hotspot du smartphone. Si le compteur se connecte via le hotspot, cela indique un problème avec le routeur WLAN ou le point d'accès. Il faut veiller au fait que la plupart des smartphones n'autorisent la connexion via le hotspot qu'à cinq appareils au maximum.

- Solution 3: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4: Appeler le support 


## 3 phases 80A (ancienne version)

- Le numéro de série commence par 60\*: 3 phases 80A


1.  ### Redémarrer le compteur


Ceci est uniquement à titre d'information sur la manière de procéder. Il pourra être demandé plus bas de redémarrer le compteur afin de le remettre en ligne. 

Forcer le redémarrage: 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran affiche 888888 pendant 1-2 secondes.


Comment reconnaître le redémarrage?

- L'écran du compteur affiche 888888 pendant 1-2 secondes.


Comportement lorsque le compteur revient en ligne:

- En haut à gauche de l'écran, le signal WiFi alterne, directement après le redémarrage, entre WiFi avec et sans point d'exclamation.

- Le compteur est en ligne lorsque, après environ 1 minute, le signal WiFi en haut à gauche de l'écran s'affiche durablement sans point d'exclamation.

- Vérifier brièvement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.


Comportement lorsque le compteur ne revient pas en ligne:

- En haut à gauche de l'écran, le signal WiFi alterne après le redémarrage entre WiFi avec et sans point d'exclamation pendant plus de 2 minutes, sans revenir en ligne.

- Si cela n'aide pas, appeler le support.


### Vérification à l'arrivée

Les points suivants peuvent être vérifiés à l'arrivée. Si quelque chose a déjà été modifié sur le compteur, il est important qu'aucune autre modification ne soit effectuée sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

![Compteur hors ligne – illustration 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

Le compteur est sombre:

- Solution 1: Vérifier qu'au moins la phase 1 et le conducteur neutre sont correctement raccordés. 

- Solution 2: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3: Si, après les solutions 1 et 2, l'écran reste durablement noir, le compteur est défectueux.


888888 s'affiche à l'écran:

- Solution 1: Redémarrer le compteur

- Solution 2: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3: Si, après les solutions 1 et 2, 888888 est toujours affiché, le compteur est défectueux.


Le compteur génère un WLAN local pendant plus de 5 minutes:

- Comment reconnaître cet état: Le signal WiFi en haut à gauche de l'écran s'affiche alternativement avec et sans point d'exclamation.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1: Essayer de débloquer la touche T1

- Solution 2: Si, après la solution 1, un WLAN local est toujours généré, le compteur est défectueux.


Le compteur ne parvient pas à se connecter au WLAN:

- Comment reconnaître cet état: Le signal WiFi en haut à gauche de l'écran s'affiche avec un point d'exclamation.


- Solution 1: Redémarrer le compteur (voir description ci-dessus)

- Solution 2: Créer avec le smartphone un hotspot avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite à nouveau le compteur et vérifier s'il se connecte alors via le hotspot du smartphone. Si le compteur se connecte via le hotspot, cela indique un problème avec le routeur WLAN ou le point d'accès. Il faut veiller au fait que la plupart des smartphones n'autorisent la connexion via le hotspot qu'à cinq appareils au maximum.

- Solution 3: Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4: Appeler le support


## Bauer Station

- Le symbole dans le portail smart-me est un symbole de station-service et non un éclair

- Le numéro de série commence par 60\*: compteur 3 phases 80A (ancien)

- Le numéro de série commence par 62\*: Telstar 80A (nouveau)


### Vérification à l'arrivée

- -   Appeler le support. Guide en cours d'élaboration.


## Qualité de la connexion

### Qualité de réception WLAN du Pico

À partir de la version FW 0.0.18, la qualité de réception WLAN est affichée dans le portail smart-me. [Mise à jour du firmware](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Cette information peut être consultée depuis tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico: WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico: Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)




![Compteur hors ligne – illustration 6](/img/stoerungsbehebung-zaehler-offline/06.png)

### Les Goldpartner peuvent vérifier en ligne le type et la qualité de la connexion des Telstar et Pico.

- Se connecter au compte Goldpartner

- Configuration

- Partenaire (Partner)

- Gestion des appareils (Geräteverwaltung) (peut prendre un certain temps avec de nombreux appareils)

- Une nouvelle colonne avec le type de connexion s'affiche

- La qualité est indiquée entre parenthèses.

    - Telstar: WiFi &lt;= 40 peut entraîner des connexions instables (0 mauvais / 100 bon)

    - Pico: WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico: Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)


Cette information peut être consultée depuis tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".



![Compteur hors ligne – illustration 7](/img/stoerungsbehebung-zaehler-offline/07.png)
