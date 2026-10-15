---
title: 'Schema di misura MKD3 (con non partecipanti)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i partecipanti all'elettricità per gli inquilini

### Tariffazione con tariffa solare incl. vRCP

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; viene considerato solo in seguito per la verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per i contatori virtuali.

Contatore di bilancio

Tutti gli appartamenti / i parcheggi partecipanti e le produzioni come contatore di bilancio.

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Contatore di produzione

Registrare tutti i contatori di produzione come produzione


![Schema di misura MKD3 (con non partecipanti) – Figura 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffazione tramite tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; viene considerato solo in seguito per la verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per i contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

Alla voce Produzione viene aggiunto di volta in volta il contatore dell'impianto solare o, nel caso della tariffa batteria, il contatore della batteria.

Alla voce Consumo totale viene indicato il consumo totale creato virtualmente.

Il contatore di bilancio non viene volutamente referenziato, per non correggere in modo errato il bilancio virtuale!

![Schema di misura MKD3 (con non partecipanti) – Figura 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilancio e validazione dell'MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilancio

La quantità di elettricità di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa in rete non corrisponde al valore registrato dal contatore di bilancio.

Con l'MKD3 la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

Motivazione dello scostamento

Il calcolo e la ripartizione in smart-me calcolano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in che quantità.

Esempio:

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di elettricità solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano elettricità solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi correttamente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

Il calcolo di compensazione del fornitore di energia segue questa regola:

Importazione compensata del bilancio dell'elettricità per gli inquilini = valore di importazione del contatore di bilancio - prelievo in importazione dei non partecipanti
\--> Se con la compensazione l'importazione diventa &lt; 0, il resto della detrazione viene aggiunto all'esportazione del bilancio.

Per questi 15 minuti risulterebbe quindi:
Importazione compensata del bilancio = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh di resto)

Esportazione compensata del bilancio = 0 kWh + 100 kWh = 100 kWh

Poiché, a seconda dei casi, la compensazione non avviene ogni 15 minuti ma una sola volta per periodo, ne risultano valori diversi per la validazione!

### Validazione

Se la compensazione da parte del fornitore di energia avviene ogni 15 minuti:

Se questa compensazione da parte del fornitore di energia avviene su base di 15 minuti, il risultato del bilancio virtuale di smart-me è uguale al bilancio del fornitore di energia.

Validazione

- Valore totale dell'elettricità di rete fatturata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'elettricità solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




Se la compensazione da parte del fornitore di energia avviene 1 volta per periodo:

Se la compensazione viene effettuata dal fornitore di energia una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La validazione richiede quindi un po' più di abitudine.

Motivazione:

Se la compensazione viene effettuata una sola volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e quanto i non partecipanti siano stati effettivamente riforniti dal produttore locale e se di conseguenza il bilancio virtuale sia cambiato.

Parallelamente, per i partecipanti all'elettricità per gli inquilini il sistema calcola correttamente, in base all'utilizzo e alla disponibilità della produzione al momento, il valore effettivamente prelevato dalle fonti. (Tiene conto se i partecipanti all'elettricità per gli inquilini hanno effettivamente prelevato elettricità dalla produzione attuale o se per la copertura è stata in realtà prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che permetterebbe un semplice confronto.

Conclusione

Se la compensazione avviene 1 volta al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> Ciò è in linea di principio vantaggioso per il fornitore dell'elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte del fornitore di energia)

Esempio di compensazione mensile:

Misurazione importazione bilancio = 100 KWh

Misurazione esportazione bilancio = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio il prelievo totale dei non partecipanti viene ora detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = importazione bilancio 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presentino sicuramente un prelievo di elettricità di rete nel corso del mese (ad es. prelievo di elettricità durante la notte).

In questo caso l'elettricità di rete viene quindi sempre sovracompensata.
L'esportazione del bilancio, invece, non viene adeguata correttamente ed è di conseguenza sempre troppo bassa.

Invece della rimunerazione per l'immissione per questa quantità, riceviamo la tariffa dell'elettricità di rete come sconto.

Validazione

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa indicata dal fornitore di energia corrisponde alla quantità del valore di esportazione del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita per mancata rimunerazione)

- La quantità immessa rimunerata e la quantità documentata dal fornitore di energia per il supplemento per l'elettricità per gli inquilini corrispondono alla quantità totale di produzione.


\--> La sovracompensazione è in ogni caso redditizia per il gestore dell'elettricità per gli inquilini.
