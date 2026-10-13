---
title: 'AI Connector'
slug: '/schnittstellen/ai-connector'
description: 'Collegare smart-me a un assistente IA'
sidebar_label: 'AI Connector'
---
## Collegare smart-me a un assistente IA

smart-me gestisce un connettore che permette a un assistente IA di lavorare direttamente nel Suo account smart-me. Claude, ChatGPT e altri assistenti possono utilizzarlo. Lo collega una sola volta e in seguito chiede in linguaggio naturale ciò che desidera sapere, invece di navigare nel portale:

«Quanto ha consumato la pompa di calore il mese scorso, e quanto è costato alla tariffa attuale?»

Dal punto di vista tecnico si tratta di un server MCP (Model Context Protocol, uno standard aperto per dare a un assistente l'accesso a uno strumento o a una fonte di dati) all'indirizzo [https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp). Non occorre installare nulla né creare una chiave API.

Agisce a Suo nome con le Sue autorizzazioni, chiede conferma prima di modificare qualcosa e non salva nulla: nessuna password, nessun token, nessuna copia dei Suoi dati.

## Cosa Le serve

- un account smart-me

- un assistente che supporti i connettori MCP: Claude (web, desktop, mobile), ChatGPT o un altro client MCP

- una licenza Professional per le curve di carico e le serie di valori lunghe.


## Collegare

In Claude:

Apra Impostazioni → Connettori, cerchi «smart-me» e clicchi su «Connetti». Oppure direttamente tramite questo link: [smart-me in Claude

](https://claude.ai/directory/smart-me)In ChatGPT:

Nella barra laterale apra «Plugin», cerchi «smart-me» e clicchi su «Install plugin». Oppure direttamente tramite questo link: [smart-me in ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6a8b50d183f081918339e17cd4c95bd0)

Nella chat richiama il connettore con @smart-me, ad esempio: «@smart-me Mostrami gli ultimi 7 giorni del contatore solare come grafico.»

Nota: ChatGPT può trasmettere al connettore chat e memorie pertinenti come contesto. Può gestire questa funzione nelle impostazioni di ChatGPT oppure scollegare la connessione in qualsiasi momento.


Altri:
Aggiungere un server MCP personalizzato: https://mcp.smart-me.com/mcp



Si apre la pagina di accesso di smart-me. Effettui l'accesso come di consueto e confermi l'autorizzazione. La Sua password non viene mai trasmessa all'assistente.

![AI Connector – Figura 1](/img/schnittstellen-ai-connector/01.png)

## Cosa può chiedere

In qualsiasi lingua, non solo in inglese.

Contatori e consumo

- «Quali contatori ci sono nel mio account, e quali valori indicano in questo momento?»

- «Dammi la curva di carico al quarto d'ora del contatore principale di martedì scorso e dimmi quando c'è stato il picco.»


Stazioni di ricarica

- «Qualcosa è in carica in questo momento, e quanto preleva l'intero gruppo?»

- «Mostrami le sessioni di ricarica della stazione in garage di questo mese.»


Conteggio dell'autoconsumo (RCP)

- «Verifica la configurazione del mio immobile prima che io crei la prima fattura.»

- «Ecco un elenco con 14 numeri di serie di contatori con numeri di appartamento e inquilini. Configura l'immobile.»


E molto altro ancora!

## Cosa può fare il connettore

Lettura: tutti i contatori dell'account e i loro valori attuali, curve di carico al quarto d'ora e serie giornaliere, l'albero delle cartelle di un immobile, le stazioni di ricarica con le relative sessioni di ricarica e impostazioni, i gruppi di gestione del carico nonché tariffe, voci di fattura e consumo di un immobile di conteggio.

Scrittura, previa Sua conferma: rinominare contatori, creare e spostare cartelle, commutare un relè, inviare un comando a una stazione di ricarica, impostare limiti di corrente, creare o modificare immobili di conteggio, tariffe e periodi di costo VEWA.

Ogni strumento dichiara se legge o scrive, in modo che un'operazione di scrittura venga confermata prima di essere eseguita. L'eliminazione di una cartella o di una stazione di ricarica richiede due passaggi: il primo mostra cosa verrebbe rimosso, il secondo richiede il nome esatto.

Non è necessario inserirlo manualmente: il connettore è pubblicato ufficialmente e si trova in diversi elenchi — nel Claude Connectors Directory, nel registro ufficiale MCP Registry come com.smart-me/smart-me, su Glama e nel Raycast MCP Registry. Per ChatGPT la verifica è in corso.

In breve: smart-me mette a disposizione i contatori di un account tramite un server MCP all'indirizzo https://mcp.smart-me.com/mcp. Un assistente IA come Claude o ChatGPT può così leggere direttamente dall'account dell'utente contatori elettrici, contatori di calore e contatori dell'acqua, curve di carico al quarto d'ora, stazioni di ricarica e il conteggio RCP, e, previa conferma, anche modificarli — senza installazione, senza chiave API, con le autorizzazioni dell'utente che ha effettuato l'accesso.
