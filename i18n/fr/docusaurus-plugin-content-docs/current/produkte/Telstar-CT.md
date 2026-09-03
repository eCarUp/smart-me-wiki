---
title: 'Compteur d''énergie triphasé Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'Le smart-me Telstar CT est un compteur d''énergie certifié MID avec interface WiFi intégrée pour la transmission de données en temps réel et avec raccordement pour transformateurs externes.'
sidebar_label: 'Compteur triphasé Telstar CT'
---
Le smart-me Telstar CT est un compteur d'énergie certifié MID avec interface WiFi intégrée pour la transmission de données en temps réel et avec raccordement pour transformateurs externes. Le compteur synchronise les valeurs de mesure de manière automatisée et chiffrée vers le cloud smart-me. Les données peuvent être exportées et traitées dans le portail smart-me ou vers des systèmes de terzi via notre interface ouverte. Le compteur dispose de deux sorties numériques permettant de commander des appareils sans potentiel.

![Compteur d'énergie triphasé Telstar CT – Illustration 1](/img/produkte-telstar-ct/01.png)

[Transformateurs et accessoires](/drittprodukte/Stromwandler)

## Fonctions

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Raccordement pour [transformateurs externes](/) avec des courants de sortie de 0.01A à 6A

- Facturation avec l'[outil smart-me Billing](/konfiguration/billing)

- Commande par [actions si/alors](/konfiguration/wenndann-aktionen) ou [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Sorties de contact sans potentiel](/schnittstellen/ein_und_ausgaenge) pour commander des appareils externes, dont une avec relais 8A

- Entrée de contact sans potentiel pour signal tarifaire ou [entrée numérique](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS et IS-E

- Connexion de données chiffrée en temps réel vers le cloud smart-me


## Caractéristiques techniques

<Video src="" title="Custom embed" />

## Exigences techniques relatives aux transformateurs

Le Telstar CT permet d'utiliser les transformateurs de courant les plus divers. Les exigences de base sont les suivantes :

- Rapport de transformation : 1:1 à 20'000:1 à 5:5 à 20'000:5
    Le nombre secondaire peut être n'importe quel nombre entier entre 1 et 5.
    Le nombre primaire n'importe quel nombre entier entre 1 et 20'000.

- Courant de sortie : 1A à 5A

- Puissance de sortie : au moins 1VA ou plus (recommandation 5VA)

- Type : ouvert ou fermé

- Classe de précision : 1 ou meilleure\*


\*Si les compteurs doivent être utilisés à des fins de facturation, des transformateurs étalonnés sont nécessaires, satisfaisant au moins la classe 0.5 ou inférieure.

Tu trouveras des recommandations pour les transformateurs et les accessoires sur la page : [Transformateurs de courant et accessoires](/drittprodukte/Stromwandler) 

## Écran

Valeur / Symbole Description

1.8.1 Code OBIS du relevé du compteur affiché

T1 Tarif actif (tarif 1 ou tarif 2)

Flèche Sens du courant (à droite soutirage / à gauche injection)

Réception (barres) Intensité du signal WiFi

0000053.2 Relevé du compteur

5520W Puissance mesurée instantanément avec unité

kWh Unité du relevé du compteur affiché

M Fonction plus utilisée (peut être ignorée)

![Compteur d'énergie triphasé Telstar CT – Illustration 2](/img/produkte-telstar-ct/02.png)

Le compteur possède un affichage défilant. Les points décrits ci-dessous s'affichent l'un après l'autre. Après le dernier point, le premier point s'affiche à nouveau.

Relevé du compteur (code OBIS suivi du relevé du compteur) 

1.8.1 (A+) Énergie active soutirage tarif 1
1.8.2 (A+) Énergie active soutirage tarif 2
2.8.1 (A+) Énergie active injection tarif 1
2.8.2 (A+) Énergie active injection tarif 2
1.8.0:5A (A+) Énergie active totale soutirage base 5A
2.8.0:5A (A-) Énergie active totale injection base 5A
5.8.0 (Q1) Énergie réactive inductive soutirage totale
6.8.0 (Q2) Énergie réactive capacitive soutirage totale
7.8.0 (Q3) Énergie réactive inductive injection totale
8.8.0 (Q4) Énergie réactive capacitive injection totale

Facteur de transformation (code OBIS suivi d'informations)

0.4.2       Facteur de transformation (y c. impulsions S0 / kWh)

Firmware (code OBIS suivi d'informations)

C.1.6 Ch: 2218 Somme de contrôle du firmware
0.2.0 V 1.1 Version du firmware

Affichage des erreurs (code OBIS suivi des messages d'erreur)

C.60.9 Fraud Flag (tentative de fraude possible détectée)
PhL: 1 seule la phase L1 est raccordée
PhL: 2 seule la phase L2 est raccordée
PhL: 3 seule la phase L3 est raccordée
PhL: 23 phase L1 non raccordée
PhL: 13 phase L2 non raccordée
PhL: 12 phase L3 non raccordée
Ordre des phases correct : les chiffres s'allument de manière fixe
Ordre des phases incorrect : les chiffres clignotent

## Dimensions et raccordements

Les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP dans les téléchargements.

### Dimensions \[mm\]

![Compteur d'énergie triphasé Telstar CT – Illustration 3](/img/produkte-telstar-ct/03.png)

![Compteur d'énergie triphasé Telstar CT – Illustration 4](/img/produkte-telstar-ct/04.png)

### Schéma de raccordement

![Compteur d'énergie triphasé Telstar CT – Illustration 5](/img/produkte-telstar-ct/05.jpg)

## Définir le rapport de transformation sur le Telstar CT

1.  En haut à droite, sur le symbole de la roue dentée (Einstellungen) 

2.  Éditer (Editieren) 

3.  Réglages généraux (Allgemeine Einstellungen) 

4.  Saisir le rapport de transformation (Wandlerverhältnis eingeben) 

5.  Le rapport de transformation peut être verrouillé. Cela sert de protection contre les modifications non souhaitées par des personnes non autorisées. Pour déverrouiller le rapport de transformation, l'appareil doit être installé une nouvelle fois avec l'application smart-me. Lors de la réinstallation, la suppression n'est pas nécessaire.


Remarque : la saisie du rapport de transformation ne modifie pas les données historiques enregistrées. C'est pourquoi cette étape doit être effectuée immédiatement après la mise en service.

![Compteur d'énergie triphasé Telstar CT – Illustration 6](/img/produkte-telstar-ct/06.png)

## Fonctions des touches

![Compteur d'énergie triphasé Telstar CT – Illustration 7](/img/produkte-telstar-ct/07.png)

T1 Touche pour l'installation

Si la touche T1 est maintenue enfoncée pendant 10 secondes, cela crée un WiFi local pour l'installation

T1 + T2 Redémarrage

Appuyer simultanément sur les touches T1 et T2 pendant 10 secondes pour forcer un redémarrage.

T2 Fonctions spéciales

Court : si T2 est maintenue >2s, la lampe LED verte change d'état (de allumée à éteinte ou d'éteinte à allumée). Lorsqu'elle est activée, elle indique l'état de la connexion 

🟢 Vert allumé : connecté au cloud smart-me

 ☀︎ Vert clignotant : établissement de la connexion ou pas de connexion

Long : si T2 est maintenue >8s, l'affichage de la puissance bascule entre puissance active et puissance réactive. En outre, la LED d'impulsion d'étalonnage bascule entre énergie active et énergie réactive.

Très long : si T2 est maintenue >14s, la sortie d'impulsions S0-0 bascule entre puissance active et puissance réactive.

Remarque : ce réglage ne modifie que l'affichage sur l'écran, pas dans le cloud smart-me (application et site web). Si l'énergie réactive doit être affichée dans le cloud, cela doit être fait dans les réglages généraux. 

## LED

![Compteur d'énergie triphasé Telstar CT – Illustration 8](/img/produkte-telstar-ct/08.png)

🟢 LED verte - état de la connexion

- Indique l'état de la connexion au cloud smart-me. a) clignotante = erreur de connexion b) allumée en permanence = connexion OK


![Compteur d'énergie triphasé Telstar CT – Illustration 9](/img/produkte-telstar-ct/09.png)

🔴 LED rouge - LED d'impulsion

- Indique la puissance active ou réactive actuellement soutirée en 1000 impulsions/kWh resp. 1000 impulsions/kVArh. La touche T2 permet de régler si la puissance active ou réactive est affichée.


- Par exemple : une LED portant la mention « 1000 impulsions/kWh » clignote 1000 fois lorsque 1 kilowattheure (kWh) d'énergie a été soutiré ou injecté. Si les 1000 impulsions ont été comptées en 1 heure, une puissance constante de 1 kW a été mesurée.


## Configurer les entrées et les sorties

Le Telstar CT dispose de deux sorties numériques et d'une entrée numérique, qui peuvent être utilisées comme entrées et sorties d'impulsions ou comme contact commutable sans potentiel. Tu trouveras les détails à ce sujet sur la page wiki [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) 

Le Telstar CT dispose, sur une sortie numérique, d'un relais capable de commuter jusqu'à 8A.

## Technologie Mesh

En cas de réception WiFi très faible ou absente, le Telstar CT se connecte automatiquement, via la fonction Mesh, à un autre compteur voisin à portée. Celui-ci prend alors en charge la communication avec le cloud smart-me. La technologie Mesh garantit que les compteurs présentent une meilleure disponibilité vis-à-vis du cloud smart-me. Il n'est pas possible de désactiver la fonction Mesh sur le compteur. Lorsque [Modbus TCP](/schnittstellen/modbus-tcp) est activé, des restrictions spécifiques s'appliquent.

## Transformateurs et accessoires

Tu trouveras des recommandations pour les transformateurs et les accessoires sur la page : [Transformateurs de courant et accessoires](/drittprodukte/Stromwandler) 

Aucun de ces produits n'est vendu par smart-me AG ni proposé comme accessoire lors de l'achat. Merci d'acheter ces produits directement auprès du fabricant. 

### Informations d'expédition

Numéro d'article : 212062 

Nom de l'article : 3-Phasen Energiezähler Telstar CT MID Wifi

Numéro du tarif douanier : 9028.3019

Poids avec emballage : 315g

## Téléchargements et déclaration de conformité

[Fiche technique allemand](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Fiche technique anglais](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[Déclaration de conformité CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schéma de raccordement fichiers ZIP](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

### À quel intervalle les compteurs envoient-ils des données ?

- Toutes les 15 minutes, donc à xx:00:00 xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas de coupure de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- En outre, au moins toutes les 330 secondes.

- Ensuite, lorsque l'un des événements suivants se produit :

    - Variation du relevé du compteur supérieure à 100Wh

    - Variation de la puissance supérieure à 100W

    - Variation du courant supérieure à 1A

    - Variation de la tension supérieure à 1V

    - Chaque seconde, lorsque le compteur est sélectionné dans l'interface (portail smart-me)


### Puis-je remettre le relevé du compteur à zéro ?

Non, comme nos compteurs sont utilisés pour des facturations, il n'est pas possible de les réinitialiser.
