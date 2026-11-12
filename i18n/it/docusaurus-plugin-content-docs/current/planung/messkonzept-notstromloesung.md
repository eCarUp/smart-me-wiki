---
title: 'Schemi di misura per soluzioni di alimentazione d''emergenza'
slug: '/planung/messkonzept-notstromloesung'
description: 'Come misurare e conteggiare un impianto con sistema di alimentazione d''emergenza in smart-me Billing.'
sidebar_label: 'Schema di misura alimentazione d''emergenza'
symbol: 'notstrom'
---
Come misurare e conteggiare un impianto con sistema di alimentazione d'emergenza in smart-me Billing. 

### Requisito

È necessario un abbonamento smart-me Professional 

## Principio di base

Il commutatore del sistema di alimentazione d'emergenza ha tre collegamenti: Grid (rete, dopo il contatore di bilancio Z1 ), Load (tutta la casa) e WR (inverter con fotovoltaico e batteria). Solo sulla linea tra il commutatore e l'inverter scorre esclusivamente corrente fotovoltaica e della batteria. Se questa linea è accessibile, il contatore solare Z2 misura lì direttamente la produzione. 

## Passo dopo passo

### 1 - Chiarire la configurazione e scegliere la variante

Verifichi con la scheda tecnica, lo schema elettrico o il produttore dove si trova la commutazione: 

- Commutatore separato (backup box, backup controller, EPS box): la linea verso l'inverter è accessibile. → Variante A con contatore solare (consigliata). 

- Commutatore integrato (inverter con porta Grid e porta Backup proprie): il collegamento si trova all'interno dell'apparecchio. → Variante B senza contatore solare. Per la variante A verifichi inoltre se il produttore consente un contatore sulla linea verso l'inverter. 


### 2 - Pianificare e installare i contatori

Variante A · commutatore separato

 Z1 prima dell'ingresso Grid, Z2 tra il commutatore e l'inverter, ogni utenza con un proprio contatore (insieme Zb ). 

![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 1](/img/planung-messkonzept-notstromloesung/01.png)

Variante B · commutatore integrato 

Z1 prima della porta Grid, ogni utenza senza eccezioni con un proprio contatore. La produzione viene calcolata dal consumo totale Zb e dal bilancio Z1. 

![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 2](/img/planung-messkonzept-notstromloesung/02.png)

### 3 - Creare le tariffe

Mettere in servizio tutti i contatori e collocarli nella cartella dell'immobile. Quindi creare in Billing una tariffa solare (prezzo, validità e numero di tariffa come di consueto): 

Variante A · con contatore solare 

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Contatore solare o batteria (Solar oder Batterie Zähler): Z2 

- Contatore di bilancio (Bilanzzähler): Z1 (opzionale, aumenta la precisione) 


![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · senza contatore solare

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Contatore di riferimento (Referenzzähler): Consumo + bilancio tutti (Verbrauch + Bilanz Alle) 

- Contatore di bilancio (Bilanzzähler): Z1 

- Tutti i contatori di consumo (Alle Verbrauchszähler): tutti i contatori delle utenze Z3…Zn, insieme Zb 


![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 4](/img/planung-messkonzept-notstromloesung/04.png)

## Le due varianti a confronto

| Caratteristica | A · commutatore separato | B · commutatore integrato |
| --- | --- | --- |
| Contatore di bilancio **Z1** | necessario | necessario |
| Contatore solare **Z2** | necessario | non possibile |
| Consumo totale **Zb** | necessario | necessario |
| Contatori delle utenze | necessari | necessari, senza eccezioni |
| Tipo di tariffa | Tariffa solare (consumo/FV) | Tariffa solare incl. vRCP, riferimento consumo + bilancio |
| Visualizzazione | possibile | non possibile |
| Analisi in caso di differenze rispetto alla fattura dell'azienda elettrica | completa | solo limitata |
| Raccomandazione | **Standard** | se A non è possibile |
