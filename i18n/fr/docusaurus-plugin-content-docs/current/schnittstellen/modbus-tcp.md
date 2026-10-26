---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Modbus TCP permet d''interroger les valeurs de mesure d''un appareil directement via la connexion réseau.'
sidebar_label: 'Modbus TCP'
---
<Menueweg>Dashboard → Appareil → Paramètres (roue dentée)</Menueweg>

Modbus TCP permet d'interroger les valeurs de mesure d'un appareil directement via la connexion réseau. Aucun détour par le cloud n'est nécessaire.

### Conditions préalables

Pour activer Modbus TCP, un abonnement smart-me Professional est nécessaire

## Appareils pris en charge

Les appareils smart-me suivants prennent en charge Modbus TCP

- [Compteur triphasé smart-me Telstar](/produkte/telstar-80a)

- [Compteur triphasé Telstar CT](/produkte/telstar-ct)

- [Borne de recharge Pico](/produkte/pico-ladestation)


## Limitations

Il n'est pas possible d'attribuer une adresse IP fixe. Si vous le souhaitez, ce réglage doit être effectué sur le routeur. smart-me ne connaît pas l'adresse MAC des différents appareils. Celle-ci peut être déterminée à l'aide des instructions ci-dessous.

Les requêtes ne devraient pas être effectuées plus souvent que toutes les 2 secondes. Une augmentation de la fréquence des requêtes peut, dans certaines configurations, entraîner des requêtes sans réponse. L'appareil ne peut pas être endommagé par un intervalle de requête &lt; 2 secondes.

## Activer Modbus TCP

<div className="row">
<div className="col col--6">

1.  Connectez-vous sur le site web smart-me.

2.  Sélectionnez l'appareil souhaité.

3.  Sélectionnez la roue dentée en haut à droite.

4.  Sous paramètres avancés (Erweiterte Einstellungen), activer Modbus TCP

5.  Enregistrer (Speichern)

</div>
<div className="col col--6 text--center">

![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

</div>
</div>

## Particularités de la Pico et de Modbus TCP

Modbus TCP peut être utilisé avec la Pico lorsque :

1.  La Pico ne fait pas partie d'un groupe de gestion de la charge

2.  La Pico fait partie d'un groupe de gestion de la charge et en est le maître (déterminé automatiquement)


Pour tous les esclaves d'un groupe de gestion de la charge, Modbus TCP est désactivé, car ils ne possèdent alors pas leur propre adresse IP.
Nous recommandons d'utiliser Modbus TCP uniquement pour la commande d'appareils individuels sans MESH.
Si les Pico d'un groupe de gestion de la charge doivent être lues ou commandées, nous recommandons l'[API REST](/schnittstellen/api). 

## Déterminer l'adresse de l'appareil

Le registre Modbus d'un appareil smart-me peut être lu via DNS ou via l'adresse IP. 

- Le DNS peut être activé dans le portail.

- L'adresse IP est attribuée par le serveur DHCP local. L'adresse IP peut être déterminée à l'aide des instructions suivantes.


### Activer le DNS

<div className="row">
<div className="col col--4">

1.  Connectez-vous sur le site web smart-me.

2.  Sélectionnez l'appareil souhaité.

3.  Sélectionnez la roue dentée en haut à droite.

4.  Sous paramètres avancés (Erweiterte Einstellungen), activer le DNS.

5.  Le plus souvent, l'IP interne est nécessaire. Voir les détails ci-dessous.

6.  Enregistrer (Speichern)

7.  Le nom DNS s'affiche dans le texte sous Activer le DNS (DNS aktivieren).

</div>
<div className="col col--8 text--center">

![Modbus TCP – Figure 2](/img/schnittstellen-modbus-tcp/02.png)

</div>
</div>

Comme adresse IP, vous pouvez choisir une adresse IP publique ou l'adresse IP interne de l'appareil :

IP interne (Interne IP)

Il s'agit de l'adresse IP locale de l'appareil smart-me. Elle peut être utilisée lorsque vous vous trouvez dans le même réseau.

IP publique (Öffentliche IP)

L'adresse IP publique est utilisée. Il s'agit normalement de l'adresse IP de votre routeur.

Informations de fond

Le service dns-me permet de se connecter directement à un appareil smart-me sans connaître son adresse IP. Si l'adresse DNS est activée pour un appareil smart-me, son adresse IP locale ou publique est automatiquement associée à un nom DNS (p. ex. smart-me\_123456.dns-me.com).

smart-me utilise pour cela le service dns-me.com.

### Déterminer l'adresse IP avec le nom DNS

Une fois le DNS activé, le nom DNS visible dans les paramètres avancés sous Activation DNS peut être utilisé pour un ping.

p. ex. ping smart-me\_6301587.dns-me.com

En réponse, vous obtenez le résultat du ping, y compris l'adresse IP de l'appareil.

![Modbus TCP – Figure 3](/img/schnittstellen-modbus-tcp/03.png)

### Déterminer l'adresse IP directement sur le routeur

smart-me ne connaît pas l'adresse MAC des différents appareils. Déterminer l'adresse IP sans activation préalable du service DNS est donc plus compliqué. Une possibilité consiste à interroger toutes les adresses IP avec Modbus TCP et à vérifier quels numéros de série sont renvoyés en réponse.

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

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" height="720px" title="Tableur, adressage des registres" />

Register Addressing

## Adresses de registre pour les bornes de recharge Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" height="720px" title="Tableur, Pico-Modbus TCP" />

Pico-Modbus TCP

## Commande de la gestion de la charge Pico avec Modbus TCP

Une borne de recharge Pico peut être commandée via Modbus TCP et le courant de charge peut être prédéfini.

### Avec une version de firmware &lt; 0.0.53 :

Le courant de charge peut être prédéfini une seule fois via le registre 0x206E en tant que courant de charge en mA pour les trois phases simultanément.

Adressage d'une borne individuelle dans un groupe de recharge (commande individuelle) :

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
        L'appareil tente d'exploiter au maximum le courant disponible.
        Dans ce cas, l'appareil chargera en triphasé à 3x6A
        Une charge monophasée ne peut pas être imposée de manière dédiée. La charge d'un véhicule monophasé s'effectue en mode triphasé.


Adressage d'un groupe de bornes comprenant plusieurs bornes :

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000 mA.
    Avec un réglage de groupe de 12000 mA
    Avec trois charges actives : conduit à une charge monophasée de 12 A chacune sur L1, L2 et L3
    Avec deux charges actives : conduit à deux charges triphasées à 6A
    Avec une charge active : conduit à une charge triphasée à 12 A


### À partir de la version de firmware 0.0.53 :

Le courant de charge peut être :

- Prédéfini pour les trois phases ensemble via le registre 0x206E en mA (même valeur pour toutes)

- Indiqué ensemble mais individuellement par phase en mA ou en A (jusqu'à 499A, au-delà des mA sont supposés) via le registre 0x2071 

- Indiqué individuellement, l'une après l'autre, par phase en mA ou en A (jusqu'à 499A, au-delà des mA sont supposés) via les registres 0x2071, 0x 2073, 0x2075


Généralités sur le fonctionnement :

- Le passage entre monophasé et triphasé devrait être limité côté commande à  1x toutes les 10 minutes.

- Il est possible de basculer sur une phase prédéfinie L1, L2, L3 en indiquant la disponibilité du courant. (La plus grande est retenue)

- Il est possible de changer entre les phases L1, L2, L3 pendant une charge monophasée. (Changement du courant le plus élevé)


Remarque importante concernant la commande externe :

Il n'existe aucune limitation pour le changement entre les différentes phases ; veillez à le limiter au moyen de l'algorithme de commande.
Il en va de même pour le passage de la charge monophasée à la charge triphasée et inversement.
L'utilisation intensive des contacts de relais peut entraîner une défaillance prématurée des relais. Il est recommandé de ne pas changer de phase lorsque le gain de puissance n'est pas proportionné. Une météo instable, d'autres gros consommateurs et d'autres raisons peuvent entraîner des commutations involontaires. Idéalement, l'attribution à une phase ne devrait pas changer lorsque l'excédent fait défaut seulement brièvement.
smart-me décline toute responsabilité pour la défaillance prématurée de relais lors de l'utilisation de commandes de fournisseurs tiers.

Adressage d'une borne individuelle dans un groupe de recharge (commande individuelle) :

- -   Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
        Les trois courants peuvent avoir des valeurs différentes. L'appareil tente d'exploiter au maximum le courant disponible.
        Dans ce cas, l'appareil chargera en triphasé à 3x6A)

    - 0,8000,0 mA conduit à une charge monophasée de 8 A sur L2

    - 0, 8000 mA, 10000 mA conduit à une charge monophasée de 10 A sur L3


Adressage d'un groupe de bornes comprenant plusieurs bornes :

- Seul l'appareil maître du groupe Pico possède une adresse IP adressable.

- Ne charge qu'à partir du réglage minimal de l'appareil, p. ex. 6000,6000,8000 mA.
    Les trois courants peuvent avoir une valeur différente.
    Le groupe tente d'utiliser au mieux le courant disponible.

    Avec une charge active : un appareil chargera en triphasé à 3x6A.
    Avec deux charges actives : un appareil charge à 8A sur la phase L3 et le second à 6A sur L2 ou L1

- 0, 8000 mA, 10000 mA et deux unités actives : donne une charge monophasée de 10 A sur L3 et une autre de 8 A sur L2 

- 0,16000,10000 mA et trois unités actives : donne une charge monophasée de 10 A sur L3 et deux charges monophasées de 8 A chacune sur L2

- 20000,20000,20000 mA et trois unités actives : donne trois charges triphasées comprises chacune entre 6 et 7 A.
