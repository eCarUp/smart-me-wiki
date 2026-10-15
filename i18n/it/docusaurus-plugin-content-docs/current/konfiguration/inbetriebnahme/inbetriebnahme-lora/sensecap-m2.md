---
title: 'Sensecap M2'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2'
description: '1. Premi il tasto (sul retro, accanto alla porta Ethernet) per 5s, finché il LED blu lampeggia lentamente.'
sidebar_label: 'Sensecap M2'
---
## Istruzioni per l'integrazione

![Sensecap M2 – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/01.png)

1.  Premi il tasto (sul retro, accanto alla porta Ethernet) per 5s, finché il LED blu lampeggia lentamente.

2.  Il gateway ha ora creato una rete WLAN. Collega il tuo notebook alla WLAN "SenseCAP\_xxxxx".
    La password WLAN predefinita è 12345678

3.  Apri il browser del tuo laptop e inserisci il seguente URL nella barra degli indirizzi: 192.168.168.1 

4.  Accedi:
    Utente predefinito: admin
    La password predefinita si trova sul retro del gateway

5.  Seleziona "LoRa" -> "LoRa Network"

6.  Seleziona la modalità "Packet Forwarder"

7.  Seleziona l'indirizzo del server "lora-gateway.smart-me.com"

8.  Server Port (Up) e Server Port (Down) è 1700

9.  Clicca su "Save & Apply"


![Sensecap M2 – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/02.png)

<div className="row">
<div className="col col--6">

10\. In "Status" -> "Overview", verifica che vengano visualizzate due spunte verdi. 

11\. Su lora.smart-me.com il gateway dovrebbe ora essere visualizzato come "online". 

</div>
<div className="col col--6 text--center">

![Sensecap M2 – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/03.png)

</div>
</div>

![Sensecap M2 – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/04.png)
