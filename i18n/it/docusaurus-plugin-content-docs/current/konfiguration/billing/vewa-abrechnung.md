---
title: 'VEWA - Conteggio'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduzione smart-me da 2min 20sec'
sidebar_label: 'VEWA - Conteggio'
---
![VEWA - Conteggio – Figura 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinar VEWA

<Video src="nrziX2lLI0s" title="Video YouTube" />

- [Introduzione smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) da 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) da 12min 50sec

- [Live demo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) da 24min 58sec 

- [Domande](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) da 40min 32sec 


## Informazioni generali su VEWA

VEWA sta per conteggio dei costi dell'energia e dell'acqua in base al consumo (Verbrauchsabhängige Energie- und Wasserkosten Abrechnung). Offre una guida per la ripartizione equa di tutti i tipi di costi energetici e comprende:

- Calore

- Freddo

- Acqua calda sanitaria

- Acqua fredda 

- Elettricità (può anche essere gestita separatamente)


La VEWA è il successore del noto conteggio VHKA e supporta vettori energetici aggiuntivi e procedure semplificate.

VEWA si occupa della ripartizione dei costi per sistemi di riscaldamento separati o combinati sulla base dei valori misurati dai contatori e ripartisce i costi nel modo più equo possibile.

A tale scopo, per calore, freddo e acqua calda sanitaria vengono applicate procedure speciali per compensare le disparità dovute all'ubicazione degli appartamenti, alle perdite nelle condutture o ad altre differenze tra gli utenti.

Esistono le seguenti forme di ripartizione dei costi:

Centri di costo separati

- Ogni energia proviene da una fonte diversa


![VEWA - Conteggio – Figura 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Calore e acqua calda sanitaria combinati

- Riscaldamento di qualsiasi tipo con accumulatore di acqua calda sanitaria collegato


![VEWA - Conteggio – Figura 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Calore + freddo e acqua calda sanitaria combinati

- Pompa di calore con freecooling


![VEWA - Conteggio – Figura 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Funzionalità

### Quali sistemi possono essere conteggiati con smart-me VEWA?

- sistemi di riscaldamento e dell'acqua separati (calore, freddo, acqua calda sanitaria, acqua fredda)

- sistemi combinati di riscaldamento e acqua calda sanitaria (calore + acqua calda sanitaria, freddo, acqua fredda)

- sistemi combinati di riscaldamento, acqua calda sanitaria e raffreddamento (calore + freddo + acqua calda sanitaria, acqua fredda)


Il presupposto per un conteggio corretto di un tipo di energia è che nelle unità siano presenti contatori di consumo per ogni tipo di energia.

Nota: 

- I ripartitori dei costi di riscaldamento non sono supportati

- In caso di conteggio con contatori della produzione totale, i costi possono essere ripartiti in percentuale sulle unità abitative.


![VEWA - Conteggio – Figura 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locali comuni:

È possibile ripartire in un secondo momento (Billing) gruppi di contatori in cartelle in percentuale sulle unità di conteggio.

Questo è supportato per entrambe le varianti di sistema descritte sopra.

### Quanti sistemi possono essere configurati in un account?

È possibile conteggiare un sistema VEWA per ogni immobile. In presenza di più sistemi di riscaldamento, nello stesso account vengono creati più immobili.

Questi possono poi essere conteggiati singolarmente con periodi di conteggio diversi.

### Modalità di lavoro generale con smart-me VEWA

- VEWA può essere applicata a qualsiasi immobile. Si assicuri pertanto che tutti i contatori di consumo dello stesso sistema di riscaldamento si trovino nello stesso immobile.
    Se più edifici condividono lo stesso sistema di riscaldamento, gli edifici devono essere riuniti in uno solo.

- Quando si applica VEWA, nell'elenco degli inquilini devono essere registrati correttamente tutti i contratti di locazione e anche gli sfitti. Sia in smart-me Billing sia nel software immobiliare esterno, se si utilizzano file DTA-VKA.


## Configurare VEWA

1.  ### Attivare VEWA e configurare le ripartizioni dei costi.


Selezionare il sistema termico:

- Calore, freddo e acqua calda sanitaria combinati (Wärme, Kälte und Warmwasser kombiniert)

- Calore, acqua calda sanitaria combinati (Wärme, Warmwasser kombiniert)

- Sistemi separati (Separierte Systeme)


Se combinato o meno dipende dalla produzione di calore. Se ad esempio si utilizza una pompa di calore per il riscaldamento, il raffreddamento e la preparazione dell'acqua calda sanitaria, è indicato il conteggio combinato, poiché per tutte e tre le energie la grandezza di dispendio è la stessa, ossia l'elettricità.

Se invece il riscaldamento è fornito da un riscaldamento a olio, mentre l'acqua calda sanitaria è preparata in modo puramente elettrico senza il supporto del riscaldamento a olio, la scelta ricade su conteggi non combinati.

Ripartizione dei costi

La ripartizione dei costi suddivide i costi totali in costi fissi (costi di base) e costi variabili (costi in base al consumo).

Costi di base

I costi di base tengono conto di eventuali perdite nelle condutture, perdite di circolazione, posizione privilegiata di un appartamento con più sole ecc. e ripartiscono una parte dei costi su tutti gli inquilini in base alla loro quota di superficie rispetto all'intero immobile.

Costi variabili

I costi variabili vengono applicati direttamente alle quantità di energia consumate rilevate. Corrispondono al consumo individuale di ciascun inquilino.

Preparazione dell'acqua calda sanitaria

Affinché l'energia confluita nella preparazione dell'acqua calda sanitaria possa essere stimata sulla base dei valori in m3, si applica la seguente formula standard:

Energia acqua calda sanitaria in kWh =
Totale valori di consumo acqua calda sanitaria \[m3\] \* 1.163 \* differenza di temperatura \[K\] \* 1,25

La differenza di temperatura può essere selezionata e si riferisce alla differenza tra la temperatura dell'acqua fredda all'ingresso nell'edificio (di solito +10°C) e la temperatura media del boiler a cui viene riscaldata (di solito +52°C).

Secondo questo esempio, la differenza è pari a: 

Differenza di temperatura = temperatura obiettivo - temperatura di ingresso = 52°C - 10°C = 42 K

![VEWA - Conteggio – Figura 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valori indicativi per la configurazione di costi di base e costi variabili:

Nuove costruzioni (tutto dal 2018): 

- Costi di base 30%, costi variabili 70%


Edifici vecchi risanati (isolamento migliorato secondo lo standard delle nuove costruzioni):

- Costi di base 40%, costi variabili 60%


Edifici vecchi non risanati (prima del 2018):

- Costi di base dal 40%\-50%, costi variabili dal 50-60%

- Inoltre, per ogni appartamento deve essere calcolata una compensazione della posizione. Si riduce il valore misurato del contatore dell'appartamento oppure si ponderano le percentuali di ripartizione del contatore totale. 
    (Dettagli nel capitolo 10 del documento VEWA, sotto letteratura di approfondimento)


Qui è possibile influenzare i valori misurati dei contatori degli appartamenti per effettuare l'adeguamento della posizione: [Configurazione contatori/cartelle](/konfiguration/ordnerkonfiguration)  

- Se un contatore deve ridurre il proprio valore misurato del 20%: 
    la correzione del valore (Wertkorrektur) viene impostata da 100% a 80%.


### 2\. Registrare un periodo di conteggio

I costi possono essere registrati come costi complessivi per ogni tipo di energia.
Nei sistemi combinati, i costi dei singoli vettori energetici vengono sommati.

![VEWA - Conteggio – Figura 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Creare i periodi di conteggio e definire il contenuto del periodo di fatturazione

1.  Creare il periodo di conteggio

2.  Attivare o disattivare il contenuto


Se l'elettricità e i costi di riscaldamento e accessori vengono conteggiati a intervalli diversi, si registrano più periodi.

ad es.:

- Periodo elettricità Q1 2024 (solo elettricità e altro)

- Periodo elettricità Q2 2024 (solo elettricità e altro)

- Periodo elettricità Q3 2024 (solo elettricità e altro)

- Periodo elettricità Q4 2024 (solo elettricità e altro)

- Periodo calore acqua 2024 (solo calore, freddo, acqua calda sanitaria e acqua fredda)


![VEWA - Conteggio – Figura 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Registrare i costi del periodo di conteggio

Nota per l'esportazione in software immobiliari con file DTA-VHKA:
Se desidera utilizzare la VEWA, ma esportare i dati in un altro sistema in permille o valori di consumo, non è necessario registrare costi. Il periodo di fatturazione deve tuttavia essere creato in anticipo.

I costi che possono essere registrati si suddividono a grandi linee nei seguenti costi:

Costi energetici

Costi per il vettore energetico acquistato, ad es.: 

- 1000 litri di olio per 2000 CHF

- 500kWh di elettricità per 200 CHF

- 10 m3 di acqua fredda per 50 CHF


Costi accessori dell'energia

Costi per esercizio e manutenzione

- Costi della revisione periodica dell'impianto di riscaldamento

- Costi per il servizio di lettura (ad es. ammortamento dei costi di licenza di smart-me per i dispositivi)

- Lavori amministrativi relativi all'impianto di riscaldamento

- Costi dello spazzacamino

- Smaltimento dei rifiuti, se il sistema di riscaldamento genera tali costi.


Cosa non rientra nei costi accessori dell'energia

- Infrastruttura di misura (viene regolata tramite un aumento della pigione)


Nota sui costi dell'acqua calda sanitaria:

I costi per l'acqua calda sanitaria comprendono solo i costi per il riscaldamento dell'acqua calda sanitaria. La quantità di acqua fredda consumata per la preparazione dell'acqua calda sanitaria viene ripresa automaticamente nella parte relativa all'acqua fredda. 

- Se un contatore totale dell'acqua fredda viene ripartito in percentuale su più appartamenti, l'intera quantità di acqua fredda viene calcolata da questo contatore comune.

- Se negli appartamenti si trovano contatori dell'acqua fredda e calda applicati con il 100% del consumo, la somma per l'acqua fredda corrisponde alla somma di tutti i contatori dell'acqua calda e fredda.


Questi possono essere inseriti per ogni tipo di energia e vengono sommati.

![VEWA - Conteggio – Figura 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Addebitare il noleggio dei contatori

A differenza del RCP (raggruppamento ai fini del consumo proprio), nella VEWA è consentito addebitare agli utenti i costi per l'ammortamento dei contatori di calore e dei contatori dell'acqua.

Ciò deve però avvenire tramite l'aumento delle pigioni, non tramite le spese accessorie.

È consentito riversare i costi dell'hardware e dell'installazione di un contatore.

Si applica un periodo di ammortamento di 10 anni.

Le regole di traslazione sono descritte nell'art. 269d CO e negli art. 19 e 20 OLAL

Dettagli sul calcolo nel documento ufficiale VEWA al punto 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Registrare una tariffa sempre valida per ogni vettore energetico

- Questa tariffa viene inserita senza prezzo (0) con una validità illimitata (2099).

- Ogni vettore energetico con una tariffa valida viene rappresentato sulla fattura.




![VEWA - Conteggio – Figura 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Inserire le superfici degli appartamenti

Per il calcolo VEWA e la ripartizione dei costi di base devono essere note le superfici degli appartamenti. Queste possono essere definite nella rispettiva unità di conteggio. Vengono poi sommate per ottenere la superficie totale rilevante.

Nota: per riportare correttamente la superficie totale rilevante, tutti i locali devono essere registrati come unità di conteggio, anche se non hanno contatori associati e vengono gestiti esternamente in modo forfettario.
Sono possibili solo numeri interi.



![VEWA - Conteggio – Figura 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Passo successivo

## Contenuto e dettaglio della fattura

### Panoramica

La panoramica contiene tutti i costi in un colpo d'occhio, comprese eventuali imposte applicate e differenze di arrotondamento.

![VEWA - Conteggio – Figura 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Calore

La sezione Calore mostra i costi totali per il centro di costo calore e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in kWh (qui 700 kWh)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2)


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione 100%)

- Valore misurato dal contatore del rispettivo appartamento (qui 500kWh)






![VEWA - Conteggio – Figura 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Acqua calda sanitaria

La sezione Acqua calda sanitaria mostra i costi totali per il centro di costo acqua calda sanitaria e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 5 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Questi costi comprendono esclusivamente i costi necessari per la produzione di acqua calda sanitaria, ma non l'acqua fredda impiegata a tale scopo.
Maggiori informazioni sui costi nella sezione Panoramica dei centri di costo.

Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione 100%)

- Valore misurato dal contatore del rispettivo appartamento in m3 (qui 3 m3)


![VEWA - Conteggio – Figura 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Acqua fredda

La sezione Acqua fredda mostra i costi totali per il centro di costo acqua fredda e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 20%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 13 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione 100%)

- Valore misurato dal contatore del rispettivo appartamento in m3 acqua calda sanitaria
    (qui 3 m3)

- Valore misurato dal contatore del rispettivo appartamento in m3 acqua fredda
    (qui 5 m3)


Nota:

A seconda del sistema, qui possono figurare solo contatori dell'acqua fredda oppure contatori misti dell'acqua fredda e calda; il rilevamento di questi sistemi è automatizzato.

- Se c'è un contatore principale per l'acqua fredda e nessuno negli appartamenti, oppure solo contatori dell'acqua calda negli appartamenti, qui figurerebbe solo un contatore dell'acqua fredda con quota percentuale.

- Se ci sono contatori degli appartamenti per l'acqua calda e fredda, qui figurano sempre entrambi i contatori per appartamento; la somma dà il consumo d'acqua totale.


![VEWA - Conteggio – Figura 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Panoramica dei centri di costo

Centri di costo separati

Ogni fattura dispone della panoramica dei centri di costo. Questa contiene tutte le voci di costo inserite per i singoli centri di costo.

- Per il calore sono elencati tutti i costi relativi al sistema di riscaldamento.

- Per l'acqua calda sanitaria figurano solo i costi relativi al riscaldamento dell'acqua calda sanitaria, ma non la quantità di acqua fredda utilizzata.

- Per l'acqua fredda vengono inseriti tutti i costi relativi all'acqua fredda e alle acque di scarico.


Centri di costo combinati

La panoramica dei centri di costo può cambiare visivamente quando i sistemi vengono combinati.

È comune ad es. la combinazione di calore e acqua calda sanitaria, poiché una parte dell'energia per la preparazione dell'acqua calda sanitaria proviene dal sistema di riscaldamento. (Accumulatore di acqua calda sanitaria accoppiato al riscaldamento)

In questo caso i costi vengono mostrati in forma combinata.

La particolarità è l'indicazione della formula di conversione utilizzata per suddividere l'energia totale in energia termica ed energia per la preparazione dell'acqua calda sanitaria.

Panoramica dei costi dei centri di costo separati

![VEWA - Conteggio – Figura 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Panoramica dei centri di costo combinati calore + acqua calda sanitaria
(formula di conversione sotto la panoramica dei costi)

![VEWA - Conteggio – Figura 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Applicare VEWA con l'interfaccia del software immobiliare

[Scambio di dati con VEWA e file DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestione degli errori VEWA e Billing

[Anomalie relative a VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Letteratura e documenti di approfondimento su VEWA (situazione giuridica attuale)

[Dettagli e guida sul modello di conteggio VEWA](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vai all'interfaccia VHKA](/schnittstellen/dta-vhka-files)
