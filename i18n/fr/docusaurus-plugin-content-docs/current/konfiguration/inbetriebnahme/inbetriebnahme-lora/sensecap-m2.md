---
title: 'Sensecap M2'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2'
description: '1. Appuyez sur le bouton (à l''arrière, à côté du port Ethernet) pendant 5s, jusqu''à ce que la LED bleue clignote lentement.'
sidebar_label: 'Sensecap M2'
---
## Instructions d'intégration

![Sensecap M2 – Figure 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/01.png)

1.  Appuyez sur le bouton (à l'arrière, à côté du port Ethernet) pendant 5s, jusqu'à ce que la LED bleue clignote lentement.

2.  La passerelle a maintenant créé un réseau Wi-Fi. Connectez votre ordinateur portable au réseau Wi-Fi "SenseCAP\_xxxxx".
    Le mot de passe Wi-Fi par défaut est 12345678

3.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.168.1 

4.  Connectez-vous :
    Utilisateur par défaut : admin
    Le mot de passe par défaut se trouve au dos de la passerelle

5.  Sélectionnez "LoRa" -> "LoRa Network"

6.  Sélectionnez le mode "Packet Forwarder"

7.  Sélectionnez l'adresse de serveur "lora-gateway.smart-me.com"

8.  Server Port (Up) et Server Port (Down) sont 1700

9.  Cliquez sur "Save & Apply"


![Sensecap M2 – Figure 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/02.png)

<div className="row">
<div className="col col--6">

10\. Vérifiez sous "Status" -> "Overview" que deux coches vertes sont affichées. 

11\. Sur lora.smart-me.com, la passerelle devrait maintenant être affichée comme "en ligne" (online). 

</div>
<div className="col col--6 text--center">

![Sensecap M2 – Figure 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/03.png)

</div>
</div>

![Sensecap M2 – Figure 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-sensecap-m2/04.png)
