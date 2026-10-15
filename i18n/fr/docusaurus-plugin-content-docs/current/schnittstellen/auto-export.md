---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'smart-me offre la possibilité d''exporter automatiquement des données de mesure vers un autre système.'
sidebar_label: 'Auto Export'
---
smart-me offre la possibilité d'exporter automatiquement des données de mesure vers un autre système.

### Conditions préalables

Pour pouvoir utiliser Auto Export, vous devez disposer d'une licence smart-me Professional.

![Auto Export – figure 1](/img/schnittstellen-auto-export/01.png)

## Fonctions pour les partenaires Gold

Si un compte est associé à un partenaire Gold, l'utilisateur voit, en plus de ses propres « types de téléversement » (« Upload Arten ») et « formats d'export » (« Export Formate »), les « types de téléversement » et « formats d'export » déjà définis par le partenaire Gold. Ainsi, les paramètres FTP, par exemple, ne doivent être saisis que dans le compte partenaire et ne sont ni visibles ni modifiables pour l'utilisateur normal. 

Pour une meilleure identification, les paramètres hérités sont surlignés en bleu.

![Auto Export – figure 2](/img/schnittstellen-auto-export/02.jpg)

## Mutation en masse (relancer l'export)

Une mutation en masse permet de relancer les exports dans smart-me pour plusieurs appareils simultanément.

Voici comment fonctionne la saisie de la date :

Lors de la mutation, il faut saisir la date du dernier export réussi. À partir de là, le système calcule automatiquement la période suivante.

Exemple (export quotidien) :

- Vous saisissez la date 03.02.2026.

- Le système part du principe que l'export du 03.02.2026 s'est bien déroulé.

- Le système lance alors l'export pour le 04.02.2026 (contenu : données du 03.02.2026 de 00:00 à 23:59).


Tenez compte de la durée de traitement : la régénération des fichiers d'export prend du temps. À titre indicatif, comptez environ 45 minutes par fichier.

- Export quotidien : un mois entier (30 jours = 30 fichiers) prend environ 22 heures.

- Export hebdomadaire : un mois entier (4 semaines = 4 fichiers) prend environ 3 heures.


![Auto Export – figure 3](/img/schnittstellen-auto-export/03.png)

## Mutation en masse (remplacer l'ID de point de mesure)

La mutation en masse permet de remplacer rapidement et sans erreur des ID de point de mesure existants par de nouveaux.

Procédure :

- Créez un simple fichier CSV.

- Chaque ligne correspond à un point de mesure.

- Le fichier doit contenir l'ancien et le nouveau nom de l'ID de point de mesure, séparés par un point-virgule (;). Exemple : Alte\_ID\_123;Neue\_ID\_456

- Téléversez le fichier CSV. Les ID sont directement écrasés dans le système.


Remarque : un point de mesure qui ne figure pas dans le fichier CSV n'est pas modifié. Il est ainsi possible, sans problème, de n'effectuer qu'un remplacement partiel (p. ex. seulement 5 points de mesure sur 50 dans un compte).

![Auto Export – figure 4](/img/schnittstellen-auto-export/04.png)

## Type de téléversement (Upload Art)

<div className="row">
<div className="col col--5">

Le type de téléversement définit la manière dont les données doivent être chargées sur le système externe. Les types suivants sont actuellement pris en charge :

FTP : téléversement FTP (non chiffré)

FTPs : téléversement FTP chiffré

- Le port peut être indiqué explicitement avec un :, p. ex. ftp.smart-com:990

sFTP (with username and password) : téléversement FTP chiffré.

- Nom d'utilisateur et mot de passe

sFTP (avec fichier de clé, « mit Key File ») : téléversement FTP chiffré. Un fichier de clé est utilisé à la place d'un mot de passe.

- Exemple de création d'un fichier de clé sFTP avec openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Exemple : [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)

Remarque : le mot de passe ne doit pas contenir les caractères suivants (&lt;, >, =)

</div>
<div className="col col--7 text--center">

![Auto Export – figure 5](/img/schnittstellen-auto-export/05.jpg)

</div>
</div>

## Format d'export (Export Format)

Le format d'export définit le format de fichier de l'export. Les formats suivants sont actuellement pris en charge :

CSV : le format est défini (CSV), mais le contenu n'est pas normalisé.

- Export rudimentaire au format CSV. L'export des valeurs de compteur est défini au moyen de codes Obis. Pour plus de détails, voir la section ci-dessous.


IS-E : export vers un système innosolv-Energie d'Innosolv AG

- Relevé du compteur

- Relevé du compteur virtuel (s'il est calculé dans smart-me et que le dossier est sélectionné)


IS-E Vorschub / IS-E feed : export vers un système innosolv-Energie d'Innosolv AG

- Consommation

- Consommation virtuelle (si elle est calculée dans smart-me et que le dossier est sélectionné)


IS-E peak export

- Indique la puissance de pointe.

- Remarque : 1) Lors de l'affectation, sélectionnez le dossier avec les tarifs virtuels et 2) lors de l'affectation, sélectionnez sous valeurs de mesure à exporter « Tarifs virtuels (IS-E uniquement) » (« Virtuelle Tarife (nur IS-E) ») 3) Dans le format d'export, indiquez à chaque fois les numéros de tarifs virtuels (Export Tariffs (peak)) présents dans smart-me Billing.


IS-E Zeitreihen / IS-E Load profile : export vers un système innosolv-Energie d'Innosolv AG System der Innosolv AG

- Module de séries temporelles (consommation 15 minutes)

    - Only basic data (1 / 0)

        - 1 uniquement kWh

        - 0 kWh et kvar

        - vide kWh et kvar


mscons 2.2e : mscons (Metered Services Consumption report message) dans la version 2.2e.

Remarque : veuillez utiliser ce format avec encontrol.

- Consommation


mscons 2.4a : mscons (Metered Services Consumption report message) dans la version 2.4a

- Consommation


![Auto Export – figure 6](/img/schnittstellen-auto-export/06.jpg)

### Énergie réactive avec is-e load profile

<div className="row">
<div className="col col--4">

Réglez « Only basic data » sur 0 pour exporter l'énergie réactive

</div>
<div className="col col--8 text--center">

![Auto Export – figure 7](/img/schnittstellen-auto-export/07.jpg)

</div>
</div>

## Affectation (Zuordnung)

L'export automatique se compose de différentes configurations :

ID de point de mesure (Messpunkt ID) : définit l'ID qui doit être attribué à ce point de mesure. Cet ID est utilisé p. ex. dans le format d'export mscons.

Compteur ou dossier (Zähler oder Ordner) : le compteur ou le dossier à exporter.

Format d'export (Export Format) : définit le format qui peut être utilisé pour l'export. Le format d'export est défini sous le point de menu « Format d'export » (« Export Format »).

Type de téléversement (Upload Art) : indique la manière dont les données doivent être chargées dans le système externe. Le type de téléversement est défini sous le point de menu « Type de téléversement » (« Upload Art »).

Intervalle d'export (Export Intervall) : indique à quel intervalle les données doivent être exportées.

Déclencheur d'export (Export Auslöser) : définit le déclencheur de l'export.

- « Lorsque toutes les DONNÉES DE MESURE sont disponibles » (« Wenn alle MESSDATEN vorhanden sind ») se déclenche dès que toutes les données sont disponibles. Si elles ne sont jamais complètes (p. ex. parce que la valeur de départ était antérieure à l'installation), l'export ne se déclenchera jamais.

-  « 12h après la date de fin » (« 12h nach dem Enddatum ») se déclenche 12 heures plus tard, que toutes les données soient disponibles ou non.

- Remarque : Auto Export démarre entre 0:00 et 1:00 et peut durer jusqu'à 3h.


Date de début du prochain export (Start Datum nächster Export) : la date de début du prochain export des données. Si la date se situe dans le passé, toutes les données jusqu'à la date actuelle sont exportées.

Valeurs de mesure à exporter (Zu exportierende Messwerte) : si vous sélectionnez un dossier avec des tarifs virtuels, vous pouvez choisir d'exporter les valeurs de mesure normales ou les tarifs virtuels.

![Auto Export – figure 8](/img/schnittstellen-auto-export/08.png)

### Exporter des tarifs virtuels

Si vous avez configuré des tarifs virtuels dans smart-me Billing, vous pouvez les exporter vers IS-E. 

Configuration

1.  Créez les tarifs virtuels dans smart-me Billing.  Veillez à définir correctement le numéro de tarif du tarif virtuel. Celui-ci est codé lors de l'export comme « tarif » dans le code Obis. Exemple : le numéro de tarif 3 donne Obis : (relevés du compteur IS-E) 1-5:1.8.3 (1-5:1.8.&lt;numéro de tarif>), (IS-E Vorschub) 1-5:1.9.3 (1-5:1.9.&lt;numéro de tarif>)

2.  Dans « Auto Export », sous « Affectation » (« Zuordnung »), sélectionnez le dossier avec les tarifs virtuels et, sous « Valeurs de mesure à exporter » (« Zu exportierende Messwerte »), sélectionnez « Tarifs virtuels » (« Virtuelle Tarife »). 


![Auto Export – figure 9](/img/schnittstellen-auto-export/09.png)

## Fichiers de test

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing) : le fichier CSV peut être configuré individuellement. Le fichier de test a été généré avec la configuration  «1-0:1.8.0\*255;1-0:1.8.1\*255;1-0:1.8.2\*255;1-0:2.8.0\*255;1-0:2.8.1\*255;1-0:2.8.2\*255;».

- [IS-E Peak export](https://drive.google.com/file/d/1isUBF_2xUpr6h8AeRtkupJvFkuMMSJM4/view?usp=sharing) 


Codes Obis

Les codes OBIS servent à décrire une valeur (de compteur). 

[Codes Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Conseil pour le décodage : sur ce [site web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem), vous trouverez la systématique du codage. En cliquant sur un fluide, vous voyez ce que représentent les différents chiffres du code. 

![Auto Export – figure 10](/img/schnittstellen-auto-export/10.png)

Le fichier de test csv a été exporté avec la configuration ci-dessus.

## Codes Obis pris en charge

Les codes OBIS servent à décrire une valeur (de compteur) : [Codes Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Conseil pour le décodage : sur ce [site web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem), vous trouverez la systématique du codage. En cliquant sur un fluide, vous voyez ce que représentent les différents chiffres du code. 

### Codes Obis IS-E

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

5-1:1.0.0: Cold (énergie)

6-1:1.0.0: Heat (énergie)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)

### Codes Obis mscons

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

### Codes Obis CSV

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
