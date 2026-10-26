---
title: 'Mise à jour du firmware'
slug: '/konfiguration/firmware-update'
description: 'Effectuer une mise à jour du firmware'
sidebar_label: 'Mise à jour du firmware'
---
<Menueweg>Système → Mise à jour du firmware</Menueweg>

## Effectuer une mise à jour du firmware

Tout au long de leur cycle de vie, les produits smart-me bénéficient régulièrement d'améliorations et de nouvelles fonctionnalités.
L'utilisateur peut effectuer lui-même ces optimisations.

ⓘ Remarque : les mises à jour du firmware sont surtout à appliquer lorsque vous avez constaté un comportement défaillant ou que vous souhaitez utiliser une nouvelle fonction que le firmware précédent ne prenait pas encore en charge. Les produits dont les fonctions évoluent rapidement, comme la borne de recharge Pico, devraient être mis à jour régulièrement.


## Procédure

### 1\. Sélectionnez l'appareil à mettre à jour :

« Mettre à jour » (Update) ou « Mettre à jour la communication » (Update Communication)

- Mettre à jour (Update) : firmware de l'appareil

- Mettre à jour la communication (Update Communication) : mise à jour du module de communication


Remarque :
Pour effectuer plusieurs mises à jour en parallèle, vous pouvez ouvrir plusieurs liens dans un nouvel onglet en effectuant un clic droit sur le lien.

![Mise à jour du firmware – Illustration 2](/img/konfiguration-firmware-update/02.png)

### 2\. Sélectionnez « Mettre à jour le firmware » (Firmware aktualisieren)

<div className="row">
<div className="col col--5">

Délai avant le démarrage : 

- Pour Telstar (CT) et Pico, cela peut prendre jusqu'à 5 minutes.

- Pour le M-Bus Gateway, cela dépend de l'intervalle de téléversement.

</div>
<div className="col col--7 text--center">

![Mise à jour du firmware – Illustration 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Attendez que la mise à jour soit terminée et confirmez avec « OK »

<div className="row">
<div className="col col--4">

ⓘ Remarque : une fois la mise à jour commencée (> 1%), il n'est plus nécessaire de laisser le navigateur ouvert.

Durée jusqu'à la fin de la mise à jour : 

- Pour Telstar (CT), env. 5 minutes.

- Pour Pico, cela peut prendre jusqu'à un jour. Voir ci-dessous pour accélérer la mise à jour du firmware.

- Pour le M-Bus Gateway, cela dépend de l'intervalle de téléversement.

</div>
<div className="col col--8 text--center">

![Mise à jour du firmware – Illustration 4](/img/konfiguration-firmware-update/04.png)

![Mise à jour du firmware – Illustration 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Accélérer la mise à jour du firmware

En règle générale, la mise à jour se poursuit même sans surveillance active ni navigateur ouvert.

Si la mise à jour est surveillée activement, elle peut être accélérée comme suit :

- Sélectionnez le compteur ou la Pico dans un deuxième onglet du navigateur.

- Sélectionnez la vue normale.

- Laissez l'onglet du navigateur ouvert et actif. Ainsi, le compteur ou la Pico communique plus souvent avec le smart-me Cloud, ce qui permet d'échanger davantage de paquets de données et de terminer la mise à jour plus rapidement.

- La tension permet de vérifier si la communication est active. Comme elle varie toujours légèrement, il est facile d'observer si l'appareil envoie désormais des données toutes les 1-2 secondes.


![Mise à jour du firmware – Illustration 6](/img/konfiguration-firmware-update/06.png)

## Notes de version du firmware

[Notes de version du firmware](/news/firmware-release-notes)
