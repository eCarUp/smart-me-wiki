---
title: 'Compteur hors ligne'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Cette page présente les étapes connues pour remettre en ligne un compteur d''électricité smart-me hors ligne.'
sidebar_label: 'Compteur hors ligne'
---
Cette page présente les étapes connues pour remettre en ligne un compteur d'électricité smart-me hors ligne. 

## Bon à savoir

### Comment savoir si un compteur est hors ligne ?

Un compteur smart-me est hors ligne lorsqu'il ne s'est plus manifesté auprès du cloud depuis plus de 15 minutes. Vous pouvez le déterminer en vérifiant la dernière connexion (Letzte Verbindung) sur le compteur.

![Dernière connexion](/img/stoerungsbehebung-zaehler-offline/01.png)

![Compteur hors ligne – illustration 2](/img/stoerungsbehebung-zaehler-offline/02.png)

L'état du système (Systemgesundheit) offre en outre une vue d'ensemble de tous les appareils

### Version du firmware (Telstar 80A et Telstar CT)

Jusqu'aux versions FW 1.16 et 1.17 incluses, diverses adaptations ont été apportées au Telstar CT et au Telstar 80A afin d'améliorer la stabilité de la connexion WiFi. C'est pourquoi nous recommandons de toujours vérifier rapidement si la version la plus récente est installée sur le compteur et, le cas échéant, de la mettre à jour. [Mise à jour du firmware](/konfiguration/firmware-update) 

Si un compteur équipé de la version de firmware la plus récente est hors ligne alors que les compteurs voisins sont en ligne, merci de nous le signaler.

### Comment enregistrer un nouveau réseau sur l'appareil smart-me ?

Voir ci-dessous Réinstaller le compteur

### Réinstaller le compteur

Une réinstallation permet d'enregistrer un nouveau WiFi sur le compteur. L'installation doit être effectuée depuis le compte sur lequel le compteur est hors ligne. Le cloud smart-me reconnaît les appareils connus et ajoute les nouvelles données sans modifier les données existantes.

La réinstallation suit la même procédure que celle décrite dans la [mise en service](/konfiguration/inbetriebnahme). Dans l'application, sélectionnez le + en haut à droite et réinstallez l'appareil. Le nouveau SSID et le mot de passe sont alors automatiquement enregistrés sur l'appareil. Veillez impérativement à être connecté avec le bon compte.

### Délimitation du problème

Il est important de déterminer d'abord, dans les grandes lignes, d'où vient le problème de connexion. Si plusieurs compteurs perdent la connexion (sont hors ligne) presque au même moment, cela indique probablement un problème au niveau du point d'accès, du routeur ou de la connexion Internet.

Problèmes possibles :

- Le point d'accès ou le routeur présente un problème. Dans ce cas, il peut être utile de redémarrer le routeur ou le point d'accès. Après le redémarrage, nos appareils devraient normalement se reconnecter au cloud smart-me en quelques minutes.

- Un nouveau fournisseur d'accès Internet a été activé ou un nouveau SSID (nom du réseau WLAN) a été défini. Dans ce cas, vous devez enregistrer le nouveau réseau sur chaque appareil smart-me afin qu'ils puissent se reconnecter.

- Avec une connexion Internet mobile, il se peut que l'abonnement n'ait pas été payé. Assurez-vous que les paiements de l'Internet mobile sont en ordre.


Si seul un compteur ou un petit groupe de compteurs a perdu la connexion, le problème se situe en général plutôt au niveau du compteur smart-me concerné.

## Remettre un compteur en ligne

Les instructions suivantes proposent une procédure uniforme pour remettre un compteur en ligne. 

Veuillez tenir compte des conditions préalables suivantes :

- Cette procédure suppose qu'Internet est correctement configuré et remplit toutes les conditions requises.

- Assurez-vous qu'un autre compteur du même compte, qui selon la planification devrait être connecté au même routeur ou point d'accès, est en ligne. Cela garantit que ni le matériel Internet ni ses conditions préalables ne sont à l'origine du problème.


### Telstar 80A et Telstar CT

- Le numéro de série commence par 63\* : Telstar 80A

- Le numéro de série commence par 62\* : Telstar CT


1.  ### Redémarrer le compteur


Ceci est uniquement fourni à titre d'information sur la manière de procéder ; il peut être demandé plus bas de redémarrer le compteur pour le remettre en ligne. 

Forcer le redémarrage : 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran s'éteint brièvement lors du redémarrage.


Comment reconnaître le redémarrage :

- Le compteur s'assombrit brièvement et plus rien ne s'affiche à l'écran.


Comportement lorsque le compteur revient en ligne :

- En haut à droite de l'écran, le symbole de réception alterne entre X et réception directement après le redémarrage. 

- Le compteur est en ligne lorsque, après env. 1 minute, le symbole de réception en haut à droite de l'écran est allumé en permanence et noir.

- Vérifier brièvement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.


Comportement lorsque le compteur ne revient pas en ligne :

- En haut à droite de l'écran, le symbole de réception alterne entre X et réception pendant plus de 2 minutes après le redémarrage, sans que le compteur revienne en ligne.

- Si cela ne suffit pas, appeler le support.


![Compteur hors ligne – illustration 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Vérification à l'arrivée

Les points suivants peuvent être vérifiés à l'arrivée. Si une modification a déjà été apportée au compteur, il est important de ne plus effectuer d'autres modifications sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

![Compteur hors ligne – illustration 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

### Le compteur alterne entre X et le symbole de réception :

- Vérifier si, en appuyant pendant 10 secondes sur la touche T1, le symbole de réception à l'écran alterne entre clair et foncé. Si ce n'est pas le cas, veuillez appeler le support.

- Solution 1 : Appuyez simultanément sur T1 et T2 : le compteur devrait s'assombrir brièvement. Attendez 1 minute et vérifiez si le compteur est de nouveau en ligne.

- Solution 2 : Réinstallez le compteur. Veuillez sélectionner le compte cible et ne supprimez en aucun cas le compteur dans le compte.

- Solution 3 : Appeler le support 


### L'affichage est éteint :

- Solution 1 : Vérifier qu'au moins la phase 1 est raccordée

- Solution 2 : Vérifier que le conducteur neutre est correctement raccordé. 

- Solution 3 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : Si, après les solutions 1 et 2, l'écran reste noir en permanence, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformulare) peut être rempli (description de l'erreur : Display Dunkel Code:dd).


L'affichage s'éteint à répétition :

- Description du problème : le compteur affiche quelque chose. Au bout d'un moment, il n'affiche plus rien pendant quelques secondes. Puis l'affichage revient, etc.

- Solution 1 : Vérifier que le conducteur neutre est correctement raccordé et câblé. 

- Solution 2 : Appeler le support 


Le compteur génère un WLAN local pendant plus de 5 minutes :

- Comment reconnaître cet état : le symbole de réception en haut à droite de l'écran alterne entre réception claire et foncée.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1 : Essayer de débloquer la touche T1. 

- Solution 2 : remplir un [formulaire de demande RMA](/rma-antragsformulare) (description de l'erreur : Taste T1 klemmt Code:tk).


Le compteur affiche en permanence un X en haut à droite :

- Solution 1 : Vérifier si l'affichage s'éteint à répétition. Si c'est le cas, veuillez consulter la solution dans la section ci-dessus « L'affichage s'éteint à répétition ».

- Solution 2 : Redémarrer le compteur (voir description ci-dessus)

- Solution 3 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : Si, après les solutions 1 et 2, un X est toujours affiché en permanence, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformulare) peut être rempli (description de l'erreur : X wird immer angezeigt Code:xx).


Le compteur ne parvient pas à se connecter au WLAN :

- Le symbole de réception en haut à droite de l'écran alterne entre réception et X.


- Solution 1 : Redémarrer le compteur (voir description ci-dessus)

- Solution 2 : Elle ne doit être appliquée que si aucun autre compteur n'est en ligne à proximité. Créer avec le smartphone un point d'accès mobile avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite une nouvelle fois le compteur et vérifier s'il se connecte alors via le point d'accès mobile du smartphone. Si le compteur se connecte via le point d'accès mobile, cela indique un problème au niveau du routeur WLAN ou du point d'accès. Notez que la plupart des smartphones n'autorisent pas plus de cinq appareils à se connecter via le point d'accès mobile.

- Solution 3 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : Appeler le support 


## Triphasé 80A (ancienne version)

- Le numéro de série commence par 60\* : triphasé 80A


1.  ### Redémarrer le compteur


Ceci est uniquement fourni à titre d'information sur la manière de procéder. Il peut être demandé plus bas de redémarrer le compteur pour le remettre en ligne. 

Forcer le redémarrage : 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran affiche 888888 pendant 1 à 2 secondes.


Comment reconnaître le redémarrage ?

- L'écran du compteur affiche 888888 pendant 1 à 2 secondes.


Comportement lorsque le compteur revient en ligne :

- En haut à gauche de l'écran, le symbole WiFi alterne entre WiFi avec et sans point d'exclamation directement après le redémarrage.

- Le compteur est en ligne lorsque, après env. 1 minute, le symbole WiFi en haut à gauche de l'écran s'affiche en permanence sans point d'exclamation.

- Vérifier brièvement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.


Comportement lorsque le compteur ne revient pas en ligne :

- En haut à gauche de l'écran, le symbole WiFi alterne entre WiFi avec et sans point d'exclamation pendant plus de 2 minutes après le redémarrage, sans que le compteur revienne en ligne.

- Si cela ne suffit pas, appeler le support.


### Vérification à l'arrivée

Les points suivants peuvent être vérifiés à l'arrivée. Si une modification a déjà été apportée au compteur, il est important de ne plus effectuer d'autres modifications sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

![Compteur hors ligne – illustration 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

Le compteur est éteint :

- Solution 1 : Vérifier qu'au moins la phase 1 et le conducteur neutre sont correctement raccordés. 

- Solution 2 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3 : Si, après les solutions 1 et 2, l'écran reste noir en permanence, le compteur est défectueux.


888888 s'affiche à l'écran :

- Solution 1 : Redémarrer le compteur

- Solution 2 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3 : Si, après les solutions 1 et 2, 888888 est toujours affiché, le compteur est défectueux.


Le compteur génère un WLAN local pendant plus de 5 minutes :

- Comment reconnaître cet état : le symbole WiFi en haut à gauche de l'écran s'affiche alternativement avec et sans point d'exclamation.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1 : Essayer de débloquer la touche T1

- Solution 2 : Si, après la solution 1, un WLAN local est toujours généré, le compteur est défectueux.


Le compteur ne parvient pas à se connecter au WLAN :

- Comment reconnaître cet état : le symbole WiFi en haut à gauche de l'écran s'affiche avec un point d'exclamation.


- Solution 1 : Redémarrer le compteur (voir description ci-dessus)

- Solution 2 : Créer avec le smartphone un point d'accès mobile avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite une nouvelle fois le compteur et vérifier s'il se connecte alors via le point d'accès mobile du smartphone. Si le compteur se connecte via le point d'accès mobile, cela indique un problème au niveau du routeur WLAN ou du point d'accès. Notez que la plupart des smartphones n'autorisent pas plus de cinq appareils à se connecter via le point d'accès mobile.

- Solution 3 : Si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : Appeler le support


## Bauer Station

- Le symbole dans le portail smart-me est un symbole de station-service et non un éclair

- Le numéro de série commence par 60\* : compteur triphasé 80A (ancien)

- Le numéro de série commence par 62\* : Telstar 80A (nouveau)


### Vérification à l'arrivée

- -   Appeler le support. Instructions en cours de rédaction.


## Qualité de la connexion

### Qualité de réception WLAN du Pico

À partir de la version FW 0.0.18, la qualité de réception WLAN est affichée dans le portail smart-me. [Mise à jour du firmware](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Cette information peut être consultée par tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico : WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico : Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)




![Compteur hors ligne – illustration 6](/img/stoerungsbehebung-zaehler-offline/06.png)

### Les partenaires Gold peuvent vérifier en ligne le type et la qualité de connexion des Telstar et Pico.

- Se connecter au compte partenaire Gold

- Configuration (Konfiguration)

- Partenaire (Partner)

- Gestion des appareils (Geräteverwaltung) (peut prendre un peu de temps s'il y a beaucoup d'appareils)

- Une nouvelle colonne indiquant le type de connexion s'affiche

- La qualité est indiquée entre parenthèses.

    - Telstar : WiFi &lt;= 40 peut entraîner des connexions instables (0 mauvais / 100 bon)

    - Pico : WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico : Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)


Cette information peut être consultée par tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".



![Compteur hors ligne – illustration 7](/img/stoerungsbehebung-zaehler-offline/07.png)
