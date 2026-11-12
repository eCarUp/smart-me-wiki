---
title: 'Connessione a Internet'
slug: '/planung/internetverbindung-deutschland'
description: 'Il sistema smart-me e il relativo hardware necessitano di una connessione diretta a Internet verso il cloud.'
sidebar_label: 'Connessione a Internet'
symbol: 'wlan'
---
Il sistema smart-me e il relativo hardware necessitano di una connessione diretta a Internet verso il cloud. In loco dovete quindi mettere a disposizione una rete WLAN a 2.4GHz con connessione a Internet. La banda a 5GHz non è supportata a causa della portata ridotta.


L'accesso a Internet può essere realizzato come segue:

- Offerta di un provider via cavo di Telekom, Vodafone, 1&1 o di un altro fornitore Internet locale e router WLAN a 2.4GHz, di solito fornito dal provider.

- Creare l'accesso a Internet tramite una scheda SIM di telefonia mobile e un router WLAN a 2.4GHz. 


Livelli di ridondanza

- Mettere a disposizione più access point con lo stesso SSID e la stessa password. Tutti i prodotti smart-me selezionano automaticamente un access point con connessione a Internet.

- Memorizzare più reti WiFi sul dispositivo smart-me: [Posso utilizzare il mio dispositivo con più reti WiFi?](/konfiguration/inbetriebnahme/smart-me-geraete#kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen)


<div className="bild--voll">

![Connessione a Internet – Figura 1](/img/planung-internetverbindung/01.png)

</div>

## Requisiti hardware

Punti principali\*:

- Standard: 802.11 b / g / n 

- Frequenza WiFi: 2.4 GHz


\* ulteriori dettagli si trovano nei dati tecnici dei rispettivi [prodotti](/produkte).

Specifiche secondo necessità:

- Numero di client supportati contemporaneamente.


Client:
I client supportati definiscono quanti dispositivi possono comunicare contemporaneamente con l'access point o il router. Il numero deve essere adeguato alla vostra installazione. Esistono access point economici che supportano 200+ client.
Il numero si trova nella scheda tecnica dei dispositivi, di solito alla voce "Max. Clients" o "Concurred Clients".

## Possibili componenti hardware

### Router

Il router è la sorgente collegata a Internet/al provider, che converte il segnale in
LAN (RJ-45) o Wifi 2.4 Ghz / 5 GHz.

### Access point

Gli access point convertono un segnale del router trasmesso via LAN (RJ-45) in una rete WLAN a 2.4 GHz / 5GHz.

### Repeater

I repeater amplificano un segnale WLAN esistente per estenderne la copertura.


### Router LTE di telefonia mobile con WLAN a 2.4GHz

Teltonika RUT241 (max. 50 client)

Uno slot esterno per scheda SIM e i LED di intensità del segnale consentono una messa in servizio semplice. Il modulo 4G del router offre velocità LTE Cat 4 fino a 300 Mbps. In alternativa, il dispositivo può essere utilizzato anche come router DSL o client WLAN e dispone di una funzione di fallback per il passaggio automatico a LTE o WLAN in caso di interruzione della connessione DSL.  

- Teltonika RUT241 (max. 50 client)
- Teltonika RUT951 (max. 100 client)


### Access point WLAN a 2.4GHz

Ubiquiti U6-Lite

L'UniFi 6 Lite è un access point Wi-Fi 6 2x2 che, con radio a 5 GHz (MU-MIMO e OFDMA) e a 2,4 GHz (MIMO), offre una velocità radio aggregata fino a 1,5 Gbit/s.


### Access point WLAN su guida DIN a 2.4Ghz

Access point WLAN 3xUAE/USB ACR WLAN – Rutenbeck 

Access point WLAN 3xUAE/USB ACR WLAN 22610408 Velocità di trasmissione max. 150Mbit/s, banda di frequenza 2,4 GHz, Managed, protocollo radio IEEE 802.11 b/g/n, crittografia WPA2, Ethernet, numero di porte LAN 10/100 Mbps 2, VPN-Security, attacco per antenna esterna, funzione bridge, funzione repeater, Power over Ethernet, larghezza 72mm, altezza 90mm, profondità 65mm, grado di protezione (IP) IP21, adatto al montaggio su guida DIN, access point WLAN per montaggio su guida DIN 

### Requisiti WLAN

[Messa in servizio](/konfiguration/inbetriebnahme)
