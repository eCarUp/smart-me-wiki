---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel è possibile importare direttamente i dati dal nostro cloud. Questo apre ad esempio la possibilità di riunire, leggere ed elaborare in un unico database i dati provenienti da diversi account.
In Excel a questo scopo si utilizza l'editor Power Query. Con esso è possibile effettuare richieste HTTP tramite la nostra API. I comandi API disponibili e l'ambiente di test si trovano [qui](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put).

## Download del file di esempio

Il file sul lato destro contiene una richiesta variabile delle letture di un contatore. Questo file può essere integrato con altri contatori.

Tutte le funzioni necessarie sono disponibili in Excel 0365 o a partire da Excel 2016.

Per poter utilizzare il file di esempio, scaricalo e ..

1.  Scaricare il file

2.  Aggiornare i dati di accesso della richiesta secondo le informazioni contenute nella tabella "Dashboard".


<Video src="" title="Video" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creare la connessione

### Creare una richiesta di dati dal Web

Avvia Excel e nella scheda Dati (Daten) fai clic su Recupera dati (Daten abrufen), Da altre origini (Aus anderen Quellen), Dal Web (Aus dem Web).

![Microsoft Excel – Figura 1](/img/drittsysteme-microsoft-excel/01.png)

### Inserire il comando API

Inserisci il link del comando API che desideri interrogare. Nell'esempio si tratta del comando https://www.smart-me.com/api/Devices/&#123;id&#125; . Vogliamo quindi leggere tutti i dati attuali del dispositivo con il rispettivo ID.

Maggiori informazioni sul comando stesso si trovano nel tool di test al [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) indicato sopra. Lì puoi anche ricavare l'ID del dispositivo desiderato.

![Microsoft Excel – Figura 2](/img/drittsysteme-microsoft-excel/02.png)

### Autenticazione per il link (password e nome utente)

Ora ti verrà richiesto di indicare l'autenticazione del rispettivo link. Sono necessari il nome utente e la password del relativo account.

1.  Seleziona il link corrispondente

2.  Fai clic su Modifica autorizzazioni (Berechtigungen bearbeiten)

3.  Sotto Credenziali (Anmeldeinformationen) fai clic su Modifica (Bearbeiten)

4.  Inserisci il nome utente e la password dell'account nella scheda "Standard"


![Microsoft Excel – Figura 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figura 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figura 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertire i dati in una tabella nell'editor Power Query

Dopo l'importazione, nell'editor Power Query viene creato un elenco dei dati importati. Questi dati devono ora essere convertiti in una tabella.



![Microsoft Excel – Figura 6](/img/drittsysteme-microsoft-excel/06.png)

### Chiudi e carica

Dopo Chiudi e carica (Schliessen und Laden) viene creato un nuovo foglio di lavoro con le informazioni dell'origine dati.

![Microsoft Excel – Figura 7](/img/drittsysteme-microsoft-excel/07.png)

### Impostazioni della richiesta di connessione (intervallo e aggiornamento)

Sul lato destro si apre una finestra che, con un clic destro sulla connessione esistente, consente ulteriori impostazioni. Qui si possono definire soprattutto gli intervalli di aggiornamento della rispettiva connessione.
Nella scheda Dati (Daten) gli aggiornamenti possono avvenire anche su comando dell'utente.

![Microsoft Excel – Figura 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figura 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figura 10](/img/drittsysteme-microsoft-excel/10.png)

## Richiesta di dati con variabili (interrogare le letture del contatore con data variabile)

L'interrogazione di dati passati segue lo stesso principio della costruzione del link per i dati attuali. La differenza principale è che i dati devono essere richiesti con un'informazione modificabile (variabile).
Affinché ciò sia possibile, devono essere effettuate due richieste:

1.  Richiesta all'interno della tabella Excel sulla variabile "Data".

2.  Richiesta dal Web con un comando API adatto. Qui è adatto il comando [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (dati giornalieri del contatore dal passato)


### Creare la variabile data

Scegli in Excel un punto in cui inserire la data. A questo scopo crea una tabella con Inserisci (Einfügen) \--> Tabella (Tabelle). (Importante)

![Microsoft Excel – Figura 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figura 12](/img/drittsysteme-microsoft-excel/12.png)

Seleziona un'area di 4 campi, in modo che trovino posto sia il nome della colonna sia il testo con il relativo valore.

![Microsoft Excel – Figura 13](/img/drittsysteme-microsoft-excel/13.png)

### Definire il nome della tabella per la programmazione successiva

Affinché Power Query sappia in seguito in quale tabella si trova la variabile, questa viene richiamata con il nome. Perché sia univoco, assegniamo un nome fisso (qui Datumsauswahl).

![Microsoft Excel – Figura 14](/img/drittsysteme-microsoft-excel/14.png)

### Formattare il campo della variabile (campo di testo)

Affinché la data possa essere utilizzata anche in seguito, il contenuto deve essere formattato come testo. A questo scopo seleziona la tabella e scegli in alto il formato Testo (Text).

![Microsoft Excel – Figura 15](/img/drittsysteme-microsoft-excel/15.png)

### Interrogare la variabile in Power Query

Ora possiamo aggiungere la richiesta in Power Query per la nostra variabile:

1.  Apri Power Query


![Microsoft Excel – Figura 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Crea una nuova richiesta in Power Query (clic destro sotto Query)
3\. Crea una query vuota con il nome "Datumsauswahl"



![Microsoft Excel – Figura 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copia il testo seguente nel blocco funzione della query: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" è qui il nome della tabella in cui si trova il valore della variabile.

![Microsoft Excel – Figura 18](/img/drittsysteme-microsoft-excel/18.png)

### Collegare la variabile e il valore Excel

Esegui un drill-down per selezionare il campo che contiene il parametro modificabile:
Seleziona il campo con il valore della data --> clic destro --> Drill-down.

Successivamente il contenuto della cella resta da solo e da ora in poi risponde al nome "Datumsauswahl".

![Microsoft Excel – Figura 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figura 20](/img/drittsysteme-microsoft-excel/20.png)

### Creare la richiesta per i dati passati

Crea una nuova richiesta con un clic destro sull'area delle query a sinistra. Scegli quindi una richiesta dal Web.

![Microsoft Excel – Figura 21](/img/drittsysteme-microsoft-excel/21.png)

La nuova richiesta contiene ora il comando per i dati passati e si presenta come segue:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Essa contiene il percorso della richiesta HTTP e alla fine una data di destinazione. Questa data di destinazione verrà in seguito passata come variabile.

Per la creazione si può indicare un elemento codificato fisso. Assicurati che a quella data esistano già dati nel cloud.

La data ha il seguente formato: mese.giorno.anno ovvero mm.dd.yyyy

![Microsoft Excel – Figura 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figura 23](/img/drittsysteme-microsoft-excel/23.png)

### Integrare la variabile nella richiesta

Affinché ora la data fissa venga sostituita dalla nostra variabile, il comando della funzione deve essere leggermente adattato.

Cambia da

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

a

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figura 24](/img/drittsysteme-microsoft-excel/24.png)

### Adattare il contenuto della tabella alle esigenze

Ora, all'interno del set di dati, il contenuto visualizzato può essere ristrutturato e adattato alle rispettive esigenze.

Nel nostro esempio desideriamo che tutti i dati siano corredati di DeviceId, data, codice Obis e valore.



1.  Convertire il contenuto in una tabella


![Microsoft Excel – Figura 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Invertire righe e colonne

![Microsoft Excel – Figura 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figura 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Utilizzare la prima riga come intestazioni

![Microsoft Excel – Figura 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modificare la colonna Values ed espandere su nuove righe

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
