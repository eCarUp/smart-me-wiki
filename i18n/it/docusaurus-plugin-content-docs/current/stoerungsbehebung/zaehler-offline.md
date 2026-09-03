---
title: 'Contatore offline'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Questa pagina illustra i passaggi noti per riportare online un contatore elettrico smart-me offline.'
sidebar_label: 'Contatore offline'
---
Questa pagina illustra i passaggi noti per riportare online un contatore elettrico smart-me offline.

## Buono a sapersi

### Come riconosco se un contatore è offline?

Un contatore smart-me è offline quando non si è più annunciato al cloud da oltre 15 minuti. Lo si può verificare controllando l'ultima connessione sul contatore.

![Ultima connessione](/img/stoerungsbehebung-zaehler-offline/01.png)

![Contatore offline – Figura 2](/img/stoerungsbehebung-zaehler-offline/02.png)

Inoltre, lo stato di salute del sistema (Systemgesundheit) offre una panoramica di tutti i dispositivi

### Versione del firmware (Telstar 80A e Telstar CT)

Fino alla versione FW 1.16 e 1.17 incluse sono state apportate diverse modifiche al Telstar CT e al Telstar 80A per migliorare la stabilità della connessione WiFi. Per questo motivo consigliamo di verificare sempre brevemente se sul contatore è installata la versione più recente e, se necessario, di aggiornarla. [Aggiornamento del firmware](/konfiguration/firmware-update)

Se un contatore con la versione firmware più recente risulta offline nonostante i contatori vicini siano online, ti chiediamo di segnalarcelo.

### Come salvo una nuova rete sul dispositivo smart-me?

Vedi sotto Reinstallare il contatore

### Reinstallare il contatore

Con una nuova installazione è possibile salvare una nuova rete WiFi sul contatore. L'installazione deve avvenire dall'account nel quale il contatore è offline. Il cloud smart-me riconosce i dispositivi noti e aggiunge i nuovi dati senza modificare quelli esistenti.

La reinstallazione avviene con la stessa procedura descritta nella [messa in servizio](/konfiguration/inbetriebnahme). Nell'app, in alto a destra, seleziona il + e reinstalla il dispositivo. In questo modo il nuovo SSID e la password vengono salvati automaticamente sul dispositivo. È importante assicurarsi di essere collegati con l'account corretto.

### Circoscrivere il problema

È importante innanzitutto capire a grandi linee da cosa dipende il problema di connessione. Se più contatori perdono la connessione (sono offline) quasi nello stesso momento, ciò indica probabilmente problemi con l'access point, con il router o con la connessione a internet.

Possibili problemi:

- L'access point o il router ha un problema. In questi casi può essere utile riavviare il router o l'access point. Dopo il riavvio, i nostri dispositivi dovrebbero normalmente ristabilire la connessione al cloud smart-me entro pochi minuti.

- È stato attivato un nuovo provider internet oppure è stato definito un nuovo SSID (nome della rete WLAN). In questo caso devi salvare la nuova rete su ogni dispositivo smart-me, affinché possano riconnettersi.

- Con le connessioni internet mobili può capitare che l'abbonamento non sia stato pagato. Assicurati che i pagamenti per l'internet mobile siano in ordine.


Se invece un solo contatore o un piccolo gruppo di contatori ha perso la connessione, di regola il problema riguarda il contatore smart-me interessato.

## Riportare online il contatore

Le istruzioni seguenti propongono una procedura uniforme per riportare online un contatore.

Osserva i seguenti presupposti:

- Questa procedura presuppone che internet sia configurato correttamente e soddisfi tutti i requisiti necessari.

- Assicurati che un altro contatore nello stesso account, che secondo la pianificazione dovrebbe essere collegato allo stesso router o access point, sia online. In questo modo si esclude che l'hardware internet o i suoi presupposti causino il problema.


### Telstar 80A e Telstar CT

- Il numero di serie inizia con 63\*: Telstar 80A

- Il numero di serie inizia con 62\*: Telstar CT


1.  ### Riavviare il contatore


Questa è solo un'informazione su come si procede; più sotto può essere richiesto di riavviare il contatore per riportarlo online.

Forzare il riavvio:

- Premere T1 e T2 per 10 secondi. Durante il riavvio il display si spegne brevemente.


Come riconosco il riavvio:

- Il contatore si spegne brevemente e sul display non viene più visualizzato nulla.


Comportamento quando il contatore torna online:

- In alto a destra sullo schermo, subito dopo il riavvio, il segnale di ricezione alterna tra X e ricezione.

- Il contatore è online quando, dopo circa 1 minuto, il segnale di ricezione in alto a destra sul display resta acceso in modo permanente ed è nero.

- Verificare brevemente se il contatore è online nel cloud.

- Verificare se è disponibile un [aggiornamento del firmware](/konfiguration/firmware-update). Se sì, aggiornare tutti i contatori.


Comportamento quando il contatore non torna online:

- In alto a destra sullo schermo, dopo il riavvio, il segnale di ricezione alterna tra X e ricezione per più di 2 minuti senza tornare online.

- Se questo non aiuta, chiamare il supporto.


![Contatore offline – Figura 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

### 2\. Verifica all'arrivo

I seguenti punti possono essere verificati all'arrivo. Se sul contatore è già stato modificato qualcosa, è importante che per almeno 5 minuti non vengano apportate ulteriori modifiche al contatore. È anche possibile chiedere al cliente sul posto un video di 30 secondi del contatore, per valutare meglio la situazione.

![Contatore offline – Figura 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

### Il contatore alterna tra X e simbolo di ricezione:

- Verificare se, premendo il tasto T1 per 10 secondi, il simbolo di ricezione sul display alterna tra chiaro e scuro. Se non è così, chiama il supporto.

- Soluzione 1: premi contemporaneamente T1 e T2: il contatore dovrebbe spegnersi brevemente. Attendi 1 minuto e verifica se il contatore è di nuovo online.

- Soluzione 2: reinstalla il contatore. Seleziona l'account di destinazione e non cancellare in nessun caso il contatore nell'account.

- Soluzione 3: chiamare il supporto


### Il display è spento:

- Soluzione 1: verificare che sia collegata almeno la fase 1

- Soluzione 2: verificare che il conduttore neutro sia collegato correttamente.

- Soluzione 3: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 4: se dopo la soluzione 1 e 2 il display resta ancora permanentemente nero, il contatore è difettoso. In questo caso è possibile compilare un [modulo di richiesta RMA](/rma-antragsformulare) (descrizione dell'errore: display spento Code:dd).


Il display si spegne ripetutamente:

- Descrizione del problema: il contatore visualizza qualcosa. Dopo un momento non visualizza più nulla per alcuni secondi. Poi torna, ecc...

- Soluzione 1: verificare se il conduttore neutro è collegato e cablato correttamente.

- Soluzione 2: chiamare il supporto


Il contatore genera una rete WLAN locale per più di 5 minuti:

- Come riconosco questo stato: il segnale di ricezione in alto a destra sul display alterna tra ricezione chiara e scura.

- In questo caso ciò indica un tasto T1 bloccato.

- Soluzione 1: provare a sbloccare il tasto T1.

- Soluzione 2: compilare un [modulo di richiesta RMA](/rma-antragsformulare) (descrizione dell'errore: tasto T1 bloccato Code:tk).


Il contatore visualizza in modo permanente una X in alto a destra:

- Soluzione 1: verificare se il display si spegne ripetutamente. Se è così, consulta la soluzione nella sezione precedente "Il display si spegne ripetutamente".

- Soluzione 2: riavviare il contatore (vedi descrizione sopra)

- Soluzione 3: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 4: se dopo la soluzione 1 e 2 viene ancora visualizzata in modo permanente una X, il contatore è difettoso. In questo caso è possibile compilare un [modulo di richiesta RMA](/rma-antragsformulare) (descrizione dell'errore: la X viene sempre visualizzata Code:xx).


Il contatore non riesce a collegarsi alla rete WLAN:

- Il segnale di ricezione in alto a destra sul display alterna tra ricezione e X.


- Soluzione 1: riavviare il contatore (vedi descrizione sopra)

- Soluzione 2: questa va applicata solo se nelle vicinanze non c'è nessun altro contatore online. Creare con lo smartphone un hotspot con lo stesso SSID e la stessa password della rete WiFi esistente. Riavviare quindi di nuovo il contatore e verificare se si collega tramite l'hotspot dello smartphone. Se il contatore si collega tramite l'hotspot, ciò indica un problema con il router WLAN o con l'access point. Va tenuto presente che la maggior parte degli smartphone consente al massimo a cinque dispositivi di collegarsi tramite l'hotspot.

- Soluzione 3: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 4: chiamare il supporto


## 3 fasi 80A (versione precedente)

- Il numero di serie inizia con 60\*: 3 fasi 80A


1.  ### Riavviare il contatore


Questa è solo un'informazione su come si procede. Più sotto può essere richiesto di riavviare il contatore per riportarlo online.

Forzare il riavvio:

- Premere T1 e T2 per 10 secondi. Il display visualizza 888888 per 1-2 secondi.


Come riconosco il riavvio?

- Il display del contatore visualizza 888888 per 1-2 secondi.


Comportamento quando il contatore torna online:

- In alto a sinistra sullo schermo, subito dopo il riavvio, il segnale WiFi alterna tra WiFi con e senza punto esclamativo.

- Il contatore è online quando, dopo circa 1 minuto, il segnale WiFi in alto a sinistra sul display viene visualizzato in modo permanente senza punto esclamativo.

- Verificare brevemente se il contatore è online nel cloud.

- Verificare se è disponibile un [aggiornamento del firmware](/konfiguration/firmware-update). Se sì, aggiornare tutti i contatori.


Comportamento quando il contatore non torna online:

- In alto a sinistra sullo schermo, dopo il riavvio, il segnale WiFi alterna tra WiFi con e senza punto esclamativo per più di 2 minuti senza tornare online.

- Se questo non aiuta, chiamare il supporto.


### Verifica all'arrivo

I seguenti punti possono essere verificati all'arrivo. Se sul contatore è già stato modificato qualcosa, è importante che per almeno 5 minuti non vengano apportate ulteriori modifiche al contatore. È anche possibile chiedere al cliente sul posto un video di 30 secondi del contatore, per valutare meglio la situazione.

![Contatore offline – Figura 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

Il contatore è spento:

- Soluzione 1: verificare che almeno la fase 1 e il conduttore neutro siano collegati correttamente.

- Soluzione 2: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 3: se dopo la soluzione 1 e 2 il display resta ancora permanentemente nero, il contatore è difettoso.


Sul display viene visualizzato 888888:

- Soluzione 1: riavviare il contatore

- Soluzione 2: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 3: se dopo la soluzione 1 e 2 viene ancora visualizzato 888888, il contatore è difettoso.


Il contatore genera una rete WLAN locale per più di 5 minuti:

- Come riconosco questo stato: il segnale WiFi in alto a sinistra sul display viene visualizzato alternativamente con e senza punto esclamativo.

- In questo caso ciò indica un tasto T1 bloccato.

- Soluzione 1: provare a sbloccare il tasto T1

- Soluzione 2: se dopo la soluzione 1 viene ancora generata una rete WLAN locale, il contatore è difettoso.


Il contatore non riesce a collegarsi alla rete WLAN:

- Come riconosco questo stato: il segnale WiFi in alto a sinistra sul display viene visualizzato con punto esclamativo.


- Soluzione 1: riavviare il contatore (vedi descrizione sopra)

- Soluzione 2: creare con lo smartphone un hotspot con lo stesso SSID e la stessa password della rete WiFi esistente. Riavviare quindi di nuovo il contatore e verificare se si collega tramite l'hotspot dello smartphone. Se il contatore si collega tramite l'hotspot, ciò indica un problema con il router WLAN o con l'access point. Va tenuto presente che la maggior parte degli smartphone consente al massimo a cinque dispositivi di collegarsi tramite l'hotspot.

- Soluzione 3: se possibile senza grande dispendio, rimuovere e reinserire il fusibile.

- Soluzione 4: chiamare il supporto


## Bauer Station

- Il simbolo nel portale smart-me è il simbolo di una stazione di servizio e non un fulmine

- Il numero di serie inizia con 60\*: contatore 3 fasi 80A (vecchio)

- Il numero di serie inizia con 62\*: Telstar 80A (nuovo)


### Verifica all'arrivo

- -   Chiamare il supporto. Istruzioni in preparazione.


## Qualità della connessione

### Qualità di ricezione WLAN del Pico

Dalla versione FW 0.0.18 la qualità di ricezione WLAN viene visualizzata nel portale smart-me. [Aggiornamento del firmware](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J)

Questa informazione può essere richiamata da tutti gli account tramite l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) con il comando "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico: WiFi (0 = unknown, -1 bis -49 = excellent,  -50 bis  -59 = very good,  -60 bis -69 = good, -70 bis -99= low) (-99 scarso, -1 buono)

    - Pico: Mobile (0 = unknown, 1 bis -74 = excellent, -75 bis -84 = good,  -85 bis -94 = low) (-99 scarso, -1 buono)




![Contatore offline – Figura 6](/img/stoerungsbehebung-zaehler-offline/06.png)

### I Goldpartner possono verificare online il tipo e la qualità della connessione di Telstar e Pico.

- Accedere con l'account Goldpartner

- Configurazione (Konfiguration)

- Partner

- Gestione dispositivi (Geräteverwaltung) (con molti dispositivi può richiedere un po' di tempo)

- Viene visualizzata una nuova colonna con il tipo di connessione

- La qualità viene indicata tra parentesi.

    - Telstar: WiFi &lt;= 40 può causare connessioni instabili (0 scarso / 100 buono)

    - Pico: WiFi (0 = unknown, -1 bis -49 = excellent,  -50 bis  -59 = very good,  -60 bis -69 = good, -70 bis -99= low) (-99 scarso, -1 buono)

    - Pico: Mobile (0 = unknown, 1 bis -74 = excellent, -75 bis -84 = good,  -85 bis -94 = low) (-99 scarso, -1 buono)


Questa informazione può essere richiamata da tutti gli account tramite l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) con il comando "GET /api/AdditionalDeviceInformation/&#123;id&#125;".



![Contatore offline – Figura 7](/img/stoerungsbehebung-zaehler-offline/07.png)
