---
title: 'Risoluzione dei problemi del Billing'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'In questa sezione i messaggi di errore del Billing vengono trattati in modo metodico.'
sidebar_label: 'Messaggi di errore del Billing'
---
In questa sezione i messaggi di errore del Billing vengono trattati in modo metodico.

## In generale

La configurazione dello smart-me Billing è descritta qui: [Billing](/konfiguration/billing) 

Nello smart-me Billing i messaggi di errore vengono visualizzati in due punti:

- Durante il calcolo delle tariffe virtuali (se configurate)

- Durante l'emissione delle fatture


Calcolo delle tariffe virtuali

Dove si trovano i messaggi di errore relativi al calcolo delle tariffe virtuali.
Login nel portale:
Fatturazione (Rechnungsstellung) --> Configurazione (Konfiguration) --> Modifica immobile (Liegenschaft editieren) --> Tariffe virtuali (Virtuelle Tarife) --> Riquadro blu

![Risoluzione dei problemi del Billing – Figura 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Fatture emesse

Dove si trovano i messaggi di errore e gli avvisi relativi all'emissione delle fatture.
Login nel portale:
Fatturazione (Rechnungsstellung)  --> Configurazione (Konfiguration) --> Modifica immobile (Liegenschaft editieren) --> Fatture (Rechnungen) --> Fatture (Rechnungen) --> Campo arancione con gli avvisi
(Compare solo se è presente un errore)

![Risoluzione dei problemi del Billing – Figura 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Elenco dei messaggi di errore

## Errori nel calcolo delle tariffe virtuali

![Risoluzione dei problemi del Billing – Figura 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Il calcolo inizierà a breve ... (Berechnung startet bald ...)

Questo messaggio viene visualizzato quando non è stata calcolata alcuna tariffa virtuale. Le cause possono essere le seguenti:

Il Billing è appena stato configurato

- -   Causa: quando il Billing è appena stato creato, la prima volta occorre premere manualmente su ricalcola (neu rechnen)

    - Soluzione: premere su ricalcola (neu rechnen)


Sotto il messaggio viene visualizzato un ulteriore messaggio di errore

- -   Causa: in presenza di problemi, le tariffe non possono essere calcolate.

    - Soluzione: risolvere il messaggio di errore sottostante.


Si è appena premuto su ricalcola (neu rechnen)

- -   Causa: occorre un po' di tempo (1-2min) prima che il calcolo inizi.

    - Soluzione: attendere 1-2min


Per l'anno in corso non sono definite tariffe

- -   Causa: il Billing necessita di tariffe valide per l'intero periodo di conteggio

    - Soluzione: definire le tariffe dal 2000 al 2099 o almeno dalla messa in servizio fino alla fine dell'anno in corso


Non l'intero periodo è coperto da una tariffa. Ad es. per l'anno di messa in servizio del contatore 2019 non è presente alcuna tariffa.

- -   Causa: il Billing necessita di tariffe valide per l'intero periodo di conteggio

    - Soluzione: definire le tariffe dal 2000 al 2099 o almeno dalla messa in servizio fino alla fine dell'anno in corso


Nella tariffa solare o nella tariffa della batteria non è stato aggiunto il contatore solare o il contatore del consumo totale.

- -   Causa: per calcolare la ripartizione tra rete e solare, le tariffe solari necessitano di determinati contatori.

    - Soluzione: verificare che tutte le tariffe solari e della batteria abbiano i contatori necessari.


La struttura delle cartelle dell'immobile è a un livello (solo unità di conteggio), ma dovrebbe essere a due livelli (immobile e unità di conteggio).

- -   Causa: la struttura del Billing è a due livelli e necessita di almeno un'unità di conteggio.

    - Soluzione: verificare la struttura delle cartelle


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Questo messaggio viene visualizzato quando non è valida almeno una tariffa di rete per l'intero periodo di conteggio. Tra le parentesi graffe viene indicato un momento in cui nessuna tariffa di rete è valida (indicazione in UTC). 

- Soluzione 1: definire le tariffe a partire dal primo valore trasmesso. Ad es. dal 5.8.2022 o prima, dall'1.1.2000, poi premere su "ricalcola" ("neu rechnen").

- Soluzione 2: definire le tariffe per l'anno in corso (ad es. fino al 31.12.2024), poi premere su "ricalcola" ("neu rechnen").

- Soluzione 3: in caso di tariffa ore di punta/ore fuori punta: verificare che queste coprano 24h. [Azioni se/allora](/konfiguration/billing/stromtarife-definieren)

- Soluzione 3: premere su "ricalcola" ("neu rechnen") e inserire solo la data a partire dalla quale è configurata una tariffa valida.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Questo messaggio viene visualizzato quando più di una tariffa di rete è valida contemporaneamente. Di conseguenza il Billing non può decidere su quale tariffa debba essere conteggiato il consumo.

- Soluzione 1: le tariffe hanno una data di inizio e di fine della validità che si sovrappongono.

- Soluzione 2: in caso di tariffa ore di punta/ore fuori punta: per nessuna delle due tariffe è stata definita una condizione. Almeno una delle due tariffe deve avere una condizione (ad es. ore di punta).

- Soluzione 3: le azioni se/allora sono state configurate in modo errato. Ciò si verifica soprattutto quando sono configurate tariffe ore di punta e ore fuori punta per l'elettricità di rete e solare.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Questo messaggio viene visualizzato quando c'è un problema con un contatore assegnato a una tariffa solare.

- Soluzione 1: non è stato assegnato alcun contatore -> assegnare il contatore

- Soluzione 2: è stato assegnato un vecchio contatore che nel frattempo è stato eliminato -> assegnare un nuovo contatore


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

In una delle unità di conteggio si trova un contatore eliminato.

- Selezionare l'unità di conteggio indicata nel messaggio di errore, eliminare il contatore cancellato "not found" ed eventualmente assegnare un nuovo contatore


### EVT005: There is no residential commercial unit.

Questo messaggio di errore compare quando non è stata trovata alcuna unità di conteggio.

- Causa: manca la struttura delle cartelle a due livelli. A sinistra, sotto l'immobile, c'è solo una cartella per l'immobile e nessuna unità di conteggio subordinata 

- Soluzione 1:  verificare la struttura delle cartelle. [Informazioni](/konfiguration/billing)

- Soluzione 2: creare nuovamente l'immobile. A tal fine, nel Billing sotto Configurazione (Konfiguration) cliccare nuovamente su Aggiungi immobile (Liegenschaft hinzufügen) e selezionare lo stesso nodo. Nessun dato va perso.


Nelle chiavi esterne (in fondo alla pagina) non sono elencate unità di conteggio.

- -   Causa: le unità di conteggio sono state aggiunte all'immobile in un secondo momento tramite drag-and-drop.

    - Soluzione: le unità di conteggio devono essere create di nuovo. È importante selezionare ogni volta la cartella dell'immobile e poi scegliere "Aggiungi nodo" ("Knoten hinzufügen"). In "Cartella superiore" ("Übergeordneter Ordner") deve essere visualizzato il nome della cartella dell'immobile.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

<div className="row">
<div className="col col--5">

Il contatore virtuale è composto da contatori che sono stati eliminati.

</div>
<div className="col col--7 bild--mitte">

![Risoluzione dei problemi del Billing – Figura 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

</div>
</div>

### EVT007: È possibile che non tutti i contatori della configurazione dispongano della certificazione della curva di carico o della curva delle letture del contatore prescritta dalla legge per le tariffe virtuali. (Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.)

Questo avviso è puramente informativo e viene visualizzato quando si utilizzano dispositivi di terzi o contatori non certificati da smart-me. Non ha alcun influsso sul calcolo.

Con questo avviso vogliamo assicurarci che chi emette le fatture sia consapevole che la [conformità degli strumenti di misura](/planung/zertifizierungen-schweiz) è di sua responsabilità. Ciò riguarda tutti i dispositivi di terzi e il contatore monofase smart-me.

Nota: questo messaggio non può essere disattivato.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Questo messaggio compare quando non sono disponibili tutti i dati della curva di carico necessari per poter proseguire il calcolo delle tariffe.

- Tutti i contatori devono essere online. [Contatore offline](/stoerungsbehebung/zaehler-offline)

- I contatori smontati devono essere [disattivati o eliminati](/konfiguration/inbetriebnahme/zaehler-loeschen).

- Nei vRCP i dati vengono inviati solo una volta al giorno. Per questo il messaggio viene visualizzato sempre fino al prossimo invio. Se la data è quella odierna, il messaggio può essere ignorato.

- I contatori devono inviare dati della curva di carico. In caso di guasto vengono eventualmente inviati solo dati live, che non sono adatti al conteggio. (Sono necessari dati della curva di carico a 15min.)


### EBC010: I costi della componente di prezzo della batteria non corrispondono ai costi della tariffa virtuale (Die Kosten der Batteriepreiskomponente stimmen nicht mit den virtuellen Tarifkosten überein)

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle Altre voci (Sonstige Positionen) non sono ancora state aggiornate.

### EBC011: I costi delle componenti di prezzo di rete o solari non corrispondono ai costi della tariffa virtuale (Die Kosten der Netz- oder Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein)

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle Altre voci (Sonstige Positionen) non sono ancora state aggiornate.

### EBC012: I costi delle componenti di prezzo solari non corrispondono ai costi della tariffa virtuale. (Die Kosten der Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein.)

Questo messaggio compare solo se è attivata l'elettricità per gli inquilini. Si verifica quando la struttura tariffaria è stata modificata, ma le componenti di prezzo nelle Altre voci (Sonstige Positionen) non sono ancora state aggiornate.

## Errori nelle fatture emesse

![Risoluzione dei problemi del Billing – Figura 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: I consumi delle tariffe virtuali non corrispondono al consumo. (Verbräuche der virtuellen Tarife stimmen nicht mit dem Verbrauch überein.)

Questo messaggio viene visualizzato quando la somma delle tariffe virtuali non corrisponde al consumo dei contatori. Questo problema si presenta quando l'assegnazione delle tariffe virtuali non avviene correttamente. 

Possibili cause:

Le tariffe non sono state calcolate per l'intero periodo di conteggio

- Causa: il calcolo delle tariffe virtuali si è interrotto a causa di un messaggio di errore.

- Soluzione: nella configurazione dell'immobile nel Billing verificare le tariffe virtuali. Se nel riquadro blu viene visualizzato un messaggio di errore, questo deve essere risolto. Se non viene visualizzato alcun messaggio, ma la data "Ultimo valore calcolato" ("Letzter berechneter Wert") rientra nel periodo di conteggio, il calcolo è ancora in corso e occorre pazientare.
    Importante: il calcolo può durare diverse ore, a seconda del numero di tariffe e contatori.


Il periodo di conteggio comprende il giorno dell'installazione

- Causa: il nostro Billing lavora su giorni completi.

- Soluzione: il giorno dell'installazione non deve rientrare nel periodo di conteggio. È possibile verificarlo creando un report dei contatori e controllando se in esso sono indicati valori di misura per l'intero periodo.


Il periodo di conteggio comprende il giorno odierno o un giorno futuro.

- Causa: il nostro Billing lavora su giorni completi e calcola le tariffe virtuali in modo continuo.

- Soluzione: per il giorno odierno non sono disponibili tutti i valori (il giorno è ancora in corso) e per il futuro non sono disponibili dati. Di conseguenza non è possibile calcolare tariffe virtuali.


La fattura viene emessa vuota

- Causa: la struttura delle cartelle non è corretta oppure per l'intero periodo di conteggio non sono state calcolate tariffe virtuali.

- Soluzione: nella configurazione dell'immobile nel Billing verificare le tariffe virtuali. Se nel riquadro blu viene visualizzato un messaggio di errore, questo deve essere risolto. Se è stato effettuato il ricalcolo a partire da una data successiva (ad es. il conteggio viene creato per il 2025; il ricalcolo è stato effettuato a partire dal 2026), per il periodo non sono state calcolate tariffe. Occorre ricalcolare nuovamente includendo il periodo di conteggio.


Un contatore è rimasto offline per più di 2 mesi

- Causa: in presenza di una lacuna non è possibile calcolare tariffe virtuali.

- Soluzione: verificare se tutti i dati sono disponibili; se lo sono, occorre ricalcolare. Se i dati non sono disponibili, per questo periodo non è possibile emettere alcuna fattura.


La configurazione è cambiata (struttura delle cartelle, assegnazione dei contatori, struttura/orari delle tariffe)

- Causa: non è stato effettuato il ricalcolo

- Soluzione: occorre ricalcolare.


Un contatore viene conteggiato per più o meno del 100%.

- Causa: un contatore (ad es. il contatore generale) è stato ripartito in percentuale, ma complessivamente non dà il 100%

- Soluzione: il contatore deve essere conteggiato al 100%. Nota: se un contatore viene ripartito su tre unità, una delle unità deve avere il 33.34%. (3x 33.33% dà solo 99.99%)


I dati vRCP sono stati aggiornati

- Cause: nel vRCP il fornitore di energia invia mensilmente dati corretti.

- Soluzione: occorre ricalcolare.


### EBC002/EBC003: Nessun valore trovato alla data di inizio o alla data di fine. (Keine Werte zum Startdatum oder Enddatum gefunden.)

Questo messaggio riguarda i contatori multienergia.

Possibili cause:

- Un contatore rilevante per il conteggio è offline.

- Il periodo di conteggio (Da) corrisponde al giorno dell'installazione e/o il periodo di conteggio (A) è impostato su oggi.

- Il periodo di conteggio (Da) è precedente al giorno dell'installazione e/o il periodo di conteggio (A) è nel futuro.

- Un contatore è rimasto offline per più di 2 mesi e il periodo di conteggio inizia o termina nel periodo in cui i dati non sono più disponibili. (Lacuna)

- L'anno selezionato è errato.


### EBC004: Le fatture vengono generate vuote o non vengono generate affatto. (Rechnungen werden leer oder gar nicht generiert.)

### Possibili cause:

- Per l'unità di conteggio corrispondente non è stato inserito un indirizzo di fatturazione valido (prestare attenzione al periodo) →  altrimenti il nostro sistema presume che nell'appartamento non abiti alcun inquilino e di conseguenza non genera alcuna fattura. 

- All'unità di conteggio non sono stati assegnati contatori da conteggiare. 

- La struttura delle cartelle è errata (vedere [2\. Creare la struttura delle cartelle e assegnare i contatori](/konfiguration/billing))

- In caso di tariffe virtuali: le tariffe non sono valide nel periodo di fatturazione desiderato (adeguare eventualmente il periodo delle tariffe).

- Per il periodo non è stato inserito alcun indirizzo di fatturazione. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Il Suo login bexio non è più valido. Deve effettuare nuovamente il login.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

La valuta non è impostata su CHF o EUR. 

Login--> Fatturazione (Rechnungserstellung) --> Impostazioni (Einstellungen) --> modificare la Valuta (Währung) e impostarla su "CHF" --> Salva (Speichern).



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

L'importo da fatturare è negativo. Ciò può accadere con un'Altra voce (Sonstige Positionen), ad es. rimborsi.

Non è possibile aggirare questa situazione. La fattura viene comunque emessa (senza codice QR).



## Messaggi di errore specifici delle tariffe per consumo di picco

### EPK001: Il contatore per l'elettricità di rete non è stato configurato (Zähler für Netzstrom wurde nicht konfiguriert)

### Possibili cause:

- Nello smart-me Billing il contatore di bilancio non è stato assegnato alla tariffa di picco.




Risolvere il problema: 

- smart-me Billing --> Configurazione (Konfiguration) --> Tariffe per consumo di picco (Spitzenverbrauch Tarife) --> Modifica (Editieren) --> Aggiungere il contatore di bilancio (Bilanzzähler hinzufügen) --> Salva (Speichern).


### EPK002: Mancano le voci dei costi del carico di picco per il periodo di conteggio (Spitzenlastkosteneinträge fehlen für den Abrechnungszeitraum)

Nello smart-me Billing non sono stati inseriti i costi della tariffa di picco.

Soluzione: smart-me Billing --> Configurazione (Konfiguration) --> Tariffe per consumo di picco (Spitzenverbrauch Tarife) --> Aggiungi costi (Kosten hinzufügen) --> Aggiungere prezzo / kW (Preis / kW hinzufügen) --> Salva (Speichern).

### EPK003: Non è stato possibile determinare il consumo di rete nel periodo di conteggio. (Der Netzverbrauch im Abrechnungszeitraum konnte nicht ermittelt werden.)

Il contatore di bilancio non ha fornito dati.

- Causa: senza contatore di bilancio non è possibile calcolare i picchi se il tipo è impostato su "Misurazione del consumo" ("Verbrauchsmessung")

- Soluzione: verificare se i valori sono disponibili.


Il contatore di bilancio non ha fornito dati per un mese intero.

- Causa: sono necessari valori per l'intero mese per poter conteggiare i picchi.

- Soluzione: configurare la tariffa di picco solo a partire da un mese dopo. Per il mese con la lacuna è possibile creare un consumo di picco con "Costi assegnati" ("Zugewiesenen Kosten"). 


### EPK004: Almeno un'unità di conteggio deve avere un consumo nel periodo di conteggio. (Mindestens eine Abrechnungseinheit muss einen Verbrauch im Abrechnungszeitraum haben.)

Viene conteggiata solo la tariffa solare

- Causa: il consumo di picco viene applicato solo alla tariffa di rete. 

- Soluzione: verificare che la tariffa solare sia stata configurata correttamente.


Non è stato misurato alcun consumo

- Causa: i contatori non hanno misurato alcun consumo per il periodo

- Soluzione 1: verificare quando i contatori sono stati messi in servizio e se sono disponibili dati per l'intero periodo.


## Messaggi di errore specifici VEWA

### Sulla fattura i valori non vengono visualizzati affatto o vengono visualizzati con 0kWh, nonostante ci sia stato un consumo.

Per ciascun tipo di energia deve essere inserita una tariffa (segnaposto): calore, acqua calda sanitaria, ecc.

Login --> Emettere una fattura (Rechnung erstellen) --> Impostazioni (Einstellungen) (in alto al centro) --> Modifica immobile (Liegenschaft editieren) --> inserire le tariffe per calore / acqua calda sanitaria / ecc. con 0 CHF. --> Salva (Speichern).

### I file Word ed Excel vengono creati vuoti (0 Byte)

Questi file sono utilizzabili solo al di fuori di VEWA. Se VEWA è attivato, i relativi pulsanti restano visibili, ma generano solo file vuoti.

### Nessun valore per il contatore. Vengono utilizzati valori sostitutivi. (Keine Werte für Zähler. Es werden Ersatzwerte verwendet.)

Questo errore può verificarsi e non è da considerare critico in ogni caso. Occorre però prestare attenzione a quanto il valore sostitutivo si discosti dal valore richiesto.

Il messaggio di errore compare al più tardi dopo 48h di scostamento.

Nota: verifichi eventualmente l'intervallo di lettura del M-Bus Gateway, affinché venga letto più spesso di ogni 2 giorni, per escludere che l'errore si verifichi sistematicamente.



### EVW001: Contratto di locazione mancante o sfitto! (Fehlendes Mietverhältnis oder Leerstand!)

Inserisca il contratto di locazione mancante o lo sfitto.

Senza questo inserimento, i costi vengono interamente ripartiti sui contratti inseriti e anche l'energia totale di riferimento viene calcolata solo da questi contratti. (Meno energia di quella effettivamente consumata)



### EVW002: Doppia occupazione dell'unità di conteggio! (Doppelbelegung der Abrechnungseinheit!)

Verifichi gli sfitti e i contratti di locazione per individuare doppie occupazioni.

Senza la correzione, i costi vengono interamente ripartiti sui contratti inseriti e l'energia totale di riferimento viene calcolata da troppi contratti. (Più energia di quella effettivamente consumata)

## Impossibile gestire l'indirizzo

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Possibili cause:

- Lo smart-me Billing è stato creato a 3 livelli.

- Una cartella è stata spostata in un secondo momento e ha ancora salvate vecchie configurazioni.


Soluzione: vedere EVT005

## Argomenti spiegati in dettaglio:

### Perché la tariffa virtuale genera una differenza se il contatore non ha fornito dati al momento dell'inizio del conteggio (Da) o della fine del conteggio (A)?

Possibili motivi:

- La messa in servizio non era conclusa

- Il contatore era offline e non ha trasmesso successivamente i dati della curva di carico

- Il contatore era guasto


Base dati per l'individuazione dell'errore:

Durante l'emissione di una fattura lo smart-me Billing esegue un controllo. In questo controllo la somma delle tariffe virtuali (ad es. tariffa ore di punta, ore fuori punta, solare) viene confrontata con il consumo di elettricità. Se c'è una differenza, viene visualizzato un messaggio di errore. 

![Risoluzione dei problemi del Billing – Figura 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Visualizzazione delle letture del contatore

Durante l'emissione di una fattura, nello smart-me Billing la determinazione delle letture del contatore non viene visualizzata con un'indicazione temporale. Per verificare se il contatore ha fornito dati al momento desiderato, occorre creare un report.

Per il report è possibile selezionare l'immobile e generare un report dei consumi dettagliato in PDF. In questo modo vengono esportati in una volta i dati di tutte le unità di conteggio (appartamenti). 

Selezionare l'immobile --> In alto a destra selezionare Report (Report) --> Tipo di report (Reporttyp) --> Report dei consumi dettagliato (PDF) (Verbrauchsreport detailliert (PDF))

Ora è possibile verificare se il periodo del report si discosta dal periodo della grandezza di riferimento, la somma di uno o più contatori. In tal caso, per il periodo selezionato non sono disponibili dati della curva di carico.

![Risoluzione dei problemi del Billing – Figura 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Visualizzazione delle tariffe virtuali

Durante l'emissione di una fattura, nello smart-me Billing la determinazione delle tariffe virtuali viene visualizzata nelle tariffe.

![Risoluzione dei problemi del Billing – Figura 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Gestione diversa tra letture del contatore e tariffe virtuali:

Letture del contatore: per il consumo di elettricità lo smart-me Billing utilizza le letture fisiche del contatore generate sul contatore stesso. Se al momento dell'inizio o della fine del conteggio non è disponibile alcuna lettura del contatore, lo smart-me Billing utilizza la lettura del contatore più vicina alla data desiderata.

Tariffe virtuali: lo smart-me Billing calcola le tariffe virtuali sulla base dei dati della curva di carico (letture fisiche del contatore). Se non sono disponibili dati della curva di carico, ad es. per 1 settimana, questi vengono interpolati. Ciò significa che il nostro sistema prende le letture del contatore e presume che il consumo sia costante ogni 15 minuti (dati della curva di carico). Da questi vengono poi calcolati i consumi virtuali.

Esempio di calcolo semplificato con dati corretti:

L'appartamento 1 ha inviato una lettura del contatore (dati della curva di carico) il 01.10.2023 00:00 e il 31.10.2023 00:00

- Lettura del contatore l'1.10.2023 00:00: 5200 kWh

- Lettura del contatore il 31.10.2023 00:00: 5250 kWh

- Viene determinata la lettura del contatore. 5250-5200 = 50 kWh


Viene calcolato il consumo virtuale. La ripartizione tra tariffa ore di punta, ore fuori punta e solare è di 50 kWh 

Esempio di calcolo semplificato con dati mancanti:

L'appartamento 1 ha inviato una lettura del contatore (dati della curva di carico) il 01.10.2023 00:00; ciò è avvenuto fino al 25.10.2023 00:00 compreso. Dal 25.10.2023 00:00 al 15.11.2023 00:00 non sono disponibili dati della curva di carico.

- Lettura del contatore l'1.10.2023 00:00: 851 kWh

- Lettura del contatore il 25.10.2023 00:00: 902 kWh

- Lettura del contatore il 15.11.2023 00:00: 950 kWh


La lettura del contatore per il 31.10.2023 00:00 non è disponibile. La lettura del contatore più vicina alla data è quella del 25.10.2023 00:00, che viene quindi utilizzata per la visualizzazione e il calcolo nello smart-me Billing.

Viene determinata la lettura del contatore. 902-851 = 51 kWh (Il consumo di 51 kWh viene indicato nella fattura alla voce "La Sua quota" ("Ihr Anteil"))

Viene calcolato il consumo virtuale. Tra l'1.10.2023 00:00 e il 25.10.2023 00:00 un consumo di 51 kWh viene ripartito tra tariffa ore di punta, ore fuori punta e solare. Poiché da quel momento mancano dati, i dati mancanti della curva di carico vengono interpolati. L'interruzione dura 21 giorni. In questo periodo sono stati consumati 950-902 = 48 kWh. Con l'interpolazione ciò dà 2,29 kWh al giorno. Nello smart-me Billing vengono quindi conteggiati, oltre ai 51 kWh, ancora 6 giorni a 2.29 kWh, il che dà 51 + 13.71 = 64.71 kWh.

Ora nello smart-me Billing c'è una differenza tra la lettura del contatore di 51 kWh e la tariffa virtuale di 64.71 kWh. Ciò genera il messaggio di errore.
