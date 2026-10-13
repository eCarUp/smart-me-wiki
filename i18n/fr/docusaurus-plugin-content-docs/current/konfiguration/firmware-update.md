---
title: 'Mise à jour du firmware'
slug: '/konfiguration/firmware-update'
description: 'Effectuer une mise à jour du firmware'
sidebar_label: 'Mise à jour du firmware'
---
## Effectuer une mise à jour du firmware

Les produits smart-me bénéficient régulièrement d'améliorations et de nouvelles fonctionnalités tout au long de leur cycle de vie.
Vous pouvez appliquer vous-même ces optimisations.

ⓘ Remarque : effectuez une mise à jour du firmware surtout si vous avez constaté un comportement défectueux ou si vous souhaitez utiliser une nouvelle fonction que le firmware précédent ne prenait pas encore en charge. Les produits dont les fonctions évoluent rapidement, comme la borne de recharge Pico, doivent être mis à jour régulièrement.

### Ouvrir la page web de mise à jour du firmware

Vous pouvez mettre à jour le firmware du matériel smart-me à tout moment, à condition qu'il dispose d'un accès à Internet.

Via ce lien

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Ou via le menu smart-me

1.  Connectez-vous dans le navigateur sur [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) avec vos identifiants.

2.  Dans le menu, sélectionnez Système / Mise à jour du firmware (System / Firmware Update)


![Mise à jour du firmware – illustration 1](/img/konfiguration-firmware-update/01.png)

## Procédure

1.  ### Sélectionnez l'appareil à mettre à jour : « Mise à jour (Update) » ou « Mise à jour de la communication (Update Communication) »


- Mise à jour (Update) : firmware de l'appareil

- Mise à jour de la communication (Update Communication) : mise à jour du module de communication


Remarque :
Pour effectuer plusieurs mises à jour en parallèle, vous pouvez ouvrir plusieurs liens dans un nouvel onglet en faisant un clic droit sur le lien.

![Mise à jour du firmware – illustration 2](/img/konfiguration-firmware-update/02.png)

### 2\. Sélectionnez « Mettre à jour le firmware (Firmware aktualisieren) »

Délai avant le démarrage : 

- Pour le Telstar (CT) et la Pico, cela peut prendre jusqu'à 5 minutes.

- Pour la passerelle M-Bus, cela dépend de l'intervalle de téléversement.


![Mise à jour du firmware – illustration 3](/img/konfiguration-firmware-update/03.png)

### 3\. Attendez la fin de la mise à jour et confirmez avec « OK »

ⓘ Remarque : une fois la mise à jour commencée (> 1%), le navigateur n'a pas besoin de rester ouvert.

Durée jusqu'à la fin de la mise à jour : 

- Pour le Telstar (CT), environ 5 minutes.

- Pour la Pico, cela peut prendre jusqu'à un jour. Voir ci-dessous pour accélérer la mise à jour du firmware.

- Pour la passerelle M-Bus, cela dépend de l'intervalle de téléversement.


![Mise à jour du firmware – illustration 4](/img/konfiguration-firmware-update/04.png)

![Mise à jour du firmware – illustration 5](/img/konfiguration-firmware-update/05.png)

### Accélérer la mise à jour du firmware

En règle générale, la mise à jour se poursuit même sans surveillance active et sans navigateur ouvert.

Si vous surveillez activement la mise à jour, vous pouvez l'accélérer comme suit :

- Sélectionnez le compteur ou la Pico dans un deuxième onglet du navigateur.

- Sélectionnez la vue normale.

- Laissez l'onglet ouvert et actif dans le navigateur. Le compteur ou la Pico communique ainsi plus souvent avec le cloud smart-me, ce qui permet d'échanger davantage de paquets de données et de terminer la mise à jour plus rapidement.

- Vous pouvez vérifier si la communication est active grâce à la tension. Comme celle-ci fluctue toujours légèrement, il est facile d'observer si l'appareil envoie désormais des données toutes les 1-2 secondes.


![Mise à jour du firmware – illustration 6](/img/konfiguration-firmware-update/06.png)

## Notes de version du firmware

[Notes de version du firmware](/news/firmware-release-notes)
