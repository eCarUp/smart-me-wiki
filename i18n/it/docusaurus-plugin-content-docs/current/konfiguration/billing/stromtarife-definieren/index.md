---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
naechste_schritte: [konfiguration/billing/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing/mieterspiegel-erfassen
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Stabilire il prezzo dell'elettricità

Nel video a destra Guy ti spiega le basi di come sono composti in generale i prezzi dell'elettricità. 



Ora puoi però anche utilizzare il nostro calcolatore online delle tariffe elettriche, che ti dà una mano e si basa su questa spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - Stabilire i prezzi RCP" />

smart-me Billing: stabilire i prezzi del RCP (raggruppamento ai fini del consumo proprio), spiegato da Guy.

Attenzione: il video è stato registrato con una versione precedente del file Excel, che conteneva ancora un errore nelle formule. Il file Excel è stato corretto.

[Esempio stabilire i prezzi nel RCP.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe dell'elettricità oppure con le tariffe virtuali. La soluzione con le tariffe dell'elettricità è adatta esclusivamente alla realizzazione di sistemi con sola elettricità di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Procurati il foglio tariffario del tuo fornitore di energia

Il foglio tariffario del tuo fornitore di energia è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Informati anche su quale tariffa acquisti esattamente dal fornitore di energia: 

- Verde, Blu, Grigia o altre versioni

- Tariffa unica, tariffa doppia o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è di solito composto da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzazione della rete

- Corrispettivi per la misurazione

- Tributi pubblici


I tributi pubblici, in particolare, non sono riportati in modo completo sul foglio tariffario. I tributi comunali variano da comune a comune e sono indicati in un foglio tariffario esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffario.

Procurati questo valore per la tua tariffazione tramite il link stampato sul foglio tariffario.

Di solito anche questo è un valore in ct. / kWh, ma può anche essere indicato in % dell'utilizzazione della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scegli il calcolo della tariffa solare da utilizzare per il tuo (v)RCP

Puoi scegliere tra due approcci di base:

- Metodo forfettario all'80% del prodotto di rete standard
    Importante: il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    In questo caso non possono essere addebitati costi per la misurazione del RCP, per l'amministrazione e il conteggio del RCP.
    La tassa per il contatore del fornitore di energia per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: elettricità di rete fatturata 1:1, elettricità solare all'80% dei costi di base e all'80% del prezzo d'acquisto dell'elettricità di rete
            Questa variante è adatta all'ottimizzazione del profitto all'interno del RCP, finché gli appartamenti in affitto hanno un alto tasso di occupazione.
            Questo metodo non è adatto se nello stesso edificio ci sono grandi consumatori industriali ed esiste un sistema multitariffa.
            Soluzione migliore per i sistemi multitariffa.

        - Variante 2: elettricità di rete 1:1, elettricità solare all'80% del prezzo di riferimento ElCom (da utilizzare in caso di tariffe dinamiche del fornitore di energia)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da attuare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con l'industria e una multitariffa (tariffa doppia), può succedere che, a causa della tariffa solare più elevata, l'utente industriale finisca per pagare più che al di fuori del RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo possono essere addebitati costi per la misurazione, il conteggio e la gestione, in aggiunta al valore calcolato dell'elettricità solare. I dettagli sono riportati nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% dell'elettricità di rete non coprisse eventualmente i costi del tuo impianto solare. Questo caso è molto raro.

        - Questo metodo deve essere dimostrato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcola le tue tariffe per il periodo tariffario

Per il calcolo, il modo più semplice è utilizzare il nostro calcolatore delle tariffe. A seconda del metodo scelto, ti indica quali inserimenti devi effettuare in smart-me.

Con la tariffa dinamica: scegli il metodo ElCom all'80% e cerca nel calcolatore la tariffa H4 della tua regione e del tuo fornitore di energia come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configura le tue tariffe

Torna ora nella configurazione dell'immobile.

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

### Esempio: tariffa doppia

Le fasce orarie della tariffa le definisci nelle azioni se:

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

Con le tariffe doppie, le fasce orarie devono essere create prima mediante le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate alla "Condizione aggiuntiva" ("Zusätzliche Bedingung") per gestire la validità nel corso della settimana.

![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

**Crea ora la relativa tariffa solare**

**Nota:**
Esistono diverse tariffe solari e tariffe per batterie con funzionalità e requisiti differenti.

In generale la **tariffa solare vRCP (Solartarif vZEV)** è la scelta migliore e più universale.

Ciò che non può fare è definire tariffe diverse per la batteria e per l'energia solare. A tale scopo occorre utilizzare la tariffa alternativa.

I dettagli sono riportati più in basso nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari richiedono punti di misura rilevanti che devono essere collegati.

Opzione più semplice: 

- Campo "Contatore solare" ("Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" ("Bilanzzähler"): seleziona i contatori di bilancio (1 casa: contatore dell'allacciamento domestico, area: contatore dell'area o più contatori dell'allacciamento domestico)


Opzione alternativa: 

- Campo "Contatore solare" ("Solarzähler"): seleziona tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio" ("Bilanzzähler"): seleziona tutti i contatori di consumo e di produzione.


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

Se si utilizzano le tariffe virtuali, al termine della configurazione (e in caso di successive modifiche della configurazione) occorre cliccare su Ricalcola (Neu berechnen) (idealmente a partire dal 1.1.2018). In questo modo vengono ricalcolati tutti i valori precedenti.

Prima di poter creare una fattura, occorre attendere finché l'ultimo valore calcolato riporta "Oggi" ("Heute") e non compare alcun messaggio di errore.

I messaggi di errore riconducibili a un problema di configurazione vengono di norma visualizzati entro un minuto. Conviene quindi cliccare su "Ricalcola" ("Neu berechnen") e attendere brevemente per vedere se compare o meno un messaggio di errore.

Suggerimento: in caso di modifiche dei prezzi o degli inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo; in tutti gli altri casi un ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Inserire la tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di picco si possono coprire modelli tariffari estesi o innovativi dei fornitori di energia. 

Nel foglio tariffario si riconosce dalla sua unità di misura. Di solito è indicata ad es. come 1.50.- / kW / mese

Nel nostro esempio registriamo il prezzo calcolato.

I costi della potenza di picco possono essere registrati con uno di due metodi:

- Misurazione del consumo: automaticamente tramite la propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per ogni mese dopo il ricevimento della fattura


Durata di validità:
La durata di validità di una tariffa di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Inserire la tassa di base all'80% (se è stato scelto il metodo all'80% con tassa di base)

In questo esempio utilizziamo il metodo all'80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati in "Altro" ("Sonstiges")

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base gravano su tutte le unità di conteggio; per questo possono essere registrati globalmente nelle tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

## Tutti i dettagli sulle tariffe e sulle funzioni

Da qui in poi la pagina è un'opera di consultazione: le sezioni sono richiudibili, così apri solo ciò che ti serve in quel momento.

### Configurazione delle tariffe virtuali (tariffe di rete, solari, per batterie)

Le tariffe virtuali consentono di definire autonomamente un modello tariffario dinamico per la fatturazione dell'energia. Ciò può essere utilizzato ad es. in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini) per distinguere se un inquilino preleva elettricità da un impianto solare o dalla rete. 

Tieni presente che tutte le normali tariffe per l'elettricità devono essere eliminate.

In Tariffe virtuali (Virtuelle Tarife) vedi tutte le tariffe virtuali già registrate. Clicca su Aggiungi (Hinzufügen) e registra ora tutte le tariffe virtuali.

Nome (Name): il nome della tariffa viene mostrato anche all'utente (inquilino).

Tipo di tariffa (Tarif Type) 

- Tariffa solare vRCP (nuova) (Solartarif vZEV (neu)):
    Consente di creare una tariffa solare globale in un RCP o in un vRCP.
    L'energia solare viene ripartita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci delle case (RCP) e sulla somma delle produzioni (contatori solari e/o contatori della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi, se è fisicamente presente un contatore dell'allacciamento domestico. Con questa tariffa non servono contatori virtuali di somma.

- Tariffa solare (legacy) (Solartarif (legacy)):
    Consente di fatturare l'energia di un impianto solare all'interno di un RCP.
    Consente di realizzare RCP con o senza contatore di bilancio (GRD). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa per batteria (legacy) (Batterietarif (legacy)):
    Consente di ripartire all'interno di un RCP l'energia di una batteria con accoppiamento AC. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore virtuale di somma di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica) (Netztarif):
    Serve a fatturare l'elettricità di rete. Se necessario, può essere suddivisa anche in ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva (Zusätzliche Bedingung)
    Con una condizione aggiuntiva puoi stabilire quando questa tariffa è valida. Può trattarsi di un intervallo di tempo (ad es. per ore di punta/ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa si possono registrare il prezzo / unità di consumo e una validità.

Prezzo / kWh (Preis / kWh): il prezzo per questa tariffa

Valido dal (Gültig von): la data a partire dalla quale questa tariffa deve essere valida. Vedi nota.

Valido fino al (Gültig bis): la data fino alla quale questa tariffa deve essere valida. Vedi nota.

Note: 

- Consigliamo di impostare la validità dal 1.1.2000 al 31.12.2099. Il presupposto per questa modalità è che le fatture vengano inviate con la stessa periodicità del fornitore di energia locale. In questo caso il prezzo può essere stabilito prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola" ("neu rechnen"). Per tutte le altre modifiche il ricalcolo è invece necessario.

- Dopo aver definito tutte le tariffe, devi cliccare su "Ricalcola" ("Neu berechnen"). In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, questa intercetta automaticamente tutte le quantità di energia non assegnabili e copre così le 24 ore. In alternativa occorre assicurarsi che gli orari delle condizioni siano configurati correttamente (vedi esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, tariffe virtuali" />

<details id="netztarif">
<summary>Tariffa di rete</summary>

La tariffa di rete può essere registrata come una delle seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Tariffa doppia

- Multitariffa




Tariffa unica (statica e dinamica)

La tariffa unica può essere impostata come statica (tariffa fissa) o dinamica.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh definito per l'elettricità di rete.



Tariffa dinamica

La tariffa dinamica si avvale invece di un'API esterna e interroga il provider disponibile per ogni ora sul prezzo attualmente valido.

Il prezzo viene poi applicato per ogni ora.

Tieni presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che occorre effettuare inserimenti aggiuntivi.

- Tasse supplementari come le tasse di concessione del comune
    (da inserire come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (sezione Altro (Sonstiges))


Il calcolo delle fatture con tariffa dinamica dura sensibilmente più a lungo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Tariffa doppia e multitariffe

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi collegate alle fasce orarie con l'aiuto delle condizioni.

Le fasce orarie vengono definite tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

</details>

<details id="solartarif-vzev-konfigurieren">
<summary>Configurare la tariffa solare vRCP</summary>

La tariffa solare vRCP consente di realizzare soluzioni RCP e vRCP. 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori della produzione solare e contatori dell'allacciamento domestico. 

Il calcolo tiene conto delle eccedenze individuali di una casa e, allo stesso tempo, della domanda di questa eccedenza da parte di altre case.

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

</details>

<details id="solar-und-batterietarif-konfigurieren">
<summary>Configurare la tariffa solare e la tariffa per batteria</summary>

Le tariffe solari e le tariffe per batteria della serie legacy consentono di realizzare un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo tariffario consente quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione differenziata per batteria ed elettricità solare


Presupposti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore virtuale di somma di tutti i carichi.


Contatore solare o della batteria
Per la tariffa solare e per la tariffa per batteria devi indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Per la tariffa solare e per la tariffa per batteria devi indicare un contatore che misura tutti i consumatori sui quali deve essere ripartita questa energia. Di solito si tratta di un contatore virtuale che somma tutti i consumatori (attenzione: i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Per la tariffa solare e la tariffa per batteria si può indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare si tiene conto dell'energia immessa in rete. Ciò significa che ogni 15 minuti viene ripartita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione FV - immissione in rete).

Attenzione:
Se si rinuncia al contatore di bilancio fisico, non sono insoliti scostamenti nell'assegnazione delle tariffe dell'ordine del 10-15%.

Contatori virtuali di somma

- Il contatore virtuale di somma (consumo totale) è necessario per formare il riferimento per l'assegnazione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se hai contatori collegati in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento domestico.
    Contatori solari, contatori della batteria e contatori dell'allacciamento domestico vanno esclusi.

- Se nel sistema ci sono più impianti solari che non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 casa)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più case )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

</details>

### Tariffe di picco

Con le tariffe di picco si possono coprire modelli tariffari estesi o innovativi dei fornitori di energia. 

- Tariffa doppia per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Tariffa unica per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Solo tariffa di picco senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di picco è limitata a 1 anno; può essere creata più volte per più anni.

Le tariffe di picco si basano sui costi sostenuti mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata su base costi (inserimento dei costi)

Funzionamento generale:

I costi delle tariffe di picco registrati o i costi calcolati automaticamente in base alla misurazione e alla tariffa registrata vengono ripartiti sui consumatori al momento della creazione della fattura, nell'intervallo di calcolo scelto. 

La base è costituita dal picco di potenza causato (solo prelievo dalla rete) da ciascun singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo scelto.

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

A seconda del modello tariffario del tuo fornitore di energia, la configurazione cambia. Apri la struttura adatta al tuo caso.

<details id="einheitstarif-ohne-solar">
<summary>Tariffa unica senza solare</summary>

- In questo caso consigliamo di non utilizzare tariffe virtuali. Le tariffe dell'elettricità (tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe dell'elettricità alle tariffe virtuali.


Logica: le letture del contatore vengono interrogate e utilizzate per il Billing. Non è necessario alcun calcolo.

</details>

<details id="einheitstarif-mit-solar">
<summary>Tariffa unica con solare</summary>

- Elettricità solare tariffa unica: definire una tariffa solare senza azione se

- Elettricità di rete tariffa unica: definire una tariffa normale senza azione se


Logica: prima viene ripartita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale.

</details>

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Elettricità solare tariffa unica: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Esempio. Lu–Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire una tariffa normale senza azione se


Logica: prima viene ripartita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità restante viene utilizzata la tariffa senza condizione.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e solare</summary>

- Elettricità solare ore di punta: definire una tariffa solare con azione se

    - Esempio: Lu–Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire una tariffa solare con azione se

    - Esempio: Lu–Ve dalle 22h00 alle 7h00 oppure Sa dalle 13h00 alle 7h00 oppure Do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se usata per l'elettricità solare ore di punta 

- Elettricità di rete ore fuori punta: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se usata per l'elettricità solare ore fuori punta 


Logica: prima viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Elettricità solare ore di punta: definire una tariffa solare senza azione se

- Elettricità di rete ore di punta estate: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno: Lu–Do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno: Lu–Do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno: Lu–Do dalle 7h00 alle 22h00 e intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno: Lu–Do dalle 22h00 alle 07h00 e intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete, tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)</summary>

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: Lu–Do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: Lu–Do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: Lu–Do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno: Lu–Do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E

        - Intervallo di tempo ogni giorno: Lu–Do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno: Lu–Do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: prima viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dal 1.10.2025)</summary>

Descrizione: in questo caso si deve procedere in due passaggi. 1x con le azioni se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa occorre definire le azioni se.

- Elettricità di rete e solare estate NT

    - Esempio: estate NT Lu–Ve dalle 06h00 alle 22h00 Lu–Ve e Sa e Do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo Lu–Ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT Lu–Ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo Lu–Ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT Lu–Ve dalle 22h00 alle 06h00 Lu–Ve e Sa e Do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O

        - Intervallo di tempo Lu–Ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT Lu–Ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O

        - Intervallo di tempo Lu–Ve: dalle 06h00 alle 22h00 


Poi occorre definire i prezzi per ogni periodo.

In questo caso i periodi o la durata devono essere registrati. Con questo modello tariffario è necessaria una combinazione di azioni se/allora e periodo.

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


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki tariffe Energie Uri tariffe 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe dell'elettricità (supportate solo se non si utilizza la funzione VEWA)

Per accedere alle impostazioni delle tariffe dell'elettricità, clicca a sinistra sull'immobile e scorri fino alla finestra verde Tariffe elettricità (Tarife Elettrizität). Qui vengono visualizzate le due tariffe T1 e T2. Seleziona una delle tariffe e clicca su Modifica (Editieren) per apportare modifiche alle sue proprietà (ad es. nome, prezzo ecc.)

Per poter lavorare con le tariffe dell'elettricità, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei contatori corrispondenti.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
