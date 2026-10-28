---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/garaio-rem'
description: 'Remarques essentielles concernant le décompte avec Garaio REM et smart-me'
sidebar_label: 'Garaio REM'
---
## Remarques essentielles concernant le décompte avec Garaio REM et smart-me

- Le décompte et la répartition des coûts selon la VEWA s'effectuent dans le système smart\-me.

- Chaque unité de décompte dans Garaio REM qui doit être interrogée doit exister de manière identique dans smart-me.

- Pour que le décompte soit correct, les baux ainsi que les logements vacants doivent être saisis dans toutes les unités pour chaque période de décompte !

- Garaio REM ne prend en charge qu'une seule période de décompte par groupe de charges accessoires. L'électricité doit donc être décomptée sur la même période que toutes les autres charges accessoires.

- L'état locatif de Garaio REM est automatiquement synchronisé avec smart-me.

- Garaio REM ne peut pas importer de valeurs sans qu'une écriture de valeurs ait été passée au préalable dans le centre de coûts principal.


## Implémentation actuelle

Actuellement pris en charge :

- Exportation d'un centre de coûts collectif par centre de coûts principal, exprimée en pour mille
    \- Total des frais de chauffage (chaleur et eau chaude sanitaire combinées, exprimées en pour mille)
    \- Total des frais de chauffage et de refroidissement (chaleur, froid et eau chaude sanitaire combinés, exprimés en pour mille)
    \- Frais de chaleur, d'eau chaude sanitaire, de froid et d'eau froide séparés, exprimés en pour mille
    \- Frais d'électricité du réseau séparés ou combinés (consommation d'électricité du réseau et électricité de pointe)
    \- Frais d'électricité locale séparés ou combinés (solaire, batterie)


Non pris en charge :

- Transmission séparée de plusieurs centres de coûts collectifs par centre de coûts principal (pourra être prise en charge ultérieurement en cas de forte demande sur le terrain)

- Transmission des consommations en kWh ou sous forme de prix
    Cette fonction n'est pas prise en charge par Garaio REM de manière suffisamment adaptée pour apporter une valeur ajoutée.
    Pour que cela fonctionne, la somme des kWh ou le prix total doit avoir été comptabilisé au préalable dans Garaio REM.


## Fichier d'importation / d'exportation Garaio REM et définition des clés dans smart-me

### Définir les clés dans smart-me à partir d'un fichier DTA-REM

Dans le fichier exporté depuis GaraioREM, vous trouverez les ID pertinents pour relier le fichier d'exportation à smart-me.

Les ID pertinents sont indiqués en bleu et doivent être enregistrés comme suit.

Clé externe pour un centre de coûts principal :

ID du centre de coûts principal (100)

Pour les centres de coûts séparés, la chaleur est liée à l'ID = 100

Pour les centres de coûts combinés, plusieurs tarifs peuvent être liés au même ID.

p. ex. chaleur et eau chaude sanitaire = 100



Clé externe pour un objet d'habitation chez smart-me :

HausID +":"+ObjektID (01 et 30001 = 01:30001)



Lors de l'exportation, le résultat exprimé en part pour mille est inscrit à l'emplacement (marqué en brun) pour l'ensemble du centre de coûts collectif ainsi que pour la consommation individuelle de chaque bail.

![Garaio REM – Illustration 1](/img/schnittstellen-dta-vhka-files-garaio-rem/01.png)

![Garaio REM – Illustration 2](/img/schnittstellen-dta-vhka-files-garaio-rem/02.png)

### Exemple de fichier DTA-REM

&lt;?xml version="1.0" encoding="UTF-8"?>

&lt;DTA\_REM xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://DTA\_REM.org">

&lt;Header Type="DTA\_IMPORT" Version="1.0" Author="GARAIO REM" Date="2024-07-30">

&lt;Liegenschaft LiegenschaftID="11004" LiegenschaftBezeichnung1="Musterstrasse 7/9" LiegenschaftBezeichnung2="" LiegenschaftPLZ="1000" LiegenschaftOrt="Muster" PeriodeNebenkostenAbrechnungVon="2023-07-01" PeriodeNebenkostenAbrechnungBis="2024-06-30"\>

 &lt;Hauptkostenstelle HauptkostenstelleID="100" KostenstelleVonBezeichnung="Heizkosten (verbrauchsabh.)" AnlageNummerExtern="">

        &lt;Sammelkostenstelle VerbrauchskostenstelleAnID="101" VerbrauchskostenstelleAnBezeichnung="Heizkosten (verbrauchsabh.)" Verbrauchsart="01" Promilleanteil="1000.0"/>

         &lt;Haus HausID="01" HausBezeichnung1="Musterstrasse 7" HausPLZ="1000" HausOrt="Muster" LiegenschaftIDVT="11004">

           &lt;Objekt ObjektID="300001" ObjektArtBezeichnung="Wohnung" ObjektAnzahlZimmer="4.5" ObjektFlaecheGesamt="112.72">

            &lt;Mietverhaeltnis ObjektverhaeltnisID="132109" NutzerID="1043151" BeginnNutzungPeriode="2023-07-01" EndeNutzungPeriode="2024-01-31" Mieter1Name="Bicker" Mieter1Vorname="Raphael" Mieter1Strasse="Musterstrasse 23" Mieter1PLZ="1000" Mieter1Ort="Muster">

               &lt;Verbrauchskostenstelle KostenstelleID="101" KostenstelleBezeichnung="Heizkosten (verbrauchsabh.)" Verbrauchsart="01" Promilleanteil=""/>

             &lt;/Mietverhaeltnis>

             &lt;Mietverhaeltnis ObjektverhaeltnisID="152930" NutzerID="1072127" BeginnNutzungPeriode="2024-02-01" EndeNutzungPeriode="2024-06-30" Mieter1Name="Kündig" Mieter1Vorname="Kevin" Mieter1Strasse="Musterstrasse 7" Mieter1PLZ="1000" Mieter1Ort="Muster">

              &lt;Verbrauchskostenstelle KostenstelleID="101" KostenstelleBezeichnung="Heizkosten (verbrauchsabh.)" Verbrauchsart="01" Promilleanteil=""/>

             &lt;/Mietverhaeltnis>

           &lt;/Objekt>

           &lt;Objekt ObjektID="300002" ObjektArtBezeichnung="Wohnung" ObjektAnzahlZimmer="2.5" ObjektFlaecheGesamt="65.3">

             &lt;Mietverhaeltnis ObjektverhaeltnisID="132112" NutzerID="1080314" BeginnNutzungPeriode="2023-07-01" EndeNutzungPeriode="2023-07-31" Mieter1Name="Baumann" Mieter1Vorname="Christine" Mieter1Strasse="Musterstrasse 30" Mieter1PLZ="1000" Mieter1Ort="Muster">

               &lt;Verbrauchskostenstelle KostenstelleID="101" KostenstelleBezeichnung="Heizkosten (verbrauchsabh.)" Verbrauchsart="01" Promilleanteil=""/>

             &lt;/Mietverhaeltnis>

             &lt;Mietverhaeltnis ObjektverhaeltnisID="150711" NutzerID="100104556" BeginnNutzungPeriode="2023-08-01" EndeNutzungPeriode="2024-06-30" Mieter1Name="Nimonaj" Mieter1Vorname="Flamur" Mieter1Strasse="Musterstrasse 7" Mieter1PLZ="1000" Mieter1Ort="Muster">

               &lt;Verbrauchskostenstelle KostenstelleID="101" KostenstelleBezeichnung="Heizkosten (verbrauchsabh.)" Verbrauchsart="01" Promilleanteil=""/>

             &lt;/Mietverhaeltnis>

          &lt;/Objekt>

### Configuration recommandée (best practice)

Chaque type d'énergie dispose de son propre centre de coûts principal et d'un centre de coûts collectif avec l'unité pour mille

- Électricité du réseau (tarifs réseau et tarifs de pointe)

- Électricité locale (tarifs de l'électricité de batterie et / ou solaire)

- Chaleur

- Eau chaude sanitaire

- Eau froide


L'écriture des coûts côté Garaio REM pour l'électricité locale et l'électricité du réseau peut être réglée à l'aide de la vue d'ensemble et de la saisie du prix dans le tarif smart-me.
Le prix total peut ensuite être comptabilisé dans Garaio pour les centres de coûts Électricité locale et Électricité du réseau.

### Passer les écritures sur les centres de coûts dans Garaio REM

Si des écritures préalables sur les centres de coûts sont nécessaires dans Garaio REM, elles peuvent être reprises du Résumé CSV (Zusammenfassung CSV) de chaque facture établie.

C'est généralement le cas pour l'électricité solaire, l'électricité du réseau et les coûts d'électricité de la pompe à chaleur / du chauffage / du chauffe-eau.

Pour la répartition de l'électricité solaire, cela sera souvent nécessaire, car l'origine de cette information se trouve dans le système smart-me.

Pour les autres centres de coûts, il existe généralement des factures externes qui peuvent être comptabilisées.

1.  Accédez au smart-me Billing via l'onglet Facturation (Rechnungsstellung)

2.  Sélectionnez l'immeuble

3.  Sélectionnez la période de facturation et établissez une facture

4.  Une fois la facture de la période correspondante établie, ouvrez le Résumé CSV (Zusammenfassung CSV)


![Garaio REM – Illustration 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – Illustration 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

Vous y trouverez les kWh et m3 vendus ainsi que le prix par tarif, par unité de décompte et au total.

Avec cette valeur totale du tarif concerné, une écriture peut être passée dans Garaio, puis répartie de manière appropriée en pour mille au moyen du fichier DTA-REM.

## Influence de la configuration sur les chiffres exportés

Option VEWA non activée :

- Exportation en pour mille par centre de coûts
    Dans ce cas, 1000 pour mille correspondent à la consommation totale en kWh. Les pour mille du contrat se rapportent à la consommation par rapport à ce total.


Option VEWA activée :

- Si un tarif unique est enregistré, 1000 pour mille correspondent au prix total (consommation totale \* prix du tarif), mais en même temps aussi à la consommation totale en kWh.

- Si plusieurs tarifs sont enregistrés, p. ex. électricité du réseau et électricité solaire, 1000 pour mille correspondent au prix total, ou au total des kWh du tarif concerné.
    Les tarifs peuvent ainsi être transmis séparément dans des centres de coûts, avec des écritures individuelles des kWh ou du prix dans Garaio REM.
    Si vous souhaitez exporter les tarifs de manière regroupée dans un centre de coûts collectif, la saisie d'un prix pour le tarif côté smart-me est indispensable pour la pondération.

    C'est par exemple déjà le cas lorsqu'un tarif unique (réseau) et un tarif de pointe (réseau) doivent être transmis de manière combinée.
