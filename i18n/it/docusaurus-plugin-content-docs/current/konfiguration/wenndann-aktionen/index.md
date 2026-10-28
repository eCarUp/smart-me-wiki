---
title: 'Azioni se/allora'
slug: '/konfiguration/wenndann-aktionen'
description: 'Per poter utilizzare le azioni se/allora, devi disporre di una licenza smart-me Limited o Professional.'
sidebar_label: 'Azioni se/allora'
---
<Menueweg>Azioni "se-quando</Menueweg>

## Requisiti

Per poter utilizzare le azioni se/allora, devi disporre di una licenza smart-me Limited o Professional.

Per poter utilizzare la regolazione Pico delle azioni se/allora, devi disporre di una licenza smart-me Professional.

## A cosa servono le azioni SE / ALLORA

- Base delle fasce tariffarie per tariffe doppie e multiple nel Billing

- Comandi tramite gli ingressi e le uscite del contatore 

- Allarmi come interruzioni della connessione e arresti del contatore


[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Comando del boiler con SE / ALLORA](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Definire gli allarmi](/konfiguration/wenndann-aktionen/alarme)

È possibile creare comandi automatici per ogni dispositivo della piattaforma smart-me. Esistono due modi per definire tali azioni: si creano [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) oppure azioni se/allora. In questo articolo vengono spiegate le azioni se/allora.  Rispetto alle azioni basate su eventi, è possibile definire attivatori e azioni più complessi:

- -   sono possibili più attivatori (collegamenti E e O)

    - sono possibili più azioni

    - è possibile monitorare / commutare un gruppo di contatori

    - monitoraggio della connessione

    - arresto del contatore


## Azioni se/allora

Le azioni se/allora vengono salvate nel cloud e funzionano quindi solo se il dispositivo in questione dispone di una connessione WLAN. Puoi creare un numero illimitato di azioni se/allora per tutti i dispositivi smart-me. Le azioni se/allora possono essere create e modificate solo nel portale web. 

### Procedura

1.  Accedi al nostro [sito web](https://web.smart-me.com/login/) con il tuo nome utente e la tua password

2.  Clicca su Configurazione (Konfiguration)

3.  Clicca sul riquadro Azioni "se-quando (Wenn /Dann-Aktionen)

4.  Clicca sul simbolo + per creare una nuova azione oppure clicca su un'azione esistente per modificarla.


## Requisiti per il funzionamento delle azioni se/allora:

1.  Deve essere definito almeno un evento SE, poiché è questo che attiva l'azione. Se sono stati definiti più eventi SE, questi possono essere collegati con comandi E e O.

2.  Deve essere definita almeno un'azione ALLORA (eccezione: condizione per le tariffe). Se sono state definite più azioni ALLORA, vengono eseguite tutte contemporaneamente non appena la o le condizioni SE sono soddisfatte.

3.  Un nome per questa azione


## Eventi SE

Sono disponibili i seguenti eventi SE (attivatori):

![Valore di misura maggiore / minore](/img/konfiguration-wenndann-aktionen/02_EN.png)

Valore di misura maggiore/minore

- Definisci quale apparecchio di misura dell'energia deve essere monitorato.

    È possibile selezionare anche intere cartelle: in tal caso viene monitorato il valore medio di tutti i contatori presenti nella cartella. Puoi utilizzare tutti i contatori di energia collegati al cloud, quindi oltre ai contatori elettrici anche contatori del gas, di calore o dell'acqua (gateway). 


Il valore di verifica si riferisce sempre all'attributo principale. 

- Per il contatore elettrico, la potenza trifase in W o kW.

- Per il contatore di calore o di freddo, a W o kW.

- Per il contatore dell'acqua e il contatore del gas, a m3/h.


Stabilisci inoltre per quanto tempo il valore di misura deve rimanere al di sotto o al di sopra della soglia per attivare l'azione ALLORA.

![Azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen/03.png)

![Data e ora](/img/konfiguration-wenndann-aktionen/04.png)

Data e ora

Puoi definire singoli eventi o intervalli di tempo come evento SE. 

Si distinguono le seguenti varianti:

- Eventi singoli

- Eventi a intervallo di tempo


Eventi singoli:

Gli eventi singoli vengono sempre eseguiti in un momento preciso. Se però in quel momento non è stato possibile per motivi tecnici (ad es. assenza di Internet), il comando viene ripetuto solo al successivo verificarsi della condizione. Questa variante è adatta se nel frattempo altre fonti devono poter modificare lo stato di commutazione interessato.

Eventi a intervallo di tempo:

Gli eventi a intervallo di tempo vengono verificati e ripetuti ogni 5 minuti all'interno dell'intervallo definito. Lo stato di commutazione verrebbe modificato non appena i problemi tecnici fossero risolti, ma ciò impedisce interventi esterni sugli stati di commutazione comandati.

![Azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen/05.png)

![Nessuna connessione](/img/konfiguration-wenndann-aktionen/06.png)

Nessuna connessione

È possibile definire un evento SE per i contatori scollegati dal cloud. Occorre effettuare le seguenti impostazioni:

- Quale contatore / cartella deve essere monitorato

- Per quanti minuti la connessione deve essere interrotta


Suggerimento: se viene selezionata una cartella, vengono monitorati tutti i contatori che si trovano gerarchicamente al di sotto di essa.

Nota: 

Questa azione SE viene eseguita una sola volta. Il comando viene eseguito nuovamente solo dopo che tutti i contatori (cartelle) interessati da questo allarme sono tornati online.
(in caso di allarme, verifica quindi brevemente la connessione attuale di tutti i contatori)

![Arresto del contatore](/img/konfiguration-wenndann-aktionen/07.png)

Arresto del contatore

È possibile definire un evento SE per un arresto del contatore. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Per quanto tempo deve persistere l'arresto del contatore prima che la condizione sia soddisfatta.


Nota: 

Come unità di tempo, imposta qui più di un giorno (1440 minuti) o almeno il doppio dell'intervallo di lettura del contatore più lungo.

![Stati di commutazione](/img/konfiguration-wenndann-aktionen/08.png)

Stati di commutazione

Invece di monitorare la potenza di un contatore, è possibile monitorarne anche lo stato di commutazione. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Dove esattamente deve essere monitorato lo stato di commutazione (uscita o ingresso)

    - Fasi (solo contatore trifase 32A e Plug)

    - [Uscita a potenziale zero](/schnittstellen/ein-und-ausgaenge)

    - [Ingresso digitale](/schnittstellen/ein-und-ausgaenge)

- In quale stato deve attivarsi l'azione ALLORA: "On", "Off" o al cambio di stato.

- Tempo minimo: per quanto tempo il contatore deve trovarsi in questo stato prima che la condizione per l'azione ALLORA sia soddisfatta.


![Corrente maggiore / minore](/img/konfiguration-wenndann-aktionen/09.png)

La funzione Correnti maggiori / minori consente di comandare i carichi per evitare situazioni di sovraccarico nei punti di riferimento. 

In particolare, può fungere da attivatore per una regolazione Pico.

La funzione segue automaticamente la corrente positiva più elevata del dispositivo. 

Nota: ciò vale anche se viene selezionata la soglia "sotto".

Esempio contatore trifase:

Fase 1: -5A
Fase 2: 3A
Fase 3: 7A

Corrente di verifica risultante per la valutazione: 7A

Si definisce poi la soglia di verifica (Threshold) e se l'attivazione deve avvenire al superamento o al mancato raggiungimento della soglia.

È possibile indicare anche un tempo minimo.

![Azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen/10.png)

## Azioni ALLORA

Non appena si verificano gli eventi SE, vengono attivate le azioni ALLORA.

Sono disponibili le seguenti azioni ALLORA:

- Allarme

- Accensione/spegnimento

- Regolazione Pico (gestione dinamica del carico per le stazioni di ricarica e ottimizzazione solare)


![Allarme](/img/konfiguration-wenndann-aktionen/11.png)

[Allarme](/konfiguration/wenndann-aktionen/alarme)

Quando si verificano gli eventi SE, viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme

- Oggetto: oggetto delle e-mail di allarme

- Messaggio: testo contenuto nell'e-mail di allarme


Nell'oggetto e nel messaggio è possibile definire dei segnaposto. AlarmnName ed EventActionName vengono quindi sostituiti nell'e-mail inviata con il "nome dell'allarme" inserito o con il "nome dell'evento se/allora".

![Accensione / spegnimento](/img/konfiguration-wenndann-aktionen/12.png)

Accensione/spegnimento

Quando si verificano gli eventi SE, il dispositivo selezionato commuta. È possibile selezionare anche cartelle: in tal caso vengono commutati di conseguenza tutti i dispositivi commutabili presenti nella cartella.

Nota: i contatori dispongono di stati di commutazione solo se questi sono stati attivati anche nell'hardware.

Occorre effettuare le seguenti impostazioni:

- Quale contatore o cartella deve essere commutato

- Come deve essere commutato?

    - On

    - Off

    - Commutazione alternata (solo smart-me Plug)


![Azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen/13.png)

## Esempi: comando del boiler con SE/ALLORA

[Esempio di comando del boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Esempi: comandi RCP

### Pompa di calore RCP con comando SG-Ready sul valore di misura del bilancio

La configurazione illustra la struttura di un comando della pompa di calore in funzione della misura di bilancio con funzione SG-Ready in un RCP (raggruppamento ai fini del consumo proprio).

Obiettivo: la pompa di calore deve poter essere comandata in quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo il seguente schema:

Stato di funzionamento 1: S0\_0 OFF e S1 OFF --> pompa di calore OFF (0W)
Stato di funzionamento 2: S0\_0 OFF e S1 ON --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ON e S1 OFF --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ON e S1 ON --> pompa di calore livello di potenza 3 (5800W)

Per eseguire correttamente una configurazione di questo tipo è necessaria una cosiddetta state machine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per passare da un livello al successivo e una per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

Per ogni livello, nell'istruzione SE si verifica in quale livello ci troviamo e contemporaneamente si controlla anche il valore di bilancio.
Nell'azione ALLORA indichiamo in quale livello si deve passare, se tutte le azioni SE sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente e, per ogni livello, dovrebbe essere impostata a circa 5 minuti tramite il tempo minimo del valore di misura.

![Azioni se/allora – Figura 14](/img/konfiguration-wenndann-aktionen/14.png)

![Azioni se/allora – Figura 15](/img/konfiguration-wenndann-aktionen/15.png)

![Azioni se/allora – Figura 16](/img/konfiguration-wenndann-aktionen/16.png)

Azione 1: 1\_Stufe 0 --> 1 ON

![Azioni se/allora – Figura 17](/img/konfiguration-wenndann-aktionen/17.png)

Azione 2: 1\_Stufe 1 --> 2 ON

![Azioni se/allora – Figura 18](/img/konfiguration-wenndann-aktionen/18.png)

Azione 3: 1\_Stufe 2 --> 3 ON

![Azioni se/allora – Figura 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Azioni se/allora – Figura 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Azioni se/allora – Figura 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Azioni se/allora – Figura 22](/img/konfiguration-wenndann-aktionen/22.png)

### Pompa di calore RCP con comando SG-Ready sul valore di misura del bilancio

La configurazione illustra la struttura di un comando della pompa di calore in funzione della misura di bilancio con funzione SG-Ready in un RCP (raggruppamento ai fini del consumo proprio).

Obiettivo: la pompa di calore deve poter essere comandata in quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo il seguente schema:

Stato di funzionamento 1: S0\_0 OFF e S1 OFF --> pompa di calore OFF (0W)
Stato di funzionamento 2: S0\_0 OFF e S1 ON --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ON e S1 OFF --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ON e S1 ON --> pompa di calore livello di potenza 3 (5800W)

Per eseguire correttamente una configurazione di questo tipo è necessaria una cosiddetta state machine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per passare da un livello al successivo e una per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

Per ogni livello, nell'istruzione SE si verifica in quale livello ci troviamo e contemporaneamente si controlla anche il valore di bilancio.
Nell'azione ALLORA indichiamo quindi in quale livello si deve passare, se tutte le azioni SE sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente e, per ogni livello, dovrebbe essere impostata a circa 5 minuti tramite il tempo minimo del valore di misura.

![Azioni se/allora – Figura 23](/img/konfiguration-wenndann-aktionen/14.png)

![Azioni se/allora – Figura 24](/img/konfiguration-wenndann-aktionen/15.png)

![Azioni se/allora – Figura 25](/img/konfiguration-wenndann-aktionen/16.png)

Azione 1: 1\_Stufe 0 --> 1 ON

![Azioni se/allora – Figura 26](/img/konfiguration-wenndann-aktionen/17.png)

Azione 2: 1\_Stufe 1 --> 2 ON

![Azioni se/allora – Figura 27](/img/konfiguration-wenndann-aktionen/18.png)

Azione 3: 1\_Stufe 2 --> 3 ON

![Azioni se/allora – Figura 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Azioni se/allora – Figura 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Azioni se/allora – Figura 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Azioni se/allora – Figura 31](/img/konfiguration-wenndann-aktionen/22.png)

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Comando del boiler con SE / ALLORA](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Definire gli allarmi](/konfiguration/wenndann-aktionen/alarme)
