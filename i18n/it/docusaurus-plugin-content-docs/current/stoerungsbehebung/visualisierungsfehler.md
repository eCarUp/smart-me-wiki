---
title: 'Errori di visualizzazione'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'In questa sezione vengono descritti i messaggi di errore noti relativi alle visualizzazioni e i possibili approcci risolutivi.'
sidebar_label: 'Errori di visualizzazione'
---
In questa sezione vengono descritti i messaggi di errore noti relativi alle visualizzazioni e i possibili approcci risolutivi.

### L'utente con diritti di lettura non vede il flusso di energia.

I dati energetici non vengono visualizzati.

- Soluzione: menu Configurazione degli utenti (Benutzerkonfiguration) --> Assicurarsi che l'utente con diritti di lettura abbia accesso ai contatori che generano il grafico. Di regola si tratta dei contatori tecnici (contatori di bilancio e contatori solari)


![Errori di visualizzazione – Figura 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Errori di visualizzazione – Figura 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Errori di visualizzazione – Figura 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

### Le tariffe virtuali semplici (appartamento) vengono visualizzate vuote

La visualizzazione non funziona o appare vuota

- Soluzione 1: verificare che nel smart-me Billing il calcolo delle tariffe virtuali (riquadro blu) non presenti errori. [Messaggi di errore di Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Soluzione 2: assicurarsi che sia stata selezionata la cartella dell'appartamento. Se viene selezionato il contatore, non funziona.


![Errori di visualizzazione – Figura 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Flusso di energia semplice

I valori non vengono visualizzati correttamente:

- Soluzione 1: assicurarsi che nella configurazione siano registrati solo due dei tre contatori. Se vengono indicati tutti e tre i contatori, possono verificarsi visualizzazioni errate. Consigliamo sempre, se possibile, di indicare misurazioni dirette e non contatori virtuali

- Soluzione 2: verificare che i contatori forniscano i valori corretti.


![Errori di visualizzazione – Figura 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

Il contatore FV era collegato in modo errato. Dopo averlo collegato correttamente, il grafico non è più corretto.

- Soluzione 1: la freccia del grafico è determinata dalla lettura del contatore. Ora è semplicemente necessario attendere fino a quando la lettura del contatore diventa negativa.


![Errori di visualizzazione – Figura 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

### Monitoraggio del consumo e della produzione

Viene visualizzato NaN%

- Soluzione 1: il contatore solare non ha ancora prodotto nulla in questa giornata. Attendere 24 ore oppure selezionare il periodo "Individuale" (Individuell), affinché venga visualizzato il giorno corrente.


![Errori di visualizzazione – Figura 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### Il diagramma a torta non mostra tutti i contatori

Questo si verifica quando solo alcuni contatori sono online, ad esempio da 7 giorni: in tal caso vengono visualizzati solo questi e non ancora gli altri.

![Errori di visualizzazione – Figura 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
