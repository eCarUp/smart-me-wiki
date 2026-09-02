---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/Garaio-REM'
description: 'Wichtigste Hinweise zur Abrechnung mit Garaio REM und smart-me'
sidebar_label: 'Garaio REM'
---
## Wichtigste Hinweise zur Abrechnung mit Garaio REM und smart-me

- Die Abrechnung und Verschlüsselung der Kosten nach VEWA erfolgt im smart\-me System.

- Jede Abrechnungseinheit im Garaio REM die Abgefragt werden will muss in smart-me kongruent bestehen.

- Damit die Abrechnung stimmt, müssen für jede Abrechnungperiode in allen Einheiten die Mietverhältnisse sowie Leerstände erfasst sein!

- Garaio REM unterstützt nur eine Abrechnungsperiode pro Nebenkostengruppe, daher muss der Strom in der gleichen Periode abgerechnet werden wie alle anderen Nebenkosten.

- Der Mieterspiegel aus Garaio REM wird mit smart-me automatisch abgeglichen.

- Garaio REM kann keine Werte importieren ohne eine vorherige Buchung von Werten in der Hauptkostenstelle.


## Aktuelle Implementation

Aktuell unterstützt:

- Export von einer Sammelstelle pro Hauptkostenstelle als Promilleausdruck
    \- Heizkosten Gesamt (Kombiniertes Wärme und Warmwasser als Promilleausdruck)
    \- Heiz und Kältekosten Gesamt (Kombiniertes Wärme, Kälte und Warmwasser als Promilleausdruck)
    \- Separierte Wärmekosten, Warmwasserkosten, Kältekosten,  Kaltwasserkosten als Promilleausdruck
    \- Separierte oder kombinierte Netzstromkosten  (Netzstromverbrauch und Spitzenstrom)
    \- Separierte oder kombinierte Lokalstromkosten (Solar, Batterie)


Nicht unterstützt:

- Mehrere Sammelkostenstellen pro Hauptkostenstelle getrennt übertragen (kann bei hohem Bedarf im Feld später unterstützt werden)

- Übertragung der Verbräuche in kWh oder als Preis
    Diese Funktion wird seitens Garaio REM nicht passend unterstützt, dass es einen Mehrwert bedeutet.
    Damit dies Funktioniert muss die Summe der kWh oder der Gesamtpreis im Vorfeld im Garaio REM gebucht worden sein.


## Garaio REM Import / Export File und Schlüsseldefinition in smart-me

### Schlüssel in smart-me definieren aus einem DTA-REM File

Im Exportierten File von GaraioREM findest du die relevanten ID's zur verknüpfung des Exportfiles mit smart-me.

Die Relevanten ID's sind in blau gehalten und sind wie folgt zu hinterlegen.

Externer Schlüssel für eine Hauptkostenstelle:

HauptkostenstellenID (100)

Bei separierten Kostenstellen wird die Wärme auf die ID = 100 gelinkt

Bei kombinierten können mehrere Tarife auf die gleiche ID gelinkt werden.

z.B. Wärme und Warmwasser = 100



Externer Schlüssel für ein Wohnobjekt bei smart-me:

HausID +":"+ObjektID (01 und 30001 = 01:30001)



Das Ergebnis als Promilleanteil wird beim Export an der Stelle (braun markiert) für die Gesamte Sammelstelle und den individuellen Verbrauch pro Mieterverhältnis eingetragen.

![Garaio REM – Abbildung 1](/img/schnittstellen-dta-vhka-files-garaio-rem/01.png)

![Garaio REM – Abbildung 2](/img/schnittstellen-dta-vhka-files-garaio-rem/02.png)

### DTA-REM File Beispiel

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

### Best Practice Konfiguration

Jeder Energietyp besitzt eine eigene Hauptkostenstelle und eine Sammelkostenstelle mit der Einheit Promille

- Netzstrom (Netztarife und Spitzentarife)

- Lokalstrom (Batterie- und / oder Solarstromtarife)

- Wärme

- Warmwasser

- Kaltwasser


Die Kostenbuchung seitens Garaio REM für den Lokalstrom und Netzstrom kann mittels der Gesamtübersicht und der Eintragung des Preises im smart-me Tarif geregelt werden.
Der Gesamtpreis kann dann im Garaio für die Kostenstelle Lokalstrom und Netzstrom gebucht werden.

### Kostenstellenbuchung im Garaio REM durchführen

Werden vorausgehende Buchungen in Garaio REM auf die Kostenstellen benötigt, können diese aus der Zusammenfassung CSV bei jeder erstellter Rechnung entnommen werden.

Üblicherweise ist das der Fall für den Solarstrom, den Netzstrom und für die Elektrizitätskosten der Wärmepumpe / Heizung / Boiler.

Bei der Umlage des Solarstromes wird dies öfters nötig sein, da der Ursprung dieser Information im smart-me System liegt.

Bei den anderen Kostenstellen liegen üblicherweise externe Rechnungen vor welche gebucht werden können.

1.  Betrete das smart-me Billing über den Tab Rechnungsstellung

2.  Wähle die Liegenschaft aus

3.  Wähle den Rechnungszeitraum und erstelle eine Rechnung

4.  Wenn die Rechnung des passenden Zeitraums erstellt ist, öffne die Zusammenfassung CSV


![Garaio REM – Abbildung 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – Abbildung 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

Darin enthalten sin die jeweils verkauften kWh, m3 und der Preis pro Tarif, Abrechnungseinheit und im Total zu finden.

Mit diesem Totalwert des jeweiligen Tarifs, kann eine Buchung in Garaio erledigt werden und dann mit dem DTA-REM File mit Promille passend verteilt werden.

## Konfigurationseinfluss auf die exportierten Zahlen

VEWA Option nicht aktiviert:

- Export in Promille pro Kostenstelle
    1000 Promille entsprechen in diesem Fall dem kompletten Verbrauch in kWh. Die Promille im Kontrakt dem Verbrauch referenziert auf dieses Total.


VEWA Option ist aktiviert:

- Ist ein Einheitstarif hinterlegt, entspricht 1000 Promille dem Gesamtpreis (Gesamtverbrauch \* Tarifpreis), gleichzeitig aber auch dem Gesamtverbrauch in kWh.

- Sind mehrere Tarife hinterlegt z.B. Netzstrom und Solarstrom, entsprechen 1000 Promille dem Gesamtpreis, bzw. dem Total der kWh des jeweiligen Tarifs.
    So können die Tarife separat in Kostenstellen übertragen werden, mit Einzelbuchungen der kWh oder des Preises in Garaio REM.
    Möchte man die Tarife zusammengefasst exportieren in eine Sammelkostenstelle ist eine Preiseintragung beim Tarif seitens smart-me für die Gewichtung unerlässlich.

    Dies ist z.B. bereits der Fall wenn ein Einheitstarif (Netz) und ein Spitzentarif (Netz) gemischt übertragen werden sollen.
