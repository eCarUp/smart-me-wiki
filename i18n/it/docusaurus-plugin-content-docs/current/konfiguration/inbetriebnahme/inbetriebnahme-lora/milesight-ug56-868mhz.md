---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Collegamento del gateway al cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Istruzioni di integrazione

![Milesight UG56 868Mhz – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Collegamento del gateway al cloud smart-me

1.  Alimenta il dispositivo

2.  Collegati con il tuo laptop alla rete Wifi del Milesight UG56 (Gateway\_\*\*\*\*\*\*\*), nessuna password necessaria.
    Password Wifi: iotpassword

3.  Apri il browser web e vai all'indirizzo 192.168.1.1

4.  Effettua il login.
    Username: admin
    Password: password

5.  Vai a "Packet Forwarder" e copia l'EUI del dispositivo per la successiva implementazione in smart-me.

6.  Crea una nuova destinazione (Destination) con:
    Tipo: Semtech
    Indirizzo del server: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Salva l'impostazione

8.  Registra il dispositivo con il suo EUI nel Gateway LoRa (LoRa Gateway) di smart-me


Nota: in seguito è possibile accedere di nuovo all'interfaccia web tramite l'access point solo se il cavo Ethernet non è collegato.

![Milesight UG56 868Mhz – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
