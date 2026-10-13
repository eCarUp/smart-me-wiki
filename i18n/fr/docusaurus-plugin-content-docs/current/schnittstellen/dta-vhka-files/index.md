---
title: 'Import / export de fichiers DTA-VHKA (bêta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Description générale de l''interface'
sidebar_label: 'Fichiers DTA-VHKA'
---
## Description générale de l'interface

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung, soit l'échange de supports de données pour le décompte des frais de chauffage et d'eau chaude sanitaire en fonction de la consommation) désigne l'interface d'échange électronique des données de consommation entre les entreprises de décompte et les gérances immobilières.

Une interface uniforme dans toute la Suisse pour l'import des données de consommation dans les logiciels de gérance garantit efficacité et flexibilité.
Ainsi, les gérances immobilières peuvent collaborer avec toutes les entreprises de relevé, quel que soit le logiciel qu'elles utilisent.

## Consignes de travail concernant les fichiers VHKA

- L'état locatif est géré dans le logiciel immobilier. Dans le portail smart-me, les contrats et les logements vacants sont repris automatiquement sous « Destinataires des factures » ("Rechnungsempfänger").

- L'état locatif dans le logiciel immobilier doit être complet ; les logements vacants doivent impérativement être transmis.


## Description du processus d'import et d'export DTA-VHKA

1.  Exporter le fichier de demande VHKA de l'immeuble depuis le logiciel immobilier.
    Le fichier est créé sur la base d'une période de décompte (date de début, date de fin) d'un immeuble.
    Ce fichier contient alors, pour chaque locataire de l'immeuble au cours de cette période et pour chaque unité de décompte existante, une demande portant sur :


- La consommation de l'unité de comptage en kWh ou m3

- La valeur en pour mille de la somme des coûts répartis
    (VEWA doit être configuré dans smart-me)

- La valeur en pour mille des coûts de base et des coûts variables
    (VEWA doit être configuré dans smart-me)

- Le prix, dans une devise, des coûts accumulés, sous forme de somme ou répartis en coûts de base et coûts variables.
    (VEWA doit être configuré dans smart-me)


2.  Les unités de décompte et les centres de coûts correspondants doivent pouvoir être mis en correspondance dans les deux logiciels. Cela se fait à l'aide des clés externes dans smart-me.

3.  Le fichier de demande VHKA exporté peut ensuite être téléversé dans smart-me Billing.

4.  smart-me Billing calcule les consommations des différentes unités de décompte par type d'énergie et complète le fichier téléversé avec les données.

5.  Le fichier complété avec les données est à nouveau exporté.

6.  Le fichier VHKA complété peut maintenant être téléversé à nouveau dans le logiciel immobilier.


![Import / export de fichiers DTA-VHKA (bêta) – Figure 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formats actuellement pris en charge

- XML (standard DTA-VHKA)


### Téléverser et télécharger le fichier

![Import / export de fichiers DTA-VHKA (bêta) – Figure 2](/img/schnittstellen-dta-vhka-files/02.png)

![Import / export de fichiers DTA-VHKA (bêta) – Figure 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  Dans Billing, accédez à « Factures » ("Rechnungen"), puis à la section « Exporter » ("Exportieren")


2\. Sélectionnez le type d'export et téléversez le fichier via « Exporter » ("Exportieren").

3\. Téléchargez le fichier complété sur votre ordinateur via « Télécharger » ("Herunterladen").

## Liaison des centres de coûts avec les tarifs énergétiques et les unités d'habitation smart-me

Pour que la liaison entre le logiciel de gérance et l'immeuble smart-me fonctionne, des centres de coûts et des unités d'habitation correspondants doivent être créés dans les deux systèmes.

Ceux-ci sont à leur tour reliés une seule fois, au moyen des numéros d'ID du fichier de mandat, aux tarifs et aux unités d'habitation dans smart-me.

L'aperçu ci-dessous s'applique de manière générale à tous les systèmes de gérance immobilière.

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts correspond à un système tarifaire

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide

![Import / export de fichiers DTA-VHKA (bêta) – Figure 4](/img/schnittstellen-dta-vhka-files/04.png)

Centres de coûts pour l'électricité

![Import / export de fichiers DTA-VHKA (bêta) – Figure 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts combine plusieurs tarifs

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide en cas de combinaison

Combinaisons :

- Chaleur et eau chaude sanitaire

- Chaleur + eau chaude sanitaire + froid


![Import / export de fichiers DTA-VHKA (bêta) – Figure 6](/img/schnittstellen-dta-vhka-files/06.png)

Centres de coûts pour l'électricité combinée

Combinaisons les plus fréquentes :

- Centre de coûts électricité du réseau : tarifs HT et NT + électricité de pointe

- Centre de coûts électricité locale : tarifs électricité solaire HT + électricité solaire NT 


![Import / export de fichiers DTA-VHKA (bêta) – Figure 7](/img/schnittstellen-dta-vhka-files/07.png)

### Relier les centres de coûts aux tarifs énergétiques (définir les clés VKA)

Des clés externes sont nécessaires pour mettre en correspondance les unités de décompte et les centres de coûts du fichier de demande avec les tarifs et les unités de décompte de la plateforme smart-me. 

Remarque :
Tant qu'aucune modification n'intervient du côté du logiciel immobilier (locaux ou centres de coûts supplémentaires), les clés externes sont statiques et ne doivent pas être renouvelées à chaque fois.

![Import / export de fichiers DTA-VHKA (bêta) – Figure 8](/img/schnittstellen-dta-vhka-files/08.png)

Pour que les centres de coûts du fichier de mandat VHKA puissent être attribués de manière univoque, un tarif correspondant doit être défini et relié dans le portail smart-me pour chaque agent énergétique demandé.

La liaison se fait via la clé externe (Externer Schlüssel) du tarif créé.

Si plusieurs tarifs sont reliés au même centre de coûts, plusieurs tarifs reçoivent simplement le même ID de centre de coûts.

Individuel :
Centre de coûts électricité du réseau (ID= 6) --> Tarif unique réseau ( clé externe = 6)

Combiné :
Centre de coûts électricité du réseau (ID= 6) \-->  heures pleines ( clé externe = 6) et heures creuses (clé externe = 6)

Remarque : 

- Si des tarifs d'électricité sont transmis de manière combinée, les prix des tarifs électriques doivent être saisis dans smart-me !

- Pour les tarifs de chaleur et d'eau combinés, les coûts ne sont pas nécessaires dans smart-me.


![Import / export de fichiers DTA-VHKA (bêta) – Figure 9](/img/schnittstellen-dta-vhka-files/09.png)

## Logiciels compatibles et consignes de configuration spécifiques

Logiciels immobiliers qui prennent en charge le standard DTA-VHKA.
Liste selon Qualipool : [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/Immotop2)

- Rimo R5 (instructions Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/Garaio-REM)

- [Abaimmo](/schnittstellen/dta-vhka-files/AbaImmo)


## Traitement des messages d'erreur
