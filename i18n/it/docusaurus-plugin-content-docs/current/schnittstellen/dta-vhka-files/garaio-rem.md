---
title: 'Garaio REM'
slug: '/schnittstellen/dta-vhka-files/garaio-rem'
description: 'Indicazioni principali per il conteggio con Garaio REM e smart-me'
sidebar_label: 'Garaio REM'
---
## Indicazioni principali per il conteggio con Garaio REM e smart-me

- Il conteggio e la ripartizione dei costi secondo il CISE (Conteggio individuale delle spese dell'energia e dell'acqua) avvengono nel sistema smart\-me.

- Ogni unità di conteggio in Garaio REM che deve essere interrogata deve esistere in modo congruente in smart-me.

- Affinché il conteggio sia corretto, per ogni periodo di conteggio devono essere registrati in tutte le unità i rapporti di locazione e gli sfitti!

- Garaio REM supporta un solo periodo di conteggio per gruppo di spese accessorie, quindi l'elettricità deve essere conteggiata nello stesso periodo di tutte le altre spese accessorie.

- L'elenco degli inquilini di Garaio REM viene sincronizzato automaticamente con smart-me.

- Garaio REM non può importare valori senza una precedente registrazione di valori nel centro di costo principale.


## Implementazione attuale

Attualmente supportato:

- Esportazione di un centro di costo collettivo per ogni centro di costo principale come valore in per mille
    \- Spese di riscaldamento totali (calore e acqua calda sanitaria combinati come valore in per mille)
    \- Spese di riscaldamento e raffreddamento totali (calore, freddo e acqua calda sanitaria combinati come valore in per mille)
    \- Spese separate per calore, acqua calda sanitaria, freddo e acqua fredda come valore in per mille
    \- Spese per l'elettricità di rete separate o combinate (prelievo dalla rete ed elettricità di punta)
    \- Spese per l'elettricità locale separate o combinate (solare, batteria)


Non supportato:

- Trasmissione separata di più centri di costo collettivi per centro di costo principale (potrà essere supportata in seguito in caso di forte richiesta sul campo)

- Trasmissione dei consumi in kWh o come prezzo
    Questa funzione non è supportata da Garaio REM in modo tale da apportare un valore aggiunto.
    Affinché funzioni, la somma dei kWh o il prezzo totale deve essere stato registrato in precedenza in Garaio REM.


## File di importazione / esportazione Garaio REM e definizione delle chiavi in smart-me

### Definire le chiavi in smart-me da un file DTA-REM

Nel file esportato da GaraioREM trovi gli ID rilevanti per collegare il file di esportazione con smart-me.

Gli ID rilevanti sono evidenziati in blu e devono essere registrati come segue.

Chiave esterna per un centro di costo principale:

HauptkostenstellenID (100)

Nel caso di centri di costo separati, il calore viene collegato all'ID = 100

Nel caso di centri di costo combinati, più tariffe possono essere collegate allo stesso ID.

ad es. calore e acqua calda sanitaria = 100



Chiave esterna per un'unità abitativa in smart-me:

HausID +":"+ObjektID (01 e 30001 = 01:30001)



Il risultato come quota in per mille viene inserito durante l'esportazione nel punto (evidenziato in marrone) per l'intero centro di costo collettivo e per il consumo individuale per ogni rapporto di locazione.

![Garaio REM – Figura 1](/img/schnittstellen-dta-vhka-files-garaio-rem/01.png)

![Garaio REM – Figura 2](/img/schnittstellen-dta-vhka-files-garaio-rem/02.png)

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

### Configurazione consigliata

Ogni tipo di energia dispone di un proprio centro di costo principale e di un centro di costo collettivo con l'unità per mille

- Elettricità di rete (tariffe di rete e tariffe di punta)

- Elettricità locale (tariffe per l'elettricità da batteria e / o solare)

- Calore

- Acqua calda sanitaria

- Acqua fredda


La registrazione dei costi da parte di Garaio REM per l'elettricità locale e l'elettricità di rete può essere gestita tramite la panoramica generale e l'inserimento del prezzo nella tariffa smart-me.
Il prezzo totale può quindi essere registrato in Garaio per i centri di costo elettricità locale ed elettricità di rete.

### Eseguire la registrazione sui centri di costo in Garaio REM

Se in Garaio REM sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal riepilogo CSV (Zusammenfassung CSV) di ogni fattura emessa.

Di solito ciò avviene per l'elettricità solare, l'elettricità di rete e per i costi dell'elettricità della pompa di calore / del riscaldamento / del boiler.

Per la ripartizione dell'elettricità solare ciò sarà necessario più spesso, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo sono di solito disponibili fatture esterne che possono essere registrate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Seleziona l'immobile

3.  Seleziona il periodo di fatturazione ed emetti una fattura

4.  Quando la fattura del periodo corrispondente è stata emessa, apri il riepilogo CSV (Zusammenfassung CSV)


![Garaio REM – Figura 3](/img/schnittstellen-dta-vhka-files-garaio-rem/03.png)

![Garaio REM – Figura 4](/img/schnittstellen-dta-vhka-files-garaio-rem/04.png)

Al suo interno si trovano i kWh e i m3 venduti e il prezzo per tariffa, per unità di conteggio e in totale.

Con questo valore totale della rispettiva tariffa è possibile effettuare una registrazione in Garaio, che viene poi ripartita in modo corretto in per mille con il file DTA-REM.

## Influenza della configurazione sui valori esportati

Opzione CISE non attivata:

- Esportazione in per mille per centro di costo
    In questo caso 1000 per mille corrispondono al consumo completo in kWh. I valori in per mille del contratto riferiscono il consumo a questo totale.


Opzione CISE attivata:

- Se è registrata una tariffa unica, 1000 per mille corrispondono al prezzo totale (consumo totale \* prezzo della tariffa), ma allo stesso tempo anche al consumo totale in kWh.

- Se sono registrate più tariffe, ad es. elettricità di rete ed elettricità solare, 1000 per mille corrispondono al prezzo totale, ovvero al totale dei kWh della rispettiva tariffa.
    In questo modo le tariffe possono essere trasmesse separatamente nei centri di costo, con registrazioni singole dei kWh o del prezzo in Garaio REM.
    Se si desidera esportare le tariffe in forma aggregata in un centro di costo collettivo, l'inserimento di un prezzo nella tariffa in smart-me è indispensabile per la ponderazione.

    Questo è ad es. già il caso quando una tariffa unica (rete) e una tariffa di punta (rete) devono essere trasmesse in forma combinata.
