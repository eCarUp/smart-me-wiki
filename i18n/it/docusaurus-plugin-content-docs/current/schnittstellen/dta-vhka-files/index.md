---
title: 'Import / export di file DTA-VHKA (Beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Descrizione generale dell''interfaccia'
sidebar_label: 'File DTA-VHKA'
---
## Descrizione generale dell'interfaccia

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung, ovvero scambio di dati su supporto per il conteggio delle spese di riscaldamento e acqua calda sanitaria in base al consumo) è la denominazione dell'interfaccia per lo scambio elettronico di dati relativi ai consumi tra le società di conteggio e le amministrazioni immobiliari.

Un'interfaccia uniforme a livello svizzero per l'importazione dei dati di consumo nei programmi di gestione immobiliare garantisce efficienza e flessibilità.
In questo modo le amministrazioni immobiliari possono collaborare con tutte le società di lettura, indipendentemente dal software che utilizzano.

## Indicazioni operative relative ai file VHKA

- L'elenco degli inquilini viene gestito nel software immobiliare. Nel portale smart-me i contratti e gli sfitti vengono ripresi automaticamente in "Destinatari fattura" ("Rechnungsempfänger").

- L'elenco degli inquilini nel software immobiliare deve essere completo; gli sfitti devono essere obbligatoriamente trasmessi.


## Descrizione del processo di importazione ed esportazione DTA-VHKA

1.  Esportare dal software immobiliare il file di richiesta VHKA per lo stabile.
    Il file viene creato sulla base di un periodo di conteggio (data di inizio, data di fine) di uno stabile.
    Questo file contiene quindi una richiesta per ogni inquilino dello stabile all'interno di tale periodo, per ogni unità di conteggio esistente, relativa a:


- Il consumo dell'unità di contatore in kWh o m3

- Il valore in millesimi della somma dei costi ripartiti
    (VEWA deve essere configurato in smart-me)

- Il valore in millesimi per i costi fissi e i costi variabili
    (VEWA deve essere configurato in smart-me)

- Il prezzo in una valuta dei costi maturati come somma oppure suddiviso in costi fissi e costi variabili.
    (VEWA deve essere configurato in smart-me)


2.  Le unità di conteggio e i relativi centri di costo devono poter essere allineati in entrambi i software. Ciò avviene tramite le chiavi esterne in smart-me.

3.  Il file di richiesta VHKA esportato può quindi essere caricato in smart-me Billing.

4.  smart-me Billing calcola i consumi delle singole unità di conteggio per tipo di energia e compila con i dati il file caricato.

5.  Il file completato con i dati viene nuovamente esportato.

6.  Il file VHKA completato può ora essere ricaricato nel software immobiliare.


![Import / export di file DTA-VHKA (Beta) – Figura 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formati attualmente supportati

- XML (standard DTA-VHKA)


### Caricare e scaricare il file

![Import / export di file DTA-VHKA (Beta) – Figura 2](/img/schnittstellen-dta-vhka-files/02.png)

![Import / export di file DTA-VHKA (Beta) – Figura 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  Nel Billing, passare a "Fatture" ("Rechnungen") e poi alla sezione "Esporta" ("Exportieren")


2\. Selezionare il tipo di esportazione e caricare il file tramite "Esporta" ("Exportieren").

3\. Scaricare il file completato sul proprio computer tramite "Scarica" ("Herunterladen").

## Collegamento dei centri di costo con le tariffe energetiche e le unità abitative smart-me

Affinché il collegamento tra il software di gestione e lo stabile smart-me funzioni, è necessario creare centri di costo e unità abitative corrispondenti in entrambi i sistemi.

Questi vengono a loro volta collegati una sola volta alle tariffe e alle unità abitative in smart-me tramite i numeri ID contenuti nel file di incarico.

In linea di principio, la panoramica seguente vale per tutti i sistemi di gestione immobiliare.

### Centri di costo e collegamenti tariffari quando un centro di costo = corrisponde a un sistema tariffario

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda

![Import / export di file DTA-VHKA (Beta) – Figura 4](/img/schnittstellen-dta-vhka-files/04.png)

Centri di costo per l'elettricità

![Import / export di file DTA-VHKA (Beta) – Figura 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centri di costo e collegamenti tariffari quando un centro di costo = combina più tariffe

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda in caso di combinazione

Combinazioni:

- Calore e acqua calda sanitaria

- Calore + acqua calda sanitaria + freddo


![Import / export di file DTA-VHKA (Beta) – Figura 6](/img/schnittstellen-dta-vhka-files/06.png)

Centri di costo per elettricità combinata

Combinazioni più frequenti:

- Centro di costo elettricità di rete: tariffe ore di punta e ore fuori punta + elettricità di picco

- Centro di costo elettricità locale: tariffe elettricità solare ore di punta + elettricità solare ore fuori punta 


![Import / export di file DTA-VHKA (Beta) – Figura 7](/img/schnittstellen-dta-vhka-files/07.png)

### Collegare i centri di costo alle tariffe energetiche (definire la chiave VKA)

Le chiavi esterne sono necessarie per allineare le unità di conteggio e i centri di costo del file di richiesta con le tariffe e le unità di conteggio della piattaforma smart-me. 

Nota:
Finché non intervengono modifiche sul lato del software immobiliare (locali o centri di costo aggiuntivi), le chiavi esterne sono statiche e non devono essere rinnovate ogni volta.

![Import / export di file DTA-VHKA (Beta) – Figura 8](/img/schnittstellen-dta-vhka-files/08.png)

Affinché i centri di costo nel file di incarico VHKA possano essere assegnati in modo univoco, per ogni vettore energetico richiesto occorre definire e collegare una tariffa corrispondente nel portale smart-me.

Il collegamento avviene tramite la rispettiva chiave esterna della tariffa creata.

Se più tariffe vengono collegate allo stesso centro di costo, più tariffe ricevono semplicemente lo stesso ID del centro di costo.

Singolo:
Centro di costo elettricità di rete (ID= 6) --> Tariffa unica rete ( Chiave esterna = 6)

Combinato:
Centro di costo elettricità di rete (ID= 6) \-->  Ore di punta ( Chiave esterna = 6) e ore fuori punta (Chiave esterna = 6)

Nota: 

- Se le tariffe elettriche vengono trasmesse in forma combinata, in smart-me devono essere registrati i prezzi delle tariffe elettriche!

- Per le tariffe di calore e acqua in combinazione, i costi in smart-me non sono necessari.


![Import / export di file DTA-VHKA (Beta) – Figura 9](/img/schnittstellen-dta-vhka-files/09.png)

## Software compatibili e indicazioni di configurazione specifiche

Software immobiliari che supportano lo standard DTA-VHKA.
Elenco secondo Qualipool: [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/immotop2)

- Rimo R5 (istruzioni Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/garaio-rem)

- [Abaimmo](/schnittstellen/dta-vhka-files/abaimmo)


## Gestione dei messaggi di errore
