---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'Il Minergie Data Exporter consente di trasferire i dati dei punti di misura direttamente nella banca dati Minergie.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

<div className="row">
<div className="col col--7">

Il Minergie Data Exporter consente di trasferire i dati dei punti di misura direttamente nella banca dati Minergie.

Con i dati presenti nella banca dati Minergie, Minergie può eseguire, a pagamento, confronti tra dati di progetto e dati effettivi.

Il prodotto in questione si chiama Minergie Monitoring+ e permette di individuare in modo semplice e rapido i potenziali di miglioramento e di scoprire eventuali configurazioni errate.

</div>
<div className="col col--5 bild--mitte">

![Minergie Exporter – Figura 1](/img/schnittstellen-minergie-exporter/01.png)

</div>
</div>

## Login al Minergie Data Exporter

Il link all'Exporter viene fornito a ogni partner smart-me che dispone dell'addendum contrattuale «System Integrator Minergie».

Non sei ancora System Integrator Minergie? Diventalo e informati qui: [Diventare partner Minergie](/planung/minergie) 



1.  Accedi con i dati di login del rispettivo oggetto smart-me su [smart-me.com](http://smart-me.com) e crea la chiave API.

2.  Accedi poi al Minergie Exporter (all'indirizzo web che ti è stato fornito) con gli stessi dati dell'account e crea la configurazione.



## Configurare l'esportazione per ogni oggetto

1.  Premi su «+» per registrare una nuova attività di esportazione.


![Minergie Exporter – Figura 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Crea una chiave API nell'oggetto smart-me.

Crea una nuova chiave con un nome a tua scelta. Assegna come minimo i diritti di lettura.


![Minergie Exporter – Figura 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figura 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figura 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Inserisci la chiave nell'attività del Minergie Exporter alla voce API-Key

4\. Alla voce «Minergie target» inserisci l'ID dell'oggetto che hai ricevuto da Minergie e dalla sua banca dati tramite la piattaforma dei label.

5\. Collega i punti di misura rilevanti dell'oggetto Minergie a un punto di misura nell'account smart-me. I contatori totalizzatori possono essere creati direttamente nel Minergie Exporter.

6\. Avvia il trasferimento.

![Minergie Exporter – Figura 6](/img/schnittstellen-minergie-exporter/06.png)

## Funzione e frequenza dell'esportazione dei dati

Il Data Exporter trasferisce i dati una volta al giorno con intervalli di 15 minuti.

I dati del passato possono essere ricaricati in qualsiasi momento e sovrascritti nella banca dati Minergie.

Se vengono caricati dati del passato, questi vengono trasferiti un po' alla volta insieme ai trasferimenti regolari. Possono quindi essere necessari alcuni giorni prima che tutti i dati del passato siano trasferiti.
