---
title: 'Sistema smart-me e Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'Mobilità elettrica nel RCP smart-me con l''hardware della stazione di ricarica Pico'
sidebar_label: 'Sistema smart-me e Pico'
---
## Mobilità elettrica nel RCP smart-me / elettricità per gli inquilini con l'hardware della stazione di ricarica Pico

### Schema di principio di un complesso edilizio in un RCP (raggruppamento ai fini del consumo proprio)

![RCP smart-me e Pico – Figura 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura di un immobile in RCP / con elettricità per gli inquilini

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Nessun hardware di misura aggiuntivo necessario

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico a più livelli con controllo dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco dei carichi dell'intero impianto controllato centralmente

- Funzione di ottimizzazione solare a livello di area o di edificio

- Priorità tra gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per una gestione del carico completa nel RCP / con elettricità per gli inquilini con hardware smart-me (frecce rosse):

- 2x contatori dell'edificio ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Punto di ottimizzazione solare e necessario per la ripartizione della capacità all'interno dell'area.

- Opzionali ma consigliati 2x contatori E-Mobility ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Riferimento se più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misura per il conteggio delle perdite e dell'energia in standby
    \- Possono essere considerate anche altre utenze che non sono stazioni di ricarica Pico, ad es. illuminazione del garage, prese, ecc.

- Opzionale ma vivamente consigliato 1x contatore d'area ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Se già presente nel RCP, questo punto può essere considerato. Se manca il contatore d'area, può essere rappresentato virtualmente.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di terzi compatibili per la gestione del carico](/drittsysteme)

[Pianificazione generale dell'installazione Pico: partenze e protezioni.](/produkte/pico-ladestation/installationsplanung)

### Conteggio della mobilità elettrica nel RCP / con elettricità per gli inquilini

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o a più tariffe nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), separato o insieme al consumo dell'appartamento.

- Conteggio con sistema a tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite pagamento con carta di credito altamente automatizzato con il [backend eCarUp](https://web.ecarup.com/referenzen/).
