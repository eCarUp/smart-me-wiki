---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Questa pagina descrive il comportamento dello schermo della Pico.'
sidebar_label: 'Pico Display'
---
Questa pagina descrive il comportamento dello schermo della Pico.

![Pico Display – Figura 1](/img/produkte-pico-ladestation-pico-display/01.png)


## Display

La descrizione della visualizzazione è valida per tutte le [versioni del firmware](/konfiguration/firmware-update) a partire dalla 0.0.28.

### Sequenza nessuna ricarica attiva

<div className="row">
<div className="col col--10">

Viene visualizzata quando nessun veicolo è collegato e non è in corso alcuna ricarica. Questa immagine può essere personalizzata 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Sequenza auto collegata in attesa di abilitazione

<div className="row">
<div className="col col--10">

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora abilitata nel backend.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora abilitata nel backend.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>



### Sequenza autenticazione con CarID (Pico Online)

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'auto viene collegata e la Car-ID viene verificata.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando il veicolo non è autorizzato o la Car-ID non è registrata nell'account conducente eCarUp. Successivamente la Pico passa alla "Sequenza auto collegata in attesa di abilitazione"

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando il veicolo è autorizzato. Successivamente la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Sequenza autenticazione con RFID (Pico Online)

<div className="row">
<div className="col col--10">

La tessera RFID viene verificata. In caso di connessione molto buona, è possibile che il testo non venga visualizzato affatto.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando la RFID è autorizzata.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'autorizzazione RFID è riuscita e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando la RFID non è autorizzata. Successivamente la Pico passa alla "Sequenza auto collegata in attesa di abilitazione" o alla "Sequenza nessuna ricarica attiva".

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>



### Sequenza autenticazione con codice QR (Pico Online)

<div className="row">
<div className="col col--10">

La ricarica è stata abilitata correttamente con il codice QR.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'autorizzazione è riuscita e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Sequenza avvio della ricarica

<div className="row">
<div className="col col--10">

 Valore / Simbolo Descrizione

6A Corrente di ricarica minima

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>



<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

32A Corrente di ricarica massima consentita 

Quando la corrente di ricarica massima viene aumentata dalla stazione, viene visualizzata brevemente questa immagine con la nuova corrente di ricarica massima.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Sequenza ricarica attiva

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

0.59 Consumo dall'inizio della ricarica

kWh Unità del consumo visualizzato

Batteria Nessun significato

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

22.09.23 Data

15:18:43 Inizio della ricarica

00:05:13 Durata della ricarica attiva

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

1.81 Potenza 

kW Unità della potenza visualizzata

….. blu = potenza massima abilitata dalla stazione (1 pixel = 1A) 

 verde = prelievo di corrente dell'auto per fase. (1 pixel = 1A)

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Sequenza fine della ricarica

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

32A Corrente massima consentita 

Quando la corrente di ricarica massima viene ridotta dalla stazione, viene visualizzata brevemente questa immagine con la nuova corrente di ricarica massima

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

6A Corrente di ricarica minima

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>



<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

BYE Disconnessione riuscita

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

 kWh Unità del consumo visualizzato

Dopo la disconnessione, il consumo totale dell'ultima ricarica viene visualizzato per circa 14 sec. 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Sequenza riavvio della stazione

Questa sequenza descrive il riavvio di una stazione tramite il portale

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

BYE Segnale per il riavvio

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Valore / Simbolo Descrizione

0.59 Consumo totale dell'ultima ricarica

kWh Unità del consumo visualizzato

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Lo schermo rimane nero per circa 20 sec.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--10">

È il primo segnale che la Pico si sta avviando.

Dopo la sequenza riavvio della stazione, la Pico passa alla sequenza MID Mode

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>



### Messaggi di guasto e avvisi

<div className="row">
<div className="col col--10">

Guasto fatale

- Errore 1: problema con il modulo Wi-Fi

- Errore 2: nessuna comunicazione M4

- Errore 3: un errore con il Meter SOM

- Errore 4: problema con il sensore RDC

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>


<div className="row">
<div className="col col--10">

SIM Error

- Problema con la SIM

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>


<div className="row">
<div className="col col--10">

Diode Error

- Il diodo nell'auto non è corretto. Verifichi il cavo di ricarica e il collegamento a spina con l'auto 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>


<div className="row">
<div className="col col--10">

Cable Error

- Il cavo di ricarica segnala un errore. Verifichi che sia inserito correttamente. 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>


<div className="row">
<div className="col col--10">

P Limit

- Il distacco del carico è attivo. La potenza di ricarica è stata ridotta. 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>




<div className="row">
<div className="col col--10">

Warn RDC

- Il RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente di guasto continua) è intervenuto. La ricarica è stata interrotta per motivi di sicurezza. 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>


<div className="row">
<div className="col col--10">

Offline

- La stazione di ricarica non ha alcuna connessione con lo smart-me Cloud. 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>





<div className="row">
<div className="col col--10">

Il LED si accende in arancione/rosso nell'angolo in alto a destra del display

- Indica un messaggio di errore. Al più tardi dopo 30 secondi, l'immagine dell'errore (ad es. Cable Error) viene visualizzata sullo schermo.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>




### MID Mode

Per accedere alla modalità MID, è possibile cliccare su "Mostra la lettura del contatore sul display" ("Zählerstand auf Display anzeigen") tramite le azioni avanzate nel portale smart-me, avviare o riavviare la stazione oppure utilizzare il sensore di luminosità.

Con una torcia puntata sul sensore di luminosità, l'utente può inserire il seguente codice lampeggiante: buio - luce - buio - luce - buio (ogni stato deve durare tra 1 e 5 secondi)

<div className="row">
<div className="col col--10">

#### Posizione del sensore di luce

- Punto sensore di luce

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--10">

#### MID Display 1

- 0.2.1 Versione e checksum secondo il codice OBIS

- v 2.2 Numero di versione del firmware

- CRC 4F55 Checksum del firmware

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--10">

#### MID Display 2

- F.F.0   Codice OBIS

- 03   Codice di errore

- Viene visualizzato solo in presenza di un messaggio di errore. 

#### Descrizione dei codici di errore

- x1-x3: la stazione di ricarica non è tarata
- x4: errore processo display (checksum)

- 1x: errore nel Meter-SOM (hardware)

- 2x-3x: errore Meter-SOM (checksum)

- 4x: errore Meter-SOM (flash) Altri: errore generico Meter-SOM 

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 37](/img/produkte-pico-ladestation-pico-display/37.png)

</div>
</div>

<div className="row">
<div className="col col--10">

#### MID Display 3

- 1.8.0 Codice OBIS

- 00013.04 kWh La lettura del contatore in kWh con 2 decimali.

</div>
<div className="col col--2 text--center">

![Pico Display – Figura 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>
