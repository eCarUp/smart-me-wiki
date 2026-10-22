---
title: 'Fornitori terzi RCP e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'Fornitori terzi RCP e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me

### Schema di principio di un complesso edilizio senza RCP smart-me

![Fornitori terzi RCP e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP o con RCP di fornitori terzi

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di fornitori terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui alla voce "informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico dinamica a più livelli: perdite di potenza minime ed elevata disponibilità

- Distacco del carico dell'intero impianto gestito centralmente

- Funzione di ottimizzazione solare ottimizzata per l'area o per l'edificio

- Prioritizzazione dei gruppi di ricarica e minimizzazione passiva dei picchi di carico


Punti hardware funzionalmente necessari per la gestione del carico globale con hardware smart-me (frecce rosse):

- 2x contatori dell'edificio ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Punto di ottimizzazione solare e necessario per la distribuzione della capacità all'interno dell'area.

- Opzionale: 2x contatori E-Mobility ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Riferimento quando più gruppi di ricarica sono collegati alla stessa partenza e ne condividono la capacità.
    \- Misura per il conteggio di perdite ed energia in standby
    \- È possibile considerare anche altri utilizzatori che non sono stazioni di ricarica Pico, ad es. l'illuminazione del garage

- Opzionale, se tutti gli edifici sono misurati: 1x contatore dell'area ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Questo punto può essere formato virtualmente a partire dai due contatori dell'edificio. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori dell'edificio.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione funzionale della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di fornitori terzi compatibili](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi specifici:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite conteggio con carta di credito altamente automatizzato e il [backend eCarUp](https://web.ecarup.com/referenzen/).
