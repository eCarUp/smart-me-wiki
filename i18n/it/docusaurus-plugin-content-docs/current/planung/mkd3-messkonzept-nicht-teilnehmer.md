---
title: 'Schema di misura MKD3 (partecipazione parziale)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
symbol: 'ausserhalb'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i consumatori che partecipano all'elettricità per gli inquilini.
Il contatore del raccordo domestico dovrebbe essere incluso come elemento di verifica e non deve essere omesso deliberatamente.


## Bilanciamento e validazione dell'MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanciamento

La quantità di elettricità di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa in rete non corrisponde al valore rilevato dal contatore di bilancio.

Con l'MKD3 la rimunerazione per i non partecipanti avviene una sola volta per periodo di conteggio.

**Motivazione dello scostamento**

Il calcolo e la ripartizione in smart-me determinano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo viene identificato in modo univoco chi preleva elettricità, quando, da quale fonte e in quale quantità.

**Esempio:**

Se in un momento X, nell'arco di 15 minuti, vengono prodotti 100 kWh di energia solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano energia solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi correttamente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

**Il calcolo di compensazione del fornitore di energia segue questa regola:**

Bilancio elettricità per gli inquilini importazione compensata = valore di importazione del contatore di bilancio - prelievo importazione dei non partecipanti
\--> Se con la compensazione l'importazione diventa &lt; 0, il resto della deduzione viene sommato all'esportazione del bilancio.

Per questi 15 minuti il risultato sarebbe quindi il seguente:
Bilancio importazione compensata = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (resto delta 100 kWh)

Bilancio esportazione compensata = 0 kWh + 100 kWh = 100 kWh

Poiché, a seconda dei casi, la compensazione non avviene ogni 15 minuti ma una sola volta per periodo, ne risultano valori diversi per la validazione!

### Validazione

**Se la compensazione da parte del fornitore di energia avviene ogni 15 minuti:**

Se il fornitore di energia effettua questa compensazione su base di 15 minuti, il risultato del bilanciamento virtuale di smart-me corrisponde al bilanciamento del fornitore di energia.

**Validazione**

- Valore complessivo dell'elettricità di rete fatturata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'energia solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




**Se la compensazione da parte del fornitore di energia avviene 1x per periodo:**

Se il fornitore di energia effettua la compensazione una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La validazione richiede quindi un po' più di abitudine.

**Motivazione:**

Se la compensazione viene effettuata una sola volta al mese con il prelievo complessivo dei non partecipanti, non si tiene conto se e quanto i non partecipanti siano stati effettivamente riforniti dal produttore locale e se ciò abbia modificato il bilancio virtuale.

Parallelamente, il sistema calcola correttamente per i partecipanti all'elettricità per gli inquilini, in base all'utilizzo tempestivo e alla disponibilità della produzione, il valore effettivamente prelevato dalle fonti. (Tiene conto se l'elettricità della produzione attuale sia stata effettivamente prelevata dai partecipanti all'elettricità per gli inquilini o se per la copertura sia stata in realtà prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consentirebbe un semplice confronto.

**Conclusione:**

Se la compensazione avviene 1x al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> In linea di principio ciò è vantaggioso per il fornitore dell'elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte del fornitore di energia)

Esempio di una compensazione mensile:

Bilancio importazione misurazione = 100 KWh

Bilancio esportazione misurazione = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio, il prelievo complessivo dei non partecipanti viene ora sottratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = bilancio importazione 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presenterebbero sicuramente un prelievo di elettricità di rete nel corso del mese (ad es. prelievo di elettricità di notte).

In questo caso, quindi, l'elettricità di rete viene sempre sovracompensata.
L'esportazione di bilancio, invece, non viene adeguata correttamente ed è di conseguenza sempre troppo bassa.

Invece della rimunerazione per l'immissione per tale quantità, riceviamo la tariffa dell'elettricità di rete come sconto.

**Validazione**

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate supplementari)

- La quantità immessa del fornitore di energia corrisponde al valore di esportazione del contatore di bilancio fisico ed è inferiore alla quantità calcolata dal bilancio virtuale. (Perdita dovuta alla mancata rimunerazione)

- La somma della quantità immessa rimunerata e della quantità documentata dal fornitore di energia per il supplemento dell'elettricità per gli inquilini corrisponde alla quantità di produzione complessiva.


\--> La sovracompensazione è in ogni caso vantaggiosa per il gestore dell'elettricità per gli inquilini.
