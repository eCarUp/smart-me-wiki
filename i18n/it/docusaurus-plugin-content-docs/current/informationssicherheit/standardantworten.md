---
title: 'Risposte standard'
slug: '/informationssicherheit/standardantworten'
description: 'Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di consentire ai partner di compilare autonomamente i questionari di sicurezza standard…'
sidebar_label: 'Risposte standard'
---
Questa pagina risponde a domande generali sulla sicurezza delle informazioni e dei dati presso smart-me AG e ha lo scopo di consentire ai partner di compilare autonomamente i questionari di sicurezza standard.

Contatto: security@smart-me.com

Ultimo aggiornamento: 16.01.2025

## Informazioni generali

<details id="unternehmens-informationen">
<summary>Informazioni sull'azienda</summary>

- Azienda attiva a livello internazionale con circa 50 dipendenti.

- Sviluppo e produzione di una soluzione di conteggio per RCP (raggruppamento ai fini del consumo proprio) / elettricità per gli inquilini, mobilità elettrica e multienergia.

</details>

<details id="zusaetzliche-dokumente">
<summary>Documenti aggiuntivi</summary>

- Condizioni generali di contratto (CGC)

- Accordo sul trattamento dei dati per conto terzi (ADV): allegato alle CGC

- Informativa sulla protezione dei dati


[Link ai documenti](https://web.smart-me.com/agb-smart-me-ag/)

</details>

## Protezione e trattamento dei dati

<details id="werden-personenbezogene-daten-gemaess-dsg-dsgvo-verarbeitet">
<summary>Vengono trattati dati personali ai sensi della LPD/RGPD?</summary>

- Per l'acquisto di licenze con carta di credito, i dati della carta di credito vengono trattati tramite Stripe.

- Per ordini e offerte, i dati dei clienti vengono trattati tramite Bexio.

- I casi di supporto e le relative informazioni vengono trattati tramite Freshdesk.

</details>

<details id="wie-werden-daten-geloescht">
<summary>Come vengono cancellati i dati?</summary>

- I clienti sono responsabili dei propri account smart-me e possono cancellarli in qualsiasi momento nel portale web.
    Se un cliente cancella il proprio account, questi dati vengono rimossi in modo irreversibile.

- Dopo 30 giorni non esiste più alcun backup.

- I dati trattati tramite Freshdesk o Bexio possono essere cancellati su richiesta.

</details>

<details id="wer-hat-zugang-zu-den-daten">
<summary>Chi ha accesso ai dati?</summary>

L'accesso ai nostri server è limitato agli IP interni del cluster. Smart-me ha accesso ai dati dell'account dei clienti solo con il loro esplicito consenso

</details>

## Hosting e infrastruttura

<details id="wo-wird-die-anwendung-gehostet">
<summary>Dove è ospitata l'applicazione?</summary>

Tutti i servizi smart-me sono ospitati su server di Microsoft Azure Svizzera. Non gestiamo server propri.

</details>

<details id="wie-werden-die-daten-geschuetzt">
<summary>Come vengono protetti i dati?</summary>

I server sono protetti dalle misure di Microsoft Azure. Inoltre utilizziamo Cloudflare come Web Application Firewall (WAF) e per la gestione del carico.

</details>

<details id="wie-wird-die-verfuegbarkeit-der-systeme-sichergestellt">
<summary>Come viene garantita la disponibilità dei sistemi?</summary>

La disponibilità dei sistemi è garantita dall'infrastruttura di Microsoft Azure. 

[Ulteriori informazioni](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

</details>

## Sicurezza dei dati e crittografia

<details id="wie-werden-daten-verschluesselt">
<summary>Come vengono crittografati i dati?</summary>

I dati dell'applicazione non sono crittografati singolarmente, ma lo è il database nel suo insieme, in cui sono contenuti i dati dell'applicazione. 

La comunicazione tra contatori e cloud è crittografata con AES-256.

</details>

<details id="wie-werden-passwoerter-von-smart-me-konten-gehashed">
<summary>Come vengono sottoposte ad hashing le password degli account smart-me?</summary>

Le password vengono sottoposte ad hashing con RIPEMD-160 con salt dinamico.

</details>

<details id="unterstuetzen-wir-foederierte-identitaeten">
<summary>Supportiamo le identità federate?</summary>

No. Fa eccezione l'accesso tramite la nostra API, che oltre a Basic Auth supporta anche oAuth 2.0.

</details>

<details id="backups">
<summary>Backup</summary>

I dati dei contatori sono sottoposti a backup giornalieri da parte di Instaclustr. [Informazioni in merito](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

I dati dei clienti trattati tramite Freshdesk, Bexio o Stripe sono soggetti alla sicurezza dei dati dei rispettivi fornitori e quindi anche ai loro processi di backup.

</details>

## Direttive e processi di sicurezza

<details id="verfuegen-wir-ueber-spezifische-dokumentiere-informationssicherheitsrichtlinien">
<summary>Disponiamo di direttive specifiche e documentate sulla sicurezza delle informazioni?</summary>

No

</details>

<details id="haben-wir-dokumentiere-sichere-entwicklungsrichtlinien">
<summary>Disponiamo di direttive documentate per lo sviluppo sicuro?</summary>

No

</details>

<details id="verfolgen-wir-einen-sicheren-entwicklungsprozess">
<summary>Seguiamo un processo di sviluppo sicuro?</summary>

Sì, tuttavia i dettagli specifici sono confidenziali.

</details>

<details id="verfuegen-wir-ueber-ein-informationssicherheitszertifikat">
<summary>Disponiamo di un certificato di sicurezza delle informazioni?</summary>

No, tuttavia il nostro fornitore di infrastruttura cloud, Microsoft Azure, è certificato ISO27001.

</details>

<details id="fuehren-wir-it-sicherheitsaudits-bei-unseren-anbietern-durch">
<summary>Eseguiamo audit di sicurezza IT presso i nostri fornitori?</summary>

No

</details>

<details id="haben-wir-einen-dokumentierten-business-continuity-plan">
<summary>Disponiamo di un Business Continuity Plan documentato?</summary>

No

</details>

<details id="erlauben-wir-it-audits">
<summary>Consentiamo audit IT?</summary>

Sì, ma solo con informazioni pubblicamente disponibili

</details>

## Sicurezza degli endpoint e della rete

<details id="haben-wir-ein-konzept-zur-netzwerksegmentierung-implementiert">
<summary>Abbiamo implementato un concetto di segmentazione della rete?</summary>

Poiché la nostra applicazione non è ospitata localmente, la nostra architettura di rete è indipendente dall'architettura dei server. La segmentazione locale è la seguente:

- Rete di produzione 

- Wi-Fi ospiti

- Rete dell'ufficio

</details>

<details id="sensibilisieren-wir-mitarbeitende-fuer-cybersicherheit">
<summary>Sensibilizziamo i collaboratori sulla cybersicurezza?</summary>

Sì, vengono svolte formazioni sulla cybersicurezza:

- Frequenza: ogni sei mesi e durante l'onboarding.

- Formazioni aggiuntive: in base agli eventi attuali o alle minacce emergenti.

</details>

<details id="waren-wir-in-den-letzten-12-monaten-opfer-eines-sicherheitsvorfalls-oder-einer-datenpanne">
<summary>Negli ultimi 12 mesi siamo stati vittime di un incidente di sicurezza o di una violazione dei dati?</summary>

No

</details>

<details id="verfuegen-wir-ueber-dedizierte-cybersicherheitsressourcen">
<summary>Disponiamo di risorse dedicate alla cybersicurezza?</summary>

Sì, disponiamo di risorse interne dedicate alla cybersicurezza.

</details>

<details id="halten-wir-ihre-software-und-systeme-auf-dem-neuesten-stand">
<summary>Manteniamo i Suoi software e sistemi aggiornati?</summary>

Sì, tutti i sistemi e i dispositivi vengono aggiornati regolarmente alle versioni stabili più recenti.

</details>

<details id="haben-wir-eine-av-schutzloesung-installiert">
<summary>Abbiamo installato una soluzione di protezione AV?</summary>

Sì, tutti i dispositivi sono dotati di:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender come protezione antivirus (AV)

</details>

<details id="verfuegen-wir-ueber-eine-siem-loesung">
<summary>Disponiamo di una soluzione SIEM?</summary>

No

</details>
