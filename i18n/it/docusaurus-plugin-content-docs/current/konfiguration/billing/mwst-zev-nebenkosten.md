---
title: 'IVA RCP / Spese accessorie'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'In questa sezione approfondiamo il tema dell''IVA nel RCP.'
sidebar_label: 'IVA RCP / Spese accessorie'
---
In questa sezione approfondiamo il tema dell'IVA nel RCP (raggruppamento ai fini del consumo proprio). Decidere se e come l'IVA debba essere indicata e anche versata allo Stato è piuttosto complesso. 

In questa sezione ripercorriamo le domande iniziali e le decisioni che ne derivano.

## Come funziona l'IVA?

L'imposta sul valore aggiunto è in primo luogo un'imposta sulla cifra d'affari. 

Un'impresa assoggettata all'IVA deve applicare un'imposta sulla propria cifra d'affari (vendita di prodotti e servizi), incassarla e successivamente versarla allo Stato.

Le imprese assoggettate all'IVA hanno però al tempo stesso il diritto alla deduzione dell'imposta precedente sulle prestazioni acquistate.

L'obiettivo è che l'IVA su un prodotto venga riscossa una sola volta, complessivamente, in base al suo valore presso il consumatore finale.

![IVA RCP / Spese accessorie – Figura 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01_IT.png)

Dettagli sull'esempio

Se dunque un'impresa A ordina presso il fornitore 100 kWh di energia per 100 CHF netti, riceve dall'azienda di approvvigionamento energetico assoggettata all'IVA una fattura per i 100 kWh di energia (100CHF netti) + l'IVA (8.1%, 8.10 CHF), pari a 108.10 CHF.

L'impresa A paga 108.10 CHF, l'azienda di approvvigionamento energetico versa gli 8.10 CHF allo Stato e trattiene 100 CHF per le proprie prestazioni.

Se ora l'impresa A rivendesse questa energia a un consumatore (qui senza guadagno, per una migliore comprensione), l'impresa A offre al consumatore i 100kWh di energia nuovamente al prezzo di 100 CHF e applica a sua volta l'IVA, poiché l'impresa A stessa è assoggettata all'IVA. 

La fattura al consumatore risulta quindi la seguente:

100 kWh di energia (100CHF netti) + l'IVA (8.1%, 8.10 CHF), pari a 108.10 CHF.

Il consumatore paga i 108.10 CHF all'impresa A.

L'impresa A riceve 100 CHF per l'energia e versa l'IVA di 8.10 CHF allo Stato.

Ora il punto importante:
Sugli importi IVA da versare, l'impresa A può far valere la deduzione dell'imposta precedente prima di saldare il debito.

Grazie alla deduzione dell'imposta precedente, l'impresa A può dedurre 8.10 CHF (pagati in precedenza all'azienda di approvvigionamento energetico con la fattura dell'energia).
Poiché non vi è stato alcun ricarico sul prezzo dell'energia (nessun guadagno), il debito derivante dalle vendite corrisponde a 8.10 CHF - la deduzione dell'imposta precedente = 0 CHF
L'impresa A non deve quindi versare nulla in più; per l'impresa A sono stati spesi 100 CHF e incassati 100 CHF.

Lo Stato dispone fin dall'inizio degli 8.10 CHF per l'energia sul proprio conto e il consumatore, in questo caso non assoggettato all'IVA e quindi nemmeno legittimato alla deduzione, non può chiedere la restituzione degli 8.10 CHF. In questo modo solo il consumatore finale paga l'IVA del prodotto o del servizio.

Tutti gli intermediari possono di volta in volta chiedere la restituzione dell'IVA.

## Quando si è assoggettati all'IVA e per che cosa? (Stato 01.2026)

In un RCP (raggruppamento ai fini del consumo proprio) / RCP virtuale (vRCP) si vendono principalmente un tipo di prodotto e un servizio.
In questo caso il prodotto è l'energia elettrica e il servizio è il conteggio di questa energia.

Sempre più spesso, però, insieme al RCP vengono fatturati anche calore / acqua e spese accessorie.
In questo contesto esistono diverse configurazioni aggiuntive che devono essere considerate ai fini dell'IVA.

Per ogni energia occorre decidere individualmente se vi sia un assoggettamento all'IVA o meno.

### Il RCP è assoggettato all'IVA per l'energia elettrica e i servizi?

![IVA RCP / Spese accessorie – Figura 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02_IT.png)

Un assoggettamento all'IVA può in linea di principio sorgere alle seguenti condizioni:

1.  Cifra d'affari derivante dalla vendita di energia e servizi del RCP > 100'000 CHF / anno --> Assoggettamento automatico

2.  Tramite un assoggettamento volontario del RCP all'IVA (opzione del RCP)


In entrambi i casi occorre annunciarlo all'autorità fiscale e ottenere un numero IVA per il RCP.

Se si verifica uno dei due casi, per il RCP avviene quanto segue:

Il RCP è assoggettato all'IVA:

1.  Il RCP applica l'IVA su tutte le vendite di elettricità (energia di rete, elettricità solare e da batteria) e la indica nelle fatture.

2.  Il RCP ha diritto alla deduzione dell'imposta precedente per acquisti e servizi relativi all'energia elettrica.

3.  Il RCP deve versare l'IVA allo Stato dopo la deduzione dell'imposta precedente


Il RCP non è assoggettato all'IVA:

1.  I prezzi dell'energia vengono fatturati a prezzi lordi senza indicazione dell'IVA

2.  I servizi e le spese accessorie per l'energia vengono fatturati a prezzi lordi senza indicazione dell'IVA


### Sussiste un assoggettamento all'IVA su calore / acqua e spese accessorie?

A questa domanda si può rispondere solo in base al tipo di vendita di queste energie e al rapporto e all'incarico in relazione all'immobile + le domande relative a cifra d'affari e opzione.

Caso 1 (dettagli vedi sotto): Le energie vengono prodotte nell'immobile o acquistate dal locatore e poi ripartite?
\--> Riscaldamento centralizzato, teleriscaldamento e ripartizione tramite spese accessorie agli abitanti

Caso 2 (dettagli vedi sotto): Le energie vengono prodotte e fornite direttamente dal RCP all'inquilino?
\--> Situazione di azienda di approvvigionamento energetico, ad es. teleriscaldamento?

Sulla base di questi due esempi risulta chiaro che i rapporti e le relazioni sono diversi e possono portare di conseguenza a risultati diversi.

Caso 1:

![IVA RCP / Spese accessorie – Figura 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03_IT.png)

Dettagli:

Le energie vengono prodotte nell'immobile da una pompa di calore con accumulatore di acqua calda e poi distribuite negli immobili.
oppure
Il caso della PPP (proprietà per piani), che acquista energia e poi la ripartisce.

Poiché le energie sono state prodotte nell'immobile tramite apparecchiature di proprietà del proprietario dell'immobile, si pone ora la domanda se il proprietario dell'immobile sia assoggettato all'IVA. (Energie e spese accessorie)

Il RCP o il fornitore del servizio di conteggio conteggia queste energie come servizio nei confronti del proprietario dell'immobile su mandato. Il RCP o il fornitore del servizio di conteggio deve applicare l'IVA per il servizio di conteggio stesso, se è assoggettato all'IVA, ma non per le energie e le spese accessorie da ripartire.

Il proprietario dell'immobile può in linea di principio essere a sua volta assoggettato all'IVA per gli stessi motivi:

1.  Cifra d'affari derivante da prestazioni imponibili  > 100'000 CHF / anno --> Assoggettamento automatico
    Sono prestazioni imponibili ad es. la locazione di appartamenti di vacanza o di posteggi senza relazione con la locazione di appartamenti.
    Anche i servizi forniti in proprio sono prestazioni imponibili.
    Le normali locazioni di appartamenti non sono invece prestazioni imponibili.

2.  Tramite un assoggettamento volontario dell'immobile all'IVA (opzione)


L'opzione più frequente è l'assoggettamento volontario. Un assoggettamento dovuto alla cifra d'affari si verifica piuttosto raramente, poiché la locazione di soli locali abitativi non è una prestazione imponibile.

Opzione (opzione parziale) di un immobile

L'opzione per un immobile deve essere decisa dal proprietario dell'immobile. Può essere una mossa intelligente per la locazione di superfici commerciali, poiché le attività commerciali possono allora dedurre l'IVA come imposta precedente.

Se si decide per l'opzione, l'intero immobile di proprietà dello stesso locatore viene optato e assoggettato volontariamente all'IVA.

È importante capirlo, perché in questo modo tutte le parti dell'immobile che appartengono a questo locatore vengono assoggettate all'IVA. Fanno eccezione per legge i locali puramente abitativi, per i quali non è possibile optare.

Esempio:

Se l'edificio con 4 unità (2x superficie commerciale, 2x locale abitativo) è interamente di proprietà del proprietario A e questi opta, egli risulta di fatto parzialmente optato per tutte le parti dell'immobile che non sono locali puramente abitativi.

1.  Superficie commerciale 1 --> optata

2.  Superficie commerciale 2 --> optata

3.  Locale abitativo 1 --> non optato, perché i locali abitativi sono esclusi dall'IVA

4.  Locale abitativo 2 --> non optato, perché i locali abitativi sono esclusi dall'IVA


Per tutte le unità optate deve ora avvenire quanto segue:

- Indicare gli importi fatturati per calore / acqua al netto, IVA inclusa.
    È importante notare che l'IVA si allinea all'aliquota IVA delle pigioni per tutte le componenti.
    Anche le spese con aliquota ridotta (2.6% per l'acqua fredda) devono poi essere tassate con l'aliquota normale dell'8.1%.

- Indicare gli importi fatturati per le spese accessorie al netto, IVA inclusa.

- Indicare la pigione al netto, IVA inclusa! (Con l'opzione dell'immobile, anche la pigione è soggetta all'IVA)


Per tutte le unità non optate (locali abitativi):

- Importi fatturati per calore / acqua a prezzi lordi senza indicazione dell'IVA.

- Importi fatturati per le spese accessorie a prezzi lordi senza indicazione dell'IVA.


Oltre all'assoggettamento, il proprietario dell'immobile ha però ora anche diritto alla deduzione dell'imposta precedente per tutte le prestazioni che riguardano le parti optate dell'immobile, ma non per quelle non optate.

Se il RCP o il fornitore del servizio di conteggio agisce su mandato come fornitore di servizi per calore / acqua e spese accessorie, è importante quanto segue:

- Sulla fattura all'inquilino deve risultare chiaramente che la fattura è stata emessa in rappresentanza del locatore.
    Se ciò non è espresso chiaramente, il mittente della fattura è considerato l'emittente della fattura. Poiché in tal caso le fatture per pigione e spese accessorie non proverrebbero dallo stesso emittente, decade il diritto all'esenzione dall'IVA per calore / acqua e spese accessorie, poiché non sono più considerate parte della pigione!

    Un testo di avvertenza: Fatturazione e invio in rappresentanza del Suo locatore XXXXXXXXXX
    Se il locatore è assoggettato all'IVA, con indicazione del numero IVA del locatore.


Caso 2:

![IVA RCP / Spese accessorie – Figura 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04_IT.png)

## Informazioni aggiuntive e leggi

[Principi dell'imposta sul valore aggiunto - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Bozza di prassi sull'IVA nel RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
