---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Con Modbus TCP è possibile interrogare i valori di misura di un dispositivo direttamente tramite la connessione di rete.'
sidebar_label: 'Modbus TCP'
---
Con Modbus TCP è possibile interrogare i valori di misura di un dispositivo direttamente tramite la connessione di rete. Non è necessario passare attraverso il cloud.

### Requisiti

Per attivare Modbus TCP è necessario un abbonamento smart-me Professional

## Dispositivi supportati

I seguenti dispositivi smart-me supportano Modbus TCP

- [Contatore trifase smart-me Telstar](/produkte/telstar)

- [Contatore trifase Telstar CT](/produkte/Telstar-CT)

- [Stazione di ricarica Pico](/produkte/pico-ladestation)


## Limitazioni

Non è possibile assegnare un indirizzo IP fisso. Se lo si desidera, questa impostazione deve essere effettuata sul router. L'indirizzo MAC dei singoli dispositivi non è noto a smart-me. Può essere determinato con l'aiuto delle istruzioni riportate di seguito.

Le interrogazioni non dovrebbero avvenire più spesso di ogni 2 secondi. Un aumento della frequenza di interrogazione può, in determinate configurazioni, causare interrogazioni senza risposta. Con un intervallo di interrogazione &lt; 2 secondi il dispositivo non può essere danneggiato.

## Attivare Modbus TCP

1.  Acceda al sito web di smart-me.

2.  Selezioni il dispositivo desiderato.

3.  Selezioni la rotella in alto a destra.

4.  In impostazioni avanzate (erweiterte Einstellungen) attivare Modbus TCP (Modus-TCP aktivieren)

5.  Salvare (Speichern)


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Aspetti specifici di Pico e Modbus TCP

Modbus TCP può essere utilizzato con la Pico se:

1.  La Pico non fa parte di un gruppo di gestione del carico

2.  La Pico fa parte di un gruppo di gestione del carico ed è il master (determinato automaticamente)


Per tutti gli slave di un gruppo di gestione del carico Modbus TCP è disattivato, poiché in questo caso non dispongono di un proprio indirizzo IP.
Consigliamo di utilizzare Modbus TCP solo per il comando di singoli dispositivi senza MESH.
Se le Pico di un gruppo di gestione del carico devono essere lette o comandate, consigliamo la [Rest API](/schnittstellen/api). 

## Determinare l'indirizzo del dispositivo

Il registro Modbus di un dispositivo smart-me può essere letto tramite DNS o indirizzo IP. 

- Il DNS può essere attivato nel portale.

- L'indirizzo IP viene assegnato dal server DHCP locale. L'indirizzo IP può essere determinato con l'aiuto delle seguenti istruzioni.


### Attivare il DNS

1.  Acceda al sito web di smart-me.

2.  Selezioni il dispositivo desiderato.

3.  Selezioni la rotella in alto a destra.

4.  In impostazioni avanzate (erweiterte Einstellungen) attivare il DNS (DNS aktivieren).

5.  Nella maggior parte dei casi è necessario l'IP interno. Per i dettagli vedere sotto.

6.  Salvare (Speichern)

7.  Il nome DNS viene visualizzato nel testo sotto «Attivare DNS» (DNS aktivieren).


![Modbus TCP – Figura 2](/img/schnittstellen-modbus-tcp/02.png)

Come indirizzo IP è possibile scegliere un indirizzo IP pubblico o l'indirizzo IP interno del dispositivo:

IP interno (Interne IP)

È l'indirizzo IP locale del dispositivo smart-me. Può essere utilizzato se ci si trova nella stessa rete.

IP pubblico (Öffentliche IP)

Viene utilizzato l'indirizzo IP pubblico. Di norma si tratta dell'indirizzo IP del Suo router.

Informazioni di contesto

Con il servizio dns-me è possibile connettersi direttamente a un dispositivo smart-me senza conoscerne l'indirizzo IP. Se l'indirizzo DNS è attivato per un dispositivo smart-me, il suo indirizzo IP locale o pubblico viene associato automaticamente a un nome DNS (ad es. smart-me\_123456.dns-me.com).

smart-me utilizza a questo scopo il servizio dns-me.com.

### Determinare l'indirizzo IP con il nome DNS

Dopo l'attivazione del DNS, il nome DNS visibile nelle impostazioni avanzate sotto attivazione DNS può essere utilizzato per un ping.

ad es. ping smart-me\_6301587.dns-me.com

Come risposta riceve l'esito del ping, incluso l'indirizzo IP del dispositivo.

![Modbus TCP – Figura 3](/img/schnittstellen-modbus-tcp/03.png)

### Determinare l'indirizzo IP direttamente sul router

smart-me non conosce l'indirizzo MAC dei singoli dispositivi. Determinare l'indirizzo IP senza aver prima attivato il servizio DNS è quindi più complicato. Una possibilità consiste nell'interrogare tutti gli indirizzi IP con Modbus TCP e verificare quali numeri di serie vengono restituiti come risposta.

## Trasmissione dei dati

Protocollo Modbus TCP
Porta TCP: 502

Funzioni
Lo smart-me Meter supporta le seguenti funzioni Modbus:

- Read Holding Register (Code 03)


Indirizzamento dei registri
Per motivi storici, l'indirizzo in Modbus è inferiore di 1 rispetto all'indirizzo di registro interno. L'indirizzo iniziale deve quindi essere "indirizzo di registro - 1"

### Esempio Modbus

Esempio con: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Indirizzi di registro per contatori e moduli smart-me

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Apri foglio di calcolo, Register Addressing in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ/htmlembed" height="720px" title="Foglio di calcolo, Register Addressing" />

Register Addressing

## Indirizzi di registro per le stazioni di ricarica Pico

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Apri foglio di calcolo, Pico-Modbus TCP in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU/htmlembed" height="720px" title="Foglio di calcolo, Pico-Modbus TCP" />

Pico-Modbus TCP

## Controllo della gestione del carico Pico con Modbus TCP

Una stazione di ricarica Pico può essere comandata tramite Modbus TCP ed è possibile impostarne la corrente di ricarica.

### Con versione del firmware &lt; 0.0.53:

La corrente di ricarica può essere impostata una sola volta tramite il registro 0x206E come corrente di ricarica in mA per tutte e tre le fasi contemporaneamente.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Ricarica solo a partire dall'impostazione minima del dispositivo, ad es. 6000 mA.
        Il dispositivo cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso il dispositivo ricaricherà in trifase con 3x6A
        Una ricarica monofase non può essere impostata in modo dedicato. La ricarica di un veicolo monofase avviene in modalità trifase.


Comando di un gruppo con più stazioni:

- Solo il dispositivo master del gruppo Pico dispone di un indirizzo IP raggiungibile.

- Ricarica solo a partire dall'impostazione minima del dispositivo, ad es. 6000 mA.
    Con impostazione del gruppo a 12000 mA
    Con tre ricariche attive: porta a una ricarica monofase ciascuna con 12 A su L1, L2 e L3
    Con due ricariche attive: porta a due ricariche trifase con 6A
    Con una ricarica attiva: porta a una ricarica trifase con 12 A


### A partire dalla versione del firmware 0.0.53:

La corrente di ricarica può:

- Essere impostata per tutte e tre le fasi insieme tramite il registro 0x206E in mA (tutte con lo stesso valore)

- Essere indicata insieme ma individualmente per fase in mA o A (fino a 499A, oltre si assume mA) tramite il registro 0x2071 

- Essere indicata individualmente una dopo l'altra per fase in mA o A (fino a 499A, oltre si assume mA) tramite i registri 0x2071, 0x 2073, 0x2075


Informazioni generali sul funzionamento:

- Il passaggio tra monofase e trifase dovrebbe essere limitato dal sistema di controllo a  1 volta ogni 10 minuti.

- È possibile commutare su una fase predefinita L1, L2, L3 impostando la disponibilità di corrente. (Viene presa la più grande)

- È possibile passare tra le fasi L1, L2, L3 durante una ricarica monofase. (Cambio della corrente più grande)


Nota importante sul controllo esterno:

Non esiste alcuna limitazione per il passaggio tra le singole fasi: si assicuri di limitarlo tramite l'algoritmo di controllo.
Lo stesso vale anche per il passaggio dalla ricarica monofase a quella trifase e viceversa.
L'uso intensivo dei contatti dei relè può portare a un guasto prematuro degli interruttori a relè. Si raccomanda di non passare tra le singole fasi se la potenza aggiuntiva non è proporzionata. Tempo instabile, altri grandi consumatori e altri motivi possono causare commutazioni involontarie. Idealmente l'assegnazione a una fase non dovrebbe cambiare se l'eccedenza manca solo per breve tempo.
smart-me non si assume alcuna responsabilità per il guasto prematuro dei relè in caso di utilizzo di sistemi di controllo di terzi.

Comando di una singola stazione in un gruppo di ricarica (comando singolo):

- -   Ricarica solo a partire dall'impostazione minima del dispositivo, ad es. 6000,6000,8000 mA.
        Tutte e tre le correnti possono avere valori diversi. Il dispositivo cerca di sfruttare il più possibile la corrente disponibile.
        In questo caso il dispositivo ricaricherà in trifase con 3x6A)

    - 0,8000,0 mA porta a una ricarica monofase con 8 A su L2

    - 0, 8000 mA, 10000 mA porta a una ricarica monofase con 10 A su L3


Comando di un gruppo con più stazioni:

- Solo il dispositivo master del gruppo Pico dispone di un indirizzo IP raggiungibile.

- Ricarica solo a partire dall'impostazione minima del dispositivo, ad es. 6000,6000,8000 mA.
    Tutte e tre le correnti possono avere un valore diverso.
    Il gruppo cerca di sfruttare al meglio la corrente disponibile.

    Con una ricarica attiva: un dispositivo ricaricherà in trifase con 3x6A.
    Con due ricariche attive: un dispositivo ricarica con 8A sulla fase L3 e il secondo con 6A su L2 o L1

- 0, 8000 mA, 10000 mA e due unità attive: risulta in una ricarica monofase con 10 A su L3 e un'altra con 8 A su L2 

- 0,16000,10000 mA e tre unità attive: risulta in una ricarica monofase con 10 A su L3 e due ricariche monofase con 8 A ciascuna su L2

- 20000,20000,20000 mA e tre unità attive: risulta in tre ricariche, ciascuna trifase, tra 6 e 7 A.
