---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/abaimmo'
description: 'Fichiers d''échange DTA-VHKA avec AbaImmo'
sidebar_label: 'AbaImmo'
---
## Fichiers d'échange DTA-VHKA avec AbaImmo

## Remarques essentielles sur le décompte avec AbaImmo et smart-me

- Le décompte et la répartition des coûts selon VEWA s'effectuent dans le système smart\-me.

- Chaque unité de décompte dans AbaImmo qui doit être interrogée doit exister de manière concordante dans Smart-me

- Pour que le décompte soit correct, les baux ainsi que les vacances locatives doivent être saisis dans toutes les unités pour chaque période de décompte !

- L'état locatif d'AbaImmo est automatiquement comparé avec smart-me.

- La condition d'utilisation est que l'électricité ainsi que les frais de chauffage et les charges accessoires aient la même période de décompte.


## Implémentation actuelle

Actuellement pris en charge :

- Transmission de la valeur en kWh, m3, pour mille ou prix d'un tarif unique pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide ainsi que pour le tarif unique d'électricité

- Transmission de valeurs en pour mille ou en prix sous forme de somme de tarifs, p. ex. l'électricité


Non pris en charge :

- Transmission séparée des tarifs d'électricité (p. ex. électricité de pointe, électricité du réseau et électricité solaire séparément)


![AbaImmo – Illustration 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configuration recommandée (best practice)

Dans un RCP (regroupement dans le cadre de la consommation propre), la transmission des données se configure le plus simplement ainsi :

- L'électricité est transmise sous forme de montant en CHF ; les prix des différents tarifs doivent pour cela être saisis dans smart-me.

- La chaleur, le froid, l'eau chaude sanitaire et l'eau froide sont transmis le plus simplement sous forme de valeur en pour mille.

- Les coûts d'électricité de l'immeuble pour les pompes à chaleur et les chauffe-eau ne sont pas transmis. Ils peuvent être saisis au préalable sous forme d'écriture dans AbaImmo.


### Configuration côté AbaImmo et déroulement de l'échange

1.  Accédez à Y471, sélectionnez le numéro d'immeuble et activez l'interface VHKA.

2.  Créez une période de décompte pour l'électricité et/ou les frais de chauffage et charges accessoires.

3.  Sous Y471, accédez à « Compteur » ("Zähler") et créez les requêtes de compteur correspondant à l'immeuble.

    p. ex. : 

    \- Compteur de chaleur, spécifique à l'objet, frais de chauffage, consommation uniquement

    \- Eau chaude sanitaire, spécifique à l'objet, frais d'eau chaude sanitaire, consommation uniquement

    \- Eau froide, spécifique à l'objet, frais d'eau, consommation uniquement

4.  Accédez aux paramètres d'application Y621 

5.  Dans l'onglet « HK/NK », saisissez une société de relevé portant le nom « smart-me »

6.  Accédez à Y11 Fichier des immeubles

7.  Dans l'onglet Standard/Société de relevé VHKA, enregistrez maintenant la société de relevé « smart-me » pour les immeubles souhaités

8.  Enregistrez maintenant la société de relevé « smart-me » pour chaque objet de l'immeuble à interroger, au moyen du numéro VHKA d'AbaImmo.

    Cet enregistrement détermine si la requête est effectuée ou ignorée dans le fichier de requête.

9.  Accédez maintenant à Y2312 Traiter l'interface VHKA

10.  Sélectionnez maintenant l'immeuble souhaité et l'emplacement d'enregistrement du fichier VHKA.

11.  Exportez maintenant le fichier afin de le téléverser ensuite dans smart-me.

![AbaImmo – Illustration 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Illustration 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Illustration 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Illustration 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Dans la Facturation (Rechnungserstellung) de smart-me, accédez à « Configuration » ("Konfiguration") et vérifiez si VEWA est activé ou inactif.

\--> s'il est activé, il faut vérifier s'il existe une période de décompte identique à celle du fichier de requête d'AbaImmo ; si ce n'est pas le cas, en saisir une.

13\. Accédez maintenant à « Factures » ("Rechnungen"), sélectionnez l'immeuble et cliquez à droite sur « exporter » ("exportieren")

14\. Choisissez le type d'export « AbaImmo » et configurez les informations selon la sélection. Notez que l'électricité n'est disponible qu'à partir de V2025.

15\. Sélectionnez maintenant le fichier à téléverser et cliquez sur « exporter » ("exportieren"). Une fois le calcul terminé, le fichier est prêt à être téléchargé.

16. Téléchargez le fichier complété sur votre ordinateur au moyen de « Télécharger » ("Herunterladen").

17\. Téléversez maintenant le fichier téléchargé dans AbaImmo sous Y2312 Traiter l'interface (importation).

18\. Consultez les données téléversées sous Y2311. (Sélectionnez le numéro d'immeuble)

![AbaImmo – Illustration 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Rapprochement des données entre AbaImmo et smart-me

Pour que le fichier puisse être lu correctement, l'ObjektID Abacus correspondant doit être enregistré dans smart-me sous les clés externes du smart-me Billing.

1.  Ouvrez le fichier exporté dans un éditeur.

2.  Recherchez l'ObjektID (4) dans le fichier pour chacun des appartements.

3.  Saisissez l'ObjektID (4) pour l'unité d'habitation correspondante dans le smart-me Billing, sous les clés externes ("Externe Schlüssel").


![AbaImmo – Illustration 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Illustration 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Relier l'ObjektID aux unités de décompte

Pour chaque unité de décompte dans smart-me, un ObjektID du fichier doit être disponible. L'ObjektID AbaImmo doit maintenant être relié à l'appartement via les clés externes.

Selon l'exemple ci-dessus, l'appartement 303-2.2 dans smart-me est maintenant relié à l'appartement de 4,5 pièces portant l'ID « 1101 » en 4e position.

![AbaImmo – Illustration 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Effectuer l'écriture sur centres de coûts dans Abaimmo

Si des écritures préalables sur les centres de coûts sont nécessaires dans AbaImmo, elles peuvent être tirées du CSV récapitulatif de chaque facture établie.

C'est généralement le cas pour l'électricité, qui n'est transmise que sous forme de poste unique. Dans ce cas, l'électricité solaire et l'électricité du réseau doivent être comptabilisées. Les parts individuelles peuvent être tirées du CSV pour répartir les recettes.

Ce sera souvent nécessaire pour la répartition de l'électricité solaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, des factures externes sont généralement disponibles et peuvent être comptabilisées.

1.  Accédez au smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionnez l'immeuble

3.  Sélectionnez la période de facturation et établissez une facture

4.  Lorsque la facture de la période correspondante est établie, ouvrez le CSV récapitulatif ("Zusammenfassung CSV")


![AbaImmo – Illustration 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Illustration 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Il contient les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être effectuée dans AbaImmo, puis répartie de manière appropriée en pour mille avec le fichier DTA-VHKA.
