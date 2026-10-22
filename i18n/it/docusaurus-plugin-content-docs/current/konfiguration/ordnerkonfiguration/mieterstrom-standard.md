---
title: 'Elettricità per gli inquilini standard'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-standard'
description: 'Struttura delle cartelle per l''elettricità per gli inquilini in Germania, quando tutti i consumatori partecipano all''elettricità per gli inquilini (schema di misura standard).'
sidebar_label: 'Elettricità per gli inquilini standard'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Tutti i consumatori partecipano all'elettricità per gli inquilini

Questa struttura vale per lo [schema di misura standard](/planung/standard-messkonzept): dopo l'allacciamento dell'edificio sono collegate esclusivamente parti che partecipano all'elettricità per gli inquilini. Se anche una sola parte non partecipa, ti serve invece [Elettricità per gli inquilini con non partecipanti](/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer).


![smart-me Billing per l'elettricità per gli inquilini in Germania – Figura 1](/img/konfiguration-billing-mieterstrom/01.png)



## Struttura delle cartelle

La struttura a due livelli è obbligatoria: il conteggio viene configurato al livello più alto e richiede al di sotto una cartella per ogni destinatario della fattura.

- 1 cartella per l'immobile (ad es. Hauptstrasse 7 Mieterstrom)

    - 1 sottocartella per ogni unità di conteggio, cioè per ogni appartamento o destinatario della fattura

    - 1 sottocartella „Generale" („Allgemein") per vano scale, illuminazione esterna e utenze simili

    - 1 sottocartella „Contatori tecnici" („Technische Zähler") per tutto ciò che in seguito viene ripartito solo in quota

Denominazione delle unità di conteggio:

- Un edificio: denominazione dell'appartamento (ad es. WHG 1.1, WHG 1.2, WHG 2.1)

- Più edifici: denominazione dell'edificio e dell'appartamento (ad es. Hauptstrasse 7 WHG 1.1)

## Assegnazione dei contatori

Assegna i contatori ai nodi tramite drag and drop.

**Assegnare direttamente all'unità di conteggio**: se il destinatario della fattura paga l'intero prelievo di questo contatore.

**Nel nodo „Contatori tecnici" („Technische Zähler")**: se un contatore alimenta più unità di conteggio e in seguito viene ripartito in percentuale. Esempi: contatore delle parti comuni, pompa di calore per più appartamenti.

### Produzione e bilancio

Per lo schema di misura standard si aggiungono due ruoli che nella struttura svizzera non esistono in questa forma:

- **Contatore di bilancio** (Bilanzzähler): il contatore dell'allacciamento dell'edificio. Viene referenziato nella tariffazione.

- **Contatore di produzione** (Produktionszähler): tutti i contatori dell'impianto solare e, se presente, della batteria.

Entrambi non vengono assegnati a un appartamento, ma restano a livello dell'immobile. 

### Stazioni di ricarica

Non assegnare le stazioni di ricarica direttamente a un appartamento, ma crea per esse un'unità di conteggio dedicata. In questo modo i cambi di inquilino si possono gestire senza modificare la struttura.

Le stazioni di ricarica di altri produttori non vengono gestite direttamente in smart-me. Crea per esse un nodo per l'utenza di mobilità elettrica e assegna il contatore dell'utenza: così ottieni almeno il consumo complessivo.

### Infine, crea gli allarmi per un'interruzione della connessione

In questo modo ti accorgi presto se un contatore smette di funzionare e mantieni ridotta la lacuna nei dati di misura.
