---
title: 'Elettricità e più riscaldamenti'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Elettricità e più riscaldamenti'
---
## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti degli inquilini


Svantaggio:

- Nessuna fatturazione automatica dell'elettricità

- Inserimento multiplo delle tariffe elettriche (per immobile)


### Elettricità con o senza mobilità elettrica e multienergia con più edifici e riscaldamenti individuali. (Complesso residenziale)

Rilevante per gli RCP (raggruppamento ai fini del consumo proprio) con contatori di elettricità, contatori multienergia, più edifici e, opzionalmente, stazioni di ricarica.

Nelle aree con più edifici e sistemi di riscaldamento individuali occorre creare un immobile per ogni sistema di riscaldamento. Se quindi tre edifici hanno sistemi di riscaldamento diversi, la configurazione deve essere eseguita secondo il punto 3c.

Nota:
Se solo un edificio dispone di un riscaldamento individuale e gli altri due condividono un riscaldamento centralizzato, bastano due immobili che raggruppino in modo adeguato gli utenti.

Esempio:
Tre edifici con i nomi Altgasse 13, Altgasse 15+17, Altgasse 19.
Ognuno dispone di una propria pompa di calore per il riscaldamento e la produzione di acqua calda sanitaria.

3c. Struttura di base

![Elettricità e più riscaldamenti – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Assegnazione dei contatori

Assegna i contatori rilevanti ai nodi con la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà in seguito pagare il 100% del prelievo.

Se desideri assegnare un contatore solo in parte a un'unità di conteggio individuale, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing, un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti; crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica e assegna il contatore di partenza al nodo. In questo modo ottieni il consumo complessivo di tutte le stazioni di ricarica.



3c. Struttura dettagliata con contatori

![Elettricità e più riscaldamenti – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva. 

### Passo successivo

[Prosegui con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)

## Configurazione con fatturazione automatica dell'elettricità

Vantaggio:

- Fatturazione automatica dell'elettricità

- Nessuna doppia registrazione delle tariffe elettriche


Svantaggio:

- Registrazione multipla dei contratti degli inquilini


Per questa configurazione occorre creare un immobile aggiuntivo solo per l'elettricità, che comprenda tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati solo i contatori di elettricità.

![Elettricità e più riscaldamenti – Figura 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente se un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva. 

### Passo successivo

[Prosegui con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)
