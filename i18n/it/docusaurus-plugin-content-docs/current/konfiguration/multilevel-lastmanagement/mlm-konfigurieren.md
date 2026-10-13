---
title: 'Configurazione gestione del carico multilivello'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configurazione di una gestione del carico multilivello (MLM) dinamica'
sidebar_label: 'Configurazione gestione del carico multilivello'
---
## Configurazione di una gestione del carico multilivello (MLM) dinamica

La configurazione di una gestione del carico multilivello avviene nell'area "Gestione del carico multilivello" ("Multilevel Lastmanagement") della navigazione principale

La funzione consente:

- Controllo dinamico di più gruppi di ricarica Pico statici

- Limitazione delle potenze di ricarica su punti di riferimento all'interno dell'installazione o dell'area

- Ottimizzazioni solari

- Riduzioni dei picchi di carico

- Prioritizzazione dei gruppi di ricarica


![Configurazione gestione del carico multilivello – Figura 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Definizione dei termini

La gestione del carico multilivello può essere vista come un albero, con i seguenti termini e utilizzi:

- Tronco (punto di allacciamento principale dell'installazione)

- Rami (punti limitanti come diramazioni, allacciamenti domestici, sottodistribuzioni, partenze cumulative)

- Foglie (gruppi di ricarica Pico statici)




Il tronco e i rami possono assumere diverse funzioni:

- Limitazione della corrente (protezione massima)

- Ottimizzazione solare ON o OFF

- Presenza di carichi non misurati (attivo o inattivo)




Carichi non misurati:

Un carico non misurato corrisponde a un produttore o a un consumatore che non corrisponde a un gruppo di stazioni di ricarica Pico. Per poter considerare dinamicamente questa produzione o questo carico, deve essere messo a disposizione un hardware di misura come riferimento. (Ramo misurato)

Il ramo può anche essere limitato staticamente senza un contatore di riferimento, ma in tal caso deve essere limitato a un massimo funzionale, tenendo conto del carico di base, rispetto alla protezione.

Rami tipici con carichi non misurati: 

- Allacciamenti domestici (appartamenti, impianti solari, accumulatori a batteria, illuminazione esterna)

- Sottodistribuzioni (collegamento di più complessi di edifici, SD Est, SD Ovest,...)

- Partenze per la mobilità elettrica (consumo in standby dei Pico e illuminazione del garage)


![Configurazione gestione del carico multilivello – Figura 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configurazione gestione del carico multilivello – Figura 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Aggiungere o eliminare un ramo

Aggiungere:

Seleziona il tronco o il ramo e crea un ramo o una diramazione aggiuntivi tramite "Aggiungi ramo" ("Ast hinzufügen").

Eliminare:

Selezionando il ramo corrispondente e usando la funzione "Elimina" ("Löschen") vengono eliminati il ramo selezionato e tutti i rami ad esso collegati.

Per conservare gli elementi successivi, i rami e i gruppi possono essere prima collegati a un altro ramo o al tronco tramite la funzione drag & drop.





![Configurazione gestione del carico multilivello – Figura 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Aggiungere gruppi di stazioni di ricarica all'albero

I gruppi di stazioni di ricarica non ancora assegnati e configurati correttamente per l'MLM si trovano sul lato destro.

Questi possono essere collegati ai rami tramite la funzione drag & drop e anche spostati all'interno della configurazione tramite drag & drop.



Nota:
Il presupposto per l'utilizzo nell'MLM è che l'impostazione in caso di interruzione della connessione sia configurata su "Corrente max. (per gruppo)" ("Max. Strom (pro Gruppe)").

Questa può essere modificata su una stazione di ricarica Pico in "Configurazione" ("Konfiguration").



![Configurazione gestione del carico multilivello – Figura 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configurazione gestione del carico multilivello – Figura 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Ottimizzazione solare e corrente minima per gruppo di ricarica

Configurazione del ramo:

L'ottimizzazione solare è possibile 1x sul tronco (ottimizzata per l'area) oppure più volte in parallelo su rami con carichi non misurati attivi, ad es. allacciamenti domestici.

A seconda della scelta, l'eccedenza solare viene ottimizzata su tutti i gruppi di stazioni di ricarica oppure solo su una parte di essi.





Configurazione del gruppo:

Affinché l'ottimizzazione solare abbia l'effetto desiderato, ai gruppi di stazioni da ottimizzare deve essere assegnata temporaneamente una corrente di ricarica minima ridotta.
Questa corrente di ricarica minima viene definita sul gruppo di ricarica corrispondente (configurazione del gruppo) e corrisponde al prelievo massimo possibile dalla rete per il gruppo di ricarica nelle ore definite.

Allo stesso tempo, con l'impostazione della corrente di ricarica minima è possibile praticare anche la riduzione dei picchi di carico.

Ogni gruppo può essere configurato in modo diverso.

I gruppi con una corrente di ricarica minima più elevata vengono trattati con priorità nella distribuzione della corrente di rete disponibile.

![Configurazione gestione del carico multilivello – Figura 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configurazione gestione del carico multilivello – Figura 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Salvare e attivare la configurazione

Le modifiche alla configurazione vengono salvate solo se la configurazione viene anche attivata.

Se l'attivazione non può essere eseguita a causa di configurazioni errate, le cause possono essere le seguenti:

- Il gruppo di ricarica non è configurato correttamente per l'MLM (l'impostazione in caso di interruzione di Internet non è impostata su Corrente max. per gruppo)

- Singoli dispositivi rilevanti per l'MLM non sono online al momento del salvataggio. (portarli online)


![Configurazione gestione del carico multilivello – Figura 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Eliminare la configurazione dell'MLM

La configurazione di un MLLM può essere eliminata completamente premendo un pulsante, per poter registrare una nuova configurazione.

![Configurazione gestione del carico multilivello – Figura 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configurazione del distacco dei carichi

L'MLM dispone di un controllo integrato del distacco dei carichi.

Questo controllo può essere utilizzato al posto degli ingressi hardware sul retro delle stazioni di ricarica Pico. 

Note: 

- I segnali collegati direttamente all'hardware Pico non possono essere sovrascritti con questa funzione. 

- La funzione richiede una connessione Internet attiva per funzionare. In caso di perdita della connessione Internet viene utilizzato il valore impostato per l'interruzione di Internet dei gruppi Pico.


La funzione consente di interpretare uno o più segnali digitali delle aziende elettriche e di assegnare una potenza di ricarica ridotta a tutti i gruppi di stazioni di ricarica dell'MLM.

I segnali di comando vengono cablati su uno o due ingressi (E1) di contatori situati nelle vicinanze.

Sono compatibili gli hardware smart-me Telstar CT e Telstar 80A.

Nota:
Affinché gli ingressi possano essere utilizzati, devono essere configurati lato hardware su "Ingresso digitale" ("Digitaler Eingang"). (Impostazioni del contatore (Zählereinstellungen), E1 --> Ingresso digitale (Digitaler Eingang))

Configurazioni di controllo:

Con un solo segnale:

- 1 livello: 0% di riduzione, riduzione variabile (10-100%)


Con due segnali:

- 4 livelli: 0% di riduzione, riduzione variabile, riduzione variabile, 100% di riduzione

- 3 livelli: 0% di riduzione, riduzione variabile (entrambe con lo stesso livello), 100% di riduzione


Applicazione delle percentuali secondo EnWG14a in Germania:

- Per impianti da 22kW, una riduzione dell'82% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.

- Per impianti da 11kW, una riduzione del 73% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.


Interpretazione del segnale:

Il segnale può essere interpretato in modi diversi.

Se il segnale dell'azienda elettrica viene rimosso in caso di distacco dei carichi (230V --> 0V), la configurazione corretta è "Attivo basso" ("Low-Aktiv").

Nessun segnale (0) = 1 = l'energia disponibile viene ridotta

Se il segnale dell'azienda elettrica viene applicato in caso di distacco dei carichi (0V --> 230V), occorre selezionare "Attivo alto" ("High-Aktiv").

Segnale (1) = 1 = l'energia disponibile viene ridotta.

[Cablaggio e configurazione degli ingressi del contatore](/schnittstellen/ein_und_ausgaenge)

![Configurazione gestione del carico multilivello – Figura 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configurazione gestione del carico multilivello – Figura 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configurazione gestione del carico multilivello – Figura 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Attivare e disattivare il processore MLM

La configurazione MLM può essere disattivata e riattivata in qualsiasi momento.

- Arresta il processo di calcolo e l'assegnazione attiva di valori dai punti di riferimento.

- Mette a libera disposizione di tutti i gruppi di carico subordinati il valore definito per l'interruzione di Internet.


Imposta il valore su attivo o inattivo e salva poi la configurazione per comunicarla al processore.

![Configurazione gestione del carico multilivello – Figura 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Esempio di configurazione: casa con partenza per la mobilità elettrica + illuminazione del garage, impianto solare e livellamento dei picchi di carico a mezzogiorno

- Il tronco corrisponde qui all'allacciamento domestico

- La protezione dell'allacciamento corrisponde a 100A per fase.

- L'ottimizzazione solare si trova qui sull'allacciamento domestico.

- La produzione dell'impianto solare e il consumo proprio della casa vengono misurati e considerati tramite il contatore "Hausanschluss Telstar 80A".


![Configurazione gestione del carico multilivello – Figura 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configurazione gestione del carico multilivello – Figura 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

La partenza subordinata per la mobilità elettrica viene qui misurata attivamente per tenere conto dell'illuminazione del garage. I gruppi di ricarica devono così reagire dinamicamente all'illuminazione del garage.

- L'illuminazione del garage viene considerata con il contatore di riferimento "E-Mobilitätsabgang 63A Telstar 80A".

- La protezione della partenza corrisponde a 63A per fase.


![Configurazione gestione del carico multilivello – Figura 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configurazione gestione del carico multilivello – Figura 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

Affinché l'ottimizzazione solare abbia effetto, durante il giorno la quantità minima di corrente di ricarica viene ridotta.

- La quantità minima di corrente corrisponde al prelievo massimo possibile dalla rete nell'ora definita.

- Non appena la quantità minima di corrente è coperta al 100% dall'impianto solare, le stazioni ricevono in aggiunta l'ulteriore eccedenza dell'impianto solare.

- Ottimizzazione solare per l'intera settimana dalle 6:00 alle 17:00 con corrente di ricarica minima di 15A per fase

- Livellamento dei picchi a mezzogiorno: dalle 12:00 alle 13:00 le ricariche sono possibili solo con eccedenza solare, il prelievo dalla rete resta a 0A

- La ricarica notturna dalle 18:00 alle 22:00 è possibile con il 50% della capacità.

- La ricarica notturna dalle 22:00 fino alle 7:00 del mattino è possibile con il 100% della capacità.
    (ad es. sfruttamento delle ore fuori punta)


![Configurazione gestione del carico multilivello – Figura 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configurazione gestione del carico multilivello – Figura 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Esempio di configurazione: area con più case, impianti solari e partenze per la mobilità elettrica

- Area RCP (raggruppamento ai fini del consumo proprio) con 3 case

- Ogni casa dispone di un'autorimessa sotterranea

- Più gruppi di ricarica nelle autorimesse sotterranee

- TG1 dispone di parcheggi esterni per i visitatori e di parcheggi per gli inquilini

- Le case TG1 e TG2 dispongono di impianti solari

- Ottimizzazione solare sull'area, affinché anche TG3 possa beneficiare dell'energia solare.

- Protezione dell'area 300A per fase

- Protezioni delle case 180A per fase

- Partenze per la mobilità elettrica 63 A o 32A per fase


![Configurazione gestione del carico multilivello – Figura 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- Il valore in ampere corrisponde alla protezione della linea di alimentazione

- Il punto di misura è protetto ma di per sé non misurato.
    Poiché i rami successivi presentano tutti misurazioni e queste corrispondono al 100% del consumo dell'area, il tronco può essere limitato virtualmente.

- Ottimizzazione dell'energia solare sul tronco (area) attiva. (Disponibilità di energia solare per tutte e tre le case)


![Configurazione gestione del carico multilivello – Figura 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configurazione gestione del carico multilivello – Figura 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1: allacciamento domestico dell'edificio 1 nell'area

- Protezione 180A per fase

- Carichi non misurati attivi: appartamenti, riscaldamento, illuminazione, parti comuni, solare

- Considerazione dinamica degli appartamenti e delle pompe di calore


![Configurazione gestione del carico multilivello – Figura 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configurazione gestione del carico multilivello – Figura 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 partenza per la mobilità elettrica

- Protezione 63A per fase

- Carichi non misurati attivi: illuminazione del garage e ventilazione in aggiunta
    alle stazioni di ricarica

- Considerazione dinamica dell'illuminazione del garage e della ventilazione


![Configurazione gestione del carico multilivello – Figura 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configurazione gestione del carico multilivello – Figura 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Parcheggi per i visitatori dell'area (stazioni di ricarica pubbliche)

- Elevata disponibilità di energia e prioritizzazione a un prezzo di vendita più alto.
    Pubblicati tramite il backend eCarUp. (Autenticazione backend)

- Permanentemente il 100% della capacità possibile dalla rete + copertura solare.

- Riduzione dei picchi di carico a mezzogiorno dalle 12:00 alle 13:00 solo 23A per fase dalla rete + eccedenza solare.

- Protezione del cavo 63A per fase


![Configurazione gestione del carico multilivello – Figura 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configurazione gestione del carico multilivello – Figura 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Parcheggi per gli inquilini dell'area

- Disponibilità di energia e prioritizzazione medie, con focus sull'energia solare durante il giorno.

- Permanentemente il 50% della capacità possibile dalla rete.

- Protezione del cavo 32A per fase.

- Riduzione dei picchi di carico a mezzogiorno 0A dalle 12:00 alle 13:00.
    Ricarica solo solare possibile se la produzione non viene utilizzata dall'area per altri scopi.


![Configurazione gestione del carico multilivello – Figura 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configurazione gestione del carico multilivello – Figura 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Parti dell'installazione non trattate:

- Gli allacciamenti domestici e le partenze per la mobilità elettrica delle case 2 e 3 sono identici nel tipo di configurazione.

- I 4 gruppi di ricarica nell'autorimessa sotterranea 3 (TG3) sono configurati in modo simile ai parcheggi per gli inquilini nell'autorimessa sotterranea 1 (TG1)

- Ogni gruppo di ricarica può assumere comportamenti separati e ricevere anche correnti di alimentazione d'emergenza diverse in caso di interruzione di Internet.




![Configurazione gestione del carico multilivello – Figura 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
