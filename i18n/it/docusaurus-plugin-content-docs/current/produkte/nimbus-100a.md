---
title: 'smart-me Nimbus 100A'
slug: '/produkte/nimbus-100a'
description: 'Montaggio su piastra portacontatore secondo DIN43857-1'
sidebar_label: 'Contatore trifase Nimbus 100A'
---
![smart-me Nimbus 100A – Figura 1](/img/produkte-nimbus-100a/01.png)

## Accessori opzionali

[Morsetti a innesto per contatore Nimbus 100A](/drittprodukte/zaehlersteckklemmen-nimbus-100a)

## Funzioni

- Montaggio su piastra portacontatore secondo DIN43857-1

- Comunicazione con la smart-me Cloud: WLAN 2.4 GHz

- Compatibile con morsetti a innesto per contatore (ad es. Hager e Seidl)

- Interfaccia cliente DSMR P1 V5.0.2

- [Installazione](/konfiguration/inbetriebnahme) con la smart-me App gratuita.

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Controllo con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Interfacce](/) dal sistema tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud 

- Curva delle letture del contatore firmata (valori a 15 min) secondo OCMF

### Un ancoraggio sicuro per la tua soluzione blockchain

Il contatore Nimbus è stato concepito come "oracolo hardware" affidabile per risolvere il problema critico dell'oracolo nel collegamento di dispositivi IoT a sistemi decentralizzati.

Il processo di firma ECDSA:

1.  Chiave hardware: una chiave privata viene generata su un coprocessore crittografico e non lo lascia in nessun momento.

2.  Firma on the edge: ogni 15 minuti le letture del contatore (formato OCMF) vengono firmate con la chiave privata tramite ECDSA su una funzione di hash SHA-256.

3.  Provenienza verificabile: il risultato è un pacchetto di dati con una firma digitale. Con la chiave pubblica del contatore, qualsiasi applicazione può verificare senza ombra di dubbio che i dati sono autentici e non modificati.

Il Nimbus offre così una garanzia di sicurezza basata sull'hardware, superiore alle soluzioni puramente software, e costituisce la base perfetta per solide piattaforme di scambio P2P, comunità elettriche locali (CEL) e altri servizi energetici decentralizzati.

## Dati tecnici

| Caratteristica | Valore |
| --- | --- |
| Certificazione del prodotto | CE, MID 2014/32/EU, CH-curva di carico / energia reattiva, RED 2014/53/EU |
| Classe di precisione per energia attiva/energia reattiva | B (MID) / 2 (IEC) |
| Norme applicate | EN50470-1:2006, EN 50470-3:2006 |
| Direzione | +A (prelievo), -A (fornitura), +R, -R |
| Quadranti | Q1, Q2, Q3, Q4 |
| Tensione di rete | 3x230/400VAC 50Hz |
| Campo di misura della corrente Imin-Iref(Imax) | 0.25-5(100)A |
| Sezioni dei cavi dei morsetti | 2.5-35 mm2 |
| Categoria dello strumento di misura | CAT III |
| Interfaccia cliente | DSMR P1 V5.0.2 , presa RJ12 |
| Campo di temperatura (esercizio, stoccaggio e trasporto) | da -25°C a +70°C |
| Umidità relativa dell'aria | Media annua 75%, senza condensa<br />brevemente 95%, senza condensa |
| Altitudine | fino a 2000m |
| Valori misurati | Energia attiva (kWh), potenza attiva (kW)<br />Energia reattiva (kvarh), potenza reattiva (kvar)<br />Corrente (A), tensione (V), fattore di potenza (cosφ) |
| Autoconsumo per fase | &lt; 0.8W |
| Tariffe | tariffe virtuali illimitate nella smart-me Cloud |
| Uscita ottica di prova | 10'000 Imp/kWh |
| Comunicazione | WLAN IEEE 802.11 b/g/n (2.4 GHz)<br />LTE CAT-M1 (modulo a innesto, opzionale) |
| Standard di sicurezza WLAN | WEP, WPA-PSK/WPA2-PSK |
| Memoria dati (registro & curva delle letture del contatore) | 9 mesi |
| Sicurezza dei dati | AES-128 CBC, curva delle letture del contatore a 15 min firmata, formato OCMF |
| Involucro | Grado di protezione: IP51 (montato su piastra di montaggio)<br />Materiale dell'involucro: policarbonato rinforzato con fibra di vetro<br />Dimensioni: L:171mm A:236mm P:59mm |
| Condizioni ambientali | M1, E2, interno |
| Montaggio | Piastra portacontatore secondo DIN 43857-1 |
| Ubicazione del server | Svizzera |
| Classe di protezione | II |
| Tensione impulsiva nominale (Uimp, Safety) | 6 kV |
| Categoria di utilizzo | UC 2 |
| Ultima modifica | 24.09.2025 |

## Display

<div className="row">
<div className="col col--6 bild--mitte">

![smart-me Nimbus 100A – Figura 2](/img/produkte-nimbus-100a/02.jpg)

</div>
<div className="col col--6">

**Valore / simbolo Descrizione**

- 1.8.0 Codice OBIS della lettura del contatore visualizzata

- Q1 Quadrante attuale (Q1-Q4)

- Freccia Direzione dell'energia (destra prelievo / sinistra fornitura)

- Ricezione (barre) Qualità del segnale WLAN

- 0000053.2 Lettura del contatore

- 5520W Potenza misurata istantanea con unità (w o var)

- kWh Unità della lettura del contatore visualizzata (kWh o varh)

</div>
</div>

### Display a rotazione

<div className="row">
<div className="col col--6 bild--mitte">

![smart-me Nimbus 100A – Figura 3](/img/produkte-nimbus-100a/03.jpg)

</div>
<div className="col col--6">

**Lettura del contatore (codice OBIS seguito dalla lettura del contatore)**

- 1.8.0 (A+) Energia attiva prelievo totale
- 2.8.0 (A+) Energia attiva fornitura totale
- 5.8.0 (Q1) Energia reattiva induttiva prelievo totale
- 6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
- 7.8.0 (Q3) Energia reattiva induttiva fornitura totale
- 8.8.0 (Q4) Energia reattiva capacitiva fornitura totale

</div>
</div>

![smart-me Nimbus 100A – Figura 4](/img/produkte-nimbus-100a/04.jpg)

**Indicazione degli errori (codice OBIS seguito dai messaggi di errore)**

C.60.9 Messaggi di errore (la pagina viene visualizzata solo in presenza di errori)

- PhL Errore di cablaggio (sequenza delle fasi errata o fasi non cablate)

    123: Sequenza delle fasi errata. 1, 2 e 3 lampeggiano.

    1 : Collegata solo la fase L1. 2 e 3 lampeggiano.

    2 : Collegata solo la fase L2. 1 e 3 lampeggiano.

    3 : Collegata solo la fase L3. 1 e 2 lampeggiano.

    12 : Collegate solo le fasi L1 e L2. 3 lampeggia.

    1  3 : Collegate solo le fasi L1 e L3. 2 lampeggia.

    23 : Collegate solo le fasi L2 e L3. 1 lampeggia.

- F:F:0 ( Viene visualizzato solo in presenza di uno degli errori sottostanti)

    0x00: Nessun errore

    0xX2: Il contatore Nimbus non è calibrato

    0xX4: Errore del microprocessore, il contatore deve essere sostituito

    0xX8: Errore software, il contatore deve essere sostituito

    0xX6 Non calibrato ed errore del microprocessore, il contatore deve essere sostituito

    0xXA: Non calibrato ed errore software, il contatore deve essere sostituito

    0xXC: Errore del microprocessore ed errore software, il contatore deve essere sostituito

    0xXE: Non calibrato, errore del microprocessore ed errore software, il contatore deve essere sostituito

    0x1X: Registro pieno

- Simbolo manipolazione del contatore (magnete):  codice OBIS C.51.6  Il contatore è stato influenzato negativamente.

- Simbolo copertura dei morsetti aperta ( "G"):  codice OBIS C.51.2  Il coprimorsetti è aperto.

**Firmware (codice OBIS seguito dalle informazioni)**

- C.1.6 762A Checksum della parte MID del firmware
- 0.2.1 V 1.1 Versione del firmware della parte MID.

### Funzioni speciali del display

![smart-me Nimbus 100A – Figura 5](/img/produkte-nimbus-100a/05.jpg)

**Curva delle letture del contatore (valori a 15 min)**

Apertura e uscita dalla memoria:

- Per accedere alla memoria, premi il tasto di visualizzazione T1 per 3-4 secondi.

- Per uscire dalla memoria, premi di nuovo il tasto di visualizzazione T1 per 3-4 secondi oppure attendi 60 secondi.

- Per passare da un valore al successivo, premi brevemente il tasto di visualizzazione.

**Curva delle letture del contatore:**

- 1.8.0 e 2.8.0: codici OBIS rappresentati nella memoria

- 0001: numero della voce nella memoria 

- Prima riga: 1.8.0 Energia attiva positiva (prelievo) 

- Seconda riga: 2.8.0 Energia attiva negativa (fornitura)

- Data e ora della voce

![smart-me Nimbus 100A – Figura 6](/img/produkte-nimbus-100a/06.jpg)

![smart-me Nimbus 100A – Figura 7](/img/produkte-nimbus-100a/07.jpg)

**Registro**

**Apertura del registro:**

- In modalità normale, premere il tasto di visualizzazione per 7-8 secondi.

**Inserimento della password per la visualizzazione del registro:**

L'utente del NIMBUS Meter riceve la password dal provider.

- Premendo brevemente il tasto, la prima cifra aumenta di 1.

    Se la cifra è a 9, alla pressione successiva del tasto torna a 0.

- Se il tasto non viene premuto per 2 - 3 secondi, si passa automaticamente alla cifra successiva. Questa cifra lampeggia ed è di nuovo possibile impostare un numero qualsiasi.

- Una volta impostata la 4a cifra, l'inserimento della password termina dopo 2 - 3 secondi e la password viene verificata.

- Se la password è corretta, viene visualizzata la schermata SMART-ME LOGBOOK.

- Se la password non è corretta, per alcuni secondi viene visualizzata la password “FALSE” e il display torna alla modalità normale 

- Se nel registro non è ancora presente alcun messaggio (Total : NO ENTRY), il display torna alla modalità normale sulla schermata 2 o 3.

**Chiusura della visualizzazione del registro:**

- Per uscire dal registro, il tasto di visualizzazione deve essere tenuto premuto per circa 3 - 4 secondi. 

- Se il tasto di visualizzazione non viene premuto entro 60 secondi, il display torna anch'esso alla modalità normale sulla schermata 2 o 3.

C.60.9 :  codice OBIS del messaggio attualmente visualizzato 

- 0001  :  numero del messaggio memorizzato; 0001 è il messaggio più recente.

- 8192  :  numero massimo di messaggi possibili nel registro.

    Quando nel registro è memorizzato il numero massimo di messaggi possibili, non vengono più memorizzati altri messaggi ⇨ LOGBOOK FULL.

    Con LOGBOOK FULL, ulteriori modifiche dei parametri rilevanti ai fini metrologici non sono più possibili senza violare il sigillo metrologico.

- Seconda e terza riga:

    Identificativo e tipo del messaggio visualizzato.

- Quarta riga: data e ora del messaggio

**Informazioni di registro:**

- Aggiornamento del firmware (New Firmware)

- Copertura dei morsetti aperta o chiusa (Open, close terminal cover)

- Manipolazione rilevata e cessata (Start, End Meter Manipulation)

- Errore di cablaggio rilevato (Set, End Connection)

- Nuova versione del firmware MID (New MID part)

- Ora reimpostata (Time: OLD --> NEW)

- Riavvio del contatore (Meter OFF--> ON)

- Il contatore ha ricevuto una nuova calibrazione (New Meter Calibartion)

- Registro eventi pieno (Last Stored Data, Logbook full)

## Dimensioni e collegamenti

![smart-me Nimbus 100A – Figura 8](/img/produkte-nimbus-100a/08.png)

## Schema di collegamento

**Cablaggio**

Come linee di alimentazione sono ammessi funi, conduttori rigidi e trefoli tra 4-35 mm2. I trefoli possono essere montati solo con capicorda adeguati. Ulteriori informazioni sulle linee di collegamento sono disponibili nella guida Quickstarter.

Azionamento delle viti: Torx 25

Prima dell'installazione, le linee di alimentazione devono essere messe fuori tensione e protette da manipolazioni.

Collegamento con conduttore neutro passante

![smart-me Nimbus 100A – Figura 9](/img/produkte-nimbus-100a/09.png)

Schema di collegamento con conduttore neutro di eccitazione
(il conduttore neutro può essere notevolmente più piccolo di L1, L2 o L3)

![smart-me Nimbus 100A – Figura 10](/img/produkte-nimbus-100a/10.png)

## Funzioni dei tasti

Tasto 1 (T1)

Per collegare il contatore a un account smart-me, durante la messa in servizio con la smart-me App si preme il tasto 1 per 10 secondi. Viene quindi creata una rete Wifi specifica del dispositivo, alla quale il telefono cellulare può connettersi per memorizzarvi i dati di accesso Wifi.

Tasto 2 (T2)

Con il tasto 2 è possibile aprire il registro e la curva delle letture del contatore. Per visualizzare la curva delle letture del contatore, il tasto 2 deve essere premuto per 4 secondi. Successivamente è possibile inserire la password. La cifra attualmente selezionata è indicata dal lampeggio. Per modificare questa cifra, è possibile premere brevemente il tasto 2. Dopo 10 secondi il display passa alla posizione successiva.

Le password di accesso hanno 4 cifre numeriche.

Se la password è corretta, viene visualizzata l'ultima voce della curva delle letture del contatore. Per visualizzare la voce successiva, il tasto 2 deve essere premuto brevemente. Se il tasto 2 non viene premuto per 60 secondi, il display torna alla visualizzazione della lettura del contatore.

- **P1 Interface**

- **Presa RJ-12 per moduli P1**

- **EX1** - Interfaccia per il controllo esterno di contattori (non ancora supportata)

- **EX2** - Slot per moduli di comunicazione alternativi (non ancora supportato)

- **L1** - LED di stato - si accende fisso in presenza di connessione con la smart-me Cloud

- **L2** - LED a impulsi - indica la potenza attualmente misurata in 10'000 Imp / kWh

Il LED a impulsi può indicare l'energia attiva e l'energia reattiva. Per commutare dalla potenza attiva alla potenza reattiva o viceversa, il tasto T2 deve essere premuto 10 volte a intervalli di 1 sec. Se sul LED è attualmente indicata la potenza attiva o la potenza reattiva, lo si riconosce sull'ultima riga del display.

![smart-me Nimbus 100A – Figura 11](/img/produkte-nimbus-100a/11.png)

## P1 Interface (interfaccia cliente)

La P1 Interface del Nimbus consente a fornitori terzi o clienti finali di riutilizzare i dati misurati nei propri sistemi di controllo o di analisi.

A tale scopo è necessario un modulo di lettura dell'interfaccia P1 con connettore RJ-12.
Questo deve supportare il “P1 Companion Standard” di Netbeheer Nederland. Versione 5.0.2 (26.febbraio.2016).

Tensione:  5V DC, carico massimo:  100mA DC, isolamento rinforzato verso la rete

[Per saperne di più](/schnittstellen/p1-schnittstelle)

## Accessori

- [Morsetti a innesto per contatore](/drittprodukte/zaehlersteckklemmen-nimbus-100a) - per sostituire facilmente i contatori senza interruzione di corrente

## Pulizia

Pulisci l'involucro del dispositivo con un panno asciutto. Non utilizzare detergenti chimici! 

## Indicazioni su manutenzione e garanzia

Il dispositivo non richiede manutenzione. In caso di danni (ad es. dovuti a trasporto o stoccaggio) non è consentito effettuare riparazioni in proprio. L'apertura del dispositivo fa decadere il diritto alla garanzia. Lo stesso vale se un difetto è riconducibile a influssi esterni (ad es. fulmini, acqua, incendio, temperature e condizioni atmosferiche estreme) nonché in caso di uso o trattamento improprio o negligente. I sigilli possono essere rotti solo da persone autorizzate! 

## Informazioni di spedizione

Numero articolo: 242065

Nome articolo: smart-me 3-Phasen Zähler Nimbus 100A

Numero di tariffa doganale: 9028.3019

Dimensioni e peso senza imballaggio di spedizione: 25.5x18x7 \[cm\] / 1.1kg

Produttore: smart-me AG, Riedstrasse 18, 6343 Rotkreuz

## Messa in servizio

[Per saperne di più](/konfiguration/inbetriebnahme)

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
