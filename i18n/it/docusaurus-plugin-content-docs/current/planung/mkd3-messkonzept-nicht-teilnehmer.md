---
title: 'Schema di misura MKD3 (partecipazione parziale)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i consumatori che partecipano all'elettricità per gli inquilini.
Il contatore dell'allacciamento dell'edificio dovrebbe essere incluso come elemento di verifica e non essere omesso deliberatamente.


## Bilanciamento e validazione dello MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanciamento

La quantità di energia di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa in rete non corrisponde al valore rilevato dal contatore di bilancio.

Con lo MKD3 la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

Motivazione dello scostamento

Il calcolo e la ripartizione in smart-me calcolano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in quale quantità.

Esempio:

Se in un momento X, nell'arco di 15 minuti, vengono prodotti 100 kWh di energia solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano energia solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi coerentemente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

Il calcolo di compensazione del fornitore di energia segue la seguente regola:

Import bilancio dell'elettricità per gli inquilini compensato = valore di import del contatore di bilancio - prelievo import dei non partecipanti
\--> Se a seguito della compensazione l'import diventa &lt; 0, il resto della deduzione viene sommato all'export del bilancio.

Per questi 15 minuti il risultato sarebbe quindi il seguente:
Import bilancio compensato = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh resto)

Export bilancio compensato = 0 kWh + 100 kWh = 100 kWh

Poiché, a seconda dei casi, la compensazione non avviene ogni 15 minuti ma una sola volta per periodo, ne risultano valori diversi per la validazione!

### Validazione

Se la compensazione da parte del fornitore di energia avviene ogni 15 minuti:

Se il fornitore di energia effettua questa compensazione su base di 15 minuti, il risultato del bilanciamento virtuale di smart-me è uguale al bilanciamento del fornitore di energia.

Validazione

- Valore complessivo dell'energia di rete fatturata = somma del valore dell'energia di rete venduta nell'elettricità per gli inquilini

- Somma dell'energia solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




Se la compensazione da parte del fornitore di energia avviene 1 volta per periodo:

Se il fornitore di energia effettua la compensazione una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La validazione richiede quindi un po' più di abitudine.

Motivazione:

Se la compensazione viene effettuata una volta al mese con il prelievo complessivo dei non partecipanti, non si tiene conto se e in quale misura i non partecipanti siano stati effettivamente riforniti dal produttore locale, modificando così il bilancio virtuale.

Parallelamente, per i partecipanti all'elettricità per gli inquilini il sistema calcola coerentemente, in base all'utilizzo e alla disponibilità della produzione nel momento effettivo, il valore effettivamente prelevato dalle diverse fonti. (Tiene conto se l'elettricità della produzione attuale sia stata effettivamente prelevata dai partecipanti all'elettricità per gli inquilini o se per la copertura sia stata invece prelevata energia di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che permetta un semplice confronto.

Conclusione

Se la compensazione avviene 1 volta al mese, l'intero consumo dei non partecipanti viene rimunerato come energia di rete.
\--> Ciò è in linea di principio vantaggioso per il fornitore di elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte del fornitore di energia)

Esempio di compensazione mensile:

Import bilancio misurato = 100 KWh

Export bilancio misurato = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio il prelievo complessivo dei non partecipanti viene ora detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = import bilancio 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata energia di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presenterebbero sicuramente nel corso del mese un prelievo di energia di rete (ad es. prelievo di elettricità durante la notte).

In questo caso l'energia di rete viene quindi sempre sovracompensata.
L'export del bilancio, invece, non viene adeguato correttamente ed è di conseguenza sempre troppo basso.

Al posto della rimunerazione per l'immissione, per tale quantità riceviamo la tariffa dell'energia di rete come sconto.

Validazione

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di energia di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa indicata dal fornitore di energia corrisponde alla quantità del valore di export del contatore di bilancio fisico ed è inferiore alla quantità calcolata dal bilancio virtuale. (Perdita dovuta alla mancata rimunerazione)

- La quantità immessa rimunerata più la quantità documentata dal fornitore di energia per il supplemento per l'elettricità per gli inquilini corrisponde alla quantità di produzione complessiva.


\--> La sovracompensazione è in ogni caso vantaggiosa per il gestore dell'elettricità per gli inquilini.
