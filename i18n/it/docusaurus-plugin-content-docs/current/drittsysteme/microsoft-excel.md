---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud. Questo consente ad esempio di riunire in un database, leggere ed elaborare i dati di diversi account.
In Excel si utilizza a questo scopo l'editor di Power Query. Con questo strumento è possibile effettuare richieste HTTP tramite la nostra API. I possibili comandi API e l'ambiente di test sono disponibili [qui](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Download del file di esempio

Il file  sulla destra contiene una query variabile delle letture del contatore di un contatore. Questo file può essere ampliato con ulteriori contatori.

Tutte le funzioni necessarie sono disponibili in Excel 0365 o a partire da Excel 2016.

Per poter utilizzare il file di esempio, scaricalo e .. 

1.  Scarica il file

2.  Aggiorna i dati di login della query secondo le informazioni nella tabella "Dashboard".


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" height="520px" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creare la connessione

### Creare una query di dati dal Web

Avvia Excel e, nella scheda Dati, clicca su Recupera dati, Da altre origini, Dal Web. 

![Microsoft Excel – Figura 1](/img/drittsysteme-microsoft-excel/01.png)

### Inserire il comando API

Inserisci il link del comando API che desideri interrogare.  Nell'esempio si tratta del comando https://www.smart-me.com/api/Devices/&#123;id&#125; . Vogliamo quindi leggere tutti i dati attuali del dispositivo con l'ID corrispondente.

Maggiori informazioni sul comando stesso sono disponibili nello strumento di test al [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) riportato sopra. Lì puoi anche individuare l'ID del dispositivo desiderato.

![Microsoft Excel – Figura 2](/img/drittsysteme-microsoft-excel/02.png)

### Autenticazione per il link (password e nome utente)

Ora ti viene chiesto di indicare l'autenticazione per il rispettivo link. Sono necessari il nome utente e la password dell'account corrispondente.

1.  Seleziona il link corrispondente

2.  Clicca su Modifica autorizzazioni

3.  Sotto Credenziali, clicca su Modifica

4.  Inserisci il nome utente e la password dell'account nella scheda "Standard"


![Microsoft Excel – Figura 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figura 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figura 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertire i dati in una tabella nell'editor di Power Query

Dopo l'importazione, nell'editor di Power Query viene creato un elenco dei dati importati. Questi dati devono ora essere convertiti in una tabella.



![Microsoft Excel – Figura 6](/img/drittsysteme-microsoft-excel/06.png)

### Chiudi e carica

Dopo Chiudi e carica viene creato un nuovo foglio di lavoro con le informazioni dell'origine dati.

![Microsoft Excel – Figura 7](/img/drittsysteme-microsoft-excel/07.png)

### Impostazioni della query di connessione (intervallo e aggiornamento)

Sul lato destro si apre una finestra che, con un clic destro sulla connessione esistente, consente ulteriori impostazioni. Qui si possono soprattutto definire gli intervalli di aggiornamento della rispettiva connessione.
Nella scheda Dati è inoltre possibile eseguire aggiornamenti su comando dell'utente.

![Microsoft Excel – Figura 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figura 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figura 10](/img/drittsysteme-microsoft-excel/10.png)

## Query di dati con variabili (interrogare le letture del contatore con data variabile)

La query dei dati storici segue lo stesso principio della composizione del link per i dati attuali. La differenza principale è che i dati devono essere interrogati con un'informazione modificabile (variabile).
Per renderlo possibile, occorre creare due query:

1.  Query all'interno della tabella Excel sulla variabile "Data".

2.  Query dal Web con un comando API adatto. Qui il comando adatto è [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (dati giornalieri del contatore dal passato)


### Creare la variabile data

In Excel, scegli una posizione in cui inserire la data.  Crea a questo scopo una tabella tramite Inserisci \--> Tabella. (Importante)

![Microsoft Excel – Figura 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figura 12](/img/drittsysteme-microsoft-excel/12.png)

Seleziona un intervallo di 4 celle, in modo che vi trovino posto un nome di colonna e il testo incluso il valore.

![Microsoft Excel – Figura 13](/img/drittsysteme-microsoft-excel/13.png)

### Definire il nome della tabella per la programmazione successiva

Affinché Power Query sappia in seguito in quale tabella si trova la variabile, questa viene richiamata tramite il nome. Per renderlo univoco, assegniamo un nome fisso (qui Datumsauswahl).

![Microsoft Excel – Figura 14](/img/drittsysteme-microsoft-excel/14.png)

### Formattare il campo della variabile (campo di testo)

<div className="row">
<div className="col col--6">

Affinché la data possa essere utilizzata in seguito, il contenuto deve essere formattato come testo. A tale scopo seleziona la tabella e scegli in alto il formato Testo.

</div>
<div className="col col--6 bild--mitte">

![Microsoft Excel – Figura 15](/img/drittsysteme-microsoft-excel/15.png)

</div>
</div>

### Interrogare la variabile in Power Query

Ora possiamo aggiungere in Power Query la query per la nostra variabile:

1.  Apri Power Query


![Microsoft Excel – Figura 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Crea una nuova query in Power Query (clic destro sotto Query)
3\. Crea una query vuota con il nome "Datumsauswahl"



![Microsoft Excel – Figura 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copia il seguente testo nel blocco funzione della query: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" è qui il nome della tabella in cui si trova il valore della variabile.

![Microsoft Excel – Figura 18](/img/drittsysteme-microsoft-excel/18.png)

### Collegare la variabile al valore Excel

Esegui un drill-down per selezionare il campo che contiene il parametro modificabile:
Seleziona il campo con il valore della data --> clic destro --> Drill-down.

In seguito il contenuto della cella è isolato e da ora in poi risponde al nome "Datumsauswahl".

![Microsoft Excel – Figura 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figura 20](/img/drittsysteme-microsoft-excel/20.png)

### Creare la query per i dati storici

Crea una nuova query con un clic destro nell'area delle query a sinistra. Scegli poi una query dal Web.

![Microsoft Excel – Figura 21](/img/drittsysteme-microsoft-excel/21.png)

La nuova query contiene ora il comando per i dati passati e si presenta così:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Contiene il percorso della richiesta HTTP e, alla fine, una data di riferimento. Più avanti passeremo questa data di riferimento in modo variabile. 

Per la creazione si può indicare un elemento con valore fisso. Assicurati che per questa data esistano già dati nel cloud.

La data ha il seguente formato: mese.giorno.anno ovvero mm.dd.yyyy

![Microsoft Excel – Figura 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figura 23](/img/drittsysteme-microsoft-excel/23.png)

### Inserire la variabile nella query

Affinché la data fissa venga sostituita dalla nostra variabile, il comando della funzione deve essere leggermente modificato.

Cambia da

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

a

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figura 24](/img/drittsysteme-microsoft-excel/24.png)

### Adattare il contenuto della tabella alle esigenze

Ora, all'interno del set di dati, il contenuto visualizzato può essere ristrutturato e adattato alle rispettive esigenze.

Nel nostro esempio vorremmo che tutti i dati riportassero DeviceId, data, codice OBIS e valore.



1.  Convertire il contenuto in una tabella


![Microsoft Excel – Figura 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Trasporre righe e colonne

![Microsoft Excel – Figura 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figura 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Usare la prima riga come intestazioni

![Microsoft Excel – Figura 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modificare la colonna Values ed Espandi in nuove righe

![Microsoft Excel – Figura 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Figura 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Selezionare i contenuti di riga aggiuntivi --> OK.

![Microsoft Excel – Figura 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Figura 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Premere Chiudi e carica

![Microsoft Excel – Figura 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpretare e assegnare i codici OBIS

I codici OBIS sono standardizzati. Per poterli assegnare, l'elenco Excel con i codici OBIS può essere confrontato con CERCA.VERT.
In questo modo ottieni il nome del codice OBIS e l'unità dei valori.

[Codici OBIS (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
