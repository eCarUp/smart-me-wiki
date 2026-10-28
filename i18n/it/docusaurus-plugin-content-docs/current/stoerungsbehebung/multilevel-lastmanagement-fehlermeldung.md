---
title: 'Messaggio di errore della gestione del carico multilivello'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Il gruppo di gestione del carico probabilmente non è configurato correttamente: come valore in caso di interruzione della connessione al cloud non è selezionato "Max.'
sidebar_label: 'Messaggio di errore della gestione del carico multilivello'
---
<div className="row">
<div className="col col--6 bild--mitte">

![Messaggio di errore della gestione del carico multilivello – figura 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Messaggio di errore della gestione del carico multilivello – figura 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

</div>
<div className="col col--6">

- Il gruppo di gestione del carico probabilmente non è configurato correttamente:

    Come valore in caso di interruzione della connessione al cloud non è selezionato "Corrente max. (per gruppo)" ("Max. Strom (pro Gruppe)")

- La configurazione per l'interruzione di Internet non è disponibile.

    [Eseguire l'aggiornamento del firmware](/konfiguration/firmware-update) almeno alla versione 0.0.25

</div>
</div>


![Messaggio di errore della gestione del carico multilivello – figura 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Il gruppo di gestione del carico è stato creato con Pico che supportano il bilanciamento delle fasi. Anche ogni ulteriore Pico deve supportare il bilanciamento delle fasi. Questa funzione può essere aggiunta con un [aggiornamento del firmware](/konfiguration/firmware-update) alla versione 0.0.34 o successiva.


![Messaggio di errore della gestione del carico multilivello – figura 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Messaggio di errore della gestione del carico multilivello – figura 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Nessun testo inserito nel campo "Nome" ("Name")


<div className="row">
<div className="col col--7 bild--mitte">

![Messaggio di errore della gestione del carico multilivello – figura 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

</div>
<div className="col col--5">

- Un gruppo di carico Pico o un hardware del contatore utilizzato in precedenza è stato eliminato dal lato hardware.

    L'MLM deve essere configurato di nuovo per ripristinare la funzione.

- Eliminate sempre i gruppi di carico Pico interessati prima dall'albero MLM e solo dopo sull'hardware, per non compromettere la configurazione.

</div>
</div>


## A un gruppo viene sempre assegnata troppo poca corrente

Le cause possono essere le seguenti:

- Non c'è abbastanza capacità per tutti i gruppi --> Riducete leggermente le correnti dei gruppi per ottenere un equilibrio tra i gruppi.

- Non c'è abbastanza capacità per tutti i gruppi --> Riducete temporaneamente le correnti dei gruppi con l'impostazione di gruppo della corrente minima per ora.


## Ai gruppi viene sempre messa a disposizione solo la corrente prevista in caso di interruzione di Internet

![Messaggio di errore della gestione del carico multilivello – figura 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- L'MLM non è attivo e di conseguenza, per sicurezza, distribuisce solo la corrente prevista in caso di interruzione di Internet --> Attivate l'MLM ("MLM Aktivieren") e premete Salva ("Speichern").
