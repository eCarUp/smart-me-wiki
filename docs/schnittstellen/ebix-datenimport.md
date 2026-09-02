---
title: 'Ebix Datenimport'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me bietet die Möglichkeit eines automatischen Datenimports mit dem Ebix Format'
sidebar_label: 'Ebix Datenimport'
---
smart-me bietet die Möglichkeit eines automatischen Datenimports mit dem Ebix Format

### Voraussetzungen

Nur smart-me Goldpartner können den automatischen Datenimport nutzen. Weitere Infos zu diesem Lizenzmodell können über den Verkauf verlangt werden.

## Ebix (SDAT)

Die XML Dateien (Ebix) für den standardisierten Datenaustausch für den Strommarkt können in smart-me importiert werden.

### Unterstützte Schemas

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Daten Upload

Die Dateien können per FTP oder per FTPS (TLS) auf die smart-me FTP Server geladen werden:

Server: ftp.smart-me.com

Pfad: /Ebix/

Benutzername: "Email eines Unteraccounts des Partners"

Passwort: "Das zugehörige Passwort"

Die Dateigrösse für den Import ist auf 50 Megabyte beschränkt.

### Zuordnung zu einem Benutzeraccount

Sobald Ebix Dateien von einem Benutzer des Partner auf die Server geladen wurde, ist die Messpunkt ID unter "Konfiguration->Partner->Daten Import" ersichtlich:

![Ebix Datenimport – Abbildung 1](/img/schnittstellen-ebix-datenimport/01.jpg)

Der Messpunkt kann durch ein Klick auf editieren einem anderen Benutzer zugeordnet werden:

![Ebix Datenimport – Abbildung 2](/img/schnittstellen-ebix-datenimport/02.jpg)
