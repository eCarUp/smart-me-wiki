---
title: 'Schema di misura produttori dietro le case'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Spieghiamo qui quali misure occorre adottare per rappresentare lo schema di misura per più produttori dietro case diverse.'
sidebar_label: 'Schema di misura produttori dietro le case'
symbol: 'solar'
---
Spieghiamo qui quali misure occorre adottare per rappresentare lo schema di misura per più produttori dietro case diverse.

### Requisito

Ti serve un abbonamento smart-me Professional

## Avvertenze importanti

smart-me sconsiglia questo schema di misura per i seguenti motivi:

- Attualmente nel sistema smart-me non esiste una soluzione completamente automatica per rappresentare questo schema di misura.

    - Nota: i sistemi di terzi di smart-me, come ad es. [egonline](/drittsysteme/egonline), offrono soluzioni compatibili con i contatori smart-me. Informati direttamente presso i rispettivi fornitori.

- Occorre prevedere un onere manuale di circa 30 minuti per unità di conteggio e periodo di conteggio.

- A causa della complessità dell'impianto, ciò può comportare numerose richieste di chiarimento. smart-me si riserva il diritto di fatturare l'onere per le richieste di supporto.

- La determinazione del numero di kWh venduti reciprocamente all'interno del RCP (raggruppamento ai fini del consumo proprio) avviene come media sul periodo di conteggio in base all'eccedenza delle singole parti. Lo stesso vale per la reimmissione verso l'azienda elettrica.

- L'autoconsumo di ciascuna casa che dispone anche di un impianto fotovoltaico non può essere determinato.

- I grafici messi a disposizione da smart-me non sono compatibili con questo schema di misura.


smart-me si riserva il diritto di elencare ulteriori limitazioni. Attualmente solo pochi edifici sono dotati di questo schema di misura. Per questo motivo smart-me non si concentra sullo sviluppo di questi oggetti. È possibile che in futuro diventino più semplici, ma nello sviluppo non poniamo l'accento su questo schema di misura.

## Schema di misura

Vengono misurati il bilancio, le case e, se presenti, i servizi generali.

La misurazione del fotovoltaico è facoltativa e non offre alcun vantaggio per il conteggio.

![Schema di misura produttori dietro le case – Figura 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Schema di misura produttori dietro le case – Figura 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Configurazione

Le indicazioni seguenti presuppongono che la configurazione di uno smart-me [Billing](/konfiguration/billing) con lo schema di misura standard sia nota.

Contatori virtuali (Virtuelle Zähler)

Somma di tutti i contatori rilevanti per il conteggio.

Nome (Name): Consumo totale + produzione (Gesamtverbrauch + Produktion)



![Schema di misura produttori dietro le case – Figura 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Tariffe virtuali (Virtuelle Tarife)

Configurazione del [Billing](/konfiguration/billing) secondo lo schema di misura standard 

Differenza nella tariffa virtuale:

- Tipo di tariffa (Tarif Typ): Tariffa batteria (Batterie Tarif)

- Contatore solare o batteria (Solar oder Batterie Zähler): Consumo totale + produzione (Gesamtverbrauch + Produktion)

- Consumo totale (Gesamtverbrauch): Consumo totale + produzione (Gesamtverbrauch + Produktion)

- Contatore di bilancio (Bilanzzähler): Contatore principale (Hauptzähler)


![Schema di misura produttori dietro le case – Figura 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Conteggio

Le indicazioni seguenti presuppongono che il conteggio per uno smart-me [Billing](/konfiguration/billing) con lo schema di misura standard sia noto.

Compilare l'Excel

- [Schema di misura produttori dietro le case](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 

Scopo dell'Excel

- Determina quale importo può essere accreditato a ciascuna parte.

Informazioni necessarie

- Conteggio dell'azienda elettrica locale

- Valori del report da smart-me

- Fatture PDF (Billing) da smart-me.

Logica di calcolo

- Viene determinata l'eccedenza per ogni casa (celle da B35 a B43)

- Viene determinata la quota di energia fotovoltaica per ogni casa (celle da C35 a C43)

- Ripartizione proporzionale in base all'eccedenza, come media sull'intero periodo di conteggio

![Schema di misura produttori dietro le case – Figura 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Aggiungere la voce Altro (Sonstiges)

I valori secondo l'accredito dell'Excel possono essere inseriti come importo negativo per ogni unità di conteggio.

![Schema di misura produttori dietro le case – Figura 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Rigenerare la fattura

Nello smart-me Billing

![Schema di misura produttori dietro le case – Figura 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
