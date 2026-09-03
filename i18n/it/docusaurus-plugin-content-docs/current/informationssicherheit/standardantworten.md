---
title: 'Risposte standard'
slug: '/informationssicherheit/standardantworten'
description: 'Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di permettere ai partner di compilare autonomamente i questionari standard sulla sicurezza…'
sidebar_label: 'Risposte standard'
---
Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di permettere ai partner di compilare autonomamente i questionari standard sulla sicurezza.

Contatto: security@smart-me.com

Ultimo aggiornamento: 16.01.2025

## Informazioni generali

### Informazioni sull'azienda

- Azienda attiva a livello internazionale con circa 50 dipendenti.

- Sviluppo e produzione di una soluzione di conteggio per RCP (raggruppamento ai fini del consumo proprio) / elettricità per gli inquilini, mobilità elettrica e multienergia.


### Documenti aggiuntivi

- Condizioni generali di contratto (CGC)

- Accordo sul trattamento dei dati per conto terzi (ADV): allegato alle CGC

- Informativa sulla protezione dei dati


[Link ai documenti](https://web.smart-me.com/agb-smart-me-ag/)

## Protezione e trattamento dei dati

### Vengono trattati dati personali ai sensi della LPD/GDPR?

- Per l'acquisto di licenze con carta di credito, i dati della carta di credito vengono trattati tramite Stripe.

- Per ordini e offerte, le informazioni sui clienti vengono trattate tramite Bexio.

- I casi di supporto e le relative informazioni vengono trattati tramite Freshdesk.


### Come vengono cancellati i dati?

- I clienti sono responsabili dei propri account smart-me e possono cancellarli in qualsiasi momento nel portale web.
    Se un cliente cancella il proprio account, tali dati vengono rimossi in modo irreversibile.

- Dopo 30 giorni non esiste più alcun backup.

- I dati trattati tramite Freshdesk o Bexio possono essere cancellati su richiesta.


### Chi ha accesso ai dati?

L'accesso ai nostri server è limitato agli IP interni del cluster. Smart-me ha accesso ai dati dell'account del cliente solo con l'esplicito consenso di quest'ultimo

## Hosting e infrastruttura

### Dove è ospitata l'applicazione?

Tutti i servizi smart-me sono ospitati su server di Microsoft Azure Svizzera. Non gestiamo server in proprio.

### Come sono protetti i dati?

I server sono protetti da misure di Microsoft Azure. Inoltre utilizziamo Cloudflare come Web Application Firewall (WAF) e per la gestione del carico.

### Come viene garantita la disponibilità dei sistemi?

La disponibilità dei sistemi è garantita dall'infrastruttura di Microsoft Azure. 

[Ulteriori informazioni](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

## Sicurezza dei dati e cifratura

### Come vengono cifrati i dati?

I dati dell'applicazione non sono cifrati in quanto tali, ma lo è il database nel suo insieme, nel quale sono contenuti i dati dell'applicazione. 

La comunicazione tra i contatori e il cloud è cifrata con AES-256.

### Come vengono sottoposte ad hash le password degli account smart-me?

Le password vengono sottoposte ad hash con RIPEMD-160 e salt dinamico.

### Supportiamo le identità federate?

No. L'eccezione è l'accesso tramite la nostra API, che oltre alla Basic Auth supporta anche oAuth 2.0.

### Backup

I dati dei contatori sono soggetti a backup giornalieri tramite Instaclustr. [Informazioni in merito](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

I dati dei clienti trattati tramite Freshdesk, Bexio o Stripe sono soggetti alla sicurezza dei dati dei rispettivi produttori e quindi anche ai loro processi di backup.

## Direttive e processi di sicurezza

### Disponiamo di direttive specifiche e documentate sulla sicurezza delle informazioni?

No

### Abbiamo direttive documentate per lo sviluppo sicuro?

No

### Seguiamo un processo di sviluppo sicuro?

Sì, ma i dettagli specifici sono confidenziali.

### Disponiamo di una certificazione sulla sicurezza delle informazioni?

No, tuttavia il nostro fornitore di infrastruttura cloud Microsoft Azure è certificato ISO27001.

### Effettuiamo audit di sicurezza IT presso i nostri fornitori?

No

### Abbiamo un Business Continuity Plan documentato?

No

### Consentiamo audit IT?

Sì, ma solo con informazioni pubblicamente disponibili

## Sicurezza degli endpoint e della rete

### Abbiamo implementato un concetto di segmentazione della rete?

Poiché la nostra applicazione non è ospitata localmente, la nostra architettura di rete è indipendente dall'architettura dei server. La segmentazione locale si presenta come segue:

- Rete di produzione 

- WLAN per ospiti

- Rete dell'ufficio


### Sensibilizziamo i collaboratori sulla sicurezza informatica?

Sì, vengono svolte formazioni sulla sicurezza informatica:

- Frequenza: ogni sei mesi e durante l'onboarding.

- Formazioni aggiuntive: in funzione degli eventi attuali o delle minacce emergenti.


### Negli ultimi 12 mesi siamo stati vittima di un incidente di sicurezza o di una violazione dei dati?

No

### Disponiamo di risorse dedicate alla sicurezza informatica?

Sì, disponiamo di risorse interne per la sicurezza informatica.

### Manteniamo aggiornati il software e i sistemi?

Sì, tutti i sistemi e i dispositivi vengono aggiornati regolarmente alle versioni stabili più recenti.

### Abbiamo installato una soluzione di protezione AV?

Sì, tutti i dispositivi sono dotati di:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender come protezione antivirus (AV)


### Disponiamo di una soluzione SIEM?

No
