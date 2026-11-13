---
title: 'Ebix Data Import'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offers automatic data import in the Ebix format'
sidebar_label: 'Ebix Data Import'
---
smart-me offers automatic data import in the Ebix format

### Requirements

Only smart-me Gold Partners can use the automatic data import. Further information about this licence model can be requested from Sales.

## Ebix (SDAT)

The XML files (Ebix) for standardised data exchange in the electricity market can be imported into smart-me.

### Supported Schemas

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Data Upload

The files can be uploaded to the smart-me FTP servers via FTP or FTPS (TLS):

Server: ftp.smart-me.com

Path: /Ebix/

Username: "Email of a sub-account of the partner"

Password: "The corresponding password"

The file size for the import is limited to 50 megabytes.

### Assignment to a User Account

As soon as Ebix files have been uploaded to the servers by a user of the partner, the metering point ID is visible under "Configuration->Partner->Data Import" ("Konfiguration->Partner->Daten Import"):

![Ebix Data Import – Figure 1](/img/schnittstellen-ebix-datenimport/01.jpg)

The metering point can be assigned to another user by clicking on edit (editieren):

![Ebix Data Import – Figure 2](/img/schnittstellen-ebix-datenimport/02.jpg)
