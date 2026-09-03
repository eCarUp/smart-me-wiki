---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Montage sur plaque de montage de compteur selon DIN43857-1'
sidebar_label: 'Compteur triphasé Nimbus 100A'
---
![smart-me Nimbus 100A – Illustration 1](/img/produkte-nimbus/01.png)

[Bornes enfichables pour Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Fonctions

- Montage sur plaque de montage de compteur selon DIN43857-1

- Communication vers le cloud smart-me : WLAN 2.4 GHz

- Compatible avec les bornes enfichables de compteur (p. ex. Hager et Seidl)

- Interface client DSMR P1 V5.0.2

- [Installation](/konfiguration/inbetriebnahme) avec l'application smart-me gratuite.

- Facturation avec l'[outil smart-me Billing](/konfiguration/billing)

- Commande par [actions si/alors](/konfiguration/wenndann-aktionen) ou [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualisations](/konfiguration/visualisierung)

- [Interfaces](/) du système via API, CSV, MSCONS et IS-E

- Liaison de données chiffrée en temps réel vers le cloud smart-me 

- Courbe de charge signée (valeurs 15 min) selon OCMF


### Un ancrage sûr pour votre solution blockchain

Le compteur Nimbus a été conçu comme un « oracle matériel » de confiance, afin de résoudre le problème critique de l'oracle lors du raccordement d'appareils IoT à des systèmes décentralisés.

Le processus de signature ECDSA :

1.  Clé matérielle : une clé privée est générée sur un coprocesseur cryptographique et ne le quitte à aucun moment.

2.  Signature on the Edge : toutes les 15 minutes, les relevés du compteur (format OCMF) sont signés avec la clé privée par ECDSA sur la base d'une fonction de hachage SHA-256.

3.  Provenance vérifiable : le résultat est un paquet de données doté d'une signature numérique. Grâce à la clé publique du compteur, toute application peut vérifier sans aucun doute que les données sont authentiques et n'ont pas été modifiées.


Le Nimbus offre ainsi une garantie de sécurité basée sur le matériel, supérieure aux solutions purement logicielles, et constitue la base parfaite pour des plateformes de négoce P2P robustes, des communautés électriques locales (CEL) et d'autres services énergétiques décentralisés.

## Caractéristiques techniques

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4UWY0pXsfUBgArWNNkGZGvIscStumVrGrU7_h2DGk1YNe_XYOxPLnZoJlARRCO86Fz-aOo0cb0pGh/pubhtml?gid=0&range=A1:B30&single=true&widget=false&headers=false&chrome=false" aspect="1.214" title="Compteur triphasé Nimbus 100A" />

## Écran

![smart-me Nimbus 100A – Illustration 2](/img/produkte-nimbus/02.jpg)

Valeur / symbole Description

1.8.0 Code OBIS du relevé de compteur affiché

Q1 Quadrant actuel (Q1-Q4)

Flèche Sens de l'énergie (à droite soutirage / à gauche injection)

Réception (barres) Qualité du signal WLAN

0000053.2 Relevé du compteur

5520W Puissance mesurée instantanément avec unité (w ou var)

kWh Unité du relevé de compteur affiché (kWh ou varh)

### Écran défilant

![smart-me Nimbus 100A – Illustration 3](/img/produkte-nimbus/03.jpg)

Relevé du compteur (code OBIS suivi du relevé) 

1.8.0 (A+) Énergie active soutirage total
2.8.0 (A+) Énergie active injection total
5.8.0 (Q1) Énergie réactive inductive soutirage total
6.8.0 (Q2) Énergie réactive capacitive soutirage total
7.8.0 (Q3) Énergie réactive inductive injection total
8.8.0 (Q4) Énergie réactive capacitive injection total

![smart-me Nimbus 100A – Illustration 4](/img/produkte-nimbus/04.jpg)

Affichage des erreurs (code OBIS suivi des messages d'erreur)

C.60.9 Messages d'erreur (la page n'est affichée que si des erreurs sont présentes)

- PhL Erreur de câblage (mauvais ordre des phases ou phases non câblées)
    123 : mauvais ordre des phases. 1, 2 et 3 clignotent.
    1 : seule la phase L1 est raccordée. 2 et 3 clignotent.
    2 : seule la phase L2 est raccordée. 1 et 3 clignotent.
    3 : seule la phase L3 est raccordée. 1 et 2 clignotent.
    12 : seules les phases L1 et L2 sont raccordées. 3 clignote.
    1  3 : seules les phases L1 et L3 sont raccordées. 2 clignote.
    23 : seules les phases L2 et L3 sont raccordées. 1 clignote.

- F:F:0 ( n'est affiché que si l'une des erreurs ci-dessous est présente)
    0x00 : aucune erreur
    0xX2 : le compteur Nimbus n'est pas calibré
    0xX4 : erreur du microprocesseur, le compteur doit être remplacé
    0xX8 : erreur logicielle, le compteur doit être remplacé
    0xX6 non calibré et erreur du microprocesseur, le compteur doit être remplacé
    0xXA : non calibré et erreur logicielle, le compteur doit être remplacé
    0xXC : erreur du microprocesseur et erreur logicielle, le compteur doit être remplacé
    0xXE : non calibré, erreur du microprocesseur et erreur logicielle, le compteur doit être remplacé
    0x1X : journal plein

- Symbole Meter Manipulation (aimant) :  code OBIS C.51.6  le compteur a été influencé négativement.

- Symbole couvercle de bornier ouvert ( « G ») :  code OBIS C.51.2  le couvercle de bornier est ouvert.





Firmware (code OBIS suivi des informations)

C.1.6 762A Somme de contrôle de la partie firmware MID
0.2.1 V 1.1 Version du firmware de la partie MID.

### Fonctions spéciales de l'écran

![smart-me Nimbus 100A – Illustration 5](/img/produkte-nimbus/05.jpg)

Courbe de charge (valeurs 15 min)

Ouvrir et quitter la mémoire :

- Pour accéder à la mémoire, appuyez sur la touche d'affichage T1 pendant 3-4 secondes.

- Pour quitter la mémoire, appuyez de nouveau sur la touche d'affichage T1 pendant 3-4 secondes ou attendez 60 secondes.

- Pour passer d'une valeur à la suivante, appuyez brièvement sur la touche d'affichage.


Courbe de charge :

- 1.8.0 et 2.8.0 : codes OBIS représentés dans la mémoire

- 0001 : numéro d'entrée dans la mémoire 

- Première ligne : 1.8.0 énergie active positive (soutirage) 

- Deuxième ligne : 2.8.0 énergie active négative (injection)

- Date et heure de l'entrée


![smart-me Nimbus 100A – Illustration 6](/img/produkte-nimbus/06.jpg)

![smart-me Nimbus 100A – Illustration 7](/img/produkte-nimbus/07.jpg)

Journal 

Ouvrir le journal :

- Appuyer sur la touche d'affichage pendant 7-8 secondes en mode normal.


Saisie du mot de passe pour l'affichage du journal :

L'utilisateur du compteur NIMBUS reçoit le mot de passe du fournisseur.

- Une brève pression sur la touche augmente le premier chiffre de 1.
    Si le chiffre est à 9, il repasse à 0 à la prochaine pression sur la touche.

- Si la touche n'est pas pressée pendant 2 - 3 secondes, le passage au chiffre suivant se fait automatiquement. Ce chiffre clignote et un nombre quelconque peut à nouveau être défini.

- Une fois le 4e chiffre défini, la saisie du mot de passe se termine après 2 - 3 secondes et le mot de passe est vérifié.

- Si le mot de passe est correct, l'image SMART-ME LOGBOOK s'affiche.

- Si le mot de passe n'est pas correct, le mot de passe « FALSE » s'affiche pendant quelques secondes et l'affichage revient en mode normal sur 

- S'il n'y a encore aucun message dans le journal (Total : NO ENTRY), l'affichage revient en mode normal sur l'image 2 ou 3.


Quitter l'affichage du journal :

- Pour quitter le journal, la touche d'affichage doit être maintenue enfoncée pendant env. 3 - 4 secondes. 

- Si la touche d'affichage n'est pas pressée dans les 60 secondes, l'affichage revient également en mode normal sur l'image 2 ou 3.


C.60.9 :  code OBIS du message actuellement affiché 

- 0001  :  numéro du message enregistré, 0001 est le message le plus récent.

- 8192  :  nombre maximal de messages possibles dans le journal.
    Lorsque le nombre maximal de messages possibles est enregistré dans le journal, aucun autre message n'est enregistré ⇨ LOGBOOK FULL.
    En cas de LOGBOOK FULL, toute autre modification des paramètres relevant de la métrologie légale n'est plus possible sans porter atteinte au scellement métrologique.


- Deuxième et troisième ligne :
    identifiant et type du message affiché.

- Quatrième ligne : date et heure du message


Informations du journal :

- Mise à niveau du firmware (New Firmware)

- Couvercle de bornier ouvert ou fermé (Open, close terminal cover)

- Manipulation détectée et levée (Start, End Meter Manipulation)

- Erreur de câblage détectée (Set, End Connection)

- Nouvelle version du firmware MID (New MID part)

- Heure redéfinie (Time: OLD --> NEW)

- Redémarrage du compteur (Meter OFF--> ON)

- Le compteur a reçu une nouvelle calibration (New Meter Calibartion)

- Journal des événements plein (Last Stored Data, Logbook full)


## Dimensions et raccordements

![smart-me Nimbus 100A – Illustration 8](/img/produkte-nimbus/08.png)

## Schéma de raccordement

Câblage

Les câbles, conducteurs rigides et conducteurs souples de 4-35 mm2 sont autorisés comme lignes d'alimentation. Les conducteurs souples ne doivent être montés qu'avec des embouts adaptés. Vous trouverez de plus amples informations sur les lignes de raccordement dans le Quickstarter-Guide.



Empreinte de vis : Torx 25



Avant l'installation, les lignes d'alimentation doivent être mises hors tension et protégées contre toute manipulation.






Raccordement avec conducteur neutre bouclé

![smart-me Nimbus 100A – Illustration 9](/img/produkte-nimbus/09.png)

Schéma de raccordement avec conducteur neutre d'excitation
(le conducteur neutre peut être nettement plus petit que L1, L2 ou L3)

![smart-me Nimbus 100A – Illustration 10](/img/produkte-nimbus/10.png)

## Fonctions des touches

Touche 1 (T1)

Pour connecter le compteur à un compte smart-me, la touche 1 est maintenue enfoncée pendant 10 secondes lors de la mise en service avec l'application smart-me. Un réseau Wifi spécifique à l'appareil est ensuite créé, auquel le téléphone mobile peut se connecter afin d'y enregistrer les données d'accès Wifi.

Touche 2 (T2)

La touche 2 permet d'ouvrir le journal et la courbe de charge. Pour afficher la courbe de charge, la touche 2 doit être maintenue enfoncée pendant 4 secondes. Le mot de passe peut ensuite être saisi. Le chiffre actuellement sélectionné est indiqué par un clignotement. Pour modifier ce chiffre, une brève pression sur la touche 2 suffit. Après 10 secondes, l'affichage passe d'une position vers l'arrière.

Les mots de passe d'accès comportent 4 chiffres.

Si le mot de passe est correct, la dernière entrée de la courbe de charge s'affiche. Pour afficher l'entrée suivante, une brève pression sur la touche 2 est nécessaire. Si la touche 2 n'est pas pressée pendant 60 secondes, l'affichage revient à l'affichage du relevé du compteur.

P1 Interface

Prise RJ-12 pour modules P1

EX1

Interface pour commande de contacteurs externe (pas encore prise en charge)

EX2

Emplacement pour modules de communication alternatifs
(pas encore pris en charge)

L1

LED de statut - s'allume de manière fixe en cas de connexion au cloud smart-me

L2

LED d'impulsion - indique la puissance actuellement mesurée en 10'000 imp / kWh

La LED d'impulsion peut afficher l'énergie active et l'énergie réactive. Pour passer de la puissance active à la puissance réactive ou inversement, la touche T2 doit être pressée 10 fois à 1 seconde d'intervalle. Le fait de savoir si la puissance active ou réactive est actuellement affichée sur la LED est indiqué sur la ligne inférieure de l'écran.

![smart-me Nimbus 100A – Illustration 11](/img/produkte-nimbus/11.png)

## P1 Interface (interface client)

L'interface P1 du Nimbus permet aux fournisseurs tiers ou aux clients finaux de réutiliser les données mesurées dans leurs propres systèmes de commande ou d'analyse.

Un module de lecture d'interface P1 avec connecteur RJ-12 est nécessaire pour cela.
Celui-ci doit prendre en charge le « P1 Companion Standard » de Netbeheer Nederland, version 5.0.2 (26 février 2016).

Tension :  5V DC, charge maximale :  100mA DC, isolation renforcée par rapport au réseau

[En savoir plus](/schnittstellen/p1-schnittstelle)

## Accessoires

- [Bornes enfichables de compteur](/drittprodukte/zaehlersteckklemmen-nimbus-100A) - pour un changement de compteur simple sans coupure de courant


## Nettoyage

Nettoyez le boîtier de l'appareil avec un chiffon sec. N'utilisez pas de produits de nettoyage chimiques ! 

## Consignes d'entretien et de garantie

L'appareil ne nécessite aucun entretien. En cas de dommages (p. ex. dus au transport, au stockage), aucune réparation ne doit être effectuée par vos propres moyens. L'ouverture de l'appareil annule le droit à la garantie. Il en va de même si un défaut est imputable à des influences extérieures (p. ex. foudre, eau, incendie, températures et conditions météorologiques extrêmes) ainsi qu'en cas d'utilisation ou de manipulation inappropriée ou négligente. Les plombs ne doivent être brisés que par des personnes autorisées ! 

## Informations d'expédition

Numéro d'article : 242065

Nom de l'article : smart-me 3-Phasen Zähler Nimbus 100A

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

### Puis-je remettre le relevé du compteur à zéro ?

Non, comme nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.
