---
title: 'Messa in servizio'
slug: '/konfiguration/inbetriebnahme'
description: 'Tutto quello che riguarda la messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche a domande sull''installazione.'
sidebar_label: 'Messa in servizio'
---
Tutto quello che riguarda la messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche a domande sull'installazione.

[Messa in servizio LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Eliminare / disattivare contatori](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continua con la configurazione delle cartelle e dei contatori](/konfiguration/ordnerkonfiguration)

## Preparazione

I seguenti punti devono essere disponibili prima della messa in servizio

## Requisiti WiFi

- WiFi 802.11 b/g/n 2.4GHz (nessuna rete 5GHz o rete combinata con lo stesso SSID)

- Le porte 80 UDP e 53 UDP/TCP devono essere aperte verso l'esterno.

- La rete necessita di una connessione a Internet.

- L'SSID non deve essere nascosto.

- L'SSID supporta solo simboli ASCII escluso $ (Ä,Ö,Ü non funzionano)

- I filtri per indirizzi MAC devono essere disattivati durante l'installazione. (Gli indirizzi MAC dei dispositivi possono essere letti solo tramite ARP)

- La rete necessita di un server DHCP

- SSID max. 28 caratteri

- Password max. 63 caratteri


## Account smart-me

Consigliamo di creare un account in anticipo e separatamente per ogni installazione. Per la messa in servizio non sono necessarie licenze.

## Installer App

L'Installer App gratuita deve essere installata sul tuo smartphone e devono essere concesse le autorizzazioni necessarie.

IOS: posizione, rete locale, fotocamera

Android: posizione, fotocamera

## Attrezzi speciali

- Pico: una carta RFID (in dotazione)

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

4.  Collega il tuo smartphone o tablet al WiFi nel quale desideri installare il dispositivo smart-me.

5.  Avvia l'app e accedi con l'account corrispondente oppure crea un account.

6.  Nel menu verificare con la diagnostica se i server sono raggiungibili.

7.  Clicca in basso a destra su «Installa dispositivo» (Gerät installieren) (+)

8.  In caso di installazione con WLAN, questa può essere aggiunta in alto.

9.  Clicca in basso a destra su «Aggiungi dispositivo» (Gerät hinzufügen) (+)

10.  Scansiona il codice QR

11.  Con Pico seleziona se desideri utilizzare WLAN o Mobile (4G).

12.  Selezionare "Connetti al WLAN del dispositivo" (Verbinde mit WLAN des Gerätes)

13.  Premere T1 oppure avvicinare la carta RFID. Nota: la Pico deve essere installata entro 15 minuti dall'accensione della corrente.

14.  Selezionare "WLAN quick connect"

15.  Attendi finché non compare la richiesta di connetterti a smart-me\_xxxxxx.

16.  Attendere fino al completamento dell'installazione.

17.  Assegnare un nome.

18.  Impostazione specifica del dispositivo

     - Telstar CT: impostare il rapporto di trasformazione (selezionare / modificare CT / inserire il rapporto di trasformazione)

     - M-Bus: la ricerca deve essere avviata dal portale web (ingranaggio / avviare la ricerca)

     - Kamstrup:  chiave del contatore (tre ingranaggi / chiave del contatore / salvare)


Se l'installazione non riesce, seguire le istruzioni dettagliate con la descrizione degli errori.

## Istruzioni dettagliate con descrizione degli errori

![Messa in servizio – Figura 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. Connessione WIFI

![Messa in servizio – Figura 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Creazione / connessione

![Messa in servizio – Figura 4](/img/konfiguration-inbetriebnahme/04.jpg)

### 3\. Creazione dell'account

Possibili problemi:

Se l'e-mail è già in uso, occorre utilizzarne un'altra.

![Messa in servizio – Figura 5](/img/konfiguration-inbetriebnahme/05.jpg)

### 4\. Accesso all'account

Possibili problemi:

- Se l'accesso non è possibile, verifica se il WiFi dispone di una connessione a Internet

- Se l'accesso non è possibile, il nome utente o la password possono essere errati.


![Messa in servizio – Figura 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnostica

Questo passaggio è facoltativo.

- È importante che i server raggiungibili siano su Yes.

- Se compare l'avviso relativo alla rete a 5 GHz, devi assicurarti che venga generata anche una rete a 2,4 GHz. Non è possibile obbligare lo smartphone a connettersi alla rete a 2,4 GHz. Per questo motivo compare come avviso.


![Messa in servizio – Figura 7](/img/konfiguration-inbetriebnahme/07.jpg)

### 6\. Clicca su «Aggiungi dispositivo» (Gerät hinzufügen) (+)

![Messa in servizio – Figura 8](/img/konfiguration-inbetriebnahme/08.jpg)

### 7\. Clicca su "Modifica" (Editieren)

Nota

- Questo passaggio può essere ignorato se le Pico vengono messe in servizio tramite 4G.


![Messa in servizio – Figura 9](/img/konfiguration-inbetriebnahme/09.jpg)

### 8\. Inserisci la password WLAN

Possibili problemi:

- Se l'SSID viene visualizzato come &lt;&lt;unknown>>, occorre attivare la posizione e lo smartphone deve essere connesso a un WLAN.


![Messa in servizio – Figura 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Clicca su «Aggiungi dispositivo» (Gerät hinzufügen) (+)

![Messa in servizio – Figura 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scansiona il codice QR

Possibili problemi:

- Se il codice QR non viene riconosciuto, il numero di serie può anche essere inserito manualmente.


![Messa in servizio – Figura 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connettiti al WLAN del contatore

![Messa in servizio – Figura 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Solo con Pico "Selezionare il tipo di connessione" (Verbindungsart auswählen)

![Messa in servizio – Figura 14](/img/konfiguration-inbetriebnahme/14.jpg)

### 13\. Premere il tasto T1 o scansionare RFID

Nota per Pico: tieni presente che per ogni Pico hai 15 minuti di tempo per completare il processo di installazione. In caso contrario devi riavviare la Pico e ricominciare il processo dall'inizio.

![Messa in servizio – Figura 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Attendere finché la connessione non è riuscita

## Impostazione specifica del dispositivo

## Telstar CT

### Impostare il rapporto di trasformazione

- Selezionare e modificare il contatore CT 

- Inserire il rapporto di trasformazione 

- Il rapporto di trasformazione può essere bloccato. Questo serve come protezione da modifiche indesiderate da parte di persone non autorizzate. Affinché il rapporto di trasformazione possa essere sbloccato, il dispositivo deve essere installato nuovamente con l'app smart-me.


### Nota:

Il rapporto di trasformazione non modifica i dati storici. Pertanto questo passaggio dovrebbe avvenire immediatamente dopo la messa in servizio.

![Messa in servizio – Figura 16](/img/konfiguration-inbetriebnahme/16.jpg)

## M-Bus Gateway / Sirius

### Istruzioni per entrambi gli M-Bus Gateway

Passaggi di installazione hardware:

1.  Installare il dispositivo (cablare M-Bus, applicare tensione)

2.  Completare l'installazione con l'aiuto dell'app secondo le istruzioni.
    (Collegare l'hardware con il WLAN e l'account di destinazione. WLAN 2.4GHz)

3.  In Configurazione nell'app o sul desktop avviare la "ricerca automatica" per trovare i dispositivi.


La messa in servizio dei contatori di calore e dell'acqua viene invece eseguita come sempre dal fornitore (ad es. Neovac, Ista, GWF, Techem ecc.). Nella maggior parte dei casi queste aziende collegano nel locale tecnico un proprio M-Bus Master, in modo da poter verificare se i contatori arrivano effettivamente sull'M-Bus.

Successivamente viene redatto un protocollo di messa in servizio e solo dopo il nostro M-Bus Gateway viene ricollegato.

Con la relativa documentazione i rispettivi contatori possono poi essere assegnati alle abitazioni corrette nel cloud smart-me e la configurazione può essere completata.

Di seguito le informazioni necessarie

- Elenco di tutti i contatori installati

- Indirizzo M-Bus (ci serve solo l'indirizzo secondario, l'indirizzo primario non è rilevante per noi)

- Appartenenza all'abitazione (denominazione dell'abitazione)

- Tipo di contatore (calore, acqua calda o fredda ecc.)


Importante: l'indirizzo secondario deve essere univoco per ogni account smart-me, inoltre la combinazione numerica delle ultime 4 cifre deve essere univoca nell'account per i contatori combinati caldo/freddo. Il modo più semplice è utilizzare il numero di serie del dispositivo.

Risultato della ricerca automatica

![Messa in servizio – Figura 17](/img/konfiguration-inbetriebnahme/17.png)

Creazione automatica dei contatori dopo la ricerca
(richiede alcuni minuti)

![Messa in servizio – Figura 18](/img/konfiguration-inbetriebnahme/18.png)

### Numerazione con i contatori combinati

L'M-Bus Gateway riconosce sempre solo un contatore in base all'indirizzo secondario, che di norma è indicato anche sul protocollo di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare costi di licenza. L'eliminazione non porta al risultato desiderato, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco dell'M-Bus Gateway (ad es. 71440145)

- Ulteriori contatori = indirizzo secondario del contatore principale, la prima 1 o 2 cifra viene eliminata (ad es. 7) e alla fine viene incrementato un numero (ad es. 14401451,14401452).


- Sottocontatori = questi contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)


Nota sugli 0 iniziali: se un contatore ha ad esempio il numero 1000017, dopo il troncamento gli 0 iniziali non vengono considerati, quindi ad es. 000017, e vengono aggiunti alla fine, ad es. 1700001

![Messa in servizio – Figura 19](/img/konfiguration-inbetriebnahme/19.png)

![Messa in servizio – Figura 20](/img/konfiguration-inbetriebnahme/20.png)

### Cercare dispositivi M-Bus Gateway

Ulteriori configurazioni devono essere effettuate nel portale web

Modificare

- Modificare l'intervallo. L'M-Bus necessita di 10 secondi per dispositivo per la lettura.


Avviare la ricerca dei dispositivi sull'M-Bus Gateway

1.  In alto a destra sul simbolo dell'ingranaggio (impostazioni) 

2.  Cercare dispositivi

3.  Confermare la ricerca con "Sì"


Nota: la ricerca può richiedere diversi minuti.

Il gateway non trova tutti i contatori

- Avvia nuovamente la ricerca (1-2 volte). Può succedere che il contatore non venga sempre trovato alla prima ricerca.

- Ulteriori cause le trovi alla pagina [Guasti M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


Il gateway trova più contatori di quanti ne siano stati installati

- Nella maggior parte dei casi durante la messa in servizio: a seconda del contatore M-Bus, questo può creare più sottocontatori. Li si riconosce dal fatto che il numero di serie è spostato di una posizione verso sinistra, seguito da un numero crescente. A partire da 1. Es.: contatore principale 00200001, sottocontatore 02000011

- Ulteriori cause le trovi alla pagina [Guasti M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


![Messa in servizio – Figura 21](/img/konfiguration-inbetriebnahme/21.png)

### Impedire all'M-Bus Gateway il riconoscimento di nuovi dispositivi

Come si attiva l'opzione?

- Selezionare l'M-Bus Gateway.


- Seleziona l'ingranaggio dell'M-Bus Gateway (in alto a destra). Nota: non selezionare l'ingranaggio superiore, utilizzato per la configurazione dei contatori, bensì quello inferiore.

- Modificare

- Mettere il segno di spunta su "Don't allow to add additional meters".

- Salvare


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


Cosa occorre tenere presente?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Se nel portale compaiono continuamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Questo si verifica più frequentemente quando il cavo M-Bus è troppo lungo e di conseguenza la qualità della trasmissione dei dati diminuisce, oppure quando il cavo è schermato in modo insufficiente o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo M-Bus standardizzato dispone di 1 solo byte per la somma di controllo. La somma di controllo serve a riconoscere determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono impiegati M-Bus Gateway questo porta ripetutamente a classificare come corretti e validi pacchetti corrotti, che vengono poi riconosciuti e aggiunti come nuovo dispositivo M-Bus nel nostro cloud. L'account passa quindi da Professional a Basic, poiché la copertura di licenza non è più garantita.


![Messa in servizio – Figura 22](/img/konfiguration-inbetriebnahme/22.png)

## Stazione di ricarica Pico

### Verificare la connessione WLAN

Dopo l'installazione della Pico compare nell'angolo in alto a destra un simbolo che fornisce informazioni sul tipo di connessione.

Se la Pico deve essere collegata tramite WLAN, è consigliabile verificare brevemente se l'icona corrisponde a un simbolo WLAN e non a 4G. 

Se compare 4G nonostante la Pico debba essere collegata tramite WLAN, occorre reinstallare la Pico. Questo può accadere se un passaggio dell'installazione non è stato eseguito correttamente, ad es. la password WLAN.

![Messa in servizio – Figura 23](/img/konfiguration-inbetriebnahme/23.png)

### Configurazione Pico e gestione del carico

[Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement) 

![Messa in servizio – Figura 24](/img/konfiguration-inbetriebnahme/23.png)

## Consigli e trucchi

### Mettere in servizio più dispositivi

In questo passaggio hai la possibilità di mettere in servizio più contatori contemporaneamente, per accelerare la messa in servizio in presenza di molti contatori.



![Messa in servizio – Figura 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Disconnettersi

1.  In alto a sinistra sulle tre linee e selezionare Profilo

2.  In basso selezionare Disconnetti

3.  Disconnesso


![Messa in servizio – Figura 26](/img/konfiguration-inbetriebnahme/26.jpg)

![Messa in servizio – Figura 27](/img/konfiguration-inbetriebnahme/27.jpg)

### Installazione non riuscita

Se l'installazione non dovesse riuscire e desideri riprovare, chiudi completamente l'app e riaprila poi di nuovo. In questo modo si garantisce che non vengano utilizzate informazioni memorizzate temporaneamente (cache).

## Passo successivo

[Continua con la configurazione delle cartelle e dei contatori](/konfiguration/ordnerkonfiguration)

## FAQ

### Cambio il fornitore di Internet, cosa devo fare?

Se i contatori sono collegati a un WLAN tecnico e/o a un access point dedicato, di norma l'SSID e la password non cambiano. In tal caso un cambio del fornitore di Internet di regola non è un problema.

Se vengono utilizzati l'SSID e la password di un WLAN privato, ci sono due possibilità:

- Soluzione 1: creare sul nuovo router un WLAN ospiti che abbia lo stesso SSID e la stessa password di quello vecchio. Successivamente i contatori si collegano automaticamente a questo WLAN, che è uguale a quello vecchio.

- Soluzione 2: rileggere ogni contatore singolarmente, in modo che i nuovi dati vengano salvati localmente su ogni contatore. L'installazione avviene esattamente come una nuova installazione. Il contatore non deve essere eliminato in nessun caso, poiché altrimenti tutti i dati storici andrebbero persi. In caso di nuova installazione il nostro ambiente cloud si accorge che il numero di serie è già presente nell'account e aggiunge semplicemente i nuovi valori.


### Come posso riavviare un dispositivo (reboot)?

Tutti i dispositivi possono essere riavviati con un'interruzione di corrente.

Contatore trifase: premere contemporaneamente T1 e T2 per 10 secondi.

Pico: nel portale in alto a destra selezionare l'ingranaggio, azioni avanzate, riavvio. Funziona solo se la Pico è online.

Modulo Kamstrup: rimuovere il modulo dal contatore, attendere 10 secondi e reinserirlo.

M-Bus Gateway e contatore monofase: questi dispositivi possono essere riavviati solo con un'interruzione di corrente.

### Posso utilizzare il mio dispositivo con più reti WiFi?

Sì, il dispositivo smart-me (eccetto la [stazione di ricarica Pico](/produkte/pico-ladestation)) memorizza fino a 3 reti WiFi diverse. Devi solo installarlo una volta in ciascuna rete e successivamente il dispositivo seleziona automaticamente sempre la rete con la migliore connessione radio.

### Posso azzerare la lettura del contatore?

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

### Dove viene memorizzata la password WiFi?

La password WiFi viene memorizzata esclusivamente sul dispositivo smart-me e non viene mai trasmessa a un server 

### Le impostazioni e le letture del contatore vengono salvate in caso di interruzione di corrente?

Sì, il dispositivo salva tutte le impostazioni e i valori in caso di interruzione di corrente. Non appena l'alimentazione elettrica è ripristinata, il dispositivo si collega automaticamente al WiFi e torna allo stato precedente all'interruzione. 

### Come posso memorizzare un nuovo WiFi senza perdere i dati esistenti?

Per aggiungere un'ulteriore rete, il dispositivo deve essere installato correttamente con l'app smart-me. Se prima non viene eliminato dal cloud, i dati energetici e le impostazioni di configurazione vengono mantenuti.



### Le informazioni WiFi memorizzate possono essere eliminate?

Le informazioni WiFi vengono memorizzate solo sul dispositivo. L'eliminazione dei dati può avvenire come segue:

- Premere per 10s il pulsante del dispositivo smart-me. Con Pico la carta RIFD deve essere avvicinata al più tardi 15 minuti dopo il riavvio (senza corrente).

- Stabilire con uno smartphone una connessione con il WiFi smart-me (il nome della rete WiFi è smart-me\_XXXXXX dove le X stanno per il numero di serie del dispositivo smart-me)

- Stabilire con un browser una connessione con l'IP 192.168.1.1.

- Selezionare il WLAN indesiderato, premere remove e riavviare il dispositivo.


### Come faccio a scoprire l'indirizzo MAC del mio dispositivo smart-me?

Non esiste un modo diretto per scoprire l'indirizzo MAC\. Se disponi di una licenza Professional, puoi attivare DNS nelle impostazioni avanzate del dispositivo smart-me e selezionare l'opzione IP interno. Con un ping sul nome DNS è possibile determinare l'IP, che può poi essere confrontato sul router con la tabella IP / MAC

### La rete mesh può essere disattivata?

I contatori trifase Telstar e Telstar CT generano una rete mesh. Questa non può essere disattivata.

### Posso spostare un dispositivo da un account smart-me a un altro?

- I dati storici non possono essere spostati. 

- Il dispositivo può tuttavia essere installato in un altro account con una nuova installazione.


### Con quale lettura viene consegnato un contatore smart-me?

0

### Cosa succede se disattivo un contatore?

Tutti i dati già salvati nel cloud vengono mantenuti. Dopo la disattivazione non vengono più salvati altri dati. Per i contatori disattivati non sono dovuti costi di licenza.

### È possibile configurare un proxy sui dispositivi smart-me?

No
