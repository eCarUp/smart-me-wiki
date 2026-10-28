---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Connecter la passerelle au cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Instructions d'intégration

![Milesight UG56 868Mhz – Illustration 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Connecter la passerelle au cloud smart-me

1.  Mettez l'appareil sous tension

2.  Connectez votre ordinateur portable au Wi-Fi du Milesight UG56 (Gateway\_\*\*\*\*\*\*\*) – aucun mot de passe n'est nécessaire.
    Mot de passe Wi-Fi : iotpassword

3.  Ouvrez votre navigateur web et accédez à 192.168.1.1

4.  Connectez-vous.
    Nom d'utilisateur : admin
    Mot de passe : password

5.  Accédez à « Packet Forwarder » et copiez l'EUI de l'appareil, dont vous aurez besoin plus tard pour l'intégration dans smart-me.

6.  Créez une nouvelle destination avec :
    Type : Semtech
    Adresse du serveur : lora-gateway.smart-me.com
    Port Up : 1700
    Port Down : 1700

7.  Enregistrez le paramètre

8.  Enregistrez l'appareil avec son EUI dans la Passerelle LoRa (LoRa Gateway) de smart-me


Remarque : par la suite, l'accès à l'interface web via le point d'accès ne fonctionne que si le câble Ethernet n'est pas branché.

![Milesight UG56 868Mhz – Illustration 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Illustration 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Illustration 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
