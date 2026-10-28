---
title: 'Immobile solo con elettricità'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Solo elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali'
sidebar_label: 'Immobile solo con elettricità'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configurazione di contatori e cartelle</Menueweg>

### Solo elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali

Rilevante per i RCP (raggruppamento ai fini del consumo proprio) con contatori elettrici e, facoltativamente, stazioni di ricarica.

Struttura delle cartelle per lo smart-me Billing elettricità

Struttura delle cartelle: la struttura a due livelli è obbligatoria.

A questo livello viene configurato un conteggio, che comprende tutti gli appartamenti, i locali e i parcheggi come cartelle subordinate con i relativi contatori elettrici.

- 1 cartella per l'immobile (ad es. Altgasse RCP)

    - 1 sottocartella per ogni unità di conteggio, quindi per ogni appartamento o destinatario della fattura. La nostra proposta per la denominazione delle cartelle


Denominazione delle unità di conteggio (consigli):

- -   RCP con un solo edificio: denominazione dell'appartamento (ad es. APP 1° piano sinistra, APP 1° piano destra, ecc....)

    - RCP con più edifici: denominazione della casa e dell'appartamento (ad es. Altgasse 13 APP 1° piano sinistra, Altgasse13 APP 1° piano destra, ecc....)


3a. Struttura di base

![Immobile solo con elettricità – Figura 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assegnazione dei contatori

Assegni i contatori rilevanti ai nodi tramite la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / calore / acqua

Assegni i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà successivamente pagare il 100% del prelievo.

Se desidera assegnare un contatore solo in parte a una singola unità di conteggio, sposti il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing, un tale contatore può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegni le stazioni di ricarica direttamente agli appartamenti, crei piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso, crei un nodo per la partenza della mobilità elettrica come unità di conteggio e assegni il contatore di partenza al nodo. In questo modo ottiene il consumo complessivo di tutte le stazioni di ricarica.



3a. Struttura dettagliata con contatori

![Immobile solo con elettricità – Figura 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Infine, crei gli allarmi per un'interruzione della connessione.

In questo modo si accorge per tempo se un contatore smette di funzionare e riduce al minimo la lacuna nei dati di misura che ne deriva.
