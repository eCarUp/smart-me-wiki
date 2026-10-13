---
title: 'Interruzione della comunicazione Pico tramite 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Aggiornamento sullo stato 16.01.2026 14h45'
sidebar_label: 'Interruzione della comunicazione Pico tramite 4G'
---
## Aggiornamento sullo stato 16.01.2026 14h45

Purtroppo dobbiamo comunicarLe che alcune stazioni di ricarica sono ancora interessate dal guasto delle SIM 1nce (fornitore delle schede).

Poiché non è realistico che il fornitore esterno risolva il guasto, abbiamo agito in modo proattivo per metterLe a disposizione una soluzione affidabile.

Esiste una piccola possibilità che la stazione di ricarica torni online durante la notte, cioè a partire dal 17.01.2025 6h00. Non è chiaro quanto sia alta questa probabilità; secondo le conoscenze attuali è considerata bassa.

## Soluzione del problema

Quando va applicata

Se la stazione è ancora offline e non è collegata a una rete WLAN temporanea.

Soluzione 1: portare online la stazione tramite WLAN o hotspot con la Installer App e poi eseguire un aggiornamento del firmware.

Soluzione 2: portare online la stazione tramite WLAN o hotspot senza la Installer App e poi eseguire un aggiornamento del firmware. (Non è possibile con alcuni modelli di smartphone)

Soluzione 3: invii la stazione di ricarica Pico a smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. Eseguiamo un aggiornamento del firmware e Le rispediamo la Pico. Per una risoluzione più rapida del problema, aggiunga RMA-Pico-4G all'indirizzo. Con questa procedura i dati di configurazione non vanno persi. Se ci invia una Pico, invii il numero di tracking della Posta a [support@smart-me.com](mailto:support@smart-me.com).

Soluzione 4: compili un modulo RMA e Le invieremo in anticipo una Pico equivalente. Nel modulo utilizzi la descrizione dell'errore "Pico Offline 4G". [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformulare). Con questa procedura la nuova Pico deve essere configurata di nuovo.



### Descrizione della soluzione 1: portare online la stazione tramite WLAN o hotspot con la Installer App e poi eseguire un aggiornamento del firmware.

Condizioni quadro

- Raccomandiamo di far eseguire questi passaggi da un partner smart-me.

- Sul posto deve essere creata una rete WLAN temporanea. (ad es. WLAN, router LTE o hotspot dello smartphone).

- Per l'installazione è necessario uno smartphone. Se per l'installazione viene creato un hotspot con lo smartphone, sono necessari due smartphone.

- I dati di accesso all'account devono essere noti, poiché il dispositivo deve obbligatoriamente essere collegato all'account smart-me esistente.

- L'installazione deve essere eseguita con la smart-me Installer App. [Istruzioni Installer App](/konfiguration/installer-app-anleitung)

- Deve essere disponibile una scheda RFID per attivare la modalità di installazione.

- Deve essere possibile mettere la stazione di ricarica senza tensione, tramite i fusibili oppure svitandola brevemente.


Procedura

Collegare la Pico alla WLAN temporanea.

- Mettere a disposizione una WLAN temporanea. Il nome della WLAN temporanea non deve contenere caratteri come ä, ö, ü e $. Caratteri come da a a z e da A a Z, da 0 a 9, -, \_ o uno spazio sono consentiti senza problemi.

    - Caratteri consentiti: l'SSID supporta solo caratteri ASCII, escluso il carattere $. [Link a Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)

    - Info sull'hotspot iOS: con iOS l'hotspot viene creato con il nome dello smartphone. Se si modifica il nome dello smartphone, cambia anche il nome dell'hotspot.

- Per poter eseguire un'installazione, la stazione di ricarica deve essere messa senza tensione. Il collegamento alla WLAN temporanea deve poi avvenire entro 15 minuti, altrimenti la modalità di installazione non è più attiva.

- Se, dopo essere stata messa senza tensione, la stazione rimane nera per almeno 5 minuti o resta bloccata su HI, occorre compilare un modulo RMA. Vedere la soluzione 4.

- Importante per il passaggio successivo: l'installazione deve essere eseguita nell'account in cui la Pico risulta attualmente offline.

- Eseguire l'installazione con la smart-me Installer App. [Istruzioni Installer App](/konfiguration/installer-app-anleitung).

    - Se al passaggio 5 non appare l'SSID ma ad es. &lt;&lt;unknown>>, occorre attivare la localizzazione e l'app deve potervi accedere.

    - Se al passaggio 6 l'app non reagisce correttamente, occorre attivare esplicitamente l'autorizzazione per la fotocamera nelle impostazioni.

    - Se l'app è stata appena reinstallata, a volte al primo tentativo non funziona; in tal caso chiudere l'app e riaprirla.

- Dopo l'installazione la stazione dovrebbe essere di nuovo online.


Eseguire l'aggiornamento della Pico.

- Accedere alla piattaforma smart-me con un browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login)

- Aprire il link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Cercare la stazione ed eseguire "update communication". Quando è installata la versione più recente, questa è 0.0.36 o 0.0.37

- Lasciare la finestra aperta per seguire l'avanzamento.

- Attendere il completamento, che può richiedere fino a 30 minuti.

- Quando le installazioni sulle Pico sono terminate, la WLAN temporanea può essere disattivata e le stazioni di ricarica si ricollegano al 4G entro 5 minuti.


Procedura in caso di più stazioni nella stessa ubicazione

- Limitazione con l'hotspot dello smartphone: la maggior parte degli smartphone supporta solo 5 dispositivi collegati contemporaneamente. Un'installazione con l'hotspot dello smartphone è quindi possibile solo con al massimo 5 dispositivi contemporaneamente.

- In tal caso è meglio collegare innanzitutto tutte le stazioni alla WLAN temporanea


- Poi, come secondo passaggio per l'aggiornamento della Pico, è meglio aprire più volte il link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) per eseguire gli aggiornamenti contemporaneamente.


### Descrizione della soluzione 2: portare online la stazione tramite WLAN o hotspot senza la Installer App e poi eseguire un aggiornamento del firmware.

Per chi la soluzione 2 è migliore della soluzione 1.

- Per persone tecnicamente esperte può essere, a seconda dei casi, un po' più rapida.

- In caso di dubbio, utilizzi la soluzione 1.


Condizioni quadro

- Raccomandiamo di far eseguire questi passaggi da un partner smart-me.

- Sul posto deve essere creata una rete WLAN temporanea. (ad es. WLAN, router LTE o hotspot dello smartphone).

- Per l'installazione è necessario uno smartphone. Se per l'installazione viene creato un hotspot con lo smartphone, sono necessari due smartphone.

- I dati di accesso all'account devono essere noti.

- Deve essere disponibile una scheda RFID per attivare la modalità di installazione.

- Deve essere possibile mettere la stazione di ricarica senza tensione, tramite i fusibili oppure svitandola brevemente.


Procedura

Scrivere la connessione WLAN sulla Pico.

- Mettere a disposizione una WLAN temporanea. (Se è disponibile un solo smartphone, può essere messa a disposizione anche solo all'ultimo passaggio prima dell'aggiornamento) Il nome della WLAN temporanea non deve contenere caratteri come ä, ö, ü e $. Caratteri come da a a z e da A a Z, da 0 a 9, -, \_ o uno spazio sono consentiti senza problemi.

    - Caratteri consentiti: l'SSID supporta solo caratteri ASCII, escluso il carattere $. Link a Wikipedia

    - Info sull'hotspot iOS: con iOS l'hotspot viene creato con il nome dello smartphone. Se si modifica il nome dello smartphone, cambia anche il nome dell'hotspot.

- Per poter eseguire un'installazione, la stazione di ricarica deve essere messa senza tensione. Il collegamento alla WLAN temporanea deve poi avvenire entro 15 minuti, altrimenti la modalità di installazione non è più attiva.

- Se, dopo essere stata messa senza tensione, la stazione rimane nera per almeno 5 minuti o resta bloccata su HI, occorre compilare un modulo RMA. Vedere la soluzione 4.

- Avvicinare la scheda RFID per avviare la modalità di installazione.

- Collegarsi alla WLAN della Pico, ad es. smart-me\_7002222

- Attendere 30 secondi e verificare se sullo smartphone appare un pop-up in cui occorre confermare di mantenere la connessione anche se questa non dispone di accesso a Internet.

- Con il browser aprire 192.198.1.1.

    - Con alcuni smartphone, per questo passaggio il 4G deve essere disattivato.

- Inserire SSID e password

- Selezionare Add Profile

- Selezionare Reboot

- Dopo la configurazione la stazione dovrebbe tornare online.


Eseguire l'aggiornamento della Pico.

- Accedere alla piattaforma smart-me con un browser: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login)

- Aprire il link [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Cercare la stazione ed eseguire "update communication". Quando è installata la versione più recente, questa è 0.0.36 o 0.0.37

- Lasciare la finestra aperta per seguire l'avanzamento.

- Attendere il completamento, che può richiedere fino a 30 minuti.

- Quando le installazioni sulle Pico sono terminate, la WLAN temporanea può essere disattivata e le stazioni di ricarica si ricollegano al 4G entro 5 minuti.


Procedura in caso di più stazioni nella stessa ubicazione

- Limitazione con l'hotspot dello smartphone: la maggior parte degli smartphone supporta solo 5 dispositivi collegati contemporaneamente. Un'installazione con l'hotspot dello smartphone è quindi possibile solo con al massimo 5 dispositivi contemporaneamente.

- In tal caso è meglio collegare innanzitutto tutte le stazioni alla WLAN temporanea


- Poi, come secondo passaggio per l'aggiornamento della Pico, è meglio aprire più volte il link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) per eseguire gli aggiornamenti contemporaneamente.
