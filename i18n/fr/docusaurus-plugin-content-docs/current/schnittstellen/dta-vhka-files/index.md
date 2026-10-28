---
title: 'Importation / exportation de fichiers DTA-VHKA (bêta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Description générale de l''interface'
sidebar_label: 'Fichiers DTA-VHKA'
---
<Menueweg>Facturation → Établir une facture → Exporter</Menueweg>

## Description générale de l'interface

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung, échange de supports de données pour le décompte des frais de chauffage et d'eau chaude sanitaire en fonction de la consommation) est le nom de l'interface permettant l'échange électronique de données de consommation entre les entreprises de décompte et les gérances immobilières.

Une interface uniforme dans toute la Suisse pour l'importation des données de consommation dans les logiciels de gérance garantit efficacité et flexibilité.
Les gérances immobilières peuvent ainsi collaborer avec toutes les entreprises de relevé, quel que soit le logiciel qu'elles utilisent.

## Consignes de travail en lien avec les fichiers VHKA

- L'état locatif est géré dans le logiciel immobilier. Dans le portail smart-me, les contrats et les vacances locatives sont automatiquement repris sous « Destinataires de facture » (Rechnungsempfänger).

- L'état locatif dans le logiciel immobilier doit être complet ; les vacances locatives doivent impérativement être transmises.


## Description du processus d'importation et d'exportation DTA-VHKA

1.  Exportez le fichier de demande VHKA de l'immeuble depuis le logiciel immobilier.
    Le fichier est créé sur la base d'une période de décompte (date de début, date de fin) d'un immeuble.
    Ce fichier contient alors une requête pour chaque locataire de l'immeuble au cours de cette période et pour chaque unité de décompte existante concernant :


- La consommation de l'unité de compteur en kWh ou m3

- La valeur en pour mille de la somme des coûts répartis
    (VEWA doit être configuré dans smart-me)

- La valeur en pour mille des coûts de base et des coûts variables
    (VEWA doit être configuré dans smart-me)

- Le prix, dans une devise, des coûts cumulés sous forme de somme ou répartis en coûts de base et coûts variables.
    (VEWA doit être configuré dans smart-me)


2.  Les unités de décompte et les centres de coûts correspondants doivent pouvoir être mis en correspondance dans les deux logiciels. Cela se fait à l'aide des clés externes dans smart-me.

3.  Le fichier de demande VHKA exporté peut ensuite être téléversé dans smart-me Billing.

4.  smart-me Billing calcule les consommations des différentes unités de décompte par type d'énergie et remplit le fichier téléversé avec les données.

5.  Le fichier complété par les données est à nouveau exporté.

6.  Le fichier VHKA complété peut maintenant être téléversé à nouveau dans le logiciel immobilier.


![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formats actuellement pris en charge

- XML (standard DTA-VHKA)


### Téléverser et télécharger un fichier

![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 2](/img/schnittstellen-dta-vhka-files/02.png)

![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  Dans Billing, accédez à « Factures » (Rechnungen), puis à la section « Exporter » (Exportieren)


2\. Sélectionnez le type d'exportation et téléversez le fichier avec « Exporter » (Exportieren).

3\. Téléchargez le fichier complété sur votre ordinateur avec « Télécharger » (Herunterladen).

## Lien entre les centres de coûts, les tarifs d'énergie smart-me et les unités d'habitation

Pour que la liaison entre le logiciel de gérance et l'immeuble smart-me fonctionne, des centres de coûts et des unités d'habitation correspondants doivent être créés dans les deux systèmes.

Ceux-ci sont à leur tour reliés une seule fois aux tarifs et aux unités d'habitation dans smart-me au moyen des numéros d'ID du fichier de mandat.

L'aperçu ci-dessous s'applique en principe à tous les systèmes de gérance immobilière.

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts correspond à un système tarifaire

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide

![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 4](/img/schnittstellen-dta-vhka-files/04.png)

Centres de coûts pour l'électricité

![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts combine plusieurs tarifs

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide en cas de combinaison

Combinaisons :

- Chaleur et eau chaude sanitaire

- Chaleur + eau chaude sanitaire + froid


![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 6](/img/schnittstellen-dta-vhka-files/06.png)

Centres de coûts pour l'électricité combinée

Combinaisons les plus fréquentes :

- Centre de coûts électricité du réseau : tarifs heures pleines et heures creuses + électricité de pointe

- Centre de coûts électricité locale : tarifs électricité solaire heures pleines + électricité solaire heures creuses 


![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 7](/img/schnittstellen-dta-vhka-files/07.png)

### Relier les centres de coûts aux tarifs d'énergie (définir les clés VKA)

Les clés externes sont nécessaires pour mettre en correspondance les unités de décompte et les centres de coûts du fichier de demande avec les tarifs et les unités de décompte de la plateforme smart-me. 

Remarque :
Tant qu'aucune modification n'intervient du côté du logiciel immobilier (locaux ou centres de coûts supplémentaires), les clés externes sont statiques et ne doivent pas être renouvelées à chaque fois.

![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 8](/img/schnittstellen-dta-vhka-files/08.png)

Pour que les centres de coûts du fichier de mandat VHKA puissent être attribués sans ambiguïté, un tarif correspondant doit être défini et relié dans le portail smart-me pour chaque agent énergétique demandé.

La liaison s'effectue via la clé externe respective du tarif créé.

Si plusieurs tarifs sont reliés au même centre de coûts, plusieurs tarifs reçoivent simplement le même ID de centre de coûts.

Individuel :
Centre de coûts électricité du réseau (ID= 6) --> Tarif unique réseau ( Clé externe = 6)

Combiné :
Centre de coûts électricité du réseau (ID= 6) \-->  Heures pleines ( Clé externe = 6) et heures creuses (Clé externe = 6)

Remarque : 

- Si les tarifs d'électricité sont transmis de manière combinée , les prix des tarifs électriques doivent être saisis dans smart-me !

- Pour les tarifs de chaleur et d'eau combinés, les coûts ne sont pas nécessaires dans smart-me.


![Importation / exportation de fichiers DTA-VHKA (bêta) – Figure 9](/img/schnittstellen-dta-vhka-files/09.png)

## Logiciels compatibles et consignes de configuration spécifiques

Logiciels immobiliers qui prennent en charge le standard DTA-VHKA.
Liste selon Qualipool : [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/immotop2)

- Rimo R5 (instructions Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/garaio-rem)

- [Abaimmo](/schnittstellen/dta-vhka-files/abaimmo)


## Traiter les messages d'erreur
