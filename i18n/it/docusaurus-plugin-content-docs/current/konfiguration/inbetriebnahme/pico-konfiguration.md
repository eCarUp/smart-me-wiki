---
title: 'Configurazione Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'In questa pagina trovi le configurazioni più importanti relative all''hardware Pico.'
sidebar_label: 'Configurazione Pico'
---
In questa pagina trovi le configurazioni più importanti relative all'hardware Pico. La configurazione della stazione di ricarica Pico avviene sempre, in un primo momento, tramite la piattaforma smart-me. Successivamente è possibile abilitare il metodo di autenticazione tramite un sistema backend (eCarUp).

![Configurazione Pico – Figura 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configurazione Pico – Figura 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Autenticazione (privata, semipubblica, pubblica)



La stazione di ricarica Pico può essere utilizzata con o senza metodo di autenticazione.



### Configurazione None:

Nessuna autenticazione necessaria per la ricarica. (carica non appena collegata)



### Configurazione con backend eCarUp:

Per gestire una Pico in modo pubblico / semipubblico o per poter utilizzare qualsiasi tipo di funzione di abilitazione, la stazione deve essere gestita in modalità backend tramite eCarUp.

Funzioni di abilitazione:

- RFID

- On / Off manuale tramite app

- Codici QR

- CarID (richiede l'attivazione nelle impostazioni avanzate del portale smart-me)




Non appena è selezionato “eCarUp Backend”, la stazione viene aggiunta automaticamente all'account eCarUp con lo stesso nome. (stesso nome utente e password di smart-me)

La configurazione di eCarUp si esegue nel portale web di [www.ecarup.com](http://www.ecarup.com).

Alla voce Conducenti (Fahrer) aggiungi un tag di carta RFID oppure leggi un "tag di carta" tramite l'app eCarUp per Android e iOS.

I dettagli sulla configurazione di eCarUp e delle stazioni di ricarica pubbliche si trovano nel
Wiki di eCarUp: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configurazione backend OCPP esterno:

Per integrare la Pico in un backend di terzi devi semplicemente inserire l'URL del backend del fornitore terzo nella rispettiva stazione di ricarica.

Questa opzione non dovrebbe essere utilizzata se la stazione è collegata tramite eCarUp.

Nota:
L'URL inizia con ws:// o wss://

Impostazione Pico nel portale smart-me:

![Configurazione Pico – Figura 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu del portale eCarUp:

![Configurazione Pico – Figura 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Inserire l'URL del backend di terzi:

![Configurazione Pico – Figura 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configurazione per uso privato con autenticazione RFID

1.  Vai su Stazioni → Gestione (Stationen → Verwaltung) nel portale eCarUp

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prezzi = 0 CHF, Accesso: Privato

![Configurazione Pico – Figura 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configurazione per uso limitato con autenticazione RFID (inquilini con prezzi speciali)

1.  Vai su Stazioni → Gestione (Stationen → Verwaltung) nel portale eCarUp

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Selezionare i prezzi

![Configurazione Pico – Figura 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Definire gli utenti speciali e i loro prezzi

I conducenti creano il proprio account su eCarUp e comunicano il nome dell'account al proprietario della stazione.

![Configurazione Pico – Figura 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizzare il display della Pico

Sconsigliamo di inserire un'immagine di sfondo nera, perché in tal caso non è chiaro se la Pico sia in funzione o meno. Soprattutto quando è offline, è difficile valutare a distanza se la stazione è guasta o non collegata. Per questo motivo consigliamo alle persone attente al consumo energetico di aggiungere questa immagine da 4 pixel, in modo da poter sempre riconoscere se la stazione è ancora in funzione localmente o no. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Il nome della stazione e la visualizzazione in caso di inutilizzo possono essere scelti liberamente e personalizzati.

Oltre alle emoticon già disponibili è possibile caricare anche GIF o immagini proprie. 

- Formati supportati: JPG, PNG, GIF

- Risoluzione: 32x32 pixel

- Dimensione: max. 200 kB

- Lo sfondo dovrebbe essere completamente nero (#000000)

- Le animazioni (GIF) hanno 10 immagini/s (100ms per immagine)


Nota: Il risultato migliore si ottiene se durante la creazione e la modifica si fa attenzione a caricare l'immagine con 32x32 pixel in formato GIF.



\-> Crea le tue GIF con [piskelapp](/drittsysteme/piskelapp) 

![Configurazione Pico – Figura 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestione del carico e limitazione

### Limitare la potenza della stazione

La stazione di ricarica Pico può essere standardizzata al momento dell'installazione.

Questa impostazione viene considerata dalla gestione del carico automatica e non viene mai sovrascritta.

Con l'impostazione della corrente di carica massima è possibile limitare in modo fisso la potenza massima della stazione. La limitazione avviene a passi di 1 ampere.

32A = 22kW di potenza massima

16A = 11kW di potenza massima

Con l'impostazione della corrente minima si impediscono le ricariche oppure si definiscono correnti minime adeguate per l'avvio della ricarica di un'auto.

Nota:
Ci sono veicoli che non possono essere ricaricati con una corrente di avvio di 6A a causa della tecnologia installata nel veicolo. In questo caso la corrente minima può essere impostata su un valore più alto.

![Configurazione Pico – Figura 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestione del carico statica (gruppo di stazioni)

La gestione del carico statica regola le stazioni all'interno dello stesso gruppo di gestione del carico. La funzione impedisce il superamento della corrente massima sulla linea di alimentazione, ad esempio un cavo piatto, e regola la distribuzione della corrente disponibile tra le stazioni. 

La dimensione dei gruppi di ricarica è limitata a 200 stazioni di ricarica.

Funzione in dettaglio:
Le stazioni di ricarica si regolano autonomamente in base alla corrente massima definita. La potenza di ricarica trifase viene distribuita su tutte le stazioni attive finché la potenza minima impostata non può più essere messa a disposizione in modo trifase a tutte le auto in ricarica. Successivamente la potenza viene commutata su monofase. Tutte le auto proseguono la ricarica in monofase con la corrente massima possibile per fase (commutazione di fase). Un'ulteriore ricarica diventa impossibile solo quando tutte le auto già in ricarica hanno raggiunto il minimo in monofase. Non appena uno dei veicoli in ricarica lascia la stazione, la carica riservata viene liberata per un altro veicolo.

Configurazione:

1.  Creare il gruppo di gestione del carico (Nuovo gruppo)

2.  Definire la corrente massima della linea di alimentazione (Corrente disponibile)

3.  Definire l'azione in caso di interruzione della connessione
    (Per la combinazione con la gestione del carico multilivello è utilizzabile solo la versione Corrente max. per gruppo)

4.  Aggiungere le stazioni al rispettivo gruppo di gestione del carico (Modifica)




Maggiori dettagli in merito: [Pico Lastmanagement](/produkte/pico-ladestation/pico-lastmanagement)

![Configurazione Pico – Figura 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configurazione Pico – Figura 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestione del carico dinamica e ricarica ottimizzata per il solare con gestione del carico multilivello (MLM)

La gestione del carico dinamica consente di tenere conto di un punto di riferimento e di controllare le correnti massime in tale punto. Nella mobilità elettrica viene scelto a tale scopo il punto di allacciamento dell'edificio oppure il punto di distribuzione.

[Pianificazione della gestione del carico](/planung/elektromobilitaet) 

Come hardware per la misurazione di riferimento sono adatti i seguenti prodotti:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


La configurazione della gestione del carico dinamica avviene tramite la gestione del carico multilivello di smart-me.

Dettagli ed esempi si trovano qui: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

Puoi quindi influire in modo continuo sulle correnti massime dei gruppi di stazioni tenendo conto della corrente attuale in questo punto di riferimento.

![Configurazione Pico – Figura 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Distacco del carico

Distacco del carico via hardware (ingressi esterni della Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Aprire il foglio di calcolo, Distacco del carico Pico, in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" title="Foglio di calcolo, Distacco del carico Pico" />

Distacco del carico Pico

Il distacco del carico può essere realizzato anche con un solo segnale disponibile. 

Per la configurazione da nessuna ricarica alla potenza di ricarica massima, il segnale viene cablato su IN1 e IN2 nonché su COM. Per la configurazione da 6A di potenza minima alla potenza di ricarica massima, il segnale deve essere cablato solo su IN2 e su COM.

COM è il conduttore neutro, IN1 e IN2 devono essere alimentati con una tensione in caso di segnale ON. IN1 e IN2 non generano tensione, questa deve essere fornita dall'esterno.

Attenzione:
Il distacco del carico può essere cablato su tutte le Pico oppure, come minimo, su una di ogni gruppo di carico statico.
Questa funzione è garantita anche senza Internet!

Distacco del carico basato su cloud tramite MLM

Il distacco del carico può essere realizzato anche tramite la gestione del carico multilivello. Il vantaggio è che non è necessario collegare alcun segnale all'hardware Pico, bensì un segnale viene applicato a un qualsiasi altro hardware (contatore) e utilizzato come trigger.

Lo svantaggio è però che la funzione non viene eseguita se non è presente una connessione a Internet.

Maggiori dettagli sulla configurazione: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

![Configurazione Pico – Figura 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Azioni avanzate

Qui, come proprietario della stazione, puoi sbloccare il cavo, riavviare la stazione o visualizzare la lettura del contatore sul display per una verifica.

![Configurazione Pico – Figura 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Impostazioni avanzate

Riconoscimento automatico dell'auto:
Affinché l'autenticazione CarID funzioni, devi abilitare la comunicazione tra la stazione e il veicolo.

Modbus TCP:
Attivazione dell'interfaccia Modbus TCP della Pico

Eliminare la stazione:
Elimina la stazione e tutti i dati sul cloud

![Configurazione Pico – Figura 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Bloccare il cavo in modo permanente

Il cavo di ricarica può essere bloccato sulla stazione di ricarica Pico.

Procedura:
Inserire il cavo --> Login al portale smart-me --> selezionare la Pico --> in alto a destra selezionare l'ingranaggio --> impostazioni avanzate --> Bloccare il cavo in modo permanente (Kabel immer fest verriegeln). 

Nota: 

- L'auto non deve essere collegata durante il fissaggio del cavo.

- Se l'alimentazione elettrica viene interrotta o la Pico viene riavviata, il cavo viene brevemente sbloccato e nuovamente bloccato all'avvio.


Requisito: la Pico deve avere almeno la versione di comunicazione 0.0.7. Le Pico prodotte prima del 31.12.2022 possono essere interessate.

![Bloccare il cavo in modo permanente](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
