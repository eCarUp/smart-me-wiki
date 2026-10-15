---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Questa pagina descrive il comportamento dello schermo della Pico.'
sidebar_label: 'Pico Display'
---
Questa pagina descrive il comportamento dello schermo della Pico.

![Pico Display – Figura 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Stazione di ricarica Pico](/produkte/pico-ladestation)

[Accessori Pico](/produkte/pico-ladestation/pico-zubehör)

## Display

La descrizione della visualizzazione è valida per tutte le [versioni del firmware](/konfiguration/firmware-update) a partire dalla 0.0.28.

### Sequenza nessuna ricarica attiva

![Pico Display – Figura 2](/img/produkte-pico-ladestation-pico-display/01.png)

Viene visualizzata quando nessun veicolo è collegato e non è in corso alcuna ricarica. Questa immagine può essere personalizzata 

### Sequenza auto collegata in attesa di autorizzazione

![Pico Display – Figura 3](/img/produkte-pico-ladestation-pico-display/03.png)

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata autorizzata nel backend.

![Pico Display – Figura 4](/img/produkte-pico-ladestation-pico-display/04.png)

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata autorizzata nel backend.



### Sequenza autenticazione con CarID (Pico Online)

![Pico Display – Figura 5](/img/produkte-pico-ladestation-pico-display/05.png)

Viene visualizzata quando l'auto viene collegata e la Car-ID viene verificata.

![Pico Display – Figura 6](/img/produkte-pico-ladestation-pico-display/06.png)

Viene visualizzata quando il veicolo non è autorizzato o la Car-ID non è registrata nell'account conducente eCarUp. In seguito la Pico passa alla "Sequenza auto collegata in attesa di autorizzazione"

![Pico Display – Figura 7](/img/produkte-pico-ladestation-pico-display/07.png)

Viene visualizzata quando il veicolo è autorizzato. In seguito la Pico passa alla "Sequenza ricarica attiva".

### Sequenza autenticazione con RFID (Pico Online)

![Pico Display – Figura 8](/img/produkte-pico-ladestation-pico-display/08.png)

La carta RFID viene verificata. Con una connessione molto buona, può succedere che il testo non venga visualizzato affatto.

![Pico Display – Figura 9](/img/produkte-pico-ladestation-pico-display/09.png)

Viene visualizzata quando l'RFID è autorizzato.

![Pico Display – Figura 10](/img/produkte-pico-ladestation-pico-display/10.png)

Viene visualizzata quando l'autorizzazione RFID è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

![Pico Display – Figura 11](/img/produkte-pico-ladestation-pico-display/11.png)

Viene visualizzata quando l'RFID non è autorizzato. In seguito la Pico passa alla "Sequenza auto collegata in attesa di autorizzazione" o alla "Sequenza nessuna ricarica attiva".



### Sequenza autenticazione con codice QR (Pico Online)

![Pico Display – Figura 12](/img/produkte-pico-ladestation-pico-display/12.png)

La ricarica è stata autorizzata con successo tramite codice QR.

![Pico Display – Figura 13](/img/produkte-pico-ladestation-pico-display/10.png)

Viene visualizzata quando l'autorizzazione è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

### Sequenza avvio della ricarica

![Pico Display – Figura 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Valore / Simbolo Descrizione

6A Corrente di ricarica minima



![Pico Display – Figura 15](/img/produkte-pico-ladestation-pico-display/15.png)

Valore / Simbolo Descrizione

32A Corrente di ricarica max. consentita 



Quando la corrente di ricarica massima della stazione viene aumentata, viene mostrata brevemente questa immagine con la nuova corrente di ricarica max.

### Sequenza ricarica attiva

![Pico Display – Figura 16](/img/produkte-pico-ladestation-pico-display/16.png)

Valore / Simbolo Descrizione

0.59 Consumo dall'inizio della ricarica

kWh Unità del consumo visualizzato

Batteria Nessun significato

![Pico Display – Figura 17](/img/produkte-pico-ladestation-pico-display/17.png)

Valore / Simbolo Descrizione

22.09.23 Data

15:18:43 Inizio della ricarica

00:05:13 Durata della ricarica attiva

![Pico Display – Figura 18](/img/produkte-pico-ladestation-pico-display/18.png)

Valore / Simbolo Descrizione

1.81 Potenza 

kW Unità della potenza visualizzata

….. blu = potenza max. autorizzata dalla stazione (1 pixel = 1A) 

 verde = corrente prelevata dall'auto per fase. (1 pixel = 1A)

### Sequenza fine della ricarica

![Pico Display – Figura 19](/img/produkte-pico-ladestation-pico-display/19.png)

Valore / Simbolo Descrizione

32A Corrente max. consentita 

Quando la corrente di ricarica massima della stazione viene ridotta, viene mostrata brevemente questa immagine con la nuova corrente di ricarica max.

![Pico Display – Figura 20](/img/produkte-pico-ladestation-pico-display/20.png)

Valore / Simbolo Descrizione

6A Corrente di ricarica minima



![Pico Display – Figura 21](/img/produkte-pico-ladestation-pico-display/21.png)

Valore / Simbolo Descrizione

BYE Disconnessione avvenuta con successo

![Pico Display – Figura 22](/img/produkte-pico-ladestation-pico-display/22.png)

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

 kWh Unità del consumo visualizzato

Dopo la disconnessione, il consumo totale dell'ultima ricarica viene visualizzato per ca. 14 sec. 

### Sequenza riavvio della stazione

Questa sequenza descrive il riavvio di una stazione tramite il portale

![Pico Display – Figura 23](/img/produkte-pico-ladestation-pico-display/21.png)

Valore / Simbolo Descrizione

BYE Segnale per il riavvio

![Pico Display – Figura 24](/img/produkte-pico-ladestation-pico-display/22.png)

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

kWh Unità del consumo visualizzato

![Pico Display – Figura 25](/img/produkte-pico-ladestation-pico-display/25.png)

Lo schermo rimane nero per ca. 20 sec.

![Pico Display – Figura 26](/img/produkte-pico-ladestation-pico-display/26.png)

È il primo segnale che la Pico si sta avviando.

Al termine della sequenza riavvio della stazione, la Pico passa alla sequenza MID Mode



### Messaggi di guasto e avvisi

![Pico Display – Figura 27](/img/produkte-pico-ladestation-pico-display/27.png)

Guasto fatale

- Errore 1: problema con il modulo Wi-Fi

- Errore 2: nessuna comunicazione M4

- Errore 3: un errore con il Meter SOM

- Errore 4: problema con il sensore RDC


![Pico Display – Figura 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problema con la SIM


![Pico Display – Figura 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- Il diodo nell'auto non è corretto. Verifica il cavo di ricarica e la connessione all'auto 


![Pico Display – Figura 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- Il cavo di ricarica segnala un errore. Verifica che sia collegato correttamente. 


![Pico Display – Figura 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Il distacco del carico è attivo. La potenza di ricarica è stata ridotta. 




![Pico Display – Figura 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- L'RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente di guasto continua) è intervenuto. La ricarica è stata interrotta per motivi di sicurezza. 


![Pico Display – Figura 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- La stazione di ricarica non ha alcuna connessione con la smart-me Cloud. 





![Pico Display – Figura 34](/img/produkte-pico-ladestation-pico-display/34.png)

Il LED si illumina di arancione/ rosso nell'angolo in alto a destra del display

- Indica un messaggio di errore. Dopo al massimo 30 secondi, l'immagine dell'errore (ad es. Cable Error) viene visualizzata sullo schermo.




### MID Mode

Per passare alla modalità MID, è possibile cliccare su "Mostra lettura del contatore sul display" ("Zählerstand auf Display anzeigen") tramite l'azione estesa nel portale smart-me, avviare o riavviare la stazione oppure utilizzare il sensore di luminosità.

Con una torcia puntata sul sensore di luminosità, l'utente può inserire il seguente codice lampeggiando: Buio - Luce - Buio - Luce - Buio (ogni stato deve durare tra 1 e 5 secondi)

![Pico Display – Figura 35](/img/produkte-pico-ladestation-pico-display/35.png)

Valore / Simbolo Descrizione

Punto Sensore di luce

![Pico Display – Figura 36](/img/produkte-pico-ladestation-pico-display/36.png)

Valore / Simbolo Descrizione
M MID-Mode attivo

0.2.1 Versione e checksum secondo il codice OBIS

v 2.2 Numero di versione del firmware

CRC 4F55 Checksum del firmware

![Pico Display – Figura 37](/img/produkte-pico-ladestation-pico-display/37.png)

Valore / Simbolo Descrizione
M   MID-Mode attivo

F.F.0   Codice OBIS

03   Codice di errore

Viene visualizzato solo se è presente un messaggio di errore. 

Codice di errore Descrizione

x1-x3: la stazione di ricarica non è tarata
x4: errore nel processo del display (checksum)

1x: errore nel Meter-SOM (hardware)

2x-3x: errore Meter-SOM (checksum)

4x: errore Meter-SOM (flash) Altri: errore generico Meter-SOM 

![Pico Display – Figura 38](/img/produkte-pico-ladestation-pico-display/38.png)

Valore / Simbolo Descrizione
M MID-Mode attivo

1.8.0 Codice OBIS

00013.04 kWh La lettura del contatore in kWh con 2 cifre decimali.
