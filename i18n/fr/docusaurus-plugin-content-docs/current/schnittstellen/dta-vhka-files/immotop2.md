---
title: 'Configuration VHKA Immotop2'
slug: '/schnittstellen/dta-vhka-files/immotop2'
description: 'Formats de fichiers VHKA pris en charge par Immotop2'
sidebar_label: 'Configuration VHKA Immotop2'
---
## Formats de fichiers VHKA pris en charge par Immotop2

- Format de fichier XML (standard DTA-VHKA)
    Requêtes par centre de coûts :
    \- Relevés du compteur en m3 ou kWh par unité d'utilisation
    \- Valeurs en pour mille par unité d'utilisation
    \- Prix par unité d'utilisation


## Remarques essentielles sur le décompte avec Immotop2 et smart-me

- Le décompte et la répartition des coûts selon VEWA s'effectuent dans le système smart-me.

- Chaque unité de décompte d'Immotop2 devant faire l'objet d'une requête doit exister de manière concordante dans smart-me.

- Pour que le décompte soit correct, les baux ainsi que les logements vacants doivent être saisis dans toutes les unités d'Immotop2 pour chaque période de décompte !

- Immotop2 ne prend en charge qu'une seule période de décompte par groupe de charges accessoires ; l'électricité doit donc être décomptée sur la même période que toutes les autres charges accessoires.

- L'état locatif d'Immotop2 est synchronisé automatiquement avec smart-me.


## Remarques de configuration côté Immotop2

Pour qu'Immotop2 et smart-me puissent communiquer, les charges accessoires, centres de coûts et groupes de charges accessoires enregistrés doivent concorder.

### Création des clés de répartition nécessaires dans Immotop2

Pour que les centres de coûts puissent être transmis correctement, il faut d'abord s'assurer que les clés nécessaires sont disponibles sur le mandant.

Dans l'onglet « Données de base » (Basisdaten), les clés de répartition correspondantes peuvent être créées sous « Définitions des clés de répartition » (Verteilschlüssel-Definitionen).

Si les coûts doivent être gérés dans le logiciel Immotop2, la clé de répartition en pour mille est recommandée.

Pour l'électricité produite localement, la clé de répartition en CHF convient principalement, dans tous les cas.

Clés de répartition généralement recommandées :

- Centre de coûts électricité du réseau : électricité du réseau selon les coûts en CHF

- Centre de coûts électricité solaire : électricité solaire selon les coûts en CHF

- Centre de coûts chaleur et eau chaude sanitaire combinées : quote-part de chauffage selon la consommation en pour mille

- Centre de coûts chaleur : chauffage selon la consommation en pour mille

- Centre de coûts eau chaude sanitaire : centre de coûts eau chaude sanitaire selon la consommation en pour mille

![Configuration VHKA Immotop2 – Illustration 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Configuration VHKA Immotop2 – Illustration 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Créer un groupe d'immeubles charges accessoires

La condition préalable à un décompte est un mandant existant avec des immeubles créés.

Dans la section « LG-Gruppe-NK » de chaque immeuble ou groupe d'immeubles, un nouveau groupe d'immeubles charges accessoires (LG-Gruppe-NK) peut être saisi.
Celui-ci définit les périodes de décompte des charges accessoires ainsi que les immeubles auxquels ce groupe s'applique. 

- Plusieurs immeubles peuvent partager le même LG-Gruppe-NK, mais tous les coûts de ces immeubles doivent alors être regroupés sur un même compte de charges.
    Les immeubles sont principalement gérés ensemble lorsqu'ils partagent le chauffage.


### 2\. Groupes de coûts (centres de coûts)

<div className="row">
<div className="col col--5">

Les groupes de coûts peuvent être créés dans la section « Groupes de coûts » (Kostengruppen).

Le groupe de coûts correspond à un regroupement de plusieurs comptes de charges qui doivent être répartis ensemble au moyen d'une clé de répartition commune.

Exemples de groupes de coûts :

- Groupe de coûts électricité du réseau

- Groupe de coûts électricité locale

- Groupe de coûts frais de chauffage (chaleur et eau chaude sanitaire combinées)

- Groupe de coûts eau froide

</div>
<div className="col col--7 text--center">

![Configuration VHKA Immotop2 – Illustration 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Configuration VHKA Immotop2 – Illustration 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

</div>
</div>

Exemple de groupe de coûts pour une production de chaleur et d'eau chaude sanitaire interdépendante

Pompe à chaleur avec production d'eau chaude sanitaire et corps de chauffe électrique (couplés)


Énergie utilisée : énergie électrique pour les deux
Fonctionnement : l'eau de chauffage traverse le chauffe-eau pour le stockage de la chaleur

Groupe de coûts à créer :  

Frais de chauffage et d'eau chaude sanitaire
avec clé de répartition quote-part de chaleur type 09 en pour mille ou selon le prix




Exemple de systèmes de production de chaleur et d'eau chaude sanitaire indépendants

Chauffage au mazout avec chauffe-eau électrique séparé


Énergie utilisée : énergie électrique pour le chauffe-eau, mazout pour le chauffage
Fonctionnement : pas de préchauffage de l'eau chaude sanitaire par le chauffage

Groupes de coûts à créer :

Frais de chauffage
avec clé de répartition chauffage des locaux type 01 en pour mille ou selon le prix

Frais d'eau chaude sanitaire
avec clé de répartition eau chaude sanitaire séparée type 02 en pour mille ou selon le prix



### 3\. Affectation des comptes de charges aux groupes de coûts

Dans la section « Affectation comptes de charges - groupes de coûts » (Kostenkonten- Kostengruppen-Zuordnung), tous les comptes de charges pertinents peuvent maintenant être affectés aux groupes de coûts.

À titre d'exemple, pour les frais de chauffage et d'eau chaude sanitaire, les comptes suivants seraient liés au groupe de coûts :

- Mazout

- Service du chauffage

- Entretien du brûleur

- Détartrage du chauffe-eau

- Électricité chauffe-eau

- ...


![Configuration VHKA Immotop2 – Illustration 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Charges accessoires de l'immeuble

Sur l'immeuble, le LG-Gruppe-NK peut être ajouté dans l'onglet « Charges accessoires » (Nebenkosten).

C'est ici que sont définies les clés de répartition fixes ou variables pour le décompte.

Clés de répartition
Les clés de répartition disponibles dépendent des clés de répartition activées sous Mandant --> Charges accessoires (Nebenkosten). Si les clés de répartition pertinentes ne sont pas disponibles, des clés supplémentaires peuvent être définies sous « Données de base » (Basisdaten) --> « Définitions des clés de répartition » (Verteilschlüsseldefinitionen).

Exemples :

Nom : quote-part de chauffage selon la consommation
Unité : pour mille
Type : variable
Jeu de l'entreprise de relevé :
Chaleur totale (chauffage et eau chaude sanitaire ensemble, 09)



Nom : électricité du réseau selon les coûts
Unité : CHF
Type : variable
Jeu de l'entreprise de relevé :
Électricité (06)



Nom : électricité solaire selon les coûts
Unité : CHF
Type : variable
Jeu de l'entreprise de relevé :
Électricité (06)





1.  Activer les clés de répartition sur l'immeuble


![Configuration VHKA Immotop2 – Illustration 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Vérifier les clés de répartition activées

![Configuration VHKA Immotop2 – Illustration 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Attribuer les clés de répartition au groupe de coûts

![Configuration VHKA Immotop2 – Illustration 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Exporter le fichier DTA-VHKA depuis Immotop2

Une fois la configuration terminée, le fichier d'échange peut être créé sous « Traitement » (Verarbeitung).

Dans la configuration, il est possible de définir précisément quels objets de l'immeuble doivent faire l'objet d'une requête. 

Normalement, il suffit de tous les sélectionner.

Important : le format standard QP (DTA-VKA) doit être activé.

![Configuration VHKA Immotop2 – Illustration 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Configuration VHKA Immotop2 – Illustration 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Configuration VHKA Immotop2 – Illustration 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Effectuer la comptabilisation des centres de coûts dans Immotop2

Si des comptabilisations préalables sur les centres de coûts sont nécessaires dans Immotop2, elles peuvent être tirées du résumé CSV de chaque facture créée.

C'est généralement le cas pour l'électricité solaire, l'électricité du réseau et les coûts d'électricité de la pompe à chaleur / du chauffage / du chauffe-eau.

Pour la répartition de l'électricité solaire, ce sera souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, des factures externes sont généralement disponibles et peuvent être comptabilisées.

1.  Accédez à smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionnez l'immeuble

3.  Sélectionnez la période de facturation et créez une facture

4.  Une fois la facture de la période correspondante créée, ouvrez le résumé CSV (Zusammenfassung CSV)


![Configuration VHKA Immotop2 – Illustration 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Configuration VHKA Immotop2 – Illustration 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Vous y trouverez les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une comptabilisation peut être effectuée dans Immotop2, puis répartie de manière appropriée en pour mille avec le fichier DTA-VHKA.

## Définir les clés externes à l'aide du fichier de requête

### 1\. Lier le fichier DTA-VHKA aux clés externes

1.  Ouvrir le fichier dans un éditeur

2.  Identifier les Costcenter
    Pour chaque &lt;Costcenter>, un tarif énergétique doit exister dans smart-me

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

Pour chaque &lt;Costcenter>, un tarif énergétique doit exister dans smart-me

Ex. :
Tarif eau froide : ID= 20
Électricité heures pleines : ID = 23
Électricité heures creuses : ID=24



Les tarifs peuvent être combinés automatiquement en saisissant le même ID pour plusieurs tarifs.

Exemple de centre de coûts tarif réseau combiné

- Attribuer le même ID aux heures creuses et aux heures pleines, p. ex. 23


![Configuration VHKA Immotop2 – Illustration 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Configuration VHKA Immotop2 – Illustration 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Relier les Costunits aux unités de décompte

Pour chaque unité de décompte dans smart-me, un ID du fichier doit être disponible. &lt;CostUnit>&lt;Id> doit maintenant être relié à l'appartement via les clés externes.



Se trouve tout en bas de la page de configuration dans le Billing.

![Configuration VHKA Immotop2 – Illustration 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Conditions générales pour un échange réussi

### État locatif

- Comme les états locatifs sont gérés par le logiciel Immotop2, smart-me saisit lors de l'importation les baux ainsi que les logements vacants et les reproduit dans les adresses de facturation.



![Configuration VHKA Immotop2 – Illustration 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Surfaces habitables

<div className="row">
<div className="col col--6">

- Comme les surfaces habitables ne sont actuellement pas reprises automatiquement du logiciel Immotop2, la surface habitable doit être tenue à jour côté smart-me.

</div>
<div className="col col--6 text--center">

![Configuration VHKA Immotop2 – Illustration 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

</div>
</div>

### Configurations côté smart-me pour l'indication des prix

- Pour que le prix puisse être calculé, la surface habitable doit être indiquée pour chaque unité de décompte.

- VEWA doit être activé et configuré avec les clés de répartition pour les coûts de base et les coûts variables par type d'énergie.

- Une période de décompte doit être saisie pour chaque type d'énergie. Les coûts doivent être gérés et des tarifs valides doivent être saisis pour l'électricité.


![Configuration VHKA Immotop2 – Illustration 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Charger et exporter le fichier DTA-VHKA dans smart-me

![Configuration VHKA Immotop2 – Illustration 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Configuration VHKA Immotop2 – Illustration 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  Dans le Billing, naviguez vers « Factures » (Rechnungen), puis dans la section « Exporter » (Exportieren)


2\. Sélectionnez le type d'export et chargez le fichier via « Exporter » (Exportieren).

3\. Téléchargez le fichier complété sur votre ordinateur via « Télécharger » (Herunterladen).

### 8\. Importer le fichier DTA-VHKA dans Immotop2

![Configuration VHKA Immotop2 – Illustration 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Configuration VHKA Immotop2 – Illustration 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
