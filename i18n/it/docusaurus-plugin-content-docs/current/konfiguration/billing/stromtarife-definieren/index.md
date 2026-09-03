---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy ti spiega le basi di come sono generalmente composti i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Stabilire il prezzo dell'elettricità

Nel video a destra Guy ti spiega le basi di come sono generalmente composti i prezzi dell'elettricità. 



Da poco puoi anche utilizzare il nostro calcolatore online delle tariffe elettriche, che ti dà una mano e si basa sulla spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - Stabilire i prezzi nel RCP" />

Stabilire i prezzi RCP in smart-me Billing, spiegato da Guy.

Attenzione: il video è stato registrato con una versione precedente dell'Excel. In quella versione le formule contengono ancora un errore. L'Excel è stato corretto.

[Esempio stabilire i prezzi nel RCP.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe di elettricità oppure con le tariffe virtuali. La soluzione con le tariffe di elettricità è adatta esclusivamente alla realizzazione di sistemi con solo elettricità di rete. In tutti gli altri casi si devono utilizzare le tariffe virtuali.

### 1. Procurati il foglio tariffario della tua azienda elettrica

Il foglio tariffario della tua azienda elettrica è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Informati anche su quale tariffa acquisti esattamente presso l'azienda elettrica: 

- Verde, blu, grigia o altre versioni

- Tariffa unica o tariffa doppia o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è normalmente composto da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzazione della rete

- Compensi per la misurazione

- Tributi pubblici


I tributi pubblici in particolare non sono riportati integralmente sul foglio tariffario. I tributi comunali variano da comune a comune e sono fissati in un foglio tariffario esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffario.

Procurati questo valore per la tua tariffazione tramite il link stampato sul foglio tariffario.

Di norma è anch'esso un valore in ct. / kWh, ma può anche essere indicato in % dell'utilizzazione della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scegli il calcolo della tariffa solare da utilizzare per il tuo (v)RCP

Puoi scegliere tra due approcci di fondo:

- Metodo forfettario secondo l'80% del prodotto di rete standard
    L'aspetto importante qui è che il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    Qui non possono essere addebitati costi per la misurazione del RCP, per l'amministrazione e il conteggio del RCP.
    La tassa di contatore dell'azienda elettrica per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: elettricità di rete conteggiata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo di acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione del profitto all'interno del RCP, fintanto che vi è un'elevata occupazione degli appartamenti in affitto.
            Questo metodo non è adatto se nello stesso edificio sono presenti grandi consumatori industriali e vi è un sistema multitariffa.
            Migliore soluzione per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento Elcom (da utilizzare in caso di tariffe dinamiche dell'azienda elettrica)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da attuare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con l'industria e la multitariffa (tariffa doppia), può succedere che il cliente industriale, a causa della tariffa solare più alta, alla fine paghi più che fuori dal RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per la misurazione, il conteggio e la gestione, in aggiunta al valore calcolato dell'elettricità solare. I dettagli si trovano nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete eventualmente non coprisse i costi del tuo impianto solare. Ciò accade molto raramente.

        - Questo metodo deve essere dimostrato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcola le tue tariffe per il periodo tariffario

Per il calcolo utilizza nel modo più semplice il nostro calcolatore di tariffe. A seconda del metodo scelto, ti indica quali registrazioni devi effettuare in smart-me.

Con la tariffa dinamica: scegli il metodo 80% Elcom e cerca nel calcolatore la tariffa H4 della tua regione e della tua azienda elettrica come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configura le tue tariffe

Torna ora alla configurazione dell'immobile.

1.  Fatturazione (Rechnungsstellung)

2.  Configurazione (Konfiguration)

3.  Immobile (Liegenschaft)

4.  Tariffe virtuali (Virtuelle Tarife)


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crea ora le tariffe di rete del tuo periodo tariffario

### Esempio: tariffa unica

### Esempio: tariffa doppia

Passo successivo: rappresentare la temporizzazione della tariffa nelle azioni Se

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

![Definire le tariffe elettriche – Figura 4](/img/konfiguration-billing-stromtarife-definieren/04.png)



Esempio tariffa unica con metodo forfettario 80%:

Crea ora una tariffa di rete con il prezzo indicato: 

- Tariffa di rete 2026 : 0.19707 CHF / kWh


![Definire le tariffe elettriche – Figura 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

![Definire le tariffe elettriche – Figura 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Esempio tariffa unica con metodo forfettario 80%:

Crea ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete ore di punta 2026: 0.22409 CHF / kWh

- Tariffa di rete ore fuori punta 2026: 0.17007 CHF / kWh


Con le tariffe doppie, la temporizzazione deve essere creata in via prioritaria mediante azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate con la "Condizione aggiuntiva" per controllare la validità nel corso della settimana.



![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Crea ora la tariffa solare corrispondente

Nota:
Esistono diverse tariffe solari e tariffe per batteria con capacità e presupposti differenti.

In generale la tariffa solare vRCP è la scelta migliore e più universale.

Ciò che questa non può fare è definire tariffe diverse per la batteria e per l'energia solare. Per questo si deve utilizzare la tariffa alternativa.

I dettagli si trovano più sotto nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari necessitano di punti di misura rilevanti che devono essere collegati.

Opzione più semplice: 

- Campo "Contatore solare" (Solarzähler): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" (Bilanzzähler): seleziona i contatori di bilancio (1 casa: contatore dell'allacciamento domestico, comprensorio: contatore del comprensorio o più contatori di allacciamento domestico)


Opzione alternativa: 

- Campo "Contatore solare" (Solarzähler): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" (Bilanzzähler): seleziona tutti i contatori di consumo e i contatori di produzione.


Tariffa solare unica

![Definire le tariffe elettriche – Figura 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

Tariffa solare doppia

![Definire le tariffe elettriche – Figura 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Definire le tariffe elettriche – Figura 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

### Avviare il ricalcolo delle tariffe elettriche

Se si utilizzano le tariffe virtuali, al termine della configurazione (così come in caso di successive modifiche della configurazione) si deve cliccare su Ricalcola (al meglio a partire dall'1.1.2018). In questo modo tutti i valori esistenti vengono ricalcolati.

Prima di poter creare una fattura si deve attendere che l'ultimo valore calcolato indichi "Oggi" e che non compaia alcun messaggio di errore.

I messaggi di errore dovuti a un problema di configurazione vengono di norma visualizzati entro un minuto. Vale quindi la pena cliccare su "Ricalcola" e attendere brevemente per vedere se compare un messaggio di errore o no.

Consiglio: in caso di modifiche di prezzo o di inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo, in tutti gli altri casi il ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Registrare la tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe per la potenza di punta si possono coprire modelli elettrici estesi o innovativi delle aziende elettriche. 

Nel foglio tariffario è riconoscibile dalla sua unità. Di norma indicata come p. es. 1.50.- / kW / mese

Nel nostro esempio registriamo il prezzo calcolato.

I costi della potenza di punta possono essere registrati con uno di due metodi:

- Misurazione del consumo: automaticamente tramite propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per mese dopo il ricevimento della fattura


Durata di validità:
La durata di validità di una tariffa per la potenza di punta è limitata a 1 anno; questa può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi mensili sostenuti (fattura dell'azienda elettrica) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Registrare la tassa di base dell'80% (se è stato scelto il metodo 80% con tassa di base)

In questo esempio utilizziamo il metodo 80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati sotto "Altro" (Sonstiges)

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base sono a carico di tutte le unità di conteggio, per questo motivo essa può essere registrata globalmente nelle tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Passo successivo

## Tutti i dettagli sulle tariffe e le funzioni

## Configurazione delle tariffe virtuali (tariffe di rete, solari, per batteria)

Le tariffe virtuali permettono di definire autonomamente un modello tariffario dinamico per il conteggio dell'energia. Questo può essere utilizzato p. es. per distinguere, in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini), se un inquilino prelevi elettricità da un impianto solare o dalla rete. 

Tieni presente che tutte le tariffe normali per l'elettricità devono essere cancellate.

Sotto Tariffe virtuali vedi tutte le tariffe virtuali già registrate. Clicca su Aggiungi e registra ora tutte le tariffe virtuali.

Nome: il nome della tariffa viene visualizzato anche all'utente (inquilino).

Tipo di tariffa 

- Tariffa solare vRCP (nuova):
    Con questa si può creare una tariffa solare globale in un RCP o in un vRCP.
    L'energia solare viene distribuita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci delle case (RCP) e sulla somma delle produzioni (contatore solare e/o contatore della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi se è fisicamente presente un contatore dell'allacciamento domestico. Con questa tariffa viene a mancare la necessità di contatori virtuali di somma.

- Tariffa solare (legacy):
    Con questa si può conteggiare l'energia di un impianto solare all'interno di un RCP.
    Permette di realizzare RCP con o senza contatore di bilancio (gestore della rete di distribuzione). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa per batteria (legacy):
    Con questa si può distribuire l'energia di una batteria accoppiata in AC all'interno di un RCP. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica):
    Con questa viene conteggiata l'elettricità di rete. All'occorrenza può essere inoltre suddivisa in fasce di ore di punta e ore fuori punta o in modo dinamico.

- Condizione aggiuntiva
    Con una condizione aggiuntiva potete stabilire quando questa tariffa è valida. Questo può essere un intervallo di tempo (p. es. per ore di punta / ore fuori punta) o una qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa possono essere registrati prezzo / unità di consumo e una validità.

Prezzo / kWh: il prezzo per questa tariffa

Valido da: la data a partire dalla quale questa tariffa deve essere valida. Vedi nota.

Valido fino a: la data fino alla quale questa tariffa deve essere valida. Vedi nota.

Note: 

- Raccomandiamo di impostare la validità dall'1.1.2000 al 31.12.2099. Condizione per questa gestione è che le fatture vengano inviate con la stessa periodicità dell'azienda elettrica locale. In questo caso il prezzo può essere fissato prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola". Per tutte le altre modifiche il ricalcolo è invece necessario.

- Quando avete definito tutte le tariffe, dovete cliccare su "Ricalcola". In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, essa intercetta automaticamente tutte le quantità di energia non attribuibili e copre così le 24 ore. In alternativa si deve fare attenzione che gli orari delle condizioni siano configurati correttamente (vedi esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, Tariffe virtuali" />

### Tariffa di rete

La tariffa di rete può essere registrata come le seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Tariffa doppia

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata in modo statico (tariffa fissa) oppure dinamico.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh definito per l'elettricità di rete.



Tariffa dinamica

La tariffa dinamica si serve invece di una API esterna e interroga il provider disponibile, per ogni ora, sul prezzo attualmente valido.

Il prezzo viene poi applicato per ogni ora.

Tieni presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che devono essere effettuate registrazioni aggiuntive.

- Tasse aggiuntive come le tasse di concessione del comune
    (Registrare come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (sezione Altro)


Il calcolo delle fatture con tariffa dinamica richiede sensibilmente più tempo degli altri metodi (trasferimento dei dati e applicazione)



Tariffa doppia e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate a una temporizzazione con l'aiuto delle condizioni.

La temporizzazione viene definita tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurare la tariffa solare vRCP

La tariffa solare vRCP consente la realizzazione di soluzioni RCP e vRCP. 

La configurazione tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo di rete effettivo sulla base di più contatori di produzione solare e contatori di allacciamento domestico. 

Il calcolo tiene conto delle eccedenze individuali di una casa e, allo stesso tempo, della domanda di altre case per questa eccedenza.

Se è presente un fabbisogno, l'eccedenza viene messa a disposizione della casa vicina. Se non ce n'è nessuno, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un normale RCP con o senza contatore di bilancio

- vRCP: più RCP smart-me con contatori di allacciamento domestico

- vRCP: combinazione di RCP smart-me con edifici con soli consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari con impianti solari 

- vRCP: più RCP smart-me in combinazione con precedenti modelli pratici del gestore della rete di distribuzione


Nota:
Con questo sistema tariffario la batteria non può essere tariffata separatamente.

![Definire le tariffe elettriche – Figura 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffare un RCP

- Contatore dell'allacciamento domestico 

- Misurazione della produzione (PV + batteria)


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

Tariffare case unifamiliari a schiera come vRCP

![Definire le tariffe elettriche – Figura 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurare la tariffa solare e per batteria

Le tariffe solari e le tariffe per batteria della serie legacy consentono la realizzazione di un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo di tariffazione consente quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione differenziata per batteria ed elettricità solare


Presupposto per l'utilizzo:

- Applicazione di uno schema di misura al 100%, tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o della batteria
Con la tariffa solare e per batteria devi indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Con la tariffa solare e per batteria devi indicare un contatore che misura tutti i consumatori sui quali questa energia deve essere distribuita. Si tratta nella maggior parte dei casi di un contatore virtuale che somma tutti i consumatori (attenzione, i contatori virtuali necessitano allora di una licenza aggiuntiva).

Contatore di bilancio
Con la tariffa solare e la tariffa per batteria è possibile indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare viene considerata l'energia che viene immessa in rete. Ciò significa che, ogni 15 minuti, viene distribuita solo l'energia solare che è stata effettivamente consumata nell'edificio (energia disponibile = produzione PV - immissione in rete).

Attenzione:
Rinunciando al contatore di bilancio fisico, scostamenti nell'attribuzione delle tariffe nell'ordine del 10-15% non sono inusuali.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per la formazione del riferimento per l'attribuzione delle tariffe. Questo viene formato a partire da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se avete collegato dei contatori in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento domestico.
    I contatori solari, i contatori della batteria e i contatori dell'allacciamento domestico devono essere esclusi.

- Se nel sistema sono presenti più impianti solari e questi non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/billing/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 casa)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più case )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tariffe per la potenza di punta

Con le tariffe per la potenza di punta si possono coprire modelli elettrici estesi o innovativi delle aziende elettriche. 

- Tariffa doppia per il consumo di base + potenza di punta
    (Tariffe virtuali in combinazione con la tariffa Peak)

- Tariffa unica per il consumo di base + potenza di punta
    (Tariffe virtuali in combinazione con la tariffa Peak)

- Solo tariffa di punta senza tariffe di base


Durata di validità:
La durata di validità di una tariffa per la potenza di punta è limitata a 1 anno; questa può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi mensili sostenuti (fattura dell'azienda elettrica) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata su base costi (registrazione dei costi)

Funzionamento generale:

I costi della tariffa di punta registrati o i costi calcolati automaticamente in base alla misurazione e alla tariffa registrata vengono suddivisi tra i consumatori, al momento della creazione della fattura, nell'intervallo di calcolo scelto. 

Come base serve la rispettiva punta di corrente causata (solo prelievo di rete) da ogni singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo scelto.

![Definire le tariffe elettriche – Figura 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tariffe di punta senza misurazione principale attiva (registrazione manuale dei costi)

È adatta a tutti i sistemi che non dispongono di una misurazione di riferimento. 

![Definire le tariffe elettriche – Figura 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Definire le tariffe elettriche – Figura 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tariffe di punta con misurazione principale attiva (calcolo automatico dei costi)

È adatta a tutti i sistemi che dispongono di una misurazione di bilancio diretta.

![Definire le tariffe elettriche – Figura 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Struttura: tariffa unica senza solare

- In questo caso raccomandiamo di non utilizzare tariffe virtuali. Le tariffe di elettricità (tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe di elettricità alle tariffe virtuali.


Logica: le letture dei contatori vengono interrogate e utilizzate per il billing. Non è necessario alcun calcolo.

Struttura: tariffa unica con solare

- Elettricità solare tariffa unica: definire la tariffa solare senza azione Se

- Elettricità di rete tariffa unica: definire la tariffa normale senza azione Se


Logica: prima viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare tariffa unica: definire la tariffa solare senza azione Se

- Elettricità di rete ore di punta: definire la tariffa normale con azione Se

    - Esempio. Da lun a ven dalle 7h00 alle 22h00 o sab dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire la tariffa normale senza azione Se


Logica: prima viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Alla fine, per l'elettricità restante viene inviata la tariffa senza condizione.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e solare

- Elettricità solare ore di punta: definire la tariffa solare con azione Se

    - Esempio: da lun a ven dalle 7h00 alle 22h00 o sab dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire la tariffa solare con azione Se

    - Esempio: da lun a ven dalle 22h00 alle 7h00 o sab dalle 13h00 alle 7h00 o dom dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire la tariffa normale con azione Se

    - Utilizzare la stessa azione Se come per l'elettricità solare ore di punta 

- Elettricità di rete ore fuori punta: definire la tariffa normale con azione Se

    - Utilizzare la stessa azione Se come per l'elettricità solare ore fuori punta 


Logica: prima viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso applicativo è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare ore di punta: definire la tariffa solare senza azione Se

- Elettricità di rete ore di punta estate: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lun a dom dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lun a dom dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lun a dom dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lun a dom dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso applicativo è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (p. es. EWS/EBS)

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno ore fuori punta dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: da lun a dom dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno ore di punta dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: da lun a dom dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate ore fuori punta dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: da lun a dom dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno: da lun a dom dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate ore di punta dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: da lun a dom dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno: da lun a dom dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso applicativo è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e l'elettricità solare, di giorno ore fuori punta in estate e ore di punta in inverno (p. es. Energie Uri dall'1.10.2025)

Descrizione: qui si deve lavorare in due passaggi. 1x se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa devono essere definite le azioni Se.

- Elettricità di rete e solare estate ore fuori punta

    - Esempio: estate ore fuori punta da lun a ven dalle 06h00 alle 22h00 da lun a ven e sab e dom sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lun a ven: dalle 6h00 alle 22h00 

        - Intervallo di tempo sab e dom: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate ore di punta

    - Esempio: estate ore di punta da lun a ven dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo da lun a ven: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno ore fuori punta

    - Esempio: inverno ore fuori punta da lun a ven dalle 22h00 alle 06h00 da lun a ven e sab e dom sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lun a ven: dalle 22h00 alle 06h00 

        - Intervallo di tempo sab e dom: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno ore di punta

    - Esempio: inverno ore di punta da lun a ven dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O

        - Intervallo di tempo da lun a ven: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per periodo di tempo.

In questo caso devono essere registrati i periodi, rispettivamente la durata. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: tariffa di rete

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: tariffa solare incl. vRCP 

- Durata: dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva: Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: tariffa di rete

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: tariffa di rete

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: tariffa di rete

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe di elettricità (supportate solo se non viene utilizzata la funzione VEWA)

Per accedere alle impostazioni delle tariffe di elettricità, clicca a sinistra sull'immobile e scorri fino alla finestra verde Tariffe elettricità (Tarife Elektrizität). Qui vengono visualizzate le due tariffe T1 e T2. Seleziona una delle tariffe e clicca su Modifica per apportare modifiche alle sue proprietà (p. es. nome, prezzo ecc.)

Per poter lavorare con le tariffe di elettricità, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei rispettivi contatori.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
