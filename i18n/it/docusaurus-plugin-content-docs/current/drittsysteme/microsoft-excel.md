---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud. Questo apre per esempio la possibilità di riunire, leggere ed elaborare in un unico database i dati provenienti da diversi account.
In Excel a questo scopo si utilizza l'editor Power Query. Con esso è possibile effettuare richieste HTTP tramite la nostra API. I comandi API disponibili e l'ambiente di test si trovano [qui](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put).

## Scaricare il file di esempio

Il file sul lato destro contiene una richiesta variabile delle letture del contatore di un meter. Questo file può essere integrato con ulteriori contatori.

Tutte le funzioni necessarie sono disponibili in Excel 0365 oppure a partire da Excel 2016.

Per poter utilizzare il file di esempio, scaricalo e ..

1.  Scaricare il file

2.  Aggiornare i dati di accesso della richiesta secondo le informazioni contenute nella tabella "Dashboard".


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" aspect="1.330" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creare la connessione

### Creare una richiesta di dati dal web

Avvia Excel e nella scheda Dati (Daten) clicca su Recupera dati (Daten abrufen), Da altre origini (Aus anderen Quellen), Dal Web (Aus dem Web).

![Microsoft Excel – Figura 1](/img/drittsysteme-microsoft-excel/01.png)

### Inserire il comando API

Inserisci il link del comando dell'API che vuoi interrogare. Nell'esempio si tratta del comando https://www.smart-me.com/api/Devices/&#123;id&#125; . Vogliamo quindi leggere tutti i dati attuali dell'apparecchio con il rispettivo ID.

Maggiori informazioni sul comando stesso si trovano nello strumento di test al [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) indicato sopra. Lì puoi anche ricavare l'ID dell'apparecchio desiderato.

![Microsoft Excel – Figura 2](/img/drittsysteme-microsoft-excel/02.png)

### Autenticazione per il link (password e nome utente)

Ora ti verrà richiesto di indicare l'autenticazione del rispettivo link. Sono necessari il nome utente e la password dell'account corrispondente.

1.  Seleziona il link corrispondente

2.  Clicca su Modifica autorizzazioni (Berechtigungen bearbeiten)

3.  In Credenziali (Anmeldeinformationen) clicca su Modifica (Bearbeiten)

4.  Inserisci il nome utente e la password dell'account nella scheda "Standard"


![Microsoft Excel – Figura 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figura 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figura 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertire i dati in una tabella nell'editor di Power Query

Dopo l'importazione nell'editor di Power Query si crea un elenco dei dati importati. Questi dati devono ora essere convertiti in una tabella.



![Microsoft Excel – Figura 6](/img/drittsysteme-microsoft-excel/06.png)

### Chiudi e carica

Dopo Chiudi e carica (Schliessen und Laden) si crea un nuovo foglio di lavoro con le informazioni dell'origine dati.

![Microsoft Excel – Figura 7](/img/drittsysteme-microsoft-excel/07.png)

### Impostazioni della richiesta di connessione (intervallo e aggiornamento)

Sul lato destro si apre una finestra che, con un clic destro sulla connessione esistente, consente ulteriori impostazioni. Qui si possono definire soprattutto gli intervalli di aggiornamento della rispettiva connessione.
Nella scheda Dati (Daten) gli aggiornamenti possono avvenire anche su comando dell'utente.

![Microsoft Excel – Figura 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figura 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figura 10](/img/drittsysteme-microsoft-excel/10.png)

## Richiesta di dati con variabili (interrogare le letture del contatore con data variabile)

La richiesta di dati storici segue lo stesso principio della composizione del link per i dati attuali. La differenza principale è che i dati devono essere interrogati con un'informazione modificabile (variabile).
Perché questo sia possibile, devono essere effettuate due richieste:

1.  Richiesta all'interno della tabella Excel sulla variabile "Datum".

2.  Richiesta dal web con un comando API adeguato. In questo caso è adatto il comando [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (dati giornalieri del contatore dal passato)


### Creare la variabile data

Scegli in Excel un punto in cui inserire la data. Crea a questo scopo una tabella in Inserisci (Einfügen) \--> Tabella (Tabelle). (Importante)

![Microsoft Excel – Figura 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figura 12](/img/drittsysteme-microsoft-excel/12.png)

Seleziona un'area di 4 campi, in modo che ci sia spazio per un nome di colonna e per il testo con il relativo valore.

![Microsoft Excel – Figura 13](/img/drittsysteme-microsoft-excel/13.png)

### Definire il nome della tabella per la programmazione successiva

Perché Power Query sappia più tardi in quale tabella si trova la variabile, questa viene richiamata con il nome. Perché sia univoco, assegniamo un nome fisso (qui Datumsauswahl).

![Microsoft Excel – Figura 14](/img/drittsysteme-microsoft-excel/14.png)

### Formattare il campo della variabile (campo di testo)

Perché la data possa essere utilizzata anche in seguito, il contenuto deve essere formattato come testo. A questo scopo seleziona la tabella e scegli in alto il formato Testo (Text).

![Microsoft Excel – Figura 15](/img/drittsysteme-microsoft-excel/15.png)

### Interrogare la variabile in Power Query

Ora possiamo aggiungere in Power Query la richiesta per la nostra variabile:

1.  Apri Power Query


![Microsoft Excel – Figura 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Crea una nuova richiesta in Power Query (clic destro sotto Query/Abfragen)
3\. Crea una query vuota con il nome "Datumsauswahl"



![Microsoft Excel – Figura 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copia il seguente testo nel blocco funzione della query: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" è qui il nome della tabella in cui si trova il valore della variabile.

![Microsoft Excel – Figura 18](/img/drittsysteme-microsoft-excel/18.png)

### Collegare la variabile e il valore Excel

Esegui un drilldown per selezionare il campo in cui si trova il parametro modificabile:
selezionare il campo con il valore della data --> clic destro --> Drilldown.

Successivamente il contenuto della cella è disponibile da solo e da questo momento risponde al nome "Datumsauswahl".

![Microsoft Excel – Figura 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figura 20](/img/drittsysteme-microsoft-excel/20.png)

### Creare la richiesta per i dati storici

Crea una nuova query con un clic destro sull'area delle query a sinistra. Scegli poi una query dal web.

![Microsoft Excel – Figura 21](/img/drittsysteme-microsoft-excel/21.png)

La nuova query contiene ora il comando per i dati passati e si presenta come segue:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Contiene il percorso della richiesta HTTP e alla fine una data di destinazione. Questa data di destinazione la passeremo più tardi in modo variabile.

Per la creazione si può indicare un elemento codificato in modo fisso. Assicurati che per questa data esistano già dati nel cloud.

La data ha il seguente formato: mese.giorno.anno ovvero mm.dd.yyyy

![Microsoft Excel – Figura 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figura 23](/img/drittsysteme-microsoft-excel/23.png)

### Integrare la variabile nella query

Perché ora la data fissa venga sostituita dalla nostra variabile, il comando della funzione deve essere leggermente adattato.

Cambia da

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

a

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figura 24](/img/drittsysteme-microsoft-excel/24.png)

### Adattare il contenuto della tabella alle proprie esigenze

Ora all'interno del set di dati il contenuto visualizzato può essere ristrutturato e adattato alle rispettive esigenze.

Nel nostro esempio vogliamo avere tutti i dati con DeviceId, data, codice Obis e valore.



1.  Convertire il contenuto in una tabella


![Microsoft Excel – Figura 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Invertire righe e colonne

![Microsoft Excel – Figura 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figura 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Utilizzare la prima riga come intestazioni

![Microsoft Excel – Figura 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modificare la colonna Values ed espandere in nuove righe

![Microsoft Excel – Figura 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Figura 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Selezionare i contenuti di riga aggiuntivi --> OK.

![Microsoft Excel – Figura 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Figura 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Premere Chiudi e carica (Schliessen und Laden)

![Microsoft Excel – Figura 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpretare e assegnare i codici Obis

I codici Obis sono standardizzati. Per poterli assegnare, l'elenco Excel con i codici Obis può essere confrontato con CERCA.VERT.
In questo modo ottieni il nome del codice Obis e l'unità dei valori.

[Codici Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
