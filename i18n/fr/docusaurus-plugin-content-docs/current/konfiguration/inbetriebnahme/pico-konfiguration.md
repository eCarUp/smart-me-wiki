---
title: 'Configuration Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'Sur cette page, tu trouveras les principales configurations en lien avec le matériel Pico.'
sidebar_label: 'Configuration Pico'
---
Sur cette page, tu trouveras les principales configurations en lien avec le matériel Pico. La configuration de la borne de recharge Pico se fait toujours, dans un premier temps, via la plateforme smart-me. Ensuite, la méthode d'authentification peut être activée via un système backend (eCarUp).

![Configuration Pico – Illustration 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configuration Pico – Illustration 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentification (privée, semi-publique, publique)



La borne de recharge Pico peut être utilisée avec ou sans méthode d'authentification.



### Configuration None :

Aucune authentification n'est nécessaire pour recharger. (recharge dès que le câble est branché)



### Configuration avec backend eCarUp :

Pour exploiter une Pico en mode public / semi-public ou pour pouvoir utiliser toute forme de fonction de déverrouillage, la station doit être exploitée en mode backend au moyen d'eCarUp.

Fonctions de déverrouillage :

- RFID

- On / Off manuel via l'application

- Codes QR

- CarID (nécessite une activation dans les paramètres avancés du portail smart-me)




Dès que « eCarUp Backend » est sélectionné, la station est automatiquement ajoutée dans le compte eCarUp du même nom. (même nom d'utilisateur et même mot de passe que pour smart-me)

La configuration d'eCarUp se fait dans le portail web de [www.ecarup.com](http://www.ecarup.com).

Sous Conducteurs (Fahrer), ajoute un tag de carte RFID ou lis un « tag de carte » au moyen de l'application eCarUp pour Android et iOS.

Tu trouveras les détails sur la configuration d'eCarUp et des bornes de recharge publiques dans le
wiki eCarUp : [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration backend OCPP externe :

Pour intégrer la Pico dans le backend d'un fournisseur tiers, il te suffit d'enregistrer l'URL du backend du fournisseur tiers sur la borne de recharge concernée.

Cette option ne doit pas être utilisée si la station est connectée via eCarUp.

Remarque :
L'URL commence par ws:// ou wss://

Paramètre Pico dans le portail smart-me :

![Configuration Pico – Illustration 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu du portail eCarUp :

![Configuration Pico – Illustration 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Enregistrer l'URL du backend tiers :

![Configuration Pico – Illustration 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration pour un usage privé avec authentification RFID

1.  Navigue vers Stations → Gestion (Verwaltung) dans le portail eCarUp

2.  Modifier (Bearbeiten) → Modifier le point de connexion (Anschluss bearbeiten)


![Configuration Pico – Illustration 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prix = 0 CHF, accès : privé

![Configuration Pico – Illustration 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration pour un usage limité avec authentification RFID (locataires avec prix spéciaux)

1.  Navigue vers Stations → Gestion (Verwaltung) dans le portail eCarUp

2.  Modifier (Bearbeiten) → Modifier le point de connexion (Anschluss bearbeiten)


![Configuration Pico – Illustration 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Choisir les prix

![Configuration Pico – Illustration 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Définir les utilisateurs spéciaux et leurs prix

Les conducteurs créent leur propre compte chez eCarUp et communiquent le nom du compte au propriétaire de la station.

![Configuration Pico – Illustration 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personnalisation de l'affichage Pico

Nous déconseillons d'insérer une image de fond noire, car il devient alors difficile de savoir si la Pico fonctionne ou non. En particulier lorsqu'elle est hors ligne, il est difficile d'évaluer à distance si la station est défectueuse ou simplement non connectée. C'est pourquoi nous recommandons aux personnes soucieuses de leur consommation d'énergie d'ajouter cette image de 4 pixels, afin de toujours pouvoir reconnaître si la station fonctionne encore localement ou non. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Le nom de la station et l'affichage en cas de non-utilisation peuvent être choisis librement et personnalisés.

En plus des émoticônes déjà disponibles, il est également possible de télécharger ses propres GIF ou images. 

- Formats pris en charge : JPG, PNG, GIF

- Résolution : 32x32 pixels

- Taille : max. 200 kB

- Le fond devrait être entièrement noir (#000000)

- Les animations (GIF) ont 10 images/s (100 ms par image)


Remarque : tu obtiendras le meilleur résultat visuel si, lors de la création et de la retouche, tu veilles à télécharger l'image en 32x32 pixels au format GIF.



\-> Crée tes propres GIF avec [piskelapp](/drittsysteme/piskelapp) 

![Configuration Pico – Illustration 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestion de la charge et limitation

### Limiter la puissance de la station

La borne de recharge Pico peut être standardisée lors de l'installation.

Ce réglage est pris en compte par la gestion de la charge automatique et n'est jamais écrasé.

Le réglage du courant de charge maximal permet de limiter de manière fixe la puissance maximale de la station. La limitation se fait par paliers de 1 ampère.

32A = 22kW de puissance maximale

16A = 11kW de puissance maximale

Le réglage du courant minimal permet d'empêcher les recharges ou de définir des courants minimaux adaptés au démarrage de la recharge d'un véhicule.

Remarque :
Certains véhicules ne peuvent pas être rechargés avec un courant de démarrage de 6A, en raison de la technique intégrée dans le véhicule. Dans ce cas, le courant minimal peut être réglé plus haut.

![Configuration Pico – Illustration 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestion de la charge statique (groupe de stations)

La gestion de la charge statique régule les stations au sein d'un même groupe de gestion de la charge. La fonction empêche que le courant maximal de la ligne d'alimentation, p. ex. un câble plat, soit dépassé et règle la répartition du courant disponible entre les stations. 

La taille des groupes de recharge est limitée à 200 bornes de recharge.

Fonction en détail :
Les bornes de recharge se régulent elles-mêmes en fonction du courant maximal défini. La puissance de recharge triphasée est répartie entre toutes les stations actives, jusqu'à ce que la puissance minimale réglée ne puisse plus être mise à disposition en triphasé de tous les véhicules en recharge. La puissance est ensuite commutée en monophasé. Tous les véhicules continuent de se recharger en monophasé avec le courant maximal possible par phase (commutation de phase). Une recharge supplémentaire ne devient impossible que lorsque tous les véhicules déjà en recharge ont atteint le minimum en monophasé. Dès que l'un des véhicules rechargés quitte la station, la recharge réservée est libérée pour un autre.

Configuration :

1.  Créer un groupe de gestion de la charge (Nouveau groupe)

2.  Définir le courant maximal de la ligne d'alimentation (Courant disponible)

3.  Définir l'action en cas de perte de connexion
    (Pour une combinaison avec la gestion de la charge multiniveau, seule la version Courant max. par groupe est utilisable)

4.  Ajouter les stations au groupe de gestion de la charge correspondant (Éditer)




Plus de détails à ce sujet : [Pico gestion de la charge](/produkte/pico-ladestation/pico-lastmanagement)

![Configuration Pico – Illustration 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configuration Pico – Illustration 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestion de la charge dynamique et recharge optimisée pour le solaire avec la gestion de la charge multiniveau (MLM)

La gestion de la charge dynamique permet de prendre en compte un point de référence et de piloter les courants maximaux en ce point de référence. Dans l'électromobilité, on choisit pour cela soit le raccordement domestique, soit le point de distribution.

[Planification gestion de la charge](/planung/elektromobilitaet) 

Les produits suivants conviennent comme matériel pour la mesure de référence :

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


La configuration de la gestion de la charge dynamique se fait via la gestion de la charge multiniveau de smart-me.

Tu trouveras les détails et des exemples ici : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

Tu peux ainsi influencer en continu les courants maximaux des groupes de stations en tenant compte du courant qui circule actuellement en ce point de référence.

![Configuration Pico – Illustration 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Délestage

Délestage matériel (entrées externes de la Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Video src="" title="Video" />

Délestage Pico

Le délestage peut également être réalisé au moyen d'un seul signal disponible. 

Pour la configuration allant d'aucune recharge à la puissance de recharge maximale, le signal est câblé sur IN1 et IN2 ainsi que sur COM. Pour la configuration allant d'une puissance minimale de 6A à la puissance de recharge maximale, le signal doit uniquement être câblé sur IN2 ainsi que sur COM.

COM est le conducteur neutre, IN1 et IN2 doivent être mis sous tension lors du signal ON. IN1 et IN2 ne génèrent aucune tension, celle-ci doit être fournie de l'extérieur.

Attention :
Le délestage peut être câblé soit sur toutes les Pico, soit au minimum sur une Pico de chaque groupe de charge statique.
Cette fonction est également garantie sans Internet !

Délestage basé sur le cloud via MLM

Le délestage peut également être réalisé via la gestion de la charge multiniveau. L'avantage est qu'aucun signal ne doit être raccordé au matériel Pico ; un signal peut au contraire être appliqué sur n'importe quel autre matériel (compteur) et être utilisé comme déclencheur.

L'inconvénient est toutefois que la fonction n'est pas exécutée en l'absence de connexion Internet.

Plus de détails sur la mise en place : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

![Configuration Pico – Illustration 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Actions avancées

Ici, en tant que propriétaire de la station, tu peux déverrouiller le câble, redémarrer la station ou afficher le relevé du compteur sur l'écran pour vérification.

![Configuration Pico – Illustration 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Paramètres avancés

Détection automatique du véhicule :
Pour que l'authentification CarID fonctionne, tu dois autoriser la communication entre la station et le véhicule.

Modbus TCP :
Activation de l'interface Modbus TCP de la Pico

Supprimer la station :
Supprime la station et toutes les données dans le cloud

![Configuration Pico – Illustration 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Toujours verrouiller le câble de manière fixe

Le câble de recharge peut être verrouillé sur la borne de recharge Pico.

Procédure :
Brancher le câble --> Se connecter au portail smart-me --> Choisir la Pico --> Choisir la roue dentée en haut à droite --> Paramètres avancés --> Toujours verrouiller le câble de manière fixe. 

Remarque : 

- Le véhicule ne doit pas être branché lors de la fixation du câble.

- Si l'alimentation électrique est interrompue ou si la Pico est redémarrée, le câble est brièvement déverrouillé puis à nouveau verrouillé au démarrage.

La condition est la suivante : la Pico doit pour cela disposer au minimum de la version de communication 0.0.7. Les Pico fabriquées avant le 31.12.2022 peuvent être concernées.

![Toujours verrouiller le câble de manière fixe](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
