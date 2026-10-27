---
title: 'Licenze cloud'
slug: '/planung/cloud-lizenzen'
description: 'Tieni presente che lo stato Professional dell''account viene raggiunto solo se ogni punto di misura dispone di una licenza equivalente.'
sidebar_label: 'Licenze cloud'
symbol: 'lizenz'
---
Tieni presente che lo stato Professional dell'account viene raggiunto solo se ogni punto di misura dispone di una licenza equivalente.

## I tre livelli di licenza

<Kacheln min="14rem">

<Kachel titel="Basic">

Standard per contatori API, OCPP e M-Bus:

- [M-Bus Gateway](/produkte/m-bus-gateway)

**Funzionalità**

- Report: esportazione CSV manuale
- 1 valore di misura ogni 15 minuti (API)
- API: solo uso privato e controllo \*\*

</Kachel>

<Kachel titel="Limited">

Standard per:

- [Contatore monofase](/produkte/1-phasen-zaehler-80a)
- [Contatore trifase Telstar](/produkte/telstar-80a)
- [Contatore trifase Telstar CT](/produkte/telstar-ct)
- [Modulo Kamstrup](/produkte/kamstrup-modul) (fuori produzione)
- [Stazione di ricarica Pico](/produkte/pico-ladestation)

**Funzionalità**

- [Azioni se/allora](/konfiguration/wenndann-aktionen) (senza regolazione Pico)
- Report
- Profili di carico
- Gestione avanzata di cartelle e contatori
- [Link pubblici](/konfiguration/visualisierung)
- 1 valore di misura al minuto (API)
- API: solo uso privato e controllo \*\*

</Kachel>

<Kachel titel="Professional *">

Estensione possibile per tutti i punti di misura nel cloud smart-me.

**Funzionalità: tutto quanto incluso in Limited, inoltre**

- [Billing](/konfiguration/billing)
- [Contatori virtuali](/konfiguration/virtuelle-zaehler)
- [Auto Export](/schnittstellen/auto-export)
- [Configurazione utente](/konfiguration/benutzerkonfiguration)
- [Gestione dinamica del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)
- Se/allora → regolazione Pico
- oAuth
- [Modbus TCP](/schnittstellen/modbus-tcp)
- [Salute del sistema](/stoerungsbehebung/systemgesundheit)
- 1 valore di misura al secondo (API)
- API: per uso privato **e commerciale**

</Kachel>

</Kacheln>

\*Il rispettivo livello di abbonamento viene raggiunto solo se ogni punto di misura nell'account ha lo stesso livello di licenza.

\*\* Un uso commerciale dell'API richiede sempre il livello di abbonamento Professional.

Professional = tutti i contatori dell'account hanno una licenza Professional.

Il contatore con il livello di abbonamento più basso nell'account determina il livello di abbonamento complessivo dell'account.

Gli account misti non sono possibili e rimangono nello stato Basic o Limited se il numero di licenze non è sufficiente.

## Calcolo del numero corretto di licenze Professional

Affinché il tuo account raggiunga lo stato Professional, ti serve almeno una licenza Professional per ogni contatore (anche virtuale) presente nell'account.

Non è possibile combinare in un account contatori con licenza e contatori senza licenza.

Regola empirica per RCP (raggruppamento ai fini del consumo proprio) e RCP virtuale (vRCP) con tariffa solare e/o della batteria uniforme:

RCP con 1 impianto fotovoltaico: numero di contatori = numero di licenze
RCP con \>1 impianto fotovoltaico (visualizzazioni): numero di contatori + 1 (virtuale)

Regola empirica per sistemi RCP con tariffa solare e tariffa della batteria separate (solo sistemi con accoppiamento AC):

RCP con 1 impianto fotovoltaico: numero di contatori + 1 (virtuale)

RCP con >1 impianto fotovoltaico: numero di contatori + 2 (virtuali)

### Esempio elettricità con contatori smart-me (1 impianto fotovoltaico)

3x Telstar 80A
2x Telstar CT

Totale Professional tutti i tipi di energia: 5 pezzi

### Esempio elettricità con contatori smart-me + calore / acqua con M-Bus Gateway (1 impianto fotovoltaico)

3x Telstar 80A
2x Telstar CT

Licenze Professional tutti i tipi di energia: 5 pezzi

1x M-Bus Gateway con contatori di calore / acqua collegati

3x calore
3x freddo
3x contatori dell'acqua calda sanitaria
3x contatori dell'acqua fredda

Licenze Professional per calore / acqua / gas: 12 pezzi

Totale licenze Professional: 17 pezzi

Nota: l'M-Bus Gateway stesso non richiede alcuna licenza.

## Copertura delle licenze

L'installazione descritta sopra con diversi vettori energetici può essere coperta da licenze in due modi.

### Abbonamento mensile

L'installazione richiede 18 licenze Professional.

Queste possono essere acquistate a un importo mensile e coprono in ogni momento tutti i tipi di energia.

- 18x licenza Professional mensile tutti i tipi di energia


L'abbonamento mensile è soggetto agli effetti dell'inflazione e della deflazione.

### Modello di licenza pluriennale

L'installazione richiede in totale 18 licenze Professional.

- 6x licenza Professional tutti i tipi di energia, 10 anni (elettricità + contatori virtuali)

- 12x licenza Professional calore / acqua / gas, 10 anni


Le licenze pluriennali sono in media più convenienti e non sono soggette agli effetti dell'inflazione o della deflazione durante il periodo di utilizzo.

## Sei un cliente "Professional"?

Con le figure riportate di seguito puoi scoprire facilmente se ti servono licenze Professional nel tuo account. 

### Conteggio RCP

Nel conteggio RCP (raggruppamento ai fini del consumo proprio) è determinante quale sistema tariffario deve essere rappresentato e se il conteggio deve avvenire in modo automatizzato.

![Licenze cloud – Figura 1](/img/planung-cloud-lizenzen/01.png)

### Controllo RCP

![Licenze cloud – Figura 2](/img/planung-cloud-lizenzen/02.png)
