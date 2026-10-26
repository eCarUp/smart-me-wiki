---
title: 'Contatore trifase'
slug: '/produkte/3-phasen-zaehler'
description: 'Il contatore trifase smart-me è un contatore di energia potente e preciso con interfaccia WiFi integrata.'
sidebar_label: 'Contatore trifase'
displayed_sidebar: wikiSidebar
---
Il contatore trifase smart-me è un contatore di energia potente e preciso con interfaccia WiFi integrata. Per l'integrazione nella smart-me Cloud non è necessario alcun hardware aggiuntivo. Utilizza la rete WiFi esistente e può essere comandato e analizzato da qualsiasi luogo via Internet. Con un abbonamento Professional i valori del contatore possono essere letti anche tramite l'interfaccia Modbus TCP. Nella versione 5(32)A ogni fase può essere commutata singolarmente.

Questo contatore trifase non è più disponibile. La nuova generazione del nostro contatore trifase è disponibile qui: [Contatore trifase Telstar](/produkte/telstar-80a)

![Contatore trifase – Figura 1](/img/produkte-3-phasen-zaehler/01.png)

## Varianti

- Collegamento diretto 5(80)A

- Collegamento diretto 5(32)A, commutabile

## Funzioni

- Contatore di energia trifase con certificazione MID 2014/32/EU

- Misurazione diretta fino a 80 A (non commutabile), misurazione diretta fino a 32 A (commutabile)

- Valori misurati in tempo reale con la massima precisione, classe B

- Uscite a contatto supplementari per comandare apparecchi esterni

- Il contatore trifase funziona anche come gateway verso il cloud per (quasi) tutti gli apparecchi Smart Energy compatibili con IP

- Installazione semplice con l'app gratuita smart-me per Android e iOS

- Connessione WiFi crittografata direttamente alla smart-me Cloud. La smart-me Cloud offre una gestione energetica completa: visualizzazioni, comando (azioni se/allora), fatturazione automatica (smart-me Billing) e interfacce verso sistemi di terzi (Auto Export, API)

## Installazione

Prima di poter utilizzare il Suo dispositivo smart-me, deve collegarlo alla Sua rete WiFi e a Internet.

1.  Colleghi il Suo smartphone o tablet alla rete WLAN.

2.  Scarichi e installi l'app smart-me dal Play Store o dall'iOS Store.

3.  Avvii l'app e crei un account oppure acceda con l'account corrispondente.

4.  Clicchi su «Aggiungi dispositivo» („Gerät hinzufügen“) (+) e segua le istruzioni.

## Dati tecnici

| Caratteristica | Valore |
| --- | --- |
| Tensione di esercizio | 3 x 230 VAC |
| Corrente di riferimento | 5 (80) A / 5 (32) A |
| Autoconsumo | &lt; 0.8 W per fase |
| Temperatura di stoccaggio | -40°C fino a 85°C |
| Intervallo di temperatura | -25°C fino a 70°C |
| Umidità dell'aria | Media annua 75%, temporaneamente 95%, senza condensa |
| Precisione | Classe B |
| Tipo di contatore | Contatore bidirezionale (prelievo e fornitura) |
| Valori misurati | Energia attiva (kWh)<br />Potenza attiva (kW)<br />Corrente (A)<br />Tensione (V)<br />Fattore di potenza (cosphi)<br />Stato ingressi e uscite<br />In aggiunta con abbonamento Professional: energia reattiva (kvarh), potenza reattiva (kvarh) |
| Tariffe | 2 (tariffe virtuali creabili nel cloud) |
| Interfacce | WiFi<br />S0 / uscite a contatto a potenziale zero<br />Ingresso tariffario (24 - 48VDC  /  24 - 230 VAC)<br />SG Ready<br />con abbonamento Professional: Modbus TCP |
| Uscite a impulsi / uscite digitali S0, S1 | Opto Power MOSFET, 5 - 48VDC  / 5 - 230 VAC , max. 550mW |
| Standard WiFi | 802.11 b/g/n |
| Standard di sicurezza WiFi | WEP, WPA, WPA2 (personal) |
| Valore degli impulsi S0 | 10’000 o 1’000 impulsi per kWh |
| Memoria dati | 2 mesi |
| Certificazione del prodotto | CE, MID 2014/32/EU |

## Configurare ingressi e uscite

Il contatore smart-me dispone di due uscite e un ingresso, che possono essere utilizzati come ingressi e uscite a impulsi o come contatto commutabile a potenziale zero. Trova i dettagli [qui](/schnittstellen/ein-und-ausgaenge). 

## Display

Il contatore dispone di un display a scorrimento. I punti descritti di seguito vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto si ricomincia dal punto 1:

1.  Sequenza delle fasi (se errata, vedi sotto)

2.  Lettura del contatore (codice OBIS seguito dalla lettura del contatore)

1-8-1: Energia attiva tariffa 1 import (prelievo)
1-8-2: Energia attiva tariffa 2 import (prelievo)
2-8-1: Energia attiva tariffa 1 export (fornitura)
2-8-2: Energia attiva tariffa 2 export (fornitura)

3.  Versione software

4.  Valore CRC

### Sequenza delle fasi

PhL 1 -> è stata collegata solo la fase L1 (PhL2 per L2 ecc.)
PhL 12 -> sono state collegate solo le fasi L1 e L2 (PhL13 per L1 e L3 ecc.)
PhL 123 -> è stata rilevata una sequenza delle fasi errata

## Dimensioni e collegamenti

### Dimensioni \[mm\]

![Contatore trifase – Figura 2](/img/produkte-3-phasen-zaehler/02.png)

Attenzione: i dati .DXF e .DWG si trovano nell'archivio ZIP nei download.

### Schema di collegamento

E1: ingresso tariffario (ingresso digitale)

0V: tariffa 1

\>24V: tariffa 2

T1: tasto per l'installazione

T2: funzioni speciali

Breve: se T2 viene premuto brevemente, il LED verde si accende / si spegne. Quando è attivato, indica lo stato della connessione:

Verde fisso: connesso alla smart-me Cloud 

Verde lampeggiante: nessuna connessione

Lunga: se T2 viene premuto a lungo, viene attivata la visualizzazione della lettura del contatore dell'energia reattiva (se disponibile). Nella sequenza di visualizzazione vengono aggiunti i punti lettura del contatore energia reattiva T1 e lettura del contatore energia reattiva T2. Il valore visualizzato lampeggia e può quindi essere distinto dall'energia attiva.

ATTENZIONE: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nel cloud, occorre impostarlo nelle impostazioni generali. (Premendo T2 il LED rosso inizia ad accendersi; T2 deve essere tenuto premuto finché il LED rosso si spegne)

S0\_0: uscita a impulsi S0 (opzionalmente contatto a potenziale zero / attenzione Pmax = 550mW in permanenza)

S0\_1: uscita a impulsi S0 (opzionalmente contatto a potenziale zero / attenzione Pmax = 550mW in permanenza)

![Contatore trifase – Figura 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Valori misurati (codici OBIS)

I seguenti valori misurati vengono rilevati dal contatore e sono consultabili nel cloud e tramite l'API

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Apri foglio di calcolo, Valori misurati (incl. codici OBIS) contatore trifase V1 in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI/htmlembed" height="655px" title="Foglio di calcolo, Valori misurati (incl. codici OBIS) contatore trifase V1" />

Valori misurati (incl. codici OBIS) contatore trifase V1

## Download e dichiarazione di conformità

Scheda tecnica

[Inglese](https://drive.google.com/file/d/1U5DGW_fda6IvaIzHPyjkVkT5Sd2hHyL8/view?usp=sharing)

[Francese](https://drive.google.com/file/d/1FdrW3HQAq-INjThhj1IbRuXhpq4dUSWP/view?usp=sharing)

[Italiano](https://drive.google.com/file/d/1ip42f1sf4NrRq9CmYWQoKp1x9uB1ALEt/view?usp=sharing)

Quick Starter Guide

Documenti tecnici

[Dichiarazione di conformità CE](https://drive.google.com/file/d/1MBTTapoTlcpUFbXpglgAq2wpE4yfs_MO/view?usp=sharing)

[Schema di collegamento](https://drive.google.com/file/d/12wyjFnyECXzPXvnYKV_VhfHKuZwAhjdn/view?usp=sharing)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>A quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, cioè alle xx:00:00 xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati successivamente.

- Inoltre è possibile effettuare una configurazione individuale:

    - Con licenze Basic o Limited: max. 1x al minuto.

    - Con licenza Pro: max. 1x al secondo

</details>
