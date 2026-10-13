---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Collegamento del gateway al cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Guida all'integrazione

![Milesight UG56 868Mhz – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Collegamento del gateway al cloud smart-me

1.  Alimenti il dispositivo

2.  Con il Suo laptop si colleghi alla rete Wi-Fi del Milesight UG56 (Gateway\_\*\*\*\*\*\*\*), non è necessaria alcuna password.
    Password Wi-Fi: iotpassword

3.  Apra il browser web e visiti 192.168.1.1

4.  Effettui l'accesso.
    Nome utente: admin
    Password: password

5.  Navighi fino a "Packet Forwarder" e copi l'EUI del dispositivo per la successiva implementazione in smart-me.

6.  Crei una nuova destinazione con:
    Tipo: Semtech
    Indirizzo del server: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Salvi l'impostazione

8.  Registri il dispositivo con il suo EUI nello smart-me LoRa Gateway


Nota: in seguito è possibile accedere di nuovo all'interfaccia web tramite l'access point solo se il cavo Ethernet non è collegato.

![Milesight UG56 868Mhz – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
