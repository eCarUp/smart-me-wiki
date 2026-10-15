---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'Il Minergie Data Exporter consente la trasmissione diretta dei dati dei punti di misura nella banca dati Minergie.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

Il Minergie Data Exporter consente la trasmissione diretta dei dati dei punti di misura nella banca dati Minergie.



Con i dati presenti nella banca dati Minergie, Minergie può eseguire, a pagamento, confronti tra i dati di progetto e i dati effettivi.

Il prodotto in questione si chiama Minergie Monitoring+ e permette di individuare in modo semplice e rapido i potenziali di miglioramento e di scoprire configurazioni errate.



![Minergie Exporter – Figura 1](/img/schnittstellen-minergie-exporter/01.png)

## Login Minergie Data Exporter

Il link all'Exporter viene fornito a ogni partner smart-me che dispone dell'aggiunta contrattuale Minergie Systemintegrator.

Se non è ancora Minergie Systemintegrator, lo diventi e si informi qui: [Diventare partner Minergie](/planung/minergie) 



1.  Effettui il login su [smart-me.com](http://smart-me.com) con i dati di accesso del rispettivo oggetto smart-me e crei la API Key.

2.  Effettui poi il login al Minergie Exporter (indirizzo web messo a Sua disposizione) con gli stessi dati dell'account e crei la configurazione.



## Configurare l'esportazione per ogni oggetto

1.  Prema su "+" per registrare una nuova attività di esportazione.


![Minergie Exporter – Figura 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Crei una API Key nell'oggetto smart-me.

Crei una nuova chiave con un nome a Sua scelta. Assegni almeno i diritti di lettura.


![Minergie Exporter – Figura 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figura 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figura 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Inserisca la chiave nell'incarico del Minergie Exporter alla voce API Key (API-Key)

4\. Alla voce "Minergie target" inserisca l'ID dell'oggetto che ha ricevuto da Minergie e dalla sua banca dati tramite la piattaforma dei label.

5\. Colleghi i punti di misura rilevanti dell'oggetto Minergie a un punto di misura nell'account smart-me. I contatori totalizzatori possono essere creati direttamente nel Minergie Exporter.

6\. Avvii la trasmissione.

![Minergie Exporter – Figura 6](/img/schnittstellen-minergie-exporter/06.png)

## Funzione e frequenza dell'esportazione dei dati

Il Data Exporter trasmette i dati una volta al giorno a intervalli di 15 minuti.

I dati del passato possono essere ricaricati in qualsiasi momento e sovrascritti nella banca dati Minergie.

Quando vengono caricati dati del passato, questi vengono trasmessi a poco a poco, distribuiti insieme alle trasmissioni regolari. Possono quindi essere necessari alcuni giorni prima che tutti i dati del passato siano trasmessi.
