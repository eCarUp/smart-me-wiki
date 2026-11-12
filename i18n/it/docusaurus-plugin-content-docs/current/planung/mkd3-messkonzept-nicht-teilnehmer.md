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
Il contatore dell'allacciamento dell'edificio dovrebbe essere incluso come elemento di verifica e non essere omesso deliberatamente.

## Schema di misura generale

### Punti di misura soggetti a licenza:

- Ogni punto di misura che deve essere rilevato è [soggetto a licenza](/planung/cloud-lizenzen).

- Ogni contatore virtuale (produzioni sommate, consumo totale) è [soggetto a licenza](/planung/cloud-lizenzen).

### Elettricità

- Tutte le unità di conteggio da fatturare devono essere misurate con un punto di misura (appartamenti, pompe di calore, utenze comuni). Opzioni hardware per la misurazione dell'energia elettrica: [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (piastra per contatore)](/produkte/nimbus-100a)

- Tutte le produzioni e i sistemi di accumulo devono essere misurati, insieme o separatamente.

- La misurazione all'allacciamento dell'edificio costituisce la somma di bilancio corretta per una tariffazione accurata. Le misurazioni all'allacciamento dell'edificio sono i punti di misura più importanti per il controllo dinamico dei consumatori all'interno degli edifici.

- Tariffazione e conteggio tramite [smart-me Billing](/konfiguration/billing)

- A seconda del modello, la tariffazione può essere calcolata tramite il contatore di bilancio / dell'allacciamento dell'edificio e le produzioni oppure, in alternativa, tramite le produzioni e il consumo totale virtuale. (+1 contatore virtuale del consumo totale)

- Se vengono misurate più produzioni (batterie / FV), queste devono essere sommate virtualmente (+1 contatore virtuale di somma)

<div className="bild--voll">

![Schema di misura MKD3 (con non partecipanti) – Figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

</div>

Nell'esempio, l'appartamento A nella casa B non partecipa all'elettricità per gli inquilini: il suo contatore resta presso il gestore della rete di distribuzione e non viene considerato nello schema di misura.

### Mobilità elettrica con smart-me ed eCarUp

- La mobilità elettrica viene realizzata tramite punti di ricarica privati, semi-privati o pubblici.

- L'hardware [smart-me Pico 22kW](/produkte/pico-ladestation) offre il mix ottimale di hardware per l'esercizio pubblico e per l'esercizio privato nell'ambito dell'elettricità per gli inquilini. Con [eCarUp](https://www.ecarup.com) esistono però anche altre soluzioni hardware compatibili.

- Il conteggio avviene ad esempio tramite carta di credito a tariffa unica con [eCarUp](https://www.ecarup.com) oppure tariffato direttamente tramite il conteggio dell'appartamento con [smart-me Billing](/konfiguration/billing).

- Il controllo delle stazioni di ricarica Pico e la protezione dell'infrastruttura sono affidati all'avanzata [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

- Il distacco dei carichi viene gestito direttamente tramite l'[hardware](/produkte/pico-ladestation) oppure tramite la [gestione del carico multilivello](/konfiguration/multilevel-lastmanagement).

## Bilanciamento e convalida del MKD3

![Schema di misura MKD3 (con non partecipanti) – Figura 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanciamento

La quantità di elettricità di rete venduta non corrisponde al valore della fattura del fornitore di energia e la quantità immessa in rete non corrisponde al valore rilevato dal contatore di bilancio.

Con il MKD3, la rimunerazione per i non partecipanti avviene periodicamente una sola volta nel periodo di conteggio.

**Motivazione dello scostamento**

Il calcolo e la ripartizione in smart-me calcolano il prelievo e il consumo dei partecipanti a intervalli di 15 minuti. In questo modo si identifica in modo univoco chi preleva elettricità, quando, da quale fonte e in quale quantità.

**Esempio:**

Se in un momento X, in 15 minuti, vengono prodotti 100 kWh di energia solare e i membri dell'elettricità per gli inquilini prelevano complessivamente 0 kWh, mentre i non partecipanti prelevano 100 kWh, in quel momento i membri dell'elettricità per gli inquilini non prelevano energia solare.

Il bilancio virtuale dell'elettricità per gli inquilini calcola quindi coerentemente 0 kWh di prelievo e 100 kWh di eccedenza.
Il contatore di bilancio fisico misura invece 0 kWh di prelievo e 0 kWh di eccedenza, perché i non partecipanti hanno consumato direttamente l'intera produzione.

**Il calcolo di compensazione dei fornitori di energia segue questa regola:**

Bilancio elettricità per gli inquilini importazione compensata = valore di importazione del contatore di bilancio - prelievo importato dei non partecipanti
\--> Se con la compensazione l'importazione diventa &lt; 0, il resto della detrazione viene aggiunto all'esportazione del bilancio.

Per questi 15 minuti risulterebbe quindi:
Bilancio importazione compensata = valore di bilancio 0 kWh - prelievo non partecipanti 100 kWh --> prelievo 0 kWh (delta 100 kWh di resto)

Bilancio esportazione compensata = 0 kWh + 100 kWh = 100 kWh

Poiché, a seconda dei casi, la compensazione non avviene ogni 15 minuti ma periodicamente una sola volta, ne risultano valori diversi per la convalida!

### Convalida

**Se il fornitore di energia effettua la compensazione su base di 15 minuti:**

Se il fornitore di energia effettua questa compensazione su base di 15 minuti, il risultato del bilanciamento virtuale di smart-me è uguale al bilanciamento del fornitore di energia.

**Convalida**

- Valore totale dell'elettricità di rete fatturata = somma del valore dell'elettricità di rete venduta nell'ambito dell'elettricità per gli inquilini

- Somma dell'energia solare venduta internamente = produzione - quantità immessa (fattura del fornitore di energia)




**Se il fornitore di energia effettua la compensazione 1 volta per periodo:**

Se il fornitore di energia effettua la compensazione una sola volta, ad es. al mese, si creano discrepanze più marcate tra i valori del fornitore di energia e le quantità di energia da noi vendute. La convalida richiede quindi un po' più di abitudine.

**Motivazione:**

Se la compensazione viene effettuata una volta al mese con il prelievo totale dei non partecipanti, non si tiene conto se e quanto i non partecipanti siano stati effettivamente riforniti dal produttore locale, modificando così il bilancio virtuale.

Parallelamente, il sistema calcola per i partecipanti all'elettricità per gli inquilini, coerentemente con l'utilizzo e la disponibilità tempestivi della produzione, il valore effettivamente prelevato dalle fonti. (Tiene conto se i partecipanti all'elettricità per gli inquilini hanno effettivamente prelevato elettricità dalla produzione attuale o se per la copertura è stata invece prelevata elettricità di rete)

Poiché qui si scontrano due mondi (dal punto di vista temporale), non si ottiene mai lo stesso risultato che consentirebbe un semplice confronto.

**Conclusione:**

Se la compensazione avviene 1 volta al mese, l'intero consumo dei non partecipanti viene compensato come elettricità di rete.
\--> Ciò è in linea di principio vantaggioso per il fornitore dell'elettricità per gli inquilini. (Si verifica necessariamente una sovracompensazione da parte del fornitore di energia)

**Esempio di compensazione mensile:**

- Misurazione bilancio importazione = 100 KWh

- Misurazione bilancio esportazione = 50 kWh

- Prelievo totale non partecipanti = 100 kWh

- Prelievo totale partecipanti all'elettricità per gli inquilini = 100 kWh

- Produzione = 250 kWh

In questo esempio, il prelievo totale dei non partecipanti viene detratto dalla misurazione di bilancio:

Prelievo dalla rete fatturato dal fornitore di energia = bilancio importazione 100 kWh - prelievo totale non partecipanti 100 kWh = prelievo 0kWh

In questo caso non ci viene fatturata alcuna elettricità di rete per l'elettricità per gli inquilini, anche se i partecipanti all'elettricità per gli inquilini avrebbero sicuramente un prelievo di elettricità di rete nel corso del mese (ad es. prelievo di elettricità durante la notte).

In questo caso, l'elettricità di rete viene quindi sempre sovracompensata.
L'esportazione del bilancio, invece, non viene adeguata correttamente ed è di conseguenza sempre troppo bassa.

Invece della rimunerazione per l'immissione per questa quantità, otteniamo la tariffa dell'elettricità di rete come sconto.

**Convalida**

- Il prelievo dalla rete fatturato dal fornitore di energia è sempre inferiore alla quantità di elettricità di rete da noi fatturata. (Entrate aggiuntive)

- La quantità immessa del fornitore di energia corrisponde al valore di esportazione del contatore di bilancio fisico ed è inferiore alla quantità calcolata del bilancio virtuale. (Perdita per mancata rimunerazione)

- La somma della quantità immessa rimunerata e della quantità documentata dal fornitore di energia per il supplemento dell'elettricità per gli inquilini corrisponde alla quantità totale di produzione.


\--> La sovracompensazione è in ogni caso redditizia per il gestore dell'elettricità per gli inquilini.
