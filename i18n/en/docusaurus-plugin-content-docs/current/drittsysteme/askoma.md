---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat is a Swiss company that manufactures heating elements for water treatment and energy storage.'
sidebar_label: 'Askoma'
---
Askoheat is a Swiss company that manufactures heating elements for water treatment and energy storage.

The heating elements can be intelligently controlled via third-party systems such as smart-me AG and thus store surplus solar energy in e.g. hot water.



Supported products from Askoma:

- Askoheat+


![Askoma – figure 1](/img/_en/third-party-systems-askoma/01.png)

![Askoma – figure 2](/img/_en/third-party-systems-askoma/02.png)

### Prerequisite

- smart-me meter Telstar 80A or CT

- Professional license to activate the Modbus TCP and DNS service

- Beta Version of Askoheat [\[Download Beta\]](http://askoheat.local/beat%20update) until mid of September 2024. Afterwards it is included in the standard software.


### Configuration Askoheat+ and smart-me Telstar 80A / CT

Telstar 80A / CT:

- Activate Modbus TCP in the settings

- Activate DNS

- Select internal IP. The router must ensure that the IP does not change.

- Read out the IP via CMD and ping command to the displayed DNS address.


Settings on the Askoheat+:

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- Enter the IP address of Telstar

- Activate TCP master mode

- Select Smart-Me from the list

- Click on Start Connection

- RESULT should be measured values, which you can check every two seconds at the bottom of the Setup3 page




![Askoma – figure 3](/img/_en/third-party-systems-askoma/03.png)

### Contact

ASKOMA AG

Industriestrasse 1

CH-4922 Bützberg

Schweiz

Tel. +41 62 958 70 80

Support +41 62 958 70 99

Fax  +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)
