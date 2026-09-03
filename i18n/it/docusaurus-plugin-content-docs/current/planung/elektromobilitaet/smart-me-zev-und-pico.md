---
title: 'smart-me RCP e Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'Mobilità elettrica nel RCP smart-me con l''hardware della stazione di ricarica Pico'
sidebar_label: 'smart-me RCP e Pico'
---
## Mobilità elettrica nel RCP smart-me con l'hardware della stazione di ricarica Pico

### Schema di principio di un complesso residenziale con raggruppamento ai fini del consumo proprio

![smart-me RCP e Pico – Figura 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura di un RCP

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per i Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni al riguardo si trovano qui sotto, alla voce "informazioni avanzate".

Vantaggi della gestione del carico smart-me:

- Nessun hardware di misura aggiuntivo necessario

- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità

- Gestione del carico multilivello a controllo dinamico: perdite di potenza minime ed elevata disponibilità

- Distacco del carico dell'intero impianto controllato centralmente

- Funzione di ottimizzazione solare ottimizzata per l'area o per l'edificio

- Priorizzazione dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per la gestione del carico complessiva nel RCP con hardware smart-me (frecce rosse):

- 2x contatori dell'edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare e necessario per la distribuzione della capacità all'interno dell'area.

- Opzionali, ma consigliati nel RCP: 2x contatori E-Mobility ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misura di conteggio per le perdite e l'energia in standby
    \- È inoltre possibile tenere conto di altre utenze che non sono stazioni di ricarica Pico, ad es. illuminazione del garage, prese, ecc.

- Opzionale, ma espressamente consigliato nel RCP: 1x contatore dell'area ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Se già presente nel RCP, questo punto può essere preso in considerazione. Se il contatore dell'area manca, può essere rappresentato virtualmente.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

[Pico – pianificazione generale dell'installazione, partenze e protezioni.](/produkte/pico-ladestation/installationsplanung)

### Conteggio della mobilità elettrica nel RCP

Il conteggio può avvenire in diversi modi, ciascuno con vantaggi e svantaggi specifici:

- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), separatamente o insieme al consumo dell'abitazione.

- Conteggio con sistema a tariffa unica tramite il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).

- Conteggio a tariffa unica tramite fatturazione con carta di credito altamente automatizzata mediante il [backend eCarUp](https://web.ecarup.com/referenzen/).
