---
title: 'Licenze cloud'
slug: '/planung/cloud-lizenzen'
description: 'Tieni presente che lo stato Professional dell''account viene raggiunto solo se ogni punto di misura dispone di una licenza equivalente.'
sidebar_label: 'Licenze cloud'
---
Tieni presente che lo stato Professional dell'account viene raggiunto solo se ogni punto di misura dispone di una licenza equivalente.

## Basic

Standard per contatori API, OCPP e M-Bus

[M-Bus Gateway](/produkte/m-bus-gateway) 

\---

Report: esportazione CSV manuale

1 valore di misura ogni 15 minuti. (API)

API: solo uso privato e comando\*\*

## Limited

Standard per

[Contatore monofase](/produkte/1-phasen-zaehler) 

[Contatore trifase Telstar](/produkte/telstar) 

[Contatore trifase Telstar CT](/produkte/Telstar-CT) 

[Modulo Kamstrup (fuori produzione)](/produkte/kamstrup-modul) 

[Stazione di ricarica Pico](/produkte/pico-ladestation) 

\---

[Azioni se/allora](/konfiguration/wenndann-aktionen) 

Report

Profili di carico

Gestione avanzata di cartelle e contatori

[Public Links](/) 

1 valore di misura al minuto. (API)

API: solo uso privato e comando\*\*

## Professional\*

Ampliamento possibile per tutti i punti di misura nella smart-me Cloud

\---

[Billing](/konfiguration/billing) 

[Contatori virtuali](/konfiguration/billing/virtuelle-zaehler) 

[Auto Export](/schnittstellen/auto-export) 

[Configurazione degli utenti](/konfiguration/benutzerkonfiguration) 

[Gestione del carico dinamica Pico](/) 

oAuth

[Azioni se/allora](/konfiguration/wenndann-aktionen) 

Report

Profili di carico

Gestione avanzata di cartelle e contatori

[Public Links](/) 

[Modbus TCP](/schnittstellen/modbus-tcp) 

1 valore di misura al secondo. (API)

API: per uso privato e commerciale

[Stato di salute del sistema](/stoerungsbehebung/systemgesundheit)

\*Il rispettivo livello di abbonamento viene raggiunto solo se ogni punto di misura nell'account ha lo stesso livello di licenza.

\*\* Un uso commerciale dell'API richiede sempre il livello di abbonamento Professional.

Professional = tutti i contatori dell'account hanno una licenza Professional.

Il contatore con il livello di abbonamento più basso nell'account determina il livello di abbonamento complessivo dell'account. 

Non sono possibili account misti: essi rimangono nello stato Basic o Limited se il numero di licenze non è sufficiente.

## Calcolo del numero corretto di licenze Professional

Affinché il tuo account raggiunga lo stato Professional, ti serve almeno una licenza Professional per ogni contatore (anche virtuale) presente nell'account.

Non è possibile mischiare contatori con licenza e contatori senza licenza in uno stesso account.

Regola empirica per RCP e vRCP con tariffa solare e / o batteria unitaria:

RCP con 1x impianto FV: numero di contatori = numero di licenze
RCP con \>1x impianto FV (visualizzazioni): numero di contatori + 1 (virtuale)

Regola empirica per sistemi RCP con tariffa solare e batteria separate (solo sistemi accoppiati in AC):

RCP con 1x impianto FV: numero di contatori + 1 (virtuale)

RCP con >1x impianto FV: numero di contatori + 2 (virtuale)

### Esempio elettricità con contatori smart-me (1x FV)

3x Telstar 80A
2x Telstar CT

Totale Professional tutti i tipi di energia: 5 pezzi

### Esempio elettricità con contatori smart-me + calore / acqua con M-Bus Gateway (1x FV)

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

L'installazione descritta sopra, con diversi vettori energetici, può essere licenziata in due modi.

### Abbonamento mensile

L'installazione richiede 18 licenze Professional.

Queste possono essere acquistate a un importo mensile e coprono in ogni momento tutti i tipi di energia.

- 18x licenza Professional mensile tutti i tipi di energia


L'abbonamento mensile è soggetto a effetti inflazionistici e deflazionistici.

### Modello di licenza pluriennale

L'installazione richiede in totale 18 licenze Professional.

- 6x licenza Professional tutti i tipi di energia, 10 anni (elettricità + contatori virtuali)

- 12x licenza Professional calore / acqua / gas, 10 anni


Le licenze pluriennali sono in media più convenienti e non sono soggette a effetti inflazionistici o deflazionistici durante il periodo di utilizzo.

## Sei un cliente "Professional"?

Con le figure sottostanti scopri facilmente se ti servono licenze Professional nel tuo account. 

### Conteggio RCP

Nel conteggio RCP è determinante quale sistema tariffario deve essere rappresentato e se il conteggio deve avvenire in modo automatizzato.

![Licenze cloud – Figura 1](/img/planung-cloud-lizenzen/01.png)

### Comando RCP

![Licenze cloud – Figura 2](/img/planung-cloud-lizenzen/02.png)
