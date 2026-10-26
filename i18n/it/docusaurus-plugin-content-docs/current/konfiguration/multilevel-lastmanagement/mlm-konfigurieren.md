---
title: 'Configurazione della gestione del carico multilivello'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configurazione di una gestione del carico multilivello (MLM) dinamica'
sidebar_label: 'Configurazione della gestione del carico multilivello'
---
<Menueweg>Gestione del carico multilivello</Menueweg>

## Configurazione di una gestione del carico multilivello (MLM) dinamica

La configurazione di una gestione del carico multilivello avviene nella sezione "Gestione del carico multilivello" ("Multilevel Lastmanagement") della navigazione principale

La funzione consente:

- Controllo dinamico di più gruppi di ricarica Pico statici

- Limitazione delle potenze di ricarica in base a punti di riferimento all'interno dell'installazione o dell'area

- Ottimizzazioni solari

- Riduzioni dei picchi di carico

- Prioritizzazione dei gruppi di ricarica

![Configurazione della gestione del carico multilivello – Figura 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Definizione dei termini

La gestione del carico multilivello può essere vista come un albero, con i seguenti termini e utilizzi:

- Tronco (punto di allacciamento principale dell'installazione)

- Rami (punti limitanti come diramazioni, allacciamenti degli edifici, sottodistribuzioni, partenze cumulative)

- Foglie (gruppi di ricarica Pico statici)


Il tronco e i rami possono svolgere più funzioni:

- Limitazione della corrente (protezione massima)

- Ottimizzazione solare ON o OFF

- Presenza di carichi non misurati (attivi o inattivi)


Carichi non misurati:

Un carico non misurato corrisponde a un produttore o a un consumatore che non è un gruppo di stazioni di ricarica Pico. Per poter considerare dinamicamente questa produzione o questo carico, deve essere messo a disposizione un hardware di misura come riferimento. (Ramo misurato)

Il ramo può essere limitato anche staticamente senza un contatore di riferimento, ma deve essere limitato a un massimo funzionale, tenendo conto del carico di base, rispetto alla protezione.

Rami tipici con carichi non misurati: 

- Allacciamenti degli edifici (appartamenti, impianti solari, accumulatori a batteria, illuminazione esterna)

- Sottodistribuzioni (collegamento di più complessi di edifici, SD Est, SD Ovest,...)

- Partenze per la mobilità elettrica (consumo in standby dei Pico e illuminazione del garage)


<div className="row">
<div className="col col--6 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

</div>
<div className="col col--6 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

</div>
</div>

### Aggiungere o eliminare un ramo

Aggiungere:

Seleziona il tronco o un ramo e crea un ramo o una diramazione aggiuntivi con "Aggiungi ramo" ("Ast hinzufügen").

Eliminare:

Selezionando il ramo corrispondente e usando la funzione "Elimina" ("Löschen") vengono eliminati il ramo selezionato e tutti i rami ad esso collegati.

Per conservare gli elementi successivi, i rami e i gruppi possono essere prima collegati a un altro ramo o al tronco tramite la funzione drag & drop.


![Configurazione della gestione del carico multilivello – Figura 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Aggiungere gruppi di stazioni di ricarica all'albero

<div className="row">
<div className="col col--7">

I gruppi di stazioni di ricarica non ancora assegnati e configurati correttamente per l'MLM si trovano sul lato destro.

Possono essere collegati ai rami tramite la funzione drag & drop e anche spostati all'interno della configurazione tramite drag & drop.

Nota:
Il presupposto per l'utilizzo nell'MLM è che l'impostazione in caso di interruzione della connessione sia configurata su "Corrente max. (per gruppo)" ("Max. Strom (pro Gruppe)").

Questa può essere modificata su una stazione di ricarica Pico nella "Configurazione" ("Konfiguration").

</div>
<div className="col col--5 text--center">

![Configurazione della gestione del carico multilivello – Figura 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configurazione della gestione del carico multilivello – Figura 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

</div>
</div>

### Ottimizzazione solare e corrente minima per gruppo di ricarica

<div className="row">
<div className="col col--6">

Configurazione del ramo:

L'ottimizzazione solare è possibile 1x sul tronco (ottimizzata per l'area) oppure più volte in parallelo su rami con carichi non misurati attivi, ad es. allacciamenti degli edifici.

A seconda della scelta, l'eccedenza solare viene ottimizzata su tutti i gruppi di stazioni di ricarica o solo su una parte di essi.

Configurazione del gruppo:

Affinché l'ottimizzazione solare abbia l'effetto desiderato, ai gruppi di stazioni da ottimizzare deve essere assegnata temporaneamente una corrente di ricarica minima ridotta.
Questa corrente di ricarica minima viene definita sul relativo gruppo di ricarica (configurazione del gruppo) e corrisponde al prelievo massimo possibile dalla rete per il gruppo di ricarica nelle ore definite.

Allo stesso tempo, con l'impostazione della corrente di ricarica minima è possibile anche ridurre i picchi di carico.

Ogni gruppo può essere configurato in modo diverso.

I gruppi con una corrente di ricarica minima più elevata vengono trattati con priorità nella ripartizione della corrente di rete disponibile.

</div>
<div className="col col--6 text--center">

![Configurazione della gestione del carico multilivello – Figura 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configurazione della gestione del carico multilivello – Figura 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

</div>
</div>

### Salvare e attivare la configurazione

Le modifiche alla configurazione vengono salvate solo se la configurazione viene anche attivata.

Se l'attivazione non può essere eseguita a causa di configurazioni errate, le cause possono essere le seguenti:

- Il gruppo di ricarica non è configurato correttamente per l'MLM (l'impostazione in caso di interruzione di Internet non è impostata su Corrente max. per gruppo)

- Singoli dispositivi rilevanti per l'MLM non sono online al momento del salvataggio. (portarli online)

![Configurazione della gestione del carico multilivello – Figura 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Eliminare la configurazione dell'MLM

La configurazione di un MLLM può essere eliminata completamente premendo un pulsante, per registrare una nuova configurazione.

![Configurazione della gestione del carico multilivello – Figura 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configurazione del distacco del carico

<div className="row">
<div className="col col--7">

L'MLM dispone di un controllo integrato del distacco del carico.

Questo controllo può essere utilizzato al posto degli ingressi hardware sul retro delle stazioni di ricarica Pico. 

Note: 

- I segnali collegati direttamente all'hardware Pico non possono essere sovrascritti con questa funzione. 

- La funzione richiede una connessione Internet attiva per funzionare. In caso di perdita della connessione Internet viene utilizzato il valore impostato per l'interruzione di Internet dei gruppi Pico.

La funzione consente di interpretare uno o più segnali digitali delle aziende elettriche e di assegnare una potenza di ricarica ridotta a tutti i gruppi di stazioni di ricarica dell'MLM.

I segnali di comando vengono cablati su uno o due ingressi di contatore (E1) situati nelle vicinanze.

Sono compatibili gli hardware smart-me Telstar CT e Telstar 80A.

Nota:
Affinché gli ingressi possano essere utilizzati, devono essere configurati lato hardware su "Ingresso digitale" ("Digitaler Eingang"). (Impostazioni del contatore, E1 --> Ingresso digitale)

Configurazioni di controllo:

Con un solo segnale:

- 1 livello: riduzione 0%, riduzione variabile (10-100%)

Con due segnali:

- 4 livelli: riduzione 0%, riduzione variabile, riduzione variabile, riduzione 100%

- 3 livelli: riduzione 0%, riduzione variabile (entrambe allo stesso livello), riduzione 100%

Applicare le percentuali all'EnWG14a in Germania:

- Negli impianti da 22kW, una riduzione dell'82% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.

- Negli impianti da 11kW, una riduzione del 73% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.

Interpretazione del segnale:

Il segnale può essere interpretato in modi diversi.

Se in caso di distacco del carico il segnale dell'azienda elettrica viene rimosso (230V --> 0V), la configurazione corretta è "Attivo basso" ("Low-Aktiv").

Nessun segnale (0) = 1 = l'energia disponibile viene ridotta

Se in caso di distacco del carico il segnale dell'azienda elettrica viene applicato (0V --> 230V), occorre selezionare "Attivo alto" ("High-Aktiv").

Segnale (1) = 1 = l'energia disponibile viene ridotta.

[Cablaggio e configurazione degli ingressi del contatore](/schnittstellen/ein-und-ausgaenge)

</div>
<div className="col col--5 text--center">

![Configurazione della gestione del carico multilivello – Figura 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configurazione della gestione del carico multilivello – Figura 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configurazione della gestione del carico multilivello – Figura 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

</div>
</div>

### Attivare e disattivare il processore MLM

La configurazione MLM può essere disattivata e riattivata in qualsiasi momento.

- Arresta il processo di calcolo e l'assegnazione attiva di valori dai punti di riferimento.

- Mette a libera disposizione di tutti i gruppi di carico subordinati il valore definito per l'interruzione di Internet.


Imposta il valore su attivo o inattivo e salva quindi la configurazione per comunicarla al processore.

![Configurazione della gestione del carico multilivello – Figura 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Esempio di configurazione: casa con partenza per la mobilità elettrica + illuminazione del garage, impianto solare e livellamento dei picchi di carico a mezzogiorno

- Il tronco corrisponde qui all'allacciamento dell'edificio

- La protezione dell'allacciamento corrisponde a 100A per fase.

- L'ottimizzazione solare si trova qui sull'allacciamento dell'edificio.

- La produzione dell'impianto solare e il consumo proprio dell'edificio vengono misurati e considerati tramite il contatore "Allacciamento edificio Telstar 80A" ("Hausanschluss Telstar 80A").


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

</div>
</div>

La partenza subordinata per la mobilità elettrica viene qui misurata attivamente per tenere conto dell'illuminazione del garage. I gruppi di ricarica devono così reagire dinamicamente all'illuminazione del garage.

- L'illuminazione del garage viene considerata con il contatore di riferimento "Partenza mobilità elettrica 63A Telstar 80A" ("E-Mobilitätsabgang 63A Telstar 80A").

- La protezione della partenza corrisponde a 63A per fase.


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

</div>
</div>

Affinché l'ottimizzazione solare abbia effetto, durante il giorno viene ridotta la quantità minima di corrente di ricarica.

- La quantità minima di corrente corrisponde al prelievo massimo possibile dalla rete nell'ora definita.

- Non appena la quantità minima di corrente è coperta al 100% dall'impianto solare, le stazioni ricevono in aggiunta l'ulteriore eccedenza dell'impianto solare.

- Ottimizzazione solare per l'intera settimana dalle 6:00 alle 17:00 con corrente di ricarica minima di 15A per fase

- Livellamento dei picchi a mezzogiorno: dalle 12:00 alle 13:00 le ricariche sono possibili solo con eccedenza solare, il prelievo dalla rete resta a 0A

- La ricarica notturna dalle 18:00 alle 22:00 è possibile con il 50% della capacità.

- La ricarica notturna dalle 22:00 fino alle 7:00 del mattino è possibile con il 100% della capacità.
    (ad es. sfruttamento delle ore fuori punta)


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

</div>
</div>

## Esempio di configurazione: area con più edifici, impianti solari e partenze per la mobilità elettrica

- Area RCP (raggruppamento ai fini del consumo proprio) con 3 edifici

- Ogni edificio dispone di un'autorimessa sotterranea

- Più gruppi di ricarica nelle autorimesse sotterranee

- TG1 dispone di parcheggi esterni per i visitatori e di parcheggi per gli inquilini

- Gli edifici TG1 e TG2 dispongono di impianti solari

- Ottimizzazione solare sull'area, affinché anche TG3 possa beneficiare dell'energia solare.

- Protezione dell'area 300A per fase

- Protezioni degli edifici 180A per fase

- Partenze per la mobilità elettrica 63 A o 32A per fase


![Configurazione della gestione del carico multilivello – Figura 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- Il valore in ampere corrisponde alla protezione della linea di alimentazione

- Il punto di misura è protetto ma non è misurato.
    Poiché i rami successivi presentano tutti delle misurazioni e queste corrispondono al 100% del consumo dell'area, il tronco può essere limitato virtualmente.

- Ottimizzazione della corrente solare sul tronco (area) attiva. (Disponibilità di corrente solare per tutti e tre gli edifici)


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

</div>
</div>

HAK TG1: allacciamento dell'edificio 1 nell'area

- Protezione 180A per fase

- Carichi non misurati attivi: appartamenti, riscaldamento, illuminazione, parti comuni, solare

- Considerazione dinamica degli appartamenti e delle pompe di calore


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

</div>
</div>

TG1 partenza per la mobilità elettrica

- Protezione 63A per fase

- Carichi non misurati attivi: illuminazione del garage e ventilazione in aggiunta
    alle stazioni di ricarica

- Considerazione dinamica dell'illuminazione del garage e della ventilazione


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

</div>
</div>

Parcheggi per visitatori dell'area (stazioni di ricarica pubbliche)

- Elevata disponibilità di energia e prioritizzazione a un prezzo di vendita più elevato.
    Pubblicati tramite il backend eCarUp. (Autenticazione backend)

- Permanentemente il 100% della capacità possibile dalla rete + copertura solare.

- Riduzione dei picchi di carico a mezzogiorno dalle 12:00 alle 13:00 solo 23A per fase dalla rete + eccedenza solare.

- Protezione del cavo 63A per fase


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

</div>
</div>

Parcheggi per inquilini dell'area

- Disponibilità di energia e prioritizzazione medie, con focus sull'energia solare durante il giorno.

- Permanentemente il 50% della capacità possibile dalla rete.

- Protezione del cavo 32A per fase.

- Riduzione dei picchi di carico a mezzogiorno 0A dalle 12:00 alle 13:00.
    Ricarica solo solare possibile se la produzione non viene utilizzata dall'area per altri scopi.


<div className="row">
<div className="col col--4 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

</div>
<div className="col col--8 bild--mitte">

![Configurazione della gestione del carico multilivello – Figura 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

</div>
</div>

<div className="row">
<div className="col col--4">

Parti dell'installazione non trattate:

- Gli allacciamenti degli edifici e le partenze per la mobilità elettrica degli edifici 2 e 3 sono identici nel tipo di configurazione.

- I 4 gruppi di ricarica nell'autorimessa sotterranea 3 (TG3) sono configurati in modo simile ai parcheggi per inquilini nell'autorimessa sotterranea 1 (TG1)

- Ogni gruppo di ricarica può avere comportamenti distinti e ricevere anche correnti di alimentazione di emergenza diverse in caso di interruzione di Internet.

</div>
<div className="col col--8 text--center">

![Configurazione della gestione del carico multilivello – Figura 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)

</div>
</div>
