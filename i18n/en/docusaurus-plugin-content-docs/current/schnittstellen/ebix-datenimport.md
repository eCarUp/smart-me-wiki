---
title: 'Ebix Data Import'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offers the possibility of an automatic data import in the Ebix Format.'
sidebar_label: 'Ebix Data Import'
---
smart-me offers the possibility of an automatic data import in the Ebix Format.

### Requirements

Only [smart-me Gold Partner](https://web.smart-me.com/en/partner-2/) can use the automatic data import

## Ebix (SDAT)

The XML files (Ebix) for standardized data exchange for the electricity market can be imported into smart-me.

### Supported schemas

ValidatedMeteredData\_1p1.xsd

ValidatedMeteredData\_1p2.xsd

ValidatedMeteredData\_1p3.xsd

ValidatedMeteredData\_1p4.xsd

### Data upload

The files can be uploaded to the smart-me FTP server via FTP or via FTPS (TLS):

Server: ftp.smart-me.com

Path:  /Ebix/

Username: "Email of a subaccount of the partner"

Password: "The associated password"

The file size for import is limited to 50 megabytes.

### Assignment to a user account

As soon as Ebix files have been loaded onto the server by a user of the partner, the measuring point ID can be seen under "Configuration-> Partner-> Data Import". The measuring point can be assigned to another user by clicking on edit.
