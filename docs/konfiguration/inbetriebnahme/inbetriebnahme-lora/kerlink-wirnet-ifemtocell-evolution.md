---
title: 'kerlink Wirnet iFemtocell-evolution'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution'
description: 'Aktivieren des Private Network Modus'
sidebar_label: 'kerlink Wirnet iFemtocell-evolution'
---
## Integrationsanleitung

## Aktivieren des Private Network Modus

1.  Verbinde das Gerät via USB-C mit deinem Laptop

2.  Rufe mit Putty (SSH) folgende IP Adresse auf 192.168.120.1. 

3.  Loge dich ein mit
    user: root
    PW: pdmk-\*Serial\*  (Bsp: EUI = 7076FFyyzz06001E, dann ist die Serial = 06001E)

4.  Führe folgenden Befehl aus:
    klk\_apps\_config --activate-cpf --lns-server lora-gateway.smart-me.com --lns-dport 1700 --lns-uport 1700
    Beachte das Ins die kleine form von LNS ist!


![kerlink Wirnet iFemtocell-evolution – Abbildung 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/01.png)

![kerlink Wirnet iFemtocell-evolution – Abbildung 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/02.png)

![kerlink Wirnet iFemtocell-evolution – Abbildung 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/03.png)

## Remote Webtool öffnen

1.  Verbinde das Gerät gemäss Anleitung mit dem Ethernet, WLAN oder per 4G

2.  Öffne den Browser deines Laptops und gib folgende URL ein:
    [http://klk-fevo-](/)&lt;Serial>/


&lt;Serial> ist Platzhalter für die letzten Digits der Geräte EUI die auf dem Gerät zu finden ist:

Bsp: EUI = 7076FFyyzz060001, dann ist die Serial = 060001


3.  Loge dich ein
    Default User: admin
    Default Passwort: pwd4admin

4.  Wähle "Administration"

5.  Setze die Korrekte Zeitzone für deinen Standort


![kerlink Wirnet iFemtocell-evolution – Abbildung 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/04.png)
