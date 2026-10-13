---
title: 'RCP di fornitori terzi e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'RCP di fornitori terzi e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP (raggruppamento ai fini del consumo proprio) smart-me

### Schema di principio di un complesso edilizio senza RCP smart-me

![RCP di fornitori terzi e Pico – figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP (raggruppamento ai fini del consumo proprio) o con RCP di un fornitore terzo

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di un fornitore terzo, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui sotto, alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico a più livelli con controllo dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco dei carichi dell'intero impianto controllato centralmente

- Funzione di ottimizzazione solare a livello di area o di edificio

- Priorità dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware necessari dal punto di vista funzionale per una gestione del carico completa con hardware smart-me (frecce rosse):

- 2x contatore dell'edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare, necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale: 2x contatore E-Mobility ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati alla stessa partenza e ne condividono la capacità.
    \- Misura per il conteggio delle perdite e dell'energia in standby
    \- È possibile considerare anche altre utenze che non sono stazioni di ricarica Pico, ad es. l'illuminazione dell'autorimessa

- Opzionale, se tutti gli edifici sono misurati: 1x contatore dell'area ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Questo punto può essere formato virtualmente dai due contatori degli edifici. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico compatibili di fornitori terzi](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o a più tariffe nel RCP (raggruppamento ai fini del consumo proprio) con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite fatturazione con carta di credito altamente automatizzata e il [backend eCarUp](https://web.ecarup.com/referenzen/).
