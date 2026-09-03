---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Modbus TCP permet d''interroger les valeurs de mesure d''un appareil directement via la connexion réseau.'
sidebar_label: 'Modbus TCP'
---
Modbus TCP permet d'interroger les valeurs de mesure d'un appareil directement via la connexion réseau. Aucun détour par le cloud n'est nécessaire.

### Conditions préalables

Pour activer Modbus TCP, un abonnement smart-me Professional est nécessaire

## Appareils pris en charge

Les appareils smart-me suivants prennent en charge Modbus TCP

- [Compteur triphasé smart-me Telstar](/produkte/telstar)

- [Compteur triphasé Telstar CT](/produkte/Telstar-CT)

- [Borne de recharge Pico](/produkte/pico-ladestation)


## Limitations

Il n'est pas possible d'attribuer une adresse IP fixe. Si cela est souhaité, ce réglage doit être effectué sur le routeur. L'adresse MAC des différents appareils n'est pas connue de smart-me. Elle peut être déterminée à l'aide des instructions ci-dessous.

Les interrogations ne devraient pas avoir lieu plus souvent que toutes les 2 secondes. Une augmentation de la fréquence d'interrogation peut, dans certaines constellations, entraîner des interrogations sans réponse. L'appareil ne peut pas être endommagé par un intervalle d'interrogation de &lt; 2 secondes.

## Activer Modbus TCP

1.  Connecte-toi sur le site web smart-me.

2.  Sélectionne l'appareil souhaité.

3.  Sélectionne la roue dentée en haut à droite.

4.  Sous les paramètres avancés, activer Modbus TCP

5.  Enregistrer


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Spécificités concernant la Pico et Modbus TCP

Modbus TCP peut être utilisé avec la Pico si:

1.  La Pico ne fait pas partie d'un groupe de gestion de la charge

2.  La Pico fait partie d'un groupe de gestion de la charge et en est le maître (déterminé automatiquement)


Pour tous les esclaves d'un groupe de gestion de la charge, Modbus TCP est désactivé, car ceux-ci ne possèdent alors pas leur propre adresse IP.
Nous recommandons l'utilisation de Modbus TCP uniquement pour la commande d'appareils individuels sans MESH.
Si les Pico d'un groupe de gestion de la charge doivent être lues ou commandées, nous recommandons la [Rest API](/schnittstellen/api). 

## Déterminer l'adresse de l'appareil

Le registre Modbus d'un appareil smart-me peut être lu via DNS ou l'adresse IP. 

- DNS peut être activé dans le portail.

- L'adresse IP est attribuée par le serveur DHCP local. L'adresse IP peut être déterminée à l'aide des instructions suivantes.


### Activer DNS

1.  Connecte-toi sur le site web smart-me.

2.  Sélectionne l'appareil souhaité.

3.  Sélectionne la roue dentée en haut à droite.

4.  Sous les paramètres avancés, activer DNS.

5.  La plupart du temps, l'IP interne est nécessaire. Voir les détails ci-dessous.

6.  Enregistrer

7.  Le nom DNS est affiché dans le texte sous Activer DNS.


![Modbus TCP – Illustration 2](/img/schnittstellen-modbus-tcp/02.png)

Comme adresse IP, on peut choisir une adresse IP publique ou l'adresse IP interne de l'appareil:

IP interne

Il s'agit de l'adresse IP locale de l'appareil smart-me. Elle peut être utilisée si vous vous trouvez dans le même réseau.

IP publique

L'adresse IP publique est utilisée. Il s'agit normalement de l'adresse IP de votre routeur.

Informations générales

Avec le service dns-me, il est possible de se connecter directement à un appareil smart-me sans connaître son adresse IP. Si l'adresse DNS est activée pour un appareil smart-me, son adresse IP locale ou publique est automatiquement associée à un nom DNS (p. ex. smart-me\_123456.dns-me.com).

smart-me utilise pour cela le service dns-me.com.

### Déterminer l'adresse IP avec le nom DNS

Une fois DNS activé, le nom DNS visible dans les paramètres avancés sous Activation DNS peut être utilisé pour un ping.

p. ex. ping smart-me\_6301587.dns-me.com

En réponse, tu obtiens l'évaluation du ping, y compris l'adresse IP de l'appareil.

![Modbus TCP – Illustration 3](/img/schnittstellen-modbus-tcp/03.png)

### Déterminer l'adresse IP directement sur le routeur

smart-me ne connaît pas l'adresse MAC des différents appareils. La détermination de l'adresse IP sans activation préalable du service DNS est donc plus compliquée. Une possibilité consiste à interroger toutes les adresses IP avec Modbus TCP et à vérifier quels numéros de série sont renvoyés en réponse.

## Transmission des données

Protocole Modbus TCP
Port TCP: 502

Fonctions
Le compteur smart-me prend en charge les fonctions Modbus suivantes:

- Read Holding Register (Code 03)


Adressage des registres
Pour des raisons historiques, l'adresse dans Modbus est inférieure de 1 à l'adresse de registre interne. L'adresse de départ doit donc être «adresse de registre - 1»

### Exemple Modbus

Exemple avec: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Adresses de registre pour les compteurs et modules smart-me

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Video src="" title="Video" />

Register Addressing

## Adresses de registre pour les bornes de recharge Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Video src="" title="Video" />

Pico-Modbus TCP

## Commande de la gestion de la charge Pico avec Modbus TCP

Une borne de recharge Pico peut être commandée au moyen de Modbus TCP et le courant de charge peut être défini.

### Avec une version de firmware &lt; 0.0.53:

Le courant de charge peut être défini une seule fois au moyen du registre 0x206E comme courant de charge en mA pour les trois phases simultanément.

Commande d'une station individuelle dans un groupe de recharge (commande individuelle):

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
        L'appareil essaie d'utiliser le courant disponible autant que possible.
        Dans ce cas, l'appareil chargera en triphasé avec 3x6A
        Une charge monophasée ne peut pas être définie de manière dédiée. La charge d'un véhicule monophasé s'effectue en mode triphasé.


Commande d'un groupe de stations comportant plusieurs stations:

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
    Avec un réglage de 12000 mA pour le groupe
    Avec trois charges actives: donne à chaque fois une charge monophasée de 12 A sur L1, L2 et L3
    Avec deux charges actives: donne deux charges triphasées de 6A
    Avec une charge active: donne une charge triphasée de 12 A


### À partir de la version de firmware 0.0.53:

Le courant de charge peut:

- Être défini pour les trois phases ensemble au moyen du registre 0x206E en mA (toutes la même valeur)

- Être indiqué ensemble mais individuellement par phase en mA ou A (jusqu'à 499A, au-delà les mA sont supposés) au moyen du registre 0x2071 

- Être indiqué individuellement, l'un après l'autre par phase, en mA ou A (jusqu'à 499A, au-delà les mA sont supposés) au moyen des registres 0x2071, 0x 2073, 0x2075


Généralités sur la fonction:

- Le passage entre monophasé et triphasé devrait être limité côté commande à 1x toutes les 10 minutes.

- Il est possible de commuter sur une phase prédéfinie L1, L2, L3 au moyen de la définition de la disponibilité du courant. (La plus grande est retenue)

- Il est possible de commuter entre les phases L1, L2, L3 pendant une charge monophasée. (Changement du courant le plus élevé)


Remarque importante concernant la commande externe:

Il n'existe aucune limitation pour le changement entre les différentes phases, veillez à le limiter par l'algorithme de commande.
Il en va de même pour le passage d'une charge monophasée à une charge triphasée et inversement.
L'utilisation intensive des contacts de relais peut entraîner une défaillance prématurée des commutateurs de relais. Il est recommandé de ne pas changer de phase lorsque le gain de puissance n'est pas proportionné. Une météo instable, d'autres gros consommateurs et d'autres raisons peuvent entraîner des commutations involontaires. Il est préférable qu'une attribution à une phase ne change pas si l'excédent ne manque que brièvement.
smart-me décline toute responsabilité en cas de défaillance prématurée des relais lors de l'utilisation de commandes de fournisseurs tiers.

Commande d'une station individuelle dans un groupe de recharge (commande individuelle):

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
        Les trois courants peuvent avoir des valeurs différentes. L'appareil essaie d'utiliser le courant disponible autant que possible.
        Dans ce cas, l'appareil chargera en triphasé avec 3x6A)

    - 0,8000,0 mA donne une charge monophasée de 8 A sur L2

    - 0, 8000 mA, 10000 mA donne une charge monophasée de 10 A sur L3


Commande d'un groupe de stations comportant plusieurs stations:

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
    Les trois courants peuvent avoir une valeur différente.
    Le groupe essaie d'utiliser le courant disponible du mieux possible.

    Si une charge active: un appareil chargera en triphasé avec 3x6A.
    Si deux charges actives: un appareil charge avec 8A sur la phase L3 et le second avec 6A sur L2 ou L1

- 0, 8000 mA, 10000 mA et deux unités actives: donne une charge monophasée de 10 A sur L3 et une autre de 8 A sur L2 

- 0,16000,10000 mA et trois unités actives: donne une charge monophasée de 10 A sur L3 et deux charges monophasées de 8 A chacune sur L2

- 20000,20000,20000 mA et trois unités actives: donne trois charges triphasées de 6 à 7 A chacune.
