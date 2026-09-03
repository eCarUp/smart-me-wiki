---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'Les appareils smart-me peuvent être intégrés dans Solar Manager directement via le cloud.'
sidebar_label: 'Solar Manager'
---
Les appareils smart-me peuvent être intégrés dans Solar Manager directement via le cloud. Les [compteurs virtuels](/konfiguration/billing/virtuelle-zaehler) peuvent également être repris.

Dans Solar Manager, il existe plusieurs options pour utiliser le compteur smart-me et les bornes de recharge Pico :

- Comme Smart Meter ou compteur de bilan directement après le compteur du fournisseur d'électricité

- Comme mesure de consommation d'appareils tels que bornes de recharge, pompes à chaleur, etc.

- Comme mesure de production de l'énergie photovoltaïque

- Comme interrupteur, pour utiliser le contact du relais sur le compteur.

- Comme fournisseur de données pour la gestion de la charge en électromobilité




Groupe cible : maisons individuelles et immeubles collectifs

<Video src="D3Mh-cAyHvw" title="Video" />

## Intégration en général

Pour l'intégration, les données d'accès au cloud (nom d'utilisateur et mot de passe) ainsi que le numéro de série du compteur sont nécessaires. Le numéro de série est visible directement dans le portail smart-me et sur les appareils eux-mêmes. Pour le numéro de série, n'utiliser que les chiffres situés avant le tiret !

![Solar Manager – Illustration 1](/img/drittsysteme-solarmanager/01.png)

### Exemple :

Numéro de série portail web : 07907952

Numéro de série compteur : 07907952-123 (omettre -123)

## Compteur smart-me comme Smart Meter

Dans Solar Manager, un Smart Meter peut être ajouté ; celui-ci peut être monté de deux manières :

- Directement après le compteur du GRD (compteur de bilan), la production (-) et la consommation (+) étant mesurées directement

- Mesure de consommation uniquement, la production étant relevée séparément


Pour la configuration, on ajoute un Smart Meter et on y sélectionne smart-me Cloud. Le Smart Meter est connecté à l'aide des données d'accès et du numéro de série à 8 chiffres.

- Lieu d'installation : conformément à la description ci-dessus

- Inverser la mesure : si le compteur était monté de manière inversée, il serait possible de changer le signe ici.


![Solar Manager – Illustration 2](/img/drittsysteme-solarmanager/02.png)

## Utiliser le relais smart-me

Le [compteur triphasé Telstar](/produkte/telstar) dispose de deux sorties de contact libres de potentiel pour la commande d'appareils externes, dont l'une avec un relais 8A intégré. Celui-ci peut être commuté dans Solar Manager. Un « interrupteur » est créé et paramétré pour chaque relais. Les interrupteurs doivent au préalable être définis comme sorties numériques dans le portail smart-me (voir [Entrées et sorties](/))

Pour la configuration, on ajoute un nouvel « interrupteur » (« Schalter ») sous Appareils (Geräte) et on y sélectionne « Relais sur le compteur triphasé smart-me » (« Relais am smart-me 3-Phasen Zähler »). Le compteur est connecté à l'aide des données d'accès et du numéro de série à 8 chiffres.

### Paramètres

Puissance d'enclenchement (W) :

Quelle puissance doit être disponible en excédent pour que la commutation ait lieu.

Retard à l'enclenchement (min) :

Combien de temps la puissance définie doit être disponible avant que la commutation ait lieu.

Retard au déclenchement (min) :

Combien de temps faut-il attendre après le passage sous la puissance avant de déclencher (par ex. pour compenser le passage d'un nuage)

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

## L'autorisation de courant de la borne de recharge Pico ne fonctionne pas à partir de 4200W

La borne de recharge Pico est livrée par défaut avec un courant minimal de 8A afin de prendre en charge directement tous les types de véhicules possibles après l'installation.

En combinaison avec Solarmanager, celui-ci part toutefois par défaut d'un courant minimal de 6A pour piloter la Pico.

Choisissez le cas qui s'applique à votre véhicule afin de prendre en charge sans erreur la configuration que vous souhaitez :

Cas A : vous avez un véhicule qui peut gérer un courant de démarrage de 6A

- Réglez le courant minimal sur le matériel Pico à 6A.



![Solar Manager – Illustration 5](/img/drittsysteme-solarmanager/05.png)

Cas B : vous avez un véhicule qui, en connaissance de cause, ne supporte pas un courant de démarrage de 6A (par ex. Renault Zoe)

- Réglez dans Solarmanager, dans la sélection du véhicule, le paramètre "Renault Zoe 9A"
