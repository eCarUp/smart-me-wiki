---
title: 'DTA-VHKA Files Import / Export (Beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Descrizione generale dell''interfaccia'
sidebar_label: 'DTA-VHKA Files'
---
<Menueweg>Fatturazione → Emettere una fattura → Esporta</Menueweg>

## Descrizione generale dell'interfaccia

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung, ossia lo scambio di supporti dati per il conteggio dei costi di riscaldamento e acqua calda in base al consumo) è il nome dell'interfaccia per lo scambio elettronico dei dati di consumo tra le società di conteggio e gli amministratori immobiliari.

Un'interfaccia uniforme a livello svizzero per importare i dati di consumo nei software di amministrazione garantisce efficienza e flessibilità.
In questo modo le amministrazioni immobiliari possono collaborare con tutte le società di lettura, indipendentemente dal software che utilizzano.

## Indicazioni operative relative ai file VHKA

- L'elenco degli inquilini viene gestito nel software immobiliare. Nel portale smart-me, i contratti e gli sfitti vengono ripresi automaticamente in "Destinatari della fattura" ("Rechnungsempfänger").

- L'elenco degli inquilini nel software immobiliare deve essere completo; gli sfitti devono obbligatoriamente essere trasmessi.


## Descrizione del processo di importazione ed esportazione DTA-VHKA

1.  Esportare il file di richiesta VHKA dell'immobile dal software immobiliare.
    Il file viene creato in base a un periodo di conteggio (data di inizio, data di fine) di un immobile.
    Questo file contiene quindi una richiesta per ogni inquilino dell'immobile in questo periodo, per ogni unità di conteggio esistente, relativa a:


- Il consumo dell'unità di misura del contatore in kWh o m3

- Il valore per mille della somma dei costi ripartiti
    (il CISE (Conteggio individuale delle spese dell'energia e dell'acqua) deve essere configurato in smart-me)

- Il valore per mille per i costi di base e i costi variabili
    (il CISE deve essere configurato in smart-me)

- Il prezzo in una valuta dei costi maturati, come somma oppure suddiviso in costi di base e costi variabili.
    (il CISE deve essere configurato in smart-me)


2.  Le unità di conteggio e i relativi centri di costo devono poter essere allineati in entrambi i software. Ciò avviene tramite le chiavi esterne in smart-me.

3.  Il file di richiesta VHKA esportato può quindi essere caricato in smart-me Billing.

4.  smart-me Billing calcola i consumi delle singole unità di conteggio per tipo di energia e compila il file caricato con i dati.

5.  Il file, completato con i dati, viene nuovamente esportato.

6.  Il file VHKA completato può ora essere caricato nuovamente nel software immobiliare.


![DTA-VHKA Files Import / Export (Beta) – Figura 1](/img/schnittstellen-dta-vhka-files/01.png)

## Formati attualmente supportati

- XML (standard DTA-VHKA)


### Caricare e scaricare il file

![DTA-VHKA Files Import / Export (Beta) – Figura 2](/img/schnittstellen-dta-vhka-files/02.png)

![DTA-VHKA Files Import / Export (Beta) – Figura 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  In Billing, vai su "Fatture" ("Rechnungen") e poi nella sezione "Esporta" ("Exportieren")


2\. Seleziona il tipo di esportazione e carica il file tramite "Esporta" ("Exportieren").

3\. Scarica il file completato sul tuo computer tramite "Scarica" ("Herunterladen").

## Collegamento dei centri di costo con le tariffe energetiche e le unità abitative smart-me

Affinché il collegamento tra il software di amministrazione e l'immobile smart-me funzioni, è necessario creare centri di costo e unità abitative corrispondenti in entrambi i sistemi.

Questi vengono a loro volta collegati una sola volta, tramite i numeri ID del file di richiesta, alle tariffe e alle unità abitative in smart-me.

La panoramica seguente vale in linea di principio per tutti i sistemi di amministrazione immobiliare.

### Centri di costo e collegamenti alle tariffe quando un centro di costo corrisponde a un sistema tariffario

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda

![DTA-VHKA Files Import / Export (Beta) – Figura 4](/img/schnittstellen-dta-vhka-files/04.png)

Centri di costo per l'elettricità

![DTA-VHKA Files Import / Export (Beta) – Figura 5](/img/schnittstellen-dta-vhka-files/05.png)

### Centri di costo e collegamenti alle tariffe quando un centro di costo combina più tariffe

Centri di costo per calore, freddo, acqua calda sanitaria e acqua fredda in caso di combinazione

Combinazioni:

- Calore e acqua calda sanitaria

- Calore + acqua calda sanitaria + freddo


![DTA-VHKA Files Import / Export (Beta) – Figura 6](/img/schnittstellen-dta-vhka-files/06.png)

Centri di costo per l'elettricità combinata

Combinazioni più frequenti:

- Centro di costo elettricità di rete: tariffe HT e NT + elettricità di punta

- Centro di costo elettricità locale: tariffe elettricità solare HT + elettricità solare NT 


![DTA-VHKA Files Import / Export (Beta) – Figura 7](/img/schnittstellen-dta-vhka-files/07.png)

### Collegare i centri di costo alle tariffe energetiche (definire le chiavi VKA)

Le chiavi esterne sono necessarie per allineare le unità di conteggio e i centri di costo del file di richiesta con le tariffe e le unità di conteggio della piattaforma smart-me. 

Nota:
Finché non intervengono modifiche nel software immobiliare (locali o centri di costo aggiuntivi), le chiavi esterne sono statiche e non devono essere rinnovate ogni volta.

![DTA-VHKA Files Import / Export (Beta) – Figura 8](/img/schnittstellen-dta-vhka-files/08.png)

Affinché i centri di costo nel file di richiesta VHKA possano essere assegnati in modo univoco, per ogni vettore energetico richiesto deve essere definita e collegata una tariffa corrispondente nel portale smart-me.

Il collegamento avviene tramite la rispettiva chiave esterna ("Externer Schlüssel") della tariffa creata.

Se più tariffe sono collegate allo stesso centro di costo, più tariffe ricevono semplicemente lo stesso ID del centro di costo.

Singolo:
Centro di costo elettricità di rete (ID= 6) --> Tariffa unica rete ( Chiave esterna = 6)

Combinato:
Centro di costo elettricità di rete (ID= 6) \-->  Ore di punta ( Chiave esterna = 6) e ore fuori punta (Chiave esterna = 6)

Nota: 

- Se le tariffe elettriche vengono trasmesse in forma combinata, in smart-me devono essere inseriti i prezzi delle tariffe elettriche!

- Per le tariffe di calore e acqua in combinazione, i costi non sono necessari in smart-me.


![DTA-VHKA Files Import / Export (Beta) – Figura 9](/img/schnittstellen-dta-vhka-files/09.png)

## Software compatibili e indicazioni di configurazione specifiche

Software immobiliari che supportano lo standard DTA-VHKA.
Elenco secondo Qualipool: [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/immotop2)

- Rimo R5 (istruzioni Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/garaio-rem)

- [Abaimmo](/schnittstellen/dta-vhka-files/abaimmo)


## Gestione dei messaggi di errore
