---
title: 'Gestione del carico multilivello'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinar Gestione del carico multilivello (50 min)'
sidebar_label: 'Gestione del carico multilivello'
---
<Video src="YiiACL00jko" title="Video YouTube, registrazione del webinar sul rilascio della gestione del carico multilivello" />

Webinar Gestione del carico multilivello (50 min)

### Requisiti tecnici per l'utilizzo della gestione del carico multilivello

- Pico firmware versione 0.0.25 o superiore --> [Eseguire l'aggiornamento del firmware](/konfiguration/firmware-update)

- Tutte le regole se/allora con Pico sono state eliminate, per non inviare comandi contrari all'MLM.

- Stato: 12.03.2024
    Nessuna pretesa di distacco del carico tramite i contatti d'ingresso Telstar --> il rilascio della soluzione in MLM seguirà.

- La gestione del carico funziona solo con Telstar CT / Telstar 80A o Nimbus


## Gestione del carico multilivello dinamica

La gestione del carico multilivello dinamica coordina le capacità limitanti e dinamiche dei singoli gruppi di carico a livello di allacciamento domestico e di comprensorio.

Il compito consiste nel mettere a disposizione le capacità di corrente ancora libere in ogni punto di riferimento ai gruppi di carico subordinati, proteggendo così i punti di diramazione dal sovraccarico.

Esempi di punti di diramazione importanti:

- Allacciamento del comprensorio

- Allacciamento domestico

- Linea di alimentazione del sottoquadro

- Uscita del garage


Al tempo stesso, la gestione del carico multilivello consente l'ottimizzazione solare e offre funzioni per il livellamento dei picchi di carico.

Limiti della gestione del carico multilivello dinamica:

- Max. 1000 dispositivi (stazioni di ricarica + contatori di riferimento)

- Max. 50 diramazioni (punti di riferimento)


![Gestione del carico multilivello – Figura 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Protezione dal sovraccarico dei punti di diramazione (allacciamento del comprensorio, sottoquadri, allacciamento domestico)

Per tutti i rami creati nella gestione del carico multilivello è possibile definire valori massimi di corrente. Questi agiscono come limite superiore assoluto del prelievo di corrente e corrispondono al valore di protezione delle linee di alimentazione.

Un ramo può esistere solo secondo il seguente schema:

- Ramo con "carichi non misurati":
    Dietro questo ramo si trovano ulteriori consumatori o produttori che non sono esclusivamente gruppi Pico. Per la determinazione è necessario un contatore di riferimento.

- Ramo senza "carichi non misurati", virtuale:
    I consumatori successivi sono costituiti esclusivamente da gruppi di carico Pico o da "rami con carichi non misurati" e relativo contatore di riferimento.
    La corrente totale può quindi essere formata dalla somma di queste misurazioni disponibili e corrisponde al 100% della corrente da controllare.

    Campi di applicazione:
    \- Limitazione della corrente totale del comprensorio mediante sottoquadri misurati (risparmio di un contatore di comprensorio)
    \- Protezione di più cavi piatti in derivazione da un'unica uscita protetta


![Gestione del carico multilivello – Figura 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Gestione del carico multilivello – Figura 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Il ramo virtuale (viola) limita in base al ramo con carichi non misurati e ai gruppi Pico.

### Esempio di struttura di un complesso residenziale con MLM

![Gestione del carico multilivello – Figura 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Ottimizzazione solare

L'ottimizzazione solare consente un'assegnazione efficiente della corrente in eccesso ai gruppi di ricarica Pico subordinati. Il presupposto è almeno un "ramo con carichi non misurati" e relativo contatore di riferimento.

L'ottimizzazione può avvenire solo 1x in serie (albero dall'alto verso il basso) oppure più volte in diramazioni parallele.

In questo modo l'ottimizzazione solare può essere realizzata su tutto il comprensorio o solo per singoli edifici.

Esempio:

- Ottimizzazione del comprensorio: ottimizzazione solare attiva sul ramo, riferimento al contatore del comprensorio o ramo creato virtualmente in base ai sottorami misurati.

- Ottimizzazione dell'edificio: ottimizzazione solare attiva su più rami con riferimento ai rispettivi contatori degli edifici.


Con l'ottimizzazione solare sull'allacciamento del comprensorio, l'infrastruttura di ricarica nella casa A dispone anche dell'eccedenza prodotta dalla casa B.

![Gestione del carico multilivello – Figura 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Corrente di ricarica minima: prioritizzazione indiretta e livellamento dei picchi di carico

Ogni singolo gruppo di carico Pico può essere dotato di una corrente di ricarica minima dipendente dall'ora.

L'impostazione avviene in modo flessibile per ogni ora del giorno.

Questa funzione consente di mettere a disposizione una corrente di ricarica minima indipendentemente da altre ottimizzazioni parallele.





Solo il superamento della limitazione di corrente di un ramo avrebbe un effetto contrario.

Se la corrente di ricarica minima può essere garantita, questa limita il prelievo diretto dalla rete alla misura impostata. 

Se è presente un'ottimizzazione solare, la corrente di ricarica disponibile può però salire oltre il minimo impostato e viene aumentata di conseguenza.

Esempio di applicazione:

Ridurre la corrente di ricarica durante i periodi di produzione per ridurre i picchi di carico.

Ridurre la corrente di ricarica durante l'ora di pranzo per ridurre i picchi di carico.

Ridurre la corrente di ricarica durante il giorno per ottenere una maggiore prioritizzazione della corrente solare.

Privilegiare i gruppi dei parcheggi esterni rispetto ai parcheggi nell'autosilo (prioritizzazioni dei gruppi)



Prioritizzazione

L'impostazione della corrente minima disponibile di un gruppo presuppone una determinata priorità rispetto agli altri gruppi di stazioni di ricarica. Il gruppo di stazioni di ricarica con la corrente minima disponibile più elevata in un dato momento viene sempre trattato in modo preferenziale dall'algoritmo.

Esempio:

Attualmente nell'MLM sono disponibili 26 A per fase da distribuire:
Gruppo di ricarica A: corrente minima = 10A
Gruppo di ricarica B: corrente minima = 20A

Il gruppo di ricarica B viene alimentato per primo con 20A e il gruppo di ricarica A riceve il resto.

![Gestione del carico multilivello – Figura 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Gestione del carico multilivello – Figura 7](/img/konfiguration-multilevel-lastmanagement/07.png)

### Comportamento della gestione del carico multilivello in caso di interruzione di Internet

Tutte le stazioni di ricarica Pico devono essere impostate con l'impostazione per l'interruzione della connessione "Corrente max. (per gruppo)" (Max. Strom (pro Gruppe)). Le altre due modalità sono ammesse solo per il funzionamento singolo.

Funzione:
I gruppi di ricarica interessati dalla perdita di Internet vengono ridotti alla misura definita dal gruppo. La distribuzione della corrente avviene automaticamente tramite il gestore di ricarica e tiene conto delle sessioni di ricarica attive.
La gestione del carico multilivello presuppone che i rami perduti prelevino la corrente di gruppo definita e la sottrae dalla corrente residua disponibile.

La parte funzionante dell'installazione con connessione Internet attiva continua a operare in modalità normale con questa limitazione definita.

![Gestione del carico multilivello – Figura 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Distacco del carico con MLM

Il distacco del carico può essere realizzato in diverse varianti con l'aiuto del
segnale RSE dell'azienda elettrica.

- Ingressi hardware Pico sul retro per la trasmissione a un gruppo Pico.

- Segnale sugli ingressi del contatore e trasmissione tramite MLM a tutti i gruppi di carico.


Maggiori informazioni in 

[Configurazione del distacco del carico con MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configurazione-del-distacco-del-carico)

[Configurazione del distacco del carico mediante ingressi esterni](/produkte/pico-ladestation#distacco-del-carico-ingressi-esterni)

![Gestione del carico multilivello – Figura 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Ingressi hardware Pico

![Gestione del carico multilivello – Figura 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Distacco del carico basato sul cloud (MLM)

### Valori limite della gestione del carico multilivello

Numero massimo di Pico e punti di contatori di riferimento: 1000 unità

Numero massimo di punti di riferimento virtuali e hardware: 50 unità, 6 unità in serie

Dimensione massima del singolo gruppo di stazioni di ricarica: 200 stazioni di ricarica

Numero minimo di Pico per gruppo di stazioni di ricarica: 1 unità

Numero minimo di punti di riferimento nell'MLM: 1 unità (hardware o virtuale)

Numero massimo di gruppi di ricarica: 60 gruppi


Esempi di dimensionamenti minimi:

- 1 uscita con 1-200 stazioni di ricarica incl. 1 punto di riferimento


Esempi di un tipico dimensionamento massimo:

- possono essere creati 60 uscite con 16 stazioni di ricarica ciascuna incl. 8 punti di riferimento. (Grandi complessi residenziali con RCP)


- 6 uscite con 150 stazioni ciascuna incl. 50 punti di riferimento (complessi di parcheggi pubblici)

- 4 uscite con 200 stazioni ciascuna incl. 50 punti di riferimento (complessi di parcheggi pubblici)


## Configurazione dell'MLM

[Scopri di più](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
