---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus-100a'
description: 'Montage sur plaque de montage pour compteur selon DIN43857-1'
sidebar_label: 'Compteur triphasé Nimbus 100A'
---
![smart-me Nimbus 100A – Illustration 1](/img/produkte-nimbus-100a/01.png)

## Accessoires optionnels

[Bornes enfichables de compteur pour Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100a)

## Fonctions

- Montage sur plaque de montage pour compteur selon DIN43857-1

- Communication avec le cloud smart-me : WLAN 2.4 GHz

- Compatible avec les bornes enfichables de compteur (p. ex. Hager et Seidl)

- Interface client DSMR P1 V5.0.2

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Facturation avec le [smart-me Billing Tool](/konfiguration/billing)

- Commande avec des [actions si/alors](/konfiguration/wenndann-aktionen) ou des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Interfaces](/) du système via API, CSV, MSCONS et IS-E

- Connexion de données chiffrée en temps réel vers le cloud smart-me 

- Courbe des relevés du compteur signée (valeurs 15 min) selon OCMF

### Un ancrage sûr pour votre solution blockchain

Le compteur Nimbus a été conçu comme un « oracle matériel » digne de confiance, afin de résoudre le problème critique de l'oracle lors du raccordement d'appareils IoT à des systèmes décentralisés.

Le processus de signature ECDSA :

1.  Clé matérielle : une clé privée est générée sur un coprocesseur cryptographique et ne le quitte à aucun moment.

2.  Signature on the Edge : toutes les 15 minutes, les relevés du compteur (format OCMF) sont signés avec la clé privée par ECDSA au moyen d'une fonction de hachage SHA-256.

3.  Origine vérifiable : le résultat est un paquet de données doté d'une signature numérique. À l'aide de la clé publique du compteur, toute application peut vérifier sans aucun doute que les données sont authentiques et non modifiées.

Le Nimbus offre ainsi une garantie de sécurité basée sur le matériel, supérieure aux solutions purement logicielles, et constitue la base idéale pour des plateformes d'échange P2P robustes, des communautés électriques locales (CEL) et d'autres services énergétiques décentralisés.

## Données techniques

| Caractéristique | Valeur |
| --- | --- |
| Certification du produit | CE, MID 2014/32/EU, CH-Lastgang / Blindenergie, RED 2014/53/EU |
| Classe de précision pour l'énergie active/énergie réactive | B (MID) / 2 (IEC) |
| Normes appliquées | EN50470-1:2006, EN 50470-3:2006 |
| Direction | +A (soutirage), -A (injection), +R, -R |
| Quadrants | Q1, Q2, Q3, Q4 |
| Tension du réseau | 3x230/400VAC 50Hz |
| Plage de mesure du courant Imin-Iref(Imax) | 0.25-5(100)A |
| Sections de câble des bornes | 2.5-35 mm2 |
| Catégorie de l'appareil de mesure | CAT III |
| Interface client | DSMR P1 V5.0.2 , prise RJ12 |
| Plage de température (fonctionnement, stockage et transport) | -25°C à +70°C |
| Humidité relative de l'air | Moyenne annuelle 75%, sans condensation<br />brièvement 95%, sans condensation |
| Altitude | jusqu'à 2000m |
| Valeurs mesurées | Énergie active (kWh), puissance active (kW)<br />Énergie réactive (kvarh), puissance réactive (kvar)<br />Courant (A), tension (V), facteur de puissance (cosφ) |
| Autoconsommation par phase | < 0.8W |
| Tarifs | tarifs virtuels illimités dans le cloud smart-me |
| Sortie de test optique | 10'000 Imp/kWh |
| Communication | WLAN IEEE 802.11 b/g/n (2.4 GHz)<br />LTE CAT-M1 (module enfichable, optionnel) |
| Norme de sécurité WLAN | WEP, WPA-PSK/WPA2-PSK |
| Mémoire de données (journal & courbe des relevés du compteur) | 9 mois |
| Sécurité des données | AES-128 CBC, courbe des relevés du compteur 15 min signée, format OCMF |
| Boîtier | Indice de protection : IP51 (monté sur plaque de montage)<br />Matériau du boîtier : polycarbonate renforcé de fibres de verre<br />Dimensions : L:171mm H:236mm P:59mm |
| Conditions ambiantes | M1, E2, intérieur |
| Montage | Plaque de compteur selon DIN 43857-1 |
| Emplacement des serveurs | Suisse |
| Classe de protection | II |
| Tension assignée de tenue aux chocs (Uimp, Safety) | 6 kV |
| Catégorie d'utilisation | UC 2 |
| Dernière modification | 24.09.2025 |

## Écran

<div className="row">
<div className="col col--6 bild--mitte">

![smart-me Nimbus 100A – Illustration 2](/img/produkte-nimbus-100a/02.jpg)

</div>
<div className="col col--6">

**Valeur / symbole Description**

- 1.8.0 Code OBIS\-du relevé du compteur affiché

- Q1 Quadrant actuel (Q1-Q4)

- Flèche Direction de l'énergie (droite soutirage / gauche injection)

- Réception (barres) Qualité du signal WLAN

- 0000053.2 Relevé du compteur

- 5520W Puissance mesurée instantanée avec unité (w ou var)

- kWh Unité du relevé du compteur affiché (kWh ou varh)

</div>
</div>

### Affichage défilant

<div className="row">
<div className="col col--6 bild--mitte">

![smart-me Nimbus 100A – Illustration 3](/img/produkte-nimbus-100a/03.jpg)

</div>
<div className="col col--6">

**Relevé du compteur (code OBIS suivi du relevé du compteur)**

- 1.8.0 (A+) Énergie active soutirage total
- 2.8.0 (A+) Énergie active injection total
- 5.8.0 (Q1) Énergie réactive inductive soutirage total
- 6.8.0 (Q2) Énergie réactive capacitive soutirage total
- 7.8.0 (Q3) Énergie réactive inductive injection total
- 8.8.0 (Q4) Énergie réactive capacitive injection total

</div>
</div>

![smart-me Nimbus 100A – Illustration 4](/img/produkte-nimbus-100a/04.jpg)

**Affichage des erreurs (code OBIS suivi des messages d'erreur)**

C.60.9 Messages d'erreur (la page ne s'affiche qu'en présence d'erreurs)

- PhL Erreur de câblage (ordre des phases incorrect ou phases non câblées)

    123: Ordre des phases incorrect. 1, 2 et 3 clignotent.

    1 : Seule la phase L1 est raccordée. 2 et 3 clignotent.

    2 : Seule la phase L2 est raccordée. 1 et 3 clignotent.

    3 : Seule la phase L3 est raccordée. 1 et 2 clignotent.

    12 : Seules les phases L1 et L2 sont raccordées. 3 clignote.

    1  3 : Seules les phases L1 et L3 sont raccordées. 2 clignote.

    23 : Seules les phases L2 et L3 sont raccordées. 1 clignote.

- F:F:0 ( s'affiche uniquement si l'une des erreurs ci-dessous est présente)

    0x00: Aucune erreur

    0xX2: Le compteur Nimbus n'est pas étalonné

    0xX4: Erreur du microprocesseur, le compteur doit être remplacé

    0xX8: Erreur logicielle, le compteur doit être remplacé

    0xX6 Non étalonné et erreur du microprocesseur, le compteur doit être remplacé

    0xXA: Non étalonné et erreur logicielle, le compteur doit être remplacé

    0xXC: Erreur du microprocesseur et erreur logicielle, le compteur doit être remplacé

    0xXE: Non étalonné, erreur du microprocesseur et erreur logicielle, le compteur doit être remplacé

    0x1X: Journal plein

- Symbole Meter Manipulation (aimant) :  code OBIS C.51.6  Le compteur a subi une influence négative.

- Symbole couvercle des bornes ouvert ( "G") :  code OBIS C.51.2  Le couvercle des bornes est ouvert.

**Firmware (code OBIS suivi d'informations)**

- C.1.6 762A Somme de contrôle de la partie MID du firmware
- 0.2.1 V 1.1 Version du firmware de la partie MID.

### Fonctions spéciales de l'écran

![smart-me Nimbus 100A – Illustration 5](/img/produkte-nimbus-100a/05.jpg)

**Courbe des relevés du compteur (valeurs 15 min)**

Ouvrir et quitter la mémoire :

- Pour accéder à la mémoire, appuyez sur la touche d'affichage T1 pendant 3-4 secondes.

- Pour quitter la mémoire, appuyez à nouveau sur la touche d'affichage T1 pendant 3-4 secondes ou attendez 60 secondes.

- Pour passer d'une valeur à la suivante, appuyez brièvement sur la touche d'affichage.

**Courbe des relevés du compteur :**

- 1.8.0 et 2.8.0 : codes OBIS représentés dans la mémoire

- 0001 : numéro de l'entrée dans la mémoire 

- Première ligne : 1.8.0 Énergie active positive (soutirage) 

- Deuxième ligne : 2.8.0 Énergie active négative (injection)

- Date et heure de l'entrée

![smart-me Nimbus 100A – Illustration 6](/img/produkte-nimbus-100a/06.jpg)

![smart-me Nimbus 100A – Illustration 7](/img/produkte-nimbus-100a/07.jpg)

**Journal**

**Ouvrir le journal :**

- En mode normal, appuyez sur la touche d'affichage pendant 7-8 secondes.

**Saisie du mot de passe pour l'affichage du journal :**

L'utilisateur du compteur NIMBUS reçoit le mot de passe de la part du fournisseur.

- Une brève pression sur la touche augmente le premier chiffre de 1.

    Si le chiffre est à 9, il repasse à 0 à la pression suivante.

- Si la touche n'est pas pressée pendant 2 - 3 secondes, l'affichage passe automatiquement au chiffre suivant. Ce chiffre clignote et peut à nouveau être réglé sur n'importe quelle valeur.

- Une fois le 4e chiffre réglé, la saisie du mot de passe se termine après 2 - 3 secondes et le mot de passe est vérifié.

- Si le mot de passe est correct, l'écran SMART-ME LOGBOOK s'affiche.

- Si le mot de passe est incorrect, le mot de passe “FALSE” s'affiche pendant quelques secondes et l'affichage revient en mode normal sur 

- Si le journal ne contient encore aucun message (Total : NO ENTRY), l'affichage revient en mode normal sur l'écran d'affichage 2 ou 3.

**Quitter l'affichage du journal :**

- Pour quitter le journal, la touche d'affichage doit être maintenue enfoncée en continu pendant env. 3 - 4 secondes. 

- Si la touche d'affichage n'est pas pressée dans les 60 secondes, l'affichage revient également en mode normal sur l'écran d'affichage 2 ou 3.

C.60.9 :  code OBIS du message actuellement affiché 

- 0001  :  numéro du message enregistré ; 0001 est le message le plus récent.

- 8192  :  nombre maximal de messages possibles dans le journal.

    Lorsque le nombre maximal de messages possibles est enregistré dans le journal, plus aucun autre message n'est enregistré ⇨ LOGBOOK FULL.

    En cas de LOGBOOK FULL, toute autre modification des paramètres pertinents pour la métrologie légale n'est plus possible sans violer le scellement métrologique.

- Deuxième et troisième lignes :

    Identifiant et type du message affiché.

- Quatrième ligne : date et heure du message

**Informations du journal :**

- Mise à niveau du firmware (New Firmware)

- Couvercle des bornes ouvert ou fermé (Open, close terminal cover)

- Manipulation détectée et levée (Start, End Meter Manipulation)

- Erreur de câblage détectée (Set, End Connection)

- Nouvelle version du firmware MID (New MID part)

- Heure redéfinie (Time: OLD --> NEW)

- Redémarrage du compteur (Meter OFF--> ON)

- Le compteur a reçu un nouvel étalonnage (New Meter Calibartion)

- Journal des événements plein (Last Stored Data, Logbook full)

## Dimensions et raccordements

![smart-me Nimbus 100A – Illustration 8](/img/produkte-nimbus-100a/08.png)

## Schéma de raccordement

**Câblage**

Les câbles, conducteurs rigides et conducteurs souples entre 4-35 mm2 sont admis comme lignes d'alimentation. Les conducteurs souples ne peuvent être montés qu'avec des embouts adaptés. Vous trouverez de plus amples informations sur les lignes de raccordement dans le Quickstarter-Guide.

Empreinte de vis : Torx 25

Avant l'installation, les lignes d'alimentation doivent être mises hors tension et protégées contre toute manipulation.

Raccordement avec neutre bouclé

![smart-me Nimbus 100A – Illustration 9](/img/produkte-nimbus-100a/09.png)

Schéma de raccordement avec neutre d'excitation
(le neutre peut être nettement plus petit que L1, L2 ou L3)

![smart-me Nimbus 100A – Illustration 10](/img/produkte-nimbus-100a/10.png)

## Fonctions des touches

Touche 1 (T1)

Pour relier le compteur à un compte smart-me, la touche 1 est pressée pendant 10 secondes lors de la mise en service avec l'application smart-me. Un Wifi propre à l'appareil est alors créé, auquel le téléphone mobile peut se connecter afin d'y enregistrer les identifiants d'accès Wifi.

Touche 2 (T2)

La touche 2 permet d'ouvrir le journal et la courbe des relevés du compteur. Pour afficher la courbe des relevés du compteur, la touche 2 doit être pressée pendant 4 secondes. Le mot de passe peut ensuite être saisi. La position actuellement sélectionnée est signalée par un clignotement. Pour modifier ce chiffre, la touche 2 peut être brièvement pressée. Après 10 secondes, l'affichage passe à la position suivante.

Les mots de passe d'accès comportent 4 chiffres.

Si le mot de passe est correct, la dernière entrée de la courbe des relevés du compteur s'affiche. Pour afficher l'entrée suivante, la touche 2 doit être brièvement pressée. Si la touche 2 n'est pas pressée pendant 60 secondes, l'affichage revient à l'affichage du relevé du compteur.

- **P1 Interface**

- **Prise RJ-12 pour modules P1**

- **EX1** - Interface pour la commande de contacteurs externes (pas encore prise en charge)

- **EX2** - Emplacement pour modules de communication alternatifs (pas encore pris en charge)

- **L1** - LED d'état - allumée en continu en cas de connexion au cloud smart-me

- **L2** - LED d'impulsions - indique la puissance actuellement mesurée en 10'000 Imp / kWh

La LED d'impulsions peut afficher l'énergie active et l'énergie réactive. Pour passer de la puissance active à la puissance réactive ou inversement, la touche T2 doit être pressée 10 fois à 1 s d'intervalle. La ligne inférieure de l'écran indique si la LED affiche actuellement la puissance active ou réactive.

![smart-me Nimbus 100A – Illustration 11](/img/produkte-nimbus-100a/11.png)

## P1 Interface (interface client)

La P1 Interface du Nimbus permet à des fournisseurs tiers ou à des clients finaux de réutiliser les données mesurées dans leurs propres systèmes de commande ou d'analyse.

Un module de lecture d'interface P1 avec connecteur RJ-12 est nécessaire à cet effet.
Celui-ci doit prendre en charge le “P1 Companion Standard” de Netbeheer Nederland. Version 5.0.2 (26.Februar.2016).

Tension :  5V DC, charge maximale :  100mA DC, isolation renforcée par rapport au réseau

[En savoir plus](/schnittstellen/p1-schnittstelle)

## Accessoires

- [Bornes enfichables de compteur](/drittprodukte/zaehlersteckklemmen-nimbus-100a) - pour remplacer facilement des compteurs sans interruption de courant

## Nettoyage

Nettoyez le boîtier de l'appareil avec un chiffon sec. N'utilisez aucun produit de nettoyage chimique ! 

## Remarques sur l'entretien et la garantie

L'appareil ne nécessite aucun entretien. En cas de dommages (p. ex. dus au transport ou au stockage), aucune réparation ne doit être effectuée par vous-même. L'ouverture de l'appareil entraîne l'extinction du droit à la garantie. Il en va de même si un défaut est dû à des influences extérieures (p. ex. foudre, eau, incendie, températures et conditions météorologiques extrêmes) ainsi qu'en cas d'utilisation ou de manipulation inappropriée ou négligente. Les plombs ne doivent être brisés que par des personnes autorisées ! 

## Informations d'expédition

Numéro d'article : 242065

Désignation de l'article : smart-me 3-Phasen Zähler Nimbus 100A

Numéro de tarif douanier : 9028.3019

Dimensions et poids sans emballage de livraison : 25.5x18x7 \[cm\] / 1.1kg

Fabricant : smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Mise en service

[En savoir plus](/konfiguration/inbetriebnahme)

## Téléchargements et déclaration de conformité

[Fiche technique allemand](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Fiche technique anglais](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Déclaration de conformité](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Schéma de raccordement et schéma électrique \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, comme nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

</details>
