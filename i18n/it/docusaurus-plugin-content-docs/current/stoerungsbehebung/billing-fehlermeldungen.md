---
title: 'Risoluzione dei problemi di Billing'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'In questa sezione i messaggi di errore del Billing vengono trattati in modo metodico.'
sidebar_label: 'Messaggi di errore Billing'
---
In questa sezione i messaggi di errore del Billing vengono trattati in modo metodico.

## In generale

La configurazione dello smart-me Billing è descritta qui: [Billing](/konfiguration/billing) 

Nello smart-me Billing i messaggi di errore vengono visualizzati in due punti:

- Durante il calcolo delle tariffe virtuali (se configurate)

- Durante la creazione delle fatture


Calcolo delle tariffe virtuali

Dove trovo i messaggi di errore relativi al calcolo delle tariffe virtuali.
Login nel portale:
Fatturazione (Rechnungsstellung) --> Configurazione (Konfiguration) --> Modifica immobile (Liegenschaft editieren) --> Tariffe virtuali (Virtuelle Tarife) --> Riquadro blu

![Risoluzione dei problemi di Billing – Figura 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Fatture create

Dove trovo i messaggi di errore e gli avvisi relativi alla creazione delle fatture.
Login nel portale:
Fatturazione (Rechnungsstellung)  --> Configurazione (Konfiguration) --> Modifica immobile (Liegenschaft editieren) --> Fatture (Rechnungen) --> Fatture (Rechnungen) --> Campo arancione con gli avvisi
(Appare solo se è presente un errore)

![Risoluzione dei problemi di Billing – Figura 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Elenco dei messaggi di errore

## Errori nel calcolo delle tariffe virtuali

![Risoluzione dei problemi di Billing – Figura 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Il calcolo inizia a breve ...

Questo messaggio viene visualizzato quando non è stata calcolata nessuna tariffa virtuale. Le cause possono essere le seguenti:

Il Billing è stato configurato solo di recente

- -   Causa: se il Billing è stato appena creato, la prima volta è necessario premere manualmente su ricalcola (neu rechnen)

    - Soluzione: premere su ricalcola (neu rechnen)


Sotto il messaggio viene visualizzato un ulteriore messaggio di errore

- -   Causa: in presenza di problemi le tariffe non possono essere calcolate.

    - Soluzione: risolvere il messaggio di errore sottostante.


È stato appena premuto su ricalcola (neu rechnen)

- -   Causa: occorre un po' di tempo (1-2 min) prima che il calcolo inizi.

    - Soluzione: attendere 1-2 min


Per l'anno in corso non sono registrate tariffe

- -   Causa: il Billing necessita di tariffe valide per l'intero periodo di conteggio

    - Soluzione: definire le tariffe dal 2000 al 2099 oppure almeno dalla messa in servizio fino alla fine dell'anno in corso


Non tutto il periodo è coperto da una tariffa definita. Ad esempio per il 2019, anno della messa in servizio del contatore, non è disponibile alcuna tariffa.

- -   Causa: il Billing necessita di tariffe valide per l'intero periodo di conteggio

    - Soluzione: definire le tariffe dal 2000 al 2099 oppure almeno dalla messa in servizio fino alla fine dell'anno in corso


Nella tariffa solare o della batteria non è stato aggiunto il contatore solare o del consumo totale.

- -   Causa: per calcolare la ripartizione tra rete e solare, le tariffe solari necessitano di determinati contatori.

    - Soluzione: verificare che per tutte le tariffe solari e della batteria siano registrati i contatori necessari.


La struttura delle cartelle dell'immobile è a un livello (solo unità di conteggio), ma dovrebbe essere a due livelli (immobile e unità di conteggio).

- -   Causa: la struttura del Billing è a due livelli e necessita di almeno un'unità di conteggio.

    - Soluzione: verificare la struttura delle cartelle


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Questo messaggio viene visualizzato quando non è valida almeno una tariffa di rete per l'intero periodo di conteggio. Nelle parentesi graffe viene indicato un momento nel quale nessuna tariffa di rete è valida (indicazioni in UTC). 

- Soluzione 1: definire le tariffe a partire dal primo valore trasmesso. Ad esempio dal 5.8.2022 oppure prima, dall'1.1.2000, quindi premere su "ricalcola" (neu rechnen).

- Soluzione 2: definire le tariffe per l'anno in corso (ad es. fino al 31.12.2024), quindi premere su "ricalcola" (neu rechnen).

- Soluzione 3: in caso di tariffa ore di punta/ore fuori punta: verificare che coprano 24 h. [Azioni se/allora](/konfiguration/billing/stromtarife-definieren)

- Soluzione 3: premere su "ricalcola" (neu rechnen) e inserire come data di inizio quella a partire dalla quale è configurata una tariffa valida.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Questo messaggio viene visualizzato quando più di una tariffa di rete è valida contemporaneamente. Per questo il Billing non può decidere su quale tariffa deve essere conteggiato il consumo.

- Soluzione 1: le tariffe hanno una data di inizio e di fine della validità che si sovrappone.

- Soluzione 2: in caso di tariffa ore di punta/ore fuori punta: per entrambe le tariffe non è definita alcuna condizione. Almeno una delle due tariffe deve avere una condizione (ad es. ore di punta).

- Soluzione 3: le azioni se/allora sono state configurate in modo errato. Questo si verifica soprattutto quando sono configurate tariffe per ore di punta e ore fuori punta sia per l'elettricità di rete sia per quella solare.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Questo messaggio viene visualizzato quando è presente un problema con un contatore registrato in una tariffa solare.

- Soluzione 1: non è stato registrato alcun contatore -> registrare un contatore

- Soluzione 2: è stato registrato un vecchio contatore che nel frattempo è stato eliminato -> registrare un nuovo contatore


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

In una delle unità di conteggio si trova un contatore eliminato.

- Selezionare l'unità di conteggio indicata nel messaggio di errore, eliminare il contatore cancellato "not found" ed eventualmente registrare un nuovo contatore


### EVT005: There is no residential commercial unit.

Questo messaggio di errore appare quando non è stata trovata nessuna unità di conteggio.

- Causa: manca la struttura delle cartelle a due livelli. A sinistra, sotto l'immobile, è presente solo una cartella per l'immobile e nessuna unità di conteggio subordinata 

- Soluzione 1:  verificare la struttura delle cartelle. [Informazioni](/konfiguration/billing)

- Soluzione 2: creare nuovamente l'immobile. A tal fine, nel Billing sotto Configurazione, cliccare di nuovo su aggiungi immobile (Liegenschaft hinzufügen) e selezionare lo stesso nodo. In questo modo non vanno perduti dati.


Nelle chiavi esterne (in fondo alla pagina) non è elencata alcuna unità di conteggio.

- -   Causa: le unità di conteggio sono state aggiunte all'immobile in un secondo momento tramite drag-n-drop.

    - Soluzione: le unità di conteggio devono essere ricreate. È importante selezionare ogni volta la cartella dell'immobile e poi scegliere "Aggiungi nodo" (Knoten hinzufügen). In corrispondenza di "Cartella superiore" (Übergeordneter Ordner) deve essere visualizzato il nome della cartella dell'immobile.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

Il contatore virtuale è composto da contatori che sono stati eliminati.



![Risoluzione dei problemi di Billing – Figura 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

### EVT007: Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.

Questa indicazione è puramente informativa e viene visualizzata quando vengono utilizzati apparecchi di terzi o contatori non certificati da smart-me. Non ha alcuna influenza sul calcolo.

Con questa indicazione vogliamo assicurarci che chi emette la fattura sia consapevole che la [conformità degli strumenti di misura](/planung/zertifizierungen) è di sua responsabilità. Questo riguarda tutti gli apparecchi di terzi e il contatore monofase smart-me

Nota: questo messaggio non può essere disattivato.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Questo messaggio appare quando non sono disponibili tutti i dati di curva di carico necessari per proseguire il calcolo delle tariffe.

- Tutti i contatori devono essere online. [Contatore offline](/stoerungsbehebung/zaehler-offline)

- I contatori smontati devono essere [disattivati o eliminati](/konfiguration/inbetriebnahme/zaehler-loeschen).

- Nei RCP virtuali (vRCP) i dati vengono inviati solo giornalmente. Per questo motivo il messaggio viene visualizzato fino al successivo invio. Se la data è quella odierna, il messaggio può essere ignorato.

- I contatori devono inviare dati di curva di carico. In caso di difetto vengono eventualmente inviati solo dati live, che non sono adatti al conteggio. (Servono dati di curva di carico a 15 min.)


### EBC010: Die Kosten der Batteriepreiskomponente stimmen nicht mit den virtuellen Tarifkosten überein

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle altre posizioni non sono ancora state aggiornate.

### EBC011: Die Kosten der Netz- oder Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle altre posizioni non sono ancora state aggiornate.

### EBC012: Die Kosten der Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein.

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle altre posizioni non sono ancora state aggiornate.

## Errori nelle fatture create

![Risoluzione dei problemi di Billing – Figura 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: Verbräuche der virtuellen Tarife stimmen nicht mit dem Verbrauch überein.

Questo messaggio viene visualizzato quando la somma delle tariffe virtuali non corrisponde al consumo dei contatori. Il problema si presenta quando l'assegnazione delle tariffe virtuali non avviene correttamente. 

Possibili cause:

Le tariffe non sono state calcolate per l'intero periodo di conteggio

- Causa: il calcolo delle tariffe virtuali si è interrotto a causa di un messaggio di errore.

- Soluzione: nella configurazione dell'immobile nel Billing verificare le tariffe virtuali. Se nel riquadro blu viene visualizzato un messaggio di errore, questo deve essere risolto. Se non viene visualizzato alcun messaggio, ma la data "Ultimo valore calcolato" (Letzter berechneter Wert) è all'interno del periodo di conteggio, il calcolo è ancora in corso e occorre pazientare.
    Importante: il calcolo può durare diverse ore, a seconda del numero di tariffe e contatori.


Il periodo di conteggio comprende il giorno dell'installazione

- Causa: il nostro Billing lavora su giorni interi.

- Soluzione: il giorno dell'installazione non deve rientrare nel periodo di conteggio. Lo si può verificare creando un report dei contatori e controllando se in esso sono indicati valori di misura per l'intero periodo.


Il periodo di conteggio comprende il giorno odierno o un giorno futuro.

- Causa: il nostro Billing lavora su giorni interi e calcola costantemente le tariffe virtuali.

- Soluzione: per il giorno odierno non sono disponibili tutti i valori (il giorno è ancora in corso) e per il futuro non esistono dati. Per questo non possono essere calcolate tariffe virtuali.


La fattura viene creata vuota

- Causa: la struttura delle cartelle non è corretta oppure per l'intero periodo di conteggio non sono state calcolate tariffe virtuali.

- Soluzione: nella configurazione dell'immobile nel Billing verificare le tariffe virtuali. Se nel riquadro blu viene visualizzato un messaggio di errore, questo deve essere risolto. Se il ricalcolo è stato avviato da una data successiva (ad es. il conteggio viene creato per il 2025, ma il ricalcolo è partito dal 2026), non sono state calcolate tariffe per il periodo. Occorre ricalcolare nuovamente includendo il periodo di conteggio.


Un contatore è stato offline per più di 2 mesi

- Causa: in presenza di una lacuna non possono essere calcolate tariffe virtuali.

- Soluzione: verificare che tutti i dati siano disponibili; se lo sono, occorre ricalcolare. Se i dati non sono disponibili, per questo periodo non può essere creata alcuna fattura.


La configurazione è stata modificata (struttura delle cartelle, assegnazione dei contatori, struttura/fasce tariffarie)

- Causa: non è stato eseguito un ricalcolo

- Soluzione: occorre ricalcolare.


Un contatore viene conteggiato per più o meno del 100%.

- Causa: un contatore (ad es. il contatore generale) è stato ripartito in percentuale, ma la somma non dà 100%

- Soluzione: il contatore deve essere conteggiato al 100%. Nota: se un contatore viene ripartito su tre unità, una delle unità deve avere il 33.34%. (3x 33.33% dà solo 99.99%)


I dati vRCP sono stati aggiornati

- Cause: nel RCP virtuale (vRCP) l'azienda elettrica invia mensilmente dati corretti.

- Soluzione: occorre ricalcolare.


### EBC002/EBC003: Keine Werte zum Startdatum oder Enddatum gefunden.

Questo messaggio riguarda i contatori multienergia.

Possibili cause:

- Un contatore rilevante per il conteggio è offline.

- Il periodo di conteggio (Da) corrisponde al giorno dell'installazione e/o il periodo di conteggio (A) è impostato su oggi.

- Il periodo di conteggio (Da) è precedente al giorno dell'installazione e/o il periodo di conteggio (A) si trova nel futuro.

- Un contatore è stato offline per più di 2 mesi e il periodo di conteggio inizia o finisce nell'intervallo in cui i dati non sono più disponibili. (lacuna)

- L'anno selezionato è errato.


### EBC004: Rechnungen werden leer oder gar nicht generiert.

### Possibili cause:

- Per la relativa unità di conteggio non è stato registrato alcun indirizzo di fatturazione valido (osservare il periodo) →  altrimenti il nostro sistema presuppone che nell'appartamento non abiti alcun inquilino e di conseguenza non genera nemmeno una fattura. 

- All'unità di conteggio non è stato assegnato alcun contatore da conteggiare. 

- La struttura delle cartelle è errata (vedi [2\. Creare la struttura delle cartelle e assegnare i contatori](/konfiguration/billing))

- Con le tariffe virtuali: le tariffe non sono valide nel periodo di fatturazione desiderato (adattare eventualmente il periodo delle tariffe).

- Non è registrato alcun indirizzo di fatturazione per il periodo. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Il tuo login Bexio non è più valido. Devi effettuare nuovamente il login.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

La valuta non è impostata su CHF o EUR. 

Login--> Creazione fatture (Rechnungserstellung) --> Impostazioni (Einstellungen) --> Modificare la valuta e impostarla su "CHF" --> Salvare.



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

L'importo da conteggiare è negativo. Questo può accadere in presenza di altre posizioni, ad es. rimborsi.

Questo non può essere evitato. La fattura viene comunque creata (senza codice QR).



## Messaggi di errore specifici delle tariffe di consumo di punta

### EPK001: Zähler für Netzstrom wurde nicht konfiguriert

### Possibili cause:

- Nello smart-me Billing il contatore di bilancio non è stato registrato nella tariffa di punta.




Risolvere il problema: 

- smart-me Billing --> Configurazione (Konfiguration) --> Tariffe consumo di punta (Spitzenverbrauch Tarife) --> Modificare (Editieren) --> Aggiungere il contatore di bilancio --> Salvare.


### EPK002: Spitzenlastkosteneinträge fehlen für den Abrechnungszeitraum

Nello smart-me Billing non sono stati registrati i costi della tariffa di punta.

Soluzione: smart-me Billing --> Configurazione (Konfiguration) --> Tariffe consumo di punta (Spitzenverbrauch Tarife) --> Aggiungere i costi --> Aggiungere prezzo / kW --> Salvare.

### EPK003: Der Netzverbrauch im Abrechnungszeitraum konnte nicht ermittelt werden.

Il contatore di bilancio non ha fornito dati.

- Causa: senza contatore di bilancio i picchi non possono essere calcolati se il tipo è impostato su "Misurazione del consumo" (Verbrauchsmessung)

- Soluzione: verificare che i valori siano disponibili.


Il contatore di bilancio non ha fornito dati per un mese intero.

- Causa: per poter conteggiare i picchi sono necessari valori per l'intero mese.

- Soluzione: configurare la tariffa di punta solo a partire da un mese più tardi. Per il mese con la lacuna è possibile creare un consumo di punta con "Costi assegnati" (Zugewiesene Kosten). 


### EPK004: Mindestens eine Abrechnungseinheit muss einen Verbrauch im Abrechnungszeitraum haben.

Viene conteggiata solo la tariffa solare

- Causa: il consumo di punta viene applicato solo alla tariffa di rete. 

- Soluzione: verificare che la tariffa solare sia stata configurata correttamente.


Non è stato misurato alcun consumo

- Causa: i contatori non hanno misurato alcun consumo per il periodo

- Soluzione 1: verificare quando i contatori sono stati messi in servizio e se sono disponibili dati per l'intero periodo.


## Messaggi di errore specifici di VEWA

### Sulla fattura i valori non vengono visualizzati affatto oppure con 0 kWh, nonostante si sia verificato un consumo.

Per ciascun tipo di energia deve essere registrata una tariffa (segnaposto): calore, acqua calda sanitaria, ecc.

Login --> Creare fattura (Rechnung erstellen) --> Impostazioni (Einstellungen) (in alto al centro) --> Modifica immobile (Liegenschaft editieren) --> Registrare le tariffe per calore / acqua calda sanitaria / ecc. con 0 CHF. --> Salvare.

### I file Word ed Excel vengono creati vuoti (0 byte)

Questi file sono utilizzabili solo al di fuori di VEWA. Se VEWA è attivato, i relativi pulsanti restano visibili, ma generano solo file vuoti.

### Keine Werte für Zähler. Es werden Ersatzwerte verwendet.

Questo errore può verificarsi e non è da valutare come critico in ogni caso. Occorre però prestare attenzione a quanto il valore sostitutivo si discosta dal valore richiesto.

Il messaggio di errore appare dopo uno scostamento di 48 h al più tardi.

Nota: verifica eventualmente l'intervallo di lettura del gateway M-Bus, affinché la lettura avvenga più spesso che ogni 2 giorni, per escludere che l'errore si presenti in modo sistematico.



### EVW001: Fehlendes Mietverhältnis oder Leerstand!

Registra successivamente il rapporto di locazione o lo sfitto mancante.

Senza questa integrazione i costi vengono conteggiati integralmente sui contratti registrati e anche l'energia di riferimento complessiva viene formata solo da questi contratti. (meno energia di quella effettivamente consumata)



### EVW002: Doppelbelegung der Abrechnungseinheit!

Verifica gli sfitti e i rapporti di locazione per individuare eventuali doppie occupazioni.

Senza la correzione i costi vengono conteggiati integralmente sui contratti registrati e l'energia di riferimento complessiva viene formata da troppi contratti. (più energia di quella effettivamente consumata)

## L'indirizzo non può essere gestito

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Possibili cause:

- Lo smart-me Billing è stato creato su 3 livelli.

- Una cartella è stata spostata in un secondo momento e ha ancora vecchie configurazioni salvate.


Soluzione: vedi EVT005

## Argomenti spiegati più in dettaglio:

### Perché la tariffa virtuale genera una differenza se il contatore non ha fornito dati al momento dell'inizio (Da) o della fine (A) del conteggio?

Possibili motivi:

- La messa in servizio non era conclusa

- Il contatore era offline e non ha trasmesso successivamente i dati di curva di carico

- Il contatore era difettoso


Base di dati per l'individuazione dell'errore:

Lo smart-me Billing esegue un controllo durante la creazione di una fattura. In questo controllo la somma delle tariffe virtuali (ad es. tariffa ore di punta, ore fuori punta, solare) viene confrontata con il consumo di elettricità. Se sussiste una differenza, viene visualizzato un messaggio di errore. 

![Risoluzione dei problemi di Billing – Figura 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Visualizzazione delle letture del contatore

Nello smart-me Billing la rilevazione delle letture del contatore non viene visualizzata con un'indicazione temporale durante la creazione di una fattura. Per verificare se il contatore ha fornito dati nel momento desiderato, è necessario creare un report.

Per il report è possibile selezionare l'immobile e generare un report dei consumi dettagliato in PDF. In questo modo vengono esportati in una sola volta i dati di tutte le unità di conteggio (appartamenti). 

Selezionare l'immobile --> In alto a destra selezionare Report --> Tipo di report --> Report dei consumi dettagliato (PDF)

Ora si può verificare se il periodo del report si discosta, rispetto al periodo della grandezza di riferimento, dalla somma di uno o più contatori. Se è così, per il periodo selezionato non sono disponibili dati di curva di carico.

![Risoluzione dei problemi di Billing – Figura 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Visualizzazione delle tariffe virtuali

Nello smart-me Billing la rilevazione delle tariffe virtuali viene visualizzata nelle tariffe durante la creazione di una fattura.

![Risoluzione dei problemi di Billing – Figura 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Gestione differente tra letture del contatore e tariffe virtuali:

Letture del contatore: per il consumo di elettricità lo smart-me Billing utilizza le letture fisiche del contatore generate sul contatore stesso. Se al momento dell'inizio o della fine del conteggio non è disponibile alcuna lettura del contatore, lo smart-me Billing utilizza la lettura più vicina alla data desiderata.

Tariffe virtuali: lo smart-me Billing calcola le tariffe virtuali sulla base dei dati di curva di carico (letture fisiche del contatore). Se i dati di curva di carico non sono disponibili, ad es. per 1 settimana, vengono interpolati. Ciò significa che il nostro sistema prende le letture del contatore e presuppone che il consumo sia costante ogni 15 minuti (dati di curva di carico). Da questo vengono poi calcolati i consumi virtuali.

Esempio di calcolo semplificato con dati corretti:

L'appartamento 1 ha inviato una lettura del contatore (dati di curva di carico) il 01.10.2023 00:00 e il 31.10.2023 00:00

- Lettura del contatore il 1.10.2023 00:00: 5200 kWh

- Lettura del contatore il 31.10.2023 00:00: 5250 kWh

- La lettura del contatore viene rilevata. 5250-5200 = 50 kWh


Il consumo virtuale viene calcolato. La ripartizione tra tariffa ore di punta, ore fuori punta e solare è di 50 kWh 

Esempio di calcolo semplificato con dati mancanti:

L'appartamento 1 ha inviato una lettura del contatore (dati di curva di carico) il 01.10.2023 00:00, e questo è avvenuto fino al 25.10.2023 00:00 incluso. Dal 25.10.2023 00:00 al 15.11.2023 00:00 non sono disponibili dati di curva di carico.

- Lettura del contatore il 1.10.2023 00:00: 851 kWh

- Lettura del contatore il 25.10.2023 00:00: 902 kWh

- Lettura del contatore il 15.11.2023 00:00: 950 kWh


La lettura del contatore per il 31.10.2023 00:00 non è disponibile. La lettura più vicina a questa data è quella del 25.10.2023 00:00, pertanto viene utilizzata per la visualizzazione e il calcolo nello smart-me Billing.

La lettura del contatore viene rilevata. 902-851 = 51 kWh (il consumo di 51 kWh viene indicato nella fattura sotto "La tua quota")

Il consumo virtuale viene calcolato. Tra l'1.10.2023 00:00 e il 25.10.2023 00:00 un consumo di 51 kWh viene ripartito tra tariffa ore di punta, ore fuori punta e solare. Poiché da questo momento i dati mancano, i dati di curva di carico assenti vengono interpolati. L'interruzione è di 21 giorni. In questo periodo sono stati consumati 950-902 = 48 kWh. Con l'interpolazione ne risultano 2,29 kWh al giorno. Nello smart-me Billing vengono quindi conteggiati, oltre ai 51 kWh, ulteriori 6 giorni a 2.29 kWh, il che dà 51 + 13.71 = 64.71 kWh.

Ora esiste una differenza tra la lettura del contatore di 51 kWh e la tariffa virtuale di 64.71 kWh nello smart-me Billing. Questo porta al messaggio di errore.
