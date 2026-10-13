---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud. Questo consente, ad esempio, di riunire in una banca dati, leggere ed elaborare i dati di diversi account.
In Excel si utilizza a questo scopo l'editor di Power Query. Con questo editor è possibile effettuare richieste HTTP tramite la nostra API. I comandi API disponibili e l'ambiente di test si trovano [qui](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Download del file di esempio

Il file  a destra contiene un'interrogazione variabile delle letture del contatore di un contatore. Questo file può essere integrato con altri contatori.

Tutte le funzioni necessarie sono disponibili in Excel 0365 o a partire da Excel 2016.

Per poter utilizzare il file di esempio, scaricalo e .. 

1.  Scarica il file

2.  Aggiorna i dati di login dell'interrogazione secondo le informazioni nella tabella "Dashboard".


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" height="520px" title="Drive, file API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creare la connessione

### Creare un'interrogazione dati dal Web

Avvia Excel e nella scheda Dati fai clic su Recupera dati, Da altre fonti, Dal Web. 

![Microsoft Excel – Figura 1](/img/drittsysteme-microsoft-excel/01.png)

### Inserire il comando API

Inserisci il link del comando API che desideri interrogare.  Nell'esempio si tratta del comando https://www.smart-me.com/api/Devices/&#123;id&#125; . Vogliamo quindi leggere tutti i dati attuali del dispositivo con l'ID corrispondente.

Maggiori informazioni sul comando stesso si trovano nello strumento di test al [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) riportato sopra. Lì puoi anche trovare l'ID del dispositivo desiderato.

![Microsoft Excel – Figura 2](/img/drittsysteme-microsoft-excel/02.png)

### Autenticazione per il link (password e nome utente)

Ora ti viene chiesto di indicare l'autenticazione per il link in questione. Sono necessari il nome utente e la password dell'account corrispondente.

1.  Seleziona il link corrispondente

2.  Fai clic su Modifica autorizzazioni

3.  Sotto Credenziali fai clic su Modifica

4.  Inserisci il nome utente e la password dell'account nella scheda "Di base"


![Microsoft Excel – Figura 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figura 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figura 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertire i dati in una tabella nell'editor di Power Query

Al termine dell'importazione, nell'editor di Power Query viene creato un elenco dei dati importati. Questi dati devono ora essere convertiti in una tabella.



![Microsoft Excel – Figura 6](/img/drittsysteme-microsoft-excel/06.png)

### Chiudi e carica

Dopo Chiudi e carica viene creato un nuovo foglio di lavoro con le informazioni della fonte dati.

![Microsoft Excel – Figura 7](/img/drittsysteme-microsoft-excel/07.png)

### Impostazioni dell'interrogazione di connessione (intervallo e aggiornamento)

Sul lato destro si apre una finestra che, facendo clic con il tasto destro sulla connessione esistente, consente ulteriori impostazioni. Qui è possibile soprattutto definire gli intervalli di aggiornamento della connessione.
Nella scheda Dati è inoltre possibile eseguire aggiornamenti su comando dell'utente.

![Microsoft Excel – Figura 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figura 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figura 10](/img/drittsysteme-microsoft-excel/10.png)

## Interrogazione dati con variabili (interrogare le letture del contatore con data variabile)

L'interrogazione dei dati storici segue lo stesso principio della struttura del link per i dati attuali. La differenza principale è che i dati devono essere interrogati con un'informazione modificabile (variabile).
Per renderlo possibile, occorre creare due interrogazioni:

1.  Interrogazione all'interno della tabella Excel sulla variabile "Data".

2.  Interrogazione dal Web con un comando API adatto. In questo caso il comando adatto è [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (dati giornalieri del contatore del passato)


### Creare la variabile Data

In Excel seleziona una posizione in cui inserire la data.  Crea a tale scopo una tabella tramite Inserisci \--> Tabella. (Importante)

![Microsoft Excel – Figura 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figura 12](/img/drittsysteme-microsoft-excel/12.png)

Seleziona un intervallo di 4 celle, in modo che ci sia spazio per un nome di colonna e per il testo incluso il valore.

![Microsoft Excel – Figura 13](/img/drittsysteme-microsoft-excel/13.png)

### Definire il nome della tabella per la programmazione successiva

Affinché in seguito Power Query sappia in quale tabella si trova la variabile, questa viene richiamata tramite il nome. Per renderlo univoco, assegniamo un nome fisso (qui Datumsauswahl).

![Microsoft Excel – Figura 14](/img/drittsysteme-microsoft-excel/14.png)

### Formattare il campo della variabile (campo di testo)

Affinché la data possa essere utilizzata in seguito, il contenuto deve essere formattato come testo. Seleziona la tabella e scegli in alto il formato Testo.

![Microsoft Excel – Figura 15](/img/drittsysteme-microsoft-excel/15.png)

### Interrogare la variabile in Power Query

Ora possiamo aggiungere in Power Query l'interrogazione per la nostra variabile:

1.  Apri Power Query


![Microsoft Excel – Figura 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Crea una nuova interrogazione in Power Query (clic con il tasto destro sotto Query)
3\. Crea una query vuota con il nome "Datumsauswahl"



![Microsoft Excel – Figura 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copia il seguente testo nel blocco funzione dell'interrogazione: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" è qui il nome della tabella in cui si trova il valore della variabile.

![Microsoft Excel – Figura 18](/img/drittsysteme-microsoft-excel/18.png)

### Collegare la variabile e il valore di Excel

Esegui un drill-down per selezionare il campo che contiene il parametro modificabile:
Seleziona il campo con il valore della data --> clic con il tasto destro --> Drill-down.

In seguito il contenuto della cella è isolato e d'ora in poi risponde al nome "Datumsauswahl".

![Microsoft Excel – Figura 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figura 20](/img/drittsysteme-microsoft-excel/20.png)

### Creare l'interrogazione per i dati storici

Crea una nuova interrogazione facendo clic con il tasto destro nell'area Query a sinistra. Seleziona poi un'interrogazione dal Web.

![Microsoft Excel – Figura 21](/img/drittsysteme-microsoft-excel/21.png)

La nuova interrogazione contiene ora il comando per i dati passati e si presenta così:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Contiene il percorso della richiesta HTTP e alla fine una data di destinazione. Questa data di destinazione verrà in seguito passata come variabile. 

Per la creazione è possibile indicare un elemento codificato in modo fisso. Assicurati che per questa data esistano già dati nel cloud.

La data ha il seguente formato: mese.giorno.anno ovvero mm.dd.yyyy

![Microsoft Excel – Figura 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figura 23](/img/drittsysteme-microsoft-excel/23.png)

### Inserire la variabile nell'interrogazione

Affinché la data fissa venga sostituita dalla nostra variabile, il comando della funzione deve essere leggermente modificato.

Cambia da

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

a

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figura 24](/img/drittsysteme-microsoft-excel/24.png)

### Adattare il contenuto della tabella alle esigenze

Ora, all'interno del set di dati, il contenuto visualizzato può essere ristrutturato e adattato alle esigenze specifiche.

Nel nostro esempio vorremmo che tutti i dati riportassero DeviceId, data, codice Obis e valore.



1.  Converti il contenuto in una tabella


![Microsoft Excel – Figura 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Trasponi righe e colonne

![Microsoft Excel – Figura 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figura 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Usa la prima riga come intestazioni

![Microsoft Excel – Figura 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modifica la colonna Values ed espandi a nuove righe

![Microsoft Excel – Figura 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Figura 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Seleziona i contenuti di riga aggiuntivi --> OK.

![Microsoft Excel – Figura 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Figura 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Premi Chiudi e carica

![Microsoft Excel – Figura 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpretare e assegnare i codici Obis

I codici Obis sono standardizzati. Per poterli assegnare, è possibile confrontare l'elenco Excel dei codici Obis con CERCA.VERT.
In questo modo ottieni il nome del codice Obis e l'unità dei valori.

[Codici Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
