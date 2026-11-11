---
title: 'Schema di misura MKD3 (partecipazione parziale)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tariffazione dello schema di misura MKD3 con non partecipanti'
sidebar_label: 'Schema di misura MKD3 (non partecipanti)'
symbol: 'ausserhalb'
---
<div className="bild--voll">

![Schema di misura MKD3 (con non partecipanti) – Figura 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

</div>

## Tariffazione dello schema di misura MKD3 con non partecipanti

La tariffazione dello schema di misura avviene esclusivamente tramite la produzione e i consumatori che partecipano all'elettricità per gli inquilini.
Il contatore dell'allacciamento dell'edificio dovrebbe essere incluso come elemento di verifica e non deliberatamente omesso.

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (produzioni sommate, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura (appartamenti, pompe di calore, utenze generali). Opzioni hardware per la misurazione dell'energia elettrica: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (piastra contatore)](/produkte/nimbus-100a)

- Tutte le produzioni e i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio costituisce la somma di bilancio corretta per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico dei consumatori all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore di bilancio / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e il consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se sono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)

<div className="bild--voll">

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

</div>

Nell'esempio, l'appartamento A nella casa B non partecipa all'elettricità per gli inquilini: il suo contatore resta presso il gestore della rete di distribuzione e non viene conteggiato nello schema di misura.

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale tra hardware per l'uso pubblico e per l'uso privato nell'elettricità per gli inquilini. Con [eCarUp](https://www.ecarup.com) sono tuttavia disponibili anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad es. tramite carta di credito con tariffa unica con [eCarUp](https://www.ecarup.com) oppure con tariffazione tramite il conteggio dell'appartamento direttamente con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco del carico viene gestito direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

## Bilanciamento e validazione dell'MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanciamento

La quantità di elettricità di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa in rete non corrisponde al valore rilevato dal contatore di bilancio.

Con l'MKD3, la rimunerazione per i non partecipanti avviene periodicamente, una sola volta nel periodo di conteggio.

**Motivazione dello scostamento**

Il calcolo e la ripartizione in smart-me determinano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in che quantità.

**Esempio:**

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di energia solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano energia solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi correttamente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

**Il calcolo di compensazione dei fornitori di energia segue la regola seguente:**

Import del bilancio dell'elettricità per gli inquilini compensato = valore di import del contatore di bilancio - prelievo import dei non partecipanti
\--> Se con la compensazione l'import diventa &lt; 0, il resto della detrazione viene sommato all'export del bilancio.

Per questi 15 minuti risulterebbe quindi così:
Import del bilancio compensato = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh di resto)

Export del bilancio compensato = 0 kWh + 100 kWh = 100 kWh

Poiché la compensazione, a seconda dei casi, non avviene ogni 15 minuti ma periodicamente una sola volta, ne risultano valori diversi per la validazione!

### Validazione

**Se la compensazione da parte del fornitore di energia avviene ogni 15 minuti:**

Se questa compensazione da parte del fornitore di energia avviene su base di 15 minuti, il risultato del bilanciamento virtuale di smart-me è uguale al bilanciamento del fornitore di energia.

**Validazione**

- Valore dell'elettricità di rete totale fatturata = somma del valore dell'elettricità di rete venduta nell'elettricità per gli inquilini

- Somma dell'energia solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




**Se la compensazione da parte del fornitore di energia avviene 1x per periodo:**

Se la compensazione viene effettuata dal fornitore di energia una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La validazione richiede quindi un po' più di abitudine.

**Motivazione:**

Se la compensazione viene effettuata una sola volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e in che misura i non partecipanti siano stati effettivamente riforniti dal produttore locale e se di conseguenza il bilancio virtuale sia cambiato.

Parallelamente, il sistema calcola correttamente per i partecipanti all'elettricità per gli inquilini il valore effettivamente prelevato dalle fonti in base all'utilizzo e alla disponibilità tempestivi della produzione. (Tiene conto se dalla produzione attuale sia stata effettivamente prelevata elettricità da parte dei partecipanti all'elettricità per gli inquilini o se per la copertura sia stata invece prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consentirebbe un semplice confronto.

**Conclusione:**

Se la compensazione avviene 1x al mese, l'intero consumo dei non partecipanti viene rimunerato come elettricità di rete.
\--> Questo è fondamentalmente vantaggioso per il fornitore dell'elettricità per gli inquilini. (Da parte del fornitore di energia si verifica necessariamente una sovracompensazione)

**Esempio di compensazione mensile:**

- Misurazione import bilancio = 100 KWh

- Misurazione export bilancio = 50 kWh

- Prelievo totale non partecipanti = 100 kWh

- Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

- Produzione = 250 kWh

In questo esempio, il prelievo totale dei non partecipanti viene ora detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = import bilancio 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, sebbene i partecipanti all'elettricità per gli inquilini presenterebbero sicuramente un prelievo di elettricità di rete nel corso del mese (ad es. prelievo di elettricità di notte).

In questo caso, quindi, l'elettricità di rete viene sempre sovracompensata.
L'export del bilancio, invece, non viene adeguato correttamente ed è di conseguenza sempre troppo basso.

Invece della rimunerazione per l'immissione per la quantità, riceviamo la tariffa dell'elettricità di rete come sconto.

**Validazione**

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa del fornitore di energia corrisponde alla quantità del valore di export del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita dovuta alla mancata rimunerazione)

- La quantità immessa rimunerata e la quantità documentata dal fornitore di energia per il supplemento per l'elettricità per gli inquilini corrispondono alla quantità di produzione totale.


\--> La sovracompensazione è in ogni caso redditizia per il gestore dell'elettricità per gli inquilini.
