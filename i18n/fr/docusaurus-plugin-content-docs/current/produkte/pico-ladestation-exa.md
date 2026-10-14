---
title: 'Borne de recharge Pico'
slug: '/produkte/pico-ladestation-exa'
description: 'RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant continu de défaut)'
sidebar_label: 'Borne de recharge Pico'
displayed_sidebar: wikiSidebar
---
RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant continu de défaut)

Pico est la borne de recharge suisse de haute technologie. Elle se connecte directement au cloud via Wi-Fi ou réseau mobile. Le compteur intelligent intégré exporte des données de mesure de haute précision, signées lors des transactions et vérifiables gratuitement à tout moment. La borne peut être intégrée dans un backend (eCarUp), dans des systèmes de gestion de l'énergie et dans d'autres systèmes tiers. De plus, Pico peut être utilisée pour la gestion de la charge statique comme dynamique (y compris l'équilibrage des phases).

Cet article concerne la première génération de Pico (numéro d'article 202170exA). Vous trouverez toutes les informations sur la version la plus récente de Pico ici : [Borne de recharge Pico](/produkte/pico-ladestation).

![Borne de recharge Pico – figure 1](/img/produkte-pico-ladestation-exa/01.jpg)

[Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessoires](/produkte/pico-ladestation/pico-zubehör)

[Recommandation de matériel RCD Typ-A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a)

## Fonctions

- Gestion de la charge intégrée et répartition de la charge avec équilibrage des phases

- Montage simple (petite et légère), adaptée au câble plat

- Identification par RFID, app, CarID et prête pour ISO 15118 (Powerline)

- Connexion de données chiffrée en temps réel vers les clouds smart-me et eCarUp 

- Installation simple avec l'app smart-me gratuite.

- Interfaces vers des systèmes tiers via API, CSV, MSCONS, IS-E et autres


## Mise en service de Pico

Avant de pouvoir utiliser votre appareil smart-me, vous devez le connecter à votre réseau WiFi.

1.  Connectez votre smartphone ou votre tablette au WLAN.

2.  Téléchargez et installez l'app smart-me gratuite.

3.  Lancez l'app et créez un compte gratuit

4.  Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+) et suivez les instructions.

    1.  1.  Choisir WLAN ou LTE (2.4Ghz ou mobile)

        2.  Indiquer le mot de passe (WLAN)

        3.  Tenir la carte RFID fournie devant le lecteur pendant 10 secondes

        4.  Connecter le téléphone mobile au WLAN local de la Pico (réseaux : smartme\_Serienummer) et le maintenir connecté.

        5.  Revenir dans l'app

        6.  Indiquer le nom d'affichage de la Pico et terminer l'installation


## Configurer Pico

La configuration est décrite en détail ici : [Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Caractéristiques techniques

Puissance de recharge maximale  22 kW à 32A en triphasé, 7.36 kW à 32A en monophasé

Identification  Détection et identification automatiques du véhicule, lecteur RFID / NFC (JEWEL, MIFARE, FELICA, ISO14443, NFC\_DEP, ISO14443\_B, ISO15693)

Smart Meter  Compteur électrique intégré non certifié MID, avec processeur de sécurité

Équilibrage des phases  Équilibrage automatique des phases

Gestion de la charge  Gestion automatique de la charge sur plusieurs bornes

Communication  WiFi (2.4 GHz) et réseau mobile (LTE), SIM et trafic de données inclus pendant 10 ans par [1nce](https://1nce.com/de/laenderabdeckung/), [Modbus TCP](/)

Connexion cloud  Connexion aux clouds smart-me et eCarUp

Sécurité  Numéro d'article 202170exA RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant continu de défaut)

Plage de température  \-30°C à 50°C

Tensions réseau 3x230/400VAC ou 1x 230VAC (+/-10%)

Prise de recharge  IEC 62196-2 Typ 2 

Indice de protection  IP55 (intérieur et extérieur)

Résistance aux chocs  IK10

Classe d'inflammabilité  UL94

Délestage  2 entrées libres de potentiel (4 états),  min. 12V AC/DC, max. 48 VDC / 230 VAC

Sortie S0  Interface S0 (1000 imp/kwh) pour l'étalonnage

Raccordement électrique  en haut, en bas, à l'arrière

Type d'installation  Rail conducteur, câble plat, en étoile

Dimensions  H:300 mm L:220 mm P:112 mm

Poids  3.8 kg

Section de câble  min. 2.5 mm2, max. 10 mm2

Diamètre de câble  10-20 mm

Emplacement des serveurs Suisse 

## Raccordements et dimensions de Pico

![Borne de recharge Pico – figure 2](/img/produkte-pico-ladestation-exa/02.jpg)

### Schéma de raccordement

L1: Phase 1

L2: Phase 2

L3: Phase 3

N: Conducteur neutre

PE: Conducteur de protection



Le conducteur de protection doit être raccordé à la vis de raccordement supérieure afin que le socle soit mis à la terre directement avec la borne.

Le produit ne peut être exploité qu'en couplage triphasé en étoile ou en monophasé !



Passages de câbles

Sur la Pico, les câbles peuvent entrer et sortir à 5 endroits. 

Deux en haut, deux en bas et un à travers la plaque arrière.

Pour un montage à travers la plaque arrière, un trou de 25-26mm de diamètre doit être percé.

Vous trouverez les détails sur le montage sur socle dans les instructions de montage, sous Téléchargements.

### Délestage (entrées externes)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Ouvrir la feuille de calcul, délestage Pico dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" height="245px" title="Feuille de calcul, délestage Pico" />

Délestage Pico

Le délestage peut aussi être réalisé avec un seul signal disponible. 

Pour la configuration de « aucune recharge » à « puissance de recharge maximale », le signal est câblé sur IN1 et IN2  ainsi que sur COM.

Pour la configuration de « puissance minimale de 6A » à « puissance de recharge maximale », le signal doit uniquement être câblé sur IN2 ainsi que sur COM.



Attention :
Le délestage peut être câblé soit sur toutes les Pico, soit au minimum sur une Pico de chaque groupe de charge.
Cette fonction est garantie même sans connexion Internet.

Le délestage peut également être réalisé via les actions SI/ALORS et la régulation Pico.

![Borne de recharge Pico – figure 3](/img/produkte-pico-ladestation-exa/03.png)

### Dimensions

![Borne de recharge Pico – figure 4](/img/produkte-pico-ladestation-exa/04.png)

## Informations d'expédition

### 212070 smart-me PICO Ladestation inkl. Montageplatte

Numéro de tarif douanier : 85044055

Poids avec emballage : 4.6 kg

Taille de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

### 212070/1 smart-me PICO Ladestation ohne Montageplatte

Numéro de tarif douanier : 85044055

Poids avec emballage : 3.3 kg

Taille de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

## Accessoires

[Accessoires](/produkte/pico-ladestation/pico-zubehör) 

## Consignes de sécurité

Les consignes de sécurité doivent être respectées en toutes circonstances :

Installation, maintenance, réparation, mise en service :

- Lisez attentivement l'intégralité du manuel avant l'installation et l'utilisation du produit.

- Danger de mort dû à la haute tension électrique. Ne jamais effectuer de modifications sur les composants, le logiciel ou les câbles de raccordement sans que l'installation soit hors tension. Les fusibles en amont correspondants doivent donc être retirés et conservés de manière à ce que d'autres personnes ne puissent pas les remettre en place à votre insu.

- Le produit doit être installé, réparé ou entretenu exclusivement par un électricien qualifié agréé. Toutes les prescriptions communales, régionales et nationales en vigueur pour les installations électriques doivent être respectées. 

- L'installation ne doit pas être effectuée à proximité de substances inflammables ou explosives, dans des zones inondables (parking souterrain) ou dans des zones exposées à un risque d'eau courante. 

- Le produit doit être installé à un emplacement définitif. Les raccordements de la Pico et de la plaque arrière sont conçus pour un nombre limité de cycles d'enfichage. 

- Le produit doit être installé sur un mur ou une structure ayant une capacité de charge suffisante. 

- Les bornes de raccordement de la plaque arrière sont sous tension lorsque le circuit est fermé et ne doivent en aucun cas entrer en contact, directement ou avec d'autres objets, avec autre chose que l'électronique de la Pico.

- Selon le type d'installation, des autorisations peuvent être nécessaires avant l'installation, p. ex. en cas d'augmentation de la puissance du raccordement de l'immeuble. 

- La borne de recharge doit être annoncée au gestionnaire de réseau de distribution (GRD). 


Utilisation prévue :

- Ce produit est exclusivement destiné à la recharge de véhicules électriques équipés de batteries ne dégageant pas de gaz. Le produit ne doit être utilisé qu'avec un câble de recharge conforme à IEC 62196. Toute utilisation autre que celles indiquées ici est interdite.

- L'appareil est prévu pour une utilisation à l'intérieur et à l'extérieur.


Fonctionnement :

- Ne jamais utiliser ni toucher le produit s'il est endommagé ou ne fonctionne pas correctement. En cas d'urgence (fumée, incendie, étincelles ou autres dysfonctionnements), mettre immédiatement le produit hors tension via le disjoncteur différentiel et informer le support client. 

- Ne pas éteindre le produit avec de l'eau ni le nettoyer à l'eau courante.

- Ne pas plonger le produit dans l'eau ou dans d'autres liquides. 

- Ce produit n'est pas destiné à être utilisé par des personnes aux capacités physiques, mentales ou sensorielles réduites (y compris des enfants) ou par des personnes ne connaissant pas le produit. 

- Veiller à ce que les enfants ne jouent pas avec le produit.

- Ne jamais toucher les contacts de la prise de recharge de type 2 et ne pas introduire de corps étrangers dans le produit. 

- Ne jamais utiliser le câble de recharge s'il est endommagé ou si les connecteurs sont mouillés ou encrassés. 

- Ne pas utiliser de rallonges ni d'adaptateurs non homologués avec le produit. 

- Ne jamais plier le câble de recharge, rouler dessus ni l'exposer à une forte chaleur. 

- Retirer le câble de recharge du support de recharge uniquement en tirant sur la fiche. 

- Ne pas poser le câble de recharge sur les voies de circulation d'autres usagers et toujours le positionner de manière à éviter tout risque de trébuchement. 

- Protéger le câble de recharge des intempéries telles que le rayonnement solaire direct, le vent, la pluie, l'humidité et l'eau, et ne jamais le brancher avec des mains humides ou mouillées. 

- Ne pas utiliser le produit à proximité de champs électromagnétiques puissants ni à proximité immédiate de téléphones sans fil.


## Téléchargements

Fiche technique

[Anglais](https://docs.google.com/presentation/d/1GUdCrSlVUCWPzOxq2jCkzX2zmPm2k0qoOBliHyQPr2Q/export/pdf)

Documents techniques

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Instructions d'installation et de montage (anglais)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Instructions d'installation et de montage  (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Gabarit de perçage](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Déclaration de conformité (non MID)](https://drive.google.com/file/d/1Jx0MrqCpLrfEZa3ts7U19iJQQLQpyRww/view?usp=drive_link)

[Schémas de raccordement (fichiers ZIP)](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
