---
title: 'Ebix Data Import'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offers automatic data import in the Ebix format'
sidebar_label: 'Ebix Data Import'
---
smart-me offers automatic data import in the Ebix format

### Requirements

Only smart-me Gold Partners can use the automatic data import. You can ask Sales for more information about this licence model.

## Ebix (SDAT)

You can import Ebix XML files into smart-me. Ebix is the standard format for exchanging data in the electricity market.

### Supported schemas

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Data upload

You can upload the files to the smart-me FTP server via FTP or FTPS (TLS):

Server: ftp.smart-me.com

Path: /Ebix/

Username: "Email of a sub-account of the partner"

Password: "The corresponding password"

Files for import can be up to 50 megabytes.

### Assignment to a user account

Once a partner's user has uploaded Ebix files to the server, the metering point ID appears under "Configuration->Partner->Data Import" ("Konfiguration->Partner->Daten Import"):

![Ebix Data Import – Figure 1](/img/schnittstellen-ebix-datenimport/01.jpg)

To assign the metering point to another user, click edit (editieren):

![Ebix Data Import – Figure 2](/img/schnittstellen-ebix-datenimport/02.jpg)
