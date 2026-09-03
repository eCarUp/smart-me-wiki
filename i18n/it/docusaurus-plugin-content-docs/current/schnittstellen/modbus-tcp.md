---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Con Modbus TCP è possibile interrogare i valori di misura di un apparecchio direttamente tramite la connessione di rete.'
sidebar_label: 'Modbus TCP'
---
Con Modbus TCP è possibile interrogare i valori di misura di un apparecchio direttamente tramite la connessione di rete. Non è necessario alcun passaggio attraverso il cloud.

### Requisiti

Per attivare Modbus TCP è necessario un abbonamento smart-me Professional

## Apparecchi supportati

I seguenti apparecchi smart-me supportano Modbus TCP

- [Contatore trifase smart-me Telstar](/produkte/telstar)

- [Contatore trifase Telstar CT](/produkte/Telstar-CT)

- [Stazione di ricarica Pico](/produkte/pico-ladestation)


## Limitazioni

Non è possibile assegnare un indirizzo IP fisso. Se lo si desidera, questa impostazione deve essere effettuata sul router. smart-me non conosce l'indirizzo MAC dei singoli apparecchi. Questo può essere determinato con l'aiuto delle istruzioni riportate di seguito.

Le interrogazioni non dovrebbero avvenire più frequentemente di ogni 2 secondi. Un aumento della frequenza di interrogazione può portare, in determinate configurazioni, a interrogazioni senza risposta. L'apparecchio non può essere danneggiato con un intervallo di interrogazione di &lt; 2 secondi.

## Attivare Modbus TCP

1.  Accedi al sito web di smart-me.

2.  Seleziona l'apparecchio desiderato.

3.  Seleziona l'ingranaggio in alto a destra.

4.  Attivare Modbus TCP nelle impostazioni avanzate (erweiterte Einstellungen)

5.  Salvare


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Aspetti specifici di Pico e Modbus TCP

Modbus TCP può essere utilizzato con la Pico se:

1.  La Pico non fa parte di un gruppo di gestione del carico

2.  La Pico fa parte di un gruppo di gestione del carico ed è il master (determinato automaticamente)


Per tutti gli slave di un gruppo di gestione del carico Modbus TCP è disattivato, poiché questi non dispongono di un proprio indirizzo IP.
Consigliamo l'uso di Modbus TCP solo per il comando di singoli apparecchi senza MESH.
Se si desidera leggere o comandare le Pico all'interno di un gruppo di gestione del carico, consigliamo la [Rest API](/schnittstellen/api). 

## Determinare l'indirizzo dell'apparecchio

Il registro Modbus di un apparecchio smart-me può essere letto tramite DNS o indirizzo IP. 

- Il DNS può essere attivato nel portale.

- L'indirizzo IP viene assegnato dal server DHCP locale. L'indirizzo IP può essere determinato con l'aiuto delle seguenti istruzioni.


### Attivare il DNS

1.  Accedi al sito web di smart-me.

2.  Seleziona l'apparecchio desiderato.

3.  Seleziona l'ingranaggio in alto a destra.

4.  Attivare il DNS nelle impostazioni avanzate (erweiterte Einstellungen).

5.  Nella maggior parte dei casi è necessario l'IP interno. Per i dettagli vedi sotto.

6.  Salvare

7.  Il nome DNS viene visualizzato nel testo sotto Attivare DNS (DNS aktivieren).


![Modbus TCP – Figura 2](/img/schnittstellen-modbus-tcp/02.png)

Come indirizzo IP può essere scelto un indirizzo IP pubblico oppure l'indirizzo IP interno dell'apparecchio:

IP interno

Questo è l'indirizzo IP locale dell'apparecchio smart-me. Può essere utilizzato se ci si trova nella stessa rete.

IP pubblico

Viene utilizzato l'indirizzo IP pubblico. Di norma si tratta dell'indirizzo IP del vostro router.

Informazioni di fondo

Con il servizio dns-me è possibile collegarsi direttamente a un apparecchio smart-me senza conoscerne l'indirizzo IP. Se l'indirizzo DNS è attivato per un apparecchio smart-me, il suo indirizzo IP locale o pubblico viene assegnato automaticamente a un nome DNS (ad es. smart-me\_123456.dns-me.com).

Per questo smart-me utilizza il servizio dns-me.com.

### Determinare l'indirizzo IP con il nome DNS

Dopo aver attivato il DNS, il nome DNS visibile nelle impostazioni avanzate sotto Attivazione DNS può essere utilizzato per un ping.

ad es. ping smart-me\_6301587.dns-me.com

Come risposta ricevi il risultato del ping compreso l'indirizzo IP dell'apparecchio.

![Modbus TCP – Figura 3](/img/schnittstellen-modbus-tcp/03.png)

### Determinare l'indirizzo IP direttamente sul router

smart-me non conosce l'indirizzo MAC dei singoli apparecchi. La determinazione dell'indirizzo IP senza previa attivazione del servizio DNS è quindi più complicata. Una possibilità è interrogare tutti gli indirizzi IP con Modbus TCP e verificare quali numeri di serie vengono restituiti come risposta.

## Trasmissione dei dati

Protocollo Modbus TCP
Porta TCP: 502

Funzioni
Il smart-me Meter supporta le seguenti funzioni Modbus:

- Read Holding Register (Code 03)


Indirizzamento dei registri
Per motivi storici l'indirizzo nel Modbus è inferiore di 1 rispetto all'indirizzo interno del registro. L'indirizzo di partenza deve quindi essere "indirizzo del registro - 1"

### Esempio Modbus

Esempio con: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Indirizzi dei registri per contatori e moduli smart-me

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Video src="" title="Video" />

Register Addressing

## Indirizzi dei registri per stazioni di ricarica Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Video src="" title="Video" />

Pico-Modbus TCP

## Comando della gestione del carico Pico con Modbus TCP

Una stazione di ricarica Pico può essere comandata tramite Modbus TCP e la corrente di carica può essere impostata.

### Con versione del firmware &lt; 0.0.53:

La corrente di carica può essere impostata una sola volta tramite il registro 0x206E come corrente di carica in mA per tutte e tre le fasi contemporaneamente.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000 mA.
        L'apparecchio cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso l'apparecchio caricherà con 3x6A trifase
        Una ricarica monofase non può essere impostata in modo dedicato. La ricarica di un veicolo monofase avviene in modalità trifase.


Comando di un gruppo di stazioni con più stazioni:

- Solo l'apparecchio master del gruppo Pico dispone di un indirizzo IP raggiungibile.

- Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000 mA.
    Con un'impostazione del gruppo di 12000 mA
    Con tre ricariche attive: si ottiene una ricarica monofase con 12 A su L1, L2 e L3 rispettivamente
    Con due ricariche attive: si ottengono due ricariche trifase con 6A
    Con una ricarica attiva: si ottiene una ricarica trifase con 12 A


### A partire dalla versione del firmware 0.0.53:

La corrente di carica può essere:

- Impostata per tutte e tre le fasi insieme tramite il registro 0x206E in mA (tutte con lo stesso valore)

- Indicata congiuntamente ma individualmente per fase in mA o A (fino a 499A, oltre viene assunto mA) tramite il registro 0x2071 

- Indicata individualmente una dopo l'altra per fase in mA o A (fino a 499A, oltre viene assunto mA) tramite i registri 0x2071, 0x 2073, 0x2075


Informazioni generali sulla funzione:

- Il passaggio tra monofase e trifase dovrebbe essere limitato dal lato del comando a 1 volta ogni 10 minuti.

- È possibile commutare su una fase predefinita L1, L2, L3 tramite l'impostazione della disponibilità di corrente. (Viene presa la maggiore)

- È possibile passare tra le fasi L1, L2, L3 durante una ricarica monofase. (Passaggio alla corrente maggiore)


Avvertenza importante sul comando esterno:

Non esiste alcuna limitazione per il passaggio tra le singole fasi, fate attenzione a limitarlo tramite l'algoritmo di comando.
Lo stesso vale anche per il passaggio dalla ricarica monofase a quella trifase e viceversa.
L'uso intensivo dei contatti dei relè può portare a un guasto prematuro dei commutatori a relè. Si raccomanda di non passare tra le singole fasi se il maggiore rendimento non è proporzionato. Il tempo instabile, altri grandi consumatori e altri motivi possono portare a commutazioni indesiderate. È preferibile che l'assegnazione a una fase non cambi se l'eccedenza manca solo per breve tempo.
smart-me non si assume alcuna responsabilità per il guasto prematuro dei relè in caso di utilizzo di sistemi di comando di terzi.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000,6000,8000 mA.
        Tutte e tre le correnti possono avere valori diversi. L'apparecchio cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso l'apparecchio caricherà con 3x6A trifase)

    - 0,8000,0 mA porta a una ricarica monofase con 8 A su L2

    - 0, 8000 mA, 10000 mA porta a una ricarica monofase con 10 A su L3


Comando di un gruppo di stazioni con più stazioni:

- Solo l'apparecchio master del gruppo Pico dispone di un indirizzo IP raggiungibile.

- Carica solo a partire dall'impostazione minima dell'apparecchio, ad es. 6000,6000,8000 mA.
    Tutte e tre le correnti possono avere un valore diverso.
    Il gruppo cerca di sfruttare al meglio la corrente disponibile.

    Con una ricarica attiva: un apparecchio caricherà con 3x6A trifase.
    Con due ricariche attive: un apparecchio carica con 8A sulla fase L3 e il secondo con 6A su L2 o L1

- 0, 8000 mA, 10000 mA e due unità attive: si ottiene una ricarica monofase con 10 A su L3 e un'altra con 8 A su L2 

- 0,16000,10000 mA e tre unità attive: si ottiene una ricarica monofase con 10 A su L3 e due ricariche monofase con 8 A ciascuna su L2

- 20000,20000,20000 mA e tre unità attive: si ottengono tre ricariche trifase con corrente compresa tra 6 e 7 A ciascuna.
