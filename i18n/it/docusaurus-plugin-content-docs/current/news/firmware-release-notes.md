---
title: 'Note di rilascio firmware'
slug: '/news/firmware-release-notes'
description: 'Pico v0.0.57-r57 Data: 11.9.2026'
sidebar_label: 'Note di rilascio firmware'
---
## Note di rilascio firmware

### Pico

<details id="pico-v0-0-57-r57" open>
<summary>Pico v0.0.57-r57 · 11.9.2026</summary>

Bug:

- Corretto: dopo una pausa, la transazione della stazione Pico inattiva resta aperta

- Corretto lo scatto errato per sovraccarico della protezione da sovracorrente al 130%

</details>

<details id="pico-v0-0-55-r55">
<summary>Pico v0.0.55-r55 · 01.05.2026</summary>

Bug

- EM-406: Migliorati UART e watchdog

- Correzione rapida della modalità WiFi AP

</details>

<details id="pico-v0-0-54-r54">
<summary>Pico v0.0.54-r54 · 13.04.2026</summary>

Bug:

- Sono stati apportati diversi miglioramenti per una migliore connettività WLAN, mesh e mobile.

</details>

<details id="pico-v0-0-53-r53">
<summary>Pico v0.0.53-r53 · 12.03.2026</summary>

Funzionalità

- Visualizzazione della schermata «in attesa di corrente» ("waiting for current") quando la gestione del carico non può assegnare corrente a una stazione

- Visualizzazione di un avviso sullo schermo e nel cloud quando il CP è a 0V

- Visualizzazione di un errore sullo schermo quando la comunicazione con il Meter-SOM non è riuscita

- Corrente minima predefinita modificata a 8A e car ID disattivato per impostazione predefinita

- EM-348: Implementazione del processo di installazione delle tessere RFID

- EM-319: L'avviso di surriscaldamento non viene più mostrato sul display, ma solo nel cloud

- Ricarica monofase

Bug:

- EM-380: I nodi mesh Pico non si aggiungono al gruppo di gestione del carico

- EM-396: Comportamento offline errato della gestione del carico

- EM-379: Il bilanciamento della corrente non funziona in un gruppo con una stazione monofase

- Errore di comunicazione SPI del Meter-SOM (dovrebbe correggere la comunicazione con il Meter-SOM dopo un riavvio)

- Corretto un bug nella risoluzione DNS (WiFi)

- Corretto il tempo di attesa PLC (car ID)

- Corretta la temporizzazione della macchina a stati di ricarica

- La corrente viene impostata a 0A prima di sbloccare il cavo o di eseguire un riavvio

- Attesa che il modulo WiFi sia avviato e operativo prima di eseguire qualsiasi azione (ad es. accendere il relè). Questo dovrebbe evitare problemi durante l'aggiornamento dell'ESP32.

- La modalità Access Point (installazione) a volte non si avvia

- Riavvio del modulo WiFi dopo 5 min di inattività del controller

- Corretto il troncamento dei pacchetti UDP a 1 byte negli aggiornamenti Arm paralleli inoltrati tramite mesh

- Verifica all'avvio della presenza dei file firmware necessari

- Miglioramenti dell'aggiornamento del firmware

- EM-368: Lexus interrompe la ricarica dopo 30 min

- EM-367: Attivazione con RFID – il veicolo passa prima in stato di errore

- EM-366: La stazione interrompe la ricarica quando il modulo WiFi si riavvia a causa del timeout offline

- Corretto un panic da overflow di interi nel calcolo del tempo in display\_module.rs

- EM-362: Impossibile connettersi all'AP di installazione

- WiFi: disaccoppiamento del contesto di esecuzione dei timer

</details>

<details id="pico-v0-0-47-r47-und-0-0-46-r46">
<summary>Pico v0.0.47-r47 e 0.0.46-r46 · 01.12.2025</summary>

- Possibilità di commutare tra 1 e 3 fasi tramite Modbus o API. (MLM non è ancora supportato)

- Miglioramenti interni

</details>

<details id="pico-v-0-0-37-r37-und-0-0-36-r36">
<summary>Pico v 0.0.37-r37 e 0.0.36-r36 · 14.08.2025</summary>

Correzioni di bug

</details>

<details id="pico-v0-0-34-r34">
<summary>Pico v0.0.34-r34 · 16.01.2025</summary>

Correzioni di bug

- EM-336: Corretto un problema di installazione WLAN

</details>

<details id="pico-v0-0-33-r33">
<summary>Pico v0.0.33-r33 · 06.01.2025</summary>

Funzionalità

- EM-281: Gestione del carico: liberata la corrente riservata (6A) per le stazioni in pausa

- EM-172: Gestione del carico: la corrente alla quale si passa dalla ricarica trifase a quella monofase è ora regolabile nel cloud

- EM-172: Gestione del carico: corrente massima (per stazione) per la ricarica monofase

- EM-329: Gestione del carico: è ora possibile passare dalla ricarica monofase a quella trifase. L'impostazione per attivarla / disattivarla si trova nel cloud

- Installazione: la WLAN in modalità di installazione ha ora una password ("smart-me"), per Pico >= 7005567 e (7003152 - 7005229)

Bug

- Maggiore stabilità della connessione mobile

</details>

<details id="pico-v0-0-30-r30">
<summary>Pico v0.0.30-r30 · 03.10.2024</summary>

- EM-320 Corretta la possibile perdita di transazioni di ricarica durante la comunicazione (soprattutto mobile)

</details>

<details id="pico-v0-0-29-r29">
<summary>Pico v0.0.29-r29 · 1.7.2024</summary>

Funzionalità

- EM-245: Gestione del carico: ritorno da monofase a trifase anche se nel gruppo ci sono veicoli in ricarica.

Bug

- EM-311: Adeguati i limiti di temperatura

- EM-307: Migliorato il comportamento offline

</details>

<details id="pico-v0-0-28-r28">
<summary>Pico v0.0.28-r28 · 15.04.2024</summary>

Funzionalità:

- Nuovo flusso e nuova animazione delle immagini di autorizzazione (RFID, CardId) (EM-264)

- Timeout PLC rimosso (modificato da 25s a 3s)

Bug

- Migliorato il rilevamento offline

- Miglioramenti WiFi

</details>

<details id="pico-version-0-0-25-r25">
<summary>Versione 0.0.25-r25 · 10.01.2024</summary>

Funzionalità:

- Supporto SIM7070

Bug

- Migliorata la connessione mobile

- Visualizzazione della schermata «Non riuscito» ("Failed") quando l'autorizzazione con tessera RFID non è andata a buon fine

- Gestione del carico: l'indice di squilibrio della corrente calcolato restituiva un valore errato

- Gestione del carico: in una determinata condizione il gestore del carico non aumenta la corrente della stazione

Tecnico:

- Aggiornamento dell'algoritmo AES software

</details>

<details id="pico-v0-0-23-r23">
<summary>Pico v0.0.23-r23 · 07.12.2023</summary>

Funzionalità:

- Corrente dinamica in caso di perdita di connessione per il gruppo di gestione del carico

Bug

- Correzioni dell'EVSE Tool (tentativo di riavvio dopo un crash)

</details>

<details id="pico-v0-0-22-r22">
<summary>Pico v0.0.22-r22 · 04.09.2023</summary>

Bug

- Corretto un problema del dispositivo di blocco con temperature molto basse (sotto i -20 gradi C)

</details>

<details id="pico-v0-0-21-r21">
<summary>Pico v0.0.21-r21 · 27.08.2023</summary>

Funzionalità

- Interruzione della ricarica alla disattivazione della modalità di calibrazione (per la convalida delle transazioni in produzione)

- Ampliata la tabella di routing del modulo WiFi (supporto fino a 200 stazioni per gruppo di gestione del carico anziché 20)

</details>

<details id="pico-v0-0-20-r20">
<summary>Pico v0.0.20-r20 · 03.07.2023</summary>

-  Visualizzazione di data/ora (ora di inizio della ricarica e durata) nella schermata di ricarica

-  Visualizzazione della corrente utilizzata e consentita nella schermata della potenza

-  Test RCD ogni 24h nello stato A

-  Utilizzo di un baudrate inferiore se l'aggiornamento WiFi non riesce

</details>

<details id="pico-v0-0-19-r19">
<summary>Pico v0.0.19-r19 · 08.05.2023</summary>

-  Corretto un bug nella macchina a stati di ricarica (attesa nello stato B1 finché è presente un PWM prima di accendere il relè)

</details>

<details id="pico-v0-0-18-r18">
<summary>Pico v0.0.18-r18 · 03.04.2023</summary>

-  Buffer per le immagini (meno letture dalla memoria flash)

-  RSSI (qualità del segnale) per il supporto WiFi e mobile

-  Scrittura su disco (flash) dopo il salvataggio del file delle impostazioni o delle immagini / degli aggiornamenti del firmware

</details>

<details id="pico-v0-0-17-r17">
<summary>Pico v0.0.17-r17 · 17.02.2023</summary>

- Modifiche alla temporizzazione dell'erogazione di potenza quando il veicolo è pronto
    (supporto ampliato dei tipi di veicolo)

- Ottimizzazioni interne

</details>

<details id="pico-version-0-0-16-r16">
<summary>Versione 0.0.16-r16 · 16.12.2022</summary>

- Ottimizzazioni interne

</details>

<details id="pico-version-0-0-15-r15">
<summary>Versione 0.0.15-r15 · 12.12.2022</summary>

- Migliorato il distacco del carico del Pico per le stazioni singole

- Ottimizzazioni interne

</details>

<details id="pico-version-0-0-14-r14">
<summary>Versione 0.0.14-r14 · 06.12.2022</summary>

- Visualizzazione del consumo di energia al termine della ricarica

</details>

<details id="pico-version-0-0-13-r13">
<summary>Versione 0.0.13-r13 · 09.11.2022</summary>

- Ottimizzazioni interne

</details>

<details id="pico-version-0-0-12-r12">
<summary>Versione 0.0.12-r12 · 06.12.2022</summary>

- Ottimizzazioni interne

</details>

<details id="pico-version-0-0-11-r11">
<summary>Versione 0.0.11-r11 · 11.10.2022</summary>

- Migliorati avvisi ed errori nel cloud

- Correzione di bug: corrente dinamica della gestione del carico

</details>

<details id="pico-version-0-0-10-r10">
<summary>Versione 0.0.10-r10 · 23.09.2022</summary>

- Correzione di bug: rilevamento CarID

</details>
### Telstar 80A / Telstar CT

<details id="telstar-version-9-v18-and-v19" open>
<summary>Versione 9 (V18 e V19) · 19.09.2023 (il beta test è durato fino al 08.2024)</summary>

Correzioni di bug:

 - Corretto Modbus TCP (problema del limite di 255 connessioni)

</details>

<details id="telstar-version-8-v16-and-v17">
<summary>Versione 8 (V16 e V17) · 12.04.2023</summary>

Correzioni di bug:

 - Corretto in casi particolari l'arresto di "start wifi" dopo la disconnessione dall'AP

</details>

<details id="telstar-version-7-v14-and-v15">
<summary>Versione 7 (V14 e V15) · 16.01.2023</summary>

Correzioni di bug:

 - Timeout Modbus TCP (i client inattivi vengono disconnessi dopo 5min)

 - Modbus TCP: numero massimo di client limitato a 4

 - Connessione mesh disattivata quando Modbus TCP è attivo

 - Connessione alla rete mesh quando la connessione al normale AP WiFi fallisce 16 volte

Tecnico:

 - Aggiornamenti interni per ESP

</details>

<details id="telstar-version-6-v12-and-v13">
<summary>Versione 6 (V12 e V13) · 19.02.2022</summary>

Correzioni di bug:

 - Heap overflow Modbus TCP (all'avvio di Modbus)

 - Deadlock nella risoluzione DNS con WiFi senza connessione a Internet

</details>

<details id="telstar-version-5-v10-and-v11">
<summary>Versione 5 (V10 e V11) · 21.02.2022</summary>

Correzioni di bug:

 - L'azione basata su eventi sulla potenza era errata di un fattore 10

</details>

<details id="telstar-version-4-v8-and-v9">
<summary>Versione 4 (V8 e V9) · 11.02.2021</summary>

Correzioni di bug:

 - Corretto un bug di Modbus TCP

</details>

smart-me si riserva il diritto di implementare funzionalità e correzioni di bug non comunicate, in particolare quando si tratta di questioni interne.
