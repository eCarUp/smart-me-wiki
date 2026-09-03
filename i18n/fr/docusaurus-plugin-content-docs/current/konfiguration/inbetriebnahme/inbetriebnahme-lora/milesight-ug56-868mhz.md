---
title: 'Milesight UG56 868Mhz'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz'
description: 'Connexion de la passerelle au cloud smart-me'
sidebar_label: 'Milesight UG56 868Mhz'
---
## Guide d'intégration

![Milesight UG56 868Mhz – Illustration 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/01.png)

## Connexion de la passerelle au cloud smart-me

1.  Mets l'appareil sous tension

2.  Connecte ton ordinateur portable au Wifi du Milesight UG56 (Gateway\_\*\*\*\*\*\*\*), aucun mot de passe nécessaire.
    Mot de passe Wifi : iotpassword

3.  Ouvre ton navigateur web et accède à 192.168.1.1

4.  Connecte-toi.
    Username: admin
    Passwort: password

5.  Navigue vers "Packet Forwarder" et copie l'EUI de l'appareil pour l'implémentation ultérieure dans smart-me.

6.  Crée une nouvelle Destination avec :
    Type : Semtech
    Adresse du serveur : lora-gateway.smart-me.com
    Port Up : 1700
    Port Down : 1700

7.  Enregistre le réglage

8.  Saisis l'appareil avec son EUI dans le LoRa Gateway smart-me


Remarque : revenir ensuite à l'interface web via le point d'accès ne fonctionne que si l'Ethernet n'est pas branché.

![Milesight UG56 868Mhz – Illustration 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/02.png)

![Milesight UG56 868Mhz – Illustration 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/03.png)

![Milesight UG56 868Mhz – Illustration 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-milesight-ug56-868mhz/04.png)
