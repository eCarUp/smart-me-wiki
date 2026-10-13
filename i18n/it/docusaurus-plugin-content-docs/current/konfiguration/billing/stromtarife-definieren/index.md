---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy spiega le basi di come sono composti in generale i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Definire il prezzo dell'elettricità

Nel video a destra Guy spiega le basi di come sono composti in generale i prezzi dell'elettricità. 



Da ora può però utilizzare anche il nostro calcolatore online delle tariffe elettriche, che La aiuta e si basa su questa spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - Definire i prezzi RCP" />

Definire i prezzi RCP in smart-me Billing, spiegato da Guy.

Attenzione: il video è stato registrato con una versione precedente del file Excel, che conteneva ancora un errore nelle formule. Il file Excel è stato corretto.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe dell'elettricità oppure con le tariffe virtuali. La soluzione con le tariffe dell'elettricità è adatta esclusivamente alla realizzazione di sistemi con sola elettricità di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Si procuri il foglio tariffario del Suo fornitore di energia

Il foglio tariffario del Suo fornitore di energia è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Si informi anche su quale tariffa acquista esattamente dal fornitore di energia: 

- Verde, Blu, Grigio o altre versioni

- Tariffa unica, tariffa doppia o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è di solito composto da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzazione della rete

- Corrispettivi per la misurazione

- Tributi pubblici


I tributi pubblici in particolare non sono riportati integralmente sul foglio tariffario. I tributi comunali variano da comune a comune e sono riportati in un foglio tariffario esterno. Il link si trova nel 99% dei casi nella nota a piè di pagina del foglio tariffario.

Si procuri questo valore per la Sua tariffazione tramite il link stampato sul foglio tariffario.

Di solito è anch'esso un valore in ct. / kWh, ma può anche essere indicato in % dell'utilizzazione della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scelga per il Suo (v)RCP il calcolo della tariffa solare da utilizzare

Può scegliere tra due approcci di base:

- Metodo forfettario all'80% del prodotto di rete standard
    È importante sapere che il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP (raggruppamento ai fini del consumo proprio).

    In questo caso non possono essere addebitati costi per la misurazione del RCP, né per l'amministrazione e il conteggio del RCP.
    La tassa del contatore del fornitore di energia per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: elettricità di rete addebitata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo d'acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione del profitto all'interno del RCP, finché il tasso di occupazione degli affitti è elevato.
            Questo metodo non è adatto se nello stesso edificio si trovano grandi consumatori industriali ed è presente un sistema multitariffa.
            Soluzione migliore per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento Elcom (da utilizzare in caso di tariffe dinamiche del fornitore di energia)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da attuare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con industria e multitariffa (tariffa doppia), può succedere che l'industriale, a causa della tariffa solare più alta, alla fine paghi di più che al di fuori del RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per misurazione, conteggio e gestione, in aggiunta al valore calcolato dell'elettricità solare. I dettagli si trovano nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete non fosse eventualmente sufficiente a coprire i costi del Suo impianto solare. Questo caso è molto raro.

        - Questo metodo deve essere comprovato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcoli le Sue tariffe per il periodo tariffario

Per il calcolo, il modo più semplice è utilizzare il nostro calcolatore delle tariffe. A seconda del metodo scelto, Le indica quali inserimenti deve effettuare in smart-me.

Con la tariffa dinamica: scelga il metodo Elcom all'80% e cerchi nel calcolatore la tariffa H4 della Sua regione e del Suo fornitore di energia come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configuri le Sue tariffe

Torni ora nella configurazione dell'immobile.

1.  Fatturazione (Rechnungsstellung)

2.  Configurazione (Konfiguration)

3.  Immobile (Liegenschaft)

4.  Tariffe virtuali (Virtuelle Tarife)


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crei ora le tariffe di rete del Suo periodo tariffario


<div className="row">
<div className="col col--6 text--center">

### Esempio: tariffa unica

</div>
<div className="col col--6 text--center">

### Esempio: tariffa doppia
Passo successivo: rappresentare la tempistica della tariffa nelle azioni se

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)


</div>
</div>

<div className="row">
<div className="col col--6 text--center">

![Definire le tariffe elettriche – Figura 4](/img/konfiguration-billing-stromtarife-definieren/04.png)
![Definire le tariffe elettriche – Figura 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

Esempio di tariffa unica con metodo forfettario all'80%:

Crei ora una tariffa di rete con il prezzo indicato: 

- Tariffa di rete 2026 : 0.19707 CHF / kWh


</div>
<div className="col col--6 text--center">

![Definire le tariffe elettriche – Figura 6](/img/konfiguration-billing-stromtarife-definieren/06.png)
![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)
![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Esempio di tariffa unica con metodo forfettario all'80%:

Crei ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete HT 2026: 0.22409 CHF / kWh

- Tariffa di rete NT 2026: 0.17007 CHF / kWh

Con le tariffe doppie, la tempistica deve essere creata prima tramite azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate con la "Condizione aggiuntiva" (Zusätzliche Bedingung) per controllarne la validità nel corso della settimana.


</div>
</div>


#### Crei ora la relativa tariffa solare

Nota:
Esistono diverse tariffe solari e tariffe batteria con funzionalità e requisiti differenti.

In generale la tariffa solare vRCP (Solartarif vZEV) è la scelta migliore e più universale.

Ciò che non può fare è definire tariffe diverse per la batteria e per l'energia solare. Per questo deve essere utilizzata la tariffa alternativa.

I dettagli si trovano più sotto nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP (Solartarif vZEV).

Misurazioni:

Tutte le tariffe solari richiedono punti di misura rilevanti, che devono essere collegati.

Opzione più semplice: 

- Campo „Contatore solare“ (Solarzähler): selezioni tutti i contatori di produzione (solare e batteria).

- Campo „Contatore di bilancio“ (Bilanzzähler): selezioni i contatori di bilancio (1 edificio: contatore dell'allacciamento dell'edificio, area: contatore dell'area o più contatori dell'allacciamento dell'edificio)


Opzione alternativa: 

- Campo „Contatore solare“ (Solarzähler): selezioni tutti i contatori di produzione (solare e batteria).

- Campo „Contatore di bilancio“ (Bilanzzähler): selezioni tutti i contatori di consumo e i contatori di produzione.

<div className="row">
<div className="col col--6 text--center">

#### Esempio: tariffa solare unica

![Definire le tariffe elettriche – Figura 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6 text--center">

#### Esempio: tariffa solare doppia

![Definire le tariffe elettriche – Figura 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Definire le tariffe elettriche – Figura 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Avviare il ricalcolo delle tariffe elettriche

Se vengono utilizzate le tariffe virtuali, al termine della configurazione (e in caso di successive modifiche alla configurazione) occorre cliccare su Ricalcola (Neu berechnen) (preferibilmente a partire dall'1.1.2018). In questo modo tutti i valori precedenti vengono ricalcolati.

Prima di poter creare una fattura, occorre attendere finché l'ultimo valore calcolato indica "Oggi" (Heute) e non compare alcun messaggio di errore.

I messaggi di errore dovuti a un problema di configurazione vengono di norma visualizzati entro un minuto. Conviene quindi cliccare su "Ricalcola" (Neu berechnen) e attendere brevemente per vedere se compare o meno un messaggio di errore.

Suggerimento: in caso di modifiche dei prezzi o degli inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo; in tutti gli altri casi un ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Inserimento della tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di potenza di picco è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

Nel foglio tariffario è riconoscibile dalla sua unità di misura, indicata di solito ad es. come 1.50.- / kW / mese

Nel nostro esempio registriamo il prezzo calcolato.

I costi della potenza di picco possono essere registrati con uno dei due metodi seguenti:

- Misurazione del consumo: automaticamente tramite la propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per ogni mese dopo il ricevimento della fattura


Durata di validità:
La durata di validità di una tariffa di potenza di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Inserimento della tassa di base all'80% (se è stato scelto il metodo all'80% con tassa di base)

In questo esempio utilizziamo il metodo all'80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati in "Altro" (Sonstiges)

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base si applicano a tutte le unità di conteggio, pertanto possono essere registrati globalmente nelle tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Passo successivo

## Tutti i dettagli sulle tariffe e sulle funzioni

## Configurazione delle tariffe virtuali (tariffe di rete, solari, batteria)

Le tariffe virtuali consentono di definire autonomamente un modello tariffario dinamico per l'addebito dell'energia. Ciò può essere utilizzato ad es. in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini) per distinguere se un inquilino preleva elettricità da un impianto solare o dalla rete. 

Tenga presente che tutte le tariffe normali per l'elettricità devono essere eliminate.

In Tariffe virtuali (Virtuelle Tarife) vede tutte le tariffe virtuali già registrate. Clicchi su Aggiungi (Hinzufügen) e registri ora tutte le tariffe virtuali.

Nome (Name): il nome della tariffa viene mostrato anche all'utente (inquilino).

Tipo di tariffa (Tarif Type) 

- Tariffa solare vRCP (nuova) (Solartarif vZEV (neu)):
    Consente di creare una tariffa solare globale in un RCP o in un RCP virtuale (vRCP).
    L'energia solare viene ripartita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci degli edifici (RCP) e sulla somma delle produzioni (contatori solari e/o contatori della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi se è fisicamente presente un contatore dell'allacciamento dell'edificio. Con questa tariffa non sono più necessari contatori virtuali di somma.

- Tariffa solare (legacy) (Solartarif (legacy)):
    Consente di addebitare l'energia di un impianto solare all'interno di un RCP.
    Consente di realizzare RCP con o senza contatore di bilancio (gestore della rete di distribuzione). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa batteria (legacy) (Batterietarif (legacy)):
    Consente di ripartire l'energia di una batteria con accoppiamento AC all'interno di un RCP. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica) (Netztarif):
    Con essa viene addebitata l'elettricità di rete. Se necessario, può essere suddivisa anche in fasce tariffarie di ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva (Zusätzliche Bedingung)
    Con una condizione aggiuntiva può stabilire quando questa tariffa è valida. Può trattarsi di un periodo di tempo (ad es. per ore di punta/ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita prima come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa è possibile registrare il prezzo / unità di consumo e una validità.

Prezzo / kWh (Preis / kWh): il prezzo per questa tariffa

Valido dal (Gültig von): la data a partire dalla quale questa tariffa deve essere valida. Vedere la nota.

Valido fino al (Gültig bis): la data fino alla quale questa tariffa deve essere valida. Vedere la nota.

Note: 

- Raccomandiamo di impostare la validità dall'1.1.2000 al 31.12.2099. Il presupposto per questa procedura è che le fatture vengano inviate con la stessa periodicità dell'azienda elettrica locale. In questo caso il prezzo può essere definito prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola" (neu rechnen). Per tutte le altre modifiche il ricalcolo è invece necessario.

- Dopo aver definito tutte le tariffe, deve cliccare su „Ricalcola“ (Neu berechnen). In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, questa intercetta automaticamente tutte le quantità di energia non attribuibili e copre così le 24 ore. In alternativa occorre assicurarsi che gli orari delle condizioni siano configurati correttamente (vedere l'esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, Tariffe virtuali" />

### Tariffa di rete

La tariffa di rete può essere registrata come una delle seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Tariffa doppia

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata come statica (tariffa fissa) o dinamica.

Tariffa fissa

La tariffa fissa applica il prezzo definito / kWh di elettricità di rete.



Tariffa dinamica

La tariffa dinamica invece si avvale di un'API esterna e interroga il provider disponibile per ogni ora sul prezzo attualmente valido.

Il prezzo viene poi applicato per ogni ora.

Tenga presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che devono essere effettuati inserimenti aggiuntivi.

- Tasse aggiuntive come le tasse di concessione del comune
    (da inserire come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (sezione Altro (Sonstiges))


Il calcolo delle fatture con tariffa dinamica richiede sensibilmente più tempo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Tariffa doppia e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate a una tempistica mediante le condizioni.

La tempistica viene definita tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurare la tariffa solare vRCP

La tariffa solare vRCP (Solartarif vZEV) consente di realizzare soluzioni RCP (raggruppamento ai fini del consumo proprio) e RCP virtuale (vRCP). 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori di produzione solare e contatori dell'allacciamento dell'edificio. 

Il calcolo tiene conto delle eccedenze individuali di un edificio e, allo stesso tempo, della domanda di questa eccedenza da parte di altri edifici.

Se è presente un fabbisogno, l'eccedenza viene messa a disposizione dell'edificio vicino. Se non è presente, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un
    \- RCP con contatore di bilancio e solare (bilancio + produzione)
    \- RCP con bilancio e consumo totale (consumo + bilancio)
    \- RCP con solare e consumo totale (produzione + consumo)

- vRCP: più RCP smart-me con contatori dell'allacciamento dell'edificio

- vRCP: combinazione di RCP smart-me con edifici con soli consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari con impianti solari 

- vRCP: più RCP smart-me in combinazione con ex modelli pratici del gestore della rete di distribuzione


Nota:
Con questo sistema tariffario la batteria non può essere tariffata separatamente.

![Definire le tariffe elettriche – Figura 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffare un RCP

- Contatore dell'allacciamento dell'edificio 

- Misurazione della produzione (FV + batteria)


![Definire le tariffe elettriche – Figura 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tariffare un RCP senza contatore di bilancio

- Misurazione della produzione (come produzione e bilancio)

- Tutti i consumatori (100%) 


![Definire le tariffe elettriche – Figura 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Legenda 

Il punto colorato indica in che modo il rispettivo contatore deve essere registrato nella tariffa

![Definire le tariffe elettriche – Figura 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tariffare un vRCP esteso con diverse combinazioni di schemi di misura

![Definire le tariffe elettriche – Figura 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tariffare case a schiera come vRCP

![Definire le tariffe elettriche – Figura 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurare la tariffa solare e la tariffa batteria

Le tariffe solari e le tariffe batteria della serie legacy consentono di realizzare un RCP (raggruppamento ai fini del consumo proprio) con o senza contatore di bilancio.

L'utilizzo di questo gruppo tariffario consente quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione differenziata per batteria ed elettricità solare


Presupposti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o contatore della batteria
Per la tariffa solare e la tariffa batteria deve indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Per la tariffa solare e la tariffa batteria deve indicare un contatore che misura tutti i consumatori sui quali questa energia deve essere ripartita. Di solito si tratta di un contatore virtuale che somma tutti i consumatori (attenzione: i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Per la tariffa solare e la tariffa batteria è possibile indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare viene considerata l'energia immessa nella rete. Ciò significa che ogni 15 minuti viene ripartita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione FV - immissione in rete).

Attenzione:
Rinunciando al contatore di bilancio fisico, non sono insolite deviazioni nell'attribuzione delle tariffe nell'ordine del 10-15%.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per formare il riferimento per l'attribuzione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se ha contatori collegati in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento dell'edificio.
    I contatori solari, i contatori della batteria e i contatori dell'allacciamento dell'edificio devono essere esclusi.

- Se nel sistema sono presenti più impianti solari che non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/billing/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 edificio)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più edifici )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tariffe di potenza di picco

Con le tariffe di potenza di picco è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

- Tariffa doppia per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Tariffa unica per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Solo tariffa di picco senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di potenza di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata su base costi (inserimento dei costi)

Funzionamento generale:

I costi della tariffa di picco registrati o i costi calcolati automaticamente sulla base della misurazione e della tariffa registrata vengono ripartiti sui consumatori al momento della creazione della fattura, nell'intervallo di calcolo scelto. 

La base è costituita dal rispettivo picco di potenza causato (solo prelievo dalla rete) da ogni singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo scelto.

![Definire le tariffe elettriche – Figura 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tariffe di picco senza misurazione principale attiva (inserimento manuale dei costi)

Adatte a tutti i sistemi che non dispongono di una misurazione di riferimento. 

![Definire le tariffe elettriche – Figura 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Definire le tariffe elettriche – Figura 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tariffe di picco con misurazione principale attiva (calcolo automatico dei costi)

Adatte a tutti i sistemi che dispongono di una misurazione di bilancio diretta.

![Definire le tariffe elettriche – Figura 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Struttura: tariffa unica senza solare

- In questo caso raccomandiamo di non utilizzare tariffe virtuali. Le tariffe dell'elettricità (tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe dell'elettricità alle tariffe virtuali.


Logica: le letture del contatore vengono rilevate e utilizzate per il Billing. Non è necessario alcun calcolo.

Struttura: tariffa unica con solare

- Tariffa unica elettricità solare: definire la tariffa solare senza azione se

- Tariffa unica elettricità di rete: definire la tariffa normale senza azione se


Logica: per prima cosa viene ripartita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Tariffa unica elettricità solare: definire la tariffa solare senza azione se

- Ore di punta elettricità di rete: definire la tariffa normale con azione se

    - Esempio: da lu a ve dalle 7h00 alle 22h00 o sa dalle 7h00 alle 13h00 

- Ore fuori punta elettricità di rete: definire la tariffa normale senza azione se


Logica: per prima cosa viene ripartita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine viene applicata la tariffa senza condizione per l'elettricità restante.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e solare

- Ore di punta elettricità solare: definire la tariffa solare con azione se

    - Esempio: da lu a ve dalle 7h00 alle 22h00 o sa dalle 7h00 alle 13h00 

- Ore fuori punta elettricità solare: definire la tariffa solare con azione se

    - Esempio: da lu a ve dalle 22h00 alle 7h00 o sa dalle 13h00 alle 7h00 o do dalle 0h00 alle 0h00

- Ore di punta elettricità di rete: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se delle ore di punta per l'elettricità solare 

- Ore fuori punta elettricità di rete: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se delle ore fuori punta per l'elettricità solare 


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Ore di punta elettricità solare: definire la tariffa solare senza azione se

- Ore di punta elettricità di rete estate: definire la tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 04 / 00:00 all'1 / 10 / 00:00.

- Ore fuori punta elettricità di rete estate: definire la tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 04 / 00:00 all'1 / 10 / 00:00.

- Ore di punta elettricità di rete inverno: definire la tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 10 / 00:00 all'1 / 4 / 00:00.

- Ore fuori punta elettricità di rete inverno: definire la tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 10 / 00:00 all'1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Ore fuori punta elettricità di rete e solare inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 10 / 00:00 all'1 / 04 / 00:00.

- Ore di punta elettricità di rete e solare inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 10 / 00:00 all'1 / 04 / 00:00.

- Ore fuori punta elettricità di rete e solare estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 4 / 00:00 all'1 / 10 / 00:00.

- Ore di punta elettricità di rete e solare estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dall'1 / 4 / 00:00 all'1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui occorre procedere in due passaggi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa devono essere definite le azioni se.

- Elettricità di rete e solare estate NT

    - Esempio: estate NT da lu a ve dalle 06h00 alle 22h00 da lu a ve e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT da lu a ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT da lu a ve dalle 22h00 alle 06h00 da lu a ve e sa e do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT da lu a ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per ogni periodo.

In questo caso devono essere registrati i periodi o la durata. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome (Name): Uri Sommer HT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome (Name): Uri Sommer HT Solar


- Tipo (Type): tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata (Dauer): dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome (Name): Uri Sommer NT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome (Name): Uri Sommer NT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome (Name): Uri Winter HT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome (Name): Uri Winter HT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome (Name): Uri Winter NT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome (Name): Uri Winter NT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe dell'elettricità (supportate solo se la funzione VEWA non viene utilizzata)

Per accedere alle impostazioni delle tariffe dell'elettricità, clicchi a sinistra sull'immobile e scorra fino alla finestra verde Tariffe elettricità (Tarife Elektrizität). Qui vengono visualizzate le due tariffe T1 e T2. Selezioni una delle tariffe e clicchi su Modifica (Editieren) per apportare modifiche alle sue proprietà (ad es. nome, prezzo ecc.)

Per poter lavorare con le tariffe dell'elettricità, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei contatori corrispondenti.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
