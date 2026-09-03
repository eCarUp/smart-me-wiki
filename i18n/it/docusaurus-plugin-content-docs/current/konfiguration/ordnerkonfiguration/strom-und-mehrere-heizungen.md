---
title: 'Elettricità e più impianti di riscaldamento'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Elettricità e più impianti di riscaldamento'
---
## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti degli inquilini


Svantaggio:

- Nessuna fatturazione automatica per l'elettricità

- Registrazione multipla delle tariffe elettriche (per ogni immobile)


### Elettricità con o senza mobilità elettrica e multienergia con più edifici e impianti di riscaldamento individuali. (Complesso residenziale)

Rilevante per RCP (raggruppamento ai fini del consumo proprio) con contatore di elettricità, contatore multienergia, più edifici e, facoltativamente, stazioni di ricarica.

Nei comprensori con più edifici e impianti di riscaldamento individuali occorre creare un immobile per ogni impianto di riscaldamento. Se quindi tre edifici hanno impianti di riscaldamento diversi, la configurazione deve essere eseguita secondo il punto 3c.

Nota:
Se solo un edificio dispone di un riscaldamento individuale e gli altri due condividono un riscaldamento centralizzato, sono sufficienti due immobili che raggruppino gli utenti in modo adeguato.

Esempio:
Tre edifici con i nomi Altgasse 13, Altgasse 15+17, Altgasse 19.
Tutti dispongono individualmente di una pompa di calore per il riscaldamento e la produzione di acqua calda sanitaria.

3c. Struttura di base

![Elettricità e più impianti di riscaldamento – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Assegnazione dei contatori

Assegna i contatori rilevanti ai nodi con la funzione di trascinamento (drag and drop).

Informazione importante sull'assegnazione:

Elettricità / calore / acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo a una parte di un'unità di conteggio individuale, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino possono essere gestiti più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica e assegna il contatore di partenza al nodo. In questo modo ottieni il consumo complessivo di tutte le stazioni di ricarica.



3c. Struttura dettagliata con i contatori

![Elettricità e più impianti di riscaldamento – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Per concludere, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente quando un contatore si guasta e riduci al minimo la lacuna nei dati di misura che ne consegue.

### Passo successivo

[Continua con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)

## Configurazione con fatturazione automatica dell'elettricità

Vantaggio:

- Fatturazione automatica per l'elettricità

- Nessuna doppia registrazione delle tariffe elettriche


Svantaggio:

- Registrazione multipla dei contratti degli inquilini


Per questa configurazione occorre creare un immobile aggiuntivo destinato unicamente all'elettricità, che comprenda tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati soltanto i contatori di elettricità.

![Elettricità e più impianti di riscaldamento – Figura 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Per concludere, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi tempestivamente quando un contatore si guasta e riduci al minimo la lacuna nei dati di misura che ne consegue.

### Passo successivo

[Continua con la creazione degli allarmi](/konfiguration/wenndann-aktionen/alarme)
