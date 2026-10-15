---
title: 'Messaggio di errore della gestione del carico multilivello'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Il gruppo di gestione del carico probabilmente non è configurato correttamente: come valore in caso di interruzione della connessione cloud non è selezionato "Max.'
sidebar_label: 'Messaggio di errore della gestione del carico multilivello'
---
<div className="row">
<div className="col col--6 text--center">

![Messaggio di errore della gestione del carico multilivello – Figura 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Messaggio di errore della gestione del carico multilivello – Figura 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

</div>
<div className="col col--6">

- Il gruppo di gestione del carico probabilmente non è configurato correttamente:

    come valore in caso di interruzione della connessione cloud non è selezionato "Corrente max. (per gruppo)" ("Max. Strom (pro Gruppe)")

- La configurazione per l'interruzione di Internet non è disponibile.

    [Eseguire l'aggiornamento del firmware](/konfiguration/firmware-update) almeno alla versione 0.0.25

</div>
</div>


![Messaggio di errore della gestione del carico multilivello – Figura 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Il gruppo di gestione del carico è stato creato con Pico che supportano il bilanciamento delle fasi. Ogni ulteriore Pico deve supportare anch'essa il bilanciamento delle fasi. Questa funzione può essere aggiunta con un [aggiornamento del firmware](/konfiguration/firmware-update) alla versione 0.0.34 o successiva.


![Messaggio di errore della gestione del carico multilivello – Figura 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Messaggio di errore della gestione del carico multilivello – Figura 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Nessun testo inserito nel campo "Nome" ("Name")


<div className="row">
<div className="col col--7 text--center">

![Messaggio di errore della gestione del carico multilivello – Figura 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

</div>
<div className="col col--5">

- Un gruppo di carico Pico o un hardware del contatore utilizzato in precedenza è stato eliminato lato hardware.

    L'MLM deve essere configurato di nuovo per ripristinare la funzione.

- Elimini sempre i gruppi di carico Pico interessati prima dall'albero MLM e solo dopo sull'hardware, per non compromettere la configurazione.

</div>
</div>


## A un gruppo viene sempre assegnata troppo poca corrente

Le cause possono essere le seguenti:

- La capacità non è sufficiente per tutti i gruppi --> Riduca leggermente le correnti dei gruppi per ottenere un equilibrio tra i gruppi.

- La capacità non è sufficiente per tutti i gruppi --> Riduca temporaneamente le correnti dei gruppi con l'impostazione di gruppo della corrente minima per ora.


## Ai gruppi viene sempre messa a disposizione solo la corrente in caso di interruzione di Internet

![Messaggio di errore della gestione del carico multilivello – Figura 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- L'MLM non è attivo e, per sicurezza, distribuisce quindi solo la corrente in caso di interruzione di Internet --> Attivare l'MLM ("MLM Aktivieren") e premere Salva ("Speichern").
