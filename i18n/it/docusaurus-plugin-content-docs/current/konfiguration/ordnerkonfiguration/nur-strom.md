---
title: 'Immobile solo con elettricità'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Solo elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali'
sidebar_label: 'Immobile solo con elettricità'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Solo elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali

Rilevante per i RCP (raggruppamento ai fini del consumo proprio) con contatori elettrici e, facoltativamente, stazioni di ricarica.

Struttura delle cartelle per lo smart-me Billing elettricità

Struttura delle cartelle: la struttura a due livelli è obbligatoria.

A questo livello viene configurato un conteggio, che comprende tutti gli appartamenti, i locali e i posteggi come cartelle subordinate con i relativi contatori elettrici

- 1 cartella per l'immobile (ad es. Altgasse RCP)

    - 1 sottocartella per ogni unità di conteggio, cioè per appartamento o destinatario della fattura. La nostra proposta per la denominazione delle cartelle


Denominazione delle unità di conteggio (consigli):

- -   RCP con un edificio: denominazione dell'appartamento (ad es. WHG OG Links, WHG OG, rechts, ecc....)

    - RCP con più edifici:  denominazione dell'edificio e denominazione dell'appartamento (ad es. Altgasse 13 WHG OG Links, Altgasse13 WHG OG, rechts, ecc....)


3a. Struttura di base

![Immobile solo con elettricità – figura 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assegnazione dei contatori

Assegna ai nodi i contatori rilevanti con la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà poi pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo in parte a una singola unità di conteggio, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technischen Zähler").

In seguito, nel Billing un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore delle parti comuni

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, ma crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica come unità di conteggio e assegna il contatore di partenza al nodo. In questo modo ottieni il consumo complessivo di tutte le stazioni di ricarica.



3a. Struttura dettagliata con contatori

![Immobile solo con elettricità – figura 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva.
