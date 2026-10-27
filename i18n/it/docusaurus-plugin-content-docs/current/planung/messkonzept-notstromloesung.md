---
title: 'Schemi di misura per soluzioni di alimentazione d''emergenza'
slug: '/planung/messkonzept-notstromloesung'
description: 'Come misurare e conteggiare un impianto con sistema di alimentazione d''emergenza nello smart-me Billing.'
sidebar_label: 'Schema di misura alimentazione d''emergenza'
symbol: 'notstrom'
---
Come misurare e conteggiare un impianto con sistema di alimentazione d'emergenza nello smart-me Billing.

### Requisito

Ti serve un abbonamento smart-me Professional

## Principio di base

Il commutatore del sistema di alimentazione d'emergenza ha tre collegamenti: Grid (rete, dopo il contatore di bilancio Z1), Load (tutta la casa) e WR (inverter con fotovoltaico e batteria). Solo sulla linea tra commutatore e inverter scorre esclusivamente corrente fotovoltaica e della batteria. Se è accessibile, il contatore solare Z2 vi misura direttamente la produzione.

## Passo dopo passo

### 1 - Chiarire la struttura e scegliere la variante

Chiarisci con la scheda tecnica, lo schema elettrico o il produttore dove si trova la commutazione:

- Commutatore separato (backup box, backup controller, EPS box): la linea verso l'inverter è accessibile. → Variante A con contatore solare (consigliata).

- Commutatore integrato (inverter con porta Grid e porta Backup proprie): il collegamento si trova all'interno dell'apparecchio. → Variante B senza contatore solare. Per la variante A verifica inoltre se il produttore consente un contatore sulla linea verso l'inverter.


### 2 - Pianificare e installare i contatori

Variante A · commutatore separato

 Z1 prima dell'ingresso Grid, Z2 tra commutatore e inverter, ogni utenza con un proprio contatore (insieme Zb).

![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 1](/img/planung-messkonzept-notstromloesung/01.png)

Variante B · commutatore integrato

Z1 prima della porta Grid, ogni utenza senza eccezioni con un proprio contatore. La produzione viene calcolata dal consumo totale Zb e dal bilancio Z1.

![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 2](/img/planung-messkonzept-notstromloesung/02.png)

### 3 - Creare le tariffe

Mettere in servizio tutti i contatori e collocarli nella cartella dell'immobile. Poi creare nel Billing una tariffa solare (prezzo, validità e numero di tariffa come di consueto):

Variante A · con contatore solare

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV)

- Contatore solare o della batteria (Solar oder Batterie Zähler): Z2

- Contatore di bilancio (Bilanzzähler): Z1 (facoltativo, aumenta la precisione)


![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · senza contatore solare

- Tipo di tariffa (Tarif Typ): Tariffa solare incl. vRCP (Solartarif inkl. vZEV)

- Contatore di riferimento (Referenzzähler): Consumo + bilancio tutti (Verbrauch + Bilanz Alle)

- Contatore di bilancio (Bilanzzähler): Z1

- Tutti i contatori di consumo (Alle Verbrauchszähler): tutti i contatori delle utenze Z3…Zn, insieme Zb


![Schemi di misura per soluzioni di alimentazione d'emergenza – Figura 4](/img/planung-messkonzept-notstromloesung/04.png)

<Embed src="/embeds/planung-messkonzept-notstromloesung-01.html" aspect="2.305" title="Schema di misura alimentazione d'emergenza" />
