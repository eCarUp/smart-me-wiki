---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Con Modbus TCP i valori di misura di un apparecchio possono essere interrogati direttamente tramite la connessione di rete.'
sidebar_label: 'Modbus TCP'
---
Con Modbus TCP i valori di misura di un apparecchio possono essere interrogati direttamente tramite la connessione di rete. Non è necessario passare dal cloud.

### Requisiti

Per attivare Modbus TCP è necessario un abbonamento smart-me Professional

## Apparecchi supportati

I seguenti apparecchi smart-me supportano Modbus TCP

- [Contatore trifase smart-me Telstar](/produkte/telstar)

- [Contatore trifase Telstar CT](/produkte/Telstar-CT)

- [Stazione di ricarica Pico](/produkte/pico-ladestation)


## Limitazioni

Non è possibile assegnare un indirizzo IP fisso. Se lo si desidera, questa impostazione deve essere effettuata sul router. L'indirizzo MAC dei singoli apparecchi non è noto a smart-me. Può essere determinato con l'aiuto delle istruzioni seguenti.

Le interrogazioni non dovrebbero avvenire più frequentemente di ogni 2 secondi. Un aumento della frequenza di interrogazione può portare, in determinate costellazioni, a interrogazioni senza risposta. L'apparecchio non può essere danneggiato con un intervallo di interrogazione di &lt; 2 secondi.

## Attivare Modbus TCP

1.  Accedi al sito web di smart-me.

2.  Seleziona l'apparecchio desiderato.

3.  Seleziona la rotella in alto a destra.

4.  Nelle impostazioni avanzate attivare Modbus TCP

5.  Salvare


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Aspetti specifici di Pico e Modbus TCP

Modbus TCP può essere utilizzato con la Pico se:

1.  La Pico non si trova in un gruppo di gestione del carico

2.  La Pico si trova in un gruppo di gestione del carico ed è il master (determinato automaticamente)


Per tutti gli slave di un gruppo di gestione del carico Modbus TCP è disattivato, poiché questi non possiedono un proprio indirizzo IP.
Consigliamo l'utilizzo di Modbus TCP solo per il comando di singoli apparecchi senza MESH.
Se le Pico di un gruppo di gestione del carico devono essere lette o comandate, consigliamo la [Rest API](/schnittstellen/api). 

## Determinare l'indirizzo dell'apparecchio

Il registro Modbus di un apparecchio smart-me può essere letto tramite DNS o indirizzo IP. 

- Il DNS può essere attivato nel portale.

- L'indirizzo IP viene assegnato dal server DHCP locale. L'indirizzo IP può essere determinato con l'aiuto delle istruzioni seguenti.


### Attivare il DNS

1.  Accedi al sito web di smart-me.

2.  Seleziona l'apparecchio desiderato.

3.  Seleziona la rotella in alto a destra.

4.  Nelle impostazioni avanzate attivare il DNS.

5.  Nella maggior parte dei casi è necessario l'IP interno. Per i dettagli vedi sotto.

6.  Salvare

7.  Il nome DNS viene visualizzato nel testo sotto Attivare DNS.


![Modbus TCP – Figura 2](/img/schnittstellen-modbus-tcp/02.png)

Come indirizzo IP è possibile scegliere un indirizzo IP pubblico oppure l'indirizzo IP interno dell'apparecchio:

IP interno

Questo è l'indirizzo IP locale dell'apparecchio smart-me. Può essere utilizzato se ci si trova nella stessa rete.

IP pubblico

Viene utilizzato l'indirizzo IP pubblico. Di norma è l'indirizzo IP del vostro router.

Informazioni di base

Con il servizio dns-me è possibile collegarsi direttamente a un apparecchio smart-me senza conoscerne l'indirizzo IP. Se l'indirizzo DNS è attivato per un apparecchio smart-me, il suo indirizzo IP locale o pubblico viene associato automaticamente a un nome DNS (ad es. smart-me\_123456.dns-me.com).

smart-me utilizza a tale scopo il servizio dns-me.com.

### Determinare l'indirizzo IP con il nome DNS

Dopo aver attivato il DNS, il nome DNS visibile nelle impostazioni avanzate sotto Attivazione DNS può essere utilizzato per un ping.

ad es. ping smart-me\_6301587.dns-me.com

Come risposta ottieni il risultato del ping, incluso l'indirizzo IP dell'apparecchio.

![Modbus TCP – Figura 3](/img/schnittstellen-modbus-tcp/03.png)

### Determinare l'indirizzo IP direttamente sul router

smart-me non conosce l'indirizzo MAC dei singoli apparecchi. La determinazione dell'indirizzo IP senza previa attivazione del servizio DNS è pertanto più complicata. Una possibilità è interrogare tutti gli indirizzi IP con Modbus TCP e verificare quali numeri di serie vengono restituiti come risposta.

## Trasmissione dei dati

Protocollo Modbus TCP
Porta TCP: 502

Funzioni
Lo smart-me Meter supporta le seguenti funzioni Modbus:

- Read Holding Register (Code 03)


Indirizzamento dei registri
Per motivi storici l'indirizzo nel Modbus è inferiore di 1 rispetto all'indirizzo interno del registro. L'indirizzo di partenza deve quindi essere "indirizzo del registro - 1"

### Esempio Modbus

Esempio con: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Indirizzi dei registri per contatori e moduli smart-me

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" title="Foglio di calcolo, Register Addressing" />

Register Addressing

## Indirizzi dei registri per stazioni di ricarica Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" aspect="2.353" title="Foglio di calcolo, Pico-Modbus TCP" />

Pico-Modbus TCP

## Comando della gestione del carico Pico con Modbus TCP

Una stazione di ricarica Pico può essere comandata tramite Modbus TCP e la corrente di ricarica può essere impostata.

### Con versione del firmware &lt; 0.0.53:

La corrente di ricarica può essere impostata una sola volta tramite il registro 0x206E come corrente di ricarica in mA per tutte e tre le fasi contemporaneamente.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000 mA.
        L'apparecchio cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso l'apparecchio caricherà con 3x6A su tre fasi
        Una ricarica monofase non può essere impostata in modo dedicato. La ricarica di un veicolo monofase avviene in modalità trifase.


Comando di un gruppo di stazioni con più stazioni:

- Solo l'apparecchio master del gruppo Pico possiede un indirizzo IP interrogabile.

- Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000 mA.
    Con un'impostazione del gruppo di 12000 mA
    Con tre ricariche attive: si ottiene una ricarica monofase con 12 A ciascuna su L1, L2 e L3
    Con due ricariche attive: si ottengono due ricariche trifase con 6A
    Con una ricarica attiva: si ottiene una ricarica trifase con 12 A


### Dalla versione del firmware 0.0.53:

La corrente di ricarica può essere:

- Impostata congiuntamente per tutte e tre le fasi tramite il registro 0x206E in mA (tutte lo stesso valore)

- Indicata congiuntamente ma individualmente per fase in mA o A (fino a 499A, oltre si assume mA) tramite il registro 0x2071 

- Indicata individualmente una dopo l'altra per fase in mA o A (fino a 499A, oltre si assume mA) tramite i registri 0x2071, 0x 2073, 0x2075


Informazioni generali sulla funzione:

- Il passaggio tra monofase e trifase dovrebbe essere limitato dal lato comando a 1x ogni 10 minuti.

- È possibile commutare su una fase predefinita L1, L2, L3 tramite l'indicazione della disponibilità di corrente. (Viene presa la maggiore)

- È possibile passare tra le fasi L1, L2, L3 durante una ricarica monofase. (Cambio della corrente maggiore)


Avvertenza importante sul comando esterno:

Non esiste alcun limite per il passaggio tra le singole fasi, fate attenzione a limitarlo tramite l'algoritmo di comando.
Lo stesso vale anche per il passaggio dalla ricarica monofase a quella trifase e viceversa.
L'utilizzo intensivo dei contatti dei relè può portare a un guasto anticipato degli interruttori a relè. Si raccomanda di non passare tra le singole fasi se la maggiore potenza non è proporzionata. Meteo instabile, altri grandi consumatori e altri motivi possono portare a commutazioni indesiderate. È preferibile che l'assegnazione a una fase non cambi se l'eccedenza manca solo per breve tempo.
Per il guasto anticipato dei relè in caso di utilizzo di comandi di terzi smart-me non si assume alcuna responsabilità.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000,6000,8000 mA.
        Tutte e tre le correnti possono avere valori diversi. L'apparecchio cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso l'apparecchio caricherà con 3x6A su tre fasi)

    - 0,8000,0 mA porta a una ricarica monofase con 8 A su L2

    - 0, 8000 mA, 10000 mA porta a una ricarica monofase con 10 A su L3


Comando di un gruppo di stazioni con più stazioni:

- Solo l'apparecchio master del gruppo Pico possiede un indirizzo IP interrogabile.

- Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000,6000,8000 mA.
    Tutte e tre le correnti possono avere un valore diverso.
    Il gruppo cerca di sfruttare al meglio la corrente disponibile.

    Se una ricarica attiva: un apparecchio caricherà con 3x6A su tre fasi.
    Se due ricariche attive: un apparecchio carica con 8A sulla fase L3 e il secondo con 6A su L2 o L1

- 0, 8000 mA, 10000 mA e due unità attive: si ottiene una ricarica monofase con 10 A su L3 e un'altra con 8 A su L2 

- 0,16000,10000 mA e tre unità attive: si ottiene una ricarica monofase con 10 A su L3 e due ricariche monofase con 8 A ciascuna su L2

- 20000,20000,20000 mA e tre unità attive: si ottengono tre ricariche trifase con una corrente compresa tra 6 e 7 A ciascuna.
