---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'smart-me offre la possibilità di esportare automaticamente i dati di misura in un altro sistema.'
sidebar_label: 'Auto Export'
---
smart-me offre la possibilità di esportare automaticamente i dati di misura in un altro sistema.

### Requisiti

Per poter utilizzare Auto Export è necessaria una licenza smart-me Professional.

![Auto Export – Figura 1](/img/schnittstellen-auto-export/01.png)

## Funzioni per i partner Gold

Se un conto è assegnato a un partner Gold, all'utente vengono mostrati, oltre ai propri "Tipi di upload" (Upload Arten) e "Formati di esportazione" (Export Formate), anche i "Tipi di upload" (Upload Arten) e i "Formati di esportazione" (Export Formate) già definiti dal partner Gold. In questo modo, per esempio, le impostazioni FTP devono essere effettuate solo nell'account del partner e non sono visibili né modificabili per l'utente normale. 

Per una migliore identificazione, le impostazioni ereditate hanno uno sfondo blu.

![Auto Export – Figura 2](/img/schnittstellen-auto-export/02.jpg)

## Mutazione di massa (avviare nuovamente l'esportazione)

Tramite una mutazione di massa è possibile riavviare in smart-me l'esportazione per più dispositivi contemporaneamente.

Come funziona l'inserimento della data:

Nella mutazione deve essere indicata la data dell'ultima esportazione riuscita. Da quel punto il sistema calcola automaticamente il periodo successivo.

Esempio (esportazione giornaliera):

- Inserisci la data 03.02.2026.

- Il sistema presuppone: l'esportazione del 03.02.2026 è andata a buon fine.

- Il sistema avvia ora l'esportazione per il 04.02.2026 (contenuto: dati del 03.02.2026 dalle 00:00 alle 23:59).


Attenzione alla durata dell'elaborazione: la rigenerazione dei file di esportazione richiede tempo. Come valore indicativo si considerano circa 45 minuti per ogni singolo file.

- Esportazione giornaliera: un mese intero (30 giorni = 30 file) richiede circa 22 ore.

- Esportazione settimanale: un mese intero (4 settimane = 4 file) richiede circa 3 ore.


![Auto Export – Figura 3](/img/schnittstellen-auto-export/03.png)

## Mutazione di massa (sostituire l'ID del punto di misura)

Tramite la mutazione di massa è possibile sostituire gli ID dei punti di misura esistenti con nuovi ID in modo rapido e senza errori.

Procedura:

- Crea un semplice file CSV.

- Ogni riga corrisponde a un punto di misura.

- Il file deve contenere il vecchio e il nuovo nome dell'ID del punto di misura, separati da un punto e virgola (;). Esempio: Alte\_ID\_123;Neue\_ID\_456

- Carica il file CSV. Gli ID vengono sovrascritti direttamente nel sistema.


Nota: se un punto di misura non è presente nel file CSV, non viene nemmeno modificato. In questo modo è possibile effettuare senza problemi anche solo una sostituzione parziale (per esempio solo 5 di 50 punti di misura in un conto).

![Auto Export – Figura 4](/img/schnittstellen-auto-export/04.png)

## Tipo di upload

Il tipo di upload definisce come i dati devono essere caricati sul sistema esterno. Attualmente sono supportati i seguenti tipi:

FTP: upload FTP (non crittografato)

FTPs: upload FTP crittografato

- La porta può essere indicata esplicitamente con un : . Per esempio ftp.smart-com:990


sFTP (with username and password): upload FTP crittografato.

- Nome utente e password


sFTP (con file di chiave): upload FTP crittografato. Al posto di una password viene utilizzato un file di chiave.

- Esempio per la creazione di un file di chiave sFTP con openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Esempio: [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)




![Auto Export – Figura 5](/img/schnittstellen-auto-export/05.jpg)

## Formato di esportazione

Il formato di esportazione definisce il formato di file per l'esportazione. Attualmente sono supportati i seguenti formati:

CSV: il formato è definito (CSV), il contenuto però non è normalizzato.

- Esportazione rudimentale nel formato CSV. L'esportazione dei valori del contatore viene definita tramite codici Obis. Per i dettagli vedi la sezione sottostante.


IS-E: esportazione in un sistema innosolv Energie di Innosolv AG

- Lettura del contatore

- Lettura del contatore virtuale (se calcolata in smart-me e se viene selezionata la cartella)


IS-E Vorschub / IS-E feed: esportazione in un sistema innosolv Energie di Innosolv AG

- Consumo

- Consumo virtuale (se calcolato in smart-me e se viene selezionata la cartella)


IS-E peak export

- Indica la potenza di punta.

- Nota: 1) nell'assegnazione selezionare la cartella con le tariffe virtuali e 2) nell'assegnazione dei valori di misura da esportare selezionare "Tariffe virtuali (solo IS-E)" (Virtuelle Tarife (nur IS-E)) 3) nel formato di esportazione indicare i rispettivi numeri di tariffa virtuali (Export Tariffs (peak)) presenti in smart-me Billing.


IS-E Zeitreihen / IS-E Load profile: esportazione in un sistema innosolv Energie di Innosolv AG sistema di Innosolv AG

- Modulo serie temporali (consumo 15 minuti)

    - Only basic data (1 / 0)

        - 1 solo kWh

        - 0 kWh e kvar

        - vuoto kWh e kvar


mscons 2.2e: mscons (Metered Services Consumption report message) nella versione 2.2e.

Nota: si prega di utilizzare questo formato con encontrol.

- Consumo


mscons 2.4a: mscons (Metered Services Consumption report message) nella versione 2.4a

- Consumo


![Auto Export – Figura 6](/img/schnittstellen-auto-export/06.jpg)

### Energia reattiva con is-e load profile

Impostare "Only basic data" su 0 per esportare l'energia reattiva

![Auto Export – Figura 7](/img/schnittstellen-auto-export/07.jpg)

## Assegnazione

L'esportazione automatica è composta da diverse configurazioni:

ID punto di misura: definisce l'ID che deve essere assegnato a questo punto di misura. Questo ID viene utilizzato per esempio nel formato di esportazione mscons.

Contatore o cartella: il contatore o la cartella da esportare.

Formato di esportazione: definisce il formato che può essere utilizzato per l'esportazione. Il formato di esportazione viene definito sotto la voce di menu "Formato di esportazione" (Export Format).

Tipo di upload: indica come i dati devono essere caricati nel sistema esterno. Il tipo di upload viene definito sotto la voce di menu "Tipo di upload" (Upload Art).

Intervallo di esportazione: indica con quale intervallo i dati devono essere esportati.

Attivatore dell'esportazione: definisce l'attivatore dell'esportazione.

- "Quando sono presenti tutti i DATI DI MISURA" (Wenn alle MESSDATEN vorhanden sind) attiva l'esportazione appena tutti i dati sono presenti. Se questi non sono mai completi (per esempio perché il valore iniziale era precedente all'installazione), non si attiverà mai.

-  "12h dopo la data di fine" (12h nach dem Enddatum) attiva l'esportazione 12 ore dopo, indipendentemente dal fatto che tutti i dati siano presenti o no.

- Nota: Auto Export si avvia tra le 0:00 e l'1:00 e può durare fino a 3 ore.


Data di inizio esportazione successiva: la data di inizio per la prossima esportazione dei dati. Se la data è nel passato, vengono esportati tutti i dati fino alla data attuale.

Valori di misura da esportare : se selezioni una cartella con tariffe virtuali, puoi scegliere se esportare i valori di misura normali o le tariffe virtuali.

![Auto Export – Figura 8](/img/schnittstellen-auto-export/08.png)

### Esportare le tariffe virtuali

Se hai configurato tariffe virtuali in smart-me Billing, puoi esportarle nell'IS-E. 

Configurazione

1.  Crea le tariffe virtuali in smart-me Billing.  Assicurati di impostare correttamente il numero di tariffa della tariffa virtuale. Questo viene codificato nell'esportazione come "tariffa" nel codice Obis. Esempio: il numero di tariffa 3 produce Obis: (letture del contatore IS-E) 1-5:1.8.3 (1-5:1.8.&lt;numero di tariffa>), (IS-E Vorschub) 1-5:1.9.3 (1-5:1.9.&lt;numero di tariffa>)

2.  In "Auto Export" seleziona sotto "Assegnazione" (Zuordnung) la cartella con le tariffe virtuali e seleziona sotto "Valori di misura da esportare" (Zu exportierende Messwerte) l'opzione "Tariffe virtuali" (Virtuelle Tarife). 


![Auto Export – Figura 9](/img/schnittstellen-auto-export/09.png)

## Test Files

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing): il file CSV può essere configurato individualmente. Il file di test è stato generato con la configurazione  «1-0:1.8.0\*255;1-0:1.8.1\*255;1-0:1.8.2\*255;1-0:2.8.0\*255;1-0:2.8.1\*255;1-0:2.8.2\*255;».

- [IS-E Peak export](https://drive.google.com/file/d/1isUBF_2xUpr6h8AeRtkupJvFkuMMSJM4/view?usp=sharing) 


Codici Obis

I codici OBIS vengono utilizzati per descrivere un valore (del contatore). 

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Consiglio per la decodifica: su questo [sito web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) puoi consultare la logica della codifica. Cliccando su un mezzo di misura vedi a che cosa corrispondono le singole cifre del codice. 

![Auto Export – Figura 10](/img/schnittstellen-auto-export/10.png)

Il file di test csv è stato esportato con la configurazione sopra indicata.

## Codici Obis supportati

I codici OBIS vengono utilizzati per descrivere un valore (del contatore): [Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Consiglio per la decodifica: su questo [sito web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) puoi consultare la logica della codifica. Cliccando su un mezzo di misura vedi a che cosa corrispondono le singole cifre del codice. 

### Codice Obis IS-E

1-1:1.8.0: Active Energy Total Import

1-1:1.8.1:  Active Energy Tariff 1 Import

1-1:1.8.2:  Active Energy Tariff 2 Import

1-1:2.8.0:  Active Energy Total Export

1-1:2.8.1:  Active Energy Tariff 1 Export

1-1:2.8.2:  Active Energy Tariff 2 Export

1-1:5.8.0:  Reactive Energy Q1

1-1:6.8.0:  Reactive Energy Q2

1-1:7.8.0:  Reactive Energy Q3

1-1:8.8.0:  Reactive Energy Q4

5-1:1.0.0: Cold (Energie)

6-1:1.0.0: Heat (Energie)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)

### Codice Obis mscons

1-1:1.29.0\*255: Active Energy Total Import (load profile)

1-1:2.29.0\*255:  Active Energy Total Export (load profile)

1-1:5.29.0\*255:  Reactive Energy Q1 (load profile)

1-1:6.29.0\*255:  Reactive Energy Q2 (load profile)

1-1:7.29.0\*255:  Reactive Energy Q3 (load profile)

1-1:8.29.0\*255:  Reactive Energy Q4 (load profile)

5-1:1.29.0\*255: Cold (load profile)

6-1:1.29.0\*255: Heat (load profile)

8-1:1.29.0\*255: Cold water (load profile)

9-1:1.29.0\*255: Hot water (load profile)

### Codice Obis CSV

1-0:1.8.0\*255: Active Energy Total Import

1-0:1.8.1\*255: Active Energy Tariff 1 Import

1-0:1.8.2\*255: Active Energy Tariff 2 Import

1-0:2.8.0\*255: Active Energy Total Export

1-0:2.8.1\*255: Active Energy Tariff 1 Export

1-0:2.8.2\*255: Active Energy Tariff 2 Export

1-1:5.8.0\*255: Reactive Energy Q1

1-1:6.8.0\*255: Reactive Energy Q2

1-1:7.8.0\*255: Reactive Energy Q3

1-1:8.8.0\*255: Reactive Energy Q4

6-0:1.0.0\*255: Heat Energy

5-0:1.0.0\*255: Cold Energy

8-0:1.0.0\*255: Cold Water Volume

9-0:1.0.0\*255: Hot Water Volume
