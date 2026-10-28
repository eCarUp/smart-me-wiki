---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa sta per Long Range e indica una tecnologia radio con grande portata e bassa velocità di trasmissione dei dati.'
sidebar_label: 'LoRa Gateway Software'
---
## Premessa

LoRa sta per Long Range e indica una tecnologia radio con grande portata e bassa velocità di trasmissione dei dati. Questo mezzo di comunicazione è particolarmente adatto alla trasmissione senza fili dei valori misurati dai contatori negli ambiti dell'impiantistica sanitaria e del riscaldamento.

Rispetto al Wireless M-Bus, sviluppato in linea di principio per la trasmissione dei dati dei contatori, LoRa si distingue per una portata nettamente superiore.

Servono meno gateway per edificio per raccogliere tutti i valori dei contatori dei singoli appartamenti.

## Struttura

![LoRa Gateway Software – Figura 1](/img/produkte-lora-gateway-software/01.png)

## Informazioni generali sulla compatibilità dei contatori di energia e dei sensori

Con la soluzione smart-me LoRa Gateway è importante che i sensori e i contatori di energia figurino nell'elenco di compatibilità. Se non sono elencati, al momento non c'è compatibilità. 

Ci contatti: l'integrazione del Suo contatore o sensore è possibile in tempi brevi. Scriva un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con l'oggetto "Nuovo dispositivo LoRa"

In generale, la soluzione gateway smart-me supporta i seguenti tipi di contatori di energia e di sensori:

Contatori di energia:

- Contatori di calore

- Contatori di freddo

- Contatori di calore/freddo

- Contatori dell'acqua calda sanitaria e dell'acqua fredda

- Contatori del gas


Sensori:

- Temperatura (visualizzazione, temporaneamente non salvata)


### Limiti della compatibilità

Per motivi tecnici, i contatori elettrici non sono supportati con LoRa. A causa del funzionamento di LoRa, la velocità di trasmissione e l'affidabilità dei dati non sono sufficientemente elevate per i conteggi basati sui profili di carico secondo smart-me Billing. 

Pertanto tramite LoRa vengono rilevati esclusivamente i dati dei contatori per i quali è possibile garantire sicurezza e funzionalità sufficienti.

## Gateway LoRaWAN testati

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Nota: i dispositivi non testati possono essere integrati autonomamente. I dispositivi compatibili necessitano soltanto delle opzioni "Semtech" e "Data Packet Forwarder".

## Eseguire la messa in servizio

[Messa in servizio dei gateway LoRaWAN](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Elenco di compatibilità di contatori e sensori

Il Suo contatore o sensore non è presente?

Ci contatti: l'integrazione del Suo contatore o sensore è possibile in tempi brevi. Scriva un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con l'oggetto "Nuovo dispositivo LoRa".

Requisiti per un'integrazione:

- EUI del dispositivo

- Chiave dell'applicazione per il dispositivo
    (La chiave ha 32 caratteri. È allegata al prodotto; in caso contrario può essere richiesta all'attuale / precedente fornitore del servizio di fatturazione.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Apri il foglio di calcolo, elenco di compatibilità LoRa Gateway in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" height="720px" title="Foglio di calcolo, elenco di compatibilità LoRa Gateway" />

Elenco di compatibilità LoRa Gateway

## Lavorare con i field tester LoRa

I field tester possono essere messi in servizio come qualsiasi tipo di dispositivo mediante l'EUID e la relativa APP-Key.

I field tester possono ad esempio essere collegati come produttore "GWF" e tipo "All". Ciò consente al tester di comunicare con il gateway. Il gateway non crea alcun punto di misura per il tester nel portale smart-me.

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

## Qualità dei dati e copertura delle interruzioni

La tecnologia LoRa si basa sul rilevamento e sull'invio dei dati. I gateway LoRaWAN non dispongono di una memoria dati e quindi non possono ricostruire set di dati incompleti, come avviene invece con i prodotti smart-me.

Per questo motivo LoRa non è adatto allo stesso modo a tutte le forme di energia. 

Per calore / acqua e gas, un'interruzione di breve durata o una lacuna nei dati non rappresenta di norma un grosso ostacolo e, se risolta a medio termine, consente comunque un conteggio senza problemi.
Per l'elettricità e la sua tariffazione a intervalli di 15 minuti, una risoluzione a medio termine non è facilmente attuabile; pertanto, a nostro avviso, LoRa non è adatto alla trasmissione dei dati elettrici e al relativo conteggio.

Per questo smart-me ha sviluppato un proprio hardware, in grado di garantire per l'elettricità la sicurezza e la completezza dei dati necessarie. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
