---
title: 'Compteur triphasé'
slug: '/produkte/3-phasen-zähler'
description: 'Le smart-me 3-Phasen Meter est un compteur d''énergie puissant et précis avec interface WiFi intégrée.'
sidebar_label: 'Compteur triphasé'
---
Le smart-me 3-Phasen Meter est un compteur d'énergie puissant et précis avec interface WiFi intégrée. Aucun matériel supplémentaire n'est nécessaire pour l'intégration dans le smart-me Cloud. Il utilise le réseau WiFi existant et peut être piloté et analysé depuis n'importe où via Internet. Avec un abonnement Professional, les valeurs du compteur peuvent également être interrogées via l'interface Modbus TCP. Sur la version 5(32)A, chaque phase peut être commutée individuellement.

Ce compteur triphasé n'est plus disponible. Vous trouverez la nouvelle génération de notre compteur triphasé ici : [Compteur triphasé Telstar](/produkte/telstar)

![Compteur triphasé – illustration 1](/img/produkte-3-phasen-zaehler/01.png)

## Variantes

- Raccordement direct 5(80)A

- Raccordement direct 5(32)A, commutable


## Fonctions

- Compteur d'énergie triphasé avec certification MID 2014/32/EU

- Mesure directe jusqu'à 80 A (non commutable), mesure directe jusqu'à 32 A (commutable)

- Valeurs de mesure en temps réel avec la plus haute précision, classe B

- Sorties de contact supplémentaires pour la commande d'appareils externes

- Le compteur triphasé fonctionne également comme passerelle vers le cloud pour (presque) tous les appareils smart energy compatibles IP

- Installation simple avec l'application smart-me gratuite pour Android et iOS

- Connexion WiFi chiffrée directement vers le smart-me Cloud. Le smart-me Cloud offre une gestion complète de l'énergie : visualisations, commande (actions si/alors), facturation automatique (smart-me Billing) et interfaces vers des systèmes tiers (Auto Export, API)


## Installation

Avant de pouvoir utiliser votre appareil smart-me, vous devez le connecter à votre réseau WiFi et à Internet.

1.  Connectez votre smartphone ou votre tablette au réseau WiFi.

2.  Téléchargez et installez l'application smart-me depuis le Playstore ou l'iOS Store.

3.  Démarrez l'application et créez un compte ou connectez-vous avec le compte correspondant.

4.  Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+) et suivez les instructions.


## Caractéristiques techniques

Tension de service 3 x 230 VAC

Courant de référence 5 (80) A / 5 (32) A

Autoconsommation &lt; 0.8 W par phase

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

Indice de protection IP20 (bornes), IP51 (face avant)

Dimensions 5 modules, 90 x 90 mm

Montage rail DIN

## Configurer les entrées et sorties

Le smart-me Meter dispose de deux sorties et d'une entrée, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact commutable libre de potentiel. Vous trouverez les détails [ici](/schnittstellen/ein_und_ausgaenge). 

## Affichage

Le compteur possède un affichage défilant. Les points décrits ci-dessous s'affichent l'un après l'autre. Après le dernier point, l'affichage reprend au point 1 :

1.  Ordre des phases (en cas d'erreur, voir ci-dessous)

2.  Relevé du compteur (code Obis suivi du relevé)


1-8-1 : énergie active tarif 1 Import (soutirage)
1-8-2 : énergie active tarif 2 Import (soutirage)
2-8-1 : énergie active tarif 1 Export (injection)
2-8-2 : énergie active tarif 2 Export (injection)

3.  Version du logiciel

4.  Valeur CRC


### Ordre des phases

PhL 1 -> seule la phase L1 a été raccordée (PhL2 pour L2, etc.)
PhL 12 -> seules les phases L1 et L2 ont été raccordées (PhL13 pour L1 et L3, etc.)
PhL 123 -> un ordre des phases incorrect a été constaté

## Dimensions et raccordements

### Dimensions \[mm\]

![Compteur triphasé – illustration 2](/img/produkte-3-phasen-zaehler/02.png)

Attention : les données .DXF et .DWG se trouvent dans l'archive ZIP, dans les téléchargements.

### Schéma de raccordement

E1 : entrée tarifaire (entrée numérique)

0V : tarif 1

\>24V : tarif 2

T1 : touche pour l'installation

T2 : fonctions spéciales

Court : un appui court sur T2 allume / éteint la lampe LED verte. Lorsqu'elle est activée, elle indique l'état de la connexion :

Vert allumé : connecté au smart-me Cloud 

Vert clignotant : pas de connexion

Long : un appui long sur T2 active l'affichage du relevé de l'énergie réactive (si disponible). Les points relevé de l'énergie réactive T1 et relevé de l'énergie réactive T2 sont alors ajoutés à la séquence d'affichage. La valeur affichée clignote et peut ainsi être distinguée de l'énergie active.

ATTENTION : ce réglage ne modifie que l'affichage sur l'écran, pas dans le smart-me Cloud (application et site web). Si l'énergie réactive doit être affichée dans le cloud, cela doit être fait dans les réglages généraux. (Lors de l'appui sur T2, la LED rouge commence à s'allumer ; T2 doit être maintenu enfoncé jusqu'à ce que la LED rouge s'éteigne)

S0\_0 : sortie d'impulsions S0 (en option contact libre de potentiel / attention Pmax = 550mW en permanence)

S0\_1 : sortie d'impulsions S0 (en option contact libre de potentiel / attention Pmax = 550mW en permanence)

![Compteur triphasé – illustration 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Valeurs de mesure (codes Obis)

Les valeurs de mesure suivantes sont enregistrées par le compteur et peuvent être consultées dans le cloud et via l'API

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Ouvrir la feuille de calcul, valeurs de mesure (y compris codes Obis) compteur triphasé V1 dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI/htmlembed" aspect="2.882" title="Feuille de calcul, valeurs de mesure (y compris codes Obis) compteur triphasé V1" />

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

- Toutes les 15 minutes, donc à xx:00:00, xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi transmises. En cas d'interruption de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- Il est en outre possible de procéder à une configuration individuelle :

    - Avec les licences Basic ou Limited : max. 1x par minute.

    - Avec la licence Pro : max. 1x par seconde
