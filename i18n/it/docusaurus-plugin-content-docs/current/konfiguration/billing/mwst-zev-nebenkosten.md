---
title: 'IVA RCP / spese accessorie'
slug: '/konfiguration/billing/mwst-zev-nebenkosten'
description: 'In questa sezione approfondiamo il tema dell''IVA nel RCP.'
sidebar_label: 'IVA RCP / spese accessorie'
---
In questa sezione approfondiamo il tema dell'IVA nel RCP (raggruppamento ai fini del consumo proprio). Stabilire se e come l'IVA debba essere indicata e anche versata allo Stato è una questione piuttosto complessa. 

In questa sezione vogliamo ripercorrere le domande iniziali e le decisioni che ne derivano.

## Come funziona l'IVA?

L'imposta sul valore aggiunto è in primo luogo un'imposta sulla cifra d'affari. 

Un'impresa assoggettata all'IVA deve applicare un'imposta sulla propria cifra d'affari (vendita di prodotti e servizi), incassarla e successivamente versarla allo Stato.

Allo stesso tempo, però, le imprese assoggettate all'IVA hanno diritto alla deduzione dell'imposta precedente sulle prestazioni acquistate.

L'obiettivo è che l'IVA su un prodotto venga imposta una sola volta e complessivamente, in base al suo valore presso il consumatore finale.

![IVA RCP / spese accessorie – Figura 1](/img/konfiguration-billing-mwst-zev-nebenkosten/01.png)

Dettagli sull'esempio

Se un'impresa A ordina presso il fornitore 100 kWh di energia per 100 CHF netti, riceve dal fornitore di energia assoggettato all'IVA una fattura per i 100 kWh di energia (100 CHF netti) + l'IVA (8.1%, 8.10 CHF), per un totale di 108.10 CHF.

L'impresa A paga 108.10 CHF, il fornitore di energia versa gli 8.10 CHF allo Stato e trattiene 100 CHF per le proprie prestazioni.

Se ora l'impresa A rivendesse questa energia a un consumatore (qui senza guadagno, per una migliore comprensione), l'impresa A offrirebbe al consumatore i 100 kWh di energia di nuovo al prezzo di 100 CHF e applicherebbe a sua volta l'IVA, poiché l'impresa A stessa è assoggettata all'IVA. 

La fattura al consumatore risulta quindi come segue:

100 kWh di energia (100 CHF netti) + l'IVA (8.1%, 8.10 CHF), per un totale di 108.10 CHF.

Il consumatore paga i 108.10 CHF all'impresa A.

L'impresa A riceve 100 CHF per l'energia e versa l'IVA di 8.10 CHF allo Stato.

Ora il punto importante:
Sugli importi IVA da versare, l'impresa A può ora far valere la deduzione dell'imposta precedente prima di saldare il debito.

Grazie alla deduzione dell'imposta precedente, l'impresa A può dedurre 8.10 CHF (pagati in precedenza al fornitore di energia con la fattura dell'energia).
Poiché il prezzo dell'energia non è stato maggiorato (nessun guadagno), il debito derivante dalle vendite corrisponde a 8.10 CHF - la deduzione dell'imposta precedente = 0 CHF
L'impresa A non deve quindi versare nulla in più: per l'impresa A sono stati spesi 100 CHF e incassati 100 CHF.

Lo Stato ha sul proprio conto gli 8.10 CHF per l'energia fin dall'inizio, e il consumatore, che in questo caso non è assoggettato all'IVA e quindi non ha diritto alla deduzione, non può chiedere il rimborso degli 8.10 CHF. In questo modo solo il consumatore finale paga l'IVA del prodotto o del servizio.

Tutti gli attori intermedi possono di volta in volta chiedere il rimborso dell'IVA.

## Quando si è assoggettati all'IVA e per che cosa? (Stato 01.2026)

In un RCP (raggruppamento ai fini del consumo proprio) / RCP virtuale (vRCP) si vende principalmente un tipo di prodotto e un servizio.
In questo caso il prodotto è l'energia elettrica e il servizio è il conteggio di questa energia.

Sempre più spesso, però, insieme al RCP vengono fatturati anche calore / acqua e spese accessorie.
In questo contesto esistono diverse configurazioni aggiuntive che devono essere considerate ai fini dell'IVA.

Per ogni energia occorre decidere individualmente se vi sia o meno un assoggettamento all'IVA.

### Il RCP è assoggettato all'IVA per l'energia elettrica e i servizi?

![IVA RCP / spese accessorie – Figura 2](/img/konfiguration-billing-mwst-zev-nebenkosten/02.jpg)

Un assoggettamento all'IVA può sorgere in linea di principio a causa delle seguenti condizioni:

1.  Cifra d'affari derivante dalla vendita di energia e servizi del RCP > 100'000 CHF / anno --> Assoggettamento automatico

2.  Tramite un assoggettamento volontario del RCP all'IVA (opzione del RCP)


In entrambi i casi ciò deve essere notificato all'ufficio delle imposte e occorre ottenere un numero IVA per il RCP.

Se si verifica uno dei due casi, per il RCP accade quanto segue:

Il RCP è assoggettato all'IVA:

1.  Il RCP applica l'IVA su tutte le vendite di elettricità (energia di rete, elettricità solare e da batteria) e la indica sulle fatture.

2.  Il RCP ha diritto alla deduzione dell'imposta precedente per acquisti e servizi in relazione all'energia elettrica.

3.  Il RCP deve versare l'IVA allo Stato dopo la deduzione dell'imposta precedente


Il RCP non è assoggettato all'IVA:

1.  I prezzi dell'energia vengono fatturati a prezzi lordi senza indicazione dell'IVA

2.  I servizi e le spese accessorie dell'energia vengono fatturati a prezzi lordi senza indicazione dell'IVA


### Sussiste un assoggettamento all'IVA su calore / acqua e spese accessorie?

A questa domanda si può rispondere solo in base al tipo di vendita di queste energie e al rapporto e al mandato in relazione all'immobile + le questioni relative alla cifra d'affari e all'opzione.

Caso 1 (dettagli vedi sotto): Le energie vengono prodotte nell'immobile o acquistate dal locatore e poi ripartite?
\--> Riscaldamento centralizzato, teleriscaldamento e ripartizione tramite spese accessorie agli abitanti

Caso 2 (dettagli vedi sotto): Le energie vengono prodotte e fornite direttamente dal RCP all'inquilino?
\--> Situazione da fornitore di energia, ad es. teleriscaldamento?

Sulla base di questi due esempi è chiaramente evidente che i rapporti e i riferimenti sono diversi e possono quindi portare a risultati differenti.

Caso 1:

![IVA RCP / spese accessorie – Figura 3](/img/konfiguration-billing-mwst-zev-nebenkosten/03.jpg)

Dettagli:

Le energie vengono prodotte nell'immobile da una pompa di calore con accumulatore di acqua calda e poi ripartite negli immobili.
oppure
Il caso della PPP (proprietà per piani), che acquista energia e poi la ripartisce.

Poiché le energie sono state prodotte nell'immobile da apparecchiature di proprietà del proprietario dell'immobile, si pone ora la domanda se il proprietario dell'immobile sia assoggettato all'IVA. (Energie e spese accessorie)

Il RCP o il fornitore del servizio di conteggio conteggia queste energie come servizio nei confronti del proprietario dell'immobile su mandato. Il RCP o il fornitore del servizio di conteggio deve applicare l'IVA sul servizio di conteggio stesso, se è assoggettato all'IVA, ma non sulle energie e sulle spese accessorie da ripartire.

Il proprietario dell'immobile può in linea di principio essere a sua volta assoggettato all'IVA per gli stessi motivi:

1.  Cifra d'affari derivante da prestazioni imponibili  > 100'000 CHF / anno --> Assoggettamento automatico
    Prestazioni imponibili sono ad es. la locazione di appartamenti di vacanza o di parcheggi senza relazione con la locazione di appartamenti.
    Anche i servizi forniti in proprio sono prestazioni imponibili.
    Le normali locazioni di appartamenti non sono invece prestazioni imponibili.

2.  Tramite un assoggettamento volontario dell'immobile all'IVA (opzione)


L'opzione più frequente è l'assoggettamento volontario. Un assoggettamento dovuto alla cifra d'affari si verifica piuttosto raramente, poiché la locazione di soli spazi abitativi non è una prestazione imponibile.

Opzione (opzione parziale) per un immobile

L'opzione per un immobile spetta al proprietario dell'immobile. Può essere una mossa astuta per la locazione di superfici commerciali, poiché le attività commerciali possono così portare l'IVA in deduzione.

Se si decide per l'opzione, l'intero immobile di proprietà dello stesso locatore viene optato e assoggettato volontariamente all'IVA.

È importante capirlo, perché in tal modo tutte le parti dell'immobile che appartengono a questo locatore vengono assoggettate all'IVA. Fanno eccezione per legge i soli spazi abitativi, per i quali non è possibile optare.

Esempio:

Se l'edificio con 4 unità (2x superficie commerciale, 2x spazio abitativo) è interamente di proprietà del proprietario A e questi opta, egli ha di fatto un'opzione parziale per tutte le parti dell'immobile che non sono puramente spazio abitativo.

1.  Superficie commerciale 1 --> optata

2.  Superficie commerciale 2 --> optata

3.  Spazio abitativo 1 --> non optato, perché lo spazio abitativo è escluso dall'IVA

4.  Spazio abitativo 2 --> non optato, perché lo spazio abitativo è escluso dall'IVA


Per tutte le unità optate deve ora avvenire quanto segue:

- Indicare gli importi fatturati per calore / acqua al netto, IVA inclusa.
    È importante notare qui che l'IVA si allinea all'aliquota IVA dei canoni di locazione per tutte le componenti.
    Anche le spese con aliquota ridotta (2.6% per l'acqua fredda) devono poi essere tassate con l'aliquota normale dell'8.1%.

- Indicare gli importi fatturati per le spese accessorie al netto, IVA inclusa.

- Indicare il canone di locazione al netto, IVA inclusa! (Con l'opzione per l'immobile, anche il canone di locazione è soggetto all'IVA)


Per tutte le unità non optate (spazi abitativi):

- Importi fatturati per calore / acqua a prezzi lordi senza indicazione dell'IVA.

- Importi fatturati per le spese accessorie a prezzi lordi senza indicazione dell'IVA.


Oltre all'assoggettamento, il proprietario dell'immobile ha ora però anche diritto alla deduzione dell'imposta precedente per tutte le prestazioni che riguardano le parti dell'immobile optate, ma non per quelle non optate.

Se il RCP o il fornitore del servizio di conteggio agisce su mandato come fornitore di servizi per calore / acqua e spese accessorie, è importante quanto segue:

- Sulla fattura all'inquilino deve essere chiaramente indicato che la fattura è stata emessa in rappresentanza del locatore.
    Se ciò non viene espresso chiaramente, il mittente della fattura è considerato l'emittente della fattura. Poiché in tal caso le fatture per l'affitto e le spese accessorie non proverrebbero dallo stesso emittente, decade il diritto all'esenzione IVA per calore / acqua e spese accessorie, poiché non sono più considerati parte dell'affitto!

    Un testo indicativo: Fatturazione e invio in rappresentanza del vostro locatore XXXXXXXXXX
    Se il locatore è assoggettato all'imposta, con indicazione del numero IVA del locatore.


Caso 2:

![IVA RCP / spese accessorie – Figura 4](/img/konfiguration-billing-mwst-zev-nebenkosten/04.jpg)

## Informazioni aggiuntive e leggi

[Principi dell'imposta sul valore aggiunto - Admin.ch](https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf) 

[Bozza di prassi sull'IVA nel RCP (](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)[Admin.ch](http://admin.ch)[)](https://www.estv.admin.ch/dam/estv/de/dokumente/mwst/konsultativgremium/entwurf1-nein/mwst-kg-zev-de.pdf.download.pdf/mwst-kg-zev-de.pdf)
