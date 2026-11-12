---
title: 'Aggiornamento del firmware'
slug: '/konfiguration/firmware-update'
description: 'Eseguire l''aggiornamento del firmware'
sidebar_label: 'Aggiornamento del firmware'
---
<Menueweg>Sistema → Aggiornamento del firmware</Menueweg>

## Eseguire l'aggiornamento del firmware

Durante il loro ciclo di vita, i prodotti smart-me ricevono continuamente miglioramenti ed estensioni delle funzionalità.
Queste ottimizzazioni possono essere eseguite autonomamente dall'utente.

ⓘ Nota: gli aggiornamenti del firmware vanno applicati soprattutto quando hai riscontrato un comportamento anomalo o desideri utilizzare una nuova funzione che il firmware precedente non supportava ancora. I prodotti con funzioni in rapida evoluzione, come ad esempio la stazione di ricarica Pico, dovrebbero essere aggiornati regolarmente.

Visita la seguente pagina web tramite il portale oppure tramite il seguente link:
[Pagina web per l'aggiornamento del firmware](https://webforms.smart-me.com/Connect/DeviceOverview.aspx) 

## Procedura

### 1\. Seleziona il dispositivo da aggiornare:

"Update" oppure "Update Communication"

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

- Per il gateway M-Bus dipende dall'intervallo di upload.

</div>
<div className="col col--7 bild--mitte">

![Aggiornamento del firmware – Figura 3](/img/konfiguration-firmware-update/03.png)

</div>
</div>

### 3\. Attendi il completamento dell'aggiornamento e conferma con "OK"

<div className="row">
<div className="col col--4">

ⓘ Nota: una volta avviato l'aggiornamento (> 1%), non è necessario lasciare aperto il browser.

Tempo fino al completamento dell'aggiornamento: 

- Per Telstar (CT) circa 5 minuti.

- Per Pico può richiedere fino a un giorno. Vedi più sotto come accelerare l'aggiornamento del firmware.

- Per il gateway M-Bus dipende dall'intervallo di upload.

</div>
<div className="col col--8 bild--mitte">

![Aggiornamento del firmware – Figura 4](/img/konfiguration-firmware-update/04.png)

![Aggiornamento del firmware – Figura 5](/img/konfiguration-firmware-update/05.png)

</div>
</div>

### Accelerare l'aggiornamento del firmware

Di norma l'aggiornamento prosegue anche senza un monitoraggio attivo o un browser aperto.

Se l'aggiornamento viene monitorato attivamente, può essere accelerato come segue:

- Seleziona il contatore o la Pico in una seconda scheda del browser.

- Seleziona la visualizzazione normale.

- Lascia la scheda del browser aperta e attiva. In questo modo il contatore o la Pico comunica più spesso con la smart-me Cloud e possono quindi essere scambiati più pacchetti di dati, così da completare più rapidamente l'aggiornamento.

- Puoi verificare se la comunicazione è attiva osservando la tensione. Poiché questa oscilla sempre leggermente, è facile vedere se il dispositivo invia ora dati ogni 1-2 secondi.


![Aggiornamento del firmware – Figura 6](/img/konfiguration-firmware-update/06.png)

## Note di rilascio del firmware

[Note di rilascio del firmware](/news/firmware-release-notes)
