---
title: 'Aggiornamento del firmware'
slug: '/konfiguration/firmware-update'
description: 'Eseguire l''aggiornamento del firmware'
sidebar_label: 'Aggiornamento del firmware'
---
<Menueweg>Sistema → Aggiornamento del firmware</Menueweg>

## Eseguire l'aggiornamento del firmware

Nel corso del loro ciclo di vita, i prodotti smart-me ricevono costantemente miglioramenti ed estensioni delle funzionalità.
Queste ottimizzazioni possono essere eseguite autonomamente dall'utente.

ⓘ Nota: gli aggiornamenti del firmware vanno applicati soprattutto quando hai riscontrato un comportamento errato o desideri utilizzare una nuova funzione non ancora supportata dal firmware precedente. I prodotti con funzionalità in rapida evoluzione, come ad esempio la stazione di ricarica Pico, dovrebbero essere aggiornati regolarmente.


## Procedura

### 1\. Seleziona il dispositivo da aggiornare:

"Update" o "Update Communication"

- Update: firmware del dispositivo

- Update Communication: aggiornamento del modulo di comunicazione


Nota:
Per eseguire più aggiornamenti in parallelo, puoi aprire più link in una nuova scheda facendo clic con il tasto destro sul link.

![Aggiornamento del firmware – Figura 2](/img/konfiguration-firmware-update/02.png)

### 2\. Seleziona "Aggiorna firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Tempo fino all'avvio: 

- Per Telstar (CT) e Pico possono essere necessari fino a 5 minuti.

- Per il M-Bus Gateway dipende dall'intervallo di upload.

</div>
<div className="col col--7 text--center">

![Aggiornamento del firmware – Figura 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Attendi il completamento dell'aggiornamento e conferma con "OK"

<div className="row">
<div className="col col--4">

ⓘ Nota: una volta iniziato l'aggiornamento (> 1%), non è necessario lasciare aperto il browser.

Tempo fino al completamento dell'aggiornamento: 

- Per Telstar (CT) circa 5 minuti.

- Per Pico può essere necessario fino a un giorno. Vedi sotto per accelerare l'aggiornamento del firmware.

- Per il M-Bus Gateway dipende dall'intervallo di upload.

</div>
<div className="col col--8 text--center">

![Aggiornamento del firmware – Figura 4](/img/konfiguration-firmware-update/04.png)

![Aggiornamento del firmware – Figura 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Accelerare l'aggiornamento del firmware

Di norma l'aggiornamento prosegue anche senza un monitoraggio attivo o un browser aperto.

Se l'aggiornamento viene monitorato attivamente, può essere accelerato come segue:

- Seleziona il contatore o la Pico in una seconda scheda del browser.

- Seleziona la vista normale.

- Lascia la scheda del browser aperta e attiva. In questo modo il contatore o la Pico comunica più frequentemente con la smart-me Cloud e possono quindi essere scambiati più pacchetti di dati, così da completare l'aggiornamento più rapidamente.

- Se la comunicazione è attiva lo si può riconoscere dalla tensione. Poiché questa varia sempre leggermente, è facile osservare se il dispositivo invia ora dati ogni 1-2 secondi.


![Aggiornamento del firmware – Figura 6](/img/konfiguration-firmware-update/06.png)

## Note di rilascio del firmware

[Note di rilascio del firmware](/news/firmware-release-notes)
