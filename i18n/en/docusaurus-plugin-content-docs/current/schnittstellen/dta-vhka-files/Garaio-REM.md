---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/Garaio-REM'
description: 'Key notes on billing with Garaio REM and smart-me'
sidebar_label: 'Garaio REM'
---
## Key notes on billing with Garaio REM and smart-me

- Billing and the cost allocation according to VEWA take place in the smart\-me system.

- Every billing unit in Garaio REM that is to be queried must exist congruently in smart-me.

- For the billing to be correct, the tenancies and vacancies must be recorded in all units for every billing period!

- Garaio REM only supports one billing period per ancillary costs group, so electricity must be billed in the same period as all other ancillary costs.

- The tenant list from Garaio REM is automatically reconciled with smart-me.

- Garaio REM cannot import any values without a prior posting of values in the main cost center.


## Current implementation

Currently supported:

- Export of one collective cost center per main cost center as a per mille value
    \- Total heating costs (combined heat and domestic hot water as a per mille value)
    \- Total heating and cooling costs (combined heat, cooling and domestic hot water as a per mille value)
    \- Separate heat costs, domestic hot water costs, cooling costs,  cold water costs as a per mille value
    \- Separate or combined grid electricity costs  (grid electricity consumption and peak power)
    \- Separate or combined local electricity costs (solar, battery)


Not supported:

- Transferring multiple collective cost centers per main cost center separately (can be supported later in the field if there is high demand)

- Transfer of consumption in kWh or as a price
    This function is not supported by Garaio REM in a way that would provide added value.
    For this to work, the total kWh or the total price must have been posted in Garaio REM beforehand.


## Garaio REM import / export file and key definition in smart-me

### Defining keys in smart-me from a DTA-REM file

In the file exported from GaraioREM you will find the relevant IDs for linking the export file with smart-me.

The relevant IDs are shown in blue and must be stored as follows.

External key for a main cost center:

HauptkostenstellenID (100)

For separate cost centers, heat is linked to ID = 100

For combined cost centers, several tariffs can be linked to the same ID.

e.g. heat and domestic hot water = 100



External key for a residential unit in smart-me:

HausID +":"+ObjektID (01 and 30001 = 01:30001)



During export, the result as a per mille share is entered at the position (marked in brown) for the entire collective cost center and for the individual consumption per tenancy.

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

Each energy type has its own main cost center and a collective cost center with the unit per mille

- Grid electricity (grid tariffs and peak tariffs)

- Local electricity (battery and / or solar electricity tariffs)

- Heat

- Domestic hot water

- Cold water


The cost posting on the Garaio REM side for local electricity and grid electricity can be handled using the overall summary and by entering the price in the smart-me tariff.
The total price can then be posted in Garaio for the local electricity and grid electricity cost centers.

### Posting to cost centers in Garaio REM

If prior postings to the cost centers are required in Garaio REM, they can be taken from the Summary CSV (Zusammenfassung CSV) of every invoice created.

This is usually the case for solar electricity, grid electricity and the electricity costs of the heat pump / heating / boiler.

When allocating solar electricity, this will be necessary more often, as this information originates in the smart-me system.

For the other cost centers, there are usually external invoices that can be posted.

1.  Open smart-me Billing via the Billing (Rechnungsstellung) tab

2.  Select the property

3.  Select the billing period and create an invoice

4.  Once the invoice for the matching period has been created, open the Summary CSV (Zusammenfassung CSV)


![Garaio REM – Figure 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – Figure 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

It contains the kWh and m3 sold as well as the price per tariff, per billing unit and in total.

With this total value of the respective tariff, a posting can be made in Garaio and then distributed accordingly in per mille with the DTA-REM file.

## Effect of the configuration on the exported figures

VEWA option not activated:

- Export in per mille per cost center
    In this case, 1000 per mille corresponds to the complete consumption in kWh. The per mille values in the contract correspond to the consumption referenced to this total.


VEWA option is activated:

- If a single-rate tariff is stored, 1000 per mille corresponds to the total price (total consumption \* tariff price), but at the same time also to the total consumption in kWh.

- If several tariffs are stored, e.g. grid electricity and solar electricity, 1000 per mille corresponds to the total price or to the total kWh of the respective tariff.
    This allows the tariffs to be transferred separately into cost centers, with individual postings of the kWh or the price in Garaio REM.
    If you want to export the tariffs combined into one collective cost center, entering a price for the tariff in smart-me is essential for the weighting.

    This is already the case, for example, if a single-rate tariff (grid) and a peak tariff (grid) are to be transferred combined.
