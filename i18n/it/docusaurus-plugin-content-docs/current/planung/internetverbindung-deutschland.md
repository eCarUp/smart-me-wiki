---
title: 'Connessione Internet'
slug: '/planung/internetverbindung-deutschland'
description: 'Il sistema smart-me e il relativo hardware necessitano di una connessione Internet diretta al cloud.'
sidebar_label: 'Connessione Internet'
symbol: 'wlan'
---
Il sistema smart-me e il relativo hardware necessitano di una connessione Internet diretta al cloud. In loco è quindi necessario mettere a disposizione una rete WLAN a 2.4GHz con connessione Internet. La banda a 5GHz non è supportata a causa della portata ridotta.


L'accesso a Internet può essere realizzato come segue:

- Offerta di un provider via cavo di Telekom, Vodafone, 1&1 o di un altro provider Internet locale e router WLAN a 2.4GHz, solitamente fornito dal provider.

- Creare la connessione Internet tramite una scheda SIM di telefonia mobile e un router WLAN a 2.4GHz. 


Livelli di ridondanza

- Mettere a disposizione più access point con lo stesso SSID e la stessa password. Tutti i prodotti smart-me selezionano automaticamente un access point con connessione Internet.

- Memorizzare più reti WiFi sul dispositivo smart-me: [Posso utilizzare il mio dispositivo con più reti WiFi?](/konfiguration/inbetriebnahme/smart-me-geraete#kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen)


![Connessione Internet – Figura 1](/img/planung-internetverbindung/01.png)

## Requisiti hardware

Punti principali\*:

- Standard: 802.11 b / g / n 

- Frequenza WiFi: 2.4 GHz


\* ulteriori dettagli sono disponibili nei dati tecnici dei rispettivi [Prodotti](/produkte).

Specifiche secondo necessità:

- Numero di client supportati in parallelo.


Client:
I client supportati definiscono quanti dispositivi possono comunicare in parallelo con l'access point o il router. Il numero deve essere adeguato alla tua installazione. Esistono access point economici che supportano oltre 200 client.
Il numero è indicato nella scheda tecnica dei dispositivi, di solito alla voce "Max. Clients" o "Concurred Clients".

## Possibili componenti hardware

### Router

Il router è la sorgente collegata a Internet/al provider, che converte il segnale in
LAN (RJ-45) o Wifi 2.4 Ghz / 5 GHz.

### Access point

Gli access point convertono il segnale del router trasmesso via LAN (RJ-45) in una rete WLAN a 2.4 GHz / 5GHz.

### Repeater

I repeater amplificano un segnale WLAN esistente per estenderne la copertura.


### Router LTE di telefonia mobile con WLAN a 2.4GHz

Teltonika RUT241 (max. 50 client)

Uno slot esterno per la scheda SIM e i LED di intensità del segnale consentono una messa in servizio semplice. Il modulo 4G del router offre velocità LTE Cat 4 fino a 300 Mbps. In alternativa, il dispositivo può essere utilizzato anche come router DSL o client WLAN e dispone di una funzione di fallback per la commutazione automatica su LTE o WLAN in caso di interruzione della connessione DSL.  

- Teltonika RUT241 (max. 50 client)
- Teltonika RUT951 (max. 100 client)


### Access point WLAN a 2.4GHz

Ubiquiti U6-Lite

L'UniFi 6 Lite è un access point Wi-Fi 6 2x2 che, con radio a 5 GHz (MU-MIMO e OFDMA) e a 2,4 GHz (MIMO), offre una velocità radio aggregata fino a 1,5 Gbit/s.


### Access point WLAN su guida DIN a 2.4Ghz

Access point WLAN 3xUAE/USB ACR WLAN – Rutenbeck 

Access point WLAN 3xUAE/USB ACR WLAN 22610408 Velocità di trasmissione max. 150Mbit/s, banda di frequenza 2,4 GHz, managed, protocollo radio IEEE 802.11 b/g/n, crittografia WPA2, Ethernet, numero di porte LAN 10/100 Mbps 2, sicurezza VPN, attacco per antenna esterna, funzione bridge, funzione repeater, Power over Ethernet, larghezza 72mm, altezza 90mm, profondità 65mm, grado di protezione (IP) IP21, adatto al montaggio su guida DIN, access point WLAN per montaggio in quadro 

### Requisiti WLAN

[Messa in servizio](/konfiguration/inbetriebnahme)
