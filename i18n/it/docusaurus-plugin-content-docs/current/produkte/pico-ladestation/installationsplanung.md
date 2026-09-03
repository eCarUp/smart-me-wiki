---
title: 'Pianificazione dell''installazione'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico può essere installata in diversi modi.'
sidebar_label: 'Pianificazione dell''installazione'
---
Pico può essere installata in diversi modi. Qui trovi la descrizione delle varianti più comuni con i rispettivi requisiti specifici.

![Pianificazione dell'installazione – Figura 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Indicazioni generali per l'installazione

- Ogni Pico dispone di un rilevamento dei guasti in corrente continua secondo IEC62955. 

- Le stazioni di ricarica Pico con anno di costruzione 2024 o a partire dal numero di serie 7002702 possiedono un RCD Typ A conforme integrato secondo IEC60947\-2.
    \- a partire dal 2024 o dal numero di serie 7002702 non è più necessario un RCD Typ A in serie
    \- prima del 2024 o del numero di serie 7002702 è necessario, per la conformità NIN, un RCD Typ A in serie a monte di ogni stazione di ricarica.

- Le stazioni di ricarica Pico sono in grado di gestire autonomamente e senza problemi correnti di corto circuito di 3kA.
    Se più stazioni di ricarica sono collegate a una stessa partenza, alla partenza deve essere utilizzato un interruttore di protezione della linea.
    Il dispositivo di protezione del carico deve essere dimensionato in base al potere di interruzione in corto circuito della partenza.
    In ogni caso si raccomandano varianti da almeno 6kA.

- Il dispositivo di protezione del carico interno della stazione di ricarica Pico soddisfa i requisiti della IEC 61851-1.

- Adatta per:
    installazioni con cavo piatto
    installazioni con sistemi busbar
    installazioni ad anello (abgeschlauft)
    installazioni su piedistallo

- Le partenze fino a max. 80A possono essere collegate direttamente senza ulteriori accorgimenti.


## Stazione di ricarica Pico a partire dall'anno di costruzione 2024 e dal numero di serie 7002702

Tutte le stazioni di ricarica Pico a partire dal numero di serie 7002702 dispongono internamente di un RCD Typ A secondo IEC 60947\-2 in combinazione con il rilevamento di protezione dai guasti in corrente continua secondo IEC62955.

### Installazione Pico su cavo piatto o con sistemi busbar

![Pianificazione dell'installazione – Figura 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Nota: 

La corrente di corto circuito deve essere verificata solo sulla piastra di base Pico, non sull'uscita / Typ 2 del dispositivo Pico.

### Installazione Pico ad anello interna o con piedistallo Pico Basic (212070-PL)

![Pianificazione dell'installazione – Figura 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Installazione Pico con piedistallo Pico con coperchio di servizio (232070-PL)

![Pianificazione dell'installazione – Figura 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Protezione contro i fulmini per installazioni esterne di infrastruttura di ricarica

- Nelle installazioni su piedistallo osserva assolutamente anche la NIN e le normative locali riguardanti i dispositivi di protezione contro i fulmini per installazioni esterne di infrastruttura di ricarica.
    Capitolo NIN svizzero: 5.3.4
    Norma Germania: VDE 0100-534 

- La Pico possiede la categoria di sovratensione 3 (4kV)

- Nelle installazioni con necessità di un dispositivo di protezione contro i fulmini SPD Typ2 vanno previsti piedistalli con sportello di servizio. Il dispositivo di protezione contro i fulmini può essere installato direttamente al suo interno.

- Il raggio d'azione di un SPD Typ 2 è di circa 10m.


Regole generali di protezione contro i fulmini, stato 04.2025 

Negli edifici senza protezione esterna contro i fulmini: (ad es. un dispositivo di captazione sul tetto)

Per i dispositivi della categoria di sovratensione III è necessaria la protezione mediante un SPD Typ 2, per non superare la tenuta alle sovratensioni impulsive dei dispositivi.

Negli edifici con protezione esterna contro i fulmini: (ad es. un dispositivo di captazione sul tetto)
In questo caso l'installazione richiede una protezione contro i fulmini SPD Typ 1 e una protezione Typ 2, altrimenti esiste il rischio che, in caso di fulminazione del dispositivo di captazione, l'SPD Typ 2 venga distrutto.

## Download

[File ZIP con schema di collegamento e schema elettrico](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

## Stazione di ricarica Pico prima dell'anno di costruzione 2024 e del numero di serie 7002702

- Le stazioni di ricarica Pico prima dell'anno di costruzione 2024 o del numero di serie 7002702 dispongono di un rilevamento integrato dei guasti in corrente continua secondo IEC62955.

- Le stazioni di ricarica Pico prima dell'anno di costruzione 2024 o del numero di serie 7002702 dispongono di un rilevamento delle correnti di guasto per correnti alternate Typ A (30mA) funzionale ma non conforme al 100%


### Installazione con cavo piatto

- RCD Typ A 40A senza interruttore automatico in serie a ogni stazione di ricarica Pico

- Un interruttore di protezione del carico sulla partenza per l'elettromobilità con tipo di posa protetto dai corto circuiti (scatola blu) è sufficiente per la selettività. (Documentazione estesa)


![Pianificazione dell'installazione – Figura 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

## Protezione del carico per la protezione di gruppo delle stazioni di ricarica e per la linea di alimentazione fino a 80A per fase

La protezione del carico sulla partenza per l'intero gruppo di ricarica dovrebbe presentare la caratteristica C.
I consueti dispositivi di protezione del carico con caratteristica B non sono adatti alle installazioni di stazioni di ricarica e tendono a intervenire troppo presto.

Per una partenza per l'elettromobilità da 63A si raccomanderebbe ad es. una protezione del carico da 63A, Typ C con potere di interruzione in corto circuito di 6kA o 10kA.

## Protezione del carico per stazioni di ricarica Pico con linea di alimentazione superiore a 80A per fase

In caso di installazione di una stazione di ricarica Pico su un sistema busbar ad alta energia oppure con sezioni dei conduttori >35mm2 e correnti di fase > 80A, si raccomanda lato installazione una protezione del carico per ogni stazione di ricarica.
La protezione del carico interna della singola Pico è limitata a 3kA. Con linee di alimentazione ad alta energia questa capacità può risultare sottodimensionata.
In alternativa il potere di interruzione in corto circuito del collegamento può naturalmente essere verificato mediante misurazione; se risulta inferiore a 3kA, non è necessaria una protezione del carico aggiuntiva.

Se invece è necessaria una protezione del carico aggiuntiva, si raccomanda un modello di protezione del carico con corrente di intervento di 40A, caratteristica di intervento C e potere di interruzione in corto circuito di 6kA o 10kA.

## Documentazione estesa e indicazioni specifiche per Paese

[Svizzera: presa di posizione di Electrosuisse - Installazione di stazioni di ricarica per veicoli elettrici, più stazioni di ricarica su una linea di alimentazione comune](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
