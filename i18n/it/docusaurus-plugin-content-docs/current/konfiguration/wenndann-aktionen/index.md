---
title: 'Azioni se/allora'
slug: '/konfiguration/wenndann-aktionen'
description: 'Per poter utilizzare le azioni se/allora è necessario disporre di una licenza smart-me Limited o Professional.'
sidebar_label: 'Azioni se/allora'
---
## Requisiti

Per poter utilizzare le azioni se/allora è necessario disporre di una licenza smart-me Limited o Professional.

Per poter utilizzare l'azione se/allora Regolazione Pico è necessario disporre di una licenza smart-me Professional.

![Azioni se/allora – Figura 1](/img/konfiguration-wenndann-aktionen/01.png)

## A cosa servono le azioni SE / ALLORA

- Base delle fasce tariffarie per tariffe doppie e multiple nel Billing

- Comandi con gli ingressi e le uscite del contatore

- Allarmi come interruzioni di collegamento e arresti del contatore


[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[SE / ALLORA comando del boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Definire gli allarmi](/konfiguration/wenndann-aktionen/alarme)

I comandi automatici possono essere creati per ogni dispositivo nella piattaforma smart-me. Esistono due modi per definire tali azioni. Si creano [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) oppure azioni se/allora. In questo articolo vengono spiegate le azioni se/allora. Rispetto alle azioni basate su eventi è possibile definire attivatori e azioni più complessi:

- -   sono possibili più attivatori (collegamenti E e O)

    - sono possibili più azioni

    - è possibile monitorare / commutare un gruppo di contatori

    - monitoraggio del collegamento

    - arresto del contatore


## Azioni se/allora

Le azioni se/allora vengono salvate nel cloud e funzionano quindi solo se il dispositivo interessato ha un collegamento WLAN. Per tutti i dispositivi smart-me è possibile creare un numero illimitato di azioni se/allora. Le azioni se/allora possono essere create e modificate solo nel portale web.

### Procedura

1.  Accedi al nostro [sito web](https://web.smart-me.com/login/) con il tuo nome utente e la tua password

2.  Clicca su Configurazione (Konfiguration)

3.  Clicca sul riquadro Azioni se/allora (Wenn/Dann-Aktionen)

4.  Clicca sul simbolo + per creare una nuova azione oppure clicca su una esistente per modificarla.


## Requisiti per il funzionamento delle azioni se/allora:

1.  Occorre definire almeno un evento se, poiché è questo ad attivare l'azione. Se sono stati definiti più eventi se, questi possono essere collegati con comandi E e O.

2.  Occorre definire almeno un'azione allora (eccezione: condizione per le tariffe). Se sono state definite più azioni allora, queste vengono eseguite tutte contemporaneamente appena le condizioni se sono soddisfatte.

3.  Un nome per questa azione


## Eventi se

Sono disponibili i seguenti eventi se (attivatori):

![Valore di misura maggiore / minore](/img/konfiguration-wenndann-aktionen/02.png)

Valore di misura maggiore/minore

- Definite quale dispositivo di misura dell'energia deve essere monitorato.

    È possibile selezionare anche cartelle intere; in tal caso viene monitorato il valore medio di tutti i contatori presenti in questa cartella. Potete utilizzare tutti i contatori di energia collegati al cloud. Quindi, oltre a quelli dell'elettricità, anche contatori del gas, di calore o dell'acqua (gateway).


Il valore di verifica si riferisce sempre all'attributo principale.

- Nel contatore dell'elettricità la potenza trifase in W o kW.

- Nel contatore di calore o del freddo in W o kW.

- Nel contatore dell'acqua e del gas in m3/h.


Stabilite inoltre per quanto tempo il valore di misura deve essere superato o non raggiunto per attivare l'azione allora.

![Azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen/03.png)

![Data e ora](/img/konfiguration-wenndann-aktionen/04.png)

Data e ora

Potete definire come evento se singoli eventi oppure intervalli di tempo.

Si distinguono le seguenti varianti:

- Eventi singoli

- Eventi con intervallo di tempo


Eventi singoli:

Gli eventi singoli vengono sempre eseguiti in un momento preciso. Se in quel momento ciò non è stato possibile per motivi tecnici (ad es. assenza di internet), il comando viene ripetuto solo al successivo verificarsi della condizione. Questa variante è adatta se nel frattempo altre fonti devono modificare lo stato di commutazione interessato.

Eventi con intervallo di tempo:

Gli eventi con intervallo di tempo vengono verificati e ripetuti ogni 5 minuti entro l'intervallo di tempo definito. Lo stato di commutazione verrebbe modificato appena i problemi tecnici fossero risolti, ma questo impedisce interventi esterni sugli stati di commutazione comandati.

![Azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen/05.png)

![Nessun collegamento](/img/konfiguration-wenndann-aktionen/06.png)

Nessun collegamento

È possibile definire un evento se per i contatori scollegati dal cloud. Occorre effettuare le seguenti impostazioni:

- Quale contatore / cartella deve essere monitorato

- Per quanti minuti deve essere interrotto il collegamento


Suggerimento: se viene selezionata una cartella, vengono monitorati tutti i contatori gerarchicamente sottostanti.

Nota:

Questa azione se viene eseguita una sola volta. Questo comando viene eseguito un'altra volta solo dopo che tutti i contatori (cartelle) interessati da questo allarme sono stati nuovamente online.
(in caso di allarme verificate quindi brevemente il collegamento attuale di tutti i contatori)

![Arresto del contatore](/img/konfiguration-wenndann-aktionen/07.png)

Arresto del contatore

È possibile definire un evento se per un arresto del contatore. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Per quanto tempo deve persistere l'arresto del contatore prima che la condizione sia soddisfatta.


Nota:

Come unità di tempo indicate qui più di un giorno (1440 minuti) oppure almeno il doppio dell'intervallo di lettura del contatore più lungo.

![Stati di commutazione](/img/konfiguration-wenndann-aktionen/08.png)

Stati di commutazione

Invece di monitorare la potenza di un contatore, è possibile monitorare anche lo stato di commutazione. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Dove esattamente deve essere monitorato lo stato di commutazione (uscita o ingresso)

    - Fasi (solo contatore trifase 32A e Plug)

    - [Uscita a potenziale zero](/schnittstellen/ein_und_ausgaenge)

    - [Ingresso digitale](/schnittstellen/ein_und_ausgaenge)

- Con quale stato deve attivarsi l'azione allora. "Acceso" (Ein), "Spento" (Aus) oppure al cambio di uno stato.

- Tempo minimo: per quanto tempo il contatore deve trovarsi in questo stato prima che la condizione per l'azione allora sia soddisfatta.


![Corrente maggiore / minore](/img/konfiguration-wenndann-aktionen/09.png)

La funzione Correnti maggiori / minori consente il comando di carichi per evitare situazioni di sovraccarico nei punti di riferimento.

In particolare può servire come attivatore per una regolazione Pico.

La funzione segue automaticamente la corrente positiva più elevata del dispositivo.

Nota: questo vale anche se viene selezionata la soglia "sotto".

Esempio contatore trifase:

Fase 1: -5A
Fase 2: 3A
Fase 3: 7A

Corrente di verifica risultante per la valutazione: 7A

Successivamente si definisce la soglia di verifica (Threshold) e se l'attivazione avviene al superamento o al mancato raggiungimento.

È possibile indicare anche un tempo minimo.

![Azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen/10.png)

## Azioni allora

Appena si verificano gli eventi se, vengono attivate le azioni allora.

Sono disponibili le seguenti azioni allora:

- Allarme

- Accensione/spegnimento

- Regolazione Pico (gestione dinamica del carico per le stazioni di ricarica elettrica e ottimizzazione solare)


![Allarme](/img/konfiguration-wenndann-aktionen/11.png)

[Allarme](/konfiguration/wenndann-aktionen/alarme)

Se si sono verificati gli eventi se, viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme

- Subject: oggetto delle e-mail di allarme

- Messaggio: testo contenuto nell'e-mail di allarme


Nel Subject (oggetto) e nel messaggio è possibile definire dei segnaposto. AlarmnName e EventActionName vengono poi sostituiti nell'e-mail inviata con il "nome dell'allarme" inserito oppure con il "nome dell'evento se-allora".

![Accensione / spegnimento](/img/konfiguration-wenndann-aktionen/12.png)

Accensione/spegnimento

Se si verificano gli eventi se, il dispositivo selezionato commuta. È possibile selezionare anche cartelle; in tal caso vengono commutati di conseguenza tutti i dispositivi commutabili presenti in questa cartella.

Nota: i contatori dispongono di stati di commutazione solo se questi sono stati attivati anche a livello di hardware.

Occorre effettuare le seguenti impostazioni:

- Quale contatore o cartella deve essere commutato

- Come deve essere commutato?

    - Acceso

    - Spento

    - Commutazione (solo smart-me Plug)


![Azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen/13.png)

## Esempi: comando del boiler con SE/ALLORA

[Esempio comando del boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

## Esempi: comandi RCP

### Pompa di calore RCP con comando SG-Ready sul valore di misura di bilancio

La configurazione illustra la struttura di un comando della pompa di calore in funzione della misurazione di bilancio con funzione SG-Ready.

Obiettivo: la pompa di calore deve poter essere comandata su quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo il seguente schema:

Stato di funzionamento 1: S0\_0 SPENTO e S1 SPENTO --> pompa di calore SPENTA (0W)
Stato di funzionamento 2: S0\_0 SPENTO e S1 ACCESO --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ACCESO e S1 SPENTO --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ACCESO e S1 ACCESO --> pompa di calore livello di potenza 3 (5800W)

Per realizzare con successo una configurazione di questo tipo occorre una cosiddetta statemachine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per ciascuno, per passare da un livello al successivo e per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

Per ogni livello, nell'istruzione se si verifica in quale livello ci troviamo e si controlla poi contemporaneamente anche il valore di bilancio.
Nell'azione allora indichiamo a quale livello si deve passare se tutte le azioni se sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente e per ogni livello dovrebbe essere impostata su circa 5 minuti tramite il tempo minimo del valore di misura.

![Azioni se/allora – Figura 14](/img/konfiguration-wenndann-aktionen/14.png)

![Azioni se/allora – Figura 15](/img/konfiguration-wenndann-aktionen/15.png)

![Azioni se/allora – Figura 16](/img/konfiguration-wenndann-aktionen/16.png)

Azione 1: 1\_Livello 0 --> 1 ON

![Azioni se/allora – Figura 17](/img/konfiguration-wenndann-aktionen/17.png)

Azione 2: 1\_Livello 1 --> 2 ON

![Azioni se/allora – Figura 18](/img/konfiguration-wenndann-aktionen/18.png)

Azione 3: 1\_Livello 2 --> 3 ON

![Azioni se/allora – Figura 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_Livello 3 --> 2 OFF

![Azioni se/allora – Figura 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_Livello 2--> 1 OFF

![Azioni se/allora – Figura 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_Livello 1 --> 0 OFF

![Azioni se/allora – Figura 22](/img/konfiguration-wenndann-aktionen/22.png)

### Pompa di calore RCP con comando SG-Ready sul valore di misura di bilancio

La configurazione illustra la struttura di un comando della pompa di calore in funzione della misurazione di bilancio con funzione SG-Ready.

Obiettivo: la pompa di calore deve poter essere comandata su quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo il seguente schema:

Stato di funzionamento 1: S0\_0 SPENTO e S1 SPENTO --> pompa di calore SPENTA (0W)
Stato di funzionamento 2: S0\_0 SPENTO e S1 ACCESO --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ACCESO e S1 SPENTO --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ACCESO e S1 ACCESO --> pompa di calore livello di potenza 3 (5800W)

Per realizzare con successo una configurazione di questo tipo occorre una cosiddetta statemachine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per ciascuno, per passare da un livello al successivo e per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

Per ogni livello, nell'istruzione se si verifica in quale livello ci troviamo e si controlla poi contemporaneamente anche il valore di bilancio.
Nell'azione allora indichiamo quindi a quale livello si deve passare se tutte le azioni se sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente e per ogni livello dovrebbe essere impostata su circa 5 minuti tramite il tempo minimo del valore di misura.

![Azioni se/allora – Figura 23](/img/konfiguration-wenndann-aktionen/14.png)

![Azioni se/allora – Figura 24](/img/konfiguration-wenndann-aktionen/15.png)

![Azioni se/allora – Figura 25](/img/konfiguration-wenndann-aktionen/16.png)

Azione 1: 1\_Livello 0 --> 1 ON

![Azioni se/allora – Figura 26](/img/konfiguration-wenndann-aktionen/17.png)

Azione 2: 1\_Livello 1 --> 2 ON

![Azioni se/allora – Figura 27](/img/konfiguration-wenndann-aktionen/18.png)

Azione 3: 1\_Livello 2 --> 3 ON

![Azioni se/allora – Figura 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_Livello 3 --> 2 OFF

![Azioni se/allora – Figura 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_Livello 2--> 1 OFF

![Azioni se/allora – Figura 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_Livello 1 --> 0 OFF

![Azioni se/allora – Figura 31](/img/konfiguration-wenndann-aktionen/22.png)

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[SE / ALLORA comando del boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Definire gli allarmi](/konfiguration/wenndann-aktionen/alarme)
