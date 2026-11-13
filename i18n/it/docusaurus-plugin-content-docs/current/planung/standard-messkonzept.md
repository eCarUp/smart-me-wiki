---
title: 'Schema di misura per l''elettricità per gli inquilini'
slug: '/planung/standard-messkonzept'
description: 'Tariffazione dello schema di misura per l''elettricità per gli inquilini'
sidebar_label: 'Schema di misura elettricità per gli inquilini'
symbol: 'gebaeude'
---
## Elettricità per gli inquilini

Un modello di elettricità per gli inquilini può comprendere un singolo edificio oppure più edifici con lo stesso punto di allacciamento nei confronti del gestore della rete di distribuzione.

Nell'ambito dell'elettricità per gli inquilini, il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono di competenza del gestore del modello di elettricità per gli inquilini.

Per poter effettuare questo conteggio occorrono l'infrastruttura necessaria e uno schema di misura completo.

**Principi:**

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione al punto di immissione, con fattura del gestore della rete di distribuzione

<div className="bild--voll">

![Schema di misura per l'elettricità per gli inquilini – Figura 1](/img/planung-standard-messkonzept/01_IT.png)

</div>

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (somma delle produzioni, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura (appartamenti, pompe di calore, utenze comuni). Opzioni hardware per la misurazione dell'energia elettrica: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (piastra per contatore)](/produkte/nimbus-100a)

- Tutte le produzioni e tutti i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio fornisce la somma di bilancio corretta per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per la gestione dinamica delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore di bilancio / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e un consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)

<div className="bild--voll">

![Schema di misura per l'elettricità per gli inquilini – Figura 2](/img/planung-standard-messkonzept/02_IT.png)

</div>

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale tra hardware per l'esercizio pubblico ed esercizio privato nell'ambito dell'elettricità per gli inquilini. Con [eCarUp](https://www.ecarup.com) sono tuttavia disponibili anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito con tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione direttamente nel conteggio dell'appartamento con [smart-me Billing](/konfiguration/billing).

- La gestione delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidate all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco dei carichi viene realizzato direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

## Tariffazione e configurazione dello schema di misura per l'elettricità per gli inquilini

La tariffazione dello schema di misura avviene tramite il contatore di bilancio e la produzione oppure, in alternativa, tramite consumo / FV o batteria con riferimento al contatore di bilancio.

Lo schema di misura è completo non appena viene misurato il 100% di tutte le utenze e di tutte le produzioni. Il contatore di bilancio all'allacciamento dell'edificio funge da correzione e da riferimento.

### Validazione e conteggio dell'azienda elettrica

Le somme dell'elettricità di rete venduta corrispondono approssimativamente alla quantità di elettricità fatturata dall'azienda elettrica.

La quantità di elettricità reimmessa nel registro di esportazione del contatore di bilancio corrisponde approssimativamente alla quantità indicata nella rimunerazione per l'immissione dell'azienda elettrica.

## Esempi di elettricità per gli inquilini

### Elettricità per gli inquilini in un singolo edificio

- In questo caso l'allacciamento dell'edificio è rilevante per la gestione dinamica dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.

<div className="bild--voll">

![Schema di misura per l'elettricità per gli inquilini – Figura 3](/img/planung-standard-messkonzept/03_IT.png)

</div>

### Elettricità per gli inquilini su più edifici

- Il contatore di bilancio è determinante per una perfetta precisione della tariffazione.

- In questo caso gli allacciamenti degli edifici sono rilevanti per la gestione dinamica dell'infrastruttura degli edifici, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.

<div className="bild--voll">

![Schema di misura per l'elettricità per gli inquilini – Figura 4](/img/planung-standard-messkonzept/04_IT.png)

</div>

### Esempio di schema

<div className="bild--voll">

![Schema di misura per l'elettricità per gli inquilini – Figura 5](/img/planung-standard-messkonzept/05_IT.png)

</div>
