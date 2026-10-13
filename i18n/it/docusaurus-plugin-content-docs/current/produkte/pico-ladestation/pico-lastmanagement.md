---
title: 'Gestione del carico Pico'
slug: '/produkte/pico-ladestation/pico-lastmanagement'
description: 'Il sistema di gestione del carico Pico'
sidebar_label: 'Gestione del carico Pico'
---
## Il sistema di gestione del carico Pico

Il sistema di gestione del carico di Pico si basa su due funzionalità fondamentali:

- Gruppi di carico della gestione del carico Pico

- Funzionalità di gestione del carico multilivello


## Gestione del carico Pico (gruppi di carico)

Il gruppo di carico Pico definisce un raggruppamento di hardware Pico che condividono un cavo di alimentazione o una distribuzione elettrica.
Queste impostazioni vengono memorizzate e salvate sull'hardware Pico. 

- Valore massimo di corrente per la linea di alimentazione (valore di protezione per fase)


Le informazioni sui valori limite, sulle ricariche attive e sulla corrente distribuita vengono comunicate all'interno del gruppo di carico Pico tramite un sistema MESH locale (2.4Ghz).

La funzionalità dei gruppi di carico svolge i seguenti compiti:

### Comunicazione MESH

L'hardware Pico dispone di una funzionalità MESH. Questa consente una comunicazione locale tra i Pico anche quando il Wifi o la connessione mobile a Internet non è garantita. Il MESH può inoltre collegare al cloud, tramite i Pico vicini, anche stazioni di ricarica senza accesso diretto a un access point. Il presupposto è però che si trovino insieme in un gruppo di ricarica e che sia disponibile un Wifi.

La rete MESH può supportare al massimo 200 stazioni di ricarica in un gruppo di carico.

Il MESH trasmette in ogni caso i valori e le decisioni della gestione del carico relativi al gruppo dal master agli altri membri del gruppo.

I membri della rete MESH non necessitano di un contatto diretto con il Pico master, ma possono stabilire la connessione al master MESH (A) anche tramite un massimo di 5 stazioni di ricarica vicine.

Ogni Pico può fungere da punto di distribuzione per un massimo di 6 dispositivi contemporaneamente.

Il Pico master viene scelto dal gruppo stesso in modo adeguato e si ottimizza continuamente.

La portata massima di una connessione tra i singoli Pico è di 30 metri senza ostacoli e di ca. 10m con ostacoli.

Nota:
Occorre fare in modo che tutti i Pico collegati a una stessa partenza per la mobilità elettrica possano trovarsi nello stesso gruppo di ricarica. (Misura edilizia)

Se ciò non è possibile a causa dell'ubicazione dei Pico, è possibile gestire anche più gruppi di ricarica su un unico cavo con l'aiuto della gestione del carico multilivello.

In questo caso si consiglia di formare ad es. gruppi da 3, 6 o 9 per poter sfruttare nel modo più efficiente possibile la commutazione monofase.

La funzione dei gruppi di carico non richiede lo stesso hotspot né dati di accesso identici per la connessione a Internet. Il MESH è un sistema a sé stante e si basa unicamente sul fatto che i dispositivi del gruppo di carico possano raggiungersi a vicenda.

![Gestione del carico Pico – Figura 1](/img/produkte-pico-ladestation-pico-lastmanagement/01.png)

![Gestione del carico Pico – Figura 2](/img/produkte-pico-ladestation-pico-lastmanagement/02.png)

### Comportamento in caso di interruzione della connessione

I gruppi di ricarica Pico statici possono continuare a garantire la funzione di ricarica in caso di interruzione della connessione Internet. 

A tale scopo è possibile scegliere tra i seguenti tre valori:

- Nessuna azione (Keine Aktion)
    (Nessuna regolazione, i veicoli in ricarica continuano a caricare con la corrente precedentemente autorizzata, ma non è possibile avviare nuove ricariche)

- Corrente minima (Minimalstrom):
    Questo Pico riduce la potenza alla propria potenza minima impostata (individuale).

- Corrente max. (per gruppo) (Max. Strom (pro Gruppe))
    (Unica impostazione compatibile con la gestione del carico multilivello)
    Il singolo Pico riceve una frazione della potenza di ricarica definita per il gruppo di ricarica.
    La potenza individuale viene distribuita automaticamente dal gestore di ricarica sulle ricariche attive.


![Gestione del carico Pico – Figura 3](/img/produkte-pico-ladestation-pico-lastmanagement/03_EN.png)

### Protezione da sovraccarico della partenza o della linea di alimentazione

I gruppi di carico ricevono al massimo la "corrente protetta" (Abgesicherter Strom) a libera disposizione e per la distribuzione sulle ricariche attive. In questo modo si garantisce che il gruppo di carico Pico non prelevi mai più corrente di quanto consentito.

### Distribuzione della corrente di ricarica sulle ricariche attive

La corrente di ricarica disponibile viene suddivisa automaticamente sulle ricariche attive. Le correnti disponibili vengono distribuite nel modo più equo possibile.

In questo esempio, 63A vengono distribuiti su quattro stazioni di ricarica attive.
63 A / 4 ricariche attive = 15.75A per stazione.

Le correnti di ricarica vengono assegnate alle ricariche attive in valori interi.

![Gestione del carico Pico – Figura 4](/img/produkte-pico-ladestation-pico-lastmanagement/04.png)

### Commutazione di fase e bilanciamento delle fasi

Pico dispone di una commutazione di fase attiva che svolge due funzioni:

- Bilanciamento delle fasi per la simmetria del carico tra le ricariche attive

- Distribuzione dell'energia in caso di alimentazione insufficiente


Simmetria del carico:

Il Pico identifica i veicoli monofase e li assegna di conseguenza a una fase per la ricarica. Se durante la ricarica si aggiungono altri veicoli monofase, il gruppo Pico seleziona automaticamente per questo veicolo una fase non ancora caricata.

La simmetria segue diverse regole, che possono costringere anche i veicoli trifase a passare alla modalità monofase se l'asimmetria diventa troppo grande. 

Alimentazione insufficiente:

Il Pico utilizza la corrente disponibile in modalità trifase finché è possibile mantenere il minimo trifase impostato, ad es. trifase 6A.
(La soglia può essere influenzata tramite la corrente minima dei singoli Pico.)

Se si aggiunge un ulteriore veicolo e la ricarica trifase alla corrente minima impostata non può più essere fornita a tutti i veicoli, le stazioni di ricarica passano progressivamente alla modalità di ricarica monofase, per garantire la massima efficienza possibile.

È quindi possibile che in un gruppo di ricarica avvengano in parallelo ricariche trifase e ricariche monofase.

Le ricariche attive vengono distribuite uniformemente sulle tre fasi e la corrente disponibile viene messa a disposizione in modo ripartito. 

L'algoritmo tiene conto di conseguenza anche delle ricariche in pausa o terminate.

Le ricariche in pausa riservano la corrente minima necessaria per garantire ad es. le funzioni di riscaldamento da fermo del veicolo.

Nota:
La disponibilità di almeno 6A è un requisito del veicolo e deve essere garantita in ogni momento dalla stazione di ricarica. Ciò indipendentemente dal fatto che la stazione si trovi in funzionamento trifase o monofase. Se il valore scende al di sotto, il veicolo interrompe autonomamente la ricarica oppure non inizia nemmeno a caricare.

Alcuni veicoli più vecchi non avviano la ricarica già quando sono disponibili meno di 8A.

Suggerimento: configurare le stazioni pubbliche per visitatori o le stazioni di servizio con il minimo di 8A.



![Gestione del carico Pico – Figura 5](/img/produkte-pico-ladestation-pico-lastmanagement/05.png)

Situazione: la corrente disponibile non è sufficiente per alimentare tutti i veicoli in modalità trifase con il minimo.
\--> Le stazioni di ricarica vengono tutte commutate sulla ricarica monofase.

![Gestione del carico Pico – Figura 6](/img/produkte-pico-ladestation-pico-lastmanagement/06.png)

Situazione: la corrente disponibile basterebbe per tutti i dispositivi contemporaneamente, ma una ricarica in pausa vincolerebbe troppa energia. La stazione di ricarica con il veicolo completamente carico viene impostata su monofase per cedere capacità alle altre ricariche trifase.

## Gestione del carico multilivello (MLM)

La gestione del carico multilivello consente il controllo dinamico dei gruppi di ricarica Pico attraverso allacciamenti di aree, distribuzione, allacciamenti di edifici e sottodistribuzioni.

Consente inoltre la prioritizzazione dei gruppi di ricarica, nonché funzioni di ottimizzazione solare.

[Ulteriori informazioni](/konfiguration/multilevel-lastmanagement)
