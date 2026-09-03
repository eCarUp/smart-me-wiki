---
title: 'Contatore trifase'
slug: '/produkte/3-phasen-zähler'
description: 'Lo smart-me 3-Phasen Meter è un contatore di energia potente e preciso con interfaccia WiFi integrata.'
sidebar_label: 'Contatore trifase'
---
Lo smart-me 3-Phasen Meter è un contatore di energia potente e preciso con interfaccia WiFi integrata. Per l'integrazione nella smart-me Cloud non è necessario alcun hardware aggiuntivo. Utilizza la rete WiFi esistente e può essere comandato e analizzato da qualsiasi luogo via Internet. Con un abbonamento Professional i valori del contatore possono essere interrogati anche tramite l'interfaccia Modbus TCP. Nella versione 5(32)A ogni fase può essere commutata singolarmente.

Questo contatore trifase non è più disponibile. La nuova generazione del nostro contatore trifase è disponibile qui: [Contatore trifase Telstar](/produkte/telstar)

![Contatore trifase – Figura 1](/img/produkte-3-phasen-zaehler/01.png)

## Varianti

- Collegamento diretto 5(80)A

- Collegamento diretto 5(32)A, commutabile


## Funzioni

- Contatore di energia trifase con certificazione MID 2014/32/EU

- Misurazione diretta fino a 80 A (non commutabile), misurazione diretta fino a 32 A (commutabile)

- Valori di misura in tempo reale con la massima precisione, classe B

- Uscite a contatto aggiuntive per comandare apparecchi esterni

- Il contatore trifase funziona anche come gateway verso la cloud per (quasi) tutti i dispositivi Smart Energy con capacità IP

- Installazione semplice con l'app smart-me gratuita per Android e iOS

- Connessione WiFi criptata direttamente alla smart-me Cloud. La smart-me Cloud offre una gestione dell'energia completa: visualizzazioni, comando (azioni se/allora), fatturazione automatica (smart-me Billing) e interfacce verso sistemi di terzi (Auto Export, API)


## Installazione

Prima di poter utilizzare il tuo dispositivo smart-me, devi collegarlo alla tua rete WiFi e a Internet.

1.  Collega il tuo smartphone o tablet alla rete WLAN.

2.  Scarica e installa l'app smart-me dal Playstore o dall'iOS Store.

3.  Avvia l'app e crea un account oppure accedi con l'account corrispondente.

4.  Clicca su «Aggiungi dispositivo» («Gerät hinzufügen») (+) e segui le istruzioni.


## Dati tecnici

Tensione di esercizio 3 x 230 VAC

Corrente di riferimento 5 (80) A / 5 (32) A

Autoconsumo &lt; 0.8 W per fase

Temperatura di stoccaggio da -40°C a 85°C

Intervallo di temperatura da -25°C a 70°C

Umidità dell'aria media annuale 75%, per brevi periodi 95%, senza condensa

Precisione classe B

Tipo di contatore contatore bidirezionale (prelievo e immissione)

Valori di misura 

- -   Energia attiva (kWh)

    - Potenza attiva (kW)

    - Corrente (A)

    - Tensione (V)

    - Fattore di potenza (cosphi)

    - Stato di ingressi e uscite 

    - In aggiunta con abbonamento Professional: energia reattiva (kvarh), potenza reattiva (kvarh)


Tariffe 2 (tariffe virtuali creabili lato cloud)

Interfacce 

- -   WiFi

    - S0 / uscite a contatto a potenziale zero

    - Ingresso tariffa (24 - 48VDC  /  24 - 230 VAC)

    - SG Ready

    - con abbonamento Professional: Modbus TCP


Uscite a impulsi / uscite digitali S0, S1 Opto Power MOSFET, 5 - 48VDC  / 5 - 230 VAC , max. 550mW

Standard WiFi 802.11 b/g/n

Standard di sicurezza WiFi WEP, WPA, WPA2 (personal)

Valore impulsi S0 10'000 oppure 1'000 impulsi per kWh

Memoria dati 2 mesi

Certificazione del prodotto CE, MID 2014/32/EU

Classi ambientali: meccanica M1, elettromagnetica E2

Classe di protezione IP20 (morsetti), IP51 (fronte)

Dimensioni 5 moduli, 90 x 90 mm

Montaggio su guida DIN

## Configurare ingressi e uscite

Lo smart-me Meter dispone di due uscite e di un ingresso, che possono essere utilizzati come ingressi e uscite a impulsi oppure come contatto commutabile a potenziale zero. I dettagli li trovi [qui](/schnittstellen/ein_und_ausgaenge). 

## Display

Il contatore ha un display a scorrimento. I punti descritti sotto vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto si riparte dal punto 1:

1.  Sequenza delle fasi (in caso di errore, vedi sotto)

2.  Lettura del contatore (codice Obis seguito dalla lettura del contatore)


1-8-1: Energia attiva tariffa 1 Import (prelievo)
1-8-2: Energia attiva tariffa 2 Import (prelievo)
2-8-1: Energia attiva tariffa 1 Export (immissione)
2-8-2: Energia attiva tariffa 2 Export (immissione)

3.  Versione del software

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

E1: ingresso tariffa (ingresso digitale)

0V: tariffa 1

\>24V: tariffa 2

T1: tasto per l'installazione

T2: funzioni speciali

Breve: premendo brevemente T2 si accende / spegne la lampada LED verde. Se è attivata, indica lo stato della connessione:

Verde fisso: connesso alla smart-me Cloud 

Verde lampeggiante: nessuna connessione

Lungo: premendo T2 a lungo si attiva la visualizzazione della lettura del contatore dell'energia reattiva (se disponibile). Nella sequenza di visualizzazione vengono aggiunti i punti lettura del contatore energia reattiva T1 e lettura del contatore energia reattiva T2. Il valore visualizzato lampeggia e può quindi essere distinto dall'energia attiva.

ATTENZIONE: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nella cloud, ciò deve essere fatto nelle impostazioni generali. (Premendo T2 il LED rosso inizia a illuminarsi, T2 deve essere tenuto premuto fino a quando il LED rosso si spegne)

S0\_0: uscita a impulsi S0 (opzionalmente contatto a potenziale zero / attenzione Pmax = 550mW in modo permanente)

S0\_1: uscita a impulsi S0 (opzionalmente contatto a potenziale zero / attenzione Pmax = 550mW in modo permanente)

![Contatore trifase – Figura 3](/img/produkte-3-phasen-zaehler/03.jpg)

## Valori di misura (codici Obis)

I seguenti valori di misura vengono rilevati dal contatore e sono disponibili nella cloud e tramite l'API

[](https://drive.google.com/open?id=1-f4I5ZWg1-PAHNpzCsQ0aBqrL9k93lH8q9AuN8toJgI "Open Spreadsheet, Messwerte (inkl. Obiscodes) 3-Phasen Zähler V1 in new window")

<Video src="" title="Video" />

Valori di misura (inclusi codici Obis) contatore trifase V1

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

### Con quale intervallo i contatori inviano i dati?

- Ogni 15 minuti, quindi alle xx:00:00 xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione questi dati vengono memorizzati localmente e inviati successivamente.

- In aggiunta è possibile effettuare una configurazione individuale:

    - Con licenze Basic o Limited: max. 1x al minuto.

    - Con licenza Pro: max. 1x al secondo
