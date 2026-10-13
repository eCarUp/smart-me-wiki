---
title: 'Schema di misura MKD3 (con non partecipanti)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i partecipanti all'elettricità per gli inquilini

### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione e viene considerato successivamente solo per la verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio (Bilanzzähler)

Tutti gli appartamenti / i parcheggi partecipanti e le produzioni come contatori di bilancio.

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Contatore di produzione (Produktionszähler)

Registrare tutti i contatori di produzione come produzione


![Schema di misura MKD3 (con non partecipanti) – Figura 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffazione tramite tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione e viene considerato successivamente solo per la verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

Alla voce Produzione (Produktion) si aggiunge di volta in volta il contatore dell'impianto solare o, con la tariffa batteria, il contatore della batteria.

Alla voce Consumo totale (Gesamtverbrauch) si inserisce il consumo totale creato virtualmente.

Il contatore di bilancio non viene volutamente referenziato, per non correggere in modo errato il bilancio virtuale!

![Schema di misura MKD3 (con non partecipanti) – Figura 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilanciamento e validazione dello MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanciamento

La quantità di elettricità di rete venduta non corrisponde al valore della fattura dell'azienda elettrica e la quantità reimmessa non corrisponde al valore rilevato dal contatore di bilancio.

Con lo MKD3 la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

Motivazione dello scostamento

Il calcolo e la ripartizione in smart-me calcolano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in quale quantità.

Esempio:

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di elettricità solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano elettricità solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi coerentemente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

Il calcolo di compensazione delle aziende elettriche segue questa regola:

Import compensato del bilancio dell'elettricità per gli inquilini = valore di import del contatore di bilancio - prelievo import dei non partecipanti
\--> Se con la compensazione l'import diventa &lt; 0, il resto della detrazione viene sommato all'export del bilancio.

Per questi 15 minuti risulterebbe quindi:
Import del bilancio compensato = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh di resto)

Export del bilancio compensato = 0 kWh + 100 kWh = 100 kWh

Poiché, a seconda dei casi, la compensazione non avviene ogni 15 minuti ma periodicamente una sola volta, per la validazione risultano valori diversi!

### Validazione

Se la compensazione da parte dell'azienda elettrica avviene ogni 15 minuti:

Se questa compensazione da parte dell'azienda elettrica avviene su base di 15 minuti, il risultato del bilanciamento virtuale di smart-me è uguale al bilanciamento dell'azienda elettrica.

Validazione

- Valore totale dell'elettricità di rete fatturata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'elettricità solare venduta internamente = produzione - quantità immessa (fattura dell'azienda elettrica)




Se la compensazione da parte dell'azienda elettrica avviene 1 volta per periodo:

Se la compensazione viene effettuata dall'azienda elettrica una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori dell'azienda elettrica e le quantità di energia da noi vendute. La validazione richiede quindi un po' più di abitudine.

Motivazione:

Se la compensazione viene effettuata una volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e in quale misura i non partecipanti siano stati effettivamente riforniti dal produttore locale, modificando così il bilancio virtuale.

Parallelamente, il sistema calcola per i partecipanti all'elettricità per gli inquilini, in modo coerente con l'utilizzo tempestivo e la disponibilità della produzione, il valore effettivamente prelevato dalle singole fonti. (Tiene conto se dalla produzione attuale sia stata effettivamente prelevata elettricità da parte dei partecipanti all'elettricità per gli inquilini o se per la copertura sia stata invece prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consentirebbe un semplice confronto.

Conclusione

Se la compensazione avviene 1 volta al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> Ciò è fondamentalmente vantaggioso per il fornitore dell'elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte dell'azienda elettrica)

Esempio di compensazione mensile:

Misurazione import del bilancio = 100 KWh

Misurazione export del bilancio = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio il prelievo totale dei non partecipanti viene ora detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dall'azienda elettrica = import del bilancio 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presenterebbero sicuramente, nel corso del mese, un prelievo di elettricità di rete (ad es. prelievo di elettricità di notte).

In questo caso l'elettricità di rete viene quindi sempre sovracompensata.
L'export del bilancio, invece, non viene adeguato correttamente ed è di conseguenza sempre troppo basso.

Invece della rimunerazione per l'immissione per questa quantità, riceviamo la tariffa dell'elettricità di rete come sconto.

Validazione

- Il prelievo dalla rete fatturato dall'azienda elettrica è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa dell'azienda elettrica corrisponde alla quantità del valore di export del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita dovuta alla mancata rimunerazione)

- La quantità immessa rimunerata e la quantità documentata dall'azienda elettrica per il supplemento per l'elettricità per gli inquilini corrispondono alla quantità di produzione totale.


\--> La sovracompensazione è in ogni caso vantaggiosa per il gestore dell'elettricità per gli inquilini.
