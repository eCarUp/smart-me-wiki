---
title: 'Eniris'
slug: '/drittsysteme/eniris'
description: 'Il sistema di gestione dell''energia SmartgridOne di Eniris legge i contatori e le stazioni di ricarica smart-me direttamente tramite Modbus TCP.'
sidebar_label: 'Eniris'
---
<div className="row">
<div className="col col--7">

Il sistema di gestione dell'energia SmartgridOne di Eniris legge i contatori e le stazioni di ricarica smart-me direttamente tramite Modbus TCP.

Dal 2018 Eniris sviluppa sistemi di gestione dell'energia e ha la sua sede principale in Belgio, con una filiale in Svizzera. SmartgridOne gestisce in modo coordinato batterie, stazioni di ricarica, impianti fotovoltaici, pompe di calore e carichi che possono essere accesi e spenti. In Svizzera SmartgridOne è distribuito esclusivamente tramite Solarmarkt, che si occupa anche dell'assistenza.

</div>
<div className="col col--5 bild--mitte">

![Logo di Eniris: un fulmine in un cerchio rosso accanto alla scritta ENIRIS](/img/drittsysteme-eniris/logo.png)

</div>
</div>

**Gruppo target:**

- RCP (raggruppamento ai fini del consumo proprio)

- Casa unifamiliare

- Casa plurifamiliare


**Tipo di collegamento:**

Integrazione diretta tramite Modbus TCP per la comunicazione locale.


**Requisito:**

- Abbonamento smart-me Professional. [Per saperne di più](/planung/cloud-lizenzen)

## Dispositivi integrati

In SmartgridOne questi dispositivi sono disponibili alla voce **Devices** come integrazione standard tramite Modbus TCP:

- [Contatore trifase smart-me Telstar](/produkte/telstar-80a)

- [Contatore trifase Telstar CT](/produkte/telstar-ct)

- [Stazione di ricarica Pico](/produkte/pico-ladestation) con commutazione delle fasi

## Guida rapida

1.  [Attivare Modbus TCP sul dispositivo smart-me](/schnittstellen/modbus-tcp#attivare-modbus-tcp).

2.  Annotare l'indirizzo IP o il nome host del dispositivo. Entrambi si trovano nel portale alla voce **Dispositivo → Configurazione → Impostazioni avanzate** (Gerät → Konfiguration → Erweiterte Einstellungen). Come determinare l'indirizzo in altro modo è descritto in [Trovare l'indirizzo del dispositivo](/schnittstellen/modbus-tcp#determinare-lindirizzo-del-dispositivo).

3.  In SmartgridOne aggiungere il dispositivo smart-me alla voce **Devices**.

4.  Inserire l'indirizzo IP o il nome host e salvare.

Per la Pico valgono delle limitazioni nella gestione del carico: tramite Modbus TCP è raggiungibile solo un dispositivo singolo o il master di un gruppo. I dettagli si trovano in [Aspetti specifici di Pico e Modbus TCP](/schnittstellen/modbus-tcp#aspetti-specifici-di-pico-e-modbus-tcp).

## Contatto

<Kacheln min="20rem">

<Kachel titel="Solarmarkt GmbH">

Distribuzione e assistenza in Svizzera.

Neumattstrasse 30, CH-5000 Aarau

+41 62 200 62 00 · [info@solarmarkt.ch](mailto:info@solarmarkt.ch) · [www.solarmarkt.ch](https://www.solarmarkt.ch)

</Kachel>

<Kachel titel="Eniris">

Produttore di SmartgridOne.

[eniris.com](https://eniris.com/de)

</Kachel>

</Kacheln>
