---
title: 'Contatore di energia trifase Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale e con collegamento per trasformatori esterni.'
sidebar_label: 'Contatore trifase Telstar CT'
---
Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale e con collegamento per trasformatori esterni. Il contatore sincronizza i valori misurati in modo automatico e crittografato nella smart-me Cloud. I dati possono essere esportati ed elaborati nel portale smart-me oppure, tramite la nostra interfaccia aperta, in sistemi di terzi. Il contatore dispone di due uscite digitali per il comando di apparecchi a potenziale zero.

![Contatore di energia trifase Telstar CT – Figura 1](/img/produkte-telstar-ct/01.png)

[Trasformatori e accessori](/drittprodukte/Stromwandler)

## Funzioni

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Collegamento per [trasformatori esterni](/) con correnti di uscita da 0.01A a 6A

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Comando con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Uscite a contatto a potenziale zero](/schnittstellen/ein_und_ausgaenge) per il comando di apparecchi esterni, una delle quali con relè da 8A

- Ingresso a contatto a potenziale zero per il segnale tariffario o come [ingresso digitale](/schnittstellen/ein_und_ausgaenge)

- [Interfacce](/) tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud

## Dati tecnici

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJmdsIN6iLOfY_AML4DXbCamh1SwcZohszYBjYiVtusFdlA1zrAnZZu4ZFDsQP5pfZxvfloSHGBjkf/pubhtml?gid=0&range=A1:B28&single=true&widget=false&headers=false&chrome=false" height="680px" title="Contatore trifase Telstar CT" />

## Requisiti tecnici per i trasformatori

Con il Telstar CT è possibile impiegare i più svariati trasformatori di corrente. I requisiti di base sono i seguenti:

- Rapporto di trasformazione: da 1:1 a 20'000:1 e da 5:5 a 20'000:5
    Il numero secondario può essere un qualsiasi numero intero compreso tra 1 e 5.
    Il numero primario un qualsiasi numero intero compreso tra 1 e 20'000.

- Corrente di uscita: da 1A a 5A

- Potenza di uscita: almeno 1VA o superiore (consigliato 5VA)

- Tipo: aperto o chiuso

- Classe di precisione: 1 o migliore\*

\*Se i contatori devono essere utilizzati per la fatturazione, sono necessari trasformatori tarati che soddisfino almeno la classe 0.5 o inferiore.

Trova i consigli su trasformatori e accessori alla pagina: [Trasformatori di corrente e accessori](/drittprodukte/Stromwandler) 

## Display

Valore / Simbolo Descrizione

1.8.1 Codice OBIS\ per la lettura del contatore visualizzata

T1 Tariffa attiva (tariffa 1 o tariffa 2)

Freccia Direzione della corrente (a destra prelievo / a sinistra immissione)

Ricezione (barre) Intensità del segnale WiFi

0000053.2 Lettura del contatore

5520W Potenza misurata istantanea con unità

kWh Unità della lettura del contatore visualizzata

M Funzione non più utilizzata (può essere ignorata)

![Contatore di energia trifase Telstar CT – Figura 2](/img/produkte-telstar-ct/02.png)

Il contatore ha un display a scorrimento. I punti descritti di seguito vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto viene visualizzato di nuovo il primo.

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

Fattore di trasformazione (codice OBIS seguito da informazioni)

0.4.2       Fattore di trasformazione (incl. impulsi S0 / kWh)

Firmware (codice OBIS seguito da informazioni)

C.1.6 Ch: 2218 Checksum del firmware
0.2.0 V 1.1 Versione del firmware

Indicazione degli errori (codice OBIS seguito da messaggi di errore)

C.60.9 Fraud Flag (rilevato possibile tentativo di frode)
PhL: 1 collegata solo la fase L1
PhL: 2 collegata solo la fase L2
PhL: 3 collegata solo la fase L3
PhL: 23 fase L1 non collegata
PhL: 13 fase L2 non collegata
PhL: 12 fase L3 non collegata
Sequenza delle fasi corretta: i numeri sono accesi fissi
Sequenza delle fasi errata: i numeri lampeggiano

## Dimensioni e collegamenti

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP nei download.

### Dimensioni \[mm\]

![Contatore di energia trifase Telstar CT – Figura 3](/img/produkte-telstar-ct/03.png)

![Contatore di energia trifase Telstar CT – Figura 4](/img/produkte-telstar-ct/04.png)

### Schema di collegamento

![Contatore di energia trifase Telstar CT – Figura 5](/img/produkte-telstar-ct/05.jpg)

## Impostare il rapporto di trasformazione sul Telstar CT

1.  In alto a destra sul simbolo dell'ingranaggio (Impostazioni (Einstellungen)) 

2.  Modifica (Editieren) 

3.  Impostazioni generali (Allgemeine Einstellungen) 

4.  Inserire il rapporto di trasformazione 

5.  Il rapporto di trasformazione può essere bloccato. Ciò serve come protezione contro modifiche indesiderate da parte di persone non autorizzate. Per sbloccare il rapporto di trasformazione, l'apparecchio deve essere installato nuovamente con l'app smart-me. In caso di reinstallazione non è necessario eliminarlo.

Nota: l'inserimento del rapporto di trasformazione non modifica i dati storici memorizzati. Per questo motivo questo passaggio va eseguito subito dopo la messa in servizio.

![Contatore di energia trifase Telstar CT – Figura 6](/img/produkte-telstar-ct/06.png)

## Funzioni dei tasti

![Contatore di energia trifase Telstar CT – Figura 7](/img/produkte-telstar-ct/07.png)

T1 Tasto per l'installazione

Se il tasto T1 viene premuto per 10 secondi, viene generata una rete WiFi locale per l'installazione

T1 + T2 Riavvio

Premere contemporaneamente i tasti T1 e T2 per 10 secondi per forzare un riavvio.

T2 Funzioni speciali

Breve: se T2 viene premuto >2s, il LED verde commuta (da acceso a spento o da spento ad acceso). Quando è attivato, indica lo stato della connessione 

🟢 Verde fisso: connesso alla smart-me Cloud

 ☀︎ Verde lampeggiante: connessione in corso o nessuna connessione

Lunga: se T2 viene premuto >8s, la visualizzazione della potenza commuta tra potenza attiva e reattiva. Inoltre il LED degli impulsi di taratura commuta tra energia attiva ed energia reattiva.

Molto lunga: se T2 viene premuto >14s, l'uscita a impulsi S0-0 commuta tra potenza attiva e potenza reattiva.

Nota: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nella Cloud, occorre impostarlo nelle impostazioni generali. 

## LED

![Contatore di energia trifase Telstar CT – Figura 8](/img/produkte-telstar-ct/08.png)

🟢 LED verde - Stato della connessione

- Indica lo stato della connessione con la smart-me Cloud. a) Lampeggiante = errore di connessione b) Sempre acceso = connessione OK

![Contatore di energia trifase Telstar CT – Figura 9](/img/produkte-telstar-ct/09.png)

🔴 LED rosso - LED a impulsi

- Indica la potenza attiva o reattiva attualmente prelevata in 1000 impulsi/kWh risp. 1000 impulsi/kVArh. Con il tasto T2 è possibile impostare se viene visualizzata la potenza attiva o reattiva.

- Ad esempio: un LED con l'indicazione «1000 impulsi/kWh» lampeggia 1000 volte quando è stato prelevato o immesso 1 kilowattora (kWh) di energia. Se i 1000 impulsi sono stati contati nell'arco di 1 ora, è stata misurata una potenza costante di 1 kW.

## Configurare ingressi e uscite

Il Telstar CT dispone di due uscite digitali e di un ingresso digitale, che possono essere utilizzati come ingressi e uscite a impulsi o come contatto commutabile a potenziale zero. Trova i dettagli alla pagina wiki [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) 

Il Telstar CT dispone, su una delle uscite digitali, di un relè in grado di commutare fino a 8A.

## Tecnologia mesh

In caso di ricezione WiFi molto debole o assente, il Telstar CT si collega automaticamente tramite la funzione mesh a un altro contatore vicino a portata. Quest'ultimo assume quindi la comunicazione con la smart-me Cloud. La tecnologia mesh garantisce ai contatori una maggiore disponibilità verso la smart-me Cloud. Non è possibile disattivare la funzione mesh sul contatore. Con [Modbus TCP](/schnittstellen/modbus-tcp) attivato valgono limitazioni specifiche.

## Trasformatori e accessori

Trova i consigli su trasformatori e accessori alla pagina: [Trasformatori di corrente e accessori](/drittprodukte/Stromwandler) 

Nessuno di questi prodotti è distribuito dalla smart-me AG né offerto come accessorio al momento dell'acquisto. Acquisti questi prodotti direttamente presso il produttore. 

### Informazioni di spedizione

Numero articolo: 212062 

Nome articolo: 3-Phasen Energiezähler Telstar CT MID Wifi

Numero di tariffa doganale: 9028.3019

Peso con imballaggio: 315g

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Scheda tecnica inglese](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[Dichiarazione di conformità CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schema di collegamento file ZIP](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (i dati \*.DXF e \*.DWG si trovano nell'archivio ZIP)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>A quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, cioè alle xx:00:00, xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati successivamente.

- Inoltre almeno ogni 330 secondi.

- Inoltre, quando si verifica uno dei seguenti eventi:

    - Variazione della lettura del contatore superiore a 100Wh

    - Variazione della potenza superiore a 100W

    - Variazione della corrente superiore a 1A

    - Variazione della tensione superiore a 1V

    - Ogni secondo, se il contatore è selezionato nella GUI (portale smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzen">
<summary>Posso azzerare la lettura del contatore?</summary>

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

</details>
