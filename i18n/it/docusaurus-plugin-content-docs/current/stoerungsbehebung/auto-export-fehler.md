---
title: 'Errori Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'In questa sezione vengono descritti i messaggi di errore noti relativi ad Auto Export e le possibili soluzioni.'
sidebar_label: 'Errori Auto Export'
---
In questa sezione vengono descritti i messaggi di errore noti relativi ad Auto Export e le possibili soluzioni.

## Generale

La configurazione di Auto Export è descritta qui: [Auto Export](/schnittstellen/auto-export) 

Se l'Auto Export è stato eseguito correttamente, in Configurazione (Konfiguration) --> Auto-Export --> Assegnazione (Zuordnung) è possibile verificare lo stato di ciascun punto di misura (sul lato destro).

Per aggiornare la visualizzazione dello stato dell'esportazione, occorre cliccare sul menu Auto Export sul lato sinistro.

Il nostro sistema verifica ogni 10 minuti se un job è in ritardo.

![Errori Auto Export – Figura 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Stato

Lo stato fornisce di volta in volta informazioni sullo stato dell'esportazione

- OK: ultima esportazione riuscita


![Errori Auto Export – Figura 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problema 1: la data è nel futuro

- La data è nel futuro


Soluzione:

- Attendere che la data impostata sia completamente trascorsa.


Problema 2: attesa

- Dalla creazione / dall'ultima modifica dell'assegnazione, il sistema non ha ancora eseguito alcuna esportazione riuscita.


Soluzione:

- Attendere 15 minuti. In seguito viene visualizzato OK oppure un messaggio di errore.


### Meter 'xxx' is missing data

Problema:

- Per questo giorno non sono disponibili dati.


Soluzione:

- Nel menu Interfacce (Schnittstellen) / Esportazione automatica (Automatische Export)

- Annotare la data dell'ultima esportazione.

- Nel menu Dashboard

- Selezionare la stazione

- Report

- Impostare Data da (Datum von) sull'"ultima esportazione" (Letzen Export) indicata nell'AutoExport

- Impostare Data a (Datum bis) sull'"ultima esportazione" (Letzen Export) indicata nell'AutoExport

- Annotare la data più vecchia in Elettricità Periodo (Elektrizität Zeitspanne).

- Nel menu Interfacce (Schnittstellen) / Esportazione automatica (Automatische Export)

- Selezionare la stazione 

- Modificare (Editieren)

- Impostare Ultima esportazione (Letzer Export) sulla "data più vecchia in Elettricità Periodo" +1. 

- È importante impostare la data + 1, poiché possiamo esportare solo giorni interi.

- Attendere fino a 45 minuti finché l'esportazione aggiorna lo stato.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problema 1: contatore offline

- Il punto di misura è offline e non fornisce più dati. 


Soluzione

- Il punto di misura deve essere riportato online.

- In seguito l'Auto Export viene riavviato automaticamente.


Problema 2: mancano i dati di un giorno intero

- Il punto di misura non dispone di tutti i dati per il periodo compreso tra l'ultima esportazione e quella successiva. Ad es. poiché il punto di misura è stato installato il 2.3.2024 alle 12h37, non è possibile eseguire un'esportazione per il 2.3.2024, dato che questo giorno è incompleto.


Soluzione

- (facoltativo) Lettura manuale nel sistema a valle, ad es. EDM, in modo che il giorno venga registrato in modo completo. (La lettura può essere effettuata ad es. con un report nella panoramica principale di smart-me).

- Modificare il punto di misura e impostare Ultima esportazione (Letzter Export) sulla data successiva.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problema:

- L'ID del punto di misura contiene a sinistra uno o più spazi


Soluzione:

- Eliminare gli spazi e salvare.


![Errori Auto Export – Figura 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problema 1: il key file non è registrato.

- Il key file non è corretto


Soluzione 1

- Assicurarsi che il key file sia configurato correttamente secondo [Auto Export](/schnittstellen/auto-export) --> Tipo di upload (Upload Art).

- Verificare che il key file generato inizi come segue:


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Errori Auto Export – Figura 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problema: smart-me non ha l'autorizzazione a scrivere nel percorso indicato.

Soluzione: concedere le autorizzazioni.

Problema 2: caso particolare con l'utilizzo di MOVEit (stato al 8.7.2024: #32171)

- Utilizzare il "key file" creato con i due comandi openssl. [Auto Export](/schnittstellen/auto-export) -->  Tipo di upload (Upload Art)

- Stabilire una prima connessione, che fallisce (restituisce un errore di certificato non valido).

- Nel mio software "MOVEit" ricevo un messaggio (in verde nell'immagine). Devo quindi riattivare l'utente (in blu) e accettare il certificato (in rosso).

- Rimuovere la "/" dal percorso, affinché i file possano essere salvati nella cartella "Export". (Errato: "/Export", corretto: "Export)


![Errori Auto Export – Figura 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Immagine da MOVEit

![Errori Auto Export – Figura 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Immagine dell'assegnazione Auto Export
