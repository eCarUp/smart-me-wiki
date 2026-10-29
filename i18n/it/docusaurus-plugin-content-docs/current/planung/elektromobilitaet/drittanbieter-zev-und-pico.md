---
title: 'Sistema di terzi e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'Sistema di terzi e Pico'
---
Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP (raggruppamento ai fini del consumo proprio) smart-me / elettricità per gli inquilini

### Schema di principio di un complesso residenziale senza RCP smart-me / elettricità per gli inquilini

![RCP di terzi e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01_IT.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP / elettricità per gli inquilini o con un fornitore terzo

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui sotto, alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico dinamica a più livelli: perdite di potenza minime ed elevata disponibilità

- Distacco del carico centralizzato dell'intero impianto

- Funzione di ottimizzazione solare a livello di area o di singolo edificio

- Priorizzazione dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per una gestione del carico completa con hardware smart-me (frecce rosse):

- 2x contatore dell'edificio ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Punto di ottimizzazione solare, necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale: 2x contatore per la mobilità elettrica ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misurazione per il conteggio delle perdite e dell'energia in standby
    \- È possibile considerare anche altre utenze che non sono stazioni di ricarica Pico, ad es. l'illuminazione del garage

- Opzionale, se tutti gli edifici sono misurati: 1x contatore d'area ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Questo punto può essere formato virtualmente a partire dai due contatori degli edifici. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP / elettricità per gli inquilini

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP (raggruppamento ai fini del consumo proprio) con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica tramite metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite fatturazione con carta di credito altamente automatizzata e il [backend eCarUp](https://web.ecarup.com/referenzen/).
