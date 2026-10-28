---
title: 'kerlink Wirnet iFemtocell-evolution'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution'
description: 'Attivazione della modalità Private Network'
sidebar_label: 'kerlink Wirnet iFemtocell-evolution'
---
## Guida all'integrazione

## Attivazione della modalità Private Network

<div className="row">
<div className="col col--7">

1.  Collega il dispositivo al tuo laptop tramite USB-C

2.  Con Putty (SSH) apri il seguente indirizzo IP: 192.168.120.1. 

3.  Accedi con

    user: root

    PW: pdmk-\*Serial\*  (es.: EUI = 7076FFyyzz06001E, allora il Serial è 06001E)

4.  Esegui il seguente comando:

    klk\_apps\_config --activate-cpf --lns-server lora-gateway.smart-me.com --lns-dport 1700 --lns-uport 1700

    Tieni presente che Ins è la forma minuscola di LNS!

</div>
<div className="col col--5 bild--mitte">

![kerlink Wirnet iFemtocell-evolution – Figura 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/01.png)

</div>
</div>

![kerlink Wirnet iFemtocell-evolution – Figura 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/02.png)

![kerlink Wirnet iFemtocell-evolution – Figura 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/03.png)

## Aprire il Remote Webtool

1.  Collega il dispositivo alla rete Ethernet, al WLAN o tramite 4G secondo le istruzioni

2.  Apri il browser del tuo laptop e inserisci il seguente URL:
    [http://klk-fevo-](/)&lt;Serial>/


&lt;Serial> è il segnaposto per le ultime cifre dell'EUI del dispositivo, che si trova sul dispositivo stesso:

Es.: EUI = 7076FFyyzz060001, allora il Serial è 060001


3.  Accedi
    Utente predefinito: admin
    Password predefinita: pwd4admin

4.  Seleziona "Administration"

5.  Imposta il fuso orario corretto per la tua ubicazione


![kerlink Wirnet iFemtocell-evolution – Figura 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/04.png)
