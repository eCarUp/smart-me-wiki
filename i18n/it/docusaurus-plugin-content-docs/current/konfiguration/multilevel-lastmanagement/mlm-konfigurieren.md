---
title: 'Configurazione della gestione del carico multilivello'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configurazione di una gestione del carico multilivello (MLM) dinamica'
sidebar_label: 'Configurazione della gestione del carico multilivello'
---
## Configurazione di una gestione del carico multilivello (MLM) dinamica

La configurazione di una gestione del carico multilivello avviene nell'area "Gestione del carico multilivello" (Multilevel Lastmanagement) nella navigazione principale

La funzione permette:

- Controllo dinamico di più gruppi di ricarica Pico statici

- Limitazione delle potenze di ricarica su punti di riferimento all'interno dell'installazione o del comprensorio

- Ottimizzazioni solari

- Riduzioni dei picchi di carico

- Priorizzazione dei gruppi di ricarica


![Configurazione della gestione del carico multilivello – Figura 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Definizione dei termini

La gestione del carico multilivello può essere considerata come un albero, con i seguenti termini e utilizzi:

- Tronco (punto di allacciamento principale dell'installazione)

- Rami (punti limitanti come diramazioni, allacciamenti domestici, sottodistribuzioni, uscite di somma)

- Foglie (gruppi di ricarica Pico statici)




Il tronco e i rami possono assumere diverse funzioni:

- Limitazione di corrente (protezione massima)

- Ottimizzazione solare ON o OFF

- Carichi non misurati presenti (attivo o inattivo)




Carichi non misurati:

Un carico non misurato corrisponde a un produttore o consumatore che non corrisponde a un gruppo di stazioni di ricarica Pico. Per poter tenere conto dinamicamente di questa produzione o di questo carico, deve essere messo a disposizione un hardware di misura come riferimento. (Ramo misurato)

Il ramo può anche essere limitato staticamente senza un contatore di riferimento, ma deve essere limitato a un massimo funzionale, tenendo conto del carico di base, in corrispondenza della protezione.

Rami tipici con carichi non misurati:

- Allacciamenti domestici (appartamenti, impianti solari, accumulatori a batteria, illuminazione esterna)

- Sottodistribuzioni (collegamento in rete di più complessi di edifici, SD Est, SD Ovest,...)

- Uscite per la mobilità elettrica (consumo in standby dei Pico e illuminazione del garage)


![Configurazione della gestione del carico multilivello – Figura 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configurazione della gestione del carico multilivello – Figura 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Aggiungere o eliminare un ramo

Aggiungere:

Seleziona il tronco o il ramo e crea un ramo o una diramazione aggiuntiva con "Aggiungi ramo" (Ast hinzufügen).

Eliminare:

Selezionando il ramo corrispondente e utilizzando la funzione "Elimina" (Löschen) vengono eliminati il ramo selezionato e tutti i rami collegati ad esso.

Affinché gli elementi successivi vengano conservati, i rami e i gruppi possono essere collegati preventivamente a un altro ramo o al tronco tramite la funzione drag & drop.





![Configurazione della gestione del carico multilivello – Figura 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Aggiungere gruppi di stazioni di ricarica all'albero

I gruppi di stazioni di ricarica non ancora assegnati e configurati correttamente per l'MLM si trovano sul lato destro.

Questi possono essere collegati ai rami tramite la funzione drag & drop e possono anche essere spostati all'interno della configurazione tramite drag & drop.



Nota:
Presupposto per l'utilizzo nell'MLM è che l'impostazione per l'interruzione della connessione sia configurata su "Corrente max. (per gruppo)" (Max. Strom (pro Gruppe)).

Questa può essere modificata su una stazione di ricarica Pico nella "Configurazione" (Konfiguration).



![Configurazione della gestione del carico multilivello – Figura 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configurazione della gestione del carico multilivello – Figura 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Ottimizzazione solare e corrente minima per gruppo di ricarica

Configurazione del ramo:

L'ottimizzazione solare è possibile 1x sul tronco (ottimizzata per il comprensorio) o più volte in parallelo su rami con carichi non misurati attivi, ad es. allacciamenti domestici.

A seconda della scelta, il surplus solare viene ottimizzato su tutti i gruppi di stazioni di ricarica o solo su una parte di essi.





Configurazione del gruppo:

Affinché l'ottimizzazione solare abbia anche l'effetto desiderato, ai gruppi di stazioni da ottimizzare deve essere assegnata temporaneamente una corrente di ricarica minima ridotta.
Questa corrente di ricarica minima viene definita sul gruppo di ricarica corrispondente (configurazione del gruppo) e corrisponde al prelievo massimo possibile dalla rete per il gruppo di ricarica nelle ore definite.

Contemporaneamente, con l'impostazione della corrente di ricarica minima è possibile praticare anche la riduzione dei picchi di carico.

Ogni gruppo può essere configurato in modo diverso.

I gruppi con una corrente di ricarica minima più elevata vengono trattati in modo prioritario nella distribuzione della corrente di rete disponibile.

![Configurazione della gestione del carico multilivello – Figura 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configurazione della gestione del carico multilivello – Figura 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Salvare e attivare la configurazione

Le modifiche nella configurazione vengono salvate solo se la configurazione viene anche attivata.

Se l'attivazione non può essere eseguita a causa di configurazioni errate, ciò può dipendere dai seguenti punti:

- Il gruppo di ricarica non è configurato correttamente per l'MLM (l'impostazione per l'interruzione di internet non è impostata su Corrente max. per gruppo)

- Singoli dispositivi rilevanti per l'MLM non sono online al momento del salvataggio. (portare online)


![Configurazione della gestione del carico multilivello – Figura 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Eliminare la configurazione dell'MLM

La configurazione di un MLLM può essere eliminata completamente con la pressione di un tasto per registrare una nuova configurazione.

![Configurazione della gestione del carico multilivello – Figura 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configurazione del distacco del carico

L'MLM dispone di un controllo integrato per il distacco del carico.

Questo controllo può essere utilizzato al posto degli ingressi hardware sul retro delle stazioni di ricarica Pico.

Note:

- I segnali applicati direttamente all'hardware Pico non possono essere sovrascritti con questa funzione.

- La funzione necessita di una connessione internet attiva per funzionare. In caso di perdita della connessione internet viene utilizzato il valore impostato per l'interruzione di internet dei gruppi Pico.


La funzione permette di interpretare uno o più segnali digitali delle aziende elettriche e di assegnare a tutti i gruppi di stazioni di ricarica dell'MLM una potenza di ricarica ridotta.

I segnali di comando vengono collegati a uno o due ingressi del contatore (E1) situati nelle vicinanze.

Compatibili a tale scopo sono gli hardware smart-me Telstar CT e Telstar 80A.

Nota:
Affinché gli ingressi possano essere utilizzati, questi devono essere configurati a livello hardware su "Ingresso digitale" (Digitaler Eingang). (Impostazioni del contatore, E1 --> Ingresso digitale)

Configurazioni del controllo:

Con un solo segnale:

- 1 livello: 0% di riduzione, riduzione variabile (10-100%)


Con due segnali:

- 4 livelli: 0% di riduzione, riduzione variabile, riduzione variabile, 100% di riduzione

- 3 livelli: 0% di riduzione, riduzione variabile (entrambi allo stesso livello), 100% di riduzione


Applicazione delle percentuali per l'EnWG14a in Germania:

- Per impianti da 22kW una riduzione dell'82% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.

- Per impianti da 11kW una riduzione del 73% corrisponde alla garanzia di 4200W di potenza minima per dispositivo nell'installazione.


Interpretazione del segnale:

Il segnale può essere interpretato in modi diversi.

Se in caso di distacco del carico l'azienda elettrica rimuove il segnale (230V --> 0V), la configurazione corretta è "Low attivo" (Low-Aktiv).

Nessun segnale (0) = 1 = L'energia disponibile viene ridotta

Se in caso di distacco del carico l'azienda elettrica applica il segnale (0V --> 230V), si deve scegliere "High attivo" (High-Aktiv).

Segnale (1) = 1 = L'energia disponibile viene ridotta.

[Collegamento e configurazione degli ingressi del contatore](https://sites.google.com/smart-me.com/wiki/schnittstellen/ein_und_ausgaenge)

![Configurazione della gestione del carico multilivello – Figura 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configurazione della gestione del carico multilivello – Figura 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configurazione della gestione del carico multilivello – Figura 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Attivare e disattivare il processore MLM

La configurazione MLM può essere disattivata e riattivata in qualsiasi momento.

- Arresta il processo di calcolo e l'assegnazione attiva di valori provenienti dai punti di riferimento.

- Mette a libera disposizione di tutti i gruppi di carico subordinati il valore definito per l'interruzione di internet.


Imposta il valore su attivo o inattivo e salva successivamente la configurazione per comunicarla al processore.

![Configurazione della gestione del carico multilivello – Figura 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Esempio di configurazione: casa con uscita per la mobilità elettrica + illuminazione del garage, impianto solare e livellamento dei picchi di carico a mezzogiorno

- Qui il tronco corrisponde all'allacciamento domestico

- La protezione dell'allacciamento corrisponde a 100A per fase.

- L'ottimizzazione solare si trova qui sull'allacciamento domestico.

- La produzione dell'impianto solare e il consumo proprio dell'edificio vengono misurati e considerati tramite il contatore "Hausanschluss Telstar 80A".


![Configurazione della gestione del carico multilivello – Figura 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configurazione della gestione del carico multilivello – Figura 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

L'uscita subordinata per la mobilità elettrica viene qui misurata attivamente per tenere conto dell'illuminazione del garage. I gruppi di ricarica devono così reagire dinamicamente all'illuminazione del garage.

- L'illuminazione del garage viene considerata con il contatore di riferimento "E-Mobilitätsabgang 63A Telstar 80A".

- La protezione dell'uscita corrisponde a 63A per fase.


![Configurazione della gestione del carico multilivello – Figura 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configurazione della gestione del carico multilivello – Figura 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

Affinché l'ottimizzazione solare mostri il suo effetto, durante il giorno viene ridotta la quantità di corrente minima della corrente di ricarica.

- La quantità di corrente minima corrisponde al prelievo massimo possibile dalla rete nell'ora definita.

- Appena la quantità di corrente minima viene coperta al 100% dall'impianto solare, le stazioni ricevono in aggiunta il surplus dell'impianto solare.

- Ottimizzazione solare per tutta la settimana dalle 6:00 alle 17:00 con corrente di ricarica minima di 15A per fase

- Livellamento dei picchi a mezzogiorno: le ricariche dalle 12:00 alle 13:00 sono possibili solo con surplus solare, il prelievo dalla rete resta a 0A

- La ricarica notturna dalle 18:00 alle 22:00 è possibile al 50% della capacità.

- La ricarica notturna dalle 22:00 fino alle 7:00 del mattino è possibile al 100% della capacità.
    (ad es. sfruttamento delle ore fuori punta)


![Configurazione della gestione del carico multilivello – Figura 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configurazione della gestione del carico multilivello – Figura 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Esempio di configurazione: comprensorio con più case, impianti solari e uscite per la mobilità elettrica

- Comprensorio RCP (raggruppamento ai fini del consumo proprio) con 3 case

- Ogni casa dispone di un garage sotterraneo

- Più gruppi di ricarica nei garage sotterranei

- TG1 dispone di posteggi esterni per visitatori e di posteggi per inquilini

- Le case TG1 e TG2 dispongono di impianti solari

- Ottimizzazione solare sul comprensorio, affinché anche TG3 possa beneficiare dell'energia solare.

- Protezione del comprensorio 300A per fase

- Protezioni delle case 180A per fase

- Uscite per la mobilità elettrica 63 A o 32A per fase


![Configurazione della gestione del carico multilivello – Figura 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- Il valore in ampere corrisponde alla protezione della linea di alimentazione

- Il punto di misura è protetto ma non misurato esso stesso.
    Poiché i rami successivi presentano tutti delle misurazioni e queste corrispondono al 100% del consumo del comprensorio, il tronco può essere limitato virtualmente.

- Ottimizzazione della corrente solare sul tronco (comprensorio) attiva. (Disponibilità di corrente solare per tutte e tre le case)


![Configurazione della gestione del carico multilivello – Figura 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configurazione della gestione del carico multilivello – Figura 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1: allacciamento domestico dell'edificio 1 nel comprensorio

- Protezione 180A per fase

- Carichi non misurati attivi: appartamenti, riscaldamento, illuminazione, generale, solare

- Considerazione dinamica degli appartamenti e delle pompe di calore


![Configurazione della gestione del carico multilivello – Figura 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configurazione della gestione del carico multilivello – Figura 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 uscita per la mobilità elettrica

- Protezione 63A per fase

- Carichi non misurati attivi: illuminazione del garage e ventilazione in aggiunta
    alle stazioni di ricarica elettrica

- Considerazione dinamica dell'illuminazione del garage e della ventilazione


![Configurazione della gestione del carico multilivello – Figura 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configurazione della gestione del carico multilivello – Figura 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Posteggi per visitatori del comprensorio (stazioni di ricarica pubbliche)

- Elevata disponibilità di energia e priorizzazione a un prezzo di vendita più alto.
    Pubblicato tramite il backend eCarUp. (autenticazione backend)

- Permanentemente 100% della capacità possibile dalla rete + copertura solare.

- Riduzione dei picchi di carico a mezzogiorno dalle 12:00 alle 13:00 solo 23A per fase dalla rete + surplus solare.

- Protezione del cavo 63A per fase


![Configurazione della gestione del carico multilivello – Figura 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configurazione della gestione del carico multilivello – Figura 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Posteggi per inquilini del comprensorio

- Media disponibilità di energia e priorizzazione, focus sull'energia solare durante il giorno.

- Permanentemente 50% della capacità possibile dalla rete.

- Protezione del cavo 32A per fase.

- Riduzione dei picchi di carico a mezzogiorno 0A dalle 12:00 alle 13:00.
    Ricarica solare possibile solo se la produzione non viene utilizzata dal comprensorio per altri scopi.


![Configurazione della gestione del carico multilivello – Figura 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configurazione della gestione del carico multilivello – Figura 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Parti dell'installazione non trattate:

- Gli allacciamenti domestici e le uscite per la mobilità elettrica delle case 2 e 3 sono identici nel tipo di configurazione.

- I 4 gruppi di ricarica nel garage sotterraneo 3 (TG3) sono configurati in modo simile ai posteggi per inquilini nel garage sotterraneo 1 (TG1)

- Ogni gruppo di ricarica può sviluppare comportamenti separati e ricevere anche correnti di alimentazione di emergenza diverse in caso di interruzione di internet.




![Configurazione della gestione del carico multilivello – Figura 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
