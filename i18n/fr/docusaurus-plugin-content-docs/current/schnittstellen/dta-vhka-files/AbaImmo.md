---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'Fichiers d''échange DTA-VHKA avec AbaImmo'
sidebar_label: 'AbaImmo'
---
## Fichiers d'échange DTA-VHKA avec AbaImmo

## Remarques importantes sur le décompte avec AbaImmo et smart-me

- Le décompte et la répartition des coûts selon VEWA s'effectuent dans le système smart\-me.

- Chaque unité de décompte dans AbaImmo qui doit être interrogée doit exister de manière concordante dans smart-me.

- Pour que le décompte soit correct, les baux ainsi que les logements vacants doivent être saisis dans toutes les unités pour chaque période de décompte !

- L'état locatif d'AbaImmo est automatiquement synchronisé avec smart-me.

- Pour pouvoir utiliser cette fonction, l'électricité ainsi que les frais de chauffage et les charges accessoires doivent avoir la même période de décompte.


## Implémentation actuelle

Actuellement pris en charge :

- Transmission de la valeur en kWh, m3, pour mille ou prix d'un tarif unique pour la chaleur, le froid, l'eau chaude sanitaire et l'eau froide, ainsi que le tarif unique d'électricité

- Transmission de valeurs en pour mille ou en prix sous forme de somme de tarifs, p. ex. pour l'électricité


Non pris en charge :

- Transmission séparée des tarifs d'électricité (p. ex. électricité de pointe, électricité du réseau et électricité solaire séparément)


![AbaImmo – Figure 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configuration recommandée

Dans un RCP (regroupement dans le cadre de la consommation propre), la transmission des données se configure le plus simplement ainsi :

- L'électricité est transmise sous forme de montant en CHF ; pour cela, les prix des différents tarifs doivent être saisis dans smart-me.

- La chaleur, le froid, l'eau chaude sanitaire et l'eau froide se transmettent le plus simplement sous forme de valeur en pour mille.

- Les coûts d'électricité de l'objet pour les pompes à chaleur et les chauffe-eau ne sont pas transmis. Ces coûts peuvent être saisis au préalable dans AbaImmo sous forme d'écriture.


### Configuration côté AbaImmo et déroulement de l'échange

1.  Naviguez vers Y471, sélectionnez le numéro d'immeuble et activez l'interface VHKA.

2.  Créez une période de décompte pour l'électricité et/ou les frais de chauffage et charges accessoires.

3.  Sous Y471, naviguez vers « Compteurs » ("Zähler") et créez des requêtes de compteurs adaptées à l'immeuble.

    p. ex. : 

    \- Compteur de chaleur, spécifique à l'objet, frais de chauffage, consommation uniquement

    \- Eau chaude sanitaire, spécifique à l'objet, frais d'eau chaude sanitaire, consommation uniquement

    \- Eau froide, spécifique à l'objet, frais d'eau, consommation uniquement

4.  Naviguez vers les paramètres d'application Y621 

5.  Dans l'onglet « HK/NK », saisissez une entreprise de relevé nommée « smart-me »

6.  Naviguez vers Y11 Fichier des immeubles

7.  Dans l'onglet Standard/Entreprise de relevé VHKA, attribuez maintenant l'entreprise de relevé « smart-me » aux immeubles souhaités

8.  Attribuez maintenant l'entreprise de relevé « smart-me » à chaque objet de l'immeuble à interroger, au moyen du numéro VHKA d'AbaImmo.

    Cette attribution détermine si la requête est effectuée ou ignorée dans le fichier de requête.

9.  Naviguez maintenant vers Y2312 Traiter l'interface VHKA

10.  Sélectionnez maintenant l'immeuble souhaité ainsi que l'emplacement d'enregistrement du fichier VHKA.

11.  Exportez maintenant le fichier afin de le téléverser ensuite dans smart-me.

![AbaImmo – Figure 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Figure 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Figure 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Figure 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Dans la facturation smart-me, naviguez vers « Configuration » ("Konfiguration") et vérifiez si VEWA est activé ou inactif.

\--> S'il est activé, vérifiez qu'il existe une période de décompte identique à celle du fichier de requête d'AbaImmo ; si ce n'est pas le cas, créez-en une.

13\. Naviguez maintenant vers « Factures » ("Rechnungen"), sélectionnez l'immeuble et cliquez à droite sur « Exporter » ("exportieren")

14\. Sélectionnez le type d'export « AbaImmo » et configurez les informations selon votre choix. Notez que l'électricité n'est disponible qu'à partir de V2025.

15\. Sélectionnez maintenant le fichier à téléverser et cliquez sur « Exporter » ("exportieren"). Une fois le calcul terminé, le fichier est prêt à être téléchargé.

16. Téléchargez le fichier complété sur votre ordinateur via « Télécharger » ("Herunterladen").

17\. Téléversez maintenant le fichier téléchargé dans AbaImmo sous Y2312 Traiter l'interface (import).

18\. Consultez les données téléversées sous Y2311. (Sélectionnez le numéro d'immeuble)

![AbaImmo – Figure 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Synchronisation des données entre AbaImmo et smart-me

Pour que le fichier puisse être lu correctement, l'ObjektID Abacus correspondante doit être enregistrée dans smart-me, sous les clés externes du smart-me Billing.

1.  Ouvrez le fichier exporté dans un éditeur.

2.  Recherchez dans le fichier l'ObjektID (4) de chacun des logements.

3.  Saisissez l'ObjektID (4) pour l'unité d'habitation correspondante dans le smart-me Billing, sous les clés externes ("Externe Schlüssel").


![AbaImmo – Figure 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Figure 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Associer l'ObjektID aux unités de décompte

Pour chaque unité de décompte dans smart-me, une ObjektID du fichier doit être disponible. L'ObjektID AbaImmo doit maintenant être associée au logement via les clés externes.

Selon l'exemple ci-dessus, le logement 303-2.2 est maintenant associé dans smart-me à l'appartement de 4,5 pièces portant l'ID « 1101 » en 4e position.

![AbaImmo – Figure 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Effectuer l'écriture sur les centres de coûts dans Abaimmo

Si des écritures préalables sur les centres de coûts sont nécessaires dans AbImmo, elles peuvent être reprises du résumé CSV de chaque facture créée.

C'est généralement le cas pour l'électricité, qui n'est transmise que sous forme de position unique. Pour les écritures dans ce cas, l'électricité solaire et l'électricité du réseau doivent être comptabilisées. Les parts individuelles peuvent être reprises du CSV afin de répartir les recettes.

Lors de la répartition de l'électricité solaire, cela sera souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, il existe généralement des factures externes qui peuvent être comptabilisées.

1.  Accédez au smart-me Billing via l'onglet Facturation ("Rechnungsstellung")

2.  Sélectionnez l'immeuble

3.  Sélectionnez la période de facturation et créez une facture

4.  Une fois la facture de la période correspondante créée, ouvrez le résumé CSV ("Zusammenfassung CSV")


![AbaImmo – Figure 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Figure 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Vous y trouverez les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être effectuée dans AbaImmo, puis répartie de manière appropriée en pour mille avec le fichier DTA-VHKA.
