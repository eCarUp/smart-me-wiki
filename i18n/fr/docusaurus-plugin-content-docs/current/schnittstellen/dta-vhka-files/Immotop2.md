---
title: 'Configuration VHKA Immotop2'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Formats de fichier VHKA pris en charge par Immotop2'
sidebar_label: 'Configuration VHKA Immotop2'
---
## Formats de fichier VHKA pris en charge par Immotop2

- Format de fichier XML (standard DTA-VHKA)
    Requêtes par centre de coûts :
    \- relevés du compteur en m3 ou kWh par unité d'utilisation
    \- valeurs en pour mille par unité d'utilisation
    \- prix par unité d'utilisation


## Remarques essentielles sur le décompte avec Immotop2 et smart-me

- Le décompte et la répartition des coûts selon VEWA sont effectués dans le système smart-me.

- Chaque unité de décompte d'Immotop2 qui doit être interrogée doit exister de manière identique dans smart-me.

- Pour que le décompte soit correct, les baux ainsi que les vacances locatives doivent être saisis dans toutes les unités pour chaque période de décompte dans Immotop2 !

- Immotop2 ne prend en charge qu'une seule période de décompte par groupe de charges accessoires. L'électricité doit donc être décomptée sur la même période que toutes les autres charges accessoires.

- L'état locatif d'Immotop2 est synchronisé automatiquement avec smart-me.


## Remarques de configuration côté Immotop2

Pour qu'Immotop2 et smart-me puissent communiquer, les charges accessoires, les centres de coûts et les groupes de charges accessoires enregistrés doivent concorder.

### Créer les clés de répartition nécessaires dans Immotop2

Pour que les centres de coûts puissent être transmis correctement, il faut d'abord s'assurer que les clés nécessaires sont disponibles sur le mandant.

Dans l'onglet « Données de base » (Basisdaten), vous pouvez créer les clés de répartition correspondantes sous Définitions des clés de répartition (Verteilschlüssel-Definitionen).

Si les coûts doivent être gérés dans le logiciel Immotop2, la clé de répartition en pour mille est indiquée.

Pour l'électricité produite localement, la clé de répartition en CHF convient en premier lieu, dans tous les cas.

Clés de répartition généralement appropriées :

- Centre de coûts électricité du réseau : électricité du réseau selon les coûts en CHF

- Centre de coûts électricité solaire : électricité solaire selon les coûts en CHF

- Centre de coûts chaleur et eau chaude sanitaire combinées : quote-part de chauffage selon la consommation en pour mille

- Centre de coûts chaleur : chauffage selon la consommation en pour mille

- Centre de coûts eau chaude sanitaire : centre de coûts eau chaude sanitaire selon la consommation en pour mille


![Configuration VHKA Immotop2 – Illustration 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Configuration VHKA Immotop2 – Illustration 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Créer le groupe d'immeubles charges accessoires

La condition préalable à un décompte est un mandant existant avec des immeubles créés.

Dans la zone « Groupe d'immeubles CA » (LG-Gruppe-NK) de chaque immeuble ou groupe d'immeubles, vous pouvez saisir un nouveau groupe d'immeubles CA.
Celui-ci définit les périodes de décompte des charges accessoires ainsi que les immeubles auxquels ce groupe s'applique. 

- Plusieurs immeubles peuvent partager le même groupe d'immeubles CA, mais tous les coûts de ces immeubles doivent alors être regroupés sur un même compte de coûts.
    Les immeubles sont principalement gérés ensemble lorsqu'ils partagent le chauffage.


### 2\. Groupes de coûts (centres de coûts)

Dans la zone « Groupes de coûts » (Kostengruppen), vous pouvez créer les groupes de coûts.

Un groupe de coûts correspond au regroupement de plusieurs comptes de coûts qui doivent être répartis ensemble selon une clé de répartition commune.

Exemples de groupes de coûts :

- Groupe de coûts électricité du réseau

- Groupe de coûts électricité locale

- Groupe de coûts frais de chauffage (chaleur et eau chaude sanitaire combinées)

- Groupe de coûts eau froide


![Configuration VHKA Immotop2 – Illustration 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Configuration VHKA Immotop2 – Illustration 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Exemple de groupe de coûts pour une production de chaleur et d'eau chaude sanitaire qui se complètent

Pompe à chaleur avec production d'eau chaude sanitaire et corps de chauffe électrique (couplés)


Énergie utilisée : énergie électrique pour les deux
Fonctionnement : l'eau de chauffage traverse le chauffe-eau pour le stockage de chaleur

Groupe de coûts à créer :  

Frais de chauffage et d'eau chaude sanitaire
avec la clé de répartition quote-part de chaleur type 09 en pour mille ou selon le prix




Exemple de systèmes de production de chaleur et d'eau chaude sanitaire qui ne se complètent pas

Chauffage au mazout avec chauffe-eau électrique séparé


Énergie utilisée : énergie électrique pour le chauffe-eau, mazout pour le chauffage
Fonctionnement : pas de préchauffage de l'eau chaude sanitaire par le chauffage

Groupes de coûts à créer :

Frais de chauffage
avec la clé de répartition chauffage des locaux type 01 en pour mille ou selon le prix

Frais d'eau chaude sanitaire
avec la clé de répartition eau chaude sanitaire séparée type 02 en pour mille ou selon le prix



### 3\. Attribution comptes de coûts – groupes de coûts

Dans la zone « Attribution comptes de coûts – groupes de coûts » (Kostenkonten- Kostengruppen-Zuordnung), vous pouvez maintenant attribuer tous les comptes de coûts pertinents aux groupes de coûts.

À titre d'exemple, pour les frais de chauffage et d'eau chaude sanitaire, les comptes suivants seraient liés au groupe de coûts :

- Mazout

- Service du chauffage

- Entretien du brûleur

- Détartrage du chauffe-eau

- Électricité chauffe-eau

- ...


![Configuration VHKA Immotop2 – Illustration 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Charges accessoires de l'immeuble

Sur l'immeuble, vous pouvez ajouter le groupe d'immeubles CA sous l'onglet « Charges accessoires » (Nebenkosten).

C'est ici que sont définies les clés de répartition fixes ou variables pour le décompte.

Clés de répartition
Les clés de répartition disponibles dépendent des clés de répartition activées sous Mandant --> Charges accessoires (Mandant --> Nebenkosten). Si les clés de répartition pertinentes ne sont pas disponibles, vous pouvez définir des clés de répartition supplémentaires sous « Données de base » (Basisdaten) --> « Définitions des clés de répartition » (Verteilschlüsseldefinitionen).

Exemples :

Nom : Quote-part de chauffage selon la consommation
Unité : pour mille
Type : variable
Enregistrement société de relevé :
Chaleur totale (chauffage et eau chaude sanitaire ensemble, 09)



Nom : Électricité du réseau selon les coûts
Unité : CHF
Type : variable
Enregistrement société de relevé :
Électricité (06)



Nom : Électricité solaire selon les coûts
Unité : CHF
Type : variable
Enregistrement société de relevé :
Électricité (06)





1.  Activer les clés de répartition sur l'immeuble


![Configuration VHKA Immotop2 – Illustration 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Vérifier les clés de répartition activées

![Configuration VHKA Immotop2 – Illustration 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Attribuer les clés de répartition au groupe de coûts

![Configuration VHKA Immotop2 – Illustration 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Exporter le fichier DTA-VHKA depuis Immotop2

Une fois la configuration terminée, le fichier d'échange peut être créé sous Traitement (Verarbeitung).

Dans la configuration, vous pouvez définir précisément quels objets de l'immeuble doivent être interrogés. 

En règle générale, il suffit de tous les interroger.

Important : le format standard QP (DTA-VKA) doit être activé.

![Configuration VHKA Immotop2 – Illustration 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Configuration VHKA Immotop2 – Illustration 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Configuration VHKA Immotop2 – Illustration 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Effectuer la comptabilisation des centres de coûts dans Immotop2

Si des comptabilisations préalables sur les centres de coûts sont nécessaires dans Immotop2, vous pouvez les reprendre du CSV récapitulatif de chaque facture créée.

C'est généralement le cas pour l'électricité solaire, l'électricité du réseau et les coûts d'électricité de la pompe à chaleur / du chauffage / du chauffe-eau.

Pour la répartition de l'électricité solaire, cela sera souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, il existe généralement des factures externes qui peuvent être comptabilisées.

1.  Accédez au smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionnez l'immeuble

3.  Sélectionnez la période de facturation et créez une facture

4.  Une fois la facture de la période correspondante créée, ouvrez le CSV récapitulatif (Zusammenfassung CSV)


![Configuration VHKA Immotop2 – Illustration 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Configuration VHKA Immotop2 – Illustration 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Il contient les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, vous pouvez effectuer une comptabilisation dans Immotop2, puis la répartir correctement en pour mille à l'aide du fichier DTA-VHKA.

## Définir les clés externes à l'aide du fichier de requête

### 1\. Lier le fichier DTA-VHKA aux clés externes

1.  Ouvrez le fichier dans un éditeur

2.  Identifiez les Costcenter
    Pour chaque &lt;Costcenter>, un tarif d'énergie doit exister dans smart-me

    Ex. :
    Tarif eau froide : ID= 20
    Électricité heures pleines : ID = 23
    Électricité heures creuses : ID=24
    .
    Les tarifs peuvent être combinés automatiquement en saisissant le même ID pour plusieurs tarifs.


3.  Relier les Costunits aux unités de décompte
    Pour chaque unité de décompte dans smart-me, un ID du fichier doit être disponible. &lt;CostUnit>&lt;Id> doit maintenant être relié à l'appartement via les clés externes.

    Ex. :
    Appartement 3 1/2 pièces rez-de-chaussée droite P2 (103-0.2) = ID 90
    Appartement 3 1/2 pièces rez-de-chaussée droite P1 = ID 91


![Configuration VHKA Immotop2 – Illustration 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Relier les Costcenter (groupe de coûts) aux tarifs

Pour chaque &lt;Costcenter>, un tarif d'énergie doit exister dans smart-me

Ex. :
Tarif eau froide : ID= 20
Électricité heures pleines : ID = 23
Électricité heures creuses : ID=24



Les tarifs peuvent être combinés automatiquement en saisissant le même ID pour plusieurs tarifs.

Exemple centre de coûts tarif réseau combiné

- Attribuer le même ID aux heures creuses et aux heures pleines, p. ex. 23


![Configuration VHKA Immotop2 – Illustration 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Configuration VHKA Immotop2 – Illustration 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Relier les Costunits aux unités de décompte

Pour chaque unité de décompte dans smart-me, un ID du fichier doit être disponible. &lt;CostUnit>&lt;Id> doit maintenant être relié à l'appartement via les clés externes.



Se trouve tout en bas de la page de configuration dans le Billing.

![Configuration VHKA Immotop2 – Illustration 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Conditions générales pour un échange réussi

### État locatif

- Comme les états locatifs sont gérés par le logiciel Immotop2, smart-me saisit lors de l'importation le contrat ainsi que les vacances locatives et les reporte dans les adresses de facturation.



![Configuration VHKA Immotop2 – Illustration 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Surfaces habitables

- Comme les surfaces habitables ne sont actuellement pas reprises automatiquement du logiciel Immotop2, la surface habitable doit être tenue à jour côté smart-me.



![Configuration VHKA Immotop2 – Illustration 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Configurations côté smart-me pour l'indication des prix

- Pour que le prix puisse être calculé, la surface habitable doit être indiquée pour chaque unité de décompte.

- VEWA doit être activé et configuré avec les clés de répartition pour les coûts de base et les coûts variables par type d'énergie.

- Une période de décompte doit être saisie pour chaque type d'énergie. Les coûts doivent être gérés et, pour l'électricité, des tarifs valides doivent être saisis.


![Configuration VHKA Immotop2 – Illustration 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Téléverser et exporter le fichier DTA-VHKA dans smart-me

![Configuration VHKA Immotop2 – Illustration 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Configuration VHKA Immotop2 – Illustration 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  Dans le Billing, accédez à « Factures » (Rechnungen), puis à la zone « Exporter » (Exportieren)


2\. Sélectionnez le type d'export et téléversez le fichier via « Exporter » (Exportieren).

3\. Téléchargez le fichier complété sur votre ordinateur via « Télécharger » (Herunterladen).

### 8\. Importer le fichier DTA-VHKA dans Immotop2

![Configuration VHKA Immotop2 – Illustration 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Configuration VHKA Immotop2 – Illustration 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
