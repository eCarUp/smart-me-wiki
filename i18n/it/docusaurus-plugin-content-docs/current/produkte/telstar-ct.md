---
title: 'Contatore di energia trifase Telstar CT'
slug: '/produkte/telstar-ct'
description: 'Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale e con collegamento per trasformatori esterni.'
sidebar_label: 'Contatore trifase Telstar CT'
---
Lo smart-me Telstar CT è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale e con collegamento per trasformatori esterni. Il contatore sincronizza i valori misurati in modo automatico e criptato nella smart-me Cloud. I dati possono essere esportati ed elaborati nel portale smart-me o tramite la nostra interfaccia aperta in sistemi di terzi. Il contatore dispone di due uscite digitali per il comando di apparecchi a potenziale zero.

![Contatore di energia trifase Telstar CT – Figura 1](/img/produkte-telstar-ct/01.png)

[Trasformatori e accessori](/drittprodukte/stromwandler)

## Funzioni

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Collegamento per [trasformatori esterni](/) con correnti di uscita da 0.01A a 6A

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Comando con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Uscite a contatto a potenziale zero](/schnittstellen/ein-und-ausgaenge) per il comando di apparecchi esterni, una delle quali con relè da 8A

- Ingresso a contatto a potenziale zero per segnale tariffario o [ingresso digitale](/schnittstellen/ein-und-ausgaenge)

- [Interfacce](/) tramite API, CSV, MSCONS e IS-E

- Connessione dati criptata in tempo reale con la smart-me Cloud

## Dati tecnici

| Caratteristica | Valore |
| --- | --- |
| Certificazione del prodotto | CE, MID 2014 / 32 / EU, CH-curva di carico / energia reattiva, RED |
| Classe di precisione per energia attiva/energia reattiva | B (MID) / 2 (IEC) |
| Direzione | +A (prelievo), -A (immissione), +R, -R |
| Quadranti | Q1, Q2, Q3, Q4 |
| Tensione di rete | 3x230/400VAC 50Hz |
| Campo di misura della corrente Imin-Iref(Imax) | 0.01-1(6)A |
| Sezione del conduttore | 0.5 - 6 mm² |
| Rapporto di trasformazione | da 1:1 a 20'000:1 o da 5:5 a 20'000:5 |
| Categoria di misura | CAT III |
| Intervallo di temperatura | da -25°C a +70°C |
| Umidità relativa dell'aria | Media annua 75%, senza condensa<br />brevemente 95%, senza condensa |
| Valori misurati | Energia attiva (kWh), potenza attiva (kW)<br />Energia reattiva (kvarh), potenza reattiva (kvar)<br />Corrente (A), tensione (V), fattore di potenza (cosφ) |
| Autoconsumo | < 0.8W per fase |
| Tariffe | 2 tramite ingresso tariffario digitale E1, tariffe virtuali illimitate nella smart-me Cloud |
| Uscita S0 | 1'000 Imp/kWh |
| Ingresso digitale E1 | Ingresso tariffario a potenziale zero (12VDC / 230 VAC) |
| Uscite digitali S0-0, S-1 | Uscite a potenziale zero (SG Ready), 12 VDC / 230 VAC<br />S0-0: max. 0.4W<br />S-1: max. 8A@230VAC o 5A@12VDC |
| Comunicazione | WLAN IEEE 802.11 b/g/n (2.4 GHz) |
| Volume di dati | < 75MB/mese |
| Standard di sicurezza Wi-Fi | WEP, WPA-PSK/WPA2-PSK |
| Velocità di trasmissione dati | < 0.1 Mbit/s |
| Memoria dati | 2 mesi |
| Classe di protezione | II |
| Grado di protezione involucro/collegamenti, utilizzo | IP20 / IP51 (installato in quadro elettrico), interni |
| Montaggio | Guida DIN |
| Dimensioni | 5 moduli, L:90mm P:90mm H:65.7mm |
| Ubicazione dei server | Svizzera |

## Requisiti tecnici per i trasformatori

Con il Telstar CT si possono utilizzare i più diversi trasformatori di corrente. I requisiti di base sono i seguenti:

- Rapporto di trasformazione: da 1:1 a 20'000:1 fino a da 5:5 a 20'000:5
    Il numero secondario può essere un numero intero qualsiasi compreso tra 1 e 5.
    Il numero primario un numero intero qualsiasi compreso tra 1 e 20'000.

- Corrente di uscita: da 1A a 5A

- Potenza di uscita: almeno 1VA o superiore (raccomandazione 5VA)

- Tipo: aperto o chiuso

- Classe di precisione: 1 o migliore\*

\*Se i contatori devono essere utilizzati per la fatturazione, sono necessari trasformatori tarati che soddisfino almeno la classe 0.5 o inferiore.

Trovi le raccomandazioni per trasformatori e accessori alla pagina: [Trasformatori di corrente e accessori](/drittprodukte/stromwandler) 

## Display

<div className="row">
<div className="col col--6">

Valore / simbolo Descrizione

1.8.1 Codice OBIS\-per la lettura del contatore visualizzata

T1 Tariffa attiva (tariffa 1 o tariffa 2)

Freccia Direzione della corrente (a destra prelievo / a sinistra immissione)

Ricezione (barre) Intensità del segnale WiFi

0000053.2 Lettura del contatore

5520W Potenza misurata istantanea con unità

kWh Unità della lettura del contatore visualizzata

M Funzione non più utilizzata (può essere ignorata)

</div>
<div className="col col--6 text--center">

![Contatore di energia trifase Telstar CT – Figura 2](/img/produkte-telstar-ct/02.png)

</div>
</div>

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

Visualizzazione errori (codice OBIS seguito da messaggi di errore)

C.60.9 Fraud Flag (rilevato possibile tentativo di frode)
PhL: 1 collegata solo la fase L1
PhL: 2 collegata solo la fase L2
PhL: 3 collegata solo la fase L3
PhL: 23 fase L1 non collegata
PhL: 13 fase L2 non collegata
PhL: 12 fase L3 non collegata
Sequenza delle fasi corretta: i numeri sono accesi in modo fisso
Sequenza delle fasi errata: i numeri lampeggiano

## Dimensioni e collegamenti

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP nei download.

### Dimensioni \[mm\]

![Contatore di energia trifase Telstar CT – Figura 3](/img/produkte-telstar-ct/03.png)

![Contatore di energia trifase Telstar CT – Figura 4](/img/produkte-telstar-ct/04.png)

### Schema di collegamento

![Contatore di energia trifase Telstar CT – Figura 5](/img/produkte-telstar-ct/05.jpg)

## Impostare il rapporto di trasformazione sul Telstar CT

<div className="row">
<div className="col col--7">

1.  In alto a destra sull'icona dell'ingranaggio (Impostazioni – Einstellungen) 

2.  Modifica (Editieren) 

3.  Impostazioni generali (Allgemeine Einstellungen) 

4.  Inserire il rapporto di trasformazione (Wandlerverhältnis) 

5.  Il rapporto di trasformazione può essere bloccato. Questo serve come protezione da modifiche indesiderate da parte di persone non autorizzate. Per sbloccare il rapporto di trasformazione, il dispositivo deve essere installato di nuovo con l'app smart-me. In caso di reinstallazione non è necessario eliminarlo.

Nota: inserendo il rapporto di trasformazione, i dati storici memorizzati non vengono modificati. Per questo motivo questo passaggio va eseguito subito dopo la messa in servizio.

</div>
<div className="col col--5 text--center">

![Contatore di energia trifase Telstar CT – Figura 6](/img/produkte-telstar-ct/06.png)

</div>
</div>

## Funzioni dei tasti

![Contatore di energia trifase Telstar CT – Figura 7](/img/produkte-telstar-ct/07.png)

T1 Tasto per l'installazione

Se il tasto T1 viene premuto per 10 secondi, viene generata una rete WiFi locale per l'installazione

T1 + T2 Riavvio

Premere contemporaneamente i tasti T1 e T2 per 10 secondi per forzare un riavvio.

T2 Funzioni speciali

Breve: se T2 viene premuto >2s, il LED verde cambia stato (da acceso a spento o da spento ad acceso). Se è attivato, indica lo stato della connessione 

🟢 Verde acceso: connesso alla smart-me Cloud

 ☀︎ Verde lampeggiante: connessione in corso o nessuna connessione

Lungo: se T2 viene premuto >8s, la visualizzazione della potenza passa da potenza attiva a potenza reattiva e viceversa. Inoltre il LED degli impulsi di taratura passa da energia attiva a energia reattiva e viceversa.

Molto lungo: se T2 viene premuto >14s, l'uscita a impulsi S0-0 passa da potenza attiva a potenza reattiva e viceversa.

Nota: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nel cloud, occorre impostarlo nelle impostazioni generali (Allgemeine Einstellungen). 

## LED

<div className="row">
<div className="col col--7 text--center">

![Contatore di energia trifase Telstar CT – Figura 8](/img/produkte-telstar-ct/08.png)

</div>
<div className="col col--5">

🟢 LED verde - stato della connessione

- Indica lo stato della connessione alla smart-me Cloud. a) Lampeggiante = errore di connessione b) Sempre acceso = connessione OK

</div>
</div>

<div className="row">
<div className="col col--5 text--center">

![Contatore di energia trifase Telstar CT – Figura 9](/img/produkte-telstar-ct/09.png)

</div>
<div className="col col--7">

🔴 LED rosso - LED a impulsi

- Indica la potenza attiva o reattiva attualmente prelevata in 1000 impulsi/kWh risp. 1000 impulsi/kVArh. Con il tasto T2 si può impostare se visualizzare la potenza attiva o quella reattiva.

- Per esempio: un LED con la dicitura „1000 impulsi/kWh“ lampeggia 1000 volte quando è stato prelevato o immesso 1 chilowattora (kWh) di energia. Se i 1000 impulsi sono stati contati entro 1 ora, è stata misurata una potenza costante di 1 kW.

</div>
</div>

## Configurare ingressi e uscite

Il Telstar CT dispone di due uscite digitali e di un ingresso digitale, che possono essere utilizzati come ingressi e uscite a impulsi o come contatto commutabile a potenziale zero. Trovi i dettagli alla pagina del wiki [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) 

Su una delle uscite digitali il Telstar CT dispone di un relè in grado di commutare fino a 8A.

## Tecnologia mesh

In caso di ricezione WiFi molto debole o assente, il Telstar CT si collega automaticamente tramite la funzione mesh a un altro contatore vicino nel raggio di portata. Quest'ultimo si occupa poi della comunicazione con la smart-me Cloud. La tecnologia mesh garantisce che i contatori abbiano una maggiore disponibilità verso la smart-me Cloud. Non è possibile disattivare la funzione mesh sul contatore. Con [Modbus TCP](/schnittstellen/modbus-tcp) attivato valgono limitazioni specifiche.

## Trasformatori e accessori

Trovi le raccomandazioni per trasformatori e accessori alla pagina: [Trasformatori di corrente e accessori](/drittprodukte/stromwandler) 

Nessuno di questi prodotti è distribuito dalla smart-me AG o offerto come accessorio al momento dell'acquisto. Acquista questi prodotti direttamente presso il produttore. 

### Informazioni di spedizione

Numero di articolo: 212062 

Nome dell'articolo: 3-Phasen Energiezähler Telstar CT MID Wifi

Numero di tariffa doganale: 9028.3019

Peso con imballaggio: 315g

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Scheda tecnica inglese](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[Dichiarazione di conformità CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[File ZIP schema di collegamento](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (i dati \*.DXF e \*.DWG si trovano nell'archivio ZIP)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>A quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, cioè alle xx:00:00 xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati in seguito.

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
