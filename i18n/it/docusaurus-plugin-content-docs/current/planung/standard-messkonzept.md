---
title: 'Schema di misura – elettricità per gli inquilini'
slug: '/planung/standard-messkonzept'
description: 'Tariffazione dello schema di misura per l''elettricità per gli inquilini'
sidebar_label: 'Schema di misura – elettricità per gli inquilini'
symbol: 'gebaeude'
---
## Elettricità per gli inquilini

Un modello di elettricità per gli inquilini può essere costituito da un singolo edificio oppure da più edifici con lo stesso punto di allacciamento nei confronti del gestore della rete di distribuzione.

Nell'ambito dell'elettricità per gli inquilini, il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono nelle mani del gestore del modello di elettricità per gli inquilini.

Affinché questo conteggio possa essere effettuato, sono necessari l'infrastruttura adeguata e uno schema di misura completo.

**Basi:**

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione nel punto di immissione, con fattura del gestore della rete di distribuzione

<div className="bild--voll">

![Schema di misura – elettricità per gli inquilini – figura 1](/img/planung-standard-messkonzept/01_IT.png)

</div>

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (produzioni totali, consumo complessivo) è [soggetto a licenza](/planung/cloud-lizenzen).

### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura (appartamenti, pompe di calore, utenze delle parti comuni). Opzioni hardware per la misurazione dell'energia elettrica: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (piastra per contatori)](/produkte/nimbus-100a)

- Tutte le produzioni e tutti i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio fornisce la corretta somma di bilancio per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore di bilancio / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e il consumo complessivo virtuale. (+1 contatore virtuale del consumo complessivo)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)

<div className="bild--voll">

![Schema di misura – elettricità per gli inquilini – figura 2](/img/planung-standard-messkonzept/02_IT.png)

</div>

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semiprivati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale di hardware per l'esercizio pubblico e per l'esercizio privato nell'ambito dell'elettricità per gli inquilini. Con [eCarUp](https://www.ecarup.com) esistono però anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito a tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione direttamente tramite il conteggio dell'appartamento con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco del carico viene gestito direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

## Tariffazione e configurazione dello schema di misura per l'elettricità per gli inquilini

La tariffazione dello schema di misura avviene tramite il contatore di bilancio e la produzione oppure, in alternativa, tramite consumo / FV o batteria con riferimento al contatore di bilancio.

Lo schema di misura è completo non appena viene misurato il 100% di tutte le utenze e di tutte le produzioni. Il contatore di bilancio all'allacciamento dell'edificio funge da correzione e da riferimento.

### Convalida e conteggio del fornitore di energia

Le somme dell'elettricità di rete venduta corrispondono approssimativamente alla quantità di elettricità fatturata dal fornitore di energia.

La quantità di elettricità reimmessa nel registro di esportazione del contatore di bilancio corrisponde approssimativamente al valore della quantità indicata nella rimunerazione per l'immissione del fornitore di energia.

## Esempi di elettricità per gli inquilini

### Elettricità per gli inquilini in un singolo edificio

- In questo caso l'allacciamento dell'edificio è rilevante per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle parti comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati nel loro insieme all'attenzione di un'amministrazione immobiliare.

<div className="bild--voll">

![Schema di misura – elettricità per gli inquilini – figura 3](/img/planung-standard-messkonzept/03_IT.png)

</div>

### Elettricità per gli inquilini su più edifici

- Il contatore di bilancio è determinante per una perfetta precisione della tariffazione.

- In questo caso gli allacciamenti degli edifici sono rilevanti per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle parti comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati nel loro insieme all'attenzione di un'amministrazione immobiliare.

<div className="bild--voll">

![Schema di misura – elettricità per gli inquilini – figura 4](/img/planung-standard-messkonzept/04_IT.png)

</div>

### Esempio di schema

<div className="bild--voll">

![Schema di misura – elettricità per gli inquilini – figura 5](/img/planung-standard-messkonzept/05_IT.png)

</div>
