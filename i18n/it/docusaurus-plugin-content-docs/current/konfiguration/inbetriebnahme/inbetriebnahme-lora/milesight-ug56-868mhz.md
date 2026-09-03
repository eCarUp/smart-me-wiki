---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Collegamento del gateway al cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Istruzioni di integrazione

![Milesight UG56 868Mhz – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Collegamento del gateway al cloud smart-me

1.  Alimenta l'apparecchio

2.  Collega il tuo laptop al Wifi del Milesight UG56 (Gateway\_\*\*\*\*\*\*\*), non è necessaria alcuna password.
    Password Wifi: iotpassword

3.  Apri il browser web e visita 192.168.1.1

4.  Esegui il login.
    Username: admin
    Password: password

5.  Vai su "Packet Forwarder" e copia l'EUI dell'apparecchio per la successiva implementazione in smart-me.

6.  Crea una nuova Destination con:
    Tipo: Semtech
    Indirizzo del server: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Salva l'impostazione

8.  Registra l'apparecchio con il suo EUI nel LoRa Gateway di smart-me


Nota: tornare all'interfaccia web tramite l'access point funziona solo se l'Ethernet non è collegato.

![Milesight UG56 868Mhz – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
