---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'L''interface API ouverte de smart-me s''intègre très facilement dans les flux d''IBM Node-Red.'
sidebar_label: 'IBM - Node-RED'
---
L'interface API ouverte de smart-me s'intègre très facilement dans les flux d'IBM Node-Red.
Créez des flux de travail à l'aide de requêtes HTTP et de notre API, avec l'ensemble des données et des possibilités de contrôle.

![IBM Node-RED – Illustration 1](/img/drittsysteme-ibm-node-red/01.png)

## Lire les valeurs des compteurs - GET

Pour pouvoir utiliser l'API, vous avez besoin des blocs HTTP-Request de Node-Red.

![IBM Node-RED – Illustration 2](/img/drittsysteme-ibm-node-red/02.png)

![IBM Node-RED – Illustration 3](/img/drittsysteme-ibm-node-red/03.png)

La requête HTTP 

Les requêtes HTTP reposent sur nos commandes API et sont utilisées comme URL.

https://smart-me.com...

- .../api/devices --> Lire tous les appareils du compte (liste)

- .../api/devices/&#123;id&#125; --> Lire les données actuelles d'un compteur donné; l'ID peut être obtenue au moyen de api/devices.


Voici la commande permettant d'interroger les informations actuelles d'un compteur donné :

https://smart-me.com/api/devices/&#123;ID-du-compteur&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- Toutes les commandes API et l'outil de test : [API](/schnittstellen/api) 




Authentification :

Pour l'authentification, vous pouvez utiliser l'authentification Basic, avec le nom d'utilisateur et le mot de passe de votre compte smart-me.

![IBM Node-RED – Illustration 4](/img/drittsysteme-ibm-node-red/04.png)

Avec les nodes Change, vous pouvez réduire le message contenu dans la payload aux données pertinentes, comme par exemple ActivePower.

msg.payload.ValueName (même orthographe que dans le JSON)

Ici à titre d'essai avec la valeur de ActivePower  => 3.008

Exemples :

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – Illustration 5](/img/drittsysteme-ibm-node-red/05.png)

## Commuter les E/S - POST

![IBM Node-RED – Illustration 6](/img/drittsysteme-ibm-node-red/06.png)

Le node HTTP-Request permet de piloter nos sorties. Pour cela, un code JSON doit être envoyé via un node HTTP-Request.

La commande POST correspondante est la commande http://smart-me.com/api/actions.



La commande GET /api/actions/&#123;id&#125; permet de trouver les sorties disponibles pour l'appareil concerné.

Pour le Telstar 80A et le CT, les codes OBIS des sorties sont toujours les mêmes.

(Notez que seules les sorties numériques définies côté appareil sont listées)

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

![IBM Node-RED – Illustration 7](/img/drittsysteme-ibm-node-red/07.png)

Structure de la commande JSON pour la commande POST api/actions dans le node Inject : commuter le relais S1 de 0 (OFF) à 1 (ON).

&#123;

  "DeviceID": "string",

  "Actions": \[

     &#123;

      "ObisCode": "string",

       "Value": 0 

    &#125;

   \]

&#125;




![IBM Node-RED – Illustration 8](/img/drittsysteme-ibm-node-red/08.png)

## Support pour Node-RED

Pour le traitement ultérieur des données dans Node-Red, informez-vous sur le site web et la communauté Node-RED.

[https://nodered.org/](https://nodered.org/) 

Pour des informations détaillées sur les commandes : [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
