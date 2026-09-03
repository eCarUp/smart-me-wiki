---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy ti spiega le basi di come sono generalmente composti i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Definire il prezzo dell'elettricità

Nel video a destra Guy ti spiega le basi di come sono generalmente composti i prezzi dell'elettricità. 



Da poco puoi però utilizzare anche il nostro calcolatore online delle tariffe elettriche, che ti dà una mano e si basa sulla spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video" />

Definizione dei prezzi RCP in smart-me Billing spiegata da Guy.

Attenzione: il video è stato registrato con una versione precedente del file Excel. In quella versione le formule contengono ancora un errore. L'Excel è stato corretto.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing è possibile lavorare con le tariffe elettriche oppure con le tariffe virtuali. La soluzione con le tariffe elettriche è adatta esclusivamente alla realizzazione di sistemi con solo elettricità di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Procurati il foglio tariffario della tua azienda elettrica

Il foglio tariffario della tua azienda elettrica è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Informati anche su quale tariffa acquisti esattamente presso l'azienda elettrica: 

- Verde, blu, grigio o altre varianti

- Tariffa unica, doppia tariffa o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è normalmente composto da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzo della rete

- Compensi di misurazione

- Tributi pubblici


I tributi pubblici in particolare non sono riportati in modo completo sul foglio tariffario. I tributi comunali variano da comune a comune e sono riportati in un foglio tariffario esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffario.

Procurati questo valore per la tua tariffazione tramite il link stampato sul foglio tariffario.

Di norma è anch'esso un valore in ct. / kWh, ma può anche essere indicato in % dell'utilizzo della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scegli il calcolo della tariffa solare da utilizzare per il tuo (v)RCP

Puoi scegliere fra due approcci di base:

- Metodo forfettario secondo l'80% del prodotto di rete standard
    Qui è importante sapere che il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    Qui non possono essere addebitati costi per la misurazione del RCP, per l'amministrazione e il conteggio del RCP.
    La tassa di contatore dell'azienda elettrica per il contatore principale del RCP non può essere addebitata qui separatamente in aggiunta.

    - -   Variante 1: elettricità di rete fatturata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo di acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione dei ricavi all'interno del RCP, finché il tasso di occupazione degli appartamenti in affitto è elevato.
            Questo metodo non è adatto se nello stesso edificio sono presenti grandi consumatori industriali ed esiste un sistema multitariffa.
            Soluzione migliore per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento Elcom (da utilizzare in caso di tariffe dinamiche dell'azienda elettrica)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da attuare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con l'industria e la multitariffa (doppia tariffa), può succedere che il consumatore industriale, a causa della tariffa solare più elevata, paghi alla fine più che fuori dal RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per la misurazione, il conteggio e la gestione, in aggiunta al valore calcolato dell'elettricità solare. Trovi i dettagli nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete non coprisse eventualmente i costi del tuo impianto solare. Questo è molto raramente il caso.

        - Questo metodo deve essere dimostrato anno dopo anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcola le tue tariffe per il periodo tariffario

Per il calcolo, il modo più semplice è utilizzare il nostro calcolatore delle tariffe. A seconda del metodo scelto, ti indica quali registrazioni devi effettuare in smart-me.

Con la tariffa dinamica: scegli il metodo 80% Elcom e cerca nel calcolatore la tariffa H4 della tua regione e della tua azienda elettrica come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configura le tue tariffe

Torna ora nella configurazione dell'immobile.

1.  Fatturazione (Rechnungsstellung)

2.  Configurazione (Konfiguration)

3.  Immobile (Liegenschaft)

4.  Tariffe virtuali (Virtuelle Tarife)


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crea ora le tariffe di rete del tuo periodo tariffario

### Esempio: tariffa unica

### Esempio: doppia tariffa

Passo successivo: rappresentare la temporizzazione della tariffa nelle azioni Se

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

![Definire le tariffe elettriche – Figura 4](/img/konfiguration-billing-stromtarife-definieren/04.png)



Esempio di tariffa unica con metodo forfettario 80%:

Crea ora una tariffa di rete con il prezzo indicato: 

- Tariffa di rete 2026 : 0.19707 CHF / kWh


![Definire le tariffe elettriche – Figura 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

![Definire le tariffe elettriche – Figura 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Esempio di tariffa unica con metodo forfettario 80%:

Crea ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete ore di punta 2026: 0.22409 CHF / kWh

- Tariffa di rete ore fuori punta 2026: 0.17007 CHF / kWh


Con le doppie tariffe, la temporizzazione deve essere creata in via prioritaria mediante azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate con la "Condizione aggiuntiva" per gestire la validità nel corso della settimana.



![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Crea ora la relativa tariffa solare

Nota:
Esistono diverse tariffe solari e tariffe per la batteria con funzionalità e presupposti differenti.

In generale la tariffa solare vRCP è la scelta migliore e più universale.

Ciò che non permette di fare è definire tariffe diverse per la batteria e per l'energia solare. A tale scopo va utilizzata la tariffa alternativa.

Trovi i dettagli più in basso nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari necessitano di punti di misurazione rilevanti che devono essere collegati.

Opzione più semplice: 

- Campo "Contatore solare" (Solarzähler): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" (Bilanzzähler): seleziona i contatori di bilancio (1 casa: contatore di allacciamento dell'edificio, comprensorio: contatore del comprensorio o più contatori di allacciamento degli edifici)


Opzione alternativa: 

- Campo "Contatore solare" (Solarzähler): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" (Bilanzzähler): seleziona tutti i contatori di consumo e i contatori di produzione.


Tariffa solare unica

![Definire le tariffe elettriche – Figura 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

Doppia tariffa solare

![Definire le tariffe elettriche – Figura 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Definire le tariffe elettriche – Figura 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

### Avviare il ricalcolo delle tariffe elettriche

Se si utilizzano le tariffe virtuali, al termine della configurazione (così come in caso di successive modifiche della configurazione) è necessario cliccare su Ricalcola (Neu berechnen) (preferibilmente a partire dal 1.1.2018). In questo modo tutti i valori esistenti vengono ricalcolati.

Prima di poter creare una fattura, occorre attendere che l'ultimo valore calcolato indichi "Oggi" (Heute) e che non compaia alcun messaggio di errore.

I messaggi di errore dovuti a un problema di configurazione vengono di norma visualizzati entro un minuto. Vale quindi la pena cliccare su "Ricalcola" (Neu berechnen) e attendere brevemente per vedere se compare un messaggio di errore o no.

Consiglio: in caso di modifiche dei prezzi o degli inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo, in tutti gli altri casi il ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Registrazione della tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di punta è possibile coprire modelli elettrici estesi o innovativi delle aziende elettriche. 

Nel foglio tariffario è riconoscibile dalla sua unità. Indicata di norma ad esempio come 1.50.- / kW / mese

Nel nostro esempio registriamo il prezzo calcolato.

I costi della potenza di punta possono essere registrati con uno di due metodi:

- Misurazione del consumo: automaticamente tramite misurazione di bilancio propria

- Registrazione dei costi: registrazione successiva dei costi per mese dopo il ricevimento della fattura


Durata di validità:
La durata di validità di una tariffa di punta è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi sostenuti mensilmente (fattura dell'azienda elettrica) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misurazione principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Registrazione della tassa di base 80% (se è stato scelto il metodo 80% con tassa di base)

In questo esempio utilizziamo il metodo 80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati sotto "Altro" (Sonstiges)

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base si applicano a tutte le unità di conteggio, pertanto possono essere registrati globalmente presso le tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Passo successivo

## Tutti i dettagli sulle tariffe e sulle funzioni

## Configurazione delle tariffe virtuali (tariffe di rete, solari, per la batteria)

Le tariffe virtuali permettono di definire autonomamente un modello tariffario dinamico per la fatturazione dell'energia. Questo può essere utilizzato ad esempio per distinguere, in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini), se un inquilino prelevi elettricità da un impianto solare o dalla rete. 

Tieni presente che tutte le tariffe normali per l'elettricità devono essere cancellate.

Sotto Tariffe virtuali (Virtuelle Tarife) vedi tutte le tariffe virtuali già registrate. Clicca su Aggiungi (Hinzufügen) e registra ora tutte le tariffe virtuali.

Nome: il nome della tariffa viene visualizzato anche all'utente (inquilino).

Tipo di tariffa 

- Tariffa solare vRCP (nuova):
    Con questa è possibile creare una tariffa solare globale in un RCP o in un vRCP.
    L'energia solare viene distribuita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci degli edifici (RCP) e sulla somma delle produzioni (contatore solare e/o contatore della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi se è fisicamente presente un contatore di allacciamento dell'edificio. Con questa tariffa non sono più necessari contatori virtuali di somma.

- Tariffa solare (legacy):
    Con questa è possibile fatturare l'energia di un impianto solare all'interno di un RCP.
    Permette di realizzare RCP con o senza contatore di bilancio (gestore della rete di distribuzione). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa per la batteria (legacy):
    Con questa è possibile distribuire l'energia di una batteria accoppiata in AC all'interno di un RCP. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica):
    Con questa viene fatturata l'elettricità di rete. In caso di necessità può essere suddivisa anche in ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva
    Con una condizione aggiuntiva potete stabilire quando questa tariffa è valida. Può trattarsi di un intervallo di tempo (ad es. per le ore di punta / fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa possono essere registrati prezzo / unità di consumo e una validità.

Prezzo / kWh: il prezzo per questa tariffa

Valido da: la data a partire dalla quale questa tariffa deve essere valida. Vedi nota.

Valido fino a: la data fino alla quale questa tariffa deve essere valida. Vedi nota.

Note: 

- Consigliamo di impostare la validità dall'1.1.2000 al 31.12.2099. Il presupposto per questa gestione è che le fatture vengano inviate con la stessa periodicità dell'azienda elettrica locale. In questo caso il prezzo può essere fissato prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "ricalcola" (neu rechnen). Per tutte le altre modifiche il ricalcolo è invece necessario.

- Quando avete definito tutte le tariffe, dovete cliccare su "Ricalcola" (Neu berechnen). In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore della giornata. Se è registrata una tariffa normale senza condizioni, questa intercetta automaticamente tutte le quantità di energia non attribuibili e copre così le 24 ore. In alternativa occorre fare attenzione che gli orari delle condizioni siano configurati correttamente (vedi esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video" />

### Tariffa di rete

La tariffa di rete può essere registrata come le seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Doppia tariffa

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata in modo statico (tariffa fissa) o dinamico.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh definito per l'elettricità di rete.



Tariffa dinamica

La tariffa dinamica invece si avvale di un'API esterna e interroga il provider disponibile per ogni ora sul prezzo attualmente valido.

Il prezzo viene poi applicato per ora.

Tieni presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che devono essere effettuate registrazioni aggiuntive.

- Tasse aggiuntive come le tasse di concessione del comune
    (Registrare come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (settore Altro)


Il calcolo delle fatture con tariffa dinamica dura sensibilmente più a lungo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Doppia tariffa e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate a una temporizzazione con l'aiuto delle condizioni.

La temporizzazione viene definita tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurare la tariffa solare vRCP

La tariffa solare vRCP consente la realizzazione di soluzioni RCP e vRCP. 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori di produzione solare e contatori di allacciamento degli edifici. 

Il calcolo tiene conto delle eccedenze individuali di un edificio e contemporaneamente della richiesta di questa eccedenza da parte di altri edifici.

Se esiste un fabbisogno, l'eccedenza viene messa a disposizione dell'edificio vicino. Se non ne esiste alcuno, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un normale RCP con o senza contatore di bilancio

- vRCP: più RCP smart-me con contatori di allacciamento degli edifici

- vRCP: combinazione di RCP smart-me con edifici con soli consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari con impianti solari 

- vRCP: più RCP smart-me in combinazione con precedenti modelli pratici dei gestori della rete di distribuzione


Nota:
Con questo sistema tariffario la batteria non può essere tariffata separatamente.

![Definire le tariffe elettriche – Figura 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffare il RCP

- Contatore di allacciamento dell'edificio 

- Misurazione della produzione (PV + batteria)


![Definire le tariffe elettriche – Figura 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tariffare il RCP senza contatore di bilancio

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

### Configurare la tariffa solare e per la batteria

Le tariffe solari e le tariffe per la batteria della serie legacy consentono la realizzazione di un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo di tariffazione permette quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione diversa per la batteria e per l'elettricità solare


Presupposti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o della batteria
Nella tariffa solare e nella tariffa per la batteria devi indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Nella tariffa solare e nella tariffa per la batteria devi indicare un contatore che misuri tutti i consumatori sui quali questa energia deve essere distribuita. Di norma si tratta di un contatore virtuale che somma tutti i consumatori (attenzione: i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Nella tariffa solare e nella tariffa per la batteria è possibile indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare viene considerata l'energia immessa in rete. Ciò significa che per ogni 15 minuti viene distribuita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione PV - immissione in rete).

Attenzione:
Se si rinuncia al contatore di bilancio fisico, non sono inusuali scostamenti nell'attribuzione delle tariffe nell'ordine del 10-15%.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per costituire il riferimento per l'attribuzione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se avete collegato contatori in serie, è rilevante solo il contatore più vicino al sottoquadro / all'allacciamento dell'edificio.
    I contatori solari, i contatori della batteria e i contatori di allacciamento degli edifici vanno esclusi.

- Se nel sistema sono presenti più impianti solari e non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/billing/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare il RCP con tariffe legacy (1 casa)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare il RCP con tariffe legacy (più case )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tariffe di punta

Con le tariffe di punta è possibile coprire modelli elettrici estesi o innovativi delle aziende elettriche. 

- Doppia tariffa per il consumo di base + potenza di punta
    (Tariffe virtuali in combinazione con la tariffa Peak)

- Tariffa unica per il consumo di base + potenza di punta
    (Tariffe virtuali in combinazione con la tariffa Peak)

- Solo tariffa di punta senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di punta è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi sostenuti mensilmente (fattura dell'azienda elettrica) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misurazione principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata su base costi (registrazione dei costi)

Funzionamento generale:

I costi della tariffa di punta registrati oppure i costi calcolati automaticamente sulla base della misurazione e della tariffa registrata vengono suddivisi tra i consumatori al momento della creazione della fattura, nell'intervallo di calcolo scelto. 

Come base serve la rispettiva punta di potenza causata (solo prelievo dalla rete) da ogni singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo scelto.

![Definire le tariffe elettriche – Figura 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tariffe di punta senza misurazione principale attiva (registrazione manuale dei costi)

Adatto a tutti i sistemi che non dispongono di una misurazione di riferimento. 

![Definire le tariffe elettriche – Figura 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Definire le tariffe elettriche – Figura 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tariffe di punta con misurazione principale attiva (calcolo automatico dei costi)

Adatto a tutti i sistemi che dispongono di una misurazione di bilancio diretta.

![Definire le tariffe elettriche – Figura 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Configurazione: tariffa unica senza solare

- In questo caso consigliamo di non utilizzare tariffe virtuali. Le tariffe elettriche (tutte) sono in questo caso più efficienti. È possibile in qualsiasi momento passare dalle tariffe elettriche alle tariffe virtuali.


Logica: le letture dei contatori vengono interrogate e utilizzate per il billing. Non è necessario alcun calcolo.

Configurazione: tariffa unica con solare

- Elettricità solare tariffa unica: definire la tariffa solare senza azione Se

- Elettricità di rete tariffa unica: definire una tariffa normale senza azione Se


Logica: prima viene distribuita l'elettricità solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale.

Configurazione: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare tariffa unica: definire la tariffa solare senza azione Se

- Elettricità di rete ore di punta: definire una tariffa normale con azione Se

    - Esempio. Da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire una tariffa normale senza azione Se


Logica: prima viene distribuita l'elettricità solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale che soddisfa una condizione. Per ultima viene inviata la tariffa senza condizione per l'elettricità restante.

Configurazione: ore di punta e ore fuori punta per l'elettricità di rete e solare

- Elettricità solare ore di punta: definire la tariffa solare con azione Se

    - Esempio: da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire la tariffa solare con azione Se

    - Esempio: da lu a ve dalle 22h00 alle 7h00 oppure sa dalle 13h00 alle 7h00 oppure do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire una tariffa normale con azione Se

    - Utilizzare la stessa azione Se della tariffa ore di punta per l'elettricità solare 

- Elettricità di rete ore fuori punta: definire una tariffa normale con azione Se

    - Utilizzare la stessa azione Se della tariffa ore fuori punta per l'elettricità solare 


Logica: prima viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Configurazione: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare ore di punta: definire la tariffa solare senza azione Se

- Elettricità di rete ore di punta estate: definire una tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lu a do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dall'1 / 04 / 00:00 all'1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire una tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lu a do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dall'1 / 04 / 00:00 all'1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire una tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lu a do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dall'1 / 10 / 00:00 all'1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire una tariffa normale con azione Se

    - Esempio: intervallo di tempo ogni giorno: da lu a do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dall'1 / 10 / 00:00 all'1 / 4 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Configurazione: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno ore fuori punta dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione Se Allora con collegamento E

        - Intervallo di tempo ogni giorno: da lu a do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno dall'1 / 10 / 00:00 all'1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno ore di punta dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione Se Allora con collegamento E

        - Intervallo di tempo ogni giorno: da lu a do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno dall'1 / 10 / 00:00 all'1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate ore fuori punta dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione Se Allora con collegamento E

        - Intervallo di tempo ogni giorno: da lu a do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno: da lu a do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno dall'1 / 4 / 00:00 all'1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate ore di punta dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione Se Allora con collegamento E

        - Intervallo di tempo ogni giorno: da lu a do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno: da lu a do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno dall'1 / 4 / 00:00 all'1 / 10 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Configurazione: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui si deve procedere in due passi. 1x Se Allora e 1x con gli orari nelle tariffe virtuali

In primo luogo devono essere definite le azioni Se.

- Elettricità di rete e solare estate ore fuori punta

    - Esempio: estate ore fuori punta da lu a ve dalle 06h00 alle 22h00 da lu a ve e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione Se Allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate ore di punta

    - Esempio: estate ore di punta da lu a ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione Se Allora

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno ore fuori punta

    - Esempio: inverno ore fuori punta da lu a ve dalle 22h00 alle 06h00 da lu a ve e sa e do sempre

    - Nome: Uri Winter NT

    - Azione Se Allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno ore di punta

    - Esempio: inverno ore di punta da lu a ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione Se Allora con collegamento O

        - Intervallo di tempo da lu a ve: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per periodo di tempo.

In questo caso i periodi ovvero la durata devono essere registrati. Con questo modello tariffario è necessaria una combinazione di Se Allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: tariffa di rete

    - Durata: 1.4.2026 - 30.9.2026

    - Condizione aggiuntiva: Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: tariffa solare incl. vRCP 

- Durata: 1.4.2026 - 30.9.2026

- Condizione aggiuntiva: Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: tariffa di rete

    - Durata: 1.4.2026 - 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: 1.4.2026 - 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: tariffa di rete

    - Durata: 1.10.2025 - 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: 1.10.2025 - 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: tariffa di rete

    - Durata: 1.10.2025 - 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni)

    - Durata: 1.10.2025 - 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT 


<Video src="" title="Video" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe elettriche (supportate solo se non viene utilizzata la funzione VEWA)

Per accedere alle impostazioni delle tariffe elettriche, clicca a sinistra sull'immobile e scorri fino alla finestra verde Tariffe elettricità (Tarife Elektrizität). Qui vengono visualizzate le due tariffe T1 e T2. Seleziona una delle tariffe e clicca su Modifica (Editieren) per apportare modifiche alle sue proprietà (ad es. nome, prezzo ecc.)

Per poter lavorare con le tariffe elettriche, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei rispettivi contatori.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
