---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'Les appareils smart-me peuvent être intégrés directement dans Solar Manager via le cloud.'
sidebar_label: 'Solar Manager'
---
Les appareils smart-me peuvent être intégrés directement dans Solar Manager via le cloud. Les [compteurs virtuels](/konfiguration/virtuelle-zaehler) peuvent également être repris. 

## Petite mise à jour de Solar Manager à partir d'août 2026

Avec la nouvelle mise à jour de Solar Manager, les Pico ne sont plus pilotées via le numéro de série, mais via l'ID du groupe de gestion de la charge de niveau 1.

Dans cette courte vidéo, je vous montre étape par étape comment cela fonctionne, afin que vous puissiez effectuer correctement les réglages du côté smart-me.

Bon à savoir : grâce à cette mise à jour, la recharge monophasée à 6 A (env. 1,4 kW) devient possible, ce qui est idéal pour de faibles excédents photovoltaïques. Vous trouverez la manière de la configurer dans la documentation de Solar Manager

<Embed src="https://drive.google.com/file/d/1Oc3uuTCMusCJMHL7hjlJzFbkoFONHpm4/preview" aspect="1.350" title="Drive, solarmanager_update_2026.mp4" />

solarmanager\_update\_2026.mp4

Solar Manager offre plusieurs options pour utiliser le compteur smart-me et les bornes de recharge Pico :

- Comme Smart Meter ou compteur de bilan, directement après le compteur du fournisseur d'électricité

- Comme mesure de la consommation d'appareils tels que bornes de recharge, pompes à chaleur, etc.

- Comme mesure de la production photovoltaïque

- Comme interrupteur, pour utiliser le contact du relais du compteur.

- Comme fournisseur de données pour la gestion de la charge de l'électromobilité

Public cible : maisons individuelles et immeubles collectifs

<Video src="D3Mh-cAyHvw" title="Vidéo YouTube, démo de l'intégration des compteurs smart-me dans Solar Manager" />

## Intégration en général

Pour l'intégration, il faut les identifiants cloud (nom d'utilisateur et mot de passe)  ainsi que le numéro de série du compteur. Le numéro de série est visible directement dans le portail smart-me et sur les appareils eux-mêmes. Pour le numéro de série, n'utilisez que les chiffres avant le trait d'union !

![Solar Manager – Figure 1](/img/drittsysteme-solarmanager/01.png)

### Exemple :

Numéro de série portail web : 07907952

Numéro de série compteur : 07907952-123 (omettre -123)

## Compteur smart-me comme Smart Meter

Dans Solar Manager, il est possible d'ajouter un Smart Meter, qui peut être monté de deux manières :

- Directement après le compteur du fournisseur d'électricité (compteur de bilan) ; la production (-) et la consommation (+) sont alors mesurées directement 

- Mesure de la consommation uniquement ; la production est saisie séparément

Pour la configuration, ajoutez un Smart Meter et sélectionnez smart-me Cloud. Le Smart Meter est connecté à l'aide des identifiants et du numéro de série à 8 chiffres. 

- Lieu d'installation :  selon la description ci-dessus

- Inverser la mesure : si le compteur était monté de manière inversée, il est possible de changer le signe ici. 

![Solar Manager – Figure 2](/img/drittsysteme-solarmanager/02.png)

## Utiliser le relais smart-me

Le [Compteur triphasé Telstar](/produkte/telstar) dispose de deux sorties de contact libres de potentiel pour piloter des appareils externes, dont l'une avec un relais 8A intégré. Celui-ci peut être commuté dans Solar Manager. Un « interrupteur » (« Schalter ») est créé et paramétré pour chaque relais. Les interrupteurs doivent d'abord être définis comme sorties numériques dans le portail smart-me (voir [Entrées et sorties](/)) 

Pour la configuration, ajoutez un nouvel « interrupteur » (« Schalter ») sous Appareils (Geräte) et sélectionnez « Relais sur le compteur triphasé smart-me » (« Relais am smart-me 3-Phasen Zähler »). Le compteur est connecté à l'aide des identifiants et du numéro de série à 8 chiffres. 

### Paramètres

Puissance d'enclenchement (W) (Einschaltleistung (W)) :

Quelle puissance excédentaire doit être disponible pour que la commutation ait lieu.

Délai d'enclenchement (min) (Einschaltverzögerung (min)) :

Combien de temps la puissance définie doit être disponible avant la commutation.

Délai de déclenchement (min) (Abschaltverzögerung (min)) :

Combien de temps attendre après que la puissance est passée sous le seuil avant le déclenchement (p. ex. pour compenser le passage d'un nuage)

Durée de fonctionnement minimale (min) (Mindestlaufzeit (min)) : 

Durée minimale pendant laquelle l'appareil doit fonctionner. Pratique pour les pompes à chaleur avec compresseurs, etc.

![Solar Manager – Figure 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Figure 4](/img/drittsysteme-solarmanager/04.png)

## Contact :

<Kacheln min="20rem">
<Kachel titel="Solar Manager AG">

Schlyffistäg 36, CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) · [info@solarmanager.ch](mailto:info@solarmanager.ch) · +41 56 512 92 08

</Kachel>
</Kacheln>

## FAQ

<details id="stromfreigabe-pico-ladestation-funktioniert-nicht-ab-4200w">
<summary>La libération du courant de la borne de recharge Pico ne fonctionne pas à partir de 4200W</summary>

La borne de recharge Pico est livrée par défaut avec un courant minimal de 8A, afin de prendre en charge directement tous les types de véhicules possibles après l'installation.

En combinaison avec Solar Manager, celui-ci part toutefois par défaut d'un courant minimal de 6A pour piloter la Pico.

Choisissez le cas qui s'applique à votre véhicule afin de prendre en charge sans erreur la configuration souhaitée :

Cas A : vous avez un véhicule capable de gérer un courant de démarrage de 6A

- Réglez le courant minimal sur le matériel de la Pico à 6A.

![Solar Manager – Figure 5](/img/drittsysteme-solarmanager/05.png)

Cas B : vous avez un véhicule dont on sait qu'il ne gère pas un courant de démarrage de 6A  (p. ex. Renault Zoe)

- Dans Solar Manager, sélectionnez le réglage "Renault Zoe 9A" dans le choix du véhicule

</details>
