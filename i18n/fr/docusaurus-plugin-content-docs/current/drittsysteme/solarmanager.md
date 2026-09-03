---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'Les appareils smart-me peuvent être intégrés directement au Solar Manager via le cloud.'
sidebar_label: 'Solar Manager'
---
Les appareils smart-me peuvent être intégrés directement au Solar Manager via le cloud. Les [compteurs virtuels](/konfiguration/billing/virtuelle-zaehler) peuvent également être repris. 

Le Solar Manager offre plusieurs options pour utiliser le compteur smart-me et les bornes de recharge Pico :

- Comme smart meter ou compteur de bilan directement après le compteur du fournisseur d'électricité

- Comme mesure de consommation d'appareils tels que bornes de recharge, pompes à chaleur, etc.

- Comme mesure de production photovoltaïque

- Comme interrupteur, afin d'utiliser le contact du relais sur le compteur.

- Comme fournisseur de données pour la gestion de la charge en électromobilité




Public cible : maisons individuelles et immeubles collectifs

<Video src="D3Mh-cAyHvw" title="Vidéo YouTube, démonstration de l'intégration Solar Manager des compteurs smart-me" />

## Intégration en général

Pour l'intégration, il faut les identifiants cloud (nom d'utilisateur et mot de passe) ainsi que le numéro de série du compteur. Le numéro de série est visible directement dans le portail smart-me et sur les appareils eux-mêmes. Pour le numéro de série, n'utilisez que les chiffres situés avant le tiret !

![Solar Manager – Illustration 1](/img/drittsysteme-solarmanager/01.png)

### Exemple :

Numéro de série portail web : 07907952

Numéro de série compteur : 07907952-123 (omettre -123)

## Compteur smart-me comme smart meter

Dans le Solar Manager, il est possible d'ajouter un smart meter ; celui-ci peut être monté de deux manières :

- Directement après le compteur du gestionnaire de réseau de distribution (GRD) (compteur de bilan), la production (-) et la consommation (+) étant mesurées directement 

- Mesure de consommation uniquement, la production étant relevée séparément


Pour la configuration, ajoutez un smart meter et sélectionnez-y smart-me Cloud. Le smart meter est connecté à l'aide des identifiants et du numéro de série à 8 chiffres. 

- Lieu d'installation :  selon la description ci-dessus

- Inverser la mesure : si le compteur était monté de manière inversée, il serait possible de changer le signe ici. 


![Solar Manager – Illustration 2](/img/drittsysteme-solarmanager/02.png)

## Utiliser le relais smart-me

Le [compteur triphasé Telstar](/produkte/telstar) dispose de deux sorties à contact sec pour la commande d'appareils externes, dont l'une avec un relais 8 A intégré. Le Solar Manager permet de le commuter. Un « interrupteur » est saisi et paramétré par relais. Les interrupteurs doivent être définis au préalable comme sorties numériques dans le portail smart-me (voir [Entrées et sorties](/)) 

Pour la configuration, ajoutez sous Appareils un nouvel « interrupteur » et sélectionnez-y « Relais sur le compteur triphasé smart-me ». Le compteur est connecté à l'aide des identifiants et du numéro de série à 8 chiffres. 

### Paramètres

Puissance d'enclenchement (W) :

Quelle puissance excédentaire doit être disponible pour que la commutation ait lieu.

Temporisation d'enclenchement (min) :

Combien de temps la puissance définie doit être disponible avant que la commutation ait lieu.

Temporisation de déclenchement (min) :

Combien de temps il faut attendre après le passage sous la puissance définie avant la mise hors service (p. ex. pour compenser le passage d'un nuage)

Durée de fonctionnement minimale (min) : 

Combien de temps l'appareil doit fonctionner au minimum. Pratique pour les pompes à chaleur avec compresseurs, etc.

![Solar Manager – Illustration 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Illustration 4](/img/drittsysteme-solarmanager/04.png)

## Contact :

Solar Manager AG

Schlyffistäg 36

CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) 

[info@solarmanager.ch](mailto:info@solarmanager.ch) 

+41 56 512 92 08

## FAQ

## La libération du courant de la borne de recharge Pico ne fonctionne pas à partir de 4200 W

La borne de recharge Pico est livrée par défaut avec un courant minimal de 8 A afin de prendre en charge directement tous les types de véhicules possibles après l'installation.

En combinaison avec Solarmanager, celui-ci part toutefois par défaut d'un courant minimal de 6 A pour piloter la Pico.

Choisissez le cas correspondant à votre véhicule afin de prendre en charge sans erreur la configuration souhaitée :

Cas A : vous avez un véhicule qui supporte un courant de démarrage de 6 A

- Réglez le courant minimal sur le matériel Pico à 6 A.



![Solar Manager – Illustration 5](/img/drittsysteme-solarmanager/05.png)

Cas B : vous avez un véhicule qui, à votre connaissance, ne supporte pas un courant de démarrage de 6 A (p. ex. Renault Zoe)

- Réglez dans Solarmanager, dans la sélection du véhicule, le paramètre « Renault Zoe 9A »
