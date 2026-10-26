---
title: 'Mise à jour du firmware'
slug: '/konfiguration/firmware-update'
description: 'Effectuer une mise à jour du firmware'
sidebar_label: 'Mise à jour du firmware'
---
<Menueweg>Système → Mise à jour du firmware</Menueweg>

## Effectuer une mise à jour du firmware

Les produits smart-me sont régulièrement améliorés et enrichis de nouvelles fonctionnalités tout au long de leur cycle de vie.
Ces optimisations peuvent être installées par l'utilisateur lui-même.

ⓘ Remarque : les mises à jour du firmware sont surtout à appliquer lorsque vous avez constaté un comportement défectueux ou que vous souhaitez utiliser une nouvelle fonction que le firmware précédent ne prenait pas encore en charge. Les produits dont les fonctions évoluent rapidement, comme la borne de recharge Pico, devraient être mis à jour régulièrement.

### Ouvrir la page web de mise à jour du firmware

Une mise à jour du firmware peut être effectuée à tout moment sur le matériel smart-me, à condition qu'un accès à Internet soit garanti.

Via ce lien

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Ou via le menu smart-me

1.  Connectez-vous dans le navigateur via [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) avec vos identifiants.

2.  Dans le menu, sélectionnez Système / Mise à jour du firmware (System / Firmware Update)


![Mise à jour du firmware – Illustration 1](/img/konfiguration-firmware-update/01.png)

## Procédure

1.  ### Sélectionnez l'appareil à mettre à jour : « Update » ou « Update Communication »


- Update : firmware de l'appareil

- Update Communication : mise à jour du module de communication


Remarque :
Pour effectuer plusieurs mises à jour en parallèle, vous pouvez ouvrir plusieurs liens dans un nouvel onglet en effectuant un clic droit sur le lien.

![Mise à jour du firmware – Illustration 2](/img/konfiguration-firmware-update/02.png)

### 2\. Sélectionnez « Mettre à jour le firmware » (« Firmware aktualisieren »)

<div className="row">
<div className="col col--5">

Délai jusqu'au démarrage : 

- Pour Telstar (CT) et Pico, cela peut prendre jusqu'à 5 minutes.

- Pour la passerelle M-Bus, cela dépend de l'intervalle de téléversement.

</div>
<div className="col col--7 text--center">

![Mise à jour du firmware – Illustration 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Attendez que la mise à jour soit terminée et confirmez avec « OK »

<div className="row">
<div className="col col--4">

ⓘ Remarque : une fois la mise à jour commencée (> 1%), le navigateur n'a plus besoin de rester ouvert.

Durée jusqu'à la fin de la mise à jour : 

- Pour Telstar (CT), environ 5 minutes.

- Pour Pico, cela peut prendre jusqu'à un jour. Voir ci-dessous pour accélérer la mise à jour du firmware.

- Pour la passerelle M-Bus, cela dépend de l'intervalle de téléversement.

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

- Laissez l'onglet ouvert et actif dans le navigateur. Ainsi, le compteur ou la Pico communique plus souvent avec le cloud smart-me, ce qui permet d'échanger davantage de paquets de données et d'achever la mise à jour plus rapidement.

- La tension permet de vérifier si la communication est active. Comme elle varie toujours légèrement, il est facile d'observer si l'appareil envoie désormais des données toutes les 1 à 2 secondes.


![Mise à jour du firmware – Illustration 6](/img/konfiguration-firmware-update/06.png)

## Notes de version du firmware

[Notes de version du firmware](/news/firmware-release-notes)
