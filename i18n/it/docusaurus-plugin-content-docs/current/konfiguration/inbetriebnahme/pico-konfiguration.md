---
title: 'Configurazione Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'In questa pagina trovi le configurazioni più importanti relative all''hardware Pico.'
sidebar_label: 'Configurazione Pico'
---
In questa pagina trovi le configurazioni più importanti relative all'hardware Pico. Come primo passo, la configurazione della stazione di ricarica Pico avviene sempre tramite la piattaforma smart-me. In seguito è possibile abilitare il metodo di autenticazione tramite un sistema backend (eCarUp).

![Configurazione Pico – Figura 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configurazione Pico – Figura 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Autenticazione (privata, semipubblica, pubblica)



La stazione di ricarica Pico può essere utilizzata con o senza metodo di autenticazione.



### Configurazione None:

Per caricare non è necessaria alcuna autenticazione. (La ricarica inizia non appena il veicolo è collegato.)



### Configurazione con backend eCarUp:

Per gestire una Pico in modo pubblico o semipubblico, oppure per utilizzare qualsiasi tipo di funzione di sblocco, la stazione deve funzionare in modalità backend tramite eCarUp.

Funzioni di sblocco:

- RFID

- On / Off manuale tramite app

- Codici QR

- CarID (richiede l'attivazione nelle impostazioni avanzate del portale smart-me)




Non appena è selezionato “eCarUp Backend”, la stazione viene aggiunta automaticamente all'account eCarUp con lo stesso nome. (Stesso nome utente e stessa password di smart-me)

La configurazione di eCarUp si effettua nel portale web [www.ecarup.com](http://www.ecarup.com).

Aggiungi un tag di carta RFID alla voce Conducenti (Fahrer) oppure leggi un "tag di carta" con l'app eCarUp per Android e iOS.

Per i dettagli sulla configurazione di eCarUp e delle stazioni di ricarica pubbliche consulta il
wiki di eCarUp: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configurazione con backend OCPP esterno:

Per integrare la Pico in un backend di terzi, è sufficiente inserire l'URL del backend del fornitore terzo sulla relativa stazione di ricarica.

Questa opzione non deve essere utilizzata se la stazione è collegata tramite eCarUp.

Nota:
L'URL inizia con ws:// o wss://

Impostazione della Pico nel portale smart-me:

![Configurazione Pico – Figura 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu del portale eCarUp:

![Configurazione Pico – Figura 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Inserire l'URL del backend di terzi:

![Configurazione Pico – Figura 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configurazione per uso privato con autenticazione RFID

1.  Nel portale eCarUp vai a Stazioni → Gestione (Stationen → Verwaltung)

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prezzi (Preise) = 0 CHF, Accesso: Privato (Zugriff: Privat)

![Configurazione Pico – Figura 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configurazione per uso limitato con autenticazione RFID (inquilini con prezzi speciali)

1.  Nel portale eCarUp vai a Stazioni → Gestione (Stationen → Verwaltung)

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Seleziona i prezzi (Preise)

![Configurazione Pico – Figura 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Definisci gli utenti speciali e i relativi prezzi

I conducenti creano un proprio account su eCarUp e comunicano il nome dell'account al proprietario della stazione.

![Configurazione Pico – Figura 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizzazione del display della Pico

Sconsigliamo di inserire un'immagine di sfondo nera, perché in tal caso non è chiaro se la Pico sia in funzione o meno. Soprattutto quando è offline, da lontano è difficile capire se la stazione è guasta o semplicemente non collegata. Per questo motivo, a chi vuole risparmiare energia consigliamo di aggiungere questa immagine da 4 pixel, in modo da poter sempre riconoscere se la stazione è ancora in funzione localmente o meno. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Il nome della stazione e la visualizzazione quando non è in uso possono essere scelti e personalizzati liberamente.

Oltre alle emoticon già disponibili, è possibile caricare anche GIF o immagini proprie. 

- Formati supportati: JPG, PNG, GIF

- Risoluzione: 32x32 pixel

- Dimensione: max. 200 kB

- Lo sfondo dovrebbe essere completamente nero (#000000)

- Le animazioni (GIF) hanno 10 immagini/s (100ms per immagine)


Nota: ottieni il miglior risultato se, durante la creazione e la modifica, fai in modo che l'immagine venga caricata a 32x32 pixel in formato GIF.



\-> Crea le tue GIF con [piskelapp](/drittsysteme/piskelapp) 

![Configurazione Pico – Figura 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestione del carico e limitazione

### Limitare la potenza della stazione

La stazione di ricarica Pico può essere impostata in modo standard al momento dell'installazione.

Questa impostazione viene presa in considerazione dalla gestione del carico automatica e non viene mai sovrascritta.

Con l'impostazione della corrente di carica massima è possibile limitare in modo fisso la potenza massima della stazione. La limitazione avviene a passi di 1 ampere.

32A = 22kW potenza massima

16A = 11kW potenza massima

Con l'impostazione della corrente minima si impediscono le ricariche oppure si impostano correnti minime adeguate per l'avvio della ricarica di un'auto.

Nota:
A causa della tecnologia installata nel veicolo, alcuni veicoli non possono essere caricati con una corrente di avvio di 6A. In questo caso è possibile impostare una corrente minima più alta.

![Configurazione Pico – Figura 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestione del carico statica (gruppo di stazioni)

La gestione del carico statica regola le stazioni all'interno dello stesso gruppo di gestione del carico. La funzione impedisce che la corrente massima sulla linea di alimentazione, ad es. un cavo piatto, venga superata e regola la distribuzione della corrente disponibile tra le stazioni. 

La dimensione dei gruppi di ricarica è limitata a 200 stazioni di ricarica.

Funzionamento in dettaglio:
Le stazioni di ricarica si regolano autonomamente in base alla corrente massima definita. La potenza di ricarica trifase viene distribuita su tutte le stazioni attive finché la potenza minima impostata in trifase non può più essere messa a disposizione di tutte le auto in ricarica. Successivamente la potenza viene commutata in monofase. Tutte le auto continuano a caricare in monofase con la corrente massima possibile per fase (commutazione di fase). Un'ulteriore ricarica diventa impossibile solo quando tutte le auto già in ricarica hanno raggiunto il minimo in monofase. Non appena uno dei veicoli in ricarica lascia la stazione, la ricarica riservata viene liberata per un altro veicolo.

Configurazione:

1.  Crea un gruppo di gestione del carico (Nuovo gruppo / Neue Gruppe)

2.  Definisci la corrente massima della linea di alimentazione (Corrente disponibile / Verfügbarer Strom)

3.  Definisci l'azione in caso di interruzione della connessione
    (In combinazione con la gestione del carico multilivello è utilizzabile solo la versione Corrente max. per gruppo (Max. Strom pro Gruppe))

4.  Aggiungi le stazioni al relativo gruppo di gestione del carico (Modifica / Editieren)




Maggiori dettagli: [Gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

![Configurazione Pico – Figura 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configurazione Pico – Figura 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestione del carico dinamica e ricarica ottimizzata con il solare tramite la gestione del carico multilivello (MLM)

La gestione del carico dinamica consente di tenere conto di un punto di riferimento e di controllare le correnti massime in quel punto. Nella mobilità elettrica si sceglie a tale scopo l'allacciamento dell'edificio oppure il punto di distribuzione.

[Pianificazione gestione del carico](/planung/elektromobilitaet) 

Come hardware per la misura di riferimento sono adatti i seguenti prodotti:

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


La configurazione della gestione del carico dinamica avviene tramite la gestione del carico multilivello di smart-me.

Dettagli ed esempi sono disponibili qui: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

In questo modo, tenendo conto della corrente che fluisce in quel momento nel punto di riferimento, puoi influire sulle correnti massime dei gruppi di stazioni.

![Configurazione Pico – Figura 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Distacco del carico

Distacco del carico hardware (ingressi esterni della Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Foglio di calcolo, distacco del carico Pico" />

Distacco del carico Pico

Il distacco del carico può essere realizzato anche con un solo segnale disponibile. 

Per la configurazione da nessuna ricarica alla potenza di ricarica massima, il segnale viene cablato su IN1 e IN2 nonché su COM. Per la configurazione da una potenza minima di 6A alla potenza di ricarica massima, il segnale deve essere cablato solo su IN2 e COM.

COM è il conduttore neutro; IN1 e IN2 devono essere sotto tensione in presenza del segnale ON. IN1 e IN2 non generano tensione: questa deve essere fornita dall'esterno.

Attenzione:
Il distacco del carico può essere cablato su tutte le Pico oppure, come minimo, su una Pico per ogni gruppo di carico statico.
Questa funzione è garantita anche senza Internet!

Distacco del carico basato su cloud tramite MLM

Il distacco del carico può essere realizzato anche tramite la gestione del carico multilivello. Il vantaggio è che non è necessario collegare alcun segnale all'hardware della Pico: il segnale viene applicato a un qualsiasi altro hardware (contatore) e utilizzato come trigger.

Lo svantaggio, tuttavia, è che la funzione non viene eseguita in assenza di connessione Internet.

Maggiori dettagli sulla configurazione: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

![Configurazione Pico – Figura 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Azioni avanzate

Qui, in qualità di proprietario della stazione, puoi sbloccare il cavo, riavviare la stazione oppure visualizzare la lettura del contatore sul display a scopo di verifica.

![Configurazione Pico – Figura 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

## Impostazioni avanzate

Riconoscimento automatico dell'auto (Automatische Auto Erkennung):
Affinché l'autenticazione CarID funzioni, devi abilitare la comunicazione tra la stazione e il veicolo.

Modbus TCP:
Attivazione dell'interfaccia Modbus TCP della Pico

Elimina stazione (Station löschen):
Elimina la stazione e tutti i dati nel cloud

![Configurazione Pico – Figura 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

### Bloccare sempre il cavo in modo fisso

Il cavo di ricarica può essere bloccato sulla stazione di ricarica Pico.

Procedura:
Inserisci il cavo --> accedi al portale smart-me --> seleziona la Pico --> in alto a destra seleziona l'icona dell'ingranaggio --> impostazioni avanzate (erweiterte Einstellungen) --> Blocca sempre il cavo in modo fisso (Kabel immer fest verriegeln). 

Nota: 

- Durante il fissaggio del cavo l'auto non deve essere collegata.

- In caso di interruzione dell'alimentazione o di riavvio della Pico, il cavo viene sbloccato brevemente e bloccato di nuovo all'avvio.


Requisito: la Pico deve avere almeno la versione di comunicazione 0.0.7. Le Pico prodotte prima del 31.12.2022 possono essere interessate.

![Bloccare sempre il cavo in modo fisso](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
