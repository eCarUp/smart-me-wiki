---
title: 'CISE - Conteggio'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduzione smart-me da 2min 20sec'
sidebar_label: 'CISE - Conteggio'
naechste_schritte: [konfiguration/billing/rechnung-erstellen]
vorheriger_schritt: konfiguration/billing/sonstige-kosten
---

<Menueweg>Fatturazione → Immobili & tariffe → CISE</Menueweg>

## Conteggio di calore e acqua: due modalità

Per la tariffazione e il conteggio della multienergia esistono in linea di principio due possibilità di configurazione:

**Conteggio senza la funzione CISE**

- Conteggio tramite una tariffa energetica calcolata esternamente per ogni tipo di energia. Viene gestita nell'immobile con un prezzo in CHF/m3 o CHF/kWh sotto le tariffe virtuali.

**Conteggio con la funzione CISE (consigliato)**

- È possibile registrare i costi di calore e acqua che si accumulano nel corso dell'anno. La tariffa viene poi calcolata sul periodo e ripartita sulle unità di conteggio tramite chiavi di ripartizione.

Questa pagina descrive la modalità consigliata con la funzione CISE.

## Webinar CISE

<Video src="nrziX2lLI0s" title="Video YouTube" />

- [Introduzione smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) da 2min 20sec 

- [CISE](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) da 12min 50sec

- [Demo dal vivo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) da 24min 58sec 

- [Domande](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) da 40min 32sec 


## Informazioni generali sul CISE

CISE sta per Conteggio individuale delle spese dell'energia e dell'acqua. Offre una guida per un addebito equo di tutti i tipi di costi energetici e comprende:

- Calore

- Freddo

- Acqua calda sanitaria

- Acqua fredda 

- Elettricità (può essere gestita anche separatamente)


Il CISE è il successore del noto conteggio VHKA e supporta vettori energetici aggiuntivi e procedure semplificate.

Il CISE si occupa della ripartizione dei costi per sistemi di riscaldamento separati o combinati sulla base dei valori misurati dai contatori e ripartisce i costi nel modo più equo possibile.

A tale scopo, per calore, freddo e acqua calda sanitaria vengono applicate procedure speciali per compensare disparità dovute alla posizione dell'appartamento, perdite nelle condutture o altre differenze tra gli utenti.

Esistono le seguenti forme di ripartizione dei costi:

Centri di costo separati

- Ogni energia proviene da una fonte diversa


<div className="bild--voll">

![CISE - Conteggio – Figura 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

</div>

Calore e acqua calda sanitaria combinati

- Riscaldamento di qualsiasi tipo con accumulatore di acqua calda collegato


<div className="bild--voll">

![CISE - Conteggio – Figura 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

</div>

Calore + freddo e acqua calda sanitaria combinati

- Pompa di calore con freecooling


<div className="bild--voll">

![CISE - Conteggio – Figura 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

</div>

## Funzionalità

### Quali sistemi possono essere conteggiati con smart-me CISE?

- sistemi di riscaldamento e dell'acqua separati (calore, freddo, acqua calda sanitaria, acqua fredda)

- sistemi combinati di riscaldamento e acqua calda sanitaria (calore + acqua calda sanitaria, freddo, acqua fredda)

- sistemi combinati di riscaldamento, acqua calda sanitaria e raffreddamento (calore + freddo + acqua calda sanitaria, acqua fredda)


Il presupposto per un conteggio corretto di un tipo di energia è che nelle unità siano presenti contatori di consumo per ogni tipo di energia.

Nota: 

- I ripartitori dei costi di riscaldamento non sono supportati

- In caso di conteggio con contatori della produzione totale, i costi possono essere ripartiti percentualmente sulle unità abitative.


<div className="bild--voll">

![CISE - Conteggio – Figura 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

</div>

Locali comuni:

È possibile ripartire percentualmente gruppi di contatori in cartelle sulle unità di conteggio in un secondo momento (Billing).

Questo è supportato per entrambe le varianti di sistema sopra indicate.

### Quanti sistemi possono essere configurati in un account?

Per ogni immobile è possibile conteggiare un sistema CISE. In presenza di più sistemi di riscaldamento, nello stesso account vengono creati più immobili.

Questi possono poi essere conteggiati singolarmente con periodi di conteggio diversi.

### Modalità di lavoro generale con smart-me CISE

- Il CISE può essere applicato a qualsiasi immobile. Verifichi quindi che tutti i contatori di consumo dello stesso sistema di riscaldamento si trovino nello stesso immobile.
    Se un sistema di riscaldamento serve più edifici, questi devono essere riuniti in uno solo.

- Con l'applicazione del CISE, nell'elenco degli inquilini devono essere registrati correttamente tutti i contratti di locazione e anche gli sfitti. O in smart-me Billing o nel software immobiliare esterno in caso di utilizzo di file DTA-VKA.


## Configurare il CISE

### 1. Attivare il CISE e configurare le ripartizioni dei costi.


Selezionare il sistema termico:

- Calore, freddo e acqua calda sanitaria combinati

- Calore e acqua calda sanitaria combinati

- Sistemi separati


Se combinato o meno dipende dalla produzione di calore. Se ad esempio si utilizza una pompa di calore per il riscaldamento, il raffreddamento e la produzione di acqua calda sanitaria, è indicato il conteggio combinato, poiché per tutte e tre le energie la grandezza di dispendio è la stessa, ovvero l'elettricità.

Se invece il riscaldamento è garantito da un impianto a gasolio, ma l'acqua calda sanitaria è prodotta in modo puramente elettrico senza il supporto dell'impianto a gasolio, la scelta ricade sui conteggi non combinati.

Ripartizione dei costi

La ripartizione dei costi suddivide i costi totali in costi fissi (costi di base) e costi variabili (costi dipendenti dal consumo).

Costi di base

I costi di base tengono conto di eventuali perdite nelle condutture, perdite di circolazione, posizione privilegiata di un appartamento con più sole ecc. e ripartiscono una quota dei costi su tutti gli inquilini in base alla loro quota di superficie rispetto all'immobile complessivo.

Costi variabili

I costi variabili vengono applicati direttamente alle quantità di energia consumate registrate. Corrispondono al consumo individuale di ogni inquilino.

Produzione di acqua calda sanitaria

Affinché l'energia confluita nella produzione di acqua calda sanitaria possa essere stimata sulla base dei valori in m3, si applica la seguente formula standard:

Energia acqua calda sanitaria in kWh =
Totale valori di consumo acqua calda sanitaria \[m3\] \* 1.163 \* differenza di temperatura \[K\] \* 1,25

La differenza di temperatura può essere selezionata e si riferisce alla differenza tra la temperatura dell'acqua fredda all'ingresso nell'edificio (di solito +10°C) e la temperatura media del boiler a cui viene riscaldata (di solito +52°C).

Secondo questo esempio, la differenza è quindi: 

Differenza di temperatura = temperatura target - temperatura di ingresso = 52°C - 10°C = 42 K

![CISE - Conteggio – Figura 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valori di riferimento per la configurazione di costi di base e costi variabili:

Nuove costruzioni (tutto dal 2018): 

- Costi di base 30%, costi variabili 70%


Edifici vecchi risanati (isolamento migliorato secondo lo standard delle nuove costruzioni):

- Costi di base 40%, costi variabili 60%


Edifici vecchi non risanati (prima del 2018):

- Costi di base dal 40%\-50%, costi variabili dal 50-60%

- Inoltre, per ogni appartamento deve essere calcolata una compensazione della posizione. Si riduce il valore misurato del contatore dell'appartamento oppure si ponderano le percentuali di ripartizione del contatore totale. 
    (Dettagli nel capitolo 10 del documento CISE nella letteratura di approfondimento)


Qui è possibile influenzare i valori misurati dei contatori degli appartamenti per effettuare l'adeguamento della posizione: [Configurazione di contatori e cartelle](/konfiguration/ordnerkonfiguration)  

- Se un contatore deve ridurre il proprio valore misurato del 20%: 
    la correzione del valore (Wertkorrektur) viene impostata da 100% a 80%.


### 2\. Registrare un periodo di conteggio

I costi possono essere registrati come costi totali per ogni tipo di energia.
Nei sistemi combinati, i singoli costi dei diversi vettori energetici vengono sommati.

![CISE - Conteggio – Figura 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Creare i periodi di conteggio e definire il contenuto del periodo di fatturazione

<div className="row">
<div className="col col--4">

1.  Creare il periodo di conteggio

2.  Attivare o disattivare il contenuto

Se l'elettricità e le spese di riscaldamento e accessorie vengono conteggiate a intervalli diversi, si registrano più periodi.

ad es.:

- Periodo elettricità Q1 2024 (solo elettricità e altro)

- Periodo elettricità Q2 2024 (solo elettricità e altro)

- Periodo elettricità Q3 2024 (solo elettricità e altro)

- Periodo elettricità Q4 2024 (solo elettricità e altro)

- Periodo calore acqua 2024 (solo calore, freddo, acqua calda sanitaria e acqua fredda)

</div>
<div className="col col--8 bild--mitte">

![CISE - Conteggio – Figura 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Registrare i costi del periodo di conteggio

Nota per l'esportazione in software immobiliari con file DTA-VHKA:
Se desidera utilizzare il CISE, ma esportare i dati in un altro sistema in per mille o in valori di consumo, non è necessario registrare i costi. Il periodo di fatturazione deve tuttavia essere creato in anticipo.

I costi che possono essere registrati si suddividono a grandi linee nei seguenti costi:

Costi energetici

Costi per il vettore energetico acquistato, ad es.: 

- 1000 litri di gasolio per 2000 CHF

- 500kWh di elettricità per 200 CHF

- 10 m3 di acqua fredda per 50 CHF


Spese accessorie energetiche

Costi di esercizio e manutenzione

- Costi della revisione periodica dell'impianto di riscaldamento

- Costi per il servizio di lettura (ad es. ammortamento dei costi di licenza di smart-me per i dispositivi)

- Lavori amministrativi relativi all'impianto di riscaldamento

- Costi dello spazzacamino

- Smaltimento dei rifiuti, se il sistema di riscaldamento genera tali costi.


Cosa non rientra nelle spese accessorie energetiche

- Infrastruttura di misura (viene regolata tramite un aumento della pigione)


Nota sui costi dell'acqua calda sanitaria:

I costi per l'acqua calda sanitaria comprendono solo i costi per il riscaldamento dell'acqua calda sanitaria. La quantità di acqua fredda consumata per la produzione di acqua calda sanitaria viene ripresa automaticamente nella parte dell'acqua fredda. 

- Se un contatore totale dell'acqua fredda viene ripartito percentualmente su più appartamenti, l'intera quantità di acqua fredda viene calcolata da questo contatore comune.

- Se negli appartamenti si trovano contatori dell'acqua calda e fredda applicati con il 100% del consumo, la somma per l'acqua fredda è la somma di tutti i contatori dell'acqua calda e fredda.


Questi possono essere inseriti per ogni tipo di energia e vengono sommati.

![CISE - Conteggio – Figura 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Addebitare l'affitto dei contatori

A differenza del RCP (raggruppamento ai fini del consumo proprio), nel CISE i costi per l'ammortamento dei contatori di calore e dell'acqua possono essere addebitati ai consumatori.

Ciò deve tuttavia avvenire tramite l'aumento delle pigioni, non tramite le spese accessorie.

Possono essere ribaltati i costi dell'hardware e dell'installazione di un contatore.

Vale un periodo di ammortamento di 10 anni.

Le regole di ribaltamento sono descritte nell'art. 269d CO e negli art. 19 e 20 OLAL

Dettagli sul calcolo nel documento ufficiale CISE al punto 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Registrare una tariffa sempre valida per ogni vettore energetico

- Questa tariffa viene inserita senza prezzo (0) con una validità illimitata (2099).

- Ogni vettore energetico con una tariffa valida viene riportato sulla fattura.




![CISE - Conteggio – Figura 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Inserire le superfici degli appartamenti

Per il calcolo CISE e la ripartizione dei costi di base devono essere note le superfici degli appartamenti. Queste possono essere definite nella rispettiva unità di conteggio. Vengono poi sommate per ottenere la superficie totale rilevante.

Nota: per riportare correttamente la superficie totale rilevante, tutti i locali devono essere registrati come unità di conteggio, anche se non hanno contatori associati e vengono gestiti esternamente in modo forfettario.
Sono possibili solo numeri interi.

![CISE - Conteggio – Figura 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Contenuto e struttura della fattura

### Panoramica

La panoramica contiene tutti i costi a colpo d'occhio, comprese eventuali imposte applicate e differenze di arrotondamento.

![CISE - Conteggio – Figura 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Calore

La sezione calore mostra i costi totali per il centro di costo calore e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in kWh (qui 700 kWh)

- Superficie abitativa totale dell'immobile in m2 (qui 300 m2)


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori dei contatori misurati nell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione al 100%)

- Valore misurato dal contatore del rispettivo appartamento (qui 500kWh)






![CISE - Conteggio – Figura 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Acqua calda sanitaria

La sezione acqua calda sanitaria mostra i costi totali per il centro di costo acqua calda sanitaria e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 5 m2)

- Superficie abitativa totale dell'immobile in m2 (qui 300 m2) 


Questi costi comprendono esclusivamente i costi necessari per la produzione di acqua calda sanitaria, ma non l'acqua fredda impiegata a tale scopo.
Maggiori informazioni sui costi nella sezione panoramica dei centri di costo.

Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori dei contatori misurati nell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione al 100%)

- Valore misurato dal contatore del rispettivo appartamento in m3 (qui 3 m3)


![CISE - Conteggio – Figura 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Acqua fredda

La sezione acqua fredda mostra i costi totali per il centro di costo acqua fredda e le chiavi di ripartizione e grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 20%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 13 m2)

- Superficie abitativa totale dell'immobile in m2 (qui 300 m2) 


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori dei contatori misurati nell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di occupazione (qui 91 su 91, occupazione al 100%)

- Valore misurato dal contatore del rispettivo appartamento in m3 di acqua calda sanitaria
    (qui 3 m3)

- Valore misurato dal contatore del rispettivo appartamento in m3 di acqua fredda
    (qui 5 m3)


Nota:

A seconda del sistema, qui possono figurare solo contatori dell'acqua fredda oppure contatori misti dell'acqua fredda e calda; il rilevamento di questi sistemi è automatizzato.

- Se esiste un contatore principale per l'acqua fredda e nessuno negli appartamenti, oppure solo contatori dell'acqua calda negli appartamenti, qui figurerebbe solo un contatore dell'acqua fredda con quota percentuale.

- Se esistono contatori degli appartamenti per acqua calda e fredda, qui figurano sempre entrambi i contatori per appartamento; la somma dà il consumo idrico totale.


![CISE - Conteggio – Figura 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Panoramica dei centri di costo

Centri di costo separati

Ogni fattura dispone della panoramica dei centri di costo. Questa contiene tutte le voci di costo inserite per i singoli centri di costo.

- Per il calore sono elencati tutti i costi relativi al sistema di riscaldamento.

- Per l'acqua calda sanitaria figurano solo i costi relativi al riscaldamento dell'acqua calda sanitaria, ma non la quantità di acqua fredda utilizzata.

- Per l'acqua fredda vengono inseriti tutti i costi relativi all'acqua fredda e alle acque di scarico.


Centri di costo combinati

La panoramica dei centri di costo può cambiare visivamente quando i sistemi vengono combinati.

È comune ad es. la combinazione di calore e acqua calda sanitaria, poiché una parte dell'energia per la produzione di acqua calda sanitaria proviene dal sistema di riscaldamento. (Accumulatore di acqua calda accoppiato al riscaldamento)

In questo caso i costi vengono mostrati in forma combinata.

La particolarità è l'indicazione della formula di conversione utilizzata per suddividere l'energia totale in energia termica ed energia per la produzione di acqua calda sanitaria.

Panoramica dei costi dei centri di costo separati

![CISE - Conteggio – Figura 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Panoramica dei centri di costo combinati calore + acqua calda sanitaria
(formula di conversione sotto la panoramica dei costi)

![CISE - Conteggio – Figura 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Applicare il CISE con l'interfaccia del software immobiliare

[Scambio di dati con CISE e file DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestione degli errori CISE e Billing

[Anomalie relative al CISE](/stoerungsbehebung/billing-fehlermeldungen)

## Letteratura e documenti di approfondimento sul CISE (situazione giuridica attuale)

[Dettagli e guida sul modello di conteggio CISE](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vai all'interfaccia VHKA](/schnittstellen/dta-vhka-files)
