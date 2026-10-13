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

2.  Use your laptop to connect to the Wi-Fi of the Milesight UG56 (Gateway\_\*\*\*\*\*\*\*). No password required.
    Wi-Fi password: iotpassword

3.  Open your web browser and go to 192.168.1.1

4.  Log in.
    Username: admin
    Password: password

5.  Navigate to "Packet Forwarder" and copy the EUI of the device for the later setup in smart-me.

6.  Create a new destination with:
    Type: Semtech
    Server address: lora-gateway.smart-me.com
    Port Up: 1700
    Port Down: 1700

7.  Save the settings

8.  Register the device with its EUI in the smart-me LoRa Gateway


Note: Afterwards, you can only access the web interface via the access point again if the Ethernet cable is not plugged in.

![Milesight UG56 868Mhz – Figure 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Figure 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Figure 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
