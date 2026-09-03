---
title: 'Configuration VHKA Immotop2'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Formats de fichiers VHKA pris en charge par Immotop2'
sidebar_label: 'Configuration VHKA Immotop2'
---
## Formats de fichiers VHKA pris en charge par Immotop2

- Format de fichier XML (standard DTA-VHKA)
    Requêtes par centre de coûts:
    \- Relevés du compteur en m3 ou kWh par unité d'utilisation
    \- Valeurs en pour mille par unité d'utilisation
    \- Prix par unité d'utilisation


## Principales remarques concernant le décompte avec Immotop2 et smart-me

- Le décompte et la répartition des coûts selon VEWA s'effectuent dans le système smart.me.

- Chaque unité de décompte dans Immotop2 qui doit être interrogée doit exister de manière congruente dans Smart-me

- Pour que le décompte soit correct, les rapports de location ainsi que les vacances locatives doivent être saisis dans toutes les unités d'Immotop2 pour chaque période de décompte!

- Immotop2 ne prend en charge qu'une seule période de décompte par groupe de charges accessoires, c'est pourquoi l'électricité doit être décomptée sur la même période que toutes les autres charges accessoires.

- L'état locatif d'Immotop2 est synchronisé automatiquement avec smart-me.


## Remarques de configuration du côté d'Immotop2

Pour qu'Immotop2 et smart-me puissent communiquer entre eux, les charges accessoires, centres de coûts et groupes de charges accessoires enregistrés doivent correspondre.

### Création des clés de répartition nécessaires dans Immotop2

Pour que les centres de coûts puissent être transmis correctement, il faut d'abord s'assurer que les clés nécessaires sont disponibles sur le mandant.

Sous l'onglet «Données de base» (Basisdaten), les clés de répartition correspondantes peuvent être créées sous Définitions des clés de répartition (Verteilschlüssel-Definitionen).

Si les coûts doivent être gérés dans le logiciel Immotop2, la clé de répartition Pour mille (Promille) est indiquée.

Pour l'électricité produite localement, la clé de répartition CHF convient en premier lieu, pour tous les cas.

Clés de répartition qui conviennent en principe:

- Centre de coûts électricité du réseau: électricité du réseau selon les coûts en CHF

- Centre de coûts électricité solaire: électricité solaire selon les coûts en CHF

- Centre de coûts chaleur et eau chaude sanitaire combinés: quote-part de chauffage selon la consommation en pour mille

- Centre de coûts chaleur: chauffage selon la consommation en pour mille

- Centre de coûts eau chaude sanitaire: centre de coûts eau chaude sanitaire selon la consommation en pour mille


![Configuration VHKA Immotop2 – illustration 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Configuration VHKA Immotop2 – illustration 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Créer le groupe LG charges accessoires

La condition préalable à un décompte est l'existence d'un mandant avec des immeubles créés.

Sous la section «Groupe LG-CA» (LG-Gruppe-NK) de chaque immeuble ou groupe d'immeubles, un nouveau groupe LG-CA peut être saisi.
Y sont définies les périodes de décompte des charges accessoires et les immeubles auxquels ce groupe s'applique.

- Plusieurs immeubles peuvent partager le même groupe LG-CA, mais pour cela, tous les coûts des immeubles doivent également converger vers un seul compte de coûts.
    Les immeubles sont principalement gérés ensemble lorsqu'ils partagent le chauffage.


### 2\. Groupes de coûts (centres de coûts)

Dans la section «Groupes de coûts» (Kostengruppen), les groupes de coûts peuvent être créés

Le groupe de coûts correspond à un regroupement de plusieurs comptes de coûts qui doivent être répartis ensemble via une clé de répartition commune.

Exemples de groupes de coûts:

- Groupe de coûts électricité du réseau

- Groupe de coûts électricité locale

- Groupe de coûts frais de chauffage (chaleur et eau chaude sanitaire combinés)

- Groupe de coûts eau froide


![Configuration VHKA Immotop2 – illustration 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Configuration VHKA Immotop2 – illustration 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Exemple du groupe de coûts pour la chaleur et la préparation d'eau chaude sanitaire qui se soutiennent mutuellement

Pompe à chaleur avec préparation d'eau chaude sanitaire et corps de chauffe électrique (couplés)


Énergie utilisée: énergie électrique pour les deux
Fonction: l'eau de chauffage traverse le boiler pour le stockage de la chaleur

Groupe de coûts à créer:

Frais de chauffage et d'eau chaude sanitaire
avec clé de répartition quote-part de chaleur type 09 selon le pour mille ou le prix




Exemple pour des systèmes de chaleur et de préparation d'eau chaude sanitaire qui ne se soutiennent pas mutuellement

Chauffage au mazout avec boiler électrique d'eau chaude sanitaire séparé


Énergie utilisée: énergie électrique pour le boiler, mazout pour le chauffage
Fonction: aucun préchauffage de l'eau chaude sanitaire par le chauffage

Groupes de coûts à créer:

Frais de chauffage
avec clé de répartition chauffage des locaux type 01 selon le pour mille ou le prix

Frais d'eau chaude sanitaire
avec clé de répartition eau chaude sanitaire séparée type 02 selon le pour mille ou le prix



### 3\. Attribution des comptes de coûts aux groupes de coûts

Dans la section «Attribution des comptes de coûts aux groupes de coûts» (Kostenkonten- Kostengruppen-Zuordnung), tous les comptes de coûts pertinents peuvent maintenant être attribués aux groupes de coûts.

À titre d'exemple pour les frais de chauffage et d'eau chaude sanitaire, les comptes suivants seraient p. ex. liés au groupe de coûts:

- Mazout de chauffage

- Conduite du chauffage

- Service du brûleur

- Détartrage du boiler

- Électricité boiler

- ...


![Configuration VHKA Immotop2 – illustration 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Charges accessoires de l'immeuble

Sur l'immeuble, sous l'onglet «Charges accessoires» (Nebenkosten), le groupe LG-CA peut être ajouté.

À cet endroit, des clés de répartition fixes ou variables sont définies pour le décompte.

Clés de répartition
Les clés de répartition disponibles dépendent des clés de répartition activées sous Mandant --> Charges accessoires (Nebenkosten). Si les clés de répartition pertinentes ne sont pas disponibles, des clés de répartition supplémentaires peuvent être définies sous «Données de base» (Basisdaten) --> «Définitions des clés de répartition» (Verteilschlüsseldefinitionen).

Exemples:

Nom: quote-part de chauffage selon la consommation
Unité: pour mille
Type: variable
Taux entreprise de relevé:
Chaleur totale (chauffage et eau chaude sanitaire ensemble, 09)



Nom: électricité du réseau selon les coûts
Unité: CHF
Type: variable
Taux entreprise de relevé:
Électricité (06)



Nom: électricité solaire selon les coûts
Unité: CHF
Type: variable
Taux entreprise de relevé:
Électricité (06)





1.  Activer la clé de répartition sur l'immeuble


![Configuration VHKA Immotop2 – illustration 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Vérifier les clés de répartition activées

![Configuration VHKA Immotop2 – illustration 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Attribuer la clé de répartition au groupe de coûts

![Configuration VHKA Immotop2 – illustration 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Exporter le fichier DTA-VHKA depuis Immotop2

Le fichier d'échange peut être créé après l'achèvement de la configuration sous Traitement.

Dans la configuration, il est possible de définir exactement quels objets de l'immeuble doivent être interrogés.

Normalement, tous peuvent simplement être interrogés.

Important: le format standard QP (DTA-VKA) doit être activé.

![Configuration VHKA Immotop2 – illustration 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Configuration VHKA Immotop2 – illustration 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Configuration VHKA Immotop2 – illustration 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Effectuer la comptabilisation sur les centres de coûts dans Immotop2

Si des écritures préalables sur les centres de coûts sont nécessaires dans Immotop2, celles-ci peuvent être extraites du CSV récapitulatif de chaque facture créée.

C'est habituellement le cas pour l'électricité solaire, l'électricité du réseau et pour les coûts d'électricité de la pompe à chaleur / du chauffage / du boiler.

Lors de la répartition de l'électricité solaire, cela sera plus souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, il existe habituellement des factures externes qui peuvent être comptabilisées.

1.  Accède à smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionne l'immeuble

3.  Sélectionne la période de facturation et crée une facture

4.  Lorsque la facture de la période appropriée est créée, ouvre le CSV récapitulatif


![Configuration VHKA Immotop2 – illustration 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Configuration VHKA Immotop2 – illustration 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Y sont contenus les kWh et m3 respectivement vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être effectuée dans Immotop2 et ensuite répartie de manière appropriée avec le fichier DTA-VHKA en pour mille.

## Définir les clés externes à l'aide du fichier de requête

### 1\. Lier le fichier DTA-VHKA aux clés externes

1.  Ouvrir le fichier dans l'éditeur

2.  Identifier les Costcenter
    Pour chaque &lt;Costcenter> un tarif énergétique doit exister dans smart-me

    Ex.:
    Tarif eau froide: ID= 20
    Électricité heures pleines: ID = 23
    Électricité heures creuses: ID=24
    .
    Les tarifs peuvent être combinés automatiquement en saisissant le même ID pour plusieurs tarifs.


3.  Relier les Costunits aux unités de décompte
    Pour chaque unité de décompte dans smart-me, un ID du fichier doit être disponible. &lt;CostUnit>&lt;Id> doit maintenant être relié au logement via les clés externes.

    Ex.:
    Appartement de 3 pièces et demie RDC droite P2 (103-0.2) = ID 90
    Appartement de 3 pièces et demie RDC droite P1 = ID 91


![Configuration VHKA Immotop2 – illustration 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Relier les Costcenter (groupe de coûts) aux tarifs

Pour chaque &lt;Costcenter> un tarif énergétique doit exister dans smart-me

Ex.:
Tarif eau froide: ID= 20
Électricité heures pleines: ID = 23
Électricité heures creuses: ID=24



Les tarifs peuvent être combinés automatiquement en saisissant le même ID pour plusieurs tarifs.

Exemple centre de coûts tarif de réseau combiné

- Attribuer le même ID aux heures creuses et aux heures pleines, p. ex. 23


![Configuration VHKA Immotop2 – illustration 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Configuration VHKA Immotop2 – illustration 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Relier les Costunits aux unités de décompte

Pour chaque unité de décompte dans smart-me, un ID du fichier doit être disponible. &lt;CostUnit>&lt;Id> doit maintenant être relié au logement via les clés externes.



À trouver tout en bas de la page de configuration dans Billing.

![Configuration VHKA Immotop2 – illustration 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Conditions générales pour un échange réussi

### État locatif

- Comme les états locatifs sont gérés par le logiciel Immotop2, du côté de smart-me, le contrat ainsi que les vacances locatives sont saisis lors de l'importation et représentés dans les adresses de facturation.



![Configuration VHKA Immotop2 – illustration 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Surfaces habitables

- Comme les surfaces habitables ne sont actuellement pas reprises automatiquement du logiciel Immotop2, la surface habitable doit être tenue à jour du côté de smart-me.



![Configuration VHKA Immotop2 – illustration 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Configurations du côté de smart-me pour l'affichage du prix

- Pour que le prix puisse être calculé, la surface habitable doit être indiquée pour chaque unité de décompte.

- VEWA doit être activé et configuré avec les clés de répartition pour les coûts de base et les coûts variables par type d'énergie.

- Une période de décompte doit être saisie pour chaque type d'énergie. Les coûts doivent être gérés et pour l'électricité, des tarifs valides doivent être saisis.


![Configuration VHKA Immotop2 – illustration 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Téléverser et exporter le fichier DTA-VHKA dans smart-me

![Configuration VHKA Immotop2 – illustration 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Configuration VHKA Immotop2 – illustration 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  Navigue dans Billing vers «Factures» (Rechnungen) puis dans la section «Exporter» (Exportieren)


2\. Sélectionne le type d'export et téléverse le fichier au moyen de «Exporter» (Exportieren).

3\. Télécharge le fichier complété sur ton ordinateur au moyen de «Télécharger» (Herunterladen).

### 8\. Importer le fichier DTA-VHKA dans Immotop2

![Configuration VHKA Immotop2 – illustration 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Configuration VHKA Immotop2 – illustration 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
