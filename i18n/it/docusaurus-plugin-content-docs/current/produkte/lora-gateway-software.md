---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa sta per Long Range e comprende una tecnologia radio a lungo raggio con una bassa velocità di trasmissione dei dati.'
sidebar_label: 'LoRa Gateway Software'
---
## Premessa

LoRa sta per Long Range e comprende una tecnologia radio a lungo raggio con una bassa velocità di trasmissione dei dati. Questo mezzo di comunicazione è particolarmente adatto alla trasmissione senza fili dei valori misurati dai contatori negli impianti sanitari e di riscaldamento.

Rispetto al Wireless M-Bus, sviluppato appositamente per la trasmissione dei dati dei contatori, LoRa si distingue per una portata nettamente superiore.

Servono meno gateway per edificio per ottenere tutti i valori dei contatori dei singoli appartamenti.

## Struttura

![LoRa Gateway Software – Figura 1](/img/produkte-lora-gateway-software/01.png)

## Informazioni generali sulla compatibilità dei contatori di energia e dei sensori

Con la soluzione LoRa Gateway di smart-me è importante che i sensori e i contatori di energia figurino nell'elenco di compatibilità. Se non sono presenti, al momento non sono compatibili. 

Ci contatti: l'integrazione del Suo contatore o sensore è possibile in tempi brevi. Scriva un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con l'oggetto "Neues LoRa Gerät"

In generale la soluzione gateway di smart-me supporta i seguenti tipi di contatori di energia e di sensori:

Contatori di energia:

- Contatori di calore

- Contatori di freddo

- Contatori di calore/freddo

- Contatori dell'acqua calda sanitaria e dell'acqua fredda

- Contatori del gas


Sensori:

- Temperatura (visualizzazione, temporaneamente non salvata)


### Limitazioni della compatibilità

Per motivi tecnici, LoRa non supporta i contatori di elettricità. Il funzionamento di LoRa non garantisce una velocità di trasmissione e un'affidabilità dei dati sufficienti per i conteggi basati sul profilo di carico di smart-me Billing. 

Per questo motivo, tramite LoRa vengono rilevati esclusivamente i dati di contatori per i quali è possibile garantire sicurezza e funzionalità sufficienti.

## Gateway LoRaWAN testati

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Nota: i dispositivi non testati possono essere integrati in autonomia. I dispositivi compatibili richiedono soltanto le opzioni "Semtech" e "Data Packet Forwarder".

## Eseguire la messa in servizio

[Messa in servizio dei gateway LoRaWAN](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Elenco di compatibilità di contatori e sensori

Il Suo contatore o sensore non è presente?

Ci contatti: l'integrazione del Suo contatore o sensore è possibile in tempi brevi. Scriva un'e-mail a [support@smart-me.com](mailto:support@smart-me.com) con l'oggetto "Neues LoRa Gerät".

Requisiti per un'integrazione:

- EUI del dispositivo

- Chiave applicativa del dispositivo
    (La chiave ha 32 caratteri. È fornita insieme al prodotto; in caso contrario può essere richiesta all'attuale o al precedente fornitore del servizio di fatturazione.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Apri il foglio di calcolo, elenco di compatibilità LoRa Gateway in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" height="720px" title="Foglio di calcolo, elenco di compatibilità LoRa Gateway" />

Elenco di compatibilità LoRa Gateway

## Lavorare con i tester di campo LoRa

I tester di campo possono essere messi in servizio come qualsiasi tipo di dispositivo tramite il loro EUID e la relativa APP-Key.

Ad esempio, i tester di campo possono essere collegati con il produttore "GWF" e il tipo "All". In questo modo il tester può comunicare con il gateway. Il gateway non crea alcun punto di misura per il tester nel portale smart-me.

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

La tecnologia LoRa si basa sul rilevamento e sull'invio dei dati. I gateway LoRaWAN non dispongono di una memoria dati e quindi, a differenza degli altri prodotti smart-me, non possono ricostruire set di dati incompleti.

Per questo motivo LoRa non è adatto allo stesso modo a tutti i tipi di energia. 

Per calore, acqua e gas, di norma un'interruzione di breve durata o una lacuna nei dati non rappresenta un ostacolo rilevante e, se risolta a medio termine, il conteggio può avvenire senza problemi.
Per l'elettricità, con la sua tariffazione a intervalli di 15 minuti, una soluzione a medio termine non è priva di problemi; per questo, a nostro avviso, LoRa non è adatto alla trasmissione dei dati elettrici e al relativo conteggio.

Per questo smart-me ha sviluppato un proprio hardware che garantisce per l'elettricità la sicurezza e la completezza dei dati necessarie. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
