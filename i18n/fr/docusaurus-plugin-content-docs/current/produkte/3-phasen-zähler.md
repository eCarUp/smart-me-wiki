---
title: 'Compteur triphasé'
slug: '/produkte/3-phasen-zähler'
description: 'Le smart-me 3-Phasen Meter est un compteur d''énergie puissant et précis doté d''une interface WiFi intégrée.'
sidebar_label: 'Compteur triphasé'
---
Le smart-me 3-Phasen Meter est un compteur d'énergie puissant et précis doté d'une interface WiFi intégrée. Aucun matériel supplémentaire n'est nécessaire pour l'intégration dans le smart-me Cloud. Il utilise le réseau WiFi existant et se laisse commander et analyser de partout via Internet. Avec un abonnement Professional, les valeurs du compteur peuvent également être interrogées via l'interface Modbus TCP. Sur la version 5(32)A, chaque phase peut être commutée individuellement.

Ce compteur triphasé n'est plus disponible. Vous trouverez la nouvelle génération de notre compteur triphasé ici : [Compteur triphasé Telstar](/produkte/telstar)

![Compteur triphasé – Illustration 1](/img/produkte-3-phasen-zaehler/01.png)

## Variantes

- Raccordement direct 5(80)A

- Raccordement direct 5(32)A, commutable


## Fonctions

- Compteur d'énergie triphasé avec certification MID 2014/32/EU

- Mesure directe jusqu'à 80 A (non commutable), mesure directe jusqu'à 32 A (commutable)

- Valeurs de mesure en temps réel avec la plus haute précision, classe B

- Sorties de contact supplémentaires pour la commande d'appareils externes

- Le compteur triphasé fonctionne également comme passerelle vers le cloud pour (presque) tous les appareils Smart Energy compatibles IP

- Installation simple avec l'application smart-me gratuite pour Android et iOS

- Connexion WiFi chiffrée directement vers le smart-me Cloud. Le smart-me Cloud offre une gestion de l'énergie complète : visualisations, commande (actions si/alors), facturation automatique (smart-me Billing) et interfaces vers des systèmes de terzi (Auto Export, API)


## Installation

Avant de pouvoir utiliser ton appareil smart-me, tu dois le connecter à ton réseau WiFi et à Internet.

1.  Connecte ton smartphone ou ta tablette au réseau WLAN.

2.  Télécharge et installe l'application smart-me depuis le Playstore ou l'iOS Store.

3.  Démarre l'application et crée un compte ou connecte-toi avec le compte correspondant.

4.  Clique sur « Ajouter un appareil » (Gerät hinzufügen) (+) et suis les instructions.


## Caractéristiques techniques

Tension de service 3 x 230 VAC

Courant de référence 5 (80) A / 5 (32) A

Consommation propre &lt; 0.8 W par phase

Température de stockage -40°C à 85°C

Plage de température -25°C à 70°C

Humidité de l'air moyenne annuelle 75%, brièvement 95%, sans condensation

Précision classe B

Type de compteur compteur bidirectionnel (soutirage et injection)

Valeurs de mesure 

- -   Énergie active (kWh)

    - Puissance active (kW)

    - Courant (A)

    - Tension (V)

    - Facteur de puissance (cosphi)

    - État des entrées et sorties 

    - En complément avec l'abonnement Professional : énergie réactive (kvarh), puissance réactive (kvarh)


Tarifs 2 (tarifs virtuels créables côté cloud)

Interfaces 

- -   WiFi

    - S0 / sorties de contact libres de potentiel

    - Entrée tarifaire (24 - 48VDC  /  24 - 230 VAC)

    - SG Ready

    - avec l'abonnement Professional : Modbus TCP

 
Sorties d'impulsions / sorties numériques S0, S1 Opto Power MOSFET, 5 - 48VDC  / 5 - 230 VAC , max. 550mW

Standard WiFi 802.11 b/g/n

Standard de sécurité WiFi WEP, WPA, WPA2 (personal)

Valeur d'impulsion S0 10’000 ou 1’000 impulsions par kWh

Mémoire de données 2 mois

Certification du produit CE, MID 2014/32/EU

Classes environnementales : mécanique M1, électromagnétique E2

Classe de protection IP20 (bornes), IP51 (façade)

Dimensions 5 modules, 90 x 90 mm

Montage rail DIN

## Configurer les entrées et sorties

Le smart-me Meter dispose de deux sorties et d'une entrée, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact commutable libre de potentiel. Tu trouveras les détails à ce sujet [ici](/schnittstellen/ein_und_ausgaenge). 

## Écran

Le compteur possède un écran défilant. Les points décrits ci-dessous sont affichés les uns après les autres. Après le dernier point, l'affichage reprend au point 1 :

1.  Ordre des phases (en cas d'erreur, voir ci-dessous)

2.  Relevé du compteur (code Obis suivi du relevé du compteur)


1-8-1 : énergie active tarif 1 import (soutirage)
1-8-2 : énergie active tarif 2 import (soutirage)
2-8-1 : énergie active tarif 1 export (injection)
2-8-2 : énergie active tarif 2 export (injection)

3.  Version du logiciel

4.  Valeur CRC


### Ordre des phases

PhL 1 -> seule la phase L1 a été raccordée (PhL2 pour L2 etc.)
PhL 12 -> seules les phases L1 et L2 ont été raccordées (PhL13 pour L1 et L3 etc.)
PhL 123 -> un ordre des phases incorrect a été constaté

## Dimensions et raccordements

### Dimensions \[mm\]

![Compteur triphasé – Illustration 2](/img/produkte-3-phasen-zaehler/02.png)

Attention : les données .DXF et .DWG se trouvent dans l'archive ZIP dans les téléchargements.

### Schéma de raccordement

E1 : entrée tarifaire (entrée numérique)

0V : tarif 1

\>24V : tarif 2

T1 : touche pour l'installation

T2 : fonctions spéciales

Bref : si T2 est brièvement pressée, la lampe LED verte s'allume / s'éteint. Lorsqu'elle est activée, elle indique l'état de la connexion :

Vert allumé : connecté au smart-me Cloud 

Vert clignotant : pas de connexion

Long : si T2 est pressée longuement, l'affichage du relevé du compteur d'énergie réactive est activé (s'il est disponible). Dans la séquence d'affichage, les points relevé du compteur d'énergie réactive T1 et relevé du compteur d'énergie réactive T2 sont ajoutés. La valeur affichée clignote et peut ainsi être distinguée de l'énergie active.

ATTENTION : ce réglage ne modifie que l'affichage à l'écran, pas dans le smart-me Cloud (application et site web). Si l'énergie réactive doit être affichée dans le cloud, cela doit être fait dans les réglages généraux. (Lors de la pression sur T2, la LED rouge commence à s'allumer, T2 doit être maintenue pressée jusqu'à ce que la LED rouge s'éteigne)

S0\_0 : sortie d'impulsions S0 (en option contact libre de potentiel / attention Pmax = 550mW en permanence)

S0\_1 : sortie d'impulsions S0 (en option contact libre de potentiel / attention Pmax = 550mW en permanence)

![Compteur triphasé – Illustration 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Valeurs de mesure (codes Obis)

Les valeurs de mesure suivantes sont enregistrées par le compteur et peuvent être consultées dans le cloud et via l'API

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Open Spreadsheet, Messwerte (inkl. Obiscodes) 3-Phasen Zähler V1 in new window")

<Video src="" title="Video" />

Valeurs de mesure (y compris codes Obis) compteur triphasé V1

## Téléchargements et déclaration de conformité

Fiche technique

[Anglais](https://drive.google.com/file/d/1U5DGW_fda6IvaIzHPyjkVkT5Sd2hHyL8/view?usp=sharing)

[Français](https://drive.google.com/file/d/1FdrW3HQAq-INjThhj1IbRuXhpq4dUSWP/view?usp=sharing)

[Italien](https://drive.google.com/file/d/1ip42f1sf4NrRq9CmYWQoKp1x9uB1ALEt/view?usp=sharing)

Quick Starter Guide

Documents techniques

[Déclaration de conformité CE](https://drive.google.com/file/d/1MBTTapoTlcpUFbXpglgAq2wpE4yfs_MO/view?usp=sharing)

[Schéma de raccordement](https://drive.google.com/file/d/12wyjFnyECXzPXvnYKV_VhfHKuZwAhjdn/view?usp=sharing)

## FAQ

### À quel intervalle les compteurs envoient-ils des données ?

- Toutes les 15 minutes, donc à xx:00:00 xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- En complément, une configuration individuelle peut être effectuée :

    - Avec les licences Basic ou Limited : max. 1x par minute.

    - Avec la licence Pro : max. 1x par seconde
