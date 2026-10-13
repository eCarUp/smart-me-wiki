---
title: 'Compteur triphasé Telstar 80A'
slug: '/produkte/telstar'
description: 'Le smart-me Telstar 80A est un compteur d''énergie certifié MID doté d''une interface WiFi intégrée pour la transmission de données en temps réel.'
sidebar_label: 'Compteur triphasé Telstar 80A'
---
Le smart-me Telstar 80A est un compteur d'énergie certifié MID doté d'une interface WiFi intégrée pour la transmission de données en temps réel. Le compteur synchronise les valeurs mesurées de manière automatisée et chiffrée dans le smart-me Cloud. Les données peuvent être exportées et traitées dans le portail smart-me ou, via notre interface ouverte, dans des systèmes tiers. Le compteur dispose de deux sorties numériques pour commander des appareils libres de potentiel.

![Compteur triphasé Telstar 80A – Illustration 1](/img/produkte-telstar/01.jpg)

## Fonctions

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Facturation avec le [smart-me Billing Tool](/konfiguration/billing)

- Commande avec des [actions si/alors](/konfiguration/wenndann-aktionen) ou des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Sorties de contact libres de potentiel](/schnittstellen/ein_und_ausgaenge) pour commander des appareils externes, dont une avec un relais 8A

- Entrée de contact libre de potentiel pour le signal tarifaire ou comme [entrée numérique](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS et IS-E

- Connexion de données chiffrée en temps réel vers le smart-me Cloud 

## Données techniques

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ2T_oNXpPR0sUnjcsWY-ymK0lgmZxopMCiyV0gQq9rV7fH5oJEYEVx0a4AUHNfunOHC5igswOLVyi/pubhtml?gid=0&range=A1:B27&single=true&widget=false&headers=false&chrome=false" height="689px" title="Compteur triphasé Telstar 80A" />

## Écran

Valeur / Symbole Description

1.8.1 Code OBIS du relevé du compteur affiché

T1 Tarif actif (tarif 1 ou tarif 2)

Flèche Sens du courant (droite soutirage / gauche injection)

Réception (barres) Puissance du signal WiFi

0000053.2 Relevé du compteur

5520W Puissance mesurée instantanée avec unité

kWh Unité du relevé du compteur affiché

M Fonction qui n'est plus utilisée (peut être ignorée)

![Compteur triphasé Telstar 80A – Illustration 2](/img/produkte-telstar/02.png)

Le compteur dispose d'un affichage déroulant. Les points décrits ci-dessous s'affichent successivement. Après le dernier point, le premier point s'affiche à nouveau.

Relevé du compteur (code OBIS suivi du relevé du compteur) 

1.8.1 (A+) Énergie active soutirage tarif 1
1.8.2 (A+) Énergie active soutirage tarif 2
2.8.1 (A+) Énergie active injection tarif 1
2.8.2 (A+) Énergie active injection tarif 2
5.8.0 (Q1) Énergie réactive inductive soutirage total
6.8.0 (Q2) Énergie réactive capacitive soutirage total
7.8.0 (Q3) Énergie réactive inductive injection total
8.8.0 (Q4) Énergie réactive capacitive injection total

Firmware (code OBIS suivi d'informations)

C.1.6 Ch: 762A Somme de contrôle du firmware
0.2.0 V 1.1 Version du firmware

Affichage des erreurs (code OBIS suivi de messages d'erreur)

C.60.9 Fraud Flag (tentative de fraude possible détectée)
PhL: 1 seule la phase L1 est raccordée
PhL: 2 seule la phase L2 est raccordée
PhL: 3 seule la phase L3 est raccordée
PhL: 23 phase L1 non raccordée
PhL: 13 phase L2 non raccordée
PhL: 12 phase L3 non raccordée
Ordre des phases correct : les chiffres restent allumés en continu
Ordre des phases incorrect : les chiffres clignotent

## Dimensions et raccordements

Les fichiers \*.DXF et \*.DWG se trouvent dans l'archive ZIP disponible dans les téléchargements.

### Dimensions \[mm\]

![Compteur triphasé Telstar 80A – Illustration 3](/img/produkte-telstar/03.png)

![Compteur triphasé Telstar 80A – Illustration 4](/img/produkte-telstar/04.png)

### Schéma de raccordement

![Compteur triphasé Telstar 80A – Illustration 5](/img/produkte-telstar/05.png)

## Fonctions des touches

![Compteur triphasé Telstar 80A – Illustration 6](/img/produkte-telstar/06.png)

T1 Touche pour l'installation

Si la touche T1 est maintenue enfoncée pendant 10 secondes, un WiFi local est créé pour l'installation

T1 + T2 Redémarrage

Maintenez les touches T1 et T2 enfoncées simultanément pendant 10 secondes pour forcer un redémarrage.

T2 Fonctions spéciales

Court : si T2 est enfoncée >2s, la LED verte change d'état (d'éteinte à allumée ou d'allumée à éteinte). Lorsqu'elle est activée, elle indique l'état de la connexion 

🟢 Vert fixe : connecté au smart-me Cloud

❇️ Vert clignotant : établissement de la connexion ou pas de connexion

Long : si T2 est enfoncée >8s, l'affichage de la puissance bascule entre puissance active et puissance réactive. De plus, la LED d'impulsion d'étalonnage bascule entre énergie active et énergie réactive.

Très long : si T2 est enfoncée >14s, la sortie d'impulsions S0-0 bascule entre puissance active et puissance réactive.

Remarque : ce réglage ne modifie que l'affichage sur l'écran, pas dans le smart-me Cloud (application et site web). Pour afficher l'énergie réactive dans le Cloud, il faut le configurer dans les paramètres généraux (Allgemeine Einstellungen). 

## LED

![Compteur triphasé Telstar 80A – Illustration 7](/img/produkte-telstar/07.png)

🟢 LED verte - État de la connexion

- Indique l'état de la connexion au smart-me Cloud. a) Clignotante = erreur de connexion b) Toujours allumée = connexion OK

![Compteur triphasé Telstar 80A – Illustration 8](/img/produkte-telstar/08.png)

🔴 LED rouge - LED d'impulsion

- Indique la puissance active ou réactive actuellement soutirée, à raison de 1000 impulsions/kWh resp. 1000 impulsions/kVArh. La touche T2 permet de choisir si la puissance active ou la puissance réactive est affichée.

- Par exemple : une LED portant l'indication « 1000 impulsions/kWh » clignote 1000 fois lorsque 1 kilowattheure (kWh) d'énergie a été soutiré ou injecté. Si les 1000 impulsions ont été comptées en 1 heure, une puissance constante de 1 kW a été mesurée.

## Configurer les entrées et sorties

Le Telstar 80A dispose de deux sorties numériques et d'une entrée numérique, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact commutable libre de potentiel. Vous trouverez plus de détails sur la page wiki [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) 

Le Telstar 80A dispose, sur l'une des sorties numériques, d'un relais capable de commuter jusqu'à 8A.

## Technologie mesh

En cas de réception WiFi très faible ou absente, le Telstar 80A se connecte automatiquement, via la fonction mesh, à un autre compteur voisin à portée. Celui-ci prend alors en charge la communication avec le smart-me Cloud. La technologie mesh garantit une meilleure disponibilité des compteurs vis-à-vis du smart-me Cloud. Il n'est pas possible de désactiver la fonction mesh sur le compteur. Lorsque [Modbus TCP](/schnittstellen/modbus-tcp) est activé, des restrictions spécifiques s'appliquent.

## Informations d'expédition

Numéro d'article : 202063
Désignation de l'article : smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Numéro de tarif douanier : 9028.3019

Poids avec emballage : 415g

## Téléchargements et déclaration de conformité

[Fiche technique allemand](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Fiche technique anglais](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[Déclaration de conformité CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schéma de raccordement](https://drive.google.com/file/d/1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B/view?usp=sharing)

[Schéma de raccordement fichiers ZIP](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (les fichiers \*.DXF et \*.DWG se trouvent dans l'archive ZIP)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>À quel intervalle les compteurs envoient-ils des données ?</summary>

- Toutes les 15 minutes, soit à xx:00:00, xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et transmises ultérieurement.

- En outre, au moins toutes les 330 secondes.

- Ensuite, lorsque l'un des événements suivants se produit :

    - Variation du relevé du compteur supérieure à 100Wh

    - Variation de puissance supérieure à 100W

    - Variation de courant supérieure à 1A

    - Variation de tension supérieure à 1V

    - Chaque seconde, lorsque le compteur est sélectionné dans l'interface graphique (portail smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, nos compteurs étant utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

</details>
