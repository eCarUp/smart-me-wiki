---
title: 'Definire le tariffe elettriche'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Nel video a destra Guy Le spiega le basi della composizione generale dei prezzi dell''elettricità.'
sidebar_label: 'Definire le tariffe elettriche'
---
![Definire le tariffe elettriche – Figura 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Definire il prezzo dell'elettricità

Nel video a destra Guy Le spiega le basi della composizione generale dei prezzi dell'elettricità. 



Ora può però utilizzare anche il nostro calcolatore online delle tariffe elettriche, che La aiuta e si basa su questa spiegazione.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Video YouTube, smart-me Billing - Definire i prezzi RCP" />

Definizione dei prezzi RCP in smart-me Billing spiegata da Guy.

Attenzione: il video è stato registrato con una versione precedente del file Excel, nelle cui formule era ancora presente un errore. Il file Excel è stato corretto.

[Esempio Definire i prezzi nel RCP.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurare le tariffe elettriche

In smart-me Billing si può lavorare con le tariffe dell'elettricità oppure con le tariffe virtuali. La soluzione con le tariffe dell'elettricità è adatta esclusivamente alla realizzazione di sistemi con sola corrente di rete. In tutti gli altri casi vanno utilizzate le tariffe virtuali.

### 1.Si procuri il foglio tariffario del Suo fornitore di energia

Il foglio tariffario del Suo fornitore di energia è disponibile online sul suo sito web già mesi prima dell'inizio del nuovo periodo tariffario.

Si informi anche su quale tariffa acquista esattamente dal fornitore di energia: 

- Verde, blu, grigia o altre versioni

- Tariffa unica, doppia tariffa o dinamica.


Leggere il foglio tariffario:

Le informazioni rilevanti sono in parte un po' sparse. Il foglio tariffario stesso è composto di solito da 4 sezioni:

- Prezzi dell'energia

- Prezzi per l'utilizzazione della rete

- Tariffe di misurazione

- Tributi pubblici


I tributi pubblici in particolare non sono riportati completamente sul foglio tariffario. I tributi comunali variano da comune a comune e sono riportati in un foglio tariffario esterno. Nel 99% dei casi il link si trova nella nota a piè di pagina del foglio tariffario.

Si procuri questo valore per la Sua tariffazione tramite il link stampato sul foglio tariffario.

Di solito è anch'esso un valore in Rp. / kWh, ma può anche essere indicato in % dell'utilizzazione della rete (componenti diverse).

![Definire le tariffe elettriche – Figura 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Scelga per il Suo (v)RCP il calcolo della tariffa solare da utilizzare

Può scegliere tra due approcci di base:

- Metodo forfettario all'80% del prodotto standard di rete
    È importante sapere che il metodo forfettario copre automaticamente tutti gli altri costi. Non possono essere addebitati costi per la misurazione, il conteggio e la gestione della vendita di elettricità del RCP.

    In questo caso non possono essere addebitati costi per la misurazione del RCP, l'amministrazione e il conteggio del RCP.
    La tassa del contatore del fornitore di energia per il contatore principale del RCP non può essere addebitata separatamente in aggiunta.

    - -   Variante 1: corrente di rete addebitata 1:1, corrente solare all'80% dei costi di base e all'80% del prezzo d'acquisto della corrente di rete
            Questa variante è adatta all'ottimizzazione del profitto all'interno del RCP, finché gli appartamenti in affitto sono ben occupati.
            Questo metodo non è adatto se nello stesso edificio sono presenti grandi consumatori industriali e se esiste un sistema a tariffe multiple.
            Soluzione migliore per i sistemi a tariffe multiple.

        - Variante 2: corrente di rete 1:1, corrente solare all'80% del prezzo di riferimento ElCom (da utilizzare in caso di tariffe dinamiche del fornitore di energia)
            Questa variante è adatta a tutti i RCP senza grandi consumatori industriali ed è la più semplice da realizzare.
            Opzione migliore in caso di frequenti sfitti.
            Se questa variante viene utilizzata in combinazione con l'industria e una tariffa multipla (doppia tariffa), può succedere che l'utente industriale, a causa della tariffa solare più elevata, alla fine paghi di più che al di fuori del RCP!

- Costi effettivi (calcolo dei costi di produzione)
    Con questo metodo, oltre al valore calcolato della corrente solare, possono essere addebitati costi per la misurazione, il conteggio e la gestione. Trova i dettagli nel manuale VEWA. 

    - -   Questo metodo è adatto se l'80% della corrente di rete non dovesse eventualmente coprire i costi del Suo impianto solare. Ciò accade molto raramente.

        - Questo metodo deve essere dimostrato anno per anno con il calcolo e aumenta l'onere amministrativo.


### 3\. Calcoli le Sue tariffe per il periodo tariffario

Per il calcolo, il modo più semplice è utilizzare il nostro calcolatore delle tariffe. A seconda del metodo scelto, Le indica quali dati deve inserire in smart-me.

Con la tariffa dinamica: scelga il metodo ElCom all'80% e cerchi nel calcolatore la tariffa H4 della Sua regione e del Suo fornitore di energia come riferimento.

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configuri le Sue tariffe

Ora torni alla configurazione dell'immobile.

1.  Fatturazione (Rechnungsstellung)

2.  Configurazione (Konfiguration)

3.  Immobile (Liegenschaft)

4.  Tariffe virtuali (Virtuelle Tarife)


![Definire le tariffe elettriche – Figura 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crei ora le tariffe di rete del Suo periodo tariffario

<div className="row">
<div className="col col--6">

### Esempio: tariffa unica

</div>
<div className="col col--6">

### Esempio: doppia tariffa

</div>
</div>

Passo successivo: riprodurre la tempistica della tariffa nelle azioni se

[Definire le fasce tariffarie](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

<div className="row">
<div className="col col--6">

![Definire le tariffe elettriche – Figura 4](/img/konfiguration-billing-stromtarife-definieren/04.png)

Esempio di tariffa unica con metodo forfettario all'80%:

Crei ora una tariffa di rete con il prezzo indicato: 

- Tariffa di rete 2026 : 0.19707 CHF / kWh

![Definire le tariffe elettriche – Figura 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

</div>
<div className="col col--6">

![Definire le tariffe elettriche – Figura 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Esempio di tariffa unica con metodo forfettario all'80%:

Crei ora due tariffe di rete con i prezzi indicati:

- Tariffa di rete HT 2026: 0.22409 CHF / kWh

- Tariffa di rete NT 2026: 0.17007 CHF / kWh

In caso di doppia tariffa, la tempistica deve essere creata prima mediante le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen); queste azioni possono poi essere collegate con la "Condizione aggiuntiva (Zusätzliche Bedingung)" per controllarne la validità nel corso della settimana.

![Definire le tariffe elettriche – Figura 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Definire le tariffe elettriche – Figura 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

Crei ora la relativa tariffa solare

Nota:
Esistono diverse tariffe solari e tariffe batteria con funzionalità e requisiti differenti.

In generale la tariffa solare vRCP è la scelta migliore e più universale.

Ciò che questa tariffa non consente è definire tariffe diverse per la batteria e per l'energia solare. A tale scopo deve essere utilizzata la tariffa alternativa.

Trova i dettagli più sotto nella sezione "Tutti i dettagli".

In questo esempio viene utilizzata la tariffa solare vRCP.

Misurazioni:

Tutte le tariffe solari richiedono punti di misura rilevanti, che devono essere collegati.

Opzione più semplice: 

- Campo "Contatore solare (Solarzähler)": selezioni tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio (Bilanzzähler)": selezioni i contatori di bilancio (1 casa: contatore dell'allacciamento dell'edificio; area: contatore dell'area o più contatori dell'allacciamento dell'edificio)


Opzione alternativa: 

- Campo "Contatore solare (Solarzähler)": selezioni tutti i contatori di produzione (solare e batteria).

- Campo "Contatore di bilancio (Bilanzzähler)": selezioni tutti i contatori di consumo e i contatori di produzione.


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

Se vengono utilizzate le tariffe virtuali, al termine della configurazione (e in caso di successive modifiche alla configurazione) occorre cliccare su Ricalcola (Neu berechnen) (preferibilmente a partire dall'1.1.2018). In questo modo tutti i valori precedenti vengono ricalcolati.

Prima di poter creare una fattura, occorre attendere finché l'ultimo valore calcolato non indica "Oggi (Heute)" e non compare alcun messaggio di errore.

I messaggi di errore dovuti a un problema di configurazione vengono di norma visualizzati entro un minuto. Vale quindi la pena cliccare su "Ricalcola (Neu berechnen)" e attendere brevemente per vedere se compare o meno un messaggio di errore.

Suggerimento: in caso di modifiche dei prezzi o degli inquilini (indirizzi, data di entrata o di uscita) non è necessario un ricalcolo; in tutti gli altri casi il ricalcolo è sempre necessario.

![Definire le tariffe elettriche – Figura 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Inserimento della tariffa di potenza

![Definire le tariffe elettriche – Figura 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Con le tariffe di potenza di picco è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

Nel foglio tariffario la si riconosce dalla sua unità di misura. Indicata di solito, ad es., come 1.50.- / kW / mese

Nel nostro esempio inseriamo il prezzo calcolato.

I costi della potenza di picco possono essere registrati con uno di due metodi:

- Misurazione del consumo: automaticamente tramite la propria misurazione di bilancio

- Registrazione dei costi: registrazione successiva dei costi per ogni mese dopo il ricevimento della fattura


Durata di validità:
La durata di validità di una tariffa di potenza di picco è limitata a 1 anno; essa può essere creata più volte per più anni.

Le tariffe di picco si basano o sui costi maturati mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Inserimento della tassa di base all'80% (se è stato scelto il metodo all'80% con tassa di base)

In questo esempio utilizziamo il metodo all'80% con tassa di base. Di conseguenza questi costi devono ancora essere registrati sotto "Altro (Sonstiges)"

![Definire le tariffe elettriche – Figura 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

I costi della tassa di base si applicano a tutte le unità di conteggio, per cui possono essere registrati globalmente nelle tariffe per l'anno 2026.

![Definire le tariffe elettriche – Figura 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Passo successivo

## Tutti i dettagli sulle tariffe e sulle funzioni

## Configurazione delle tariffe virtuali (tariffe di rete, solari, batteria)

Le tariffe virtuali consentono di definire autonomamente un modello tariffario dinamico per l'addebito dell'energia. Ciò può essere utilizzato, ad es., in un raggruppamento ai fini del consumo proprio (RCP o elettricità per gli inquilini) per distinguere se un inquilino preleva elettricità da un impianto solare o dalla rete. 

Tenga presente che tutte le tariffe normali per l'elettricità devono essere state eliminate.

Sotto Tariffe virtuali (Virtuelle Tarife) vede tutte le tariffe virtuali già registrate. Clicchi su Aggiungi (Hinzufügen) e registri ora tutte le tariffe virtuali.

Nome (Name): il nome della tariffa viene mostrato anche all'utente (inquilino).

Tipo di tariffa (Tarif Type) 

- Tariffa solare vRCP (nuova) (Solartarif vZEV (neu)):
    Consente di creare una tariffa solare globale in un RCP o in un vRCP.
    L'energia solare viene distribuita in modo uniforme su tutti i consumatori e si basa sulla somma dei bilanci delle case (RCP) e sulla somma delle produzioni (contatori solari e/o contatori della batteria). Con questa tariffa non è necessario misurare il 100% dei carichi se è fisicamente presente un contatore dell'allacciamento dell'edificio. Con questa tariffa non sono più necessari contatori totalizzatori virtuali.

- Tariffa solare (legacy) (Solartarif (legacy)):
    Consente di addebitare l'energia di un impianto solare all'interno di un RCP.
    Consente di realizzare RCP con o senza contatore di bilancio (GRD). La tariffa richiede un contatore totalizzatore virtuale di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa batteria (legacy) (Batterietarif (legacy)):
    Consente di distribuire l'energia di una batteria con accoppiamento AC all'interno di un RCP. Questa tariffa è compatibile solo con la tariffa solare (legacy). La tariffa richiede un contatore totalizzatore virtuale di tutti i carichi rilevanti (misurazione al 100%).

- Tariffa di rete (tariffa normale o tariffa dinamica) (Netztarif):
    Con questa tariffa viene addebitata la corrente di rete. Se necessario, può essere suddivisa anche in ore di punta e ore fuori punta oppure in modo dinamico.

- Condizione aggiuntiva (Zusätzliche Bedingung)
    Con una condizione aggiuntiva può stabilire quando questa tariffa è valida. Può trattarsi di un periodo di tempo (ad es. per ore di punta/ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen).


Informazioni generali sulle tariffe

Per ogni tariffa è possibile registrare il prezzo / unità di consumo e una validità.

Prezzo / kWh (Preis / kWh): il prezzo per questa tariffa

Valida da (Gültig von): la data a partire dalla quale questa tariffa deve essere valida. Vedere la nota.

Valida fino a (Gültig bis): la data fino alla quale questa tariffa deve essere valida. Vedere la nota.

Note: 

- Consigliamo di impostare la validità dall'1.1.2000 al 31.12.2099. Il presupposto per questa procedura è che le fatture vengano inviate con la stessa periodicità dell'azienda elettrica locale. In questo caso il prezzo può essere stabilito prima della creazione della fattura. Se in smart-me Billing viene modificato solo il prezzo, non è necessario premere il pulsante "Ricalcola (neu rechnen)". Per tutte le altre modifiche il ricalcolo è invece necessario.

- Una volta definite tutte le tariffe, deve cliccare su "Ricalcola (Neu berechnen)". In questo modo tutte le tariffe virtuali vengono calcolate e attivate. Questa operazione può richiedere alcune ore.

- Se sono salvate una o più condizioni, tutte le tariffe devono coprire le 24 ore del giorno. Se è registrata una tariffa normale senza condizioni, questa raccoglie automaticamente tutte le quantità di energia non attribuibili e copre così le 24 ore. In alternativa occorre assicurarsi che gli orari delle condizioni siano configurati correttamente (vedere l'esempio sopra).


![Definire le tariffe elettriche – Figura 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Video YouTube, Tariffe virtuali" />

### Tariffa di rete

La tariffa di rete può essere registrata come una delle seguenti tariffe:

- Tariffa unica (statica o dinamica)

- Doppia tariffa

- Tariffa multipla




Tariffa unica (statica e dinamica)

La tariffa unica può essere creata come statica (tariffa fissa) o come dinamica.

Tariffa fissa

La tariffa fissa applica il prezzo / kWh di corrente di rete definito.



Tariffa dinamica

La tariffa dinamica si avvale invece di un'API esterna e interroga il provider disponibile, per ogni ora, sul prezzo attualmente valido.

Il prezzo viene quindi applicato per ogni ora.

Tenga presente che i prezzi dinamici non trasmettono tutti i costi rilevanti e che devono essere effettuate registrazioni supplementari.

- Tasse supplementari come le tasse di concessione del comune
    (da inserire come prezzo fisso aggiuntivo)

- Tasse di allacciamento mensili (sezione Altro (Sonstiges))


Il calcolo delle fatture con tariffa dinamica richiede sensibilmente più tempo rispetto agli altri metodi (trasferimento dei dati e applicazione)



Doppia tariffa e tariffe multiple

Per ogni tariffa diversa viene creata una tariffa (tariffa di rete). Queste vengono poi associate a una tempistica con l'aiuto delle condizioni.

La tempistica viene definita tramite le azioni [SE/ALLORA](/konfiguration/wenndann-aktionen).



![Definire le tariffe elettriche – Figura 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurare la tariffa solare vRCP

La tariffa solare vRCP consente di realizzare soluzioni RCP e vRCP. 

La configurazione della tariffa solare vRCP calcola l'eccedenza effettiva di un RCP virtuale e il prelievo effettivo dalla rete sulla base di più contatori di produzione solare e contatori dell'allacciamento dell'edificio. 

Il calcolo tiene conto delle eccedenze individuali di una casa e, al tempo stesso, della domanda di questa eccedenza da parte di altre case.

Se esiste un fabbisogno, l'eccedenza viene messa a disposizione della casa vicina. Se non ne esiste alcuno, l'eccedenza viene identificata come immissione in rete.



La soluzione supporta le seguenti realizzazioni:

- Realizzazione di un
    \- RCP con contatore di bilancio e solare (bilancio + produzione)
    \- RCP con bilancio e consumo totale (consumo + bilancio)
    \- RCP con solare e consumo totale (produzione + consumo)

- vRCP: più RCP smart-me con contatori dell'allacciamento dell'edificio

- vRCP: combinazione di RCP smart-me con edifici con soli consumatori

- vRCP: combinazione di RCP smart-me con case unifamiliari con impianti solari 

- vRCP: più RCP smart-me in combinazione con ex modelli pratici GRD


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

Tariffare case unifamiliari a schiera come vRCP

![Definire le tariffe elettriche – Figura 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurare la tariffa solare e la tariffa batteria

Le tariffe solari e le tariffe batteria della serie legacy consentono di realizzare un RCP con o senza contatore di bilancio.

L'utilizzo di questo gruppo di tariffazione consente quanto segue:

- RCP con o senza contatore di bilancio

- Tariffazione diversa per la batteria e per la corrente solare


Presupposti per l'utilizzo:

- Applicazione di uno schema di misura al 100%: tutti i consumatori misurati devono corrispondere al 100% del carico.

- Richiede un contatore totalizzatore virtuale di tutti i carichi.


Contatore solare o contatore della batteria
Per la tariffa solare e la tariffa batteria deve indicare il contatore che misura la batteria o l'impianto solare. 

Consumo totale
Per la tariffa solare e la tariffa batteria deve indicare un contatore che misura tutti i consumatori sui quali deve essere distribuita questa energia. Si tratta per lo più di un contatore virtuale che somma tutti i consumatori (attenzione, i contatori virtuali richiedono in tal caso una licenza aggiuntiva).

Contatore di bilancio
Per la tariffa solare e la tariffa batteria è possibile indicare facoltativamente un contatore di bilancio. Se il contatore di bilancio è indicato, nel calcolo della tariffa solare viene presa in considerazione l'energia immessa in rete. Ciò significa che per ogni 15 minuti viene distribuita solo l'energia solare effettivamente consumata nell'edificio (energia disponibile = produzione FV - immissione in rete).

Attenzione:
Se si rinuncia al contatore di bilancio fisico, non sono insoliti scostamenti nell'attribuzione delle tariffe nell'ordine del 10-15%.

Contatori totalizzatori virtuali

- Il contatore totalizzatore virtuale (consumo totale) è necessario per formare il riferimento per l'attribuzione delle tariffe. Viene formato da tutti i contatori di carico ed è a pagamento (1x licenza Professional)

    La somma dei contatori deve corrispondere esattamente al 100% del carico. Se ha contatori collegati in serie, è rilevante solo il contatore più vicino alla sottodistribuzione / all'allacciamento dell'edificio.
    I contatori solari, i contatori della batteria e i contatori dell'allacciamento dell'edificio devono essere esclusi.

- Se nel sistema sono presenti più impianti solari che non possono essere misurati insieme, è necessaria un'ulteriore licenza per la produzione totale.

    Maggiori informazioni: [Contatori virtuali](/konfiguration/billing/virtuelle-zaehler)


![Definire le tariffe elettriche – Figura 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tariffare un RCP con tariffe legacy (1 casa)

![Definire le tariffe elettriche – Figura 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Definire le tariffe elettriche – Figura 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tariffare un RCP con tariffe legacy (più case )

![Definire le tariffe elettriche – Figura 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Definire le tariffe elettriche – Figura 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tariffe di potenza di picco

Con le tariffe di potenza di picco è possibile coprire modelli elettrici estesi o innovativi dei fornitori di energia. 

- Doppia tariffa per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Tariffa unica per il consumo di base + potenza di picco
    (tariffe virtuali in combinazione con la tariffa di picco)

- Solo tariffa di picco senza tariffe di base


Durata di validità:
La durata di validità di una tariffa di potenza di picco è limitata a 1 anno; essa può essere creata più volte per più anni.

Le tariffe di picco si basano o sui costi maturati mensilmente (fattura del fornitore di energia) oppure dipendono dalla tariffa registrata e dalla misurazione attiva del punto di misura principale.

![Definire le tariffe elettriche – Figura 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Esempio di una tariffa elettrica registrata con base di costo (inserimento dei costi)

Funzionamento generale:

I costi delle tariffe di picco registrati o i costi calcolati automaticamente in base alla misurazione e alla tariffa registrata vengono ripartiti sui consumatori, al momento della creazione della fattura, nell'intervallo di calcolo scelto. 

Come base serve il rispettivo picco di potenza causato (solo prelievo dalla rete) da ogni singolo consumatore nel periodo di conteggio e nel rispettivo intervallo di calcolo scelto.

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

- In questo caso consigliamo di non utilizzare tariffe virtuali. Le tariffe dell'elettricità (tutte) sono in questo caso più efficienti. È possibile passare in qualsiasi momento dalle tariffe dell'elettricità alle tariffe virtuali.


Logica: le letture del contatore vengono rilevate e utilizzate per il Billing. Non è necessario alcun calcolo.

Struttura: tariffa unica con solare

- Tariffa unica corrente solare: definire una tariffa solare senza azione se

- Tariffa unica corrente di rete: definire una tariffa normale senza azione se


Logica: per prima cosa viene distribuita la corrente solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale.

Struttura: ore di punta e ore fuori punta per la corrente di rete e tariffa unica per la corrente solare

- Tariffa unica corrente solare: definire una tariffa solare senza azione se

- Ore di punta corrente di rete: definire una tariffa normale con azione se

    - Esempio: da Lu a Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Ore fuori punta corrente di rete: definire una tariffa normale senza azione se


Logica: per prima cosa viene distribuita la corrente solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per la corrente restante viene applicata la tariffa senza condizione.

Struttura: ore di punta e ore fuori punta per la corrente di rete e la corrente solare

- Ore di punta corrente solare: definire una tariffa solare con azione se

    - Esempio: da Lu a Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Ore fuori punta corrente solare: definire una tariffa solare con azione se

    - Esempio: da Lu a Ve dalle 22h00 alle 7h00 oppure Sa dalle 13h00 alle 7h00 oppure Do dalle 0h00 alle 0h00

- Ore di punta corrente di rete: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se delle ore di punta della corrente solare 

- Ore fuori punta corrente di rete: definire una tariffa normale con azione se

    - Utilizzare la stessa azione se delle ore fuori punta della corrente solare 


Logica: per prima cosa viene utilizzata la corrente solare disponibile con la condizione valida. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per la corrente di rete e tariffa unica per la corrente solare

- Ore di punta corrente solare: definire una tariffa solare senza azione se

- Ore di punta corrente di rete estate: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 7h00 alle 22h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Ore fuori punta corrente di rete estate: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 22h00 alle 07h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Ore di punta corrente di rete inverno: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 7h00 alle 22h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Ore fuori punta corrente di rete inverno: definire una tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 22h00 alle 07h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata la corrente solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per la corrente di rete e tariffa unica per la corrente solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Ore fuori punta corrente di rete e solare inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Ore di punta corrente di rete e solare inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Ore fuori punta corrente di rete e solare estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Ore di punta corrente di rete e solare estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): da Lu a Do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata la corrente solare disponibile. Se ne è disponibile troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per la corrente di rete e la corrente solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui occorre procedere in due fasi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa devono essere definite le azioni se.

- Corrente di rete e solare estate NT

    - Esempio: estate NT da Lu a Ve dalle 06h00 alle 22h00 da Lu a Ve e Sa e Do sempre

    - Nome (Name): Uri Sommer NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da Lu a Ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Corrente di rete e solare estate HT

    - Esempio: estate HT da Lu a Ve dalle 22h00 alle 06h00

    - Nome (Name): Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo da Lu a Ve: dalle 22h00 alle 06h00 




- Corrente di rete e solare inverno NT

    - Esempio: inverno NT da Lu a Ve dalle 22h00 alle 06h00 da Lu a Ve e Sa e Do sempre

    - Nome (Name): Uri Winter NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da Lu a Ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Corrente di rete e solare inverno HT

    - Esempio: inverno HT da Lu a Ve dalle 06h00 alle 22h00

    - Nome (Name): Uri Winter HT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da Lu a Ve: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per ogni periodo di tempo.

In questo caso devono essere registrati i periodi ovvero la durata. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome (Name): Uri Sommer HT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome (Name): Uri Sommer HT Solar


- Tipo (Type): Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata (Dauer): dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome (Name): Uri Sommer NT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome (Name): Uri Sommer NT Solar

    - Tipo (Type): Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome (Name): Uri Winter HT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome (Name): Uri Winter HT Solar

    - Tipo (Type): Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome (Name): Uri Winter NT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome (Name): Uri Winter NT Solar

    - Tipo (Type): Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, video tariffe Energie Uri 2026 (Wiki Tarife Enerige Uri Tarife 2026.mp4)" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Sistemi con sole tariffe di rete (soluzione con segnale esterno)

Tariffe dell'elettricità (supportate solo se non viene utilizzata la funzione VEWA)

Per accedere alle impostazioni delle tariffe dell'elettricità, clicchi a sinistra sull'immobile e scorra fino alla finestra verde Tariffe elettricità (Tarife Elettrizität). Qui vengono visualizzate le due tariffe T1 e T2. Selezioni una delle tariffe e clicchi su Modifica (Editieren) per apportare modifiche alle sue proprietà (ad es. nome, prezzo ecc.)

Per poter lavorare con le tariffe dell'elettricità, il segnale tariffario dell'azienda elettrica deve essere collegato all'ingresso tariffario dei rispettivi contatori.

![Definire le tariffe elettriche – Figura 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
