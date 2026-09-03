---
title: 'Errori Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'Questa pagina illustra gli errori Pico noti.'
sidebar_label: 'Errori Pico'
---
Questa pagina illustra gli errori Pico noti.

### RFID non viene riconosciuto



Significato: 

- Durante la scansione dell'RFID non viene visualizzato né il codice QR né il logo RFID.




Possibili cause:

- La carta RFID è difettosa

- La Pico presenta un errore




Provvedimento:

- Riavviare la Pico. Se il riavvio ha risolto il problema, saremmo grati di ricevere un'e-mail a [support@smart-me.com](mailto:support@smart-me.com). Indicare la data dell'evento e il numero di serie della Pico.

- Provare con una nuova carta RFID


### Potenza di ricarica ridotta

Se la Pico erogа meno potenza di quanto dovrebbe, è possibile che una fase non sia collegata correttamente o che sia scattato un fusibile. Cliccando su "Normale" ("Normal") è possibile visualizzare tensioni e correnti, in modo analogo ai contatori elettrici.

### Schermo nero (nessuna visualizzazione)



Significato: 

- Lo schermo della Pico non visualizza nulla. 




Possibili cause:

- La Pico non è alimentata

- È scattato l'interruttore differenziale

- La Pico presenta un errore nel software locale




Provvedimento:

- Se la Pico è offline

    - Passo 1: togliere l'alimentazione e riaccenderla.

    - Passo 2: verificare se la Application Version è 1.xx ([verificare la versione hardware](https://webforms.smart-me.com/connect/deviceoverview.aspx)),  se sì, [compilare un RMA](/rma-antragsformulare) con la descrizione dell'errore: schermo nero con Application Version 1.xx

    - Passo 3: se non è di aiuto, rivolgersi al supporto.

- Se la Pico è online, può essere riavviata tramite il portale smart-me. (selezionare la Pico / ingranaggio in alto a destra / Azioni avanzate ("Erweiterte Aktionen") / Riavvio ("Neustart"))

- Se scatta l'interruttore differenziale, può trattarsi di un caso isolato. Se si verifica più frequentemente, contattaci. Fanno eccezione "IONIQ 5" e "Zoé": in singoli casi queste auto fanno scattare l'interruttore differenziale al termine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo intervenire.


![Errori Pico – Figura 1](/img/stoerungsbehebung-pico-fehler/01.png)

### L'auto è collegata e la stazione di ricarica non reagisce

Quando si collega un'auto, normalmente con 

- Authentication None 

    - l'immagine di standby dovrebbe scomparire e comparire una sequenza con l'avvio della ricarica

- Authentication eCarUp Backen 

    - dovrebbe comparire l'immagine con "Auth RFID App".


Se ciò non avviene, procedere come segue

- Verificare sull'auto che il cavo sia collegato correttamente.

- Sulla Pico assicurarsi che il cavo sia inserito a fondo.


Se continua a non reagire, il gestore della stazione deve verificare se alla stazione è collegato un cavo fisso.

- Se è così, assicurarsi che nel portale smart-me sia attivata l'opzione "Cavo sempre bloccato fisso" ("Kabel immer fest verriegelt"). 

- Se non è così, procedere in tal senso.


![Errori Pico – Figura 2](/img/stoerungsbehebung-pico-fehler/02.png)

### Warn RDC



Cavo o auto (nella maggior parte dei casi)



Significato: 

- Problema con il sensore RDC (residual current device). L'RCD è un dispositivo di protezione delle persone nell'installazione elettrica.




Possibili cause:

- Un cavo di ricarica umido, collegato in modo fisso.

- Cavo di ricarica che si è congelato durante la notte e si è poi scongelato.

- Difetto del cavo o dell'auto. Lo si può verificare facendo ricaricare un'altra auto alla stazione oppure facendo ricaricare l'auto che causa l'errore a un'altra Pico.

- Difetto dell'elettronica della Pico, ad es. danni causati dall'acqua.




Provvedimento:

- Se l'errore è stato attivato, la stazione deve essere riavviata per resettare l'errore.


![Errori Pico – Figura 3](/img/stoerungsbehebung-pico-fehler/03.png)

### Cable Lock Error

Significato: 

- Questo errore compare quando il cavo non può essere bloccato (ad es. quando la spina non è inserita correttamente).


Provvedimento: 

- Riavvia una volta la Pico. Tramite il cloud oppure localmente. In questo modo il sensore del blocco del cavo viene ricalibrato.

- Nella maggior parte dei casi è anche sufficiente inserire correttamente il cavo (con un po' di forza) e riprovare.


Visualizzazione nel portale

- Blocco del cavo non riuscito ("Kabelverriegelung fehlgeschlagen")


![Errori Pico – Figura 4](/img/stoerungsbehebung-pico-fehler/04.png)

![Errori Pico – Figura 5](/img/stoerungsbehebung-pico-fehler/05.png)

### Error 1



Significato: 

- Nessun modulo WiFi trovato




Provvedimento: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 1


![Errori Pico – Figura 6](/img/stoerungsbehebung-pico-fehler/06.png)

### Error 2



Significato:  

- Errore di comunicazione interno




Provvedimento: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 2


![Errori Pico – Figura 7](/img/stoerungsbehebung-pico-fehler/07.png)

### Error 3



Significato:  

- Un errore con il dispositivo di misura della corrente MID




Provvedimento: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 3


![Errori Pico – Figura 8](/img/stoerungsbehebung-pico-fehler/08.png)

### Error 4



Significato:  

- Il test RCD sulla Pico è fallito.




Provvedimento:

- Vedi WARN RDC


![Errori Pico – Figura 9](/img/stoerungsbehebung-pico-fehler/09.png)

### P-Limit

Significato:

- Tensione troppo bassa &lt;200V

- Distacco del carico attivo: potenza limitata


![Errori Pico – Figura 10](/img/stoerungsbehebung-pico-fehler/10.png)

### Diode Error



Possibili cause:

- Il cavo di ricarica è difettoso


Provvedimento:

- Sostituire / verificare il cavo di ricarica

- Sulla Pico non è necessario alcun provvedimento. Dopo 30 secondi può essere utilizzata di nuovo del tutto normalmente.

- Verificare che sulla Pico sia installata almeno la versione 0.0.42. [Aggiornamento del firmware](/konfiguration/firmware-update) 


![Errori Pico – Figura 11](/img/stoerungsbehebung-pico-fehler/11.png)

### L'auto non ricarica (la barra è larga solo un pixel ed è rossa)

Visualizzazione:

- La barra inferiore è larga solo un pixel ed è rossa


Significato : 

- La stazione di ricarica non abilita l'erogazione di corrente.


Possibili cause :

- La gestione della ricarica non può abilitare corrente alla stazione perché una Pico è sovraccarica.

- La Pico nel gruppo di ricarica non riesce a comunicare tramite mesh con altre Pico dello stesso gruppo di ricarica.


Provvedimenti:

- Verifica che i nodi abbiano corrente sufficiente.

- Per un'analisi più precisa contatta telefonicamente il supporto.


### Temperatura elevata



Temperatura elevata



Significato: 

- L'elevata temperatura interna della Pico fa sì che la potenza massima di ricarica venga ridotta.




Possibili cause:

- Irradiazione solare diretta: l'apparecchio è eventualmente esposto alla luce solare diretta, il che porta a uno sviluppo eccessivo di calore.




Provvedimento:

- Eseguire un aggiornamento del firmware se la versione è inferiore a 0.0.29.

- La luminosità del display della Pico dovrebbe essere impostata al minimo. È questo ad avere il maggiore effetto, poiché in tal modo viene generata meno energia direttamente nell'involucro.


Problemi specifici dei veicoli

- Hyundai Ioniq 5: in singoli casi quest'auto fa scattare l'interruttore differenziale al termine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo intervenire. Poiché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Zoé: i modelli più vecchi devono essere configurati con una corrente di avvio di 10A, poiché con 6A non avviano la ricarica. Un test ha mostrato che con un cavo di ricarica monofase la ricarica si avvia anche quando sono disponibili solo 6A di corrente di avvio. In singoli casi quest'auto fa scattare l'interruttore differenziale al termine della sessione di ricarica; come produttori di stazioni di ricarica non possiamo intervenire. Poiché l'interruttore differenziale scatta indipendentemente dalla stazione di ricarica.

- Renault Kangoo Electric: avvia la ricarica solo a partire da 8A

- Skoda Enyaq: in alcuni casi può passare fino a 1min 30sec prima che la sessione di ricarica si avvii. In alternativa disattivare il car-ID.

- Audi Q4: la ricarica non si avvia. 

    - Soluzione 1: secondo le prime esperienze del 23.01.2026, il problema potrebbe essere risolto anche con il software Audi più recente. 

    - Soluzione 2: installare almeno la versione 0.0.33 sulla Pico e disattivare il car-id.

- Dacia Spring: la ricarica non si avvia. Soluzione: installare la versione 0.0.33 e disattivare il car-id sulla Pico.

- Hyundai Ioniq: l'auto si avvia solo se prima si avvicina la carta RFID e poi si avvia la ricarica. In alternativa è necessario disattivare il car-ID.

- Leapmotor / T03: non gestisce correttamente la commutazione delle fasi. Se la ricarica viene interrotta dall'auto dopo un minuto, occorre aprire e richiudere più volte la portiera dal lato auto.

- Subaru Solterra: avvia la ricarica solo a partire da 8A e con car-ID disattivato

- Mazda MX-30: avvia la ricarica solo se il car-ID è disattivato.

- Honda E:ny1: avvia la ricarica solo a partire da 8A.
