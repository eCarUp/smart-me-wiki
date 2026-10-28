---
title: 'Sistema di terzi e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'Sistema di terzi e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP (raggruppamento ai fini del consumo proprio) smart-me / elettricità per gli inquilini

### Schema di principio di un complesso residenziale senza RCP smart-me / elettricità per gli inquilini

![RCP di terzi e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP / elettricità per gli inquilini o con un fornitore terzo

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello smart-me.
Ulteriori informazioni in merito sono disponibili qui alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore dell'hardware di misura e della stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico a più livelli con controllo dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco dei carichi dell'intero impianto controllato centralmente

- Funzione di ottimizzazione solare a livello di area o di singolo edificio

- Priorità dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per la gestione del carico completa con hardware smart-me (frecce rosse):

- 2x contatore dell'edificio ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Punto di ottimizzazione solare, necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale: 2x contatore per la mobilità elettrica ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misurazione per il conteggio di perdite ed energia in standby
    \- È possibile considerare anche altre utenze che non sono stazioni di ricarica Pico, ad es. l'illuminazione dell'autorimessa

- Opzionale, se tutti gli edifici sono misurati: 1x contatore dell'area ([Telstar 80A](/produkte/telstar-80a) o [Telstar CT](/produkte/telstar-ct))
    \- Questo punto può essere formato virtualmente a partire dai due contatori degli edifici. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione funzionale della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP / elettricità per gli inquilini

Il conteggio può avvenire in diversi modi, ciascuno con vantaggi e svantaggi specifici:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica mediante metodo di pagamento posticipato (post-payment) e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica mediante fatturazione con carta di credito altamente automatizzata e il [backend eCarUp](https://web.ecarup.com/referenzen/).
