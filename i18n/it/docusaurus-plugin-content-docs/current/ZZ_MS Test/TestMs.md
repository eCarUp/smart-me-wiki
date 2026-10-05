---
title: 'Pagina di test MS'
slug: '/ZZ_MS Test/TestMS'
description: 'Denominazione'
sidebar_label: 'MSTest-Etichetta sidebar'
---
<div className="row">
<div className="col col--10">

Questa pagina descrive il comportamento dello schermo della Pico.

[Stazione di ricarica Pico](/produkte/pico-ladestation)

[Accessori Pico](/produkte/pico-ladestation/pico-zubehör)

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 1](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

## Display

La descrizione della visualizzazione è valida per tutte le [versioni del firmware](/konfiguration/firmware-update) a partire dalla 0.0.28.

### Sequenza nessuna ricarica attiva

<div className="row">
<div className="col col--10">

Viene visualizzata quando nessun veicolo è collegato e non è in corso alcuna ricarica. Questa immagine può essere personalizzata.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Sequenza auto collegata in attesa di abilitazione

<div className="row">
<div className="col col--10">

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata abilitata nel backend.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata ripetutamente quando l'auto è collegata, ma la stazione non è ancora stata abilitata nel backend.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>

### Sequenza autenticazione con CarID (Pico Online)

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'auto viene collegata e la Car-ID viene verificata.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando il veicolo non è autorizzato o la Car-ID non è registrata nell'account conducente eCarUp. Successivamente la Pico passa alla "Sequenza auto collegata in attesa di abilitazione".

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando il veicolo è autorizzato. Successivamente la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Sequenza autenticazione con RFID (Pico Online)

<div className="row">
<div className="col col--10">

La carta RFID viene verificata. In caso di connessione molto buona, può succedere che il testo non venga affatto visualizzato.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando la RFID è autorizzata.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'autorizzazione RFID è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando la RFID non è autorizzata. Successivamente la Pico passa alla "Sequenza auto collegata in attesa di abilitazione" o alla "Sequenza nessuna ricarica attiva".

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>

### Sequenza autenticazione con codice QR (Pico Online)

<div className="row">
<div className="col col--10">

La ricarica è stata abilitata con successo tramite codice QR.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Viene visualizzata quando l'autorizzazione è andata a buon fine e nessuna auto è collegata. Se un'auto è collegata, questa visualizzazione viene ignorata e la Pico passa alla "Sequenza ricarica attiva".

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Sequenza avvio della ricarica

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 6A | Corrente di ricarica abilitata |

Dopo l'abilitazione della ricarica, alla stazione di ricarica viene assegnata una corrente di ricarica iniziale.
</div>
<div className="col col--2 text--center">

![Display Pico – Figura 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 32A | Corrente di ricarica abilitata |

Quando la corrente di ricarica massima viene aumentata dalla gestione del carico, viene mostrata brevemente questa immagine con la nuova corrente di ricarica max.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Sequenza ricarica attiva
Durante la ricarica vengono mostrate a rotazione le seguenti immagini.

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 0.59 | Consumo dall'inizio della ricarica |
| kWh | Unità del consumo visualizzato |
| Batteria | Nessun significato |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 22.09.23 | Data |
| 15:18:43 | Inizio della ricarica |
| 00:05:13 | Durata della ricarica attiva |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 1.81 | Potenza |
| kW | Unità della potenza visualizzata |
| ….. blu | Potenza max. abilitata dalla stazione (1 pixel = 1A) |
| ….. verde | Prelievo di corrente dell'auto per fase (1 pixel = 1A) |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Sequenza termine della ricarica

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 32A | Corrente max. consentita |

Quando la corrente di ricarica massima viene ridotta dalla gestione del carico, viene mostrata brevemente questa immagine con la nuova corrente di ricarica.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 6A | Corrente di ricarica minima |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| BYE | Disconnessione riuscita |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 0.59 | Consumo totale dell'ultima ricarica |
| kWh | Unità del consumo visualizzato |

Dopo la disconnessione, il consumo totale dell'ultima ricarica viene visualizzato per circa 14 sec.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Sequenza riavvio della stazione

Questa sequenza descrive il riavvio di una stazione tramite il portale.

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| BYE | Segnale per il riavvio |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valore / Simbolo | Descrizione |
| --- | --- |
| 0.59 | Consumo totale dell'ultima ricarica |
| kWh | Unità del consumo visualizzato |

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Lo schermo rimane nero per circa 20 sec.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--10">

È il primo segnale che la Pico si sta avviando.

Dopo la sequenza riavvio della stazione, la Pico passa alla sequenza modalità MID.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>

### Messaggi di guasto e avvisi

<div className="row">
<div className="col col--10">

**Guasto fatale**

- Errore 1: problema con il modulo Wi-Fi
- Errore 2: non abbiamo alcuna comunicazione M4
- Errore 3: un errore con il Meter SOM
- Errore 4: problema con il sensore RDC

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**SIM Error**

- Problema con la SIM

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Diode Error**

- Il diodo nell'auto non è corretto. Verifica il cavo di ricarica e il collegamento a spina con l'auto.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Cable Error**

- Il cavo di ricarica segnala un errore. Verifica che sia collegato correttamente.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**P Limit**

- Il distacco del carico è attivo. La potenza di ricarica è stata ridotta.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Warn RDC**

- Il RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente di guasto continua) è intervenuto. La ricarica è stata terminata per motivi di sicurezza.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Offline**

- La stazione di ricarica non ha alcuna connessione con la smart-me Cloud.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Il LED si illumina di arancione/rosso nell'angolo in alto a destra del display**

- Indica un messaggio di errore. Al più tardi dopo 30 secondi, l'immagine di errore (ad es. Cable Error) viene visualizzata sullo schermo.

</div>
<div className="col col--2 text--center">

![Display Pico – Figura 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>

### Modalità MID

Per accedere alla modalità MID, è possibile cliccare su "Mostra lettura del contatore sul display" ("Zählerstand auf Display anzeigen") tramite l'azione avanzata nel portale smart-me, avviare o riavviare la stazione oppure utilizzare il sensore di luminosità.


<div className="row">
<div className="col col--8">
Con una torcia puntata sul sensore di luminosità, l'utente può trasmettere il seguente codice: buio - luce - buio - luce - buio (ogni stato deve durare tra 1 e 5 secondi).
| Valore / Simbolo | Descrizione |
| --- | --- |
| Punto | Sensore di luce |

</div>
<div className="col col--4 text--center">

![Display Pico – Figura 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Valore / Simbolo | Descrizione |
| --- | --- |
| M | Modalità MID attiva |
| 0.2.1 | Versione e checksum secondo il codice OBIS |
| v 2.2 | Numero di versione del firmware |
| CRC 4F55 | Checksum del firmware |

</div>
<div className="col col--4 text--center">

![Display Pico – Figura 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Valore / Simbolo | Descrizione |
| --- | --- |
| M | Modalità MID attiva |
| F.F.0 | Codice OBIS |
| 03 | Codice di errore |

I codici di errore vengono visualizzati esclusivamente in presenza di un errore. Altrimenti l'area è vuota.

</div>
<div className="col col--4 text--center">

![Display Pico – Figura 37](/img/produkte-pico-ladestation-pico-display/37.png)
| Codice di errore | Descrizione |
| --- | --- |
| x1–x3 | La stazione di ricarica non è tarata |
| x4 | Errore processo display (checksum) |
| 1x | Errore nel Meter-SOM (hardware) |
| 2x–3x | Errore Meter-SOM (checksum) |
| 4x | Errore Meter-SOM (flash) |
| Altri | Errore generale Meter-SOM |

</div>
</div>

<div className="row">
<div className="col col--8">

| Valore / Simbolo | Descrizione |
| --- | --- |
| M | Modalità MID attiva |
| 1.8.0 | Codice OBIS |
| 00013.04 kWh | La lettura del contatore in kWh con 2 decimali |

</div>
<div className="col col--4 text--center">

![Display Pico – Figura 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>
