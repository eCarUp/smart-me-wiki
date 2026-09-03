---
title: 'API'
slug: '/schnittstellen/api'
description: 'The basic functions of the API are available in the Basic Model for non-commercial use.'
sidebar_label: 'API'
---
### Requirements

The basic functions of the API are available in the Basic Model for non-commercial use.
For commercial use and higher rate limits, the Professional Licence is required.

## API description

The API interface enables easy and secure access to data from smart-me devices and the platform. This interface allows consumption data, device status, measured values and other information to be retrieved in real time and integrated into external systems.

All API calls are documented on the following page: [smart-me API](https://api.smart-me.com/swagger/index.html)

### Obis Codes

Obis codes are standardised identifiers for measured values in energy meters. Each Obis code clearly describes which value is being measured (e.g. current power consumption, meter reading, voltage per phase).

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

Tip for decoding: You can read about the coding system on this [website](https://www.kbr.de/de/obis-kennzeichen/obis-kennzeichen#obis-kennzeichensystem) (German). If you click on a medium there, you will see what the digits in the code stand for. 

### DeviceID

The DeviceID is a unique, name-independent assignment to a measurement point.
It is specified both in the API and in the [system health](https://doc.smart-me.com/troubleshooting/system-health) (Professional feature).

## Authentication

### Basic Auth (not recommended / obsolete)

Currently, Basic Auth is available as an authentication method. However, this option will be removed in the medium term due to security concerns. API keys are available as an alternative. The client secret is username:password encoded in Base64.

Every API call must contain authentication in the HTTP header: Authorization: Basic &lt;client secret>

Example:
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: Basic aWZfeW91X2Nhbl9yZWFkX3RoaXM6eW91X2hhdmVfdG9vX211Y2hfdGltZQ=="

### API Keys (recommended)

API keys allow authentication similar to Basic Auth for easy access to an account. A key is created in the Smart-me portal and certain permissions (claims (see below)) are granted. The key can then be added to the HTTP header in a similar way to the Basic Auth secret. 

Each API call must contain authentication in the HTTP header: Authorization: ApiKey &lt;api key>

Example:
curl -X "PUT" "https://api.smart-me.com/Devices/6a7fae30-c598-4778-8f1f-a14620550274" -H "accept: \*/\*" -H "Authorization: ApiKey MTRH5eUjFXV8U4i1viZF2jHNoUNsnDTx"

Keys can be created in the web portal under API, API Keys:

![API – figure 1](/img/_en/interfaces-api/01.png)

![API – figure 2](/img/_en/interfaces-api/02.png)

### Claims

Both ApiKeys and oAuth 2.0 support claims to grant only limited permissions.

A list of endpoints for claims mapping can be found here: 

[](https://drive.google.com/open?id=1b2bYdjBi4iCf7fUxpEPO9e8DNuhtEvA4_wIDKAJsiq0 "Open Spreadsheet, Claims in new window")

<Video src="" title="Video" />

Claims

## OAuth 2.0 (recommended)

smart-me supports the authorisation framework OAuth 2.0. External applications can request access to an account without knowing the credentials.

### OAuth information

smart-me supports the OAuth 2.0 authorisation framework. External applications can request access to an account without knowing the login details.

### Setting up OAuth in the smart-me portal

The prerequisite for using oAuth is an account with the professional [licence model](/planung/cloud-lizenzen). If you do not yet have an account with the professional licence model, you must purchase 1 licence.

- [Login to the smart-me portal](https://www.smart-me.com/Login.aspx)

- On the left side, click on API


![API – figure 3](/img/_en/interfaces-api/03.png)

Add oAuth applications

- Confidential (Limited to 3 Client ID)

    - Client ID and Client secret will be created

    - For confidential applications that can store the password (secret) securely.

    - We recommend using ‘Authorisation Code Flow with PKCE’ and ‘Device Code Flow’.

- Public (Limited to 3 Client ID)

    - Client ID is created

    - For public applications that cannot keep the secret confidential, e.g. web or mobile apps.

    - We recommend using ‘Authorisation Code Flow with PKCE’ and ‘Device Code Flow’

- Device (Limited to 50 Client ID)

    - Client ID and Client secret will be created

    - Can be used as a replacement for basic authentication in embedded devices that do not have a graphical interface.

    - Only supports the OAuth flow ‘client credentials’.


Required information

- Name

- Redirect Urls

- Required permissions


![API – figure 4](/img/_en/interfaces-api/04.png)

### Grants & Endpoints

The implementation of OAuth is not described on our wiki. For example, you can find the necessary information to implement oAuth on this page: [https://oauth.net/2/](https://oauth.net/2/) 

Supported Grants (Flows) for oAuth Confidential and Public Applications:

\- Authorization Code

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

## Realtime API (Webhook)

The smart-me Realtime API (Webhooks) allows you to subscribe to new data of a device. You can subscribe to a single device or to all devices of a user. When a device sends new data to the cloud, a webhook sends this data as a POST request to a reconfigured URL. More Information [here](https://www.smart-me.com/Description/api/realtimeapi.aspx)

Proto File

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

Proto File without BCL

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

To use our API Gold Partner, you must have the smart-me Gold Partner licence model. Further information about this licence model can be obtained from the sales department.

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

- GET /partner/ValuesInPastMultiple




Get visualization configuration

- Gets the visualization configuration for all folders of a user

- GET /partner/visualizationconfiguration/&#123;id&#125;




Update firmware 

- Update the Firmware (if available) for the given devices

- POST /UpdateFirmwarePartner




PartnerVisualization

- Gets the visualization configuration for all folders of a user

- GET /partner/visualizationconfiguration/&#123;id&#125;


## Examples

## API examples

### REST API Samples

This allows you to pick up any data sets that we provide. [https://api.smart-me.com/swagger/index.html](https://api.smart-me.com/swagger/index.html) 

HTML / Javascript (Show all devices with meter reading and last connection)

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

Python (Authentication possibilities)

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

API Client Library for .Net

To integrate smart-me API functionality into your .Net application you can use [this library](https://github.com/eCarUp/smartme-api-client-library-dotnet). It makes HTTP requests to the smart-me REST API. All HTTP request and response bodies are mapped to .Net classes.

## Realtime (Webhook) API Example

The smart-me Realtime API sends the data serialized with google protobuffer

Proto File

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

Proto File without BCL

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

### Parsing example

Example data

0A5A0A1209E9FCD03B8E9F834111B3D10C1622A22CA1120B08C0C9EAD3A98FE93710051A110A060100010800FF11333333331FAE3C411A110A060100020800FF1100000000000000001A110A060100010700FF11713D0AD7A3303840

![API – figure 5](/img/_en/interfaces-api/05.png)

Device ID (UUID / GUID)

UUID Data: 0xE9, 0xFC, 0xD0, 0x3B, 0x8E, 0x9F, 0x83, 0x41, 0xB3, 0xD1, 0x0C, 0x16, 0x22, 0xA2, 0x2C, 0xA1

GUID:  3bd0fce9-9f8e-4183-b3d1-0c1622a22ca1

![API – figure 6](/img/_en/interfaces-api/06.png)

Datetime (UTC)

The Field 1 contains the offset in ticks since 1970-01-01

Seconds since 1970-01-01:  15712284449788512 / 10000000  = 1571228444 (Unix time stamp UTC)

\-> 16.10.2019 12:20:44 (UTC)

![API – figure 7](/img/_en/interfaces-api/07.png)

Device values 

Field 1 contains the OBIS code.  Field 2 contains the value.

01-00-01-08-00-FF:  (1-0:1.8.0\*255): Active energy total import: 1879583.2 mWh = 1879.5832 Wh

![API – figure 8](/img/_en/interfaces-api/08.png)
