---
title: 'Messa in servizio'
slug: '/konfiguration/inbetriebnahme'
description: 'Tutto sulla messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche alle domande sull''installazione.'
sidebar_label: 'Messa in servizio'
---
Tutto sulla messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche alle domande sull'installazione.

[Messa in servizio LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Eliminare / disattivare un contatore](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continua con la configurazione delle cartelle e dei contatori](/konfiguration/ordnerkonfiguration)

## Preparazione

Prima della messa in servizio devono essere soddisfatti i seguenti punti

## Requisiti WiFi

- WiFi 802.11 b/g/n 2.4GHz (nessuna rete a 5GHz o rete combinata con lo stesso SSID)

- Le porte 80 UDP e 53 UDP/TCP devono essere aperte verso l'esterno.

- La rete richiede una connessione Internet.

- L'SSID non deve essere nascosto.

- L'SSID supporta solo caratteri ASCII, escluso $ (Ä, Ö, Ü non funzionano)

- I filtri degli indirizzi MAC devono essere disattivati durante l'installazione. (Gli indirizzi MAC dei dispositivi possono essere letti solo tramite ARP)

- La rete richiede un server DHCP

- SSID max. 28 caratteri

- Password max. 63 caratteri


## Account smart-me

Consigliamo di creare un account in anticipo e separatamente per ogni installazione. Per la messa in servizio non sono necessarie licenze.

## Installer App

L'Installer App gratuita deve essere installata sul tuo smartphone e devono essere concesse le autorizzazioni necessarie.

IOS: Posizione, Rete locale, Fotocamera

Android: Posizione, Fotocamera

## Attrezzi speciali

- Pico: una tessera RFID (in dotazione)

- Telstar 80A, CT e M-Bus Gateway: un piccolo cacciavite per premere il tasto T1


![Messa in servizio – Figura 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Istruzioni](/konfiguration/installer-app-anleitung)

## Installazione

## Guida rapida

1.  Verificare i requisiti WiFi (vedi sopra)

2.  Scaricare l'app gratuita per [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) o [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Concedere le autorizzazioni all'app

4.  Collega il tuo smartphone o tablet alla rete WiFi in cui desideri installare il dispositivo smart-me.

5.  Avvia l'app, accedi con l'account corrispondente oppure crea un account.

6.  Nel menu, verificare con Diagnosi (Diagnose) se i server sono raggiungibili.

7.  Clicca in basso a destra su «Installa dispositivo» („Gerät installieren“) (+)

8.  Per un'installazione tramite WLAN, questa può essere aggiunta in alto.

9.  Clicca in basso a destra su «Aggiungi dispositivo» („Gerät hinzufügen“) (+)

10.  Scansiona il codice QR

11.  Per la Pico, scegli se desideri utilizzare WLAN o rete mobile (4G).

12.  Selezionare "Connetti alla WLAN del dispositivo" ("Verbinde mit WLAN des Gerätes")

13.  Premere T1 o avvicinare la tessera RFID. Nota: la Pico deve essere installata entro 15 minuti dall'accensione della corrente.

14.  Selezionare "WLAN quick connect"

15.  Attendi finché compare la richiesta di connetterti a smart-me\_xxxxxx.

16.  Attendere finché l'installazione è stata completata correttamente.

17.  Assegnare un nome.

18.  Impostazione specifica del dispositivo

     - Telstar CT: impostare il rapporto di trasformazione (selezionare CT / modificare / inserire il rapporto di trasformazione)

     - M-Bus: la ricerca deve essere avviata tramite il portale web (rotella dentata / Avvia ricerca (Suchlauf starten))

     - Kamstrup:  chiave del contatore (tre rotelle dentate / Chiave del contatore (Zählerschlüssel) / Salva (speichern))


Se l'installazione non dovesse riuscire, seguire le istruzioni dettagliate con la descrizione degli errori.

## Istruzioni dettagliate con descrizione degli errori

![Messa in servizio – Figura 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. Connessione WIFI

![Messa in servizio – Figura 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Creazione / Connessione

![Messa in servizio – Figura 4](/img/konfiguration-inbetriebnahme/04.jpg)

### 3\. Creazione dell'account

Possibili problemi:

Se l'e-mail è già in uso, è necessario utilizzarne un'altra.

![Messa in servizio – Figura 5](/img/konfiguration-inbetriebnahme/05.jpg)

### 4\. Accesso all'account

Possibili problemi:

- Se l'accesso non è possibile, verifica che la rete WiFi disponga di una connessione Internet

- Se l'accesso non è possibile, il nome utente o la password potrebbero essere errati.


![Messa in servizio – Figura 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnosi

Questo passaggio è facoltativo.

- È importante che la voce Server raggiungibili sia su Yes.

- Se compare l'avviso relativo alla rete a 5 GHz, devi assicurarti che venga generata anche una rete a 2,4 GHz. Non è possibile forzare lo smartphone a connettersi alla rete a 2,4 GHz. Per questo motivo compare come avviso.


![Messa in servizio – Figura 7](/img/konfiguration-inbetriebnahme/07.jpg)

### 6\. Clicca su «Aggiungi dispositivo» („Gerät hinzufügen“) (+)

![Messa in servizio – Figura 8](/img/konfiguration-inbetriebnahme/08.jpg)

### 7\. Clicca su "Modifica" ("Editieren")

Nota

- Questo passaggio può essere ignorato se le Pico vengono messe in servizio tramite 4G.


![Messa in servizio – Figura 9](/img/konfiguration-inbetriebnahme/09.jpg)

### 8\. Inserisci la password WLAN

Possibili problemi:

- Se l'SSID viene visualizzato come &lt;&lt;unknown>>, è necessario attivare la posizione e lo smartphone deve essere connesso a una rete WLAN.


![Messa in servizio – Figura 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Clicca su «Aggiungi dispositivo» („Gerät hinzufügen“) (+)

![Messa in servizio – Figura 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scansiona il codice QR

Possibili problemi:

- Se il codice QR non viene riconosciuto, il numero di serie può essere inserito anche manualmente.


![Messa in servizio – Figura 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connettiti alla WLAN del contatore

![Messa in servizio – Figura 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Solo per Pico "Seleziona tipo di connessione" ("Verbindungsart auswählen")

![Messa in servizio – Figura 14](/img/konfiguration-inbetriebnahme/14.jpg)

### 13\. Premere il tasto T1 o scansionare la RFID

Nota per la Pico: tieni presente che per ogni Pico hai 15 minuti di tempo per completare il processo di installazione. In caso contrario, devi riavviare la Pico e ricominciare il processo dall'inizio.

![Messa in servizio – Figura 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Attendere finché la connessione è riuscita

## Impostazione specifica del dispositivo

## Telstar CT

### Impostare il rapporto di trasformazione

- Selezionare e modificare il contatore CT 

- Inserire il rapporto di trasformazione 

- Il rapporto di trasformazione può essere bloccato. Questo serve come protezione contro modifiche indesiderate da parte di persone non autorizzate. Per poter sbloccare il rapporto di trasformazione,  il dispositivo deve essere installato nuovamente con l'app smart-me.


### Nota:

Il rapporto di trasformazione non modifica i dati storici. Per questo motivo, questo passaggio dovrebbe essere eseguito subito dopo la messa in servizio.

![Messa in servizio – Figura 16](/img/konfiguration-inbetriebnahme/16.jpg)

## M-Bus Gateway / Sirius

### Istruzioni per entrambi gli M-Bus Gateway

Passaggi di installazione dell'hardware:

1.  Installare il dispositivo (cablare l'M-Bus, applicare la tensione)

2.  Completare l'installazione con l'aiuto dell'app secondo le istruzioni.
    (Collegare l'hardware alla WLAN e all'account di destinazione. WLAN 2.4GHz)

3.  In Configurazione nell'app o sul desktop, avviare la "ricerca automatica" ("automatischen Suchlauf") per trovare i dispositivi.


La messa in servizio dei contatori di calore e dei contatori dell'acqua continua invece a essere eseguita dal fornitore (ad es. Neovac, Ista, GWF, Techem ecc.). Nella maggior parte dei casi, queste aziende collegano nel locale tecnico un proprio M-Bus Master per poter verificare se i contatori arrivano effettivamente sull'M-Bus.

Successivamente viene redatto un protocollo di messa in servizio e solo dopo il nostro M-Bus Gateway viene ricollegato.

Con la relativa documentazione, i singoli contatori possono poi essere assegnati agli appartamenti corretti nella smart-me Cloud e la configurazione può essere completata.

Di seguito le informazioni necessarie

- Elenco di tutti i contatori installati

- Indirizzo M-Bus (ci serve solo l'indirizzo secondario, l'indirizzo primario non è rilevante per noi)

- Appartenenza all'appartamento (denominazione dell'appartamento)

- Tipo di contatore (calore, acqua calda sanitaria o acqua fredda ecc.)


Importante: l'indirizzo secondario deve essere univoco per ogni account smart-me; inoltre, per i contatori combinati calore/freddo, la combinazione delle ultime 4 cifre deve essere unica nell'account. Il modo più semplice è utilizzare il numero di serie del dispositivo.

Risultato della ricerca automatica

![Messa in servizio – Figura 17](/img/konfiguration-inbetriebnahme/17.png)

Creazione automatica dei contatori dopo la ricerca
(richiede alcuni minuti)

![Messa in servizio – Figura 18](/img/konfiguration-inbetriebnahme/18.png)

### Numerazione dei contatori combinati

L'M-Bus Gateway riconosce ogni volta un solo contatore in base all'indirizzo secondario, che di norma è riportato anche sul protocollo di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non è utile, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco dell'M-Bus Gateway (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima o le prime 2 cifre vengono eliminate (ad es. 7) e alla fine viene aggiunto un numero progressivo (ad es. 14401451,14401452).


- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo di quattro cifre alla fine (ad es. 01450001)


Nota sugli zeri iniziali: se un contatore ha ad es. il numero 1000017, dopo il taglio gli zeri iniziali non vengono considerati, quindi ad es. 000017, e vengono aggiunti alla fine, ad es. 1700001

![Messa in servizio – Figura 19](/img/konfiguration-inbetriebnahme/19.png)

![Messa in servizio – Figura 20](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway: cercare dispositivi

Le altre configurazioni devono essere effettuate nel portale web

Modifica

- Modificare l'intervallo. L'M-Bus richiede 10 secondi per dispositivo per la lettura.


Avviare la ricerca dei dispositivi sull'M-Bus Gateway

1.  In alto a destra sul simbolo della rotella dentata (Impostazioni) 

2.  Cerca dispositivi (Geräte suchen)

3.  Confermare la ricerca con "Sì" ("Ja")


Nota: la ricerca può durare diversi minuti.

Il gateway non trova tutti i contatori

- Avvia nuovamente la ricerca  (1-2 volte). Può succedere che il contatore non venga sempre trovato alla prima ricerca.

- Altre cause sono descritte nella pagina [Guasti dell'M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


Il gateway trova più contatori di quelli installati

- Per lo più durante la messa in servizio: a seconda del contatore M-Bus, questo può creare più sottocontatori. Si riconoscono dal fatto che il numero di serie è spostato di una posizione verso sinistra, seguito da un numero crescente. A partire da 1. Es.: contatore principale 00200001, sottocontatore 02000011

- Altre cause sono descritte nella pagina [Guasti dell'M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


![Messa in servizio – Figura 21](/img/konfiguration-inbetriebnahme/21.png)

### M-Bus Gateway: impedire il riconoscimento di nuovi dispositivi

Come si attiva l'opzione?

- Selezionare l'M-Bus Gateway.


- Seleziona la rotella dentata dell'M-Bus Gateway (in alto a destra). Nota: non selezionare la rotella dentata superiore, che viene utilizzata per la configurazione del contatore, ma quella inferiore.

- Modifica (Bearbeiten)

- Spuntare "Don't allow to add additional meters".

- Salva (Speichern)


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


Cosa bisogna considerare?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso quando il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati diminuisce, oppure quando il cavo è schermato male o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo M-Bus standardizzato dispone di solo 1 byte per la somma di controllo. La somma di controllo serve a rilevare determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può ripetutamente portare a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono utilizzati M-Bus Gateway, ciò fa sì che pacchetti corrotti vengano classificati come corretti e validi e vengano poi riconosciuti e aggiunti come nuovo dispositivo M-Bus nel nostro cloud. L'account passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Messa in servizio – Figura 22](/img/konfiguration-inbetriebnahme/22.png)

## Stazione di ricarica Pico

### Verificare la connessione WLAN

Dopo l'installazione della Pico, nell'angolo in alto a destra compare un simbolo che indica il tipo di connessione.

Se la Pico deve essere connessa tramite WLAN, è consigliabile verificare brevemente che l'icona corrisponda a un simbolo WLAN e non a 4G. 

Se compare 4G anche se la Pico dovrebbe essere connessa tramite WLAN, è necessario reinstallare la Pico. Ciò può accadere se un passaggio dell'installazione non è stato eseguito correttamente, ad es. la password WLAN.

![Messa in servizio – Figura 23](/img/konfiguration-inbetriebnahme/23.png)

### Configurazione Pico & gestione del carico

[Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement) 

![Messa in servizio – Figura 24](/img/konfiguration-inbetriebnahme/23.png)

## Consigli e suggerimenti

### Mettere in servizio più dispositivi

In questo passaggio hai la possibilità di mettere in servizio più contatori contemporaneamente, per accelerare la messa in servizio in presenza di molti contatori.



![Messa in servizio – Figura 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Disconnettersi

1.  In alto a sinistra sulle tre linee e selezionare Profilo (Profil)

2.  In basso selezionare Disconnetti (Ausloggen)

3.  Disconnesso


![Messa in servizio – Figura 26](/img/konfiguration-inbetriebnahme/26.jpg)

![Messa in servizio – Figura 27](/img/konfiguration-inbetriebnahme/27.jpg)

### Installazione non riuscita

Se l'installazione non dovesse riuscire e desideri riprovare, chiudi completamente l'app e riaprila. In questo modo si garantisce che non vengano utilizzate informazioni memorizzate temporaneamente (cache).

## Passaggio successivo

[Continua con la configurazione delle cartelle e dei contatori](/konfiguration/ordnerkonfiguration)

## FAQ

### Il fornitore di servizi Internet cambia, cosa devo fare?

Se i contatori sono collegati a una WLAN tecnica e/o a un access point dedicato, di norma l'SSID e la password non cambiano. In tal caso, un cambio del fornitore di servizi Internet di norma non è un problema.

Se vengono utilizzati l'SSID e la password di una WLAN privata, ci sono due possibilità:

- Soluzione 1: sul nuovo router creare una WLAN ospiti con lo stesso SSID e la stessa password della vecchia. In seguito i contatori si connettono automaticamente a questa WLAN, identica alla vecchia.

- Soluzione 2: registrare nuovamente ogni contatore singolarmente, in modo che i nuovi dati vengano salvati localmente su ciascun contatore. L'installazione avviene esattamente come una nuova installazione. Il  contatore non deve in nessun caso essere eliminato, altrimenti tutti i dati storici andranno persi . In caso di nuova installazione, il nostro ambiente cloud rileva che il numero di serie è già presente nell'account e aggiunge semplicemente i nuovi valori.


### Come posso riavviare un dispositivo (reboot)?

Tutti i dispositivi possono essere riavviati con un'interruzione di corrente.

Contatori trifase: premere contemporaneamente T1 e T2 per 10 secondi.

Pico: nel portale, in alto a destra, selezionare la rotella dentata, Azioni avanzate (erweiterte Aktionen), Riavvio (Neustart). Funziona solo se la Pico è online.

Moduli Kamstrup: rimuovere il modulo dal contatore, attendere 10 secondi e reinserirlo.

M-Bus Gateway e contatori monofase: questi dispositivi possono essere riavviati solo con un'interruzione di corrente.

### Posso utilizzare il mio dispositivo con più reti WiFi?

Sì, il dispositivo smart-me (eccetto la [stazione di ricarica Pico](/produkte/pico-ladestation)) memorizza fino a 3 reti WiFi diverse. Devi solo installarlo una volta per ogni rete e in seguito il dispositivo seleziona automaticamente sempre la rete con il segnale radio migliore.

### Posso azzerare la lettura del contatore?

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

### Dove viene salvata la password WiFi?

La password WiFi viene salvata esclusivamente sul dispositivo smart-me e non viene mai trasmessa a un server 

### Le impostazioni e le letture del contatore vengono salvate in caso di interruzione di corrente?

Sì, il dispositivo salva tutte le impostazioni e i valori in caso di interruzione di corrente. Non appena l'alimentazione viene ripristinata, il dispositivo si connette automaticamente alla rete WiFi e torna allo stato precedente all'interruzione. 

### Come posso registrare una nuova rete WiFi senza perdere i dati esistenti?

Per aggiungere un'ulteriore rete, il dispositivo deve essere installato correttamente con l'app smart-me. Se prima non viene eliminato dal cloud, i dati energetici e le impostazioni di configurazione vengono mantenuti.



### È possibile cancellare le informazioni WiFi salvate?

Le informazioni WiFi vengono salvate solo sul dispositivo. La cancellazione dei dati può essere eseguita come segue:

- Premere il pulsante del dispositivo smart-me per 10 s. Per la Pico, la tessera RFID deve essere avvicinata al più tardi entro 15 minuti dal riavvio (senza corrente).

- Con uno smartphone, stabilire una connessione con il WiFi smart-me (il nome della rete WiFi è smart-me\_XXXXXX, dove X sta per il numero di serie del dispositivo smart-me)

- Con un browser, stabilire una connessione con l'IP 192.168.1.1.

- Selezionare la WLAN indesiderata, premere remove e riavviare il dispositivo.


### Come trovo l'indirizzo MAC del mio dispositivo smart-me?

Non esiste un modo diretto per individuare l'indirizzo MAC. Se disponi di una licenza Professional, puoi attivare il DNS nelle impostazioni avanzate del dispositivo smart-me e selezionare l'opzione IP interno (Interne IP). Con un ping sul nome DNS è possibile determinare l'IP, che può poi essere confrontato sul router con la tabella IP / MAC

### È possibile disattivare la rete mesh?

I contatori trifase Telstar e Telstar CT creano una rete mesh. Questa non può essere disattivata.

### Posso spostare un dispositivo da un account smart-me a un altro?

- I dati storici non possono essere spostati. 

- Il dispositivo può tuttavia essere installato in un altro account tramite una nuova installazione.


### Con quale lettura del contatore viene consegnato un contatore smart-me?

0

### Cosa succede se disattivo un contatore?

Tutti i dati già salvati nel cloud vengono mantenuti. Dopo la disattivazione non vengono più salvati altri dati. Per i contatori disattivati non vengono addebitati costi di licenza.

### È possibile configurare un proxy sui dispositivi smart-me?

No
