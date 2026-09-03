---
title: 'Pico E-Ladestation'
slug: '/produkte/pico-ladestation-exa'
description: 'RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu)'
sidebar_label: 'Pico E-Ladestation'
---
RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu)

Pico is the Swiss high-tech charging station. It connects directly to the cloud via Wi-Fi or mobile communications. The integrated smart meter exports high-precision measurement data that is signed during transactions and can be validated at any time free of charge. The station can be integrated into a backend (eCarUp), energy management systems and other third-party systems. Furthermore, Pico can be used for both static and dynamic load management (including phase balancing).

Cet article porte sur la première génération de Pico (numéro d'article 202170exA). Vous trouverez toutes les informations sur la version la plus récente de Pico ici : [Borne de recharge Pico](/produkte/pico-ladestation).

![Borne de recharge Pico – illustration 1](/img/produkte-pico-ladestation-exa/01.jpg)

[Configuration de Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessoires](/produkte/pico-ladestation/pico-zubehör)

[Recommandation de matériel RCD Typ A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a)

## Fonctions

- Gestion de la charge et équilibrage de la charge intégrés avec équilibrage des phases

- Montage simple (petite et légère), adaptée au câble plat

- Identification par RFID, application, CarID et prête pour ISO 15118 (Powerline)

- Liaison de données chiffrée en temps réel vers le cloud smart-me et eCarUp 

- Installation simple avec l'application smart-me gratuite.

- Interfaces vers des systèmes tiers via API, CSV, MSCONS, IS-E et autres


## Mise en service de Pico

Avant de pouvoir utiliser votre appareil smart-me, vous devez le connecter à votre réseau WiFi.

1.  Connectez votre smartphone ou votre tablette au réseau WLAN.

2.  Téléchargez et installez l'application smart-me gratuite.

3.  Lancez l'application et créez un compte gratuit

4.  Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+) et suivez les instructions.

    1.  1.  Choisir WLAN ou LTE (2.4Ghz ou mobile)

        2.  Indiquer le mot de passe (WLAN)

        3.  Maintenir la carte RFID fournie devant le lecteur pendant 10 secondes

        4.  Connecter le téléphone mobile au réseau WLAN local de Pico (réseaux : smartme\_numérodesérie) et maintenir la connexion.

        5.  Revenir dans l'application

        6.  Indiquer le nom d'affichage de Pico et terminer l'installation


## Configurer Pico

La configuration est traitée en détail ici : [Configuration de Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Caractéristiques techniques

Puissance de recharge maximale  22 kW à 32A en triphasé, 7.36 kW à 32A en monophasé

Identification  Détection et identification automatiques de la voiture, lecteur RFID / NFC (JEWEL, MIFARE, FELICA, ISO14443, NFC\_DEP, ISO14443\_B, ISO15693)

Smart Meter  Compteur d'électricité intégré non certifié MID, processeur de sécurité inclus

Équilibrage des phases  Équilibrage automatique des phases

Gestion de la charge  Gestion automatique de la charge sur plusieurs stations

Communication  WiFi (2.4 GHz) et téléphonie mobile (LTE), SIM et trafic de données inclus pour 10 ans de [1nce](https://1nce.com/de/laenderabdeckung/), [Modbus TCP](/)

Connexion au cloud  Raccordement au cloud smart-me et eCarUp

Sécurité  Numéro d'article 202170exA RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu)

Plage de température  \-30°C à 50°C

Tensions de réseau 3x230/400VAC ou 1x 230VAC (+/-10%)

Prise de recharge  IEC 62196-2 Typ 2 

Indice de protection  IP55 (intérieur et extérieur)

Degré de résistance aux chocs  IK10

Classe d'inflammabilité  UL94

Délestage  2 entrées libres de potentiel (4 états),  min. 12V AC/DC, max. 48 VDC / 230 VAC

Sortie S0  Interface S0 (1000 imp/kwh) pour l'étalonnage

Raccordement électrique  en haut, en bas, à l'arrière

Type d'installation  rail conducteur, câble plat, en étoile

Dimensions  H:300 mm L:220 mm P:112 mm

Poids  3.8 kg

Section de câble  min. 2.5 mm2, max. 10 mm2

Diamètre de câble  10-20 mm

Emplacement du serveur Suisse 

## Raccordements et dimensions de Pico

![Borne de recharge Pico – illustration 2](/img/produkte-pico-ladestation-exa/02.jpg)

### Schéma de raccordement

L1 : phase 1

L2 : phase 2

L3 : phase 3

N : conducteur neutre

PE : conducteur de protection



Le conducteur de protection doit être raccordé à la vis de raccordement supérieure afin que le socle soit mis à la terre directement avec la station.

Le produit ne peut être exploité qu'en couplage en étoile triphasé ou en monophasé !



Passages de câbles

Chez Pico, les câbles peuvent être introduits et sortis à 5 endroits. 

Deux en haut, deux en bas et un par la plaque arrière.

Pour le montage par la plaque arrière, il faut percer un trou de 25-26mm de diamètre.

Vous trouverez les détails sur le montage du socle dans les instructions de montage dans les téléchargements.

### Délestage (entrées externes)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Ouvrir la feuille de calcul, délestage Pico dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Feuille de calcul, délestage Pico" />

Délestage Pico

Le délestage peut également être réalisé avec un seul signal disponible. 

Pour la configuration allant d'aucune charge à la puissance de recharge maximale, le signal est câblé sur IN1 et IN2  ainsi que sur COM.

Pour la configuration allant de la puissance minimale de 6A à la puissance de recharge maximale, le signal ne doit être câblé que sur IN2 ainsi que sur COM.



Attention :
Le délestage peut être câblé soit sur tous les Pico, soit au minimum sur un Pico de chaque groupe de charge.
Cette fonction est également garantie sans connexion Internet.

Le délestage peut également être réalisé via les actions SI/ALORS et la régulation Pico.

![Borne de recharge Pico – illustration 3](/img/produkte-pico-ladestation-exa/03.png)

### Dimensions

![Borne de recharge Pico – illustration 4](/img/produkte-pico-ladestation-exa/04.png)

## Informations d'expédition

### 212070 smart-me PICO Ladestation inkl. Montageplatte

Numéro du tarif douanier : 85044055

Poids avec emballage : 4.6 kg

Dimensions de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

### 212070/1 smart-me PICO Ladestation ohne Montageplatte

Numéro du tarif douanier : 85044055

Poids avec emballage : 3.3 kg

Dimensions de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

## Accessoires

[Accessoires](/produkte/pico-ladestation/pico-zubehör) 

## Consignes de sécurité

Les consignes de sécurité doivent être respectées en toutes circonstances :

Installation, maintenance, réparation, mise en service :

- Lisez attentivement l'intégralité du manuel avant l'installation et l'utilisation du produit.

- Danger de mort dû à la haute tension électrique. Ne jamais effectuer de modifications sur les composants, le logiciel ou les câbles de raccordement sans avoir mis l'installation hors tension. Il faut donc retirer les fusibles amont correspondants et les conserver de manière à ce que d'autres personnes ne puissent pas les remettre en place à votre insu.

- Le produit doit être installé, réparé ou entretenu exclusivement par un électricien qualifié agréé. Toutes les prescriptions communales, régionales et nationales en vigueur pour les installations électriques doivent être respectées. 

- L'installation ne doit pas avoir lieu à proximité de milieux inflammables ou explosifs, dans des zones inondables (garage souterrain) ou dans des zones où il existe un risque d'eau courante. 

- Le produit doit être installé à un emplacement définitif. Les raccordements sur le Pico et la plaque arrière sont conçus pour un nombre limité de cycles d'enfichage. 

- Le produit doit être installé sur un mur ou une structure offrant une capacité de charge suffisante. 

- Les bornes de raccordement de la plaque arrière sont sous tension lorsque le circuit électrique est fermé et ne doivent en aucun cas être mises en contact directement ou avec d'autres objets que l'électronique du Pico.

- Selon le type d'installation, des autorisations peuvent être nécessaires avant l'installation, par ex. en cas d'augmentation de la puissance de raccordement du bâtiment. 

- La borne de recharge doit être déclarée auprès du gestionnaire de réseau de distribution (GRD). 


Utilisation prévue :

- Ce produit est exclusivement destiné à la recharge de véhicules électriques équipés de batteries non gazantes. Le produit ne doit être utilisé qu'avec un câble de recharge conforme à IEC 62196. Toute utilisation autre que celles indiquées ici est interdite.

- L'appareil est prévu pour une utilisation en intérieur et en extérieur.


Fonctionnement :

- Ne jamais utiliser ni toucher le produit s'il est endommagé ou s'il ne fonctionne pas correctement. En cas d'urgence (fumée, incendie, étincelles ou autres dysfonctionnements), mettre immédiatement le produit hors tension via l'interrupteur FI et informer le support client. 

- Ne pas éteindre le produit avec de l'eau et ne pas le nettoyer à l'eau courante.

- Ne pas immerger le produit dans l'eau ni dans d'autres liquides. 

- Ce produit n'est pas prévu pour être utilisé par des personnes aux capacités physiques, psychiques ou sensorielles réduites (y compris les enfants) ni par des personnes ne connaissant pas le produit. 

- Il faut veiller à ce que les enfants ne jouent pas avec le produit.

- Ne jamais toucher les contacts de la prise de recharge Typ 2 et n'introduire aucun corps étranger dans le produit. 

- Ne jamais utiliser le câble de recharge s'il est endommagé ou si les raccordements sont mouillés ou souillés. 

- N'utiliser ni rallonge ni adaptateur non homologué en combinaison avec le produit. 

- Ne jamais plier le câble de recharge, ne pas rouler dessus et ne pas l'exposer à une forte chaleur. 

- Ne retirer le câble de recharge du support de recharge qu'en le tenant par la fiche. 

- Ne pas placer le câble de recharge sur les voies de circulation d'autres usagers et toujours le positionner de manière à éviter tout risque de trébuchement. 

- Protéger le câble de recharge des intempéries telles que le rayonnement solaire direct, le vent, la pluie, l'humidité et l'eau, et ne jamais le brancher avec les mains humides ou mouillées. 

- Ne pas utiliser le produit à proximité de champs électromagnétiques puissants ni dans l'environnement immédiat de radiotéléphones.


## Téléchargements

Fiche technique

[Anglais](https://docs.google.com/presentation/d/1GUdCrSlVUCWPzOxq2jCkzX2zmPm2k0qoOBliHyQPr2Q/export/pdf)

Documents techniques

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Instructions d'installation et de montage (anglais)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Instructions d'installation et de montage  (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Gabarit de perçage](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Déclaration de conformité (non MID)](https://drive.google.com/file/d/1Jx0MrqCpLrfEZa3ts7U19iJQQLQpyRww/view?usp=drive_link)

[Schéma de raccordement fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
