---
title: 'Preparare conteggio / rimunerazione'
slug: '/planung/abrechnung-vorbereiten'
description: 'Conteggiare l''elettricità con il conteggio dei costi energetici smart-me'
sidebar_label: 'Preparare conteggio / rimunerazione'
symbol: 'rechnung'
---

## Conteggio RCP

### Conteggiare l'elettricità con il conteggio dei costi energetici smart-me

Questo tipo di conteggio supporta la tariffa unica, la doppia tariffa o le tariffe multiple con tariffe solari.

Per il conteggio della parte elettrica del RCP (raggruppamento ai fini del consumo proprio) sono necessari:

- Stato Professional dell'account e smart-me Billing.

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe.

- Non necessario: segnale tariffario esterno collegato a tutti i contatori


### Conteggiare calore e acqua con la funzione VEWA (conforme a VEWA)

Affinché tutti i costi energetici possano essere generati in un conteggio delle spese accessorie di riscaldamento conforme a VEWA, sono necessari:

- Stato Professional dell'account e [smart-me Billing con funzione VEWA](/konfiguration/billing/vewa-abrechnung)

- I prezzi dell'elettricità dell'azienda elettrica con le tariffe

- Riepilogo dei costi maturati per le energie da conteggiare

- Guida VEWA

- Facoltativo: software immobiliare per le esportazioni DTA-VHKA

- Facoltativo: un primo conteggio dei costi energetici di un fornitore di servizi per le spese accessorie di riscaldamento oppure le informazioni necessarie del proprio progettista sanitario e di riscaldamento.




## Conteggiare la mobilità elettrica nel RCP

| Caratteristica | Stazione privata con Pico | Stazione semipubblica | Stazione di ricarica pubblica |
| --- | --- | --- | --- |
| Chi può ricaricare | solo l'inquilino dell'appartamento | gli inquilini dell'immobile | tutti gli utenti eCarUp |
| Conteggio | automaticamente insieme all'elettricità dell'appartamento, secondo il modello tariffario (ore di punta, ore fuori punta, solare) | **Opzione A:** gli inquilini ricaricano al prezzo di 0 CHF. I costi dell'elettricità vengono addebitati all'amministrazione immobiliare e trasferiti agli inquilini tramite la funzione di report (tariffe manuali).<br /><br />**Opzione B:** limitata, con tariffa fissa e pagamento con carta di credito | I costi dell'elettricità vengono addebitati all'amministrazione immobiliare; la rifatturazione avviene tramite tariffa fissa e pagamento con carta di credito |
| Disponibile al pubblico | no | no | sì, messa a disposizione del pubblico tramite eCarUp |
| Stazione | Pico | Pico o stazione OCPP | Pico o stazione OCPP |

## Guida VEWA e RCP

Guida all'autoconsumo di SvizzeraEnergia (aspetti generali, forme giuridiche, costi): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modello VEWA per il conteggio dei costi energetici e dell'acqua in base al consumo: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Funzionamento delle tariffe e rimborso agli investitori

### Funzionamento dell'identificazione della tariffa e della ripartizione sui consumatori

L'identificazione di una tariffa dipende principalmente dagli strumenti di misura associati e da una componente temporale facoltativa (azione SE/ALLORA).

- Le tariffe di rete valgono come quantità di elettricità residua: ciò significa che vengono sempre applicate all'elettricità che non è stato possibile attribuire ad altre tariffe tramite misurazioni.

- Le tariffe solari e della batteria considerano i prelievi e le forniture di punti di misura rilevanti, come ad es. il contatore FV e il consumo totale oppure la misurazione di bilancio, più una componente temporale facoltativa.


### Determinazione delle quote del mix elettrico ogni 15 minuti

Il mix elettrico viene sempre determinato per 15 minuti e poi applicato in egual misura a tutti i consumatori. 

Esempio:

- La batteria fornisce 20 kWh

- L'impianto solare fornisce 100 kWh

- Il consumo nell'intero immobile corrisponde a 200 kWh

In questo caso la quota percentuale dei singoli fornitori sul consumo totale si calcola con la seguente formula:

% quota del mix elettrico = fornitura del fornitore / consumo totale dell'immobile

- Quota batteria = 20 kWh / 200 kWh = 10%

- Quota solare = 100 kWh / 200kWh = 50%

- Elettricità residua dalla rete = 100% - quota batteria - quota solare = 40%

<div className="bild--voll">

![Preparare conteggio / rimunerazione – Figura 2](/img/planung-abrechnung-vorbereiten/02.png)

</div>

### Applicazione del mix elettrico alle unità di conteggio e al loro consumo

Il mix energetico di cui sopra viene ora applicato per gli ultimi 15 minuti a ogni singola unità di conteggio. Ne consegue che ognuno ha lo stesso diritto rispetto al mix energetico, indipendentemente da quanta energia consuma rispetto agli altri partecipanti.

- Consumo totale appartamento A:

    20 kWh (2 kWh dalla batteria, 10kWh dal solare, 8 kWh dalla rete)

- Consumo totale appartamento B:

    100 kWh (10 kWh dalla batteria, 50kWh dal solare, 40 kWh dalla rete)

Nota 1: il mix elettrico rispecchia la realtà e il mix elettrico effettivamente presente nel RCP. Quando si preleva elettricità, il consumo corrisponde esattamente a questo mix.
Nota 2: questa applicazione del mix elettrico consente ai grandi consumatori una maggiore disponibilità, in termini di quantità, di elettricità solare e da batteria conveniente.
Nota 3: l'applicazione del mix elettrico non ha il compito di occuparsi delle rimunerazioni agli investitori o di distribuire contingenti ai consumatori. 

<div className="bild--voll">

![Preparare conteggio / rimunerazione – Figura 3](/img/planung-abrechnung-vorbereiten/03.png)

</div>

### Prezzo dell'elettricità solare e rimunerazione agli investitori

La best practice per rimunerare gli investitori consiste nel farli partecipare all'utile derivante dalla produzione realizzata e indennizzarli in questo modo. Il presupposto è che, anche se tutti hanno investito, il prezzo solare non venga offerto internamente a 0 CHF.

Se l'elettricità solare e quella della batteria hanno un prezzo, i grandi consumatori saldano il loro debito nei confronti degli altri investitori tramite questo prezzo da pagare.

Esempio con 3 investitori e 3 unità di conteggio:
Il prezzo solare è fissato a 17 Rp. / kWh.

- Consumatore A (prelievo solare 200 kWh, investimento 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consumatore B (prelievo solare 20 kWh, investimento 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consumatore C ( prelievo solare 50 kWh, investimento 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


In totale, dalla vendita di elettricità solare sono stati ora ricavati 45.9 CHF.

<div className="bild--voll">

![Preparare conteggio / rimunerazione – Figura 4](/img/planung-abrechnung-vorbereiten/04.png)

</div>

Poiché tutti e tre hanno investito in egual misura, per 1/3, ora tutti hanno diritto a un terzo di questo denaro ricavato.

0.33 \* 45.9 CHF = 15.14 CHF di rimborso per l'elettricità solare utilizzata internamente.

- Consumatore A (investimento 33%):
    34 CHF importo della fattura - 15.14 CHF di rimborso = 18.86 CHF pagati per l'elettricità solare

- Consumatore B (investimento 33%):
    3.4 CHF importo della fattura - 15.14 CHF di rimborso = -11.74 CHF di guadagno dall'elettricità solare, ovvero riduzione della sua fattura complessiva

- Consumatore C ( investimento 33%):
    8.5 CHF importo della fattura - 15.14 CHF di rimborso = -6.64 CHF di guadagno dall'elettricità solare, ovvero riduzione della sua fattura complessiva


Nota:
La tariffa solare deve includere sia il prezzo di produzione sia i rendimenti. Esempio: regola dell'80%. Il denaro può confluire di conseguenza nel fondo di rinnovamento (vantaggi fiscali) oppure essere rimborsato in base ai costi d'investimento.
