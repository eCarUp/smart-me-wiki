---
title: 'Note di rilascio del firmware'
slug: '/news/firmware-release-notes'
description: 'Pico v0.0.57-r57 Data: 11.9.2026'
sidebar_label: 'Note di rilascio del firmware'
---
## Note di rilascio del firmware

### Pico

Pico v0.0.57-r57
Data: 11.9.2026

Bug:

- Corretto: la transazione resta aperta quando la stazione Pico torna inattiva dopo una pausa

- Corretto lo scatto errato per sovraccarico della protezione da sovracorrente al 130%


Pico v0.0.55-r55
Data: 01.05.2026

Bug

- EM-406: Migliorati UART e watchdog

- Correzione rapida della modalità AP WiFi


Pico v0.0.54-r54
Data: 13.04.2026

Bug:

- Sono stati apportati diversi miglioramenti per garantire una migliore connettività WLAN, mesh e mobile.


Pico v0.0.53\-r53
Data: 12.03.2026

Funzionalità

- Viene mostrata la schermata "waiting for current" quando la gestione del carico non può assegnare corrente a una stazione

- Viene mostrato un avviso sul display e nel cloud quando CP è 0V

- Viene mostrato un errore sul display quando la comunicazione con il Meter-SOM non è riuscita

- Corrente minima predefinita modificata a 8A e car id disattivato per impostazione predefinita

- EM-348: Implementazione della procedura di installazione delle tessere RFID

- EM-319: L'avviso di surriscaldamento non viene mostrato sul display. Viene mostrato solo nel cloud

- Ricarica monofase


Bug:

- EM-380: i nodi mesh Pico non entrano nel gruppo di gestione del carico

- EM-396: Comportamento offline errato della gestione del carico

- EM-379: Il bilanciamento della corrente non funziona in un gruppo con stazione monofase

- Errore di comunicazione SPI del Meter-SOM (dovrebbe correggere la comunicazione con il Meter-SOM dopo un riavvio)

- Corretto un bug nella risoluzione DNS (WiFi)

- Corretto il tempo di attesa PLC (car id)

- Corretta la temporizzazione della macchina a stati di ricarica

- La corrente viene impostata a 0A prima di sbloccare il cavo o di riavviare

- Si attende che il modulo WiFi sia avviato e operativo prima di eseguire qualsiasi operazione (ad es. attivare il relè). Questo dovrebbe evitare problemi durante l'aggiornamento dell'ESP32.

- La modalità Access Point (installazione) a volte non si avvia

- Riavvio del modulo WiFi dopo 5min di inattività del controller

- Corretto il troncamento di 1 byte dei pacchetti UDP negli aggiornamenti Arm paralleli inoltrati tramite mesh

- All'avvio viene verificato se i file firmware necessari sono presenti

- miglioramenti dell'aggiornamento del firmware

- EM-368: Lexus interrompe la ricarica dopo 30min

- EM-367: Attivazione con RFID - il veicolo passa prima in stato di errore

- EM-366: La stazione interrompe la ricarica quando il modulo WiFi si riavvia a causa del timeout offline

- Corretto il panic da overflow di interi nel calcolo del tempo in display\_module.rs

- EM-362: Impossibile connettersi all'AP di installazione

- WiFi: disaccoppiamento del contesto di esecuzione del timer


Pico v0.0.47\-r47 e 0.0.46\-r46
Data: 01.12.2025

- Possibilità di commutare tra 1 e 3 fasi tramite Modbus o API. (MLM non è ancora supportato)

- miglioramenti interni


Pico v 0.0.37\-r37 e 0.0.36-r36
Data: 14.08.2025

Correzioni di bug

Pico v0.0.34-r34
Data: 16.01.2025

Correzioni di bug

- EM-336: Corretto un problema di installazione WLAN


Pico v0.0.33-r33
Data: 06.01.2025

Funzionalità

- EM-281: Gestione del carico: la corrente riservata (6A) per le stazioni in pausa viene liberata

- EM-172: Gestione del carico: la corrente alla quale si passa dalla ricarica trifase a quella monofase è ora regolabile nel cloud

- EM-172: Gestione del carico: corrente max. (per stazione) per la ricarica monofase

- EM-329: Gestione del carico: è ora possibile passare dalla ricarica monofase a quella trifase. L'impostazione per attivarla / disattivarla si trova nel cloud

- Installazione: la WLAN in modalità di installazione ha ora una password ("smart-me"), per i Pico >= 7005567 e (7003152 - 7005229)


Bug

- Maggiore stabilità della connessione mobile


Pico v0.0.30\-r30
Data: 03.10.2024

- EM-320 Corretta la possibile perdita di transazioni di ricarica nella comunicazione (soprattutto mobile)


Pico v0.0.29-r29
Data: 1.7.2024

Funzionalità

- EM-245: Gestione del carico: ritorno da monofase a trifase, anche se nel gruppo ci sono veicoli in ricarica.


Bug

- EM-311: Adattati i limiti di temperatura

- EM-307: Migliorato il comportamento offline


Pico v0.0.28-r28
Data: 15.04.2024

Funzionalità:

- Nuovo flusso di immagini e animazione per l'autorizzazione (RFID, CardId) (EM-264)

- Timeout PLC rimosso (modificato da 25s a 3s)


Bug

- Migliorato il rilevamento offline

- Miglioramenti WiFi


Versione 0.0.25-r25
Data: 10.01.2024

Funzionalità:

- Supporto SIM7070


Bug

- Connessione mobile migliorata

- Viene mostrata la schermata "Failed" quando l'autorizzazione con la tessera RFID non è riuscita

- Gestione del carico: l'indice di squilibrio della corrente calcolato restituisce un valore errato

- Gestione del carico: in determinate condizioni il gestore del carico non aumenta la corrente della stazione


Tecnico:

- aggiornamento dell'algoritmo AES software


Pico v0.0.23-r23
Data: 07.12.2023

Funzionalità:

- Corrente dinamica in caso di perdita della connessione per il gruppo di gestione del carico


Bug

- Correzioni dell'EVSE Tool (tentativo di riavvio dopo un crash)


Pico v0.0.22-r22
Data: 04.09.2023

Bug

- Corretto un problema del blocco con temperature molto basse (sotto i -20 gradi C)


Pico v0.0.21-r21
Data: 27.08.2023

Funzionalità

- Interruzione della ricarica quando si disattiva la modalità di calibrazione (per la validazione delle transazioni in produzione)

- Ampliata la tabella di routing del modulo WiFi (supporto fino a 200 stazioni per gruppo di gestione del carico invece di 20)


Pico v0.0.20-r20
Data: 03.07.2023

-  Visualizzazione di data/ora (ora di inizio della ricarica e durata) nella schermata di ricarica

-  Visualizzazione della corrente utilizzata e consentita nella schermata della potenza

-  Test RCD ogni 24h nello stato A

-  Utilizzo di un baudrate inferiore se l'aggiornamento WiFi non riesce


Pico v0.0.19-r19
Data: 08.05.2023

-  Corretto un bug nella macchina a stati di ricarica (attesa nello stato B1 finché è presente un segnale PWM prima di attivare il relè)


Pico v0.0.18-r18
Data: 03.04.2023

-  Buffer delle immagini (meno letture dalla memoria flash)

-  RSSI (qualità del segnale) per WiFi e mobile

-  Scrittura su disco (flash) dopo il salvataggio del file delle impostazioni o delle immagini / degli aggiornamenti del firmware


Pico v0.0.17-r17
Data: 17.02.2023

- Modifiche alla temporizzazione dell'avvio dell'alimentazione quando il veicolo è pronto
    (supporto esteso dei tipi di veicolo)

- Ottimizzazioni interne


Versione 0.0.16-r16
Data: 16.12.2022

- Ottimizzazioni interne


Versione 0.0.15-r15
Data: 12.12.2022

- Migliorato il distacco del carico del Pico per le singole stazioni

- Ottimizzazioni interne


Versione 0.0.14-r14
Data: 06.12.2022

- Visualizzazione del consumo di energia al termine della ricarica


Versione 0.0.13-r13
Data: 09.11.2022

- Ottimizzazioni interne


Versione 0.0.12-r12
Data: 06.12.2022

- Ottimizzazioni interne


Versione 0.0.11-r11
Data: 11.10.2022

- Miglioramento di avvisi ed errori nel cloud

- Correzione di bug: corrente dinamica della gestione del carico


Versione 0.0.10-r10
Data: 23.09.2022

- Correzione di bug: rilevamento CarID


### Telstar 80A / Telstar CT

Versione 9 (V18 e V19)

Data: 19.09.2023 (test beta fino a 08.2024)

Correzioni di bug:

 - Corretto Modbus TCP (problema del limite di 255 connessioni)  

Versione 8 (V16 e V17)

Data: 12.04.2023

Correzioni di bug:

 - Corretto l'arresto di "start wifi" dopo la disconnessione dall'AP in casi particolari

Versione 7 (V14 e V15)

Data: 16.01.2023

Correzioni di bug:

 - Timeout Modbus TCP (i client inattivi vengono disconnessi dopo 5min)

 - Modbus TCP: numero massimo di client limitato a 4

 - Connessione mesh disattivata quando Modbus TCP è attivo

 - Connessione alla rete mesh quando la connessione al normale AP WiFi fallisce 16 volte

Tecnico:

 - Aggiornamenti interni per ESP

Versione 6 (V12 e V13)

Data: 19.02.2022

Correzioni di bug:

 - Heap overflow Modbus TCP (all'avvio di Modbus)

 - Deadlock nella risoluzione DNS con WiFi senza connessione Internet

Versione 5 (V10 e V11)

Data: 21.02.2022

Correzioni di bug:

 - L'azione basata su eventi della potenza era errata di un fattore 10

Versione 4 (V8 e V9)

Data: 11.02.2021

Correzioni di bug:

 - Corretto un bug di Modbus TCP

smart-me si riserva il diritto di implementare funzionalità e correzioni di bug non comunicate, in particolare quando si tratta di questioni interne.
