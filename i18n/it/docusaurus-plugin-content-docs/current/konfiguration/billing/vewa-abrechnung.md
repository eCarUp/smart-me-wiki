---
title: 'VEWA - Conteggio'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduzione a smart-me da 2min 20sec'
sidebar_label: 'VEWA - Conteggio'
---
![VEWA - Conteggio – Figura 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinar VEWA

<Video src="nrziX2lLI0s" title="Video YouTube" />

- [Introduzione a smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) da 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) da 12min 50sec

- [Demo dal vivo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) da 24min 58sec 

- [Domande](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) da 40min 32sec 


## Informazioni generali su VEWA

VEWA sta per conteggio dei costi di energia e acqua in funzione del consumo. Offre una linea guida per il conteggio equo di tutti i tipi di costi energetici e comprende:

- Calore

- Freddo

- Acqua calda sanitaria

- Acqua fredda 

- Elettricità (può essere gestita anche separatamente)


VEWA è il successore del noto conteggio VHKA e supporta vettori energetici ampliati e procedure semplificate.

VEWA si occupa della ripartizione dei costi per sistemi di riscaldamento separati o combinati sulla base dei valori di misura dei contatori e ripartisce i costi nel modo più equo possibile.

A tale scopo, per calore, freddo e acqua calda sanitaria vengono applicate procedure speciali per compensare le disuguaglianze legate alla posizione dell'appartamento, le perdite nelle tubazioni o altre differenze fra i consumatori.

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

- sistemi di riscaldamento e acqua separati (calore, freddo, acqua calda sanitaria, acqua fredda)

- sistemi combinati di riscaldamento e acqua calda sanitaria (calore + acqua calda sanitaria, freddo, acqua fredda)

- sistemi combinati di riscaldamento, acqua calda sanitaria e raffrescamento (calore + freddo + acqua calda sanitaria, acqua fredda)


Presupposto per il conteggio corretto di un tipo di energia è che per ogni tipo di energia siano presenti contatori di consumo nelle unità.

Nota: 

- I ripartitori dei costi di riscaldamento non sono supportati

- In caso di conteggio con contatori di produzione totale, i costi possono essere ripartiti percentualmente sulle unità abitative.


![VEWA - Conteggio – Figura 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locali comuni:

È possibile ripartire percentualmente in un secondo momento (Billing) raccolte di contatori contenute in cartelle sulle unità di conteggio.

Questo è supportato per entrambe le varianti di sistema sopra indicate.

### Quanti sistemi possono essere configurati in un account?

Può essere conteggiato un sistema VEWA per immobile. In caso di più sistemi di riscaldamento vengono creati più immobili nello stesso account.

Questi possono poi essere conteggiati individualmente con periodi di conteggio diversi.

### Modalità di lavoro generale con smart-me VEWA

- VEWA può essere applicato a ogni immobile. Assicurati quindi che tutti i contatori di consumo dello stesso sistema di riscaldamento si trovino nello stesso immobile.
    Se più edifici condividono lo stesso sistema di riscaldamento, gli edifici devono essere riuniti in uno solo.

- Quando si utilizza VEWA, nell'elenco degli inquilini devono essere registrati correttamente tutti i contratti di locazione e anche gli sfitti. Questo vale sia in smart-me Billing sia nel software immobiliare esterno se si utilizzano file DTA-VKA.


## Configurare VEWA

1.  ### Attivare VEWA e configurare le ripartizioni dei costi.


Selezionare il sistema di riscaldamento:

- Calore, freddo e acqua calda sanitaria combinati

- Calore, acqua calda sanitaria combinati

- Sistemi separati


Se combinato o no dipende dalla produzione di calore. Se per esempio si utilizza una pompa di calore per il riscaldamento, il raffrescamento e la produzione di acqua calda sanitaria, conviene il conteggio combinato, poiché per tutte e tre le energie la grandezza di riferimento è la stessa, ovvero l'elettricità.

Se invece il riscaldamento è garantito da una caldaia a olio, mentre l'acqua calda sanitaria viene prodotta esclusivamente in modo elettrico senza il supporto della caldaia a olio, la scelta ricade sui conteggi non combinati.

Ripartizione dei costi

La ripartizione dei costi suddivide i costi complessivi in costi fissi (costi di base) e costi variabili (costi in funzione del consumo).

Costi di base

I costi di base tengono conto di eventuali perdite nelle tubazioni, perdite di circolazione, posizione favorevole di un appartamento con più irraggiamento solare ecc. e ripartiscono una quota dei costi su tutti gli inquilini e sulla loro quota di superficie rispetto all'intero immobile.

Costi variabili

I costi variabili vengono applicati direttamente alle quantità di energia consumate rilevate. Corrispondono al consumo individuale di ogni inquilino.

Produzione di acqua calda sanitaria

Affinché l'energia impiegata per la produzione di acqua calda sanitaria possa essere stimata sulla base dei valori in m3, viene applicata la seguente formula standard:

Energia per acqua calda sanitaria in kWh =
Totale valori di consumo acqua calda sanitaria \[m3\] \* 1.163 \* differenza di temperatura \[K\] \* 1,25

La differenza di temperatura può essere scelta e si riferisce alla differenza di temperatura dell'acqua fredda all'ingresso nell'edificio (di norma +10°C) fino al riscaldamento alla temperatura media del boiler (di norma +52°C).

Secondo questo esempio la differenza è quindi: 

Differenza di temperatura = temperatura obiettivo - temperatura d'ingresso = 52°C - 10°C = 42 K

![VEWA - Conteggio – Figura 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valori indicativi per la configurazione dei costi di base e dei costi variabili:

Nuove costruzioni (tutto a partire dal 2018): 

- Costi di base 30%, costi variabili 70%


Edifici vecchi risanati (isolamento portato allo standard delle nuove costruzioni):

- Costi di base 40%, costi variabili 60%


Edifici vecchi non risanati (prima del 2018):

- Costi di base dal 40%\-50%, costi variabili dal 50-60%

- Inoltre, per ogni appartamento deve essere calcolata una compensazione della posizione. Viene ridotto il valore di misura del contatore dell'appartamento oppure vengono ponderate le percentuali di ripartizione del contatore totale. 
    (Dettagli nel capitolo 10 del documento VEWA nella letteratura approfondita)


Qui è possibile influire sui valori di misura dei contatori degli appartamenti per effettuare l'adeguamento della posizione: [Configurazione contatori/cartelle](/konfiguration/ordnerkonfiguration)  

- Se un contatore deve ridurre il proprio valore di misura del 20%: 
    la correzione del valore viene impostata dal 100% all'80%.


### 2\. Registrare un periodo di conteggio

I costi possono essere registrati per tipo di energia come costi complessivi.
Nei sistemi combinati i singoli costi dei diversi vettori energetici vengono sommati.

![VEWA - Conteggio – Figura 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Creare i periodi di conteggio e definire il contenuto del periodo di fatturazione

1.  Creazione del periodo di conteggio

2.  Attivare o disattivare il contenuto


Se l'elettricità e i costi di riscaldamento e le spese accessorie vengono conteggiati a intervalli diversi, vengono registrati più periodi.

per esempio:

- Periodo elettricità Q1 2024 (solo elettricità e altro)

- Periodo elettricità Q2 2024 (solo elettricità e altro)

- Periodo elettricità Q3 2024 (solo elettricità e altro)

- Periodo elettricità Q4 2024 (solo elettricità e altro)

- Periodo calore acqua 2024 (solo calore, freddo, acqua calda sanitaria e fredda)


![VEWA - Conteggio – Figura 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Registrare i costi del periodo di conteggio

Nota per l'esportazione verso software immobiliari con file DTA-VHKA:
Se volete utilizzare VEWA, ma esportare i dati in un altro sistema in per mille o in valori di consumo, non è necessario registrare alcun costo. Il periodo di fatturazione deve però essere creato in anticipo.

I costi che possono essere registrati si suddividono in linea di massima nei seguenti costi:

Costi energetici

Costi per il vettore energetico acquistato, per esempio: 

- 1000 litri di olio per 2000 CHF

- 500kWh di elettricità per 200 CHF

- 10 m3 di acqua fredda per 50 CHF


Spese accessorie dell'energia

Costi per l'esercizio e la manutenzione

- Costi della revisione periodica dell'impianto di riscaldamento

- Costi per il servizio di lettura (per esempio ammortamento dei costi di licenza smart-me per gli apparecchi)

- Lavori amministrativi in relazione all'impianto di riscaldamento

- Costi dello spazzacamino

- Smaltimento dei rifiuti, se il sistema di riscaldamento genera tali costi.


Cosa non fa parte delle spese accessorie dell'energia

- Infrastruttura di misura (viene regolata tramite un aumento del canone di locazione)


Nota sui costi dell'acqua calda sanitaria:

I costi per l'acqua calda sanitaria comprendono solo i costi per il riscaldamento dell'acqua calda sanitaria. La quantità di acqua fredda impiegata per la produzione di acqua calda sanitaria viene ripresa automaticamente nella parte relativa all'acqua fredda. 

- Se un contatore complessivo dell'acqua fredda viene ripartito percentualmente su più appartamenti, l'intera quantità di acqua fredda viene calcolata a partire da questo contatore comune.

- Se i contatori dell'acqua fredda e calda si trovano negli appartamenti e vengono applicati con il 100% del consumo, la somma per l'acqua fredda è la somma di tutti i contatori dell'acqua calda e fredda.


Questi possono essere inseriti per tipo di energia e vengono sommati.

![VEWA - Conteggio – Figura 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Conteggiare i noleggi dei contatori

Diversamente che nel RCP (raggruppamento ai fini del consumo proprio), nel VEWA i costi per l'ammortamento dei contatori di calore e acqua possono essere addebitati ai consumatori.

Questo deve però avvenire tramite l'aumento dei canoni di locazione, non tramite le spese accessorie.

Possono essere trasferiti i costi dell'hardware e dell'installazione di un contatore.

Vale un periodo di ammortamento di 10 anni.

Le regole di trasferimento sono descritte nell'art. 269d CO e negli art. 19 e 20 OLAL

Dettagli sul calcolo nel documento VEWA ufficiale al punto 2.2 REGOLE FORMALI DI TRASFERIMENTO 

### 6\. Registrare una tariffa sempre valida per ogni vettore energetico

- Questa tariffa viene inserita senza prezzo (0) con una validità illimitata (2099).

- Ogni vettore energetico con tariffa valida viene rappresentato sul conteggio.




![VEWA - Conteggio – Figura 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Inserire le superfici degli appartamenti

Per il calcolo VEWA e la ripartizione dei costi di base è necessario conoscere le superfici degli appartamenti. Queste possono essere definite nella rispettiva unità di conteggio. Vengono poi sommate nella superficie complessiva rilevante.

Nota: per riportare correttamente la superficie complessiva rilevante, tutti i locali devono essere registrati come unità di conteggio, anche se a essi non è associato alcun contatore e vengono gestiti esternamente in modo forfettario.
Sono possibili solo numeri interi.



![VEWA - Conteggio – Figura 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Passo successivo

## Contenuto e struttura del conteggio

### Panoramica

La panoramica contiene tutti i costi a colpo d'occhio, incluse le eventuali imposte applicate e le differenze di arrotondamento.

![VEWA - Conteggio – Figura 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Calore

La sezione Calore mostra i costi complessivi per il centro di costo Calore e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in kWh (qui 700 kWh)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2)


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 di 91, occupazione 100%)

- Valore di misura del contatore del rispettivo appartamento (qui 500kWh)






![VEWA - Conteggio – Figura 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Acqua calda sanitaria

La sezione Acqua calda sanitaria mostra i costi complessivi per il centro di costo Acqua calda sanitaria e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 30%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 5 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Questi costi comprendono esclusivamente i costi necessari alla produzione di acqua calda sanitaria, non però l'acqua fredda impiegata a tale scopo.
Maggiori informazioni sui costi nella sezione Panoramica dei centri di costo.

Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 di 91, occupazione 100%)

- Valore di misura del contatore del rispettivo appartamento in m3 (qui 3 m3)


![VEWA - Conteggio – Figura 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Acqua fredda

La sezione Acqua fredda mostra i costi complessivi per il centro di costo Acqua fredda e le chiavi di ripartizione e le grandezze di riferimento applicate.

- Quota dei costi di base in % (qui 20%)

- Quota dei costi di consumo in % (qui 70%)

- Consumo totale dell'immobile in m3 (qui 13 m2)

- Superficie abitativa totale in m2 dell'immobile (qui 300 m2) 


Le tariffe calcolate vengono poi applicate al rispettivo appartamento (blocco blu) sulla base dei valori misurati dai contatori dell'appartamento.

- Superficie abitativa dell'appartamento in m2 (qui 100 m2)

- Giorni di utilizzo (qui 91 di 91, occupazione 100%)

- Valore di misura del contatore del rispettivo appartamento in m3 acqua calda sanitaria
    (qui 3 m3)

- Valore di misura del contatore del rispettivo appartamento in m3 acqua fredda
    (qui 5 m3)


Nota:

A seconda del sistema, qui possono comparire solo contatori dell'acqua fredda oppure contatori misti di acqua fredda e calda; il rilevamento di questi sistemi è automatizzato.

- Se esiste un contatore principale per l'acqua fredda e nessuno negli appartamenti, oppure solo contatori dell'acqua calda sanitaria negli appartamenti, qui comparirebbe solo un contatore dell'acqua fredda con quota percentuale.

- Se negli appartamenti sono presenti contatori per l'acqua calda e fredda, qui compaiono sempre entrambi i contatori per appartamento; la somma dà il consumo idrico totale.


![VEWA - Conteggio – Figura 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Panoramica dei centri di costo

Centri di costo separati

Ogni conteggio dispone della panoramica dei centri di costo. Questa contiene tutte le voci di costo registrate per i singoli centri di costo.

- Per il calore sono elencati tutti i costi relativi al sistema di riscaldamento.

- Per l'acqua calda sanitaria sono indicati solo i costi relativi al riscaldamento dell'acqua calda sanitaria, non però quelli della quantità di acqua fredda impiegata.

- Per l'acqua fredda vengono registrati tutti i costi relativi all'acqua fredda e alle acque di scarico.


Centri di costo combinati

La panoramica dei centri di costo può cambiare visivamente quando i sistemi vengono combinati.

Usuale è per esempio la combinazione di calore e acqua calda sanitaria, poiché una parte dell'energia per la produzione di acqua calda sanitaria proviene dal sistema di riscaldamento. (Accumulatore di acqua calda sanitaria accoppiato al riscaldamento)

In questo caso i costi vengono mostrati in modo combinato.

Particolarità è l'indicazione della formula di conversione utilizzata per suddividere l'energia complessiva in energia termica ed energia per la produzione di acqua calda sanitaria.

Panoramica dei costi con centri di costo separati

![VEWA - Conteggio – Figura 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Panoramica dei centri di costo combinati calore + acqua calda sanitaria
(formula di conversione sotto la panoramica dei costi)

![VEWA - Conteggio – Figura 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Applicare VEWA con l'interfaccia verso il software immobiliare

[Scambio di dati con VEWA e file DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestione degli errori VEWA e Billing

[Guasti in relazione a VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Letteratura e documenti di approfondimento su VEWA (situazione giuridica attuale)

[Dettagli e linea guida del modello di conteggio VEWA](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continua all'interfaccia VHKA](/schnittstellen/dta-vhka-files)
