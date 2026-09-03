---
title: 'Schema di misura MKD3 (con non partecipanti)'
slug: '/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
---
![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i partecipanti all'elettricità per gli inquilini

### Tariffazione con tariffa solare incl. vRCP

Il contatore di bilancio viene ignorato per il calcolo della tariffazione, viene considerato solo successivamente per la verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio

Tutti gli appartamenti / posti auto partecipanti e le produzioni come contatore di bilancio.

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/02.png)

Contatore di produzione

Registrare tutti i contatori di produzione come produzione


![Schema di misura MKD3 (con non partecipanti) – Figura 3](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tariffazione mediante tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione, viene considerato solo successivamente per la verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

Il consumo totale è necessario come minimo. Esso viene creato come contatore virtuale composto da tutte le partenze partecipanti dell'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Generale + Posto auto 1 + Posto auto 2 + Pompa di calore

Sotto produzione viene aggiunto rispettivamente il contatore dell'impianto solare o il contatore della batteria nel caso della tariffa batteria.

Nel consumo totale viene indicato il consumo totale creato virtualmente.

Il contatore di bilancio non viene intenzionalmente referenziato per non correggere in modo errato il bilancio virtuale!

![Schema di misura MKD3 (con non partecipanti) – Figura 4](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilancio e validazione dell'MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilancio

La quantità di elettricità di rete venduta non corrisponde al valore della fattura dell'azienda elettrica e la quantità di reimmissione non corrisponde al valore rilevato dal contatore di bilancio.

Con l'MKD3 la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

Motivazione dello scostamento

Il calcolo e la distribuzione in smart-me calcolano il prelievo e il consumo dei partecipanti nell'intervallo di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in quale quantità.

Esempio:

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di elettricità solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano elettricità solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi correttamente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

Il calcolo di compensazione delle aziende elettriche segue la seguente regola:

Import compensato del bilancio dell'elettricità per gli inquilini = valore di import del contatore di bilancio - prelievo di import dei non partecipanti
\--> Se l'import a seguito della compensazione diventa &lt; 0, il resto della detrazione viene sommato all'export del bilancio.

Per questi 15 minuti la situazione sarebbe quindi la seguente:
Import compensato del bilancio = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh residui)

Export compensato del bilancio = 0 kWh + 100 kWh = 100 kWh

Poiché la compensazione, a seconda dei casi, non avviene ogni 15 minuti ma periodicamente una sola volta, ne risultano valori diversi per la validazione!

### Validazione

Se la compensazione da parte dell'azienda elettrica avviene ogni 15 minuti:

Se questa compensazione da parte dell'azienda elettrica avviene su base di 15 minuti, il risultato del bilancio virtuale di smart-me corrisponde al bilancio dell'azienda elettrica.

Validazione

- Valore dell'elettricità di rete totale conteggiata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'elettricità solare venduta internamente = produzione - quantità immessa (fattura dell'azienda elettrica)




Se la compensazione da parte dell'azienda elettrica avviene 1 volta per periodo:

Se la compensazione viene effettuata dall'azienda elettrica una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori dell'azienda elettrica e le quantità di energia da noi vendute. La validazione richiede ora un po' più di abitudine.

Motivazione:

Se la compensazione viene effettuata una sola volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e quanto i non partecipanti siano stati effettivamente riforniti dal produttore locale e di come si sia quindi modificato il bilancio virtuale.

Parallelamente, il sistema calcola per i partecipanti all'elettricità per gli inquilini, coerentemente con l'utilizzo tempestivo e la disponibilità della produzione, il valore effettivamente prelevato dalle fonti. (Tiene conto se dalla produzione attuale è stata effettivamente prelevata elettricità dai partecipanti all'elettricità per gli inquilini oppure se per la copertura è stata in realtà prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consentirebbe un confronto semplice.

Conclusione

Se la compensazione avviene 1 volta al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> Ciò è fondamentalmente vantaggioso per il fornitore di elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte dell'azienda elettrica)

Esempio di una compensazione mensile:

Misura di import del bilancio = 100 KWh

Misura di export del bilancio = 50 kWh

Prelievo totale non partecipanti = 100 kWh

Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

Produzione = 250 kWh

In questo esempio il prelievo totale dei non partecipanti viene ora sottratto dalla misura di bilancio:

Prelievo di rete conteggiato dall'azienda elettrica = import del bilancio 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0 kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presentino con certezza un prelievo di elettricità di rete nel corso del mese (ad es. prelievo di elettricità durante la notte).

In questo caso l'elettricità di rete viene quindi sempre sovracompensata.
L'export del bilancio, invece, non viene adeguato correttamente ed è conseguentemente sempre troppo basso.

Anziché la rimunerazione per l'immissione, per questa quantità riceviamo la tariffa dell'elettricità di rete come sconto.

Validazione

- Il prelievo di rete conteggiato dall'azienda elettrica è sempre inferiore alla quantità di elettricità di rete da noi conteggiata. (Entrate aggiuntive)

- La quantità immessa dell'azienda elettrica corrisponde alla quantità del valore di export del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita per mancata rimunerazione)

- La quantità della quantità immessa rimunerata e la quantità documentata dall'azienda elettrica per il supplemento sull'elettricità per gli inquilini corrispondono alla quantità di produzione totale.


\--> La sovracompensazione è in ogni caso vantaggiosa per il gestore dell'elettricità per gli inquilini.
