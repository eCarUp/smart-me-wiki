---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'smart-me offre la possibilité d''exporter automatiquement les données de mesure vers un autre système.'
sidebar_label: 'Auto Export'
---
smart-me offre la possibilité d'exporter automatiquement les données de mesure vers un autre système.

### Conditions préalables

Pour pouvoir utiliser Auto Export, tu dois disposer d'une licence smart-me Professional.

![Auto Export – Illustration 1](/img/schnittstellen-auto-export/01.png)

## Fonctions pour les partenaires Gold

Si un compte est rattaché à un partenaire Gold, l'utilisateur voit, en plus de ses propres «Types d'upload» (Upload Arten) et «Formats d'export» (Export Formate), ceux déjà définis par le partenaire Gold. Ainsi, les réglages FTP par exemple ne doivent être effectués que dans le compte partenaire et ne sont ni visibles ni modifiables pour l'utilisateur normal. 

Pour mieux les distinguer, les réglages hérités sont surlignés en bleu.

![Auto Export – Illustration 2](/img/schnittstellen-auto-export/02.jpg)

## Mutation de masse (relancer l'export)

Une mutation de masse permet de relancer l'export dans smart-me pour plusieurs appareils simultanément.

Voici comment fonctionne la saisie de la date :

Lors de la mutation, il faut indiquer la date du dernier export réussi. Le système calcule automatiquement la période suivante à partir de là.

Exemple (export quotidien) :

- Tu saisis la date 03.02.2026.

- Le système part du principe que l'export du 03.02.2026 s'est bien déroulé.

- Le système lance maintenant l'export pour le 04.02.2026 (contenu : données du 03.02.2026 de 00:00 à 23:59).


Tenir compte de la durée du traitement : la recréation des fichiers d'export prend du temps. Compter environ 45 minutes par fichier à titre indicatif.

- Export quotidien : un mois entier (30 jours = 30 fichiers) dure environ 22 heures.

- Export hebdomadaire : un mois entier (4 semaines = 4 fichiers) dure environ 3 heures.


![Auto Export – Illustration 3](/img/schnittstellen-auto-export/03.png)

## Mutation de masse (remplacer l'ID du point de mesure)

La mutation de masse permet de remplacer rapidement et sans erreur les ID de points de mesure existants par de nouveaux.

Marche à suivre :

- Crée un simple fichier CSV.

- Chaque ligne correspond à un point de mesure.

- Le fichier doit contenir l'ancien et le nouveau nom de l'ID du point de mesure, séparés par un point-virgule (;). Exemple : Alte\_ID\_123;Neue\_ID\_456

- Téléversez le fichier CSV. Les ID sont écrasés directement dans le système.


Remarque : si un point de mesure ne figure pas dans le fichier CSV, il n'est pas modifié. Il est donc tout à fait possible de n'effectuer qu'un remplacement partiel (par ex. seulement 5 points de mesure sur 50 dans un compte).

![Auto Export – Illustration 4](/img/schnittstellen-auto-export/04.png)

## Type d'upload

Le type d'upload définit la manière dont les données doivent être chargées sur le système externe. Les types suivants sont actuellement pris en charge :

FTP : upload FTP (non chiffré)

FTPs : upload FTP chiffré

- Le port peut être indiqué explicitement avec un :. Par ex. ftp.smart-com:990


sFTP (with username and password) : upload FTP chiffré.

- Nom d'utilisateur et mot de passe


sFTP (avec Key File) : upload FTP chiffré. Un fichier de clé est utilisé à la place d'un mot de passe.

- Exemple de création d'un sFTP Key File avec openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Exemple : [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)




![Auto Export – Illustration 5](/img/schnittstellen-auto-export/05.jpg)

## Format d'export

Le format d'export définit le format de fichier utilisé pour l'export. Les formats suivants sont actuellement pris en charge :

CSV : le format est défini (CSV), mais le contenu n'est pas normalisé.

- Export rudimentaire au format CSV. L'export des valeurs de compteur est défini au moyen de codes Obis. Détails dans la section ci-dessous.


IS-E : export vers un système innosolv-Energie d'Innosolv AG

- Relevé du compteur

- Relevé du compteur virtuel (s'il est calculé dans smart-me et que le dossier est sélectionné)


IS-E Vorschub / IS-E feed : export vers un système innosolv-Energie d'Innosolv AG

- Consommation

- Consommation virtuelle (si elle est calculée dans smart-me et que le dossier est sélectionné)


IS-E peak export

- Indique la puissance de pointe.

- Remarque : 1) lors de l'affectation, sélectionner le dossier avec les tarifs virtuels et 2) sous les valeurs de mesure à exporter, choisir «Tarifs virtuels (uniquement IS-E)» (Virtuelle Tarife (nur IS-E)) 3) dans le format d'export, indiquer à chaque fois les numéros de tarifs virtuels (Export Tariffs (peak)) présents dans smart-me Billing.


IS-E Zeitreihen / IS-E Load profile : export vers un système innosolv-Energie d'Innosolv AG système d'Innosolv AG

- Module de séries temporelles (consommation 15 minutes)

    - Only basic data (1 / 0)

        - 1 uniquement kWh

        - 0 kWh et kvar

        - vide kWh et kvar


mscons 2.2e : mscons (Metered Services Consumption report message) dans la version 2.2e.

Remarque : merci d'utiliser ce format pour encontrol.

- Consommation


mscons 2.4a : mscons (Metered Services Consumption report message) dans la version 2.4a

- Consommation


![Auto Export – Illustration 6](/img/schnittstellen-auto-export/06.jpg)

### Énergie réactive avec is-e load profile

Régler «Only basic data» sur 0 pour exporter l'énergie réactive

![Auto Export – Illustration 7](/img/schnittstellen-auto-export/07.jpg)

## Affectation

L'export automatique se compose de différentes configurations :

ID du point de mesure : définit l'ID à attribuer à ce point de mesure. Cet ID est utilisé par exemple dans le format d'export mscons.

Compteur ou dossier : le compteur ou le dossier à exporter.

Format d'export : définit le format utilisable pour l'export. Le format d'export se définit sous le point de menu «Format d'export» (Export Format).

Type d'upload : indique comment les données doivent être chargées dans le système externe. Le type d'upload se définit sous le point de menu «Type d'upload» (Upload Art).

Intervalle d'export : indique à quel intervalle les données doivent être exportées.

Déclencheur de l'export : définit le déclencheur de l'export.

- «Lorsque toutes les DONNÉES DE MESURE sont disponibles» (Wenn alle MESSDATEN vorhanden sind) déclenche dès que toutes les données sont disponibles. Si elles ne sont jamais complètes (par ex. parce que la valeur de départ était antérieure à l'installation), le déclenchement n'aura jamais lieu.

-  «12 h après la date de fin» (12h nach dem Enddatum) déclenche 12 heures plus tard, que toutes les données soient disponibles ou non.

- Remarque : l'Auto Export démarre entre 0:00 et 1:00 et peut durer jusqu'à 3 h.


Date de début du prochain export : la date de début du prochain export des données. Si la date se situe dans le passé, toutes les données sont exportées jusqu'à la date actuelle.

Valeurs de mesure à exporter : si tu sélectionnes un dossier avec des tarifs virtuels, tu peux choisir d'exporter les valeurs de mesure normales ou les tarifs virtuels.

![Auto Export – Illustration 8](/img/schnittstellen-auto-export/08.png)

### Exporter les tarifs virtuels

Si tu as configuré des tarifs virtuels dans smart-me Billing, tu peux les exporter vers IS-E. 

Configuration

1.  Crée les tarifs virtuels dans smart-me Billing.  Veille à définir correctement le numéro de tarif du tarif virtuel. Celui-ci est codé lors de l'export comme «Tarif» dans le code Obis. Exemple : le numéro de tarif 3 donne l'Obis : (relevés du compteur IS-E) 1-5:1.8.3 (1-5:1.8.&lt;numéro de tarif>), (IS-E Vorschub) 1-5:1.9.3 (1-5:1.9.&lt;numéro de tarif>)

2.  Dans «Auto Export», sous «Affectation» (Zuordnung), sélectionne le dossier contenant les tarifs virtuels et choisis «Tarifs virtuels» (Virtuelle Tarife) sous «Valeurs de mesure à exporter» (Zu exportierende Messwerte). 


![Auto Export – Illustration 9](/img/schnittstellen-auto-export/09.png)

## Test Files

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing) : le fichier CSV peut être configuré individuellement. Le fichier de test a été généré avec la configuration  «1-0:1.8.0\*255;1-0:1.8.1\*255;1-0:1.8.2\*255;1-0:2.8.0\*255;1-0:2.8.1\*255;1-0:2.8.2\*255;».

- [IS-E Peak export](https://drive.google.com/file/d/1isUBF_2xUpr6h8AeRtkupJvFkuMMSJM4/view?usp=sharing) 


Codes Obis

Les codes OBIS sont utilisés pour décrire une valeur (de compteur). 

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Astuce pour le décodage : sur ce [site web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem), tu peux consulter la systématique du codage. Si tu y cliques sur un média, tu vois à quoi correspond chaque chiffre du code. 

![Auto Export – Illustration 10](/img/schnittstellen-auto-export/10.png)

Le fichier de test csv a été exporté avec la configuration ci-dessus.

## Codes Obis pris en charge

Les codes OBIS sont utilisés pour décrire une valeur (de compteur) : [Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Astuce pour le décodage : sur ce [site web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem), tu peux consulter la systématique du codage. Si tu y cliques sur un média, tu vois à quoi correspond chaque chiffre du code. 

### Code Obis IS-E

1-1:1.8.0: Active Energy Total Import

1-1:1.8.1:  Active Energy Tariff 1 Import

1-1:1.8.2:  Active Energy Tariff 2 Import

1-1:2.8.0:  Active Energy Total Export

1-1:2.8.1:  Active Energy Tariff 1 Export

1-1:2.8.2:  Active Energy Tariff 2 Export

1-1:5.8.0:  Reactive Energy Q1

1-1:6.8.0:  Reactive Energy Q2

1-1:7.8.0:  Reactive Energy Q3

1-1:8.8.0:  Reactive Energy Q4

5-1:1.0.0: Cold (Energie)

6-1:1.0.0: Heat (Energie)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)

### Code Obis mscons

1-1:1.29.0\*255: Active Energy Total Import (load profile)

1-1:2.29.0\*255:  Active Energy Total Export (load profile)

1-1:5.29.0\*255:  Reactive Energy Q1 (load profile)

1-1:6.29.0\*255:  Reactive Energy Q2 (load profile)

1-1:7.29.0\*255:  Reactive Energy Q3 (load profile)

1-1:8.29.0\*255:  Reactive Energy Q4 (load profile)

5-1:1.29.0\*255: Cold (load profile)

6-1:1.29.0\*255: Heat (load profile)

8-1:1.29.0\*255: Cold water (load profile)

9-1:1.29.0\*255: Hot water (load profile)

### Code Obis CSV

1-0:1.8.0\*255: Active Energy Total Import

1-0:1.8.1\*255: Active Energy Tariff 1 Import

1-0:1.8.2\*255: Active Energy Tariff 2 Import

1-0:2.8.0\*255: Active Energy Total Export

1-0:2.8.1\*255: Active Energy Tariff 1 Export

1-0:2.8.2\*255: Active Energy Tariff 2 Export

1-1:5.8.0\*255: Reactive Energy Q1

1-1:6.8.0\*255: Reactive Energy Q2

1-1:7.8.0\*255: Reactive Energy Q3

1-1:8.8.0\*255: Reactive Energy Q4

6-0:1.0.0\*255: Heat Energy

5-0:1.0.0\*255: Cold Energy

8-0:1.0.0\*255: Cold Water Volume

9-0:1.0.0\*255: Hot Water Volume
