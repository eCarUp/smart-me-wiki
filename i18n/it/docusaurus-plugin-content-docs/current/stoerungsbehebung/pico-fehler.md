---
title: 'Errori della Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'Questa pagina spiega gli errori noti della Pico.'
sidebar_label: 'Errori della Pico'
---
Questa pagina spiega gli errori noti della Pico.

### L'RFID non viene riconosciuto.



Significato: 

- Durante la scansione dell'RFID non vengono visualizzati né il codice QR né il logo RFID.




Possibili cause:

- La carta RFID è difettosa

- La Pico presenta un errore




Misura:

- Riavviare la Pico. Se il riavvio ha risolto il problema, Le saremmo grati se ce lo segnalasse con un'e-mail a [support@smart-me.com](mailto:support@smart-me.com). Indichi la data dell'evento e il numero di serie della Pico.

- Provare con una nuova carta RFID


### Potenza di ricarica ridotta

Se la Pico eroga meno potenza di quanto dovrebbe, è possibile che una fase non sia collegata correttamente o che sia scattato un fusibile. Cliccando su "Normale" ("Normal") è possibile visualizzare le tensioni e le correnti, come per i contatori elettrici.

### Schermo nero (nessuna visualizzazione)



Significato: 

- Lo schermo della Pico non visualizza nulla. 

Possibili cause:

- La Pico non è alimentata

- È scattato l'interruttore differenziale (FI)

- La Pico presenta un errore nel software locale

Misura:

- Se la Pico è offline

    - Passo 1: togliere l'alimentazione e riaccendere.

    - Passo 2: verificare se è installata la Application Version 1.xx ([Verificare la versione hardware](https://webforms.smart-me.com/connect/deviceoverview.aspx)); in caso affermativo, [compilare l'RMA](/rma-antragsformular-schweiz) con la descrizione dell'errore: Schermo nero con Application Version 1.xx

    - Passo 3: se non aiuta, rivolgersi al supporto.

- Se la Pico è online, può essere riavviata tramite il portale smart-me. (Selezionare la Pico / rotella dentata in alto a destra / Azioni avanzate ("Erweiterte Aktionen") / Riavvio ("Neustart"))

- Se scatta l'interruttore differenziale (FI), può trattarsi di un caso isolato. Se dovesse verificarsi più spesso, La preghiamo di contattarci. Fanno eccezione la "IONIQ 5" e la "Zoé": con queste auto, in casi isolati, l'interruttore differenziale (FI) scatta alla fine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo farci nulla.

![Errori della Pico – figura 1](/img/stoerungsbehebung-pico-fehler/01.png)

### L'auto è collegata e la stazione di ricarica non reagisce

Quando si collega un'auto, normalmente con 

- Authentication None 

    - l'immagine di standby dovrebbe scomparire e dovrebbe apparire una sequenza con l'avvio della ricarica

- Authentication eCarUp Backend 

    - dovrebbe comparire l'immagine con "Auth RFID App".


Se ciò non avviene, procedere come segue

- Sull'auto, verificare che il cavo sia inserito correttamente.

- Sulla Pico, assicurarsi che il cavo sia inserito fino in fondo.


Se continua a non reagire, il gestore della stazione deve verificare se alla stazione è collegato un cavo fisso.

- In tal caso, assicurarsi che nel portale smart-me sia attivata l'opzione "Cavo sempre bloccato" ("Kabel immer fest verriegelt"). 

- In caso contrario, eseguire questa operazione.


![Errori della Pico – figura 2](/img/stoerungsbehebung-pico-fehler/02.png)

### Warn RDC



Cavo o auto (nella maggior parte dei casi)



Significato: 

- Problema con il sensore RDC (residual current device). L'RCD è un dispositivo di protezione delle persone nell'impianto elettrico.




Possibili cause:

- Un cavo di ricarica umido collegato in modo fisso.

- Un cavo di ricarica che durante la notte si è congelato e poi scongelato.

- Difetto del cavo o dell'auto. Lo si può verificare facendo ricaricare un'altra auto alla stazione oppure facendo ricaricare l'auto che causa l'errore a un'altra Pico.

- Difetto dell'elettronica della Pico, ad esempio danni causati dall'acqua.




Misura:

- Quando l'errore si è verificato, la stazione deve essere riavviata per resettare l'errore.


![Errori della Pico – figura 3](/img/stoerungsbehebung-pico-fehler/03_EN.png)

### Cable Lock Error

Significato: 

- Questo errore compare quando il cavo non può essere bloccato (ad esempio se la spina non è inserita correttamente).


Misura: 

- Riavvii la Pico una volta, tramite il cloud oppure localmente. In questo modo il sensore del blocco del cavo viene ricalibrato.

- Nella maggior parte dei casi basta anche inserire correttamente il cavo (con un po' di forza) e riprovare.


Visualizzazione nel portale

- Blocco del cavo non riuscito ("Kabelverriegelung fehlgeschlagen")


![Errori della Pico – figura 4](/img/stoerungsbehebung-pico-fehler/04.png)

![Errori della Pico – figura 5](/img/stoerungsbehebung-pico-fehler/05.png)

### Error 1



Significato: 

- Non è stato trovato alcun modulo WiFi




Misura: 

- Se un riavvio non porta al risultato desiderato, occorre compilare un RMA. Descrizione dell'errore: Error 1


![Errori della Pico – figura 6](/img/stoerungsbehebung-pico-fehler/06.png)

### Error 2



Significato:  

- Errore di comunicazione interno




Misura: 

- Se un riavvio non porta al risultato desiderato, occorre compilare un RMA. Descrizione dell'errore: Error 2


![Errori della Pico – figura 7](/img/stoerungsbehebung-pico-fehler/07.png)

### Error 3



Significato:  

- Un errore del misuratore di corrente MID




Misura: 

- Se un riavvio non porta al risultato desiderato, occorre compilare un RMA. Descrizione dell'errore: Error 3


![Errori della Pico – figura 8](/img/stoerungsbehebung-pico-fehler/08.png)

### Error 4



Significato:  

- Il test RCD sulla Pico non è riuscito.




Misura:

- Vedere WARN RDC


![Errori della Pico – figura 9](/img/stoerungsbehebung-pico-fehler/09.png)

### P-Limit

Significato:

- Tensione troppo bassa &lt;200V

- Distacco del carico attivo: potenza limitata


![Errori della Pico – figura 10](/img/stoerungsbehebung-pico-fehler/10_EN.png)

### Diode Error



Possibili cause:

- Il cavo di ricarica è difettoso


Misura:

- Sostituire / verificare il cavo di ricarica

- Sulla Pico non è necessaria alcuna misura. Dopo 30 secondi può essere utilizzata di nuovo normalmente.

- Verificare che sulla Pico sia installata almeno la versione 0.0.42. [Aggiornamento del firmware](/konfiguration/firmware-update) 


![Errori della Pico – figura 11](/img/stoerungsbehebung-pico-fehler/11.png)

### L'auto non si ricarica (la barra è larga un solo pixel ed è rossa)

Visualizzazione:

- La barra inferiore è larga un solo pixel ed è rossa


Significato: 

- La stazione di ricarica non rilascia corrente.


Possibili cause:

- La gestione della ricarica non può rilasciare corrente alla stazione perché una Pico è sovraccarica.

- La Pico nel gruppo di ricarica non riesce a comunicare tramite la rete mesh con le altre Pico dello stesso gruppo di ricarica.


Misure:

- Verifichi che i nodi abbiano corrente sufficiente.

- Per un'analisi più approfondita, La preghiamo di chiamare il supporto.


### Temperatura elevata



Temperatura elevata



Significato: 

- L'elevata temperatura interna della Pico fa sì che la potenza di ricarica massima venga ridotta.




Possibili cause:

- Irraggiamento solare diretto: l'apparecchio è probabilmente esposto alla luce solare diretta, il che provoca un riscaldamento eccessivo.




Misura:

- Eseguire un aggiornamento del firmware se la versione è inferiore a 0.0.29.

- La luminosità del display della Pico dovrebbe essere impostata al minimo. È la misura più efficace, perché in questo modo viene generata meno energia direttamente all'interno dell'involucro.


Problemi specifici delle auto

- Hyundai Ioniq 5: con questa auto, in casi isolati, l'interruttore differenziale (FI) scatta alla fine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo farci nulla, perché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Zoé: i modelli più vecchi devono essere configurati con una corrente di avvio di 10A, perché con 6A non avviano la ricarica. Un test ha dimostrato che con un cavo di ricarica monofase la ricarica si avvia anche quando sono disponibili solo 6A di corrente di avvio. Con questa auto, in casi isolati, l'interruttore differenziale (FI) scatta alla fine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo farci nulla, perché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Renault Kangoo Electric: avvia la ricarica solo a partire da 8A

- Skoda Enyaq: in alcuni casi possono passare fino a 1min 30sec prima che la sessione di ricarica si avvii. Disattivare l'opzione alternativa Car-ID.

- Audi Q4: la ricarica non si avvia. 

    - Soluzione 1: secondo le prime esperienze del 23.01.2026, il problema potrebbe essere risolto anche con il software Audi più recente. 

    - Soluzione 2: installare sulla Pico almeno la versione 0.0.33 e disattivare la car-id.

- Dacia Spring: la ricarica non si avvia. Soluzione: installare la versione 0.0.33 e disattivare la car-id sulla Pico.

- Hyundai Ioniq: l'auto si avvia solo se prima si avvicina la carta RFID e poi si avvia la ricarica. In alternativa occorre disattivare la Car-ID.

- Leapmotor / T03: non gestisce correttamente la commutazione delle fasi. Se dopo un minuto la ricarica viene interrotta dall'auto, occorre aprire e richiudere più volte la portiera dell'auto.

- Subaru Solterra: avvia la ricarica solo a partire da 8A e con la Car-ID disattivata

- Mazda MX-30: avvia la ricarica solo se la Car-ID è disattivata.

- Honda E:ny1: avvia la ricarica solo a partire da 8A.

- dongfeng box: non gestisce correttamente la commutazione delle fasi. Se dopo un minuto la ricarica viene interrotta dall'auto, occorre sbloccare la portiera dopo 7 minuti; a quel punto l'auto riprende a ricaricare.
