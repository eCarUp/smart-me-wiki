---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Collegamento del gateway al cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Istruzioni di integrazione

![Milesight UG56 868Mhz – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Collegamento del gateway al cloud smart-me

1.  Alimenti il dispositivo

2.  Con il Suo laptop si colleghi al Wi-Fi del Milesight UG56 (Gateway\_\*\*\*\*\*\*\*) senza bisogno di password.
    Password Wi-Fi: iotpassword

3.  Apra il browser web e visiti 192.168.1.1

4.  Effettui il login.
    Nome utente: admin
    Password: password

5.  Vada su "Packet Forwarder" e copi l'EUI del dispositivo per la successiva implementazione in smart-me.

6.  Crei una nuova destinazione con:
    Tipo: Semtech
    Indirizzo del server: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Salvi l'impostazione

8.  Registri il dispositivo con il suo EUI nel Gateway LoRa (LoRa Gateway) di smart-me


Nota: in seguito è possibile accedere nuovamente all'interfaccia web tramite l'access point solo se il cavo Ethernet non è collegato.

![Milesight UG56 868Mhz – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
