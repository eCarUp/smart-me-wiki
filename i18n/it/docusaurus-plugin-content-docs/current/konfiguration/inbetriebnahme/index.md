---
title: 'Messa in servizio'
slug: '/konfiguration/inbetriebnahme'
description: 'Tutto sulla messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche alle domande sull''installazione.'
sidebar_label: 'Messa in servizio'
naechste_schritte: [konfiguration/ordnerkonfiguration/index]
---
Tutto sulla messa in servizio dei dispositivi smart-me: cosa considerare durante la messa in servizio, fonti di errore frequenti e risposte specifiche alle domande sull'installazione.

[Messa in servizio LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Eliminare / disattivare un contatore](/konfiguration/inbetriebnahme/zaehler-loeschen)


## Preparazione

Prima della messa in servizio devono essere soddisfatti i seguenti punti

## Requisiti WiFi

- WiFi 802.11 b/g/n 2.4GHz (nessuna rete 5GHz o rete combinata con lo stesso SSID)

- Le porte 80 UDP e 53 UDP/TCP devono essere aperte verso l'esterno.

- La rete necessita di una connessione Internet.

- L'SSID non deve essere nascosto.

- L'SSID supporta solo simboli ASCII, escluso $ (Ä, Ö, Ü non funzionano)

- I filtri degli indirizzi MAC devono essere disattivati durante l'installazione. (Gli indirizzi MAC dei dispositivi possono essere letti solo tramite ARP)

- La rete necessita di un server DHCP

- SSID max. 28 caratteri

- Password max. 63 caratteri

## Account smart-me

Consigliamo di creare un account in anticipo e separatamente per ogni installazione. Per la messa in servizio non sono necessarie licenze.

## Installer App

La Installer App gratuita deve essere installata sul tuo smartphone e devono essere concesse le autorizzazioni necessarie.

IOS: posizione, rete locale, fotocamera

Android: posizione, fotocamera

## Attrezzi speciali

- Pico: una carta RFID (in dotazione)

- Telstar 80A, CT e M-Bus Gateway: un piccolo cacciavite per premere il tasto T1

![Icona della smart-me Installer App: una coppia di attrezzi incrociati su sfondo blu](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Istruzioni](/konfiguration/installer-app-anleitung)

## Installazione

## Guida rapida

1.  Verifica i requisiti WiFi (vedi sopra)

2.  Scarica l'app gratuita per [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) o [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Concedi le autorizzazioni all'app

4.  Connetti il tuo smartphone o tablet alla rete WiFi in cui desideri installare il dispositivo smart-me.

5.  Avvia l'app e accedi con l'account corrispondente oppure crea un account.

6.  Nel menu, verifica con Diagnostica (Diagnose) se i server sono raggiungibili.

7.  Fai clic in basso a destra su «Installa dispositivo» („Gerät installieren“) (+)

8.  In caso di installazione tramite WLAN, questa può essere aggiunta in alto.

9.  Fai clic in basso a destra su «Aggiungi dispositivo» („Gerät hinzufügen“) (+)

10.  Scansiona il codice QR

11.  Per la Pico, scegli se desideri utilizzare WLAN o rete mobile (4G).

12.  Seleziona "Connetti al WLAN del dispositivo" ("Verbinde mit WLAN des Gerätes")

13.  Premi T1 o avvicina la carta RFID. Nota: la Pico deve essere installata entro 15 minuti dall'accensione della corrente.

14.  Seleziona "WLAN quick connect"

15.  Attendi finché compare la richiesta di connetterti a smart-me\_xxxxxx.

16.  Attendi finché l'installazione è stata completata con successo.

17.  Assegna un nome.

18.  Impostazioni specifiche del dispositivo

     - Telstar CT: impostare il rapporto di trasformazione (selezionare CT / modificare (editieren) / inserire il rapporto di trasformazione (Wandlerverhältnis))

     - M-Bus: la ricerca deve essere avviata tramite il portale web (rotella dentata / Avvia ricerca (Suchlauf starten))

     - Kamstrup:  chiave del contatore (tre rotelle dentate / Chiave del contatore (Zählerschlüssel) / salvare)

Se l'installazione non dovesse riuscire, segui le istruzioni dettagliate incl. la descrizione degli errori.

## Istruzioni dettagliate incl. descrizione degli errori

<div className="row">
<div className="col col--4">

**1. Connessione WIFI**

Connetti lo smartphone alla stessa rete WLAN a 2,4 GHz in cui dovranno trovarsi in seguito i dispositivi.

</div>
<div className="col col--4">

**2. Creazione / connessione**

<div className="text--center">

![Schermata di benvenuto della Installer App con i pulsanti LOG IN e Registrati (Registrieren)](/img/konfiguration-inbetriebnahme/02.jpg)

</div>

</div>
<div className="col col--4">

**3. Creazione dell'account**

<div className="text--center">

![Modulo di registrazione dell'app con e-mail, password e conferma](/img/konfiguration-inbetriebnahme/04_EN.jpg)

</div>

**Possibili problemi:** se l'indirizzo e-mail è già in uso, occorre utilizzarne un altro.

</div>
</div>

<div className="row">
<div className="col col--4">

**4. Accesso all'account**

<div className="text--center">

![Modulo di accesso dell'app con e-mail e password](/img/konfiguration-inbetriebnahme/05_EN.jpg)

</div>

**Possibili problemi:** se non è possibile accedere, verifica che la rete WLAN disponga di una connessione Internet e che nome utente e password siano corretti.

</div>
<div className="col col--4">

**5. Diagnostica**

<div className="text--center">

![Verifica WLAN con intensità del segnale, frequenza WLAN e raggiungibilità del server](/img/konfiguration-inbetriebnahme/06.png)

</div>

Questo passaggio è facoltativo. È importante che «Server raggiungibile» („Server erreichbar") sia impostato su *Yes*.

Se compare l'avviso relativo alla rete a 5 GHz, deve essere disponibile anche una rete a 2,4 GHz. Non è possibile costringere lo smartphone a utilizzarla — per questo si tratta solo di un avviso.

</div>
<div className="col col--4">

**6. Fai clic su «Aggiungi dispositivo» („Gerät hinzufügen") (+)**

<div className="text--center">

![Elenco dei dispositivi vuoto nell'app con il pulsante più in basso a destra](/img/konfiguration-inbetriebnahme/07_EN.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**7. Fai clic su «Modifica» („Editieren")**

<div className="text--center">

![Elenco dei dispositivi con Modifica (Editieren) evidenziato in verde accanto alla rete WLAN di installazione](/img/konfiguration-inbetriebnahme/08_EN.jpg)

</div>

**Nota:** questo passaggio non è necessario se le Pico vengono messe in servizio tramite 4G.

</div>
<div className="col col--4">

**8. Inserisci la password WLAN**

<div className="text--center">

![Campo di inserimento per la password della rete WLAN di installazione](/img/konfiguration-inbetriebnahme/09_EN.jpg)

</div>

**Possibili problemi:** se come SSID compare `<<unknown>>`, la posizione deve essere attivata e lo smartphone deve essere connesso a una rete WLAN.

</div>
<div className="col col--4">

**9. Fai clic su «Aggiungi dispositivo» („Gerät hinzufügen") (+)**

<div className="text--center">

![Elenco dei dispositivi con la rete WLAN di installazione impostata e il pulsante più in basso a destra](/img/konfiguration-inbetriebnahme/10.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**10. Scansiona il codice QR**

<div className="text--center">

![Scanner di codici QR dell'app sopra la targhetta di un contatore](/img/konfiguration-inbetriebnahme/11.jpg)

</div>

**Possibili problemi:** se il codice QR non viene riconosciuto, il numero di serie può essere inserito anche manualmente.

</div>
<div className="col col--4">

**11. Connettiti alla rete WLAN del contatore**

<div className="text--center">

![Elenco dei dispositivi con l'indicazione di connettersi alla rete WLAN del dispositivo](/img/konfiguration-inbetriebnahme/12.jpg)

</div>

</div>
<div className="col col--4">

**12. Solo per Pico: «Seleziona tipo di connessione» („Verbindungsart auswählen")**

<div className="text--center">

![Finestra di dialogo Tipo di connessione (Verbindungsart) con i pulsanti WLAN e MOBILE](/img/konfiguration-inbetriebnahme/13.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**13. Premi il tasto T1 o scansiona la carta RFID**

<div className="text--center">

![Istruzioni con disegno che mostra come tenere premuto il tasto T1 sul dispositivo](/img/konfiguration-inbetriebnahme/14_EN.jpg)

</div>

**Nota per la Pico:** per ogni Pico sono disponibili 15 minuti per completare l'installazione. Trascorso questo tempo, la Pico deve essere riavviata e la procedura deve essere ripresa dall'inizio.

</div>
<div className="col col--4">

**14. Attendi finché la connessione è stabilita**

<div className="text--center">

![Elenco dei dispositivi con il messaggio verde Riuscito (Erfolgreich)](/img/konfiguration-inbetriebnahme/15.jpg)

</div>

</div>
</div>

## Impostazioni specifiche del dispositivo

## Telstar CT

### Impostare il rapporto di trasformazione

<div className="row">
<div className="col col--8">

- Seleziona e modifica il contatore CT 

- Inserisci il rapporto di trasformazione 

- Il rapporto di trasformazione può essere bloccato. Questo serve a proteggerlo da modifiche indesiderate da parte di persone non autorizzate. Per poter sbloccare il rapporto di trasformazione,  il dispositivo deve essere installato nuovamente con la smart-me App.

</div>
<div className="col col--4 text--center">

![Dettagli del dispositivo nell'app con il fattore di trasformazione 200:5 e l'interruttore «Blocca fattore di trasformazione» („Wandlerfaktor sperren")](/img/konfiguration-inbetriebnahme/16_EN.jpg)

</div>
</div>

### Nota:

Il rapporto di trasformazione non modifica i dati storici. Per questo motivo, questo passaggio deve essere eseguito subito dopo la messa in servizio.

## M-Bus Gateway / Sirius

### Istruzioni per entrambi gli M-Bus Gateway

Passaggi per l'installazione dell'hardware:

1.  Installa il dispositivo (cablare l'M-Bus, applicare la tensione)

2.  Completa l'installazione con l'app secondo le istruzioni.
    (Collegare l'hardware alla rete WLAN e all'account di destinazione. WLAN 2.4GHz)

3.  In Configurazione nell'app o sul desktop, avvia la «ricerca automatica» („automatischen Suchlauf") per trovare i dispositivi.

La messa in servizio dei contatori di calore e dei contatori dell'acqua continua invece a essere eseguita dal fornitore (ad es. Neovac, Ista, GWF, Techem ecc.). Di solito queste aziende collegano nel locale tecnico un proprio M-Bus Master per poter verificare che i contatori arrivino effettivamente sull'M-Bus.

Successivamente viene redatto un protocollo di messa in servizio e solo dopo il nostro M-Bus Gateway viene ricollegato.

Con la relativa documentazione è poi possibile assegnare i singoli contatori agli appartamenti corretti nella smart-me Cloud e completare la configurazione.

Di seguito le informazioni necessarie

- Elenco di tutti i contatori installati

- Indirizzo M-Bus (ci serve solo l'indirizzo secondario, l'indirizzo primario non è rilevante per noi)

- Appartenenza all'appartamento (designazione dell'appartamento)

- Tipo di contatore (calore, acqua calda sanitaria o acqua fredda ecc.)

Importante: l'indirizzo secondario deve essere univoco per ogni account smart-me; inoltre, per i contatori combinati calore/freddo, la combinazione delle ultime 4 cifre deve essere univoca nell'account. Il modo più semplice è utilizzare il numero di serie del dispositivo.

Risultato della ricerca automatica

![Risultato della ricerca nel portale: stato, ultima connessione e un elenco di 19 contatori trovati con il relativo indirizzo secondario](/img/konfiguration-inbetriebnahme/17.png)

Creazione automatica dei contatori dopo la ricerca
(richiede alcuni minuti)

![Albero dei contatori di un appartamento con le voci freddo, elettricità, calore e acqua calda sanitaria](/img/konfiguration-inbetriebnahme/18.png)

### Numerazione dei contatori combinati

L'M-Bus Gateway riconosce un solo contatore alla volta in base all'indirizzo secondario, che di norma è riportato anche sul protocollo di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti ai fini del conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non è utile, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco dell'M-Bus Gateway (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima o le prime 2 cifre vengono eliminate (ad es. 7) e alla fine viene aggiunto un numero progressivo (ad es. 14401451,14401452).

- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)

Nota sugli zeri iniziali: se un contatore ha ad es. il numero 1000017, dopo il troncamento gli zeri iniziali non vengono considerati, quindi ad es. 000017, e vengono aggiunti alla fine, ad es. 1700001

![Singolo contatore trovato «Heat 71440145» con il relativo indirizzamento](/img/konfiguration-inbetriebnahme/19.png)

![Quattro contatori di un contatore combinato: due volte Cold, una volta Heat e una volta Water](/img/konfiguration-inbetriebnahme/20.png)

### Cercare dispositivi con l'M-Bus Gateway

Le ulteriori configurazioni devono essere eseguite nel portale web

Modifica

- Modificare l'intervallo. L'M-Bus necessita di 10 secondi per dispositivo per la lettura.

Avviare la ricerca dei dispositivi sull'M-Bus Gateway

1.  In alto a destra sul simbolo della rotella dentata (Impostazioni) 

2.  Cerca dispositivi (Geräte suchen)

3.  Conferma la ricerca con «Sì» („Ja")

Nota: la ricerca può durare diversi minuti.

Il gateway non trova tutti i contatori

- Avvia nuovamente la ricerca  (1-2 volte). Può succedere che il contatore non venga trovato sempre alla prima ricerca.

- Altre cause sono descritte nella pagina [Guasti dell'M-Bus Gateway](/stoerungsbehebung/m-bus-gateway-stoerungen) 

Il gateway trova più contatori di quelli installati

- Per lo più durante la messa in servizio: a seconda del contatore M-Bus, questo può creare più sottocontatori. Si riconoscono dal fatto che il numero di serie è spostato di una posizione verso sinistra, seguito da un numero crescente, a partire da 1. Es.: contatore principale 00200001, sottocontatore 02000011

- Altre cause sono descritte nella pagina [Guasti dell'M-Bus Gateway](/stoerungsbehebung/m-bus-gateway-stoerungen) 

![Menu dell'M-Bus Gateway nel portale con il pulsante «Cerca dispositivi» („Geräte suchen") evidenziato in verde](/img/konfiguration-inbetriebnahme/21.png)

### Impedire il riconoscimento di nuovi dispositivi da parte dell'M-Bus Gateway

Come si attiva l'opzione?

- Seleziona l'M-Bus Gateway.

- Seleziona la rotella dentata dell'M-Bus Gateway (in alto a destra). Nota: non selezionare la rotella dentata superiore, utilizzata per la configurazione dei contatori, ma quella inferiore.

- Modifica (Bearbeiten)

- Spunta la casella "Don't allow to add additional meters".

- Salva (Speichern)

Qual è l'effetto di questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 

A cosa bisogna prestare attenzione?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere disattivata nuovamente prima della ricerca.

Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)

In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso se il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati diminuisce di conseguenza, oppure se il cavo è schermato in modo insufficiente o esposto a disturbi esterni.

Spiegazione tecnica

- Il protocollo standardizzato M-Bus dispone di un solo byte per la somma di controllo. La somma di controllo serve a rilevare determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono utilizzati M-Bus Gateway, ciò porta ripetutamente a classificare come corretti e validi pacchetti corrotti, che vengono quindi riconosciuti e aggiunti nel nostro cloud come nuovo dispositivo M-Bus. L'account passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.

![Impostazioni dell'M-Bus Gateway con la casella «Don't allow to add additional meters» evidenziata e il pulsante Salva (Speichern)](/img/konfiguration-inbetriebnahme/22.png)

## Stazione di ricarica Pico

### Verificare la connessione WLAN

Dopo l'installazione della Pico, nell'angolo in alto a destra compare un simbolo che indica il tipo di connessione.

Se la Pico deve essere connessa tramite WLAN, è consigliabile verificare brevemente che l'icona corrisponda a un simbolo WLAN e non a 4G. 

Se compare 4G anche se la Pico dovrebbe essere connessa tramite WLAN, occorre reinstallare la Pico. Ciò può accadere se un passaggio dell'installazione non è stato eseguito correttamente, ad es. la password WLAN.

![Indicatore di stato di una stazione di ricarica Pico nel portale con il simbolo WLAN evidenziato in rosso](/img/konfiguration-inbetriebnahme/23.png)

### Configurazione Pico e gestione del carico

[Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestione del carico multilivello](/konfiguration/multilevel-lastmanagement) 

![Indicatore di stato di una stazione di ricarica Pico nel portale con il simbolo WLAN evidenziato in rosso](/img/konfiguration-inbetriebnahme/23.png)

## Suggerimenti e trucchi

### Mettere in servizio più dispositivi

<div className="row">
<div className="col col--8">

In questo passaggio hai la possibilità di mettere in servizio più contatori contemporaneamente, per accelerare la messa in servizio in presenza di molti contatori.

</div>
<div className="col col--4 text--center">

![Elenco dei dispositivi con la rete WLAN di installazione impostata e il pulsante più in basso a destra](/img/konfiguration-inbetriebnahme/10.jpg)

</div>
</div>

### Disconnettersi

<div className="row">
<div className="col col--4">

1.  In alto a sinistra sulle tre linee e seleziona Profilo (Profil)

2.  In basso seleziona Disconnetti (Ausloggen)

3.  Disconnesso

</div>
<div className="col col--4 text--center">

![Menu laterale dell'app con la voce Profilo utente (Benutzer Profil) evidenziata](/img/konfiguration-inbetriebnahme/26_EN.jpg)

</div>
<div className="col col--4 text--center">

![Pagina del profilo dell'app con il pulsante Esci (Abmelden) in basso](/img/konfiguration-inbetriebnahme/27_EN.jpg)

</div>
</div>

### Installazione non riuscita

Se l'installazione non dovesse riuscire e desideri riprovare, chiudi completamente l'app e riaprila. In questo modo ti assicuri che non vengano utilizzate informazioni memorizzate temporaneamente (cache).


## FAQ

<details id="der-internetanbieter-wird-gewechselt-was-muss-ich-machen">
<summary>Il fornitore di servizi Internet viene cambiato, cosa devo fare?</summary>

Se i contatori sono connessi a una rete WLAN tecnica e/o a un access point dedicato, di norma l'SSID e la password non cambiano. In tal caso il cambio del fornitore di servizi Internet di norma non rappresenta un problema.

Se vengono utilizzati l'SSID e la password di una rete WLAN privata, ci sono due possibilità:

- Soluzione 1: sul nuovo router creare una rete WLAN per ospiti con lo stesso SSID e la stessa password della vecchia. I contatori si connettono quindi automaticamente a questa rete WLAN, che è identica alla vecchia.

- Soluzione 2: registrare nuovamente ogni contatore singolarmente, in modo che i nuovi dati vengano salvati localmente su ogni contatore. L'installazione avviene esattamente come una nuova installazione. Il  contatore non deve in nessun caso essere eliminato, altrimenti tutti i dati storici andranno persi . In caso di nuova installazione, il nostro ambiente cloud riconosce che il numero di serie è già presente nell'account e aggiunge semplicemente i nuovi valori.

</details>

<details id="wie-kann-ich-ein-gerät-neu-starten-reboot">
<summary>Come posso riavviare un dispositivo (reboot)?</summary>

Tutti i dispositivi possono essere riavviati con un'interruzione di corrente.

Contatore trifase: premere contemporaneamente T1 e T2 per 10 secondi.

Pico: nel portale, selezionare la rotella dentata in alto a destra, Azioni avanzate (erweiterte Aktionen), Riavvio (Neustart). Funziona solo se la Pico è online.

Modulo Kamstrup: rimuovere il modulo dal contatore, attendere 10 secondi e reinserirlo.

M-Bus Gateway e contatore monofase: questi dispositivi possono essere riavviati solo con un'interruzione di corrente.

</details>

<details id="kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen">
<summary>Posso utilizzare il mio dispositivo con più reti WiFi?</summary>

Sì, il dispositivo smart-me (ad eccezione della [stazione di ricarica Pico](/produkte/pico-ladestation)) memorizza fino a 3 reti WiFi diverse. Devi solo installarlo una volta su ogni rete e in seguito il dispositivo seleziona automaticamente sempre la rete con la migliore connessione radio.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Posso azzerare la lettura del contatore?</summary>

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

</details>

<details id="wo-wird-das-wifi-passwort-gespeichert">
<summary>Dove viene salvata la password WiFi?</summary>

La password WiFi viene salvata esclusivamente sul dispositivo smart-me e non viene mai trasmessa a un server 

</details>

<details id="werden-die-einstellungen-und-zählerstände-gespeichert-falls-der-strom-ausfällt">
<summary>Le impostazioni e le letture del contatore vengono salvate in caso di interruzione di corrente?</summary>

Sì, il dispositivo salva tutte le impostazioni e tutti i valori in caso di interruzione di corrente. Non appena l'alimentazione viene ripristinata, il dispositivo si connette automaticamente alla rete WiFi e torna allo stato precedente all'interruzione. 

</details>

<details id="wie-kann-ich-eine-neues-wifi-hinterlegen-ohne-die-bestehenden-daten-zu-verlieren">
<summary>Come posso registrare una nuova rete WiFi senza perdere i dati esistenti?</summary>

Per aggiungere un'altra rete, il dispositivo deve essere installato correttamente con la smart-me App. Se in precedenza non viene eliminato dal cloud, i dati energetici e le impostazioni di configurazione vengono mantenuti.

</details>

<details id="können-die-gespeicherten-wifi-informationen-gelöscht-werden">
<summary>È possibile eliminare le informazioni WiFi salvate?</summary>

Le informazioni WiFi vengono salvate solo sul dispositivo. L'eliminazione dei dati può avvenire come segue:

- Premere per 10 s il pulsante del dispositivo smart-me. Per la Pico, la carta RFID deve essere avvicinata al più tardi 15 minuti dopo il riavvio (senza corrente).

- Con uno smartphone, stabilire una connessione con la rete WiFi smart-me (il nome della rete WiFi è smart-me\_XXXXXX, dove X sta per il numero di serie del dispositivo smart-me)

- Con un browser, stabilire una connessione con l'IP 192.168.1.1.

- Selezionare la rete WLAN indesiderata, premere remove e riavviare il dispositivo.

</details>

<details id="wie-finde-ich-die-mac-adresse-meines-smart-me-geräts-raus">
<summary>Come posso trovare l'indirizzo MAC del mio dispositivo smart-me?</summary>

Non esiste un modo diretto per trovare l'indirizzo MAC. Se disponi di una licenza Professional, puoi attivare il DNS nelle impostazioni avanzate del dispositivo smart-me e selezionare l'opzione IP interno. Con un ping sul nome DNS è possibile determinare l'IP, che può poi essere confrontato sul router con la tabella IP / MAC

</details>

<details id="kann-das-mesh-netzwerk-deaktiviert-werden">
<summary>È possibile disattivare la rete mesh?</summary>

I contatori trifase Telstar e Telstar CT creano una rete mesh. Questa non può essere disattivata.

</details>

<details id="kann-ich-ein-gerät-von-einem-smart-me-konto-zu-einem-anderen-schieben">
<summary>Posso spostare un dispositivo da un account smart-me a un altro?</summary>

- I dati storici non possono essere spostati. 

- Il dispositivo può tuttavia essere installato in un altro account con una nuova installazione.

</details>

<details id="mit-welchem-zählerstand-wird-ein-smart-me-zähler-ausgeliefert">
<summary>Con quale lettura viene consegnato un contatore smart-me?</summary>

0

</details>

<details id="was-passiert-wenn-ich-ein-zähler-deaktiviere">
<summary>Cosa succede se disattivo un contatore?</summary>

Tutti i dati già salvati nel cloud vengono mantenuti. Dopo la disattivazione non vengono salvati altri dati. Per i contatori disattivati non vengono addebitati costi di licenza.

</details>

<details id="kann-auf-den-smart-me-geräten-ein-proxy-konfiguriert-werden">
<summary>È possibile configurare un proxy sui dispositivi smart-me?</summary>

No

</details>
