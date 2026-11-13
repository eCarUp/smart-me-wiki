---
title: 'Errori Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'In questa pagina vengono spiegati gli errori noti della Pico.'
sidebar_label: 'Errori Pico'
---
In questa pagina vengono spiegati gli errori noti della Pico.

### L'RFID non viene riconosciuto.

Significato: 

- Durante la scansione dell'RFID non vengono visualizzati né il codice QR né il logo RFID.




Possibili cause dell'errore:

- La carta RFID è difettosa

- La Pico presenta un errore




Misura:

- Riavviare la Pico. Se il riavvio ha risolto il problema, Le saremmo grati se ci inviasse un'e-mail a [support@smart-me.com](mailto:support@smart-me.com). Indicare la data dell'evento e il numero di serie della Pico.

- Provare con una nuova carta RFID

### Potenza di ricarica ridotta

Se la Pico eroga meno potenza di quanto dovrebbe, è possibile che una fase non sia collegata correttamente o che sia scattato un fusibile. Cliccando su "Normale" ("Normal") è possibile visualizzare le tensioni e le correnti, in modo simile a quanto avviene per i contatori elettrici.

### Schermo nero (nessuna visualizzazione)

<div className="row">
<div className="col col--8">

Significato: 

- Lo schermo della Pico non visualizza nulla. 

Possibili cause dell'errore:

- La Pico non è alimentata

- È scattato l'interruttore FI

- La Pico presenta un errore nel software locale

Misura:

- Se la Pico è offline

    - Passo 1: togliere l'alimentazione e riaccendere.

    - Passo 2: verificare se è installata l'Application Version 1.xx ([Verificare la versione hardware](https://webforms.smart-me.com/connect/deviceoverview.aspx)); in caso affermativo, [compilare l'RMA](/rma-antragsformular-schweiz) con la descrizione dell'errore: Schermo nero con Application Version 1.xx

    - Passo 3: se non è di aiuto, rivolgersi al supporto.

- Se la Pico è online, può essere riavviata tramite il portale smart-me. (Selezionare la Pico / ruota dentata in alto a destra / Azioni avanzate (Erweiterte Aktionen) / Riavvio (Neustart))

- Se scatta l'interruttore FI, può trattarsi di un caso isolato. Se dovesse verificarsi più spesso, La preghiamo di contattarci. Fanno eccezione la "IONIQ 5" e la "Zoé": con queste auto, in casi isolati, l'interruttore FI scatta alla fine della sessione di ricarica; come produttore di stazioni di ricarica non possiamo farci nulla.

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 1](/img/stoerungsbehebung-pico-fehler/01.png)

</div>
</div>

### L'auto è collegata e la stazione di ricarica non reagisce

Quando si collega un'auto, normalmente con 

- Authentication None 

    - l'immagine di standby dovrebbe scomparire e dovrebbe apparire una sequenza con l'avvio della ricarica

- Authentication eCarUp Backend 

    - dovrebbe comparire l'immagine con "Auth RFID App".


Se ciò non avviene, procedere come segue

- Sull'auto verificare che il cavo sia inserito correttamente.

- Sulla Pico assicurarsi che il cavo sia inserito fino in fondo.


Se continua a non reagire, il gestore della stazione deve verificare se alla stazione è collegato un cavo fisso.

- In caso affermativo, assicurarsi che nel portale smart-me sia attivata l'opzione "Cavo sempre bloccato in modo fisso" ("Kabel immer fest verriegelt"). 

- In caso contrario, effettuare questa operazione.

### Warn RDC

<div className="row">
<div className="col col--8">

Cavo o auto (nella maggior parte dei casi)



Significato: 

- Problema con il sensore RDC (residual current device). L'RCD è un dispositivo di protezione delle persone nell'impianto elettrico.




Possibili cause dell'errore:

- Un cavo di ricarica umido collegato in modo fisso.

- Cavo di ricarica che durante la notte si è congelato e poi scongelato.

- Difetto del cavo o dell'auto. Ciò può essere verificato facendo ricaricare un'altra auto alla stazione oppure facendo ricaricare l'auto che causa l'errore a un'altra Pico.

- Difetto dell'elettronica della Pico, ad es. danni causati dall'acqua.




Misura:

- Se l'errore è scattato, la stazione deve essere riavviata per resettare l'errore.

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 2](/img/stoerungsbehebung-pico-fehler/02.png)

</div>
</div>

### Cable Lock Error

<div className="row">
<div className="col col--8">

Significato: 

- Questo errore si verifica quando il cavo non può essere bloccato (ad es. se la spina non è inserita correttamente).


Misura: 

- Riavviare una volta la  Pico, tramite il cloud oppure localmente. In questo modo il sensore per il bloccaggio del cavo viene ricalibrato.

- Nella maggior parte dei casi è sufficiente anche inserire correttamente il cavo (con un po' di forza) e riprovare.


Visualizzazione nel portale

- Bloccaggio del cavo non riuscito (Kabelverriegelung fehlgeschlagen)

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 3](/img/stoerungsbehebung-pico-fehler/03_EN.png)

</div>
</div>

![Errori Pico – Figura 4](/img/stoerungsbehebung-pico-fehler/04.png)

### Error 1

<div className="row">
<div className="col col--8">

Significato: 

- Non è stato trovato alcun modulo WiFi




Misura: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 1

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 5](/img/stoerungsbehebung-pico-fehler/05.png)

</div>
</div>

### Error 2

<div className="row">
<div className="col col--8">

Significato:  

- Errore di comunicazione interno




Misura: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 2

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 6](/img/stoerungsbehebung-pico-fehler/06.png)

</div>
</div>

### Error 3

<div className="row">
<div className="col col--8">

Significato:  

- Un errore del misuratore di corrente MID




Misura: 

- Se un riavvio non porta al risultato desiderato, è necessario compilare un RMA. Descrizione dell'errore: Error 3

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 7](/img/stoerungsbehebung-pico-fehler/07.png)

</div>
</div>

### Error 4

<div className="row">
<div className="col col--8">

Significato:  

- Il test RCD sulla Pico non è riuscito.




Misura:

- Vedere WARN RDC

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 8](/img/stoerungsbehebung-pico-fehler/08.png)

</div>
</div>

### P-Limit

<div className="row">
<div className="col col--8">

Significato:

- Tensione troppo bassa &lt;200V

- Distacco del carico attivo: potenza limitata

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 9](/img/stoerungsbehebung-pico-fehler/09.png)

</div>
</div>

### Diode Error

<div className="row">
<div className="col col--8">

Possibili cause dell'errore:

- Il cavo di ricarica è difettoso


Misura:

- Sostituire / verificare il cavo di ricarica

- Sulla Pico non è necessaria alcuna misura. Dopo 30 secondi può essere nuovamente utilizzata normalmente.

- Verificare che sulla Pico sia installata almeno la versione 0.0.42. [Aggiornamento del firmware](/konfiguration/firmware-update) 

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 10](/img/stoerungsbehebung-pico-fehler/10_EN.png)

</div>
</div>

### L'auto non si ricarica (la barra è larga solo un pixel ed è rossa)

<div className="row">
<div className="col col--8">

Visualizzazione:

- La barra inferiore è larga solo un pixel ed è rossa


Significato: 

- La stazione di ricarica non abilita la corrente.


Possibili cause dell'errore:

- La gestione della ricarica non può abilitare corrente alla stazione perché una Pico è sovraccarica.

- La Pico nel gruppo di ricarica non riesce a comunicare tramite la rete mesh con le altre Pico dello stesso gruppo di ricarica.


Misure:

- Verificare che i nodi dispongano di corrente sufficiente.

- Per un'analisi più approfondita, chiamare il supporto.

</div>
<div className="col col--4 bild--voll">

![Errori Pico – Figura 11](/img/stoerungsbehebung-pico-fehler/11.png)

</div>
</div>

### Temperatura elevata

Temperatura elevata



Significato: 

- L'elevata temperatura interna della Pico fa sì che la potenza di ricarica massima venga ridotta.




Possibili cause dell'errore:

- Irraggiamento solare diretto: l'apparecchio è probabilmente esposto all'irraggiamento solare diretto, il che provoca un eccessivo sviluppo di calore.




Misura:

- Eseguire un aggiornamento del firmware se la versione è inferiore a 0.0.29.

- La luminosità del display della Pico dovrebbe essere impostata al minimo. Questo ha l'effetto maggiore, poiché in tal modo viene generata meno energia direttamente all'interno dell'involucro.


Problemi specifici dei veicoli

- Hyundai Ioniq 5: con questa auto, in casi isolati, l'interruttore FI scatta alla fine della sessione di ricarica; come produttore di stazioni di ricarica non possiamo farci nulla. L'interruttore FI scatta infatti indipendentemente dalla stazione di ricarica.

- Zoé: i modelli più vecchi devono essere configurati con una corrente di avvio di 10A, poiché con 6A non avviano la ricarica. Un test ha mostrato che con un cavo di ricarica monofase la ricarica si avvia anche quando sono disponibili solo 6A di corrente di avvio. Con questa auto, in casi isolati, l'interruttore FI scatta alla fine della sessione di ricarica; come produttore di stazioni di ricarica non possiamo farci nulla. L'interruttore FI scatta infatti indipendentemente dalla stazione di ricarica.

- Renault Kangoo Electric: avvia la ricarica solo a partire da 8A

- Skoda Enyaq: in alcuni casi possono essere necessari fino a 1min 30sec prima che la sessione di ricarica si avvii. In alternativa disattivare la Car-ID.

- Audi Q4: la ricarica non si avvia. 

    - Soluzione 1: secondo le prime esperienze del 23.01.2026, il problema potrebbe essere risolto anche con il software Audi più recente. 

    - Soluzione 2: installare sulla Pico almeno la versione 0.0.33 e disattivare la car-id.

- Dacia Spring: la ricarica non si avvia. Soluzione: installare la versione 0.0.33 e disattivare la car-id sulla Pico.

- Hyundai Ioniq: l'auto si avvia solo se prima viene avvicinata la carta RFID e poi viene avviata la ricarica. In alternativa è necessario disattivare la Car-ID.

- Leapmotor / T03: non gestisce correttamente la commutazione delle fasi. Se dopo un  minuto la ricarica viene interrotta dal lato dell'auto, è necessario aprire e richiudere più volte la portiera dell'auto.

- Subaru Solterra: avvia la ricarica solo a partire da 8A e con la Car-ID disattivata

- Mazda MX-30: avvia la ricarica solo se la Car-ID è disattivata.

- Honda E:ny1: avvia la ricarica solo a partire da 8A.

- dongfeng box: non gestisce correttamente la commutazione delle fasi. Se dopo un minuto la ricarica viene interrotta dal lato dell'auto, dopo 7 minuti è necessario sbloccare la portiera, dopodiché l'auto riprende a ricaricare.
