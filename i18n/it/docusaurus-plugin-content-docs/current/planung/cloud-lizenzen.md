---
title: 'Licenze cloud'
slug: '/planung/cloud-lizenzen'
description: 'Tieni presente che l''account raggiunge lo stato Professional solo se ogni punto di misura dispone di una licenza equivalente.'
sidebar_label: 'Licenze cloud'
symbol: 'lizenz'
---
Tieni presente che l'account raggiunge lo stato Professional solo se ogni punto di misura dispone di una licenza equivalente.

## I tre livelli di licenza

<Kacheln min="14rem">

<Kachel titel="Basic">

Standard per contatori API, OCPP e M-Bus:

- [Gateway M-Bus](/produkte/m-bus-gateway)

**Funzioni incluse**

- Report: esportazione CSV manuale
- 1 valore di misura ogni 15 minuti (API)
- API: solo uso privato e comando \*\*

</Kachel>

<Kachel titel="Limited">

Standard per:

- [Contatore monofase](/produkte/1-phasen-zaehler-80a)
- [Contatore trifase Telstar](/produkte/telstar-80a)
- [Contatore trifase Telstar CT](/produkte/telstar-ct)
- [Modulo Kamstrup](/produkte/kamstrup-modul) (fuori produzione)
- [Stazione di ricarica Pico](/produkte/pico-ladestation)

**Funzioni incluse**

- [Azioni se/allora](/konfiguration/wenndann-aktionen) (senza regolazione Pico)
- Report
- Profili di carico
- Gestione avanzata di cartelle e contatori
- [Public Links](/konfiguration/visualisierung)
- 1 valore di misura al minuto (API)
- API: solo uso privato e comando \*\*

</Kachel>

<Kachel titel="Professional *">

Estensione possibile per tutti i punti di misura nella smart-me Cloud.

**Funzioni incluse: tutto quanto previsto da Limited, più**

- [Billing](/konfiguration/billing)
- [Contatori virtuali](/konfiguration/virtuelle-zaehler)
- [Auto Export](/schnittstellen/auto-export)
- [Configurazione degli utenti](/konfiguration/benutzerkonfiguration)
- [Gestione del carico dinamica Pico](/produkte/pico-ladestation/pico-lastmanagement)
- Se/allora → regolazione Pico
- oAuth
- [Modbus TCP](/schnittstellen/modbus-tcp)
- [Salute del sistema](/stoerungsbehebung/systemgesundheit)
- 1 valore di misura al secondo (API)
- API: per uso privato **e commerciale**

</Kachel>

</Kacheln>

\*Il rispettivo livello di abbonamento viene raggiunto solo se ogni punto di misura dell'account ha lo stesso livello di licenza.

\*\* Un uso commerciale dell'API richiede sempre il livello di abbonamento Professional.

Professional = tutti i contatori dell'account hanno una licenza Professional.

Il contatore con il livello di abbonamento più basso nell'account determina il livello di abbonamento complessivo dell'account.

Gli account misti non sono possibili e rimangono nello stato Basic o Limited se il numero di licenze non è sufficiente.

## Calcolare il numero corretto di licenze Professional

Affinché il tuo account raggiunga lo stato Professional, ti serve almeno una licenza Professional per ogni contatore (anche virtuale) presente nell'account.

Non è possibile combinare in un account contatori con licenza e contatori senza licenza.

Regola pratica per RCP (raggruppamento ai fini del consumo proprio) e RCP virtuale (vRCP) con tariffa unica per solare e/o batteria:

- RCP con 1 impianto FV: numero di contatori = numero di licenze
- RCP con \>1 impianto FV (visualizzazioni): numero di contatori + 1 (virtuale)

Regola pratica per sistemi RCP con tariffa separata per solare e batteria (solo sistemi con accoppiamento AC):

- RCP con 1 impianto FV: numero di contatori + 1 (virtuale)
- RCP con >1 impianto FV: numero di contatori + 2 (virtuali)

### Esempio elettricità con contatori smart-me (1 impianto FV)

- 3x Telstar 80A
- 2x Telstar CT

Totale Professional tutti i tipi di energia: 5 pezzi

### Esempio elettricità con contatori smart-me + calore / acqua con M-Bus (1 impianto FV)

- 3x Telstar 80A
- 2x Telstar CT

Licenze Professional tutti i tipi di energia: 5 pezzi

1x Gateway M-Bus con contatori di calore / acqua collegati

- 3x calore
- 3x freddo
- 3x contatori dell'acqua calda sanitaria
- 3x contatori dell'acqua fredda

Licenze Professional per calore / acqua / gas: 12 pezzi

**Totale licenze Professional: 17 pezzi**

**Nota:** il Gateway M-Bus stesso non richiede alcuna licenza.

## Copertura delle licenze

L'installazione descritta sopra con diversi vettori energetici può ora essere coperta da licenze in due modi.

### Abbonamento mensile

L'installazione richiede 18 licenze Professional.

Queste possono essere acquistate a un importo mensile e coprono in qualsiasi momento tutti i tipi di energia.

- 18x licenza Professional mensile tutti i tipi di energia

L'abbonamento mensile è soggetto agli effetti di inflazione e deflazione.

### Modello di licenza pluriennale

L'installazione richiede in totale 18 licenze Professional.

- 6x licenza Professional tutti i tipi di energia, 10 anni (elettricità + contatori virtuali)
- 12x licenza Professional calore / acqua / gas, 10 anni


Le licenze pluriennali sono in media più convenienti e non sono soggette a effetti di inflazione o deflazione durante il periodo di utilizzo.

## Sei un cliente "Professional"?

Con le figure riportate qui sotto scopri facilmente se nel tuo account ti servono licenze Professional. 

### Conteggio RCP

Nel conteggio RCP (raggruppamento ai fini del consumo proprio) è determinante quale sistema tariffario debba essere rappresentato e se il conteggio debba avvenire in modo automatizzato.

<div className="bild--voll">

![Licenze cloud – Figura 1](/img/planung-cloud-lizenzen/01_IT.png)

</div>

### Controllo RCP

<div className="bild--voll">

![Licenze cloud – Figura 2](/img/planung-cloud-lizenzen/02_IT.png)

</div>
