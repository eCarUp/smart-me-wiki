---
title: 'Preparare il conteggio / la rimunerazione'
slug: '/planung/abrechnung-vorbereiten'
description: 'Conteggio dell''elettricità con il conteggio dei costi energetici smart-me'
sidebar_label: 'Preparare il conteggio / la rimunerazione'
---
[Inglese](/planung/abrechnung-vorbereiten)

## Conteggio RCP

### Conteggio dell'elettricità con il conteggio dei costi energetici smart-me

Questo tipo di conteggio supporta la tariffa unica, la tariffa doppia o le tariffe multiple con tariffe solari.

Per il conteggio della parte elettrica del RCP (raggruppamento ai fini del consumo proprio) ti servono:

- Lo stato Professional dell'account e lo smart-me Billing.

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe.

- Non necessario: un segnale tariffario esterno collegato a tutti i contatori


### Conteggio di calore e acqua con la funzione VEWA (conforme a VEWA)

Affinché tutti i costi energetici possano essere generati in un conteggio delle spese accessorie di riscaldamento conforme a VEWA, ti servono:

- Lo stato Professional dell'account e lo [smart-me Billing con funzione VEWA](/konfiguration/billing/vewa-abrechnung)

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe

- Il riepilogo dei costi maturati per le energie da conteggiare

- La guida VEWA

- Opzionale: un software immobiliare per le esportazioni DTA-VHKA

- Opzionale: un primo conteggio dei costi energetici di un fornitore di servizi per le spese accessorie di riscaldamento oppure le informazioni necessarie del vostro progettista sanitario e di riscaldamento.




## Conteggio della mobilità elettrica nel RCP

![Preparare il conteggio / la rimunerazione – Figura 1](/img/planung-abrechnung-vorbereiten/01.png)

## Guida VEWA e RCP

Guida all'autoconsumo di SvizzeraEnergia (aspetti generali, forme giuridiche, costi): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modello VEWA per il conteggio dei costi dell'energia e dell'acqua in base al consumo: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Funzionamento delle tariffe e rimborso agli investitori

### Funzionamento dell'identificazione della tariffa e della ripartizione sui consumatori

L'identificazione di una tariffa dipende principalmente dagli strumenti di misura che le sono assegnati e da una componente temporale opzionale (azione SE/ALLORA (WENN/DANN Aktion)).

- Le tariffe di rete valgono come quantità di elettricità residua: ciò significa che si applicano sempre all'elettricità che non è stato possibile attribuire ad altre tariffe tramite le misurazioni.

- Le tariffe solari e delle batterie considerano i prelievi e le forniture dei punti di misura rilevanti, come ad es. il contatore FV e il consumo totale oppure la misurazione di bilancio, più una componente temporale opzionale.


### Determinazione delle quote del mix elettrico per ogni 15 minuti

Il mix elettrico viene sempre determinato per 15 minuti e poi applicato in egual misura a tutti i consumatori. 

Esempio:

- La batteria fornisce 20 kWh

- L'impianto solare fornisce 100 kWh

- Il consumo nell'intero immobile corrisponde a 200 kWh

In questo caso, la quota percentuale dei singoli fornitori sul consumo totale si calcola secondo la seguente formula:

% quota del mix elettrico = fornitura del fornitore / consumo totale dell'immobile

- Quota batteria = 20 kWh / 200 kWh = 10%

- Quota solare = 100 kWh / 200kWh = 50%

- Elettricità residua dalla rete = 100% - quota batteria - quota solare = 40%

![Preparare il conteggio / la rimunerazione – Figura 2](/img/planung-abrechnung-vorbereiten/02.png)

### Applicazione del mix elettrico alle unità di conteggio e al loro consumo

Il mix energetico sopra indicato viene ora applicato agli ultimi 15 minuti per ogni singola unità di conteggio. Di conseguenza, ognuno ha lo stesso diritto rispetto al mix energetico, indipendentemente da quanta energia consuma rispetto agli altri partecipanti.

- Consumo totale appartamento A:

    20 kWh (2 kWh dalla batteria, 10kWh dal solare, 8 kWh dalla rete)

- Consumo totale appartamento B:

    100 kWh (10 kWh dalla batteria, 50kWh dal solare, 40 kWh dalla rete)

Nota 1: il mix elettrico rispecchia la realtà e il mix elettrico effettivamente presente nel RCP. Quando si preleva elettricità, il consumo corrisponde esattamente a questo mix.
Nota 2: questa applicazione del mix elettrico consente ai grandi consumatori di disporre, in termini di quantità, di una maggiore disponibilità di elettricità solare e da batteria a basso costo.
Nota 3: l'applicazione del mix elettrico non ha il compito di occuparsi delle rimunerazioni agli investitori o di ripartire contingenti tra i consumatori. 

![Preparare il conteggio / la rimunerazione – Figura 3](/img/planung-abrechnung-vorbereiten/03.png)

### Prezzo dell'elettricità solare e rimunerazione agli investitori

La best practice per rimunerare gli investitori consiste nel farli partecipare all'utile derivante dalla produzione generata e nel compensarli in questo modo. Il presupposto è che, anche se tutti hanno investito, il prezzo solare non venga offerto internamente a 0 CHF.

Se l'elettricità solare e l'elettricità da batteria hanno un prezzo, i grandi consumatori compensano gli altri investitori del loro debito tramite questo prezzo da pagare.

Esempio con 3 investitori e 3 unità di conteggio:
Il prezzo solare viene fissato a 17 cts. / kWh.

- Consumatore A (200 kWh di prelievo solare, investimento 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consumatore B (20 kWh di prelievo solare, investimento 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consumatore C ( 50 kWh di prelievo solare, investimento 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


In totale, dalla vendita di elettricità solare sono stati ricavati complessivamente 45.9 CHF.

![Preparare il conteggio / la rimunerazione – Figura 4](/img/planung-abrechnung-vorbereiten/04.png)

Poiché tutti e tre hanno investito in egual misura, per 1/3, ognuno ha ora diritto a un terzo del denaro ricavato.

0.33 \* 45.9 CHF = 15.14 CHF di rimborso per l'elettricità solare utilizzata internamente.

- Consumatore A (investimento 33%):
    34 CHF importo fatturato - 15.14 CHF rimborso = 18.86 CHF pagati per l'elettricità solare

- Consumatore B (investimento 33%):
    3.4 CHF importo fatturato - 15.14 CHF rimborso = -11.74 CHF di guadagno dall'elettricità solare, ovvero riduzione della sua fattura complessiva

- Consumatore C ( investimento 33%):
    8.5 CHF importo fatturato - 15.14 CHF rimborso = -6.64 CHF di guadagno dall'elettricità solare, ovvero riduzione della sua fattura complessiva


Nota:
La tariffa solare deve includere il prezzo di produzione e anche i rendimenti. Esempio: regola dell'80%. Il denaro può confluire di conseguenza nel fondo di rinnovamento (vantaggi fiscali) oppure essere rimborsato in base ai costi d'investimento.
