---
title: 'Immobile con elettricità e calore / acqua'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Immobile con elettricità e calore / acqua'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configurazione di contatori e cartelle</Menueweg>

## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti di locazione


Svantaggio:

- Nessuna fatturazione automatica per l'elettricità

- Inserimento multiplo delle tariffe elettriche (per immobile)


### 3b. Elettricità con o senza mobilità elettrica e multienergia con un edificio.

Possibili differenze: negli immobili con soli contatori di elettricità senza multienergia, la pompa di calore può essere assegnata direttamente agli appartamenti con una chiave di ripartizione. In caso di multienergia, la pompa di calore viene registrata come sottocontatore (cartella separata), in modo che venga emessa una fattura separata, che deve poi essere riportata come fattore di costo nella configurazione CISE (Conteggio individuale delle spese dell'energia e dell'acqua).

3b. Struttura di base

![Immobile con elettricità e calore / acqua – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Assegnazione dei contatori

Assegni ai nodi i contatori pertinenti con la funzione drag and drop.

Informazione importante sull'assegnazione:

Elettricità / calore / acqua

Assegni i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà in seguito pagare il 100% del prelievo.

Se desidera assegnare un contatore solo in parte a una singola unità di conteggio, sposti il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing, un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore delle parti comuni

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegni le stazioni di ricarica direttamente agli appartamenti, ma crei piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crei un nodo per la partenza della mobilità elettrica e assegni il contatore di partenza al nodo. Così ottiene il consumo complessivo di tutte le stazioni di ricarica.



3b. Struttura dettagliata con contatori

![Immobile con elettricità e calore / acqua – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Infine, crei gli allarmi per un'interruzione della connessione.

In questo modo si accorge per tempo se un contatore smette di funzionare e riduce al minimo la lacuna nei dati di misura che ne deriva. 


## Configurazione con fatturazione automatica dell'elettricità

Vantaggio:

- Fatturazione automatica per l'elettricità

- Nessuna doppia registrazione delle tariffe elettriche


Svantaggio:

- Registrazione multipla dei contratti di locazione


### Prossimamente

Avvertenza:

Per questa configurazione occorre creare un immobile aggiuntivo solo per l'elettricità, che comprenda tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati solo i contatori di elettricità.

### Infine, crei gli allarmi per un'interruzione della connessione.

In questo modo si accorge per tempo se un contatore smette di funzionare e riduce al minimo la lacuna nei dati di misura che ne deriva.
