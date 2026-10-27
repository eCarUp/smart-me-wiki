---
title: 'RCP Raggruppamento ai fini del consumo proprio'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Raggruppamento ai fini del consumo proprio (RCP)'
sidebar_label: 'RCP Raggruppamento ai fini del consumo proprio'
symbol: 'gebaeude'
---
## Raggruppamento ai fini del consumo proprio (RCP)

<div className="row">
<div className="col col--7">

Un raggruppamento ai fini del consumo proprio può essere costituito da un singolo edificio oppure da più edifici con lo stesso punto di allacciamento nei confronti dell'azienda elettrica.

All'interno dell'RCP, il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono di competenza dei gestori dell'RCP.

Affinché questo conteggio possa essere effettuato, sono necessari l'infrastruttura adeguata e uno schema di misura coerente per le rispettive energie.

Principi di base

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione (GRD) al punto di immissione con fattura del GRD

</div>
<div className="col col--5 text--center">

![RCP Raggruppamento ai fini del consumo proprio – Figura 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>
</div>

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (produzioni sommate, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni registro\-contatore M-Bus o LoRa che deve essere conteggiato vale come punto di misura (contatore combinato calore / freddo = 2 licenze) ed è quindi [soggetto a licenza](/planung/cloud-lizenzen), ma non il gateway M-Bus stesso. I registri non utilizzati possono essere impostati come inattivi.


### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura. (Appartamenti, pompe di calore, utenze generali)
    Opzioni hardware per la misurazione dell'energia elettrica
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (piastra contatore)](/produkte/nimbus-100a)

- Tutte le produzioni e tutti i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio / dell'area costituisce la corretta somma di bilancio per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore dell'area / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e un consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)


![RCP Raggruppamento ai fini del consumo proprio – Figura 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale tra hardware per l'esercizio pubblico e per l'esercizio privato nell'RCP. Con [eCarUp](https://www.ecarup.com) esistono tuttavia anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito a tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione direttamente nel conteggio dell'appartamento con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco del carico viene gestito direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).


### Calore e acqua

- Misurazione di hardware di terzi tramite [LoRa](/produkte/lora-gateway-software) o [M-Bus](/produkte/m-bus-gateway) o [API](/schnittstellen/api)

- Supporta l'hardware già installato e quello nuovo dei fornitori abituali Neovac, Techem, GWF, ISTA o Brunata e altri.

- Vengono misurati i contatori totali della produzione oppure i contatori di consumo nelle unità di conteggio, oppure entrambi, ad es. nel caso di Minergie.

- Conteggio tramite l'integrazione smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Pianifichi ora il Suo progetto con il nostro configuratore

Sulla base delle Sue indicazioni, il Projektkonfigurator crea la distinta dei materiali con tutti i prodotti smart-me, il numero di punti di misura e uno schema visivo per la verifica.

Ideale per progettisti ed elettricisti specializzati.

[Projektkonfigurator](/planung/projektkonfigurator)

## Esempi di RCP

### RCP come edificio singolo

- In questo caso l'allacciamento dell'edificio è rilevante per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle utenze generali e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati nel loro insieme all'attenzione di un'amministrazione immobiliare.


![RCP Raggruppamento ai fini del consumo proprio – Figura 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### RCP come soluzione d'area

- Il punto di misura dell'area è determinante per una precisione di tariffazione perfetta

- In questo caso gli allacciamenti degli edifici sono rilevanti per il controllo dinamico dell'infrastruttura degli edifici, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle utenze generali e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati nel loro insieme all'attenzione di un'amministrazione immobiliare.


![RCP Raggruppamento ai fini del consumo proprio – Figura 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Esempio di schema

![RCP Raggruppamento ai fini del consumo proprio – Figura 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
