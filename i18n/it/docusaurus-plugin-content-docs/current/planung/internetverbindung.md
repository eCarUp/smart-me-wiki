---
title: 'Connessione a Internet'
slug: '/planung/internetverbindung'
description: 'Il sistema smart-me e il relativo hardware necessitano di una connessione diretta a Internet verso il cloud.'
sidebar_label: 'Connessione a Internet'
---
Il sistema smart-me e il relativo hardware necessitano di una connessione diretta a Internet verso il cloud. Localmente devi quindi mettere a disposizione una rete WLAN a 2.4GHz con connessione a Internet. La banda a 5GHz non è supportata a causa della portata ridotta.

[Inglese](/planung/internetverbindung)

L'accesso a Internet può essere realizzato come segue:

- Offerta di un provider via cavo di Swisscom, Sunrise o di un altro fornitore Internet locale e router WLAN a 2.4GHz, di norma fornito dal provider.

- Creazione della connessione Internet tramite scheda SIM di telefonia mobile e router WLAN a 2.4GHz. 


Livelli di ridondanza

- Mettere a disposizione più access point con lo stesso SSID e la stessa password. Tutti i prodotti smart-me selezionano automaticamente un access point con connessione a Internet.

- Memorizzare più reti WiFi sul dispositivo smart-me: [Posso utilizzare il mio dispositivo con più reti WiFi?](/konfiguration/inbetriebnahme#posso-utilizzare-il-mio-dispositivo-con-più-reti-wifi)


![Connessione a Internet – Figura 1](/img/planung-internetverbindung/01.png)

## Fornitori di dati per telefonia mobile (LTE)

Gli abbonamenti dati: [Digital Republic - Internet mobile per i tuoi dispositivi](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=ecarup&utm_medium=ecarupwiki&utm_campaign=ecarupwiki)

[

![Connessione a Internet – Figura 2](/img/planung-internetverbindung/02.png)

](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=smartme&utm_medium=smartmewiki&utm_campaign=smartmewiki)

## Requisiti hardware

Punti principali\*:

- Standard: 802.11 b / g / n 

- Frequenza WiFi: 2.4 GHz


\* ulteriori dettagli si trovano di volta in volta nei dati tecnici dei [Prodotti](/produkte).

Specifiche secondo necessità:

- Numero di client supportati in parallelo.


Client:
I client supportati definiscono quanti dispositivi possono comunicare in parallelo con l'access point o il router. Il numero deve essere adeguato alla tua installazione. Esistono access point economici che raggiungono un numero di client di 200+.
Il numero si trova nella scheda tecnica dei dispositivi, di solito sotto "Max. Clients" o "Concurred Clients".

## Possibili componenti hardware

### Router

Il router è la sorgente collegata a Internet/al provider e converte questa connessione in
LAN (RJ-45) o WiFi 2.4 Ghz / 5 GHz.

### Access point

Gli access point convertono un segnale trasmesso dal router via LAN (RJ-45) in una rete WLAN a 2.4 GHz / 5GHz.

### Repeater

I repeater amplificano un segnale WLAN esistente per estenderne la copertura.


### Router LTE per telefonia mobile con WLAN a 2.4GHz

Teltonika RUT241 (max. 50 client)

Uno slot esterno per schede SIM e i LED di intensità del segnale consentono una messa in servizio semplice. Il modulo 4G del router offre velocità LTE Cat 4 fino a 300 Mbps. Il dispositivo può essere utilizzato in alternativa anche come router DSL o come client WLAN e dispone di una funzione di fallback per la commutazione automatica su LTE o WLAN in caso di interruzione della connessione DSL.  

Teltonika RUT241 (max. 50 client)

Possibile fonte di approvvigionamento: [Teltonika RUT241 - digitec](https://www.digitec.ch/de/search?q=Rut+241)



Teltonika RUT951 (max. 100 client)

Possibile fonte di approvvigionamento: [Teltonika RUT951 - digitec](https://www.digitec.ch/de/search?q=RUT951&take=6)

### Access point W-LAN 2.4GHz

Ubiquiti U6-Lite

L'UniFi 6 Lite è un access point Wi-Fi 6 2x2 che, con radio a 5 GHz (MU-MIMO e OFDMA) e a 2,4 GHz (MIMO), offre una velocità radio aggregata fino a 1,5 Gbit/s.

Possibile fonte di approvvigionamento: [Ubiquiti | UniFi | U6-Lite - Digitec](https://www.digitec.ch/de/s1/product/ubiquiti-u6-lite-1200-mbits-300-mbits-access-point-14489581?supplier=406802)

### Access point WLAN 2.4Ghz per guida DIN

Access point WLAN 3xUAE/USB ACR WLAN – Rutenbeck 

Access point WLAN 3xUAE/USB ACR WLAN 22610408 Velocità di trasmissione max. 150Mbit/s, banda di frequenza 2,4 GHz, gestito, protocollo radio IEEE 802.11 b/g/n, cifratura WPA2, Ethernet, numero di porte LAN 10/100 Mbps 2, VPN-Security, connessione per antenna esterna, funzione bridge, funzione repeater, Power over Ethernet, larghezza 72mm, altezza 90mm, profondità 65mm, grado di protezione (IP) IP21, adatto al montaggio su guida DIN, access point WLAN per montaggio su guida 

### Requisiti WLAN

[Messa in servizio](/konfiguration/inbetriebnahme)
