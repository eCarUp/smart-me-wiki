---
title: 'Schema di misura produttori dietro le case'
slug: '/planung/messkonzept-produzenten-hinter-haeuser'
description: 'Spieghiamo qui quali misure devono essere adottate per rappresentare lo schema di misura per più produttori dietro case diverse.'
sidebar_label: 'Schema di misura produttori dietro le case'
---
Spieghiamo qui quali misure devono essere adottate per rappresentare lo schema di misura per più produttori dietro case diverse.

### Requisito

Ti serve un abbonamento smart-me Professional

## Note importanti

smart-me sconsiglia questo schema di misura per i motivi seguenti:

- Attualmente non esiste una soluzione completamente automatica nel sistema smart-me per rappresentare questo schema di misura.

    - Nota: i sistemi di terzi di smart-me, come ad esempio [egonline](/drittsysteme/egonline), offrono soluzioni compatibili con i contatori smart-me. Informati direttamente presso i rispettivi fornitori.

- Occorre calcolare un onere manuale di circa 30 minuti per unità di conteggio e periodo di conteggio.

- A causa della complessità dell'impianto, questo può comportare numerose richieste di chiarimento. smart-me si riserva il diritto di fatturare l'onere per le richieste di supporto.

- La determinazione del numero di kWh che vengono venduti reciprocamente all'interno del RCP (raggruppamento ai fini del consumo proprio) avviene in media sul periodo di conteggio in base all'eccedenza delle singole parti. Lo stesso vale per la ritrasmissione all'azienda elettrica.

- Non è possibile determinare l'autoconsumo di ogni casa che dispone anche di un impianto fotovoltaico.

- I grafici messi a disposizione da smart-me non sono compatibili con questo schema di misura.


smart-me si riserva il diritto di elencare ulteriori limitazioni. Attualmente solo pochi edifici sono dotati di questo schema di misura. Per questo motivo smart-me non si concentra sullo sviluppo di questi oggetti. È possibile che in futuro diventino più semplici, ma nello sviluppo non poniamo l'accento su questo schema di misura.

## Schema di misura

Vengono misurati il bilancio, le case e, se presente, il consumo generale.

La misurazione del FV è opzionale e non offre alcun vantaggio per il conteggio.

![Schema di misura produttori dietro le case – Figura 1](/img/planung-messkonzept-produzenten-hinter-haeuser/01.png)

![Schema di misura produttori dietro le case – Figura 2](/img/planung-messkonzept-produzenten-hinter-haeuser/02.png)

## Configurazione

Le indicazioni seguenti presuppongono che sia nota la configurazione per un [Billing](/konfiguration/billing) smart-me con lo schema di misura standard.

Contatori virtuali

Somma di tutti i contatori rilevanti per il conteggio.

Nome: Consumo totale + produzione (Gesamtverbrauch + Produktion)



![Schema di misura produttori dietro le case – Figura 3](/img/planung-messkonzept-produzenten-hinter-haeuser/03.png)

Tariffe virtuali

Configurazione [Billing](/konfiguration/billing) secondo lo schema di misura standard 

Differenza nella tariffa virtuale:

- Tipo di tariffa (Tarif Typ): tariffa batteria (Batterie Tarif)

- Contatore solare o batteria (Solar oder Batterie Zähler): Consumo totale + produzione (Gesamtverbrauch + Produktion)

- Consumo totale (Gesamtverbrauch): Consumo totale + produzione (Gesamtverbrauch + Produktion)

- Contatore di bilancio (Bilanzzähler): contatore principale (Hauptzähler)


![Schema di misura produttori dietro le case – Figura 4](/img/planung-messkonzept-produzenten-hinter-haeuser/04.png)

## Conteggio

Le indicazioni seguenti presuppongono che sia noto il conteggio per un [Billing](/konfiguration/billing) smart-me con lo schema di misura standard.

Compilare l'Excel

- [Schema di misura produttori dietro le case](https://drive.google.com/uc?export=download&id=1gY9-V7Xv2ECXacQk_G1rQwdHVdSXMaQh) 


Scopo dell'Excel

- Determina quale importo può essere accreditato per ogni parte.


Informazioni necessarie

- Conteggio dell'azienda elettrica locale

- Valori dei report da smart-me

- Fatture PDF (Billing) da smart-me.


Logica di calcolo

- Viene determinata l'eccedenza per ogni casa (celle da B35 a B43)

- Viene determinata la quota di elettricità FV per ogni casa (celle da C35 a C43)

- Ripartizione proporzionale in base all'eccedenza, mediata sull'intero periodo di conteggio


![Schema di misura produttori dietro le case – Figura 5](/img/planung-messkonzept-produzenten-hinter-haeuser/05.png)

Aggiungere la posizione Varie (Sonstiges)

I valori secondo l'accredito dell'Excel possono essere inseriti come importo negativo per ogni unità di conteggio.

![Schema di misura produttori dietro le case – Figura 6](/img/planung-messkonzept-produzenten-hinter-haeuser/06.png)

Generare nuovamente la fattura

Nel Billing di smart-me

![Schema di misura produttori dietro le case – Figura 7](/img/planung-messkonzept-produzenten-hinter-haeuser/07.png)
