---
title: 'Schemi di misura per soluzioni di alimentazione di emergenza'
slug: '/planung/messkonzept-notstromloesung'
description: 'Come misurare e conteggiare in smart-me Billing un impianto con sistema di alimentazione di emergenza.'
sidebar_label: 'Schema di misura alimentazione di emergenza'
symbol: 'notstrom'
---
Come misurare e conteggiare in smart-me Billing un impianto con sistema di alimentazione di emergenza. 

### Prerequisito

Ti serve un abbonamento smart-me Professional 

## Principio di base

Il commutatore del sistema di alimentazione di emergenza ha tre collegamenti: Grid (rete, dopo il contatore di bilancio Z1 ), Load (tutta la casa) e WR (inverter con FV e batteria). Solo sulla linea tra commutatore e inverter scorre esclusivamente corrente fotovoltaica e della batteria. Se questa linea è accessibile, il contatore solare Z2 misura lì direttamente la produzione. 

## Passo dopo passo

### 1 - Chiarire la struttura e scegliere la variante

Verifica con la scheda tecnica, lo schema elettrico o il produttore dove si trova la commutazione: 

- Commutatore separato (Backup-Box, Backup Controller, EPS-Box): la linea verso l'inverter è accessibile. → Variante A con contatore solare (consigliata). 

- Commutatore integrato (inverter con porta Grid e porta Backup propria): il collegamento si trova all'interno dell'apparecchio. → Variante B senza contatore solare. Per la variante A verifica inoltre se il produttore consente un contatore sulla linea verso l'inverter. 


### 2 - Pianificare e installare i contatori

Variante A · commutatore separato

 Z1 prima dell'ingresso Grid, Z2 tra commutatore e inverter, ogni utenza con un proprio contatore (insieme Zb ). 

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 1](/img/planung-messkonzept-notstromloesung/01_IT.png)

Variante B · commutatore integrato 

Z1 prima della porta Grid, ogni utenza senza eccezioni con un proprio contatore. La produzione viene calcolata dal consumo totale Zb e dal bilancio Z1. 

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 2](/img/planung-messkonzept-notstromloesung/02_IT.png)

### 3 - Creare le tariffe

Metti in servizio tutti i contatori e archiviali nella cartella dell'immobile. Poi crea nel Billing una tariffa solare (prezzo, validità e numero di tariffa come di consueto): 

Variante A · con contatore solare 

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Contatore solare o della batteria (Solar oder Batterie Zähler): Z2 

- Contatore di bilancio (Bilanzzähler): Z1 (opzionale, aumenta la precisione) 


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · senza contatore solare

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Contatore di riferimento (Referenzzähler): Consumo + bilancio tutti (Verbrauch + Bilanz Alle) 

- Contatore di bilancio (Bilanzzähler): Z1 

- Tutti i contatori di consumo (Alle Verbrauchszähler): tutti i contatori delle utenze Z3…Zn, insieme Zb 


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 4](/img/planung-messkonzept-notstromloesung/04.png)

## Le due varianti a confronto

| Caratteristica | A · commutatore separato | B · commutatore integrato |
| --- | --- | --- |
| Contatore di bilanciamento **Z1** | necessario | necessario |
| Contatore solare **Z2** | necessario | non possibile |
| Consumo totale **Zb** | necessario | necessario |
| Contatori delle utenze | necessari | necessari, senza eccezioni |
| Tipo di tariffa | Tariffa solare (consumo/FV) (Solartarif (Verbrauch/PV)) | Tariffa solare incl. vRCP (Solartarif inkl. vZEV), riferimento consumo + bilancio |
| Visualizzazione | possibile | non possibile |
| Analisi in caso di differenze rispetto alla fattura dell'azienda elettrica | completa | solo limitata |
| Raccomandazione | **Standard** | se A non è possibile |
