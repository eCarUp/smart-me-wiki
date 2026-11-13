---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/abaimmo'
description: 'Fichiers d''échange DTA-VHKA avec AbaImmo'
sidebar_label: 'AbaImmo'
---
## Fichiers d'échange DTA-VHKA avec AbaImmo

## Remarques principales concernant le décompte avec AbaImmo et smart-me

- Le décompte et la répartition des coûts selon le DIFEE (Décompte individuel des frais d'énergie et d'eau) sont effectués dans le système smart\-me.

- Chaque unité de décompte dans AbaImmo qui doit être interrogée doit exister de manière identique dans smart-me

- Pour que le décompte soit correct, les baux ainsi que les logements vacants doivent être saisis dans toutes les unités pour chaque période de décompte !

- L'état locatif d'AbaImmo est automatiquement synchronisé avec smart-me.

- L'utilisation suppose que l'électricité ainsi que les frais de chauffage et les charges accessoires aient la même période de décompte.


## Implémentation actuelle

Actuellement pris en charge :

- Transmission de kWh, m3, pour mille ou valeur de prix d'un tarif unique pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide ainsi que pour le tarif unique d'électricité

- Transmission de valeurs en pour mille ou de prix sous forme de somme de tarifs, p. ex. l'électricité


Non pris en charge :

- Transmission séparée des tarifs d'électricité (p. ex. électricité de pointe, électricité du réseau et électricité solaire séparément)


![AbaImmo – Illustration 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configuration recommandée (Best Practice)

Dans le RCP (regroupement dans le cadre de la consommation propre), la transmission des données se configure le plus simplement ainsi :

- L'électricité est transmise sous forme de montant en CHF ; les prix des différents tarifs doivent pour cela être saisis dans smart-me.

- La chaleur, le froid, l'eau chaude sanitaire et l'eau froide sont le plus simplement transmis sous forme de valeur en pour mille.

- Les coûts d'électricité de l'objet pour les pompes à chaleur et les chauffe-eau ne sont pas transmis. Ces coûts peuvent être saisis au préalable dans AbaImmo sous forme d'écriture comptable.


### Configuration côté AbaImmo et déroulement de l'échange

1.  Rendez-vous dans Y471, choisissez le numéro d'immeuble et activez l'interface VHKA.

2.  Créez une période de décompte pour l'électricité et/ou les frais de chauffage et charges accessoires.

3.  Sous Y471, rendez-vous dans « Compteurs » (Zähler) et créez des requêtes de compteurs correspondant à l'immeuble.

    p. ex. : 

    \- Compteur de chaleur, spécifique à l'objet, frais de chauffage, consommation uniquement

    \- Eau chaude sanitaire, spécifique à l'objet, frais d'eau chaude sanitaire, consommation uniquement

    \- Eau froide, spécifique à l'objet, frais d'eau, consommation uniquement

4.  Rendez-vous dans les paramètres d'application Y621 

5.  Dans l'onglet « HK/NK », saisissez une entreprise de relevé portant le nom « smart-me »

6.  Rendez-vous dans Y11 Données de base des immeubles

7.  Dans l'onglet Standard/Ablesefirma VHKA, enregistrez maintenant l'entreprise de relevé « smart-me » pour les immeubles souhaités

8.  Enregistrez maintenant pour chaque objet de l'immeuble à interroger l'entreprise de relevé « smart-me » à l'aide du numéro VHKA d'AbaImmo.

    Cet enregistrement détermine si la requête est effectuée ou ignorée dans le fichier de requête.

9.  Rendez-vous maintenant dans Y2312 Traiter l'interface VHKA

10.  Sélectionnez maintenant l'immeuble souhaité ainsi que l'emplacement d'enregistrement du fichier VHKA.

11.  Exportez maintenant le fichier afin de le téléverser ensuite dans smart-me.

![AbaImmo – Illustration 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Illustration 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Illustration 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Illustration 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Dans la Facturation (Rechnungserstellung) de smart-me, rendez-vous dans « Configuration » (Konfiguration) et vérifiez si le DIFEE est activé ou inactif.

\--> s'il est activé, il faut vérifier qu'il existe une période de décompte identique à celle du fichier de requête d'AbaImmo ; si ce n'est pas le cas, en saisir une en conséquence.

13\. Rendez-vous maintenant dans « Factures » (Rechnungen), sélectionnez l'immeuble et cliquez à droite sur « exporter » (exportieren)

14\. Choisissez le type d'export « AbaImmo » et configurez les informations selon la sélection. Notez que l'électricité n'est disponible qu'à partir de la V2025.

15\. Sélectionnez maintenant le fichier à téléverser et cliquez sur « exporter » (exportieren). Une fois le calcul terminé, le fichier est prêt à être téléchargé.

16. Téléchargez le fichier complété sur votre ordinateur à l'aide de « Télécharger » (Herunterladen).

17\. Téléversez maintenant le fichier téléchargé dans AbaImmo sous Y2312 Traiter l'interface (import).

18\. Consultez les données téléversées sous Y2311. (Choisissez le numéro d'immeuble)

![AbaImmo – Illustration 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Rapprochement des données entre AbaImmo et smart-me

Pour que le fichier puisse être lu correctement, l'ObjektID Abacus correspondant doit être enregistré dans smart-me sous les clés externes du smart-me Billing.

1.  Ouvrez le fichier exporté dans un éditeur.

2.  Recherchez l'ObjektID (4) dans le fichier pour chacun des logements.

3.  Saisissez l'ObjektID (4) pour l'unité de logement correspondante dans le smart-me Billing, sous les clés externes (Externe Schlüssel).


![AbaImmo – Illustration 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Illustration 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Relier l'ObjektID aux unités de décompte

Pour chaque unité de décompte dans smart-me, un ObjektID du fichier doit être disponible. L'ObjektID AbaImmo doit maintenant être relié au logement via les clés externes.

Selon l'exemple ci-dessus, le logement 303-2.2 dans smart-me est maintenant relié à l'appartement de 4,5 pièces portant l'ID « 1101 » à la 4e position.

![AbaImmo – Illustration 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Effectuer l'écriture sur les centres de coûts dans AbaImmo

Si des écritures préalables sur les centres de coûts sont nécessaires dans AbaImmo, elles peuvent être tirées du CSV récapitulatif (Zusammenfassung CSV) de chaque facture établie.

C'est généralement le cas pour l'électricité, qui n'est transmise que sous forme de position unique. Pour les écritures dans ce cas, l'électricité solaire et l'électricité du réseau doivent être comptabilisées. Les parts individuelles peuvent être tirées du CSV afin de répartir les recettes.

Lors de la répartition de l'électricité solaire, cela sera souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, il existe généralement des factures externes qui peuvent être comptabilisées.

1.  Accédez au smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionnez l'immeuble

3.  Choisissez la période de facturation et établissez une facture

4.  Une fois la facture de la période correspondante établie, ouvrez le CSV récapitulatif (Zusammenfassung CSV)


![AbaImmo – Illustration 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Illustration 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Vous y trouverez les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être effectuée dans AbaImmo, puis répartie de manière appropriée en pour mille à l'aide du fichier DTA-VHKA.
