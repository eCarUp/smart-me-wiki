---
title: 'IBM Node-RED'
slug: '/drittsysteme/ibm-node-red'
description: 'L''interfaccia API aperta di smart-me si integra molto facilmente nei flussi di IBM Node-Red.'
sidebar_label: 'IBM - Node-RED'
---
L'interfaccia API aperta di smart-me si integra molto facilmente nei flussi di IBM Node-Red.
Crei flussi di lavoro tramite richieste HTTP e la nostra API, con l'intera gamma di dati e funzioni di controllo.

![IBM Node-RED – Figura 1](/img/drittsysteme-ibm-node-red/01.png)

## Leggere i valori dei contatori - GET

Per poter utilizzare l'API sono necessari i blocchi HTTP-Request di Node-Red.

![IBM Node-RED – Figura 2](/img/drittsysteme-ibm-node-red/02.png)

![IBM Node-RED – Figura 3](/img/drittsysteme-ibm-node-red/03.png)

La richiesta HTTP 

Le richieste HTTP si basano sui nostri comandi API e vengono inserite come URL.

https://smart-me.com...

- .../api/devices --> Leggere tutti i dispositivi dell'account (elenco)

- .../api/devices/&#123;id&#125; --> Leggere i dati attuali di un determinato contatore; l'ID può essere ricavato tramite api/devices.


Ecco il comando per richiedere le informazioni attuali di un determinato contatore:

https://smart-me.com/api/devices/&#123;ID-contatore&#125;
\--> https://smart-me.com/api/devices/32b30ab1-3ac5-4...

- Tutti i comandi API e lo strumento di test: [API](/schnittstellen/api) 




Autenticazione:

Per l'autenticazione è possibile utilizzare la Basic Authentication con il nome utente e la password del Suo account smart-me.

![IBM Node-RED – Figura 4](/img/drittsysteme-ibm-node-red/04.png)

Con i Change-Node può ridurre il messaggio nel payload ai dati rilevanti, ad esempio ActivePower.

msg.payload.ValueName (stessa grafia del JSON)

Come prova, qui con il valore di ActivePower  => 3.008

Esempi:

- ActivePower

- CounterReading

- CurrentL1


![IBM Node-RED – Figura 5](/img/drittsysteme-ibm-node-red/05.png)

## Commutare I/O - POST

![IBM Node-RED – Figura 6](/img/drittsysteme-ibm-node-red/06.png)

Con il nodo HTTP-Request è possibile comandare le nostre uscite. A tale scopo occorre inviare un codice JSON tramite un nodo HTTP-Request.

Il relativo comando POST è il comando http://smart-me.com/api/actions.



Tramite il comando GET /api/actions/&#123;id&#125; è possibile trovare le uscite disponibili per il rispettivo dispositivo.

Per il Telstar 80A e CT i codici OBIS delle uscite sono sempre gli stessi.

(Tenga presente che vengono elencate solo le uscite digitali definite sul dispositivo)

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

Configurazione POST con il comando api/actions

![IBM Node-RED – Figura 7](/img/drittsysteme-ibm-node-red/07.png)

Struttura del comando JSON per il comando POST api/actions nell'Inject-Node: commutare il relè S1 da 0 (OFF) a 1 (ON).

&#123;

  "DeviceID": "string",

  "Actions": \[

     &#123;

      "ObisCode": "string",

       "Value": 0 

    &#125;

   \]

&#125;




![IBM Node-RED – Figura 8](/img/drittsysteme-ibm-node-red/08.png)

## Supporto per Node-RED

Per l'ulteriore elaborazione dei dati in Node-Red si informi sul sito web e nella community di Node-RED.

[https://nodered.org/](https://nodered.org/) 

Per informazioni dettagliate sui comandi: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put)
