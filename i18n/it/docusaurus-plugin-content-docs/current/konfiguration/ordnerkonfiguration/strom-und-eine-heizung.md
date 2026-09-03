---
title: 'Immobile con elettricità e calore / acqua'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Immobile con elettricità e calore / acqua'
---
## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti degli inquilini


Svantaggio:

- Nessuna fatturazione automatica per l'elettricità

- Registrazione multipla delle tariffe elettriche (per immobile)


### 3b. Elettricità con o senza e-mobilità e multienergia con un edificio.

Possibili differenze: negli immobili con soli contatori elettrici senza multienergia, la pompa di calore può essere assegnata direttamente agli appartamenti con una chiave di ripartizione. Con la multienergia, la pompa di calore viene registrata come sottocontatore (cartella separata), affinché venga creato un conteggio separato che deve poi essere trasferito come fattore di costo nella configurazione VEWA.

3b. Struttura di base

![Immobile con elettricità e calore / acqua – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Assegnazione dei contatori

Assegna i contatori rilevanti ai nodi con la funzione drag and drop.

Informazione importante sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà pagare in seguito il 100% del prelievo.

Se vuoi assegnare i contatori solo a una parte di una singola unità di conteggio, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" (Technische Zähler).

In seguito, nel Billing, un contatore di questo tipo può essere ripartito percentualmente.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, ma crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite o conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza e-mobilità e assegna il contatore di partenza al nodo. In questo modo ottieni il consumo complessivo di tutte le stazioni di ricarica.



3b. Struttura dettagliata con i contatori

![Immobile con elettricità e calore / acqua – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Crea infine gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente quando un contatore si guasta e riduci al minimo la lacuna nei dati di misura che ne consegue.

### Passo successivo

[Continua con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)

## Configurazione con fatturazione automatica dell'elettricità

Vantaggio:

- Fatturazione automatica per l'elettricità

- Nessuna doppia registrazione delle tariffe elettriche


Svantaggio:

- Registrazione multipla dei contratti degli inquilini


### Comming soon

Disclaimer:

Per questa configurazione è necessario creare un immobile aggiuntivo solo per l'elettricità, che comprenda tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati solo i contatori elettrici.

### Crea infine gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente quando un contatore si guasta e riduci al minimo la lacuna nei dati di misura che ne consegue.

### Passo successivo

[Continua con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)
