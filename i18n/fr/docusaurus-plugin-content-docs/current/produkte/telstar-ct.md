---
title: 'Compteur d''énergie triphasé Telstar CT'
slug: '/produkte/telstar-ct'
description: 'Le smart-me Telstar CT est un compteur d''énergie certifié MID doté d''une interface WiFi intégrée pour la transmission de données en temps réel et d''un raccordement pour transformateurs externes.'
sidebar_label: 'Compteur triphasé Telstar CT'
---
Le smart-me Telstar CT est un compteur d'énergie certifié MID doté d'une interface WiFi intégrée pour la transmission de données en temps réel et d'un raccordement pour transformateurs externes. Le compteur synchronise automatiquement les valeurs mesurées, de manière chiffrée, avec le smart-me Cloud. Les données peuvent être exportées et traitées dans le portail smart-me ou, via notre interface ouverte, dans des systèmes tiers. Le compteur dispose de deux sorties numériques pour la commande d'appareils libres de potentiel.

![Compteur d'énergie triphasé Telstar CT – Figure 1](/img/produkte-telstar-ct/01.png)

## Accessoires requis

[Transformateurs et accessoires](/drittprodukte/stromwandler)

## Fonctions

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Raccordement pour [transformateurs externes](/) avec des courants de sortie de 0.01A à 6A

- Facturation avec le [smart-me Billing Tool](/konfiguration/billing)

- Commande avec des [actions si/alors](/konfiguration/wenndann-aktionen) ou des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Sorties à contact libre de potentiel](/schnittstellen/ein-und-ausgaenge) pour la commande d'appareils externes, dont une avec relais 8A

- Entrée à contact libre de potentiel pour signal tarifaire ou [entrée numérique](/schnittstellen/ein-und-ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS et IS-E

- Connexion de données chiffrée en temps réel avec le smart-me Cloud

## Données techniques

| Caractéristique | Valeur |
| --- | --- |
| Certification du produit | CE, MID 2014 / 32 / EU, courbe de charge CH / énergie réactive, RED |
| Classe de précision pour énergie active/énergie réactive | B (MID) / 2 (IEC) |
| Sens | +A (soutirage), -A (injection), +R, -R |
| Quadrants | Q1, Q2, Q3, Q4 |
| Tension réseau | 3x230/400VAC 50Hz |
| Plage de mesure du courant Imin-Iref(Imax) | 0.01-1(6)A |
| Section des conducteurs | 0.5 - 6 mm² |
| Rapport de transformation | 1:1 à 20'000:1 ou 5:5 à 20'000:5 |
| Catégorie de mesure | CAT III |
| Plage de température | -25°C à +70°C |
| Humidité relative | Moyenne annuelle 75%, sans condensation<br />brièvement 95%, sans condensation |
| Valeurs mesurées | Énergie active (kWh), puissance active (kW)<br />Énergie réactive (kvarh), puissance réactive (kvar)<br />Courant (A), tension (V), facteur de puissance (cosφ) |
| Autoconsommation | < 0.8W par phase |
| Tarifs | 2 via l'entrée tarifaire numérique E1, tarifs virtuels illimités dans le smart-me Cloud |
| Sortie S0 | 1'000 Imp/kWh |
| Entrée numérique E1 | Entrée tarifaire libre de potentiel (12VDC / 230 VAC) |
| Sorties numériques S0-0, S-1 | Sorties libres de potentiel (SG Ready), 12 VDC / 230 VAC<br />S0-0: max. 0.4W<br />S-1: max. 8A@230VAC ou 5A@12VDC |
| Communication | WLAN IEEE 802.11 b/g/n (2.4 GHz) |
| Volume de données | < 75MB/mois |
| Norme de sécurité Wi-Fi | WEP, WPA-PSK/WPA2-PSK |
| Débit de données | < 0.1 Mbit/s |
| Mémoire de données | 2 mois |
| Classe de protection | II |
| Indice de protection boîtier/bornes, utilisation | IP20 / IP51 (monté dans une armoire électrique), intérieur |
| Montage | Rail DIN |
| Dimensions | 5 modules, L:90mm l:90mm H:65.7mm |
| Emplacement des serveurs | Suisse |

## Exigences techniques relatives aux transformateurs

Le Telstar CT peut être utilisé avec les transformateurs de courant les plus divers. Les exigences de base sont les suivantes :

- Rapport de transformation : 1:1 à 20'000:1 jusqu'à 5:5 à 20'000:5
    Le nombre secondaire peut être n'importe quel nombre entier compris entre 1 et 5.
    Le nombre primaire n'importe quel nombre entier compris entre 1 et 20'000.

- Courant de sortie : 1A à 5A

- Puissance de sortie : au moins 1VA ou plus (recommandation 5VA)

- Type : ouvert ou fermé

- Classe de précision : 1 ou meilleure\*

\*Si les compteurs doivent être utilisés pour la facturation, des transformateurs étalonnés satisfaisant au moins à la classe 0.5 ou inférieure sont nécessaires.

Vous trouverez des recommandations de transformateurs et d'accessoires sur la page : [Transformateurs de courant et accessoires](/drittprodukte/stromwandler) 

## Écran

<div className="row">
<div className="col col--6">

Valeur / symbole Description

1.8.1 Code OBIS du relevé du compteur affiché

T1 Tarif actif (tarif 1 ou tarif 2)

Flèche Sens du courant (droite soutirage / gauche injection)

Réception (barres) Intensité du signal WiFi

0000053.2 Relevé du compteur

5520W Puissance mesurée instantanée avec unité

kWh Unité du relevé du compteur affiché

M Fonction qui n'est plus utilisée (peut être ignorée)

</div>
<div className="col col--6 text--center">

![Compteur d'énergie triphasé Telstar CT – Figure 2](/img/produkte-telstar-ct/02.png)

</div>
</div>

Le compteur dispose d'un affichage déroulant. Les points décrits ci-dessous s'affichent successivement. Après le dernier point, le premier point s'affiche à nouveau.

Relevé du compteur (code OBIS suivi du relevé du compteur) 

1.8.1 (A+) Énergie active soutirage tarif 1
1.8.2 (A+) Énergie active soutirage tarif 2
2.8.1 (A+) Énergie active injection tarif 1
2.8.2 (A+) Énergie active injection tarif 2
1.8.0:5A (A+) Énergie active total soutirage base 5A
2.8.0:5A (A-) Énergie active total injection base 5A
5.8.0 (Q1) Énergie réactive inductive soutirage total
6.8.0 (Q2) Énergie réactive capacitive soutirage total
7.8.0 (Q3) Énergie réactive inductive injection total
8.8.0 (Q4) Énergie réactive capacitive injection total

Facteur de transformation (code OBIS suivi d'informations)

0.4.2       Facteur de transformation (impulsions S0 / kWh incluses)

Firmware (code OBIS suivi d'informations)

C.1.6 Ch: 2218 Somme de contrôle du firmware
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

Les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP sous Téléchargements.

### Dimensions \[mm\]

![Compteur d'énergie triphasé Telstar CT – Figure 3](/img/produkte-telstar-ct/03.png)

![Compteur d'énergie triphasé Telstar CT – Figure 4](/img/produkte-telstar-ct/04.png)

### Schéma de raccordement

![Compteur d'énergie triphasé Telstar CT – Figure 5](/img/produkte-telstar-ct/05.jpg)

## Définir le rapport de transformation du Telstar CT

<div className="row">
<div className="col col--7">

1.  En haut à droite, cliquez sur le symbole de la roue dentée (Paramètres (Einstellungen)) 

2.  Modifier (Editieren) 

3.  Paramètres généraux (Allgemeine Einstellungen) 

4.  Saisir le rapport de transformation 

5.  Le rapport de transformation peut être verrouillé. Cela sert de protection contre des modifications indésirables par des personnes non autorisées. Pour déverrouiller le rapport de transformation, l'appareil doit être réinstallé avec l'application smart-me. Lors de la réinstallation, il n'est pas nécessaire de le supprimer.

Remarque : la saisie du rapport de transformation ne modifie pas les données historiques enregistrées. C'est pourquoi cette étape doit être effectuée immédiatement après la mise en service.

</div>
<div className="col col--5 text--center">

![Compteur d'énergie triphasé Telstar CT – Figure 6](/img/produkte-telstar-ct/06.png)

</div>
</div>

## Fonctions des touches

![Compteur d'énergie triphasé Telstar CT – Figure 7](/img/produkte-telstar-ct/07.png)

T1 Touche pour l'installation

Si la touche T1 est maintenue enfoncée pendant 10 secondes, un WiFi local est créé pour l'installation

T1 + T2 Redémarrage

Maintenez les touches T1 et T2 enfoncées simultanément pendant 10 secondes pour forcer un redémarrage.

T2 Fonctions spéciales

Court : si T2 est maintenue enfoncée >2s, la LED verte change d'état (de allumée à éteinte ou d'éteinte à allumée). Lorsqu'elle est activée, elle indique l'état de la connexion 

🟢 Vert fixe : connecté au smart-me Cloud

 ☀︎ Vert clignotant : établissement de la connexion ou aucune connexion

Long : si T2 est maintenue enfoncée >8s, l'affichage de la puissance bascule entre puissance active et puissance réactive. En outre, la LED d'impulsions d'étalonnage bascule entre énergie active et énergie réactive.

Très long : si T2 est maintenue enfoncée >14s, la sortie d'impulsions S0-0 bascule entre puissance active et puissance réactive.

Remarque : ce réglage modifie uniquement l'affichage sur l'écran, pas dans le smart-me Cloud (application et site web). Si l'énergie réactive doit être affichée dans le Cloud, cela doit être réglé dans les paramètres généraux. 

## LED

<div className="row">
<div className="col col--7 text--center">

![Compteur d'énergie triphasé Telstar CT – Figure 8](/img/produkte-telstar-ct/08.png)

</div>
<div className="col col--5">

🟢 LED verte - état de la connexion

- Indique l'état de la connexion au smart-me Cloud. a) Clignotante = erreur de connexion b) Toujours allumée = connexion OK

</div>
</div>

<div className="row">
<div className="col col--5 text--center">

![Compteur d'énergie triphasé Telstar CT – Figure 9](/img/produkte-telstar-ct/09.png)

</div>
<div className="col col--7">

🔴 LED rouge - LED d'impulsions

- Indique la puissance active ou réactive actuellement soutirée en 1000 impulsions/kWh resp. 1000 impulsions/kVArh. La touche T2 permet de régler si la puissance active ou réactive est affichée.

- Par exemple : une LED portant l'indication « 1000 impulsions/kWh » clignote 1000 fois lorsque 1 kilowattheure (kWh) d'énergie a été soutiré ou injecté. Si les 1000 impulsions ont été comptées en 1 heure, une puissance constante de 1 kW a été mesurée.

</div>
</div>

## Configurer les entrées et sorties

Le Telstar CT dispose de deux sorties numériques et d'une entrée numérique, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact commutable libre de potentiel. Vous trouverez plus de détails sur la page wiki [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) 

Sur l'une de ses sorties numériques, le Telstar CT dispose d'un relais pouvant commuter jusqu'à 8A.

## Technologie mesh

En cas de réception WiFi très faible ou absente, le Telstar CT se connecte automatiquement, via la fonction mesh, à un autre compteur voisin à portée. Celui-ci prend alors en charge la communication avec le smart-me Cloud. La technologie mesh garantit une disponibilité accrue des compteurs vis-à-vis du smart-me Cloud. Il n'est pas possible de désactiver la fonction mesh sur le compteur. Lorsque [Modbus TCP](/schnittstellen/modbus-tcp) est activé, des restrictions spécifiques s'appliquent.

## Transformateurs et accessoires

Vous trouverez des recommandations de transformateurs et d'accessoires sur la page : [Transformateurs de courant et accessoires](/drittprodukte/stromwandler) 

Aucun de ces produits n'est distribué par smart-me AG ni proposé comme accessoire à l'achat. Veuillez acheter ces produits directement auprès du fabricant. 

### Informations d'expédition

Numéro d'article : 212062 

Désignation de l'article : 3-Phasen Energiezähler Telstar CT MID Wifi

Numéro de tarif douanier : 9028.3019

Poids avec emballage : 315g

## Téléchargements et déclaration de conformité

[Fiche technique allemand](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Fiche technique anglais](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[Déclaration de conformité CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schéma de raccordement fichiers ZIP](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>À quel intervalle les compteurs envoient-ils des données ?</summary>

- Toutes les 15 minutes, soit à xx:00:00, xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- En outre, au moins toutes les 330 secondes.

- Ensuite, lorsque l'un des événements suivants se produit :

    - Variation du relevé du compteur supérieure à 100Wh

    - Variation de la puissance supérieure à 100W

    - Variation du courant supérieure à 1A

    - Variation de la tension supérieure à 1V

    - Chaque seconde, lorsque le compteur est sélectionné dans le GUI (portail smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzen">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, comme nos compteurs sont utilisés pour la facturation, il n'est pas possible de les remettre à zéro.

</details>
