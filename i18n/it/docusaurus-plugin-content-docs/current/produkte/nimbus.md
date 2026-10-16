---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus'
description: 'Montaggio su piastra di montaggio per contatori secondo DIN43857-1'
sidebar_label: 'Contatore trifase Nimbus 100A'
---
![smart-me Nimbus 100A – Figura 1](/img/produkte-nimbus/01.png)

## Accessori
[Morsetti a innesto per contatori per Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100A)

## Funzioni
### Panoramica delle funzioni

- Montaggio su piastra di montaggio per contatori secondo DIN43857-1

- Comunicazione con la smart-me Cloud: WLAN 2.4 GHz

- Compatibile con morsetti a innesto per contatori (ad es. Hager e Seidl)

- Interfaccia cliente DSMR P1 V5.0.2

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Controllo con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Interfacce](/) dal sistema tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud 

- Profilo delle letture del contatore firmato (valori a 15min) secondo OCMF

### Un ancoraggio sicuro per la Sua soluzione blockchain

Il contatore Nimbus è stato concepito come "oracolo hardware" affidabile, per risolvere il critico problema dell'oracolo nel collegamento di dispositivi IoT a sistemi decentralizzati.

Il processo di firma ECDSA:

1.  Chiave hardware: una chiave privata viene generata su un coprocessore crittografico e non lo lascia mai.

2.  Firma on the Edge: ogni 15 minuti le letture del contatore (formato OCMF) vengono firmate con la chiave privata tramite ECDSA su una funzione hash SHA-256.

3.  Provenienza verificabile: il risultato è un pacchetto di dati con una firma digitale. Con la chiave pubblica del contatore, qualsiasi applicazione può verificare senza alcun dubbio che i dati sono autentici e non modificati.

Il Nimbus offre così una garanzia di sicurezza basata sull'hardware, superiore alle soluzioni puramente software, e costituisce la base ideale per robuste piattaforme di scambio P2P, comunità elettriche locali (CEL) e altri servizi energetici decentralizzati.

## Dati tecnici

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR4UWY0pXsfUBgArWNNkGZGvIscStumVrGrU7_h2DGk1YNe_XYOxPLnZoJlARRCO86Fz-aOo0cb0pGh/pubhtml?gid=0&range=A1:B30&single=true&widget=false&headers=false&chrome=false" height="719px" title="Contatore trifase Nimbus 100A" />

## Display

<div className="row">
<div className="col col--6 text--center">

![smart-me Nimbus 100A – Figura 2](/img/produkte-nimbus/02.jpg)

</div>
<div className="col col--6">

Valore / Simbolo Descrizione

- 1.8.0 Codice OBIS della lettura del contatore visualizzata

- Q1 Quadrante attuale della potenza reattiva (Q1-Q4)

- Freccia Direzione dell'energia (destra prelievo / sinistra immissione)

- Ricezione (barre) Qualità del segnale WLAN

- 0000053.2 Lettura del contatore

- 5520W Potenza misurata istantanea (W o VAr)

- kWh Unità della lettura del contatore visualizzata (kWh o varh)

</div>
</div>

### Display a rotazione

<div className="row">
<div className="col col--6 text--center">

![smart-me Nimbus 100A – Figura 3](/img/produkte-nimbus/03.jpg)

</div>
<div className="col col--6">

Lettura del contatore (codice OBIS seguito dalla lettura del contatore) 

- 1.8.0 (A+) Energia attiva prelievo totale
- 2.8.0 (A+) Energia attiva immissione totale
- 5.8.0 (Q1) Energia reattiva induttiva prelievo totale
- 6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
- 7.8.0 (Q3) Energia reattiva induttiva immissione totale
- 8.8.0 (Q4) Energia reattiva capacitiva immissione totale

</div>
</div>


## Dimensioni e collegamenti

![smart-me Nimbus 100A – Figura 8](/img/produkte-nimbus/08.png)

## Schema di collegamento
### Cablaggio

Come linee di alimentazione sono ammessi cavi, conduttori rigidi e trefoli tra 4-35 mm2. I trefoli possono essere montati solo con capicorda (ferrule) adeguati. Ulteriori informazioni sulle linee di collegamento sono disponibili nella Quickstarter-Guide.

Azionamento delle viti: Torx 25

Prima dell'installazione, le linee di alimentazione devono essere messe fuori tensione e protette da manipolazioni.

Collegamento con conduttore neutro passante

![smart-me Nimbus 100A – Figura 9](/img/produkte-nimbus/09.png)

Schema di collegamento con conduttore neutro di eccitazione
(il conduttore neutro può essere notevolmente più piccolo di L1, L2 o L3)

![smart-me Nimbus 100A – Figura 10](/img/produkte-nimbus/10.png)

## Funzioni dei tasti

Tasto 1 (T1)

Per collegare il contatore a un account smart-me, durante la messa in servizio con l'app smart-me si preme il tasto 1 per 10 secondi. In seguito viene creata una rete Wifi specifica del dispositivo, alla quale il telefono cellulare può connettersi per memorizzarvi i dati di accesso Wifi.

Tasto 2 (T2)

Con il tasto 2 è possibile aprire il registro e il profilo delle letture del contatore. Per visualizzare il profilo delle letture del contatore, è necessario premere il tasto 2 per 4 secondi. In seguito è possibile inserire la password. La cifra attualmente selezionata è indicata dal lampeggio. Per modificare questa cifra è possibile premere brevemente il tasto 2. Dopo 10 secondi la visualizzazione passa alla posizione successiva.

Le password di accesso hanno 4 cifre numeriche.

Se la password è corretta, viene visualizzata l'ultima voce del profilo delle letture del contatore. Per visualizzare la voce successiva è necessario premere brevemente il tasto 2. Se il tasto 2 non viene premuto per 60 secondi, la visualizzazione torna alla visualizzazione della lettura del contatore.

- P1 Interface: presa RJ-12 per moduli P1

- EX1: interfaccia per il controllo esterno di contattori (non ancora supportata)

- EX2: slot per moduli di comunicazione alternativi
(non ancora supportato)

- L1: LED di stato - acceso fisso se è presente la connessione con la smart-me Cloud

- L2: LED a impulsi - indica la potenza attualmente misurata in 10'000 Imp / kWh

Il LED a impulsi può indicare l'energia attiva e reattiva. Per passare dalla potenza attiva alla potenza reattiva o viceversa, è necessario premere il tasto T2 10 volte a intervalli di 1 sec. Se sul LED viene attualmente indicata la potenza attiva o reattiva è riconoscibile sull'ultima riga del display.

![smart-me Nimbus 100A – Figura 11](/img/produkte-nimbus/11.png)

## P1 Interface (interfaccia cliente)

La P1 Interface del Nimbus consente a fornitori terzi o clienti finali di riutilizzare i dati misurati nei propri sistemi di controllo o di analisi.

A tale scopo è necessario un modulo di lettura dell'interfaccia P1 con connettore RJ-12.
Questo deve supportare il “P1 Companion Standard” di Netbeheer Nederland. Versione 5.0.2 (26.Februar.2016).

Tensione:  5V DC, carico massimo:  100mA DC, isolamento rinforzato verso la rete

[Per saperne di più](/schnittstellen/p1-schnittstelle)

## Accessori

- [Morsetti a innesto per contatori](/drittprodukte/zaehlersteckklemmen-nimbus-100A) - per sostituire facilmente i contatori senza interruzione di corrente

## Pulizia

Pulisca l'involucro del dispositivo con un panno asciutto. Non utilizzi detergenti chimici! 

## Indicazioni di manutenzione e garanzia

Il dispositivo non richiede manutenzione. In caso di danni (ad es. dovuti a trasporto, stoccaggio) non è consentito effettuare riparazioni in proprio. L'apertura del dispositivo comporta la decadenza del diritto di garanzia. Lo stesso vale se un difetto è riconducibile a influssi esterni (ad es. fulmini, acqua, incendio, temperature estreme e condizioni atmosferiche) nonché in caso di uso o trattamento improprio o negligente. I sigilli possono essere rotti solo da persone autorizzate! 

## Informazioni di spedizione

Numero articolo: 242065

Nome articolo: smart-me 3-Phasen Zähler Nimbus 100A

Numero di tariffa doganale: 9028.3019

Dimensioni e peso senza imballaggio di consegna: 25.5x18x7 \[cm\] / 1.1kg

Produttore: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Messa in servizio

[Per saperne di più](/konfiguration/inbetriebnahme)

## Ulteriori funzioni del display
### Visualizzazione degli errori
<div className="row">
<div className="col col--6 text--center">
![smart-me Nimbus 100A – Figura 4](/img/produkte-nimbus/04.jpg)
</div>
<div className="col col--6">

</div>
</div>
C.60.9 Messaggi di errore (la pagina viene visualizzata solo in presenza di errori)

- PhL Errore di cablaggio (sequenza delle fasi errata o fasi non cablate)

    123: Sequenza delle fasi errata. 1, 2 e 3 lampeggiano.

    1 : Solo la fase L1 collegata. 2 e 3 lampeggiano.

    2 : Solo la fase L2 collegata. 1 e 3 lampeggiano.

    3 : Solo la fase L3 collegata. 1 e 2 lampeggiano.

    12 : Solo le fasi L1 e L2 collegate. 3 lampeggia.

    1  3 : Solo le fasi L1 e L3 collegate. 2 lampeggia.

    23 : Solo le fasi L2 e L3 collegate. 1 lampeggia.

- F:F:0 ( Viene visualizzato solo se è presente uno degli errori seguenti)

    0x00: Nessun errore

    0xX2: Il contatore Nimbus non è calibrato

    0xX4: Errore del microprocessore, il contatore deve essere sostituito

    0xX8: Errore software, il contatore deve essere sostituito

    0xX6 Non calibrato ed errore del microprocessore, il contatore deve essere sostituito

    0xXA: Non calibrato ed errore software, il contatore deve essere sostituito

    0xXC: Errore del microprocessore ed errore software, il contatore deve essere sostituito

    0xXE: Non calibrato, errore del microprocessore ed errore software, il contatore deve essere sostituito

    0x1X: Registro pieno

- Simbolo Meter Manipulation (magnete):  OBIS Code C.51.6  Il contatore è stato influenzato negativamente.

- Simbolo coperchio dei morsetti aperto ( "G"):  OBIS Code C.51.2  Il coperchio dei morsetti è aperto.

Firmware (codice OBIS seguito da informazioni)

C.1.6 762A Checksum della parte MID del firmware
0.2.1 V 1.1 Versione del firmware della parte MID.

### Display del profilo delle letture del contatore
<div className="row">
<div className="col col--6 text--center">
![smart-me Nimbus 100A – Figura 5](/img/produkte-nimbus/05.jpg)
</div>
<div className="col col--6">

</div>
</div>
Profilo delle letture del contatore (valori a 15min)

Apertura e uscita dalla memoria:

- Per accedere alla memoria, prema il tasto di visualizzazione T1 per 3-4 secondi.

- Per uscire dalla memoria, prema nuovamente il tasto di visualizzazione T1 per 3-4 secondi oppure attenda 60 secondi.

- Per passare da un valore al successivo, prema ogni volta brevemente il tasto di visualizzazione.

Profilo delle letture del contatore:

- 1.8.0 e 2.8.0: codici OBIS rappresentati nella memoria

- 0001: numero della voce nella memoria 

- Prima riga: 1.8.0 energia attiva positiva (prelievo) 

- Seconda riga: 2.8.0 energia attiva negativa (immissione)

- Data e ora della voce

### Registro 
<div className="row">
<div className="col col--6 text--center">

![smart-me Nimbus 100A – Figura 6](/img/produkte-nimbus/06.jpg)

![smart-me Nimbus 100A – Figura 7](/img/produkte-nimbus/07.jpg)
</div>
<div className="col col--6">

</div>
</div>

Apertura del registro:

- In modalità normale premere il tasto di visualizzazione per 7-8 secondi.

Inserimento della password per la visualizzazione del registro:

L'utente del NIMBUS Meter riceve la password dal provider.

- Premendo brevemente il tasto, la prima cifra aumenta di 1.

    Se la cifra è a 9, alla pressione successiva del tasto torna a 0.

- Se il tasto non viene premuto per 2 - 3 secondi, si passa automaticamente alla cifra successiva. Questa cifra lampeggia ed è nuovamente possibile impostare un numero qualsiasi.

- Una volta impostata la 4a cifra, l'inserimento della password termina dopo 2 - 3 secondi e la password viene verificata.

- Se la password è corretta, viene visualizzata la schermata SMART-ME LOGBOOK.

- Se la password non è corretta, per alcuni secondi viene visualizzata la password “FALSE” e la visualizzazione torna alla modalità normale su 

- Se nel registro non è ancora presente alcun messaggio (Total : NO ENTRY), la visualizzazione torna alla modalità normale sulla schermata 2 o 3.

Chiusura della visualizzazione del registro:

- Per uscire dal registro è necessario tenere premuto il tasto di visualizzazione per ca. 3 - 4 secondi. 

- Se il tasto di visualizzazione non viene premuto entro 60 secondi, la visualizzazione torna anch'essa alla modalità normale sulla schermata 2 o 3.

C.60.9 :  codice OBIS del messaggio attualmente visualizzato 

- 0001  :  numero del messaggio memorizzato; 0001 è il messaggio più recente.

- 8192  :  numero massimo di messaggi possibili nel registro.

    Quando il numero massimo di messaggi possibili è memorizzato nel registro, non vengono memorizzati ulteriori messaggi ⇨ LOGBOOK FULL.

    In caso di LOGBOOK FULL, ulteriori modifiche dei parametri rilevanti ai fini metrologici non sono più possibili senza violare la protezione metrologica.

- Seconda e terza riga:

    Identificativo e tipo del messaggio visualizzato.

- Quarta riga: data e ora del messaggio

Informazioni di log:

- Aggiornamento del firmware (New Firmware)

- Coperchio dei morsetti aperto o chiuso (Open, close terminal cover)

- Manipolazione rilevata e cessata (Start, End Meter Manipulation)

- Errore di cablaggio rilevato (Set, End Connection)

- Nuova versione del firmware MID (New MID part)

- Ora reimpostata (Time: OLD --> NEW)

- Riavvio del contatore (Meter OFF--> ON)

- Il contatore ha ricevuto una nuova calibrazione (New Meter Calibartion)

- Registro eventi pieno (Last Stored Data, Logbook full)

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/document/d/1tcs5EvHC442kjFp2khZIJCFZguj6PGaukyTmDoJuPaU/export?format=pdf)

[Scheda tecnica inglese](https://docs.google.com/document/d/1rb7S8jR9PbH3F1A4RE9wVNmU8WbtwwjxydKl-hCU1qI/export?format=pdf)

[Quick Starter](https://docs.google.com/document/d/1phDRJ66HykZ1iLdGiOnJHnGE1lK8t3DSuDcbuHEF5LY/export?format=pdf)

[Dichiarazione di conformità](https://drive.google.com/file/d/17rSWI22a6nR7pHccIYKvocBXmn6ZP0QS/view?usp=drive_link)

[Schema di collegamento e schema elettrico \_ZIP\_Files](https://drive.google.com/file/d/1GNkax4vqSrV27X_cSXFLTOW-COGTccYi/view?usp=sharing)

## FAQ

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Posso azzerare la lettura del contatore?</summary>

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

</details>
