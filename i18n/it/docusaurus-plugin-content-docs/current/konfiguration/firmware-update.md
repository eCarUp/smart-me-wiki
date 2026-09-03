---
title: 'Aggiornamento del firmware'
slug: '/konfiguration/firmware-update'
description: 'Eseguire l''aggiornamento del firmware'
sidebar_label: 'Aggiornamento del firmware'
---
## Eseguire l'aggiornamento del firmware

I prodotti smart-me ricevono continui miglioramenti ed estensioni funzionali nel corso del loro ciclo di vita.
Queste ottimizzazioni possono essere eseguite autonomamente dall'utente.

ⓘ Nota: gli aggiornamenti del firmware vanno applicati soprattutto quando hai riscontrato un comportamento anomalo o quando vuoi utilizzare una nuova funzione che il firmware precedente non supportava ancora. I prodotti con funzioni in rapida evoluzione, come per esempio la stazione di ricarica Pico, dovrebbero essere aggiornati regolarmente.

### Aprire la pagina web per l'aggiornamento del firmware

Sull'hardware smart-me è possibile eseguire un aggiornamento del firmware in qualsiasi momento, purché sia garantito l'accesso a Internet.

Tramite questo link

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Oppure tramite il menu smart-me

1.  Accedi nel browser tramite [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) con i tuoi dati di accesso.

2.  Nel menu seleziona Sistema / Aggiornamento firmware (System / Firmware Update)


![Aggiornamento del firmware – Figura 1](/img/konfiguration-firmware-update/01.png)

## Procedura

1.  ### Seleziona il dispositivo da aggiornare: "Update" o "Update Communication"


- Update: firmware del dispositivo

- Update Communication: aggiornamento del modulo di comunicazione


Nota:
per eseguire più aggiornamenti in parallelo, puoi aprire più link in una nuova scheda facendo clic con il pulsante destro sul link.

![Aggiornamento del firmware – Figura 2](/img/konfiguration-firmware-update/02.png)

### 2\. Seleziona "Aggiorna firmware" (Firmware aktualisieren)

Tempo fino all'avvio: 

- Con Telstar (CT) e Pico può richiedere fino a 5 minuti.

- Con M-Bus Gateway dipende dall'intervallo di upload.


![Aggiornamento del firmware – Figura 3](/img/konfiguration-firmware-update/03.png)

### 3\. Attendi il completamento dell'aggiornamento e confermalo con "OK"

ⓘ Nota: quando l'aggiornamento è iniziato (> 1%), il browser non deve rimanere aperto.

Tempo fino al completamento dell'aggiornamento: 

- Con Telstar (CT) circa 5 minuti.

- Per Pico può richiedere fino a un giorno. Vedi sotto per accelerare l'aggiornamento del firmware.

- Per M-Bus Gateway dipende dall'intervallo di upload.


![Aggiornamento del firmware – Figura 4](/img/konfiguration-firmware-update/04.png)

![Aggiornamento del firmware – Figura 5](/img/konfiguration-firmware-update/05.png)

### Accelerare l'aggiornamento del firmware

Di norma l'aggiornamento prosegue anche senza monitoraggio attivo o senza un browser aperto.

Se l'aggiornamento viene monitorato attivamente, può essere accelerato come segue:

- Seleziona il contatore o la Pico in una seconda scheda del browser.

- Seleziona la vista normale.

- Lascia la scheda del browser aperta e attiva. In questo modo il contatore o la Pico comunica più frequentemente con il cloud smart-me e possono quindi essere scambiati più pacchetti di dati, per completare l'aggiornamento più rapidamente.

- Se la comunicazione è attiva si può verificare dalla tensione. Poiché questa oscilla sempre leggermente, è facile osservare se il dispositivo invia ora dati ogni 1-2 secondi.


![Aggiornamento del firmware – Figura 6](/img/konfiguration-firmware-update/06.png)

## Note di rilascio del firmware

[Note di rilascio del firmware](/news/firmware-release-notes)
