---
title: 'RCP di terzi / elettricità per gli inquilini e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Stazione di ricarica smart-me Pico in un RCP di terzi / elettricità per gli inquilini'
sidebar_label: 'RCP di terzi / elettricità per gli inquilini e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me

### Schema di principio di un complesso residenziale senza RCP (raggruppamento ai fini del consumo proprio) smart-me

![RCP di terzi e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP o con RCP di terzi

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui alla voce "informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità
- Gestione del carico multilivello a controllo dinamico: perdite di potenza minime ed elevata disponibilità
- Distacco dei carichi dell'intero impianto a controllo centralizzato
- Funzione di ottimizzazione solare per l'area o per il singolo edificio
- Priorità dei gruppi di ricarica e riduzione passiva dei picchi di carico

Punti hardware funzionalmente necessari per una gestione del carico completa con hardware smart-me (frecce rosse):

- 2x contatori dell'edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare, necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale: 2x contatori E-Mobility ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misura per il conteggio delle perdite e dell'energia in standby
    \- È possibile considerare anche altre utenze che non sono stazioni di ricarica Pico, ad es. l'illuminazione del garage

- Opzionale, se tutti gli edifici sono misurati: 1x contatore dell'area ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Questo punto può essere formato virtualmente a partire dai due contatori degli edifici. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:
- Conteggio con tariffa unica o multitariffa nel RCP (raggruppamento ai fini del consumo proprio) con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).
- Conteggio con tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).
- Conteggio con tariffa unica tramite il conteggio altamente automatizzato con carta di credito e il [backend eCarUp](https://web.ecarup.com/referenzen/).
