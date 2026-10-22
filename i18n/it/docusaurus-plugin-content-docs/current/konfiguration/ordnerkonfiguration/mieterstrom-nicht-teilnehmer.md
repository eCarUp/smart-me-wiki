---
title: 'Elettricità per gli inquilini con non partecipanti'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer'
description: 'Struttura delle cartelle per l''elettricità per gli inquilini in Germania secondo lo schema di misura MKD3, quando singole parti continuano a prelevare dal fornitore di energia.'
sidebar_label: 'Elettricità per gli inquilini con non partecipanti'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Singole parti non partecipano

Questa struttura vale per lo [schema di misura MKD3](/planung/mkd3-messkonzept-nicht-teilnehmer): a valle dell'allacciamento dell'edificio sono collegati sia partecipanti all'elettricità per gli inquilini sia parti che continuano a prelevare la propria elettricità direttamente dal fornitore di energia.

La differenza rispetto alla struttura standard non sta nella forma dell'albero delle cartelle, ma in **chi vi viene conteggiato e quali contatori formano il bilancio**. La partecipazione non è una proprietà del contatore, bensì del contratto: la struttura deve poterlo rappresentare, anche se una parte cambia nel corso dell'anno.

![smart-me Billing per l'elettricità per gli inquilini in Germania – Figura 2](/img/konfiguration-billing-mieterstrom/02.png)


## Struttura delle cartelle

- 1 cartella per l'immobile (ad es. Hauptstrasse 7 Mieterstrom)

    - 1 sottocartella per ogni unità di conteggio **partecipante**

    - 1 sottocartella «Generale» (Allgemein) per vano scale, illuminazione esterna e partenze simili

    - 1 sottocartella «Non partecipanti» (Nicht Teilnehmer) per le parti al di fuori dell'elettricità per gli inquilini

    - 1 sottocartella «Contatori tecnici» (Technische Zähler) per tutto ciò che viene ripartito proporzionalmente

Il nodo «Non partecipanti» non viene conteggiato. Esiste affinché i contatori di queste parti restino visibili e possano essere spostati in caso di cambio di contratto senza modificare la struttura.

## Assegnazione dei contatori

Come nello standard: assegnali direttamente all'unità di conteggio se il destinatario della fattura sostiene l'intero prelievo, altrimenti inseriscili nel nodo «Contatori tecnici».

### Produzione e bilancio: qui sta la differenza

Con lo schema MKD3 il contatore dell'allacciamento dell'edificio **non** viene referenziato come contatore di bilancio. Misura anche il consumo dei non partecipanti e falserebbe il bilancio.

Invece:

- **Bilancio** (Bilanz) — tutti gli appartamenti e i posteggi partecipanti e la produzione

- **Produzione** (Produktion) — tutti i contatori di produzione dell'impianto solare

- **Contatore dell'allacciamento dell'edificio** (Hausanschlusszähler) — solo per la verifica successiva, non nella tariffazione


### Cosa significa per il conteggio

Con lo schema MKD3 la somma dell'elettricità di rete venduta **non** corrisponde alla fattura del fornitore di energia, e la quantità immessa in rete non corrisponde al valore del contatore dell'allacciamento dell'edificio. È previsto: la rimunerazione per i non partecipanti avviene una sola volta per periodo di conteggio.

Non aspettarti quindi che i numeri coincidano al chilowattora: la verifica si svolge diversamente rispetto allo schema di misura standard.

### Stazioni di ricarica

Un'unità di conteggio propria per ogni stazione di ricarica, da non assegnare all'appartamento. Se un non partecipante dispone di una propria stazione di ricarica, questa va inserita nel nodo «Non partecipanti».

### Infine crea gli allarmi per un'interruzione della connessione

In questo modo ti accorgi presto se un contatore smette di funzionare e mantieni ridotta la lacuna nei dati di misura.
