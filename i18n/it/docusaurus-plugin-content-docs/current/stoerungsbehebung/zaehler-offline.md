---
title: 'Contatore offline'
slug: '/stoerungsbehebung/zaehler-offline'
description: 'Questa pagina illustra i passaggi noti per riportare online un contatore elettrico smart-me che si trova offline.'
sidebar_label: 'Contatore offline'
---
Questa pagina illustra i passaggi noti per riportare online un contatore elettrico smart-me che si trova offline. 

## Buono a sapersi

### Come faccio a capire se un contatore è offline?

<div className="row">
<div className="col col--8">

Un contatore smart-me è offline se da più di 15 minuti non si è più collegato al cloud. Per verificarlo, controllate sul contatore l'ultima connessione.

</div>
<div className="col col--4 bild--mitte">

![Ultima connessione](/img/stoerungsbehebung-zaehler-offline/01.png)

</div>
</div>

![Contatore offline – Figura 2](/img/stoerungsbehebung-zaehler-offline/02.png)

Inoltre, la Salute del sistema (Systemgesundheit) offre una panoramica di tutti i dispositivi

### Versione del firmware (Telstar 80A e Telstar CT)

Fino alle versioni FW 1.16 e 1.17 comprese, sul Telstar CT e sul Telstar 80A sono state apportate diverse modifiche per migliorare la stabilità della connessione WiFi. Per questo motivo consigliamo di verificare sempre brevemente se sul contatore è installata la versione più recente e, se necessario, di aggiornarla. [Aggiornamento del firmware](/konfiguration/firmware-update) 

Se un contatore con la versione firmware più recente è offline nonostante i contatori vicini siano online, vi preghiamo di segnalarcelo.

### Come salvo una nuova rete sul dispositivo smart-me?

Vedere più sotto Reinstallare il contatore

### Reinstallare il contatore

Con una reinstallazione è possibile salvare una nuova rete WiFi sul contatore. L'installazione deve essere eseguita dall'account in cui il contatore è offline. Il cloud smart-me riconosce i dispositivi già noti e aggiunge i nuovi dati senza modificare quelli esistenti.

La reinstallazione avviene con la stessa procedura descritta nella [messa in servizio](/konfiguration/inbetriebnahme). Nell'app selezionate il + in alto a destra e reinstallate il dispositivo. Il nuovo SSID e la nuova password vengono salvati automaticamente sul dispositivo. È importante assicurarsi di aver effettuato l'accesso con l'account corretto.

### Circoscrivere il problema

È importante innanzitutto capire a grandi linee da cosa dipende il problema di connessione. Se più contatori perdono la connessione (sono offline) quasi contemporaneamente, ciò indica probabilmente un problema con l'access point, il router o la connessione Internet.

Possibili problemi:

- L'access point o il router ha un problema. In questi casi può essere utile riavviare il router o l'access point. Dopo il riavvio, i nostri dispositivi dovrebbero normalmente ricollegarsi al cloud smart-me entro pochi minuti.

- È stato attivato un nuovo provider Internet oppure è stato definito un nuovo SSID (nome della rete WLAN). In questo caso dovete salvare la nuova rete su ogni dispositivo smart-me, affinché possano ricollegarsi.

- Nel caso di connessioni Internet mobili, può darsi che l'abbonamento non sia stato pagato. Assicuratevi che i pagamenti per Internet mobile siano in regola.


Se ha perso la connessione solo un singolo contatore o un piccolo gruppo di contatori, il problema risiede di norma piuttosto nel contatore smart-me interessato.

## Riportare online il contatore

Le seguenti istruzioni propongono una procedura uniforme per riportare online un contatore. 

Tenete presenti i seguenti requisiti:

- Questa procedura presuppone che Internet sia configurato correttamente e soddisfi tutti i requisiti necessari.

- Assicuratevi che un altro contatore nello stesso account, che secondo la pianificazione dovrebbe essere collegato allo stesso router o access point, sia online. In questo modo si garantisce che né l'hardware Internet né i relativi requisiti siano la causa del problema.


### Telstar 80A e Telstar CT

- Il numero di serie inizia con 63\*: Telstar 80A

- Il numero di serie inizia con 62\*: Telstar CT

#### 1\. Riavviare il contatore

Questa è solo un'informazione su come si procede; più avanti potrebbe esservi chiesto di riavviare il contatore per riportarlo online. 

Forzare il riavvio: 

- Premere T1 e T2 per 10 secondi. Durante il riavvio il display si spegne brevemente.

Come riconosco il riavvio:

- Il contatore si oscura brevemente e sul display non viene più visualizzato nulla.

Comportamento quando il contatore torna online:

- In alto a destra sullo schermo, subito dopo il riavvio, il simbolo del segnale alterna tra X e ricezione. 

- Il contatore è online quando, dopo circa 1 minuto, il simbolo del segnale in alto a destra sul display è acceso in modo permanente e nero.

- Verificare brevemente se il contatore è online nel cloud.

- Verificare se è disponibile un [aggiornamento del firmware](/konfiguration/firmware-update). In caso affermativo, aggiornare tutti i contatori.

Comportamento quando il contatore non torna online:

- In alto a destra sullo schermo, dopo il riavvio, il simbolo del segnale alterna tra X e ricezione per più di 2 minuti, senza che il contatore torni online.

- Se questo non aiuta, chiamare il supporto.

![Contatore offline – Figura 3](/img/stoerungsbehebung-zaehler-offline/03.gif)

#### 2\. Verifica all'arrivo

<div className="row">
<div className="col col--7">

All'arrivo è possibile verificare i seguenti punti. Se è già stato modificato qualcosa sul contatore, è importante non apportare ulteriori modifiche al contatore per almeno 5 minuti. È anche possibile chiedere al cliente sul posto un video di 30 secondi del contatore, per poter valutare meglio la situazione. 

</div>
<div className="col col--5 bild--mitte">

![Contatore offline – Figura 4](/img/stoerungsbehebung-zaehler-offline/04.gif)

</div>
</div>

#### 3\. Il contatore alterna tra X e simbolo di ricezione:

- Verificare se, premendo il tasto T1 per 10 secondi, il simbolo di ricezione sul display alterna tra chiaro e scuro. In caso contrario, chiamate il supporto.

- Soluzione 1: premete contemporaneamente T1 e T2: il contatore dovrebbe oscurarsi brevemente. Attendete 1 minuto e verificate se il contatore è di nuovo online.

- Soluzione 2: reinstallate il contatore. Selezionate l'account di destinazione e non eliminate in nessun caso il contatore nell'account.

- Soluzione 3: chiamare il supporto 


#### 4\. Il display è scuro:

- Soluzione 1: verificare che sia collegata almeno la fase 1

- Soluzione 2: verificare che il conduttore neutro sia collegato correttamente. 

- Soluzione 3: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 4: se dopo le soluzioni 1 e 2 il display è ancora permanentemente nero, il contatore è difettoso. In questo caso è possibile compilare un [modulo di richiesta RMA](/rma-antragsformular-schweiz) (descrizione dell'errore: Display Dunkel Code:dd).


Il display si oscura ripetutamente:

- Descrizione del problema: il contatore visualizza qualcosa. Dopo un momento non visualizza più nulla per alcuni secondi. Poi riappare, ecc...

- Soluzione 1: verificare se il conduttore neutro è collegato e cablato correttamente. 

- Soluzione 2: chiamare il supporto 


Il contatore genera una WLAN locale per più di 5 minuti:

- Come riconosco questo stato: il simbolo del segnale in alto a destra sul display alterna tra ricezione chiara e scura.

- In questo caso ciò indica un tasto T1 bloccato.

- Soluzione 1: provare a sbloccare il tasto T1. 

- Soluzione 2: compilare un [modulo di richiesta RMA](/rma-antragsformular-schweiz) (descrizione dell'errore: Taste T1 klemmt Code:tk).


Il contatore visualizza permanentemente una X in alto a destra:

- Soluzione 1: verificare se il display si oscura ripetutamente. In tal caso, leggere la soluzione nella sezione precedente "Il display si oscura ripetutamente".

- Soluzione 2: riavviare il contatore (vedere la descrizione sopra)

- Soluzione 3: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 4: se dopo le soluzioni 1 e 2 viene ancora visualizzata permanentemente una X, il contatore è difettoso. In questo caso è possibile compilare un [modulo di richiesta RMA](/rma-antragsformular-schweiz) (descrizione dell'errore: X wird immer angezeigt Code:xx).


Il contatore non riesce a connettersi alla WLAN:

- Il simbolo del segnale in alto a destra sul display alterna tra ricezione e X.


- Soluzione 1: riavviare il contatore (vedere la descrizione sopra)

- Soluzione 2: va applicata solo se nelle vicinanze non c'è nessun altro contatore online. Con lo smartphone creare un hotspot con lo stesso SSID e la stessa password della rete WiFi esistente. Poi riavviare di nuovo il contatore e verificare se si connette tramite l'hotspot dello smartphone. Se il contatore si connette tramite l'hotspot, ciò indica un problema con il router WLAN o l'access point. Tenere presente che la maggior parte degli smartphone consente al massimo a cinque dispositivi di connettersi tramite l'hotspot.

- Soluzione 3: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 4: chiamare il supporto 


### Trifase 80A (versione precedente)

- Il numero di serie inizia con 60\*: Trifase 80A


#### 1. Riavviare il contatore


Questa è solo un'informazione su come si procede. Più avanti potrebbe esservi chiesto di riavviare il contatore per riportarlo online. 

Forzare il riavvio: 

- Premere T1 e T2 per 10 secondi. Il display visualizza 888888 per 1-2 secondi.


Come riconosco il riavvio?

- Il display del contatore visualizza 888888 per 1-2 secondi.


Comportamento quando il contatore torna online:

- In alto a sinistra sullo schermo, subito dopo il riavvio, il simbolo WiFi alterna tra WiFi con e senza punto esclamativo.

- Il contatore è online quando, dopo circa 1 minuto, il simbolo WiFi in alto a sinistra sul display viene visualizzato permanentemente senza punto esclamativo.

- Verificare brevemente se il contatore è online nel cloud.

- Verificare se è disponibile un [aggiornamento del firmware](/konfiguration/firmware-update). In caso affermativo, aggiornare tutti i contatori.


Comportamento quando il contatore non torna online:

- In alto a sinistra sullo schermo, dopo il riavvio, il simbolo WiFi alterna tra WiFi con e senza punto esclamativo per più di 2 minuti, senza che il contatore torni online.

- Se questo non aiuta, chiamare il supporto.


#### Verifica all'arrivo

<div className="row">
<div className="col col--6">

All'arrivo è possibile verificare i seguenti punti. Se è già stato modificato qualcosa sul contatore, è importante non apportare ulteriori modifiche al contatore per almeno 5 minuti. È anche possibile chiedere al cliente sul posto un video di 30 secondi del contatore, per poter valutare meglio la situazione. 

</div>
<div className="col col--6 bild--mitte">

![Contatore offline – Figura 5](/img/stoerungsbehebung-zaehler-offline/05.gif)

</div>
</div>

Il contatore è scuro:

- Soluzione 1: verificare che almeno la fase 1 e il conduttore neutro siano collegati correttamente. 

- Soluzione 2: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 3: se dopo le soluzioni 1 e 2 il display è ancora permanentemente nero, il contatore è difettoso.


Sul display viene visualizzato 888888:

- Soluzione 1: riavviare il contatore

- Soluzione 2: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 3: se dopo le soluzioni 1 e 2 viene ancora visualizzato 888888, il contatore è difettoso.


Il contatore genera una WLAN locale per più di 5 minuti:

- Come riconosco questo stato: il simbolo WiFi in alto a sinistra sul display viene visualizzato alternativamente con e senza punto esclamativo.

- In questo caso ciò indica un tasto T1 bloccato.

- Soluzione 1: provare a sbloccare il tasto T1

- Soluzione 2: se dopo la soluzione 1 viene ancora generata una WLAN locale, il contatore è difettoso.


Il contatore non riesce a connettersi alla WLAN:

- Come riconosco questo stato: il simbolo WiFi in alto a sinistra sul display viene visualizzato con il punto esclamativo.


- Soluzione 1: riavviare il contatore (vedere la descrizione sopra)

- Soluzione 2: con lo smartphone creare un hotspot con lo stesso SSID e la stessa password della rete WiFi esistente. Poi riavviare di nuovo il contatore e verificare se si connette tramite l'hotspot dello smartphone. Se il contatore si connette tramite l'hotspot, ciò indica un problema con il router WLAN o l'access point. Tenere presente che la maggior parte degli smartphone consente al massimo a cinque dispositivi di connettersi tramite l'hotspot.

- Soluzione 3: se possibile senza grande sforzo, rimuovere il fusibile e reinserirlo. 

- Soluzione 4: chiamare il supporto


### Stazione Bauer

- Il simbolo nel portale smart-me è un simbolo di distributore di benzina e non un fulmine

- Il numero di serie inizia con 60\*: contatore trifase 80A (vecchio)

- Il numero di serie inizia con 62\*: Telstar 80A (nuovo)


#### Verifica all'arrivo

- -   Chiamare il supporto. Istruzioni in preparazione.


## Qualità della connessione

### Qualità di ricezione WLAN del Pico

<div className="row">
<div className="col col--5">

A partire dalla versione FW 0.0.18, la qualità di ricezione WLAN viene visualizzata nel portale smart-me. [Aggiornamento del firmware](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1nDT64kPszZGmBXffYtc_9fUGbxTlFM8J) 

Questa informazione può essere richiamata da tutti gli account tramite l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) con il comando "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

- -   Pico: WiFi (0 = unknown, da -1 a -49 = excellent,  da -50 a  -59 = very good,  da -60 a -69 = good, da -70 a -99= low) (-99 scarsa, -1 buona)

    - Pico: Mobile (0 = unknown, da 1 a -74 = excellent, da -75 a -84 = good,  da -85 a -94 = low) (-99 scarsa, -1 buona)

</div>
<div className="col col--7 bild--mitte">

![Contatore offline – Figura 6](/img/stoerungsbehebung-zaehler-offline/06.png)

</div>
</div>

### I Goldpartner possono verificare online il tipo e la qualità di connessione di Telstar e Pico.

<div className="row">
<div className="col col--7">

- Accedere all'account Goldpartner

- Configurazione (Konfiguration)

- Partner (Partner)

- Gestione dispositivi (Geräteverwaltung) (con molti dispositivi può richiedere un po' di tempo)

- Viene visualizzata una nuova colonna con il tipo di connessione

- La qualità viene indicata tra parentesi.

    - Telstar: WiFi &lt;= 40 può causare connessioni instabili (0 scarsa / 100 buona)

    - Pico: WiFi (0 = unknown, da -1 a -49 = excellent,  da -50 a  -59 = very good,  da -60 a -69 = good, da -70 a -99= low) (-99 scarsa, -1 buona)

    - Pico: Mobile (0 = unknown, da 1 a -74 = excellent, da -75 a -84 = good,  da -85 a -94 = low) (-99 scarsa, -1 buona)

Questa informazione può essere richiamata da tutti gli account tramite l'[API](https://sites.google.com/u/0/d/1aCvQ4VBGjc0Zn6Acdv_my2AEp54cDrdX/revisionspreview?revision=415029&pageId=1L6QLXZEHWjDfqgdtjRQyM9vH29YdMCAn) con il comando "GET /api/AdditionalDeviceInformation/&#123;id&#125;".

</div>
<div className="col col--5 bild--mitte">

![Contatore offline – Figura 7](/img/stoerungsbehebung-zaehler-offline/07.png)

</div>
</div>
