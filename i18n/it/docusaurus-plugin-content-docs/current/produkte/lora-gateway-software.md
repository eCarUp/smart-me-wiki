---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa sta per Long Range e comprende una tecnologia radio con portata elevata e basso throughput di dati.'
sidebar_label: 'LoRa Gateway Software'
---
## Premessa

LoRa sta per Long Range e comprende una tecnologia radio con portata elevata e basso throughput di dati. Questo mezzo di comunicazione è particolarmente adatto alla trasmissione senza fili dei valori di misura dei contatori nei settori della tecnica sanitaria e di riscaldamento.

Rispetto al Wireless M-Bus, sviluppato in linea di principio per la trasmissione dei dati dei contatori, LoRa convince con la sua portata nettamente superiore.

Richiede meno gateway per edificio per raggiungere tutti i valori dei contatori dei singoli appartamenti.

## Struttura

![LoRa Gateway Software – Figura 1](/img/produkte-lora-gateway-software/01.png)

## Informazioni generali sulla compatibilità dei contatori di energia e dei sensori

Nella soluzione smart-me LoRa Gateway è importante che i sensori e i contatori di energia siano contenuti nella lista di compatibilità. Se non sono elencati, attualmente non sussiste alcuna compatibilità.

Contattaci: l'integrazione del tuo contatore o sensore è possibile in tempi brevi. Scrivi un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con la dicitura "Neues LoRa Gerät"

In generale la soluzione smart-me Gateway supporta i seguenti tipi di contatori di energia e di sensori:

Contatori di energia:

- Contatori di calore

- Contatori di freddo

- Contatori di calore/freddo

- Contatori dell'acqua calda sanitaria e dell'acqua fredda

- Contatori del gas


Sensori:

- Temperatura (visualizzazione, temporaneamente non memorizzata)


### Limitazioni della compatibilità

Per motivi tecnici non sono supportati contatori elettrici con LoRa. La velocità di trasmissione e la sicurezza contro la perdita di dati per i conteggi basati su profili di carico secondo smart-me Billing non sono sufficientemente elevate a causa del funzionamento di LoRa.

Per questo motivo via LoRa vengono rilevati esclusivamente dati di contatori con i quali è possibile garantire sicurezza e funzionalità sufficienti.

## Gateway LoRaWAN testati

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Nota: i dispositivi non testati possono essere integrati autonomamente. I dispositivi compatibili necessitano unicamente delle opzioni "Semtech" e "Data Packet Forwarder".

## Eseguire la messa in servizio

[Messa in servizio dei gateway LoRaWAN](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Lista di compatibilità contatori e sensori

Il tuo contatore o sensore non è presente?

Contattaci: l'integrazione del tuo contatore o sensore è possibile in tempi brevi. Scrivi un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con la dicitura "Neues LoRa Gerät".

Requisiti per un'integrazione:

- EUI del dispositivo

- Chiave applicativa per il dispositivo
    (La chiave ha 32 caratteri. La chiave è allegata al prodotto e, in caso contrario, può essere richiesta all'attuale/precedente fornitore del servizio di conteggio.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Apri il foglio di calcolo, lista di compatibilità LoRa Gateway in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" title="Foglio di calcolo, lista di compatibilità LoRa Gateway" />

Lista di compatibilità LoRa Gateway

## Lavorare con i field tester LoRa

I field tester possono essere messi in servizio come qualsiasi tipo di dispositivo mediante l'EUID e la relativa APP-Key.

I field tester possono ad esempio essere collegati con produttore "GWF" e tipo "All". Questo consente al tester di comunicare con il gateway. Il gateway non genera per il tester alcun punto di misura sul portale smart-me.

Testato con:
\- Adeunis ARF8123AA 868 MHz

## Partner di distribuzione

### GWF AG

Obergrundstrasse 119
CH-6005 Luzern
+41 41 319 50 50
[www.gwf.ch](http://www.gwf.ch)


Mauro Nuozzi

Back office manager

+41 41 319 52 47

mauro.nuozzi@gwf.ch

### Brunata AG

Althardstrasse 10
CH-8105 Regensdorf
[contact@brunata.ch

](mailto:contact@brunata.ch)

Alex Nanzer, Direzione
+41 41 669 10 10
[alex.nanzer@brunata.ch](mailto:alex.nanzer@brunata.ch) 

### Elsys.se

[www.elsys.se](http://www.elsys.se) 

## Qualità dei dati e copertura in caso di guasti

La tecnologia LoRa si basa sul rilevamento e sull'invio dei dati. I gateway LoRaWAN non dispongono di memoria dati e non possono quindi ricostruire set di dati incompleti, come invece avviene normalmente con i prodotti smart-me.

Per questo motivo LoRa non è adatto allo stesso modo a tutte le forme di energia.

Per calore/acqua e gas, di norma, un'interruzione di breve durata o un buco nei dati non rappresenta un grosso ostacolo e, in caso di risoluzione a medio termine, il conteggio può essere effettuato senza problemi.
Per l'elettricità e la relativa tariffazione a intervalli di 15 minuti una risoluzione a medio termine non è realizzabile senza problemi, pertanto dal nostro punto di vista LoRa non è adatto alla trasmissione dei dati elettrici e al relativo conteggio.

Per questo smart-me ha sviluppato hardware proprio per garantire in modo adeguato la necessaria sicurezza e completezza dei dati per l'elettricità.

- Telstar 80A

- Telstar CT

- Nimbus 100A
