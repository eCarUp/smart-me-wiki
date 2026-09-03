---
title: 'Importazione / esportazione di file DTA-VHKA (beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Descrizione generale dell''interfaccia'
sidebar_label: 'File DTA-VHKA'
---
## Descrizione generale dell'interfaccia

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung, scambio di supporti dati per il conteggio dei costi di riscaldamento e acqua calda in base al consumo) è la denominazione dell'interfaccia per lo scambio elettronico di dati di consumo tra le società di conteggio e le amministrazioni immobiliari.

Un'interfaccia uniforme a livello svizzero per l'importazione dei dati di consumo nei programmi gestionali garantisce efficienza e flessibilità.
In questo modo le amministrazioni immobiliari possono collaborare con tutte le ditte di lettura, indipendentemente dal software utilizzato.

## Indicazioni operative relative ai file VHKA

- L'elenco degli inquilini viene gestito nel software immobiliare. Nel portale smart-me, sotto "Destinatari delle fatture" (Rechnungsempfänger), i contratti e gli sfitti vengono ripresi automaticamente.

- L'elenco degli inquilini nel software immobiliare deve essere completo; gli sfitti devono essere trasmessi obbligatoriamente.


## Descrizione del processo di importazione ed esportazione DTA-VHKA

1.  Esportare dal software immobiliare il file di richiesta VHKA per l'immobile.
    Il file viene creato in base a un periodo di conteggio (data di inizio, data di fine) di un immobile.
    Questo file contiene quindi una richiesta per ogni inquilino dell'immobile all'interno di tale periodo, per ogni unità di conteggio esistente, relativa a:


- Il consumo dell'unità di misura in kWh o m3

- Il valore in per mille della somma dei costi ripartiti
    (VEWA deve essere configurato in smart-me)

- Il valore in per mille per i costi di base e i costi variabili
    (VEWA deve essere configurato in smart-me)

- Il prezzo in una valuta dei costi maturati come somma oppure suddiviso in costi di base e costi variabili.
    (VEWA deve essere configurato in smart-me)


2.  Le unità di conteggio e i relativi centri di costo devono poter essere allineati in entrambi i software. Questo viene realizzato con l'aiuto delle chiavi esterne in smart-me.

3.  Il file di richiesta VHKA esportato può poi essere caricato in smart-me Billing.

4.  smart-me Billing calcola i consumi delle singole unità di conteggio per tipo di energia e compila il file caricato con i dati.

5.  Il file viene esportato di nuovo, completato con i dati.

6.  Il file VHKA completato può ora essere ricaricato nel software immobiliare.


![Importazione / esportazione di file DTA-VHKA (beta) – Figura 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formati attualmente supportati

- XML (standard DTA-VHKA)


### Caricare e scaricare il file

![Importazione / esportazione di file DTA-VHKA (beta) – Figura 2](/img/schnittstellen-dta-vhka-files/02.png)

![Importazione / esportazione di file DTA-VHKA (beta) – Figura 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  In Billing, vai su "Fatture" (Rechnungen) e poi nella sezione "Esportare" (Exportieren)


2\. Seleziona il tipo di esportazione e carica il file tramite "Esportare" (Exportieren).

3\. Scarica il file completato sul tuo computer tramite "Scaricare" (Herunterladen).

## Collegamento dei centri di costo con le tariffe energetiche e le unità abitative smart-me

Perché il collegamento tra software gestionale e immobile smart-me funzioni, in entrambi i sistemi devono essere creati centri di costo e unità abitative corrispondenti.

Questi vengono a loro volta collegati una sola volta, tramite i numeri ID del file di incarico, con le tariffe e le unità abitative in smart-me.

In linea di principio, la panoramica seguente vale per tutti i sistemi di gestione immobiliare.

### Centri di costo e collegamenti tariffari quando un centro di costo = un sistema tariffario

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda

![Importazione / esportazione di file DTA-VHKA (beta) – Figura 4](/img/schnittstellen-dta-vhka-files/04.png)

Centri di costo per l'elettricità

![Importazione / esportazione di file DTA-VHKA (beta) – Figura 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centri di costo e collegamenti tariffari quando un centro di costo = più tariffe combinate

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda in caso di combinazione

Combinazioni:

- Calore e acqua calda sanitaria

- Calore + acqua calda sanitaria + freddo


![Importazione / esportazione di file DTA-VHKA (beta) – Figura 6](/img/schnittstellen-dta-vhka-files/06.png)

Centri di costo per l'elettricità combinata

Combinazioni più frequenti:

- Centro di costo elettricità di rete: tariffe ore di punta e ore fuori punta + elettricità di picco

- Centro di costo elettricità locale: tariffe elettricità solare ore di punta + elettricità solare ore fuori punta 


![Importazione / esportazione di file DTA-VHKA (beta) – Figura 7](/img/schnittstellen-dta-vhka-files/07.png)

### Collegare i centri di costo alle tariffe energetiche (definire la chiave VKA)

Le chiavi esterne sono necessarie per allineare le unità di conteggio e i centri di costo del file di richiesta con le tariffe e le unità di conteggio della piattaforma smart-me. 

Nota:
Finché non intervengono modifiche sul lato del software immobiliare (locali o centri di costo aggiuntivi), le chiavi esterne sono statiche e non devono essere rinnovate ogni volta.

![Importazione / esportazione di file DTA-VHKA (beta) – Figura 8](/img/schnittstellen-dta-vhka-files/08.png)

Perché i centri di costo nel file di incarico VHKA possano essere assegnati in modo univoco, per ogni vettore energetico richiesto deve essere definita e collegata una tariffa adeguata nel portale smart-me.

Il collegamento avviene tramite la rispettiva chiave esterna della tariffa creata.

Se più tariffe vengono collegate allo stesso centro di costo, semplicemente più tariffe ricevono lo stesso ID del centro di costo.

Singolarmente:
Centro di costo elettricità di rete (ID= 6) --> tariffa unica rete (chiave esterna = 6)

Combinato:
Centro di costo elettricità di rete (ID= 6) \-->  ore di punta (chiave esterna = 6) e ore fuori punta (chiave esterna = 6)

Nota: 

- Se le tariffe elettriche vengono trasmesse in modo combinato, in smart-me devono essere registrati i prezzi per le tariffe elettriche!

- Per le tariffe di calore e acqua in combinazione, i costi non sono necessari in smart-me.


![Importazione / esportazione di file DTA-VHKA (beta) – Figura 9](/img/schnittstellen-dta-vhka-files/09.png)

## Software compatibili e indicazioni di configurazione specifiche

Software immobiliari che supportano lo standard DTA-VHKA.
Elenco secondo Qualipool: [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/Immotop2)

- Rimo R5 (istruzioni Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/Garaio-REM)

- [Abaimmo](/schnittstellen/dta-vhka-files/AbaImmo)


## Gestire i messaggi di errore
