---
title: 'Compteur hors ligne'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Cette page explique les étapes connues pour remettre en ligne un compteur d''électricité smart-me hors ligne.'
sidebar_label: 'Compteur hors ligne'
---
Cette page explique les étapes connues pour remettre en ligne un compteur d'électricité smart-me hors ligne. 

## Bon à savoir

### Comment savoir si un compteur est hors ligne ?

<div className="row">
<div className="col col--8">

Un compteur smart-me est hors ligne lorsqu'il ne s'est plus manifesté dans le cloud depuis plus de 15 minutes. Vous pouvez le vérifier en contrôlant la dernière connexion du compteur.

</div>
<div className="col col--4 bild--mitte">

![Dernière connexion](/img/stoerungsbehebung-zaehler-offline/01.png)

</div>
</div>

![Compteur hors ligne – Illustration 2](/img/stoerungsbehebung-zaehler-offline/02.png)

En outre, la Santé du système (Systemgesundheit) offre une vue d'ensemble de tous les appareils

### Version du firmware (Telstar 80A et Telstar CT)

Jusqu'aux versions FW 1.16 et 1.17 incluses, diverses adaptations ont été apportées aux Telstar CT et Telstar 80A afin d'améliorer la stabilité de la connexion WiFi. C'est pourquoi nous recommandons de toujours vérifier rapidement si la version la plus récente est installée sur le compteur et, le cas échéant, de la mettre à jour. [Mise à jour du firmware](/konfiguration/firmware-update) 

Si un compteur équipé de la version de firmware la plus récente est hors ligne alors que les compteurs voisins sont en ligne, merci de nous le signaler.

### Comment enregistrer un nouveau réseau sur l'appareil smart-me ?

Voir ci-dessous Réinstaller le compteur

### Réinstaller le compteur

Une réinstallation permet d'enregistrer un nouveau WiFi sur le compteur. L'installation doit être effectuée depuis le compte dans lequel le compteur est hors ligne. Le cloud smart-me reconnaît les appareils connus et ajoute les nouvelles données sans modifier les données existantes.

La réinstallation s'effectue selon la même procédure que celle décrite dans la [mise en service](/konfiguration/inbetriebnahme). Dans l'app, sélectionnez le + en haut à droite et réinstallez l'appareil. Le nouveau SSID et le mot de passe sont alors automatiquement enregistrés sur l'appareil. Veillez à être connecté avec le bon compte.

### Délimitation du problème

Il est important de déterminer d'abord grossièrement d'où vient le problème de connexion. Si plusieurs compteurs perdent la connexion (sont hors ligne) presque au même moment, cela indique probablement des problèmes avec le point d'accès, le routeur ou la connexion Internet.

Problèmes possibles :

- Le point d'accès ou le routeur présente un problème. Dans ce cas, il peut être utile de redémarrer le routeur ou le point d'accès. Après le redémarrage, nos appareils devraient normalement se reconnecter au cloud smart-me en quelques minutes.

- Un nouveau fournisseur d'accès Internet a été activé ou un nouveau SSID (nom du réseau WiFi) a été défini. Dans ce cas, vous devez enregistrer le nouveau réseau sur chaque appareil smart-me afin qu'ils puissent se reconnecter.

- Avec une connexion Internet mobile, il se peut que l'abonnement n'ait pas été payé. Assurez-vous que les paiements pour l'Internet mobile sont en ordre.


Si un seul compteur ou un petit groupe de compteurs a perdu la connexion, le problème se situe généralement plutôt au niveau du compteur smart-me concerné.

## Remettre un compteur en ligne

Les instructions suivantes proposent une procédure uniforme pour remettre un compteur en ligne. 

Veuillez tenir compte des conditions préalables suivantes :

- Cette procédure suppose qu'Internet est correctement configuré et remplit toutes les conditions requises.

- Assurez-vous qu'un autre compteur du même compte, qui selon la planification devrait être connecté au même routeur ou point d'accès, est en ligne. Cela permet de s'assurer que ni le matériel Internet ni ses conditions préalables ne sont à l'origine du problème.


### Telstar 80A et Telstar CT

- Le numéro de série commence par 63\* : Telstar 80A

- Le numéro de série commence par 62\* : Telstar CT

1.  ### Redémarrer le compteur

Ceci est uniquement à titre d'information sur la manière de procéder ; plus bas, il peut être demandé de redémarrer le compteur pour le remettre en ligne. 

Forcer le redémarrage : 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran s'éteint brièvement lors du redémarrage.

Comment reconnaître le redémarrage :

- Le compteur s'éteint brièvement et plus rien n'est affiché à l'écran.

Comportement lorsque le compteur revient en ligne :

- En haut à droite de l'écran, le signal de réception alterne entre X et réception directement après le redémarrage. 

- Le compteur est en ligne lorsque, après env. 1 minute, le signal de réception en haut à droite de l'écran est allumé en permanence et noir.

- Vérifier rapidement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.

Comportement lorsque le compteur ne revient pas en ligne :

- En haut à droite de l'écran, le signal de réception alterne entre X et réception pendant plus de 2 minutes après le redémarrage, sans que le compteur revienne en ligne.

- Si cela n'aide pas, appeler le support.

![Compteur hors ligne – Illustration 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Contrôle à l'arrivée

<div className="row">
<div className="col col--7">

Les points suivants peuvent être contrôlés à l'arrivée. Si une modification a déjà été apportée au compteur, il est important de ne plus effectuer d'autres modifications sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

</div>
<div className="col col--5 bild--mitte">

![Compteur hors ligne – Illustration 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

</div>
</div>

### Le compteur alterne entre X et le symbole de réception :

- Vérifier si, en appuyant sur la touche T1 pendant 10 secondes, le symbole de réception à l'écran alterne entre clair et foncé. Si ce n'est pas le cas, veuillez appeler le support.

- Solution 1 : appuyez simultanément sur T1 et T2 : le compteur devrait s'éteindre brièvement. Attendez 1 minute et vérifiez si le compteur est de nouveau en ligne.

- Solution 2 : réinstallez le compteur. Veuillez sélectionner le compte cible et ne supprimez en aucun cas le compteur dans le compte.

- Solution 3 : appeler le support 


### L'écran est éteint :

- Solution 1 : vérifier qu'au moins la phase 1 est raccordée

- Solution 2 : vérifier que le conducteur neutre est correctement raccordé. 

- Solution 3 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : si, après les solutions 1 et 2, l'écran reste noir en permanence, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformular-schweiz) peut être rempli (description de l'erreur : Display Dunkel Code:dd).


L'écran s'éteint régulièrement :

- Description du problème : le compteur affiche quelque chose. Après un moment, il n'affiche plus rien pendant quelques secondes. Puis l'affichage revient, etc...

- Solution 1 : vérifier si le conducteur neutre est correctement raccordé et câblé. 

- Solution 2 : appeler le support 


Le compteur génère un WiFi local pendant plus de 5 minutes :

- Comment reconnaître cet état : le signal de réception en haut à droite de l'écran alterne entre réception claire et foncée.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1 : essayer de débloquer la touche T1. 

- Solution 2 : remplir un [formulaire de demande RMA](/rma-antragsformular-schweiz) (description de l'erreur : Taste T1 klemmt Code:tk).


Le compteur affiche en permanence un X en haut à droite :

- Solution 1 : vérifier si l'écran s'éteint régulièrement. Si c'est le cas, veuillez consulter la solution dans la section ci-dessus « L'écran s'éteint régulièrement ».

- Solution 2 : redémarrer le compteur (voir description ci-dessus)

- Solution 3 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : si, après les solutions 1 et 2, un X est toujours affiché en permanence, le compteur est défectueux. Dans ce cas, un [formulaire de demande RMA](/rma-antragsformular-schweiz) peut être rempli (description de l'erreur : X wird immer angezeigt Code:xx).


Le compteur ne parvient pas à se connecter au WiFi :

- Le signal de réception en haut à droite de l'écran alterne entre réception et X.


- Solution 1 : redémarrer le compteur (voir description ci-dessus)

- Solution 2 : celle-ci ne doit être appliquée que si aucun autre compteur n'est en ligne à proximité. Créer avec le smartphone un hotspot avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite à nouveau le compteur et vérifier s'il se connecte via le hotspot du smartphone. Si le compteur se connecte via le hotspot, cela indique un problème avec le routeur WiFi ou le point d'accès. Veillez à ce que la plupart des smartphones n'autorisent au maximum que cinq appareils à se connecter via le hotspot.

- Solution 3 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : appeler le support 


## Triphasé 80A (ancienne version)

- Le numéro de série commence par 60\* : triphasé 80A


1.  ### Redémarrer le compteur


Ceci est uniquement à titre d'information sur la manière de procéder. Plus bas, il peut être demandé de redémarrer le compteur pour le remettre en ligne. 

Forcer le redémarrage : 

- Appuyer sur T1 et T2 pendant 10 secondes. L'écran affiche 888888 pendant 1-2 secondes.


Comment reconnaître le redémarrage ?

- L'écran du compteur affiche 888888 pendant 1-2 secondes.


Comportement lorsque le compteur revient en ligne :

- En haut à gauche de l'écran, le signal WiFi alterne directement après le redémarrage entre WiFi avec et sans point d'exclamation.

- Le compteur est en ligne lorsque, après env. 1 minute, le signal WiFi en haut à gauche de l'écran est affiché en permanence sans point d'exclamation.

- Vérifier rapidement si le compteur est en ligne dans le cloud.

- Vérifier si une [mise à jour du firmware](/konfiguration/firmware-update) est disponible. Si oui, mettre à jour tous les compteurs.


Comportement lorsque le compteur ne revient pas en ligne :

- En haut à gauche de l'écran, le signal WiFi alterne entre WiFi avec et sans point d'exclamation pendant plus de 2 minutes après le redémarrage, sans que le compteur revienne en ligne.

- Si cela n'aide pas, appeler le support.


### Contrôle à l'arrivée

<div className="row">
<div className="col col--6">

Les points suivants peuvent être contrôlés à l'arrivée. Si une modification a déjà été apportée au compteur, il est important de ne plus effectuer d'autres modifications sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo de 30 secondes du compteur afin de mieux évaluer la situation. 

</div>
<div className="col col--6 bild--mitte">

![Compteur hors ligne – Illustration 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

</div>
</div>

Le compteur est éteint :

- Solution 1 : vérifier qu'au moins la phase 1 et le conducteur neutre sont correctement raccordés. 

- Solution 2 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3 : si, après les solutions 1 et 2, l'écran reste noir en permanence, le compteur est défectueux.


888888 est affiché à l'écran :

- Solution 1 : redémarrer le compteur

- Solution 2 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 3 : si, après les solutions 1 et 2, 888888 est toujours affiché, le compteur est défectueux.


Le compteur génère un WiFi local pendant plus de 5 minutes :

- Comment reconnaître cet état : le signal WiFi en haut à gauche de l'écran est affiché alternativement avec et sans point d'exclamation.

- Dans ce cas, cela indique une touche T1 coincée.

- Solution 1 : essayer de débloquer la touche T1

- Solution 2 : si, après la solution 1, un WiFi local est toujours généré, le compteur est défectueux.


Le compteur ne parvient pas à se connecter au WiFi :

- Comment reconnaître cet état : le signal WiFi en haut à gauche de l'écran est affiché avec un point d'exclamation.


- Solution 1 : redémarrer le compteur (voir description ci-dessus)

- Solution 2 : créer avec le smartphone un hotspot avec le même SSID et le même mot de passe que le WiFi existant. Redémarrer ensuite à nouveau le compteur et vérifier s'il se connecte via le hotspot du smartphone. Si le compteur se connecte via le hotspot, cela indique un problème avec le routeur WiFi ou le point d'accès. Veillez à ce que la plupart des smartphones n'autorisent au maximum que cinq appareils à se connecter via le hotspot.

- Solution 3 : si cela est possible sans grand effort, retirer le fusible et le remettre en place. 

- Solution 4 : appeler le support


## Station Bauer

- Le symbole dans le portail smart-me est un symbole de station-service et non un éclair

- Le numéro de série commence par 60\* : compteur triphasé 80A (ancien)

- Le numéro de série commence par 62\* : Telstar 80A (nouveau)


### Contrôle à l'arrivée

- -   Appeler le support. Instructions en cours de rédaction.


## Qualité de la connexion

### Qualité de réception WiFi du Pico

<div className="row">
<div className="col col--5">

À partir de la version FW 0.0.18, la qualité de réception WiFi est affichée dans le portail smart-me. [Mise à jour du firmware](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Cette information peut être consultée depuis tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico : WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico : Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)

</div>
<div className="col col--7 bild--mitte">

![Compteur hors ligne – Illustration 6](/img/stoerungsbehebung-zaehler-offline/06.png)

</div>
</div>

### Les partenaires Gold peuvent vérifier en ligne le type et la qualité de connexion des Telstar et Pico.

<div className="row">
<div className="col col--7">

- Se connecter au compte partenaire Gold

- Configuration (Konfiguration)

- Partenaire (Partner)

- Gestion des appareils (Geräteverwaltung) (peut prendre un certain temps s'il y a beaucoup d'appareils)

- Une nouvelle colonne indiquant le type de connexion s'affiche

- La qualité est indiquée entre parenthèses.

    - Telstar : WiFi &lt;= 40 peut entraîner des connexions instables (0 mauvais / 100 bon)

    - Pico : WiFi (0 = unknown, -1 à -49 = excellent,  -50 à  -59 = very good,  -60 à -69 = good, -70 à -99= low) (-99 mauvais, -1 bon)

    - Pico : Mobile (0 = unknown, 1 à -74 = excellent, -75 à -84 = good,  -85 à -94 = low) (-99 mauvais, -1 bon)

Cette information peut être consultée depuis tous les comptes via l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) avec la commande "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

</div>
<div className="col col--5 bild--mitte">

![Compteur hors ligne – Illustration 7](/img/stoerungsbehebung-zaehler-offline/07.png)

</div>
</div>
