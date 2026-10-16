---
title: 'Schema di misura MKD3 (partecipazione parziale)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i partecipanti all'elettricità per gli inquilini

### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione e viene considerato solo in seguito per la verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio

Tutti gli appartamenti / i parcheggi partecipanti e le produzioni come contatori di bilancio.

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Contatore di produzione

Registrare tutti i contatori di produzione come produzione


![Schema di misura MKD3 (con non partecipanti) – Figura 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffazione mediante tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione e viene considerato solo in seguito per la verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

Sotto produzione viene aggiunto di volta in volta il contatore dell'impianto solare o, con la tariffa batteria, il contatore della batteria.

Come consumo totale viene impostato il consumo totale creato virtualmente.

Il contatore di bilancio volutamente non viene referenziato, per non correggere in modo errato il bilancio virtuale!

![Schema di misura MKD3 (con non partecipanti) – Figura 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilancio e convalida dell'MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilancio

La quantità di elettricità di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa non corrisponde al valore registrato dal contatore di bilancio.

Con l'MKD3 la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

Motivazione dello scostamento

Il calcolo e la ripartizione in smart-me calcolano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in che quantità.

Esempio:

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di elettricità solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano elettricità solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi coerentemente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

Il calcolo di compensazione dei fornitori di energia segue questa regola:

Bilancio elettricità per gli inquilini importazione compensata = valore di importazione del contatore di bilancio - prelievo importazione dei non partecipanti
\--> Se a causa della compensazione l'importazione diventa &lt; 0, il resto della deduzione viene sommato all'esportazione del bilancio.

Per questi 15 minuti risulterebbe quindi così:
Bilancio importazione compensata = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh di resto)

Bilancio esportazione compensata = 0 kWh + 100 kWh = 100 kWh

Poiché a seconda dei casi la compensazione non avviene ogni 15 minuti, ma periodicamente una sola volta, ne risultano valori diversi per la convalida!

### Convalida

Se la compensazione da parte del fornitore di energia avviene ogni 15 minuti:

Se questa compensazione da parte del fornitore di energia avviene su base di 15 minuti, il risultato del bilancio virtuale di smart-me è uguale al bilancio del fornitore di energia.

Convalida

- Valore dell'elettricità di rete totale fatturata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'elettricità solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




Se la compensazione da parte del fornitore di energia avviene 1x per periodo:

Se la compensazione viene effettuata dal fornitore di energia una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La convalida richiede ora un po' più di abitudine.

Motivazione:

Se la compensazione viene effettuata una volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e quanto i non partecipanti siano stati effettivamente riforniti dal produttore locale e se il bilancio virtuale sia cambiato di conseguenza.

Parallelamente, per i partecipanti all'elettricità per gli inquilini il sistema calcola coerentemente, in base all'utilizzo e alla disponibilità tempestivi della produzione, il valore effettivamente prelevato dalle fonti. (Tiene conto se dalla produzione attuale sia stata effettivamente prelevata elettricità da parte dei partecipanti all'elettricità per gli inquilini o se per la copertura sia stata in realtà prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consenta un semplice confronto.

Conclusione

Se la compensazione avviene 1x al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> Questo è in linea di principio vantaggioso per il fornitore dell'elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte del fornitore di energia)

Esempio di compensazione mensile:

Bilancio importazione misurazione = 100 KWh

Bilancio esportazione misurazione = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio il prelievo totale dei non partecipanti viene ora detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = bilancio importazione 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presenterebbero sicuramente nel corso del mese un prelievo di elettricità di rete (ad es. prelievo di elettricità di notte).

In questo caso l'elettricità di rete viene quindi sempre sovracompensata.
L'esportazione del bilancio invece non viene adeguata correttamente ed è di conseguenza sempre troppo bassa.

Invece della rimunerazione per l'immissione per la quantità, riceviamo la tariffa dell'elettricità di rete come sconto.

Convalida

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa del fornitore di energia corrisponde alla quantità del valore di esportazione del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita dovuta alla mancata rimunerazione)

- La quantità immessa rimunerata e la quantità documentata dal fornitore di energia per il supplemento dell'elettricità per gli inquilini corrispondono alla quantità di produzione totale.


\--> La sovracompensazione è in ogni caso vantaggiosa per il gestore dell'elettricità per gli inquilini.
