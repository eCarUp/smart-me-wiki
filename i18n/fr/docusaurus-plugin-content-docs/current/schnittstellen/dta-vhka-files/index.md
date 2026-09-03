---
title: 'DTA-VHKA Files Import / Export (Beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Description générale de l''interface'
sidebar_label: 'DTA-VHKA Files'
---
## Description générale de l'interface

DTA-VHKA (échange de supports de données pour le décompte des frais de chauffage et d'eau chaude selon la consommation) est la désignation de l'interface pour l'échange électronique de données de consommation entre les entreprises de décompte et les gérances immobilières.

Une interface uniforme à l'échelle de la Suisse pour l'importation des données de consommation dans les logiciels de gérance garantit efficacité et flexibilité.
Les gérances immobilières peuvent ainsi collaborer avec toutes les entreprises de relevé, indépendamment du logiciel utilisé.

## Consignes de travail en lien avec les fichiers VHKA

- L'état locatif est tenu à jour dans le logiciel immobilier. Dans le portail smart-me, les contrats et les logements vacants sont repris automatiquement sous « Destinataires de facture » (Rechnungsempfänger).

- L'état locatif dans le logiciel immobilier doit être complet, les logements vacants doivent impérativement être transmis.


## Description du processus d'import et d'export DTA-VHKA

1.  Exporter le fichier de demande VHKA pour l'immeuble depuis le logiciel immobilier.
    Le fichier est créé sur la base d'une période de décompte (date de début, date de fin) d'un immeuble.
    Ce fichier contient alors une requête pour chaque locataire de l'immeuble à l'intérieur de cette période, pour chaque unité de décompte existante, portant sur :


- La consommation de l'unité de comptage en kWh ou m3

- La valeur en pour-mille de la somme des coûts répartis
    (VEWA doit être configuré dans smart-me)

- La valeur en pour-mille des coûts de base et des coûts variables
    (VEWA doit être configuré dans smart-me)

- Le prix dans une monnaie des coûts cumulés, sous forme de somme ou réparti entre coûts de base et coûts variables.
    (VEWA doit être configuré dans smart-me)


2.  Les unités de décompte et les centres de coûts correspondants doivent pouvoir être mis en correspondance dans les deux logiciels. Cela se fait à l'aide des clés externes dans smart-me.

3.  Le fichier de demande VHKA exporté peut ensuite être téléversé dans smart-me Billing.

4.  smart-me Billing calcule les consommations des différentes unités de décompte par type d'énergie et complète le fichier téléversé avec ces données.

5.  Le fichier complété par ces données est à nouveau exporté.

6.  Le fichier VHKA complété peut maintenant être téléversé à nouveau dans le logiciel immobilier.


![DTA-VHKA Files Import / Export (Beta) – Illustration 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formats actuellement pris en charge

- XML (standard DTA-VHKA)


### Téléverser et télécharger le fichier

![DTA-VHKA Files Import / Export (Beta) – Illustration 2](/img/schnittstellen-dta-vhka-files/02.png)

![DTA-VHKA Files Import / Export (Beta) – Illustration 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  Dans Billing, navigue vers « Factures » (Rechnungen) puis dans la zone « Exporter » (Exportieren)


2\. Sélectionne le type d'export et téléverse le fichier au moyen de « Exporter » (Exportieren).

3\. Télécharge le fichier complété sur ton ordinateur au moyen de « Télécharger » (Herunterladen).

## Liaison des centres de coûts avec les tarifs énergétiques smart-me et les unités d'habitation

Pour que la liaison entre le logiciel de gérance et l'immeuble smart-me fonctionne, des centres de coûts et des unités d'habitation correspondants doivent être créés dans les deux systèmes.

Ceux-ci sont à leur tour reliés une seule fois aux tarifs et aux unités d'habitation dans smart-me au moyen des numéros d'identification issus du fichier de commande.

Fondamentalement, l'aperçu ci-dessous s'applique à tous les systèmes de gérance immobilière.

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts = un système tarifaire

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide

![DTA-VHKA Files Import / Export (Beta) – Illustration 4](/img/schnittstellen-dta-vhka-files/04.png)

Centres de coûts pour l'électricité

![DTA-VHKA Files Import / Export (Beta) – Illustration 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centres de coûts et liaisons tarifaires lorsqu'un centre de coûts = plusieurs tarifs combinés

Centres de coûts pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide en cas de combinaison

Combinaisons :

- Chaleur et eau chaude sanitaire

- Chaleur + eau chaude sanitaire + froid


![DTA-VHKA Files Import / Export (Beta) – Illustration 6](/img/schnittstellen-dta-vhka-files/06.png)

Centres de coûts en cas d'électricité combinée

Combinaisons les plus fréquentes :

- Centre de coûts électricité du réseau : tarifs heures pleines et heures creuses + électricité de pointe

- Centre de coûts électricité locale : tarifs électricité solaire heures pleines + électricité solaire heures creuses 


![DTA-VHKA Files Import / Export (Beta) – Illustration 7](/img/schnittstellen-dta-vhka-files/07.png)

### Relier les centres de coûts aux tarifs énergétiques (définir la clé VKA)

Les clés externes sont nécessaires pour la mise en correspondance des unités de décompte et des centres de coûts du fichier de demande avec les tarifs et les unités de décompte de la plateforme smart-me. 

Remarque :
Tant qu'aucune modification n'intervient du côté du logiciel immobilier (locaux ou centres de coûts supplémentaires), les clés externes sont statiques et ne doivent pas être renouvelées à chaque fois.

![DTA-VHKA Files Import / Export (Beta) – Illustration 8](/img/schnittstellen-dta-vhka-files/08.png)

Pour que les centres de coûts du fichier de commande VHKA puissent être attribués de manière univoque, un tarif correspondant doit être défini et relié dans le portail Smart-me pour chaque agent énergétique demandé.

La liaison se fait via la clé externe respective du tarif créé.

Si plusieurs tarifs sont reliés au même centre de coûts, plusieurs tarifs reçoivent simplement le même ID de centre de coûts.

Séparément :
Centre de coûts électricité du réseau (ID= 6) --> Tarif unique réseau ( clé externe = 6)

Combiné :
Centre de coûts électricité du réseau (ID= 6) \--> Heures pleines ( clé externe = 6) et heures creuses (clé externe = 6)

Remarque : 

- Si les tarifs d'électricité sont transmis de manière combinée, les prix des tarifs électriques doivent être enregistrés dans smart-me !

- Pour les tarifs de chaleur et d'eau en combinaison, les coûts ne sont pas nécessaires dans smart-me.


![DTA-VHKA Files Import / Export (Beta) – Illustration 9](/img/schnittstellen-dta-vhka-files/09.png)

## Logiciels compatibles et consignes de configuration spécifiques

Logiciels immobiliers prenant en charge le standard DTA-VHKA.
Liste selon Qualipool : [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/Immotop2)

- Rimo R5 (instructions Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/Garaio-REM)

- [Abaimmo](/schnittstellen/dta-vhka-files/AbaImmo)


## Traiter les messages d'erreur
