---
title: 'whatwatt'
slug: '/drittsysteme/whatwatt'
description: 'Le module whatwatt est un petit module matériel permettant de relever les compteurs d''énergie utilisés par le fournisseur d''électricité.'
sidebar_label: 'whatwatt'
---
Le module whatwatt est un petit module matériel permettant de relever les compteurs d'énergie utilisés par le fournisseur d'électricité.
Il transmet les relevés du compteur pertinents, les courbes de charge et les valeurs de puissance en temps réel.

Le module transmet ses données directement à notre cloud via l'interface API.



Prérequis :

- Module matériel

- Licence « Cloud2Cloud » par module

- Carte SD interne par module




Applications :

- Décompte de RCP virtuel (vRCP)

- Capteur de mesure pour la commande de produits tiers via Modbus TCP, MQTT ou API

- Compatible avec smart-me Nimbus 100A pour la lecture locale via Modbus TCP


![whatwatt – illustration 1](/img/drittsysteme-whatwatt/01.png)

<Video src="7-VJBJNCnZY" title="Vidéo YouTube, enregistrement du webinaire whatwatt x smart-me" />

Réglages côté matériel :

L'heure transmise doit être réglée sur l'heure NTP pour chaque module.

1.  Ouvrez votre app whatwatt

2.  Accédez à l'interface web (navigateur)

3.  Cliquez sur Meter

4.  Faites défiler vers le bas jusqu'à Time Handling

5.  Réglez Time Handling sur « Use Networktime » dans Reports




![whatwatt – illustration 2](/img/drittsysteme-whatwatt/02.jpg)

![whatwatt – illustration 3](/img/drittsysteme-whatwatt/03.jpg)

Guide d'intégration :

<Embed src="https://drive.google.com/file/d/1J5iwfbUOJA5ZBVfDcz7xM2ouiSC38hOw/preview" aspect="0.721" title="Drive, whatwatt_Go_smart-me_Integration_v1.0.pdf" />

whatwatt\_Go\_smart-me\_Integration\_v1.0.pdf

![whatwatt – illustration 4](/img/drittsysteme-whatwatt/04.png)

![whatwatt – illustration 5](/img/drittsysteme-whatwatt/05.png)

Compatibilité avec des produits tiers :

[Vérifier la compatibilité](https://whatwatt.ch/de/compatibility)

Contact :

[www.whatwatt.ch](http://www.whatwatt.ch)
