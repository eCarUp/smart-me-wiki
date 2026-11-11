---
title: 'Errori di visualizzazione'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'In questa sezione sono descritti i messaggi di errore noti relativi alle visualizzazioni e le possibili soluzioni.'
sidebar_label: 'Errori di visualizzazione'
---
In questa sezione sono descritti i messaggi di errore noti relativi alle visualizzazioni e le possibili soluzioni.

<details id="energiefluss-lese-user">
<summary>L'utente in sola lettura non vede il flusso di energia.</summary>

<div className="row">
<div className="col col--6">

I dati energetici non vengono visualizzati.

- Soluzione: menu Configurazione utente (Benutzerkonfiguration) --> Assicurarsi che l'utente in sola lettura abbia accesso ai contatori che generano il grafico. Di norma si tratta dei contatori tecnici (contatori di bilancio e contatori solari)

</div>
<div className="col col--6 bild--mitte">

![Errori di visualizzazione – Figura 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Errori di visualizzazione – Figura 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Errori di visualizzazione – Figura 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

</details>

<details id="virtuelle-tarife-leer">
<summary>Le tariffe virtuali semplici (appartamento) vengono visualizzate vuote</summary>

La visualizzazione non funziona o viene mostrata vuota

- Soluzione 1: verificare che nello smart-me Billing il calcolo delle tariffe virtuali (riquadro blu) non presenti errori. [Messaggi di errore del Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Soluzione 2: assicurarsi che sia stata selezionata la cartella dell'appartamento. Se si seleziona il contatore, non funziona.


![Errori di visualizzazione – Figura 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

</details>

<details id="einfacher-energiefluss">
<summary>Flusso di energia semplice</summary>

I valori non vengono visualizzati correttamente:

- Soluzione 1: assicurarsi che nella configurazione siano registrati solo due contatori su tre. Se vengono indicati tutti e tre i contatori, la visualizzazione può risultare errata. Consigliamo sempre, se possibile, di indicare misurazioni dirette e non contatori virtuali

- Soluzione 2: verificare che i contatori forniscano i valori corretti.


![Errori di visualizzazione – Figura 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

Il contatore FV era collegato in modo errato. Dopo averlo collegato correttamente, ora il grafico non è più corretto.

- Soluzione 1: la freccia del grafico è determinata dalla lettura del contatore. Ora basta semplicemente attendere finché la lettura del contatore diventa negativa.

</div>
<div className="col col--4 bild--mitte">

![Errori di visualizzazione – Figura 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

</details>

<details id="verbrauch-produktion-monitoring">
<summary>Monitoraggio di consumo e produzione</summary>

Viene visualizzato NaN%

- Soluzione 1: il contatore solare in quel giorno non ha ancora prodotto nulla. Attendere 24h oppure selezionare il periodo "Personalizzato" ("Individuell"), in modo che venga visualizzato il giorno corrente.


![Errori di visualizzazione – Figura 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

</details>

<details id="kuchendiagramm-unvollstaendig">
<summary>Il diagramma a torta non mostra tutti i contatori</summary>

Ciò accade quando solo alcuni contatori sono online, ad es. da 7 giorni: in questo caso vengono visualizzati solo questi e gli altri non ancora.

![Errori di visualizzazione – Figura 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)

</details>
