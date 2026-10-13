---
title: 'Aggiornamento del firmware'
slug: '/konfiguration/firmware-update'
description: 'Eseguire l''aggiornamento del firmware'
sidebar_label: 'Aggiornamento del firmware'
---
## Eseguire l'aggiornamento del firmware

Nel corso del loro ciclo di vita, i prodotti smart-me ricevono continuamente miglioramenti ed estensioni delle funzioni.
Questi aggiornamenti possono essere eseguiti autonomamente dall'utente.

ⓘ Nota: gli aggiornamenti del firmware vanno eseguiti soprattutto se hai riscontrato un comportamento anomalo o se vuoi utilizzare una nuova funzione che il firmware precedente non supportava ancora. I prodotti con funzioni in rapida evoluzione, come ad esempio la stazione di ricarica Pico, dovrebbero essere aggiornati regolarmente.

### Aprire la pagina web per l'aggiornamento del firmware

Sull'hardware smart-me è possibile eseguire un aggiornamento del firmware in qualsiasi momento, a condizione che sia garantito l'accesso a Internet.

Tramite questo link

1.  [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)


Oppure tramite il menu smart-me

1.  Accedi nel browser tramite [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) con i tuoi dati di accesso.

2.  Nel menu seleziona Sistema / Aggiornamento del firmware (System / Firmware Update)


![Aggiornamento del firmware – Figura 1](/img/konfiguration-firmware-update/01.png)

## Procedura

1.  ### Seleziona il dispositivo da aggiornare: "Update" oppure "Update Communication"


- Update: firmware del dispositivo

- Update Communication: aggiornamento del modulo di comunicazione


Nota:
Per eseguire più aggiornamenti in parallelo, puoi aprire più link in una nuova scheda facendo clic con il tasto destro sul link.

![Aggiornamento del firmware – Figura 2](/img/konfiguration-firmware-update/02.png)

### 2\. Seleziona "Aggiorna firmware" ("Firmware aktualisieren")

Tempo fino all'avvio: 

- Per Telstar (CT) e Pico possono essere necessari fino a 5 minuti.

- Per il M-Bus Gateway dipende dall'intervallo di upload.


![Aggiornamento del firmware – Figura 3](/img/konfiguration-firmware-update/03.png)

### 3\. Attendi che l'aggiornamento sia completato e conferma con "OK"

ⓘ Nota: una volta avviato l'aggiornamento (> 1%), non è necessario tenere aperto il browser.

Tempo fino al completamento dell'aggiornamento: 

- Per Telstar (CT) circa 5 minuti.

- Per Pico può durare fino a un giorno. Vedi più sotto come accelerare l'aggiornamento del firmware.

- Per il M-Bus Gateway dipende dall'intervallo di upload.


![Aggiornamento del firmware – Figura 4](/img/konfiguration-firmware-update/04.png)

![Aggiornamento del firmware – Figura 5](/img/konfiguration-firmware-update/05.png)

### Accelerare l'aggiornamento del firmware

Di norma l'aggiornamento prosegue anche senza un monitoraggio attivo e senza un browser aperto.

Se l'aggiornamento viene monitorato attivamente, può essere accelerato come segue:

- Seleziona il contatore o la Pico in una seconda scheda del browser.

- Seleziona la visualizzazione normale.

- Lascia la scheda del browser aperta e attiva. In questo modo il contatore o la Pico comunica più frequentemente con la smart-me Cloud e possono quindi essere scambiati più pacchetti di dati, così che l'aggiornamento si concluda più rapidamente.

- Puoi verificare se la comunicazione è attiva osservando la tensione. Poiché questa oscilla sempre leggermente, è facile vedere se il dispositivo invia ora dati ogni 1-2 secondi.


![Aggiornamento del firmware – Figura 6](/img/konfiguration-firmware-update/06.png)

## Note di rilascio del firmware

[Note di rilascio del firmware](/news/firmware-release-notes)
