---
title: 'Risposte standard'
slug: '/informationssicherheit/standardantworten'
description: 'Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di consentire ai partner di rispondere autonomamente ai questionari di sicurezza standard…'
sidebar_label: 'Risposte standard'
---
Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di consentire ai partner di rispondere autonomamente ai questionari di sicurezza standard.

Contatto: security@smart-me.com

Ultimo aggiornamento: 16.01.2025

## Informazioni generali

### Informazioni sull'azienda

- Azienda attiva a livello internazionale con circa 50 dipendenti.

- Sviluppo e produzione di una soluzione di conteggio per RCP (raggruppamento ai fini del consumo proprio) / elettricità per gli inquilini, mobilità elettrica e multienergia.


### Documenti aggiuntivi

- Condizioni generali di contratto (CG)

- Accordo sul trattamento dei dati per conto terzi: allegato alle CG

- Informativa sulla protezione dei dati


[Link ai documenti](https://web.smart-me.com/agb-smart-me-ag/)

## Protezione e trattamento dei dati

### Vengono trattati dati personali ai sensi della LPD/del GDPR?

- Per l'acquisto di licenze tramite carta di credito, i dati della carta di credito vengono trattati tramite Stripe.

- Per ordini e offerte, i dati dei clienti vengono trattati tramite bexio.

- I casi di supporto e le relative informazioni vengono trattati tramite Freshdesk.


### Come vengono cancellati i dati?

- I clienti sono responsabili dei propri account smart-me e possono cancellarli in qualsiasi momento nel portale web.
    Quando un cliente cancella il proprio account, questi dati vengono rimossi in modo irreversibile.

- Dopo 30 giorni non è più disponibile alcun backup.

- I dati trattati tramite Freshdesk o bexio possono essere cancellati su richiesta.


### Chi ha accesso ai dati?

L'accesso ai nostri server è limitato agli IP interni del cluster. smart-me ha accesso ai dati dell'account dei clienti solo con l'esplicita autorizzazione del cliente

## Hosting e infrastruttura

### Dove è ospitata l'applicazione?

Tutti i servizi smart-me sono ospitati su server di Microsoft Azure Svizzera. Noi stessi non gestiamo alcun server.

### Come vengono protetti i dati?

I server sono protetti dalle misure di Microsoft Azure. Inoltre utilizziamo Cloudflare come Web Application Firewall (WAF) e per la gestione del carico.

### Come viene garantita la disponibilità dei sistemi?

La disponibilità dei sistemi è garantita dall'infrastruttura di Microsoft Azure. 

[Ulteriori informazioni](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

## Sicurezza dei dati e crittografia

### Come vengono crittografati i dati?

I dati dell'applicazione non sono crittografati singolarmente, ma lo è il database nel suo complesso, che contiene i dati dell'applicazione. 

La comunicazione tra contatori e cloud è crittografata con AES-256.

### Come vengono sottoposte a hashing le password degli account smart-me?

Le password vengono sottoposte a hashing con RIPEMD-160 con salt dinamico.

### Supportiamo le identità federate?

No. L'eccezione è l'accesso tramite la nostra API, che oltre a Basic Auth supporta anche oAuth 2.0.

### Backup

I dati dei contatori sono sottoposti a backup giornalieri da parte di Instaclustr. [Informazioni in merito](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

I dati dei clienti trattati tramite Freshdesk, bexio o Stripe sono soggetti alla sicurezza dei dati dei rispettivi fornitori e quindi anche ai loro processi di backup.

## Direttive e processi di sicurezza

### Disponiamo di direttive specifiche e documentate sulla sicurezza delle informazioni?

No

### Disponiamo di direttive documentate per lo sviluppo sicuro?

No

### Seguiamo un processo di sviluppo sicuro?

Sì, tuttavia i dettagli specifici sono confidenziali.

### Disponiamo di un certificato di sicurezza delle informazioni?

No, tuttavia il nostro fornitore di infrastruttura cloud, Microsoft Azure, è certificato ISO27001.

### Effettuiamo audit di sicurezza IT presso i nostri fornitori?

No

### Disponiamo di un Business Continuity Plan documentato?

No

### Consentiamo audit IT?

Sì, ma solo con informazioni pubblicamente disponibili

## Sicurezza degli endpoint e della rete

### Abbiamo implementato un concetto di segmentazione della rete?

Poiché la nostra applicazione non è ospitata localmente, la nostra architettura di rete è indipendente dall'architettura dei server. La segmentazione locale è la seguente:

- Rete di produzione 

- Wi-Fi ospiti

- Rete dell'ufficio


### Sensibilizziamo i collaboratori sulla cybersicurezza?

Sì, vengono svolte formazioni sulla cybersicurezza:

- Frequenza: ogni sei mesi e durante l'onboarding.

- Formazioni aggiuntive: in base agli eventi attuali o alle minacce emergenti.


### Negli ultimi 12 mesi siamo stati vittima di un incidente di sicurezza o di una violazione dei dati?

No

### Disponiamo di risorse dedicate alla cybersicurezza?

Sì, disponiamo di risorse interne dedicate alla cybersicurezza.

### Manteniamo aggiornati software e sistemi?

Sì, tutti i sistemi e i dispositivi vengono aggiornati regolarmente alle versioni stabili più recenti.

### Abbiamo installato una soluzione di protezione antivirus?

Sì, tutti i dispositivi sono dotati di:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender come protezione antivirus (AV)


### Disponiamo di una soluzione SIEM?

No
