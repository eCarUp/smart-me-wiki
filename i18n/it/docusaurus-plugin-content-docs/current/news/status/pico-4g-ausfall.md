---
title: 'Interruzione della comunicazione Pico via 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Status update 16.01.2026 14h45'
sidebar_label: 'Interruzione della comunicazione Pico via 4G'
---
## Status update 16.01.2026 14h45

Purtroppo dobbiamo comunicarvi che alcune stazioni di ricarica sono ancora interessate dal guasto delle SIM 1nce (fornitore della carta).

Poiché una risoluzione del guasto da parte del fornitore esterno non è realistica, abbiamo agito in modo proattivo per mettervi a disposizione una soluzione affidabile.

Esiste una piccola possibilità che la stazione di ricarica torni online durante la notte, quindi a partire dal 17.01.2025 6h00. Quanto sia elevata questa probabilità non è chiaro e, in base alle conoscenze attuali, viene valutata come ridotta.

## Soluzione del problema

Quando va applicata

Se la stazione è attualmente ancora offline e non è collegata a una rete WLAN temporanea.

Soluzione 1: portare la stazione online tramite WLAN o hotspot con la Installer App e successivamente eseguire un aggiornamento del firmware.

Soluzione 2: portare la stazione online tramite WLAN o hotspot senza la Installer App e successivamente eseguire un aggiornamento del firmware. (Non è possibile con alcuni modelli di smartphone)

Soluzione 3: inviate la stazione di ricarica Pico a smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. Eseguiamo un aggiornamento del firmware e vi rispediamo la Pico. Vi preghiamo di aggiungere RMA-Pico-4G all'indirizzo per una risoluzione più rapida del problema. Con questa procedura i dati di configurazione non vengono persi. Se ci inviate una pico, vi preghiamo di inviare il numero di tracking della posta a [support@smart-me.com](mailto:support@smart-me.com).

Soluzione 4: compilate un RMA e vi invieremo in anticipo una Pico equivalente. Nel formulario utilizzate la descrizione dell'errore "Pico Offline 4G". [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformulare). Con questa procedura la nuova Pico deve essere riconfigurata.



### Descrizione della soluzione 1: portare la stazione online tramite WLAN o hotspot con la Installer App e successivamente eseguire un aggiornamento del firmware.

Condizioni quadro

- Consigliamo di far eseguire questi passaggi da un partner smart-me.

- Sul posto deve essere creata una rete WLAN temporanea. (ad es. WLAN, router LTE o hotspot dello smartphone).

- Per l'installazione è necessario uno smartphone. Se con lo smartphone viene creato un hotspot per l'installazione, sono necessari due smartphone.

- I dati di accesso al conto devono essere noti, poiché il collegamento del dispositivo deve necessariamente essere stabilito con l'account smart-me esistente.

- L'installazione deve avvenire con la smart-me Installer App. [Istruzioni Installer App](/konfiguration/installer-app-anleitung)

- Deve essere disponibile una carta RFID per attivare la modalità di installazione.

- Deve essere possibile togliere la tensione alla stazione di ricarica. Tramite i fusibili oppure svitandola brevemente.


Procedura

Collegare la Pico alla rete WLAN temporanea.

- Mettere a disposizione una rete WLAN temporanea. La rete WLAN temporanea non può contenere caratteri come ä, ö, ü e $. Caratteri come da a a z e da A a Z, da 0 a 9, -, \_ o uno spazio sono ammessi senza problemi.

    - Caratteri ammessi: la SSID supporta solo caratteri ASCII, escluso il carattere $. [Link a Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)

    - Informazione sull'hotspot IOS: con IOS l'hotspot viene creato con il nome dello smartphone. Se il nome dello smartphone viene modificato, cambia anche il nome dell'hotspot.

- Per poter eseguire un'installazione, alla stazione di ricarica deve essere tolta la tensione. Il collegamento con la rete WLAN temporanea deve poi avvenire entro 15 minuti, altrimenti la modalità di installazione non è più attiva.

- Se dopo aver tolto la tensione la stazione rimane nera per almeno 5 minuti o rimane bloccata su HI, deve essere compilato un RMA. Vedi soluzione 4.

- Importante per il passaggio successivo: l'installazione deve avvenire nel conto in cui la Pico è attualmente offline.

- Eseguire l'installazione con la smart-me Installer App. [Istruzioni Installer App](/konfiguration/installer-app-anleitung).

    - Se al passaggio 5 la SSID non compare, ma appare ad es. &lt;&lt;unknown>>, occorre attivare la localizzazione e l'app deve potervi accedere.

    - Se al passaggio 6 l'app non reagisce correttamente, nelle autorizzazioni deve essere attivata esplicitamente la fotocamera nelle impostazioni.

    - Se l'app è stata installata di nuovo, a volte la prima volta può non funzionare: in tal caso chiudere l'app e riaprirla.

- Dopo l'installazione la stazione dovrebbe essere di nuovo online.


Eseguire l'aggiornamento della Pico.

- Accedere alla piattaforma smart-me con un browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login)

- Aprire il link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Cercare la stazione ed eseguire l'"update communication". Quando è installata la versione più recente, questa è la 0.0.36 o la 0.0.37

- Lasciare la finestra aperta per seguire l'avanzamento.

- Attendere fino al completamento, può durare fino a 30 minuti.

- Quando le installazioni sulle pico sono terminate, la rete WLAN temporanea può essere disattivata e le stazioni di ricarica si ricollegano al 4G entro 5 minuti


Procedura con più stazioni nello stesso luogo

- Limitazione con l'hotspot dello smartphone: la maggior parte degli smartphone supporta solo 5 dispositivi collegati contemporaneamente allo smartphone. Un'installazione con un hotspot dello smartphone è quindi possibile solo con max. 5 dispositivi contemporaneamente.

- Come primo passo è quindi meglio collegare tutte le stazioni alla rete WLAN temporanea


- Come secondo passo è quindi meglio aprire più volte il link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) per l'aggiornamento della Pico, in modo da eseguire gli aggiornamenti contemporaneamente.


### Descrizione della soluzione 2: portare la stazione online tramite WLAN o hotspot senza la Installer App e successivamente eseguire un aggiornamento del firmware.

Per chi la soluzione 2 è migliore della soluzione 1.

- Per persone tecnicamente esperte è, a seconda dei casi, un po' più rapida.

- Se non siete sicuri, utilizzate la soluzione 1.


Condizioni quadro

- Consigliamo di far eseguire questi passaggi da un partner smart-me.

- Sul posto deve essere creata una rete WLAN temporanea. (ad es. WLAN, router LTE o hotspot dello smartphone).

- Per l'installazione è necessario uno smartphone. Se con lo smartphone viene creato un hotspot per l'installazione, sono necessari due smartphone.

- I dati di accesso al conto devono essere noti.

- Deve essere disponibile una carta RFID per attivare la modalità di installazione.

- Deve essere possibile togliere la tensione alla stazione di ricarica. Tramite i fusibili oppure svitandola brevemente.


Procedura

Scrivere la connessione WLAN sulla Pico.

- Mettere a disposizione una rete WLAN temporanea. (Può anche essere messa a disposizione solo all'ultimo passaggio prima dell'aggiornamento, se è disponibile un solo smartphone) La rete WLAN temporanea non può contenere caratteri come ä, ö, ü e $. Caratteri come da a a z e da A a Z, da 0 a 9, -, \_ o uno spazio sono ammessi senza problemi.

    - Caratteri ammessi: la SSID supporta solo caratteri ASCII, escluso il carattere $. Link a Wikipedia

    - Informazione sull'hotspot IOS: con IOS l'hotspot viene creato con il nome dello smartphone. Se il nome dello smartphone viene modificato, cambia anche il nome dell'hotspot.

- Per poter eseguire un'installazione, alla stazione di ricarica deve essere tolta la tensione. Il collegamento con la rete WLAN temporanea deve poi avvenire entro 15 minuti, altrimenti la modalità di installazione non è più attiva.

- Se dopo aver tolto la tensione la stazione rimane nera per almeno 5 minuti o rimane bloccata su HI, deve essere compilato un RMA. Vedi soluzione 4.

- Avvicinare la carta RFID affinché si avvii la modalità di installazione.

- Collegarsi alla rete WLAN della Pico, ad es. smart-me\_7002222

- Attendere 30 secondi e verificare se sullo smartphone compare un pop up con cui va confermato di mantenere la connessione, anche se questa connessione non dispone di un collegamento a Internet.

- Andare con il browser su 192.198.1.1.

    - Con alcuni smartphone per questo passaggio il 4G deve essere disattivato.

- Inserire SSID e password

- Selezionare Add Profile

- Selezionare Reboot

- Dopo la configurazione la stazione dovrebbe tornare online.


Eseguire l'aggiornamento della Pico.

- Accedere alla piattaforma smart-me con un browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login)

- Aprire il link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Cercare la stazione ed eseguire l'"update communication". Quando è installata la versione più recente, questa è la 0.0.36 o la 0.0.37

- Lasciare la finestra aperta per seguire l'avanzamento.

- Attendere fino al completamento, può durare fino a 30 minuti.

- Quando le installazioni sulle pico sono terminate, la rete WLAN temporanea può essere disattivata e le stazioni di ricarica si ricollegano al 4G entro 5 minuti


Procedura con più stazioni nello stesso luogo

- Limitazione con l'hotspot dello smartphone: la maggior parte degli smartphone supporta solo 5 dispositivi collegati contemporaneamente allo smartphone. Un'installazione con un hotspot dello smartphone è quindi possibile solo con max. 5 dispositivi contemporaneamente.

- Come primo passo è quindi meglio collegare tutte le stazioni alla rete WLAN temporanea


- Come secondo passo è quindi meglio aprire più volte il link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) per l'aggiornamento della Pico, in modo da eseguire gli aggiornamenti contemporaneamente.
