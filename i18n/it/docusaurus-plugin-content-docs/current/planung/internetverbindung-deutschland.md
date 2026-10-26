---
title: 'Connessione Internet'
slug: '/planung/internetverbindung-deutschland'
description: 'Il sistema smart-me e il relativo hardware necessitano di una connessione Internet diretta al cloud.'
sidebar_label: 'Connessione Internet'
---
Il sistema smart-me e il relativo hardware necessitano di una connessione Internet diretta al cloud. In loco deve quindi mettere a disposizione una rete WLAN a 2.4GHz con connessione Internet. La banda a 5GHz non è supportata a causa della portata ridotta.


L'accesso a Internet può essere realizzato come segue:

- Offerta di un provider via cavo da Telekom, Vodafone, 1&1 o un altro provider Internet locale e router WLAN a 2.4GHz, solitamente fornito dal provider.

- Realizzare l'accesso a Internet tramite scheda SIM di telefonia mobile e router WLAN a 2.4GHz. 


Livelli di ridondanza

- Mettere a disposizione più access point con lo stesso SSID e la stessa password. Tutti i prodotti smart-me selezionano automaticamente un access point con connessione Internet.

- Memorizzare più reti WiFi sul dispositivo smart-me: [Posso utilizzare il mio dispositivo con più reti WiFi?](/konfiguration/inbetriebnahme/smart-me-geraete#kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen)


![Connessione Internet – figura 1](/img/planung-internetverbindung/01.png)

## Requisiti hardware

Punti principali\*:

- Standard: 802.11 b / g / n 

- Frequenza WiFi: 2.4 GHz


\* ulteriori dettagli sono riportati nei dati tecnici dei rispettivi [prodotti](/produkte).

Specifiche secondo necessità:

- Numero di client supportati contemporaneamente.


Client:
I client supportati definiscono quanti dispositivi possono comunicare contemporaneamente con l'access point o il router. Il numero deve essere adeguato alla Sua installazione. Esistono access point economici che supportano 200+ client.
Il numero è indicato nella scheda tecnica dei dispositivi, perlopiù alla voce "Max. Clients" o "Concurred Clients".

## Possibili componenti hardware

### Router

Il router è la sorgente collegata a Internet/al provider, che converte il segnale in
LAN (RJ-45) o Wifi 2.4 Ghz / 5 GHz.

### Access point

Gli access point convertono un segnale del router trasmesso via LAN (RJ-45) in una rete WLAN 2.4 GHz / 5GHz.

### Ripetitori

I ripetitori amplificano un segnale WLAN esistente per estenderne la copertura.


### Router LTE per telefonia mobile con WLAN a 2.4GHz

Teltonika RUT241 (max. 50 client)

Uno slot esterno per la scheda SIM e i LED di intensità del segnale consentono una messa in servizio semplice. Il modulo 4G del router offre velocità LTE Cat 4 fino a 300 Mbps. In alternativa, il dispositivo può essere utilizzato anche come router DSL o client WLAN e dispone di una funzione di fallback per il passaggio automatico a LTE o WLAN in caso di interruzione della connessione DSL.  

- Teltonika RUT241 (max. 50 client)
- Teltonika RUT951 (max. 100 client)


### Access point W-LAN 2.4GHz

Ubiquiti U6-Lite

L'UniFi 6 Lite è un access point Wi-Fi 6 2x2 che, con radio a 5 GHz (MU-MIMO e OFDMA) e a 2,4 GHz (MIMO), offre una velocità radio aggregata fino a 1,5 Gbit/s.


### Access point WLAN per guida DIN 2.4Ghz

WLAN-Accesspoint 3xUAE/USB ACR WLAN – Rutenbeck 

WLAN-Accesspoint 3xUAE/USB ACR WLAN 22610408 Velocità di trasmissione max. 150Mbit/s, banda di frequenza 2,4 GHz, managed, protocollo radio IEEE 802.11 b/g/n, crittografia WPA2, Ethernet, numero di porte LAN 10/100 Mbps 2, VPN-Security, connessione per antenna esterna, funzione bridge, funzione ripetitore, Power over Ethernet, larghezza 72mm, altezza 90mm, profondità 65mm, grado di protezione (IP) IP21, adatto al montaggio su guida DIN, access point WLAN per montaggio in quadro di distribuzione 

### Requisiti WLAN

[Messa in servizio](/konfiguration/inbetriebnahme)
