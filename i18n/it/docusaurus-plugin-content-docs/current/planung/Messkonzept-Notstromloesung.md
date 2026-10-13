---
title: 'Schemi di misura per soluzioni di alimentazione di emergenza'
slug: '/planung/Messkonzept-Notstromloesung'
description: 'Come misurare e conteggiare un impianto con sistema di alimentazione di emergenza in smart-me Billing.'
sidebar_label: 'Schema di misura per alimentazione di emergenza'
---
Come misurare e conteggiare un impianto con sistema di alimentazione di emergenza in smart-me Billing. 

### Requisiti

Ti serve un abbonamento smart-me Professional 

## Principio di base

Il commutatore del sistema di alimentazione di emergenza ha tre collegamenti: Grid (rete, dopo il contatore di bilancio Z1 ), Load (l'intera casa) e WR (inverter con fotovoltaico e batteria). Solo sulla linea tra il commutatore e l'inverter scorre esclusivamente corrente fotovoltaica e della batteria. Se questa linea è accessibile, il contatore solare Z2 vi misura direttamente la produzione. 

## Passo dopo passo

### 1 - Chiarire la struttura e scegliere la variante

Verifica con la scheda tecnica, lo schema elettrico o il produttore dove si trova la commutazione: 

- Commutatore separato (Backup-Box, Backup Controller, EPS-Box): la linea verso l'inverter è accessibile. → Variante A con contatore solare (consigliata). 

- Commutatore integrato (inverter con porta Grid e porta Backup proprie): il collegamento si trova all'interno dell'apparecchio. → Variante B senza contatore solare. Per la variante A verifica inoltre se il produttore consente un contatore sulla linea verso l'inverter. 


### 2 - Pianificare e installare i contatori

Variante A · commutatore separato

 Z1 prima dell'ingresso Grid, Z2 tra il commutatore e l'inverter, ogni utenza con un proprio contatore (insieme Zb ). 

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 1](/img/planung-messkonzept-notstromloesung/01.png)

Variante B · commutatore integrato 

Z1 prima della porta Grid, ogni utenza senza eccezioni con un proprio contatore. La produzione viene calcolata dal consumo totale Zb e dal bilancio Z1. 

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 2](/img/planung-messkonzept-notstromloesung/02.png)

### 3 - Creare le tariffe

Metti in servizio tutti i contatori e salvali nella cartella dell'immobile. Poi crea in Billing una tariffa solare (prezzo, validità e numero di tariffa come di consueto): 

Variante A · con contatore solare 

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. RCP virtuale (vRCP) (Solartarif inkl. vZEV) 

- Contatore solare o batteria (Solar oder Batterie Zähler): Z2 

- Contatore di bilancio (Bilanzzähler): Z1 (facoltativo, aumenta la precisione) 


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · senza contatore solare

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Contatore di riferimento (Referenzzähler): Consumo + bilancio tutti (Verbrauch + Bilanz Alle) 

- Contatore di bilancio (Bilanzzähler): Z1 

- Tutti i contatori di consumo (Alle Verbrauchszähler): tutti i contatori delle utenze Z3…Zn, insieme Zb 


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 4](/img/planung-messkonzept-notstromloesung/04.png)

<Embed src="/embeds/planung-messkonzept-notstromloesung-01.html" aspect="2.305" title="Schema di misura per soluzione di alimentazione di emergenza" />
