---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
naechste_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Stabilire il prezzo dell'elettricità

Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell'elettricità. 



Ora puoi però anche utilizzare il nostro calcolatore online della tariffa elettrica, che ti dà una mano e si basa su questa spiegazione.

[Calcolatore della tariffa elettrica smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - stabilire i prezzi RCP" />

smart-me Billing: stabilire i prezzi nel RCP, spiegato da Guy.

Attenzione: il video è stato registrato con una versione precedente del file Excel, che conteneva ancora un errore nelle formule. Il file Excel è stato corretto.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe elettriche oppure con le tariffe virtuali. La soluzione con le tariffe elettriche è adatta esclusivamente alla realizzazione di sistemi con sola elettricità di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Procurati il foglio tariffario del tuo fornitore di energia

Il foglio tariffario del tuo fornitore di energia è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Informati anche su quale tariffa acquisti esattamente dal fornitore di energia: 

- Verde, blu, grigia o altre versioni

- Tariffa unica, doppia tariffa o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è composto di solito da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzazione della rete

- Tariffe di misurazione

- Tributi pubblici


I tributi pubblici in particolare non sono riportati in modo completo sul foglio tariffario. I tributi comunali variano da comune a comune e sono riportati in un foglio tariffario esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffario.

Procurati questo valore per la tua tariffazione tramite il link stampato sul foglio tariffario.

Di solito si tratta anch'esso di un valore in ct. / kWh, ma può essere indicato anche in % dell'utilizzazione della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scegli il calcolo della tariffa solare da utilizzare per il tuo (v)RCP

Puoi scegliere tra due approcci di fondo:

- Metodo forfettario all'80% del prodotto di rete standard
    È importante notare che il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    In questo caso non possono essere addebitati costi per la misurazione del RCP, né per l'amministrazione e il conteggio del RCP.
    La tassa del contatore del fornitore di energia per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: elettricità di rete addebitata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo d'acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione del guadagno all'interno del RCP, finché c'è un elevato tasso di occupazione degli appartamenti in affitto.
            Questo metodo non è adatto se nello stesso edificio ci sono grandi consumatori industriali ed esiste un sistema multitariffa.
            Soluzione migliore per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento ElCom (da utilizzare in caso di tariffe dinamiche del fornitore di energia)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da implementare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con industria e multitariffa (doppia tariffa), può succedere che l'utente industriale, a causa della tariffa solare più alta, alla fine paghi di più che al di fuori del RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per misurazione, conteggio e gestione, in aggiunta al valore calcolato dell'elettricità solare. I dettagli si trovano nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete non fosse eventualmente sufficiente a coprire i costi del tuo impianto solare. Questo caso è molto raro.

        - Questo metodo deve essere dimostrato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcola le tue tariffe per il periodo tariffario

Per il calcolo, il modo più semplice è utilizzare il nostro calcolatore tariffario. In base al metodo scelto, ti indica quali dati devi inserire in smart-me.

Con la tariffa dinamica: scegli il metodo 80% ElCom e cerca nel calcolatore la tariffa H4 della tua regione e del tuo fornitore di energia come riferimento.

[Calcolatore della tariffa elettrica smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configura le tue tariffe

Torna ora alla configurazione dell'immobile.

1.  Fatturazione (Rechnungsstellung)

2.  Configurazione (Konfiguration)

3.  Immobile (Liegenschaft)

4.  Tariffe virtuali (Virtuelle Tarife)


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crea ora le tariffe di rete del tuo periodo tariffario

<div className="row">
<div className="col col--6">

### Esempio: tariffa unica

</div>
<div className="col col--6">

### Esempio: doppia tariffa

</div>
</div>

Passo successivo: riprodurre la temporizzazione della tariffa nelle azioni se

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

<div className="row">
<div className="col col--6">

![Definire le tariffe elettriche – Figura 4](/img/konfiguration-billing-stromtarife-definieren/04.png)

Esempio di tariffa unica con metodo forfettario all'80%:

Crea ora una tariffa di rete con il prezzo indicato:

- Tariffa di rete 2026 : 0.19707 CHF / kWh

![Definire le tariffe elettriche – Figura 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

</div>
<div className="col col--6">

![Definire le tariffe elettriche – Figura 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Esempio di doppia tariffa con metodo forfettario all'80%:

Crea ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete HT 2026: 0.22409 CHF / kWh

- Tariffa di rete NT 2026: 0.17007 CHF / kWh

Con le doppie tariffe la temporizzazione deve essere creata prima tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate tramite la "Condizione aggiuntiva" ("Zusätzliche Bedingung") per gestire la validità nel corso della settimana.

![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

Crea ora la relativa tariffa solare

Nota:
Esistono diverse tariffe solari e tariffe batteria con funzionalità e requisiti differenti.

In generale la tariffa solare vRCP è la scelta migliore e più universale.

Ciò che non può fare è definire tariffe diverse per batteria ed energia solare. Per questo occorre utilizzare la tariffa alternativa.

I dettagli si trovano più sotto, nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari necessitano di punti di misura rilevanti, che devono essere collegati.

Opzione più semplice: 

- Campo "Contatore solare" („Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" („Bilanzzähler"): seleziona i contatori di bilancio (1 casa: contatore dell'allacciamento domestico; area: contatore dell'area o più contatori dell'allacciamento domestico)


Opzione alternativa: 

- Campo "Contatore solare" („Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" („Bilanzzähler"): seleziona tutti i contatori di consumo e di produzione.


<div className="row">
<div className="col col--6">

Tariffa solare unica

![Definire le tariffe elettriche – Figura 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6">

Doppia tariffa solare

![Definire le tariffe elettriche – Figura 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Definire le tariffe elettriche – Figura 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Avviare il ricalcolo delle tariffe elettriche

Se vengono utilizzate le tariffe virtuali, al termine della configurazione (e in caso di successive modifiche alla configurazione) occorre cliccare su Ricalcola (Neu berechnen) (preferibilmente a partire dall'1.1.2018). In questo modo vengono ricalcolati tutti i valori precedenti.

Prima di poter creare una fattura occorre attendere finché l'ultimo valore calcolato non indica "Oggi" ("Heute") e non compare alcun messaggio di errore.

I messaggi di errore riconducibili a un problema di configurazione vengono di norma visualizzati entro un minuto. Conviene quindi cliccare su "Ricalcola" ("Neu berechnen") e attendere brevemente per vedere se compare o meno un messaggio di errore.

Suggerimento: in caso di modifiche di prezzo o degli inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo; in tutti gli altri casi il ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Inserire la tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di potenza di punta è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

Sul foglio tariffario è riconoscibile dalla sua unità di misura. Di solito è indicata ad es. come 1.50.- / kW / mese

Nel nostro esempio inseriamo il prezzo calcolato.

I costi della potenza di punta possono essere registrati con uno di due metodi:

- Misurazione del consumo: automaticamente tramite la propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per mese dopo aver ricevuto la fattura


Durata di validità:
La durata di validità di una tariffa di potenza di punta è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Inserire la tassa di base all'80% (se è stato scelto il metodo all'80% con tassa di base)

In questo esempio utilizziamo il metodo all'80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati sotto "Altro" ("Sonstiges")

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base si applicano a tutte le unità di conteggio, perciò possono essere registrati globalmente presso le tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Passo successivo

## Tutti i dettagli sulle tariffe e sulle funzioni

## Configurazione delle tariffe virtuali (tariffe di rete, solari e batteria)

Le tariffe virtuali permettono di definire autonomamente un modello tariffario dinamico per l'addebito dell'energia. Ciò può essere utilizzato ad es. in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini) per distinguere se un inquilino preleva elettricità da un impianto solare o dalla rete. 

Tieni presente che tutte le tariffe normali per l'elettricità devono essere eliminate.

Sotto Tariffe virtuali (Virtuelle Tarife) vedi tutte le tariffe virtuali già registrate. Clicca su Aggiungi (Hinzufügen) e registra ora tutte le tariffe virtuali.

Nome (Name): il nome della tariffa viene mostrato anche all'utente (inquilino).

Tipo di tariffa (Tarif Type) 

- Tariffa solare vRCP (nuova) (Solartarif vZEV (neu)):
    Permette di creare una tariffa solare globale in un RCP o in un vRCP.
    L'energia solare viene distribuita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci delle case (RCP) e sulla somma delle produzioni (contatori solari e/o contatori della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi se è fisicamente presente un contatore dell'allacciamento domestico. Con questa tariffa non servono contatori virtuali di somma.

- Tariffa solare (legacy) (Solartarif (legacy)):
    Permette di addebitare l'energia di un impianto solare all'interno di un RCP.
    Permette di realizzare RCP con o senza contatore di bilancio (GRD). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa batteria (legacy) (Batterietarif (legacy)):
    Permette di distribuire l'energia di una batteria accoppiata in CA all'interno di un RCP. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica) (Netztarif):
    Serve ad addebitare l'elettricità di rete. Se necessario, può essere suddivisa anche in ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva (Zusätzliche Bedingung)
    Con una condizione aggiuntiva puoi stabilire quando questa tariffa è valida. Può trattarsi di un periodo di tempo (ad es. per ore di punta/ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita prima come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa è possibile registrare il prezzo / unità di consumo e una validità.

Prezzo / kWh (Preis / kWh): il prezzo di questa tariffa

Valido da (Gültig von): la data a partire dalla quale questa tariffa deve essere valida. Vedi nota.

Valido fino a (Gültig bis): la data fino alla quale questa tariffa deve essere valida. Vedi nota.

Note: 

- Consigliamo di impostare la validità dall'1.1.2000 al 31.12.2099. Il presupposto per questa procedura è che le fatture vengano inviate con la stessa periodicità del fornitore di energia locale. In questo caso il prezzo può essere stabilito prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola" ("neu rechnen"). Per tutte le altre modifiche il ricalcolo è invece necessario.

- Una volta definite tutte le tariffe, devi cliccare su "Ricalcola" („Neu berechnen"). In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, questa intercetta automaticamente tutte le quantità di energia non attribuibili e copre quindi le 24 ore. In alternativa bisogna fare attenzione che gli orari delle condizioni siano configurati correttamente (vedi esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, tariffe virtuali" />

### Tariffa di rete

La tariffa di rete può essere registrata come una delle seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Doppia tariffa

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata come statica (tariffa fissa) oppure dinamica.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh di elettricità di rete definito.



Tariffa dinamica

La tariffa dinamica invece si avvale di un'API esterna e chiede al provider disponibile, per ogni ora, il prezzo attualmente valido.

Il prezzo viene poi applicato per ogni ora.

Tieni presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che occorre effettuare inserimenti aggiuntivi.

- Tasse aggiuntive come le tasse di concessione del comune
    (da inserire come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (area Altro (Sonstiges))


Il calcolo delle fatture con tariffa dinamica richiede sensibilmente più tempo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Doppia tariffa e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate a una temporizzazione con l'aiuto delle condizioni.

La temporizzazione viene definita tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurare la tariffa solare vRCP

La tariffa solare vRCP permette di realizzare soluzioni RCP e vRCP. 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori di produzione solare e contatori dell'allacciamento domestico. 

Il calcolo tiene conto delle eccedenze individuali di una casa e, allo stesso tempo, della domanda di questa eccedenza da parte delle altre case.

Se c'è un fabbisogno, l'eccedenza viene messa a disposizione della casa vicina. Se non c'è, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un
    \- RCP con contatore di bilancio e solare (bilancio + produzione)
    \- RCP con bilancio e consumo totale (consumo + bilancio)
    \- RCP con solare e consumo totale (produzione + consumo)

- vRCP: più RCP smart-me con contatori dell'allacciamento domestico

- vRCP: combinazione di RCP smart-me con edifici con soli consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari con impianti solari 

- vRCP: più RCP smart-me in combinazione con ex modelli pratici GRD


Nota:
Con questo sistema tariffario la batteria non può essere tariffata separatamente.

![Definire le tariffe elettriche – Figura 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tariffare un RCP

- Contatore dell'allacciamento domestico 

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

Tariffare case unifamiliari a schiera come vRCP

![Definire le tariffe elettriche – Figura 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurare la tariffa solare e la tariffa batteria

Le tariffe solari e le tariffe batteria della serie legacy permettono di realizzare un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo tariffario permette quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione differenziata per batteria ed elettricità solare


Requisiti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o della batteria
Per la tariffa solare e la tariffa batteria devi indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Per la tariffa solare e la tariffa batteria devi indicare un contatore che misura tutti i consumatori sui quali deve essere distribuita questa energia. Di solito si tratta di un contatore virtuale che somma tutti i consumatori (attenzione: i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Per la tariffa solare e la tariffa batteria è possibile indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare viene tenuta in considerazione l'energia immessa in rete. Ciò significa che ogni 15 minuti viene distribuita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione FV - immissione in rete).

Attenzione:
Rinunciando al contatore di bilancio fisico, non sono insoliti scostamenti nell'attribuzione delle tariffe nell'ordine del 10-15%.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per formare il riferimento per l'attribuzione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se hai contatori collegati in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento domestico.
    I contatori solari, i contatori della batteria e i contatori dell'allacciamento domestico vanno esclusi.

- Se nel sistema ci sono più impianti solari che non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/billing/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 casa)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più case )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tariffe di potenza di punta

Con le tariffe di potenza di punta è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

- Doppia tariffa per il consumo di base + potenza di punta
    (tariffe virtuali in combinazione con la tariffa Peak)

- Tariffa unica per il consumo di base + potenza di punta
    (tariffe virtuali in combinazione con la tariffa Peak)

- Solo tariffa di punta senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di potenza di punta è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di punta si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata su base costi (inserimento dei costi)

Funzionamento generale:

I costi delle tariffe di punta registrati oppure i costi calcolati automaticamente in base alla misurazione e alla tariffa registrata vengono ripartiti sui consumatori al momento della creazione della fattura, nell'intervallo di calcolo selezionato. 

La base è costituita dal picco di potenza causato (solo prelievo dalla rete) da ogni singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo selezionato.

![Definire le tariffe elettriche – Figura 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tariffe di punta senza misurazione principale attiva (inserimento manuale dei costi)

Adatte a tutti i sistemi che non dispongono di una misurazione di riferimento. 

![Definire le tariffe elettriche – Figura 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Definire le tariffe elettriche – Figura 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tariffe di punta con misurazione principale attiva (calcolo automatico dei costi)

Adatte a tutti i sistemi che dispongono di una misurazione di bilancio diretta.

![Definire le tariffe elettriche – Figura 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Struttura: tariffa unica senza solare

- In questo caso consigliamo di non utilizzare tariffe virtuali. Le tariffe elettriche (tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe elettriche alle tariffe virtuali.


Logica: le letture del contatore vengono rilevate e utilizzate per il Billing. Non è necessario alcun calcolo.

Struttura: tariffa unica con solare

- Elettricità solare tariffa unica: definire una tariffa solare senza azione se

- Elettricità di rete tariffa unica: definire una tariffa normale senza azione se


Logica: per prima viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare tariffa unica: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Esempio: lu–ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire una tariffa normale senza azione se


Logica: per prima viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità rimanente viene utilizzata la tariffa senza condizione.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e solare

- Elettricità solare ore di punta: definire una tariffa solare con azione se

    - Esempio: lu–ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire una tariffa solare con azione se

    - Esempio: lu–ve dalle 22h00 alle 7h00 oppure sa dalle 13h00 alle 7h00 oppure do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se usata per l'elettricità solare ore di punta 

- Elettricità di rete ore fuori punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se usata per l'elettricità solare ore fuori punta 


Logica: per prima viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare ore di punta: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta estate: definire una tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno: lu–do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire una tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno: lu–do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire una tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno: lu–do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno da 1 / 10 / 00:00 a 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire una tariffa normale con azione se

    - Esempio: intervallo di tempo ogni giorno: lu–do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno da 1 / 10 / 00:00 a 1 / 4 / 00:00.


Logica: per prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: lu–do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: lu–do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: lu–do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno: lu–do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno da 1 / 4 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: lu–do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno: lu–do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno da 1 / 4 / 00:00 a 1 / 10 / 00:00.


Logica: per prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui occorre procedere in due passi. 1x con le azioni se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa devono essere definite le azioni se.

- Elettricità di rete e solare estate NT

    - Esempio: estate NT lu–ve dalle 06h00 alle 22h00 lu–ve e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo lu–ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT lu–ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo lu–ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT lu–ve dalle 22h00 alle 06h00 lu–ve e sa e do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo lu–ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT lu–ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O

        - Intervallo di tempo lu–ve: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per ogni periodo di tempo.

In questo caso devono essere registrati i periodi ovvero la durata. Con questo modello tariffario è necessaria una combinazione di azione se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata: dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki tariffe Energie Uri tariffe 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Sistemi con sola tariffa di rete (soluzione con segnale esterno)

Tariffe elettriche (supportate solo se la funzione VEWA non viene utilizzata)

Per accedere alle impostazioni delle tariffe elettriche, clicca a sinistra sull'immobile e scorri fino alla finestra verde Tariffe elettricità (Tarife Elektrizität). Qui vengono visualizzate le due tariffe T1 e T2. Seleziona una delle tariffe e clicca su Modifica (Editieren) per apportare modifiche alle sue proprietà (ad es. nome, prezzo ecc.)

Per poter lavorare con le tariffe elettriche, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei rispettivi contatori.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
