---
title: 'Errori di visualizzazione'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'In questa sezione sono descritti i messaggi di errore noti relativi alle visualizzazioni e le possibili soluzioni.'
sidebar_label: 'Errori di visualizzazione'
---
In questa sezione sono descritti i messaggi di errore noti relativi alle visualizzazioni e le possibili soluzioni.

### L'utente con accesso in lettura non vede il flusso di energia.

<div className="row">
<div className="col col--6">

I dati energetici non vengono visualizzati.

- Soluzione: menu Configurazione degli utenti (Benutzerkonfiguration) --> Assicurarsi che l'utente con accesso in lettura abbia accesso ai contatori che generano il grafico. Di norma si tratta dei contatori tecnici (contatore di bilancio e contatore solare)

</div>
<div className="col col--6 text--center">

![Errori di visualizzazione – Figura 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Errori di visualizzazione – Figura 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Errori di visualizzazione – Figura 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

### Le tariffe virtuali semplici (appartamento) vengono visualizzate vuote

La visualizzazione non funziona o appare vuota

- Soluzione 1: Verificare che nello smart-me Billing il calcolo delle tariffe virtuali (riquadro blu) non presenti errori. [Messaggi di errore del Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Soluzione 2: Assicurarsi che sia stata selezionata la cartella dell'appartamento. Se si seleziona il contatore, non funziona.


![Errori di visualizzazione – Figura 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Flusso di energia semplice

I valori non vengono visualizzati correttamente:

- Soluzione 1: Assicurarsi che nella configurazione siano inseriti solo due contatori su tre. Se vengono indicati tutti e tre i contatori, possono verificarsi visualizzazioni errate. Raccomandiamo sempre, se possibile, di indicare misurazioni dirette e non contatori virtuali

- Soluzione 2: Verificare che i contatori forniscano i valori corretti.


![Errori di visualizzazione – Figura 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

Il contatore FV era collegato in modo errato. Dopo averlo collegato correttamente, il grafico non è più corretto.

- Soluzione 1: La freccia del grafico è determinata dalla lettura del contatore. Ora è sufficiente attendere finché la lettura del contatore diventa negativa.

</div>
<div className="col col--4 text--center">

![Errori di visualizzazione – Figura 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

### Monitoraggio di consumo e produzione

Viene visualizzato NaN%

- Soluzione 1: Il contatore solare non ha ancora prodotto nulla in questo giorno. Attendere 24h oppure selezionare il periodo "Personalizzato" ("Individuell"), in modo che venga visualizzato il giorno corrente.


![Errori di visualizzazione – Figura 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### Il diagramma a torta non mostra tutti i contatori

Questo succede quando solo alcuni contatori sono online, ad esempio da 7 giorni: in tal caso vengono visualizzati solo questi e gli altri non ancora.

![Errori di visualizzazione – Figura 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
