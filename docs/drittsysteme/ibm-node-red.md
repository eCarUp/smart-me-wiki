---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'Die offene API-Schnittstelle von smart-me lässt sich sehr einfach in Abläufe in IBM''s Node-Red implementieren.'
sidebar_label: 'IBM - Node-RED'
---
Die offene API-Schnittstelle von smart-me lässt sich sehr einfach in Abläufe in IBM's Node-Red implementieren.
Erschaffe Arbeitsabläufe mittels HTTP-Requests und unserer API mit dem vollen Spektrum an Daten und Kontrolle.

![IBM Node-RED – Abbildung 1](/img/drittsysteme-ibm-node-red/01.png)

## Werte von Metern auslesen - GET

Um die API nutzen zu können, benötigst du die HTTP-Request-Bausteine aus Node-Red.

![IBM Node-RED – Abbildung 2](/img/drittsysteme-ibm-node-red/02.png)

![IBM Node-RED – Abbildung 3](/img/drittsysteme-ibm-node-red/03.png)

Die HTTP-Request 

Die HTTP-Requests basieren auf unseren API-Befehlen und werden als URL eingesetzt.

https://smart-me.com...

- .../api/devices --> Alle Geräte im Account auslesen (Liste)

- .../api/devices/&#123;id&#125; --> Aktuelle Daten eines bestimmten Zählers auslesen, die ID kann mittels api/devices in Erfahrung gebracht werden.


Hier der Befehl zur Anfrage aktueller Informationen eines bestimmten Zählers:

https://smart-me.com/api/devices/&#123;Zähler-ID&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- Alle API Befehle und Testtool: [API](/schnittstellen/api) 




Authentifizierung:

Für die Authentifizierung kann die Basic-Authentifizierung, mit Benutzername und Passwort deines smart-me Accounts, verwendet werden.

![IBM Node-RED – Abbildung 4](/img/drittsysteme-ibm-node-red/04.png)

Mit den Change-Nodes kannst du die Nachricht in der Payload kürzen auf die relevanten Daten wie z.B. ActivePower.

msg.payload.ValueName (gleiche Schreibweise wie im JSON)

Als Versuch hier mit dem Wert von ActivePower  => 3.008

Beispiele:

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – Abbildung 5](/img/drittsysteme-ibm-node-red/05.png)

## I/O Schalten - POST

![IBM Node-RED – Abbildung 6](/img/drittsysteme-ibm-node-red/06.png)

Mit dem HTTP-Request Node können unsere Ausgänge angesteuert werden. Dazu muss ein JSON Code über einen HTTP-Request Node gesendet werden.

Der dazugehörige POST Befehl ist der Befehl http://smart-me.com/api/actions Befehl.



Über den GET-Befehl /api/actions/&#123;id&#125; können die möglichen Ausgänge für das jeweilige Gerät gefunden werden.

Für den Telstar 80A und CT sind die OBIS-Codes der Ausgänge immer die Selben.

(Beachte, dass nur die geräteseitig definierten digitalen Ausgänge  aufgeführt werden)

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

Konfiguration POST mit api/actions-Befehl

![IBM Node-RED – Abbildung 7](/img/drittsysteme-ibm-node-red/07.png)

JSON-Befehlsstruktur für den POST-Befehl api/actions im Inject-Node S1- Relais schalten von 0 (OFF) zu 1 (ON).

&#123;

  "DeviceID": "string",

  "Actions": \[

     &#123;

      "ObisCode": "string",

       "Value": 0 

    &#125;

   \]

&#125;




![IBM Node-RED – Abbildung 8](/img/drittsysteme-ibm-node-red/08.png)

## Support zu Node-RED

Für die Weiterverarbeitung der Daten in Node-Red informiere dich über die Node-RED Website und Community.

[https://nodered.org/](https://nodered.org/) 

Für detaillierte Informationen zu den Befehlen: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
