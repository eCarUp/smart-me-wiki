---
title: 'API'
slug: '/schnittstellen/api'
description: 'Les fonctions de base de l''API sont disponibles dans le modèle Basic pour une utilisation non commerciale.'
sidebar_label: 'API'
---
### Conditions requises

Les fonctions de base de l'API sont disponibles dans le modèle Basic pour une utilisation non commerciale.
Pour une utilisation commerciale et une limite de débit plus élevée, la licence Professional est nécessaire.

## Description de l'API

L'interface API permet un accès simple et sécurisé aux données des appareils smart-me et de la plateforme. Cette interface permet de récupérer en temps réel les données de consommation, l'état des appareils, les valeurs de mesure et d'autres informations, et de les intégrer dans des systèmes externes.

Tous les appels API sont documentés sur la page suivante : [smart-me API](https://api.smart-me.com/swagger/index.html)

### Codes Obis

Les codes Obis sont des identifiants normalisés pour les valeurs de mesure des compteurs d'énergie. Chaque code Obis décrit de manière univoque quelle valeur est mesurée (p. ex. consommation électrique actuelle, relevé du compteur, tension par phase).

[Codes Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Conseil de décodage : sur ce [site web](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem), tu peux consulter la systématique du codage. Si tu y cliques sur un fluide, tu vois à quoi correspond chacun des chiffres du code. 

### DeviceID

La DeviceID est une affectation unique à un point de mesure, indépendante du nom.
Elle est indiquée aussi bien dans l'API que dans la [santé du système](/stoerungsbehebung/systemgesundheit) (fonction Professional)

![API – Illustration 1](/img/schnittstellen-api/01.png)

## Authentification

### Basic Auth (non recommandé / obsolète)

Actuellement, Basic Auth est possible comme méthode d'authentification. Cette option sera toutefois supprimée à moyen terme en raison d'un manque de sécurité. Les API Keys constituent une alternative.
Le client secret correspond à username:password encodé en Base64.

Chaque appel de l'API doit contenir l'authentification dans l'en-tête HTTP : Authorization: Basic &lt;client secret>

Exemple :
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: Basic d2VyX2Rhc19sZXNlbl9rYW5uOmhhdF96dXZpZWxfemVpdA=="

### API Keys (recommandé)

Les API Keys permettent une authentification similaire à Basic Auth pour un accès simple à un compte. Une clé est créée dans le portail smart-me et se voit attribuer certaines autorisations (Claims (voir ci-dessous)). La clé peut ensuite être ajoutée dans l'en-tête HTTP, de la même manière que le secret Basic Auth. 

Chaque appel de l'API doit contenir l'authentification dans l'en-tête HTTP : Authorization: ApiKey &lt;api key>

Exemple :
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: ApiKey MTRH5eUjFXV8U4i1viZF2jHNoUNsnDTx"

Les clés peuvent être créées dans le portail web sous API, Api Keys :

![API – Illustration 2](/img/schnittstellen-api/02.png)

![API – Illustration 3](/img/schnittstellen-api/03.png)

### Claims

Les ApiKeys comme oAuth 2.0 prennent en charge les Claims afin de ne libérer que des autorisations limitées.

Vous trouverez ici une liste de la correspondance entre les endpoints et les Claims : 

[](https://drive.google.com/open?id=1b2bYdjBi4iCf7fUxpEPO9e8DNuhtEvA4_wIDKAJsiq0 "Open Spreadsheet, Claims in new window")

<Video src="" title="Video" />

Claims

## OAuth 2.0 (recommandé)

smart-me prend en charge le framework d'autorisation OAuth 2.0. Des applications externes peuvent demander l'accès à un compte sans connaître les données de connexion. Tu trouveras d'autres informations plus bas.

### Informations OAuth

smart-me prend en charge le framework d'autorisation OAuth 2.0. Des applications externes peuvent demander l'accès à un compte sans connaître les données de connexion.

### Configuration d'OAuth dans le portail smart-me

L'utilisation d'oAuth requiert un compte avec le [modèle de licence](/planung/cloud-lizenzen) professional. Si tu n'as pas encore de compte avec le modèle de licence Professional, tu dois acquérir 1 licence.

- [Connexion au portail smart-me](https://www.smart-me.com/Login.aspx)

- À gauche, sur API


![API – Illustration 4](/img/schnittstellen-api/04.png)

Ajouter des applications oAuth

- Confidentielle (limitée à 3 Client ID)

    - Un Client ID et un Client secret sont générés

    - Pour les applications confidentielles qui peuvent conserver le mot de passe (Secret) en toute sécurité.

    - Nous recommandons l'utilisation de l'« Authorization Code Flow avec PKCE » et du « Device Code Flow ».

- Publique (limitée à 3 Client ID)

    - Un Client ID est généré

    - Pour les applications publiques qui ne peuvent pas garder le Secret confidentiel, p. ex. les applications web ou mobiles.

    - Nous recommandons l'utilisation de l'« Authorization Code Flow avec PKCE » et du « Device Code Flow »

- Appareil (limitée à 50 Client ID)

    - Un Client ID et un Client secret sont générés

    - Peut être utilisée en remplacement de Basic Authentication dans des appareils embarqués qui ne disposent pas d'interface graphique.

    - Prend uniquement en charge l'OAuth Flow « client credentials ».


Informations nécessaires :

- -   Nom

    - Redirect Urls

    - Autorisations nécessaires 


![API – Illustration 5](/img/schnittstellen-api/05.png)

### Grants & Endpoints

L'implémentation d'OAuth n'est pas décrite sur notre wiki. Tu trouves sur cette page les informations nécessaires pour implémenter oAuth : [https://oauth.net/2/](https://oauth.net/2/) 

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

## API temps réel (Webhook)

L'API temps réel smart-me (Webhooks) te permet de t'abonner aux nouvelles données d'un appareil. Tu peux t'inscrire pour un seul appareil ou pour tous les appareils d'un utilisateur. Lorsqu'un appareil envoie de nouvelles données au cloud, un webhook transmet ces données sous forme de requête POST à une URL nouvellement configurée. Tu trouveras d'autres informations [ici](https://www.smart-me.com/Description/api/realtimeapi.aspx).

Fichier proto

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

Fichier proto sans BCL

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

Pour pouvoir utiliser notre API - Goldpartner, tu dois disposer du modèle de licence smart-me Goldpartner. D'autres informations sur ce modèle de licence peuvent être demandées auprès du service commercial.

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


## Exemples

## Exemples d'API

### REST API Samples

Cela te permet de récupérer les jeux de données que nous mettons à disposition. [https://api.smart-me.com/swagger/index.html](https://api.smart-me.com/swagger/index.html) 

Python (piloter les entrées et sorties)

![API – Illustration 6](/img/schnittstellen-api/06.png)

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







HTML / Javascript (afficher tous les appareils avec le relevé du compteur et la dernière connexion)

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

Python (exemples d'autorisation)

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





Bibliothèque client API pour .Net

Pour intégrer les fonctionnalités de l'API smart-me dans votre application .Net, vous pouvez utiliser [cette bibliothèque](https://github.com/eCarUp/smartme-api-client-library-dotnet). Elle envoie des requêtes HTTP à l'API REST smart-me. Tous les corps de requête et de réponse HTTP sont mappés sur des classes .Net.

## Exemples d'API temps réel (Webhook)

L'API temps réel smart-me envoie les données sérialisées avec google protobuffer

Fichier proto

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

Fichier proto sans BCL

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

### Exemple de parsing

Données d'exemple

0A5A0A1209E9FCD03B8E9F834111B3D10C1622A22CA1120B08C0C9EAD3A98FE93710051A110A060100010800FF11333333331FAE3C411A110A060100020800FF1100000000000000001A110A060100010700FF11713D0AD7A3303840

![API – Illustration 7](/img/schnittstellen-api/07.png)

Device ID (UUID / GUID)

UUID Data: 0xE9, 0xFC, 0xD0, 0x3B, 0x8E, 0x9F, 0x83, 0x41, 0xB3, 0xD1, 0x0C, 0x16, 0x22, 0xA2, 0x2C, 0xA1

GUID:  3bd0fce9-9f8e-4183-b3d1-0c1622a22ca1

![API – Illustration 8](/img/schnittstellen-api/08.png)

Datetime (UTC)

Le champ 1 contient l'offset en ticks depuis le 01.01.1970

Secondes depuis le 01.01.1970 :  15712284449788512 / 10000000  = 1571228444 (Unix time stamp UTC)

\-> 16.10.2019 12:20:44 (UTC)

![API – Illustration 9](/img/schnittstellen-api/09.png)

Device values 

Le champ 1 contient le code OBIS, le champ 2 contient la valeur.

01-00-01-08-00-FF:  (1-0:1.8.0\*255) : énergie active importation totale : 1879583.2 mWh = 1879.5832 Wh

![API – Illustration 10](/img/schnittstellen-api/10.png)
