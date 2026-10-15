---
title: 'RCP raggruppamento ai fini del consumo proprio'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Raggruppamento ai fini del consumo proprio (RCP)'
sidebar_label: 'RCP raggruppamento ai fini del consumo proprio'
---
## Raggruppamento ai fini del consumo proprio (RCP)

<div className="row">
<div className="col col--7">

Un raggruppamento ai fini del consumo proprio può essere costituito da un singolo edificio o da più edifici con lo stesso punto di allacciamento verso l'azienda elettrica.

All'interno del RCP, il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono di competenza dei gestori del RCP.

Per poter effettuare questo conteggio sono necessari l'infrastruttura adeguata e uno schema di misura completo per le rispettive energie.

Principi di base

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione nel punto di immissione con fattura del gestore della rete di distribuzione

</div>
<div className="col col--5 text--center">

![RCP raggruppamento ai fini del consumo proprio – Figura 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>
</div>

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (somme di produzione, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni registro\-contatore M-Bus o LoRa che deve essere conteggiato vale come punto di misura (contatore combinato calore / freddo = 2 licenze) ed è quindi [soggetto a licenza](/planung/cloud-lizenzen), non però il gateway M-Bus stesso. Quelli non utilizzati possono essere impostati come inattivi.


### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura. (Appartamenti, pompe di calore, utenze comuni)
    Opzioni hardware per la misurazione dell'energia elettrica
    \- [Telstar 80A
    ](/produkte/telstar)\- [Telstar CT
    ](/produkte/Telstar-CT)\- [Nimbus 100A (piastra per contatori)](/produkte/nimbus)

- Tutte le produzioni e tutti i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio / dell'area costituisce il bilancio complessivo corretto per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore dell'area / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e un consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se sono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)


![RCP raggruppamento ai fini del consumo proprio – Figura 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale di hardware per l'esercizio pubblico e per l'esercizio privato nel RCP. Con [eCarUp](https://www.ecarup.com) sono tuttavia disponibili anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito a tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione direttamente tramite il conteggio degli appartamenti con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco dei carichi viene gestito direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).


### Calore e acqua

- Misurazione di hardware di terzi tramite [LoRa](/produkte/lora-gateway-software) o [M-Bus](/produkte/m-bus-gateway) o [API](/schnittstellen/api)

- Supporta l'hardware già installato e quello nuovo dei fornitori abituali Neovac, Techem, GWF, ISTA o Brunata e altri.

- Vengono misurati i contatori totali della produzione oppure i contatori di consumo nelle unità di conteggio, oppure entrambi, ad es. nel caso di Minergie.

- Conteggio tramite l'integrazione smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Pianifica ora il tuo progetto con il nostro configuratore

Sulla base delle tue indicazioni, il configuratore di progetto crea la distinta dei materiali di tutti i prodotti smart-me, il numero di punti di misura e uno schema visivo per la verifica.

Ideale per progettisti ed elettricisti specializzati.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Esempi di RCP

### RCP come edificio singolo

- L'allacciamento dell'edificio è qui rilevante per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.


![RCP raggruppamento ai fini del consumo proprio – Figura 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### RCP come soluzione d'area

- Il punto di misura dell'area è determinante per una precisione di tariffazione perfetta

- Gli allacciamenti degli edifici sono qui rilevanti per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.


![RCP raggruppamento ai fini del consumo proprio – Figura 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Esempio di schema

![RCP raggruppamento ai fini del consumo proprio – Figura 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
