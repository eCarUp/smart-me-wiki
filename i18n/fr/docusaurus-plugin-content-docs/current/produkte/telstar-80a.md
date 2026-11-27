---
title: 'Compteur triphasé Telstar 80A'
slug: '/produkte/telstar-80a'
description: 'Le smart-me Telstar 80A est un compteur d''énergie certifié MID, doté d''une interface WiFi intégrée pour la transmission de données en temps réel.'
sidebar_label: 'Compteur triphasé Telstar 80A'
---
Le smart-me Telstar 80A est un compteur d'énergie certifié MID, doté d'une interface WiFi intégrée pour la transmission de données en temps réel. Le compteur synchronise les valeurs mesurées automatiquement et de manière chiffrée dans le cloud smart-me. Les données peuvent être exportées et traitées dans le portail smart-me ou, via notre interface ouverte, dans des systèmes tiers. Le compteur dispose de deux sorties numériques pour la commande d'appareils à contact sec.

![Compteur triphasé Telstar 80A – Illustration 1](/img/produkte-telstar-80a/01.jpg)

## Fonctions

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Facturation avec l'[outil smart-me Billing](/konfiguration/billing)

- Commande avec des [actions si/alors](/konfiguration/wenndann-aktionen) ou des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Sorties à contact sec](/schnittstellen/ein-und-ausgaenge) pour la commande d'appareils externes, dont une avec relais 8A

- Entrée à contact sec pour signal tarifaire ou [entrée numérique](/schnittstellen/ein-und-ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS et IS-E

- Connexion de données chiffrée en temps réel vers le cloud smart-me 

## Caractéristiques techniques

| Caractéristique | Valeur |
| --- | --- |
| Certification du produit | CE, MID 2014/32/EU, courbe de charge CH / énergie réactive, RED |
| Classe de précision pour l'énergie active/énergie réactive | B (MID) / 2 (IEC) |
| Sens | +A (soutirage), -A (injection), +R, -R |
| Quadrants | Q1, Q2, Q3, Q4 |
| Tension de réseau | 3x230/400VAC 50Hz |
| Plage de mesure du courant Imin-Iref(Imax) | 0.25-5(80)A |
| Section des conducteurs | 2.5 - 35 mm² |
| Catégorie de l'appareil de mesure | CAT III |
| Plage de température | -25°C à +70°C |
| Humidité relative | Moyenne annuelle 75%, sans condensation<br />brièvement 95%, sans condensation |
| Valeurs mesurées | Énergie active (kWh), puissance active (kW)<br />Énergie réactive (kvarh), puissance réactive (kvar)<br />Courant (A), tension (V), facteur de puissance (cosφ) |
| Autoconsommation | < 0.8W par phase |
| Tarifs | Deux via l'entrée tarifaire numérique E1, tarifs virtuels illimités dans le cloud smart-me |
| Sortie S0 | 1'000 Imp/kWh |
| Entrée numérique E1 | Entrée tarifaire à contact sec (12 VDC / 230 VAC) |
| Sorties numériques S0-0, S-1 | Sorties à contact sec (SG Ready), 12 VDC / 230 VAC<br />S0-0 : max. 0.4W<br />S-1 : max. 8A@230VAC ou 5A@12VDC |
| Communication | WLAN IEEE 802.11 b/g/n (2.4 GHz) |
| Volume de données | < 75MB/mois |
| Débit de données | < 0.1 Mbit/s |
| Norme de sécurité WLAN | WEP, WPA-PSK/WPA2-PSK |
| Mémoire de données | 2 mois |
| Indice de protection boîtier/raccordements, utilisation | IP20 / IP51 (monté dans une armoire électrique), intérieur |
| Montage | Rail DIN |
| Dimensions | 5 modules, L:90mm l:90mm H:65.7mm |
| Emplacement des serveurs | Suisse |
| Classe de protection | II |

## Écran

<div className="row">
<div className="col col--7">

**Valeur / symbole Description**

- 1.8.1 Code OBIS\ du relevé du compteur affiché

- T1 Tarif actif (tarif 1 ou tarif 2)

- Flèche Sens du courant (à droite soutirage / à gauche injection)

- Réception (barres) Intensité du signal WiFi

- 0000053.2 Relevé du compteur

- 5520W Puissance mesurée instantanément avec unité

- kWh Unité du relevé du compteur affiché

- M Fonction qui n'est plus utilisée (peut être ignorée)

</div>
<div className="col col--5 bild--mitte">

![Compteur triphasé Telstar 80A – Illustration 2](/img/produkte-telstar-80a/02.png)

</div>
</div>

Le compteur dispose d'un affichage défilant. Les éléments décrits ci-dessous s'affichent les uns après les autres. Après le dernier élément, le premier s'affiche à nouveau.

**Relevé du compteur (code OBIS suivi du relevé du compteur)**

- 1.8.1 (A+) Énergie active soutirage tarif 1
- 1.8.2 (A+) Énergie active soutirage tarif 2
- 2.8.1 (A+) Énergie active injection tarif 1
- 2.8.2 (A+) Énergie active injection tarif 2
- 5.8.0 (Q1) Énergie réactive inductive soutirage total
- 6.8.0 (Q2) Énergie réactive capacitive soutirage total
- 7.8.0 (Q3) Énergie réactive inductive injection total
- 8.8.0 (Q4) Énergie réactive capacitive injection total

**Firmware (code OBIS suivi d'informations)**

- C.1.6 Ch: 762A Somme de contrôle du firmware
- 0.2.0 V 1.1 Version du firmware

**Affichage des erreurs (code OBIS suivi de messages d'erreur)**

- C.60.9 Fraud Flag (tentative de fraude possible détectée)
- PhL: 1 seule la phase L1 est raccordée
- PhL: 2 seule la phase L2 est raccordée
- PhL: 3 seule la phase L3 est raccordée
- PhL: 23 phase L1 non raccordée
- PhL: 13 phase L2 non raccordée
- PhL: 12 phase L3 non raccordée
- Ordre des phases correct : les chiffres restent allumés en continu
- Ordre des phases incorrect : les chiffres clignotent

## Dimensions et raccordements

Les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP, dans les téléchargements.

### Dimensions \[mm\]

<div className="row">
<div className="col col--6 bild--mitte">

![Compteur triphasé Telstar 80A – Illustration 3](/img/produkte-telstar-80a/03.png)

</div>
<div className="col col--6 bild--mitte">

![Compteur triphasé Telstar 80A – Illustration 4](/img/produkte-telstar-80a/04.png)

</div>
</div>

### Schéma de raccordement

![Compteur triphasé Telstar 80A – Illustration 5](/img/produkte-telstar-80a/05.png)

## Fonctions des touches

![Compteur triphasé Telstar 80A – Illustration 6](/img/produkte-telstar-80a/06.png)

T1 Touche pour l'installation

Un appui de 10 secondes sur la touche T1 crée un réseau WiFi local pour l'installation

T1 + T2 Redémarrage

Appuyez simultanément sur les touches T1 et T2 pendant 10 secondes pour forcer un redémarrage.

T2 Fonctions spéciales

Court : si T2 est pressée >2s, la LED verte change d'état (d'éteinte à allumée ou d'allumée à éteinte). Lorsqu'elle est activée, elle indique l'état de la connexion 

🟢 Vert fixe : connecté au cloud smart-me

❇️ Vert clignotant : établissement de la connexion ou aucune connexion

Long : si T2 est pressée >8s, l'affichage de la puissance bascule entre puissance active et puissance réactive. De plus, la LED d'impulsions d'étalonnage bascule entre énergie active et énergie réactive.

Très long : si T2 est pressée >14s, la sortie d'impulsions S0-0 bascule entre puissance active et puissance réactive.

Remarque : ce réglage modifie uniquement l'affichage sur l'écran, pas dans le cloud smart-me (application et site web). Pour afficher l'énergie réactive dans le cloud, il faut l'activer dans les paramètres généraux. 


## LED

<div className="row">
<div className="col col--5 bild--mitte">

![Compteur triphasé Telstar 80A – Illustration 7](/img/produkte-telstar-80a/07.png)

</div>
<div className="col col--7">

🟢 LED verte - état de la connexion

- Indique l'état de la connexion au cloud smart-me. a) Clignotante = erreur de connexion b) Toujours allumée = connexion OK

</div>
</div>

<div className="row">
<div className="col col--5 bild--mitte">

![Compteur triphasé Telstar 80A – Illustration 8](/img/produkte-telstar-80a/08.png)

</div>
<div className="col col--7">

🔴 LED rouge - LED d'impulsions

- Indique la puissance active ou réactive actuellement soutirée, à raison de 1000 impulsions/kWh resp. 1000 impulsions/kVArh. La touche T2 permet de choisir si la puissance active ou réactive est affichée.

- Par exemple : une LED portant l'indication « 1000 impulsions/kWh » clignote 1000 fois lorsque 1 kilowattheure (kWh) d'énergie a été soutiré ou injecté. Si les 1000 impulsions ont été comptées en 1 heure, une puissance constante de 1 kW a été mesurée.

</div>
</div>

## Configurer les entrées et sorties

Le Telstar 80A dispose de deux sorties numériques et d'une entrée numérique, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact sec commutable. Vous trouverez plus de détails sur la page wiki [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) 

Le Telstar 80A dispose, sur l'une des sorties numériques, d'un relais capable de commuter jusqu'à 8A.

## Technologie mesh

En cas de réception WiFi très faible ou absente, le Telstar 80A se connecte automatiquement, via la fonction mesh, à un autre compteur voisin à portée. Celui-ci prend alors en charge la communication avec le cloud smart-me. La technologie mesh garantit une plus grande disponibilité des compteurs vis-à-vis du cloud smart-me. Il n'est pas possible de désactiver la fonction mesh sur le compteur. Lorsque [Modbus TCP](/schnittstellen/modbus-tcp) est activé, des restrictions spécifiques s'appliquent.

## Informations d'expédition

Numéro d'article : 202063
Nom de l'article : smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Numéro de tarif douanier : 9028.3019

Poids avec emballage : 415g

## Téléchargements et déclaration de conformité

[Fiche technique en allemand](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Fiche technique en anglais](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[Déclaration de conformité CE](https://drive.google.com/uc?export=download&id=1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b)

[Schéma de raccordement](https://drive.google.com/uc?export=download&id=1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B)

[Schéma de raccordement fichiers ZIP](https://drive.google.com/uc?export=download&id=1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo) (les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>À quel intervalle les compteurs envoient-ils des données ?</summary>

- Toutes les 15 minutes, soit à xx:00:00, xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et transmises ultérieurement.

- En outre, au moins toutes les 330 secondes.

- Ensuite, lorsque l'un des événements suivants se produit :

    - Variation du relevé du compteur supérieure à 100Wh

    - Variation de la puissance supérieure à 100W

    - Variation du courant supérieure à 1A

    - Variation de la tension supérieure à 1V

    - Chaque seconde, lorsque le compteur est sélectionné dans l'interface (portail smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, nos compteurs étant utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

</details>
