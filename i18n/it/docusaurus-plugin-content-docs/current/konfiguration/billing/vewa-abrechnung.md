---
title: 'VEWA - Conteggio'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduzione a smart-me dal minuto 2:20'
sidebar_label: 'VEWA - Conteggio'
---
![VEWA - Conteggio – Figura 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinar VEWA

<Video src="nrziX2lLI0s" title="Video" />

- [Introduzione a smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) dal minuto 2:20 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) dal minuto 12:50

- [Demo dal vivo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) dal minuto 24:58 

- [Domande](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) dal minuto 40:32 


## Informazioni generali su VEWA

VEWA sta per conteggio dei costi di energia e acqua in funzione del consumo. Offre una guida per la ripartizione equa di tutti i tipi di costi energetici e comprende:

- Calore

- Freddo

- Acqua calda sanitaria

- Acqua fredda 

- Elettricità (può anche essere gestita separatamente)


La VEWA è il successore del noto conteggio VHKA e supporta vettori energetici estesi e procedure semplificate.

VEWA si occupa della ripartizione dei costi per impianti di riscaldamento separati o combinati sulla base dei valori di misura dei contatori e ripartisce i costi nel modo più equo possibile.

A tale scopo, per calore, freddo e acqua calda sanitaria vengono applicate procedure speciali per compensare le disparità dovute alla posizione dell'appartamento, le perdite nelle condotte o altre differenze fra gli utenti.

Esistono le seguenti forme di ripartizione dei costi:

Centri di costo separati

- Ogni energia proviene da una fonte diversa


![VEWA - Conteggio – Figura 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Calore e acqua calda sanitaria combinati

- Riscaldamento di qualsiasi tipo con accumulatore di acqua calda collegato


![VEWA - Conteggio – Figura 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Calore + freddo e acqua calda sanitaria combinati

- Pompa di calore con freecooling


![VEWA - Conteggio – Figura 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Funzionalità

### Quali impianti possono essere conteggiati con smart-me VEWA?

- impianti di riscaldamento e idrici separati (calore, freddo, acqua calda sanitaria, acqua fredda)

- impianti combinati di riscaldamento e acqua calda sanitaria (calore + acqua calda sanitaria, freddo, acqua fredda)

- impianti combinati di riscaldamento, acqua calda sanitaria e raffrescamento (calore + freddo + acqua calda sanitaria, acqua fredda)


Presupposto per il conteggio corretto di un tipo di energia è che per ogni tipo di energia siano presenti contatori di consumo nelle unità.

Nota: 

- I ripartitori dei costi di riscaldamento non sono supportati

- In caso di conteggio con contatori di produzione totale, i costi possono essere ripartiti percentualmente sulle unità abitative.


![VEWA - Conteggio – Figura 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locali comuni:

È possibile ripartire percentualmente in un momento successivo (Billing) raccolte di contatori all'interno di cartelle sulle unità di conteggio.

Questo è supportato per entrambe le varianti di impianto sopra descritte.

### Quanti impianti possono essere configurati in un account?

Può essere conteggiato un impianto VEWA per immobile. In presenza di più impianti di riscaldamento, vengono creati più immobili nello stesso account.

Questi possono poi essere conteggiati individualmente con periodi di conteggio diversi.

### Modalità di lavoro generale con smart-me VEWA

- VEWA può essere applicato a qualsiasi immobile. Assicurati quindi che tutti i contatori di consumo dello stesso impianto di riscaldamento si trovino nello stesso immobile.
    Se più edifici condividono lo stesso impianto di riscaldamento, gli edifici devono essere riuniti in uno solo.

- Nell'applicazione di VEWA, nello specchietto degli inquilini devono essere registrati correttamente tutti i contratti di locazione e anche le sfitti. Vuoi in smart-me Billing, vuoi nel software immobiliare esterno se si utilizzano file DTA-VKA.


## Configurare VEWA

1.  ### Attivare VEWA e configurare le ripartizioni dei costi.


Selezionare l'impianto di riscaldamento:

- Calore, freddo e acqua calda sanitaria combinati

- Calore e acqua calda sanitaria combinati

- Impianti separati


Se combinato o meno dipende dalla produzione di calore. Se ad esempio si utilizza una pompa di calore per riscaldamento, raffrescamento e produzione di acqua calda sanitaria, conviene il conteggio combinato, poiché per tutte e tre le energie la grandezza di riferimento è la stessa, ovvero l'elettricità.

Se invece il riscaldamento avviene tramite un impianto a olio combustibile, mentre l'acqua calda sanitaria viene prodotta esclusivamente per via elettrica senza il supporto dell'impianto a olio, la scelta ricade sui conteggi non combinati.

Ripartizione dei costi

La ripartizione dei costi suddivide i costi complessivi in costi fissi (costi di base) e costi variabili (costi in funzione del consumo).

Costi di base

I costi di base tengono conto di eventuali perdite nelle condotte, perdite di circolazione, posizione favorevole di un appartamento con maggiore soleggiamento ecc. e ripartiscono una quota dei costi su tutti gli inquilini in base alla loro quota di superficie sull'immobile complessivo.

Costi variabili

I costi variabili vengono applicati direttamente alle quantità di energia consumate rilevate. Corrispondono al consumo individuale di ogni inquilino.

Produzione di acqua calda sanitaria

Affinché l'energia impiegata per la produzione di acqua calda sanitaria possa essere stimata sulla base dei valori in m3, viene applicata la seguente formula standard:

Energia acqua calda sanitaria in kWh =
Totale valori di consumo acqua calda sanitaria \[m3\] \* 1.163 \* differenza di temperatura \[K\] \* 1,25

La differenza di temperatura può essere scelta e si riferisce alla differenza di temperatura dell'acqua fredda all'ingresso nell'edificio (di norma +10°C) fino al suo riscaldamento alla temperatura media del boiler (di norma +52°C).

La differenza secondo questo esempio è quindi: 

Differenza di temperatura = temperatura obiettivo - temperatura d'ingresso = 52°C - 10°C = 42 K

![VEWA - Conteggio – Figura 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valori indicativi per la configurazione dei costi di base e dei costi variabili:

Edifici nuovi (tutto a partire dal 2018): 

- Costi di base 30%, costi variabili 70%


Edifici vecchi risanati (isolamento portato allo standard degli edifici nuovi):

- Costi di base 40%, costi variabili 60%


Edifici vecchi non risanati (prima del 2018):

- Costi di base dal 40%\-50%, costi variabili dal 50-60%

- Inoltre, per ogni appartamento deve essere calcolata una compensazione della posizione. Viene ridotto il valore di misura del contatore dell'appartamento oppure vengono ponderate le percentuali di ripartizione del contatore totale. 
    (Dettagli nel capitolo 10 del documento VEWA sotto letteratura di approfondimento)


Qui è possibile influenzare i valori di misura dei contatori degli appartamenti per effettuare l'adeguamento della posizione: [Configurazione contatori/cartelle](/konfiguration/ordnerkonfiguration)  

- Se un contatore deve ridurre il proprio valore di misura del 20%: 
    la correzione del valore viene impostata dal 100% all'80%.


### 2\. Registrare un periodo di conteggio

I costi possono essere registrati come costi complessivi per ogni tipo di energia.
Nei sistemi combinati, i singoli costi dei diversi vettori energetici vengono sommati.

![VEWA - Conteggio – Figura 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Creare i periodi di conteggio e definire il contenuto del periodo di fatturazione

1.  Creazione del periodo di conteggio

2.  Attivare o disattivare il contenuto


Se l'elettricità e i costi di riscaldamento e le spese accessorie vengono conteggiati a intervalli diversi, vengono registrati più periodi.

ad es.:

- Periodo elettricità Q1 2024 (solo elettricità e altro)

- Periodo elettricità Q2 2024 (solo elettricità e altro)

- Periodo elettricità Q3 2024 (solo elettricità e altro)

- Periodo elettricità Q4 2024 (solo elettricità e altro)

- Periodo calore acqua 2024 (solo calore, freddo, acqua calda sanitaria e acqua fredda)


![VEWA - Conteggio – Figura 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Registrare i costi del periodo di conteggio

Nota per l'esportazione in software immobiliari con file DTA-VHKA:
Se desideri utilizzare VEWA, ma esportare i dati in un altro sistema in millesimi o in valori di consumo, non è necessario registrare alcun costo. Il periodo di fatturazione deve però essere creato in anticipo.

I costi che possono essere registrati si suddividono a grandi linee nei seguenti costi:

Costi energetici

Costi per il vettore energetico acquistato, ad es.: 

- 1000 litri di olio combustibile per 2000 CHF

- 500kWh di elettricità per 200 CHF

- 10 m3 di acqua fredda per 50 CHF


Costi accessori dell'energia

Costi per l'esercizio e la manutenzione

- Costi della revisione periodica dell'impianto di riscaldamento

- Costi per il servizio di lettura (ad es. ammortamento dei costi di licenza smart-me per gli apparecchi)

- Lavori amministrativi connessi all'impianto di riscaldamento

- Costi dello spazzacamino

- Smaltimento dei rifiuti, se l'impianto di riscaldamento genera tali costi.


Cosa non rientra nei costi accessori dell'energia

- Infrastruttura di misura (questa viene regolata tramite un aumento della pigione)


Nota sui costi dell'acqua calda sanitaria:

I costi per l'acqua calda sanitaria comprendono solo i costi per il riscaldamento dell'acqua calda. La quantità di acqua fredda utilizzata per la produzione di acqua calda sanitaria viene automaticamente attribuita alla parte relativa all'acqua fredda. 

- Se un contatore complessivo dell'acqua fredda viene ripartito percentualmente su più appartamenti, l'intera quantità di acqua fredda viene calcolata a partire da questo contatore comune.

- Se negli appartamenti sono presenti contatori dell'acqua fredda e dell'acqua calda sanitaria e vengono applicati con il 100% del consumo, la somma per l'acqua fredda è la somma di tutti i contatori dell'acqua calda sanitaria e dell'acqua fredda.


Questi possono essere registrati per ogni tipo di energia e vengono sommati.

![VEWA - Conteggio – Figura 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Conteggiare i noleggi dei contatori

Diversamente dal RCP (raggruppamento ai fini del consumo proprio), nella VEWA è consentito addebitare agli utenti i costi per l'ammortamento dei contatori di calore e dell'acqua.

Questo deve però avvenire tramite l'aumento delle pigioni, non tramite le spese accessorie.

Possono essere trasferiti i costi dell'hardware e del montaggio di un contatore.

Vale un periodo di ammortamento di 10 anni.

Le regole di trasferimento sono descritte nell'art. 269d CO e negli art. 19 e 20 OLAL

Dettagli sul calcolo nel documento ufficiale VEWA al punto 2.2 REGOLE FORMALI DI TRASFERIMENTO 

### 6\. Registrare una tariffa sempre valida per ogni vettore energetico

- Questa tariffa viene registrata senza prezzo (0) con una validità illimitata (2099).

- Ogni vettore energetico con tariffa valida viene rappresentato sul conteggio.




![VEWA - Conteggio – Figura 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Inserire le superfici degli appartamenti

Per il calcolo VEWA e la ripartizione dei costi di base devono essere note le superfici degli appartamenti. Queste possono essere definite nella rispettiva unità di conteggio. Vengono poi sommate nella superficie complessiva rilevante.

Nota: per riportare correttamente la superficie complessiva rilevante, tutti i locali devono essere registrati come unità di conteggio, anche se a questi non fosse associato alcun contatore e venissero gestiti esternamente a forfait.
Sono possibili solo numeri interi.



![VEWA - Conteggio – Figura 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Passo successivo

## Contenuto e struttura del conteggio

### Panoramica

La panoramica contiene tutti i costi a colpo d'occhio, comprese eventuali imposte applicate e differenze di arrotondamento.

![VEWA - Conteggio – Figura 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Calore

Il calore mostra i costi complessivi del centro di costo calore e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in kWh (qui 700 kWh)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2)


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati del contatore dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 su 91, occupazione al 100%)

- Valore di misura del contatore del rispettivo appartamento (qui 500kWh)






![VEWA - Conteggio – Figura 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Acqua calda sanitaria

La sezione acqua calda sanitaria mostra i costi complessivi del centro di costo acqua calda sanitaria e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 5 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Questi costi sono composti esclusivamente dai costi necessari alla produzione di acqua calda sanitaria, ma non dall'acqua fredda impiegata a tale scopo.
Maggiori informazioni sui costi nella sezione Panoramica dei centri di costo.

Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati del contatore dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 su 91, occupazione al 100%)

- Valore di misura del contatore del rispettivo appartamento in m3 (qui 3 m3)


![VEWA - Conteggio – Figura 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Acqua fredda

La sezione acqua fredda mostra i costi complessivi del centro di costo acqua fredda e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 20%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 13 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati del contatore dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 su 91, occupazione al 100%)

- Valore di misura del contatore del rispettivo appartamento in m3 acqua calda sanitaria
    (qui 3 m3)

- Valore di misura del contatore del rispettivo appartamento in m3 acqua fredda
    (qui 5 m3)


Nota:

A seconda dell'impianto, qui possono comparire solo contatori dell'acqua fredda oppure contatori misti dell'acqua fredda e calda; il riconoscimento di questi impianti è automatizzato.

- Se esiste un contatore principale per l'acqua fredda e nessuno negli appartamenti, oppure solo contatori dell'acqua calda sanitaria negli appartamenti, qui comparirebbe solo un contatore dell'acqua fredda con quota percentuale.

- Se negli appartamenti esistono contatori per l'acqua calda sanitaria e per l'acqua fredda, qui compaiono sempre entrambi i contatori per appartamento; la somma dà il consumo idrico totale.


![VEWA - Conteggio – Figura 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Panoramica dei centri di costo

Centri di costo separati

Ogni conteggio dispone della panoramica dei centri di costo. Questa contiene tutte le voci di costo registrate per i singoli centri di costo.

- Sotto calore sono elencati tutti i costi relativi all'impianto di riscaldamento.

- Sotto acqua calda sanitaria figurano solo i costi relativi al riscaldamento dell'acqua calda, ma non alla quantità di acqua fredda utilizzata.

- Sotto acqua fredda vengono registrati tutti i costi relativi all'acqua fredda e alle acque reflue.


Centri di costo combinati

La panoramica dei centri di costo può cambiare visivamente quando gli impianti vengono combinati.

È usuale ad es. la combinazione di calore e acqua calda sanitaria, poiché una parte dell'energia per la produzione di acqua calda sanitaria proviene dall'impianto di riscaldamento. (Accumulatore di acqua calda accoppiato al riscaldamento)

In questo caso i costi vengono mostrati in forma combinata.

La particolarità è l'indicazione della formula di conversione utilizzata per suddividere l'energia complessiva in energia termica ed energia per la produzione di acqua calda sanitaria.

Panoramica dei costi con centri di costo separati

![VEWA - Conteggio – Figura 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Panoramica combinata dei centri di costo calore + acqua calda sanitaria
(formula di conversione sotto la panoramica dei costi)

![VEWA - Conteggio – Figura 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Utilizzare VEWA con l'interfaccia verso il software immobiliare

[Scambio di dati con VEWA e file DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestione degli errori VEWA e Billing

[Anomalie in relazione a VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Letteratura e documenti di approfondimento su VEWA (situazione giuridica attuale)

[Dettagli e guida al modello di conteggio VEWA](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Prosegui all'interfaccia VHKA](/schnittstellen/dta-vhka-files)
