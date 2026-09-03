---
title: 'RCP Raggruppamento ai fini del consumo proprio'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Raggruppamento ai fini del consumo proprio (RCP)'
sidebar_label: 'RCP Raggruppamento ai fini del consumo proprio'
---
## Raggruppamento ai fini del consumo proprio (RCP)

Un raggruppamento ai fini del consumo proprio può essere costituito da un singolo edificio oppure da più edifici con lo stesso punto di allacciamento nei confronti dell'azienda elettrica.

All'interno del RCP il conteggio e la tariffazione dell'elettricità di rete e dell'elettricità prodotta localmente sono di competenza dei gestori del RCP.

Affinché questo conteggio possa essere effettuato, sono necessarie l'infrastruttura adeguata e uno schema di misura completo per le rispettive energie.



Principi di base

- Misurazione privata

- Conteggio privato

- Contatore del gestore della rete di distribuzione nel punto di immissione con fattura del gestore della rete di distribuzione


![RCP Raggruppamento ai fini del consumo proprio – Figura 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (produzioni totali, consumo complessivo) è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni registro di contatore M-Bus o LoRa che si desidera conteggiare vale come punto di misura (contatore combinato caldo / freddo = 2 licenze) ed è quindi [soggetto a licenza](/planung/cloud-lizenzen), non però il gateway M-Bus stesso. Quelli non utilizzati possono essere impostati come inattivi.


### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura. (Appartamenti, pompe di calore, utenze generali)
    Opzioni hardware per la misurazione dell'energia elettrica
    \- [Telstar 80A
    ](/produkte/telstar)\- [Telstar CT
    ](/produkte/Telstar-CT)\- [Nimbus 100A (piastra contatore)](/produkte/nimbus)

- Tutte le produzioni e i sistemi di accumulo devono essere misurati, insieme oppure separatamente.

- La misurazione all'allacciamento domestico / del comprensorio fornisce il bilancio corretto per una tariffazione accurata. Le misurazioni all'allacciamento domestico sono i punti di misura più importanti per la regolazione dinamica delle utenze all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata mediante il contatore del comprensorio / dell'allacciamento domestico e le produzioni oppure, in alternativa, mediante le produzioni e un consumo complessivo virtuale. (+1 contatore virtuale del consumo complessivo)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)


![RCP Raggruppamento ai fini del consumo proprio – Figura 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### E-Mobility con smart-me e eCarUp

- L'elettromobilità viene realizzata mediante punti di ricarica privati, semiprivati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre la combinazione ottimale di hardware per l'esercizio pubblico e per l'esercizio privato nel RCP. Con [eCarUp](https://www.ecarup.com) esistono però anche altri approcci hardware compatibili.

- Il conteggio avviene ad esempio con carta di credito a tariffa unica con [eCarUp](https://www.ecarup.com) oppure tariffato tramite il conteggio dell'appartamento direttamente con [smart-me Billing](/konfiguration/billing).

- La regolazione delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono assicurate dall'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco del carico viene risolto direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).


### Calore e acqua

- Misurazione di hardware di terzi tramite [LoRa](/produkte/lora-gateway-software) oppure [M-Bus](/produkte/m-bus-gateway) oppure [API](/schnittstellen/api)

- Supporta sia l'hardware già installato sia quello nuovo dei fornitori abituali Neovac, Techem, GWF, ISTA o Brunata e altri.

- Vengono misurati o i contatori totali della produzione o i contatori di consumo nelle unità di conteggio oppure entrambi, ad esempio con Minergie.

- Conteggio mediante l'integrazione smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Pianifica ora il tuo progetto con il nostro configuratore

Il configuratore di progetto crea per te, sulla base dei tuoi dati, la distinta dei materiali con tutti i prodotti smart-me, il numero di punti di misura e uno schema visivo per la verifica.

Ideale per progettisti ed elettricisti.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Esempi di RCP

### RCP come singolo edificio

- L'allacciamento domestico è qui rilevante per la regolazione dinamica dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari, e per una tariffazione accurata.

- Il contatore delle utenze generali e della pompa di calore (riscaldamento) viene misurato separatamente. In questo modo si garantisce che i costi energetici possano essere esposti singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere trasferiti nel loro insieme a un'amministrazione immobiliare.


![RCP Raggruppamento ai fini del consumo proprio – Figura 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### RCP come soluzione di comprensorio

- Il punto di misura del comprensorio è determinante per una precisione di tariffazione perfetta

- Gli allacciamenti domestici sono qui rilevanti per la regolazione dinamica dell'infrastruttura dell'edificio, come pompe di calore, stazioni di ricarica e impianti solari.

- Il contatore delle utenze generali e della pompa di calore (riscaldamento) viene misurato separatamente. In questo modo si garantisce che i costi energetici possano essere esposti singolarmente. I costi energetici possono essere ripartiti percentualmente tra le parti oppure essere trasferiti nel loro insieme a un'amministrazione immobiliare.


![RCP Raggruppamento ai fini del consumo proprio – Figura 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Esempio di schema

![RCP Raggruppamento ai fini del consumo proprio – Figura 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
