---
title: 'API'
slug: '/schnittstellen/api'
description: 'Le funzioni di base dell''API sono disponibili nel modello Basic per l''uso non commerciale.'
sidebar_label: 'API'
---
### Requisiti

Le funzioni di base dell'API sono disponibili nel modello Basic per l'uso non commerciale.
Per l'uso commerciale e per un rate limit più elevato è necessaria la licenza Professional.

## Descrizione dell'API

L'interfaccia API consente un accesso semplice e sicuro ai dati dei dispositivi smart-me e della piattaforma. Tramite questa interfaccia è possibile consultare in tempo reale i dati di consumo, lo stato dei dispositivi, i valori di misura e ulteriori informazioni e integrarli in sistemi esterni.

Tutte le chiamate API sono documentate sulla pagina seguente: [smart-me API](https://api.smart-me.com/swagger/index.html)

### Codici Obis

I codici Obis sono identificativi standardizzati per i valori di misura nei contatori di energia. Ogni codice Obis descrive in modo univoco quale valore viene misurato (ad es. consumo di corrente attuale, lettura del contatore, tensione per fase).

[Codici Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Suggerimento per la decodifica: su questo [sito web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) puoi consultare la sistematica della codifica. Cliccando lì su un mezzo, vedi che cosa rappresentano le singole cifre del codice. 

### DeviceID

Il DeviceID è un'assegnazione univoca e indipendente dal nome a un punto di misura.
Viene indicato sia nell'API sia nella [Salute del sistema](/stoerungsbehebung/systemgesundheit) (Professional Feature)

![API – Figura 1](/img/schnittstellen-api/01.png)

## Autenticazione

### Basic Auth (non consigliata / obsoleta)

Attualmente è possibile utilizzare Basic Auth come autenticazione. Questa opzione verrà però rimossa a medio termine a causa della scarsa sicurezza. Come alternativa si consigliano le API Keys.
Il client secret è username:password codificato in Base64.

Ogni chiamata dell'API deve contenere l'autenticazione nell'header HTTP: Authorization: Basic &lt;client secret>

Esempio:
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: Basic d2VyX2Rhc19sZXNlbl9rYW5uOmhhdF96dXZpZWxfemVpdA=="

### API Keys (consigliate)

Le API Keys consentono un'autenticazione simile a Basic Auth per un accesso semplice a un account. In questo caso viene creata una key nel portale Smart-me e vengono assegnate determinate autorizzazioni (Claims (vedi sotto)). La key può poi essere aggiunta nell'header HTTP in modo analogo al secret di Basic Auth. 

Ogni chiamata dell'API deve contenere l'autenticazione nell'header HTTP: Authorization: ApiKey &lt;api key>

Esempio:
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: ApiKey MTRH5eUjFXV8U4i1viZF2jHNoUNsnDTx"

Le key possono essere create nel portale web sotto API, Api Keys:

![API – Figura 2](/img/schnittstellen-api/02.png)

![API – Figura 3](/img/schnittstellen-api/03.png)

### Claims

Sia le ApiKeys sia oAuth 2.0 supportano i Claims per rilasciare solo autorizzazioni limitate.

Un elenco del mapping degli endpoint sui Claims si trova qui: 

[](https://drive.google.com/open?id=1b2bYdjBi4iCf7fUxpEPO9e8DNuhtEvA4_wIDKAJsiq0 "Open Spreadsheet, Claims in new window")

<Video src="" title="Video" />

Claims

## OAuth 2.0 (consigliato)

smart-me supporta il framework di autorizzazione OAuth 2.0. Le applicazioni esterne possono richiedere l'accesso a un account senza conoscere i dati di accesso. Ulteriori informazioni si trovano più sotto.

### Informazioni su OAuth

smart-me supporta il framework di autorizzazione OAuth 2.0. Le applicazioni esterne possono richiedere l'accesso a un account senza conoscere i dati di accesso.

### Configurazione di OAuth nel portale smart-me

Il presupposto per l'utilizzo di oAuth è un account con il [modello di licenza](/planung/cloud-lizenzen) professional. Se non disponi ancora di un account con il modello di licenza Professional, devi acquistare 1 licenza.

- [Login nel portale smart-me](https://www.smart-me.com/Login.aspx)

- A sinistra su API


![API – Figura 4](/img/schnittstellen-api/04.png)

Aggiungere applicazioni oAuth

- Confidenziale (limitato a 3 Client ID)

    - Vengono generati Client ID e Client secret

    - Per applicazioni confidenziali in grado di custodire in modo sicuro la password (Secret).

    - Consigliamo l'utilizzo dell'"Authorization Code Flow con PKCE" e del "Device Code Flow".

- Pubblica (limitato a 3 Client ID)

    - Viene generato il Client ID

    - Per applicazioni pubbliche che non possono mantenere segreto il Secret, ad es. app web o mobile.

    - Consigliamo l'utilizzo dell'"Authorization Code Flow con PKCE" e del "Device Code Flow"

- Dispositivo (limitato a 50 Client ID)

    - Vengono generati Client ID e Client secret

    - Può essere utilizzato in sostituzione della Basic Authentication in dispositivi embedded che non hanno un'interfaccia grafica.

    - Supporta solo l'OAuth Flow "client credentials".


Informazioni necessarie:

- -   Nome

    - Redirect Urls

    - Autorizzazioni necessarie 


![API – Figura 5](/img/schnittstellen-api/05.png)

### Grants & Endpoints

L'implementazione di OAuth non è descritta nel nostro wiki. Su questa pagina trovi le informazioni necessarie per implementare oAuth: [https://oauth.net/2/](https://oauth.net/2/) 

Supported Grants (Flows) for oAuth Confidential and Public Applications:

\- Authorization Code without PKCE (deprecated)

\- Authorization Code with PKCE

\- Implicit Flow (deprecated)

\- Device Code

\- Refresh Token

Supported Grants (Flows) for oAuth Device (Client Credentials) Applications:

\- Client Credentials

smart-me Endpoints

\- Authorization: /api/oauth/authorize/

\- Token: /api/oauth/token/

\- Device Code: /api/oauth/device

## API in tempo reale (Webhook)

L'API in tempo reale di smart-me (Webhooks) ti consente di sottoscrivere i nuovi dati di un dispositivo. Puoi registrarti per un singolo dispositivo o per tutti i dispositivi di un utente. Quando un dispositivo invia nuovi dati al cloud, un webhook invia questi dati come richiesta POST a un URL configurato appositamente. Ulteriori informazioni si trovano [qui](https://www.smart-me.com/Description/api/realtimeapi.aspx).

File proto

```
syntax = "proto3";
import "google/protobuf/timestamp.proto";
import "bcl.proto";

message DeviceDataArray {
  repeated DeviceData DeviceDataItems = 1;
}

message DeviceData {
  Guid DeviceId = 1;
  .bcl.DateTime DateTime = 2;
  repeated DeviceValue DeviceValues = 3;
}

message DeviceValue {
  bytes Obis = 1;
  double Value = 2;
}
```

File proto senza BCL

```
syntax = "proto2";
package com.company;

message TimeSpan {
  required sint64 value = 1; // the size of the timespan (in units of the selected scale)
  optional TimeSpanScale scale = 2; // the scale of the timespan [default = DAYS]
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
  TICKS = 5;

    MINMAX = 15; // dubious
  }
}

message DateTime {
  optional sint64 value = 1; // the offset (in units of the selected scale) from 1970/01/01
  optional TimeSpanScale scale = 2; // the scale of the timespan [default = DAYS]
  optional DateTimeKind kind = 3; // the kind of date/time being represented [default = UNSPECIFIED]
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
 TICKS = 5;

    MINMAX = 15; // dubious
  }
  enum DateTimeKind
  {
     // The time represented is not specified as either local time or Coordinated Universal Time (UTC).
     UNSPECIFIED = 0;
     // The time represented is UTC.
     UTC = 1;
     // The time represented is local time.
     LOCAL = 2;
   }
}

message Guid {
  required fixed64 lo = 1; // the first 8 bytes of the guid (note:crazy-endian)
  required fixed64 hi = 2; // the second 8 bytes of the guid (note:crazy-endian)
}

message DeviceData {
   required Guid DeviceId = 1;
   required DateTime DateTime = 2;
   repeated DeviceValue DeviceValues = 3;
}
message DeviceDataArray {
   repeated DeviceData DeviceDataItems = 1;
}
message DeviceValue {
   required bytes Obis = 1;
   required double Value = 2;
}
```

## Goldpartner - API

Per poter utilizzare la nostra API Goldpartner devi disporre del modello di licenza smart-me Goldpartner. Ulteriori informazioni su questo modello di licenza possono essere richieste al reparto vendite.

### Endpoints



Get all devices 

- Gets all devices assigned to the partner

- GET /PartnerAllDevices




Get all devices from one Account

- Gets all devices assigned to one of the users assigned to the partner (Get Id with "Get users" )

- GET /PartnerAllDevices/&#123;id&#125; - only for one device




Get all device informations 

- Gets all information for all devices assigned to the partner user or to a sub-user of the partner

- GET /PartnerAllDeviceInformations

- GET /PartnerAllDeviceInformations/&#123;id&#125; - only for one device




Get fast send device values

- Force a device to send the data every second (if supported). This for about 30s


- GET /partner/fastsenddevicevalues




Get Folder menu 

- Gets the folder menu items for a user of a partner


- GET /partner/foldermenu/&#123;id&#125;




Update folder menu 

- Creates and updates the folder menu items for a user. Attention: All existing configuration (folder, billing, export, ...) is deleted!!

- POST /partner/foldermenu/&#123;id&#125;




Get users

- Get the information about all users of the partner

- GET /partner/user




Update user 

- Updates the email and/or the password of a user. The user must be created by the partner.


- POST /partner/user/&#123;id&#125;




Sign up user 

- Creates a new user and assign it to the partner user

- POST /SignUpPartner




Get values in past multiple 

- Gets multiple values of a device. The device must be installed in an account assigned to your partner account.

- GET /partner/ValuesInPastMultiple/&#123;id&#125;




Get values in past multiple interpolated

- Gets multiple interpolated Values of device

- GET /partner/ValuesInPastMultipleInterpolated/&#123;id&#125;





Get visualization configuration

- Gets the visualization configuration for all folders of a user

- GET /partner/visualizationconfiguration/&#123;id&#125;




Update firmware 

- Update the Firmware (if available) for the given devices

- POST /UpdateFirmwarePartner




PartnerVisualization

- Gets the visualization configuration for all folders of a user

- GET /partner/visualizationconfiguration/&#123;id&#125;


## Esempi

## Esempi di API

### REST API Samples

Con questo puoi consultare qualsiasi set di dati che mettiamo a disposizione. [https://api.smart-me.com/swagger/index.html](https://api.smart-me.com/swagger/index.html) 

Python (comandare ingressi e uscite)

![API – Figura 6](/img/schnittstellen-api/06.png)

```
# deviceID ist die eindeutige ID des Gerät
# "ObisCode": "63000C0101FF" ist der Output 0 (Halbleiter 0.4 Watt)
# "ObisCode": "63000C0102FF" ist der Output 1 (Relais 1500 Watt bei 230 Volt)
# "value": 0 ist aus
# "value": 1 ist ein

import requests
import json

# API Endpoint und Zugangsdaten
url = "https://xxxx:xxxx@api.smart-me.com/actions"

# JSON-Daten, die gesendet werden sollen
data = {
  "deviceID": "20c6ddc0-f582-6bc6-514d-dbf86796798c",
  "actions": [
    {
      "obisCode": "63000C0101FF",
      "value": 1
    }
  ]
}

# Header für die POST-Anfrage
headers = {
    'Content-Type': 'application/json'
}

try:
    # POST-Anfrage senden
    response = requests.post(url, headers=headers, data=json.dumps(data))

    # Überprüfen, ob die Anfrage erfolgreich war
    response.raise_for_status()

    # Die Antwort der API ausgeben
    print("Status Code:", response.status_code)
    print("Antwort vom Server:", response.text)

except requests.exceptions.RequestException as e:
    # Fehlerbehandlung
    print("Ein Fehler ist aufgetreten:", e)
```







HTML / Javascript (visualizzare tutti i dispositivi con lettura del contatore e ultima connessione)

```
<html>
	<style>
	table, th, td {
	  border:1px solid black;
	}
	</style>
	<head>
		<title>smart-me REST API Sample</title>
		<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	</head>
	<body>
		<div>
		  <label for="username">Username:</label>
		  <input type="text" id="username" name="username" />
		</div>
		<div>
		  <label for="pass">Password:</label>
		  <input type="password" id="pass" name="password" minlength="8" required />
		</div>
		<button id="myButton">Start Request</button>
		<h1>Get all devices</h1>
		<ul id="DeviceList">
		</ul>
		<script type="text/javascript">
			function GetAllDevices() {
			var smartmeUserName = document.getElementById("username").value;
			var smartmePassword = document.getElementById("pass").value;
			//var smartmeUserName = "xxx";
			//var smartmePassword = "xxx";
				var targetUrl = "https://api.smart-me.com/Devices/";

				$.ajax({
					url: targetUrl,
					type: "get",
					cache: false,
					headers: {
						"Authorization": "Basic " + btoa(smartmeUserName + ":" + smartmePassword)
					},
					dataType: "json",
					error: function(jqXHR, exception) {
						alert(exception);
					},
					success: function(json) {
					$("#DeviceList").append(("<table>"))
					$("#DeviceList").append(("<tr align=left><th>Serial</th><th>Name</th><th>CounterReading</th><th>CounterReadingUnit</th><th>Last Connection (Zulu Time) </th></tr>"))
						json.forEach(function(element) {
							$("#DeviceList").append(("<tr><td>") + element.Serial + "</td><td>" + element.Name + "</td><td>" + element.CounterReading + "</td><td>" + element.CounterReadingUnit + "</td><td>" + element.ValueDate + "</td></tr>");
						});
					$("#DeviceList").append(("</table>"))
					}
				});
			}
			myButton.onclick = GetAllDevices;
		</script>
	</body>
	<footer>
		<p>DISCLAIMER: This script is provided as-is, without any warranty or guarantee of any kind. The author accepts no liability for any issues, damages, or consequences that may arise from the use of this script. Users are responsible for reviewing and understanding the script before implementation. Additionally, no support or assistance will be provided for the installation, customization, or troubleshooting of this script. Use at your own risk.</p>
		<p>HAFTUNGSAUSSCHLUSS: Dieses Skript wird im Ist-Zustand ohne jegliche Garantie oder Gewährleistung bereitgestellt. Der Autor übernimmt keine Haftung für Probleme, Schäden oder Folgen, die sich aus der Verwendung dieses Skripts ergeben können. Die Benutzer sind dafür verantwortlich, das Skript vor der Implementierung zu überprüfen und zu verstehen. Außerdem wird keine Unterstützung oder Hilfe bei der Installation, Anpassung oder Fehlerbehebung dieses Skripts geleistet. Die Verwendung erfolgt auf eigene Gefahr..</p>
	</footer>
</html>
```

Python (esempi di autorizzazione)

```
import requests
from requests.auth import HTTPBasicAuth

# --- Endpoint ---
endpoint_url = 'https://api.smart-me.com/Devices'

# --- Basic Auth ---
basicAuth_user = 'max.musterman@smart-me.com'
basicAuth_pass = 'supersecretpassword'
basicAuth_response = requests.get(
    endpoint_url,
    auth=HTTPBasicAuth(basicAuth_user, basicAuth_pass)
)
print('Basic Auth:', basicAuth_response.status_code) #Returns 200 if successful

# --- API Key ---
api_key = 'secretapikey1234567890'
apikey_headers = {'Authorization': f'ApiKey {api_key}'}
apikey_response = requests.get(endpoint_url, headers=apikey_headers)
print('API Key:', apikey_response.status_code) #Returns 200 if successful

# --- OAuth 2.0: Get Token with Client ID and Secret ---
token_url = 'https://api.smart-me.com/oauth/token'
client_id = 'client_id_1234567890'
client_secret = 'client_secret_1234567890'
token_data = {
    'grant_type': 'client_credentials',
    'scope': 'device.read'
}
token_response = requests.post(
    token_url,
    data=token_data,
    auth=HTTPBasicAuth(client_id, client_secret)
)

access_token = token_response.json().get('access_token')

# --- OAuth 2.0 Bearer Token ---
oauth_headers = {'Authorization': f'Bearer {access_token}'}
oauth_response = requests.get(endpoint_url, headers=oauth_headers)
print('OAuth:', oauth_response.status_code) #Returns 200 if successful
```





Libreria client API per .Net

Per integrare le funzionalità dell'API smart-me nella vostra applicazione .Net potete utilizzare [questa libreria](https://github.com/eCarUp/smartme-api-client-library-dotnet). Essa invia richieste HTTP alla REST API di smart-me. Tutti i corpi delle richieste e delle risposte HTTP vengono mappati su classi .Net.

## Esempi di API in tempo reale (Webhook)

L'API Realtime di smart-me invia i dati serializzati con google protobuffer

File proto

```
package RealtimeApi.Containers;
import "bcl.proto"; // schema for protobuf-net's handling of core .NET types

message DeviceData {
   required bcl.Guid DeviceId = 1;
   required bcl.DateTime DateTime = 2;
   repeated DeviceValue DeviceValues = 3;
}
message DeviceDataArray {
   repeated DeviceData DeviceDataItems = 1;
}
message DeviceValue {
   required bytes Obis = 1;
   required double Value = 2;
}
```

File proto senza BCL

```
syntax = "proto2";
package com.company;

message TimeSpan {
  required sint64 value = 1; // the size of the timespan (in units of the selected scale)
  optional TimeSpanScale scale = 2; // the scale of the timespan [default = DAYS]
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
  TICKS = 5;

    MINMAX = 15; // dubious
  }
}

message DateTime {
  optional sint64 value = 1; // the offset (in units of the selected scale) from 1970/01/01
  optional TimeSpanScale scale = 2; // the scale of the timespan [default = DAYS]
  optional DateTimeKind kind = 3; // the kind of date/time being represented [default = UNSPECIFIED]
  enum TimeSpanScale {
    DAYS = 0;
    HOURS = 1;
    MINUTES = 2;
    SECONDS = 3;
    MILLISECONDS = 4;
 TICKS = 5;

    MINMAX = 15; // dubious
  }
  enum DateTimeKind
  {
     // The time represented is not specified as either local time or Coordinated Universal Time (UTC).
     UNSPECIFIED = 0;
     // The time represented is UTC.
     UTC = 1;
     // The time represented is local time.
     LOCAL = 2;
   }
}

message Guid {
  required fixed64 lo = 1; // the first 8 bytes of the guid (note:crazy-endian)
  required fixed64 hi = 2; // the second 8 bytes of the guid (note:crazy-endian)
}

message DeviceData {
   required Guid DeviceId = 1;
   required DateTime DateTime = 2;
   repeated DeviceValue DeviceValues = 3;
}
message DeviceDataArray {
   repeated DeviceData DeviceDataItems = 1;
}
message DeviceValue {
   required bytes Obis = 1;
   required double Value = 2;
}
```

### Esempio di parsing

Dati di esempio

0A5A0A1209E9FCD03B8E9F834111B3D10C1622A22CA1120B08C0C9EAD3A98FE93710051A110A060100010800FF11333333331FAE3C411A110A060100020800FF1100000000000000001A110A060100010700FF11713D0AD7A3303840

![API – Figura 7](/img/schnittstellen-api/07.png)

Device ID (UUID / GUID)

UUID Data: 0xE9, 0xFC, 0xD0, 0x3B, 0x8E, 0x9F, 0x83, 0x41, 0xB3, 0xD1, 0x0C, 0x16, 0x22, 0xA2, 0x2C, 0xA1

GUID:  3bd0fce9-9f8e-4183-b3d1-0c1622a22ca1

![API – Figura 8](/img/schnittstellen-api/08.png)

Datetime (UTC)

Il campo 1 contiene l'offset in tick dal 01.01.1970

Secondi dal 01.01.1970:  15712284449788512 / 10000000  = 1571228444 (Unix time stamp UTC)

\-> 16.10.2019 12:20:44 (UTC)

![API – Figura 9](/img/schnittstellen-api/09.png)

Device values 

Il campo 1 contiene il codice OBIS, il campo 2 contiene il valore.

01-00-01-08-00-FF:  (1-0:1.8.0\*255):Importazione totale di energia attiva: 1879583.2 mWh = 1879.5832 Wh

![API – Figura 10](/img/schnittstellen-api/10.png)
