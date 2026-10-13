---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'The open smart-me API interface can be implemented very easily in flows in IBM''s Node-Red.'
sidebar_label: 'IBM - Node-RED'
---
The open smart-me API interface can be implemented very easily in flows in IBM's Node-Red.
Create workflows using HTTP requests and our API with the full range of data and control.

![IBM Node-RED – Figure 1](/img/drittsysteme-ibm-node-red/01.png)

## Reading values from meters - GET

To use the API, you need the HTTP request nodes from Node-Red.

![IBM Node-RED – Figure 2](/img/drittsysteme-ibm-node-red/02.png)

![IBM Node-RED – Figure 3](/img/drittsysteme-ibm-node-red/03.png)

The HTTP request 

The HTTP requests are based on our API commands and are entered as a URL.

https://smart-me.com...

- .../api/devices --> Read all devices in the account (list)

- .../api/devices/&#123;id&#125; --> Read the current data of a specific meter; the ID can be found using api/devices.


Here is the command for requesting current information from a specific meter:

https://smart-me.com/api/devices/&#123;Zähler-ID&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- All API commands and test tool: [API](/schnittstellen/api) 




Authentication:

For authentication, you can use basic authentication with the username and password of your smart-me account.

![IBM Node-RED – Figure 4](/img/drittsysteme-ibm-node-red/04.png)

With the change nodes, you can reduce the message in the payload to the relevant data, e.g. ActivePower.

msg.payload.ValueName (same spelling as in the JSON)

As a test, here with the value of ActivePower  => 3.008

Examples:

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – Figure 5](/img/drittsysteme-ibm-node-red/05.png)

## Switching I/O - POST

![IBM Node-RED – Figure 6](/img/drittsysteme-ibm-node-red/06.png)

Our outputs can be controlled with the HTTP request node. To do this, JSON code must be sent via an HTTP request node.

The corresponding POST command is the http://smart-me.com/api/actions command.



The available outputs for the respective device can be found using the GET command /api/actions/&#123;id&#125;.

For the Telstar 80A and CT, the OBIS codes of the outputs are always the same.

(Note that only the digital outputs defined on the device are listed)

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

POST configuration with the api/actions command

![IBM Node-RED – Figure 7](/img/drittsysteme-ibm-node-red/07.png)

JSON command structure for the POST command api/actions in the inject node, switching the S1 relay from 0 (OFF) to 1 (ON).

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

## Node-RED support

For further processing of the data in Node-Red, refer to the Node-RED website and community.

[https://nodered.org/](https://nodered.org/) 

For detailed information on the commands: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
