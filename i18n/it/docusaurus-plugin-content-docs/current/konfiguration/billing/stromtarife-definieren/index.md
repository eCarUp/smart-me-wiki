---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
naechste_schritte: [konfiguration/billing/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing/mieterspiegel-erfassen
---
<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

## Stabilire il prezzo dell'elettricità

Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell'elettricità. 



Ora puoi però anche utilizzare il nostro calcolatore online delle tariffe elettriche, che ti dà una mano e si basa su questa spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - Stabilire i prezzi RCP" />

smart-me Billing: stabilire i prezzi RCP, spiegato da Guy.

Attenzione: il video è stato registrato con una vecchia versione del file Excel, che conteneva ancora un errore nelle formule. Il file Excel è stato corretto.

[Esempio di definizione dei prezzi nel RCP.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe di elettricità oppure con le tariffe virtuali. La soluzione con le tariffe di elettricità è adatta esclusivamente alla realizzazione di sistemi con sola elettricità di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Procurati il foglio tariffale del tuo fornitore di energia

Il foglio tariffale del tuo fornitore di energia è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffale.

Informati anche su quale tariffa acquisti esattamente dal fornitore di energia: 

- Verde , Blu, Grigio o altre versioni

- Tariffa unica, tariffa doppia o dinamica.


Leggere il foglio tariffale:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffale vero e proprio si compone di solito di 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzo della rete

- Tariffe di misurazione

- Tributi pubblici


I tributi pubblici in particolare non figurano completamente sul foglio tariffale. I tributi comunali variano da comune a comune e sono riportati in un foglio tariffale esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffale.

Procurati questo valore per la tua tariffazione tramite il link stampato sul foglio tariffale.

Di solito è anch'esso un valore in ct. / kWh, ma può anche essere indicato in % dell'utilizzo della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scegli il calcolo della tariffa solare da utilizzare per il tuo RCP (o vRCP)

Puoi scegliere tra due approcci di fondo:

- Metodo forfettario all'80% del prodotto di rete standard
    Importante: il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    In questo caso non possono essere addebitati costi per la misurazione del RCP, l'amministrazione e il conteggio del RCP.
    La tassa per il contatore del fornitore di energia per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: elettricità di rete fatturata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo d'acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione degli utili all'interno del RCP, finché il tasso di occupazione degli appartamenti in affitto è elevato.
            Questo metodo non è adatto se nello stesso edificio si trovano grandi consumatori industriali ed è presente un sistema multitariffa.
            Soluzione migliore per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento Elcom (da utilizzare in caso di tariffe dinamiche del fornitore di energia)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da attuare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con industria e multitariffa (tariffa doppia), può succedere che il cliente industriale, a causa della tariffa solare più alta, alla fine paghi di più che al di fuori del RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per la misurazione, il conteggio e la gestione, in aggiunta al valore calcolato dell'elettricità solare. I dettagli si trovano nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete non dovesse coprire i costi del tuo impianto solare. Questo succede molto raramente.

        - Questo metodo deve essere comprovato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcola le tue tariffe per il periodo tariffale

Il modo più semplice per il calcolo è il nostro calcolatore delle tariffe. A seconda del metodo scelto, ti indica quali dati devi inserire in smart-me.

Con la tariffa dinamica: scegli il metodo 80% Elcom e cerca nel calcolatore la tariffa H4 della tua regione e del tuo fornitore di energia come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configura le tue tariffe

Torna ora alla configurazione dell'immobile.

<Menueweg>Fatturazione → Immobili & tariffe → Immobile → Tariffe virtuali</Menueweg>


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crea ora le tariffe di rete del tuo periodo tariffale

<div className="row">
<div className="col col--6">

### Esempio: tariffa unica

</div>
<div className="col col--6">

### Esempio: tariffa doppia

Le fasce orarie della tariffa si definiscono nelle azioni se:

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

</div>
</div>


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

Esempio di tariffa doppia con metodo forfettario all'80%:

Crea ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete HT 2026: 0.22409 CHF / kWh

- Tariffa di rete NT 2026: 0.17007 CHF / kWh

Con le tariffe doppie, le fasce orarie devono essere create prima tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate con la "Condizione aggiuntiva" ("Zusätzliche Bedingung") per controllarne la validità nel corso della settimana.

![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

**Crea ora la relativa tariffa solare**

**Nota:**
Esistono diverse tariffe solari e tariffe batteria con funzionalità e requisiti differenti.

In generale la **tariffa solare vRCP** (Solartarif vZEV) è la scelta migliore e più universale.

Ciò che questa tariffa non consente è definire tariffe diverse per la batteria e per l'energia solare. Per farlo va utilizzata la tariffa alternativa.

I dettagli si trovano più sotto nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari richiedono punti di misura rilevanti, che devono essere collegati.

Opzione più semplice: 

- Campo „Contatore solare" („Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo „Contatore di bilancio" („Bilanzzähler"): seleziona i contatori di bilancio (1 edificio: contatore dell'allacciamento dell'edificio; area: contatore dell'area o più contatori dell'allacciamento)


Opzione alternativa: 

- Campo „Contatore solare" („Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo „Contatore di bilancio" („Bilanzzähler"): seleziona tutti i contatori di consumo e di produzione.


<div className="row">
<div className="col col--6">

**Tariffa solare unica**

![Definire le tariffe elettriche – Figura 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6">

**Tariffa solare doppia**

![Definire le tariffe elettriche – Figura 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Definire le tariffe elettriche – Figura 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Avviare il ricalcolo delle tariffe elettriche

Se vengono utilizzate le tariffe virtuali, alla fine della configurazione (e in caso di successive modifiche alla configurazione) occorre cliccare su Ricalcola (Neu berechnen) (idealmente a partire dal 1.1.2018). In questo modo tutti i valori precedenti vengono ricalcolati.

Prima di poter emettere una fattura occorre attendere che l'ultimo valore calcolato sia su "Oggi" ("Heute") e che non compaia alcun messaggio d'errore.

I messaggi d'errore riconducibili a un problema di configurazione vengono di norma visualizzati entro un minuto. Conviene quindi cliccare su "Ricalcola" ("Neu berechnen") e attendere brevemente per vedere se compare o meno un messaggio d'errore.

Suggerimento: in caso di modifiche dei prezzi o degli inquilini (indirizzi, data di entrata o di uscita) un ricalcolo non è necessario; in tutti gli altri casi il ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Inserire la tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di picco si possono coprire modelli tariffari estesi o innovativi dei fornitori di energia. 

Nel foglio tariffale è riconoscibile dalla sua unità di misura. Indicata di solito come p.es. 1.50.- / kW / mese

Nel nostro esempio registriamo il prezzo calcolato.

I costi della potenza di picco possono essere registrati con uno dei due metodi seguenti:

- Misurazione del consumo: automaticamente tramite la propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per ogni mese dopo aver ricevuto la fattura


Durata di validità:
La durata di validità di una tariffa di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi effettivamente sostenuti ogni mese (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Inserire la tassa di base all'80% (se è stato scelto il metodo 80% con tassa di base)

In questo esempio utilizziamo il metodo 80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati sotto "Altro" ("Sonstiges")

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base gravano su tutte le unità di conteggio, per cui possono essere registrati globalmente presso le tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

## Tutti i dettagli sulle tariffe e sulle funzioni

Da qui in poi la pagina è un'opera di consultazione: le sezioni sono richiudibili, così apri solo ciò che ti serve al momento.

### Configurazione delle tariffe virtuali (tariffe di rete, solari, batteria)

Le tariffe virtuali permettono di definire autonomamente un modello tariffario dinamico per la fatturazione dell'energia. Questo può essere utilizzato p.es. in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini) per distinguere se un inquilino preleva elettricità da un impianto solare o dalla rete. 

Tieni presente che tutte le normali tariffe di elettricità devono essere eliminate.

Sotto Tariffe virtuali (Virtuelle Tarife) vedi tutte le tariffe virtuali già registrate. Clicca su Aggiungi (Hinzufügen) e registra ora tutte le tariffe virtuali.

Nome: il nome della tariffa viene mostrato anche all'utente (inquilino).

Tipo di tariffa 

- Tariffa solare vRCP (nuova) (Solartarif vZEV (neu)):
    Consente di creare una tariffa solare globale in un RCP o in un RCP virtuale (vRCP).
    L'energia solare viene distribuita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci degli edifici (RCP) e sulla somma delle produzioni (contatori solari e/o contatori della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi, se è fisicamente presente un contatore dell'allacciamento dell'edificio. Con questa tariffa non servono contatori virtuali di somma.

- Tariffa solare (legacy) (Solartarif (legacy)):
    Consente di fatturare l'energia di un impianto solare all'interno di un RCP.
    Consente di realizzare RCP con o senza contatore di bilancio (VNB). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa batteria (legacy) (Batterietarif (legacy)):
    Consente di distribuire all'interno di un RCP l'energia di una batteria con accoppiamento AC. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica) (Netztarif):
    Con essa si fattura l'elettricità di rete. Se necessario può inoltre essere suddivisa  anche in ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva (Zusätzliche Bedingung)
    Con una condizione aggiuntiva puoi stabilire quando questa tariffa è valida. Può trattarsi di un periodo di tempo (p.es. per ore di punta/ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita prima come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa possono essere registrati il prezzo / unità di consumo e una validità.

Prezzo / kWh (Preis / kWh): il prezzo di questa tariffa

Valido dal (Gültig von): la data a partire dalla quale questa tariffa deve essere valida. Vedi nota.

Valido fino al (Gültig bis): la data fino alla quale questa tariffa deve essere valida. Vedi nota.

Note: 

- Consigliamo di impostare la validità dal 1.1.2000 al 31.12.2099. Presupposto per questa procedura è che le fatture vengano inviate con la stessa periodicità del fornitore di energia locale. In tal caso il prezzo può essere stabilito prima della fatturazione. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola" ("neu rechnen"). Per tutte le altre modifiche il ricalcolo è invece necessario.

- Dopo aver definito tutte le tariffe devi cliccare su „Ricalcola" („Neu berechnen"). In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, questa intercetta automaticamente tutte le quantità di energia non attribuibili e copre così le 24 ore. In alternativa occorre assicurarsi che gli orari delle condizioni siano configurati correttamente (vedi esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, Tariffe virtuali" />

<details id="netztarif">
<summary>Tariffa di rete</summary>

La tariffa di rete può essere registrata come una delle seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Tariffa doppia

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata come statica (tariffa fissa) oppure dinamica.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh definito per l'elettricità di rete.



Tariffa dinamica

La tariffa dinamica invece si avvale di una API esterna e interroga il provider disponibile per ogni ora sul prezzo attualmente valido.

Il prezzo viene poi applicato per ogni ora.

Tieni presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che occorre effettuare inserimenti aggiuntivi.

- Tasse supplementari come le tasse di concessione del comune
    (da inserire come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (sezione Altro (Sonstiges))


Il calcolo delle fatture con tariffa dinamica richiede sensibilmente più tempo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Tariffa doppia e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate a delle fasce orarie tramite le condizioni.

Le fasce orarie vengono definite tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

</details>

<details id="solartarif-vzev-konfigurieren">
<summary>Configurare la tariffa solare vRCP</summary>

La tariffa solare vRCP consente di realizzare soluzioni RCP e RCP virtuale (vRCP). 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori di produzione solare e contatori dell'allacciamento degli edifici. 

Il calcolo tiene conto delle eccedenze individuali di un edificio e, allo stesso tempo, della domanda di questa eccedenza da parte di altri edifici.

Se c'è un fabbisogno, l'eccedenza viene messa a disposizione dell'edificio vicino. Se non c'è, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un
    \- RCP con contatore di bilancio e solare (bilancio + produzione)
    \- RCP con bilancio e consumo totale (consumo + bilancio)
    \- RCP con solare e consumo totale (produzione + consumo)

- vRCP: più RCP smart-me con contatori dell'allacciamento degli edifici

- vRCP: combinazione di RCP smart-me con edifici dotati solo di consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari (EFH) dotate di impianti solari 

- vRCP: più RCP smart-me in combinazione con ex modelli pratici VNB


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

Tariffare villette a schiera come vRCP

![Definire le tariffe elettriche – Figura 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

</details>

<details id="solar-und-batterietarif-konfigurieren">
<summary>Configurare la tariffa solare e la tariffa batteria</summary>

Le tariffe solari e le tariffe batteria della serie legacy consentono di realizzare un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo di tariffazione consente quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione differenziata per batteria ed elettricità solare


Requisiti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o della batteria
Per la tariffa solare e la tariffa batteria devi indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Per la tariffa solare e la tariffa batteria devi indicare un contatore che misura tutti i consumatori sui quali questa energia deve essere distribuita. Di solito si tratta di un contatore virtuale che somma tutti i consumatori (attenzione: i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Per la tariffa solare e la tariffa batteria si può indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare si tiene conto dell'energia immessa in rete. Ciò significa che per ogni intervallo di 15 minuti viene distribuita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione FV - immissione in rete).

Attenzione:
Se si rinuncia al contatore di bilancio fisico, non sono insolite differenze nell'attribuzione delle tariffe dell'ordine del 10-15%.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per formare il riferimento per l'attribuzione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se hai contatori collegati in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento dell'edificio.
    I contatori solari, i contatori della batteria e i contatori dell'allacciamento dell'edificio vanno esclusi.

- Se nel sistema sono presenti più impianti solari che non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 edificio)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più edifici )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

</details>

### Tariffe di picco

Con le tariffe di picco si possono coprire modelli tariffari estesi o innovativi dei fornitori di energia. 

- Tariffa doppia per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa Peak)

- Tariffa unica per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa Peak)

- Solo tariffa di picco senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi effettivamente sostenuti ogni mese (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di tariffa elettrica registrata su base costi (inserimento dei costi)

Funzionamento generale:

I costi delle tariffe di picco registrati o i costi calcolati automaticamente in base alla misurazione e alla tariffa registrata vengono ripartiti sui consumatori durante la fatturazione, nell'intervallo di calcolo scelto. 

La base è il picco di potenza causato (solo prelievo dalla rete) da ciascun singolo consumatore nel periodo di conteggio e nell'intervallo di calcolo scelto.

![Definire le tariffe elettriche – Figura 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

<details id="spitzentarife-ohne-aktive-hauptmessung">
<summary>Tariffe di picco senza misurazione principale attiva (inserimento manuale dei costi)</summary>

Adatto a tutti i sistemi che non dispongono di una misurazione di riferimento. 

![Definire le tariffe elettriche – Figura 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Definire le tariffe elettriche – Figura 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

</details>

<details id="spitzentarife-mit-aktiver-hauptmessung">
<summary>Tariffe di picco con misurazione principale attiva (calcolo automatico dei costi)</summary>

Adatto a tutti i sistemi che dispongono di una misurazione di bilancio diretta.

![Definire le tariffe elettriche – Figura 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

</details>

## FAQ

A seconda del modello tariffario del tuo fornitore di energia, la configurazione è diversa. Apri la struttura che corrisponde al tuo caso.

<details id="einheitstarif-ohne-solar">
<summary>Tariffa unica senza solare</summary>

- In questo caso consigliamo di non utilizzare tariffe virtuali. Le tariffe di elettricità (Tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe di elettricità alle tariffe virtuali.


Logica: le letture dei contatori vengono rilevate e utilizzate per il Billing. Non è necessario alcun calcolo.

</details>

<details id="einheitstarif-mit-solar">
<summary>Tariffa unica con solare</summary>

- Tariffa unica per l'elettricità solare: definire una tariffa solare senza azione se

- Tariffa unica per l'elettricità di rete: definire una tariffa normale senza azione se


Logica: per prima cosa viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale.

</details>

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Tariffa unica per l'elettricità solare: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Esempio. da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire una tariffa normale senza azione se


Logica: per prima cosa viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità restante viene applicata la tariffa senza condizione.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e solare</summary>

- Elettricità solare ore di punta: definire una tariffa solare con azione se

    - Esempio: da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire una tariffa solare con azione se

    - Esempio: da lu a ve dalle 22h00 alle 7h00 oppure sa dalle 13h00 alle 7h00 oppure do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se dell'elettricità solare ore di punta 

- Elettricità di rete ore fuori punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se dell'elettricità solare ore fuori punta 


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Elettricità solare ore di punta: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta estate: definire una tariffa normale con azione se

    - Esempio: intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire una tariffa normale con azione se

    - Esempio: intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire una tariffa normale con azione se

    - Esempio: intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire una tariffa normale con azione se

    - Esempio: intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare, con ore fuori punta a mezzogiorno solo in inverno (p.es. EWS/EBS)</summary>

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 

        - Intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 

        - Intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 12h00 alle 06h00 

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 00h00 alle 15h00 

        - Intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 06h00 alle 00h00 

        - Intervallo ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 15h00 alle 12h00 

        - Intervallo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (p.es. Energie Uri dal 1.10.2025)</summary>

Descrizione: qui occorre procedere in due passaggi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa vanno definite le azioni se.

- Elettricità di rete e solare estate NT

    - Esempio: estate NT da lu a ve dalle 06h00 alle 22h00 da lu a VE e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo da lu a ve: dalle 6h00 alle 22h00 

        - Intervallo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT da lu a ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo da lu a ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT da lu a ve dalle 22h00 alle 06h00 da lu a VE e sa e do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo da lu a ve: dalle 22h00 alle 06h00 

        - Intervallo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT da lu a ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo da lu a ve: dalle 06h00 alle 22h00 


Poi vanno definiti i prezzi per ogni periodo.

In questo caso devono essere registrati i periodi ovvero la durata. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata: dal 1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe di elettricità (supportate solo se non viene utilizzata la funzione VEWA)

Per accedere alle impostazioni delle tariffe di elettricità, clicca a sinistra sull'immobile e scorri fino alla finestra verde Tariffe elettricità (Tarife Elektrizität). Qui vengono visualizzate le due tariffe T1 e T2. Seleziona una delle tariffe e clicca su Modifica (Editieren) per apportare modifiche alle sue proprietà (p.es. nome, prezzo ecc.)

Per poter lavorare con le tariffe di elettricità, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei rispettivi contatori.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
