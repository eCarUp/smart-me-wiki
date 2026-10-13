---
title: 'smart-me RCP e Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'Mobilità elettrica nel RCP smart-me con l''hardware della stazione di ricarica Pico'
sidebar_label: 'smart-me RCP e Pico'
---
## Mobilità elettrica nel RCP (raggruppamento ai fini del consumo proprio) smart-me con l'hardware della stazione di ricarica Pico

### Schema di principio di un complesso residenziale in un raggruppamento ai fini del consumo proprio

![smart-me RCP e Pico – Figura 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura di un RCP (raggruppamento ai fini del consumo proprio)

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello smart-me.
Ulteriori informazioni sono disponibili qui alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Nessun hardware di misura aggiuntivo necessario

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico dinamica a più livelli: perdite di potenza minime ed elevata disponibilità

- Distacco del carico dell'intero impianto gestito centralmente

- Funzione di ottimizzazione solare per l'intero complesso o per il singolo edificio

- Priorizzazione dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per una gestione del carico completa nel RCP con hardware smart-me (frecce rosse):

- 2x contatori dell'edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare e necessario per la ripartizione della capacità all'interno del complesso.

- Opzionali ma consigliati nel RCP: 2x contatori per la mobilità elettrica ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misurazione per il conteggio delle perdite e dell'energia in standby
    \- È possibile considerare anche altri utilizzatori che non sono stazioni di ricarica Pico, ad es. illuminazione dell'autorimessa, prese, ecc.

- Opzionale ma espressamente consigliato nel RCP: 1x contatore del complesso ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Se già presente nel RCP, questo punto può essere considerato. Se manca il contatore del complesso, può essere rappresentato virtualmente.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

[Pianificazione generale dell'installazione Pico: partenze e protezioni.](/produkte/pico-ladestation/installationsplanung)

### Conteggio della mobilità elettrica nel RCP (raggruppamento ai fini del consumo proprio)

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o a più tariffe nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), separato o insieme al consumo dell'appartamento.

- Conteggio con sistema a tariffa unica tramite metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite conteggio con carta di credito altamente automatizzato mediante il [backend eCarUp](https://web.ecarup.com/referenzen/).
