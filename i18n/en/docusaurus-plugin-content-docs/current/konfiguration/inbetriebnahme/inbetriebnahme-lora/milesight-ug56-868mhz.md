---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Connecting the gateway to the smart-me Cloud'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Integration guide

![Milesight UG56 868Mhz – Figure 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Connecting the gateway to the smart-me Cloud

1.  Connect the device to power

2.  Connect your laptop to the Wifi of the Milesight UG56 (Gateway\_\*\*\*\*\*\*\*), no password required.
    Wifi password: iotpassword

3.  Open your web browser and go to 192.168.1.1

4.  Log in.
    Username: admin
    Password: password

5.  Navigate to "Packet Forwarder" and copy the device's EUI for the later implementation in smart-me.

6.  Create a new destination with:
    Type: Semtech
    Server address: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Save the setting

8.  Register the device with its EUI in the smart-me LoRa gateway


Note: Getting back to the web interface via the access point afterwards only works if the Ethernet cable is not plugged in.

![Milesight UG56 868Mhz – Figure 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figure 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figure 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
