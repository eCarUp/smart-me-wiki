---
title: 'Gestione del carico multilivello'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinar Gestione del carico multilivello (50 min)'
sidebar_label: 'Gestione del carico multilivello'
---
<Video src="YiiACL00jko" title="Video YouTube, registrazione del webinar sul rilascio della gestione del carico multilivello" />

Webinar Gestione del carico multilivello (50 min)

### Requisiti tecnici per l'utilizzo della gestione del carico multilivello

- Versione del firmware Pico 0.0.25 o superiore --> [Eseguire l'aggiornamento del firmware](/konfiguration/firmware-update)

- Tutte le regole se/allora con Pico sono state eliminate, per non inviare comandi contrari al MLM.

- Stato: 12.03.2024
    Nessun supporto per il distacco del carico tramite i contatti di ingresso del Telstar --> il rilascio della soluzione nel MLM seguirà.

- La gestione del carico funziona solo con Telstar CT / Telstar 80A o Nimbus


## Gestione del carico multilivello dinamica

La gestione del carico multilivello dinamica coordina le capacità limitanti e dinamiche dei singoli gruppi di carico a livello di allacciamento dell'edificio e di area.

Il suo compito consiste nel mettere a disposizione dei gruppi di carico subordinati le capacità di corrente ancora libere in ogni punto di riferimento, proteggendo così i punti di diramazione dal sovraccarico.

Esempi di punti di diramazione importanti:

- Allacciamento dell'area

- Allacciamento dell'edificio

- Linea di alimentazione della sottodistribuzione

- Partenza dell'autorimessa

Allo stesso tempo, la gestione del carico multilivello consente l'ottimizzazione solare e offre funzioni per il livellamento dei picchi di carico.

Limiti della gestione del carico multilivello dinamica:

- Max. 1000 dispositivi (stazioni di ricarica + contatori di riferimento)

- Max. 50 diramazioni di rami (punti di riferimento)

![Gestione del carico multilivello – Figura 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Protezione dal sovraccarico dei punti di diramazione (allacciamento dell'area, sottodistribuzioni, allacciamento dell'edificio)

Per tutti i rami creati nella gestione del carico multilivello è possibile definire valori massimi di corrente. Questi fungono da limite superiore assoluto del prelievo di corrente e corrispondono al valore di protezione delle linee di alimentazione.

Un ramo può esistere solo secondo lo schema seguente:

- Ramo con "carichi non misurati" :
    A valle di questo ramo si trovano altri consumatori o produttori che non sono esclusivamente gruppi Pico. Per la determinazione è necessario un contatore di riferimento.

- Ramo senza "carichi non misurati", virtuale:
    I consumatori a valle sono costituiti esclusivamente da gruppi di carico Pico o da "rami con carichi non misurati" con il relativo contatore di riferimento.
    La corrente totale può quindi essere calcolata dalla somma di queste misurazioni disponibili e corrisponde al 100% della corrente da controllare.

    Campi d'impiego:
    \- Limitazione della corrente totale dell'area tramite sottodistribuzioni misurate (risparmio di un contatore d'area)
    \- Protezione di più cavi piatti diramati da una partenza protetta


![Gestione del carico multilivello – Figura 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Gestione del carico multilivello – Figura 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Ramo virtuale (viola) limitato sulla base di un ramo con carichi non misurati e di gruppi Pico.

### Esempio di struttura di un complesso residenziale con MLM

![Gestione del carico multilivello – Figura 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Ottimizzazione solare

L'ottimizzazione solare consente un'assegnazione efficiente della corrente in eccesso ai gruppi di ricarica Pico subordinati. Il presupposto è almeno un "ramo con carichi non misurati" con il relativo contatore di riferimento.

L'ottimizzazione può avvenire solo 1x in serie (albero dall'alto verso il basso) oppure più volte in ramificazioni parallele.

In questo modo è possibile realizzare un'ottimizzazione solare sull'intera area oppure solo per singoli edifici.

Esempio:

- Ottimizzazione dell'area: ottimizzazione solare attiva sul ramo, con riferimento al contatore dell'area o a un ramo creato virtualmente sulla base dei sottorami misurati.

- Ottimizzazione dell'edificio: ottimizzazione solare attiva su più rami con riferimento ai rispettivi contatori dell'edificio.


Con l'ottimizzazione solare sull'allacciamento dell'area, l'infrastruttura di ricarica nell'edificio A dispone anche dell'eccedenza prodotta nell'edificio B.

![Gestione del carico multilivello – Figura 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Corrente di ricarica minima: priorizzazione indiretta e livellamento dei picchi di carico

<div className="row">
<div className="col col--6">

Ogni singolo gruppo di carico Pico può essere dotato di una corrente di ricarica minima dipendente dall'orario.

L'impostazione avviene in modo flessibile per ogni ora del giorno.

Questa funzione consente di mettere a disposizione una corrente di ricarica minima indipendentemente da altre ottimizzazioni parallele.

Solo il superamento della limitazione di corrente di un ramo avrebbe un effetto contrario.

Se la corrente di ricarica minima può essere garantita, questa limita il prelievo diretto dalla rete al valore impostato. 

Se è presente un'ottimizzazione solare, la corrente di ricarica disponibile può però superare il minimo impostato e viene aumentata di conseguenza.

Esempio d'impiego:

Ridurre la corrente di ricarica durante gli orari di produzione per ridurre i picchi di carico.

Ridurre la corrente di ricarica durante la pausa di mezzogiorno per ridurre i picchi di carico.

Ridurre la corrente di ricarica durante il giorno per ottenere una maggiore priorità della corrente solare.

Preferire i gruppi dei parcheggi esterni rispetto ai parcheggi dell'autorimessa sotterranea (priorizzazione dei gruppi)

Priorizzazione

L'impostazione della corrente minima disponibile di un gruppo presuppone una certa priorità rispetto agli altri gruppi di stazioni di ricarica. Il gruppo di stazioni di ricarica con la corrente minima disponibile più elevata in un dato momento viene sempre trattato in modo preferenziale dall'algoritmo.

Esempio:

Attualmente nel MLM sono disponibili per la distribuzione 26 A per fase:
Gruppo di ricarica A : corrente minima = 10A
Gruppo di ricarica B: corrente minima = 20A

Il gruppo di ricarica B viene alimentato per primo con 20A e il gruppo di ricarica A riceve il resto.

</div>
<div className="col col--6 text--center">

![Gestione del carico multilivello – Figura 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Gestione del carico multilivello – Figura 7](/img/konfiguration-multilevel-lastmanagement/07.png)

</div>
</div>

### Comportamento della gestione del carico multilivello in caso di interruzione di Internet

Tutte le stazioni di ricarica Pico devono essere configurate con l'impostazione per l'interruzione della connessione "Corrente max. (per gruppo)" ("Max. Strom (pro Gruppe)"). Le altre due modalità sono ammesse solo per il funzionamento singolo.

Funzione:
I gruppi di ricarica interessati dalla perdita della connessione Internet vengono riportati al valore definito per il gruppo. La distribuzione della corrente avviene automaticamente tramite il gestore di ricarica e tiene conto delle sessioni di ricarica attive.
La gestione del carico multilivello presuppone che i rami persi prelevino la corrente di gruppo definita e la sottrae dalla corrente residua disponibile.

La parte funzionante dell'installazione con connessione Internet attiva continua a operare in modalità normale con questa limitazione definita.

![Gestione del carico multilivello – Figura 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Distacco del carico con MLM

Il distacco del carico può essere realizzato in diverse varianti con l'aiuto del
segnale RSE dell'azienda elettrica.

- Ingressi hardware sul retro del Pico per la trasmissione a un gruppo Pico.

- Segnale sugli ingressi del contatore e trasmissione tramite MLM a tutti i gruppi di carico.


Maggiori informazioni in 

[Configurazione del distacco del carico con MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configurazione-del-distacco-dei-carichi)

[Configurazione del distacco del carico tramite ingressi esterni](/produkte/pico-ladestation#distacco-del-carico-ingressi-esterni)

![Gestione del carico multilivello – Figura 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Ingressi hardware Pico

![Gestione del carico multilivello – Figura 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Distacco del carico basato sul cloud (MLM)

### Valori limite della gestione del carico multilivello

Numero massimo di Pico e punti di contatori di riferimento : 1000 unità

Numero massimo di punti di riferimento virtuali e hardware: 50 unità, 6 unità in serie

Dimensione massima del singolo gruppo di stazioni di ricarica: 200 stazioni di ricarica

Numero minimo di Pico per gruppo di stazioni di ricarica: 1 unità

Numero minimo di punti di riferimento nel MLM: 1 unità (hardware o virtuale)

Numero massimo di gruppi di ricarica: 60 gruppi


Esempi di configurazioni minime:

- 1 partenza con 1-200 stazioni di ricarica incl. 1 punto di riferimento


Esempi di una tipica configurazione massima:

- 60 partenze con 16 stazioni di ricarica ciascuna incl. 8 punti di riferimento. (Grandi complessi residenziali con RCP (raggruppamento ai fini del consumo proprio))


- 6 partenze con 150 stazioni ciascuna incl. 50 punti di riferimento (complessi di parcheggi pubblici)

- 4 partenze con 200 stazioni ciascuna incl. 50 punti di riferimento (complessi di parcheggi pubblici)


## Configurazione del MLM

[Per saperne di più](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
