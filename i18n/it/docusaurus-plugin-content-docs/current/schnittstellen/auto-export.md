---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'smart-me offre la possibilità di esportare automaticamente i dati di misura in un altro sistema.'
sidebar_label: 'Auto Export'
---
<Menueweg>Interfacce → Esportazione automatica</Menueweg>

smart-me offre la possibilità di esportare automaticamente i dati di misura in un altro sistema.

### Requisiti

Per poter utilizzare Auto Export è necessaria una licenza smart-me Professional.

![Auto Export – Figura 1](/img/schnittstellen-auto-export/01.png)

## Funzioni per i Gold Partner

Se un account è assegnato a un Gold Partner, all'utente vengono mostrati, oltre ai propri "Tipi di upload" ("Upload Arten") e "Formati di esportazione" ("Export Formate"), anche i "Tipi di upload" ("Upload Arten") e i "Formati di esportazione" ("Export Formate") già definiti dal Gold Partner. In questo modo, ad esempio, le impostazioni FTP devono essere effettuate solo nell'account del partner e non sono visibili né modificabili per l'utente normale. 

Per una migliore identificazione, le impostazioni ereditate sono evidenziate in blu.

![Auto Export – Figura 2](/img/schnittstellen-auto-export/02.jpg)

## Mutazione di massa (riavviare l'esportazione)

Tramite una mutazione di massa è possibile riavviare le esportazioni in smart-me per più dispositivi contemporaneamente.

Ecco come funziona l'inserimento della data:

Nella mutazione occorre inserire la data dell'ultima esportazione riuscita. A partire da questa data il sistema calcola automaticamente il periodo successivo.

Esempio (esportazione giornaliera):

- Inserisce la data 03.02.2026.

- Il sistema presuppone che l'esportazione del 03.02.2026 sia andata a buon fine.

- Il sistema avvia ora l'esportazione per il 04.02.2026 (contenuto: dati del 03.02.2026 dalle 00:00 alle 23:59).

Tenere conto della durata dell'elaborazione: la rigenerazione dei file di esportazione richiede tempo. Come valore indicativo si calcolano circa 45 minuti per singolo file.

- Esportazione giornaliera: un mese intero (30 giorni = 30 file) richiede circa 22 ore.

- Esportazione settimanale: un mese intero (4 settimane = 4 file) richiede circa 3 ore.

![Auto Export – Figura 3](/img/schnittstellen-auto-export/03.png)

## Mutazione di massa (sostituire l'ID del punto di misura)

Tramite la mutazione di massa è possibile sostituire in modo rapido e senza errori gli ID dei punti di misura esistenti con nuovi ID.

Procedura:

- Crei un semplice file CSV.

- Ogni riga corrisponde a un punto di misura.

- Il file deve contenere il vecchio e il nuovo nome dell'ID del punto di misura, separati da un punto e virgola (;). Esempio: Alte\_ID\_123;Neue\_ID\_456

- Carichi il file CSV. Gli ID vengono sovrascritti direttamente nel sistema.


Nota: se un punto di misura non figura nel file CSV, non viene modificato. In questo modo è possibile effettuare senza problemi anche una sostituzione parziale (ad es. solo 5 di 50 punti di misura in un account).

![Auto Export – Figura 4](/img/schnittstellen-auto-export/04.png)

## Tipo di upload

<div className="row">
<div className="col col--5">

Il tipo di upload definisce in che modo i dati devono essere caricati sul sistema esterno. Attualmente sono supportati i seguenti tipi:

FTP: upload FTP (non cifrato)

FTPs: upload FTP cifrato

- La porta può essere indicata esplicitamente con un :, ad es. ftp.smart-com:990

sFTP (with username and password): upload FTP cifrato.

- Nome utente e password

sFTP (mit Key File): upload FTP cifrato. Al posto di una password viene utilizzato un file di chiave.

- Esempio di creazione di un sFTP Key File con openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Esempio: [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)

Nota: la password non deve contenere i seguenti caratteri (&lt;, >, =)

</div>
<div className="col col--7 text--center">

![Auto Export – Figura 5](/img/schnittstellen-auto-export/05.jpg)

</div>
</div>

## Formato di esportazione

Il formato di esportazione definisce il formato del file per l'esportazione. Attualmente sono supportati i seguenti formati:

CSV: il formato è definito (CSV), ma il contenuto non è standardizzato.

- Esportazione rudimentale nel formato CSV. L'esportazione dei valori del contatore viene definita tramite codici OBIS. Per i dettagli si veda la sezione sottostante.

IS-E: esportazione in un sistema innosolv-Energie di Innosolv AG

- Lettura del contatore

- Lettura del contatore virtuale (se calcolata in smart-me e se viene selezionata la cartella)

IS-E Vorschub / IS-E feed: esportazione in un sistema innosolv-Energie di Innosolv AG

- Consumo

- Consumo virtuale (se calcolato in smart-me e se viene selezionata la cartella)

IS-E peak export

- Indica la potenza di punta.

- Nota: 1) Nell'assegnazione selezionare la cartella con le tariffe virtuali e 2) nell'assegnazione, alla voce "Valori di misura da esportare" ("Zu exportierende Messwerte"), selezionare "Tariffe virtuali (solo IS-E)" ("Virtuelle Tarife (nur IS-E)") 3) Nel formato di esportazione indicare di volta in volta i numeri delle tariffe virtuali (Export Tariffs (peak)) presenti nello smart-me Billing.

IS-E Zeitreihen / IS-E Load profile: esportazione in un sistema innosolv-Energie di Innosolv AG System der Innosolv AG

- Modulo serie temporali (consumo 15 minuti)

    - Only basic data (1 / 0)

        - 1 solo kWh

        - 0 kWh e kvar

        - vuoto kWh e kvar

mscons 2.2e: mscons (Metered Services Consumption report message) nella versione 2.2e.

Nota: utilizzare questo formato per encontrol.

- Consumo

mscons 2.4a: mscons (Metered Services Consumption report message) nella versione 2.4a

- Consumo

![Auto Export – Figura 6](/img/schnittstellen-auto-export/06.jpg)

### Energia reattiva con is-e load profile

<div className="row">
<div className="col col--4">

Impostare "Only basic data" su 0 per esportare l'energia reattiva

</div>
<div className="col col--8 text--center">

![Auto Export – Figura 7](/img/schnittstellen-auto-export/07.jpg)

</div>
</div>

## Assegnazione

L'esportazione automatica è composta da diverse configurazioni:

ID del punto di misura (Messpunkt ID): definisce l'ID da assegnare a questo punto di misura. Questo ID viene utilizzato ad es. nel formato di esportazione mscons.

Contatore o cartella (Zähler oder Ordner): il contatore o la cartella da esportare.

Formato di esportazione (Export Format): definisce il formato che può essere utilizzato per l'esportazione. Il formato di esportazione viene definito alla voce di menu "Formato di esportazione" ("Export Format").

Tipo di upload (Upload Art): indica in che modo i dati devono essere caricati nel sistema esterno. Il tipo di upload viene definito alla voce di menu "Tipo di upload" ("Upload Art").

Intervallo di esportazione (Export Intervall): indica con quale intervallo devono essere esportati i dati.

Trigger di esportazione (Export Auslöser): definisce l'evento che avvia l'esportazione.

- "Quando sono disponibili tutti i DATI DI MISURA" ("Wenn alle MESSDATEN vorhanden sind") avvia l'esportazione non appena tutti i dati sono disponibili. Se questi non sono mai completi (ad es. perché il valore iniziale era anteriore all'installazione), l'esportazione non verrà mai avviata.

-  "12h dopo la data di fine" ("12h nach dem Enddatum") avvia l'esportazione 12 ore dopo, indipendentemente dal fatto che tutti i dati siano disponibili o meno.

- Nota: Auto-Export si avvia tra le 0:00 e l'1:00 e può durare fino a 3h.


Data di inizio prossima esportazione (Start Datum nächster Export): la data di inizio per la prossima esportazione dei dati. Se la data è nel passato, vengono esportati tutti i dati fino alla data attuale.

Valori di misura da esportare (Zu exportierende Messwerte) : se seleziona una cartella con tariffe virtuali, può scegliere se esportare i valori di misura normali o le tariffe virtuali.

![Auto Export – Figura 8](/img/schnittstellen-auto-export/08.png)

### Esportare le tariffe virtuali

Se ha configurato delle tariffe virtuali nello smart-me Billing, può esportarle nell'IS-E. 

Configurazione

1.  Crei le tariffe virtuali nello smart-me Billing.  Si assicuri di impostare correttamente il numero della tariffa virtuale. Durante l'esportazione questo viene codificato come "tariffa" nel codice OBIS. Esempio: il numero di tariffa 3 dà come risultato OBIS: (letture del contatore IS-E) 1-5:1.8.3 (1-5:1.8.&lt;numero di tariffa>), (IS-E Vorschub) 1-5:1.9.3 (1-5:1.9.&lt;numero di tariffa>)

2.  In "Auto Export", alla voce "Assegnazione" ("Zuordnung"), selezioni la cartella con le tariffe virtuali e alla voce "Valori di misura da esportare" ("Zu exportierende Messwerte") selezioni "Tariffe virtuali" ("Virtuelle Tarife"). 


![Auto Export – Figura 9](/img/schnittstellen-auto-export/09.png)

## File di test

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing): il file CSV può essere configurato individualmente. Il file di test è stato generato con la configurazione  «1-0:1.8.0\*255;1-0:1.8.1\*255;1-0:1.8.2\*255;1-0:2.8.0\*255;1-0:2.8.1\*255;1-0:2.8.2\*255;».

- [IS-E Peak export](https://drive.google.com/file/d/1isUBF_2xUpr6h8AeRtkupJvFkuMMSJM4/view?usp=sharing) 


Codici OBIS

I codici OBIS vengono utilizzati per descrivere un valore (del contatore). 

[Codici OBIS (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Suggerimento per la decodifica: su questo [sito web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) può consultare la logica della codifica. Facendo clic su un mezzo vede che cosa rappresentano le singole cifre del codice. 

![Auto Export – Figura 10](/img/schnittstellen-auto-export/10.png)

Il file di test csv è stato esportato con la configurazione sopra riportata.

## Codici OBIS supportati

I codici OBIS vengono utilizzati per descrivere un valore (del contatore): [Codici OBIS (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Suggerimento per la decodifica: su questo [sito web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) può consultare la logica della codifica. Facendo clic su un mezzo vede che cosa rappresentano le singole cifre del codice. 

### Codici OBIS IS-E

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

5-1:1.0.0: Cold (energia)

6-1:1.0.0: Heat (energia)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)

### Codici OBIS mscons

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

### Codici OBIS CSV

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
