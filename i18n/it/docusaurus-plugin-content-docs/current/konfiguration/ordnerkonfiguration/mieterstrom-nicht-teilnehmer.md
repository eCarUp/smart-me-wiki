---
title: 'Elettricità per gli inquilini con non partecipanti'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer'
description: 'Struttura delle cartelle per l''elettricità per gli inquilini tedesca secondo lo schema di misura MKD3, quando singole parti continuano a prelevare dal fornitore di energia.'
sidebar_label: 'Elettricità per gli inquilini con non partecipanti'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configurazione di contatori e cartelle</Menueweg>

### Singole parti non partecipano

Questa struttura vale per lo [schema di misura MKD3](/planung/mkd3-messkonzept-nicht-teilnehmer): dietro l'allacciamento domestico sono collegati sia i partecipanti all'elettricità per gli inquilini sia le parti che continuano a prelevare la loro elettricità direttamente dal fornitore di energia.

La differenza rispetto alla struttura standard non sta nella forma dell'albero delle cartelle, ma in **chi viene conteggiato al suo interno e quali contatori formano il bilancio**. La partecipazione non è una proprietà del contatore, ma del contratto: la struttura deve poterlo rappresentare, anche se una parte cambia nel corso dell'anno.

![smart-me Billing per l'elettricità per gli inquilini tedesca – Figura 2](/img/konfiguration-billing-mieterstrom/02.png)


## Struttura delle cartelle

- 1 cartella per l'immobile (ad es. Hauptstrasse 7 Mieterstrom)

    - 1 sottocartella per ogni unità di conteggio **partecipante**

    - 1 sottocartella «Generale» (Allgemein) per vano scale, illuminazione esterna e derivazioni simili

    - 1 sottocartella «Non partecipanti» (Nicht Teilnehmer) per le parti al di fuori dell'elettricità per gli inquilini

    - 1 sottocartella «Contatori tecnici» (Technische Zähler) per tutto ciò che viene ripartito proporzionalmente

Il nodo «Non partecipanti» non viene conteggiato. Esiste affinché i contatori di queste parti restino visibili e, in caso di cambio di contratto, possano essere spostati senza modificare la struttura.

## Assegnazione dei contatori

Come nello standard: assegna il contatore direttamente all'unità di conteggio se il destinatario della fattura sostiene l'intero prelievo, altrimenti inseriscilo nel nodo «Contatori tecnici».

### Produzione e bilancio: qui sta la differenza

Con l'MKD3 il contatore dell'allacciamento domestico **non** viene referenziato come contatore di bilancio. Misura anche il consumo dei non partecipanti e falserebbe il bilancio.

Invece:

- **Bilancio**: tutti gli appartamenti partecipanti, i posteggi e la produzione

- **Produzione**: tutti i contatori di produzione dell'impianto solare

- **Contatore dell'allacciamento domestico**: solo per la verifica successiva, non nella tariffazione


### Cosa significa per il conteggio

Con l'MKD3 la somma dell'elettricità di rete venduta **non** corrisponde alla fattura del fornitore di energia, e la quantità immessa in rete non corrisponde al valore del contatore dell'allacciamento domestico. È previsto così: la rimunerazione per i non partecipanti avviene una sola volta per ogni periodo di conteggio.

Non aspettarti quindi che i valori coincidano esattamente al kilowattora: la verifica funziona diversamente rispetto allo schema di misura standard.

### Stazioni di ricarica

Un'unità di conteggio propria per ogni stazione di ricarica, da non assegnare all'appartamento. Per un non partecipante con una propria stazione di ricarica, questa va inserita nel nodo «Non partecipanti».

### Infine, crea gli allarmi per un'interruzione della connessione

Così ti accorgi tempestivamente se un contatore smette di funzionare e mantieni ridotta la lacuna nei dati di misura.
