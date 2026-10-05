---
title: 'MS Test Copy'
slug: '/zz-ms-test/mstestcopy'
description: 'Copia di prova della pagina prodotto Pico per la verifica delle regole di formattazione.'
sidebar_label: 'MS Test Copy'
---
<div className="row">
<div className="col col--7">

Pico è una stazione di ricarica certificata MID con interfaccia di telefonia mobile e WiFi integrata per la trasmissione di dati in tempo reale. La stazione di ricarica sincronizza i valori misurati in modo automatico e criptato nella smart-me Cloud. La stazione può essere integrata nel backend eCarUp e dispone di una gestione del carico statica e dinamica. I dati possono essere esportati ed elaborati nel portale smart-me o tramite la nostra interfaccia aperta in sistemi di terzi.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 1](/img/produkte-pico-ladestation/01.png)

</div>
</div>

## Principali indicazioni di installazione in breve

- Pico dispone di una commutazione di fase: colleghi tutte le fasi secondo la marcatura (L1 = L1, L2 = L2, L3 = L3).
- In particolare per un impiego all'esterno, osservi le [Istruzioni di installazione e montaggio (tedesco)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf), per non dimenticare alcun elemento di tenuta. Il grado IP55 si raggiunge solo con gli elementi di tenuta.
- Serri adeguatamente gli elementi di tenuta e verifichi la corretta posizione delle guarnizioni.

[Pianificazione dell'installazione](/produkte/pico-ladestation/installationsplanung)

[Gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessori](/produkte/pico-ladestation/pico-zubehör)

[Display Pico](/produkte/pico-ladestation/pico-display)

[Piedistallo Pico](/produkte/pico-ladestation/pico-standfuss)

## Webinar e video

Registrazione del webinar Release gestione del carico multilivello (50 min)

<Video src="YiiACL00jko" title="Registrazione del webinar Release gestione del carico multilivello" />

Cosa si cela dietro la certificazione MID (30 min)

<Video src="Bx9QOYZPWEk" title="Certificazione MID Pico – Webinar" />

Breve video: la stazione di ricarica Pico ottiene la certificazione MID (2 min)

<Video src="bSEN20E-h18" title="La stazione di ricarica Pico ottiene la certificazione MID" />

## Panoramica delle funzioni

- Gestione del carico integrata e bilanciamento del carico con bilanciamento delle fasi
- Scheda SIM integrata con un volume di dati per 10 anni
- [Certificazione MID](/planung/zertifizierungen#certificazioni-per-le-stazioni-di-ricarica) e certificazione del profilo di carico dell'hardware di misura interno grazie al display di grandi dimensioni
- Dispositivi di protezione da guasti integrati 30mA AC secondo IEC60947-2 e 6mA DC IEC62955
- [Certificazione secondo il diritto metrologico tedesco (Eichrecht)](/planung/zertifizierungen#certificazione-secondo-il-diritto-metrologico-eichrecht-germania) (n. art. 242070, 2402070/1)
- Montaggio semplice (piccola e leggera), adatta per il cavo piatto
- Identificazione tramite RFID, app, CarID e predisposta per ISO 15118 (Plug & Charge)
- Predisposta per la comunicazione powerline ISO15118 (Plug&Charge, V2H, V2G)
- Connessione dati criptata in tempo reale nella smart-me e eCarUp Cloud
- [Installazione](/konfiguration/inbetriebnahme) semplice con l'app smart-me gratuita
- Interfacce verso sistemi di terzi tramite API, CSV, MSCONS, IS-E e altre
- Controllo ottimizzato per il fotovoltaico
- Distacco del carico secondo il [Paragrafo 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Germania)

## Configurare Pico

Informazioni su montaggio, modalità MID, come verificare le sessioni di ricarica secondo il diritto metrologico, stati e messaggi di errore si trovano nel [Manuale di installazione (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf).

L'installazione è trattata in dettaglio qui: [Messa in servizio](/konfiguration/inbetriebnahme)

La configurazione è trattata in dettaglio qui: [Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

## Dati tecnici

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxJQ_thhwYfeefD_1PLiscIfGqbt-LrSa8pwwFBKwlmze109NOEt8Eyka2lroJoGS_FRiuGgtiAhh/pubhtml?gid=0&range=A1:B26&single=true&widget=false&headers=false&chrome=false" aspect="1.733" title="Dati tecnici della stazione di ricarica Pico" />

[Scarica la scheda tecnica (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Descrizioni delle funzioni

### Standard di comunicazione ISO 15118 (Plug&Charge, V2H, V2G)

Lo standard ISO15118 è uno standard di comunicazione tra veicolo e stazione di ricarica. Descrive i requisiti fisici e i protocolli, nonché le funzioni supportate da questa interfaccia.

Le funzioni comprendono principalmente:

- Abilitazioni alla ricarica per Plug & Charge
- Gestione della ricarica per la carica e la scarica dei veicoli (ricarica unidirezionale, ricarica bidirezionale per V2H e V2G)

**Qual è l'obiettivo dello standard?**

L'obiettivo di questo standard è un'implementazione omogenea del veicolo e del suo accumulatore nella rete pubblica o nel sistema domestico come unità di accumulo. A lungo termine, l'accumulatore del veicolo dovrà poter essere utilizzato per la stabilizzazione della rete pubblica (V2G = Vehicle to Grid) o come soluzione di accumulo domestico (V2H = Vehicle to Home).

**È già una realtà oggi?**

L'impiego di questo standard è ancora molto limitato. Attualmente diversi produttori di hardware di ricarica e di veicoli stanno effettuando test su questo tema, per armonizzare e sviluppare ulteriormente la comunicazione. Le soluzioni Plug & Charge sono in parte già in funzione nella vita reale, ma non ancora particolarmente diffuse.

Le applicazioni V2G e V2H sono in parte già supportate oggi dalle stazioni di ricarica DC. L'offerta di V2G e V2H da parte delle stazioni di ricarica AC è attualmente ancora fortemente limitata o inesistente, a causa della mancata disponibilità dei dispositivi necessari da parte dei veicoli.

I primi produttori di veicoli hanno però già annunciato veicoli che disporranno dei dispositivi tecnici. Attualmente, tuttavia, nessuno di questi veicoli può ancora essere acquistato sul mercato. (Stato 16.05.2025)

**Cosa significa questo per la Sua stazione di ricarica Pico?**

La Sua stazione di ricarica Pico è completamente predisposta per il futuro. Un aggiornamento software sarà sufficiente per abilitare le funzioni sulla Sua Pico. Stiamo attualmente lavorando intensamente all'implementazione delle funzionalità.

### RCD / Rilevamento dei guasti in corrente continua e protezione del carico

I dispositivi di sicurezza integrati verificano in modo completamente automatico la propria funzionalità:

- almeno ogni 24 ore dall'ultima verifica,
- ogni volta che l'apparecchio viene riavviato.

Se durante gli autotest viene rilevato un errore, la corrente non viene abilitata e l'informazione viene visualizzata sul display. Se si verifica un errore durante la sessione di ricarica, la corrente viene interrotta e l'errore viene visualizzato sul display.

Il ripristino dell'errore può avvenire solo meccanicamente, scollegando e ricollegando il cavo di ricarica alla stazione di ricarica.

## Display

<div className="row">
<div className="col col--7">

Il comportamento del display è descritto alla pagina [Display Pico](/produkte/pico-ladestation/pico-display).

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 2](/img/produkte-pico-ladestation/02.png)

</div>
</div>

## Collegamenti e dimensioni Pico

### Schema di collegamento

<div className="row">
<div className="col col--7">

| Morsetto | Significato |
| --- | --- |
| L1 | Fase 1 |
| L2 | Fase 2 |
| L3 | Fase 3 |
| N | Conduttore di neutro / Neutro |
| PE | Conduttore di protezione |

Il conduttore di protezione dovrebbe essere collegato alla vite di collegamento superiore, in modo che il piedistallo venga messo a terra direttamente insieme alla stazione.

**Attenzione:** il prodotto può essere utilizzato solo con collegamento trifase a stella o monofase.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 3](/img/produkte-pico-ladestation/03.jpg)

</div>
</div>

**Passaggi dei cavi**

Su Pico i cavi possono entrare e uscire in 5 punti: due in alto, due in basso e uno attraverso la piastra posteriore. Per il montaggio attraverso la piastra posteriore è necessario praticare un foro con un diametro di 25–26 mm.

I dettagli sul montaggio del piedistallo si trovano nelle istruzioni di montaggio tra i download.

### Distacco del carico (ingressi esterni)

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Tabella distacco del carico Pico" />

[Apri la tabella distacco del carico Pico in Google Fogli](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY)

<div className="row">
<div className="col col--7">

Il distacco del carico può essere realizzato anche con un solo segnale disponibile.

Per la configurazione da nessuna ricarica alla potenza di ricarica massima, il segnale viene cablato su IN1 e IN2 e su COM. Per la configurazione da una potenza minima di 6 A alla potenza di ricarica massima, il segnale deve essere cablato solo su IN2 e su COM.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 4](/img/produkte-pico-ladestation/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

COM è il conduttore di neutro. IN1 e IN2 devono essere alimentati con una tensione in presenza del segnale ON; essi stessi non generano tensione, che deve essere fornita dall'esterno.

**Attenzione:** il distacco del carico può essere cablato su tutte le Pico oppure, come minimo, su una per ogni gruppo di carico. Questa funzione è garantita anche senza connessione Internet.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 5](/img/produkte-pico-ladestation/05.png)

</div>
</div>

<div className="row">
<div className="col col--7">

In alternativa, il distacco del carico può avvenire anche tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configurazione-del-distacco-del-carico) mediante segnali di ingresso del contatore.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 6](/img/produkte-pico-ladestation/06.png)

</div>
</div>

### Dimensioni

<div className="row">
<div className="col col--7">

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP tra i download.

</div>
<div className="col col--5 text--center">

![Stazione di ricarica Pico – Figura 7](/img/produkte-pico-ladestation/07.png)

</div>
</div>

## Informazioni di spedizione

### 232070 e 242070 smart-me Pico stazione di ricarica incl. piastra di montaggio

| Indicazione | Valore |
| --- | --- |
| Numero di tariffa doganale | 85044055 |
| Peso con imballaggio | 4.6 kg |
| Dimensioni imballaggio | 400 × 300 × 200 mm |
| Pacchi per europallet | 72 pezzi |

### 232070/1 e 242070/1 smart-me Pico stazione di ricarica senza piastra di montaggio

| Indicazione | Valore |
| --- | --- |
| Numero di tariffa doganale | 85044055 |
| Peso con imballaggio | 3.3 kg |
| Dimensioni imballaggio | 400 × 300 × 200 mm |
| Pacchi per europallet | 72 pezzi |

## Accessori

[Accessori](/produkte/pico-ladestation/pico-zubehör)

## Avvertenze di sicurezza

Le avvertenze di sicurezza devono essere rispettate in ogni circostanza.

**Installazione, manutenzione, riparazione, messa in servizio**

- Legga attentamente l'intero manuale prima dell'installazione e dell'utilizzo del prodotto.
- Pericolo di morte dovuto all'alta tensione elettrica. Non apportare mai modifiche a componenti, software o linee di collegamento senza aver tolto la tensione. A tale scopo occorre rimuovere i relativi fusibili a monte e conservarli in modo che altre persone non possano reinserirli inosservate.
- Il prodotto può essere installato, riparato o sottoposto a manutenzione esclusivamente da un elettricista qualificato autorizzato. Devono essere rispettate tutte le prescrizioni comunali, regionali e nazionali vigenti per gli impianti elettrici.
- I numeri di serie precedenti a 7002702 richiedono un RCD Typ A in serie per soddisfare gli standard di installazione nazionali.
- L'installazione non deve avvenire in prossimità di sostanze infiammabili o esplosive, in zone soggette ad allagamento (autorimessa sotterranea) o in aree in cui sussiste il pericolo di acqua corrente.
- Il prodotto deve essere installato in una posizione definitiva. I collegamenti sulla Pico e sulla piastra posteriore sono progettati per un numero limitato di cicli di inserimento.
- Il prodotto deve essere installato su una parete o una struttura con sufficiente capacità portante.
- I morsetti di collegamento nella piastra posteriore sono sotto tensione a circuito chiuso e non devono in nessun caso entrare in contatto, direttamente o con altri oggetti, con nient'altro che l'elettronica Pico.
- A seconda del tipo di installazione, prima dell'installazione potrebbero essere necessarie autorizzazioni, ad es. in caso di aumento della potenza dell'allacciamento domestico.
- La stazione di ricarica deve essere notificata al gestore della rete di distribuzione.
- Le viti dei collegamenti dei cavi dovrebbero essere serrate con una coppia di 3 Nm. Il diametro massimo del cavo con capocorda è di 6.5 mm.
- Il prodotto deve essere utilizzato in combinazione con un interruttore magnetotermico. Il potere di interruzione dell'interruttore magnetotermico deve corrispondere alla corrente di cortocircuito massima del punto di allacciamento. Ai fini della selettività può essere sufficiente un interruttore magnetotermico per più stazioni di ricarica. Osservi le indicazioni specifiche per paese in questo wiki. Le stazioni possono gestire senza problemi cortocircuiti individuali fino a 3 kA.

**Destinazione d'uso**

- Questo prodotto è destinato esclusivamente alla ricarica di veicoli a propulsione elettrica dotati di batterie che non generano gas. Il prodotto può essere utilizzato solo con un cavo di ricarica secondo IEC 62196. Utilizzi diversi da quelli qui indicati non sono consentiti.
- L'apparecchio è destinato all'uso in ambienti interni ed esterni.

**Funzionamento**

- Non utilizzare né toccare mai il prodotto se è danneggiato o non funziona correttamente. In caso di emergenza (fumo, incendio, scintille o altri malfunzionamenti), spegnere immediatamente il prodotto tramite l'interruttore differenziale e informare il servizio clienti.
- Non spegnere il prodotto con acqua né pulirlo con acqua corrente.
- Non immergere il prodotto in acqua o in altri liquidi.
- Questo prodotto non è destinato all'uso da parte di persone con capacità fisiche, psichiche o sensoriali ridotte (inclusi i bambini) o di persone prive di conoscenza del prodotto.
- Occorre assicurarsi che i bambini non giochino con il prodotto.
- Non toccare mai i contatti della presa di ricarica di tipo 2 e non introdurre corpi estranei nel prodotto.
- Non utilizzare mai il cavo di ricarica se è danneggiato o se i collegamenti sono bagnati o sporchi.
- Non utilizzare prolunghe o adattatori non omologati in combinazione con il prodotto.
- Non piegare mai il cavo di ricarica, non passarci sopra con veicoli e non esporlo a forte calore.
- Estrarre il cavo di ricarica dal supporto di ricarica esclusivamente afferrando la spina.
- Non posare il cavo di ricarica sui percorsi di altri utenti della strada e posizionarlo sempre in modo che non sussista pericolo di inciampo.
- Proteggere il cavo di ricarica dagli agenti atmosferici come irraggiamento solare diretto, vento, pioggia, umidità e bagnato e non collegarlo mai con le mani umide o bagnate.
- Non utilizzare il prodotto in prossimità di forti campi elettromagnetici o nelle immediate vicinanze di telefoni cellulari.

## FAQ

### Perché la Pico riserva sempre 6A nel gruppo di carico, anche se l'auto non viene più caricata?

La norma IEC 61851 prescrive che ogni auto debba avere sempre a disposizione almeno 6 A. Ciò è previsto dalla norma affinché un riscaldamento da fermo possa essere alimentato dalla rete, oppure affinché la batteria non si scarichi quando qualcuno è assente per diverse settimane.

### Pico necessita di un RCD Typ A in serie per ogni stazione di ricarica?

Le stazioni di ricarica Pico con numeri di serie precedenti a 7002701 necessitano di un RCD di tipo A in serie 40A 30mA per soddisfare gli standard nazionali. La funzione è presente in questi apparecchi, ma non è conforme.

A partire dal numero di serie 7002702 o BY2024, la Pico non necessita più di un RCD in serie, poiché questo è ora integrato e conforme a 60947-2.

### La stazione di ricarica Pico supporta ISO15118 per Plug & Charge e V2G / V2H?

Le stazioni di ricarica Pico dispongono di tutti i dispositivi tecnici per supportare a lungo termine gli standard ISO15118 e ISO15118-20. L'abilitazione della Pico al supporto delle funzioni dipende esclusivamente dal software e non richiede alcuna modifica o adattamento dell'hardware.

**Ricarica bidirezionale V2H e V2G con la Pico:** l'abilitazione della stazione di ricarica Pico alla ricarica bidirezionale secondo ISO15118-20 dipende esclusivamente dal rilascio e dalla disponibilità delle funzioni e dei dispositivi da parte del veicolo e del produttore del veicolo. L'hardware di ricarica della stazione di ricarica Pico non rappresenta alcuna limitazione in tal senso.

I primi veicoli in grado di farlo ed effettivamente acquistabili sono attesi nei prossimi anni. Lavoriamo costantemente allo sviluppo di queste funzioni nella nostra stazione di ricarica Pico, per essere pronti per quel momento.

### Posso azzerare la lettura del contatore?

No. Poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

## Manuale di installazione, download e dichiarazione di conformità

**Scheda tecnica**

[Inglese](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

**Documenti tecnici**

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf)

[Istruzioni di installazione e montaggio (inglese)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Istruzioni di installazione e montaggio (tedesco)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf)

[Dima di foratura](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Dichiarazione di conformità](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Schema di collegamento e schema elettrico file ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
