---
title: 'Messaggio di errore gestione del carico multilivello'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Il gruppo di gestione del carico probabilmente non è configurato correttamente: come valore in caso di interruzione della connessione cloud non è selezionato "Corrente max.'
sidebar_label: 'Messaggio di errore gestione del carico multilivello'
---
![Messaggio di errore gestione del carico multilivello – Figura 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Messaggio di errore gestione del carico multilivello – Figura 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

- Il gruppo di gestione del carico probabilmente non è configurato correttamente:
    come valore in caso di interruzione della connessione cloud non è selezionato "Corrente max. (per gruppo)" (Max. Strom (pro Gruppe))

- La configurazione per l'interruzione di Internet non è disponibile.
    [Eseguire l'aggiornamento del firmware](/konfiguration/firmware-update) almeno alla versione 0.0.25


![Messaggio di errore gestione del carico multilivello – Figura 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Il gruppo di gestione del carico è stato creato con Pico che supportano il bilanciamento delle fasi. Ogni ulteriore Pico deve supportare anch'essa il bilanciamento delle fasi. Questa funzione può essere aggiunta con un [aggiornamento del firmware](/konfiguration/firmware-update) alla versione 0.0.34 o superiore.


![Messaggio di errore gestione del carico multilivello – Figura 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Messaggio di errore gestione del carico multilivello – Figura 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Nessun testo inserito nel campo "Nome" (Name)


![Messaggio di errore gestione del carico multilivello – Figura 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

- Un gruppo di carico Pico o un hardware del contatore utilizzato in precedenza è stato eliminato a livello hardware.
    Il MLM deve essere riconfigurato per ripristinare la funzione.

- Elimina i gruppi di carico Pico interessati sempre prima dall'albero MLM e solo dopo sull'hardware, per non compromettere la configurazione.


## A un gruppo viene sempre assegnata troppo poca corrente

Le cause possono essere le seguenti:

- Non c'è capacità sufficiente per tutti i gruppi --> Riduci un po' le correnti dei gruppi per ottenere un equilibrio tra i gruppi.

- Non c'è capacità sufficiente per tutti i gruppi --> Riduci temporaneamente le correnti dei gruppi con l'impostazione di gruppo della corrente minima per ora.


## Ai gruppi viene messa a disposizione sempre solo la corrente per l'interruzione di Internet

![Messaggio di errore gestione del carico multilivello – Figura 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- Il MLM non è attivo e per sicurezza distribuisce quindi solo la corrente per l'interruzione di Internet --> Attivare il MLM e premere Salva (Speichern).
