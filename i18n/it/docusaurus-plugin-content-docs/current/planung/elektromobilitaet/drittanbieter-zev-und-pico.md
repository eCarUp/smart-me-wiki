---
title: 'Sistema di fornitori terzi e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'Sistema di fornitori terzi e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP (raggruppamento ai fini del consumo proprio) smart-me / elettricità per gli inquilini

### Schema di principio di un complesso residenziale senza RCP (raggruppamento ai fini del consumo proprio) smart-me / elettricità per gli inquilini

![RCP di fornitori terzi e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP (raggruppamento ai fini del consumo proprio) / elettricità per gli inquilini o con un fornitore terzo

La gestione del carico della stazione di ricarica Pico si basa sull'hardware di misura smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di un fornitore terzo, anziché con la gestione del carico multilivello smart-me.
Ulteriori informazioni sono disponibili qui alla voce "Informazioni approfondite".

Vantaggi della gestione del carico smart-me:

- Stesso produttore dell'hardware di misura e della stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico a più livelli con controllo dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco dei carichi dell'intero impianto controllato centralmente

- Funzione di ottimizzazione solare ottimizzata per l'area o per l'edificio

- Priorità dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per la gestione del carico globale con hardware smart-me (frecce rosse):

- 2x contatore dell'edificio ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Punto di ottimizzazione solare e necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale 2x contatore E-Mobility ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misurazione per il conteggio delle perdite e dell'energia in standby
    \- Possono essere considerate anche altre utenze che non sono stazioni di ricarica Pico, ad es. l'illuminazione del garage

- Opzionale, se tutti gli edifici sono misurati, 1x contatore dell'area ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Questo punto può essere costituito virtualmente dai due contatori degli edifici. Presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni approfondite sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di fornitori terzi compatibili](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP (raggruppamento ai fini del consumo proprio) / elettricità per gli inquilini

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite il conteggio altamente automatizzato con carta di credito e il [backend eCarUp](https://web.ecarup.com/referenzen/).
