---
title: 'Azioni se/allora'
slug: '/konfiguration/wenndann-aktionen'
description: 'Per utilizzare le azioni se/allora devi disporre di una licenza smart-me Limited o Professional.'
sidebar_label: 'Azioni se/allora'
---
<Menueweg>Azioni "se-quando</Menueweg>

## Requisiti

Per utilizzare le azioni se/allora devi disporre di una licenza smart-me Limited o Professional.

Per utilizzare la regolazione Pico delle azioni se/allora devi disporre di una licenza smart-me Professional.

## A cosa servono le azioni SE / ALLORA

- Base delle fasce tariffarie per tariffe doppie e multiple nel Billing

- Comandi con gli ingressi e le uscite dei contatori 

- Allarmi come interruzioni della connessione e contatori fermi


[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Comando del boiler con SE / ALLORA](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Definire gli allarmi](/konfiguration/wenndann-aktionen/alarme)

Per ogni dispositivo nella piattaforma smart-me è possibile creare comandi automatici. Esistono due modi per definire tali azioni: si creano [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) oppure azioni se/allora. In questo articolo vengono spiegate le azioni se/allora.  Rispetto alle azioni basate su eventi, è possibile definire trigger e azioni più complessi:

- -   sono possibili più trigger (combinazioni E e O)

    - sono possibili più azioni

    - è possibile monitorare / commutare un gruppo di contatori

    - monitoraggio della connessione

    - contatore fermo


## Azioni se/allora

Le azioni se/allora vengono salvate nel cloud e funzionano quindi solo se il dispositivo interessato dispone di una connessione WLAN. Puoi creare un numero illimitato di azioni se/allora per tutti i dispositivi smart-me. Le azioni se/allora possono essere create e modificate solo nel portale web. 

### Procedura

1.  Accedi al nostro [sito web](https://web.smart-me.com/login/) con il tuo nome utente e la tua password

2.  Clicca su Configurazione (Konfiguration)

3.  Clicca sul riquadro Azioni se/allora (Wenn /Dann-Aktionen)

4.  Clicca sul simbolo + per creare una nuova azione oppure clicca su un'azione esistente per modificarla.


## Requisiti per il funzionamento delle azioni se/allora:

1.  Deve essere definito almeno un evento «se», poiché è questo a far scattare l'azione. Se sono stati definiti più eventi «se», questi possono essere combinati con comandi E e O.

2.  Deve essere definita almeno un'azione «allora» (eccezione per le condizioni per le tariffe). Se sono state definite più azioni «allora», vengono eseguite tutte contemporaneamente non appena la condizione o le condizioni «se» sono soddisfatte.

3.  Un nome per questa azione


## Eventi «se»

Sono disponibili i seguenti eventi «se» (trigger):

![Valore misurato maggiore / minore](/img/konfiguration-wenndann-aktionen/02_EN.png)

Valore misurato maggiore/minore (Messwert grösser/kleiner)

- Definisci quale apparecchio di misura dell'energia deve essere monitorato.

    È possibile selezionare anche intere cartelle: in tal caso viene monitorato il valore medio di tutti i contatori presenti nella cartella. Puoi utilizzare tutti i contatori di energia collegati al cloud, quindi oltre ai contatori elettrici anche contatori del gas, di calore o dell'acqua (gateway). 


Il valore di verifica si riferisce sempre all'attributo principale. 

- Per il contatore elettrico, alla potenza trifase in W o kW.

- Per il contatore di calore o di freddo, a W o kW.

- Per il contatore dell'acqua e del gas, a m3/h.


Stabilisci inoltre per quanto tempo il valore misurato deve rimanere al di sotto o al di sopra della soglia per far scattare l'azione «allora».

![Azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen/03.png)

![Data e ora](/img/konfiguration-wenndann-aktionen/04.png)

Data e ora (Datum und Uhrzeit)

Puoi definire singoli eventi o intervalli di tempo come evento «se». 

Si distinguono le seguenti varianti:

- Eventi singoli

- Eventi a intervallo di tempo


Eventi singoli:

Gli eventi singoli vengono sempre eseguiti in un momento preciso. Se però in quel momento non è stato possibile per motivi tecnici (ad es. assenza di Internet), il comando viene ripetuto solo al successivo verificarsi della condizione. Questa variante è adatta se nel frattempo altre fonti devono poter modificare lo stato di commutazione interessato.

Eventi a intervallo di tempo:

Gli eventi a intervallo di tempo vengono verificati e ripetuti ogni 5 minuti all'interno dell'intervallo definito. Lo stato di commutazione verrebbe modificato non appena i problemi tecnici fossero risolti, ma ciò impedisce interventi esterni sugli stati di commutazione comandati.

![Azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen/05.png)

![Nessuna connessione](/img/konfiguration-wenndann-aktionen/06.png)

Nessuna connessione (Keine Verbindung)

È possibile definire un evento «se» per i contatori scollegati dal cloud. Occorre effettuare le seguenti impostazioni:

- Quale contatore / cartella deve essere monitorato

- Per quanti minuti la connessione deve essere interrotta


Suggerimento: se si seleziona una cartella, vengono monitorati tutti i contatori gerarchicamente sottostanti.

Nota: 

Questa azione «se» viene eseguita una sola volta. Il comando viene eseguito di nuovo solo dopo che tutti i contatori (cartelle) interessati da questo allarme sono tornati online.
(in caso di allarme verifica quindi brevemente la connessione attuale di tutti i contatori)

![Contatore fermo](/img/konfiguration-wenndann-aktionen/07.png)

Contatore fermo (Zählerstillstand)

È possibile definire un evento «se» per un contatore fermo. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Per quanto tempo il contatore deve rimanere fermo affinché la condizione sia soddisfatta.


Nota: 

Come unità di tempo scegli qui più di un giorno (1440 minuti) o almeno il doppio dell'intervallo di lettura del contatore più lungo.

![Stati di commutazione](/img/konfiguration-wenndann-aktionen/08.png)

Stati di commutazione (Schaltzustände)

Invece di monitorare la potenza di un contatore, è possibile monitorarne anche lo stato di commutazione. Occorre effettuare le seguenti impostazioni:

- Quale contatore deve essere monitorato

- Dove esattamente deve essere monitorato lo stato di commutazione (uscita o ingresso)

    - Fasi (solo contatore trifase 32A e Plug)

    - [Uscita a potenziale zero](/schnittstellen/ein-und-ausgaenge)

    - [Ingresso digitale](/schnittstellen/ein-und-ausgaenge)

- In quale stato deve scattare l'azione «allora»: «On» (Ein), «Off» (Aus) oppure al cambio di stato.

- Tempo minimo: per quanto tempo il contatore deve trovarsi in questo stato affinché la condizione per l'azione «allora» sia soddisfatta.


![Corrente maggiore / minore](/img/konfiguration-wenndann-aktionen/09.png)

La funzione Correnti maggiori / minori (Ströme grösser / kleiner) consente di comandare i carichi per evitare situazioni di sovraccarico nei punti di riferimento. 

In particolare, può fungere da trigger per una regolazione Pico.

La funzione segue automaticamente la corrente positiva più elevata del dispositivo. 

Nota: ciò vale anche se si seleziona la soglia «sotto».

Esempio contatore trifase:

Fase 1: -5A
Fase 2: 3A
Fase 3: 7A

Corrente di verifica risultante per la valutazione: 7A

Si definisce quindi la soglia di verifica (Threshold) e se l'azione debba scattare al superamento o al mancato raggiungimento della soglia.

È possibile indicare anche un tempo minimo.

![Azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen/10.png)

## Azioni «allora»

Non appena si verificano gli eventi «se», vengono attivate le azioni «allora».

Sono disponibili le seguenti azioni «allora»:

- Allarme

- Accensione/spegnimento

- Regolazione Pico (gestione dinamica del carico per le stazioni di ricarica elettriche e ottimizzazione solare)


![Allarme](/img/konfiguration-wenndann-aktionen/11.png)

[Allarme](/konfiguration/wenndann-aktionen/alarme)

Quando gli eventi «se» si sono verificati, viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme


Nell'oggetto e nel messaggio è possibile definire dei segnaposto. AlarmnName ed EventActionName vengono quindi sostituiti nell'e-mail inviata con il «nome dell'allarme» inserito o con il «nome dell'evento se-allora».

![Accensione / spegnimento](/img/konfiguration-wenndann-aktionen/12.png)

Accensione/spegnimento (Ein- /Ausschalten)

Quando si verificano gli eventi «se», il dispositivo selezionato commuta. È possibile selezionare anche cartelle: in tal caso vengono commutati di conseguenza tutti i dispositivi commutabili presenti nella cartella.

Nota: i contatori dispongono di stati di commutazione solo se questi sono stati attivati anche nell'hardware.

Occorre effettuare le seguenti impostazioni:

- Quale contatore o cartella deve essere commutato

- Come deve essere commutato?

    - On (Ein)

    - Off (Aus)

    - Commuta (Umschalten) (solo smart-me Plug)


![Azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen/13.png)

## Esempi: comando del boiler con SE/ALLORA

[Esempio di comando del boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Esempi: comandi RCP

### Pompa di calore RCP con comando SG-Ready sul valore di misura del bilancio

La configurazione illustra la struttura di un comando di una pompa di calore in funzione della misurazione del bilancio con funzione SG-Ready in un RCP (raggruppamento ai fini del consumo proprio).

Obiettivo: la pompa di calore deve poter essere comandata su quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo lo schema seguente:

Stato di funzionamento 1: S0\_0 OFF e S1 OFF --> pompa di calore OFF (0W)
Stato di funzionamento 2: S0\_0 OFF e S1 ON --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ON e S1 OFF --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ON e S1 ON --> pompa di calore livello di potenza 3 (5800W)

Per realizzare con successo una tale configurazione occorre una cosiddetta state machine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per passare da un livello al successivo e per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

A ogni livello, nell'istruzione «se» si verifica in quale livello ci troviamo e contemporaneamente si controlla anche il valore di bilancio.
Nell'azione «allora» stabiliamo in quale livello si deve passare, se tutte le azioni «se» sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente; per ogni livello occorre impostare il tempo minimo del valore misurato (Messwert Mindestzeit) a circa 5 minuti.

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

La configurazione illustra la struttura di un comando di una pompa di calore in funzione della misurazione del bilancio con funzione SG-Ready in un RCP (raggruppamento ai fini del consumo proprio).

Obiettivo: la pompa di calore deve poter essere comandata su quattro livelli di potenza tramite due contatti elettrici (contatore Telstar S0\_0 e S1).

SG-Ready o Smartgrid-Ready è una logica di comando che rappresenta 4 stati con due segnali secondo lo schema seguente:

Stato di funzionamento 1: S0\_0 OFF e S1 OFF --> pompa di calore OFF (0W)
Stato di funzionamento 2: S0\_0 OFF e S1 ON --> pompa di calore livello di potenza 1 (800W)
Stato di funzionamento 3: S0\_0 ON e S1 OFF --> pompa di calore livello di potenza 2 (2800W)
Stato di funzionamento 4: S0\_0 ON e S1 ON --> pompa di calore livello di potenza 3 (5800W)

Per realizzare con successo una tale configurazione occorre una cosiddetta state machine (macchina a stati).
Per 4 livelli di potenza dobbiamo quindi avere un'azione per passare da un livello al successivo e per tornare indietro.

La commutazione avviene nei livelli di potenza:

Livello 0--> 1: eccedenza di >800W
Livello 1--> 2: eccedenza di >2000W
Livello 2--> 3: eccedenza di >3000W

Livello 3 -->2: prelievo di >500W
Livello 2 -->1: prelievo di >500W
Livello 1-->0: prelievo di >200W

A ogni livello, nell'istruzione «se» si verifica in quale livello ci troviamo e contemporaneamente si controlla anche il valore di bilancio.
Nell'azione «allora» stabiliamo quindi in quale livello si deve passare, se tutte le azioni «se» sono soddisfatte.

Importante: la commutazione non deve avvenire immediatamente; per ogni livello occorre impostare il tempo minimo del valore misurato (Messwert Mindestzeit) a circa 5 minuti.

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
