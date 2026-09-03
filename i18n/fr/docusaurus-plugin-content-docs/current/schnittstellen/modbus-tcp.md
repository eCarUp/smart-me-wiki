---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Modbus TCP permet d''interroger directement les valeurs de mesure d''un appareil via la connexion réseau.'
sidebar_label: 'Modbus TCP'
---
Modbus TCP permet d'interroger directement les valeurs de mesure d'un appareil via la connexion réseau. Aucun détour par le cloud n'est nécessaire.

### Conditions préalables

Pour activer Modbus TCP, un abonnement smart-me Professional est nécessaire

## Appareils pris en charge

Les appareils smart-me suivants prennent en charge Modbus TCP

- [Compteur triphasé smart-me Telstar](/produkte/telstar)

- [Compteur triphasé Telstar CT](/produkte/Telstar-CT)

- [Borne de recharge Pico](/produkte/pico-ladestation)


## Limitations

Il n'est pas possible d'attribuer une adresse IP fixe. Si cela est souhaité, ce réglage doit être effectué sur le routeur. smart-me ne connaît pas l'adresse MAC des différents appareils. Celle-ci peut être déterminée à l'aide des instructions ci-dessous.

Les requêtes ne devraient pas être effectuées plus souvent que toutes les 2 secondes. Une augmentation de la fréquence des requêtes peut, dans certaines constellations, entraîner des requêtes sans réponse. L'appareil ne peut pas être endommagé par un intervalle de requête de &lt; 2 secondes.

## Activer Modbus TCP

1.  Connecte-toi sur le site web smart-me.

2.  Sélectionne l'appareil souhaité.

3.  Sélectionne la roue dentée en haut à droite.

4.  Sous les paramètres avancés, activer Modbus-TCP

5.  Enregistrer


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Spécificités concernant Pico et Modbus TCP

Modbus TCP peut être utilisé avec la Pico si :

1.  La Pico ne fait pas partie d'un groupe de gestion de la charge

2.  La Pico fait partie d'un groupe de gestion de la charge et en est le maître (déterminé automatiquement)


Pour tous les esclaves d'un groupe de gestion de la charge, Modbus TCP est désactivé, car ceux-ci ne possèdent alors pas d'adresse IP propre.
Nous recommandons l'utilisation de Modbus TCP uniquement pour la commande d'appareils individuels sans MESH.
Si les Picos d'un groupe de gestion de la charge doivent être lues ou commandées, nous recommandons la [Rest API](/schnittstellen/api).

## Déterminer l'adresse de l'appareil

Le registre Modbus d'un appareil smart-me peut être lu via DNS ou via l'adresse IP.

- Le DNS peut être activé dans le portail.

- L'adresse IP est attribuée par le serveur DHCP local. L'adresse IP peut être déterminée à l'aide des instructions suivantes.


### Activer le DNS

1.  Connecte-toi sur le site web smart-me.

2.  Sélectionne l'appareil souhaité.

3.  Sélectionne la roue dentée en haut à droite.

4.  Sous les paramètres avancés, activer le DNS.

5.  Dans la plupart des cas, l'IP interne est nécessaire. Voir les détails ci-dessous.

6.  Enregistrer

7.  Le nom DNS est affiché dans le texte sous Activer le DNS.


![Modbus TCP – illustration 2](/img/schnittstellen-modbus-tcp/02.png)

Comme adresse IP, il est possible de choisir une adresse IP publique ou l'adresse IP interne de l'appareil :

IP interne

Il s'agit de l'adresse IP locale de l'appareil smart-me. Celle-ci peut être utilisée si vous vous trouvez dans le même réseau.

IP publique

L'adresse IP publique est utilisée. Il s'agit normalement de l'adresse IP de votre routeur.

Informations de fond

Le service dns-me permet de se connecter directement à un appareil smart-me sans connaître son adresse IP. Si l'adresse DNS est activée pour un appareil smart-me, son adresse IP locale ou publique est automatiquement associée à un nom DNS (p. ex. smart-me\_123456.dns-me.com).

smart-me utilise pour cela le service dns-me.com.

### Déterminer l'adresse IP avec le nom DNS

Après l'activation du DNS, le nom DNS visible dans les paramètres avancés sous l'activation du DNS peut être utilisé pour un ping.

p. ex. ping smart-me\_6301587.dns-me.com

En réponse, tu reçois le résultat du ping, y compris l'adresse IP de l'appareil.

![Modbus TCP – illustration 3](/img/schnittstellen-modbus-tcp/03.png)

### Déterminer l'adresse IP directement sur le routeur

smart-me ne connaît pas l'adresse MAC des différents appareils. La détermination de l'adresse IP sans activation préalable du service DNS est donc plus compliquée. Une possibilité consiste à interroger toutes les adresses IP avec Modbus TCP et à vérifier quels numéros de série sont renvoyés en réponse.

## Transmission des données

Protocole Modbus TCP
Port TCP : 502

Fonctions
Le smart-me Meter prend en charge les fonctions Modbus suivantes :

- Read Holding Register (Code 03)


Adressage des registres
Pour des raisons historiques, l'adresse dans Modbus est inférieure de 1 à l'adresse de registre interne. L'adresse de départ doit donc être « adresse de registre - 1 »

### Exemple Modbus

Exemple avec : https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Adresses de registre pour les compteurs et modules smart-me

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" title="Tableur, adressage des registres" />

Register Addressing

## Adresses de registre pour les bornes de recharge Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" aspect="2.353" title="Tableur, Pico-Modbus TCP" />

Pico-Modbus TCP

## Commande de la gestion de la charge Pico avec Modbus TCP

Une borne de recharge Pico peut être commandée au moyen de Modbus TCP et le courant de charge peut être prescrit.

### Avec une version de firmware &lt; 0.0.53 :

Le courant de charge peut être prescrit une seule fois au moyen du registre 0x206E comme courant de charge en mA pour les trois phases simultanément.

Adressage d'une station individuelle dans un groupe de recharge (commande individuelle) :

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
        L'appareil essaie d'exploiter le courant disponible autant que possible.
        Dans ce cas, l'appareil charge en triphasé avec 3x6A
        Une recharge monophasée ne peut pas être prescrite de manière dédiée. La recharge d'un véhicule monophasé s'effectue en mode triphasé.


Adressage d'un groupe de stations comprenant plusieurs stations :

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
    Avec un réglage du groupe à 12000 mA
    Avec trois recharges actives : conduit à une recharge monophasée de 12 A sur L1, L2 et L3 respectivement
    Avec deux recharges actives : conduit à deux recharges triphasées de 6A
    Avec une recharge active : conduit à une recharge triphasée de 12 A


### À partir de la version de firmware 0.0.53 :

Le courant de charge peut être :

- Prescrit pour les trois phases ensemble au moyen du registre 0x206E en mA (toutes la même valeur)

- Indiqué ensemble mais individuellement par phase en mA ou A (jusqu'à 499A, au-delà les mA sont supposés) au moyen du registre 0x2071

- Indiqué individuellement, l'un après l'autre par phase, en mA ou A (jusqu'à 499A, au-delà les mA sont supposés) au moyen des registres 0x2071, 0x 2073, 0x2075


Généralités sur le fonctionnement :

- Le passage entre monophasé et triphasé devrait être limité, du côté de la commande, à 1x toutes les 10 minutes.

- Il est possible de commuter sur une phase prédéfinie L1, L2, L3 en prescrivant la disponibilité du courant. (La plus grande est retenue)

- Il est possible de commuter entre les phases L1, L2, L3 pendant une recharge monophasée. (Changement du courant le plus élevé)


Remarque importante concernant la commande externe :

Il n'existe aucune limitation pour le passage d'une phase à l'autre, veillez à limiter cela par l'algorithme de commande.
Il en va de même pour le passage d'une recharge monophasée à une recharge triphasée et inversement.
L'utilisation intensive des contacts de relais peut entraîner une défaillance prématurée des commutateurs à relais. Il est recommandé de ne pas commuter entre les phases individuelles lorsque le gain de puissance n'est pas proportionné. Un temps instable, d'autres gros consommateurs et d'autres raisons peuvent conduire à des commutations involontaires. Il est préférable que l'attribution à une phase ne change pas lorsque l'excédent manque seulement brièvement.
smart-me n'assume aucune responsabilité pour la défaillance prématurée de relais lors de l'utilisation de commandes de fournisseurs tiers.

Adressage d'une station individuelle dans un groupe de recharge (commande individuelle) :

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
        Les trois courants peuvent avoir des valeurs différentes. L'appareil essaie d'exploiter le courant disponible autant que possible.
        Dans ce cas, l'appareil charge en triphasé avec 3x6A)

    - 0,8000,0 mA conduit à une recharge monophasée de 8 A sur L2

    - 0, 8000 mA, 10000 mA conduit à une recharge monophasée de 10 A sur L3


Adressage d'un groupe de stations comprenant plusieurs stations :

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
    Les trois courants peuvent avoir une valeur différente.
    Le groupe essaie d'utiliser le courant disponible au mieux.

    S'il y a une recharge active : un appareil charge en triphasé avec 3x6A.
    S'il y a deux recharges actives : un appareil charge avec 8A sur la phase L3 et le deuxième avec 6A sur L2 ou L1

- 0, 8000 mA, 10000 mA et deux unités actives : donne une recharge monophasée de 10 A sur L3 et une autre de 8 A sur L2

- 0,16000,10000 mA et trois unités actives : donne une recharge monophasée de 10 A sur L3 et deux recharges monophasées de 8 A chacune sur L2

- 20000,20000,20000 mA et trois unités actives : donne trois recharges triphasées de 6 à 7 A chacune.
