---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Verbinden des Gateways mit der smart-me Cloud'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Integrationsanleitung

![Milesight UG56 868Mhz – Abbildung 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Verbinden des Gateways mit der smart-me Cloud

1.  Versorge das Gerät mit Strom

2.  Verbinde dich mit deinem Laptop auf das Wifi des Milesight UG56 (Gateway\_\*\*\*\*\*\*\*) kein Passwort nötig.
    Wifi-Passwort: iotpassword

3.  Öffne deinen Webbrowser und besuche 192.168.1.1

4.  Loge dich ein.
    Username: admin
    Passwort: password

5.  Navigiere zu "Packet Forwarder" und Kopiere die EUI des Gerätes für die spätere Implementation in smart-me.

6.  Erstelle eine neue Destination mit:
    Typ: Semtech
    Serveradresse: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Speichere die Einstellung

8.  Erfasse das Gerät mit seiner EUI im smart-me LoRa Gateway


Hinweis: Über den Accesspoint danach wieder auf das Webinterface zu kommen klappt nur wenn das Ethernet nicht angesteckt ist.

![Milesight UG56 868Mhz – Abbildung 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Abbildung 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Abbildung 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
