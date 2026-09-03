---
title: 'kerlink Wirnet iFemtocell-evolution'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution'
description: 'Activating private network mode'
sidebar_label: 'kerlink Wirnet iFemtocell-evolution'
---
## Integration guide

## Activating private network mode

1.  Connect the device to your laptop via USB-C

2.  Use Putty (SSH) to connect to the following IP address 192.168.120.1. 

3.  Log in with
    user: root
    PW: pdmk-\*Serial\*  (e.g.: EUI = 7076FFyyzz06001E, then the Serial = 06001E)

4.  Run the following command:
    klk\_apps\_config --activate-cpf --lns-server lora-gateway.smart-me.com --lns-dport 1700 --lns-uport 1700
    Note that lns is the lower-case form of LNS!


![kerlink Wirnet iFemtocell-evolution – Figure 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/01.png)

![kerlink Wirnet iFemtocell-evolution – Figure 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/02.png)

![kerlink Wirnet iFemtocell-evolution – Figure 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/03.png)

## Opening the remote web tool

1.  Connect the device to Ethernet, WLAN or via 4G as described in the instructions

2.  Open the browser on your laptop and enter the following URL:
    [http://klk-fevo-](/)&lt;Serial>/


&lt;Serial> is a placeholder for the last digits of the device EUI, which can be found on the device:

e.g.: EUI = 7076FFyyzz060001, then the Serial = 060001


3.  Log in
    Default user: admin
    Default password: pwd4admin

4.  Select "Administration"

5.  Set the correct time zone for your location


![kerlink Wirnet iFemtocell-evolution – Figure 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/04.png)
