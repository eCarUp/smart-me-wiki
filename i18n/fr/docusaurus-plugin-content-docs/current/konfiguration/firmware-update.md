---
title: 'Mise à jour du firmware'
slug: '/konfiguration/firmware-update'
description: 'Effectuer une mise à jour du firmware'
sidebar_label: 'Mise à jour du firmware'
---
## Effectuer une mise à jour du firmware

Au cours de leur cycle de vie, les produits smart-me bénéficient régulièrement d'améliorations et de nouvelles fonctions.
Ces optimisations peuvent être effectuées de manière autonome par l'utilisateur.

ⓘ Remarque : les mises à jour du firmware sont surtout à effectuer lorsque tu as constaté un comportement erroné ou que tu souhaites utiliser une nouvelle fonction que le firmware précédent ne prenait pas encore en charge. Les produits dont les fonctions évoluent rapidement, comme par exemple la borne de recharge Pico, devraient être mis à jour régulièrement.

### Ouvrir la page web de mise à jour du firmware

Sur le matériel smart-me, une mise à niveau du firmware peut être effectuée à tout moment, pour autant que l'accès à Internet soit garanti.

Via ce lien

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Ou via le menu smart-me

1.  Connecte-toi dans le navigateur via [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) avec tes données de connexion.

2.  Dans le menu, choisis Système / Mise à jour du firmware (System / Firmware Update)


![Mise à jour du firmware – illustration 1](/img/konfiguration-firmware-update/01.png)

## Procédure

1.  ### Sélectionne l'appareil à mettre à jour : « Update » ou « Update Communication »


- Update : firmware de l'appareil

- Update Communication : mise à jour du module de communication


Remarque :
Pour effectuer plusieurs mises à jour en parallèle, tu peux ouvrir plusieurs liens dans un nouvel onglet à l'aide d'un clic droit sur le lien.

![Mise à jour du firmware – illustration 2](/img/konfiguration-firmware-update/02.png)

### 2\. Choisis « Mettre à jour le firmware » (Firmware aktualisieren)

Durée jusqu'au démarrage : 

- Sur Telstar (CT) et Pico, cela peut prendre jusqu'à 5 minutes.

- Sur le M-Bus Gateway, cela dépend de l'intervalle d'upload.


![Mise à jour du firmware – illustration 3](/img/konfiguration-firmware-update/03.png)

### 3\. Attends que la mise à jour soit terminée et confirme avec « OK »

ⓘ Remarque : lorsque la mise à jour a commencé (> 1 %), le navigateur ne doit pas rester ouvert.

Durée jusqu'à la fin de la mise à jour : 

- Sur Telstar (CT), env. 5 minutes.

- Pour Pico, cela peut prendre jusqu'à un jour. Voir ci-dessous pour accélérer la mise à jour du firmware.

- Pour le M-Bus Gateway, cela dépend de l'intervalle d'upload.


![Mise à jour du firmware – illustration 4](/img/konfiguration-firmware-update/04.png)

![Mise à jour du firmware – illustration 5](/img/konfiguration-firmware-update/05.png)

### Accélérer la mise à jour du firmware

En règle générale, la mise à jour se poursuit même sans surveillance active ni navigateur ouvert.

Si la mise à jour est surveillée activement, elle peut être accélérée comme suit :

- Sélectionne le compteur ou la Pico dans un deuxième onglet du navigateur.

- Choisis la vue normale.

- Laisse l'onglet ouvert et actif dans le navigateur. Cela a pour effet que le compteur ou la Pico communique plus fréquemment avec le cloud smart-me et que davantage de paquets de données peuvent ainsi être échangés afin de terminer la mise à jour plus rapidement.

- Pour savoir si la communication est active, il suffit d'observer la tension. Comme celle-ci fluctue toujours légèrement, il est facile de constater si l'appareil envoie désormais des données toutes les 1 à 2 secondes.


![Mise à jour du firmware – illustration 6](/img/konfiguration-firmware-update/06.png)

## Firmware Release Notes

[Firmware Release Notes](/news/firmware-release-notes)
