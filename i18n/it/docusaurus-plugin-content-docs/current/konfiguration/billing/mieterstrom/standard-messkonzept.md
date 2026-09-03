---
title: 'Schema di misura standard'
slug: '/konfiguration/billing/mieterstrom/standard-messkonzept'
description: 'Tariffazione dello schema di misura standard'
sidebar_label: 'Schema di misura standard'
---
![Schema di misura standard – Figura 1](/img/konfiguration-billing-mieterstrom-standard-messkonzept/01.png)

## Tariffazione dello schema di misura standard

La tariffazione dello schema di misura avviene tramite contatore di bilancio e produzione oppure, in alternativa, tramite consumo / FV o batteria con riferimento al contatore di bilancio.

### Tariffazione con tariffa solare incl. vRCP

Il contatore di bilancio viene referenziato per il calcolo della tariffazione.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio

Il contatore dell'allacciamento domestico viene referenziato come contatore di bilancio.

![Schema di misura standard – Figura 2](/img/konfiguration-billing-mieterstrom-standard-messkonzept/02.png)

Contatore di produzione

Tutti i contatori di produzione e i contatori della batteria vengono registrati come produzione.

![Schema di misura standard – Figura 3](/img/konfiguration-billing-mieterstrom-standard-messkonzept/03.png)

### Tariffazione mediante tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; verrà considerato in seguito solo per la verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale, composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Appartamento 2.1 + Generale + Posteggio 1 + Posteggio 2 + Pompa di calore

Sotto produzione viene aggiunto rispettivamente il contatore dell'impianto solare o il contatore della batteria nel caso della tariffa batteria.

Nel campo del consumo totale viene inserito il consumo totale creato virtualmente.

Il contatore di bilancio viene qui referenziato intenzionalmente per aumentare la precisione!

![Schema di misura standard – Figura 4](/img/konfiguration-billing-mieterstrom-standard-messkonzept/04.png)

### Validazione e conteggio dell'azienda elettrica

Le somme dell'elettricità di rete venduta corrispondono approssimativamente alla quantità di elettricità fatturata dall'azienda elettrica

La quantità di elettricità immessa nel registro di esportazione del contatore di bilancio corrisponde approssimativamente al valore della quantità nella rimunerazione per l'immissione dell'azienda elettrica.
