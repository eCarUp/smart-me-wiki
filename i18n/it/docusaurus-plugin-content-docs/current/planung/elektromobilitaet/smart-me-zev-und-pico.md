---
title: 'smart-me RCP e Pico'
slug: '/planung/elektromobilitaet/smart-me-zev-und-pico'
description: 'smart-me RCP con l''hardware della stazione di ricarica Pico'
sidebar_label: 'smart-me RCP / elettricità per gli inquilini e Pico'
---
## Mobilità elettrica nel RCP (raggruppamento ai fini del consumo proprio) smart-me / elettricità per gli inquilini con l'hardware della stazione di ricarica Pico

### Schema di principio di un complesso edilizio in un raggruppamento ai fini del consumo proprio

![smart-me RCP e Pico – Figura 1](/img/planung-elektromobilitaet-smart-me-zev-und-pico/01.png)

### Descrizione della soluzione di gestione del carico nello schema di misura di un RCP (raggruppamento ai fini del consumo proprio) o di un immobile con elettricità per gli inquilini

La gestione del carico della stazione di ricarica Pico si basa sull'hardware dei contatori smart-me. Questo hardware può essere utilizzato direttamente come punto di riferimento.

Se è già presente un'installazione di contatori di terzi, la gestione del carico per le Pico può essere realizzata anche tramite un software di terzi, al posto della gestione del carico multilivello di smart-me.
Ulteriori informazioni sono disponibili qui alla voce "Informazioni avanzate".

Vantaggi della gestione del carico smart-me:
- Nessun hardware di misura aggiuntivo necessario
- Stesso produttore per l'hardware di misura e la stazione di ricarica: massima compatibilità e affidabilità
- Gestione del carico dinamica a più livelli: perdite di potenza minime ed elevata disponibilità
- Distacco del carico dell'intero impianto a controllo centralizzato
- Funzione di ottimizzazione solare a livello di area o di edificio
- Priorità dei gruppi di ricarica e riduzione passiva dei picchi di carico


Punti hardware funzionalmente necessari per una gestione del carico completa nel RCP con hardware smart-me (frecce rosse):

- 2x contatore dell'edificio ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Punto di ottimizzazione solare, necessario per la ripartizione della capacità all'interno dell'area.

- Opzionale, ma consigliato nel RCP: 2x contatore E-Mobility ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Riferimento quando più gruppi di ricarica sono collegati a una stessa partenza e ne condividono la capacità.
    \- Misurazione per il conteggio delle perdite e dell'energia in standby
    \- È possibile considerare anche altre utenze che non sono stazioni di ricarica Pico, ad es. illuminazione del garage, prese, ecc.

- Opzionale, ma espressamente consigliato nel RCP: 1x contatore d'area ([Telstar 80A](/produkte/telstar) o [Telstar CT](/produkte/Telstar-CT))
    \- Se già presente nel RCP, questo punto può essere preso in considerazione. Se manca il contatore d'area, può essere rappresentato virtualmente.


### Informazioni avanzate sulla gestione del carico della stazione di ricarica Pico

[Descrizione del funzionamento della gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Software di gestione del carico di terzi compatibili](/drittsysteme)

[Pianificazione generale dell'installazione Pico: partenze e protezioni.](/produkte/pico-ladestation/installationsplanung)

### Conteggio della mobilità elettrica nel RCP (raggruppamento ai fini del consumo proprio)

Il conteggio può avvenire in diversi modi, ciascuno con i propri vantaggi e svantaggi:
- Conteggio con sistema a tariffa unica o multitariffa nel RCP con [smart-me Billing](https://web.smart-me.com/energiekostenabrechnung/), separato oppure insieme al consumo dell'appartamento.
- Conteggio con sistema a tariffa unica mediante il metodo post-payment e il [backend eCarUp](https://web.ecarup.com/referenzen/).
- Conteggio a tariffa unica mediante addebito su carta di credito altamente automatizzato tramite il [backend eCarUp](https://web.ecarup.com/referenzen/).
