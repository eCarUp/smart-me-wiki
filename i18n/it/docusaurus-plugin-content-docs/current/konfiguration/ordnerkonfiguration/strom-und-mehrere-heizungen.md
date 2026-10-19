---
title: 'Elettricità e più riscaldamenti'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configurazione senza fatturazione automatica dell''elettricità'
sidebar_label: 'Elettricità e più riscaldamenti'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
## Configurazione senza fatturazione automatica dell'elettricità

Vantaggio:

- Non è necessario registrare due volte i contratti di locazione


Svantaggio:

- Nessuna fatturazione automatica per l'elettricità

- Inserimento multiplo delle tariffe elettriche (per ogni immobile)


### Elettricità con o senza mobilità elettrica e multienergia con più edifici e riscaldamenti individuali. (Complesso residenziale)

Rilevante per i RCP (raggruppamento ai fini del consumo proprio) con contatori di elettricità, contatori multienergia, più edifici e, opzionalmente, stazioni di ricarica.

Nelle aree con più edifici e sistemi di riscaldamento individuali bisogna creare un immobile per ogni sistema di riscaldamento. Se quindi tre edifici hanno sistemi di riscaldamento diversi, la configurazione deve essere eseguita secondo 3c.

Nota:
Se un solo edificio dispone di un riscaldamento individuale e gli altri due condividono un riscaldamento centralizzato, bastano due immobili che raggruppano opportunamente i consumatori.

Esempio:
Tre edifici con i nomi Altgasse 13, Altgasse 15+17, Altgasse 19.
Ciascuno dispone individualmente di una pompa di calore per il riscaldamento e la produzione di acqua calda sanitaria.

3c. Struttura di base

![Elettricità e più riscaldamenti – Figura 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Assegnazione dei contatori

Assegna ai nodi i contatori rilevanti con la funzione drag and drop.

Informazioni importanti sull'assegnazione:

Elettricità / Calore / Acqua

Assegna i punti di misura direttamente alle unità di conteggio solo se il destinatario della fattura dovrà poi pagare il 100% del prelievo.

Se vuoi assegnare un contatore solo in parte a un'unità di conteggio individuale, sposta il contatore in un nodo all'interno del nodo "Contatori tecnici" ("Technische Zähler").

In seguito, nel Billing, un contatore di questo tipo può essere ripartito in percentuale.

Esempi:

- Contatore generale

- Contatore di calore di un piano che serve 4 unità di conteggio


Stazioni di ricarica con smart-me Pico / Zaptec / Easee

Non assegnare le stazioni di ricarica direttamente agli appartamenti, crea piuttosto un'unità di conteggio separata per la stazione di ricarica. In questo modo i cambi di inquilino si possono gestire più facilmente.

Stazioni di ricarica di altri produttori

Le stazioni di ricarica di altri produttori non vengono gestite né conteggiate direttamente in smart-me. In questo caso crea un nodo per la partenza della mobilità elettrica e assegna al nodo il contatore della partenza. Così ottieni il consumo complessivo di tutte le stazioni di ricarica.



3c. Struttura dettagliata con contatori

![Elettricità e più riscaldamenti – Figura 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi per tempo quando un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva. 


## Configurazione con fatturazione automatica dell'elettricità

<div className="row">
<div className="col col--7">

Vantaggio:

- Fatturazione automatica per l'elettricità

- Nessuna doppia registrazione delle tariffe elettriche

Svantaggio:

- Registrazione multipla dei contratti di locazione

Per questa configurazione bisogna creare un immobile aggiuntivo solo per l'elettricità, che comprende tutti gli appartamenti dei tre edifici.

In questo immobile vengono assegnati solo i contatori di elettricità.

</div>
<div className="col col--5 text--center">

![Elettricità e più riscaldamenti – Figura 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

</div>
</div>

### Infine, crea gli allarmi per un'interruzione della connessione.

In questo modo ti accorgi per tempo quando un contatore smette di funzionare e riduci al minimo la lacuna nei dati di misura che ne deriva.
