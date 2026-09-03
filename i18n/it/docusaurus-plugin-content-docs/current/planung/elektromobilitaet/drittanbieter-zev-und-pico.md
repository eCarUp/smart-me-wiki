---
title: 'Fornitori terzi RCP e Pico'
slug: '/planung/elektromobilitaet/drittanbieter-zev-und-pico'
description: 'Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me'
sidebar_label: 'Fornitori terzi RCP e Pico'
---
## Mobilità elettrica con la stazione di ricarica smart-me Pico senza RCP smart-me

### Schema di principio di un complesso edilizio senza RCP smart-me

![Fornitori terzi RCP e Pico – Figura 1](/img/planung-elektromobilitaet-drittanbieter-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura senza RCP o con RCP di un fornitore terzo

La gestione del carico della stazione di ricarica Pico si basa sull'hardware di misura smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per i Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni al riguardo si trovano qui sotto, alla voce "informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Stesso produttore dell'hardware di misura e della stazione di ricarica: compatibilità e affidabilità ottimali

- Gestione del carico multilivello a comando dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco del carico dell'intero impianto comandato centralmente

- Funzione di ottimizzazione solare ottimizzata per l'area o per l'edificio

- Priorizzazione dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware necessari dal punto di vista funzionale per una gestione del carico complessiva con hardware smart-me (frecce rosse):

- 2x contatore edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare e necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale 2x contatore E-Mobility ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e si dividono la capacità.
    \- Misura di conteggio per le perdite e l'energia in standby
    \- È inoltre possibile tenere conto di altre utenze che non sono stazioni di ricarica Pico, ad esempio l'illuminazione del garage

- Opzionale, se tutti gli edifici sono misurati, 1x contatore d'area ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Questo punto può essere formato virtualmente a partire dai due contatori degli edifici. Il presupposto è che il 100% dei carichi dell'area sia misurato dai contatori degli edifici.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico smart-me Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibile](/drittsysteme)

### Conteggio della mobilità elettrica senza RCP

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/).

- Conteggio con sistema a tariffa unica mediante il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica mediante fatturazione con carta di credito altamente automatizzata e il [backend eCarUp](https://web.ecarup.com/referenzen/).
