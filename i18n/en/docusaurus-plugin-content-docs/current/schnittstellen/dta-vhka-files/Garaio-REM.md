---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/Garaio-REM'
description: 'Key information on billing with Garaio REM and smart-me'
sidebar_label: 'Garaio REM'
---
## Key information on billing with Garaio REM and smart-me

- The billing and allocation of costs according to VEWA takes place in the smart\-me system.

- Every billing unit in Garaio REM that is to be queried must exist congruently in smart-me.

- For the billing to be correct, the tenancies as well as vacancies must be recorded for every billing period in all units!

- Garaio REM supports only one billing period per ancillary costs group, which means the electricity must be billed in the same period as all other ancillary costs.

- The tenant list from Garaio REM is synchronized automatically with smart-me.

- Garaio REM cannot import values without values having previously been posted to the main cost centre.


## Current implementation

Currently supported:

- Export of one collective cost centre per main cost centre as a per-mille expression
    \- Total heating costs (combined heat and domestic hot water as a per-mille expression)
    \- Total heating and cooling costs (combined heat, cooling and domestic hot water as a per-mille expression)
    \- Separated heating costs, domestic hot water costs, cooling costs, cold water costs as a per-mille expression
    \- Separated or combined grid electricity costs (grid electricity consumption and peak electricity)
    \- Separated or combined local electricity costs (solar, battery)


Not supported:

- Transferring several collective cost centres per main cost centre separately (can be supported later if there is high demand in the field)

- Transfer of consumption in kWh or as a price
    This function is not supported by Garaio REM in a way that would provide any added value.
    For this to work, the sum of the kWh or the total price must have been posted in Garaio REM beforehand.


## Garaio REM import / export file and key definition in smart-me

### Defining keys in smart-me from a DTA-REM file

In the file exported from GaraioREM you will find the relevant IDs for linking the export file with smart-me.

The relevant IDs are shown in blue and are to be entered as follows.

External key for a main cost centre:

HauptkostenstellenID (100)

With separated cost centres, the heat is linked to the ID = 100

With combined ones, several tariffs can be linked to the same ID.

e.g. heat and domestic hot water = 100



External key for a residential unit in smart-me:

HausID +":"+ObjektID (01 and 30001 = 01:30001)

The result as a per-mille share is entered during export at the position (marked in brown) for the entire collective cost centre and for the individual consumption per tenancy.

![Garaio REM – Figure 1](/img/schnittstellen-dta-vhka-files-garaio-rem/01.png)

![Garaio REM – Figure 2](/img/schnittstellen-dta-vhka-files-garaio-rem/02.png)

### DTA-REM file example

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

### Best practice configuration

Every energy type has its own main cost centre and one collective cost centre with the unit per mille

- Grid electricity (grid tariffs and peak tariffs)

- Local electricity (battery and / or solar electricity tariffs)

- Heat

- Domestic hot water

- Cold water


The cost posting on the Garaio REM side for the local electricity and grid electricity can be handled by means of the overall overview and by entering the price in the smart-me tariff.
The total price can then be posted in Garaio for the local electricity and grid electricity cost centre.

### Carrying out the cost centre posting in Garaio REM

If prior postings to the cost centres are required in Garaio REM, these can be taken from the summary CSV of every invoice created.

This is usually the case for the solar electricity, the grid electricity and for the electricity costs of the heat pump / heating / boiler.

For the allocation of the solar electricity this will be necessary more often, since the origin of this information lies in the smart-me system.

For the other cost centres there are usually external invoices available which can be posted.

1.  Enter smart-me Billing via the Billing (Rechnungsstellung) tab

2.  Select the property

3.  Select the invoice period and create an invoice

4.  Once the invoice for the appropriate period has been created, open the summary CSV


![Garaio REM – Figure 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – Figure 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

It contains the kWh and m3 sold in each case and the price per tariff, per billing unit and as a total.

With this total value of the respective tariff, a posting can be made in Garaio and then distributed accordingly with the DTA-REM file using per mille.

## Influence of the configuration on the exported figures

VEWA option not activated:

- Export in per mille per cost centre
    In this case, 1000 per mille corresponds to the complete consumption in kWh. The per mille in the contract references the consumption relative to this total.


VEWA option is activated:

- If a single tariff is stored, 1000 per mille corresponds to the total price (total consumption \* tariff price), but at the same time also to the total consumption in kWh.

- If several tariffs are stored, e.g. grid electricity and solar electricity, 1000 per mille corresponds to the total price, or to the total of the kWh of the respective tariff.
    This allows the tariffs to be transferred separately into cost centres, with individual postings of the kWh or the price in Garaio REM.
    If you want to export the tariffs combined into one collective cost centre, entering a price for the tariff on the smart-me side is essential for the weighting.

    This is already the case, for example, when a single tariff (grid) and a peak tariff (grid) are to be transferred together.
