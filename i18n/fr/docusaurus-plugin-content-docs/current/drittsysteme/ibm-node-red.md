---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'L''API ouverte de smart-me s''intègre très facilement dans les flux d''IBM Node-Red.'
sidebar_label: 'IBM - Node-RED'
---
<div className="row">
<div className="col col--8">

L'API ouverte de smart-me s'intègre très facilement dans les flux d'IBM Node-Red.
Créez des flux de travail avec des requêtes HTTP et notre API, en profitant de l'ensemble des données et des possibilités de commande.

</div>
<div className="col col--4 text--center">

![IBM Node-RED – Figure 1](/img/drittsysteme-ibm-node-red/01.png)

</div>
</div>

## Lire les valeurs des compteurs - GET

<div className="row">
<div className="col col--5">

Pour utiliser l'API, vous avez besoin des nœuds HTTP-Request de Node-Red.

</div>
<div className="col col--7 text--center">

![IBM Node-RED – Figure 2](/img/drittsysteme-ibm-node-red/02.png)

</div>
</div>

![IBM Node-RED – Figure 3](/img/drittsysteme-ibm-node-red/03.png)

La requête HTTP 

Les requêtes HTTP reposent sur nos commandes API et sont saisies sous forme d'URL.

https://smart-me.com...

- .../api/devices --> Lire tous les appareils du compte (liste)

- .../api/devices/&#123;id&#125; --> Lire les données actuelles d'un compteur donné. L'ID peut être déterminé avec api/devices.


Voici la commande pour demander les informations actuelles d'un compteur donné :

https://smart-me.com/api/devices/&#123;ID du compteur&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- Toutes les commandes API et l'outil de test : [API](/schnittstellen/api) 




Authentification :

Pour l'authentification, vous pouvez utiliser l'authentification de base (Basic) avec le nom d'utilisateur et le mot de passe de votre compte smart-me.

![IBM Node-RED – Figure 4](/img/drittsysteme-ibm-node-red/04.png)

Les nœuds Change vous permettent de réduire le message dans le payload aux données pertinentes, par ex. ActivePower.

msg.payload.ValueName (même orthographe que dans le JSON)

À titre d'essai, ici avec la valeur de ActivePower  => 3.008

Exemples :

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – Figure 5](/img/drittsysteme-ibm-node-red/05.png)

## Commuter les E/S - POST

![IBM Node-RED – Figure 6](/img/drittsysteme-ibm-node-red/06.png)

Le nœud HTTP-Request permet de commander nos sorties. Pour cela, un code JSON doit être envoyé via un nœud HTTP-Request.

La commande POST correspondante est la commande http://smart-me.com/api/actions.



La commande GET /api/actions/&#123;id&#125; permet de trouver les sorties disponibles pour l'appareil concerné.

Pour le Telstar 80A et le Telstar CT, les codes OBIS des sorties sont toujours les mêmes.

(Notez que seules les sorties numériques définies sur l'appareil sont répertoriées)

```
Output api/actions/{id}:
[
  {
    "Name": "Output 0",			"S0-0 Ausgang"
    "ObisCode": "63000C0101FF",
    "ActionType": 0
  },
  {
    "Name": "Relais",			"S1 Ausgang"
    "ObisCode": "63000C0102FF",
    "ActionType": 0
  }
]
```

Configuration POST avec la commande api/actions

![IBM Node-RED – Figure 7](/img/drittsysteme-ibm-node-red/07.png)

Structure de commande JSON pour la commande POST api/actions dans le nœud Inject : commuter le relais S1 de 0 (OFF) à 1 (ON).

&#123;

  "DeviceID": "string",

  "Actions": \[

     &#123;

      "ObisCode": "string",

       "Value": 0 

    &#125;

   \]

&#125;




![IBM Node-RED – Figure 8](/img/drittsysteme-ibm-node-red/08.png)

## Support pour Node-RED

Pour le traitement ultérieur des données dans Node-Red, informez-vous sur le site web et dans la communauté Node-RED.

[https://nodered.org/](https://nodered.org/) 

Pour des informations détaillées sur les commandes : [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
