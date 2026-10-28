---
title: 'Sensecap M2'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2'
description: '1. Prema il tasto (sul retro, accanto alla porta Ethernet) per 5s, finché il LED blu lampeggia lentamente.'
sidebar_label: 'Sensecap M2'
---
## Istruzioni di integrazione

![Sensecap M2 – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/01.png)

1.  Prema il tasto (sul retro, accanto alla porta Ethernet) per 5s, finché il LED blu lampeggia lentamente.

2.  Il gateway ha ora creato una rete Wi-Fi. Colleghi il Suo notebook alla rete Wi-Fi "SenseCAP\_xxxxx".
    La password Wi-Fi predefinita è 12345678

3.  Apra il browser del Suo laptop e inserisca il seguente URL nella barra degli indirizzi: 192.168.168.1 

4.  Effettui l'accesso:
    Utente predefinito: admin
    La password predefinita si trova sul retro del gateway

5.  Selezioni "LoRa" -> "LoRa Network"

6.  Selezioni la modalità "Packet Forwarder"

7.  Selezioni come Server Address "lora-gateway.smart-me.com"

8.  Server Port (Up) e Server Port (Down) sono 1700

9.  Clicchi su "Save & Apply"


![Sensecap M2 – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/02.png)

<div className="row">
<div className="col col--6">

10\. Verifichi in "Status" -> "Overview" che siano visualizzate due spunte verdi. 

11\. Su lora.smart-me.com il gateway dovrebbe ora risultare "online". 

</div>
<div className="col col--6 bild--mitte">

![Sensecap M2 – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/03.png)

</div>
</div>

![Sensecap M2 – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/04.png)
