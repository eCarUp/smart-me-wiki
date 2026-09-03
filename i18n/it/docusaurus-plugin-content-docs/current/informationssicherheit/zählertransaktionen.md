---
title: 'Transazioni del contatore'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Beta: le meter transactions (Zähler Transaktionen) sono prelievi di valori di misura limitati nel tempo e firmati digitalmente, che possono essere conteggiati singolarmente.'
sidebar_label: 'Transazioni del contatore'
---
Beta: le meter transactions (Zähler Transaktionen) sono prelievi di valori di misura limitati nel tempo e firmati digitalmente, che possono essere conteggiati singolarmente. Un caso d'uso ideale sono le sessioni di ricarica per l'elettromobilità.

Maggiori informazioni sulla firma con chiave pubblica si trovano [qui](/informationssicherheit/public-key-signature). 

## Applicazione nelle stazioni di ricarica

Il contatore smart-me (versione 2) viene installato nella stazione di ricarica. L'uscita digitale del contatore viene collegata direttamente al controller di ricarica e può così avviare e arrestare la ricarica. Il display del contatore, così come il marchio di taratura, sono visibili sul lato anteriore della stazione di ricarica.

### Svolgimento della sessione di ricarica

![Transazioni del contatore – Figura 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. La sessione di ricarica viene avviata (ad es. tramite un'app). Al contatore viene inviato il comando "Start Transaction". Esso avvia una nuova transazione e attiva la stazione di ricarica. Il display passa dalla visualizzazione a rotazione delle letture del contatore alla visualizzazione della transazione. Il consumo della transazione parte da 0 kWh e aumenta in base al consumo. 

![Transazioni del contatore – Figura 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. Sul display l'utente vede l'attuale potenza di ricarica e l'energia già prelevata.

![Transazioni del contatore – Figura 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. La sessione di ricarica viene terminata (ad es. tramite l'app). Al contatore viene inviato il comando "End Transaction". Esso termina la transazione, la firma e invia i dati della transazione nonché la firma digitale alla cloud. Per 5 min il display segnala all'utente che la sessione di ricarica è terminata.

### Verificare la sessione di ricarica in un secondo momento

Il cliente può verificare in qualsiasi momento dopo la sessione di ricarica la quantità di energia fatturata. A tale scopo inserisce nell'app o nel web la transazione corrispondente e la verifica con la chiave pubblica del contatore. Le chiavi pubbliche di tutti i contatori smart-me sono disponibili pubblicamente nella cloud smart-me (o tramite API).

I dati della transazione possono essere verificati online con la firma e la chiave pubblica.

![Transazioni del contatore – Figura 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Validare i dati del contatore Pico con il software di trasparenza



Con l'aiuto di un software di trasparenza hai la possibilità di verificare le firme digitali. 

A seconda della sua realizzazione tecnica, una stazione di ricarica genera valori di misura firmati digitalmente in relazione a una sessione di ricarica che effettui presso questa stazione di ricarica. Queste firme digitali ti consentono una verifica differita nel tempo dei valori di misura, così puoi assicurarti che nessuno abbia manipolato i valori durante la trasmissione fino alla tua fattura.



L'impiego del software di trasparenza è gratuito per consumatori, fornitori di servizi di mobilità e gestori di stazioni di ricarica. 



Download del software di trasparenza: [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Validare le letture del contatore

Le curve di lettura firmate possono essere consultate nella cloud smart-me come segue:

1\. Accedere su [www.smart-me.com](http://www.smart-me.com) 

2\. Selezionare il contatore desiderato, ossia la stazione di ricarica

3\. Nel menu in alto a destra fare clic sulla freccia e selezionare “Letture del contatore firmate” (Signierte Zählerstände)

4\. Le firme (formato OCMF) vengono visualizzate sotto “Dati del contatore” (Zählerdaten).



Il messaggio OCMF può essere validato con il software di trasparenza:

- Lettura del contatore 1: energia attiva prelievo (1-b:1.8.0)

- Lettura del contatore 2: energia attiva fornitura (1-b:1.8.0)






### Validare le transazioni

Le transazioni firmate possono essere consultate nella cloud smart-me come segue:
5\. Accedere su [www.smart-me.com
](http://www.smart-me.com)6\. Selezionare il contatore desiderato, ossia la stazione di ricarica
7\. Nel menu in alto a destra fare clic sulla freccia e selezionare “Transazioni firmate” (Signierte Transaktionen)
8\. Le firme (formato OCMF) vengono visualizzate sotto “Dati del contatore” (Zählerdaten):



Il messaggio OCMF può essere validato con il software di trasparenza.



![Transazioni del contatore – Figura 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Transazioni del contatore – Figura 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Transazioni del contatore – Figura 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### Attivare la modalità MID della Pico (visualizzazione dei dati rilevanti)

Se l'utente desidera attivare la visualizzazione dei dati rilevanti ai fini MID (letture del contatore, versioni, checksum), sono disponibili due possibilità:

- Avvio, ossia riavvio della stazione 

- Tramite il sensore di luminosità


Visualizzare i dati rilevanti tramite il sensore di luminosità

Con una torcia l'utente può "lampeggiare" il seguente codice:

Buio - Chiaro - Buio - Chiaro - Buio

Ogni stato deve durare tra 1 e 5 secondi.
