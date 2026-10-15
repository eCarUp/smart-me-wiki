---
title: 'Errori Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'In questa pagina vengono illustrati gli errori noti della Pico.'
sidebar_label: 'Errori Pico'
---
In questa pagina vengono illustrati gli errori noti della Pico.

### L'RFID non viene riconosciuto.



Significato: 

- Durante la scansione dell'RFID non viene visualizzato né il codice QR né il logo RFID.




Possibili cause:

- La tessera RFID è difettosa

- La Pico presenta un errore




Rimedio:

- Riavviare la Pico. Se il riavvio ha risolto il problema, Le saremmo grati se ci inviasse un'e-mail a [support@smart-me.com](mailto:support@smart-me.com). Indicare la data dell'evento e il numero di serie della Pico.

- Provare con una nuova tessera RFID


### Potenza di ricarica ridotta

Se la Pico eroga meno potenza di quanto dovrebbe, è possibile che una fase non sia collegata correttamente o che sia scattato un fusibile. Cliccando su "Normale" ("Normal") è possibile visualizzare le tensioni e le correnti, in modo analogo ai contatori elettrici.

### Schermo nero (nessuna visualizzazione)



Significato: 

- Lo schermo della Pico non visualizza nulla. 

Possibili cause:

- La Pico non è alimentata

- È scattato l'interruttore differenziale (FI)

- La Pico presenta un errore nel software locale

Rimedio:

- Se la Pico è offline

    - Passo 1: togliere l'alimentazione e riaccendere.

    - Passo 2: verificare se la Application Version è 1.xx ([Verificare la versione hardware](https://webforms.smart-me.com/connect/deviceoverview.aspx)); in caso affermativo, [compilare l'RMA](/rma-antragsformulare) con la descrizione dell'errore: Schermo nero con Application Version 1.xx

    - Passo 3: se non è d'aiuto, rivolgersi al supporto.

- Se la Pico è online, può essere riavviata tramite il portale smart-me. (Selezionare la Pico / icona dell'ingranaggio in alto a destra / Azioni avanzate ("Erweiterte Aktionen") / Riavvio ("Neustart"))

- Se scatta l'interruttore differenziale (FI), può trattarsi di un caso isolato. Se dovesse verificarsi più spesso, La preghiamo di contattarci. Fanno eccezione la "IONIQ 5" e la "Zoé": con queste auto, in casi isolati, l'interruttore differenziale scatta al termine della sessione di ricarica; in qualità di produttori di stazioni di ricarica non possiamo farci nulla.

![Errori Pico – Figura 1](/img/stoerungsbehebung-pico-fehler/01.png)

### L'auto è collegata e la stazione di ricarica non reagisce

Quando si collega un'auto, normalmente con 

- Authentication None 

    - l'immagine di standby dovrebbe scomparire e dovrebbe apparire una sequenza con l'avvio della ricarica

- Authentication eCarUp Backend 

    - dovrebbe apparire l'immagine con "Auth RFID App".


Se ciò non avviene, procedere come segue

- Verificare sull'auto che il cavo sia inserito correttamente.

- Sulla Pico, assicurarsi che il cavo sia inserito fino in fondo.


Se continua a non reagire, il gestore della stazione deve verificare se alla stazione è collegato un cavo fisso.

- In caso affermativo, assicurarsi che nel portale smart-me sia attivata l'opzione "Cavo sempre bloccato" ("Kabel immer fest verriegelt"). 

- In caso negativo, eseguire questa operazione.


![Errori Pico – Figura 2](/img/stoerungsbehebung-pico-fehler/02.png)

### Warn RDC



Cavo o auto (nella maggior parte dei casi)



Significato: 

- Problema con il sensore RDC (residual current device). L'RCD è un dispositivo di protezione delle persone nell'impianto elettrico.




Possibili cause:

- Un cavo di ricarica umido collegato in modo fisso.

- Un cavo di ricarica che durante la notte si è congelato e poi scongelato.

- Difetto del cavo o dell'auto. È possibile verificarlo facendo ricaricare un'altra auto alla stazione o facendo ricaricare l'auto che causa l'errore a un'altra Pico.

- Difetto dell'elettronica della Pico, ad es. danni causati dall'acqua.




Rimedio:

- Quando l'errore si è verificato, la stazione deve essere riavviata per resettare l'errore.


![Errori Pico – Figura 3](/img/stoerungsbehebung-pico-fehler/03.png)

### Cable Lock Error

Significato: 

- Questo errore si verifica quando il cavo non può essere bloccato (ad es. se la spina non è inserita correttamente).


Rimedio: 

- Riavviare una volta la Pico, tramite il cloud oppure localmente. In questo modo il sensore del blocco del cavo viene ricalibrato.

- Nella maggior parte dei casi è sufficiente anche inserire correttamente il cavo (con un po' di forza) e riprovare.


Visualizzazione nel portale

- Blocco del cavo non riuscito ("Kabelverriegelung fehlgeschlagen")


![Errori Pico – Figura 4](/img/stoerungsbehebung-pico-fehler/04.png)

![Errori Pico – Figura 5](/img/stoerungsbehebung-pico-fehler/05.png)

### Error 1



Significato: 

- Non è stato trovato alcun modulo WiFi




Rimedio: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 1


![Errori Pico – Figura 6](/img/stoerungsbehebung-pico-fehler/06.png)

### Error 2



Significato:  

- Errore di comunicazione interno




Rimedio: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 2


![Errori Pico – Figura 7](/img/stoerungsbehebung-pico-fehler/07.png)

### Error 3



Significato:  

- Un errore del misuratore di energia MID




Rimedio: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 3


![Errori Pico – Figura 8](/img/stoerungsbehebung-pico-fehler/08.png)

### Error 4



Significato:  

- Il test RCD della Pico non è riuscito.




Rimedio:

- Vedere WARN RDC


![Errori Pico – Figura 9](/img/stoerungsbehebung-pico-fehler/09.png)

### P-Limit

Significato:

- Tensione troppo bassa &lt;200V

- Distacco del carico attivo: potenza limitata


![Errori Pico – Figura 10](/img/stoerungsbehebung-pico-fehler/10.png)

### Diode Error



Possibili cause:

- Il cavo di ricarica è difettoso


Rimedio:

- Sostituire / verificare il cavo di ricarica

- Sulla Pico non è necessario alcun intervento. Dopo 30 secondi può essere nuovamente utilizzata normalmente.

- Verificare che sulla Pico sia installata almeno la versione 0.0.42. [Aggiornamento del firmware](/konfiguration/firmware-update) 


![Errori Pico – Figura 11](/img/stoerungsbehebung-pico-fehler/11.png)

### L'auto non si ricarica (la barra è larga un solo pixel ed è rossa)

Visualizzazione:

- La barra inferiore è larga un solo pixel ed è rossa


Significato : 

- La stazione di ricarica non rilascia corrente.


Possibili cause :

- La gestione della ricarica non può rilasciare corrente alla stazione perché una Pico è sovraccarica.

- La Pico nel gruppo di ricarica non riesce a comunicare tramite la rete mesh con le altre Pico dello stesso gruppo di ricarica.


Rimedi:

- Verificare che i nodi dispongano di corrente sufficiente.

- Per un'analisi più approfondita, contattare telefonicamente il supporto.


### Temperatura elevata



Temperatura elevata



Significato: 

- L'elevata temperatura interna della Pico fa sì che la potenza di ricarica massima venga ridotta.




Possibili cause:

- Irraggiamento solare diretto: il dispositivo è probabilmente esposto alla luce solare diretta, il che provoca un eccessivo sviluppo di calore.




Rimedio:

- Eseguire l'aggiornamento del firmware se la versione è inferiore a 0.0.29.

- La luminosità del display della Pico dovrebbe essere impostata al minimo. Questo ha l'effetto maggiore, poiché in tal modo si genera meno energia direttamente all'interno dell'involucro.


Problemi specifici delle auto

- Hyundai Ioniq 5: con quest'auto, in casi isolati, l'interruttore differenziale scatta al termine della sessione di ricarica; in qualità di produttori di stazioni di ricarica non possiamo farci nulla, poiché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Zoé: i modelli più vecchi devono essere configurati con una corrente di avvio di 10A, poiché con 6A non avviano la ricarica. Un test ha dimostrato che con un cavo di ricarica monofase la ricarica si avvia anche quando sono disponibili solo 6A di corrente di avvio. Con quest'auto, in casi isolati, l'interruttore differenziale scatta al termine della sessione di ricarica; in qualità di produttori di stazioni di ricarica non possiamo farci nulla, poiché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Renault Kangoo Electric: avvia la ricarica solo a partire da 8A

- Skoda Enyaq: in alcuni casi possono essere necessari fino a 1min 30sec prima che la sessione di ricarica si avvii. In alternativa, disattivare la Car-ID.

- Audi Q4: la ricarica non si avvia. 

    - Soluzione 1: secondo le prime esperienze del 23.01.2026, il problema potrebbe essere risolto anche con il software Audi più recente. 

    - Soluzione 2: installare almeno la versione 0.0.33 sulla Pico e disattivare la car-id.

- Dacia Spring: la ricarica non si avvia. Soluzione: installare la versione 0.0.33 e disattivare la car-id sulla Pico.

- Hyundai Ioniq: l'auto si avvia solo se prima si avvicina la tessera RFID e poi si avvia la ricarica. In alternativa è necessario disattivare la Car-ID.

- Leapmotor / T03: non gestisce correttamente la commutazione di fase. Se la ricarica viene interrotta dall'auto dopo un minuto, è necessario aprire e richiudere più volte la portiera dell'auto.

- Subaru Solterra: avvia la ricarica solo a partire da 8A e con la Car-ID disattivata

- Mazda MX-30: avvia la ricarica solo se la Car-ID è disattivata.

- Honda E:ny1: avvia la ricarica solo a partire da 8A.

- dongfeng box: non gestisce correttamente la commutazione di fase. Se la ricarica viene interrotta dall'auto dopo un minuto, dopo 7 minuti è necessario sbloccare la portiera; a quel punto l'auto riprende a ricaricare.
