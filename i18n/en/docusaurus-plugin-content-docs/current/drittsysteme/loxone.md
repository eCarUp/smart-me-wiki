---
title: 'Loxone'
slug: '/drittsysteme/loxone'
description: 'Using Smart-me meters in Loxone'
sidebar_label: 'Loxone'
---
## Using Smart-me meters in Loxone

### Connection through Modbus

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)


[Modbus TCP](/schnittstellen/modbus-tcp) needs to be activated on the meter. Die IP of the meter needs to be added into the template

![Loxone – figure 1](/img/_en/third-party-systems-loxone/01.jpg)

### Connection through API - Basic Auth (Deprecated)

Will be removed after November 2026 (until v.1.0.2)

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation API](/schnittstellen/api)


In the template, in front of the URL of the API call, the username and password needs to be added. The username has to be set by smart-me.

### Connection through API - API-Keys (Recommended)

since version 1.0.3 available from 28.7.2025.

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation API](/schnittstellen/api)


First create an API key in the smart-me portal:

1.  \[API\] -> \[ApiKeys\] -> \[Create new\]

2.  Add Name and set needed claims


You can find the required claims (permissions) here: [Documentation API](/schnittstellen/api)

For the template, "device.readswitch" is enough



![Loxone – figure 2](/img/_en/third-party-systems-loxone/02.png)

Get DeviceID:

The deviceID can be grabbed through systemhealth. Alternativly it can be grabbed through the API.

Example with the same API-Key:

curl -X "GET" "https://api.smart-me.com/Devices" -H "accept: \*/\*" -H "Authorization: ApiKey n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu" 

![Loxone – figure 3](/img/_en/third-party-systems-loxone/03.png)

Virtual output command configuration:

- An API key, e.g., n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu, must be added to the Loxone template for the virtual output command.

- The Device ID must be added to the command as &lt;[meter.id](http://meter.id)\>
    z.B. 61c71d00-3d40-4963-745b2-7c6b0c512gf3

- The HTTP response must be saved in an HTML file. The file must be saved individually for each output.


user/common/smartme.html is the basis


Example with addition of name or serial number or ID:

user/common/smartme\_WohnungEG.html
user/common/smartme\_SN638595.html
user/common/smartme\_61c71d00-3d40-4963-745b2-7c6b0c512gf3.html


Note:  The file must be uniqe for every meter in the loxone system!

![Loxone – figure 4](/img/_en/third-party-systems-loxone/04.png)

![Loxone – figure 5](/img/_en/third-party-systems-loxone/05.png)

Configuring the virtual Input per device:

- In addition, the IP and Access data of the Loxone Miniserver must be stored in the virtual input.
    Reason: The virtual input from loxone does not offer the option of adjusting the HTTP request header, whereas the output does. This means that it must be adjusted so that the response to the request is stored on the Miniserver and read out with the virtual input.

    user/common/smartme\_WohnungEG.html
    user/common/smartme\_SN638595.html
    user/common/smartme\_61c71d00-3d40-4963-745b2-7c6b0c512gf3.html


The total URL will look like this:

[https://ServerUsername:ServerPassword@Server-IP-Address/user/common/smartme\_WohnungEG.html](https://ServerUsername:ServerPassword@server-ip-address/user/common/smartme_WohnungEG.html)

![Loxone – figure 6](/img/_en/third-party-systems-loxone/06.png)

## Integrate Loxone counters into smart-me cloud

- [Loxone Library (Loxone to smart-me)](https://library.loxone.com/detail/smart-me-cloud-1764/overview)


1.  Create an API key in the Smart-me portal with the claims: device.readwrite and user.readwrite

2.  Execute the following call (edit the fields before it (ApiKey & Name))
    With Power-Shell:
    curl -i -X 'POST' 'https://api.smart-me.com/Devices' -H 'accept: text/plain' -H 'Authorization: ApiKey &lt;apikey>' -H 'Content-Type: application/json-patch+json' -d '&#123;"activePower": 0, "counterReading": 0, "counterReadingExport": 0, "valueDate": "2025-07-08T08:15:55.026Z", "name": "Loxone Beispiel", "deviceEnergyType": 1&#125;'

    With Windows CMD (DOS):
    curl -i -X POST "https://api.smart-me.com/Devices" -H "accept: text/plain" -H "Authorization: ApiKey &lt;apikey> " -H "Content-Type: application/json" -d "&#123;\\"activePower\\": 0, \\"counterReading\\": 0, \\"counterReadingExport\\": 0, \\"valueDate\\": \\"2025-12-05T00:00:00.000Z\\", \\"name\\": \\"Loxone Beispiel\\", \\"deviceEnergyType\\": 1&#125;"

3.  Take the UUID of the meter from the response.
    Alternative 1: Get the UUID from System Health in the dashboard.
    Alternative 2: Use GET https://api.smart-me.com/Devices to obtain all IDs.

4.  This data must be entered in the Loxone Library.


In summary, a virtual meter was created that can then be used in Loxone.
