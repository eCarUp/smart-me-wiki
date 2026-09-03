---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'Fichiers d''échange DTA-VHKA avec AbaImmo'
sidebar_label: 'AbaImmo'
---
## Fichiers d'échange DTA-VHKA avec AbaImmo

## Remarques essentielles concernant le décompte avec AbaImmo et smart-me

- Le décompte et la répartition des coûts selon VEWA s'effectuent dans le système smart\-me.

- Chaque unité de décompte dans AbaImmo qui doit être interrogée doit exister de manière congruente dans smart-me

- Pour que le décompte soit correct, les rapports de location ainsi que les vacances locatives doivent être saisis pour chaque période de décompte dans toutes les unités !

- L'état locatif d'AbaImmo est synchronisé automatiquement avec smart-me.

- La condition préalable à l'utilisation est que l'électricité ainsi que les frais de chauffage et les charges accessoires aient la même période de décompte.


## Implémentation actuelle

Actuellement pris en charge :

- Transmission de kWh, m3, valeur en pour mille ou valeur de prix d'un tarif unique pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide ainsi que le tarif unique d'électricité

- Transmission de valeurs en pour mille ou de prix sous forme de somme de tarifs, comme p. ex. l'électricité


Non pris en charge :

- Transmission séparée des tarifs d'électricité (p. ex. électricité de pointe, électricité du réseau et électricité solaire séparément)


![AbaImmo – Illustration 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configuration best practice

La manière la plus simple d'organiser la transmission des données dans le RCP (regroupement dans le cadre de la consommation propre) est la suivante :

- L'électricité est transmise sous forme de montant en CHF ; les prix des différents tarifs doivent pour cela être saisis dans smart-me.

- La chaleur, le froid, l'eau chaude sanitaire et l'eau froide se transmettent le plus simplement sous forme de valeur en pour mille.

- Les coûts d'électricité de l'objet pour les pompes à chaleur et les chauffe-eau ne sont pas transmis. Les coûts peuvent être saisis au préalable comme écriture dans AbaImmo.


### Configuration du côté d'AbaImmo et déroulement de l'échange

1.  Navigue vers Y471, sélectionne le numéro d'immeuble et active l'interface VHKA.

2.  Crée une période de décompte pour l'électricité et/ou les frais de chauffage et charges accessoires.

3.  Sous Y471, navigue vers « Compteur » (Zähler) et crée les interrogations de compteurs correspondant à l'immeuble.

    p. ex. : 
    \- Compteur de chaleur, spécifique à l'objet, frais de chauffage, consommation uniquement
    \- Eau chaude sanitaire, spécifique à l'objet, frais d'eau chaude, consommation uniquement
    \- Eau froide, spécifique à l'objet, frais d'eau, consommation uniquement


4.  Navigue vers les paramètres d'application Y621 

5.  Sous l'onglet « HK/NK », saisis une entreprise de relevé portant le nom « smart-me »

6.  Navigue vers Y11 Fichier de base des immeubles

7.  Dans l'onglet Standard/Entreprise de relevé VHKA, enregistre maintenant l'entreprise de relevé « smart-me » auprès des immeubles souhaités

8.  Enregistre maintenant l'entreprise de relevé « smart-me » auprès de chaque objet à interroger de l'immeuble, au moyen du numéro VHKA d'AbaImmo.
    Cet enregistrement détermine si la demande est effectuée ou ignorée dans le fichier d'interrogation.

9.  Navigue maintenant vers Y2312 Traiter l'interface VHKA

10.  Sélectionne maintenant l'immeuble souhaité ainsi que l'emplacement d'enregistrement du fichier VHKA.

11.  Exporte maintenant le fichier afin de le téléverser ensuite dans smart-me.


![AbaImmo – Illustration 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Illustration 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Illustration 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Illustration 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Dans la création de factures smart-me, navigue vers « Configuration » (Konfiguration) et vérifie si VEWA est activé ou inactif.

\--> s'il est activé, il faut vérifier qu'une période de décompte identique à celle du fichier d'interrogation d'AbaImmo existe ; si ce n'est pas le cas, en saisir une correspondante.

13\. Navigue maintenant vers « Factures » (Rechnungen), sélectionne l'immeuble et clique à droite sur « exporter » (exportieren)

14\. Sélectionne le type d'export « AbaImmo » et configure les informations selon la sélection. Note que l'électricité n'est disponible qu'à partir de V2025.

15\. Sélectionne maintenant le fichier à téléverser et clique sur « exporter » (exportieren). Une fois le calcul terminé, le fichier est prêt à être téléchargé.

16. Télécharge le fichier complété sur ton ordinateur au moyen de « Télécharger » (Herunterladen).

17\. Téléverse maintenant le fichier téléchargé dans AbaImmo sous Y2312 Traiter l'interface (import).

18\. Consulte les données téléversées sous Y2311. (Sélectionne le numéro d'immeuble)

![AbaImmo – Illustration 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Synchronisation des données entre AbaImmo et smart-me

Pour que le fichier puisse être lu correctement, l'ObjektID Abacus correspondante doit être enregistrée dans smart-me sous les clés externes dans smart-me Billing.

1.  Ouvre le fichier exporté dans un éditeur.

2.  Cherche l'ObjektID (4) dans le fichier pour chacun des appartements.

3.  Saisis l'ObjektID (4) auprès de l'unité d'habitation correspondante dans smart-me Billing, sous les clés externes.


![AbaImmo – Illustration 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Illustration 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Relier l'ObjektID aux unités de décompte

Pour chaque unité de décompte dans smart-me, une ObjektID issue du fichier doit être disponible. L'ObjektID AbaImmo doit maintenant être reliée à l'appartement au moyen des clés externes.

Selon l'exemple ci-dessus, pour l'appartement 303-2.2 dans smart-me, l'appartement de 4,5 pièces est maintenant relié à l'ID « 1101 » en 4e position.

![AbaImmo – Illustration 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Effectuer une écriture sur centre de coûts dans AbaImmo

Si des écritures préalables sur les centres de coûts sont nécessaires dans AbaImmo, celles-ci peuvent être reprises du CSV récapitulatif de chaque facture créée.

C'est habituellement le cas pour l'électricité, qui n'est transmise que comme poste unique. Pour les écritures dans ce cas, l'électricité solaire et l'électricité du réseau doivent être comptabilisées. Les parts individuelles peuvent être reprises du CSV afin de répartir les recettes.

Pour la répartition de l'électricité solaire, cela sera plus souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, des factures externes pouvant être comptabilisées sont habituellement disponibles.

1.  Accède à smart-me Billing via l'onglet Facturation

2.  Sélectionne l'immeuble

3.  Sélectionne la période de facturation et crée une facture

4.  Une fois la facture de la période correspondante créée, ouvre le CSV récapitulatif


![AbaImmo – Illustration 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Illustration 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

On y trouve les kWh et m3 respectivement vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être effectuée dans AbaImmo, puis répartie de manière appropriée au moyen du fichier DTA-VHKA avec les pour mille.
