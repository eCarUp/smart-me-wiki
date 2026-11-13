---
title: 'Errori Auto Export'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'In questa sezione sono descritti i messaggi di errore noti relativi ad Auto Export e le possibili soluzioni.'
sidebar_label: 'Errori Auto Export'
---
In questa sezione sono descritti i messaggi di errore noti relativi ad Auto Export e le possibili soluzioni.

## In generale

Qui è descritta la configurazione di Auto Export: [Auto Export](/schnittstellen/auto-export) 

Se Auto Export è andato a buon fine, in Configurazione (Konfiguration) --> Auto Export (Auto-Export) --> Assegnazione (Zuordnung) è possibile verificare lo stato di ogni punto di misura (sul lato destro).

Per aggiornare la visualizzazione dello stato dell'esportazione, occorre cliccare sul lato sinistro sul menu Auto Export.

Il nostro sistema verifica ogni 10 minuti se un job è in ritardo.

![Errori Auto Export – Figura 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Stato

Lo stato fornisce di volta in volta informazioni sullo stato dell'esportazione

- OK: ultima esportazione riuscita


![Errori Auto Export – Figura 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

<details id="waiting">
<summary>waiting...</summary>

Problema 1: la data è nel futuro

- La data è nel futuro


Soluzione:

- Attendere che la data impostata sia completamente trascorsa.


Problema 2: attesa

- Dalla creazione / dall'ultima modifica dell'assegnazione il sistema non ha ancora eseguito un'esportazione riuscita.


Soluzione:

- Attendere 15 minuti. In seguito viene visualizzato OK oppure un messaggio di errore.

</details>

<details id="meter-missing-data">
<summary>Meter 'xxx' is missing data</summary>

Problema:

- Per questo giorno non ci sono dati.


Soluzione:

- Nel menu Interfacce / Esportazione automatica (Schnittstellen / Automatische Export)

- Annotarsi la data dell'ultima esportazione.

- Nel menu Pannello di controllo (Dashboard)

- Selezionare la stazione

- Report

- Impostare la data «da» su «Ultima esportazione» (Letzen Export) di AutoExport

- Impostare la data «a» su «Ultima esportazione» (Letzen Export) di AutoExport

- Annotarsi la data più vecchia in Elettricità Periodo (Elektrizität Zeitspanne).

- Nel menu Interfacce / Esportazione automatica (Schnittstellen / Automatische Export)

- Selezionare la stazione 

- Modificare (Editieren)

- Impostare Ultima esportazione (Letzer Export) su «data più vecchia in Elettricità Periodo» +1. 

- È importante impostare la data + 1, poiché possiamo esportare solo giorni interi.

- Attendere fino a 45 minuti finché l'esportazione aggiorna lo stato.

</details>

<details id="waiting-for-meter-values">
<summary>Waiting for meter values of ".... Last values at "...." (UTC))</summary>

Problema 1: contatore offline

- Il punto di misura è offline e non fornisce più dati. 


Soluzione

- Il punto di misura deve essere riportato online.

- In seguito Auto Export viene riavviato automaticamente.


Problema 2: mancano i dati di un giorno intero

- Il punto di misura non dispone di tutti i dati per il periodo tra l'ultima e la prossima esportazione. Ad es. se il punto di misura è stato installato il 2.3.2024 alle 12h37, non è possibile eseguire un'esportazione per il 2.3.2024, poiché questo giorno è incompleto.


Soluzione

- (opzionale) Lettura manuale nel sistema a valle, ad es. EDM, affinché il giorno sia registrato completamente. (La lettura può essere effettuata ad es. con un report nella panoramica principale di smart-me).

- Modificare il punto di misura e impostare Ultima esportazione (Letzter Export) sulla data successiva.

</details>

<details id="ftps-upload-150">
<summary>FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....</summary>

Problema:

- L'ID del punto di misura contiene a sinistra uno o più spazi


Soluzione:

- Eliminare gli spazi e salvare.


![Errori Auto Export – Figura 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

</details>

<details id="sftp-key-file">
<summary>SFTP upload: issue with key file: Invalide private key file.</summary>

Problema 1: il key file non è registrato.

- Il key file non è corretto


Soluzione 1

- Assicurarsi che il key file sia configurato correttamente secondo [Auto Export](/schnittstellen/auto-export) --> Tipo di upload (Upload Art).

- Verificare che il key file generato inizi come segue:


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Errori Auto Export – Figura 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

</details>

<details id="ftp-upload-550">
<summary>FTP upload Error: The remote server returned an error 550</summary>

Problema: smart-me non ha l'autorizzazione a scrivere nel percorso indicato.

Soluzione: concedere le autorizzazioni.

Problema 2: caso particolare con l'utilizzo di MOVEit (stato al 8.7.2024: #32171)

- Utilizzare il "key file" creato con i due comandi openssl. [Auto Export](/schnittstellen/auto-export) -->  Tipo di upload (Upload Art)

- Stabilire una prima connessione, che fallisce (restituzione di un errore di certificato non valido).

- Nel mio software "MOVEit" ricevo un messaggio (in verde nell'immagine). Devo quindi riattivare l'utente (in blu) e accettare il certificato (in rosso).

- Rimuovere la "/" dal percorso, affinché i file possano essere salvati nella cartella "Export". (Errato: "/Export", corretto: "Export)


![Errori Auto Export – Figura 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Immagine da MOVEit

![Errori Auto Export – Figura 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Immagine dell'assegnazione di Auto Export

</details>
