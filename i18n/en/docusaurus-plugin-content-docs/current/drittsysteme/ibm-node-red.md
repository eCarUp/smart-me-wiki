---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'The open API from smart-me can be used for flows in Node-RED relatively easy.'
sidebar_label: 'IBM Node-RED'
---
The open API from smart-me can be used for flows in Node-RED relatively easy.
Use the API to create flows in Node-RED and get data from the meters or controll the outputs of them.

![IBM Node-RED – figure 1](/img/_en/third-party-systems-ibm-node-red/01.png)

## GET values from the meters

For requesting data from one of our meter points you can use the HTTP\_Request Nodes in Node-RED.

![IBM Node-RED – figure 2](/img/_en/third-party-systems-ibm-node-red/02.png)

![IBM Node-RED – figure 3](/img/_en/third-party-systems-ibm-node-red/03.png)

The HTTP-Request 

The HTTP-Requests are based on the code of the API and are set as URL.

https://smart-me.com...

- .../api/devices --> GET all devices in the account (list)

- .../api/devices/&#123;id&#125; --> request actual data of one specific meter via the ID of the meter which you can read over api/devices


Below is the specific API call for requesting data of a specific meter:

https://smart-me.com/api/devices/&#123;meter\-ID&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- All API calls and test tool: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) 




Authentification:

For the athentification "basic" can be used by using username / email and password of the account.

![IBM Node-RED – figure 4](/img/_en/third-party-systems-ibm-node-red/04.png)

With the change-nodes you can shorten the data, for example that only the data of ActvePower is read.

msg.payload.ValueName (same as written in the JSON data)

Here as a trial with the value ActivePower => 3.008

e.g:

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – figure 5](/img/_en/third-party-systems-ibm-node-red/05.png)

## POST - switch Outputs of a device

With  the HTTP-Request node you can also switch the outputs on our meter devices. For doing this you need to transmit a JSON Code over an HTTP-request node.

The used POST method is the call http://smart-me.com/api/actions



Over the call GET /api/actions/&#123;id&#125; you can get the available outputs of the specific device.

For the Telstar 80A and CT the OBIS-Codes of the outputs are allways the same.

(please be ware that the outputs must be activated as digital outputs on the device to be available)

```
Output api/actions/{id}:
[
  {
    "Name": "Output 0",			"S0-0 output"
    "ObisCode": "63000C0101FF",
    "ActionType": 0
  },
  {
    "Name": "Relais",			"S1 output"
    "ObisCode": "63000C0102FF",
    "ActionType": 0
  }
]
```

POST with api/actions call

![IBM Node-RED – figure 6](/img/_en/third-party-systems-ibm-node-red/06.png)

JSON structure for POST call api/actions in the inject-node for switching S1-relay from 0 (off) to 1 (on)

&#123;

  "DeviceID": "string",

  "Actions": \[

     &#123;

      "ObisCode": "string",

       "Value": 0 

    &#125;

   \]

&#125;

![IBM Node-RED – figure 7](/img/_en/third-party-systems-ibm-node-red/07.png)

## Support to Node-RED

For information how to go further in using the data in Node-RED please refer to the Node-RED website and their community.

[https://nodered.org/](https://nodered.org/) 

For further detailed information about our API: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
