---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/garaio-rem'
description: 'Indicazioni principali per il conteggio con Garaio REM e smart-me'
sidebar_label: 'Garaio REM'
---
## Indicazioni principali per il conteggio con Garaio REM e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avvengono nel sistema smart\-me.

- Ogni unità di conteggio in Garaio REM che deve essere interrogata deve esistere in modo congruente in smart-me.

- Affinché il conteggio sia corretto, per ogni periodo di conteggio devono essere registrati in tutte le unità i rapporti di locazione e gli sfitti!

- Garaio REM supporta un solo periodo di conteggio per gruppo di spese accessorie; l'elettricità deve quindi essere conteggiata nello stesso periodo di tutte le altre spese accessorie.

- L'elenco degli inquilini di Garaio REM viene allineato automaticamente con smart-me.

- Garaio REM non può importare valori senza una precedente registrazione di valori nel centro di costo principale.


## Implementazione attuale

Attualmente supportato:

- Esportazione di un centro di raccolta per ogni centro di costo principale come quota per mille
    \- Costi di riscaldamento totali (calore e acqua calda sanitaria combinati come quota per mille)
    \- Costi di riscaldamento e raffreddamento totali (calore, freddo e acqua calda sanitaria combinati come quota per mille)
    \- Costi separati per calore, acqua calda sanitaria, freddo e acqua fredda come quota per mille
    \- Costi dell'elettricità di rete separati o combinati (consumo di elettricità di rete e tariffa di punta)
    \- Costi dell'elettricità locale separati o combinati (solare, batteria)


Non supportato:

- Trasmissione separata di più centri di costo collettivi per ogni centro di costo principale (potrà essere supportata in seguito in caso di forte richiesta sul campo)

- Trasmissione dei consumi in kWh o come prezzo
    Questa funzione non è supportata da Garaio REM in modo tale da rappresentare un valore aggiunto.
    Affinché funzioni, la somma dei kWh o il prezzo totale deve essere stato registrato in precedenza in Garaio REM.


## File di importazione / esportazione Garaio REM e definizione delle chiavi in smart-me

### Definire le chiavi in smart-me da un file DTA-REM

Nel file esportato da GaraioREM trovi gli ID rilevanti per collegare il file di esportazione con smart-me.

Gli ID rilevanti sono evidenziati in blu e vanno registrati come segue.

Chiave esterna per un centro di costo principale:

HauptkostenstellenID (100)

Con centri di costo separati, il calore viene collegato all'ID = 100

Con centri di costo combinati, più tariffe possono essere collegate allo stesso ID.

ad es. calore e acqua calda sanitaria = 100



Chiave esterna per un oggetto abitativo in smart-me:

HausID +":"+ObjektID (01 e 30001 = 01:30001)



Il risultato come quota per mille viene inserito durante l'esportazione nel punto (evidenziato in marrone) per l'intero centro di raccolta e per il consumo individuale di ogni rapporto di locazione.

![Garaio REM – figura 1](/img/schnittstellen-dta-vhka-files-garaio-rem/01.png)

![Garaio REM – figura 2](/img/schnittstellen-dta-vhka-files-garaio-rem/02.png)

### Esempio di file DTA-REM

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

### Configurazione best practice

Ogni tipo di energia dispone di un proprio centro di costo principale e di un centro di costo collettivo con l'unità per mille

- Elettricità di rete (tariffe di rete e tariffe di punta)

- Elettricità locale (tariffe dell'elettricità da batteria e/o solare)

- Calore

- Acqua calda sanitaria

- Acqua fredda


La registrazione dei costi da parte di Garaio REM per l'elettricità locale e l'elettricità di rete può essere gestita tramite la panoramica generale e l'inserimento del prezzo nella tariffa smart-me.
Il prezzo totale può quindi essere registrato in Garaio per il centro di costo elettricità locale ed elettricità di rete.

### Eseguire la registrazione sui centri di costo in Garaio REM

Se in Garaio REM sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal riepilogo CSV di ogni fattura creata.

Di solito è il caso per l'elettricità solare, l'elettricità di rete e per i costi dell'elettricità della pompa di calore / del riscaldamento / del boiler.

Per la ripartizione dell'elettricità solare ciò sarà spesso necessario, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo sono di solito disponibili fatture esterne che possono essere registrate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Seleziona l'immobile

3.  Seleziona il periodo di fatturazione e crea una fattura

4.  Quando la fattura del periodo corrispondente è stata creata, apri il riepilogo CSV (Zusammenfassung CSV)


![Garaio REM – figura 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – figura 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

Al suo interno si trovano i kWh e i m3 venduti e il prezzo per tariffa, per unità di conteggio e in totale.

Con questo valore totale della rispettiva tariffa è possibile effettuare una registrazione in Garaio e poi ripartirla in modo appropriato con il file DTA-REM in per mille.

## Influenza della configurazione sui valori esportati

Opzione VEWA non attivata:

- Esportazione in per mille per centro di costo
    In questo caso 1000 per mille corrispondono al consumo completo in kWh. I per mille nel contratto rappresentano il consumo riferito a questo totale.


Opzione VEWA attivata:

- Se è impostata una tariffa unica, 1000 per mille corrispondono al prezzo totale (consumo totale \* prezzo della tariffa), ma allo stesso tempo anche al consumo totale in kWh.

- Se sono impostate più tariffe, ad es. elettricità di rete ed elettricità solare, 1000 per mille corrispondono al prezzo totale, ovvero al totale dei kWh della rispettiva tariffa.
    In questo modo le tariffe possono essere trasmesse separatamente nei centri di costo, con registrazioni singole dei kWh o del prezzo in Garaio REM.
    Se si desidera esportare le tariffe in forma aggregata in un centro di costo collettivo, è indispensabile inserire un prezzo nella tariffa in smart-me per la ponderazione.

    Questo è già il caso, ad es., quando una tariffa unica (rete) e una tariffa di punta (rete) devono essere trasmesse insieme.
