---
title: 'Display Pico'
slug: '/produkte/pico-ladestation/pico-display'
description: 'In questa pagina viene descritto il comportamento dello schermo della Pico.'
sidebar_label: 'Display Pico'
---
In questa pagina viene descritto il comportamento dello schermo della Pico.

![Display Pico – Figura 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Stazione di ricarica Pico](/produkte/pico-ladestation)

[Accessori Pico](/produkte/pico-ladestation/pico-zubehör)

## Display

La descrizione delle indicazioni sul display vale per tutte le [versioni del firmware](/konfiguration/firmware-update) a partire dalla 0.0.28.

### Sequenza nessuna ricarica attiva

![Display Pico – Figura 2](/img/produkte-pico-ladestation-pico-display/01.png)

Viene visualizzata quando nessun veicolo è collegato e non è in corso alcuna ricarica. Questa immagine può essere personalizzata 

### Sequenza auto collegata in attesa di abilitazione

![Display Pico – Figura 3](/img/produkte-pico-ladestation-pico-display/03.png)

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata abilitata nel backend.

![Display Pico – Figura 4](/img/produkte-pico-ladestation-pico-display/04.png)

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata abilitata nel backend.



### Sequenza autenticazione con CarID (Pico Online)

![Display Pico – Figura 5](/img/produkte-pico-ladestation-pico-display/05.png)

Viene visualizzata quando l'auto viene collegata e la Car-ID viene verificata.

![Display Pico – Figura 6](/img/produkte-pico-ladestation-pico-display/06.png)

Viene visualizzata quando il veicolo non è autorizzato o la Car-ID non è registrata nell'account conducente eCarUp. Successivamente la Pico passa alla «Sequenza auto collegata in attesa di abilitazione»

![Display Pico – Figura 7](/img/produkte-pico-ladestation-pico-display/07.png)

Viene visualizzata quando il veicolo è autorizzato. Successivamente la Pico passa alla «Sequenza ricarica attiva».

### Sequenza autenticazione con RFID (Pico Online)

![Display Pico – Figura 8](/img/produkte-pico-ladestation-pico-display/08.png)

La tessera RFID viene verificata. In caso di connessione molto buona, è possibile che il testo non venga visualizzato affatto.

![Display Pico – Figura 9](/img/produkte-pico-ladestation-pico-display/09.png)

Viene visualizzata quando la tessera RFID è autorizzata.

![Display Pico – Figura 10](/img/produkte-pico-ladestation-pico-display/10.png)

Viene visualizzata quando l'autorizzazione RFID è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa indicazione viene ignorata e la Pico passa alla «Sequenza ricarica attiva».

![Display Pico – Figura 11](/img/produkte-pico-ladestation-pico-display/11.png)

Viene visualizzata quando la tessera RFID non è autorizzata. Successivamente la Pico passa alla «Sequenza auto collegata in attesa di abilitazione» o alla «Sequenza nessuna ricarica attiva».



### Sequenza autenticazione con codice QR (Pico Online)

![Display Pico – Figura 12](/img/produkte-pico-ladestation-pico-display/12.png)

La ricarica è stata abilitata correttamente tramite codice QR.

![Display Pico – Figura 13](/img/produkte-pico-ladestation-pico-display/10.png)

Viene visualizzata quando l'autorizzazione è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa indicazione viene ignorata e la Pico passa alla «Sequenza ricarica attiva».

### Sequenza avvio della ricarica

![Display Pico – Figura 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Valore / Simbolo Descrizione

6A Corrente di ricarica minima



![Display Pico – Figura 15](/img/produkte-pico-ladestation-pico-display/15.png)

Valore / Simbolo Descrizione

32A Corrente di ricarica max. consentita 



Quando la stazione aumenta la corrente di ricarica massima, viene mostrata brevemente questa immagine con la nuova corrente di ricarica max.

### Sequenza ricarica attiva

![Display Pico – Figura 16](/img/produkte-pico-ladestation-pico-display/16.png)

Valore / Simbolo Descrizione

0.59 Consumo dall'inizio della ricarica

kWh Unità del consumo visualizzato

Batteria Nessun significato

![Display Pico – Figura 17](/img/produkte-pico-ladestation-pico-display/17.png)

Valore / Simbolo Descrizione

22.09.23 Data

15:18:43 Inizio della ricarica

00:05:13 Durata della ricarica attiva

![Display Pico – Figura 18](/img/produkte-pico-ladestation-pico-display/18.png)

Valore / Simbolo Descrizione

1.81 Potenza 

kW Unità della potenza visualizzata

….. blu = potenza max. abilitata dalla stazione (1 pixel = 1A) 

 verde = corrente prelevata dall'auto per fase. (1 pixel = 1A)

### Sequenza fine della ricarica

![Display Pico – Figura 19](/img/produkte-pico-ladestation-pico-display/19.png)

Valore / Simbolo Descrizione

32A Corrente max. consentita 

Quando la stazione riduce la corrente di ricarica massima, viene mostrata brevemente questa immagine con la nuova corrente di ricarica max.

![Display Pico – Figura 20](/img/produkte-pico-ladestation-pico-display/20.png)

Valore / Simbolo Descrizione

6A Corrente di ricarica minima



![Display Pico – Figura 21](/img/produkte-pico-ladestation-pico-display/21.png)

Valore / Simbolo Descrizione

BYE Disconnessione avvenuta con successo

![Display Pico – Figura 22](/img/produkte-pico-ladestation-pico-display/22.png)

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

 kWh Unità del consumo visualizzato

Dopo la disconnessione, il consumo totale dell'ultima ricarica viene visualizzato per circa 14 sec. 

### Sequenza riavvio della stazione

Questa sequenza descrive il riavvio di una stazione tramite il portale

![Display Pico – Figura 23](/img/produkte-pico-ladestation-pico-display/21.png)

Valore / Simbolo Descrizione

BYE Segnale per il riavvio

![Display Pico – Figura 24](/img/produkte-pico-ladestation-pico-display/22.png)

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

kWh Unità del consumo visualizzato

![Display Pico – Figura 25](/img/produkte-pico-ladestation-pico-display/25.png)

Lo schermo rimane nero per circa 20 sec.

![Display Pico – Figura 26](/img/produkte-pico-ladestation-pico-display/26.png)

È il primo segnale che la Pico si sta avviando.

Al termine della sequenza riavvio della stazione, la Pico passa alla sequenza Modalità MID



### Messaggi di guasto e avvisi

![Display Pico – Figura 27](/img/produkte-pico-ladestation-pico-display/27.png)

Guasto fatale

- Errore 1: Problema con il modulo WLAN

- Errore 2: Nessuna comunicazione M4

- Errore 3: Errore del Meter SOM

- Errore 4: Problema con il sensore RDC


![Display Pico – Figura 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problema con la SIM


![Display Pico – Figura 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- Il diodo nell'auto non è corretto. Verifichi il cavo di ricarica e il collegamento a spina con l'auto 


![Display Pico – Figura 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- Il cavo di ricarica segnala un errore. Verifichi che sia inserito correttamente. 


![Display Pico – Figura 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Il distacco del carico è attivo. La potenza di ricarica è stata ridotta. 




![Display Pico – Figura 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- L'RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente continua di guasto) è intervenuto. La ricarica è stata interrotta per motivi di sicurezza. 


![Display Pico – Figura 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- La stazione di ricarica non ha alcuna connessione con lo smart-me Cloud. 





![Display Pico – Figura 34](/img/produkte-pico-ladestation-pico-display/34.png)

Il LED si illumina di arancione/ rosso nell'angolo in alto a destra del display

- Indica un messaggio di errore. Al più tardi dopo 30 secondi, sullo schermo viene visualizzata l'immagine dell'errore (ad es. Cable Error).




### Modalità MID

Per accedere alla modalità MID, è possibile cliccare su «Mostra lettura del contatore sul display» («Zählerstand auf Display anzeigen») tramite l'azione estesa nel portale smart-me, avviare o riavviare la stazione oppure utilizzare il sensore di luminosità.

Con una torcia puntata sul sensore di luminosità, l'utente può inserire il seguente codice lampeggiante: Buio - Luce - Buio - Luce - Buio (ogni stato deve durare tra 1 e 5 secondi)

![Display Pico – Figura 35](/img/produkte-pico-ladestation-pico-display/35.png)

Valore / Simbolo Descrizione

Punto Sensore di luce

![Display Pico – Figura 36](/img/produkte-pico-ladestation-pico-display/36.png)

Valore / Simbolo Descrizione
M Modalità MID attiva

0.2.1 Versione e checksum secondo il codice Obis

v 2.2 Numero di versione del firmware

CRC 4F55 Checksum del firmware

![Display Pico – Figura 37](/img/produkte-pico-ladestation-pico-display/37.png)

Valore / Simbolo Descrizione
M   Modalità MID attiva

F.F.0   Codice Obis

03   Codice di errore

Viene visualizzato solo in presenza di un messaggio di errore. 

Codice di errore Descrizione

x1-x3: La stazione di ricarica non è tarata
x4: Errore processo display (checksum)

1x: Errore nel Meter-SOM (hardware)

2x-3x: Errore Meter-SOM (checksum)

4x: Errore Meter-SOM (flash) Altri: Errore generico Meter-SOM 

![Display Pico – Figura 38](/img/produkte-pico-ladestation-pico-display/38.png)

Valore / Simbolo Descrizione
M Modalità MID attiva

1.8.0 Codice Obis

00013.04 kWh La lettura del contatore in kWh con 2 cifre decimali.
