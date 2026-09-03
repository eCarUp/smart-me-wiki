---
title: 'Immobile solo con elettricità'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Solo elettricità con o senza mobilità elettrica in singoli edifici o complessi residenziali'
sidebar_label: 'Immobile solo con elettricità'
---
### Solo elettricità con o senza mobilità elettrica in singoli edifici o complessi residenziali

Rilevante per RCP (raggruppamento ai fini del consumo proprio) con contatore elettrico e, facoltativamente, stazioni di ricarica.

Struttura delle cartelle per smart-me Billing elettricità

Struttura delle cartelle: la suddivisione su due livelli è obbligatoria.

In questo punto viene impostato un conteggio che comprende tutti gli appartamenti, i locali e i posteggi come cartelle subordinate con i relativi contatori elettrici

- 1 cartella per l'immobile (ad es. Altgasse ZEV)

    - 1 sottocartella per unità di conteggio, quindi per appartamento o per destinatario della fattura. La nostra proposta per la denominazione delle cartelle


Denominazione delle unità di conteggio (consigli):

- -   RCP con un solo edificio: denominazione dell'appartamento (ad es. APP piano sup. sinistra, APP piano sup. destra, ecc....)

    - RCP con più edifici: denominazione della casa e denominazione dell'appartamento (ad es. Altgasse 13 APP piano sup. sinistra, Altgasse13 APP piano sup. destra, ecc....)


3a. Struttura di base

![Immobile solo con elettricità – Figura 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Assegnazione dei contatori

Assegna ai nodi i contatori rilevanti con la funzione drag and drop.

Informazione importante sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo a una parte di una singola unità di conteggio, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" (Technische Zähler).

Successivamente, nel Billing un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, ma crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite o conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica come unità di conteggio e assegna al nodo il contatore della partenza. In questo modo ottieni il costo complessivo per tutte le stazioni di ricarica.



3a. Struttura dettagliata con contatori

![Immobile solo con elettricità – Figura 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Crea infine gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente quando un contatore non funziona più e riduci al minimo la lacuna nei dati di misura che ne deriva. 

### Passo successivo

[Continua con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)
