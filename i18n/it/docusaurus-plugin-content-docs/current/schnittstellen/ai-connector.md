---
title: 'AI Connector'
slug: '/schnittstellen/ai-connector'
description: 'Collegare smart-me a un assistente IA'
sidebar_label: 'AI Connector'
---
## Collegare smart-me a un assistente IA

smart-me gestisce un connettore che consente a un assistente IA di lavorare direttamente nel vostro conto smart-me. Claude, ChatGPT e altri assistenti possono utilizzarlo. Lo collegate una volta sola e poi chiedete in linguaggio naturale ciò che volete sapere, invece di navigare nel portale:

«Quanto ha consumato la pompa di calore il mese scorso e quanto è costato alla tariffa attuale?»

Dal punto di vista tecnico si tratta di un server MCP (Model Context Protocol, uno standard aperto per dare a un assistente accesso a uno strumento o a una fonte di dati) all'indirizzo [https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp). Non è necessario installare nulla né creare una API key.

Agisce a vostro nome con le vostre autorizzazioni, chiede conferma prima di modificare qualcosa e non memorizza nulla: nessuna password, nessun token, nessuna copia dei vostri dati.

## Cosa serve

- un conto smart-me

- un assistente che supporti i connettori MCP: Claude (Web, Desktop, Mobile), ChatGPT o un altro client MCP

- una licenza Professional per le curve di carico e le serie di valori estese.


## Collegamento

In Claude:

Impostazioni → Connettori → Aggiungi connettore personalizzato.

 In ChatGPT: Impostazioni → Connettori → Aggiungi → Cercare "smart-me"


Altri:
Aggiungere Custom MCP Server: https://mcp.smart-me.com/mcp



Si apre la pagina di accesso smart-me. Accedete come di consueto e confermate l'accesso. La vostra password non viene mai trasmessa all'assistente.

![AI Connector – Figura 1](/img/schnittstellen-ai-connector/01.png)

## Cosa potete chiedere

In qualsiasi lingua, non solo in inglese.

Contatori e consumo

- «Quali contatori ci sono nel mio conto e quali valori indicano in questo momento?»

- «Dammi la curva di carico a quarti d'ora del contatore principale di martedì scorso e dimmi quando è stato il picco.»


Stazioni di ricarica

- «C'è qualcosa in ricarica in questo momento e quanto preleva l'intero gruppo?»

- «Mostrami le sessioni di ricarica della stazione nel garage in questo mese.»


Conteggio dell'autoconsumo (RCP)

- «Verifica la configurazione del mio immobile prima che emetta la prima fattura.»

- «Ecco un elenco con 14 numeri di serie di contatori con numeri di appartamento e inquilini. Configura l'immobile.»


E molto altro ancora!

## Cosa può fare il connettore

Leggere: tutti i contatori del conto e i loro valori attuali, le curve di carico a quarti d'ora e le serie giornaliere, la struttura delle cartelle di un immobile, le stazioni di ricarica con le loro sessioni di ricarica e impostazioni, i gruppi di gestione del carico nonché le tariffe, le voci di fattura e il consumo di un immobile soggetto a conteggio.

Scrivere, previa vostra conferma: rinominare contatori, creare e spostare cartelle, commutare un relè, inviare un comando a una stazione di ricarica, impostare limiti di corrente, creare o modificare immobili soggetti a conteggio, tariffe e periodi di costo VEWA.

Ogni strumento dichiara se legge o scrive, in modo che un'operazione di scrittura venga confermata prima di essere eseguita. L'eliminazione di una cartella o di una stazione di ricarica richiede due passaggi: il primo mostra che cosa verrebbe eliminato, il secondo richiede il nome esatto.

Non è necessario inserirlo manualmente: il connettore è pubblicato ufficialmente ed è reperibile in diversi registri — nel Claude Connectors Directory, nella MCP Registry ufficiale come com.smart-me/smart-me, presso Glama e nella Raycast MCP Registry. Per ChatGPT la verifica è in corso.

In breve: smart-me mette a disposizione i contatori di un conto tramite un server MCP all'indirizzo https://mcp.smart-me.com/mcp. Un assistente IA come Claude o ChatGPT può così leggere direttamente dal conto dell'utente contatori elettrici, contatori di calore e dell'acqua, curve di carico a quarti d'ora, stazioni di ricarica e il conteggio RCP e, previa conferma, anche modificarli — senza installazione, senza API key, con le autorizzazioni dell'utente connesso.
