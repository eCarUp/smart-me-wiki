---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'Il Minergie Daten Exporter consente la trasmissione diretta dei dati dei punti di misura nella banca dati Minergie.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

Il Minergie Daten Exporter consente la trasmissione diretta dei dati dei punti di misura nella banca dati Minergie.



Con i dati presenti nella banca dati Minergie, Minergie può eseguire a pagamento confronti tra dati di progetto e dati effettivi.

Il prodotto in questione si chiama Minergie Monitroing+ e permette di individuare in modo semplice e rapido i potenziali di miglioramento, nonché di scoprire configurazioni errate.



![Minergie Exporter – Figura 1](/img/schnittstellen-minergie-exporter/01.png)

## Login Minergie Datenexporter

Il link all'Exporter viene fornito a ogni partner smart-me con il supplemento contrattuale Minergie Systemintegrator.

Se non sei ancora diventato Minergie Systemintegrator, diventalo e informati qui: [Diventare partner Minergie](/planung/minergie) 



1.  Accedi con i dati di login del rispettivo oggetto smart-me su [smart-me.com](http://smart-me.com)  e crea l'API Key.

2.  Accedi poi al Minergie Exporter (indirizzo web messo a tua disposizione) con gli stessi dati dell'account e crea la configurazione.



## Impostare l'export per ogni oggetto

1.  Premi il "+" per registrare una nuova attività di export.


![Minergie Exporter – Figura 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Crea un'API Key nell'oggetto smart-me.

Crea una nuova chiave con un nome di tua scelta. Seleziona i diritti almeno con diritti di lettura.


![Minergie Exporter – Figura 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figura 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figura 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Registra la chiave nell'incarico del Minergie Exporter sotto API-Key

4\. Inserisci sotto "Minergie target" l'ID oggetto che hai ricevuto da Minergie e dalla sua banca dati tramite la Label-Platform.

5\. Collega i punti di misura rilevanti dell'oggetto Minergie con un punto di misura nell'account smart-me. I contatori totalizzatori possono essere creati direttamente nel Minergie Exporter.

6\. Avvia la trasmissione.

![Minergie Exporter – Figura 6](/img/schnittstellen-minergie-exporter/06.png)

## Funzione e frequenza dell'export dei dati

Il Daten Exporter trasmette i dati una volta al giorno con intervalli di 15 minuti.

I dati del passato possono essere ricaricati in qualsiasi momento e sovrascritti nella banca dati Minergie.

Se vengono caricati dati storici, questi vengono trasmessi progressivamente, distribuiti insieme alle trasmissioni regolari. Può richiedere alcuni giorni finché tutti i dati del passato sono trasmessi.
