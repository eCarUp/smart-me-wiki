---
title: 'Configurazione Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'In questa pagina trovi le configurazioni più importanti relative all''hardware Pico.'
sidebar_label: 'Configurazione Pico'
displayed_sidebar: wikiSidebar
---
In questa pagina trovi le configurazioni più importanti relative all'hardware Pico. La configurazione della stazione di ricarica Pico avviene sempre, come primo passo, tramite la piattaforma smart-me. Successivamente è possibile abilitare il metodo di autenticazione tramite un sistema di backend (eCarUp).

![Configurazione Pico – Figura 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configurazione Pico – Figura 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Autenticazione (privata, semi-pubblica, pubblica)



La stazione di ricarica Pico può essere utilizzata a scelta con o senza metodo di autenticazione.



### Configurazione Nessuna (None):

Nessuna autenticazione necessaria per la ricarica. (ricarica non appena collegata)



### Configurazione con backend eCarUp:

Per gestire una Pico in modo pubblico / semi-pubblico o per poter utilizzare qualsiasi tipo di funzione di sblocco, la stazione deve essere gestita in modalità backend tramite eCarUp.

Funzioni di sblocco:

- RFID

- On / Off manuale tramite app

- Codici QR

- CarID (richiede l'attivazione nelle impostazioni avanzate (erweiterte Einstellungen) del portale smart-me)




Non appena è selezionato “Backend eCarUp” (eCarUp Backend), la stazione viene aggiunta automaticamente all'account eCarUp con lo stesso nome. (stesso nome utente e password di smart-me)

La configurazione di eCarUp si effettua nel portale web di [www.ecarup.com](http://www.ecarup.com).

Aggiungi un tag di carta RFID in Conducenti (Fahrer) oppure leggi un "tag di carta" tramite l'app eCarUp per Android e iOS.

Per i dettagli sulla configurazione di eCarUp e delle stazioni di ricarica pubbliche consulta il
Wiki eCarUp: [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configurazione backend OCPP esterno:

Per integrare la Pico in un backend di terze parti, è sufficiente inserire l'URL del backend del fornitore terzo sulla rispettiva stazione di ricarica.

Questa opzione non deve essere utilizzata se la stazione è collegata tramite eCarUp.

Nota:
L'URL inizia con ws:// o wss://

Impostazione Pico nel portale smart-me:

![Configurazione Pico – Figura 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu portale eCarUp:

![Configurazione Pico – Figura 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Inserire l'URL del backend di terze parti:

![Configurazione Pico – Figura 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configurazione per uso privato con autenticazione RFID

1.  Vai a Stazioni → Gestione (Stationen → Verwaltung) nel portale eCarUp

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prezzi = 0 CHF, Accesso: Privato (Privat)

![Configurazione Pico – Figura 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configurazione per uso limitato con autenticazione RFID (inquilini con prezzi speciali)

1.  Vai a Stazioni → Gestione (Stationen → Verwaltung) nel portale eCarUp

2.  Modifica → Modifica connettore (Bearbeiten → Anschluss bearbeiten)


![Configurazione Pico – Figura 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Seleziona i prezzi

![Configurazione Pico – Figura 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Definisci gli utenti speciali e i relativi prezzi

I conducenti creano il proprio account su eCarUp e comunicano il nome dell'account al proprietario della stazione.

![Configurazione Pico – Figura 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personalizzazione del display della Pico

Sconsigliamo di inserire un'immagine di sfondo nera, perché in tal caso non è chiaro se la Pico sia in funzione o meno. Soprattutto quando è offline, da lontano è difficile capire se la stazione è guasta o non collegata. Per questo motivo consigliamo alle persone attente al consumo energetico di aggiungere questa immagine da 4 pixel, in modo da poter sempre riconoscere se la stazione è ancora in funzione localmente o meno. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Il nome della stazione e la visualizzazione in caso di inutilizzo possono essere scelti e personalizzati liberamente.

Oltre alle emoticon già disponibili, è possibile caricare anche GIF o immagini proprie. 

- Formati supportati: JPG, PNG, GIF

- Risoluzione: 32x32 pixel

- Dimensione: max. 200 kB

- Lo sfondo dovrebbe essere completamente nero (#000000)

- Le animazioni (GIF) hanno 10 immagini/s (100ms per immagine)

Nota: ottieni il miglior risultato grafico se, durante la creazione e la modifica, ti assicuri che l'immagine venga caricata con 32x32 pixel in formato GIF.

\-> Crea le tue GIF con [piskelapp](/drittsysteme/piskelapp) 

![Configurazione Pico – Figura 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestione del carico e limitazione

### Limitare la potenza della stazione

La stazione di ricarica Pico può essere standardizzata al momento dell'installazione.

Questa impostazione viene considerata dalla gestione automatica del carico e non viene mai sovrascritta.

Con l'impostazione della corrente massima di ricarica è possibile limitare in modo fisso la potenza massima della stazione. La limitazione avviene a passi di 1 ampere.

32A = 22kW potenza massima

16A = 11kW potenza massima

Con l'impostazione della corrente minima si impediscono le ricariche oppure si impostano correnti minime adeguate per l'avvio della ricarica di un'auto.

Nota:
Esistono veicoli che, a causa della tecnologia installata nel veicolo, non possono essere ricaricati con una corrente di avvio di 6A. In questo caso è possibile impostare una corrente minima più alta.

![Configurazione Pico – Figura 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestione statica del carico (gruppo di stazioni)

La gestione statica del carico regola le stazioni all'interno dello stesso gruppo di gestione del carico. La funzione impedisce che la corrente massima sulla linea di alimentazione, ad es. un cavo piatto, venga superata e regola la distribuzione della corrente disponibile tra le stazioni. 

La dimensione dei gruppi di ricarica è limitata a 200 stazioni di ricarica.

Funzionamento nel dettaglio:
Le stazioni di ricarica si regolano autonomamente in base alla corrente massima definita. La potenza di ricarica trifase viene distribuita su tutte le stazioni attive finché la potenza minima impostata in trifase non può più essere messa a disposizione di tutte le auto in ricarica. Successivamente la potenza viene commutata in monofase. Tutte le auto continuano a ricaricare in monofase con la corrente massima possibile per fase (commutazione di fase). Un'ulteriore ricarica diventa impossibile solo quando tutte le auto già in ricarica hanno raggiunto il minimo in monofase. Non appena uno dei veicoli in ricarica lascia la stazione, la ricarica riservata viene liberata per un altro veicolo.

Configurazione:

1.  Crea un gruppo di gestione del carico (Nuovo gruppo (Neue Gruppe))

2.  Definisci la corrente massima della linea di alimentazione (Corrente disponibile (Verfügbarer Strom))

3.  Definisci l'azione in caso di interruzione della connessione

    (Per la combinazione con la gestione del carico multilivello è utilizzabile solo la versione Corrente max. per gruppo)

4.  Aggiungi le stazioni al relativo gruppo di gestione del carico (Modifica (Editieren))

Maggiori dettagli: [Gestione del carico Pico](/produkte/pico-ladestation/pico-lastmanagement)

![Configurazione Pico – Figura 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configurazione Pico – Figura 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestione dinamica del carico e ricarica ottimizzata per il solare con la gestione del carico multilivello (MLM)

La gestione dinamica del carico consente di tenere conto di un punto di riferimento e di controllare le correnti massime in questo punto di riferimento. Nella mobilità elettrica si sceglie a tale scopo il punto di allacciamento dell'edificio oppure il punto di distribuzione.

[Pianificazione della gestione del carico](/planung/elektromobilitaet) 

Come hardware per la misurazione di riferimento sono adatti i seguenti prodotti:

- [Telstar 80A](/produkte/telstar-80a)

- [Telstar CT](/produkte/telstar-ct)


La configurazione della gestione dinamica del carico avviene tramite la gestione del carico multilivello di smart-me.

Dettagli ed esempi sono disponibili qui: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

Puoi così influire sulle correnti massime dei gruppi di stazioni tenendo conto della corrente che scorre attualmente in questo punto di riferimento.

![Configurazione Pico – Figura 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Distacco del carico

Distacco del carico hardware (ingressi esterni della Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Foglio di calcolo, distacco del carico Pico" />

Distacco del carico Pico

Il distacco del carico può essere realizzato anche con un solo segnale disponibile. 

Per la configurazione da nessuna ricarica alla potenza di ricarica massima, il segnale viene cablato su IN1 e IN2 nonché su COM. Per la configurazione da 6A di potenza minima alla potenza di ricarica massima, il segnale deve essere cablato solo su IN2 e COM.

COM è il conduttore neutro, IN1 e IN2 devono essere alimentati con una tensione in caso di segnale ON. IN1 e IN2 non generano tensione, questa deve essere fornita dall'esterno.

Attenzione:
Il distacco del carico può essere cablato su tutte le Pico oppure almeno su una Pico di ciascun gruppo di carico statico.
Questa funzione è garantita anche senza Internet!

Distacco del carico basato su cloud tramite MLM

Il distacco del carico può essere realizzato anche tramite la gestione del carico multilivello. Il vantaggio è che non è necessario collegare alcun segnale all'hardware Pico, ma un segnale viene applicato a un qualsiasi altro hardware (contatore) e utilizzato come trigger.

Lo svantaggio è però che la funzione non viene eseguita se non è disponibile una connessione Internet.

Maggiori dettagli sulla configurazione: [Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement)

![Configurazione Pico – Figura 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Azioni avanzate

<div className="row">
<div className="col col--6">

Qui, in qualità di proprietario della stazione, puoi sbloccare il cavo, riavviare la stazione o visualizzare la lettura del contatore sul display per verificarla.

</div>
<div className="col col--6 text--center">

![Configurazione Pico – Figura 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

</div>
</div>

## Impostazioni avanzate

<div className="row">
<div className="col col--6">

Riconoscimento automatico dell'auto (Automatische Auto Erkennung):
Affinché l'autenticazione CarID funzioni, devi abilitare la comunicazione della stazione con il veicolo.

Modbus TCP:
Attivazione dell'interfaccia Modbus TCP della Pico

Elimina stazione (Station löschen):
Elimina la stazione e tutti i dati nel cloud

</div>
<div className="col col--6 text--center">

![Configurazione Pico – Figura 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

</div>
</div>

### Bloccare sempre il cavo in modo fisso

Il cavo di ricarica può essere bloccato sulla stazione di ricarica Pico.

Procedura:
Inserisci il cavo --> Accedi al portale smart-me --> Seleziona la Pico --> In alto a destra seleziona l'ingranaggio --> Impostazioni avanzate (erweiterte Einstellungen) --> Bloccare sempre il cavo in modo fisso (Kabel immer fest verriegeln). 

Nota: 

- Durante il fissaggio del cavo l'auto non deve essere collegata.

- Se l'alimentazione elettrica viene interrotta o la Pico viene riavviata, il cavo viene sbloccato brevemente e bloccato di nuovo all'avvio.

Requisito: la Pico deve disporre almeno della versione di comunicazione 0.0.7. Le Pico prodotte prima del 31.12.2022 possono essere interessate.

![Bloccare sempre il cavo in modo fisso](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
