---
title: 'Aggiornamento del firmware'
slug: '/konfiguration/firmware-update'
description: 'Eseguire l''aggiornamento del firmware'
sidebar_label: 'Aggiornamento del firmware'
---
<Menueweg>Sistema → Aggiornamento del firmware</Menueweg>

## Eseguire l'aggiornamento del firmware

Nel corso del loro ciclo di vita, i prodotti smart-me ricevono continuamente miglioramenti ed estensioni delle funzioni.
L'utente può eseguire autonomamente queste ottimizzazioni.

ⓘ Nota: gli aggiornamenti del firmware vanno eseguiti soprattutto se hai riscontrato un comportamento errato o se vuoi utilizzare una nuova funzione che il firmware precedente non supportava ancora. I prodotti con funzioni in rapida evoluzione, come ad esempio la stazione di ricarica Pico, dovrebbero essere aggiornati regolarmente.


## Procedura

### 1\. Seleziona il dispositivo da aggiornare:

"Update" oppure "Update Communication"

- Update: firmware del dispositivo

- Update Communication: aggiornamento del modulo di comunicazione


Nota:
Per eseguire più aggiornamenti in parallelo, puoi aprire più link in una nuova scheda facendo clic con il tasto destro sul link.

![Aggiornamento del firmware – figura 2](/img/konfiguration-firmware-update/02.png)

### 2\. Seleziona "Aggiorna firmware" ("Firmware aktualisieren")

<div className="row">
<div className="col col--5">

Tempo fino all'avvio: 

- Per Telstar (CT) e Pico possono essere necessari fino a 5 minuti.

- Per il gateway M-Bus dipende dall'intervallo di caricamento.

</div>
<div className="col col--7 bild--mitte">

![Aggiornamento del firmware – figura 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Attendi il completamento dell'aggiornamento e conferma con "OK"

<div className="row">
<div className="col col--4">

ⓘ Nota: una volta avviato l'aggiornamento (> 1%), non è necessario lasciare aperto il browser.

Tempo fino al completamento dell'aggiornamento: 

- Per Telstar (CT) circa 5 minuti.

- Per Pico può essere necessario fino a un giorno. Vedi sotto per accelerare l'aggiornamento del firmware.

- Per il gateway M-Bus dipende dall'intervallo di caricamento.

</div>
<div className="col col--8 bild--mitte">

![Aggiornamento del firmware – figura 4](/img/konfiguration-firmware-update/04.png)

![Aggiornamento del firmware – figura 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Accelerare l'aggiornamento del firmware

Di norma l'aggiornamento prosegue anche senza una supervisione attiva e senza un browser aperto.

Se l'aggiornamento viene seguito attivamente, è possibile accelerarlo come segue:

- Seleziona il contatore o la Pico in una seconda scheda del browser.

- Seleziona la vista normale.

- Lascia la scheda del browser aperta e attiva. In questo modo il contatore o la Pico comunica più spesso con il cloud smart-me e si possono quindi scambiare più pacchetti di dati, così che l'aggiornamento si concluda più rapidamente.

- Puoi verificare se la comunicazione è attiva osservando la tensione. Poiché questa oscilla sempre leggermente, è facile vedere se il dispositivo invia ora dati ogni 1-2 secondi.


![Aggiornamento del firmware – figura 6](/img/konfiguration-firmware-update/06.png)

## Note di rilascio del firmware

[Note di rilascio del firmware](/news/firmware-release-notes)
