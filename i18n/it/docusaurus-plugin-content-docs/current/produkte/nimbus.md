---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Montaggio su piastra di montaggio per contatori secondo DIN43857-1'
sidebar_label: 'Contatore trifase Nimbus 100A'
---
![smart-me Nimbus 100A – Figura 1](/img/produkte-nimbus/01.png)

[Morsetti a innesto per Nimbus 100A](https://sites.google.com/smart-me.com/wiki/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Funzioni

- Montaggio su piastra di montaggio per contatori secondo DIN43857-1

- Comunicazione con il cloud smart-me: WLAN 2.4 GHz

- Compatibile con morsetti a innesto per contatori (ad es. Hager e Seidl)

- Interfaccia cliente DSMR P1 V5.0.2

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Fatturazione con il [tool smart-me Billing](/konfiguration/billing)

- Controllo tramite [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Interfacce](/) dal sistema tramite API, CSV, MSCONS e IS-E

- Connessione dati criptata in tempo reale verso il cloud smart-me 

- Curva delle letture del contatore firmata (valori a 15 min) secondo OCMF


### Un ancoraggio sicuro per la tua soluzione blockchain

Il contatore Nimbus è stato concepito come "oracolo hardware" affidabile per risolvere il problema critico dell'oracolo nel collegamento di dispositivi IoT a sistemi decentralizzati.

Il processo di firma ECDSA:

1.  Chiave hardware: una chiave privata viene generata su un coprocessore crittografico e non lo abbandona in nessun momento.

2.  Firma on the edge: ogni 15 minuti le letture del contatore (formato OCMF) vengono firmate con la chiave privata tramite ECDSA su una funzione hash SHA-256.

3.  Provenienza verificabile: il risultato è un pacchetto di dati con una firma digitale. Con la chiave pubblica del contatore ogni applicazione può verificare senza alcun dubbio che i dati siano autentici e non modificati.


Il Nimbus offre così una garanzia di sicurezza basata sull'hardware, superiore alle soluzioni puramente software, e costituisce la base perfetta per solide piattaforme di trading P2P, comunità elettriche locali (CEL) e altri servizi energetici decentralizzati.

## Dati tecnici

<Video src="" title="Custom embed" />

## Display

![smart-me Nimbus 100A – Figura 2](/img/produkte-nimbus/02.jpg)

Valore / simbolo Descrizione

1.8.0 Codice OBIS della lettura del contatore visualizzata

Q1 Quadrante attuale (Q1-Q4)

Freccia Direzione dell'energia (a destra prelievo / a sinistra immissione)

Ricezione (barre) Qualità del segnale WLAN

0000053.2 Lettura del contatore

5520W Potenza misurata al momento con unità (w o var)

kWh Unità della lettura del contatore visualizzata (kWh o varh)

### Display a rotazione

![smart-me Nimbus 100A – Figura 3](/img/produkte-nimbus/03.jpg)

Lettura del contatore (codice OBIS seguito dalla lettura del contatore) 

1.8.0 (A+) Energia attiva prelievo totale
2.8.0 (A+) Energia attiva immissione totale
5.8.0 (Q1) Energia reattiva induttiva prelievo totale
6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
7.8.0 (Q3) Energia reattiva induttiva immissione totale
8.8.0 (Q4) Energia reattiva capacitiva immissione totale

![smart-me Nimbus 100A – Figura 4](/img/produkte-nimbus/04.jpg)

Indicazione degli errori (codice OBIS seguito dai messaggi di errore)

C.60.9 Messaggi di errore (la pagina viene visualizzata solo in presenza di errori)

- PhL Errore di cablaggio (sequenza delle fasi errata o fasi non cablate)
    123: Sequenza delle fasi errata. 1, 2 e 3 lampeggiano.
    1 : Solo fase L1 collegata. 2 e 3 lampeggiano.
    2 : Solo fase L2 collegata. 1 e 3 lampeggiano.
    3 : Solo fase L3 collegata. 1 e 2 lampeggiano.
    12 : Solo fase L1 e L2 collegate. 3 lampeggia.
    1  3 : Solo fase L1 e L3 collegate. 2 lampeggia.
    23 : Solo fase L2 e L3 collegate. 1 lampeggia.

- F:F:0 ( Viene visualizzato solo se è presente uno degli errori seguenti)
    0x00: Nessun errore
    0xX2: Il contatore Nimbus non è calibrato
    0xX4: Errore del microprocessore, il contatore deve essere sostituito
    0xX8: Errore software, il contatore deve essere sostituito
    0xX6 Non calibrato ed errore del microprocessore, il contatore deve essere sostituito
    0xXA: Non calibrato ed errore software, il contatore deve essere sostituito
    0xXC: Errore del microprocessore e del software, il contatore deve essere sostituito
    0xXE: Non calibrato, errore del microprocessore ed errore software, il contatore deve essere sostituito
    0x1X: Registro pieno

- Simbolo Meter Manipulation (magnete):  codice OBIS C.51.6  Il contatore è stato influenzato negativamente.

- Simbolo copertura dei morsetti aperta ( "G"):  codice OBIS C.51.2  Il coperchio dei morsetti è aperto.





Firmware (codice OBIS seguito dalle informazioni)

C.1.6 762A Checksum della parte firmware MID
0.2.1 V 1.1 Versione firmware parte MID.

### Funzioni speciali del display

![smart-me Nimbus 100A – Figura 5](/img/produkte-nimbus/05.jpg)

Curva delle letture del contatore (valori a 15 min)

Aprire e uscire dalla memoria:

- Per accedere alla memoria, premi il tasto di visualizzazione T1 per 3-4 secondi.

- Per uscire dalla memoria, premi di nuovo il tasto di visualizzazione T1 per 3-4 secondi oppure attendi 60 secondi.

- Per passare da un valore al successivo premi brevemente il tasto di visualizzazione.


Curva delle letture del contatore:

- 1.8.0 e 2.8.0: codici OBIS rappresentati nella memoria

- 0001: numero della voce in memoria 

- Prima riga: 1.8.0 energia attiva positiva (prelievo) 

- Seconda riga: 2.8.0 energia attiva negativa (immissione)

- Data e ora della voce


![smart-me Nimbus 100A – Figura 6](/img/produkte-nimbus/06.jpg)

![smart-me Nimbus 100A – Figura 7](/img/produkte-nimbus/07.jpg)

Registro 

Apertura del registro:

- Premere il tasto di visualizzazione in modalità normale per 7-8 secondi.


Inserimento della password per la visualizzazione del registro:

L'utente del Nimbus Meter riceve la password dal provider.

- Premendo brevemente il tasto, la prima cifra aumenta di 1.
    Se la cifra è a 9, alla successiva pressione del tasto passa di nuovo a 0.

- Se il tasto non viene premuto per 2 - 3 secondi, si passa automaticamente alla cifra successiva. Questa cifra lampeggia e può essere impostato di nuovo un numero qualsiasi.

- Una volta impostata la 4a cifra, l'inserimento della password si conclude dopo 2 - 3 secondi e la password viene verificata.

- Se la password è corretta, viene visualizzata la schermata SMART-ME LOGBOOK.

- Se la password non è corretta, per alcuni secondi viene visualizzata la password “FALSE” e la visualizzazione torna alla modalità normale su 

- Se nel registro non è ancora presente alcun messaggio (Total : NO ENTRY), la visualizzazione torna alla modalità normale sulla schermata 2 o 3.


Chiusura della visualizzazione del registro:

- Per uscire dal registro il tasto di visualizzazione deve essere tenuto premuto continuativamente per circa 3 - 4 secondi. 

- Se il tasto di visualizzazione non viene premuto entro 60 secondi, la visualizzazione torna anch'essa alla modalità normale sulla schermata 2 o 3.


C.60.9 :  codice OBIS del messaggio attualmente visualizzato 

- 0001  :  numero del messaggio memorizzato; 0001 è il messaggio più recente.

- 8192  :  numero massimo possibile di messaggi nel registro.
    Quando nel registro è memorizzato il numero massimo possibile di messaggi, non vengono più memorizzati ulteriori messaggi ⇨ LOGBOOK FULL.
    In caso di LOGBOOK FULL non sono più possibili ulteriori modifiche dei parametri rilevanti ai fini metrologici senza violare la protezione metrologica.


- Seconda e terza riga:
    identificativo e tipo del messaggio visualizzato.

- Quarta riga: data e ora del messaggio


Informazioni di log:

- Aggiornamento del firmware (New Firmware)

- Copertura dei morsetti aperta o chiusa (Open, close terminal cover)

- Manipolazione rilevata e annullata (Start, End Meter Manipulation)

- Errore di cablaggio rilevato (Set, End Connection)

- Nuova versione del firmware MID (New MID part)

- Ora reimpostata (Time: OLD --> NEW)

- Riavvio del contatore (Meter OFF--> ON)

- Il contatore ha ricevuto una nuova calibrazione (New Meter Calibartion)

- Registro eventi pieno (Last Stored Data, Logbook full)


## Dimensioni e collegamenti

![smart-me Nimbus 100A – Figura 8](/img/produkte-nimbus/08.png)

## Schema di collegamento

Cablaggio

Come linee di alimentazione sono ammessi cavi, conduttori rigidi e cordine tra 4-35 mm2. Le cordine possono essere montate solo con ferrule adatte. Ulteriori informazioni sulle linee di collegamento si trovano nella Quickstarter-Guide.



Impronta della vite: Torx 25



Prima dell'installazione le linee di alimentazione devono essere messe fuori tensione e protette da manipolazioni.






Collegamento con neutro passante

![smart-me Nimbus 100A – Figura 9](/img/produkte-nimbus/09.png)

Schema di collegamento con neutro di eccitazione
(il neutro può essere notevolmente più piccolo di L1, L2 o L3)

![smart-me Nimbus 100A – Figura 10](/img/produkte-nimbus/10.png)

## Funzioni dei tasti

Tasto 1 (T1)

Per collegare il contatore a un account smart-me, durante la messa in servizio con l'app smart-me si tiene premuto il tasto 1 per 10 secondi. Successivamente viene creata una rete Wifi specifica del dispositivo alla quale il telefono cellulare può connettersi per memorizzarvi i dati di accesso Wifi.

Tasto 2 (T2)

Con il tasto 2 è possibile aprire il registro e la curva delle letture del contatore. Per visualizzare la curva delle letture del contatore il tasto 2 deve essere premuto per 4 secondi. Successivamente è possibile inserire la password. La cifra attualmente selezionata viene indicata dal lampeggio. Per modificare questa cifra è possibile premere brevemente il tasto 2. Dopo 10 secondi la visualizzazione passa di una posizione verso destra.

Le password di accesso hanno 4 cifre numeriche.

Se la password è corretta, viene visualizzata l'ultima voce della curva delle letture del contatore. Per visualizzare la voce successiva il tasto 2 deve essere premuto brevemente. Se il tasto 2 non viene premuto per 60 secondi, la visualizzazione torna alla visualizzazione della lettura del contatore.

P1 Interface

Presa RJ-12 per moduli P1

EX1

Interfaccia per comando esterno di contattori (non ancora supportata)

EX2

Slot per moduli di comunicazione alternativi
(non ancora supportato)

L1

LED di stato - si accende in modo fisso quando è presente la connessione al cloud smart-me

L2

LED a impulsi - indica la potenza misurata al momento con 10'000 imp / kWh

Il LED a impulsi può indicare energia attiva e reattiva. Per la commutazione da potenza attiva a reattiva o viceversa il tasto T2 deve essere premuto 10 volte a distanza di 1 sec. Se attualmente sul LED viene indicata la potenza attiva o quella reattiva è riconoscibile sul display nella riga più in basso.

![smart-me Nimbus 100A – Figura 11](/img/produkte-nimbus/11.png)

## P1 Interface (interfaccia cliente)

L'interfaccia P1 del Nimbus consente a fornitori terzi o a clienti finali di riutilizzare i dati misurati in propri sistemi di controllo o di analisi.

A tale scopo è necessario un modulo di lettura dell'interfaccia P1 con connettore RJ-12.
Questo deve supportare il “P1 Companion Standard” di Netbeheer Nederland, versione 5.0.2 (26 febbraio 2016).

Tensione:  5V DC, carico massimo:  100mA DC, isolamento rinforzato verso la rete

[Scopri di più](/schnittstellen/p1-schnittstelle)

## Accessori

- [Morsetti a innesto per contatori](https://sites.google.com/smart-me.com/wiki/drittprodukte/zaehlersteckklemmen-nimbus-100A) - per la sostituzione semplice dei contatori senza interruzione di corrente


## Pulizia

Pulire l'involucro dell'apparecchio con un panno asciutto. Non utilizzare detergenti chimici! 

## Indicazioni su manutenzione e garanzia

L'apparecchio non richiede manutenzione. In caso di danni (ad es. dovuti a trasporto, magazzinaggio) non è consentito eseguire riparazioni in autonomia. All'apertura dell'apparecchio decade il diritto di garanzia. Lo stesso vale se un difetto è imputabile a influenze esterne (ad es. fulmine, acqua, incendio, temperature estreme e condizioni atmosferiche) nonché in caso di utilizzo o trattamento impropri o negligenti. I sigilli possono essere rotti solo da persone autorizzate! 

## Informazioni di spedizione

Numero di articolo: 242065

Nome dell'articolo: smart-me 3-Phasen Zähler Nimbus 100A

Numero di tariffa doganale: 9028.3019

Dimensioni e peso senza imballaggio di consegna: 25.5x18x7 \[cm\] / 1.1kg

Produttore: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Messa in servizio

[Scopri di più](/konfiguration/inbetriebnahme)

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Scheda tecnica inglese](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Dichiarazione di conformità](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Schema di collegamento e schema elettrico \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

### Posso azzerare la lettura del contatore?

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.
