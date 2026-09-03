---
title: 'Errori Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'In questa sezione vengono descritti i messaggi di errore noti relativi all''Auto Export e i possibili approcci per risolverli.'
sidebar_label: 'Errori Auto Export'
---
In questa sezione vengono descritti i messaggi di errore noti relativi all'Auto Export e i possibili approcci per risolverli.

## In generale

Qui viene descritta la configurazione dell'Auto Export: [Auto Export](/schnittstellen/auto-export) 

Se l'Auto Export è andato a buon fine, in Configurazione (Konfiguration) --> Auto-Export --> Assegnazione (Zuordnung) è possibile verificare lo stato di ogni punto di misura (sul lato destro).

Per aggiornare la visualizzazione dello stato di esportazione, occorre fare clic sul menu Auto Export sul lato sinistro.

Il nostro sistema verifica ogni 10 minuti se un job è in ritardo.

![Errori Auto Export – Figura 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Stato

Lo stato fornisce di volta in volta informazioni sullo stato dell'esportazione

- OK: ultima esportazione riuscita


![Errori Auto Export – Figura 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problema 1: la data si trova nel futuro

- La data si trova nel futuro


Soluzione:

- Attendere che la data impostata sia completamente trascorsa.


Problema 2: attesa

- Dalla creazione / dall'ultima modifica dell'assegnazione il sistema non ha ancora eseguito alcuna esportazione riuscita.


Soluzione:

- Attendere 15 minuti. Successivamente viene visualizzato OK oppure un messaggio di errore.


### Meter 'xxx' is missing data

Problema:

- Per questo giorno non esistono dati.


Soluzione:

- Nel menu Interfacce / Esportazione automatica (Schnittstellen / Automatische Export)

- Annotare la data dell'ultima esportazione.

- Nel menu Dashboard

- Selezionare la stazione

- Report

- Impostare la data da su "ultima esportazione" (Letzter Export) dell'AutoExport

- Impostare la data a su "ultima esportazione" (Letzter Export) dell'AutoExport

- Annotare la data più vecchia nell'intervallo di tempo Elettricità (Elektrizität Zeitspanne).

- Nel menu Interfacce / Esportazione automatica (Schnittstellen / Automatische Export)

- Selezionare la stazione 

- Modificare

- Impostare Ultima esportazione (Letzter Export) su "data più vecchia nell'intervallo di tempo Elettricità" +1. 

- È importante impostare la data + 1, poiché possiamo esportare solo giornate complete.

- Attendere fino a 45 minuti, finché l'esportazione non aggiorna lo stato.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problema 1: contatore offline

- Il punto di misura è offline e non fornisce più dati. 


Soluzione

- Il punto di misura deve essere riportato online.

- Successivamente l'Auto Export viene riavviato automaticamente.


Problema 2: mancano i dati di un giorno intero

- Il punto di misura non dispone di tutti i dati per il periodo compreso tra l'ultima esportazione e la successiva. Ad esempio, se il punto di misura è stato installato il 2.3.2024 alle ore 12h37, non è possibile eseguire alcuna esportazione per il 2.3.2024, poiché è incompleta.


Soluzione

- (opzionale) Lettura manuale nel sistema a valle, ad es. EDM, affinché la giornata venga rilevata completamente. (La lettura può essere effettuata ad es. con un report nella panoramica principale di smart-me).

- Modificare il punto di misura e impostare Ultima esportazione (Letzter Export) sulla data successiva.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problema:

- L'ID del punto di misura presenta uno o più spazi a sinistra


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

Problema: smart-me non ha l'autorizzazione per scrivere nel path indicato.

Soluzione: concedere le autorizzazioni.

Problema 2: caso particolare in caso di utilizzo di MOVEit (stato 8.7.2024: #32171)

- Utilizzate il "key file" creato con i due comandi openssl. [Auto Export](/schnittstellen/auto-export) -->  Tipo di upload (Upload Art)

- Stabilire una prima connessione, che non riesce (restituzione di un errore di certificato non valido).

- Nel mio software "MOVEit" ricevo un messaggio (in verde nell'immagine). Devo quindi riattivare l'utente (in blu) e accettare il certificato (in rosso).

- Rimuovere il "/" dal percorso, affinché i file possano essere depositati nella cartella "Export". (Errato: "/Export", corretto: "Export)


![Errori Auto Export – Figura 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Immagine da MOVEit

![Errori Auto Export – Figura 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Immagine dell'assegnazione Auto Export
