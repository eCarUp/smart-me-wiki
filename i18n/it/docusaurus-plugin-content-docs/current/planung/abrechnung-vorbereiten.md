---
title: 'Preparare il conteggio / la rimunerazione'
slug: '/planung/abrechnung-vorbereiten'
description: 'Conteggiare l''elettricità con il conteggio dei costi energetici smart-me'
sidebar_label: 'Preparare il conteggio / la rimunerazione'
---
[Inglese](/planung/abrechnung-vorbereiten)

## Conteggiare il RCP

### Conteggiare l'elettricità con il conteggio dei costi energetici smart-me

Questo tipo di conteggio supporta la tariffa unica, la tariffa doppia oppure tariffe multiple con tariffe solari.

Per il conteggio del RCP relativo alla parte elettrica ti occorrono:

- Lo stato Professional dell'account e smart-me Billing.

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe.

- non necessario: segnale tariffario esterno collegato a tutti i contatori


### Conteggiare calore e acqua con la funzione VEWA (conforme a VEWA)

Affinché tutti i costi energetici possano essere generati in un conteggio delle spese accessorie di riscaldamento conforme a VEWA, ti occorrono:

- Lo stato Professional dell'account e [smart-me Billing con funzione VEWA](/konfiguration/billing/vewa-abrechnung)

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe

- Panoramica dei costi maturati per le energie da conteggiare

- Guida VEWA

- Opzionale: software immobiliare per esportazioni DTA-VHKA

- Opzionale: un primo conteggio dei costi energetici di un fornitore di servizi per le spese accessorie di riscaldamento oppure le informazioni necessarie del vostro progettista sanitario e di riscaldamento.




## Conteggiare la mobilità elettrica nel RCP

![Preparare il conteggio / la rimunerazione – Figura 1](/img/planung-abrechnung-vorbereiten/01.png)

## Guida VEWA e RCP

Guida all'autoconsumo di energia di SvizzeraEnergia (informazioni generali, forme giuridiche, costi): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modello VEWA per il conteggio dei costi di energia e acqua in funzione del consumo: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Funzionamento delle tariffe e della rimunerazione agli investitori

### Funzionamento dell'identificazione della tariffa e della distribuzione ai consumatori

L'identificazione di una tariffa dipende in primo luogo dagli strumenti di misura ad essa associati e da una componente opzionale dipendente dal tempo (azione SE/ALLORA).

- Le tariffe di rete valgono come quantità di elettricità residua, ciò significa che vengono sempre applicate all'elettricità che non è stato possibile attribuire ad altre tariffe tramite misurazioni.

- Le tariffe solari e delle batterie considerano i prelievi e le forniture di punti di misura rilevanti come ad es. contatore FV e consumo totale oppure la misurazione del bilancio + una componente temporale opzionale.


### Determinazione della quota del mix elettrico per ogni 15 minuti

Il mix elettrico viene sempre determinato per 15 minuti e poi applicato in egual misura a tutti i consumatori. 

Esempio:

- La batteria fornisce 20 kWh

- L'impianto solare fornisce 100 kWh

- Il consumo nell'intero immobile corrisponde a 200 kWh


In questo caso la quota percentuale sul consumo totale dei singoli fornitori si calcola secondo la seguente formula:

% quota sul mix elettrico = fornitura del fornitore / consumo totale dell'immobile


- Quota batteria = 20 kWh / 200 kWh = 10%

- Quota solare = 100 kWh / 200kWh = 50%

- Elettricità residua dalla rete = 100% - quota batteria - quota solare = 40%


![Preparare il conteggio / la rimunerazione – Figura 2](/img/planung-abrechnung-vorbereiten/02.png)

### Applicazione del mix elettrico alle unità di conteggio e al loro consumo

Il mix energetico di cui sopra viene ora applicato agli ultimi 15 minuti per ogni singola unità di conteggio. Ciò comporta che ognuno abbia lo stesso diritto rispetto al mix energetico, indipendentemente da quanta energia consumi rispetto agli altri partecipanti.

- Consumo totale appartamento A:
    20 kWh (2 kWh dalla batteria, 10kWh dal solare, 8 kWh dalla rete)

- Consumo totale appartamento B:
    100 kWh (10 kWh dalla batteria, 50kWh dal solare, 40 kWh dalla rete)


Nota 1: il mix elettrico rappresenta la realtà e il mix elettrico effettivamente presente nel RCP. Quando viene prelevata elettricità, il consumo corrisponde esattamente a questo mix.
Nota 2: questa applicazione del mix elettrico consente ai grandi consumatori una maggiore disponibilità in termini di quantità di elettricità solare e da batteria a basso costo.
Nota 3: l'applicazione del mix elettrico non ha il compito di occuparsi delle rimunerazioni agli investitori o di distribuire contingenti ai consumatori. 

![Preparare il conteggio / la rimunerazione – Figura 3](/img/planung-abrechnung-vorbereiten/03.png)

### Prezzo dell'elettricità solare e rimunerazione agli investitori

La best practice per rimunerare gli investitori consiste nel farli partecipare all'utile derivante dall'energia prodotta e compensarli in questo modo. Il presupposto per questo è che, anche se tutti hanno investito, il prezzo del solare non venga offerto internamente a 0 CHF.

Se l'elettricità solare e l'elettricità da batteria hanno un prezzo, i grandi consumatori compensano il loro debito verso gli altri investitori tramite questo prezzo da corrispondere.

Esempio con 3 investitori e 3 unità di conteggio:
Il prezzo del solare viene fissato a 17 cts. / kWh.

- Consumatore A (200 kWh di prelievo solare, investimento 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consumatore B (20 kWh di prelievo solare, investimento 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consumatore C ( 50 kWh di prelievo solare, investimento 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


Complessivamente dalla vendita di elettricità solare sono stati ora generati in totale 45.9 CHF.

![Preparare il conteggio / la rimunerazione – Figura 4](/img/planung-abrechnung-vorbereiten/04.png)

Poiché tutti e tre hanno investito in egual misura, per 1/3, ora tutti hanno diritto a un terzo di questo denaro generato.

0.33 \* 45.9 CHF = 15.14 CHF di rimunerazione per l'elettricità solare utilizzata internamente.

- Consumatore A (investimento 33%):
    34 CHF importo fatturato - 15.14 CHF di rimunerazione = 18.86 CHF pagati per l'elettricità solare

- Consumatore B (investimento 33%):
    3.4 CHF importo fatturato - 15.14 CHF di rimunerazione = -11.74 CHF di utile dall'elettricità solare, ossia riduzione sulla sua fattura complessiva

- Consumatore C ( investimento 33%):
    8.5 CHF importo fatturato - 15.14 CHF di rimunerazione = -6.64 CHF di utile dall'elettricità solare, ossia riduzione sulla sua fattura complessiva


Nota:
La tariffa solare deve includere il prezzo di produzione così come i rendimenti. Esempio: regola dell'80%. Il denaro può di conseguenza confluire nel fondo di rinnovamento (vantaggi fiscali) oppure essere rimunerato in base ai costi di investimento.
