---
title: 'Immobile con elettricità e calore / acqua'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Immobile con elettricità e calore / acqua'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti degli inquilini


Svantaggio:

- Nessuna fatturazione automatica dell'elettricità

- Inserimento multiplo delle tariffe elettriche (per immobile)


### 3b. Elettricità con o senza mobilità elettrica e multienergia con un edificio.

Possibili differenze: negli immobili con soli contatori elettrici, senza multienergia, la pompa di calore può essere assegnata direttamente agli appartamenti con una chiave di ripartizione. In caso di multienergia, la pompa di calore viene registrata come sottocontatore (cartella separata), in modo da generare una fattura separata, che deve poi essere riportata come fattore di costo nella configurazione VEWA.

3b. Struttura di base

![Immobile con elettricità e calore / acqua – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Assegnazione dei contatori

Assegna i contatori rilevanti ai nodi con la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà poi pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo in parte a una singola unità di conteggio, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technischen Zähler").

In seguito, nel Billing, un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino si gestiscono più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica e assegna il contatore di partenza al nodo. In questo modo ottieni il consumo complessivo di tutte le stazioni di ricarica.



3b. Struttura dettagliata con contatori

![Immobile con elettricità e calore / acqua – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi per tempo se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva. 


## Configurazione con fatturazione automatica dell'elettricità

Vantaggio:

- Fatturazione automatica dell'elettricità

- Nessuna doppia registrazione delle tariffe elettriche


Svantaggio:

- Registrazione multipla dei contratti degli inquilini


### Prossimamente

Avvertenza:

Per questa configurazione occorre creare un immobile aggiuntivo solo per l'elettricità, che comprende tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati solo i contatori elettrici.

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi per tempo se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva.
