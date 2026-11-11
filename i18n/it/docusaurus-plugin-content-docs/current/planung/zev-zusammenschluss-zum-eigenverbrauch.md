---
title: 'RCP Raggruppamento ai fini del consumo proprio'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Raggruppamento ai fini del consumo proprio (RCP)'
sidebar_label: 'RCP Raggruppamento ai fini del consumo proprio'
symbol: 'gebaeude'
---
## Raggruppamento ai fini del consumo proprio (RCP)

Un raggruppamento ai fini del consumo proprio può essere costituito da un singolo edificio oppure da più edifici con lo stesso punto di allacciamento verso il fornitore di energia.

All'interno del RCP, il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono di competenza dei gestori del RCP.

Per poter eseguire questo conteggio sono necessarie l'infrastruttura adeguata e uno schema di misura completo per le rispettive energie.

**Principi:**

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione nel punto di immissione con fattura del gestore della rete di distribuzione

<div className="bild--voll">

![RCP Raggruppamento ai fini del consumo proprio – Figura 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01_IT.png)

</div>

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura da rilevare è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (somma delle produzioni, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni registro di un contatore M-Bus o LoRa\-che deve essere conteggiato vale come punto di misura (contatore combinato caldo / freddo = 2 licenze) ed è quindi [soggetto a licenza](/planung/cloud-lizenzen), ma non il gateway M-Bus stesso. I registri non utilizzati possono essere impostati come inattivi.


### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura. (Appartamenti, pompe di calore, utenze comuni)
    Opzioni hardware per la misurazione dell'energia elettrica
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (piastra contatore)](/produkte/nimbus-100a)

- Tutte le produzioni e i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio / dell'area fornisce la corretta somma di bilancio per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore dell'area / dell'allacciamento dell'edificio e le produzioni, oppure in alternativa tramite le produzioni e il consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)


<div className="bild--voll">

![RCP Raggruppamento ai fini del consumo proprio – Figura 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02_IT.png)

</div>

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale di hardware per l'esercizio pubblico e privato nel RCP. Con [eCarUp](https://www.ecarup.com) sono però disponibili anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito con tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione direttamente tramite il conteggio dell'appartamento con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco del carico viene risolto direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).


### Calore e acqua

- Misurazione di hardware di terzi tramite [LoRa](/produkte/lora-gateway-software) o [M-Bus](/produkte/m-bus-gateway) o [API](/schnittstellen/api)

- Supporta l'hardware già installato e quello nuovo dei fornitori abituali Neovac, Techem, GWF, ISTA o Brunata e altri.

- Vengono misurati i contatori totali della produzione oppure i contatori di consumo nelle unità di conteggio, oppure entrambi, ad es. nel caso di Minergie.

- Conteggio tramite l'integrazione smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Pianifica ora il tuo progetto con il nostro configuratore

Il Projektkonfigurator crea, sulla base dei tuoi dati, la distinta dei materiali con tutti i prodotti smart-me, il numero di punti di misura e uno schema visivo per la verifica.

Ideale per progettisti ed elettricisti.

[Projektkonfigurator](/planung/projektkonfigurator)

## Esempi di RCP

### RCP come singolo edificio

- Qui l'allacciamento dell'edificio è rilevante per il controllo dinamico dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.


<div className="bild--voll">

![RCP Raggruppamento ai fini del consumo proprio – Figura 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03_IT.png)

</div>

### RCP come soluzione d'area

- Il punto di misura dell'area è determinante per una perfetta precisione della tariffazione

- Qui gli allacciamenti degli edifici sono rilevanti per il controllo dinamico dell'infrastruttura degli edifici, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle utenze comuni e quello della pompa di calore (riscaldamento) vengono misurati separatamente. In questo modo si garantisce che i costi energetici possano essere indicati singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere addebitati complessivamente all'attenzione di un'amministrazione immobiliare.


<div className="bild--voll">

![RCP Raggruppamento ai fini del consumo proprio – Figura 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04_IT.png)

</div>

### Esempio di schema

<div className="bild--voll">

![RCP Raggruppamento ai fini del consumo proprio – Figura 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05_IT.png)

</div>
