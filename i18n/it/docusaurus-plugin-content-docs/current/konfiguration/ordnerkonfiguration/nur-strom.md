---
title: 'Immobile con sola elettricità'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Sola elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali'
sidebar_label: 'Immobile con sola elettricità'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configurazione di contatori e cartelle</Menueweg>

### Sola elettricità con o senza mobilità elettrica in edifici singoli o complessi residenziali

Rilevante per RCP (raggruppamenti ai fini del consumo proprio) con contatori elettrici e, opzionalmente, stazioni di ricarica.

Struttura delle cartelle per lo smart-me Billing elettricità

Struttura delle cartelle: la struttura su due livelli è obbligatoria.

A questo livello viene impostato un conteggio, che comprende come sottocartelle tutti gli appartamenti, i locali e i posteggi con i relativi contatori elettrici.

- 1 cartella per l'immobile (ad es. Altgasse RCP)

    - 1 sottocartella per ogni unità di conteggio, ossia per ogni appartamento o destinatario della fattura. La nostra proposta per la denominazione delle cartelle


Denominazione delle unità di conteggio (suggerimenti):

- -   RCP con un solo edificio: denominazione dell'appartamento (ad es. APP 1P sinistra, APP 1P destra, ecc.)

    - RCP con più edifici: denominazione dell'edificio e dell'appartamento (ad es. Altgasse 13 APP 1P sinistra, Altgasse 13 APP 1P destra, ecc.)


3a. Struttura di base

![Immobile con sola elettricità – Figura 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assegnazione dei contatori

Assegna i contatori rilevanti ai nodi tramite la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà poi pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo in parte a una singola unità di conteggio, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing, un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore delle parti comuni

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, ma crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino sono più semplici da gestire.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica come unità di conteggio e assegna il contatore di partenza al nodo. Così ottieni il consumo complessivo di tutte le stazioni di ricarica.



3a. Struttura dettagliata con contatori

![Immobile con sola elettricità – Figura 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva.
