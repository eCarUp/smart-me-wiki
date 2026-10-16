---
title: 'whatwatt'
slug: '/drittsysteme/whatwatt'
description: 'Le module whatwatt est un petit module matériel destiné à la lecture des compteurs d''énergie utilisés par le fournisseur d''électricité.'
sidebar_label: 'whatwatt'
---

<div className="row">
<div className="col col--8">

Le module whatwatt est un petit module matériel destiné à la lecture des compteurs d'énergie utilisés par le fournisseur d'électricité.
Il transmet les relevés du compteur pertinents, les courbes de charge et les valeurs instantanées de la puissance.

Le module transmet ses données directement à notre cloud via une interface API.



Prérequis :
- Module matériel
- Licence « Cloud2Cloud » par module
- Carte SD interne par module

Applications :

- Décompte de RCP virtuels (vRCP)
- Capteur de mesure pour la commande de produits tiers via Modbus TCP, MQTT ou API
- Compatible avec le smart-me Nimbus 100A pour la lecture locale via Modbus TCP

</div>
<div className="col col--4 text--center">

![whatwatt – Illustration 1](/img/drittsysteme-whatwatt/01.png)

</div>
</div>


<Video src="7-VJBJNCnZY" title="Vidéo YouTube, enregistrement du webinaire whatwatt x smart-me" />

## Réglages côté matériel :
<div className="row">
<div className="col col--8">

L'heure transmise doit être réglée sur l'heure NTP pour chaque module.

1.  Ouvrez votre application whatwatt
2.  Accédez à l'interface web (navigateur)
3.  Cliquez sur Meter
4.  Faites défiler vers le bas jusqu'à Time Handling
5.  Réglez Time Handling sur "Use Networktime" dans Reports

</div>
<div className="col col--4 text--center">

![whatwatt – Illustration 2](/img/drittsysteme-whatwatt/02.jpg)

![whatwatt – Illustration 3](/img/drittsysteme-whatwatt/03.jpg)

</div>
</div>

## Guide d'intégration :

<Embed src="https://drive.google.com/file/d/1J5iwfbUOJA5ZBVfDcz7xM2ouiSC38hOw/preview" aspect="0.721" title="Drive, whatwatt_Go_smart-me_Integration_v1.0.pdf" />

![whatwatt – Illustration 4](/img/drittsysteme-whatwatt/04.png)

![whatwatt – Illustration 5](/img/drittsysteme-whatwatt/05.png)

Compatibilité avec les produits tiers :

[Vérifier la compatibilité](https://whatwatt.ch/de/compatibility)

Contact :

[www.whatwatt.ch](http://www.whatwatt.ch)
