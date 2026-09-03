---
title: 'Contatore di energia trifase Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione dei dati in tempo reale e con collegamento per trasformatori esterni.'
sidebar_label: 'Contatore trifase Telstar CT'
---
Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione dei dati in tempo reale e con collegamento per trasformatori esterni. Il contatore sincronizza i valori di misura in modo automatico e crittografato con la smart-me Cloud. I dati possono essere esportati ed elaborati ulteriormente nel portale smart-me oppure tramite la nostra interfaccia aperta in sistemi di terzi. Il contatore dispone di due uscite digitali per il comando di dispositivi a potenziale zero.

![Contatore di energia trifase Telstar CT – Figura 1](/img/produkte-telstar-ct/01.png)

[Trasformatori e accessori](/drittprodukte/Stromwandler)

## Funzioni

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Collegamento per [trasformatori esterni](/) con correnti di uscita da 0.01A a 6A

- Fatturazione con lo [strumento smart-me Billing](/konfiguration/billing)

- Comando con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Uscite a contatto a potenziale zero](/schnittstellen/ein_und_ausgaenge) per il comando di dispositivi esterni, una delle quali con relè da 8A

- Ingresso a contatto a potenziale zero per segnale tariffario o [ingresso digitale](/schnittstellen/ein_und_ausgaenge)

- [Interfacce](/) tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud


## Dati tecnici

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJmdsIN6iLOfY_AML4DXbCamh1SwcZohszYBjYiVtusFdlA1zrAnZZu4ZFDsQP5pfZxvfloSHGBjkf/pubhtml?gid=0&range=A1:B28&single=true&widget=false&headers=false&chrome=false" aspect="1.963" title="Contatore trifase Telstar CT" />

## Requisiti tecnici dei trasformatori

Con il Telstar CT possono essere impiegati i più diversi trasformatori di corrente. I requisiti di base sono i seguenti:

- Rapporto del trasformatore di corrente: da 1:1 a 20'000:1 e da 5:5 a 20'000:5
    Il numero secondario può essere un numero intero qualsiasi tra 1 e 5.
    Il numero primario un numero intero qualsiasi tra 1 e 20'000.

- Corrente di uscita: da 1A a 5A

- Potenza di uscita: min. 1VA o superiore (raccomandazione 5VA)

- Tipo: apribile o chiuso

- Classe di precisione: 1 o migliore\*


\*Se i contatori devono essere utilizzati per conteggi, sono necessari trasformatori tarati che soddisfino almeno la classe 0.5 o inferiore.

Le raccomandazioni per trasformatori e accessori si trovano nella pagina: [Trasformatori di corrente e accessori](/drittprodukte/Stromwandler) 

## Display

Valore / simbolo Descrizione

1.8.1 Codice OBIS della lettura del contatore visualizzata

T1 Tariffa attiva (tariffa 1 o tariffa 2)

Freccia Direzione della corrente (a destra prelievo / a sinistra immissione)

Ricezione (barre) Intensità del segnale WiFi

0000053.2 Lettura del contatore

5520W Potenza misurata istantaneamente con unità

kWh Unità della lettura del contatore visualizzata

M Funzione non più utilizzata (può essere ignorata)

![Contatore di energia trifase Telstar CT – Figura 2](/img/produkte-telstar-ct/02.png)

Il contatore ha un display a scorrimento. I punti descritti di seguito vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto viene nuovamente visualizzato il primo.

Lettura del contatore (codice OBIS seguito dalla lettura del contatore) 

1.8.1 (A+) Energia attiva prelievo tariffa 1
1.8.2 (A+) Energia attiva prelievo tariffa 2
2.8.1 (A+) Energia attiva immissione tariffa 1
2.8.2 (A+) Energia attiva immissione tariffa 2
1.8.0:5A (A+) Energia attiva totale prelievo base 5A
2.8.0:5A (A-) Energia attiva totale immissione base 5A
5.8.0 (Q1) Energia reattiva induttiva prelievo totale
6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
7.8.0 (Q3) Energia reattiva induttiva immissione totale
8.8.0 (Q4) Energia reattiva capacitiva immissione totale

Fattore del trasformatore (codice OBIS seguito dalle informazioni)

0.4.2       Fattore del trasformatore (incl. impulsi S0 / kWh)

Firmware (codice OBIS seguito dalle informazioni)

C.1.6 Ch: 2218 Checksum del firmware
0.2.0 V 1.1 Versione del firmware

Indicazione di errore (codice OBIS seguito dai messaggi di errore)

C.60.9 Fraud Flag (rilevato possibile tentativo di manomissione)
PhL: 1 collegata solo la fase L1
PhL: 2 collegata solo la fase L2
PhL: 3 collegata solo la fase L3
PhL: 23 fase L1 non collegata
PhL: 13 fase L2 non collegata
PhL: 12 fase L3 non collegata
Sequenza delle fasi corretta: i numeri si illuminano in modo fisso
Sequenza delle fasi errata: i numeri lampeggiano

## Dimensioni e collegamenti

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP nei download.

### Dimensioni \[mm\]

![Contatore di energia trifase Telstar CT – Figura 3](/img/produkte-telstar-ct/03.png)

![Contatore di energia trifase Telstar CT – Figura 4](/img/produkte-telstar-ct/04.png)

### Schema di collegamento

![Contatore di energia trifase Telstar CT – Figura 5](/img/produkte-telstar-ct/05.jpg)

## Impostare il rapporto del trasformatore sul Telstar CT

1.  In alto a destra sul simbolo dell'ingranaggio (Impostazioni / Einstellungen) 

2.  Modifica (Editieren) 

3.  Impostazioni generali (Allgemeine Einstellungen) 

4.  Inserire il rapporto del trasformatore (Wandlerverhältnis) 

5.  Il rapporto del trasformatore può essere bloccato. Ciò serve come protezione contro modifiche indesiderate da parte di persone non autorizzate. Per sbloccare il rapporto del trasformatore, il dispositivo deve essere installato nuovamente con l'app smart-me. In caso di reinstallazione non è necessario eliminare il dispositivo.


Nota: con l'inserimento del rapporto del trasformatore i dati memorizzati storicamente non vengono modificati. Per questo motivo questo passaggio va eseguito immediatamente dopo la messa in servizio.

![Contatore di energia trifase Telstar CT – Figura 6](/img/produkte-telstar-ct/06.png)

## Funzioni dei tasti

![Contatore di energia trifase Telstar CT – Figura 7](/img/produkte-telstar-ct/07.png)

T1 Tasto per l'installazione

Se il tasto T1 viene premuto per 10 secondi, viene generata una rete WiFi locale per l'installazione

T1 + T2 Riavvio

Premere contemporaneamente i tasti T1 e T2 per 10 secondi per forzare un riavvio.

T2 Funzioni speciali

Breve: se T2 viene premuto >2s, la lampada LED verde commuta (da acceso a spento o da spento ad acceso). Quando è attivata, indica lo stato della connessione 

🟢 Verde acceso fisso: connesso alla smart-me Cloud

 ☀︎ Verde lampeggiante: instaurazione della connessione o nessuna connessione

Lungo: se T2 viene premuto >8s, la visualizzazione della potenza commuta tra potenza attiva e reattiva. Inoltre il LED di impulso di taratura passa da energia attiva a energia reattiva.

Molto lungo: se T2 viene premuto >14s, l'uscita a impulsi S0-0 commuta tra potenza attiva e potenza reattiva.

Nota: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nella Cloud, ciò va impostato nelle impostazioni generali (Allgemeine Einstellungen). 

## LED

![Contatore di energia trifase Telstar CT – Figura 8](/img/produkte-telstar-ct/08.png)

🟢 LED verde - stato della connessione

- Indica lo stato della connessione alla smart-me Cloud. a) Lampeggiante = errore di connessione b) Sempre acceso = connessione OK


![Contatore di energia trifase Telstar CT – Figura 9](/img/produkte-telstar-ct/09.png)

🔴 LED rosso - LED di impulso

- Indica la potenza attiva o reattiva attualmente prelevata con 1000 impulsi/kWh risp. 1000 impulsi/kVArh. Se venga indicata la potenza attiva o reattiva può essere impostato con il tasto T2.


- Per esempio: un LED con la dicitura «1000 impulsi/kWh» lampeggia 1000 volte quando è stato prelevato o immesso 1 chilowattora (kWh) di energia. Se i 1000 impulsi sono stati conteggiati entro 1 ora, è stata misurata una potenza costante di 1 kW.


## Configurare ingressi e uscite

Il Telstar CT dispone di due uscite digitali e di un ingresso digitale, che possono essere utilizzati come ingressi e uscite a impulsi oppure come contatto commutabile a potenziale zero. I dettagli in merito si trovano nella pagina wiki [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) 

Il Telstar CT dispone su una uscita digitale di un relè che può commutare fino a 8A.

## Tecnologia Mesh

In caso di ricezione WiFi molto debole o assente, il Telstar CT si collega automaticamente tramite la funzione Mesh a un altro contatore vicino a portata. Questo assume poi la comunicazione con la smart-me Cloud. Con la tecnologia Mesh si garantisce che i contatori presentino una maggiore disponibilità verso la smart-me Cloud. Non è possibile disattivare la funzione Mesh sul contatore. Con [Modbus TCP](/schnittstellen/modbus-tcp) attivato valgono limitazioni specifiche.

## Trasformatori e accessori

Le raccomandazioni per trasformatori e accessori si trovano nella pagina: [Trasformatori di corrente e accessori](/drittprodukte/Stromwandler) 

Nessuno di questi prodotti viene distribuito da smart-me AG o offerto come accessorio al momento dell'acquisto. Acquista questi prodotti direttamente presso il produttore. 

### Informazioni di spedizione

Numero di articolo: 212062 

Nome dell'articolo: 3-Phasen Energiezähler Telstar CT MID Wifi

Numero di tariffa doganale: 9028.3019

Peso con imballaggio: 315g

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Scheda tecnica inglese](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[Dichiarazione di conformità CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schema di collegamento file ZIP](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (i dati \*.DXF e \*.DWG si trovano nell'archivio ZIP)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

### Con quale intervallo i contatori inviano i dati?

- Ogni 15 minuti, quindi alle xx:00:00, xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione questi dati vengono memorizzati localmente e inviati successivamente.

- Inoltre almeno ogni 330 secondi.

- Successivamente, quando si verifica uno dei seguenti eventi:

    - Variazione della lettura del contatore superiore a 100Wh

    - Variazione di potenza superiore a 100W

    - Variazione di corrente superiore a 1A

    - Variazione di tensione superiore a 1V

    - Ogni secondo, quando il contatore è selezionato nella GUI (portale smart-me)


### Posso azzerare la lettura del contatore?

No, poiché i nostri contatori vengono utilizzati per conteggi, non è possibile azzerarli.
